import styles from "../styles/styles.module.css";

import { useProducts } from "../hooks/useProduct";
import { ReactElement, createContext } from "react";

import {
  InitialValues,
  Product,
  ProductContextProps,
  onChangeArg,
} from "../interfaces/interfaces";

export interface Props {
  product: Product;
  value?: number;
  // children?: ReactElement | ReactElement[];
  children: (mensaje : string) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArg) => void;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);

export const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy } = useProducts({
    product,
    onChange,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {/* {children} */}

        {/* // DE ESTA MANERA EJECUTAMOS UNA FUNCION  QUE DEVUELVE JSX */}
        {children('HOLA MUNDO')}

        {/* esto se renderisa super bien y se llama Component patter  */}
        {/* <ProductImage img={product.img} /> */}

        {/* <ProductTitle title="Cofie" /> */}

        {/* <img src={NoImg} alt="No Imagen" /> */}

        {/* <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
