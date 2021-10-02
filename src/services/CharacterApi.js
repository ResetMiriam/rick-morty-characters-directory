function getCharactersFromApi() {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((json) => {
      const neededData = json.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
          planet: character.origin.name,
          episodes: character.episode.length,
          status: character.status,
        };
      });

      return neededData;
    });
}

export default getCharactersFromApi;
