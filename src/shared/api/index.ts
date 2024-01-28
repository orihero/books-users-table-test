import {Book, User} from 'shared/types';

import booksJson from './books.json';
import usersJson from './users.json';

class Api {
  // private readonly api: AxiosInstance;

  // constructor() {
  //   this.api = axios.create({
  //     baseURL: 'https://example.com',
  //   });
  // }
  public getUsers: () => Promise<{data: User[]}> = async () =>
    await Promise.resolve(usersJson);
  public getBooks: () => Promise<{data: Book[]}> = async () =>
    await Promise.resolve(booksJson);
}

const $api = new Api();

export default $api;
