import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";
import { addToCart } from "../actions";

function Product(props) {
  const { product } = props;
  const addToCartHandler = () => {
    console.log(product.id);
    props.addToCart(product.id);
  };

  return (
    <div className="product">
      <h1>{product.title}</h1>
      <img src={product.image} alt="product" />
      <h3>Price: ${product.price}</h3>
      <p>{product.description} </p>
      <div>
        <button>View Item</button>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
}

export default connect(null, { addToCart })(Product);
