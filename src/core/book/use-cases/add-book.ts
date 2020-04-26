import { IBookEntity, IAddBookParams } from '../book';
import { IBooksDB } from '../data-access/books-db';

// TODO:
// export interface AddBook {
//   add(book: IAddBookParams): Promise<IBookEntity>;
// };
export type IAddBook = (body: IAddBookParams) => Promise<any>;

// export const buildAddBook = ({ booksDB } : { booksDB: IBooksDB } ): IAddBook => {
//   return async (body) => {
//     const bookData = validateBook(body);
//     return booksDB.create({
//       name: bookData.getName()
//     });
//   } 
// }