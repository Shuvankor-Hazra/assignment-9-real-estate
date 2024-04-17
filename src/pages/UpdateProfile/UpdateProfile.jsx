import useAuth from "../../hooks/useAuth";


const UpdateProfile = () => {

    const { user, updateUserProfile } = useAuth();

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        updateUserProfile(name, image);
    }

    return (
        <div className="card">
            <figure>
                <img className="max-h-[200px]" src={user?.photoURL} alt="Shoes" />
            </figure>
            <h2 className="text-center my-5">{user?.email}</h2>
            <div className="text-center ">
                <form onSubmit={handleUpdate}>
                    <input className="border mb-5 p-2 w-[300px] lg:w-[500px] rounded-lg" name='name' type="text" defaultValue={user?.displayName} /> <br />
                    <input className="border mb-5 p-2 w-[300px] lg:w-[500px] rounded-lg" name='image' type="text" defaultValue={user?.photoURL} /> <br />
                    <button type="submit" className="btn bg-[#fda40b] text-white mb-5">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;