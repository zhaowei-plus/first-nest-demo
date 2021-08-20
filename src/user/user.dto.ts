import { 
    IsNumber,
    IsString,
    IsNotEmpty
} from 'class-validator'

export class UserDto {
    @IsString()
    name: string

    @IsString()
    workNo: string
}