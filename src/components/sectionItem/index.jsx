import styles from './SectionItem.module.scss';

const SectionItem = ({ imgPath, name }) => {
  return (
    <div className={styles.sectionItem}>
      <img className={styles.sectionItem__icon} src={imgPath} alt="section" width={33} />
      <p className={styles.sectionItem__name}>{name}</p>
    </div>
  );
};

export default SectionItem;
