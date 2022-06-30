export interface IRoute {
  icon: string;
  route?: string;
  text: string;
  role?: Array<string>;
  subMenu?: Array<{
    icon?: string;
    route: string;
    text: string;
    role: Array<string>;
  }>;
  closeSeesion?: boolean;
}
