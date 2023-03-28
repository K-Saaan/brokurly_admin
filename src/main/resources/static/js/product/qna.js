document.addEventListener('DOMContentLoaded', function () {
    // 메인그리드를 그리기 위한 사전 설정
    const container = document.getElementById('realgridQna');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);

    gridView.setDataSource(provider);

    gridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정

    var realPath = location.href; // http://localhost:8080/member/show 같은 full URL
    var urlIndex = realPath.lastIndexOf("/");
    var usingUrl = realPath.substr(0, urlIndex); // full URL에서 http://localhost:8080/member 까지만 자른 URL

    // 메인그리드 컬럼
    provider.setFields([
        {
            fieldName: "qnaCode",
            dataType: "text",
        },
        {
            fieldName: "userId",
            dataType: "text",
        },
        {
            fieldName: "custCode",
            dataType: "text",
        },
        {
            fieldName: "pdCode",
            dataType: "text",
        },
        {
            fieldName: "qnaTitle",
            dataType: "text",
        },
        {
            fieldName: "qnaDesc",
            dataType: "text",
        },
        {
            fieldName: "qnaReply",
            dataType: "text",
        },
        {
            fieldName: "openYn",
            dataType: "text",
        },
        {
            fieldName: "writeDate",
            dataType: "int",
        },
        {
            fieldName: "qnaState",
            dataType: "text",
        },
        {
            fieldName: "comDate",
            dataType: "text",
        },
        {
            fieldName: "mngId",
            dataType: "text",
        },
        {
            fieldName: "regId",
            dataType: "text",
        },
        {
            fieldName: "regDate",
            dataType: "text",
        },
        {
            fieldName: "chgrId",
            dataType: "text",
        },
        {
            fieldName: "chgrDate",
            dataType: "text",
        },
    ]);

    gridView.setColumns([
        {
            name: "qnaCode",
            fieldName: "qnaCode",
            type: "data",
            width: "120",
            header: {
                text: "문의코드",
            },
        },
        {
            name: "userId",
            fieldName: "userId",
            type: "data",
            width: "120",
            header: {
                text: "유저아이디",
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
            name: "pdCode",
            fieldName: "pdCode",
            type: "data",
            width: "120",
            header: {
                text: "상품코드",
            },
        },
        {
            name: "qnaTitle",
            fieldName: "qnaTitle",
            type: "data",
            width: "120",
            header: {
                text: "문의제목",
            },
        },
        {
            name: "qnaDesc",
            fieldName: "qnaDesc",
            type: "data",
            width: "120",
            header: {
                text: "문의내용",
            },
        },
        {
            name: "qnaReply",
            fieldName: "qnaReply",
            type: "data",
            width: "120",
            header: {
                text: "답변내용",
            },
        },
        {
            name: "openYn",
            fieldName: "openYn",
            type: "data",
            width: "120",
            header: {
                text: "공개여부",
            },
        },
        {
            name: "writeDate",
            fieldName: "writeDate",
            type: "data",
            width: "120",
            header: {
                text: "작성일시",
            },
        },
        {
            name: "qnaState",
            fieldName: "qnaState",
            type: "data",
            width: "120",
            header: {
                text: "문의상태",
            },
        },
        {
            name: "comDate",
            fieldName: "comDate",
            type: "data",
            width: "120",
            header: {
                text: "완료일시",
            },
        },
        {
            name: "mngId",
            fieldName: "mngId",
            type: "data",
            width: "120",
            header: {
                text: "관리자아이디",
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
            type: "data",
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
            type: "data",
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
    $('#qnaPdCode').keypress(function(event) {
        if(event.keyCode == 13){
            $("#qnaSearch").trigger("click");
        }
    });
    $('#qnaCustCode').keypress(function(event) {
        if(event.keyCode == 13){
            $("#qnaSearch").trigger("click");
        }
    });

    // 문의 조회 조회버튼 클릭시
    $("#qnaSearch").click(function(){
        provider.clearRows(); // 서브 그리드 비우기
        pagingIndex = 0;
        pagingRows = 50;
        var param = {
            PD_CODE		:	$("#qnaPdCode").val(),
            CUST_CODE		:	$("#qnaCustCode").val(),
            pagingIndex		:	pagingIndex,
            pagingRows		:	pagingRows
        };
        ajax("/product/showQna", param, function(returnData){
            totalCount = returnData.codeList.totalElements;
            countData = returnData.codeList.size;
            $("#cntPdQna").text(totalCount); // 화면에 조회건수 출력
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
    $("#qnaExcel").click(function(){
        if(totalCount > 0) {
            gridView.exportGrid({
                type: 'excel',
                fileName: "문의 정보 조회.xlsx"
            })
        } else {
            alert("조회된 데이터가 없습니다.");
        }
    });
    // 메인그리드 클릭했을때 해당 데이터의 세부정보를 서브그리드에 보여주기위함
    function gridCellClicked(){
        gridView.onCellClicked = function(grid, clickData){
//			var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
//			var pdcode = selectOneData.pdcode;
//			var param = {
//					PRODUCT_CODE	:	pdcode
//			}
//			ajax("/product/showProductDtl", param, function(returnData){
//				var detailData = returnData.codeList;
//				subprovider.fillJsonData(detailData, { fillMode : "set"});
//			})
        }
    }
    // 메인그리드 더블클릭했을때 모달 호출
    function gridDblCellClicked(){
        gridView.onCellDblClicked = function(grid, clickData){
            var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
            var qnaCode = selectOneData.qnaCode;
            $("#qnaClickQnaCode").val(qnaCode);
            openPopup(usingUrl + "/qna/detail", "문의 상세정보 조회", 800, 700);
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
                PD_CODE		:	$("#qnaPdCode").val(),
                CUST_CODE		:	$("#qnaCustCode").val(),
                pagingIndex		:	pagingIndex,
                pagingRows		:	pagingRows
            };
            ajax("/product/showQna", param, function(returnData){
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