export const getCharacter = (apiURL: string) =>
  fetch(apiURL).then((res) => res.json());