import { ProfilesEntity } from "../entities/profiles.entity";

export class ProfilesFactory {
  static createFromPrisma(data: any): ProfilesEntity {
    return new ProfilesEntity(
      data.id,
      data.name,
      data.lastName,
      data.phone ?? null,
      data.address ?? null,
      data.gender ?? null,
      data.email,
      data.photo ?? null,
      data.status,
      data.birthDate ?? null,
      data.createdAt,
      data.updatedAt ?? null
    );
  }
}