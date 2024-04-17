
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estate = ({ estate }) => {

    const { image, estate_title, id, price, area, status } = estate;
    const [f1, f2, f3] = estate.facilities;

    return (
        <>
            <div
                data-aos="zoom-in-down"
                data-aos-easing="ease-in-sine"
                data-aos-offset="300"
                data-aos-duration="1000"
                className="border rounded-xl">
                <div className="px-6 pt-6">
                    <img src={image} className="rounded-xl " />
                    <span className='absolute -translate-y-[110%] -translate-x-[50%] text-xl font-bold bg-[#fda40b] text-white px-6 py-1 rounded'>{status}</span>
                </div>
                <div className="p-6 text-left">
                    <div className='flex justify-between text-xl font-bold '>
                        <h2 className="">{area}</h2>
                        <h2 className="">{price}</h2>
                    </div>
                    <h2 className="py-3 font-bold ">{estate_title}</h2>
                    <h2 className="font-bold">Facilities: </h2>
                    <div className=' ms-6'>
                        <li className=''>{f1}</li>
                        <li className=''>{f2}</li>
                        <li className=''>{f3}</li>
                    </div>
                    <div className="text-center">
                        <Link to={`/propertyDetails/${id}`} className="btn btn-outline text-[#fda40b] bg-white px-10 mt-6">View Property</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

Estate.propTypes = {
    estate: PropTypes.object
};

export default Estate;