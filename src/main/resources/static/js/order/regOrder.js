document.addEventListener('DOMContentLoaded', function () {
    // 상품그리드를 그리기 위한 사전 설정
    const containerPd = document.getElementById('orderPdGrid');
    const providerPd = new RealGrid.LocalDataProvider(false);
    const gridViewPd = new RealGrid.GridView(containerPd);
    // 추가된 상품그리드를 그리기 위한 사전 설정
    const containerPdAdd = document.getElementById('orderPdAddGrid');
    const providerPdAdd = new RealGrid.LocalDataProvider(false);
    const gridViewPdAdd = new RealGrid.GridView(containerPdAdd);
    // 멤버그리드를 그리기 위한 사전 설정
    const containerMember = document.getElementById('orderMemberGrid');
    const providerMember = new RealGrid.LocalDataProvider(false);
    const gridViewMember = new RealGrid.GridView(containerMember);
    // 배송지그리드를 그리기 위한 사전 설정
    const containerDeli = document.getElementById('orderDeliGrid');
    const providerDeli = new RealGrid.LocalDataProvider(false);
    const gridViewDeli = new RealGrid.GridView(containerDeli);

    var realPath = location.href; // http://localhost:8080/member/show 같은 full URL
    var urlIndex = realPath.lastIndexOf("/");
    var usingUrl = realPath.substring(0, urlIndex); // full URL에서 http://localhost:8080/member 까지만 자른 URL

    gridViewPd.setDataSource(providerPd);
    gridViewPdAdd.setDataSource(providerPdAdd);
    gridViewMember.setDataSource(providerMember);
    gridViewDeli.setDataSource(providerDeli);

    gridViewPd.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewPdAdd.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewMember.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewDeli.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정

    // insert시 맨 왼쪽에 + 기호 안보이게 처리
    gridViewPd.setStateBar({visible: false});
    gridViewPdAdd.setStateBar({visible: false});

    // 상품 그리드 정렬 못하게 막기
    gridViewPd.sortingOptions.style = 'none';
    gridViewPdAdd.sortingOptions.style = 'none';

    gridViewPd.displayOptions.fitStyle= 'even';
    gridViewPdAdd.displayOptions.fitStyle= 'even';
    gridViewMember.displayOptions.fitStyle= 'even';
    gridViewDeli.displayOptions.fitStyle= 'even';

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
    function getTodayUntilSec() {
        var today = new Date();
        var year = addZero(today.getFullYear(), 4);
        var month = addZero(today.getMonth() + 1, 2);
        var date = addZero(today.getDate(), 2);
        var hour = addZero(today.getHours(), 2);
        var min = addZero(today.getMinutes(), 2);
        var sec = addZero(today.getSeconds(), 2);
        var nowTime = year + month + date + hour + min + sec;
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

    // 상품그리드 컬럼
    providerPd.setFields([
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
            fieldName: "discCode",
            dataType: "text",
        },
        {
            fieldName: "discRatio",
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
            fieldName: "cpnPrice",
            dataType: "text",
        },
        {
            fieldName: "cpnRatio",
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

    gridViewPd.setColumns([
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
    // 추가된 상품그리드 컬럼
    providerPdAdd.setFields([
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
            fieldName: "discCode",
            dataType: "text",
        },
        {
            fieldName: "discRatio",
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
            fieldName: "cpnPrice",
            dataType: "text",
        },
        {
            fieldName: "cpnRatio",
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

    gridViewPdAdd.setColumns([
        {
            name: "pdCount",
            fieldName: "pdCount",
            type: "data",
            width: "120",
            header: {
                text: "상품개수",
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
                text: "상품이름",
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
            $("#orderPdSearch").trigger("click");
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

    // 상품조회 쿠폰적용 모달 관련 트리거 적용 관련
    $("#useCpnBtn").click(function(){
        var clickRow = $("#clickRow").val();
        var bindCpnCode = $("#bindCpnCode").val();
        var bindCpnNm = $("#bindCpnNm").val();
        var bindCpnPrice = $("#bindCpnPrice").val();
        var bindCpnRatio = $("#bindCpnRatio").val();
        var bindMinOdAmt = $("#bindMinOdAmt").val();
        var bindMaxAmt = $("#bindMaxAmt").val();

        providerPd.setValue(clickRow, 5, bindCpnCode);
        providerPd.setValue(clickRow, 6, bindCpnNm);
        providerPd.setValue(clickRow, 7, bindCpnPrice);
        providerPd.setValue(clickRow, 8, bindCpnRatio);
        providerPd.setValue(clickRow, 9, bindMinOdAmt);
        providerPd.setValue(clickRow, 10, bindMaxAmt);
    });

    // 상품정보조회 조회버튼 클릭시
    $("#orderPdSearch").click(function(){
        providerPd.clearRows(); // 메인 그리드 비우기
        pagingIndex = 0;
        pagingRows = 50;
        var param = {
            PRODUCT_NAME			:	$("#orderPdName").val(),
            pagingIndex		:	pagingIndex,
            pagingRows		:	pagingRows
        };
        ajax("/product/showProductWithDiscount", param, function(returnData){
            totalCount = returnData.codeList.totalElements;
            countData = returnData.codeList.size;
            // 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
            if(countData > 0) {
                // 만약 이번 조회된 카운트값이 pagingRows 값과 같다면 다음 페이지가 있는것이므로 pagingIndex 증가
                if(countData == pagingRows) {
                    pagingIndex++;
                }
                var gridData = returnData.codeList.content;
                providerPd.fillJsonData(gridData, { fillMode : "set"});
                gridPagingProduct();
                gridDblCellClicked();
            } else {
                providerPd.clearRows(); // 조회 결과가 없을시 그리드 비우기
            }
        })
    });

    // 스크롤 가장 아래로 내렸을때 추가로 조회
    function gridPagingProduct(){
        gridViewPd.onScrollToBottom = function() {
            // pagingIndex가 1이라면 카운트값이 pagingRows 보다 적은것이므로 return 처리
            if(pagingIndex == 0) {
                return;
            }
            var param = {
                PRODUCT_NAME			:	$("#orderPdNameTest").val(),
                pagingIndex		:	pagingIndex,
                pagingRows		:	pagingRows
            };
            ajax("/product/showProductWithDiscount", param, function(returnData){
                totalCount = returnData.codeList.totalElements;
                countData = returnData.codeList.size;
                // 스크롤 시 추가 데이터가 있을때만 show
                if(countData > 0) {
                    var gridData = returnData.codeList.content;
                    pagingIndex++;
                    providerPd.fillJsonData(gridData, { fillMode : "append", noStates: true});
                    gridViewPd.refresh();
                } else {
                    providerPd.clearRows(); // 조회 결과가 없을시 그리드 비우기
                }
            })
        }
    }
    // 상품그리드 더블클릭했을때 모달 호출
    function gridDblCellClicked(){
        gridViewPd.onCellDblClicked = function(grid, clickData){
            var selectOneData = gridViewPd.getDataSource().getJsonRow(gridViewPd.getCurrent().dataRow);
            var clickRow = clickData.dataRow;
            var clickCol = clickData.column;
            var clickCellType = clickData.cellType;
            var pdCode = selectOneData.pdCode;
            if(clickCellType != "data") {
                return;
            }
            if(clickCol != "pdCount") {
                var custCode = $("#orderMemberCode").val();
                if(custCode == ""){
                    alert("고객코드를 먼저 입력하십시오.");
                    return;
                }
                $("#clickPdCode").val(pdCode);
                $("#clickCustCode").val(custCode);
                $("#clickRow").val(clickRow);
                openPopup(usingUrl + "/coupon/pdCoupon", "주문 상품 적용 쿠폰 선택", 800, 700);
            }
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

    // 적립예정금액 계산 버튼 클릭시
    $("#orderMbrshCalc").click(function(){
        var param = {
            CUST_CODE		:	$("#orderMemberCode").val()
        };
        if($("#orderMemberCode").val() == "") {
            alert("고객코드를 먼저 입력하십시오.")
            return;
        }
        if($("#orderTotPayAmt").val() == "") {
            alert("결제할 품목을 먼저 추가하십시오.")
            return;
        }
        ajax("/order/calcMbrshInfo", param, function(returnData){
            console.log(returnData.codeList)
            var list = returnData.codeList;
            var reserveRatio = list[0].reserveRatio;
            var mbrshGradeNm = list[0].mbrshGradeNm;
            var totPayAmt = parseInt($("#orderTotPayAmt").val());
            var tobeReserve = parseInt(totPayAmt * reserveRatio / 100);
            $("#orderTobeReserve").val(tobeReserve);
            $("#reserveRatio").text("등급명 : " + mbrshGradeNm + ", " + reserveRatio + "% 적립");
        })
    });

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
            if(typeof str == "String") {
                return parseFloat(str)
            } else {
                return str;
            }
        }
    }

    $("#regOrder").click(function(){
        var reply = confirm("등록하시겠습니까?");
        if(reply) {
            if(!$("#orderMemberCode").val()) {
                alert("고객코드를 입력하십시오.")
                return;
            }
            if(!$("#orderDeliLocCode").val()) {
                alert("배송지코드를 입력하십시오.")
                return;
            }
            if(!$("#orderReveNm").val()) {
                alert("수령인을 입력하십시오.")
                return;
            }
            if(!$("#orderReveTelNo").val()) {
                alert("수령인 전화번호를 입력하십시오.")
                return;
            }
            if(!$("#revePlaceValue").val()) {
                alert("수령장소를 입력하십시오.")
                return;
            }
            if(!$("#orderRevePlaceDtl").val()) {
                alert("수령장소 상세정보를 입력하십시오.")
                return;
            }
            if(!$("#orderTobeReserve").val()) {
                alert("적립 예정금액을 입력하십시오.")
                return;
            }
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
            var pdOptCodeStr = $("#hiddenPdOptCode").val();
            var pdOptCodeArr = pdOptCodeStr.split(",");
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
                usedReservedAmt        :   0,
                totDiscAmt        :   nullToZero($("#orderTotDiscAmt").val()),
                deliPrice        :   nullToZero($("#orderDeliPrice").val()),
                tobeReserve        :   nullToZero($("#orderTobeReserve").val()),
                // od.OD_INFO_DTL 관련 파라미터
                pdCode        :   pdCodeArr,
                pdCount        :   pdCountArr,
                pdOptCode        :   pdOptCodeArr,
                pdDiscAmtDtl        :   pdDiscAmtArr,
                cpnCode        :   cpnCodeArr,
                cpnDiscAmtDtl        :   cpnDiscAmtArr,
                // pd.CPN_HIST 관련 파라미터
                cpnUseDate      :   getTodayUntilSec(),
            }
            ajax("/order/addOrder", param, function(returnData){
                if (returnData == 1) {
                    goPage("/order/regOrder");
                    alert("등록이 완료됐습니다.");
                } else {
                    alert("register fail!");
                }
            })
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


    function calculProduct() {
        var rowDatas = [];
        for(var i = 0; i < providerPdAdd.getJsonRows().length; i++) {
            var addedData = providerPdAdd.getJsonRow(i);
            rowDatas.push(addedData);
        }
        var pdDiscAmt = 0;
        var cpnDiscAmt = 0;
        var pdCodeArr = [];
        var pdDiscAmtArr = [];
        var cpnDiscAmtArr = [];
        var pdCountArr = [];
        var cpnCodeArr = [];
        var pdOptCodeArr = [];
        var originalPriceSum = 0;
        for (var i in rowDatas) {
            pdCodeArr.push(rowDatas[i].pdCode);
            if(rowDatas[i].pdCount != null) {
                pdCountArr.push(rowDatas[i].pdCount);
            } else {
                pdCountArr.push(1);
            }
            if(rowDatas[i].cpnCode != null) {
                cpnCodeArr.push(rowDatas[i].cpnCode);
            } else {
                cpnCodeArr.push("");
            }
            pdOptCodeArr.push("");
            // 총주문금액 계산
            originalPriceSum += parseFloat(rowDatas[i].pdPrice) * parseFloat(nullToOne(rowDatas[i].pdCount));
            if(rowDatas[i].discCode != null) {
                // priceSum += parseFloat(rowDatas[i].pdPrice) * (100 - parseFloat(rowDatas[i].discRatio)) / 100 * parseFloat(nullToOne(rowDatas[i].pdCount)); // 총결제금액 계산
                pdDiscAmt += parseFloat(rowDatas[i].pdPrice) * parseFloat(rowDatas[i].discRatio) / 100 * parseFloat(nullToOne(rowDatas[i].pdCount)); // 상품할인금액 계산
                pdDiscAmtArr.push( parseFloat(rowDatas[i].pdPrice) * parseFloat(rowDatas[i].discRatio) / 100 * parseFloat(nullToOne(rowDatas[i].pdCount)) );
                if(rowDatas[i].cpnCode != null) {
                    if(rowDatas[i].cpnRatio != null) {
                        cpnDiscAmt += pdDiscAmt * (parseFloat(rowDatas[i].cpnRatio)) / 100; // 쿠폰할인금액 계산
                        cpnDiscAmtArr.push(pdDiscAmt * parseFloat(rowDatas[i].cpnRatio) / 100);
                    } else {
                        cpnDiscAmt += pdDiscAmt - ( parseFloat(rowDatas[i].cpnPrice) * parseFloat(nullToOne(rowDatas[i].pdCount)) );
                        cpnDiscAmtArr.push(parseFloat(rowDatas[i].cpnPrice) * parseFloat(nullToOne(rowDatas[i].pdCount)));
                    }
                } else {
                    cpnDiscAmtArr.push(0);
                }
            } else {
                // priceSum += parseFloat(rowDatas[i].pdPrice) * parseFloat(nullToOne(rowDatas[i].pdCount));
                pdDiscAmtArr.push(0);
                if(rowDatas[i].cpnCode != null) {
                    if(rowDatas[i].cpnRatio != null) {
                        cpnDiscAmt += parseFloat(rowDatas[i].pdPrice) * parseFloat(nullToOne(rowDatas[i].pdCount)) * (parseFloat(rowDatas[i].cpnRatio)) / 100; // 쿠폰할인금액 계산
                        cpnDiscAmtArr.push(parseFloat(rowDatas[i].pdPrice) * parseFloat(nullToOne(rowDatas[i].pdCount)) * parseFloat(rowDatas[i].cpnRatio) / 100);
                    } else {
                        cpnDiscAmt += parseFloat(rowDatas[i].pdPrice) * parseFloat(nullToOne(rowDatas[i].pdCount)) - ( parseFloat(rowDatas[i].cpnPrice) * parseFloat(nullToOne(rowDatas[i].pdCount)) );
                        cpnDiscAmtArr.push(parseFloat(rowDatas[i].cpnPrice) * parseFloat(nullToOne(rowDatas[i].pdCount)));
                    }
                } else {
                    cpnDiscAmtArr.push(0);
                }
            }
        }
        discPriceSum = pdDiscAmt + cpnDiscAmt;
        priceSum = originalPriceSum - discPriceSum;
        var deliPrice = 0;
        if(originalPriceSum <= 30000) {
            deliPrice = 3000;
            $("#infoDeliPrice").text("배송비 포함");
        } else {
            deliPrice = 0;
            $("#infoDeliPrice").text("");
        }
        $("#orderDeliPrice").val(deliPrice); // 배송비

        $("#orderTotOdAmt").val(originalPriceSum); // 총주문금액
        $("#orderPdDiscAmt").val(pdDiscAmt); // 상품할인금액
        $("#orderCpnDiscAmt").val(cpnDiscAmt); // 쿠폰할인금액
        $("#orderTotDiscAmt").val(discPriceSum); // 총할인금액
        $("#orderTotPayAmt").val(priceSum + deliPrice); // 총결제금액

        $("#hiddenPdDiscAmt").val(pdDiscAmtArr); // 상품별 할인금액 배열
        $("#hiddenCpnDiscAmt").val(cpnDiscAmtArr); // 상품별 쿠폰할인금액 배열
        $("#hiddenPdCode").val(pdCodeArr); // 상품코드 배열
        $("#hiddenPdCnt").val(pdCountArr); // 상품개수 배열
        $("#hiddenCpnCode").val(cpnCodeArr); // 쿠폰코드 배열
        $("#hiddenPdOptCode").val(pdOptCodeArr); // 상품옵션코드 배열
    }

    var priceSum = 0; // 총 결제금액
    var originalPriceSum = 0; // 총 주문금액 (정가)
    var discPriceSum = 0; // 총 할인금액
    var pdDiscAmt = 0; // 상품할인금액
    var cpnDiscAmt = 0; // 쿠폰할인금액

    // 상품조회 추가 버튼 클릭시
    $("#orderPdAdd").click(function(){
        var checkedRows = gridViewPd.getCheckedRows();
        var addDatas = [];
        for (var i in checkedRows) {
            var chkData = providerPd.getJsonRow(checkedRows[i]);
            addDatas.push(chkData);
        }
        providerPdAdd.fillJsonData(addDatas, { fillMode: "insert"});

        calculProduct();
    });

    // 카운트에 아무 값도 없으면 1개로 판단
    function nullToOne(cnt) {
        if(cnt == null) {
            return 1;
        } else {
            return cnt;
        }
    }

    // 상품조회 초기화 버튼 클릭시
    $("#orderPdReset").click(function(){
        providerPd.clearRows();
    });
    // 추가된 상품조회 초기화 버튼 클릭시
    $("#orderPdAdReset").click(function(){
        providerPdAdd.clearRows();

        $("#orderTobeReserve").val(""); // 적립예정금액
        $("#orderDeliPrice").val(""); // 배송비
        $("#orderTotOdAmt").val(""); // 총주문금액
        $("#orderPdDiscAmt").val(""); // 상품할인금액
        $("#orderCpnDiscAmt").val(""); // 쿠폰할인금액
        $("#orderTotDiscAmt").val(""); // 총할인금액
        $("#orderTotPayAmt").val(""); // 총결제금액
    });
    // 상품조회 삭제 버튼 클릭시
    $("#orderPdRemove").click(function(){
        var checkedRows = gridViewPd.getCheckedRows();
        providerPd.removeRows(checkedRows);
    });
    // 추가된 상품조회 삭제 버튼 클릭시
    $("#orderPdAdRemove").click(function(){
        var checkedRows = gridViewPdAdd.getCheckedRows();
        providerPdAdd.removeRows(checkedRows);
        calculProduct();
    });

});