import PropTypes from "prop-types";

const Input = (props) => {
  const {
    type = "text",
    classname,
    placeholder = "test@email.com",
    name,
  } = props;

  return (
    <input
      type={type}
      className={`${classname} text-sm border border-slate-300 py-2 px-3 rounded-lg w-full placeholder:opacity-45`}
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  classname: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
export default Input;
