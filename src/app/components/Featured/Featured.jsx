import { Card } from "./Card";
import s from "./Featured.module.css";

export const Featured = (props) => {
  const { language } = props;

  const description = {
    first: {
      en: "Companion app for 'Diablo Immortal' e-sport clan",
      es: "Aplicación complementaria para clan e-sport 'Diablo Immortal'"
    },
    second: {
      en: "Tests and training for my first AI Application",
      es: "Pruebas y entrenamiento para mi primera Aplicación IA"
    },
    third: {
      en: "Multimedia Platform",
      es: "Plataforma Multimedia"
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
      en: "FullStack Developer, UX/UI",
      es: "FullStack Developer, UX/UI",
    },
    second: {
      en: "IA Training, Machine Learning, FullStack Developer, UI/UX Designer",
      es: "Entrenamiento IA, Machine Learning, Desarrollador FullStack, Diseñador UI/UX",
    },
    third: {
      en: "FullStack Developer, UI/UX Designer",
      es: "Desarrollador FullStack, Diseñador UI/UX",
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

  const image = {
    first: "https://streamby.s3.sa-east-1.amazonaws.com/GwerhDev/Portfolio/image/shadowgardians-img.png",
    second: "https://streamby.s3.sa-east-1.amazonaws.com/GwerhDev/Portfolio/image/ia-testing-img.png",
    third: "https://streamby.s3.sa-east-1.amazonaws.com/GwerhDev/Portfolio/image/laruinatv-img.png"
  }

  const url = {
    first: "https://shadowgardians.netlify.app",
    second: "https://terminalkiller.netlify.app/#/ai-testing",
    third: "https://tv.laruina.cl/"
  }

  return (
    <div className={s.container}>
      <Card
        title="Shadowgardians"
        image={image.first}
        language={language}
        description={description.first}
        technologies={technologies.first}
        role={role.first}
        github={github.first.frontend}
        url={url.first}
      />

      <Card
        title="Shadowgardians"
        image={image.second}
        language={language}
        description={description.second}
        technologies={technologies.second}
        role={role.second}
        github={github.second.frontend}
        url={url.second}
      />

      <Card
        title="La Ruina TV"
        image={image.third}
        language={language}
        description={description.third}
        technologies={technologies.third}
        role={role.third}
        github={github.third.frontend}
        url={url.third}
      />

    </div>
  )
};