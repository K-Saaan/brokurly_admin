//상세화면 js

document.addEventListener('DOMContentLoaded', function () {
    // 등록 버튼 눌렀을 경우
    $("#regCpn").click(function () {
        var regParam = {
            cpnCode: $("#cpnDtlCpnCode").val(),
            cpnGubun: $("#cpnDtlCpnGubun").val(),
            cpnNm: $("#cpnDtlCpnNm").val(),
            cpnStat: "10",
            createDate: $("#cpnDtlCreateDate").val(),
            endDate: $("#cpnDtlEndDate").val(),
            cpnPrice: $("#cpnDtlCpnPrice").val(),
            cpnRatio: $("#cpnDtlCpnRatio").val(),
            maxAmt: $("#cpnDtlMaxAmt").val(),
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
    });
});