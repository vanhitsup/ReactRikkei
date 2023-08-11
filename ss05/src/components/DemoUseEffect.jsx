import React, { useEffect, useState } from 'react'

const tabs=["posts","comments","albums"]
function DemoUseEffect() {
const [title,setTitle]=useState("");
const [posts, setPosts]=useState([]);
const [type,setType]=useState("posts")
//userEffect xử lý các side-effect ( là những hành động thực hiện thay đổi cây DOM)
//Trên code thì được viết trước nhưng sẽ được sử lí sau khi render UI
    // useEffect(()=>{
    //     console.log("Mounted");
    //     document.title=title;
    // });
    //Có thể để    document.title=title; ở ngoài useEffect nhưng không nên vì:
    //  - react là ưu tiên luồng chính là luồng render UI cho người dùng


    //3 cách sử dụng useEffect()
// Cách 1: useEffect(callback)
//Callback được gọi lại khi component re-render => gây ảnh hưởng xấu đến performance
//cách 2: useEffect(Callback,[])
//chỉ gọi call back 1 lần sau khi component được mount
//cách 3: useEffect(callback,[deps]) - dependencies(phụ thuộc)
//chỉ gọi callback khi mà
//=>Điểm chung: callback luôn được gọi sau khi component được mounted

//Giới thiệu fetch API( là API đê gửi và nhận request bằng js và sẽ trả về 1 promise)
//Callback để xử lý bất đồng bộ sinh ra callback hell
//để xử lý callback hell thì sử dụng promise


//Demo TH1
// useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error));
// })

//Demo TH2
// useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>response.json())
// .then((data)=>setPosts(data))
// .catch((error)=>console.log(error));
// },[]);

//Demo3
useEffect(()=>{
    console.log("Title Change");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
.then((response)=>response.json())
.then((data)=>setPosts(data))
.catch((error)=>console.log(error));
},[type]);
  return (
    <div>
        {/* <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/> */}

     {/* Demo TH2 */}
     {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}

      {/* Demo TH3 */}
  
       {tabs.map((tab) => (
        <button key={tab} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
    <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
    </ul>
    </div>
  )
}

export default DemoUseEffect