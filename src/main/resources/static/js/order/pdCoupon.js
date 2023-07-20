document.addEventListener('DOMContentLoaded', function () {
    // 쿠폰가그리드를 그리기 위한 사전 설정
    const containerCpn = document.getElementById('orderPrdCpnGrid');
    const providerCpn = new RealGrid.LocalDataProvider(false);
    const gridViewCpn = new RealGrid.GridView(containerCpn);

    gridViewCpn.setDataSource(providerCpn);
    gridViewCpn.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridViewCpn.setStateBar({visible: false});

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

    var modalPdCode = $("#clickPdCode", opener.document).val();
    var modalCustCode = $("#clickCustCode", opener.document).val();

    var param = {
        PD_CODE		:	modalPdCode,
        CUST_CODE   :   modalCustCode
    };

    // 쿠폰가 조회
    ajax("/product/showPdCpnPrice", param, function(returnData){
        var gridDataCpn = returnData.codeList;
        providerCpn.fillJsonData(gridDataCpn, { fillMode : "fill"});
    })

    // 쿠폰 적용 버튼 클릭시
    $("#useCpn").click(function(){
        var checkedCpn = gridViewCpn.getCheckedRows();

        if(checkedCpn.length == 0) {
            alert("적용할 쿠폰을 선택하십시오.")
            return;
        }
        if(checkedCpn.length > 1) {
            alert("1개의 쿠폰만 선택하십시오.")
            return;
        }
        var cpnCode = providerCpn.getJsonRow(checkedCpn[0]).cpnCode;
        var cpnNm = providerCpn.getJsonRow(checkedCpn[0]).cpnNm;
        var cpnPrice = providerCpn.getJsonRow(checkedCpn[0]).cpnPrice;
        var cpnRatio = providerCpn.getJsonRow(checkedCpn[0]).cpnRatio;
        var useYn = providerCpn.getJsonRow(checkedCpn[0]).useYn;
        var minOdAmt = providerCpn.getJsonRow(checkedCpn[0]).minOdAmt;
        var maxAmt = providerCpn.getJsonRow(checkedCpn[0]).maxAmt;

        if(useYn != 'Y') {
            alert("사용가능한 쿠폰이 아닙니다.")
            return;
        }

        window.close();
        $("#bindCpnCode", opener.document).val(cpnCode);
        $("#bindCpnNm", opener.document).val(cpnNm);
        $("#bindCpnPrice", opener.document).val(cpnPrice);
        $("#bindCpnRatio", opener.document).val(cpnRatio);
        $("#bindMinOdAmt", opener.document).val(minOdAmt);
        $("#bindMaxAmt", opener.document).val(maxAmt);
        $("#useCpnBtn", opener.document).trigger("click");
    });

});