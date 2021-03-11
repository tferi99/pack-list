import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from '../../entities/Person';
import { User } from '../../entities/User';
import { IsNumber, IsOptional } from 'class-validator';
import { PersonQueryFilterDto } from './person-query-filter.dto';


@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

/*  @Get()
  async getAll(): Promise<Person[]> {
    return this.personService.getAll();
  }*/

  @Get()
  async getAllByName(@Query() {id, name} : PersonQueryFilterDto): Promise<Person[]> {
    const filter = {};
    if (id) {
      filter['id'] = id;
    }

    if (name) {
      filter['name'] = name;
    }
    return this.personService.getAll(filter);
    //return this.userService.getByFilter(username);
  }

  @Post()
  async create(@Body() dto: Person): Promise<Person> {
    return this.personService.create(dto);
  }
}

