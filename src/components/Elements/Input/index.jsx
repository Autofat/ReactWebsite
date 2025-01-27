import Label from "./Label";
import Input from "./Input";
import PropTypes from "prop-types";

const InputForm = (props) => {
  const {
    label = "Label Tittle",
    inputType = "text",
    classname,
    placeholder,
    inputName,
  } = props;
  return (
    <div className="mb-2">
      <Label htmlfor={inputName}>{label}</Label>
      <Input
        type={inputType}
        placeholder={placeholder}
        classname={classname}
        name={inputName}
      />
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.string,
  classname: PropTypes.string,
  placeholder: PropTypes.string,
  inputName: PropTypes.string,
};

export default InputForm;
