import { Button, Icon, Input, Paper, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMainTheme } from "app/store/fuse/settingsSlice";
// import { setProductsSearchText } from "../store/productsSlice";

function JournalsHeader(props) {
//   const dispatch = useDispatch();
//   const searchText = useSelector(
//     ({ eCommerceApp }) => eCommerceApp.products.searchText
//   );
  const mainTheme = useSelector(selectMainTheme);

  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex items-center">
        {/* <Icon
          component={motion.span}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.2 } }}
          className="text-24 md:text-32"
        >
          shopping_basket
        </Icon> */}
        <Typography
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
        >
          Journals
        </Typography>
      </div>

      <div className="flex flex-1 items-center justify-center px-12">
        <ThemeProvider theme={mainTheme}>
          <Paper
            component={motion.div}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow"
          >
            <Icon color="action">search</Icon>

            <Input
              placeholder="Search"
              className="flex flex-1 mx-8"
              disableUnderline
              fullWidth
              //   value={searchText}
              inputProps={{
                "aria-label": "Search",
              }}
              //   onChange={(ev) => dispatch(setProductsSearchText(ev))}
            />
          </Paper>
        </ThemeProvider>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      >
        <Button
          component={Link}
          to="/ezone/new-entry"
          className="whitespace-nowrap"
          variant="contained"
          color="secondary"
        >
          <span className="hidden sm:flex">
            <Icon color="action">add</Icon>
            New Entry
          </span>
          {/* <span className="flex sm:hidden">New</span> */}
        </Button>
      </motion.div>
    </div>
  );
}

export default JournalsHeader;
