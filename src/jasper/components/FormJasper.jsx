import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";


const initLanguage=
{ firstName:'',
  lastName: '',
  email:'',
  phone:'',
  message: ''}

const initValidation=
{
  firstName: [(value)=> value.length>1, 'The first name field must contain at least 2 characters' ],
  lastName: [(value)=> value.length>1, 'The last name field must contain at least 2 characters' ],
  email: [(value)=> /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value), 'the email field is not valid']
}


let url = "http://localhost:5000/send_email"

export const FormJasper = () => {

  const {firstName,lastName, email,phone,message, formState, onInputChange, onReset, isFormValid, firstNameValid, lastNameValid, emailValid} = useForm(initLanguage,initValidation);
  let [isSubmited,setIsSubmited] = useState(false);
  let [response, setResponse] = useState([false,'',0])
  let [isLoading,setLoading] = useState(false)
  const contAlert = useRef()
 




  const callGet = async ()=> {

    try {
      const resp = await fetch(`${url}?email=${email}&first_name=${firstName}&last_name=${lastName}&phone=${phone}&message=${message}`)
      const data = await resp.json();
      setLoading(false)
      if(!resp.ok){
          const err = {
              err:true,
              status: resp.status || "00",
              statusText: resp.statusText || "Ocurrió un error",
        }
         throw new Error(err);
      }   
      setResponse([true,"Email sended successfull",0])
    } catch (error) {
      setResponse([true,"An error ocurred, try it again",1])
    }

   }


   const onHidden = ()=>{
    setResponse([false,''])
    contAlert.current.classList.remove('show');
    // document.body.style.overflow = 'visible'
   }

  const onSubmit = (e)=>{
    e.preventDefault();
    setIsSubmited(true);
    if (!isFormValid) return
    setLoading(true)
    callGet()
    // document.body.style.overflow = 'hidden'
    onReset(e)
    setIsSubmited(false);
    
  }


  

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" placeholder="First Name" name='firstName'  value={firstName} onChange={onInputChange}/>
          <label style={{display:(!!firstNameValid && isSubmited)?'block':'none', color:'red' }}>{firstNameValid}</label>
        </div>  
        <div>
          <input type="text" placeholder="Last Name" name='lastName'  value={lastName} onChange={onInputChange}/>
          <label style={{display:(!!lastNameValid && isSubmited)?'block':'none', color:'red' }}>{lastNameValid}</label>
        </div>
        <div>
          <input type="text" placeholder="Email" name='email' value={email} onChange={onInputChange}/>
          <label style={{display:(!!emailValid && isSubmited)?'block':'none', color:'red' }}>{emailValid}</label>
        </div>
        <div>
          <input type="text" placeholder="Phone" name='phone' value={phone} onChange={onInputChange}/>
        </div>
        <div className="d-txtarea">
          <textarea placeholder="Add Message" name='message' value={message} onChange={onInputChange}></textarea>
        </div>
        <div className="d-inp-subm">
          <input type="submit" value={"SEND"}/>
        </div>
      </form>
      <div className={isLoading ? "modal show":"modal hidden"} ref={contAlert} >
        {isLoading && <div className= "loader"></div>}
        {!isLoading && <span className={response[2]===1 ? "sp-modal red":"sp-modal"}>{response}</span>}
        {!isLoading && <input type="button"  value="Aceptar" onClick={onHidden}/>}
      </div>
    </>
  )
}
