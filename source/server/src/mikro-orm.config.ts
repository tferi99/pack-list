export default {
  dbName: 'packlist',
  type: 'postgresql',
  entitiesTs: ['./src/entities'],
  entities: ['./dist/entities'],
  autoLoadEntities: true,
};
