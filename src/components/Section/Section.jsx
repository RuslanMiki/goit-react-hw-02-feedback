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

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
