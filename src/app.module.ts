import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/common'
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.formRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
