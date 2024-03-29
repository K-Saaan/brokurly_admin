//상세화면 js

document.addEventListener('DOMContentLoaded', function () {
    // 부모창 그리드에서 가져온 쿠폰 코드 값
    var modalCpnCode = $("#clickCouponCd", opener.document).val();

    // 메인그리드를 그리기 위한 사전 설정
    const containerCpnPd = document.getElementById('gridCpnPd');
    const providerCpnPd = new RealGrid.LocalDataProvider(false);
    const gridViewCpnPd = new RealGrid.GridView(containerCpnPd);
    // 서브그리드를 그리기 위한 사전 설정
    const containerCpnPdWish = document.getElementById('gridCpnPdWish');
    const providerCpnPdWish = new RealGrid.LocalDataProvider(false);
    const gridViewCpnPdWish = new RealGrid.GridView(containerCpnPdWish);

    gridViewCpnPd.setDataSource(providerCpnPd);
    gridViewCpnPd.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewCpnPd.displayOptions.fitStyle = "fill"; // 그리드 컬럼 너비 자동조정

    gridViewCpnPdWish.setDataSource(providerCpnPdWish);
    gridViewCpnPdWish.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewCpnPdWish.displayOptions.fitStyle = "fill"; // 그리드 컬럼 너비 자동조정

    var realPath = location.href; // http://localhost:8080/member/show 같은 full URL
    var urlIndex = realPath.lastIndexOf("/");
    var usingUrl = realPath.substr(0, urlIndex); // full URL에서 http://localhost:8080/member 까지만 자른 URL

    // 메인그리드 컬럼
    providerCpnPd.setFields([
        {
            fieldName: "pdCode",
            dataType: "text",
        },
        {
            fieldName: "pdNm",
            dataType: "text",
        },
    ]);

    gridViewCpnPd.setColumns([
        {
            name: "pdCode",
            fieldName: "pdCode",
            type: "data",
            width: "100",
            header: {
                text: "상품코드",
            },
        },
        {
            name: "pdNm",
            fieldName: "pdNm",
            type: "data",
            width: "300",
            styleName: "left-align",
            header: {
                text: "상품이름",
            },
        },
    ]);
    // 서브그리드 컬럼
    providerCpnPdWish.setFields([
        {
            fieldName: "pdCode",
            dataType: "text",
        },
        {
            fieldName: "pdNm",
            dataType: "text",
        },
    ]);

    gridViewCpnPdWish.setColumns([
        {
            name: "pdCode",
            fieldName: "pdCode",
            type: "data",
            width: "100",
            header: {
                text: "상품코드",
            },
        },
        {
            name: "pdNm",
            fieldName: "pdNm",
            type: "data",
            width: "300",
            styleName: "left-align",
            header: {
                text: "상품이름",
            },
        },
    ]);

    var totalCount = 0;
    var countData = 0;
    var pagingIndex = 0;
    var pagingRows = 50;

    // 이름 입력하고 엔터키 눌렀을시 조회되게
    $('#cpnDtlPdNm').keypress(function(event) {
        if(event.keyCode == 13){
            $("#cpnDtlPdSearch").trigger("click");
        }
    });

    $("#cpnDtlPdSearch").click(function(){
        providerCpnPd.clearRows(); // 메인 그리드 비우기
        pagingIndex = 0;
        pagingRows = 50;
        var param = {
            PRODUCT_NAME			:	nullChk( $("#cpnDtlPdNm").val() ),
            BIG_CATE		:	nullChk( $("#pdCategory").val() ),
            SMALL_CATE		:	nullChk( $("#pdCategory2").val() ),
            pagingIndex		:	pagingIndex,
            pagingRows		:	pagingRows
        };

        ajax("/product/showProductWithCate", param, function(returnData){
            totalCount = returnData.codeList.totalElements;
            countData = returnData.codeList.size;
            // 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
            if(countData > 0) {
                // 만약 이번 조회된 카운트값이 pagingRows 값과 같다면 다음 페이지가 있는것이므로 pagingIndex 증가
                if(countData == pagingRows) {
                    pagingIndex++;
                }
                var gridData = returnData.codeList.content;
                providerCpnPd.fillJsonData(gridData, { fillMode : "set"});
                gridPaging();
            } else {
                providerCpnPd.clearRows(); // 조회 결과가 없을시 그리드 비우기
            }
        })
    });

    // 스크롤 가장 아래로 내렸을때 추가로 조회
    function gridPaging(){
        gridViewCpnPd.onScrollToBottom = function() {
            // pagingIndex가 1이라면 카운트값이 pagingRows 보다 적은것이므로 return 처리
            if(pagingIndex == 0) {
                return;
            }
            var param = {
                PRODUCT_NAME			:	nullChk( $("#cpnDtlPdNm").val() ),
                BIG_CATE		:	nullChk( $("#pdCategory").val() ),
                SMALL_CATE		:	nullChk( $("#pdCategory2").val() ),
                pagingIndex		:	pagingIndex,
                pagingRows		:	pagingRows
            };
            ajax("/product/showProductWithCate", param, function(returnData){
                totalCount = returnData.codeList.totalElements;
                countData = returnData.codeList.size;
                // 스크롤 시 추가 데이터가 있을때만 show
                if(countData > 0) {
                    var gridData = returnData.codeList.content;
                    pagingIndex++;
                    providerCpnPd.fillJsonData(gridData, { fillMode : "append", noStates: true});
                    gridViewCpnPd.refresh();
                } else {
                    providerCpnPd.clearRows(); // 조회 결과가 없을시 그리드 비우기
                }
            })
        }
    }

    // 등록 버튼 클릭시
    $("#regCpnPd").click(function(){
        var reply = confirm("등록하시겠습니까?");
        if(reply) {
            var checkedRowsReg = gridViewCpnPdWish.getCheckedRows();
            var rowDatasReg = [];
            for (var i in checkedRowsReg) {
                var chkdataReg = providerCpnPdWish.getJsonRow(checkedRowsReg[i]);
                rowDatasReg.push(chkdataReg);
            }
            var regDataReg = [];
            for(var i in rowDatasReg) {
                regDataReg.push(rowDatasReg[i].pdCode);
            }

            if(regDataReg.length == 0) {
                alert("등록할 상품을 선택하십시오.")
                return;
            }

            for(var i in regDataReg) {
                var regParam = {
                    cpnCode: modalCpnCode,
                    pdCode: regDataReg[i]
                }
                ajax("/product/regCpnProduct", regParam, function(returnData){
                    if(returnData == 1) {
                        alert("등록이 완료됐습니다.");
                        $("#couponSearch").trigger("click");
                        window.close();
                    } else {
                        alert("delete fail!");
                    }
                })
            }
        }
    });

    // 추가 버튼 클릭시
    $("#regWishPd").click(function(){
        var checkedRows = gridViewCpnPd.getCheckedRows();
        var rowDatas = [];
        for (var i in checkedRows) {
            var chkdata = providerCpnPd.getJsonRow(checkedRows[i]);
            rowDatas.push(chkdata);
        }
        providerCpnPdWish.fillJsonData(rowDatas, { fillMode : "insert"});
        var regData = [];
        for(var i in rowDatas) {
            regData.push(rowDatas[i].pdCode);
        }
    });

    // 초기화 버튼 클릭시
    $("#resetWishPd").click(function(){
        providerCpnPdWish.clearRows(); // 서브 그리드 비우기
    });

    // 삭제 버튼 클릭시
    $("#removeWishPd").click(function(){
        var checkedRowsWish = gridViewCpnPdWish.getCheckedRows();
        providerCpnPdWish.removeRows(checkedRowsWish);
    });

    // 대분류 드롭다운 값 선택시 선택한 값 화면에 보여주고 value값도 심어주기.
    // change event까지 발생하여 소분류 드롭다운 연동되게 구성
    $("#dropdownPdCate").on('click', ".pdCateItem", function(){
        $('#pdCategory').text( $(this).text() ).val( $(this).val() );
        $("#dropdownPdCate").trigger("change");
        if($('.pdCateItem').is(':visible')){
            $('.pdCateMenu').hide();
            $('.pdCateItem').hide();
        } else {
            $('.pdCateMenu').show();
            $('.pdCateItem').show();
        }
    })
    // 소분류 드롭다운 값 선택시 실리게 하는 동작
    $("#dropdownPdCate2").on('click', ".pdCateItem2", function(){
        $('#pdCategory2').text( $(this).text() ).val( $(this).val() );
        if($('.pdCateItem2').is(':visible')){
            $('.pdCateMenu2').hide();
            $('.pdCateItem2').hide();
        } else {
            $('.pdCateMenu2').show();
            $('.pdCateItem2').show();
        }
    })

    $("#dropdownPdCate").change(function () {
        // 대분류 선택이 바뀌면 소분류는 초기화
        $('#pdCategory2').text("").val("");
        // 대분류의 선택 값을 파라미터로 가져와서 소분류 드롭다운 구성
        var dropdownParam2 = {
            CATE_FLAG   :   "TWO",
            UPPER_CATE_CODE     :     $("#pdCategory").val()
        };
        setSelboxPdCate2("dropdownPdCate2", "/product/showCategory", dropdownParam2);
    })
    // 대분류와 소분류의 드롭다운을 구분하기 위한 요소
    var dropdownParam = {
        CATE_FLAG   :   "ONE"
    };
    var dropdownParam2 = {
        CATE_FLAG   :   "TWO",
        UPPER_CATE_CODE     :     $("#pdCategory").val()
    };
    // common에 있는 공통 펑션으로 드롭다운 구성
    setSelboxPdCate("dropdownPdCate", "/product/showCategory", dropdownParam);
    setSelboxPdCate2("dropdownPdCate2", "/product/showCategory", dropdownParam2);

    $(".pdCateToggle").click(function(){
        if($('.pdCateMenu').is(':visible')){
            $('.pdCateMenu').hide();
            $('.pdCateItem').hide();
        } else {
            $('.pdCateMenu').show();
            $('.pdCateItem').show();
        }
    });
    $(".pdCateToggle2").click(function(){
        if($('.pdCateMenu2').is(':visible')){
            $('.pdCateMenu2').hide();
            $('.pdCateItem2').hide();
        } else {
            $('.pdCateMenu2').show();
            $('.pdCateItem2').show();
        }
    });
    // 드롭다운 리스트 밖으로 마우스 옮겼을때 드롭다운 해제되도록 설정
    $(".pdCateToggle").mouseleave(function(){
        $(".pdCateMenu").mouseover(function(){
            $('.pdCateMenu').show();
            $('.pdCateItem').show();
        });
        $(".pdCateMenu").mouseleave(function(){
            $('.pdCateMenu').hide();
            $('.pdCateItem').hide();
        })
    });
    $(".pdCateToggle2").mouseleave(function(){
        $(".pdCateMenu2").mouseover(function(){
            $('.pdCateMenu2').show();
            $('.pdCateItem2').show();
        });
        $(".pdCateMenu2").mouseleave(function(){
            $('.pdCateMenu2').hide();
            $('.pdCateItem2').hide();
        })
    });

    // 드롭다운 공통 구성 함수
    function setSelboxPdCate(objectId, url, param) {
        var tagId = "#" + objectId;
        ajax(url, param, function(returnData){
            var codeList = returnData.codeList;
            for(var i = 0; i < codeList.length; i++) {
                $(tagId).append("<li class = 'dropdown-item pdCateItem' value='" + codeList[i].cateCode + "'>" + codeList[i].cateNm + "</li>")
            }
        })
    }
    function setSelboxPdCate2(objectId, url, param) {
        var tagId = "#" + objectId;
        $(tagId +" *").remove();
        $(tagId).append("<li class='dropdown-item pdCateItem2' value=''>선택하세요</li>")
        ajax(url, param, function(returnData){
            var codeList = returnData.codeList;
            for(var i = 0; i < codeList.length; i++) {
                $(tagId).append("<li class = 'dropdown-item pdCateItem2' value='" + codeList[i].cateCode + "'>" + codeList[i].cateNm + "</li>")
            }
        })
    }

});