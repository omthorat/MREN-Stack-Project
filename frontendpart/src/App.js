import './App.css';
import Adduser from './components/Adduser';
import Footer from './components/Footer';
import Userlist from './components/Userlist';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavbarMenu from './components/Navbar';
import Updateuser from './components/Updateuser';

function App() {
  return (
    <div className="App container">
       {/* <h1>WELCOME, React Js Project </h1> */}
       {/* <Time/> */}
       <BrowserRouter>
       <NavbarMenu/>
       <Routes>
       {/* <Route path='/' element={<h1>User List </h1>}/> */}
       <Route path='/' element={<Adduser/>}/>
        <Route path='/userlist' element={<Userlist/>}/>
        <Route path='/aboutus' element={<h1>About us Tab</h1>}/>
        <Route path='/contactus' element={<h1>Contact Us Tab</h1>}/>
        <Route path='/logout' element={<h1>Logout Tab</h1>}/>
        <Route path='/update/:id' element={<Updateuser/>}/>
       </Routes>
       </BrowserRouter>
       <Footer/>
    </div>
  );
}

export default App;
