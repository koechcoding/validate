export class User{
    constructor(public Id:string, public Name:string , public Email:string, public Password:string){}
}


export interface DecodedData{
  Id: string,
  Name:string,
  Email:string,
}