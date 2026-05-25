function ShoppingItem(props) {
  return (
    <div className="shopping-item">

      <h3>{props.title}</h3>

      <img src={props.image} alt="product" />

      <div className="description">
        <span>{props.stock ? "In Stock" : "Out of Stock"}</span>
        <span>{props.rating}</span>
      </div>

      <div className="badges">
        <span className="badge">{props.badge1}</span>
        <span className="badge">{props.badge2}</span>
      </div>

      <button>Add to cart</button>

    </div>
  );
}

export default ShoppingItem;