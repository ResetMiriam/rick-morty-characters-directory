function getCharactersFromApi() {
  return fetch(
    "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"
  )
    .then((response) => response.json())
    .then((json) => {
      return json.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
          planet: character.origin.name,
          episodes: character.episode.lenght,
          status: character.status,
        };
      });
    });
}

const objectToExport = {
  getCharactersFromApi: getCharactersFromApi,
};

export default objectToExport;
