import { IBookDBModel, BookDBModel } from '../db/model';
import { IBookAttributes } from '../book';

export interface IBooksDB {
  findAll: () => Promise<IBookDBModel[]>;
  create: (data: IBookAttributes) => Promise<IBookDBModel>;
}
export const makeBooksDB = ({ 
  makeBookDBModel } : {
  makeBookDBModel: () => Promise<typeof BookDBModel>;
}): IBooksDB => {
  
  const findAll = async () => {
    const bookDBModel = await makeBookDBModel();
    const result = await bookDBModel.find({}).exec();
    //return (await result.map(({_id: id, ...found}) => ({ id, ...found})));
    return result;
  }

  const create = async (data: IBookAttributes) => {
    const bookDBModel = await makeBookDBModel();
    const result = await bookDBModel.create(data);
    // const { _id: id, ...insertedInfo } = result;
    // return { id, ...insertedInfo };
    return result;
  };

  return Object.freeze({
    findAll,
    create
  });
}