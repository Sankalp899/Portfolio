import React,{useState} from 'react'
import Home from '../../pages/Home/Home';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import "./Layout.css";
import Menus from '../../Menus/Menus';

const Layout = () => {
    const[toggle,setToggle] = useState(true)

    //change toogle
    const handleToggle = () =>{
        setToggle(!toggle);
    }
  return (
    <>
    <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
            <div className="sidebar-toggle-icons">
                <p onClick={handleToggle}>
                    {
                        toggle? ( <AiFillCaretLeft size={30}/>) : ( <AiFillCaretRight size={30}/>)
                    }
                </p>
            </div>
            <Menus toggle={toggle}/>
        </div>
        <div className="conatiner">
        <Home />
        </div>
    </div>
    </>
  )
}

export default Layout;