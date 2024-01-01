var paging = {
    drawPage: function(obj, funcName, totalInfo ) {
        // var totalCnt;		// 총데이터수
        // var perPage;	// 한페이지 글수
        var pageHtml = '';
        var pageCount = 10;		// 페이징에 노출되는 페이지 수
        // var currentPage;	// 현재 페이지
        var totalPage;
        let pageGroup;
        let last;
        let first;
        let next;
        let prev;
        let currentPage = totalInfo.pageNum;
        let totalCnt = totalInfo.total;
        let perPage = totalInfo.pageSize;
        let strtCnt = 1+(currentPage-1)*perPage;
        let endCnt = currentPage*perPage;

        pageHtml += '<div class="col-sm-12 col-md-5">';
        pageHtml += '    <div>Showing '+strtCnt+' to '+endCnt+' of '+totalCnt+' entries</div>';
        pageHtml += '</div>';

        if(common.isEmpty(perPage)) {
            perPage = 10;
        }
        // if(common.isEmpty(pageCount)) {
        //     pageCount = 10;
        // }
        if(common.isEmpty(currentPage)) {
            currentPage = 1;
        }


        totalPage = Math.ceil(totalCnt / perPage);		// 11/10 = 2

        if (totalPage < pageCount) {
            pageCount = totalPage;
        }

        pageGroup = Math.ceil(currentPage / pageCount);		// 11/10 = 2
        last = pageGroup * pageCount;						// 2*10 = 20


        if (last > totalPage) {
            last = totalPage;
        }

        first = last - (pageCount - 1);						// 20-(10-1) = 11
        next = last + 1;										// 21
        prev = first - 1;										// 10

        pageHtml += '<div class="col-sm-12 col-md-7">';
        pageHtml += '    <div class="paging_simple_numbers">';

        pageHtml += '<ul class="pagination">';

        if (prev > 0) {
            // pageHtml += "<li><a href='#' id='prev'> 이전 </a></li>";
            pageHtml += '<li class="paginate_button page-item">';
            pageHtml += '    <a href="javascript:'+funcName+'('+i+')" class="page-link">Previous</a>';
            pageHtml += '</li>';
        }

        for (var i = first; i <= last; i++) {
            if (currentPage == i) {

                pageHtml += '<li class="paginate_button page-item active">';
                pageHtml += '    <a href="javascript:'+funcName+'('+i+')" class="page-link">'+i+'</a>';
                pageHtml += '</li>';


            } else {
                pageHtml += '<li class="paginate_button page-item">';
                pageHtml += '    <a href="javascript:'+funcName+'('+i+')" class="page-link">'+i+'</a>';
                pageHtml += '</li>';
            }
        }

        if (last < totalPage) {
            pageHtml += '<li class="paginate_button page-item next">';
            pageHtml += '    <a href="javascript:'+funcName+'('+i+')" class="page-link">Next</a>';
            pageHtml += '</li>';
        }

        pageHtml += '</ul>';
        pageHtml += '    </div>';
        pageHtml += '</div>';

        if(typeof(obj)=='string'){
            $("#"+obj).html(pageHtml);
        }else{
            $(obj).html(pageHtml);
        }
    }
}