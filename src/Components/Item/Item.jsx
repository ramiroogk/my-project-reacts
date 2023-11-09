const Item = ({name, description, price, image})=>{
return(
<div>
    <img alt={name} src={image}/>
<div>
    <h3>{name}</h3>
    <h6>{price}</h6>
</div>
  <p>{description}</p>
</div>
    );
};

export default Item;