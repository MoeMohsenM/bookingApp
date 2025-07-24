import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/User/UserSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.email === user.email && data.password) {
      dispatch(login());
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>Valid email is required</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && <p>Password is required</p>}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
