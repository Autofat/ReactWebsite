import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <div className="justify-center items-center min-h-screen flex">
      <AuthLayout
        tittle="Sign In"
        description="Welcome back! Please login to your account."
        type="login"
      >
        <FormLogin />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
