//상세화면 js

document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    // 데이트피커 날짜 형식 지정
    $(".datepicker").datepicker({
        dateFormat: "yymmdd000000"
    });
    // 등록일 경우
    if($("#clickStateCpn", opener.document).val() == "REG") {
        $("#regCpn").text("등록");
        $("#cpnDtlCpnCode").attr("readonly", false); // 등록일때는 쿠폰코드 readonly 해제
        $("#cpnCodeDiv").hide(); // 등록일때는 쿠폰코드 div는 안보이게.
        $("#cpnStateDiv").hide(); // 등록일때는 쿠폰상태 div는 안보이게. 어차피 초기값은 10으로 고정이니까.
        // 등록 버튼 눌렀을 경우
        $("#regCpn").click(function () {
            var reply = confirm("등록하시겠습니까?");
            if(reply) {
                var regParam = {
                    cpnGubun: $("#cpnDtlCpnGubun").val(),
                    cpnNm: $("#cpnDtlCpnNm").val(),
                    cpnStat: "10",
                    startDate: $("#cpnDtlStartDate").val(),
                    endDate: $("#cpnDtlEndDate").val(),
                    cpnPrice: nullChk($("#cpnDtlCpnPrice").val()),
                    cpnRatio: nullChk($("#cpnDtlCpnRatio").val()),
                    minOdAmt: nullChk($("#cpnDtlMinOdAmt").val()),
                    maxAmt: nullChk($("#cpnDtlMaxAmt").val()),
                    dtlDesc: $("#cpnDtlDtlDesc").val(),
                    useReq: $("#cpnDtlUseReq").val(),
                    regId: $("#myId").html()
                };
                ajax("/product/regCoupon", regParam, function (returnData) {
                    if (returnData == 1) {
                        alert("등록이 완료됐습니다.");
                        $("#couponSearch", opener.document).trigger("click");
                        window.close();
                    } else {
                        alert("register fail!");
                    }
                })
            }
        });
    }
    // 수정일 경우
    else if($("#clickStateCpn", opener.document).val() == "MOD") {
        $("#regCpn").text("수정");
        $("#cpnDtlCpnCode").attr("readonly", true); // 수정일때는 쿠폰코드 readonly 설정
        // 부모창 그리드에서 가져온 쿠폰 코드 값
        var modalCpnCode = $("#clickCouponCode", opener.document).val();
        var modParam = {
            CPN_CODE    :   modalCpnCode
        }
        ajax("/product/modCpnInfo", modParam, function (returnData) {
            var gridData = returnData.codeList;
            $("#cpnDtlCpnCode").attr('value', gridData[0].cpnCode);
            $("#cpnDtlCpnGubun").attr('value', gridData[0].cpnGubun);
            $("#cpnDtlCpnNm").attr('value', gridData[0].cpnNm);
            $("#cpnDtlCpnStat").attr('value', gridData[0].cpnStat);
            $("#cpnDtlStartDate").attr('value', gridData[0].startDate);
            $("#cpnDtlEndDate").attr('value', gridData[0].endDate);
            $("#cpnDtlCpnPrice").attr('value', parseFloat(gridData[0].cpnPrice));
            $("#cpnDtlCpnRatio").attr('value', parseFloat(gridData[0].cpnRatio));
            $("#cpnDtlMinOdAmt").attr('value', parseFloat(gridData[0].minOdAmt));
            $("#cpnDtlMaxAmt").attr('value', parseFloat(gridData[0].maxAmt));
            $("#cpnDtlDtlDesc").attr('value', gridData[0].dtlDesc);
            $("#cpnDtlUseReq").val(gridData[0].useReq);
        })

        // 수정 버튼 눌렀을 경우
        $("#regCpn").click(function () {
            var reply = confirm("수정하시겠습니까?");
            if(reply) {
                if($("#cpnDtlCpnCode").val() == "") {
                    alert("쿠폰코드는 필수값입니다.");
                    return;
                }
                var modParam = {
                    cpnCode: $("#cpnDtlCpnCode").val(),
                    cpnGubun: $("#cpnDtlCpnGubun").val(),
                    cpnNm: $("#cpnDtlCpnNm").val(),
                    cpnStat: $("#cpnDtlCpnStat").val(),
                    startDate: $("#cpnDtlStartDate").val(),
                    endDate: $("#cpnDtlEndDate").val(),
                    cpnPrice: nullChk(parseFloat($("#cpnDtlCpnPrice").val())),
                    cpnRatio: nullChk(parseFloat($("#cpnDtlCpnRatio").val())),
                    minOdAmt: nullChk(parseFloat($("#cpnDtlMinOdAmt").val())),
                    maxAmt: nullChk(parseFloat($("#cpnDtlMaxAmt").val())),
                    dtlDesc: $("#cpnDtlDtlDesc").val(),
                    useReq: $("#cpnDtlUseReq").val(),
                    chgrId: $("#myIdCpn").text(),
                    chgrDate: today
                };
                ajax("/product/modCpn/" + modalCpnCode, modParam, function (returnData) {
                    if (returnData == 1) {
                        alert("수정이 완료됐습니다.");
                        $("#couponSearch", opener.document).trigger("click");
                        window.close();
                    } else {
                        alert("update fail!");
                    }
                })
            }
        });
    }

});