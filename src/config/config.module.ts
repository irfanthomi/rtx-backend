import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'thomi3354',
            database: 'my_web',
            autoLoadEntities: true,
            synchronize: true,
        })
    ]
})
export class ConfigModule { }
