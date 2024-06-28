import React from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Flex, Input } from '@chakra-ui/react';

const Home = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/list');
    };

    return (
        <div>
            <Header title={"Login"} />
            <Flex>
                <LoginForm onLogin={handleLogin} />
            </Flex>
        </div>
    );
};

export default Home;
