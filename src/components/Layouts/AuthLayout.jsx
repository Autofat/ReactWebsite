import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { tittle, description, children, type } = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl text-blue-600 font-bold mb-2">{tittle}</h1>
      <p className="font-medium text-slate-600 mb-8">{description}</p>
      {children}
      <p className="text-center font-medium text-gray-600 mt-4">
        {type === "login" ? (
          <>
            {`Don't have an account?`}
            <Link to="/register" className="text-blue-600 ml-1">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            {"Already have an account?"}
            <Link to="/login" className="text-blue-600 ml-1">
              Login
            </Link>
          </>
        )}
      </p>
    </div>
  );
};

AuthLayout.propTypes = {
  tittle: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
  type: PropTypes.string,
};

export default AuthLayout;
