export interface UserService {
  succes: boolean;
  access_token: string;
  user: User;
}

export interface User {
  userName: string;
  fisrtName: string;
  lastName: string;
  email: string;
}
