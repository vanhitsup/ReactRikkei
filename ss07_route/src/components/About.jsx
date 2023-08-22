import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  //Sử dụng useLocaion để nhận được dữ liệu từ navigation
  const data = useLocation();
  console.log(data);
  return <div>Đây là About</div>;
}

export default About;
