import s from './css/Options.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOption } from '../../../middlewares/redux/actions';
import { Title } from '../../components/Utils/Title/Title';
import { Intro } from './Intro';
import { Bio } from './Bio';
import { Cv } from './Cv';
import arrowIcon from '../../../assets/images/png/arrow-icon.png';

export const OptionCanvas = () => {
  const option = useSelector(state => state.option);
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
  const langOption = (option) => {
    if (language === 'ES' && option === 'intro') return 'intro'
    if (language === 'ES' && option === 'develop') return 'desarrollo'
    if (language === 'ES' && option === 'sound') return 'sonido'
    if (language === 'ES' && option === 'design') return 'diseno '
    if (language === 'ES' && option === 'contact') return 'contacto'
    if (language === 'ES' && option === 'resume') return 'cv'
    else return option
  }

  return (
    <div className={s.contOptions}>
      <main className="main-container align-start">
        <section className="section-container">
          <div className={s.titleContainer}>
            <Title backgroundColor={true} color={'white'} title={langOption(option)} />
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              transition={{ duration: 1 }}
              animate={{ opacity: 1, x: 0 }}
            >

              {
                option === 'intro'
                  ?
                  <><Intro />
                    <div className={s.btnsCont}>
                      <img src='true' alt='' />
                      <div style={{ display: 'flex' }}>
                        <h3 style={{ fontFamily: 'Trajan', fontSize: '18px', marginRight: '10px' }}>bio</h3>
                        <Link to='/home/bio'>
                          <img
                            className={s.menuback}
                            onClick={() => { return dispatch(setOption('bio')) }}
                            src={arrowIcon}
                            alt='next'
                            width='30px'
                          />
                        </Link>
                      </div>
                    </div></>
                  :
                  null
              }
              {
                option === 'bio'
                  ?
                  <><Bio />

                    <div className={s.btnsCont}>
                      <div style={{ display: 'flex' }}>
                        <Link to='/home/intro'>
                          <img
                            className={s.menuback}
                            onClick={() => { return dispatch(setOption('intro')) }}
                            src={arrowIcon}
                            alt='next'
                            width='30px'
                            style={{ rotate: '180deg' }}
                          />
                        </Link>
                        <h3 style={{ fontFamily: 'Trajan', fontSize: '18px', marginLeft: '10px' }}>{language === 'EN' ? 'intro' : 'intro'}</h3>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <h3 style={{ fontFamily: 'Trajan', fontSize: '18px', marginRight: '10px' }}>cv</h3>
                        <Link to='/home/resume'>
                          <img
                            className={s.menuback}
                            onClick={() => { return dispatch(setOption('resume')) }}
                            src={arrowIcon}
                            alt='next'
                            width='30px'
                          />
                        </Link>
                      </div>
                    </div></>
                  :
                  null
              }
              {
                option === 'resume'
                  ?
                  <><Cv />
                    <div className={s.buttonsCont}>
                      <div className={s.btnsCont}>
                        <div style={{ display: 'flex' }}>
                          <Link to='/home/bio'>
                            <img
                              className={s.menuback}
                              onClick={() => { return dispatch(setOption('bio')) }}
                              src={arrowIcon}
                              alt='next'
                              width='30px'
                              style={{ rotate: '180deg' }}
                            />
                          </Link>
                          <h3 style={{ fontFamily: 'Trajan', fontSize: '18px', marginLeft: '10px' }}>bio</h3>
                        </div>
                      </div>
                    </div>
                  </>
                  :
                  null
              }
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
};