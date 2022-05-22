export class User {
  constructor(
    public id: number,
    public userFirstName: string | null,    
    public age: string | null,   
    public site: string | null,
    public secondSite: string | null
  ) {}
}
