import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        inputType="text"
        inputName="fullname"
        placeholder="John Kurniawan"
      />
      <InputForm
        label="Email"
        inputType="email"
        inputName="email"
        placeholder="test@email.com"
      />
      <InputForm
        label="Password"
        inputType="password"
        inputName="password"
        placeholder="••••••••"
      />
      <InputForm
        label="Password Confirmation"
        inputType="password"
        inputName="confirmPassword"
        placeholder="••••••••"
      />
      <Button classname="bg-blue-500 hover:bg-blue-700 w-full">Sign Up</Button>
    </form>
  );
};

export default FormRegister;
