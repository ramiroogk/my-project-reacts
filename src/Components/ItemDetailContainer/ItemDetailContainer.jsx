import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const film = {
  id: 1,
  image: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/492162.jpg",
  title: "Comida argentina"
};

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(film);
        }, 1000);
      });
    };

    getData().then(res => setData(res));
  }, []); // Agrega un array de dependencias vacío para asegurar que useEffect se ejecute solo una vez

  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer;
