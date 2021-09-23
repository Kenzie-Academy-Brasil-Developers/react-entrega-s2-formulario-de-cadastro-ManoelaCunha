import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Form from "../../components/Form";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px",
    background: "rgb(250,250,250,0.6)",
  },
}));

const Register = () => {
  const classes = useStyles();

  return (
    <Paper elevation={10} className={classes.paper}>
      <Form />
    </Paper>
  );
};

export default Register;
