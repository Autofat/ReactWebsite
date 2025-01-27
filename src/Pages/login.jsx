import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <div className="justify-center items-center min-h-screen flex">
      <AuthLayout
        tittle="Login"
        description="Welcome back! Please login to your account."
      >
        <FormLogin />
        <p className="text-center font-medium text-gray-600 mt-4">
          Don't have an account?
          <Link to="/register" className="text-blue-600 ml-1">
            Sign Up
          </Link>
        </p>
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
