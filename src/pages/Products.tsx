import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../lib/apis/product.api";

const Products = () => {
  const {
    isLoading,
    data: payload,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 0,
    staleTime: 2000,
    enabled:false,  
  });
  console.log(payload);
  return (
    <div>
      <h1 className="text-4xl text-violet-500 font-bold">Products</h1>
      {/* loading */}
      {isLoading && <p className="italic">Loading Products ...</p>}
      {/* data */}
      {payload && (
        <ul>
          {/* {payload.data.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))} */}
          {payload.products.map((product) => (
            <li>{product.title}</li>
          ))}
        </ul>
      )}
      {/* error */}
      {error && <p className="py-8 text-red-500">{error.message}</p>}
    </div>
  );
};

export default Products;
