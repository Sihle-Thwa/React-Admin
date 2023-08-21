import {Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { colourModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutLined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutLined";
import NotificationsOutLinedIcon from "@mui/icons-material/NotificationsOutLined";
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutLined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutLined";
import SearchIcon from "@mui/icons-material/Search";


const Topbar = () => {
    const theme = useTheme ();
    const colours = tokens(theme.palette.mode);
    const colourMode = useContext(colourModeContext);


    return (<Box display ="flex" justifyContent ="space-between" p={2}>
    {/* Search Bar*/}
    <Box display="flex" backgroundColor ={colours.primary[400]}
    borderRadius ="3px">

    <InputBase sx = {{ml: 2, flex: 1}} placeholder="Search"/>
    <IconButton type = "button" sx = {{ p: 1 }}>
        <SearchIcon />
    </IconButton>
    </Box>

    {/* ICONS*/}
    <Box display ="flex">
    <IconButton onClick ={colourMode.toggleColourMode}>
    {theme.palette.mode === 'dark' ? (
        <DarkModeOutLinedIcon />
    ) : (
        <LightModeOutLinedIcon />
    )}
    
    </IconButton>
    <IconButton>
    <NotificationsOutLinedIcon />

    </IconButton>
    <IconButton>
    <SettingsOutLinedIcon />
    </IconButton>
    <IconButton>
    <PersonOutLinedIcon />
    </IconButton>

    </Box>
    </Box>);
};

export default Topbar;