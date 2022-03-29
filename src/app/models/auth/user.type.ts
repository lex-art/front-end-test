export interface UserService {
  succes: boolean;
  access_token: string;
  user: User;
}
export interface UserForgotPassword{
  message: string
  url: string
}

export interface User {
  userName: string;
  fisrtName: string;
  lastName: string;
  email: string;
  role: Array<string>
}

export interface SimpleResponse {
  succes: boolean
  message: string
}