import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"


export default function MainLayout() {
  return (
    <div>
        <Navbar/>
        <div className="z-50 bottom-5 right-5 fixed"> Scroll</div>
        <Outlet/>
        <Footer/>
    </div>
  )
}
