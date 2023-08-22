import React, { useState, useEffect } from "react";
import axios from "axios";
function DemoFetchApi() {
  const [user, setUser] = useState([]);
  // Get Fetch Api
  //   const handleGetApi = () => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json()) // ép kiểu dữ liệu về dạng json
  //       .then((data) => setUser(data)) // lấy dữ liệu về
  //       .catch((err) => console.log(err)); // báo lỗi
  //   };

  //get api axios
  const handleGetApi = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  //   // Post fetch Api(thêm dữ liệu từ api thông qua fetch)
  //   const handlePostApi = () => {
  //     fetch("http://localhost:8000/users", {
  //       method: "POST", // Phương thức sử dụng
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         // đối tượng muốn them vào
  //         id: 3,
  //         name: "Duc Nguyen",
  //         email: "ducnguyen@gmail.com",
  //       }),
  //     })
  //       .then((res) => res.json()) // ép kiểu dữ liệu về dạng json
  //       .then((data) => console.log(data)) // lấy dữ liệu về
  //       .catch((err) => console.log(err)); // báo lỗi
  //   };

  const handlePostApi = () => {
    axios
      .post("http://localhost:8000/users", {
        id: 5,
        name: "Anhptaaaaaa",
        email: "ptva@gmail.com",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //   //Put
  //   const handlePutApi = () => {
  //     fetch("http://localhost:8000/users/3", {
  //       method: "PUT", // Phương thức sử dụng
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         // đối tượng muốn them vào

  //         email: "ducnguyen111@gmail.com",
  //       }),
  //     })
  //       .then((res) => res.json()) // ép kiểu dữ liệu về dạng json
  //       .then((data) => console.log(data)) // lấy dữ liệu về
  //       .catch((err) => console.log(err)); // báo lỗi
  //   };

  const handlePutApi = () => {
    axios
      .put("http://localhost:8000/users/4", {
        email: "ptva.me1111@gmail.com",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //   //Patch
  //   const handlePatchApi = () => {
  //     fetch("http://localhost:8000/users/2", {
  //       method: "PATCH", // Phương thức sử dụng
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         // đối tượng muốn sửa vào
  //         email: "hiep1111@gmail.com",
  //       }),
  //     })
  //       .then((res) => res.json()) // ép kiểu dữ liệu về dạng json
  //       .then((data) => console.log(data)) // lấy dữ liệu về
  //       .catch((err) => console.log(err)); // báo lỗi
  //   };

  const handlePatchApi = () => {
    axios
      .patch("http://localhost:8000/users/4", {
        email: "ptva.me@gmail1111.com",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //   //delete
  //   const handleDeleteApi = () => {
  //     fetch("http://localhost:8000/users/3", {
  //       method: "DELETE", // Phương thức sử dụng
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json()) // ép kiểu dữ liệu về dạng json
  //       .then((data) => console.log(data)) // lấy dữ liệu về
  //       .catch((err) => console.log(err)); // báo lỗi
  //   };

  const handleDeleteApi = () => {
    axios
      .delete("http://localhost:8000/users/5", {})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //   //Demo fetch api với useEffect
  //   useEffect(() => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json()) // ép kiểu dữ liệu về dạng json
  //       .then((data) => setUser(data)) // lấy dữ liệu về
  //       .catch((err) => console.log(err)); // báo lỗi
  //   }, []);
  return (
    <div>
      <h1>DemoFetchApi</h1>
      <button onClick={handleGetApi}>Get Fecth Api</button>
      <button onClick={handlePostApi}>Post Fecth Api</button>
      <button onClick={handlePutApi}>Put Fecth Api</button>
      <button onClick={handlePatchApi}>Patch Fecth Api</button>
      <button onClick={handleDeleteApi}>Delete Fecth Api</button>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoFetchApi;
