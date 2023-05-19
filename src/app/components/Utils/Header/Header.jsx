import { Helmet } from 'react-helmet';

export const Header = (props) => {
    const { title, content } = props
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={content} />
        </Helmet>
      </div>
    );
  };