/*const ApiFetch = () => {
  return fetch(
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/${output}&key=AIzaSyDZnPNW-lqdIwGSGVmcy9hvJchjV6GOPqQ"
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          episode: character.episode.length,
        };
      });

      return cleanData;
    });
};

export default ApiFetch;
*/
