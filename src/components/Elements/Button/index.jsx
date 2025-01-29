import PropTypes from "prop-types";
import classNames from "classnames";
const Button = (props) => {
  const {
    children = "Button",
    classname = "bg-black",
    onClick,
    type = "button",
  } = props;

  return (
    <button
      className={classNames(
        `${classname} text-white py-1 px-4 font-semibold rounded-lg cursor-pointer ease-in-out transition duration-200`
      )}
      type={type}
      onClick={() => {
        onClick(onClick);
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  classname: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
