
import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conformPassword = e.target.conformPassword.value;
        console.log(name, email, password, conformPassword);



    }

    return (
        <div className="hero min-h-fit bg-base-200 p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Here</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eaque sunt praesentium ab labore adipisci, laudantium rerum molestias voluptatibus, harum blanditiis quisquam!</p>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                name="PhotoUrl"
                                type="text"
                                placeholder="Photo URL"
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
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                        </div>


                        <div className="form-control my-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="text-center">
                            <p>Already have an account? Please...<Link to="/login" className="text-primary underline font-bold">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;