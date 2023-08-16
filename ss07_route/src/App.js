import './App.css';
import { Route, Routes ,Link,NavLink} from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import ContactUser from './components/ContactUser';
import ContactAdmin from './components/ContactAdmin';
import ContactIndex from './components/ContactIndex';
function App() {
  const activeColor=({isActive})=>({

    color:isActive?"White" : "black",
    backgroundColor:isActive ? "gray" : "red",
  })
  return (
    <div className="App">

      {/* Ở module 1 dùng thẻ a, sang module 2 dùng link to */}
      {/* <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <ul>
            <li>
              <Link to="/contact/contact-user" >Contact User</Link>
            </li>
            <li>
              <Link to="/contact/contact-admin" >Contact Admin</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

      </ul> */}

{/* Sử dụng Nav, Link */}
  <ul>
        <li>
          <NavLink to="/" style={activeColor}>HomePage</NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={activeColor}>Contact</NavLink>
          <ul>
            <li>
              <NavLink to="/contact/contact-user"  style={activeColor}>Contact User</NavLink>
            </li>
            <li>
              <NavLink to="/contact/contact-admin" style={activeColor}>Contact Admin</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/about" style={activeColor}>About</NavLink>
        </li>

      </ul>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}>
        {/* Demo nested route */}
            <Route path='contact-user' element={<ContactUser/>}></Route>
            <Route path='contact-admin' element={<ContactAdmin/>}> </Route>

            {/* Demo index Router contact */}
            <Route index  element={<ContactIndex/>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
