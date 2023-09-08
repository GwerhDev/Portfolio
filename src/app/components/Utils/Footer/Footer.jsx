import s from './Footer.module.css';
import { currentYear } from '../../../../functions/FooterFunctions';

export const Footer = () => {
  return (
    <div className={s.footerCont}>
      <h3 style={{ fontSize: '10px' }}>
        {currentYear()} &copy; Theme by LaloFreak.{' '}
        <a
          style={{ color: 'white', textDecoration: 'underline' }}
          href='https://github.com/GwerhDev/Portfolio'
          alt='repository'
          target='_blank'
          rel='noreferrer'
        >
          All Cats Are Beautiful
        </a>
      </h3>
    </div>
  );
};
