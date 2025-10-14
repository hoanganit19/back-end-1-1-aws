import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  findAll() {
    return this.usersRepository.find();
  }
  create(data: any) {
    return this.usersRepository.save(data);
  }
  findOne(id: number) {
    return this.usersRepository.findOne({
      where: { id },
    });
  }
}
