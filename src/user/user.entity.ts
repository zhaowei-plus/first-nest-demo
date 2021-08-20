import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm'

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn({ comment: '主键id' }) // 自动生成id
    id: number

    @Column({ length: 45, comment: '名称' })
    username: string
    
    @Column({ length: 11, comment: '工号' })
    workNo: string

    // @Column({ type: 'timestamp', default: () => 'current_timestamp' })
    // createAt: Timestamp

    // @Column({
    //     type: 'timestamp',
    //     onUpdate: 'current_timestap',
    //     default: () => 'current_timestamp'
    // })
    // updateAt: Timestamp
}
