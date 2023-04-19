import React, { useEffect, useState } from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/auth/thunks";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logInButtonDisabled, setLoginButtonDisabled] = useState(false);


  useEffect(() => {
    setLoginButtonDisabled(!username || !password);
  }, [username, password]);

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-4 bg-black">
      <div className="text-7xl font-['Grand_Hotel'] mb-12">Instagramn't</div>
      <input
        type="text"
        placeholder="Usuario"
        onChange={(e) => setUsername(e.target.value)}
        className="p-4 rounded-lg bg-custom-gray-main border-[0.5px] border-custom-gray-soft w-11/12 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
        className="p-4 rounded-lg bg-custom-gray-main border-[0.5px] border-custom-gray-soft w-11/12 focus:outline-none"
      />

      <span className="text-custom-blue-main font-semibold text-base text-right w-11/12 mt-1">
        ¿Olvidaste tu contraseña?
      </span>

      <div className="flex flex-col w-11/12 gap-10 mt-4">
        <button
          disabled={logInButtonDisabled}
          className="p-4 bg-custom-blue-main rounded-lg font-medium disabled:opacity-40 ease-in-out duration-300"
          onClick={() => dispatch(login())}
        >
          {loading ? (
            <div className="flex w-full justify-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            "Iniciar sesión"
          )}
        </button>

        <div className="flex justify-center items-center gap-3 text-lg font-semibold text-custom-blue-main">
          <RiFacebookBoxFill className="text-3xl" />
          Iniciar sesión con Facebook
        </div>

        <div className="flex items-center gap-6">
          <div className="w-5/12 h-[0.5px] bg-custom-gray-soft"></div>
          OR
          <div className="w-5/12 h-[0.5px] bg-custom-gray-soft"></div>
        </div>

        <div className="w-full text-center font-light">
          ¿No tienes una cuenta?
          <span className="text-custom-blue-main font-medium"> Regístrate.</span>
        </div>
      </div>
    </div>
  );
};

export default Login;