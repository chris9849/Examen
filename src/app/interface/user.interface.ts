import { Coordinate } from "./coordinate.interface";
export interface User{
    uuid: String;
    firstName: String;
    lastName: String;
    email: String;
    username:String;
    gender:String;
    address: String;
    dateOfBirth: String;
    phone: string;
    imageUrl:string;
    coordinate: Coordinate;
}