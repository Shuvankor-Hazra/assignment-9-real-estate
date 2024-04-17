import { Helmet } from "react-helmet-async";
import Estates from "../../components/Estates/Estates";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider";


const Home = () => {

    return (<div className="py-6">
        <Helmet>
            <title>Real state | Home</title>
        </Helmet>
        <div className="pb-10">
            <SwiperSlider></SwiperSlider>
        </div>
        <div className="py-5 md:py-10">
            <Estates></Estates>
        </div>
    </div>
    );
};

export default Home;