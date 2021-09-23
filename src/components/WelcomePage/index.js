import img from "./assets/undraw_taken.svg";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: { padding: "20px" },
  text: {
    margin: "20px",
    color: "white",
    fontSize: "40px",
  },
  button: {
    margin: "10px 0px",
  },
}));

const WelcomePage = () => {
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();

  const handleReturn = () => {
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <div>
        <img src={img} alt="astronauta" width="300" height="300" />
      </div>
      <div>
        <Typography className={classes.text}>
          Bem vind@, {params.name}!
        </Typography>
      </div>
      <div>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          onClick={handleReturn}
          className={classes.button}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
