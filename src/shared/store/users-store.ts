import {find, map, sortBy} from 'lodash';
import {makeAutoObservable, runInAction} from 'mobx';
import {createContext, useContext} from 'react';
import $api from 'shared/api';
import {User} from 'shared/types';

type SortType = keyof User;

class UsersStore {
  users: User[] = [];
  sortType: SortType = 'id';

  constructor() {
    makeAutoObservable(this);
  }

  getUsers = async () => {
    const response = await $api.getUsers();
    runInAction(() => {
      this.users = response.data;
    });
  };

  sortUsers = (key: SortType) => {
    this.sortType = key;
    this.users = sortBy([...this.users], [key]);
  };

  addNewUser = (form: Omit<User, 'id'>, onEnd?: () => void) => {
    const data = Object.assign({id: this.users.length + 1}, form);
    this.users = [...this.users, data];
    onEnd?.();
  };

  udateUser = (form: User, id: number, onEnd?: () => void) => {
    this.users = map(this.users, user =>
      user.id !== id ? user : {...user, ...form},
    );

    onEnd?.();
  };
  findOneItem = (id: number) => find(this.users, {id});

  removeUser = (id: number) => {
    this.users = this.users.filter(user => user.id !== id);
  };
}

const userStore = new UsersStore();

const UserStoreContext = createContext(userStore);
export const useUserStore = () => useContext(UserStoreContext);
