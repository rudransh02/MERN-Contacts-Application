import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#ED6363", borderRadius: "3px" }} >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#001C30" }}>
                        ContactVault
                    </Typography>
                    {/* A button on the navbar to create a new contact */}
                    <Link style={{ color: "#001C30"}} to='http://localhost:3000/create-contact'><AddIcon fontSize='large'/></Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
