export class User {
  constructor(
    public id: number,
    public name: string | null,
    public password: string | null,
    public email: string | null,
    public age: string | null,
    public role: string | null
  ) {}
}
