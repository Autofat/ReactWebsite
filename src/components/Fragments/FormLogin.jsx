import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault(); //agar tidak refresh
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
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
      <Button classname="bg-blue-500 hover:bg-blue-700 w-full" type="submit">
        Sign in
      </Button>
    </form>
  );
};

export default FormLogin;
