import s from "./Featured.module.css";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { EmptyCard } from "./EmptyCard";

export const Featured = (props) => {
  const { language } = props;
  const develop = useSelector((state) => state.develop);

  return (
    <ul className={s.container}>
      {
        develop?.[0]?.web
          ?
          develop?.[0]?.web?.map((item, index) => (
            item.featured &&
            <li key={index}>
              <Card
                key={index}
                title={item.name}
                image={item.img}
                language={language}
                description={item.description}
                technologies={item.technologies}
                role={item.role}
                github={item.repository}
                url={item.href}
                gallery={item.gallery}
              />
            </li>
          ))
          :
          <ul className={s.emptyCardContainer}>
            <EmptyCard />
          </ul>
      }
    </ul>
  )
};