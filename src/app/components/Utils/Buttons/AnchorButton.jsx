import s from './AnchorButton.module.css';

export const AnchorButton = (props) => {
  const { message, href } = props;

  return (
    <a className={s.contactButton} href={href}>
      {message}
    </a>
  )
}
