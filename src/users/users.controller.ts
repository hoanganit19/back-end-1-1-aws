import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import fs from 'fs';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('something')
  something() {
    return 'ahihi';
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.usersService.create(body);
  }

  @Post('upload')
  upload() {
    fs.writeFileSync(
      `${process.cwd()}/public/something.txt`,
      'Xin chào anh em',
    );
  }
}
