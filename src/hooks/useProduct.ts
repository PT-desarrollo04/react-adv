import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArg } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArg) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProducts = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setcounter] = useState<number>(initialValues?.count || value);

  console.log(initialValues?.maxCount);

  console.log(counter);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    /// Math.max retorna el valor maxmo
    // if (isControlled.current ) {
    //      return onChange!({counter: value,  product})
    //    }

    /// esta es mi solucion para llegar al valor de 10 y no pueda seguir
    // if (counter === initialValues?.maxCount) {
    //   return {
    //     product,
    //   };
    // }

    let newValue = Math.max(counter + value, 0);
    newValue = Math.min(newValue, initialValues?.maxCount || newValue);

    setcounter(newValue);
    onChange && onChange({ counter: newValue, product });
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setcounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    initialValues,
  };
};
