import { useSelector } from 'react-redux'
import s from './css/Options.module.css'
import { motion } from 'framer-motion'


export const Intro = () => {
    const language = useSelector(state=>state.language)
    return (
        <div className={s.cont}>
            <motion.div 
            initial={{opacity:0}}
            transition={{duration: 1}}
            animate={{opacity:1}}
            >
        {
            language==='EN'?
            (<>
            <h4 className={s.par}>
            My name is Gerardo Guarda Acosta, also known as LaloFreak on GitHub. I am a Fullstack Web Developer, Soundman and Designer oriented to the post-production of audiovisual content and 3D printing. Also, I have participated in various collective projects that have permeated me with capacities and aptitudes within the joint work of diverse groups, both in their composition and in their functional structure, from companies to work cooperatives.            </h4>
            <h4 className={s.par}>
            Here you can find my Biography, my Curriculum and all my Projects. Take a look, I know you will love my work.       
            </h4>            </>
            )
            :
            (<>
            <h4 className={s.par}>
                Mi nombre es Gerardo Guarda Acosta, también conocido como LaloFreak en GitHub. Soy un Desarrollador Web Fullstack, Sonidista y Diseñador orientado a la postproducción de contenido audiovisual e impresión 3D. A su vez, he participado de variados proyectos colectivos que me han permeado de capacidades y aptitudes dentro del trabajo mancomunado de grupos diversos, tanto en su composición como en su estructura funcional, desde empresas hasta cooperativas de trabajo.
            </h4>
            <h4 className={s.par}>
                Aquí puedes encontrar mi Biografía, mi Currículum y todos mis Proyectos. Hecha un vistazo, sé que mi trabajo te encantará.
            </h4></>            
            )
        }
            </motion.div>
        </div>        
    )
}