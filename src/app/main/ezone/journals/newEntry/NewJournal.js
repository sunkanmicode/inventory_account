import { Container,TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Controller, useFormContext } from 'react-hook-form';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: "25ch",
//   },
// }));



function NewJournal() {
    // const methods = useFormContext();
    // const { control } = methods;

  return (
    <div>
      <div className="flex -mx-4">
        <TextField
          className="mt-8 mb-16 mx-4"
          label="Transaction Date"
          id="outlined-margin-dense"
          defaultValue="2017-05-24"
          //   placeholder="Enter Date"
          type="date"
          //   className={classes.textField}
          margin="dense"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Reference Number"
          id="outlined-margin-dense"
          placeholder="Reference Number"
          //   className={classes.textField}
          className="mt-8 mb-16 mx-4"
          margin="dense"
          variant="outlined"
          fullWidth
        />

        {/* <Controller
          name="width"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="Width"
              autoFocus
              id="width"
              variant="outlined"
              fullWidth
            />
          )}
        /> */}

        {/* <Controller
          name="height"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="Height"
              id="height"
              variant="outlined"
              fullWidth
            />
          )}
        /> */}

        {/* <Controller
          name="depth"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="Depth"
              id="depth"
              variant="outlined"
              fullWidth
            />
          )}
        /> */}
      </div>

      {/* <Controller
        name="weight"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Weight"
            id="weight"
            variant="outlined"
            fullWidth
          />
        )}
      /> */}
      {/* <Controller
        name="extraShippingFee"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Extra Shipping Fee"
            id="extraShippingFee"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            fullWidth
          />
        )}
      /> */}
    </div>
  );
}

export default NewJournal
