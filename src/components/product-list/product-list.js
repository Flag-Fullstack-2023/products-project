import ProductCard from "../product-card/product-card";
import { ProductListContainer } from "./product-list.style";

const ProductList = ({ setPopupProperties, data }) => {
  // react aceita um array de componentes
  // products -> .map -> ProductCard

  // Each child in a list should have a unique "key" prop.
  return (
    <>
      <ProductListContainer>
        {data.map((product) => {
          return (
            <ProductCard
              title={product.title}
              description={product.description}
              price={product.price + "€"}
              image={product.thumbnail}
              key={product.title}
              stock={product.stock}
              id={product.id}
              setPopupProperties={setPopupProperties}
            />
          );
        })}
      </ProductListContainer>
    </>
  );
};

export default ProductList;
