import s from './ActionButton.module.css';
import { useHistory } from 'react-router-dom';

export const ActionButton = (props) => {
  const { message, action, route } = props;
  const history = useHistory();

  function handleAction() {
    if (action) {
      action();
    } else if (route) {
      history.push(route);
    }
  }

  return (
    <button className={s.actionButton} onClick={handleAction}>
      {message}
    </button>
  )
}
