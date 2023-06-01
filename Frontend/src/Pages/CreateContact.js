import NavbarNoButton from "../Components/NavbarWithContactsButton";
import Form from "../Components/Form"

const CreateContact = () => {
    return (
        <div className="createContact">
            <NavbarNoButton />
            <center><h1>Create Contact Route</h1></center>
            <Form />
        </div>
    );
}

export default CreateContact;