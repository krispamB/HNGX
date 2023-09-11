import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto, UpdatePersonDto } from './dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Person')
@Controller()
export class PersonController {
  constructor(private personService: PersonService) {}
  @ApiCreatedResponse({
    description: 'Created user object response',
  })
  @ApiForbiddenResponse({
    description: 'Credentials taken response',
  })
  @Post()
  createPerson(@Body() dto: CreatePersonDto) {
    return this.personService.createPerson(dto);
  }

  @ApiOkResponse({
    description: 'Successful response',
  })
  @ApiNotFoundResponse({
    description: 'Person not found response',
  })
  @ApiParam({name: 'id', required: true, description: 'user id'})
  @Get(':id')
  getPerson(@Param('id') id: string) {
    return this.personService.getPerson(id);
  }

  @ApiOkResponse({
    description: 'Person update success'
  })
  @ApiBadRequestResponse({
    description: 'Person update fail'
  })
  @Patch(':id')
  updatePerson(@Param('id') id: string, @Body() dto: UpdatePersonDto) {
    return this.personService.updatePerson(id, dto)
  }

  @ApiOkResponse({
    description: 'Person delete success'
  })
  @ApiBadRequestResponse({
    description: 'Person delete fail'
  })
  @Delete(':id')
  deletePerson(@Param('id') id: string) {
    return this.personService.deletePerson(id)
  }
}
