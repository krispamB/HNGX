import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePersonDto, UpdatePersonDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Person } from '@prisma/client';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  async createPerson(dto: CreatePersonDto) {
    const personExists: Person = await this.prisma.person.findUnique({
      where: {
        name: dto.name,
      },
    });
    if (personExists) throw new ForbiddenException('Person already created');

    const person: Person = await this.prisma.person.create({
      data: dto,
    });

    if (!person) throw new BadRequestException('Person creation unsuccessful');

    return person;
  }

  async getPerson(id: string) {
    const person: Person = await this.prisma.person.findUnique({
      where: {
        id
      }
    })

    if (!person) throw new NotFoundException('Person not found');

    return person;
  }

  async updatePerson(id: string, dto: UpdatePersonDto) {
    const newPerson: Person = await this.prisma.person.update({
      where: {
        id
      },
      data: dto,
    });

    if(!newPerson) throw new BadRequestException('Person update failed')

    return newPerson;
  }

  async deletePerson(id: string) {
    const examDelete = await this.prisma.person.delete({
      where: {
        id,
      },
    });

    if (!examDelete)
      throw new BadRequestException('There was an error while deleting person');

    return {
      success: true,
      message: 'Person deleted successfully',
    };
  }
}
