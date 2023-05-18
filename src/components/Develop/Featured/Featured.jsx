import s from "./css/Featured.module.css";
import githubIcon from "../../../images/github-icon.png";
import { useSelector } from "react-redux";
import { RenderDriveImg } from "../../../functions/RenderDriveImg";
import { OptionTitle } from "../../Options/OptionTitle";

export const Featured = () => {
    const language = useSelector(state=>state.language)
  
    return (
        <div className={s.featuredCont}>
            <div className={s.title}>
                <OptionTitle color='black' title={language==='EN'? 'featured projects':'proyectos destacados'}/>
            </div>
            <div className={s.infoCont}>
                <div className={s.featuredWrap}>
                    <div className={s.titleItem}>
                        <h2>Artificial Intelligence app</h2>
                        <img src={githubIcon} alt="github" />
                    </div>
                    <a href="https://terminalkiller.site/#/ai-testing" target="_blank" rel="noreferrer">
                        <div className={s.wrapper}>
                            <div className={s.imageContainer}>
                                <img src={ RenderDriveImg('10cQSHYR-JMfMMXBETucRpuw19rnyaCQ4') } alt="" />
                            </div>
                        </div>
                    </a> 
                </div>
                <div className={s.secondDesktop}>
                    <div className={s.featuredWrap}>
                        <a href="https://tv.laruinarecords.cl" target="_blank" rel="noreferrer">
                            <div className={s.wrapper}>
                                <div className={s.imageContainer}>
                                    <img src={ RenderDriveImg('1WyQV_2EN83yPOC0dUQgFhPb8bzj-YxW_') } alt="" />
                                </div>
                            </div>
                        </a> 
                        <div className={s.titleItem}>
                            <h2>la Ruina tv</h2>
                            <img src={githubIcon} alt="github" />
                        </div>
                    </div>
                </div>
                <div className={s.secondMobile}>
                    <div className={s.featuredWrap}>
                        <div className={s.titleItem}>
                            <h2>la Ruina tv</h2>
                            <img src={githubIcon} alt="github" />
                        </div>
                        <a href="https://tv.laruinarecords.cl" target="_blank" rel="noreferrer">
                            <div className={s.wrapper}>
                                <div className={s.imageContainer}>
                                    <img src={ RenderDriveImg('1WyQV_2EN83yPOC0dUQgFhPb8bzj-YxW_') } alt="" />
                                </div>
                            </div>
                        </a> 
                    </div>
                </div>
                <div className={s.featuredWrap}>
                    <div className={s.titleItem}>
                        <h2>world of Gwerh</h2>
                        <img src={githubIcon} alt="github" />
                    </div>
                    <a href="http://worldofgwerh.terminalkiller.site" target="_blank" rel="noreferrer">
                        <div className={s.wrapper}>
                            <div className={s.imageContainer}>
                                <img src={ RenderDriveImg('1bToH3PblA0YjvVeeWN_L4u7HRg891XYI') } alt="" />
                            </div>
                        </div>  
                    </a> 
                </div>
            </div>
        </div>
    )
}