import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from 'react-router-dom';

// Navbar component with a contacts button on it to take the user back to the homepage
export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: "#ED6363", borderRadius: "3px" }} position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#001C30" }}>
                        ContactVault
                    </Typography>
                    <Link style={{ color: "#001C30" }} to='http://localhost:3000/'><ContactsIcon fontSize='large'/></Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
