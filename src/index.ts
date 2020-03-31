import { buildApp } from './app';
import { buildApi } from './api';
import { buildDb } from './db';

function bootstrap(): void {
  const db = buildDb();
  const api = buildApi();

  buildApp(api).listen(3000, () => console.log('App is running'));
}

bootstrap();
