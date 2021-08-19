import { connect } from "react-redux";

function Cart(props) {
  console.log(props.cart);

  return (
    <div>
      {props.cart.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
            <h2>{item.qty}</h2>
            <button>Delete</button>
            <div>
              <label>Qty</label>
              <input step=" 1 " type="number" min="1" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Cart);
