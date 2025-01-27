import PropTypes from "prop-types";
import classNames from "classnames";
const Button = (props) => {
  const { children = "Button", classname = "bg-black" } = props;

  return (
    <button
      className={classNames(
        `${classname} text-white py-1 px-4 font-semibold rounded-xl cursor-pointer ease-in-out transition duration-200`
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  classname: PropTypes.string,
};

export default Button;
