import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  users (): Array {
    return this.userService.users();
  }
  
  @Get()
  user (@Query() query): any {
    return this.userService.user(query.id);
  }

  @Post()
  save (@Body() body) {
    return this.userService.save(body)
  }

  @Post()
  delete (@Body() body) {
    return this.userService.delete(body.id)
  }
}
