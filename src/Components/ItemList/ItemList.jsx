import { useEffect, useState } from "react";
import Item from "../Item/Item";

const ItemList = () => {
  const [productList, setProductsList] = useState([]); // Debes colocar esta línea dentro de la función de componente

  const fetchProducts = () => {
    fetch('https://654c10ef77200d6ba8587eb4.mockapi.io/api/products', {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductsList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {productList.map(({ name, descriptions, price, image }, index) => (
        <div key={index}>
          <Item
            name={name}
            description={descriptions}
            price={price}
            image={image}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;

