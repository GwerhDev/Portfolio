import { useDispatch, useSelector } from 'react-redux'
import { setOption } from '../../middlewares/redux/actions'
import { Bio } from './Bio'
import s from './css/Options.module.css'
import { Cv } from './Cv'
import { OptionTitle } from './OptionTitle'
import arrowIcon from '../../images/arrow-icon.png'
import { Intro } from './Intro'
import { Link } from 'react-router-dom'

export const OptionCanvas = () => {
    const option = useSelector(state=>state.option)
    const language = useSelector(state=>state.language)
    const dispatch = useDispatch()
    const langOption = (option) => {
        if(language==='ES' && option === 'introduction') return 'introduccion'
        if(language==='ES' && option === 'develop') return 'desarrollo'
        if(language==='ES' && option === 'sound') return 'sonido'
        if(language==='ES' && option === 'design') return 'diseno '
        if(language==='ES' && option === 'contact') return 'contacto'
        else return option
    }
    return (
        <div className={s.contOptions}>
            <div className={s.webBg}/>
            <OptionTitle title={langOption(option)} />
            {option==='introduction'?
            <><Intro/>
            <div className={s.btnsCont}>
                <img src='true' alt='' />
                <div style={{display:'flex'}}>
                    <h3 style={{fontFamily: 'Trajan', fontSize:'18px', marginRight:'10px'}}>bio</h3>
                    <Link to='/lalofreak/home/bio'>
                        <img 
                            className={s.menuback} 
                            onClick={()=>{return dispatch(setOption('bio'))}}
                            src={arrowIcon} 
                            alt='next' 
                            width='30px'  
                        />
                    </Link>
                </div>
            </div></>
            :null}
            {option==='bio'?
            <><Bio/>

            <div className={s.btnsCont}>
                <div style={{display:'flex'}}>
                    <Link to='/lalofreak/home/introduction'>
                        <img 
                        className={s.menuback} 
                        onClick={()=>{return dispatch(setOption('introduction'))}} 
                        src={arrowIcon} 
                        alt='next' 
                        width='30px'
                        style={{rotate: '180deg'}}
                        />
                    </Link>
                    <h3 style={{fontFamily: 'Trajan', fontSize:'18px', marginLeft:'10px'}}>{language==='EN'? 'intro':'intro'}</h3>
                </div>
                <div style={{display:'flex'}}>
                    <h3 style={{fontFamily: 'Trajan', fontSize:'18px', marginRight:'10px'}}>cv</h3>
                    <Link to='/lalofreak/home/cv'>
                        <img 
                        className={s.menuback} 
                        onClick={()=>{return dispatch(setOption('cv'))}} 
                        src={arrowIcon} 
                        alt='next' 
                        width='30px'
                        />
                    </Link>
                </div>
            </div></>
            :null}
            {option==='cv'?
            <><Cv/>
            <div className={s.btnsCont}>
                <div style={{display:'flex'}}>
                    <Link to='/lalofreak/home/bio'>
                        <img 
                            className={s.menuback} 
                            onClick={()=>{return dispatch(setOption('bio'))}}
                            src={arrowIcon} 
                            alt='next' 
                            width='30px'
                            style={{rotate: '180deg'}}  
                        />
                    </Link>
                    <h3 style={{fontFamily: 'Trajan', fontSize:'18px', marginLeft:'10px'}}>bio</h3>
                </div>
            </div></>
            :null}
        </div>
    )
}