import Estate from "../Estate/Estate";


const Estates = () => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mt-10">Our Estates</h2>
            <p className="md:w-1/2 mx-auto py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit asperiores ratione, consequatur molestias pariatur.</p>
            <div className="lg:flex gap-6">
            <Estate></Estate>
            <Estate></Estate>
            <Estate></Estate>
            </div>
        </div>
    );
};

export default Estates;