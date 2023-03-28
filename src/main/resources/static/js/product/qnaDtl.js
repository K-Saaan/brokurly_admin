//상세화면 js

document.addEventListener('DOMContentLoaded', function () {
    var qnaClickQnaCode = opener.document.openForm.qnaClickQnaCode.value;

    var param = {
        QNA_CODE		:	qnaClickQnaCode
    };
    ajax("/product/showQnaDtl", param, function(returnData){
        var gridData = returnData.codeList;
        var qnaState;
        if(gridData[0].qnaState == 10) {
            qnaState = "답변대기중"
        } else {
            qnaState = "답변완료"
        }
        $("#qnaDtlQnaCode").attr('value', gridData[0].qnaCode);
        $("#qnaDtlQnaTitle").attr('value', gridData[0].qnaTitle);
        $("#qnaDtlCustCode").attr('value', gridData[0].custCode);
        $("#qnaDtlPdCode").attr('value', gridData[0].pdCode);
        $("#qnaDtlQnaDesc").html(gridData[0].qnaDesc);
        $("#qnaDtlWriteDate").attr('value', gridData[0].writeDate);
        $("#qnaDtlQnaState").attr('value', qnaState);
        $("#qnaDtlQnaStateVal").attr('value', gridData[0].qnaState);
        $("#qnaDtlQnaReply").attr('value', gridData[0].qnaReply);
    })

    // 답변 버튼 눌렀을 경우
    $("#replyQna").click(function(){
        var updateParam = {
            qnaCode	:	$("#qnaDtlQnaCode").val(),
            qnaReply :	$("#qnaDtlQnaReply").val(),
            qnaState :	20
        };
        ajax("/product/replyQna/" + qnaClickQnaCode, updateParam, function(returnData){
            if(returnData == 1) {
                alert("수정이 완료됐습니다.");
                window.close();
            } else {
                alert("update fail!");
            }
        })
    });
});