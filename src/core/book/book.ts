
export interface IBookEntity {
  id: string;
  name: string;
}

export type IBookAttributes = Omit<IBookEntity, 'id'>;
export type IAddBookParams = IBookAttributes;