// src/items/items.service.ts

/**
 * Data Model Interfaces
 */

 import { User, UserSchema } from "./user.model";
 import { Users } from "./users.model";


/**
 * In-Memory Store
 */

 let users: Users = {
    1: {
      id:1,
      name:"Khubaib",
      email: "Khubaibahmed567@gmail.com",
      age: 20,
      phoneNo: "03XXXXXXXX",
    },
    2: {
      id:2,
      name:"Mudassar",
      email: "muddassar123@gmail.com",
      age: 20,
      phoneNo: "03XXXXXXXX",
    }
    
  };


/**
 * Service Methods
 */

 export const findAll = async (): Promise<User[]> => Object.values(users);
 
 export const find = async (id: number): Promise<User> => users[id];

 export const create = async (userItem: UserSchema): Promise<User> => {
  const id = new Date().valueOf();

  users[id] = {
    id,
    ...userItem,
  };

  return users[id];
};

export const update = async (
  id: number,
  userUpdate: UserSchema
): Promise<User | null> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  users[id] = { id, ...userUpdate };

  return users[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  delete users[id];
};

