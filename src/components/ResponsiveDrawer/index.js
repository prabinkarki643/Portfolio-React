import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {ListGroup} from 'react-bootstrap';
import { Avatar, Fab } from '@material-ui/core';
import {Lightbox} from 'primereact/lightbox';
import './styles.css'
import Colors from '../../assets/themes/Colors';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width:'100%',
  },
  instagramRoot: {
    backgroundColor: Colors.baseColor
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor:Colors.baseColor
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    '&:focus':{
     outline:'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:Colors.creamColor
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:Colors.creamColor
  },
}));

function ResponsiveDrawer(props) {
  const { container,children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor:Colors.creamColor}}>
        <center>
            <Lightbox  target={<Avatar alt="Prabin Profile Image" src={require('../../assets/images/prabin_profile.jpg')} style={{height:200,width:200,margin:10}}/>}>
                <img src={require('../../assets/images/prabin_profile.jpg')} style={{width:'100%',height:'100%'}}/>
            </Lightbox>
        </center>
        <ListGroup 
            defaultActiveKey="#about" onClick={()=>{
            if(mobileOpen) setMobileOpen(false)
        }}>
            <ListGroup.Item action href="#about" style={{backgroundColor:Colors.creamColor}}>
                ABOUT
            </ListGroup.Item>
            <ListGroup.Item action href="#career" style={{backgroundColor:Colors.creamColor}}>
                CAREER
            </ListGroup.Item>
            <ListGroup.Item action href="#education" style={{backgroundColor:Colors.creamColor}}>
                EDUCATION
            </ListGroup.Item>
            <ListGroup.Item action href="#skills" style={{backgroundColor:Colors.creamColor}}>
                SKILLS
            </ListGroup.Item>
            <ListGroup.Item action href="#be_projects" style={{backgroundColor:Colors.creamColor}}>
                B.E PROJECTS
            </ListGroup.Item>
            <ListGroup.Item action href="#products" style={{backgroundColor:Colors.creamColor}}>
                PRODUCTS
            </ListGroup.Item>
            <center>
                <a
                  style={{
                    textDecoration: "none"
                  }}
                  href="mailto:pravinkarki143.pk@gmail.com?&subject=Hiring You&body=Hello, Prabin"
                >
                  <Fab
                    variant="extended"
                    color="primary"
                    style={{ fontWeight: "bold", width: "80%",marginTop:20 }}
                    classes={{ root: classes.instagramRoot }}
                  >
                    Hire Me
                  </Fab>
                </a>
              </center>
        </ListGroup>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={`${classes.menuButton}`}
          >
            <i className="fa fa-bars fa-2x"/>
          </div>
          <Typography variant="h6" noWrap onClick={()=>props.history.push('/')}>
            PRABINFOLIO
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onOpen={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <SwipeableDrawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
      <div className={classes.toolbar} />
          {children}
      </main>
    </div>
  );
}


export default ResponsiveDrawer;