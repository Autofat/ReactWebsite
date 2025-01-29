import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    image: "/public/images/shoes1.jpg",
    tittle: "On Cloud 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorum sit laborum perspiciatis obcaecati cumque aut ratione! Perspiciatis accusantium nobis recusandae. Enim at illo reiciendis. Delectus reprehenderit odit incidunt?",
    price: 1500,
  },
  {
    id: 2,
    image: "/public/images/shoes1.jpg",
    tittle: "On Cloud 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorum sit laborum perspiciatis obcaecati cumque aut ratione! Perspiciatis accusantium nobis recusandae.",
    price: 2000,
  },
  {
    id: 3,
    image: "/public/images/shoes1.jpg",
    tittle: "On Cloud 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorum sit laborum perspiciatis obcaecati cumque aut ratione! Perspiciatis accusantium nobis recusandae. Enim at illo reiciendis. Delectus reprehenderit odit incidunt?",
    price: 2500,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handlerAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
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
      <div className="justify-center flex py-5 px-2 gap-5">
        <div className="w-3/4 flex flex-wrap gap-5">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body tittle={product.tittle}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                buttonText="Add to cart"
                handlerAddToCart={handlerAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <table className="text-right table-auto border-separate border-spacing-x-5 mb-2">
            <thead className="font-semibold text-left">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.tittle}</td>
                    <td>
                      $
                      {product.price.toLocaleString("en-US", {
                        styles: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      $
                      {(product.price * item.qty).toLocaleString("en-US", {
                        styles: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
