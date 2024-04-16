import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";


const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photoUrl');
        const password = form.get('password');
        console.log(name, email, photoUrl, password);

        if (password.length < 6) {
            toast.error('Password should be al least 6 character or longer')
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error('Password should be al least 1 Uppercase character')
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error('Password should be al least 1 Lowercase character')
            return;
        }

        createUser(email, password)
            .then((result) => {
                console.log(result);
                toast.success('Registration completed successfully!')
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="hero min-h-fit bg-base-200 md:p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold">Register Here</h1>
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
                                name="photoUrl"
                                type="text"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                                <span className="text-xl relative top-10 right-3 cursor-pointer"  onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoIosEye /> : <IoIosEyeOff />}</span>
                            </label>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control my-6">
                            <button className="btn bg-[#fda40b] text-white">Register</button>
                        </div>
                        <div className="text-center">
                            <p>Already have an account ? Please... <Link to="/login" className="text-[#fda40b] underline font-bold">Login</Link></p>
                            <Toaster
                                position="top-center"
                                reverseOrder={true}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;