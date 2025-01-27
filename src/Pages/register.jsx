import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <div className="justify-center items-center min-h-screen flex">
      <AuthLayout
        tittle="Sign Up"
        description="Welcome! Please signup to your account."
        type="register"
      >
        <FormRegister />
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
