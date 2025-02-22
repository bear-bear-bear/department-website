/* --- */
/* -- 로그아웃 버튼 경로 부여 --*/
const initLogoutBtnsHref = () => {
  const logoutBtns = document.body.querySelectorAll('.js-logoutBtn');

  if (!logoutBtns) return;

  const host =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8001'
      : 'https://ddccomputer.com';

  logoutBtns.forEach((logoutBtn) => logoutBtn.setAttribute('href', `${host}/auth/logout`));
};

export default initLogoutBtnsHref;
