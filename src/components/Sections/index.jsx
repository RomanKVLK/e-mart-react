import React from 'react';

import SectionItem from '../sectionItem';
import styles from './Sections.module.scss';

const Sections = () => {
  const [section, setSection] = React.useState();

  const sect = [
    { name: 'Home', imgPath: '/img/Home.svg' },
    { name: 'Shop', imgPath: '/img/Shop.svg' },
    { name: 'Blog', imgPath: '/img/Blog.svg' },
    { name: 'About Us', imgPath: '/img/About-us.svg' },
    { name: 'Gallery', imgPath: '/img/Gallery.svg' },
    { name: 'Location', imgPath: '/img/Location.svg' },
  ];

  const onChangeSection = (i) => {
    setSection(i);
    console.log(i);
  };

  return (
    <div className={styles.item}>
      {sect.map((value, i) => (
        <SectionItem
          onClick={() => onChangeSection(i)}
          className={section === i ? styles.active : ''}
          key={i}
          name={value.name}
          imgPath={value.imgPath}
        />
      ))}
    </div>
  );
};

export default Sections;
