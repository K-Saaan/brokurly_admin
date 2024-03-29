document.addEventListener('DOMContentLoaded', function () {
    // 메인그리드를 그리기 위한 사전 설정
    const container = document.getElementById('realgridCoupon');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    // 서브그리드를 그리기 위한 사전 설정
    const subcontainer = document.getElementById('subgridCoupon');
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
            fieldName: "cpnCode",
            dataType: "text",
        },
        {
            fieldName: "cpnGubun",
            dataType: "text",
        },
        {
            fieldName: "cpnNm",
            dataType: "text",
        },
        {
            fieldName: "cpnStat",
            dataType: "text",
        },
        {
            fieldName: "startDate",
            dataType: "text",
        },
        {
            fieldName: "endDate",
            dataType: "text",
        },
        {
            fieldName: "cpnPrice",
            dataType: "number",
        },
        {
            fieldName: "cpnRatio",
            dataType: "number",
        },
        {
            fieldName: "minOdAmt",
            dataType: "number",
        },
        {
            fieldName: "maxAmt",
            dataType: "number",
        },
        {
            fieldName: "dtlDesc",
            dataType: "text",
        },
        {
            fieldName: "useReq",
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
            name: "cpnCode",
            fieldName: "cpnCode",
            type: "data",
            width: "120",
            header: {
                text: "쿠폰코드",
            },
        },
        {
            name: "cpnGubun",
            fieldName: "cpnGubun",
            type: "data",
            width: "120",
            header: {
                text: "쿠폰구분",
            },
        },
        {
            name: "cpnNm",
            fieldName: "cpnNm",
            type: "data",
            width: "120",
            header: {
                text: "쿠폰명",
            },
        },
        {
            name: "cpnStat",
            fieldName: "cpnStat",
            type: "data",
            width: "120",
            header: {
                text: "쿠폰상태",
            },
        },
        {
            name: "startDate",
            fieldName: "startDate",
            type: "data",
            width: "120",
            header: {
                text: "시작일시",
            },
        },
        {
            name: "endDate",
            fieldName: "endDate",
            type: "data",
            width: "120",
            header: {
                text: "만료일시",
            },
        },
        {
            name: "cpnPrice",
            fieldName: "cpnPrice",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "쿠폰금액",
            },
        },
        {
            name: "cpnRatio",
            fieldName: "cpnRatio",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "할인률",
            },
        },
        {
            name: "minOdAmt",
            fieldName: "minOdAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "최소주문금액",
            },
        },
        {
            name: "maxAmt",
            fieldName: "maxAmt",
            type: "number",
            width: "120",
            numberFormat: "#,##0",
            header: {
                text: "최대할인금액",
            },
        },
        {
            name: "dtlDesc",
            fieldName: "dtlDesc",
            type: "data",
            width: "120",
            header: {
                text: "상세내용",
            },
        },
        {
            name: "useReq",
            fieldName: "useReq",
            type: "data",
            width: "120",
            header: {
                text: "사용조건",
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
            fieldName: "cpnCode",
            dataType: "text",
        },
        {
            fieldName: "pdCode",
            dataType: "text",
        },
        {
            fieldName: "pdNm",
            dataType: "text",
        },
        {
            fieldName: "useYn",
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

    subgridView.setColumns([
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
                text: "상품명",
            },
        },
        {
            name: "useYn",
            fieldName: "useYn",
            type: "data",
            width: "120",
            header: {
                text: "사용여부",
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

    // 이름 입력하고 엔터키 눌렀을시 조회되게
    $('#couponCode').keypress(function(event) {
        if(event.keyCode == 13){
            $("#couponSearch").trigger("click");
        }
    });
    $('#couponName').keypress(function(event) {
        if(event.keyCode == 13){
            $("#couponSearch").trigger("click");
        }
    });

    // 쿠폰 조회 조회버튼 클릭시
    $("#couponSearch").click(function(){
        provider.clearRows(); // 메인 그리드 비우기
        subprovider.clearRows(); // 서브 그리드 비우기
        pagingIndex = 0;
        pagingRows = 50;
        var param = {
            CPN_CODE		:	$("#couponCode").val(),
            CPN_NM		:	$("#couponName").val(),
            pagingIndex		:	pagingIndex,
            pagingRows		:	pagingRows
        };
        ajax("/product/showCoupon", param, function(returnData){
            totalCount = returnData.codeList.totalElements;
            countData = returnData.codeList.size;
            $("#cntPdCoupon").text(totalCount); // 화면에 조회건수 출력
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
    // 엑셀 버튼 클릭시
    $("#couponExcel").click(function(){
        if(totalCount > 0) {
            gridView.exportGrid({
                type: 'excel',
                fileName: "쿠폰 정보 조회.xlsx"
            })
        } else {
            alert("조회된 데이터가 없습니다.");
        }
    });
    // 메인그리드 클릭했을때 해당 데이터의 세부정보를 서브그리드에 보여주기위함
    function gridCellClicked(){
        gridView.onCellClicked = function(grid, clickData){
			var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
			var cpnCode = selectOneData.cpnCode;
            $("#clickCouponCd").val(cpnCode);
			var param = {
					CPN_CODE	:	cpnCode
			}
			ajax("/product/showCouponDtl", param, function(returnData){
				var detailData = returnData.codeList;
				subprovider.fillJsonData(detailData, { fillMode : "set"});
                subgridCellClicked();
			})
        }
    }
    // 메인그리드 더블클릭했을때 모달 호출
    function gridDblCellClicked(){
        gridView.onCellDblClicked = function(grid, clickData){
            var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
            var cpnCode = selectOneData.cpnCode;
            $("#clickCouponCode").val(cpnCode);
            $("#clickStateCpn").val("MOD"); // 모달을 열때 수정임을 마킹
            openPopup(usingUrl + "/coupon/register", "쿠폰 정보 수정", 800, 700);
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
                CPN_CODE		:	$("#couponCode").val(),
                CPN_NM		:	$("#couponName").val(),
                pagingIndex		:	pagingIndex,
                pagingRows		:	pagingRows
            };
            ajax("/product/showCoupon", param, function(returnData){
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
            var selectOneData = subgridView.getDataSource().getJsonRow(subgridView.getCurrent().dataRow);
            var subcpnCode = selectOneData.cpnCode;
            var param = {
                CPN_CODE	:	subcpnCode
            }
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

    // 등록 버튼 클릭시
    $("#couponReg").click(function(){
        openPopup(usingUrl + "/coupon/register", "쿠폰 정보 등록", 800, 700);
        $("#clickStateCpn").val("REG"); // 모달을 열때 등록임을 마킹
    });
    // 상품 등록 버튼 클릭시
    $("#couponDtlReg").click(function(){
        if(!$("#clickCouponCd").val()) {
            alert("상품 등록할 쿠폰을 선택하십시오.")
            return;
        }
        openPopup(usingUrl + "/coupon/regProduct", "쿠폰 상품 정보 등록", 900, 700);
    });

    // 삭제 버튼 클릭시
    $("#couponDtlRmv").click(function(){
        var reply = confirm("삭제하시겠습니까?");
        if(reply) {
            var checkedRowsRmv = subgridView.getCheckedRows();
            var rowDatasRmv = [];
            var selectedCpnCd = "";
            for (var i in checkedRowsRmv) {
                var chkdataRmv = subprovider.getJsonRow(checkedRowsRmv[i]);
                rowDatasRmv.push(chkdataRmv);
            }
            var delDatas = [];
            var delData = [];
            for(var i in rowDatasRmv) {
                delData.push(rowDatasRmv[i].pdCode);
                selectedCpnCd = rowDatasRmv[i].cpnCode;
            }
            delDatas.push(delData);

            var paramCpnCd = {
                CPN_CODE    :   selectedCpnCd
            }
            delDatas.push(paramCpnCd);
            ajax("/product/deleteCpnPd", delDatas, function(returnData){
                if(returnData == 1) {
                    alert("삭제가 완료됐습니다.");
                    $("#couponSearch").trigger("click");
                } else {
                    alert("delete fail!");
                }
            })
        }

    });

    // 사용처리 버튼 클릭시
    $("#couponUseY").click(function(){
        var reply = confirm("사용 처리하시겠습니까?");
        if(reply) {
            var checkedRowsUseY = subgridView.getCheckedRows();
            var rowDatasUseY = [];
            var selectedCpnCd = "";
            for (var i in checkedRowsUseY) {
                var chkdataUseY = subprovider.getJsonRow(checkedRowsUseY[i]);
                rowDatasUseY.push(chkdataUseY);
            }
            var useYDatas = [];
            var useYData = [];
            for(var i in rowDatasUseY) {
                useYData.push(rowDatasUseY[i].pdCode);
                selectedCpnCd = rowDatasUseY[i].cpnCode;
            }
            useYDatas.push(useYData);

            var paramCpnCd = {
                CPN_CODE    :   selectedCpnCd,
                USE_YN      :   'Y'
            }
            useYDatas.push(paramCpnCd);
            ajax("/product/updateUseY", useYDatas, function(returnData){
                if(returnData == 1) {
                    alert("사용 처리가 완료됐습니다.");
                    $("#couponSearch").trigger("click");
                } else {
                    alert("update fail!");
                }
            })
        }

    });
    // 미사용처리 버튼 클릭시
    $("#couponUseN").click(function(){
        var reply = confirm("미사용 처리하시겠습니까?");
        if(reply) {
            var checkedRowsUseY = subgridView.getCheckedRows();
            var rowDatasUseY = [];
            var selectedCpnCd = "";
            for (var i in checkedRowsUseY) {
                var chkdataUseY = subprovider.getJsonRow(checkedRowsUseY[i]);
                rowDatasUseY.push(chkdataUseY);
            }
            var useYDatas = [];
            var useYData = [];
            for(var i in rowDatasUseY) {
                useYData.push(rowDatasUseY[i].pdCode);
                selectedCpnCd = rowDatasUseY[i].cpnCode;
            }
            useYDatas.push(useYData);

            var paramCpnCd = {
                CPN_CODE    :   selectedCpnCd,
                USE_YN      :   'N'
            }
            useYDatas.push(paramCpnCd);
            ajax("/product/updateUseY", useYDatas, function(returnData){
                if(returnData == 1) {
                    alert("미사용 처리가 완료됐습니다.");
                    $("#couponSearch").trigger("click");
                } else {
                    alert("update fail!");
                }
            })
        }
    });

});