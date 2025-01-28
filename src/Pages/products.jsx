import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="justify-center flex py-5">
      <CardProduct>
        <CardProduct.Header image="/public/images/shoes1.jpg" />
        <CardProduct.Body tittle="On Cloud">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          incidunt dolorum sit laborum perspiciatis obcaecati cumque aut
          ratione! Perspiciatis accusantium nobis recusandae. Enim at illo
          reiciendis. Delectus reprehenderit odit incidunt?
        </CardProduct.Body>
        <CardProduct.Footer price="$2000" buttonText="Add to cart" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
