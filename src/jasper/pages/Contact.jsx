import { MainPhoto } from "../components/MainPhoto"
import { SectionContact } from "../components/SectionContact"


export const Contact = () => {
  return (
    <>      

    <MainPhoto classAbout= "card-img-cont" imgSrc="../src/assets/CONTACT_OUR_COMPANY.webp"/>
    <main className="animate__animated animate__fadeIn">

      <section className="sect-sec-cont">
        <SectionContact/>
      </section>
    </main>
    </>
  )
}

