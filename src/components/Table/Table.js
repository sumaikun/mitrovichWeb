import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor, handleEdit, handleDelete } = props;
  console.log("tableData",tableData)
 
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}

              { props.crud &&
                <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={"options"}
                  >
                    {"Opciones"}
                </TableCell>
              }

            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData && tableData.map((prop, key) => {
            return (

              <TableRow key={key} className={classes.tableBodyRow}>
                
                { Array.isArray(prop) && prop.map((prop, key) => {
                    return (
                      <TableCell className={classes.tableCell} key={key}>
                        {prop}
                      </TableCell>
                    );
                  })
                }

                {  typeof prop === "object" && props.tableKeys && props.tableKeys.map( (tKey, key) =>  
                  <TableCell className={classes.tableCell} key={ `${tKey}-${key}` }>
                    {prop[tKey]}
                  </TableCell>
                  )  
                }

                {
                  props.crud && <CrudOptions value={prop} handleEdit={handleEdit} handleDelete={handleDelete}  />
                }
                

              </TableRow>
            );
          })}          
        </TableBody>
      </Table>
    </div>
  );
}

const CrudOptions = (props) => {

  const { handleEdit, handleDelete, value } = props

  const classes = useStyles();
  return (

      <TableCell
          className={classes.tableCell}
        >          
          <Tooltip
            id="tooltip-top"
            title="Editar"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton
              aria-label="Edit"
              className={classes.tableActionButton}
              onClick={()=>handleEdit(value)}
            >
              <Edit
                className={
                  classes.tableActionButtonIcon + " " + classes.edit
                }
              />
            </IconButton>
          </Tooltip>
          <Tooltip
            id="tooltip-top-start"
            title="Remover"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton
              aria-label="Close"
              className={classes.tableActionButton}
              onClick={()=>handleDelete(value)}
            >
              <Close
                className={
                  classes.tableActionButtonIcon + " " + classes.close
                }
              />
            </IconButton>
          </Tooltip>
      </TableCell>
  )
}


CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  //tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
