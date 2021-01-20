/*export default {
  dbName: 'packlist',
  type: 'postgresql',
  entitiesTs: ['./src/entities'],
  entities: ['./dist/entities'],
  autoLoadEntities: true,
};*/

import { UnderscoreNamingStrategy } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { logger } from '@mikro-orm/nestjs';

//const logger = new Logger('MikroORM');

export default {
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
};
