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
          {({ maxCount, reset, increaseBy, isMaxCountReached, count }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" activeClass="active" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>- 2 </button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(+2)}> + 2 </button>
              )}

              <span style={{ textAlign: "center", marginLeft: "60px" }}>
                {` ${"el valor max es "} ${maxCount}`}{" "}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
