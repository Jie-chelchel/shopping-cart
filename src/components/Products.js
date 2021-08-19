import Product from "./Product";
import { connect } from "react-redux";

function Products({ products }) {
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
