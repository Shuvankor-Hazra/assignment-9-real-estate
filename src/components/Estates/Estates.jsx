import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";


const Estates = () => {

    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('/realEstates.json')
            .then((res) => res.json())
            .then((data) => setEstates(data))
    }, [])

    return (
        <div className="text-center mt-10">
            <span className="text-xl md:text-2xl font-bold text-[#fda40b]">Our Estates</span>
            <h2 className="text-2xl md:text-4xl font-bold py-6 uppercase">Visit our latest Estates</h2>
            <p className="md:w-1/2 mx-auto pb-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem velit asperiores ratione, consequatur molestias pariatur.</p>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                    estates.map((estate) => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;