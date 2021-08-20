import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async users (): Promise<Array<UserEntity>> {
        return await this.userRepository.find()
    }

    async user (id: number): Promise<UserEntity> {
        return await this.userRepository.findOne({ id })
    }

    async save (userDto: UserDto): Promise<UserEntity> {
        return await this.userRepository.save(userDto)
    }

    async delete (id: number): Promise<UserEntity> {
        return await this.userRepository.delete({ id })
    }

}