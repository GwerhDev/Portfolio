import s from './css/Options.module.css';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';


export const Bio = () => {
    const language = useSelector(state => state.language)
    return (
        <div className={s.cont}>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                animate={{ opacity: 1 }}
            >
                {
                    language === 'EN' ?
                        (<>
                            <h4 className={s.par}>
                                I was born on Wednesday, September 16, 1992, in Valdivia, in the south of Chile.
                            </h4>
                            <h4 className={s.par}>
                                I lived and grew up in a rural area of Futrono, 100 kilometers from Valdivia towards the Andes Mountains. Until I was 11 years old, I studied at the "José Manuel Balmaceda Fernández" Public School.            </h4>
                            <h4 className={s.par}>
                                At the age of 12, I began to study in Valdivia at the "Instituto Salesiano de Valdivia", where I completed my studies to begin my university career in Electronic Civil Engineering at the Federico Santa María Technical University, in Valparaíso.            </h4>
                            <h4 className={s.par}>
                                Over the years, I began to dedicate my time to developing web applications, to later apply to the FullStack Web Developer Bootcamp at SoyHenry.            </h4>

                            </>)
                        :
                        (<>
                            <h4 className={s.par}>
                                Nací un miércoles 16 de septiembre de 1992, en Valdivia, al sur de Chile.
                            </h4>
                            <h4 className={s.par}>
                                Vivi y crecí en una zona rural de Futrono, a 100 kilómetros de Valdivia hacia la Cordillera de Los Andes. Hasta los 11 años de edad, estudié en la Escuela Pública "José Manuel Balmaceda Fernández".
                            </h4>
                            <h4 className={s.par}>
                                A la edad de 12 años, comencé a estudiar en Valdivia en el "Instituto Salesiano de Valdivia", donde completé mis estudios para comenzar mi carrera universitaria de Ingeniería Civil Electrónica en la Universidad Técnica Federico Santa María, en Valparaíso.
                            </h4>
                            <h4 className={s.par}>
                                Con los años, comencé a dedicar mi tiempo al desarrollo de aplicaciones web, para posteriormente aplicar en el Bootcamp de FullStack Web Developer en SoyHenry.
                            </h4>
                            </>
                        )
                }
            </motion.div>
        </div>
    )
}