import s from "./css/Featured.module.css";
import { useSelector } from "react-redux";
import { RenderDriveImg } from "../../../functions/RenderDriveImg";
import { OptionTitle } from "../Utils/OptionTitle/OptionTitle";
import githubIcon from "../../../assets/images/github-icon.png";

export const Featured = () => {
    const language = useSelector(state=>state.language)
  
    return (
        <div className={s.featuredCont} id="flex-column-center">
            <div className={s.title}>
                <OptionTitle color='black' title={language==='EN'? 'featured projects':'proyectos destacados'}/>
            </div>
            <div className={s.infoCont}>
                <div className={s.featuredWrap}>
                    <div className={s.titleItem}>
                        <h2>Artificial Intelligence app</h2>
                        <a href="https://github.com/LaloFreak/ArtificialIntelligence-Client" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="github" />
                        </a>
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
                            <a href="https://github.com/LaloFreak/La-Ruina-TV-client" target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="github" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.secondMobile}>
                    <div className={s.featuredWrap}>
                        <div className={s.titleItem}>
                            <h2>la Ruina tv</h2>
                            <a href="https://github.com/LaloFreak/La-Ruina-TV-client" target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="github" />
                            </a>                        </div>
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
                        <a href="https://github.com/LaloFreak/World-of-Gwerh" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="github" />
                        </a>
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
};