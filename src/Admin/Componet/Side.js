
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Admin_Home from '../Page/Admin_Home';
import logo from '../asset/Logo.jpg';
import Menuheader from './Menuheader';
import { Avatar } from '@mui/material';
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import Parents from '@mui/icons-material/GroupOutlined';
import SettingProfile from '@mui/icons-material/ManageAccountsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import studentP from '@mui/icons-material/Person2Rounded';
import Logout from '@mui/icons-material/SettingsPowerSharp';
import Message from '@mui/icons-material/EmailRounded';
import Payment from '@mui/icons-material/AccountBalanceWalletRounded';
import Announcement from '@mui/icons-material/CampaignRounded';

import "./Componet Css/Admin_side.css"

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: '#ffffff',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
  marginLeft: open ? `${drawerWidth}px` : 0,
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ backgroundColor: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{ mr: 2 }, open && { display: 'none' }]}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-between' }}>
            {/* Search field */}
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{
                borderRadius: '5px',
                maxWidth: '750px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '5px',
                },
                justifyContent: 'flex-end'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <div sx={{ textAlign: 'right' }}>
              <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <Avatar
                  src="/broken-image.jpg"
                  sx={{
                    width: 30,
                    height: 30,
                    marginX: 1,
                    marginTop: 1,
                    marginBottom: 1,
                  }}
                />
              </div>
              <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <Menuheader />
              </div>
            </div>


          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: 'none',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '90px', height: '60px', margin: '10px' }}
            />
            <Box>
              <Typography variant="h6" component="div" className='Logoname'>
                Ha Geez School App
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div >
          <nav>
            <nav className="menu" >
              <ul>
                <li>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '15px', marginLeft: "25px", marginTop:'5px'}}>
                  
                    <Link className="list-title" to="/Admin_main/Admin_Home"><HomeIcon /> Home</Link>
                  </div>
                </li>

                <li>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '15px', marginLeft: "25px" , marginTop:'5px'}}>
                  
                    <Link className="list-title" to="/Admin_main/Teacher"><SchoolIcon />  Teacher</Link>
                  </div>
                </li>

                <li>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '15px', marginLeft: "25px", marginTop:'5px'}}>
                   
                    <Link className="list-title" to="/Admin_main/Student"> <Parents /> Student</Link>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '15px', marginLeft: "25px", marginTop:'5px'}}>
                   
                    <Link className="list-title" to="/Admin_main/Parents"> <Parents />  Parents</Link>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '15px', marginLeft: "25px", marginTop:'5px'}}>
                   
                    <Link className="list-title" to="/Admin_main/Message"> <Message /> Message</Link>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '15px', marginLeft: "25px", marginTop:'5px'}}>
                    
                    <Link className="list-title" to="/Admin_main/Payment"><Payment /> Payment</Link>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '15px', marginLeft: "25px", marginTop:'5px'}}>
                    
                    <Link className="list-title" to="/Admin_main/Announcement"><Announcement /> Announcement</Link>
                  </div>
                </li>


              </ul>
            </nav>

          </nav>

        </div>
        <Divider />
        <List>
          <div >
            <nav>
              <nav className="menu" >
                <ul className="last">
                  <li>
                   
                    <Link className="list-title" to="/Admin_main/Profile"> <SettingProfile /> Profile</Link>
                  </li>

                  <li>
                  
                    <Link className="list-title" to="/Admin_main/Setting"><SettingsIcon /> Setting</Link>
                  </li>

                  <li>
                   
                    <Link className="list-title" to="/Admin_main/Logout"><Logout />  Logout</Link>
                  </li>

                </ul>
              </nav>

            </nav>

          </div>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      
      </Main>
    </Box>
  );
}
 