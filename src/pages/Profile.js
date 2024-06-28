import React, { useState } from 'react';
import CharacterDetail from '../components/CharacterDetail';
import Header from '../components/Header';
import { Box, Button } from '@chakra-ui/react';

const Profile = () => {
    const [page, setPage] = useState(1);

    return (
        <div>

            <Header title="Detalhe do Personagem" />
            <CharacterDetail />
            <Box
                display="flex"
                justifyContent="center"
                mt={4}
                paddingBlock={4}
                bgColor={"teal.800"}
                flexDirection={"end"}
            >

                <Button onClick={() => setPage(page - 1)} isDisabled={page === 1} bgColor={"teal.100"}>Voltar</Button>
                <Button onClick={() => setPage(page + 1)} ml={2} bgColor={"teal.200"}>Próximo</Button>

            </Box>
        </div>
    );
};

export default Profile;
