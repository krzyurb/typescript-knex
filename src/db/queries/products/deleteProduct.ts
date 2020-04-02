import { pipe, andThen, curry, equals } from 'ramda';
import knex from 'knex';

import { Tables } from '../../tables';
import { IProduct } from '.';

const removeFromDb = (db: knex, id: string): Promise<number> =>
  db<IProduct>(Tables.PRODUCTS)
    .where({ id })
    .delete();

const curriedRemoveFromDb = curry(removeFromDb);

export const deleteProduct = (db: knex, id: string): Promise<boolean> =>
  pipe(curriedRemoveFromDb(db), andThen(equals(1)))(id);
