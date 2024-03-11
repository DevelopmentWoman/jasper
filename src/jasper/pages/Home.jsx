import { NavLink } from "react-router-dom"
import { Items } from "../components/Items"

const initUrl = "../src/assets/"
const linkImgHome=[
  {id:1, url: `${initUrl}truck1_yellow.webp`, subtitle: `CONCRETE PAVING & FLATWORK`},
  {id:2, url: `${initUrl}bridge_yellow.svg`, subtitle: 'BRIDGE REHABILITATION'},
  {id:3, url: `${initUrl}tub_yellow.webp`, subtitle: 'UNDERGROUND UTILITIES. SITEWORK, & BOX CULVERTS'},
  {id:4, url: `${initUrl}truck2_yellow.webp`, subtitle: 'TRUCKING & AGGREGATE SALES'},
  {id:5, url: `${initUrl}truck3_yellow.webp`, subtitle: 'EQUIPMENT RENTAL & SUPPLIES'},
]


export const Home = () => {

  return (


    <>
    <div className="cont-bg-hm-sect1"></div>
    <main className="animate__animated animate__fadeIn">        
   
      <section className="f-sect-hom">
        {/* <div className="cont-bg-hm-sect1"></div> */}
        <div className="cont-welc-home">
          <div className="cont-welc-h">
            <h3 className="txt-welc-hom">WELCOME TO</h3>
            <h1><strong>JASPER CONSTRUCTION</strong></h1>
          </div>
          <p>Jasper Construction Services takes pride in bringing success to demanding construction projects with our expert knowledge, quality workmanship, and track record for safety. </p>
          <div className="cont-but-h">
            <NavLink  to="/services" className="a-bg-hov animate__animated animate__fadeIn">SERVICES</NavLink>
            <NavLink to="/employment"  className="a-bg-hov animate__animated animate__fadeIn">EMPLOYMENT</NavLink>
          </div>
        </div>
      </section >
      <section className="s-sect-hom">
        <h3>LEARN MORE ABOUT</h3>
        <h2>OUR SERVICES</h2>
        <Items linkImgHome={linkImgHome} callHome={false}/>        
      </section>
    </main>
   
    </>
    
  )
}

