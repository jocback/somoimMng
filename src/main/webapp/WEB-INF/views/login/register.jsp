<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<div class="login-form-bg h-100">
    <div class="container h-100">
        <div class="row justify-content-center h-100">
            <div class="col-xl-6">
                <div class="form-input-content">
                    <div class="card login-form mb-0">
                        <div class="card-body pt-5">

                            <a class="text-center" href="index.html"> <h4>Rosella</h4></a>

                            <form class="mt-5 mb-5 login-input">
                                <div class="form-group">
                                    <input type="text" class="form-control"  placeholder="아이디" id="userId">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="비밀번호" id="userPw">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="이름" id="userNm">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control"  placeholder="나이" id="age">
                                </div>
                                <div class="form-group">
                                    <select class="custom-select mr-sm-2" id="gender">
                                        <option value="남">남</option>
                                        <option value="여">여</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control"  placeholder="지역" id="loc">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control"  placeholder="연락처" id="phone">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control"  placeholder="이메일" id="email">
                                </div>
                                <button type="button" class="btn login-form__btn submit w-100" onclick="register.join();">회원가입</button>
                            </form>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>