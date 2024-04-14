import Estates from "../../components/Estates/Estates";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider";


const Home = () => {
    return (<div className="py-6">
        <div className="pb-10">
            <SwiperSlider></SwiperSlider>
        </div>
        <div className="md:py-10">
            <Estates></Estates>
        </div>
    </div>
    );
};

export default Home;