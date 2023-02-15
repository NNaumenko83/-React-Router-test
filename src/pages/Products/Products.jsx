import { useSearchParams } from "react-router-dom";
import { ProductsList } from "../../components/ProductsList/";
import { getProducts } from "../../FakeAPI";

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const productName = searchParams.get("name") ?? "";
  console.log(productName);

  const handleChange = (e) => {
    const name = e.target.value;
    const nextParams = e.target.value !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  return (
    <>
      <input value={productName} type="text" onChange={handleChange}></input>
      <ProductsList products={visibleProducts} />
    </>
  );
};

export default Products;
