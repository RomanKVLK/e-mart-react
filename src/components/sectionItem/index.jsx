import styles from './SectionItem.module.scss';

const SectionItem = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.imgPath} alt="section" />
      <h1>{props.name}</h1>
    </div>
  );
};

export default SectionItem;
