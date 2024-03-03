import Navbar from "../../Components/Navbar/Navbar";
import TakeIdea from "../../Components/TakeIdea/TakeIdea";
import TrustedUsers from "../../Components/TrustedUsers/TrustedUsers";
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
        </div>
    );
};

export default Home;