import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// local componentes
import ProfileOptions from "./.components/profileOptions"

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
 
  return (
    <div>
      <div className={classes.manager}>
          <ProfileOptions/>
      </div>
    </div>
  );
}
