import React, {useState}from 'react'
import NavBar from '../../components/navbar/NavBar';
import Carousel from '../../components/carousel/Carousel';
import Card from '../../components/Card/Card';
import "./HomePage.css";

function HomePage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "https://cdn.tgdd.vn/Files/2021/10/28/1394086/appleevent%E2%80%94september71-17-0screenshot_1280x720-800-resize.png",
      name: "IPhone14",
      price: 140000,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0Lv5mshETC77KCzNLGN_MPkrSWYHycs-krlGwihjx4oGM2Z0OvYI-bBw3ld4gdZMvxo&usqp=CAU",
      name: "IPad",
      price: 200000,
    },
    {
      id: 3,
      img: "//images.samsung.com/is/image/samsung/p6pim/vn/sp-lsp3blaxxv/gallery/vn-the-freestyle-lsp3b-sp-lsp3blaxxv-530663510?$2052_1641_PNG$",
      name: "SamSung",
      price: 100000,
    },
  ]);

  return (
    <div>
      <NavBar></NavBar>
      <Carousel></Carousel>
      <div className='container'>
        <br/>
        <h1>Sản phẩm</h1>
          <div className='list-item'>
            {products.map((e,i)=>(
              <Card key={i} item={e}></Card>
            ))}
          </div>
      </div>
    </div>
  )
}

export default HomePage