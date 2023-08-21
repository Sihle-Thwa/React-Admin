import React, { Component } from 'react';
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutLinedIcon from "@mui/icons-material/HomeOutLined";
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutLined";
import MenuOutLinedIcon from "@mui/icons-material/MenuOutLined";
import ContactsOutLinedIcon from "@mui/icons-material/ContactsOutLined";
import ReceiptOutLinedIcon from "@mui/icons-material/ReceiptOutLined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutLined";
import CalendarTodayOutLinedIcon from "@mui/icons-material/CalendarTodayOutLined";
import HelpOutLinedIcon from "@mui/icons-material/HelpOutLined";
import BarChartOutLinedIcon from "@mui/icons-material/BarChartOutLined";
import PieChartOutLinedIcon from "@mui/icons-material/PieChartOutLined";
import TimelineOutLinedIcon from "@mui/icons-material/TimelineOutLined";
import MapOutLinedIcon from "@mui/icons-material/MapOutLined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{ color: colours.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}

const ProSidebar = () => {
    const theme = useTheme();
    const colours = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: '&{colours.primary[400]} !important'
            },
            "& .pro-icon-wrapper": {
                background: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item::hover": {
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important"
            }

        }}>
            <ProSidebar>
                <Menu iconShape="square">
                    {/* Logo and Menu Icon */}
                    <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutLinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colours.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px">
                                <Typography variant="h3" color={colours.grey[100]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutLinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/*User */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img alt="profile user"
                                    width="100px"
                                    height="100px"
                                    src={'../../assets/user.png'}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>

                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colours.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography variant="h5" color={colours.greenAccent[500]}>
                                    VP ADMIN
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    {/* Menu Items*/}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contact Information"
                            to="/contacts"
                            icon={<ContactsOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices"
                            to="/invoices"
                            icon={<ReceiptOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calender"
                            to="/calender"
                            icon={<CalendarTodayOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ"
                            to="/faq"
                            icon={<HelpOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geography"
                            to="/geography"
                            icon={<MapOutLinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;