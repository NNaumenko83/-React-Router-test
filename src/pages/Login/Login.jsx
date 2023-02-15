import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("This is Submit");
    navigate("/profile", { replace: true });
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
