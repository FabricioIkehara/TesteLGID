import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../contexts/AuthContext';
import {
  LoginContainer,
  LoginFormWrapper,
  LoginTitle,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
  LoginStatus,
} from './styles';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Usuário é obrigatório'),
      password: Yup.string().required('Senha é obrigatória'),
    }),
    onSubmit: async (values) => {
      setLoginError('');
      const success = login(values.username, values.password);
      if (success) {
        navigate('/'); // Redireciona para a home se o login for bem-sucedido
      } else {
        setLoginError('Usuário ou senha inválidos.');
      }
    },
  });

  return (
    <LoginContainer>
      <LoginFormWrapper>
        <LoginTitle>Login</LoginTitle>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Usuário:</Label>
            <Input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <ErrorMessage>{formik.errors.username}</ErrorMessage>
            ) : null}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Senha:</Label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            ) : null}
          </FormGroup>

          {loginError && <LoginStatus $success={false}>{loginError}</LoginStatus>}

          <SubmitButton type="submit" disabled={formik.isSubmitting}>
            Entrar
          </SubmitButton>
        </form>
      </LoginFormWrapper>
    </LoginContainer>
  );
};

export default Login;