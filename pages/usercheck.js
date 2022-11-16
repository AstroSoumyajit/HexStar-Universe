import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../database/firebase";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";

const Usercheck = () => {
  const router = useRouter();
  const { data: session } = useSession();

  console.log(session)
  const userId = session?.user?.id.toString() || window.sessionStorage.getItem('user_id');

  const checkUser = React.useCallback(async () => {
    if (userId) {
      const userRef = doc(db, "users", userId);
      const userDocSnap = await getDoc(userRef);

      if (userDocSnap.exists()) {
      } else {
        await setDoc(doc(db, "users", userId), {
          id: userId,
          name: session?.user?.name,
          image: session?.user?.image,
          email: session?.user?.email,
          created_time: serverTimestamp(),
        });
      }
      router.push("/");
    }
  }, [
    router,
    session?.user?.email,
    session?.user?.image,
    session?.user?.name,
    userId,
  ]);

  React.useEffect(() => {
    if (session) {
      checkUser();
    }
  }, [checkUser, session]);

  return (
    <>
      <Head>
        <title>Loging In...</title>
        <meta
          name="description"
          content="A virtual Open source and development community"
        />
      </Head>
      <div className="flex justify-center items-center h-screen bg-black">
        <CircularProgress />
      </div>
    </>
  );
};

export default Usercheck;
