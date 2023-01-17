import SectionItem from '../sectionItem';
import styles from './Sections.module.scss';

const Sections = () => {
  const sectionName = [
    { name: 'Home', imgPath: '/img/Home.svg' },
    { name: 'Shop', imgPath: '/img/Shop.svg' },
    { name: 'Blog', imgPath: '/img/Blog.svg' },
    { name: 'About Us', imgPath: '/img/About-us.svg' },
    { name: 'Gallery', imgPath: '/img/Gallery.svg' },
    { name: 'Location', imgPath: '/img/Location.svg' },
  ];

  const onSectionClick = (i) => {
    console.log(i);
  };

  return (
    <div className={styles.section}>
      <div className={styles.section__logo}>
        <img src="/img/GreneryLogo.svg" alt="Logo" />
      </div>
      <div className="">
        {sectionName.map((value, i) => (
          <SectionItem
            key={i}
            name={value.name}
            imgPath={value.imgPath}
            onClick={() => onSectionClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sections;
