import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/User/UserSlice";
import { useNavigate } from "react-router-dom";
import Styles from "../styles/LoginPage.module.scss";

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
    <div className={Styles.container}>
      <figure className={Styles.image__wrapper}>
        <img src="public/images/Brand Logo.png" alt="" />
      </figure>

      <h3>LOGIN</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        {errors.email && <p>Valid email is required</p>}
        <label htmlFor="password">Paswword</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Password is required</p>}

        <button type="submit">Login</button>
      </form>
      <p className={Styles.register__text}>
        Don't have an account? <a>Register</a></p>
    </div>
  );
}

export default LoginPage;
