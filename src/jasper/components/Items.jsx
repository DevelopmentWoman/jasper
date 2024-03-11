// import { Link, NavLink, Navigate } from "react-router-dom"
// import { Scroller } from "react-scroll"
import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"


export const Items = ({linkImgHome, callHome=true}) => {
  return (
    <div className="cont-item-h">
        {linkImgHome.map(el=> 
          callHome ?
          <Link  key={el.id} smooth={true} to={el.id}> 
              <img src={`${el.url}`}/>
              <h3>{el.subtitle}</h3>
          </Link>
          :
          <NavLink  key={el.id} to="/services"> 
            <img src={`${el.url}`}/>
            <h3>{el.subtitle}</h3>
          </NavLink>
        )}
    </div>
  )
}


