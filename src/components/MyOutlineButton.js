import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {makeStyles} from '@material-ui/styles';
import Colors from '../assets/themes/Colors';
import { css } from 'glamor';

const MyOutlineButton = ({children,locked,variant,...other}) => {
  const useStyles = makeStyles({
    root: {
      color:Colors.baseColor,
      borderColor:Colors.baseColor,
      background: "transparent",
      outline:0,
      '&:hover': {
        background:locked?"transparent":Colors.baseColor,
        color:locked?Colors.baseColor:'white',
        borderWidth:0
      },
      '&:disabled':{
        background: Colors.baseColor,
        color:'white',
        borderWidth:0
      }
    }
  })

  const styles = {
    root:css({
      color:Colors.baseColor,
      borderColor:Colors.baseColor,
      background: "transparent",
      outline:0,
      ':hover': {
        background:locked?"transparent":Colors.baseColor,
        color:locked?Colors.baseColor:'white',
        borderWidth:0
      },
      ':disabled':{
        background: Colors.baseColor,
        color:'white',
        borderWidth:0
      }
    })
  }
  const classes = useStyles();
  if(variant=="outline-custom"){
    return(
      <Button variant="outline-danger" className={styles.root} {...other} >
              <b style={{fontFamily:'Anejo Regular'}}>{children}</b>
      </Button>
      );
  }
    return<Button {...other}>{children} </Button>;
}

export default MyOutlineButton;

