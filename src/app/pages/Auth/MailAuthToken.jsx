import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginWithGoogle } from '../../../middlewares/redux/actions';

const MailAuthToken = () => {
  const history = useHistory()
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const authToken = params.get('token');
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)

  useEffect(() => {
    if (authToken) {
      dispatch(loginWithGoogle(authToken))
    }
  }, [currentUser, authToken, dispatch])

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('auth', JSON.stringify(currentUser))
      history.push('/contact')
      window.location.reload()
    }
  }, [currentUser, history])

  return (
    <div style={{
      color: 'var(--app-white);',
      filter: 'drop-shadow(0px 0px 2px green)',
      bottom: '0px',
      position: 'absolute',
      fontSize: '8px',
      height: '20px',
      width: '100%', 
      textAlign: 'right'
    }} > <br></br></div>
  )
}

export default MailAuthToken;