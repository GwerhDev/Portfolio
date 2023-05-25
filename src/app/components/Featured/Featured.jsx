import s from "./css/Featured.module.css";
import { RenderDriveImg } from "../../../functions/RenderDriveImg";
import { Title } from "../Utils/Title/Title";
import { InfoButton } from "../Utils/Buttons/InfoButton";
import { GithubButton } from "../Utils/Buttons/GithubButton";

export const Featured = (props) => {
    const { language } = props
    return (
        <div className={s.featuredCont} id="flex-column-center">
            <div className={s.title}>
                <Title top="0px" backgroundColor={true} color='black' title={language==='EN'? 'featured projects':'proyectos destacados'}/>
            </div>
            <div className={s.infoCont}>
                <div className={s.featuredWrap}>
                    <div className={s.titleItem}>
                        <h2>Artificial Intelligence app</h2>
                        <div className={s.buttonsContainer}>
                            <GithubButton url="https://github.com/LaloFreak/ArtificialIntelligence-Client"/>
                            <InfoButton img={RenderDriveImg('10cQSHYR-JMfMMXBETucRpuw19rnyaCQ4')} />
                        </div>
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
                    <a href="https://tv.laruinarecords.cl" target="_blank" rel="noreferrer">
                        <div className={s.wrapper}>
                            <div className={s.imageContainer}>
                                <img src={ RenderDriveImg('1WyQV_2EN83yPOC0dUQgFhPb8bzj-YxW_') } alt="" />
                            </div>
                        </div>
                    </a> 
                    <div className={s.titleItem}>
                        <h2>la Ruina tv</h2>
                        <div className={s.buttonsContainer}>
                            <GithubButton url="https://github.com/LaloFreak/La-Ruina-TV-client"/>
                            <InfoButton img={ RenderDriveImg('1WyQV_2EN83yPOC0dUQgFhPb8bzj-YxW_') }/>
                        </div>
                    </div>
                </div>
                <div className={s.secondMobile}>
                    <div className={s.titleItem}>
                        <h2>la Ruina tv</h2>
                        <div className={s.buttonsContainer}>
                            <GithubButton url="https://github.com/LaloFreak/La-Ruina-TV-client"/>   
                            <InfoButton img={ RenderDriveImg('1WyQV_2EN83yPOC0dUQgFhPb8bzj-YxW_') }/>
                        </div>               
                    </div>
                    <a href="https://tv.laruinarecords.cl" target="_blank" rel="noreferrer">
                        <div className={s.wrapper}>
                            <div className={s.imageContainer}>
                                <img src={ RenderDriveImg('1WyQV_2EN83yPOC0dUQgFhPb8bzj-YxW_') } alt="" />
                            </div>
                        </div>
                    </a> 
                </div>
                <div className={s.featuredWrap}>
                    <div className={s.titleItem}>
                        <h2>world of Gwerh</h2>
                        <div className={s.buttonsContainer}>
                            <GithubButton url="https://github.com/LaloFreak/World-of-Gwerh"/>
                            <InfoButton img={ RenderDriveImg('1bToH3PblA0YjvVeeWN_L4u7HRg891XYI') }/>
                        </div>
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