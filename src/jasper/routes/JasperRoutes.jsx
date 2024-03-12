import { NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Navbar } from "../../ui"
import { About, Contact, Services,Employment, Home } from "../pages"
import { useEffect, useLayoutEffect, useState } from "react"


export const JasperRoutes = () => {
  const location = useLocation();
  const [rMenu, setRMenu] = useState(false);

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (screen.width < 768) rMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible' 
    console.log(screen.width)
  }, [rMenu])
  

  return (
    <>
        <Navbar rMenu={rMenu} setRMenu={setRMenu}/>

        <div className="cont-routes">
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="employment" element={<Employment/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="/" element={<Navigate to="home/"/>}/>
            </Routes>
        </div>
        <div className="copy-bef">
          <div><img src="../assets/white_logo.webp" alt="logo"/></div>
          <div>
            <div><span className="s-copy-b">P:</span><span>641-792-8650</span></div>
            <div><span className="s-copy-b">F:</span><span>641-792-7088</span></div>
            <div><a href="mailto:jasper@jasperco.com">Jasper@jasperco.com</a></div>
          </div>
          <div>
            <span>Jasper Construction Services, Inc.</span>
            <span>928 N. 19th Ave. E.</span>
            <span>Newton, IA 50208</span>
          </div>
          <div>
            <a href="https://www.facebook.com/Jasper-Construction-Services-Inc-725502960919438/" target="_blank"><img src="../assets/facebook.svg" alt="" /></a>
            <a href=""><img src="../assets/youtube.svg" alt="" /></a>
          </div>
        </div>
        <div className="copy">
          <h4>WEBSITE DESIGN BY</h4>
        </div>
        <footer>
          <div className="cont-help">
            <div><img src="../assets/call.svg" alt="phone" /></div>
            <div><img src="../assets/email.svg" alt="call" /></div>
            <div><img src="../assets/location.svg" alt="location" /></div>
            <div><img src="../assets/facebook.svg" alt="facebook" /></div>
          </div>
        </footer>

    </>
  )
}


