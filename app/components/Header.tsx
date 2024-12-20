"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { HiBell, HiChat, HiSearch } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import app from "./../shared/firebaseConfig";
import { FirebaseApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const db = getFirestore(app);

  useEffect(() => {
    saveUserInfo();
  }, [session]);

  const saveUserInfo = async () => {
    if (session?.user) {
      try {
        await setDoc(doc(db, "user", session.user.email), {
          userName: session.user.name,
          email: session.user.email,
          userimage: session.user.image,
        });
      } catch (error) {
        console.error("Error saving user info:", error);
      }
    }
  };

  return (
    <div className="flex gap-3 md:gap-2 items-center p-6 ">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 cursor-pointer rounded-full"
      />
      <button className="bg-black text-white p-2 px-5 rounded-full">
        Home
      </button>
      <button
        className="p-2 px-5 rounded-full font-semibold"
        onClick={() => router.push("/pin-builder")}
      >
        Create
      </button>
      <div className="bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      <HiSearch
        className="text-[25px] 
        text-gray-500 md:hidden"
      />
      <HiBell className="text-[40px] text-gray-500" />
      <HiChat className="text-[40px] text-gray-500" />
      {session?.user ? (
        <Image
          src={session.user.image}
          onClick={() => router.push("/" + session.user?.email)}
          alt="user-image"
          width={50}
          height={50}
          className="hover:bg-gray-300 transition-shadow p-2 cursor-pointer rounded-full"
        />
      ) : (
        <button
          className="p-2 px-5 rounded-full font-semibold"
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
function getfirestore(app: FirebaseApp) {
  throw new Error("Function not implemented.");
}
