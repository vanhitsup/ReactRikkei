import React from "react";
import { Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      Header
      {/* Outlet xác định vị trí hiển thị component con khi rout trùng khớp */}
      <Outlet></Outlet>
      Footer
    </div>
  );
}

export default Contact;
