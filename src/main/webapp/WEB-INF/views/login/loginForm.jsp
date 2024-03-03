<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<input type="hidden" id="redirectUrl" value="${redirectUrl}"/>
<input type="hidden" id="encPw" name="encPw"/>
<div class="login-form-bg h-100">
    <div class="container h-100">
        <div class="row justify-content-center h-100">
            <div class="col-xl-6">
                <div class="form-input-content">
                    <div class="card login-form mb-0">
                        <div class="card-body pt-5">
                            <a class="text-center" href="javascript:void(0);"> <h4>로그인</h4></a>

                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="아이디" id="userId">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="비밀번호" id="userPw">
                            </div>
                            <button type="button" class="btn login-form__btn submit w-100"  onclick="loginForm.signin();">Sign In</button>

                            <p class="mt-5 login-form__footer">Dont have account? <a href="javascript:void(0);" class="text-primary" onclick="loginForm.goRegister();">Sign Up</a> now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>