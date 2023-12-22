import { useEffect, useState } from "react";
import Item from "../Item/Item";
import CardGroup from "react-bootstrap/CardGroup";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

var products = [];

const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  let product = doc.data();
  product.id = doc.id;
  products.push(product);
});

const ItemList = () => {
  const [productList, setProductsList] = useState([]); // Debes colocar esta línea dentro de la función de componente

  useEffect(() => {
    setProductsList(products)
  }, []);

  return (
    <CardGroup style={{ justifyContent: "center" }}>
      {productList.map(({ id, name, description, price, image, stock }, index) => (
        <div key={index}>
          <Item
            productId={id}
            name={name}
            description={description}
            price={price}
            image={image}
            stock={stock}
          />
        </div>
      ))}
    </CardGroup>
  );
};

export default ItemList;
