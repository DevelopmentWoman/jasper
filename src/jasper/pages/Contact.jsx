import { MainPhoto } from "../components/MainPhoto"
import { SectionContact } from "../components/SectionContact"


export const Contact = () => {
  return (
    <>      
    <section className="card-about">
    <MainPhoto classAbout= "card-img-cont" imgSrc="../src/assets/CONTACT_OUR_COMPANY.webp"/>
    </section>
    <main className="animate__animated animate__fadeIn">

      <section className="sect-sec-cont">
        <SectionContact/>
      </section>
    </main>
    </>
  )
}

