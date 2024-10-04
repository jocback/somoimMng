<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<input type="hidden" id="popupSchSeq" value="${schSeq}"/>

<!-- Modal -->
<div class="modal fade" id="schDetailModal">
    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">일정 상세</h5>
            </div>
            <input type="hidden" id="schSeq" name="schSeq" value=""/>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-bordered table-hover dataTable dtr-inline text-nowrap">
                                <tr>
                                    <textarea class="col-9" rows="10" id="resultTxt"></textarea>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="schDetailPopup.modify();">수정</button>
                <button type="button" class="btn btn-secondary" onclick="schDetailPopup.close();">닫기</button>
                <%--                    <button type="button" class="btn btn-primary">Save changes</button>--%>
            </div>
        </div>
    </div>
</div>