
import PropTypes from 'prop-types';

const Estate = ({estate}) => {

    console.log(estate);

    return (
        <div>
            <div className="card bg-base-100 border-2">
                <figure className="px-10 pt-10">
                    <img src={estate.image} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{estate.segment_name}</h2>
                    <h2 className="">{estate.estate_title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-outline text-[#fda40b] bg-white px-10">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Estate.propTypes = {
estate: PropTypes.object
};

export default Estate;