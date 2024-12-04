import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';


@Module({
  imports: [
    // Config the environemnt
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    // configure the database Module
    MongooseModule.forRoot(process.env.DB_URI),
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
