import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    image: "/public/images/shoes1.jpg",
    tittle: "On Cloud 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorum sit laborum perspiciatis obcaecati cumque aut ratione! Perspiciatis accusantium nobis recusandae. Enim at illo reiciendis. Delectus reprehenderit odit incidunt?",
    price: "$1500",
  },
  {
    id: 2,
    image: "/public/images/shoes1.jpg",
    tittle: "On Cloud 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorum sit laborum perspiciatis obcaecati cumque aut ratione! Perspiciatis accusantium nobis recusandae.",
    price: "$2000",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 font-semibold">
        <p>Welcome, {email}</p>
        <Button
          classname={"bg-red-500 hover:bg-red-700 ml-5"}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <div className="justify-center flex py-5 gap-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body tittle={product.tittle}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer
              price={product.price}
              buttonText="Add to cart"
            />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
