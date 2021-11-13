import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  NavLink
} from 'react-router-dom';
import { useState } from 'react';
import DashboardHome from '../Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from '../Dashboard/MakeAdmin/MakeAdmin';
import AddProducts from '../Dashboard/AddProducts/AddProducts';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import Payment from './Payment/Payment';
import MyOrders from './MyOrders/MyOrders';
import ManageProducts from './MangeProducts/ManageProducts';
import UserRoute from '../Login/UserRoute/UserRoute';
import Reviews from './Reviews/Reviews';
import ManageOrders from './ManageOrders/ManageOrders';
import Home from '../Home/Home';


const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 
  let { path, url } = useRouteMatch();
  const{ admin,user,logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
     
     
    
      {  admin?
      
      <Box>
        
        <Link style={{textDecoration: 'none'}} to={`${url}/home`}>
      <Button color="inherit">Home</Button>
      </Link>
        <Link style={{textDecoration: 'none'}} to={`${url}/makeAdmin`}>
      <Button color="inherit">Make Admin</Button>
      </Link>
      <Link style={{textDecoration: 'none'}} to={`${url}/addProducts`}>
      <Button color="inherit">Add Products</Button>
      </Link>
      <Link style={{textDecoration: 'none'}} to={`${url}/manageProducts`}>
      <Button color="inherit">Manage Products</Button>
      </Link>
      <Link style={{textDecoration: 'none'}} to={`${url}/manageOrders`}>
      <Button color="inherit">Manage Orders</Button>
      </Link>
      </Box>
       : 
       <Box>
       <Link style={{textDecoration: 'none'}} to={`${url}/home`}>
      <Button color="inherit">Home</Button>
      </Link>
      <Link style={{textDecoration: 'none'}} to={`${url}`}>
      <Button color="inherit">Dashboard</Button>
      </Link>
      <br/>
      
      <Link style={{textDecoration: 'none'}} to={`${url}/payment`}>
      <Button color="inherit">Payment</Button>
      </Link>
      <br/>
      <Link style={{textDecoration: 'none'}} to={`${url}/myOrders`}>
      <Button color="inherit">My Orders</Button>
      </Link>
      <br/>
      <Link style={{textDecoration: 'none'}} to={`${url}/reviews`}>
      <Button color="inherit">Reviews</Button>
      </Link>

      </Box>
         
      }
     
     
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Link style={{textDecoration: 'none'}} to="/home">
            <Button color="inherit">Home</Button>
            </Link>
           <Link style={{textDecoration: 'none'}} to="/products">
            <Button color="inherit">Products</Button>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/booking">
            <Button color="inherit">Booking</Button>
            </Link>
            { 
               user?.email ?
            <Box>

             <NavLink style={{textDecoration: 'none'}} to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </NavLink>
              <Button onClick={logout} color="inherit">Logout</Button>
                
                </Box> 
            
          : 
              <NavLink style={{textDecoration: 'none'}} to="/login">
            <Button color="inherit">Login</Button>
          </NavLink>
          }
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route exact  path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <Route   path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
        </Route>
        <Route exact  path={`${path}/reviews`}>
            <Reviews></Reviews>
        </Route>
        
        <AdminRoute path={`${path}/makeAdmin`}>
           <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addProducts`}>
           <AddProducts></AddProducts>
        </AdminRoute>
        <AdminRoute  path={`${path}/manageProducts`}>
           <ManageProducts></ManageProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/manageOrders`}>
           <ManageOrders></ManageOrders>
        </AdminRoute>
      </Switch>
        
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
