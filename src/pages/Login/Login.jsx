
import { Link } from "react-router-dom";


const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

    }

    return (
        <div className="hero min-h-fit bg-base-200 p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="text-center">
                            <p>New User? Please...<Link to="/register" className="text-primary underline font-bold">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;