"use client";
import React from "react";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/[locale]/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { setUser } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const [user] = useAuthState(auth);

  if (user) router.push("/");

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem("user", true);
        setEmail("");
        setPassword("");
        dispatch(setUser({ userId: res.user.uid, userName: res.user.email }));
        router.push("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
        className="bg-sky-700 p-10 rounded-lg shadow-xl w-96"
      >
        <Link
          href="/"
          className="text-white text-3xl text-center mb-2 font-semibold"
        >
          {t("common:title")}
        </Link>
        <h2 className="text-white text-2xl mb-5">{t("signup_title")}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4  rounded outline-none text-black placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4  rounded outline-none text-black placeholder-gray-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          {t("signup_title")}
        </button>
        <p className="text-end mt-4">
          {t("bottom_text")}{" "}
          <Link href="/sign-in" className="text-blue-800">
            {t("sign_in_link")}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
