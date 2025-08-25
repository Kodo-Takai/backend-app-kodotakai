import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProfilesCreateRequestDto } from 'src/modules/profiles/application/dtos/profiles-create-request.dto';
import { ProfilesCreateResponseDto } from 'src/modules/profiles/application/dtos/profiles-create-response.dto';
import { ProfilesUpdateRequestDto } from 'src/modules/profiles/application/dtos/profiles-update-request.dto';
import { ProfilesUpdateResponseDto } from 'src/modules/profiles/application/dtos/profiles-update-response.dto';
import { ProfilesPaginatedResponseDto } from 'src/modules/profiles/application/dtos/profiles-paginated-response.dto';

@Injectable()
export class ProfilesRepositoryImpl {
  constructor(private readonly prisma: PrismaService) {}

  async create(request: ProfilesCreateRequestDto): Promise<ProfilesCreateResponseDto> {
    const profile = await this.prisma.profile.create({
      data: {
        name: request.name,
        lastName: request.lastName,
        email: request.email,
        phone: request.phone,
        address: request.address,
        gender: request.gender,
        photo: request.photo,
        birthDate: request.birthDate,
        status: true,
      },
    });
    return {
      id: profile.id,
      name: profile.name,
      lastName: profile.lastName,
      email: profile.email,
      phone: profile.phone,
      address: profile.address,
      gender: profile.gender,
      photo: profile.photo,
      birthDate: profile.birthDate,
      status: profile.status,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
    };
  }

  async findAll(): Promise<ProfilesCreateResponseDto[]> {
    const profiles = await this.prisma.profile.findMany();
    return profiles.map(profile => ({
      id: profile.id,
      name: profile.name,
      lastName: profile.lastName,
      email: profile.email,
      phone: profile.phone,
      address: profile.address,
      gender: profile.gender,
      photo: profile.photo,
      birthDate: profile.birthDate,
      status: profile.status,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
    }));
  }

  async findPaginated(params: { index: number; limit: number; search?: string }): Promise<ProfilesPaginatedResponseDto> {
    const { index, limit, search } = params;
    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};
    const [items, totalItems] = await Promise.all([
      this.prisma.profile.findMany({
        where,
        skip: (index - 1) * limit,
        take: limit,
      }),
      this.prisma.profile.count({ where }),
    ]);
    const totalPages = Math.ceil(totalItems / limit);
    return {
      items: items.map(profile => ({
        id: profile.id,
        name: profile.name,
        lastName: profile.lastName,
        email: profile.email,
        phone: profile.phone,
        address: profile.address,
        gender: profile.gender,
        photo: profile.photo,
        birthDate: profile.birthDate,
        status: profile.status,
        createdAt: profile.createdAt,
        updatedAt: profile.updatedAt,
      })),
      currentPage: index,
      totalPages,
      totalItems,
    };
  }

  async update(id: string, request: ProfilesUpdateRequestDto): Promise<ProfilesUpdateResponseDto> {
    const profile = await this.prisma.profile.update({
      where: { id },
      data: {
        ...request,
      },
    });
    return {
      id: profile.id,
      name: profile.name,
      lastName: profile.lastName,
      email: profile.email,
      phone: profile.phone,
      address: profile.address,
      gender: profile.gender,
      photo: profile.photo,
      birthDate: profile.birthDate,
      status: profile.status,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
    };
  }

  async updateStatus(id: string, status: boolean): Promise<ProfilesUpdateResponseDto> {
    const profile = await this.prisma.profile.update({
      where: { id },
      data: { status },
    });
    return {
      id: profile.id,
      name: profile.name,
      lastName: profile.lastName,
      email: profile.email,
      phone: profile.phone,
      address: profile.address,
      gender: profile.gender,
      photo: profile.photo,
      birthDate: profile.birthDate,
      status: profile.status,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
    };
  }
}