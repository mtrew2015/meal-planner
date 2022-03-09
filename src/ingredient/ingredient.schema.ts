// src/user/user.schema.ts
import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const IngredientSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
});

@ObjectType()
export class Ingredient extends Document {
  @Field()
  name: string;

  @Field()
  qty: number;

  @Field()
  price: number;
}
