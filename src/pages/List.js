import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { SimpleGrid, Box, Button } from '@chakra-ui/react';
import CharacterCard from '../components/CharacterCard';

const List = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
            setCharacters(response.data.results);
        };
        fetchCharacters();
    }, [page]);

    return (
        <Box>
            <Header title={"Lista de Personagens"} />
            <SimpleGrid flexDirection={"column"} columns={[1, 2, 3]} spacing={10}>
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </SimpleGrid>
            <Box
                display="flex"
                justifyContent="center"
                mt={4}
                paddingBlock={4}
                bgColor={"teal.800"}
            >

                <Button onClick={() => setPage(page - 1)} isDisabled={page === 1} bgColor={"teal.100"}>Voltar</Button>
                <Button onClick={() => setPage(page + 1)} ml={2} bgColor={"teal.200"}>Próximo</Button>

            </Box>
        </Box>
    );
};

export default List;
