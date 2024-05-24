import React, { useState } from 'react';
import Button from '../../Button/Button';
import style from './main.module.css';


function Main() {
  const [changeImage, setChangeImage] = useState(false);
  const [count, setCount] = useState(0);
  const [isNightMode, setIsNightMode] = useState(false);

  const changeImageHandler = () => {
    setChangeImage(!changeImage);
  };

  const addCount = () => {
    setCount(count + 1);
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    setChangeImage(!changeImage); 
  };

  return (
    <div className={`${style.container} ${isNightMode ? style.nightMode : ''}`}>
      <h1>Perfume notes</h1>
      <Button styleProps={isNightMode} changeImageHandler={toggleNightMode} text=" Change Notess" />
 
      <p className={`${style.smallFont} ${isNightMode ? style.largeFont : ''}`}>
        {isNightMode 
          ? "The aroma of dark chocolate is bright, rich and even spicy. As soon as perfume notes of chocolate appeared, they immediately took their rightful place in the perfume industry and gained popularity among perfume lovers. It is worth noting that the aroma of dark chocolate itself is very monotonous, so perfumes with the smell of chocolate are not based only on the notes of this delicacy. Chocolate takes on different shades, depending on the perfume components that complement it. It can be sweet and tender or seductive and provocative. In men's perfumes, notes of chocolate can sound noble and restrained, giving them a subtle bitterness."
          : "Floral scents are the largest family in perfumery. Their range is very wide. It includes floral mono-aromas and compositions, which are based on an entire floral bouquet. These are various combinations of floral notes, among which the most popular are rose, jasmine, tuberose, freesia, violet, iris, lavender, lily and others. Floral aromas can be thick and rich, or they can have a light and translucent flair. In addition, they are available during the day and evening. It is worth noting that not all fragrances in this family have dominant notes of flowers."
        }
      </p>
      <img
        src={
          changeImage
            ? 'https://kartinki.pics/uploads/posts/2022-03/1648120490_1-kartinkin-net-p-kartinki-korichnevogo-tsveta-1.jpg'
             :'https://masterpiecer-images.s3.yandex.net/876901ff651511ee88dfda477c0f1ee2:upscaled'
        }
        alt=""
        className={style.image}
      />
      <div className={style.countContainer}>
        <Button styleProps={changeImage} changeImageHandler={addCount} text="Add" />
        <p className={`${count < 9 ? style.count : style.changeCountStyle}`}>{count}</p>
      </div>
    </div>
  );
}

export default Main;
