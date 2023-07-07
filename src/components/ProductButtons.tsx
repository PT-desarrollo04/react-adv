import { useCallback, useContext } from "react";

import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //forma de pasar funciones es con el useContext

  //todo: maxCount

  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  //todo: isMaxReached = useCallback, dependencias  [ count, maxCount]
  // true sii el count === maxCounte

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,

    [counter, maxCount]
  );

  return (
    <div style={style} className={`${styles.buttonsContainer}  ${className} `}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>

      <div className={styles.countLabel}>{counter} </div>

      <button
        onClick={() => increaseBy(+1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
      >
        +
      </button>
    </div>
  );
};
