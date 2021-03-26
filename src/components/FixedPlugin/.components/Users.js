import React, { Fragment } from "react";
// nodejs library that concatenates classes
import Button from "components/CustomButtons/Button.js";

export default function Users(props) {
    return (
        <Fragment>
          <li className="button-container">
            <div className="button-container">
              <Button
                color="warning"
                target="_blank"
                fullWidth
                onClick={()=> props.redirectView("user") }
              >
                Crear Usuario
              </Button>
            </div>
          </li>
        </Fragment>
    );
}

