import Card from '@mui/material/Card';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ContactCard = ({contact}) => {
    let {_id, fullName, homeTown, phoneNumber, emailAddress} = contact;
    let link = `http://localhost:3000/view-contact/${_id}`;
    return (
        <Link to={link}>
        <Card>
        <ButtonBase style={{ width: '100%', padding: '0', margin: '0' }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                    {fullName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                     {homeTown}
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="body2">
                     {phoneNumber}
                </Typography>
                <Typography sx={{ fontSize: 18 }} variant="body2">
                    <br />
                     {emailAddress}
                </Typography>
            </CardContent>
        </ButtonBase>
    </Card>
    </Link>
    );
}

export default ContactCard;