import FusePageCarded from "@fuse/core/FusePageCarded";
import { Paper, Input, Icon, Typography, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import JournalsHeader from "./JournalsHeader";
import JournalsTable from "./JournalsTable";

// import withReducer from "app/store/withReducer";
// import reducer from "../store";
// import ProductsHeader from "./JournalsTableHead";
// import ProductsTable from "./JournalsTable";

function Journals() {
  return (
    <FusePageCarded
      classes={{
        content: "flex",
        contentCard: "overflow-hidden",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136",
      }}
      header={<JournalsHeader />}
      content={<JournalsTable />}
      innerScroll
    />
  );
}
export default Journals
// export default withReducer("eCommerceApp", reducer)(Journals);
