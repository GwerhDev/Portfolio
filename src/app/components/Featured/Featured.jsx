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
            en: "Description: Companion app for 'Diablo Immortal' e-sport clan",
            es: "Aplicación complementaria para clan e-sport 'Diablo Immortal'"
        },
        second: {
            en: "Description: Tests and training for my first AI Application",
            es: "Descripción: Pruebas y entrenamiento para mi primera Aplicación IA"
        },
        third: {
            en: "Description: Multimedia Platform",
            es: "Descripción: Plataforma Multimedia"
        },
    }
    const technologies = {
        first: {
            en: "Technologies: VueJs, Pinia, NodeJs, ExpressJs",
            es: "Tecnologías: VueJs, Pinia, NodeJs, ExpressJs"
        },
        second: {
            en: "Technologies: ReactJs, NodeJs, Python, TensorFlowJs",
            es: "Tecnologías: ReactJs, NodeJs, Python, TensorFlowJs"
        },
        third: {
            en: "Technologies: ReactJs, NodeJs, ExpressJs",
            es: "Tecnologías: ReactJs, NodeJs, ExpressJs"
        },
    }
    const role = {
        first: {
            en: "Role: FullStack Developer, UX/UI",
            es: "Rol: FullStack Developer, UX/UI",
        },
        second: {
            en: "Role: IA Training, Machine Learning, FullStack Developer, UI/UX Designer",
            es: "Rol: Entrenamiento IA, Machine Learning, Desarrollador FullStack, Diseñador UI/UX",
        },
        third: {
            en: "Role: FullStack Developer, UI/UX Designer",
            es: "Rol: Desarrollador FullStack, Diseñador UI/UX",
        },
    }
    const github = {
        first: {
            frontend: "https://github.com/GwerhDev/Shadowgardians-Client",
            backend: "https://github.com/GwerhDev/Shadowgardians-API"
        },
        second: {
            frontend: "https://github.com/GwerhDev/ArtificialIntelligence-Client",
            backend: "https://github.com/GwerhDev/ArtificialIntelligence-API"
        },
        third: {
            frontend: "https://github.com/GwerhDev/La-Ruina-TV-Client",
            backend: "https://github.com/GwerhDev/La-Ruina-TV-API"
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
                            <h2>shadowgardians</h2>
                            <div className={s.buttonsContainer}>
                                <GithubButton url="https://github.com/GwerhDev/Shadowgardians-Client" />
                                <InfoButton
                                    img={RenderGithubImg("735921185/53b47368-5867-432f-88c3-0d860152625a")}
                                    title="SHADOWGARDIANS"
                                    type="featured"
                                    description={description.first}
                                    technologies={technologies.first}
                                    role={role.first}
                                    url="https://shadowgardians.netlify.app"
                                    github={github.first}
                                    language={language}
                                />
                            </div>
                        </div>
                        <div className={s.wrapper}>
                            <div className={s.imageContainer}>
                                <a href="https://shadowgardians.netlify.app" target="_blank" rel="noreferrer">
                                    <img src={RenderGithubImg("735921185/53b47368-5867-432f-88c3-0d860152625a")} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={s.featuredWrap} id='second'>
                        <div className={s.titleItem}>
                            <h2>artificial intelligence app</h2>
                            <div className={s.buttonsContainer}>
                                <GithubButton url="https://github.com/GwerhDev/ArtificialIntelligence-Client" />
                                <InfoButton
                                    img={RenderGithubImg("637593876/d4a1e612-7c03-4e5d-8f29-1c1f073c4bbf")}
                                    title="ARTIFICIAL INTELLIGENCE APP - TESTING"
                                    type="featured"
                                    description={description.second}
                                    technologies={technologies.second}
                                    role={role.second}
                                    url="https://terminalkiller.netlify.app/#/ai-testing"
                                    github={github.second}
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

                    <div className={s.featuredWrap} id='third'>
                        <div className={s.titleItem}>
                            <h2>la ruina tv</h2>
                            <div className={s.buttonsContainer}>
                                <GithubButton url="https://github.com/GwerhDev/La-Ruina-TV-client" />
                                <InfoButton
                                    img={RenderGithubImg("636264591/2cfa1046-050b-4d02-ba08-c4a9a97a44a8")}
                                    title="LA RUINA TV"
                                    type="featured"
                                    description={description.third}
                                    technologies={technologies.third}
                                    role={role.third}
                                    url="https://tv.laruina.cl"
                                    github={github.third}
                                    language={language}
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
                </div>
            </Slider>
        </div>
    )
};