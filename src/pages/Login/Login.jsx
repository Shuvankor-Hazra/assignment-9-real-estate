import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-fit bg-base-200 md:p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold">Login here!</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing fuga, iure praesentium repellat tenetur a itaque laudantium rerum molestias voluptatibus, harum blanditiis quisquam!</p>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control my-6">
                            <button className="btn bg-[#fda40b] text-white">Login</button>
                        </div>
                        <div className="text-center">
                            <p>New User ? Please... <Link to="/register" className="text-[#fda40b] underline font-bold">Registration</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;