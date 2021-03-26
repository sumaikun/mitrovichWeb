import React, { Fragment } from "react";
// nodejs library that concatenates classes
import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import imagine3 from "assets/img/sidebar-3.jpg";
import imagine4 from "assets/img/sidebar-4.jpg";

import Button from "components/CustomButtons/Button.js";

export default function Example(props) {
    return (
        <Fragment>
          <li className="button-container">
            <div className="button-container">
              <Button
                color="success"
                href="https://www.creative-tim.com/product/material-dashboard-react?ref=mdr-fixed-plugin"
                target="_blank"
                fullWidth
              >
                Download free!
              </Button>
            </div>
          </li>
          <li className="button-container">
            <div className="button-container">
              <Button
                color="warning"
                href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mdr-fixed-plugin"
                target="_blank"
                fullWidth
              >
                Get PRO version
              </Button>
            </div>
          </li>
          <li className="button-container">
            <Button
              color="info"
              fullWidth
              href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              Documentation
            </Button>
          </li>
        </Fragment>
    );
}

