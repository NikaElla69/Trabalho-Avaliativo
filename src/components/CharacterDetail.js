import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
            setCharacter(response.data);
        };
        fetchCharacter();
    }, [id]);

    if (!character) return <Text>Carregando...</Text>;

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxWidth="300px" m="auto" boxShadow={"2xl"} marginTop={2} flexDirection={"column"} >
            <Image src={character.image} alt={character.name} />
            <Text fontSize="2xl" padding={2} textAlign={"center"}>{character.name}</Text>
            <Text paddingInline={2}>Espécie: {character.species}</Text>
            <Text paddingInline={2}>Status: {character.status}</Text>
            <Text paddingInline={2}>Gênero: {character.gender}</Text>
            <Text paddingInline={2}>Origem: {character.origin.name}</Text>
            <Text paddingInline={2}>Localização: {character.location.name}</Text>
        </Box>

    );
};

export default CharacterDetail;
