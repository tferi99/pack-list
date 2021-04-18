import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { OrmModule } from './modules/orm/orm.module';
import { PersonModule } from './modules/person/person.module';
import { NeconfigModule } from 'neconfig';
import * as path from 'path';
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
  imports: [
    NeconfigModule.register({
      readers: [
        { name: 'env', file: path.resolve(process.cwd(), '.env') },
      ],
    }),
    OrmModule,
    AuthModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
