import React from 'react'
import { MainPhoto } from '../components/MainPhoto'

export const Employment = () => {
  return (
    <>
    <MainPhoto classAbout= "m-emp animate__animated animate__fadeIn" imgSrc="./assets/EMPLOYMENT_OUR_COMPANY.webp"/>
    <main className="animate__animated animate__fadeIn">
      <section className="card-about">
        <div className="cont-inf-ab">
          <div className='card-text-ab title-emp'>
            <h3>EMPLOYMENT</h3>
            <h1>JOIN OUR TEAM</h1>
            <p>Jasper Construction Services is always seeking hard working and talented individuals to join our growing company.  If you are looking for a rewarding career with excellent wages, benefits, and limitless opportunities – we would love to hear from you!  Fill out an application online or stop by in person at our Newton office.  Jasper Construction Services is an Equal Opportunity Employer.
            <br/>
            <br/>
            Please send or drop off paper applications to 928 North 19th Avenue East, Newton, Iowa 50208.
            </p>
          </div>
          <div className='sect-inf-ab-phot'><img src="./assets/2_grid.webp" alt="" /></div>
        </div>
      </section>
    </main>
    </>
  )
}

