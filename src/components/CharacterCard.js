import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxWidth="300px" m="auto" boxShadow={"2xl"} marginTop={2} flexDirection={"column"}>
            <Image src={character.image} alt={character.name} />
            <Box p="6">
                <Text fontWeight="bold" fontSize="xl">{character.name}</Text>
                <Text>Espécie: {character.species}</Text>
                <Text>Status: {character.status}</Text>
                <Link to={`/profile/${character.id}`}>
                    <Button bgColor="blue.500" color="white" mt={4}>Ver mais detalhes</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default CharacterCard;
