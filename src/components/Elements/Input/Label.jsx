import PropTypes from "prop-types";

const Label = (props) => {
  const { htmlfor = "input", classname, children = "Label" } = props;

  return (
    <label
      htmlFor={htmlfor}
      className={`${classname} block text-slate-700 text-sm font-bold mb-2`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlfor: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.string,
};

export default Label;
