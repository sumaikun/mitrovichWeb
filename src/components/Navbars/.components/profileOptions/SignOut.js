import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Poppers from "@material-ui/core/Popper";
import Swal from 'sweetalert2'
// @material-ui/icons

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
const useStyles = makeStyles(styles);

//actions
import { connect } from "react-redux";
import { logoutUser } from "redux/actions/auth";

function SignOut(props) {

  const classes = useStyles();
 
  return (
    <Poppers
        open={Boolean(props.openProfile)}
        anchorEl={props.openProfile}
        transition
        disablePortal
        className={
        classNames({ [classes.popperClose]: !props.openProfile }) +
        " " +
        classes.popperNav
        }
    >
        {({ TransitionProps, placement }) => (
        <Grow
            {...TransitionProps}
            id="profile-menu-list-grow"
            style={{
            transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
        >
            <Paper>
            <ClickAwayListener onClickAway={props.handleCloseProfile}>
                <MenuList role="menu">

                <MenuItem
                    onClick={()=>{
                        props.handleCloseProfile()
                        Swal.fire({
                            title: '¿Estas seguro?',
                            text: "Vas a salir del sistema!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#ff9803',
                            cancelButtonColor: '#d33',
                            confirmButtonText: '¡Si, adelante!',
                            cancelButtonText: 'No'
                        }).then((result) => {
                            if (result.value) {
                              props.logoutUser();
                              window.setTimeout(()=>{
                                window.location.reload();
                              },1000)                              
                            }
                        })
                    }}
                    className={classes.dropdownItem}
                >
                    Cerrar sesión
                </MenuItem>

                </MenuList>
            </ClickAwayListener>
            </Paper>
        </Grow>
        )}
    </Poppers>
  );
}


export default connect(null, { logoutUser })(SignOut);



      