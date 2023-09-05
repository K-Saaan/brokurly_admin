document.addEventListener('DOMContentLoaded', function () {
    // 메인그리드를 그리기 위한 사전 설정
    const container = document.getElementById('realgridChrg');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    // 서브그리드를 그리기 위한 사전 설정
    const subcontainer = document.getElementById('subgridChrg');
    const subprovider = new RealGrid.LocalDataProvider(false);
    const subgridView = new RealGrid.GridView(subcontainer);

    gridView.setDataSource(provider);
    gridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    subgridView.setDataSource(subprovider);
    subgridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정

    var realPath = location.href; // http://localhost:8080/member/show 같은 full URL
    var urlIndex = realPath.lastIndexOf("/");
    var usingUrl = realPath.substr(0, urlIndex); // full URL에서 http://localhost:8080/member 까지만 자른 URL

    // 메인그리드 컬럼
    provider.setFields([
        {
            fieldName: "chrgSeqNo",
            dataType: "text",
        },
        {
            fieldName: "pymAcntCode",
            dataType: "text",
        },
        {
            fieldName: "custCode",
            dataType: "text",
        },
        {
            fieldName: "odCode",
            dataType: "text",
        },
        {
            fieldName: "pymTyp",
            dataType: "text",
        },
        {
            fieldName: "payWay",
            dataType: "text",
        },
        {
            fieldName: "payStat",
            dataType: "text",
        },
        {
            fieldName: "cnclYn",
            dataType: "text",
        },
        {
            fieldName: "chrgDate",
            dataType: "datetime",
            datetimeFormat: "yyyy.MM.dd"
        },
        {
            fieldName: "bankCd",
            dataType: "text",
        },
        {
            fieldName: "bankNm",
            dataType: "text",
        },
        {
            fieldName: "cardNo",
            dataType: "text",
        },
        {
            fieldName: "cardDueYy",
            dataType: "text",
        },
        {
            fieldName: "cardDueMm",
            dataType: "text",
        },
        {
            fieldName: "acntNo",
            dataType: "text",
        },
        {
            fieldName: "acntHolder",
            dataType: "text",
        },
        {
            fieldName: "chrgAmt",
            dataType: "number",
        },
        {
            fieldName: "rcptAmt",
            dataType: "number",
        },
        {
            fieldName: "vat",
            dataType: "number",
        },
        {
            fieldName: "fee",
            dataType: "number",
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
            name: "chrgSeqNo",
            fieldName: "chrgSeqNo",
            type: "data",
            width: "120",
            header: {
                text: "결제시퀀스번호",
            },
        },
        {
            name: "pymAcntCode",
            fieldName: "pymAcntCode",
            type: "data",
            width: "120",
            header: {
                text: "납부자코드",
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
            name: "odCode",
            fieldName: "odCode",
            type: "data",
            width: "120",
            header: {
                text: "주문코드",
            },
        },
        {
            name: "pymTyp",
            fieldName: "pymTyp",
            type: "data",
            width: "120",
            header: {
                text: "납부타입",
            },
        },
        {
            name: "payWay",
            fieldName: "payWay",
            type: "data",
            width: "120",
            header: {
                text: "납부방법",
            },
        },
        {
            name: "payStat",
            fieldName: "payStat",
            type: "data",
            width: "120",
            header: {
                text: "납부상태",
            },
        },
        {
            name: "cnclYn",
            fieldName: "cnclYn",
            type: "data",
            width: "120",
            header: {
                text: "취소여부",
            },
        },
        {
            name: "chrgDate",
            fieldName: "chrgDate",
            type: "datetime",
            width: "120",
            header: {
                text: "결제일시",
            },
        },
        {
            name: "bankCd",
            fieldName: "bankCd",
            type: "data",
            width: "120",
            header: {
                text: "은행코드",
            },
        },
        {
            name: "bankNm",
            fieldName: "bankNm",
            type: "data",
            width: "120",
            header: {
                text: "은행명",
            },
        },
        {
            name: "cardNo",
            fieldName: "cardNo",
            type: "data",
            width: "120",
            header: {
                text: "카드번호",
            },
        },
        {
            name: "cardDueYy",
            fieldName: "cardDueYy",
            type: "data",
            width: "120",
            header: {
                text: "카드유효년",
            },
        },
        {
            name: "cardDueMm",
            fieldName: "cardDueMm",
            type: "data",
            width: "120",
            header: {
                text: "카드유효월",
            },
        },
        {
            name: "acntNo",
            fieldName: "acntNo",
            type: "data",
            width: "120",
            header: {
                text: "계좌번호",
            },
        },
        {
            name: "acntHolder",
            fieldName: "acntHolder",
            type: "data",
            width: "120",
            header: {
                text: "입금자명",
            },
        },
        {
            name: "chrgAmt",
            fieldName: "chrgAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "결제금액",
            },
        },
        {
            name: "rcptAmt",
            fieldName: "rcptAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "납부금액",
            },
        },
        {
            name: "vat",
            fieldName: "vat",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "부가세",
            },
        },
        {
            name: "fee",
            fieldName: "fee",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "수수료",
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
            fieldName: "pdCode",
            dataType: "text",
        },
        {
            fieldName: "pdCnt",
            dataType: "text",
        },
    ]);

    subgridView.setColumns([
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
    ]);

    var totalCount = 0;
    var countData = 0;
    var pagingIndex = 0;
    var pagingRows = 50;

    // 주문코드 입력하고 엔터키 눌렀을시 조회되게
    $('#chrgOrderCode').keypress(function(event) {
        if(event.keyCode == 13){
            $("#chrgSearch").trigger("click");
        }
    });

    // 결제 조회 조회버튼 클릭시
    $("#chrgSearch").click(function(){
        provider.clearRows(); // 메인 그리드 비우기
        pagingIndex = 0;
        pagingRows = 50;
        var param = {
            OD_CODE		:	$("#chrgOrderCode").val(),
            pagingIndex		:	pagingIndex,
            pagingRows		:	pagingRows
        };
        ajax("/order/getChrgInfo", param, function(returnData){
            totalCount = returnData.codeList.totalElements;
            countData = returnData.codeList.size;
            $("#cntChrg").text(totalCount); // 화면에 조회건수 출력
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
                // subgridCellClicked();
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
                OD_CODE		:	$("#chrgOrderCode").val(),
                pagingIndex		:	pagingIndex,
                pagingRows		:	pagingRows
            };
            ajax("/order/getChrgInfo", param, function(returnData){
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