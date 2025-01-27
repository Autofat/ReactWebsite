import PropTypes from "prop-types";
import classNames from "classnames";
const Button = (props) => {
  const { children = "Button", classname = "bg-black" } = props;

  return (
    <button
      className={classNames(
        `${classname} text-white font-bold py-2 px-4 rounded-xl cursor-pointer ease-in-out transition duration-200`
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
