import NavbarWithContactsButton from "../Components/NavbarWithContactsButton";
import Form from "../Components/Form"

const CreateContact = () => {
    return (
        <div className="createContact">
            <NavbarWithContactsButton />
            <center><h1 style={{ color: "#D5DEF5"}}>Create Contact Route</h1></center>
            {/* Form to create a new contact and save it to the database */}
            <Form />
        </div>
    );
}

export default CreateContact;