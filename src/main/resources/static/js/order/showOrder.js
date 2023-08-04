document.addEventListener('DOMContentLoaded', function () {
    // 메인그리드를 그리기 위한 사전 설정
    const container = document.getElementById('realgridOrder');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    // 서브그리드를 그리기 위한 사전 설정
    const subcontainer = document.getElementById('subgridOrder');
    const subprovider = new RealGrid.LocalDataProvider(false);
    const subgridView = new RealGrid.GridView(subcontainer);

    gridView.setDataSource(provider);
    subgridView.setDataSource(subprovider);
    gridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    subgridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정

    var realPath = location.href; // http://localhost:8080/member/show 같은 full URL
    var urlIndex = realPath.lastIndexOf("/");
    var usingUrl = realPath.substr(0, urlIndex); // full URL에서 http://localhost:8080/member 까지만 자른 URL

    // 메인그리드 컬럼
    provider.setFields([
        {
            fieldName: "odCode",
            dataType: "text",
        },
        {
            fieldName: "custCode",
            dataType: "text",
        },
        {
            fieldName: "odDate",
            dataType: "text",
        },
        {
            fieldName: "odState",
            dataType: "text",
        },
        {
            fieldName: "payState",
            dataType: "text",
        },
        {
            fieldName: "deliLocCode",
            dataType: "text",
        },
        {
            fieldName: "reveNm",
            dataType: "text",
        },
        {
            fieldName: "reveTelno",
            dataType: "text",
        },
        {
            fieldName: "revePlace",
            dataType: "text",
        },
        {
            fieldName: "revePlaceDtl",
            dataType: "text",
        },
        {
            fieldName: "deliComMsg",
            dataType: "text",
        },
        {
            fieldName: "totPayAmt",
            dataType: "number",
        },
        {
            fieldName: "totOdAmt",
            dataType: "number",
        },
        {
            fieldName: "cpnDiscAmt",
            dataType: "number",
        },
        {
            fieldName: "pdDiscAmt",
            dataType: "number",
        },
        {
            fieldName: "usedReserveAmt",
            dataType: "number",
        },
        {
            fieldName: "totDiscAmt",
            dataType: "number",
        },
        {
            fieldName: "deliPrice",
            dataType: "number",
        },
        {
            fieldName: "tobeReserve",
            dataType: "number",
        },
        {
            fieldName: "reserveYn",
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
            name: "odCode",
            fieldName: "odCode",
            type: "data",
            width: "120",
            header: {
                text: "주문코드",
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
            name: "odDate",
            fieldName: "odDate",
            type: "data",
            width: "120",
            header: {
                text: "주문날짜",
            },
        },
        {
            name: "odState",
            fieldName: "odState",
            type: "data",
            width: "120",
            header: {
                text: "주문상태",
            },
        },
        {
            name: "payState",
            fieldName: "payState",
            type: "data",
            width: "120",
            header: {
                text: "납부상태",
            },
        },
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
            name: "reveNm",
            fieldName: "reveNm",
            type: "data",
            width: "120",
            header: {
                text: "수령인",
            },
        },
        {
            name: "reveTelno",
            fieldName: "reveTelno",
            type: "data",
            width: "120",
            header: {
                text: "수령인 전화번호",
            },
        },
        {
            name: "revePlace",
            fieldName: "revePlace",
            type: "data",
            width: "120",
            header: {
                text: "수령장소",
            },
        },
        {
            name: "revePlaceDtl",
            fieldName: "revePlaceDtl",
            type: "data",
            width: "120",
            header: {
                text: "수령장소상세정보",
            },
        },
        {
            name: "deliComMsg",
            fieldName: "deliComMsg",
            type: "data",
            width: "120",
            header: {
                text: "배송완료메시지",
            },
        },
        {
            name: "totPayAmt",
            fieldName: "totPayAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "총결제금액",
            },
        },
        {
            name: "totOdAmt",
            fieldName: "totOdAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "총주문금액",
            },
        },
        {
            name: "cpnDiscAmt",
            fieldName: "cpnDiscAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "쿠폰할인금액",
            },
        },
        {
            name: "pdDiscAmt",
            fieldName: "pdDiscAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "상품할인금액",
            },
        },
        {
            name: "usedReserveAmt",
            fieldName: "usedReserveAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "사용적림금",
            },
        },
        {
            name: "totDiscAmt",
            fieldName: "totDiscAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "총할인금액",
            },
        },
        {
            name: "deliPrice",
            fieldName: "deliPrice",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "배송비",
            },
        },
        {
            name: "tobeReserve",
            fieldName: "tobeReserve",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "적립예정금액",
            },
        },
        {
            name: "reserveYn",
            fieldName: "reserveYn",
            type: "data",
            width: "120",
            header: {
                text: "적립여부",
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
    // 서브그리드 컬럼
    subprovider.setFields([
        {
            fieldName: "odCode",
            dataType: "text",
        },
        {
            fieldName: "pdCode",
            dataType: "text",
        },
        {
            fieldName: "pdCnt",
            dataType: "text",
        },
        {
            fieldName: "pdOptCode",
            dataType: "text",
        },
        {
            fieldName: "pdDiscAmt",
            dataType: "number",
        },
        {
            fieldName: "cpnCode",
            dataType: "text",
        },
        {
            fieldName: "cpnDiscAmt",
            dataType: "number",
        },
    ]);

    subgridView.setColumns([
        {
            name: "odCode",
            fieldName: "odCode",
            type: "data",
            width: "120",
            header: {
                text: "주문코드",
            },
        },
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
            name: "pdCnt",
            fieldName: "pdCnt",
            type: "data",
            width: "120",
            header: {
                text: "상품개수",
            },
        },
        {
            name: "pdOptCode",
            fieldName: "pdOptCode",
            type: "data",
            width: "120",
            header: {
                text: "상품옵션코드",
            },
        },
        {
            name: "pdDiscAmt",
            fieldName: "pdDiscAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "상품할인금액",
            },
        },
        {
            name: "cpnCode",
            fieldName: "cpnCode",
            type: "data",
            width: "120",
            header: {
                text: "쿠폰코드",
            },
        },
        {
            name: "cpnDiscAmt",
            fieldName: "cpnDiscAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "쿠폰할인금액",
            },
        },
    ]);

    var totalCount = 0;
    var countData = 0;
    var pagingIndex = 0;
    var pagingRows = 50;

    // 주문코드 입력하고 엔터키 눌렀을시 조회되게
    $('#orderCode').keypress(function(event) {
        if(event.keyCode == 13){
            $("#orderSearch").trigger("click");
        }
    });

    // 주문 조회 조회버튼 클릭시
    $("#orderSearch").click(function(){
        provider.clearRows(); // 메인 그리드 비우기
        subprovider.clearRows(); // 서브 그리드 비우기
        pagingIndex = 0;
        pagingRows = 50;
        var param = {
            OD_CODE		:	$("#orderCode").val(),
            pagingIndex		:	pagingIndex,
            pagingRows		:	pagingRows
        };
        ajax("/order/showOrder", param, function(returnData){
            totalCount = returnData.codeList.totalElements;
            countData = returnData.codeList.size;
            $("#cntOrder").text(totalCount); // 화면에 조회건수 출력
            // 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
            if(countData > 0) {
                // 만약 이번 조회된 카운트값이 pagingRows 값과 같다면 다음 페이지가 있는것이므로 pagingIndex 증가
                if(countData == pagingRows) {
                    pagingIndex++;
                }
                var gridData = returnData.codeList.content;
                provider.fillJsonData(gridData, { fillMode : "set"});
                gridPaging();
                gridCellClicked();
                gridDblCellClicked();
            } else {
                provider.clearRows(); // 조회 결과가 없을시 그리드 비우기
            }
        })
    });
    // 메인그리드 클릭했을때 해당 데이터의 세부정보를 서브그리드에 보여주기위함
    function gridCellClicked(){
        gridView.onCellClicked = function(grid, clickData){
            var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
            var odCode = selectOneData.odCode;
            $("#clickOrderCd").val(odCode);
            var param = {
                OD_CODE	:	odCode
            }
            ajax("/order/showOrderDtl", param, function(returnData){
                var detailData = returnData.codeList;
                subprovider.fillJsonData(detailData, { fillMode : "set"});
                subgridCellClicked();
            })
        }
    }
    // 메인그리드 더블클릭했을때 모달 호출
    function gridDblCellClicked(){
        gridView.onCellDblClicked = function(grid, clickData){
            // var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
            // var cpnCode = selectOneData.cpnCode;
            // $("#clickCouponCode").val(cpnCode);
            // $("#clickStateCpn").val("MOD"); // 모달을 열때 수정임을 마킹
            // openPopup(usingUrl + "/coupon/register", "쿠폰 정보 수정", 800, 700);
        }
    }

    // 스크롤 가장 아래로 내렸을때 추가로 조회
    function gridPaging(){
        gridView.onScrollToBottom = function() {
            // pagingIndex가 1이라면 카운트값이 pagingRows 보다 적은것이므로 return 처리
            if(pagingIndex == 0) {
                return;
            }
            var param = {
                OD_CODE		:	$("#orderCode").val(),
                pagingIndex		:	pagingIndex,
                pagingRows		:	pagingRows
            };
            ajax("/order/showOrder", param, function(returnData){
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

    // 서브그리드 클릭했을때
    function subgridCellClicked(){
        subgridView.onCellClicked = function(grid, clickData){
            // var selectOneData = subgridView.getDataSource().getJsonRow(subgridView.getCurrent().dataRow);
            // var subcpnCode = selectOneData.cpnCode;
            // var param = {
            //     CPN_CODE	:	subcpnCode
            // }
            // ajax("/product/showCouponDtl", param, function(returnData){
            //     var detailData = returnData.codeList;
            //     subprovider.fillJsonData(detailData, { fillMode : "set"});
            // })
        }
    }

    $(".dropdown-toggle").click(function(){
        if($('.dropdown-menu').is(':visible')){
            $('.dropdown-menu').hide();
            $('.dropdown-item').hide();
        } else {
            $('.dropdown-menu').show();
            $('.dropdown-item').show();
        }
    });
    $(".dropdown-item").click(function(){
        $('#packType').text( $(this).attr('value') ).val( $(this).attr('value') );
        if($('.dropdown-item').is(':visible')){
            $('.dropdown-menu').hide();
            $('.dropdown-item').hide();
        } else {
            $('.dropdown-menu').show();
            $('.dropdown-item').show();
        }
    });

});