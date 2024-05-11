"use client";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const [user] = useAuthState(auth);

  if (user) router.push("/");

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem("user", true);
        setEmail("");
        setPassword("");
        router.push("/");
      }
    } catch (e) {
      alert("Check your Email and Password");
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
        className="bg-sky-700 p-10 rounded-lg shadow-xl w-96"
      >
        <Link
          href="/"
          className="text-white text-3xl text-center mb-2 font-semibold"
        >
          Check Weather
        </Link>
        <h1 className="text-white text-2xl mb-5">Sign In</h1>
        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4  rounded outline-none text-black placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          minLength={8}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded outline-none text-black placeholder-gray-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Sign In
        </button>
        <p className="text-end mt-4">
          Did not have an account ?{" "}
          <Link href="/sign-up" className="text-blue-800">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
