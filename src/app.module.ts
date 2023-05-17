import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.17.150.131',
      port: 53040,
      database: 'c1950410_mazaldb',
      username: 'c1950410_mazaldb',
      password: 'zake38weVU',
      autoLoadEntities: true,
      synchronize: false,
    }),
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
