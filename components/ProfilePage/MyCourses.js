import React from "react";
import { useSession } from "next-auth/react";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../database/firebase";

import CourseCard from "./CourseCard";

const MyCourses = () => {
  const [courseList, setCourseList] = useState([]);
  const { data: session } = useSession();

  const getCourseList = React.useCallback(async () => {
    const userId =
      session?.user?.uid ||
      session?.user?.id ||
      window.sessionStorage.getItem("user_id");

    const q = query(
      collection(db, "masterclass"),
      where("course_purchased", "array-contains", userId)
    );
    const querySnapshot = await getDocs(q);

    let temp = [];
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });

    setCourseList(temp);
  }, [setCourseList]);

  useEffect(() => {
    getCourseList();
  }, []);

  console.log(courseList);

  return (
    <div className="md:mx-8 mx-4">
      {courseList.length !== 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1">
          {courseList.map((data) => {
            return (
              <CourseCard
                modal_image={data.modal_image}
                date={data.date}
                time={data.time}
              />
            );
          })}
        </div>
      ) : (
        <div className="md:text-3xl text-xl mt-8 text-center">
          No Course Purchased Yet
        </div>
      )}
    </div>
  );
};

export default MyCourses;
