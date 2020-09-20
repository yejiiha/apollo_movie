import React from "react";
import "./css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
function Login() {
  return (
    <div>
      <header>
        <ul class="header__list" id="right">
          <ul class="header__login">
            <a href="login.html">로그인</a>
          </ul>
          <ul class="header__signin">
            <a href="signin.html">회원가입</a>
          </ul>
        </ul>
        <ul class="header__list">
          <ul class="header__movie">영화</ul>
          <ul class="header__timetable">상영시간표</ul>
          <ul class="header__logo">
            <a href="index.html">로고</a>
          </ul>
          <ul class="header__theater">극장선택</ul>
          <ul class="header__search">
            <FontAwesomeIcon icon={faSearch} />
          </ul>
          <ul class="header__user">
            <FontAwesomeIcon icon={faUser} />
          </ul>
        </ul>
      </header>
      <main>
        <div class="main__title">
          <h3>LOGIN</h3>
          <p>로그인 하시면 다양하고 특별한 혜택을 이용할 수 있습니다.</p>
        </div>
        <div class="main__content">
          <input type="text" class="login__id" placeholder="  아이디" />
          <input type="password" class="login__pw" placeholder="  비밀번호" />
          <div class="login__check-save">
            <input type="checkbox" class="login__checkbox" />
            <label>아이디 저장</label>
          </div>
        </div>
        <div class="main__button">
          <button class="login__btnLogin">
            <a href="index.html">로그인</a>
          </button>
          <button class="login__btnSign">
            <a href="signin.html">회원가입</a>
          </button>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
export default Login;
