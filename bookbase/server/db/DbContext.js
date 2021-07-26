import mongoose from 'mongoose'
import { Book as BookSchema } from '../models/Book'
import { Profile as ProfileSchema } from '../models/Profile'

class DbContext {
  Books = mongoose.model('Book', BookSchema);
  Profile = mongoose.model('Profile', ProfileSchema);
}

export const dbContext = new DbContext()
