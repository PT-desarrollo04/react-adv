import "../styles/coustomer.css";

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components/index";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
  // const { onProductConstChange, shoppingCard, products } = useShoppingCardt();

  return (
    <div>
      <h1>Shopping page </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* HOC = ES TO QUIERE DECIR QUE RECIBE HIJOS   */}
        {/* <ProductCard product={product1} className="dark-gray text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title activeClass="active" title="Cofie" />
          <ProductCard.Buttons />
        </ProductCard> */}

        <ProductCard
          key={product.id}
          className="dark-gray text-white"
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {(mensaje) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" activeClass="active" />
              <ProductButtons className="custom-buttons" />
              <h1>{mensaje}</h1>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
