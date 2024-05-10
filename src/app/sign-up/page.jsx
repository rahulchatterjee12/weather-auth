"use client";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const [user] = useAuthState(auth);

  if (user) router.push("/");

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem("user", true);
        setEmail("");
        setPassword("");
        router.push("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
        className="bg-gray-800 p-10 rounded-lg shadow-xl w-96"
      >
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Sign Up
        </button>
        <p className="text-end mt-4">
          Already have an account ?{" "}
          <Link href="/sign-in" className="text-blue-600">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
