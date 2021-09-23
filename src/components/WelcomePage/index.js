import { Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

const WelcomePage = () => {
  const params = useParams();
  const history = useHistory();

  const handleReturn = () => {
    history.push("/");
  };

  return (
    <div>
      <p>Bem vid@, {params.name} !</p>
      <Button onClick={handleReturn} size="large" variant="outlined">
        Voltar
      </Button>
    </div>
  );
};

export default WelcomePage;
