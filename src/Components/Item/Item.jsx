import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';

function Item({ productId, name, description, price, image, stock }) {
  
  return (
    <Card style={{ width: '18rem', margin: '5px', textAlign: 'center' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> {description} </Card.Text>
        <Card.Text>
          ${price} c/u
        </Card.Text>
        <Card.Text>
          Unidades: {stock}
        </Card.Text>
        <ItemCount initial={0} stock={stock} productId={productId} />
      </Card.Body>
    </Card>
  );
}

export default Item;
