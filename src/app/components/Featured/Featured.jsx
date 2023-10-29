import s from "./Featured.module.css";
import { RenderDriveImg } from "../../../functions/RenderDriveImg";
import { Title } from "../Utils/Title/Title";
import { InfoButton } from "../Utils/Buttons/InfoButton";
import { GithubButton } from "../Utils/Buttons/GithubButton";
import { Slider } from "../Utils/Slider/Slider";

export const Featured = (props) => {
    const { language } = props;
    const description = {
        first: {
            en: "Description: Tests and training for my first AI Application",
            es: "Descripción: Pruebas y entrenamiento para mi primera Aplicación IA"
        },
        second: {
            en: "Description: Multimedia Platform",
            es: "Descripción: Plataforma Multimedia"
        },
        third: {
            en: "Description: Art & Entertainment",
            es: "Descripción: Arte y Entretenimiento"
        },
    }
    const technologies = {
        first: {
            en: "Technologies: ReactJs, NodeJs, Python, TensorFlowJs",
            es: "Tecnologías: ReactJs, NodeJs, Python, TensorFlowJs"
        },
        second: {
            en: "Technologies: ReactJs, NodeJs, ExpressJs",
            es: "Tecnologías: ReactJs, NodeJs, ExpressJs"
        },
        third: {
            en: "Technologies: ReactJs, NodeJs",
            es: "Tecnologías: ReactJs, NodeJs"
        },
    }
    const role = {
        first: {
            en: "Role: IA Training, Machine Learning, FullStack Developer, UI/UX Designer",
            es: "Rol: Entrenamiento IA, Machine Learning, Desarrollador FullStack, Diseñador UI/UX",

        },
        second: {
            en: "Role: FullStack Developer, UI/UX Designer",
            es: "Rol: Desarrollador FullStack, Diseñador UI/UX",
        },
        third: {
            en: "Role: FullStack Developer, UI/UX Designer",
            es: "Rol: Desarrollador FullStack, Diseñador UI/UX",
        },
    }
    const github = {
        first: {
            frontend: "https://github.com/GwerhDev/ArtificialIntelligence-Client",
            backend: "https://github.com/GwerhDev/ArtificialIntelligence-API"
        },
        second: {
            frontend: "https://github.com/GwerhDev/La-Ruina-TV-Client",
            backend: "https://github.com/GwerhDev/La-Ruina-TV-API"
        },
        third: {
            frontend: "https://github.com/GwerhDev/World-of-Gwerh",
            backend: ""
        }
    }

    return (
        <div className={s.featuredCont} id="flex-column-center">
            <div className={s.title}>
                <Title top="0px" backgroundColor={true} color='white' title={language === 'EN' ? 'featured (3)' : 'destacados (3)'} />
            </div>
            <Slider>
                <div className={s.infoCont}>
                <div className={s.featuredWrap} id='first'>
                        <div className={s.titleItem}>
                            <h2>artificial intelligence app</h2>
                            <div className={s.buttonsContainer}>
                                <GithubButton url="https://github.com/GwerhDev/ArtificialIntelligence-Client" />
                                <InfoButton
                                    img={RenderDriveImg('10cQSHYR-JMfMMXBETucRpuw19rnyaCQ4')}
                                    title="ARTIFICIAL INTELLIGENCE APP - TESTING"
                                    type="featured"
                                    description={description.first}
                                    technologies={technologies.first}
                                    role={role.first}
                                    url="https://terminalkiller.netlify.app/#/ai-testing"
                                    github={github.first}
                                    language={language}
                                />
                            </div>
                        </div>
                        <div className={s.wrapper}>
                            <div className={s.imageContainer}>
                                <a href="https://terminalkiller.netlify.app/#/ai-testing" target="_blank" rel="noreferrer">
                                    <img src={RenderDriveImg('10cQSHYR-JMfMMXBETucRpuw19rnyaCQ4')} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={s.featuredWrap} id='second'>
                        <div className={s.titleItem}>
                            <h2>la ruina tv</h2>
                            <div className={s.buttonsContainer}>
                                <GithubButton url="https://github.com/GwerhDev/La-Ruina-TV-client" />
                                <InfoButton
                                    img={RenderDriveImg('1WyQV_2EN83yPOC0dUQgFhPb8bzj-YxW_')}
                                    title="LA RUINA TV"
                                    type="featured"
                                    description={description.second}
                                    technologies={technologies.second}
                                    role={role.second}
                                    url="https://tv.laruinarecords.cl"
                                    github={github.second}
                                />
                            </div>
                        </div>
                        <div className={s.wrapper}>
                            <div className={s.imageContainer}>
                                <a href="https://tv.laruinarecords.cl" target="_blank" rel="noreferrer">
                                    <img src={RenderDriveImg('1WyQV_2EN83yPOC0dUQgFhPb8bzj-YxW_')} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={s.featuredWrap} id='third'>
                        <div className={s.titleItem}>
                            <h2>world of gwerh</h2>
                            <div className={s.buttonsContainer}>
                                <GithubButton url="https://github.com/GwerhDev/World-of-Gwerh" />
                                <InfoButton
                                    img={RenderDriveImg('1bToH3PblA0YjvVeeWN_L4u7HRg891XYI')}
                                    title="WORLD OF GWERH"
                                    type="featured"
                                    description={description.third}
                                    technologies={technologies.third}
                                    role={role.third}
                                    url="http://worldofgwerh.netlify.app"
                                    github={github.third}
                                />
                            </div>
                        </div>
                        <div className={s.wrapper}>
                            <div className={s.imageContainer}>
                                <a href="http://worldofgwerh.netlify.app" target="_blank" rel="noreferrer">
                                    <img src={RenderDriveImg('1bToH3PblA0YjvVeeWN_L4u7HRg891XYI')} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
};