import Button from "../Elements/Button";
import PropTypes from "prop-types";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { tittle = "Tittle", children } = props;
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {tittle}
        </h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price = "$100", buttonText = "Add to cart" } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button classname={"bg-blue-500 hover:bg-blue-700 w-1/2 text-xl"}>
        <h1 className="text-xl">{buttonText}</h1>
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

CardProduct.propTypes = {
  children: PropTypes.node,
};

Header.propTypes = {
  image: PropTypes.string,
};

Body.propTypes = {
  tittle: PropTypes.string,
  children: PropTypes.node,
};

Footer.propTypes = {
  price: PropTypes.string,
  buttonText: PropTypes.string,
};
