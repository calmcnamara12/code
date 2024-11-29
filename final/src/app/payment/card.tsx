import { Grid, InputAdornment, TextField } from "@material-ui/core";

export default function Credit() {
    return(


<Grid container spacing={3}>
<Grid item xs={12}>
  <TextField
    fullWidth
    type="tel"
    label="Delivery Infomation"
    variant="filled"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <svg />
        </InputAdornment>
      )
    }}
  />
  <Grid item xs={12}>
  <TextField
    fullWidth
    type="tel"
    label="Delivery Address"
    variant="filled"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <svg />
        </InputAdornment>
      )
    }}
  />
</Grid>
</Grid>
<Grid item xs={12}>
  <TextField
    fullWidth
    type="tel"
    label="Credit card number"
    variant="filled"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <svg />
        </InputAdornment>
      )
    }}
  />
</Grid>
<Grid item xs={12}>
  <TextField
    fullWidth
    type="tel"
    label="Credit card number"
    variant="filled"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <svg />
        </InputAdornment>
      )
    }}
  />
</Grid>
<Grid item xs={6}>
  <TextField
    fullWidth
    type="tel"
    label="Expiry date"
    variant="filled"
  />
</Grid>
<Grid item xs={6}>
  <TextField
   
    fullWidth
    type="tel"
    label="CVV"
    variant="filled"

  />
</Grid>
<Grid item xs={12}>
  <TextField
    fullWidth
    variant="filled"
    type="text"
    label="Name on Card"
    placeholder="J Smith"
  />
</Grid>
</Grid>)}