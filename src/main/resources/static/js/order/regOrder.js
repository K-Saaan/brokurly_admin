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
    // 할인가그리드를 그리기 위한 사전 설정
    const containerDisc = document.getElementById('orderPdDiscGrid');
    const providerDisc = new RealGrid.LocalDataProvider(false);
    const gridViewDisc = new RealGrid.GridView(containerDisc);
    // 쿠폰가그리드를 그리기 위한 사전 설정
    const containerCpn = document.getElementById('orderPdCpnGrid');
    const providerCpn = new RealGrid.LocalDataProvider(false);
    const gridViewCpn = new RealGrid.GridView(containerCpn);

    gridView.setDataSource(provider);
    gridViewMember.setDataSource(providerMember);
    gridViewDeli.setDataSource(providerDeli);
    gridViewDisc.setDataSource(providerDisc);
    gridViewCpn.setDataSource(providerCpn);

    gridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewMember.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewDeli.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewDisc.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewCpn.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정

    // insert시 맨 왼쪽에 + 기호 안보이게 처리
    gridViewDisc.setStateBar({visible: false});
    gridViewCpn.setStateBar({visible: false});

    // 상품 그리드 정렬 못하게 막기
    gridView.sortingOptions.style = 'none';

    // 직접 수정했을때의 동작
    gridView.onEditRowChanged = function (grid, itemIndex, dataRow, field, oldValue, newValue) {
        setTimeout(setPriceSumWithCoupon, 1000);
        setTimeout(function () {
            var arrPdCnt = []
            for(var i = 0; i < provider.getJsonRows().length; i++) {
                if(provider.getJsonRow(i).pdCount != null) {
                    arrPdCnt.push(provider.getJsonRow(i).pdCount);
                } else {
                    arrPdCnt.push("1");
                }
            }
            $("#hiddenPdCnt").val(arrPdCnt);
        }, 1000);

    };

    function getToday() {
        var today = new Date();
        var year = addZero(today.getFullYear(), 4);
        var month = addZero(today.getMonth() + 1, 2);
        var date = addZero(today.getDate(), 2);
        var hour = addZero(today.getHours(), 2);
        var min = addZero(today.getMinutes(), 2);
        var sec = addZero(today.getSeconds(), 2);
        var milSec = addZero(today.getMilliseconds(), 3);
        milSec = milSec.substring(0, 2);
        var nowTime = year + month + date + hour + min + sec + milSec;
        return nowTime;
    }
    function addZero(x,n) {
        while (x.toString().length < n) {
            x = "0" + x;
        }
        if(typeof(x) == "number") {
            x = x.toString();
        }
        return x;
    }



    // 메인그리드 컬럼
    provider.setFields([
        {
            fieldName: "pdCount",
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
            name: "pdCount",
            fieldName: "pdCount",
            type: "data",
            width: "120",
            header: {
                text: "상품개수",
            },
            // 상품개수 컬럼만 직접 수정가능하게 설정
            styleCallback: function (grid, dataCell) {
                return {
                    editable: true
                }
            }
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
    // 할인가그리드 컬럼
    providerDisc.setFields([
        {
            fieldName: "pdCode",
            dataType: "text",
        },
        {
            fieldName: "pdNm",
            dataType: "text",
        },
        {
            fieldName: "pdPrice",
            dataType: "text",
        },
        {
            fieldName: "discCode",
            dataType: "text",
        },
        {
            fieldName: "discRatio",
            dataType: "text",
        },
    ]);

    gridViewDisc.setColumns([
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
            width: "250",
            header: {
                text: "상품명",
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
            name: "discCode",
            fieldName: "discCode",
            type: "data",
            width: "120",
            header: {
                text: "할인코드",
            },
        },
        {
            name: "discRatio",
            fieldName: "discRatio",
            type: "data",
            width: "120",
            header: {
                text: "할인률",
            },
        },
    ]);
    // 쿠폰가그리드 컬럼
    providerCpn.setFields([
        {
            fieldName: "pdCode",
            dataType: "text",
        },
        {
            fieldName: "pdNm",
            dataType: "text",
        },
        {
            fieldName: "pdPrice",
            dataType: "text",
        },
        {
            fieldName: "cpnCode",
            dataType: "text",
        },
        {
            fieldName: "cpnNm",
            dataType: "text",
        },
        {
            fieldName: "useYn",
            dataType: "text",
        },
        {
            fieldName: "custCode",
            dataType: "text",
        },
        {
            fieldName: "minOdAmt",
            dataType: "text",
        },
        {
            fieldName: "maxAmt",
            dataType: "text",
        },
        {
            fieldName: "cpnPrice",
            dataType: "text",
        },
        {
            fieldName: "cpnRatio",
            dataType: "text",
        },
    ]);

    gridViewCpn.setColumns([
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
            width: "250",
            header: {
                text: "상품명",
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
            name: "cpnCode",
            fieldName: "cpnCode",
            type: "data",
            width: "120",
            header: {
                text: "쿠폰코드",
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
            name: "useYn",
            fieldName: "useYn",
            type: "data",
            width: "120",
            header: {
                text: "사용여부",
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
            name: "minOdAmt",
            fieldName: "minOdAmt",
            type: "data",
            width: "120",
            header: {
                text: "최소주문금액",
            },
        },
        {
            name: "maxAmt",
            fieldName: "maxAmt",
            type: "data",
            width: "120",
            header: {
                text: "최대할인금액",
            },
        },
        {
            name: "cpnPrice",
            fieldName: "cpnPrice",
            type: "data",
            width: "120",
            header: {
                text: "쿠폰금액",
            },
        },
        {
            name: "cpnRatio",
            fieldName: "cpnRatio",
            type: "data",
            width: "120",
            header: {
                text: "쿠폰할인률",
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

    var priceSum = 0; // 총 결제금액
    var originalPriceSum = 0; // 총 주문금액 (정가)
    var discPriceSum = 0; // 총 할인금액

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

    function nullToZero(str){
        if(str == null) {
            return 0;
        } else {
            return str;
        }
    }

    $("#regOrder").click(function(){
        var reply = confirm("등록하시겠습니까?");
        if(reply) {
            // if(!$("#orderMemberCode").val()) {
            //     alert("고객코드를 입력하십시오.")
            //     return;
            // }
            // if(!$("#orderDeliLocCode").val()) {
            //     alert("배송지코드를 입력하십시오.")
            //     return;
            // }
            // if(!$("#orderReveNm").val()) {
            //     alert("수령인을 입력하십시오.")
            //     return;
            // }
            // if(!$("#orderReveTelNo").val()) {
            //     alert("수령인 전화번호를 입력하십시오.")
            //     return;
            // }
            // if(!$("#revePlaceValue").val()) {
            //     alert("수령장소를 입력하십시오.")
            //     return;
            // }
            // if(!$("#orderRevePlaceDtl").val()) {
            //     alert("수령장소 상세정보를 입력하십시오.")
            //     return;
            // }
            // if(!$("#orderTobeReserve").val()) {
            //     alert("적립 예정금액을 입력하십시오.")
            //     return;
            // }
            var pdCodeStr = $("#hiddenPdCode").val();
            var pdCodeArr = pdCodeStr.split(",")
            var pdCountStr = $("#hiddenPdCnt").val();
            var pdCountArr = pdCountStr.split(",");
            var pdDiscAmtStr = $("#hiddenPdDiscAmt").val();
            var pdDiscAmtArr = pdDiscAmtStr.split(",");
            var cpnDiscAmtStr = $("#hiddenCpnDiscAmt").val();
            var cpnDiscAmtArr = cpnDiscAmtStr.split(",");
            var cpnCodeStr = $("#hiddenCpnCode").val();
            var cpnCodeArr = cpnCodeStr.split(",");
            var param = {
                // od.OD_INFO 관련 파라미터
                custCode        :   $("#orderMemberCode").val(),
                odDate          :   getToday(),
                odState         :   "10",
                payState        :   "10",
                deliLocCode        :   $("#orderDeliLocCode").val(),
                reveNm        :   $("#orderReveNm").val(),
                reveTelNo        :   $("#orderReveTelNo").val(),
                revePlace        :   $("#revePlaceValue").val(),
                revePlaceDtl        :   $("#orderRevePlaceDtl").val(),
                deliComMsg        :   $("#orderDeliComMsg").val(),
                totPayAmt        :   nullToZero($("#orderTotPayAmt").val()),
                totOdAmt        :   nullToZero($("#orderTotOdAmt").val()),
                cpnDiscAmt        :   nullToZero($("#orderCpnDiscAmt").val()),
                pdDiscAmt        :   nullToZero($("#orderPdDiscAmt").val()),
                totDiscAmt        :   nullToZero($("#orderTotDiscAmt").val()),
                deliPrice        :   nullToZero($("#orderDeliPrice").val()),
                tobeReserve        :   nullToZero($("#orderTobeReserve").val()),
                // od.OD_INFO_DTL 관련 파라미터
                pdCode        :   pdCodeArr,
                pdCount        :   pdCountArr,
                pdOptCode        :   "",
                pdDiscAmtDtl        :   pdDiscAmtArr,
                cpnCode        :   cpnCodeArr,
                cpnDiscAmtDtl        :   cpnDiscAmtArr,
            }
            ajax("/order/addOrder", param, function(returnData){
                console.log(returnData)
            })
        }
    });

    // $(".toggleOrderState").click(function(){
    //     if($('.orderStateMenu').is(':visible')){
    //         $('.orderStateMenu').hide();
    //         $('.itemOrderState').hide();
    //     } else {
    //         $('.orderStateMenu').show();
    //         $('.itemOrderState').show();
    //     }
    // });
    // $(".toggleOrderPayState").click(function(){
    //     if($('.payStateMenu').is(':visible')){
    //         $('.payStateMenu').hide();
    //         $('.itemOrderPayState').hide();
    //     } else {
    //         $('.payStateMenu').show();
    //         $('.itemOrderPayState').show();
    //     }
    // });
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
    // $(".toggleOrderState").mouseleave(function(){
    //     $(".orderStateMenu").mouseover(function(){
    //         $('.orderStateMenu').show();
    //         $('.itemOrderState').show();
    //     });
    //     $(".orderStateMenu").mouseleave(function(){
    //         $('.orderStateMenu').hide();
    //         $('.itemOrderState').hide();
    //     })
    // });
    // 드롭다운 리스트 밖으로 마우스 옮겼을때 드롭다운 해제되도록 설정
    // $(".toggleOrderPayState").mouseleave(function(){
    //     $(".payStateMenu").mouseover(function(){
    //         $('.payStateMenu').show();
    //         $('.itemOrderPayState').show();
    //     });
    //     $(".payStateMenu").mouseleave(function(){
    //         $('.payStateMenu').hide();
    //         $('.itemOrderPayState').hide();
    //     })
    // });
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

    // $("#dropdownOrderState").on('click', ".itemOrderState", function(){
    //     $('#orderStateValue').text( $(this).text() ).val( $(this).val() );
    //     if($('.itemOrderState').is(':visible')){
    //         $('.orderStateMenu').hide();
    //         $('.itemOrderState').hide();
    //     } else {
    //         $('.orderStateMenu').show();
    //         $('.itemOrderState').show();
    //     }
    // })
    // $("#dropdownOrderPayState").on('click', ".itemOrderPayState", function(){
    //     $('#orderPayStateValue').text( $(this).text() ).val( $(this).val() );
    //     if($('.itemOrderPayState').is(':visible')){
    //         $('.payStateMenu').hide();
    //         $('.itemOrderPayState').hide();
    //     } else {
    //         $('.payStateMenu').show();
    //         $('.itemOrderPayState').show();
    //     }
    // })
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

    // var dropdownParam = {
    //     COM_CD_GRP_ID		:	"OD00001"
    // };
    // // common에 있는 공통 펑션으로 드롭다운 구성
    // setSelboxOrderState("dropdownOrderState", "/common/showCode", dropdownParam);

    // function setSelboxOrderState(objectId, url, param) {
    //     var tagId = "#" + objectId;
    //     ajax(url, param, function(returnData){
    //         var codeList = returnData.codeList;
    //         for(var i = 0; i < codeList.length; i++) {
    //             $(tagId).append("<li class = 'dropdown-item itemOrderState' value='" + codeList[i].comCdNm + "'>" + codeList[i].comCdNm + "</li>")
    //         }
    //     })
    // }

    // 맨 처음에 상품조회에서 추가 버튼만 눌렀을때는 일단 할인만 선적용되게
    function setPriceSumWithoutCoupon() {
        var priceSum = 0; // 총 결제금액
        var originalPriceSum = 0; // 총 주문금액 (정가)
        var discPriceSum = 0; // 총 할인금액
        var discPrice = 0; // 할인 적용 금액
        var pdDiscAmt = 0; // 상품 할인 금액
        var pdDiscAmtArr = []; // od.OD_INFO_DTL에 담길 상품별 할인 금액
        var cpnDiscAmt = 0; // 쿠폰 할인 금액
        for(var i = 0; i < provider.getJsonRows().length; i++) {
            // pdCount가 undefined면 1개인거니까 그냥 정상적으로 정가 계산해주고
            // 값이 실려있으면 임의로 수정한거니까 해당 개수만큼 계산해주기
            if(provider.getJsonRow(i).pdCount != undefined){
                originalPriceSum += parseFloat(provider.getJsonRow(i).pdPrice) * parseFloat(provider.getJsonRow(i).pdCount);
            } else {
                originalPriceSum += parseFloat(provider.getJsonRow(i).pdPrice);
            }
            if(providerDisc.getJsonRows().length > 0) {
                // 할인코드가 Null이 아니면, 즉 할인중인 상품이라면 할인가 적용
                if(providerDisc.getJsonRow(i).discCode != null) {
                    // 카운트가 있는 경우
                    if(provider.getJsonRow(i).pdCount != undefined) {
                        discPrice = parseFloat(providerDisc.getJsonRow(i).pdPrice) * (100 - providerDisc.getJsonRow(i).discRatio) / 100 * parseFloat(provider.getJsonRow(i).pdCount);
                        pdDiscAmt += parseFloat(providerDisc.getJsonRow(i).pdPrice) * (providerDisc.getJsonRow(i).discRatio) / 100 * parseFloat(provider.getJsonRow(i).pdCount); // 상품할인으로만 할인된 금액 합
                        pdDiscAmtArr.push(parseFloat(providerDisc.getJsonRow(i).pdPrice) * (providerDisc.getJsonRow(i).discRatio) / 100 * parseFloat(provider.getJsonRow(i).pdCount));
                    } else { // 카운트 없는 경우
                        discPrice = parseFloat(providerDisc.getJsonRow(i).pdPrice) * (100 - providerDisc.getJsonRow(i).discRatio) / 100;
                        pdDiscAmt += parseFloat(providerDisc.getJsonRow(i).pdPrice) * (providerDisc.getJsonRow(i).discRatio) / 100; // 상품할인으로만 할인된 금액 합
                        pdDiscAmtArr.push(parseFloat(providerDisc.getJsonRow(i).pdPrice) * (providerDisc.getJsonRow(i).discRatio) / 100);
                    }
                    priceSum += parseFloat(discPrice);
                }
                // 할인코드가 null이면, 즉 할인중이지 않은 상품이라면 상품 정가 그대로 적용
                else {
                    // 카운트가 있는 경우
                    if(provider.getJsonRow(i).pdCount != undefined) {
                        discPrice = parseFloat(providerDisc.getJsonRow(i).pdPrice) * parseFloat(provider.getJsonRow(i).pdCount);
                    } else {
                        discPrice = parseFloat(providerDisc.getJsonRow(i).pdPrice);
                    }
                    // 할인중인 상품이 아니라면 0 실어주기
                    pdDiscAmtArr.push(0);
                    priceSum += parseFloat(discPrice);
                }
            }
        }
        // 만약 총결제금액이 아직 0원으로 계산되었다면 할인이 아예 적용되지 않은 것이므로 총결제금액 = 총주문금액
        if(priceSum == 0) {
            priceSum = originalPriceSum;
        }
        // 총할인금액 = 총주문금액 - 총결제금액
        discPriceSum = originalPriceSum - priceSum;

        // 배송비
        if(originalPriceSum > 30000) {
            $("#orderDeliPrice").val(0);
            $("#infoDeliPrice").text(""); //배송비 포함여부 info
        } else {
            $("#orderDeliPrice").val(3000);
            $("#infoDeliPrice").text("배송비 포함"); //배송비 포함여부 info
        }
        $("#orderTotOdAmt").val(originalPriceSum); // 총주문금액
        $("#orderPdDiscAmt").val(pdDiscAmt); //상품할인금액
        $("#orderCpnDiscAmt").val(cpnDiscAmt); //쿠폰할인금액
        $("#orderTotDiscAmt").val(discPriceSum); //총할인금액
        $("#hiddenPdDiscAmt").val(pdDiscAmtArr); //상품별 할인금액
        $("#orderTotPayAmt").val(priceSum + parseFloat($("#orderDeliPrice").val())); //총결제금액
    }
    // 쿠폰 적용하려면 쿠폰 그리드에서 체크박스 선택하고 적용버튼 누르면 쿠폰 할인도 같이 적용
    function setPriceSumWithCoupon() {
        var priceSum = 0; // 총 결제금액
        var originalPriceSum = 0; // 총 주문금액 (정가)
        var discPriceSum = 0; // 총 할인금액
        var discPrice = 0; // 할인 적용 금액
        var pdDiscAmt = 0; // 상품 할인 금액
        var pdDiscAmtArr = []; // od.OD_INFO_DTL에 담길 상품별 할인 금액
        var cpnDiscAmt = 0; // 쿠폰 할인 금액
        var cpnDiscAmtArr = []; // od.OD_INFO_DTL에 담길 상품별 할인 금액
        var cpnCodeArr = []; // od.OD_INFO_DTL에 담길 상품별 쿠폰코드
        var checkedCpn = gridViewCpn.getCheckedRows();
        for(var i = 0; i < provider.getJsonRows().length; i++) {
            // pdCount가 undefined면 1개인거니까 그냥 정상적으로 정가 계산해주고
            // 카운트 값이 실려있으면 임의로 수정한거니까 해당 개수만큼 계산해주기
            if(provider.getJsonRow(i).pdCount != undefined){
                originalPriceSum += parseFloat(provider.getJsonRow(i).pdPrice) * parseFloat(provider.getJsonRow(i).pdCount);
            } else {
                originalPriceSum += parseFloat(provider.getJsonRow(i).pdPrice);
            }
            // 할인 그리드 그려져있을때만
            if(providerDisc.getJsonRows().length > 0) {
                // 할인코드가 Null이 아니면, 즉 할인중인 상품이라면 할인가 적용
                if(providerDisc.getJsonRow(i).discCode != null) {
                    // 카운트가 있는 경우
                    if(provider.getJsonRow(i).pdCount != undefined) {
                        discPrice = parseFloat(providerDisc.getJsonRow(i).pdPrice) * (100 - providerDisc.getJsonRow(i).discRatio) / 100 * parseFloat(provider.getJsonRow(i).pdCount);
                        pdDiscAmt += parseFloat(providerDisc.getJsonRow(i).pdPrice) * (providerDisc.getJsonRow(i).discRatio) / 100 * parseFloat(provider.getJsonRow(i).pdCount); // 상품할인으로만 할인된 금액 합
                        pdDiscAmtArr.push(parseFloat(providerDisc.getJsonRow(i).pdPrice) * (providerDisc.getJsonRow(i).discRatio) / 100 * parseFloat(provider.getJsonRow(i).pdCount));
                    } else { // 카운트 없는 경우
                        discPrice = parseFloat(providerDisc.getJsonRow(i).pdPrice) * (100 - providerDisc.getJsonRow(i).discRatio) / 100;
                        pdDiscAmt += parseFloat(providerDisc.getJsonRow(i).pdPrice) * (providerDisc.getJsonRow(i).discRatio) / 100; // 상품할인으로만 할인된 금액 합
                        pdDiscAmtArr.push(parseFloat(providerDisc.getJsonRow(i).pdPrice) * (providerDisc.getJsonRow(i).discRatio) / 100);
                    }
                    // 해당 쿠폰이 체크되어있지 않다면 할인가 적용된 가격 그대로
                    if(checkedCpn.indexOf(i) < 0) {
                        priceSum += parseFloat(discPrice);
                        cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                        cpnCodeArr.push(""); // 상품별 쿠폰코드 비워서 실어주기
                    }
                    // 해당 쿠폰이 체크되어있다면 다음 조건 적용
                    else {
                        if(providerCpn.getJsonRows().length > 0) {
                            // 쿠폰코드가 null이 아닐때 (쿠폰정보가 있음)
                            if(providerCpn.getJsonRow(i).cpnCode != null) {
                                // 고객코드가 null이 아닐때
                                if(providerCpn.getJsonRow(i).custCode != null) {
                                    // 고객코드가 주문자 고객코드와 동일하다면 쿠폰 사용 가능
                                    if(providerCpn.getJsonRow(i).custCode == $("#orderMemberCode").val()) {
                                        // 사용여부가 Y면 쿠폰할인 적용
                                        if(providerCpn.getJsonRow(i).useYn != null) {
                                            if(providerCpn.getJsonRow(i).useYn == 'Y') {
                                                if(providerCpn.getJsonRow(i).minOdAmt != null) {
                                                    // 총주문금액이 최소주문금액보다 작다면 정가 그대로
                                                    if(providerCpn.getJsonRow(i).minOdAmt > originalPriceSum) {
                                                        priceSum += parseFloat(discPrice);
                                                    }
                                                    // 총주문금액이 최소주문금액보다 크다면 쿠폰 할인 적용
                                                    else {
                                                        // 쿠폰금액이 null이 아니라면 할인 형식이 금액 형식인것
                                                        if(providerCpn.getJsonRow(i).cpnPrice != null) {
                                                            // 쿠폰가격이 최대할인금액보다 크다면 최대할인금액만큼만 할인
                                                            if(providerCpn.getJsonRow(i).cpnPrice > providerCpn.getJsonRow(i).maxAmt) {
                                                                // 카운트가 있는 경우
                                                                if(provider.getJsonRow(i).pdCount != undefined) {
                                                                    priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount);
                                                                    cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount); // 쿠폰할인으로만 할인된 금액 합
                                                                    cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount))
                                                                    cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                                } else { // 카운트 없는 경우
                                                                    priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt);
                                                                    cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt); // 쿠폰할인으로만 할인된 금액 합
                                                                    cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt));
                                                                    cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                                }
                                                            }
                                                            // 쿠폰가격이 최대할인금액보다 작다면 그대로 진행
                                                            else {
                                                                // 카운트가 있는 경우
                                                                if(provider.getJsonRow(i).pdCount != undefined) {
                                                                    priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount);
                                                                    cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount); // 쿠폰할인으로만 할인된 금액 합
                                                                    cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount));
                                                                    cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                                } else { // 카운트 없는 경우
                                                                    priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).cpnPrice);
                                                                    cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).cpnPrice); // 쿠폰할인으로만 할인된 금액 합
                                                                    cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).cpnPrice));
                                                                    cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                                }
                                                            }
                                                        }
                                                        // 쿠폰금액이 null이라면 할인 형식이 비율 형식인것
                                                        else {
                                                            // 쿠폰가격이 최대할인금액보다 크다면 최대할인금액만큼만 할인
                                                            if( (parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100) > providerCpn.getJsonRow(i).maxAmt ) {
                                                                // 쿠폰 비율형식에선 쿠폰쪽에선 카운트 생각 X
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            }
                                                            // 쿠폰가격이 최대할인금액보다 작다면 그대로 진행
                                                            else {
                                                                // 쿠폰 비율형식에선 쿠폰쪽에선 카운트 생각 X
                                                                priceSum += parseFloat(discPrice) * (100 - providerCpn.getJsonRow(i).cpnRatio) / 100;
                                                                cpnDiscAmt += parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100; // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100);
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            }
                                                        }
                                                    }
                                                }
                                                // 최소주문금액이 null이면 최소주문금액 조건 생각할 필요없음
                                                else {
                                                    // 쿠폰금액이 null이 아니라면 할인 형식이 금액 형식인것
                                                    if(providerCpn.getJsonRow(i).cpnPrice != null) {
                                                        // 쿠폰가격이 최대할인금액보다 크다면 최대할인금액만큼만 할인
                                                        if(providerCpn.getJsonRow(i).cpnPrice > providerCpn.getJsonRow(i).maxAmt) {
                                                            // 카운트가 있는 경우
                                                            if(provider.getJsonRow(i).pdCount != undefined) {
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            } else { // 카운트 없는 경우
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            }
                                                        }
                                                        // 쿠폰가격이 최대할인금액보다 작다면 그대로 진행
                                                        else {
                                                            // 카운트가 있는 경우
                                                            if(provider.getJsonRow(i).pdCount != undefined) {
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            } else { // 카운트 없는 경우
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).cpnPrice);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).cpnPrice); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).cpnPrice));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            }
                                                        }
                                                    }
                                                    // 쿠폰금액이 null이라면 할인 형식이 비율 형식인것
                                                    else {
                                                        // 쿠폰가격이 최대할인금액보다 크다면 최대할인금액만큼만 할인
                                                        if( (parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100) > providerCpn.getJsonRow(i).maxAmt ) {
                                                            priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt);
                                                            cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt); // 쿠폰할인으로만 할인된 금액 합
                                                            cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt));
                                                            cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                        }
                                                        // 쿠폰가격이 최대할인금액보다 작다면 그대로 진행
                                                        else {
                                                            priceSum += parseFloat(discPrice) * (100 - providerCpn.getJsonRow(i).cpnRatio) / 100;
                                                            cpnDiscAmt += parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100; // 쿠폰할인으로만 할인된 금액 합
                                                            cpnDiscAmtArr.push(parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100);
                                                            cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                        }
                                                    }
                                                }
                                            }
                                            // 사용여부가 N이면 쿠폰할인 미적용. 상품정가그대로.
                                            else {
                                                priceSum += parseFloat(discPrice);
                                                cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                                                cpnCodeArr.push("");
                                            }
                                        }
                                        // 사용여부가 null이면 쿠폰할인 미적용. 상품정가그대로.
                                        else {
                                            priceSum += parseFloat(discPrice);
                                            cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                                            cpnCodeArr.push("");
                                        }
                                    }
                                    // 고객코드가 주문자 고객코드와 불일치한다면 상품정가 그대로 적용
                                    else {
                                        priceSum += parseFloat(discPrice);
                                        cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                                        cpnCodeArr.push("");
                                    }
                                }
                                // 고객코드 null이면 상품정가 그대로 적용
                                else {
                                    priceSum += parseFloat(discPrice);
                                    cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                                    cpnCodeArr.push("");
                                }
                            }
                            // 쿠폰코드가 null이면, 즉 쿠폰 미적용 상품이라면 상품 정가 그대로 적용
                            else {
                                priceSum += parseFloat(discPrice);
                                cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                                cpnCodeArr.push("");
                            }
                        }
                    }
                }
                // 할인코드가 null이면, 즉 할인중이지 않은 상품이라면 상품 정가 그대로 적용
                else {
                    // 카운트가 있는 경우
                    if(provider.getJsonRow(i).pdCount != undefined) {
                        discPrice = parseFloat(providerDisc.getJsonRow(i).pdPrice) * parseFloat(provider.getJsonRow(i).pdCount);
                    } else { // 카운트 없는 경우
                        discPrice = parseFloat(providerDisc.getJsonRow(i).pdPrice);
                    }
                    pdDiscAmtArr.push(0); // 할인 적용 상품이 아니므로 0 값 실어주기
                    // 해당 쿠폰이 체크되어있지 않다면 상품 정가 그대로
                    if(checkedCpn.indexOf(i) < 0) {
                        priceSum += parseFloat(discPrice);
                        cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                    }
                    // 해당 쿠폰이 체크되어있다면 다음 조건 적용
                    else {
                        // 쿠폰코드가 null이 아닐때 (쿠폰정보가 있음)
                        if(providerCpn.getJsonRow(i).cpnCode != null) {
                            // 고객코드가 Null이 아닐때
                            if(providerCpn.getJsonRow(i).custCode != null) {
                                // 고객코드가 주문자 고객코드와 동일하다면 쿠폰 적용
                                if(providerCpn.getJsonRow(i).custCode == $("#orderMemberCode").val()) {
                                    // 사용여부가 Y면 쿠폰할인 적용
                                    if(providerCpn.getJsonRow(i).useYn != null) {
                                        if(providerCpn.getJsonRow(i).useYn == 'Y') {
                                            if(providerCpn.getJsonRow(i).minOdAmt != null) {
                                                // 총주문금액이 최소주문금액보다 작다면 정가 그대로
                                                if(providerCpn.getJsonRow(i).minOdAmt > originalPriceSum) {
                                                    priceSum += parseFloat(discPrice);
                                                }
                                                // 총주문금액이 최소주문금액보다 크다면 쿠폰 할인 적용
                                                else {
                                                    // 쿠폰금액이 null이 아니라면 할인 형식이 금액 형식인것
                                                    if(providerCpn.getJsonRow(i).cpnPrice != null) {
                                                        // 쿠폰가격이 최대할인금액보다 크다면 최대할인금액만큼만 할인
                                                        if(providerCpn.getJsonRow(i).cpnPrice > providerCpn.getJsonRow(i).maxAmt) {
                                                            // 카운트가 있는 경우
                                                            if(provider.getJsonRow(i).pdCount != undefined) {
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            } else { // 카운트 없는 경우
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            }
                                                        }
                                                        // 쿠폰가격이 최대할인금액보다 작다면 그대로 진행
                                                        else {
                                                            // 카운트가 있는 경우
                                                            if(provider.getJsonRow(i).pdCount != undefined) {
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            } else { // 카운트 없는 경우
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).cpnPrice);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).cpnPrice); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).cpnPrice));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            }
                                                        }
                                                    }
                                                    // 쿠폰금액이 null이라면 할인 형식이 비율 형식인것
                                                    else {
                                                        // 쿠폰 할인가격이 최대할인금액보다 크다면 최대할인금액만큼만 할인
                                                        if( (parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100) > providerCpn.getJsonRow(i).maxAmt ) {
                                                            // 카운트가 있는 경우
                                                            if(provider.getJsonRow(i).pdCount != undefined) {
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            } else { // 카운트 없는 경우
                                                                priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt);
                                                                cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt); // 쿠폰할인으로만 할인된 금액 합
                                                                cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt));
                                                                cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                            }
                                                        }
                                                        // 쿠폰가격이 최대할인금액보다 작다면 그대로 진행
                                                        else {
                                                            // 할인쪽에서 이미 카운트를 세서 왔기 떄문에 쿠폰 비율쪽에선 카운트 생각 안해도됨
                                                            priceSum += parseFloat(discPrice) * (100 - providerCpn.getJsonRow(i).cpnRatio) / 100;
                                                            cpnDiscAmt += parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100; // 쿠폰할인으로만 할인된 금액 합
                                                            cpnDiscAmtArr.push(parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100);
                                                            cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                        }
                                                    }
                                                }
                                            }
                                            // 최소주문금액이 null이면 최소주문금액 조건 생각할 필요없음
                                            else {
                                                // 쿠폰금액이 null이 아니라면 할인 형식이 금액 형식인것
                                                if(providerCpn.getJsonRow(i).cpnPrice != null) {
                                                    // 쿠폰가격이 최대할인금액보다 크다면 최대할인금액만큼만 할인
                                                    if(providerCpn.getJsonRow(i).cpnPrice > providerCpn.getJsonRow(i).maxAmt) {
                                                        // 카운트가 있는 경우
                                                        if(provider.getJsonRow(i).pdCount != undefined) {
                                                            priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount);
                                                            cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount); // 쿠폰할인으로만 할인된 금액 합
                                                            cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt) * parseFloat(provider.getJsonRow(i).pdCount));
                                                            cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                        } else { // 카운트 없는 경우
                                                            priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt);
                                                            cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt); // 쿠폰할인으로만 할인된 금액 합
                                                            cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt));
                                                            cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                        }
                                                    }
                                                    // 쿠폰가격이 최대할인금액보다 작다면 그대로 진행
                                                    else {
                                                        // 카운트가 있는 경우
                                                        if(provider.getJsonRow(i).pdCount != undefined) {
                                                            priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount);
                                                            cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount); // 쿠폰할인으로만 할인된 금액 합
                                                            cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).cpnPrice) * parseFloat(provider.getJsonRow(i).pdCount));
                                                            cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                        } else { // 카운트 없는 경우
                                                            priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).cpnPrice);
                                                            cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).cpnPrice); // 쿠폰할인으로만 할인된 금액 합
                                                            cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).cpnPrice));
                                                            cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                        }
                                                    }
                                                }
                                                // 쿠폰금액이 null이라면 할인 형식이 비율 형식인것
                                                else {
                                                    // 쿠폰가격이 최대할인금액보다 크다면 최대할인금액만큼만 할인
                                                    if( (parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100) > providerCpn.getJsonRow(i).maxAmt ) {
                                                        // 비율 할인 시에는 쿠폰쪽에선 카운트 생각 안해도됨
                                                        priceSum += parseFloat(discPrice) - parseFloat(providerCpn.getJsonRow(i).maxAmt);
                                                        cpnDiscAmt += parseFloat(providerCpn.getJsonRow(i).maxAmt); // 쿠폰할인으로만 할인된 금액 합
                                                        cpnDiscAmtArr.push(parseFloat(providerCpn.getJsonRow(i).maxAmt));
                                                        cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                    }
                                                    // 쿠폰가격이 최대할인금액보다 작다면 그대로 진행
                                                    else {
                                                        priceSum += parseFloat(discPrice) * (100 - providerCpn.getJsonRow(i).cpnRatio) / 100;
                                                        cpnDiscAmt += parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100; // 쿠폰할인으로만 할인된 금액 합
                                                        cpnDiscAmtArr.push(parseFloat(discPrice) * (providerCpn.getJsonRow(i).cpnRatio) / 100);
                                                        cpnCodeArr.push(providerCpn.getJsonRow(i).cpnCode);
                                                    }
                                                }
                                            }
                                        }
                                        // 사용여부가 N이면 쿠폰할인 미적용. 상품정가그대로.
                                        else {
                                            priceSum += parseFloat(discPrice);
                                            cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                                            cpnCodeArr.push("");
                                        }
                                    }
                                    // 사용여부가 null이면 쿠폰할인 미적용. 상품정가그대로.
                                    else {
                                        priceSum += parseFloat(discPrice);
                                        cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                                        cpnCodeArr.push("");
                                    }
                                }
                                // 고객코드와 주문자 고객코드가 불일치한다면 상품정가 그대로 적용
                                else {
                                    priceSum += parseFloat(discPrice);
                                    cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                                    cpnCodeArr.push("");
                                }
                            }
                            // 고객코드가 null이면 상품정가 그대로 적용
                            else {
                                priceSum += parseFloat(discPrice);
                                cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                                cpnCodeArr.push("");
                            }
                        }
                        // 쿠폰코드가 null이면, 즉 쿠폰 미적용 상품이라면 상품 정가 그대로 적용
                        else {
                            priceSum += parseFloat(discPrice);
                            cpnDiscAmtArr.push(0); // 상품별 쿠폰할인금액 0원으로 실어주기
                            cpnCodeArr.push("");
                        }
                    }
                }
            }
        }
        // 만약 총결제금액이 아직 0원으로 계산되었다면 할인이 아예 적용되지 않은 것이므로 총결제금액 = 총주문금액
        if(priceSum == 0) {
            priceSum = originalPriceSum;
        }

        // 총할인금액 = 총주문금액 - 총결제금액
        discPriceSum = originalPriceSum - priceSum;

        // 배송비
        if(originalPriceSum > 30000) {
            $("#orderDeliPrice").val(0);
            $("#infoDeliPrice").text(""); //배송비 포함여부 info
        } else {
            $("#orderDeliPrice").val(3000);
            $("#infoDeliPrice").text("배송비 포함"); //배송비 포함여부 info
        }
        $("#orderTotOdAmt").val(originalPriceSum); // 총주문금액
        $("#orderPdDiscAmt").val(pdDiscAmt); //상품할인금액
        $("#orderCpnDiscAmt").val(cpnDiscAmt); //쿠폰할인금액
        $("#orderTotDiscAmt").val(discPriceSum); //총할인금액
        $("#hiddenPdDiscAmt").val(pdDiscAmtArr); //상품별 상품할인금액
        $("#hiddenCpnDiscAmt").val(cpnDiscAmtArr); //상품별 쿠폰할인금액
        $("#hiddenCpnCode").val(cpnCodeArr); //상품별 쿠폰코드
        $("#orderTotPayAmt").val(priceSum + parseFloat($("#orderDeliPrice").val())); //총결제금액
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
    // 상품조회 추가 버튼 클릭시
    $("#orderOdAdd").click(function(){
        if($("#orderMemberCode").val() == "") {
            alert("고객코드를 먼저 입력하십시오.")
            return;
        }

        var checkedRowProd = gridView.getCheckedRows();
        var checkedProdList = [];
        var checkedPdCntList = [];
        for(var i = 0; i < checkedRowProd.length; i++) {
            checkedProdList.push(provider.getJsonRow(checkedRowProd[i]).pdCode);
            if(provider.getJsonRow(checkedRowProd[i]).pdCount != null) {
                checkedPdCntList.push(provider.getJsonRow(checkedRowProd[i]).pdCount);
            } else {
                checkedPdCntList.push("1");
            }
        }
        $("#hiddenPdCode").val(checkedProdList);
        $("#hiddenPdCnt").val(checkedPdCntList);
        var param = {
            PD_CODE		:	checkedProdList,
            CUST_CODE   :   $("#orderMemberCode").val()
        };
        // 할인가 조회
        ajax("/product/showPdDiscPrice", param, function(returnData){
            var gridDataDisc = returnData.codeList;
            providerDisc.fillJsonData(gridDataDisc, { fillMode : "insert"});
        })
        // 쿠폰가 조회
        ajax("/product/showPdCpnPrice", param, function(returnData){
            var gridDataCpn = returnData.codeList;
            providerCpn.fillJsonData(gridDataCpn, { fillMode : "insert"});
        })
        // 타임아웃을 적용하지않으면 ajax가 호출되기전에 function을 호출하므로 1초 타임아웃 지정
        setTimeout(setPriceSumWithoutCoupon, 1000)
    });

    // 할인가조회 초기화 버튼 클릭시
    $("#orderPdDiscReset").click(function(){
        providerDisc.clearRows(); // 할인가 그리드 비우기
        providerCpn.clearRows(); // 쿠폰가 그리드 비우기
        $("#hiddenPdCode").val("");
        $("#hiddenPdCnt").val("");
        $("#hiddenPdDiscAmt").val("");

        var priceSum = 0; // 총 결제금액
        var originalPriceSum = 0; // 총 주문금액 (정가)
        var discPriceSum = 0; // 총 할인금액
        $("#orderTotOdAmt").val(0); // 총주문금액
        $("#orderTotDiscAmt").val(0); //총할인금액
        $("#orderTotPayAmt").val(0); //총결제금액
        $("#orderPdDiscAmt").val(0); //상품할인금액
        $("#orderCpnDiscAmt").val(0); //쿠폰할인금액
        $("#orderDeliPrice").val(0); //배송비
    });
    // 상품조회 삭제 버튼 클릭시. 어느곳에서 삭제를 하든 같이 삭제되게.
    $("#orderPdRemove").click(function(){
        var checkedRowsProRmv = gridView.getCheckedRows();
        provider.removeRows(checkedRowsProRmv);
        providerDisc.removeRows(checkedRowsProRmv);
        providerCpn.removeRows(checkedRowsProRmv);

        var arrPdCode = []
        var arrPdCnt = []
        for(var i = 0; i < provider.getJsonRows().length; i++) {
            arrPdCode.push(provider.getJsonRow(i).pdCode);
            if(provider.getJsonRow(i).pdCount != null) {
                arrPdCnt.push(provider.getJsonRow(i).pdCount);
            } else {
                arrPdCnt.push("1");
            }
        }
        $("#hiddenPdCode").val(arrPdCode);
        $("#hiddenPdCnt").val(arrPdCnt);

        // 삭제했으니까 주문금액 계산 다시해주기
        // 타임아웃을 적용하지않으면 ajax가 호출되기전에 function을 호출하므로 1초 타임아웃 지정
        setTimeout(setPriceSumWithCoupon, 1000)
    });
    // 할인가조회 삭제 버튼 클릭시. 할인가 쿠폰가 어느곳에서 삭제를 하든 양쪽에서 같이 삭제되게.
    $("#orderPdDiscRemove").click(function(){
        var checkedRowsRmv = gridViewDisc.getCheckedRows();
        provider.removeRows(checkedRowsRmv);
        providerDisc.removeRows(checkedRowsRmv);
        providerCpn.removeRows(checkedRowsRmv);

        var arrPdCode = []
        var arrPdCnt = []
        for(var i = 0; i < provider.getJsonRows().length; i++) {
            arrPdCode.push(provider.getJsonRow(i).pdCode);
            if(provider.getJsonRow(i).pdCount != null) {
                arrPdCnt.push(provider.getJsonRow(i).pdCount);
            } else {
                arrPdCnt.push("1");
            }
        }
        $("#hiddenPdCode").val(arrPdCode);
        $("#hiddenPdCnt").val(arrPdCnt);

        // 삭제했으니까 주문금액 계산 다시해주기
        // 타임아웃을 적용하지않으면 ajax가 호출되기전에 function을 호출하므로 1초 타임아웃 지정
        setTimeout(setPriceSumWithCoupon, 1000)
    });
    // 쿠폰가조회 삭제 버튼 클릭시
    $("#orderPdCpnRemove").click(function(){
        var checkedRowsCpnRmv = gridViewCpn.getCheckedRows();
        provider.removeRows(checkedRowsCpnRmv);
        providerCpn.removeRows(checkedRowsCpnRmv);
        providerDisc.removeRows(checkedRowsCpnRmv);

        var arrPdCode = []
        var arrPdCnt = []
        for(var i = 0; i < provider.getJsonRows().length; i++) {
            arrPdCode.push(provider.getJsonRow(i).pdCode);
            if(provider.getJsonRow(i).pdCount != null) {
                arrPdCnt.push(provider.getJsonRow(i).pdCount);
            } else {
                arrPdCnt.push("1");
            }
        }
        $("#hiddenPdCode").val(arrPdCode);
        $("#hiddenPdCnt").val(arrPdCnt);

        // 삭제했으니까 주문금액 계산 다시해주기
        // 타임아웃을 적용하지않으면 ajax가 호출되기전에 function을 호출하므로 1초 타임아웃 지정
        setTimeout(setPriceSumWithCoupon, 1000)
    });
    // 쿠폰가조회 적용 버튼 클릭시
    $("#orderPdCpnApply").click(function(){
        // 타임아웃을 적용하지않으면 ajax가 호출되기전에 function을 호출하므로 1초 타임아웃 지정
        setTimeout(setPriceSumWithCoupon, 1000)
    });
});