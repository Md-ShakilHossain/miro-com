import ConnectTools from "../../Components/ConnectTools/ConnectTools";
import Navbar from "../../Components/Navbar/Navbar";
import TakeIdea from "../../Components/TakeIdea/TakeIdea";
import TrustedUsers from "../../Components/TrustedUsers/TrustedUsers";
import WayYouWork from "../../Components/WayYouWork/WayYouWork";
import WaysWeWork from "../../Components/WaysWeWork/WaysWeWork";
import WorkTogether from "../../Components/WorkTogether/WorkTogether";
import YourIdea from "../../Components/YourIdea/YourIdea";


const Home = () => {
    return (
        <div>
            <Navbar />
            <TakeIdea />
            <TrustedUsers />
            <YourIdea />
            <WorkTogether />
            <ConnectTools />
            <WaysWeWork />
            <WayYouWork />
        </div>
    );
};

export default Home;