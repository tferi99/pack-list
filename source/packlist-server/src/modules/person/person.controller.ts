import {
  Body,
  Controller,
  Get,
  HostParam,
  Ip,
  Param,
  Post,
  Query,
  Req,
  Session,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from '../../entities/Person';
import { PersonFilterDto } from './person-filter.dto';
import { MyValidationPipe } from '../../common/pipes/MyValidatorPipe';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  /*  @Get()
  async getAll(): Promise<Person[]> {
    return this.personService.getAll();
  }*/

  @Get()
  async getAllFiltered(@Query() filter: PersonFilterDto): Promise<Person[]> {
    return this.personService.getAll(filter);
  }

  @Post()
  async create(@Body() dto: Person): Promise<Person> {
    return this.personService.create(dto);
  }

  @Get('/testRequest/:param')
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
