!function(e){var i={};function s(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=i,s.d=function(e,i,n){s.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,i){if(1&i&&(e=s(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var t in e)s.d(n,t,function(i){return e[i]}.bind(null,t));return n},s.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(i,"a",i),i},s.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},s.p="./",s(s.s=87)}({4:function(e,i,s){"use strict";var n=Object.prototype.hasOwnProperty;function t(e,i){return Array.isArray(e)?function(e,i){for(var s,n="",a="",r=Array.isArray(i),l=0;l<e.length;l++)(s=t(e[l]))&&(r&&i[l]&&(s=o(s)),n=n+a+s,a=" ");return n}(e,i):e&&"object"==typeof e?function(e){var i="",s="";for(var t in e)t&&e[t]&&n.call(e,t)&&(i=i+s+t,s=" ");return i}(e):e||""}function a(e){if(!e)return"";if("object"==typeof e){var i="";for(var s in e)n.call(e,s)&&(i=i+s+":"+e[s]+";");return i}return e+""}function r(e,i,s,n){if(!1===i||null==i||!i&&("class"===e||"style"===e))return"";if(!0===i)return" "+(n?e:e+'="'+e+'"');var t=typeof i;return"object"!==t&&"function"!==t||"function"!=typeof i.toJSON||(i=i.toJSON()),"string"==typeof i||(i=JSON.stringify(i),s||-1===i.indexOf('"'))?(s&&(i=o(i))," "+e+'="'+i+'"'):" "+e+"='"+i.replace(/'/g,"&#39;")+"'"}i.merge=function e(i,s){if(1===arguments.length){for(var n=i[0],t=1;t<i.length;t++)n=e(n,i[t]);return n}for(var r in s)if("class"===r){var l=i[r]||[];i[r]=(Array.isArray(l)?l:[l]).concat(s[r]||[])}else if("style"===r){l=(l=a(i[r]))&&";"!==l[l.length-1]?l+";":l;var o=a(s[r]);o=o&&";"!==o[o.length-1]?o+";":o,i[r]=l+o}else i[r]=s[r];return i},i.classes=t,i.style=a,i.attr=r,i.attrs=function(e,i){var s="";for(var l in e)if(n.call(e,l)){var o=e[l];if("class"===l){o=t(o),s=r(l,o,!1,i)+s;continue}"style"===l&&(o=a(o)),s+=r(l,o,!1,i)}return s};var l=/["&<>]/;function o(e){var i=""+e,s=l.exec(i);if(!s)return e;var n,t,a,r="";for(n=s.index,t=0;n<i.length;n++){switch(i.charCodeAt(n)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}t!==n&&(r+=i.substring(t,n)),t=n+1,r+=a}return t!==n?r+i.substring(t,n):r}i.escape=o,i.rethrow=function e(i,n,t,a){if(!(i instanceof Error))throw i;if(!("undefined"==typeof window&&n||a))throw i.message+=" on line "+t,i;try{a=a||s(5).readFileSync(n,"utf8")}catch(s){e(i,null,t)}var r=3,l=a.split("\n"),o=Math.max(t-r,0),c=Math.min(l.length,t+r);r=l.slice(o,c).map((function(e,i){var s=i+o+1;return(s==t?"  > ":"    ")+s+"| "+e})).join("\n");i.path=n;try{i.message=(n||"Pug")+":"+t+"\n"+r+"\n\n"+i.message}catch(e){}throw i}},5:function(e,i){},87:function(e,i,s){"use strict";s.r(i);s(88),s(89),s(90)},88:function(e,i,s){var n=s(4);e.exports=function(e){var i,s="",t={},a=e||{};return function(e,a){const r="https://www.ddccomputer.com";s=(s+='<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">')+'<meta http-equiv="Content-Security-Policy"'+n.attr("content",`script-src 'self' ${r} https: 'unsafe-inline'; font-src 'self' ${r} http://fonts.gstatic.com; img-src 'self' ${r}`,!0,!0)+'><title>학과소개</title><link rel="stylesheet" href="/css/common.css"><link rel="stylesheet" href="/css/info.css"><script defer src="/es5/common.js"><\/script><script defer src="/es5/info.js"><\/script></head><body>',t.icon=i=function(t,a,r){this&&this.block,this&&this.attributes;switch(t){case"close":s=s+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="105 105 300 300"><title>'+n.escape(null==(i=a)?"":i)+'</title><path fill="none"'+n.attr("stroke",r,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M368 368L144 144M368 144L144 368"></path></svg>';break;case"chevronForward":s=s+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="105 100 300 320"><title>'+n.escape(null==(i=a)?"":i)+'</title><path fill="none"'+n.attr("stroke",r,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M184 112l144 144-144 144"></path></svg>';break;case"chevronBackward":s=s+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="105 100 300 320"><title>'+n.escape(null==(i=a)?"":i)+'</title><path fill="none"'+n.attr("stroke",r,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M328 112L184 256l144 144"></path></svg>';break;case"chevronDown":s=s+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="105 105 300 300"><title>'+n.escape(null==(i=a)?"":i)+'</title><path fill="none"'+n.attr("stroke",r,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 184l144 144 144-144"></path></svg>';break;case"caretDown":s=s+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="91 91 330 330"><title>'+n.escape(null==(i=a)?"":i)+"</title><path"+n.attr("fill",r,!0,!0)+' d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path></svg>';break;case"home":s=s+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 25 480 480"><title>'+n.escape(null==(i=a)?"":i)+'</title><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none"'+n.attr("stroke",r,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none"'+n.attr("stroke",r,!0,!0)+' stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>';break;case"menu":s=s+'<svg xmlns="http://www.w3.org/2000/svg" viewbox="105 105 300 300"><title>'+n.escape(null==(i=a)?"":i)+'</title><path fill="none"'+n.attr("stroke",r,!0,!0)+' stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M80 160h352M80 256h352M80 352h352"></path></svg>';break;case"github":s=s+'<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 1000"><title>'+n.escape(null==(i=a)?"":i)+"</title><path"+n.attr("fill",r,!0,!0)+' d="M500,10C236.3,10,22.6,229.4,22.6,500c0,270.6,213.8,490,477.4,490c263.7,0,477.4-219.4,477.4-490C977.4,229.4,763.7,10,500,10z M643.3,940.1c-23,4.6-31.1-9.9-31.1-22.3c0-15.2,0.5-65.2,0.5-127.2c0-43.3-14.5-71.6-30.7-86c100.8-11.4,206.5-50.7,206.5-228.8c0-50.6-17.5-92.1-46.5-124.5c4.6-11.7,20.2-58.8-4.5-122.7c0,0-37.9-12.5-124.3,47.6c-36.1-10.3-74.8-15.5-113.2-15.7c-38.5,0.2-77.2,5.3-113.2,15.7c-86.4-60-124.4-47.6-124.4-47.6c-24.6,63.9-9.1,111-4.4,122.7c-28.9,32.4-46.5,73.8-46.5,124.5c0,177.7,105.6,217.5,206,229.2c-12.9,11.6-24.6,32-28.7,62c-25.8,11.8-91.3,32.3-131.6-38.6c0,0-23.9-44.5-69.3-47.8c0,0-44.2-0.6-3.1,28.2c0,0,29.7,14.2,50.2,67.8c0,0,26.6,90.2,152.4,62.2c0.2,38.7,0.6,67.9,0.6,78.9c0,12.3-8.2,26.6-30.9,22.3c-179.8-61.3-309.3-235.1-309.3-440C47.7,244,250.2,36.4,500,36.4c249.8,0,452.3,207.6,452.3,463.8C952.3,705,822.8,878.7,643.3,940.1z"></path></svg>';break;default:s=s+'<p style="color:red;">icon mixin에 존재하지 않는 인자 '+n.escape(null==(i=e)?"":i)+"이(가) 전달되었습니다.</p>"}},t["sub-contents__item__icon"]=i=function(e){this&&this.block,this&&this.attributes;s+='<div class="sub-contents__item__icon">',t.icon(e,"","#0f0f0f"),s+="</div>"},s+='\n<header class="header"><a class="header__logo" href="/"><div class="header__logo__icon"></div><div class="header__logo__txt"><span>대덕대학교</span><span>컴퓨터정보학과</span></div></a><div class="header-menu"><ul class="header-menu__list"><li class="header-menu__item"><a class="header-menu__title" href="/intro/info">학과소개</a><div class="header-menu-dropdown"><div class="header-menu-dropdown__list"><a class="header-menu-dropdown__link" href="/intro/info">학과소개</a><a class="header-menu-dropdown__link" href="/intro/member">구성원</a><a class="header-menu-dropdown__link" href="/intro/env">교육 환경</a><a class="header-menu-dropdown__link" href="/intro/club">동아리</a></div></div></li><li class="header-menu__item"><a class="header-menu__title" href="/milestone/curriculum">학과진로</a><div class="header-menu-dropdown"><div class="header-menu-dropdown__list"><a class="header-menu-dropdown__link" href="/milestone/curriculum">교육 목표</a><a class="header-menu-dropdown__link" href="/milestone/cert">자격증 소개</a><a class="header-menu-dropdown__link" href="/milestone/career">진로 설정</a>\n</div></div></li><li class="header-menu__item"><a class="header-menu__title" href="/community/board">커뮤니티</a><div class="header-menu-dropdown"><div class="header-menu-dropdown__list"><a class="header-menu-dropdown__link" href="/community/board">학과 이야기</a><a class="header-menu-dropdown__link" href="/community/suggestion">바라는 점</a><a class="header-menu-dropdown__link" href="/community/donation">나눔의 공간</a><a class="header-menu-dropdown__link" href="/community/notice">공지사항</a>\n</div></div></li><li class="header-menu__item"><a class="header-menu__title" href="/footprint/acquisition">학생 자취록</a><div class="header-menu-dropdown"><div class="header-menu-dropdown__list"><a class="header-menu-dropdown__link" href="/footprint/acquisition">자격증 취득</a><a class="header-menu-dropdown__link" href="/footprint/awards">대회 수상</a><a class="header-menu-dropdown__link" href="/footprint/portfolio">포트폴리오</a>\n</div></div></li></ul></div><div class="header-util"><ul class="header-util__list">',s+=a?'<li class="header-util__item"><a class="header-util__link header-util__link--logout js-logoutBtn">로그아웃</a></li>':'<li class="header-util__item"><div class="header-util__link header-util__link--login js-loginOpenBtn">로그인</div></li><li class="header-util__item"><div class="header-util__link header-util__link--join js-joinOpenBtn">회원가입</div></li>',s+='<li class="header-util__item"><div class="header-util__btn">',t.icon("menu","사이드바 열기","#eee"),s+="</div></li></ul></div></header>\n",t.sidebar__header__icon=i=function(){this&&this.block,this&&this.attributes;s+='<div class="sidebar__header__icon">',t.icon("close","닫기","#0f0f0f"),s+="</div>"},t.sidebar__item__icon=i=function(){this&&this.block,this&&this.attributes;s+='<div class="sidebar__item__icon">',t.icon("caretDown","여닫기","#f5f5f5"),s+="</div>"},s+='<div class="cover"></div><div class="sidebar"><section class="sidebar__header"><div class="sidebar__header__logo"><div class="sidebar__header__logo__icon"></div><div class="sidebar__header__logo__txt"><span>대덕대학교</span><span>컴퓨터정보학과</span></div></div>',t.sidebar__header__icon(),s+='</section><section class="sidebar__auth">',s+=a?'<div class="sidebar__auth__item"><a class="sidebar__auth__link--logout js-logoutBtn">로그아웃</a></div>':'<div class="sidebar__auth__item"><div class="sidebar__auth__link--login js-loginOpenBtn">로그인</div></div>',s+='</section><ul class="sidebar__list"><li class="sidebar__item">',t.sidebar__item__icon(),s+='<div class="sidebar__btn sidebar__intro">학과소개</div><ul class="sidebar__inner-list"><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/intro/info">학과소개</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/intro/member">구성원</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/intro/env">교육환경</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/intro/club">동아리</a></li></ul></li><li class="sidebar__item">',t.sidebar__item__icon(),s+='<div class="sidebar__btn sidebar__career">학과진로</div><ul class="sidebar__inner-list"><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/milestone/curriculum">교육 목표</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/milestone/cert">자격증 소개</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/milestone/career">진로 설정</a></li></ul></li><li class="sidebar__item">',t.sidebar__item__icon(),s+='<div class="sidebar__btn sidebar__community">커뮤니티</div><ul class="sidebar__inner-list"><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/community/board">학과 이야기</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/community/suggestion">바라는 점</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/community/donation">나눔의 공간</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/community/notice">공지사항</a></li></ul></li><li class="sidebar__item">',t.sidebar__item__icon(),s+='<div class="sidebar__btn sidebar__history">학생 자취록</div><ul class="sidebar__inner-list"><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/footprint/acquisition">자격증 취득</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/footprint/awards">대회수상</a></li><li class="sidebar__inner-item"><a class="sidebar__inner-link" href="/footprint/portfolio">포트폴리오</a></li></ul></li></ul></div>\n<main class="sub-main"><div class="sub-background"></div><div class="sub-main__wrap">\x3c!-- 여기서부터 네비게이션 바 시작--\x3e<div class="sub-nav"><div class="sub-nav__title-wrap"><h3 class="sub-nav__title">학과소개</h3></div><div class="sub-nav__list-wrap"><ul class="sub-nav__list"><li class="sub-nav__item"><a class="sub-nav__link" href="/intro/info">학과소개</a></li><li class="sub-nav__item"><a class="sub-nav__link" href="/intro/member">구성원</a></li><li class="sub-nav__item"><a class="sub-nav__link" href="/intro/env">교육 환경</a></li><li class="sub-nav__item"><a class="sub-nav__link" href="/intro/club">동아리</a></li></ul></div></div>\x3c!-- 여기서부터 콘텐츠 시작--\x3e<div class="sub-contents"><div class="sub-contents__wrap"><div class="sub-contents__header"><h2 class="sub-contents__title">학과소개</h2><div class="sub-contents__util-wrap"><ul class="sub-contents__util-list"><li class="sub-contents__item">',t["sub-contents__item__icon"]("home"),s+='<a class="sub-contents__item__link" href="/">HOME</a>',t["sub-contents__item__icon"].call({block:function(){s+=" "}},"chevronForward"),s+='</li><li class="sub-contents__item"><a class="sub-contents__item__link" href="/intro/info">학과소개</a>',t["sub-contents__item__icon"]("chevronForward"),s+='</li><li class="sub-contents__item"><a class="sub-contents__item__link" href="/intro/info">학과소개</a></li></ul></div></div><div class="sub-contents__content-wrap"><div class="sub-contents__background"><strong>대덕대학교 컴퓨터정보학과 <br></strong><span>Deaduk College</span></div><div class="sub-contents__content"><div class="sub-contents__box"><p class="sub-contents__box-txt">대덕대학교 컴퓨터정보학과는 컴퓨터, 정보처리 기술과 활용에 대한 다양한 지식을 학습하여\nSW/서버/네트워크/정보보안과 관련된 운영, 관리 및 개발 등에 종사하는 현장형 스마트 IT 인력 양성을 목표로 하고 있습니다.</p></div><div class="sub-contents__box"><h2 class="sub-contents__box-title">소프트웨어 개발</h2><p class="sub-contents__box-txt">4차산업 혁명 시대의 IT 분야를 주도하기 위해 IOT, 인공지능, 스마트 모빌리티, 빅데이터, 증강현실 등을 이해하고 코딩 능력과 문제해결력을 배운 SW개발자 인재 양성</p></div><div class="sub-contents__box"><h2 class="sub-contents__box-title">정보보안</h2><p class="sub-contents__box-txt">보안해킹 기술 및 사이버범죄에 대처하는 전문지식과 체계적인 수사기법을 활용하여 디지털 자산을 보호하는 사이버 정보보호 인재양성</p></div><div class="sub-contents__box"><h2 class="sub-contents__box-title">네트워크</h2><p class="sub-contents__box-txt">네트워크 구축 운영기술을 학습하여 정보전문기술 인재 양성</p></div><div class="sub-contents__box"><h2 class="sub-contents__box-title">4년제 국립대학 및 사립대학과의 연계편입학 협약</h2><p class="sub-contents__box-txt">충남대 컴퓨터공학과, 한밭대학교 컴퓨터공학과, 공주대학교 컴퓨터공학과, <br>\n고려대학교 세종캠퍼스 컴퓨터융합소프트웨어학과,<br>\n고려대학교 세종캠퍼스 응용수리과학부사이버보안전공<br>\n홍익대학교 세종캠퍼스 컴퓨터정보통신공학과<br>\n남서울대학교 컴퓨터과학과와<br>\n연계교육과정 윤영에 의한 편입학 협약을 체결함에 따라 졸업 후 정원 외 전형으로 위 대학에 편입을 할 수 있습니다.</p></div></div></div></div></div></div></main>\n<footer class="footer"><a class="footer__logo" href="/"><div class="footer__logo__icon"></div><div class="footer__logo__txt"><span>대덕대학교</span><span>컴퓨터정보학과</span></div></a><div class="footer__wrap"><section class="footer__privacy-policy"><a href="http://www.ddu.ac.kr/msi/cntntsService.do?menuId=MNU_0000000000000317">개인정보처리방침</a></section><section class="footer__location"><span>305-715 대전광역시 유성구 가정북로 68 대덕대학교(장동 48번지) 정곡관 6층</span></section><section class="footer__number"><span>Tel. 042-866-0307</span><span>Fax. 042-866-0371</span></section><section class="footer__copyright"><span>Github</span><div class="footer__copyright__icon">',t.icon("github","","#999"),s+='</div><a href="https://github.com/galaxy4276">galaxy4276</a><a href="https://github.com/wscrg">wscrg</a><a href="https://github.com/bear-bear-bear">bear-bear-bear</a></section></div></footer>\n\n\n',a||(s+='\x3c!-- default >> hide--\x3e<article class="login">\n<div class="login__overlay"></div>\n<form class="login__form" action="/auth/login" method="post" autocomplete="off">\n<div class="login__form__close-btn">',t.icon("close","닫기","#f5f5f5"),s+='</div><div class="login__form__title">로그인</div>\n<div class="login__form__input-box"><input class="login__form__input js-authInput" type="text" name="id" minlength="1" required><label class="login__form__input-label">사용자 이름</label></div><div class="login__form__input-box"><input class="login__form__input js-authInput" type="password" name="password" minlength="1" autocomplete="new-password" required><label class="login__form__input-label">비밀번호</label></div>\n<input class="login__form__login-btn" type="submit" value="로그인"><button class="login__form__join-open-btn js-joinOpenBtn" type="button">회원가입</button>\n<div class="login__form__find-password"><a class="login__form__find-password-link js-findBtn" href="/auth/forgot_sendEmail">비밀번호를 잊으셨나요?</a></div></form></article><article class="join">\n<div class="join__overlay"></div>\n<form class="join__form" action="/auth/join" method="post" autocomplete="off">\n<div class="join__form__close-btn">',t.icon("close","닫기","#f5f5f5"),s+='</div><div class="join__form__title">회원가입</div>\n<div class="join__form__input-box"><input class="join__form__input js-authInput" type="text" name="id" minlength="4" maxlength="10" required><label class="join__form__input-label">사용자 이름 (영문 4자 이상 10자 이하)</label><span class="join__form__input-check js-inputCheck"></span></div><div class="join__form__input-box"><input class="join__form__input js-authInput" type="password" name="password" minlength="8" maxlength="50" autocomplete="new-password" required><label class="join__form__input-label">비밀번호 (영문, 숫자, 기호를 조합하여 8자 이상)</label><span class="join__form__input-check js-inputCheck"></span></div><div class="join__form__input-box"><input class="join__form__input js-authInput" type="password" name="pwcheck" minlength="1" autocomplete="new-password" required><label class="join__form__input-label">비밀번호 확인</label><span class="join__form__input-check js-inputCheck"></span></div><div class="join__form__input-box"><input class="join__form__input js-authInput" type="email" name="email" required><label class="join__form__input-label">이메일 (비밀번호 찾기에 사용됩니다)</label><span class="join__form__input-check js-inputCheck"></span></div>\n<input class="join__form__join-btn" type="submit" value="회원가입" disabled></form></article>'),s+="</body></html>"}.call(this,"currentIcon"in a?a.currentIcon:"undefined"!=typeof currentIcon?currentIcon:void 0,"user"in a?a.user:"undefined"!=typeof user?user:void 0),s}},89:function(e,i,s){},90:function(e,i){}});