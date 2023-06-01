import ModifyForm from "../Components/ModifyForm";
import NavbarWithContactsButton from "../Components/NavbarWithContactsButton"

const ModifyContact = ({c}) => {
    return (
        <div className="modifyContact">
            <NavbarWithContactsButton />
            <center><h1>Modify Single Contact Route</h1></center>
            <ModifyForm c = {c} />
        </div>
    );
}
 
export default ModifyContact;