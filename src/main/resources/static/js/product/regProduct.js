//상세화면 js

document.addEventListener('DOMContentLoaded', function () {
    // 부모창 그리드에서 가져온 쿠폰 코드 값
    var modalCpnCode = $("#clickCouponCd", opener.document).val();

    // 메인그리드를 그리기 위한 사전 설정
    const containerCpnPd = document.getElementById('gridCpnPd');
    const providerCpnPd = new RealGrid.LocalDataProvider(false);
    const gridViewCpnPd = new RealGrid.GridView(containerCpnPd);

    gridViewCpnPd.setDataSource(providerCpnPd);
    gridViewCpnPd.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewCpnPd.displayOptions.fitStyle = "fill"; // 그리드 컬럼 너비 자동조정

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
            PRODUCT_NAME			:	$("#cpnDtlPdNm").val(),
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
                providerCpnPd.fillJsonData(gridData, { fillMode : "set"});
                gridPaging();
            } else {
                provider.clearRows(); // 조회 결과가 없을시 그리드 비우기
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
                PRODUCT_NAME			:	$("#cpnDtlPdNm").val(),
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
            var checkedRows = gridViewCpnPd.getCheckedRows();
            var rowDatas = [];
            for (var i in checkedRows) {
                var chkdata = providerCpnPd.getJsonRow(checkedRows[i]);
                rowDatas.push(chkdata);
            }
            var regData = [];
            for(var i in rowDatas) {
                regData.push(rowDatas[i].pdCode);
            }

            if(regData.length == 0) {
                alert("등록할 상품을 선택하십시오.")
                return;
            }

            for(var i in regData) {
                var regParam = {
                    cpnCode: modalCpnCode,
                    pdCode: regData[i]
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

});