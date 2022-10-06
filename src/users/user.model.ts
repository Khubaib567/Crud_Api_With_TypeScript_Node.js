
export interface UserSchema {
    name: string;
    email: string;
    age: Number;
    phoneNo:string
}
  

export interface User extends UserSchema {
    id: number;
}
