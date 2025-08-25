export class ProfilesEntity {
  constructor(
    public id: string,
    public name: string,
    public lastName: string,
    public phone: string | null,
    public address: string | null,
    public gender: string | null,
    public email: string,
    public photo: string | null,
    public status: boolean,
    public birthDate: Date | null,
    public createdAt: Date,
    public updatedAt: Date | null,
  ) {}
}