import { FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const GithubLogin = () => {

    const {githubLogin} =useAuth() ;

    return (
        <div className="form-control my-6 px-8">
            <button onClick={githubLogin} className="btn bg-[#fda40b] text-white"><FaGithub className="text-black text-xl" />Open with GitHub</button>
        </div>
    );
};

export default GithubLogin;