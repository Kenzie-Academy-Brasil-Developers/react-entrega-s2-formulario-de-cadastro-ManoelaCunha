import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Form = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches("^([a-zA-Zà-úÀ-Ú]|\\s+)+$", "Somente Letras"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Informe um Email válido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .min(8, "Mínimo 8 caracteres")
      .matches(
        "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])[0-9a-zA-Z!$*&@#]{4,}$",
        "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um caracter especial (!$*&@#) e um número!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais!"),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleForm = (data) => {
    const inputForm = formSchema.isValid(data).then((valid) => {
      valid && console.log(data);
      //history.push("/card");
    });
    reset(inputForm);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <TextField
          type="text"
          size="small"
          label="Nome"
          color="primary"
          margin="normal"
          variant="outlined"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </div>
      <div>
        <TextField
          type="email"
          size="small"
          label="Email"
          color="primary"
          margin="normal"
          variant="outlined"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          type="password"
          size="small"
          label="Senha"
          color="primary"
          margin="normal"
          variant="outlined"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <TextField
          type="password"
          size="small"
          label="Confirmar Senha"
          color="primary"
          margin="normal"
          variant="outlined"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
      </div>
      <div>
        <Button type="submit" size="large" variant="outlined">
          Cadastrar
        </Button>
      </div>
    </form>
  );
};

export default Form;
