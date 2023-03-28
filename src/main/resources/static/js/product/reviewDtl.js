//상세화면 js

document.addEventListener('DOMContentLoaded', function () {
    var clickCustNm = opener.document.openForm.clickCustNm.value;
    var clickPdNm = opener.document.openForm.clickPdNm.value;
    var clickReviewDate = opener.document.openForm.clickReviewDate.value;
    var clickReviewTxt = opener.document.openForm.clickReviewTxt.value;
    var clickReviewLike = opener.document.openForm.clickReviewLike.value;

    $("#rvDtCustNm").attr('value', clickCustNm);
    $("#rvDtPdNm").attr('value', clickPdNm);
    $("#rvDtReviewDate").attr('value', clickReviewDate);
    $("#rvDtReviewTxt").html(clickReviewTxt);
    $("#rvDtReviewLike").attr('value', clickReviewLike);

});