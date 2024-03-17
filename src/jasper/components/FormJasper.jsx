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


let url = "contact.php"

export const FormJasper = () => {

  const {firstName,lastName, email,phone,message, formState, onInputChange, onReset, isFormValid, firstNameValid, lastNameValid, emailValid} = useForm(initLanguage,initValidation);
  let [isSubmited,setIsSubmited] = useState(false);
  let [response, setResponse] = useState('')
  let [isLoading,setLoading] = useState(false)
  const contAlert = useRef()
 




  const callGet = async ()=> {

    try {
      const params = {
        "email": email,
        "firstName": firstName,
        "lastName":lastName,
        "phone":phone || '',
        'message':message || '',
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      }
      const resp = await fetch(`${url}`,options)
      const data = await resp.json();
      setLoading(false)
      if(!data){
          const err = {
              err:true,
              status: resp.status || "00",
              statusText: resp.statusText || "An error ocurred, try it again",
        }
         throw err;
      }   
      setResponse("Email sended successfull")
    } catch (error) {
      setLoading(false)
      setResponse(error.statusText)
    }

   }


   const onHidden = ()=>{
    setResponse('')
    contAlert.current.classList.remove('show');
    document.body.style.overflow = 'visible'
   }

  const onSubmit = (e)=>{
    e.preventDefault();
    setIsSubmited(true);
    if (!isFormValid) return
    setLoading(true)
    callGet()
    document.body.style.overflow = 'hidden'
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
      <div className={isLoading || response[0] ? "modal show":"modal hidden"} ref={contAlert} >
        {isLoading && <div className= "loader"></div>}
        { response && <div className="messag">
          {<span className={"sp-modal"}>{response}</span>}
          {<input type="button"  value="Accept" onClick={onHidden}/>}
        </div>}

      </div>
    </>
  )
}
