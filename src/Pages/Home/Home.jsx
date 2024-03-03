import Navbar from "../../Components/Navbar/Navbar";
import TakeIdea from "../../Components/TakeIdea/TakeIdea";
import TrustedUsers from "../../Components/TrustedUsers/TrustedUsers";
import YourIdea from "../../Components/YourIdea/YourIdea";


const Home = () => {
    return (
        <div>
            <Navbar />
            <TakeIdea />
            <TrustedUsers />
            <YourIdea />
        </div>
    );
};

export default Home;