document.addEventListener('DOMContentLoaded', function () {
    // 메인그리드를 그리기 위한 사전 설정
    const container = document.getElementById('realgridNotice');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);

    gridView.setDataSource(provider);

    gridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    gridView.displayOptions.fitStyle = "fill"; // 그리드 컬럼 너비 자동조정
    // 데이트피커 날짜 형식 지정
    $(".datepicker").datepicker({
        dateFormat: "yy-mm-dd"
    });

    var realPath = location.href; // http://localhost:8080/member/show 같은 full URL
    var urlIndex = realPath.lastIndexOf("/");
    var usingUrl = realPath.substr(0, urlIndex); // full URL에서 http://localhost:8080/member 까지만 자른 URL

    // 메인그리드 컬럼
    provider.setFields([
        {
            fieldName: "noticeSeqNo",
            dataType: "text",
        },
        {
            fieldName: "noticeTitle",
            dataType: "text",
        },
        {
            fieldName: "noticeWriter",
            dataType: "text",
        },
        {
            fieldName: "noticeDt",
            dataType: "text",
        },
        {
            fieldName: "noticeDesc",
            dataType: "text",
        },
        {
            fieldName: "noticeStat",
            dataType: "text",
        },
        {
            fieldName: "openYn",
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
            name: "noticeSeqNo",
            fieldName: "noticeSeqNo",
            type: "data",
            width: "120",
            header: {
                text: "공지사항시퀀스번호",
            },
        },
        {
            name: "noticeTitle",
            fieldName: "noticeTitle",
            type: "data",
            width: "300",
            styleName: "left-align",
            header: {
                text: "제목",
            },
        },
        {
            name: "noticeWriter",
            fieldName: "noticeWriter",
            type: "data",
            width: "120",
            header: {
                text: "작성자",
            },
        },
        {
            name: "noticeDt",
            fieldName: "noticeDt",
            type: "data",
            width: "120",
            header: {
                text: "작성일",
            },
        },
        {
            name: "noticeDesc",
            fieldName: "noticeDesc",
            type: "data",
            width: "400",
            styleName: "left-align",
            header: {
                text: "내용",
            },
        },
        {
            name: "noticeStat",
            fieldName: "noticeStat",
            type: "data",
            width: "120",
            header: {
                text: "유형",
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
    $('#noticeTitle').keypress(function(event) {
        if(event.keyCode == 13){
            $("#noticeSearch").trigger("click");
        }
    });

    // 조회버튼 클릭시
    $("#noticeSearch").click(function(){
        provider.clearRows(); // 서브 그리드 비우기
        pagingIndex = 0;
        pagingRows = 50;
        var param = {
            NOTICE_TITLE			:	$("#noticeTitle").val(),
            pagingIndex		:	pagingIndex,
            pagingRows		:	pagingRows
        };
        ajax("/etc/showNotice", param, function(returnData){
            totalCount = returnData.codeList.totalElements;
            countData = returnData.codeList.size;
            $("#cntNotice").text(totalCount); // 화면에 조회건수 출력
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
    $("#noticeExcel").click(function(){
        if(totalCount > 0) {
            gridView.exportGrid({
                type: 'excel',
                fileName: "공지사항 정보 조회.xlsx"
            })
        } else {
            alert("조회된 데이터가 없습니다.");
        }
    });
    // 메인그리드 클릭했을때 해당 데이터의 세부정보를 서브그리드에 보여주기위함
    function gridCellClicked(){
        gridView.onCellClicked = function(grid, clickData){
            // var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
            // var pdCode = selectOneData.pdCode;
            // var param = {
            //     PRODUCT_CODE	:	pdCode
            // }
            // ajax("/product/showProductDtl", param, function(returnData){
            //     var detailData = returnData.codeList;
            //     subprovider.fillJsonData(detailData, { fillMode : "set"});
            // })
        }
    }
    // 메인그리드 더블클릭했을때 모달 호출
    function gridDblCellClicked(){
        gridView.onCellDblClicked = function(grid, clickData){
            // var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
            // var pdCode = selectOneData.pdCode;
            // $("#clickData").val(custCode);
            // openPopup(usingUrl + "/detail", "고객 상세정보 조회", 800, 600);
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
                NOTICE_TITLE			:	$("#noticeTitle").val(),
                pagingIndex		:	pagingIndex,
                pagingRows		:	pagingRows
            };
            ajax("/etc/showNotice", param, function(returnData){
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
    // 드롭다운 리스트 밖으로 마우스 옮겼을때 드롭다운 해제되도록 설정
    $(".dropdown-toggle").mouseleave(function(){
        $(".dropdown-menu").mouseover(function(){
            $('.dropdown-menu').show();
            $('.dropdown-item').show();
        });
        $(".dropdown-menu").mouseleave(function(){
            $('.dropdown-menu').hide();
            $('.dropdown-item').hide();
        })
    });

});