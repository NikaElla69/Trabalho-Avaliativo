import React from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

const Home = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/list');
    };

    return (
        <div>
            <Header title={"Login"} />
            <Flex
                height="100vh"
                alignItems="center"
                justifyContent="center"
                backgroundImage="url('/background.png')"
                backgroundSize="cover"
                backgroundPosition="center"
            >
                <LoginForm backgroundColor="white" onLogin={handleLogin} />
            </Flex>
        </div>
    );
};

export default Home;
