
// import PropTypes from 'prop-types';

import { useLoaderData, useParams } from "react-router-dom";


const PropertyDetails = () => {

    const {id} = useParams();

    const allProperty = useLoaderData();

    const targetProperty = allProperty.find((property)=> parseInt(property.id )===parseInt(id))

    return (
        <div  className="h-dvh border-2 mb-16">
            <div>
                <h2 className="text-3xl text-center py-6">Property Details</h2>
                {
                    targetProperty.price
                }
            </div>
        </div>
    );
};


PropertyDetails.propTypes = {

};


export default PropertyDetails;
