import Button from "../Elements/Button";
import PropTypes from "prop-types";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
      {children}
    </div>
  );
};

CardProduct.propTypes = {
  children: PropTypes.array,
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

Header.propTypes = {
  image: PropTypes.string,
};

const Body = (props) => {
  const { tittle = "Tittle", children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {tittle}
        </h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};

Body.propTypes = {
  tittle: PropTypes.string,
  children: PropTypes.string,
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

Footer.propTypes = {
  price: PropTypes.string,
  buttonText: PropTypes.string,
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
