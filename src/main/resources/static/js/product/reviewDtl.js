//상세화면 js

document.addEventListener('DOMContentLoaded', function () {
    var clickCustNm = opener.document.openForm.clickCustNm.value;
    var clickPdNm = opener.document.openForm.clickPdNm.value;
    var clickReviewDate = opener.document.openForm.clickReviewDate.value;
    var clickReviewTxt = opener.document.openForm.clickReviewTxt.value;
    var clickReviewLike = opener.document.openForm.clickReviewLike.value;

    $("#custNm").attr('value', clickCustNm);
    $("#pdNm").attr('value', clickPdNm);
    $("#reviewDate").attr('value', clickReviewDate);
    $("#reviewTxt").html(clickReviewTxt);
    $("#reviewLike").attr('value', clickReviewLike);

});