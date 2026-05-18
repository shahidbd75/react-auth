import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";


const Registration = () => {
  const {createUser} = use( AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const displayName = e.target.displayName.value;
        console.log(email, password, displayName);

        createUser(email, password).then((response) => {
            console.log(response.user);
        }).catch(e => console.log(e.Message));
    }

  return (
    <div className="flex justify-center mt-12 flex-col items-center">
      <form className="bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl">Create New User</h2>

        <label className="label">Full Name</label>
        <input type="text" name="displayName" className="input mb-2" placeholder="Full Name" />

        <label className="label">Email</label>
        <input type="email" name="email" className="input mb-2" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input mb-2" name="password" placeholder="Password" />

        <button className="btn btn-primary mt-4" type="submit">Register</button>
      </form>
      <p>Already have an account? click <Link className="link text-blue-500 hover:text-blue-800" to='/login' >here</Link></p>
    </div>
  );
};

export default Registration;
