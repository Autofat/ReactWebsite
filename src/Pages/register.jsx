import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <div className="justify-center items-center min-h-screen flex">
      <AuthLayout
        tittle="Sign Up"
        description="Welcome! Please signup to your account."
      >
        <FormRegister />
        <p className="text-center font-medium text-gray-600 mt-4">
          Already have an account?
          <Link to="/Login" className="text-blue-600 ml-1">
            Login
          </Link>
        </p>
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
