var memDetailPopup = {
   init: function() {
      $("#memDetailPopup").modal('show');
      memDetailPopup.initMemDetail();
   },
   bind: function() {

   },
   // 회원상세 조회
   initMemDetail: function() {

      var param = {
         memSeq : $("#popupMemSeq").val()
      }

      common.ajax('/mem/selectMemDetail', param, function(res) {
          console.log(res);
          var memDetail = res.memDetail;
          $("#userId").text(memDetail.userId);
          $("#userNm").text(memDetail.userNm);
          $("#age").text(memDetail.age);
          $("#regDate").text(dateUtil.getFormat(memDetail.regDate, 'yyyy-MM-dd'));
          $("#extdTerm").text(dateUtil.getFormat(memDetail.extdTerm, 'yyyy-MM-dd'));
          $("#gender").text(memDetail.gender);
          $("#loc").text(memDetail.loc);
          $("#rmrk").text(memDetail.rmrk);
          $("#memModal").modal('show');
          $("#memSeq").val(memDetail.memSeq);
      });
   },
   // 팝업창 닫기
   close: function() {
      window.close();
   },
   // 수정페이지 이동
   modify: function() {
      opener.popup.callback($("#popupMemSeq").val());
      memDetailPopup.close();
   }
};

$(function(){
   memDetailPopup.init();
});