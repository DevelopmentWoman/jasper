import { NavLink } from "react-router-dom"


export const Items = ({linkImgHome}) => {
  return (
    <div className="cont-item-h">
        {linkImgHome.map(el=> 
        
        <NavLink  key={el.id} to="/services"> 
            <img src={`${el.url}`}/>
            <h3>{el.subtitle}</h3>
        </NavLink>)}
    </div>
  )
}


