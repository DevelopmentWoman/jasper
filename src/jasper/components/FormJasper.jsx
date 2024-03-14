import { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm";


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

export const FormJasper = ({onSendEmail}) => {

  const {firstName,lastName, email,phone,message, formState, onInputChange, onReset, isFormValid, firstNameValid, lastNameValid, emailValid} = useForm(initLanguage,initValidation);
  let [isSubmited,setIsSubmited] = useState(false);


  const callGet = async ()=> {
    try {


      const resp = await fetch(`${url}?email=${email}`)
      const data = await resp.json();
      if(!resp.ok){
          const err = {
              err:true,
              status: resp.status || "00",
              statusText: resp.statusText || "Ocurrió un error",
        }
         throw new Error(err);

      }   

      alert( "email sended successfull")


    } catch (error) {
      alert('An error ocurred, try it again')
    }

   }



  const onSubmit = (e)=>{
    e.preventDefault();
    setIsSubmited(true);
    if (!isFormValid) return
    callGet()
    onReset(e)
    setIsSubmited(false);
    
  }


  

  return (
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
  )
}
