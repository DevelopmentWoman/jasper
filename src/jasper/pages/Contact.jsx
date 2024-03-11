import { MainPhoto } from "../components/MainPhoto"
import { SectionContact } from "../components/SectionContact"


export const Contact = () => {
  return (
    <main>
      <section className="card-about">
        <MainPhoto classAbout= "card-img-cont" imgSrc="../src/assets/CONTACT_OUR_COMPANY.webp"/>
      </section>
      <section className="sect-sec-cont">
        <SectionContact/>
      </section>
    </main>
  )
}

