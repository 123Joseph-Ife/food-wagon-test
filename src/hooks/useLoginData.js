export const useLoginData = () => {
  if (localStorage.getItem("auth") !== null) {
    let { isAuth, email, photoUrl } = JSON.parse(
      localStorage.getItem("auth")
    );

    return { isAuth, email, photoUrl };
  } else {
    let isAuth = false
    return { isAuth }
  }
};
