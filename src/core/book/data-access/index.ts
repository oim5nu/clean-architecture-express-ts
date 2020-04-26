import * as mongoose from 'mongoose';
import { bookSchema } from '../db/schema';
import { IBookDBModel } from '../db/model';
import { makeBooksDB } from './books-db';

export async function makeBookDBModel() {
  return mongoose.model<IBookDBModel>('Book', bookSchema);
}

const booksDB = makeBooksDB({ makeBookDBModel });
export { booksDB };