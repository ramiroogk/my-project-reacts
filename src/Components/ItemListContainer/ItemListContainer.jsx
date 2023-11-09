import ItemCount from "../ItemCount/ItemCount";
import React from 'react'
import ItemList from "../ItemList/ItemList";



export const ItemListContainer = () => {
  const onAdd=(quantity) =>{
  console.log({quantity});
  }

  return (
    <>
      <ItemList/>
      <ItemCount initial={1} stock={5} onadd= {onAdd} />
    </>
  );
}

export default ItemListContainer;