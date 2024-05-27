<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<input type="hidden" id="popupMemSeq" value="${memSeq}"/>

<!-- Modal -->
<div class="modal fade" id="memDetailPopup">
    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">일정 상세</h5>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-bordered table-hover dataTable dtr-inline text-nowrap">
                                <tr>
                                    <th class="text-center col-3">아이디</th>
                                    <td class="col-9" id="userId"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">이름</th>
                                    <td class="col-9" id="userNm"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">나이</th>
                                    <td class="col-9" id="age"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">가입일</th>
                                    <td class="col-9" id="regDate"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">연장기간</th>
                                    <td class="col-9" id="extdTerm"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">성별</th>
                                    <td class="col-9" id="gender"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">사는지역</th>
                                    <td class="col-9" id="loc"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">메모</th>
                                    <td class="col-9" id="rmrk"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="memDetailPopup.modify();">수정</button>
                <button type="button" class="btn btn-secondary" onclick="memDetailPopup.close();">닫기</button>
            </div>
        </div>
    </div>
</div>