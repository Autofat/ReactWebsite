import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-500 hover:bg-blue-700 w-full">Sign in</Button>
    </form>
  );
};

export default FormLogin;
