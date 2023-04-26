import { UnderConstruction } from '../../Utils/UnderConstruction'
import s from './css/Gear.module.css'


export const Gear = (props) => {
    const {language} = props
    return (
        <div className={s.gearCont}>
            <div style={{width:'100%', textAlign:'center', paddingTop:'100px'}}>
                <h1 style={{fontFamily:'Trajan', color:'white', fontSize:'2.3rem'}}>{language==='EN'? 'Gear' : 'Equipamiento'}</h1>
            </div>
            <ul className={s.iconList} style={{marginLeft:'-40px'}}>
             <UnderConstruction color={'white'}/>
            </ul>
        </div>
    )
}