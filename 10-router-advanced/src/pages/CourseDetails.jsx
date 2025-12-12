import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams();
  console.log(params);
  console.log(params.courseId);

  return (
    <div>
      <h1>{params.courseId} Course Details</h1>
    </div>
  );
};

export default CourseDetails;
