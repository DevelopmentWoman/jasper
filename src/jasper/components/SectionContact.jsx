
import { NavLink } from "react-router-dom"
import { FormJasper } from "./FormJasper"

export const SectionContact = () => {

    const onSendEmail = ()=>{

    }
  return (
    <div className="bg-inf-cont">
      <div className="cont-inf-cont cont-det-g-inf">
        <div className="con-bg-layout p-lay-cont">
            <h2>CONTACT JASPER</h2>
            <p>Interested in working for Jasper Construction? Please complete an online application.</p>
            <div>
                <h4>ADDRESS</h4>
                <p>
                    <span>Jasper Co</span>
                    <span>928 N. 19th Ave. E.</span>
                    <span>Newton, IA 50208</span>
                </p>
            </div>
            <div>
                <h4>PHONE</h4>
                <span>641-792-8650</span>
            </div>
            <div>
                <h4>FAX</h4>
                <span>641-792-7088</span>
            </div>
            <div>
                <h4>EMAIL</h4>
                <a href="mailto:jasper@jasperco.com" target="_self">Jasper@jasperco.com</a>
            </div>
        </div>
      </div>
      <FormJasper onSendEmail={onSendEmail}/>
    </div>
  )
}


