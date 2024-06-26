import s from './Contact.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { Title } from '../../components/Utils/Title/Title';
import { useDispatch, useSelector } from "react-redux";
import { URL_API } from "../../../middlewares/config";
import { removeLocalStorage } from "../../../functions/RemoveLocalStorage";
import defaultUserIcon from "../../../assets/images/png/user-icon.png";
import logoutIcon from "../../../assets/images/png/logout-icon.png";
import googleIcon from "../../../assets/images/png/gmail-icon.png";
import { setSelection } from '../../../middlewares/redux/actions';

export const Contact = (props) => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const { selection } = props;

  const auth = localStorage.getItem('auth');
  const user = auth ? JSON.parse(auth) : null;

  const name = user ? user.userAlias : "";
  const email = user ? user.email : "";

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
    fetch(`${URL_API}/users/sendemail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
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

  useEffect(() => {
    dispatch(setSelection(selection));
  }, [dispatch, selection]);
  
  return (
    <main className="main-container align-start">
      <section className="section-container">
        <div className={s.container}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >

            <div className={s.titleContainer}>
              <div className={s.titleContPerc}>
                <Title backgroundColor={true} color={'white'} title={language === 'EN' ? 'contact' : 'contacto'} />
              </div>
            </div>
            {showForm && (
              <div className={s.divFormCont}>
                <form className={s.formCont} onSubmit={handleSubmit}>
                  {
                    user
                      ?
                      <ul style={{ listStyle: 'none', display: 'flex' }}>
                        <img src={user.googlePic ?? defaultUserIcon} style={{ borderRadius: '100%', boxShadow: '0px 0px 4px black', marginLeft: '-40px' }} width='50px' alt="" />
                        <div onClick={() => { return (removeLocalStorage(), window.location.reload()) }} style={{ borderRadius: '100%', cursor: 'pointer', width: '25px', height: '25px', marginLeft: '-7px', backgroundColor: 'gray' }}>
                          <img src={logoutIcon} style={{ borderRadius: '100%', boxShadow: '0px 0px 4px black' }} width='25px' alt="" /> <br />
                        </div>
                      </ul>
                      :
                      <ul style={{ listStyle: 'none', display: 'flex' }}>
                        <a href={`${URL_API}/auth/mail/google`}>
                          <img src={defaultUserIcon} style={{ borderRadius: '100%', boxShadow: '0px 0px 4px black', marginLeft: '-40px' }} width='50px' height='50px' alt="" />
                        </a>
                        <a href={`${URL_API}/auth/mail/google`} style={{ borderRadius: '100%', cursor: 'pointer', width: '25px', height: '25px', marginLeft: '-7px', backgroundColor: 'white' }}>
                          <img src={googleIcon} style={{ borderRadius: '100%', boxShadow: '0px 0px 4px black', filter: 'grayscale(.4)' }} width='25px' alt="" /> <br />
                        </a>
                      </ul>
                  }
                  <label>
                    {language === 'EN' ? 'Name' : 'Nombre'}
                    <input required placeholder={language === 'EN' ? 'Your name' : 'Tu nombre'} type="text" name="name" value={formData.name} onChange={handleInputChange} />
                  </label><br />
                  <label>
                    {language === 'EN' ? 'Email' : 'Correo'}
                    <input required placeholder={language === 'EN' ? 'example@email.com' : 'ejemplo@email.com'} type="email" name="email" style={user ? { backgroundColor: 'gray' } : {}} disabled={user ?? false} value={formData.email} onChange={handleInputChange} />
                  </label><br />
                  <label>
                    {language === 'EN' ? 'Message:' : 'Mensaje:'}<br />
                    <textarea required placeholder={language === 'EN' ? 'Write your message here...' : 'Escribe tu mensaje aquí...'} name="message" onChange={handleInputChange} />
                  </label><br />
                  <button className={s.submitButton} type="submit">{language === 'EN' ? 'send' : 'enviar'}</button>
                </form>
                <div className={s.pInfoCont}>
                  <p className={s.pInfo}>{language === "EN" ? "You can also contact me through other services: " : "Puedes contactarme mediante otros servicios al correo: "} <a href='mailto:gwerh.dev@gmail.com'>gwerh.dev@gmail.com</a></p>
                </div>
              </div>
            )}
            {!showForm && (
              <div className={s.sformCont}>
                <div className={s.showFormCont}>
                  <p style={{
                    textShadow: message.EN === "Failed to send email." ? "0px 0px 5px red" : "0px 0px 5px green"
                  }}>{language === "EN" ? message.EN : message.ES}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
