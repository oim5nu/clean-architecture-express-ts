import * as mongoose from 'mongoose';
//import { Book } from 'src/domain/book.model';

export const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: {
      createdAt: 'created_on',
      updatedAt: 'updated_on'
  },
  versionKey: false
});

// bookSchema.loadClass(Book);  // Book is class
