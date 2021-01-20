import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { OrmModule } from './modules/orm/orm.module';

//const logger = new Logger('MikroORM');

/*const ormConfig: MikroOrmModuleSyncOptions = {
  type: 'postgresql',
  dbName: 'packlist',
  entitiesTs: ['./src/entities'],
  entities: ['./dist/entities'],
  autoLoadEntities: true,
  discovery: {
    warnWhenNoEntities: true,
  },
  namingStrategy: UnderscoreNamingStrategy,
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
};*/

@Module({
  imports: [OrmModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
