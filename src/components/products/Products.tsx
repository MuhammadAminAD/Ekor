import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className={`grid grid-cols-4 gap-[30px] mt-[24px]`}>
      {<ProductItem />}
    </div>
  );
};

export default Products;
