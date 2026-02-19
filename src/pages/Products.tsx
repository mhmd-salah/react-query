import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../lib/apis/product.api";

const Products = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <div>
      <h1 className="text-4xl text-violet-500 font-bold">Products</h1>
      {/* loading */}
      {isLoading&&<p className="italic">Loading Products ...</p>}
      {/* data */}
      <ul></ul>
      {/* error */}
    </div>
  );
};

export default Products;
