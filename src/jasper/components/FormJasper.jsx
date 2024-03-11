import { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm";


const initLanguage=
{firstName:'',
  lastName: '',
  email:'',
  phone:'',
  message: ''}

const initValidation=
{
  firstName: [(value)=> value.length>1, 'The first name field must contain at least 2 characters' ],
  lastName: [(value)=> value.length>1, 'The last name field must contain at least 2 characters' ],
  email: [(value)=> value.includes('.@'), 'the email field is not valid']
}



export const FormJasper = ({onSendEmail}) => {

  const {firstName,lastName, email,phone,message, formState, onInputChange, onReset, isFormValid, firstNameValid, lastNameValid, emailValid} = useForm(initLanguage,initValidation);
  let [isSubmited,setIsSubmited] = useState(false);


  const onSubmit = (e)=>{
    e.preventDefault();
    setIsSubmited(true);
    if (!isFormValid) return
    onSendEmail(formState)
    onReset(e)
    setIsSubmited(false);
    
  }


  

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="First Name" name='firstName'  value={firstName} onChange={onInputChange}/>
        <label style={{display:(!!firstNameValid && isSubmited)?'block':'none', color:'red' }}>{firstNameValid}</label>

        <input type="text" placeholder="Last Name" name='lastName ' value={lastName} onChange={onInputChange}/>
        <label style={{display:(!!lastNameValid && isSubmited)?'block':'none', color:'red' }}>{lastNameValid}</label>

        <input type="text" placeholder="Email" name='email ' value={email} onChange={onInputChange}/>
        <label style={{display:(!!emailValid && isSubmited)?'block':'none', color:'red' }}>{emailValid}</label>

        <input type="text" placeholder="Phone" name='phone' value={phone} onChange={onInputChange}/>

        <textarea placeholder="Add Message" name='message ' value={message} onChange={onInputChange}></textarea>
        <input type="submit" value={"SEND"}/>
    </form>
  )
}
