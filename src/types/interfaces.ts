export interface IUser {
  id: string;
  name: string;
}
export interface IFocus {
  id: string;
  name: string;
  completed: boolean;
}
export interface ISpot {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}
export interface ISession {
  id: string;
  memo: string;
  rating: number;
  focus?: IFocus;
  spot?: ISpot;
}
