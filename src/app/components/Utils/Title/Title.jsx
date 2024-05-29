import s from './Title.module.css';
import { useSelector } from 'react-redux';
import showMoreIcon from '../../../../assets/images/png/showmore-icon.png';
import defaultBackground from '../../../../assets/images/png/cont-bg.png';

export const Title = (props) => {
    const { title, color, displayButton, funct, cursor, angle, backgroundColor, backgroundImage, top } = props;
    const language = useSelector(state=>state.language);
    return (
        <div className={s.componentContainer}>
            <div className={s.contTitle} onClick={funct} style={{top: top?? '70px', cursor, backgroundImage: backgroundImage ? 'url('+ defaultBackground+')' : 'none', backgroundColor: backgroundColor? '#171717d5' : 'transparent'}}>
                <h1 style={{ color }}>
                    {title==='cv' && language==='EN'? 'resume': title}
                    <img 
                        id='showMoreIcon' 
                        className={s.showMoreIcon} 
                        src={showMoreIcon} alt="" width={'25px'} 
                        style={{
                            display: displayButton?? 'none', 
                            rotate: angle,
                            borderColor: 'transparent',
                        }}/>
                </h1>
            </div>
        </div>
    )
}