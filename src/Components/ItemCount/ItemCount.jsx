import './ItemCount.css';
import React,{ useState } from 'react';


export const ItemCount = ({initial, stock, onAdd}) => {
  const [count,setCount] = useState(initial);

  const decrease = () => {
    setCount(count -1);
  }

  const incrementa = () => {
    setCount(count+1);
  }

  return (
    <div className='counter'>
        <button disabled={count==0} onClick={decrease}> - </button>
        <span> {count} </span>
        <button disabled={count>=stock} onClick={incrementa}> + </button>
      <div>
        <button> Agregar al carrito </button>  
      </div>
    </div>

  );
}

export default ItemCount;