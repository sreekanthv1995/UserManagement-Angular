export interface UserRegisterModel {

    
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}


export interface Users {
    userList: UserRegisterModel[];
}