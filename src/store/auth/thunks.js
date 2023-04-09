import { checkingCredentials, login, logout } from "./authSlice";

export const startSignIn = (form) => {
  return async (dispatch) => {
    try {
      dispatch(checkingCredentials());
      const result = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .catch((error) => error.json());

      if (!result.ok) {
        const message = "Datos incorrectos";

        return dispatch(logout(message));
      }
      dispatch(login(result.usuario));
    } catch (error) {
      console.log(error);
    }
  };
};
