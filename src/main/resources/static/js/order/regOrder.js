document.addEventListener('DOMContentLoaded', function () {
    // 상품그리드를 그리기 위한 사전 설정
    const container = document.getElementById('orderPdGrid');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    // 멤버그리드를 그리기 위한 사전 설정
    const containerMember = document.getElementById('orderMemberGrid');
    const providerMember = new RealGrid.LocalDataProvider(false);
    const gridViewMember = new RealGrid.GridView(containerMember);
    // 배송지그리드를 그리기 위한 사전 설정
    const containerDeli = document.getElementById('orderDeliGrid');
    const providerDeli = new RealGrid.LocalDataProvider(false);
    const gridViewDeli = new RealGrid.GridView(containerDeli);

    gridView.setDataSource(provider);
    gridViewMember.setDataSource(providerMember);
    gridViewDeli.setDataSource(providerDeli);
    gridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewMember.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewDeli.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정

    // 데이트피커 날짜 형식 지정
    $("#datepickerOrder").datepicker({
        dateFormat: "yy-mm-dd"
    });

    // 메인그리드 컬럼
    provider.setFields([
        {
            fieldName: "pdCode",
            dataType: "text",
        },
        {
            fieldName: "pdNm",
            dataType: "text",
        },
        {
            fieldName: "pdExt",
            dataType: "text",
        },
        {
            fieldName: "pdPrice",
            dataType: "text",
        },
        {
            fieldName: "deliType",
            dataType: "text",
        },
        {
            fieldName: "deliExt",
            dataType: "text",
        },
        {
            fieldName: "pdSeller",
            dataType: "text",
        },
        {
            fieldName: "pakgType",
            dataType: "text",
        },
        {
            fieldName: "salesUnit",
            dataType: "text",
        },
        {
            fieldName: "pdWeg",
            dataType: "text",
        },
        {
            fieldName: "pdSweet",
            dataType: "text",
        },
        {
            fieldName: "orgLoc",
            dataType: "text",
        },
        {
            fieldName: "alergInfo",
            dataType: "text",
        },
        {
            fieldName: "expDate",
            dataType: "text",
        },
        {
            fieldName: "extInfo",
            dataType: "text",
        },
        {
            fieldName: "regId",
            dataType: "text",
        },
        {
            fieldName: "regDate",
            dataType: "datetime",
            datetimeFormat: "yyyy.MM.dd"
        },
        {
            fieldName: "chgrId",
            dataType: "text",
        },
        {
            fieldName: "chgrDate",
            dataType: "datetime",
            datetimeFormat: "yyyy.MM.dd"
        },
    ]);

    gridView.setColumns([
        {
            name: "pdCode",
            fieldName: "pdCode",
            type: "data",
            width: "120",
            header: {
                text: "상품코드",
            },
        },
        {
            name: "pdNm",
            fieldName: "pdNm",
            type: "data",
            width: "120",
            header: {
                text: "상품이름",
            },
        },
        {
            name: "pdExt",
            fieldName: "pdExt",
            type: "data",
            width: "120",
            header: {
                text: "상품부가정보",
            },
        },
        {
            name: "pdPrice",
            fieldName: "pdPrice",
            type: "data",
            width: "120",
            header: {
                text: "상품가격",
            },
        },
        {
            name: "deliType",
            fieldName: "deliType",
            type: "data",
            width: "120",
            header: {
                text: "배송타입",
            },
        },
        {
            name: "deliExt",
            fieldName: "deliExt",
            type: "data",
            width: "120",
            header: {
                text: "배송부가정보",
            },
        },
        {
            name: "pdSeller",
            fieldName: "pdSeller",
            type: "data",
            width: "120",
            header: {
                text: "판매자",
            },
        },
        {
            name: "pakgType",
            fieldName: "pakgType",
            type: "data",
            width: "120",
            header: {
                text: "포장타입",
            },
        },
        {
            name: "pakgExt",
            fieldName: "pakgExt",
            type: "data",
            width: "120",
            header: {
                text: "포장부가정보",
            },
        },
        {
            name: "salesUnit",
            fieldName: "salesUnit",
            type: "data",
            width: "120",
            header: {
                text: "판매단위",
            },
        },
        {
            name: "pdWeg",
            fieldName: "pdWeg",
            type: "data",
            width: "120",
            header: {
                text: "상품무게",
            },
        },
        {
            name: "pdSweet",
            fieldName: "pdSweet",
            type: "data",
            width: "120",
            header: {
                text: "당도",
            },
        },
        {
            name: "orgLoc",
            fieldName: "orgLoc",
            type: "data",
            width: "120",
            header: {
                text: "원산지",
            },
        },
        {
            name: "alergInfo",
            fieldName: "alergInfo",
            type: "data",
            width: "120",
            header: {
                text: "알러지정보",
            },
        },
        {
            name: "expDate",
            fieldName: "expDate",
            type: "data",
            width: "120",
            header: {
                text: "유통기한정보",
            },
        },
        {
            name: "extInfo",
            fieldName: "extInfo",
            type: "data",
            width: "120",
            header: {
                text: "상품기타정보",
            },
        },
        {
            name: "regId",
            fieldName: "regId",
            type: "data",
            width: "120",
            header: {
                text: "등록자",
            },
        },
        {
            name: "regDate",
            fieldName: "regDate",
            type: "datetime",
            width: "120",
            header: {
                text: "등록일시",
            },
        },
        {
            name: "chgrId",
            fieldName: "chgrId",
            type: "data",
            width: "120",
            header: {
                text: "변경자",
            },
        },
        {
            name: "chgrDate",
            fieldName: "chgrDate",
            type: "datetime",
            width: "120",
            header: {
                text: "변경일시",
            },
        },
    ]);

    // 멤버그리드 컬럼
    providerMember.setFields([
        {
            fieldName: "chgrDate",
            dataType: "datetime",
            datetimeFormat: "yyyy.MM.dd"
        },
        {
            fieldName: "chgrId",
            dataType: "text",
        },
        {
            fieldName: "custAddrDtl",
            dataType: "text",
        },
        {
            fieldName: "custBirth",
            dataType: "text",
        },
        {
            fieldName: "custCode",
            dataType: "text",
        },
        {
            fieldName: "custEmail",
            dataType: "text",
        },
        {
            fieldName: "custNm",
            dataType: "text",
        },
        {
            fieldName: "custTel",
            dataType: "text",
        },
        {
            fieldName: "regDate",
            dataType: "datetime",
            datetimeFormat: "yyyy.MM.dd"
        },
        {
            fieldName: "regId",
            dataType: "text",
        },
    ]);

    gridViewMember.setColumns([
        {
            name: "chgrDate",
            fieldName: "chgrDate",
            type: "datetime",
            width: "120",
            header: {
                text: "수정일시",
            },
        },
        {
            name: "chgrId",
            fieldName: "chgrId",
            type: "data",
            width: "120",
            header: {
                text: "수정자아이디",
            },
        },
        {
            name: "custAddrDtl",
            fieldName: "custAddrDtl",
            type: "data",
            width: "120",
            header: {
                text: "고객상세주소",
            },
        },
        {
            name: "custBirth",
            fieldName: "custBirth",
            type: "data",
            width: "120",
            header: {
                text: "고객생년월일",
            },
        },
        {
            name: "custCode",
            fieldName: "custCode",
            type: "data",
            width: "120",
            header: {
                text: "고객코드",
            },
        },
        {
            name: "custEmail",
            fieldName: "custEmail",
            type: "data",
            width: "120",
            header: {
                text: "고객이메일",
            },
        },
        {
            name: "custNm",
            fieldName: "custNm",
            type: "data",
            width: "120",
            header: {
                text: "고객이름",
            },
        },
        {
            name: "custTel",
            fieldName: "custTel",
            type: "data",
            width: "120",
            header: {
                text: "고객전화번호",
            },
        },
        {
            name: "regDate",
            fieldName: "regDate",
            type: "datetime",
            width: "120",
            header: {
                text: "등록일시",
            },
        },
        {
            name: "regId",
            fieldName: "regId",
            type: "data",
            width: "120",
            header: {
                text: "등록자아이디",
            },
        },
    ]);
    // 배송지그리드 컬럼
    providerDeli.setFields([
        {
            fieldName: "deliLocCode",
            dataType: "text",
        },
        {
            fieldName: "custCode",
            dataType: "text",
        },
        {
            fieldName: "siteCode",
            dataType: "text",
        },
        {
            fieldName: "deliLocNm",
            dataType: "text",
        },
        {
            fieldName: "siteDtl",
            dataType: "text",
        },
        {
            fieldName: "regId",
            dataType: "text",
        },
        {
            fieldName: "regDate",
            dataType: "datetime",
            datetimeFormat: "yyyy.MM.dd"
        },
        {
            fieldName: "chgrId",
            dataType: "text",
        },
        {
            fieldName: "chgrDate",
            dataType: "datetime",
            datetimeFormat: "yyyy.MM.dd"
        },
    ]);

    gridViewDeli.setColumns([
        {
            name: "deliLocCode",
            fieldName: "deliLocCode",
            type: "data",
            width: "120",
            header: {
                text: "배송지코드",
            },
        },
        {
            name: "custCode",
            fieldName: "custCode",
            type: "data",
            width: "120",
            header: {
                text: "고객코드",
            },
        },
        {
            name: "siteCode",
            fieldName: "siteCode",
            type: "data",
            width: "120",
            header: {
                text: "주소코드",
            },
        },
        {
            name: "deliLocNm",
            fieldName: "deliLocNm",
            type: "data",
            width: "120",
            header: {
                text: "배송지명",
            },
        },
        {
            name: "siteDtl",
            fieldName: "siteDtl",
            type: "data",
            width: "120",
            header: {
                text: "상세주소",
            },
        },
        {
            name: "regId",
            fieldName: "regId",
            type: "data",
            width: "120",
            header: {
                text: "등록자아이디",
            },
        },
        {
            name: "regDate",
            fieldName: "regDate",
            type: "datetime",
            width: "120",
            header: {
                text: "등록일시",
            },
        },
        {
            name: "chgrId",
            fieldName: "chgrId",
            type: "data",
            width: "120",
            header: {
                text: "수정자아이디",
            },
        },
        {
            name: "chgrDate",
            fieldName: "chgrDate",
            type: "datetime",
            width: "120",
            header: {
                text: "수정일시",
            },
        },
    ]);

    var totalCount = 0;
    var countData = 0;
    var pagingIndex = 0;
    var pagingRows = 50;

    var totalCountMember = 0;
    var countDataMember = 0;
    var pagingIndexMember = 0;
    var pagingRowsMember = 50;

    var totalCountDeli = 0;
    var countDataDeli = 0;
    var pagingIndexDeli = 0;
    var pagingRowsDeli = 50;

    // 이름 입력하고 엔터키 눌렀을시 조회되게
    $('#orderPdName').keypress(function(event) {
        if(event.keyCode == 13){
            $("#orderOdSearch").trigger("click");
        }
    });
    // 멤버이름 입력하고 엔터키 눌렀을시 조회되게
    $('#orderMemberName').keypress(function(event) {
        if(event.keyCode == 13){
            $("#orderMemberSearch").trigger("click");
        }
    });
    // 고객코드 입력하고 엔터키 눌렀을시 조회되게
    $('#orderDeliCustCode').keypress(function(event) {
        if(event.keyCode == 13){
            $("#orderDeliSearch").trigger("click");
        }
    });

    // 상품정보조회 조회버튼 클릭시
    $("#orderOdSearch").click(function(){
        provider.clearRows(); // 메인 그리드 비우기
        pagingIndex = 0;
        pagingRows = 50;
        var param = {
            PRODUCT_NAME			:	$("#orderPdName").val(),
            PAKG_TYPE		:	"",
            pagingIndex		:	pagingIndex,
            pagingRows		:	pagingRows
        };
        ajax("/product/showProduct", param, function(returnData){
            totalCount = returnData.codeList.totalElements;
            countData = returnData.codeList.size;
            // 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
            if(countData > 0) {
                // 만약 이번 조회된 카운트값이 pagingRows 값과 같다면 다음 페이지가 있는것이므로 pagingIndex 증가
                if(countData == pagingRows) {
                    pagingIndex++;
                }
                var gridData = returnData.codeList.content;
                provider.fillJsonData(gridData, { fillMode : "set"});
                gridPaging();
            } else {
                provider.clearRows(); // 조회 결과가 없을시 그리드 비우기
            }
        })
    });

    // 스크롤 가장 아래로 내렸을때 추가로 조회
    function gridPaging(){
        gridView.onScrollToBottom = function() {
            // pagingIndex가 1이라면 카운트값이 pagingRows 보다 적은것이므로 return 처리
            if(pagingIndex == 0) {
                return;
            }
            var param = {
                PRODUCT_NAME			:	$("#orderPdName").val(),
                PAKG_TYPE		:	"",
                pagingIndex		:	pagingIndex,
                pagingRows		:	pagingRows
            };
            ajax("/product/showProduct", param, function(returnData){
                totalCount = returnData.codeList.totalElements;
                countData = returnData.codeList.size;
                // 스크롤 시 추가 데이터가 있을때만 show
                if(countData > 0) {
                    var gridData = returnData.codeList.content;
                    pagingIndex++;
                    provider.fillJsonData(gridData, { fillMode : "append", noStates: true});
                    gridView.refresh();
                } else {
                    provider.clearRows(); // 조회 결과가 없을시 그리드 비우기
                }
            })
        }
    }

    // 고객정보조회 조회버튼 클릭시
    $("#orderMemberSearch").click(function(){
        providerMember.clearRows(); // 서브 그리드 비우기
        pagingIndexMember = 0;
        pagingRowsMember = 50;
        var param = {
            CUST_NM		:	$("#orderMemberName").val(),
            pagingIndex		:	pagingIndexMember,
            pagingRows		:	pagingRowsMember
        };
        ajax("/member/showMember", param, function(returnData){
            totalCountMember = returnData.codeList.totalElements;
            countDataMember = returnData.codeList.size;
            // 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
            if(countDataMember > 0){
                // 만약 이번 조회된 카운트값이 pagingRows 값과 같다면 다음 페이지가 있는것이므로 pagingIndex 증가
                if(countDataMember == pagingRowsMember) {
                    pagingIndexMember++;
                }
                var gridData = returnData.codeList.content;
                providerMember.fillJsonData(gridData, { fillMode : "set"});
                gridPagingMember();
            } else {
                providerMember.clearRows(); // 조회 결과가 없을시 그리드 비우기
            }
        })
    });

    // 스크롤 가장 아래로 내렸을때 추가로 조회
    function gridPagingMember(){
        gridViewMember.onScrollToBottom = function() {
            // pagingIndex가 1이라면 카운트값이 pagingRows 보다 적은것이므로 return 처리
            if(pagingIndexMember == 0) {
                return;
            }
            var param = {
                CUST_NM		:	$("#orderMemberName").val(),
                pagingIndex		:	pagingIndexMember,
                pagingRows		:	pagingRowsMember
            };
            ajax("/member/showMember", param, function(returnData){
                totalCountMember = returnData.codeList.totalElements;
                countDataMember = returnData.codeList.size;
                // 스크롤 시 추가 데이터가 있을때만 show
                if(countDataMember > 0) {
                    var gridData = returnData.codeList.content;
                    pagingIndexMember++;
                    providerMember.fillJsonData(gridData, { fillMode : "append", noStates: true});
                    gridViewMember.refresh();
                } else {
                    providerMember.clearRows(); // 조회 결과가 없을시 그리드 비우기
                }
            })
        }
    }
    // 배송지정보조회 조회버튼 클릭시
    $("#orderDeliSearch").click(function(){
        providerDeli.clearRows(); // 서브 그리드 비우기
        pagingIndexDeli = 0;
        pagingRowsDeli = 50;
        var param = {
            CUST_CODE		:	$("#orderDeliCustCode").val(),
            pagingIndex		:	pagingIndexDeli,
            pagingRows		:	pagingRowsDeli
        };
        ajax("/order/showDeliInfo", param, function(returnData){
            totalCountDeli = returnData.codeList.totalElements;
            countDataDeli = returnData.codeList.size;
            // 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
            if(countDataDeli > 0){
                // 만약 이번 조회된 카운트값이 pagingRows 값과 같다면 다음 페이지가 있는것이므로 pagingIndex 증가
                if(countDataDeli == pagingRowsDeli) {
                    pagingIndexDeli++;
                }
                var gridData = returnData.codeList.content;
                providerDeli.fillJsonData(gridData, { fillMode : "set"});
                gridPagingDeli();
            } else {
                providerDeli.clearRows(); // 조회 결과가 없을시 그리드 비우기
            }
        })
    });

    // 스크롤 가장 아래로 내렸을때 추가로 조회
    function gridPagingDeli(){
        gridViewDeli.onScrollToBottom = function() {
            // pagingIndex가 1이라면 카운트값이 pagingRows 보다 적은것이므로 return 처리
            if(pagingIndexDeli == 0) {
                return;
            }
            var param = {
                CUST_CODE		:	$("#orderDeliCustCode").val(),
                pagingIndex		:	pagingIndexDeli,
                pagingRows		:	pagingRowsDeli
            };
            ajax("/order/showDeliInfo", param, function(returnData){
                totalCountDeli = returnData.codeList.totalElements;
                countDataDeli = returnData.codeList.size;
                // 스크롤 시 추가 데이터가 있을때만 show
                if(countDataDeli > 0) {
                    var gridData = returnData.codeList.content;
                    pagingIndexDeli++;
                    providerDeli.fillJsonData(gridData, { fillMode : "append", noStates: true});
                    gridViewDeli.refresh();
                } else {
                    providerDeli.clearRows(); // 조회 결과가 없을시 그리드 비우기
                }
            })
        }
    }

    $("#regOrder").click(function(){
        var param = {

        }
        ajax("/order/addOrder", param, function(returnData){
            console.log(returnData)
        })
    });

    $(".toggleOrderState").click(function(){
        if($('.orderStateMenu').is(':visible')){
            $('.orderStateMenu').hide();
            $('.itemOrderState').hide();
        } else {
            $('.orderStateMenu').show();
            $('.itemOrderState').show();
        }
    });
    $(".toggleOrderPayState").click(function(){
        if($('.payStateMenu').is(':visible')){
            $('.payStateMenu').hide();
            $('.itemOrderPayState').hide();
        } else {
            $('.payStateMenu').show();
            $('.itemOrderPayState').show();
        }
    });
    $(".toggleRevePlace").click(function(){
        if($('.revePlaceMenu').is(':visible')){
            $('.revePlaceMenu').hide();
            $('.itemRevePlace').hide();
        } else {
            $('.revePlaceMenu').show();
            $('.itemRevePlace').show();
        }
    });

    // 드롭다운 리스트 밖으로 마우스 옮겼을때 드롭다운 해제되도록 설정
    $(".toggleOrderState").mouseleave(function(){
        $(".orderStateMenu").mouseover(function(){
            $('.orderStateMenu').show();
            $('.itemOrderState').show();
        });
        $(".orderStateMenu").mouseleave(function(){
            $('.orderStateMenu').hide();
            $('.itemOrderState').hide();
        })
    });
    // 드롭다운 리스트 밖으로 마우스 옮겼을때 드롭다운 해제되도록 설정
    $(".toggleOrderPayState").mouseleave(function(){
        $(".payStateMenu").mouseover(function(){
            $('.payStateMenu').show();
            $('.itemOrderPayState').show();
        });
        $(".payStateMenu").mouseleave(function(){
            $('.payStateMenu').hide();
            $('.itemOrderPayState').hide();
        })
    });
    $(".toggleRevePlace").mouseleave(function(){
        $(".revePlaceMenu").mouseover(function(){
            $('.revePlaceMenu').show();
            $('.itemRevePlace').show();
        });
        $(".revePlaceMenu").mouseleave(function(){
            $('.revePlaceMenu').hide();
            $('.itemRevePlace').hide();
        })
    });

    $("#dropdownOrderState").on('click', ".itemOrderState", function(){
        $('#orderStateValue').text( $(this).text() ).val( $(this).val() );
        if($('.itemOrderState').is(':visible')){
            $('.orderStateMenu').hide();
            $('.itemOrderState').hide();
        } else {
            $('.orderStateMenu').show();
            $('.itemOrderState').show();
        }
    })
    $("#dropdownOrderPayState").on('click', ".itemOrderPayState", function(){
        $('#orderPayStateValue').text( $(this).text() ).val( $(this).val() );
        if($('.itemOrderPayState').is(':visible')){
            $('.payStateMenu').hide();
            $('.itemOrderPayState').hide();
        } else {
            $('.payStateMenu').show();
            $('.itemOrderPayState').show();
        }
    })
    $("#dropdownRevePlace").on('click', ".itemRevePlace", function(){
        $('#revePlaceValue').text( $(this).text() ).val( $(this).val() );
        if($('.itemRevePlace').is(':visible')){
            $('.revePlaceMenu').hide();
            $('.itemRevePlace').hide();
        } else {
            $('.revePlaceMenu').show();
            $('.itemRevePlace').show();
        }
    })

    var dropdownParam = {
        COM_CD_GRP_ID		:	"OD00001"
    };
    // common에 있는 공통 펑션으로 드롭다운 구성
    setSelboxOrderState("dropdownOrderState", "/common/showCode", dropdownParam);

    function setSelboxOrderState(objectId, url, param) {
        var tagId = "#" + objectId;
        ajax(url, param, function(returnData){
            var codeList = returnData.codeList;
            for(var i = 0; i < codeList.length; i++) {
                $(tagId).append("<li class = 'dropdown-item itemOrderState' value='" + codeList[i].comCdNm + "'>" + codeList[i].comCdNm + "</li>")
            }
        })
    }

    // 멤버조회 추가 버튼 클릭시
    $("#orderMemberAdd").click(function(){
        var checkedRowMember = gridViewMember.getCheckedRows();
        var chkDataMember = providerMember.getJsonRow(checkedRowMember[0]).custCode;
        if(checkedRowMember.length != 1) {
            alert("하나만 체크하십시오.")
            return;
        }
        $("#orderMemberCode").val(chkDataMember);
    });
    // 배송지조회 추가 버튼 클릭시
    $("#orderDeliAdd").click(function(){
        var checkedRowDeli = gridViewDeli.getCheckedRows();
        var chkDataDeli = providerDeli.getJsonRow(checkedRowDeli[0]).deliLocCode;
        if(checkedRowDeli.length != 1) {
            alert("하나만 체크하십시오.")
            return;
        }
        $("#orderDeliLocCode").val(chkDataDeli);
    });

});