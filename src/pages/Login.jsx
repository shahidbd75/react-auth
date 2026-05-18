import { Link, useLocation, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";

const Login = () => {
  const { signInUser, signInwithGoogle } = use(AuthContext);
  const location = useLocation();

  const navigatePath = location?.state || "/";
  const navigate = useNavigate();

  const handleUserLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((response) => {
        event.target.reset();
        console.log(response.user);
        navigate(navigatePath);
      })
      .catch((error) => {
        console.log(error.Message);
      });
  };

  const handleGoogleSignIn = () => {
    signInwithGoogle().then(()=> {
      navigate(navigatePath);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="flex justify-center mt-12">
      <form onSubmit={handleUserLogin}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-2xl">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4" type="submit">
            Login
          </button>
          <button className="btn bg-white text-black border-[#e5e5e5] mt-2" onClick={handleGoogleSignIn}>
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p>
            Are you new user? Click{" "}
            <Link
              to="/register"
              className="link text-blue-600 hover:text-blue-800"
            >
              here
            </Link>{" "}
            to register
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
