import mongoose, { Document } from 'mongoose';
import { IBookEntity } from '../book';
import { bookSchema } from './schema';

type IBookDBModel = Document & IBookEntity;

const BookDBModel = mongoose.model<IBookDBModel>('Book', bookSchema);

export { IBookDBModel, BookDBModel };

// export class BookRepository {
//   readonly private 
// }