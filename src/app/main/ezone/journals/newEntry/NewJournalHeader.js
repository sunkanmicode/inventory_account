import React from 'react'
import { makeStyles, Icon } from "@material-ui/core";
import { motion } from "framer-motion";

import { TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function NewJournalHeader() {
     const classes = useStyles();

  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex flex-col items-start max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            // component={Link}
            role="button"
            // to="/apps/e-commerce/products"
            color="inherit"
          >
            <Icon className="text-20">
              {/* {theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'} */}
              arrow_back
            </Icon>
            <span className="hidden sm:flex mx-4 font-medium">Journals</span>
          </Typography>
        </motion.div>
      </div>
    </div>

    //   <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
    //     <motion.div
    //       initial={{ x: -20 }}
    //       animate={{ x: 0, transition: { delay: 0.3 } }}
    //     >
    //       <Typography className="text-16 sm:text-20 truncate font-semibold">
    //         {name || "New Product"}
    //       </Typography>
    //       <Typography variant="caption" className="font-medium">
    //         Product Detail
    //       </Typography>
    //     </motion.div>
    //   </div>

    //   <div>
    //     <Typography variant="h6" component="h2">
    //       New Journal
    //     </Typography>

    //     <div>
    //       <TextField
    //         label="Transaction Date"
    //         id="outlined-margin-dense"
    //         placeholder="Enter Date"
    //         className={classes.textField}
    //         margin="dense"
    //         variant="outlined"
    //       />

    //       <TextField
    //         label="Transaction Date"
    //         id="outlined-margin-dense"
    //         placeholder="Enter Date"
    //         className={classes.textField}
    //         margin="dense"
    //         variant="outlined"
    //       />
    //     </div>
    //   </div>
    // </>
  );
}

export default NewJournalHeader