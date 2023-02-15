import { useParams } from "react-router-dom";

import { getProductById } from "../../FakeAPI";

import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const { id, name } = getProductById(productId);
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      <h2>{name}</h2>
      <img src="https://via.placeholder.com/400x400" />{" "}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse
        iusto quibusdam. Atque eius ut laudantium veritatis? Quaerat,
        consequuntur voluptatem!
      </p>
      <Link to={location.state.from}>Back to products</Link>
    </>
  );
};

export default ProductDetails;
