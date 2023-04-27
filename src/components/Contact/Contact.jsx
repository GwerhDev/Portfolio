import React, { useState, useEffect } from "react";
import { OptionTitle } from "../Options/OptionTitle";
import { useSelector } from "react-redux";
import s from './css/Contact.module.css';
import { URL_API } from "../../middlewares/misc/config";

export const Contact = () => {
  const auth = localStorage.getItem('auth');
  const user = auth ? JSON.parse(auth) : null;

  const name = user? user.userAlias : ""
  const email = user? user.email : ""

  const language = useSelector(state=>state.language)
  const [formData, setFormData] = useState({
    name: name,
    email: email,
    message: "",
  });
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);

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
      setMessage(data.message);
      setShowForm(false);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    let timer;
    if (!showForm) {
      timer = setTimeout(() => {
        setShowForm(true);
        setMessage("");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showForm]);

  return (
    <>
      <OptionTitle title={language==='EN'? 'contact' : 'contacto'} />
      {showForm && (
        <div className={s.divFormCont}>
          <form className={s.formCont} onSubmit={handleSubmit}>
            <img src={user? user.googlePic : ''} style={{borderRadius:'100%'}} width='50px' alt="" /> <br />
            <label>
            {language==='EN'? 'Name' : 'Nombre'}
              <input placeholder={language==='EN'? 'Your name' : 'Tu nombre'} type="text" name="name" onChange={handleInputChange}/>
            </label><br />
            <label>
            {language==='EN'? 'Email' : 'Correo'}
              <input placeholder={language==='EN'? 'example@email.com' : 'ejemplo@email.com'} type="email" name="email" onChange={handleInputChange} />
            </label><br />
            <label>
            {language==='EN'? 'Message:' : 'Mensaje:'}<br/>
              <textarea placeholder={language==='EN'? 'Write your message here...' : 'Escribe tu mensaje aquí...'} name="message" onChange={handleInputChange} />
            </label><br/>
            <button className={s.submitButton} type="submit">{language==='EN'? 'send' : 'enviar'}</button>
          </form>
        </div>
      )}
      {!showForm && (
        <div className={s.showFormCont}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}
