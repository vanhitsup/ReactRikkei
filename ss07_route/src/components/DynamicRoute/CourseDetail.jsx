import React from "react";
import { useParams } from "react-router-dom";

function CourseDetail() {
  const paramId = useParams();
  console.log(paramId);
  return <div>Khóa học Java có Id là : {paramId.id}</div>;
}

export default CourseDetail;
