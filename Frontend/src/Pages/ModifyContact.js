import ModifyForm from "../Components/ModifyForm";
import NavbarWithContactsButton from "../Components/NavbarWithContactsButton"

const ModifyContact = ({contactData}) => {
    
    return (
        <div className="modifyContact">
            {/* Navbar with contacts button which will navigate the user back to the homepage if clicked */}
            <NavbarWithContactsButton />
            <center style={{ color: "#D5DEF5" }}><h1>Modify Single Contact Route</h1></center>
            {/* Form which will contain pre-feeded data of the contact the user is working with by using the prop passed by the parent */}
            <ModifyForm contactData = {contactData} />
        </div>
    );
}
 
export default ModifyContact;