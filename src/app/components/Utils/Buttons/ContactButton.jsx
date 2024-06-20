import s from './ContactButton.module.css';

export const ContactButton = (props) => {
  const { message, email } = props;

  return (
    <a className={s.contactButton} href={"mailto:" + email}>
      {message}
    </a>
  )
}
