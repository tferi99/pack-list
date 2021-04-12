import { Body, Controller, Get, HostParam, Ip, Param, ParseIntPipe, Post, Query, Req, Session } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from '../../entities/person';
import { PersonFilterDto } from './person-filter.dto';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async getAllFiltered(@Query() filter: PersonFilterDto): Promise<Person[]> {
    console.log('FILTER:', filter);
    return this.personService.getAll(filter);
  }

  @Get('/search')
  async getAll(@Query('id', ParseIntPipe) id: number, @Query('name') name: string): Promise<Person[]> {
    const filter = {};
    if (id) {
      filter['id'] = id;
    }
    if (name) {
      filter['name'] = name;
    }
    console.log('FILTER from query params:', filter);
    return this.personService.getAll(filter);
  }

  @Post()
  async create(@Body() dto: Person): Promise<Person> {
    return this.personService.create(dto);
  }

  @Get('/test/:param')
  async testRequest(@Req() req, @Session() sess, @Ip() ip, @HostParam() hostParam, @Param('param') param, @Query('query') query): Promise<Person> {
    console.log('----------------------- testRequest -------------------------');
    console.log('@Request():', req);
    console.log('@Session:', sess);
    console.log('@Ip():', ip);
    console.log('@HostParam:', hostParam);
    console.log('@Param:', param);
    console.log('@Query:', query);
    console.log('---------------------------------------------------------------');

    const p = {
      id: 100,
      name: 'John Smith',
      email: 'js@test.org',
      rank: 5,
    } as Person;

    return p;
  }
}
