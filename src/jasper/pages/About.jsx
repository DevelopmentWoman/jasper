import { NavLink } from "react-router-dom"
import { MainPhoto } from "../components/MainPhoto"


export const About = () => {


  return (
    <>
    <MainPhoto classAbout= "card-img-ab" imgSrc="../src/assets/ABOUT_OUR_COMPANY.webp"/>
    <main className="animate__animated animate__fadeIn">
      <section className="card-about">


          <div className="cont-inf-ab">
            <div className="card-text-ab">

                <h3>WHO WE ARE</h3>
                <h1>JASPER CONSTRUCTION</h1>
                <p>Jasper Construction Services is diversified general contractor that performs heavy civil construction projects throughout the state of Iowa.&nbsp; Our company has been family owned and operated since 1997 and specializes in concrete paving and flatwork, bridge rehabilitation, underground utilities, sitework, box culverts, trucking, aggregate sales, and equipment rental.&nbsp; Jasper Construction Services takes pride in bringing success to demanding construction projects with our expert knowledge, quality workmanship, and track record for safety.&nbsp;</p>

                <NavLink to={"/contact"} className={"btn-contact"}>CONTACT</NavLink>

            </div>
            <div className="sect-inf-ab-phot"><img src="../src/assets/grid/1.webp" alt="" /></div>
          </div>
      </section>
      <section className="galery-about">
        <div className="card-gal-ab">
          <h3>VIEW OUR</h3>
          <h2>PAST WORK</h2>
        </div>
        <div className="grid-galery">
          <div><img src="../src/assets/grid/1.webp"  /></div>
          <div><img src="../src/assets/grid/2.webp"  /></div>
          <div><img src="../src/assets/grid/3.webp"  /></div>
          <div><img src="../src/assets/grid/4.webp"  /></div>
          <div><img src="../src/assets/grid/5.webp"  /></div>
          <div><img src="../src/assets/grid/6.webp"  /></div>

        </div>
      </section>
    </main>
    </>
  )
}
