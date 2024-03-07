import s from './Footer.module.css';
import { currentYear } from '../../../../functions/FooterFunctions';
import { PORTFOLIO_REPO_URL } from '../../../../middlewares/config';

export const Footer = () => {
  return (
    <div className={s.footerCont}>
      <h3 style={{ fontSize: '10px' }}>
        {currentYear()} &copy; Theme by Gwerh.{' '}
        <a
          style={{ color: 'white', textDecoration: 'underline' }}
          href={PORTFOLIO_REPO_URL}
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
