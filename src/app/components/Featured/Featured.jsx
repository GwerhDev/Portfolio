import s from "./Featured.module.css";
import { Title } from "../Utils/Title/Title";
import { InfoButton } from "../Utils/Buttons/InfoButton";
import { GithubButton } from "../Utils/Buttons/GithubButton";
import { Slider } from "../Utils/Slider/Slider";
import { RenderGithubImg } from "../../../functions/RenderGithubImg";

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
                <Title top="0" backgroundColor={true} color='white' title={language === 'EN' ? 'featured (3)' : 'destacados (3)'} />
            </div>
            <Slider>
                <div className={s.infoCont}>
                <div className={s.featuredWrap} id='first'>
                        <div className={s.titleItem}>
                            <h2>artificial intelligence app</h2>
                            <div className={s.buttonsContainer}>
                                <GithubButton url="https://github.com/GwerhDev/ArtificialIntelligence-Client" />
                                <InfoButton
                                    img={RenderGithubImg("637593876/d4a1e612-7c03-4e5d-8f29-1c1f073c4bbf")}
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
                                    <img src={RenderGithubImg("637593876/d4a1e612-7c03-4e5d-8f29-1c1f073c4bbf")} alt="" />
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
                                    img={RenderGithubImg("636264591/2cfa1046-050b-4d02-ba08-c4a9a97a44a8")}
                                    title="LA RUINA TV"
                                    type="featured"
                                    description={description.second}
                                    technologies={technologies.second}
                                    role={role.second}
                                    url="https://tv.laruina.cl"
                                    github={github.second}
                                />
                            </div>
                        </div>
                        <div className={s.wrapper}>
                            <div className={s.imageContainer}>
                                <a href="https://tv.laruina.cl" target="_blank" rel="noreferrer">
                                    <img src={RenderGithubImg("636264591/2cfa1046-050b-4d02-ba08-c4a9a97a44a8")} alt="" />
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
                                    img={RenderGithubImg("633933924/c5112fe3-0c21-4618-835b-9e5ef28aec5e")}
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
                                    <img src={RenderGithubImg("633933924/c5112fe3-0c21-4618-835b-9e5ef28aec5e")} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
};