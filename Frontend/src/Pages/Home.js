import Contacts from "../Components/Contacts";
import Navbar from "../Components/NavbarWithCreateContactButton";

// The Home Component
const Home = ({ contactData }) => {
    return (
        <div className="Home">
            <Navbar />
            <Contacts contactData = {contactData} />
        </div>
    );
}
 
export default Home;