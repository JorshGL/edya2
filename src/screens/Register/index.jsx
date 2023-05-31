import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/slices/auth/thunks";
import { useFirebaseStorage } from "../../hooks/useFirebaseStorage";

const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const { upload } = useFirebaseStorage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState(null);
  const [logInButtonDisabled, setLoginButtonDisabled] = useState(false);

  const inputFileRef = useRef(null);

  useEffect(() => {
    setLoginButtonDisabled(!email || !password);
  }, [email, password]);

  const handleSubmit = async () => {
    const pictureRef = picture ? await upload(picture) : null;
    dispatch(
      register({
        email,
        password,
        picture: pictureRef,
        name,
        username,
        bio,
      })
    );
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-4 bg-black py-10">
      <div className="text-4xl font-['Grand_Hotel']">Instagramn't</div>
      <input
        type="file"
        ref={inputFileRef}
        onChange={(e) => setPicture(e.target.files[0])}
        accept="image/*"
        hidden
      />
      <div
        className="flex items-center justify-center h-40 aspect-square rounded-full bg-custom-gray-main cursor-pointer overflow-hidden"
        onClick={() => inputFileRef.current.click()}
      >
        {picture && (
          <img
            className="object-cover rounded-full"
            src={URL.createObjectURL(picture)}
            alt=""
          />
        )}
      </div>
      <input
        type="text"
        placeholder="Email *"
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded-lg bg-custom-gray-main border-[0.5px] border-custom-gray-soft w-2/3 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Nombre completo *"
        onChange={(e) => setName(e.target.value)}
        className="p-3 rounded-lg bg-custom-gray-main border-[0.5px] border-custom-gray-soft w-2/3 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Nombre de usuario *"
        onChange={(e) => setUsername(`@${e.target.value}`)}
        className="p-3 rounded-lg bg-custom-gray-main border-[0.5px] border-custom-gray-soft w-2/3 focus:outline-none"
      />
      <input
        type="password"
        placeholder="Contraseña *"
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 rounded-lg bg-custom-gray-main border-[0.5px] border-custom-gray-soft w-2/3 focus:outline-none"
      />
      <textarea
        placeholder="Puedes escribir una pequeña descripción de ti"
        className="p-3 rounded-lg bg-custom-gray-main border-[0.5px] border-custom-gray-soft w-2/3 focus:outline-none"
        onChange={(e) => setBio(e.target.value)}
      />
      <div className="flex flex-col w-2/3 gap-10 mt-4">
        <button
          disabled={logInButtonDisabled}
          className="p-4 bg-custom-blue-main rounded-lg font-medium disabled:opacity-40 ease-in-out duration-300"
          onClick={() => handleSubmit()}
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
            "Continuar"
          )}
        </button>
      </div>
    </div>
  );
};

export default Register;
