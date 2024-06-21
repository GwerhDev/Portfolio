import s from "./Featured.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { useEffect } from "react";
import { getFeaturedDevelop } from "../../../middlewares/redux/actions";

export const Featured = (props) => {
  const dispatch = useDispatch();
  const { language } = props;
  const featured = useSelector((state) => state.featured);

  useEffect(() => {
    dispatch(getFeaturedDevelop());
  }, [dispatch])

  return (
    <ul className={s.container}>
      {
        featured?.develop?.map((item, index) => (
          <li key={index}>
            <Card
              key={index}
              title={item.name}
              image={item.img}
              language={language}
              description={item.description}
              technologies={item.technologies}
              role={item.role}
              github={item.repository.frontend}
              url={item.href}
            />
          </li>
        ))
      }
    </ul>
  )
};