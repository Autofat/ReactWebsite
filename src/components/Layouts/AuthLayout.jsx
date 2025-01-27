import PropTypes from "prop-types";

const AuthLayout = (props) => {
  const { tittle, description, children } = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl text-blue-600 font-bold mb-2">{tittle}</h1>
      <p className="font-medium text-slate-600 mb-8">{description}</p>
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  tittle: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.string,
};

export default AuthLayout;
