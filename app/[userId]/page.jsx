"use client";
import React, { useEffect, useState } from 'react';
import app from "./../shared/firebaseConfig";
import { collection, getDocs,getDoc,doc, getFirestore, query, where } from 'firebase/firestore'
import Userinfo from '../components/UserInfo'

const Profile = ({ params }) => {
  const db = getFirestore(app);
  const [userInfo,setUserInfo]=useState();

  useEffect(() => {
    if (params?.userId) {
      getUserInfo(params.userId.replace('%40', '@'))

    }
  }, [params]);

  const getUserInfo=async(email)=>{
    const docRef = doc(db, "user",email );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserInfo(docSnap.data())
      console.log("Doc data:", docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    <div>
      <Userinfo userInfo={userInfo} />
    </div>
  );
};

export default Profile;
