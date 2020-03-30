import { buildApp } from './app';
import { buildApi } from './api';

function bootstrap(): void {
  const api = buildApi();
  buildApp(api).listen(3000, () => console.log('App is running'));
}

bootstrap();
