import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import Modal from 'react-bootstrap/Modal';

export const ItemCount = ({ initial, stock, productId }) => {
  const [count, setCount] = useState(initial);
  const [product, setProduct] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const decrease = () => {
    setCount(count - 1);
  };

  const incrementa = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const docRef = doc(db, "products", productId);
    getDoc(docRef).then(r => {
      setProduct(r.data().name)
    })
  }, []);

  const addToCart = async () => {
    if (count > 0){
      await addDoc(collection(db, "carts"), {
        productId: productId,
        quantity: count,
      });
      handleShow()
    }else{
      alert("Debes indicar una cantidad válida!")
    }
  };

  return (
    <div className="counter">
      <Button variant="secondary" disabled={count === 0} onClick={decrease}>
        -
      </Button>{" "}
      <span> {count} </span>
      <Button
        variant="secondary"
        className="h-2"
        disabled={count >= stock}
        onClick={incrementa}
      >
        +
      </Button>{" "}
      <div style={{ marginTop: "10px" }}>
        <Button onClick={addToCart} variant="outline-success">
         Agregar al carrito
        </Button>{" "}
        <>
          <Modal show={show} onHide={handleClose} variant="success">
            <Modal.Header closeButton>
              <Modal.Title>✅ Agregaste al carrito</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Has agregado {count} unidades de {product}, gran elección!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </div>
  );
};

export default ItemCount;
