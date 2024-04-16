
// import PropTypes from 'prop-types';

import { useLoaderData, useParams } from "react-router-dom";


const PropertyDetails = () => {

    const { id } = useParams();

    const allProperty = useLoaderData();

    const targetProperty = allProperty.find((property) => parseInt(property.id) === parseInt(id))

    const [f1,f2,f3] = targetProperty.facilities;

    return (
        <div className="mb-16">
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl gap-3">
                    <div className="lg:w-1/2 p-3 lg:p-0 rounded-lg">
                        <img src={targetProperty.image} className="rounded-lg" alt="Property" />
                    </div>
                    <div className="card-body p-3 lg:w-1/2">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-3">Property Details</h2>
                        <p className="text-md lg:text-lg">
                            <span className="text-lg lg:text-xl font-semibold mr-2">Name:</span>
                            {targetProperty.estate_title}
                        </p>
                        <p className="text-md lg:text-lg">
                            <span className="text-lg lg:text-xl font-semibold mr-2">Segment:</span>
                            {targetProperty.segment_name}
                        </p>
                        <p className="text-md lg:text-lg">
                            <span className="text-lg lg:text-xl font-semibold mr-2">Price:</span>
                            {targetProperty.price}
                        </p>
                        <p className="text-md lg:text-lg">
                            <span className="text-lg lg:text-xl font-semibold mr-2">Area:</span>
                            {targetProperty.area}
                        </p>
                        <p className="text-md lg:text-lg">
                            <span className="text-lg lg:text-xl font-semibold mr-2">Location:</span>
                            {targetProperty.location}
                        </p>
                        <p className="text-md lg:text-lg">
                            <span className="text-lg lg:text-xl font-semibold mr-2">Description:</span>
                            {targetProperty.description}
                        </p>
                        <h2 className="text-lg lg:text-xl font-semibold mr-2">Facilities: </h2>
                        <div className='md:flex space-y-3 md:space-y-0 gap-3 font-semibold'>
                            <p className='px-6 py-3 bg-[#fda40b] text-white rounded-full'>{f1}</p>
                            <p className='px-6 py-3 bg-[#fda40b] text-white rounded-full'>{f2}</p>
                            <p className='px-6 py-3 bg-[#fda40b] text-white rounded-full'>{f3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


PropertyDetails.propTypes = {

};


export default PropertyDetails;
