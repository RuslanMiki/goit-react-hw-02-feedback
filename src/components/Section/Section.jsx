import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </>
  );
};

Section.defaultProps = {
  title: '',
  children: [],
};

export default Section;
