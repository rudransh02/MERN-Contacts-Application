import Contacts from "../Components/Contacts";
import Navbar from "../Components/NavbarWithCreateContactButton";

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Contacts />
        </div>
    );
}
 
export default Home;