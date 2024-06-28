import React, { useState, useEffect } from 'react';
import { Input, Button, Box, FormControl, FormLabel, FormErrorMessage, Flex } from '@chakra-ui/react';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        validateForm();
    }, [email, password]);

    const validateForm = () => {
        let emailValid = false;
        let passwordValid = false;

        if (email && !email.match(/^\S+@\S+\.\S+$/)) {
            setEmailError('Email inválido');
        } else {
            setEmailError('');
            emailValid = email !== '' && email.match(/^\S+@\S+\.\S+$/);
        }

        if (password && password.length < 8) {
            setPasswordError('A senha deve ter pelo menos 8 caracteres');
        } else {
            setPasswordError('');
            passwordValid = password !== '' && password.length >= 8;
        }

        setIsValid(emailValid && passwordValid);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <Box p={4} alignItems={"center"} bgColor={"gray.200"} boxShadow={"lg"} rounded={"lg"}>
            <FormControl id="email" mb={4} isInvalid={!!emailError}>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder="Insira o seu email aqui"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    borderColor={"teal"}
                />
                <FormErrorMessage>{emailError}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" mb={4} isInvalid={!!passwordError}>
                <FormLabel>Senha</FormLabel>
                <Input
                    placeholder="Insira a sua senha aqui"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    borderColor={"teal"}
                />
                <FormErrorMessage>{passwordError}</FormErrorMessage>
            </FormControl>
            <Button
                onClick={onLogin}
                isDisabled={!isValid}
                bgColor="teal.200"
                color={"black"}
                _hover={{ bgColor: "teal.300" }}
                borderColor={"teal"}
            >
                Login
            </Button>
        </Box>
    );
};

export default LoginForm;
