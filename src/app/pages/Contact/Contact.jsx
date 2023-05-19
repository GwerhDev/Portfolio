import s from './css/Contact.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { OptionTitle } from '../../components/Utils/OptionTitle/OptionTitle';
import { useSelector } from "react-redux";
import { URL_API } from "../../../middlewares/misc/config";
import { removeLocalStorage } from "../../../functions/RemoveLocalStorage";
import defaultUserIcon from "../../../assets/images/user-icon.png";
import logoutIcon from "../../../assets/images/logout-icon.png";
import googleIcon from "../../../assets/images/gmail-icon.png";

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
    <div className={s.webBg}>
      <motion.div 
      initial={{opacity:0}}
      transition={{duration: 1}}
      animate={{opacity:1}}
      >
      <OptionTitle title={language==='EN'? 'contact' : 'contacto'} />
      {showForm && (
        <div className={s.divFormCont}>
          <form className={s.formCont} onSubmit={handleSubmit}>
            {
              user?
              <ul style={{listStyle:'none', display:'flex'}}>
                <img src={user.googlePic?? defaultUserIcon} style={{borderRadius:'100%', boxShadow:'0px 0px 4px black', marginLeft:'-40px'}} width='50px' alt="" />
                <div onClick={()=>{return (removeLocalStorage(), window.location.reload())}} style={{borderRadius:'100%', cursor:'pointer', width:'25px', height:'25px', marginLeft:'-7px', backgroundColor:'gray'}}>
                  <img src={logoutIcon} style={{borderRadius:'100%', boxShadow:'0px 0px 4px black'}} width='25px' alt="" /> <br />
                </div>
              </ul>
              :
              <ul style={{listStyle:'none', display:'flex'}}>
                <a href={`${URL_API}/mail/google`}>
                  <img src={defaultUserIcon} style={{borderRadius:'100%', boxShadow:'0px 0px 4px black', marginLeft:'-40px'}} width='50px' height='50px' alt="" />
                </a>
                <a href={`${URL_API}/mail/google`} style={{borderRadius:'100%', cursor:'pointer', width:'25px', height:'25px', marginLeft:'-7px', backgroundColor:'white'}}>
                  <img src={googleIcon} style={{borderRadius:'100%', boxShadow:'0px 0px 4px black'}} width='25px' alt="" /> <br />
                </a>
              </ul>
            }
            <label>
            {language==='EN'? 'Name' : 'Nombre'}
              <input placeholder={language==='EN'? 'Your name' : 'Tu nombre'} type="text" name="name" value={formData.name} onChange={handleInputChange}/>
            </label><br />
            <label>
            {language==='EN'? 'Email' : 'Correo'}
              <input placeholder={language==='EN'? 'example@email.com' : 'ejemplo@email.com'} type="email" name="email" style={user? {backgroundColor:'gray'}:{}} disabled={user?? false} value={formData.email} onChange={handleInputChange} />
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
    </motion.div>
    </div>
  );
}
