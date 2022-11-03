import React from 'react'
import { Input, Icon } from "@material-ui/core";


function Banking() {
  return (
    <>
      
    <Input
          placeholder="Search..."
          disableUnderline
          fullWidth
          inputProps={{
            "aria-label": "Search",
          }}
        />
        <Icon color="action">search</Icon>
  </>

  );
}

export default Banking