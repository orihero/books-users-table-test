import $api from 'shared/api';

export async function genRandomImg(): Promise<string> {
  const books = (await $api.getBooks()).data;
  if (books.length > 0) {
    const randomIndex = Math.floor(Math.random() * books.length);

    return books[randomIndex].image_url;
  }
  return '';
}
