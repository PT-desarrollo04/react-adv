import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArg } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArg) => void;
  value?: number;
  initialValues?: InitialValues;
}

const url =
  "https://app.powerbi.com/view?r=eyJrIjoiZDQ4N2JhNmYtYTFmNC00ZmM0LWE5YWUtYjNlNmE4YmNkMDIzIiwidCI6IjhlZGRjOTE5LTMxNzEtNDYwZC04NGE0LWIzMGFlNjVlMzdjMyJ9";

console.log(encodeURI(url)); //https://app.powerbi.com/view?r=eyJrIjoiZDQ4N2JhNmYtYTFmNC00ZmM0LWE5YWUtYjNlNmE4YmNkMDIzIiwidCI6IjhlZGRjOTE5LTMxNzEtNDYwZC04NGE0LWIzMGFlNjVlMzdjMyJ9
console.log(encodeURIComponent(url)); //https%3A%2F%2Fhttps://app.powerbi.com/view?r=eyJrIjoiZDQ4N2JhNmYtYTFmNC00ZmM0LWE5YWUtYjNlNmE4YmNkMDIzIiwidCI6IjhlZGRjOTE5LTMxNzEtNDYwZC04NGE0LWIzMGFlNjVlMzdjMyJ9

export const useProducts = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setcounter] = useState<number>(initialValues?.count || value);

  let maxCount = initialValues?.maxCount;

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

  const reset = () => {
    setcounter(initialValues?.count || value);
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
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount,
    reset,
  };
};
