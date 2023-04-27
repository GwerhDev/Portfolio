import React, { useState } from "react";
import { OptionTitle } from "../Options/OptionTitle";
import { useSelector } from "react-redux";
import s from './css/Contact.module.css';
import { URL_API } from "../../middlewares/misc/config";
import { UnderConstruction } from "../Utils/UnderConstruction"

export const Contact = () => {
  const language = useSelector(state=>state.language)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${URL_API}/sendemail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // show success message or handle error
    })
    .catch((error) => {
      console.error(error);
      // show error message or handle error
    });
  };
  
  return (
    
    <>
    
      <OptionTitle title={language==='EN'? 'contact' : 'contacto'} />
      <form className={s.formCont} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleInputChange}/>
        </label><br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} />
        </label><br />
        <label>
          Message:
          <textarea name="message" onChange={handleInputChange} />
        </label><br/>
        <button type="submit">Send</button>
      </form>
      <UnderConstruction />
    </>
  );
}
