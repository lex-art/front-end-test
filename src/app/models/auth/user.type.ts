export interface UserService {
  succes: boolean;
  accessToken: string;
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
  role: Array<string>;
  urlPhoto?: string;
}

export interface SimpleResponse {
  success: boolean
  message: string
}