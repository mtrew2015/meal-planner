// src/user/user.service.ts
import { Model, FilterQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Ingredient } from './ingredient.schema';

@Injectable()
export class IngredientService {
  constructor(
    @Inject('INGREDIENT_MODEL')
    private ingredientModel: Model<Ingredient>,
  ) {}

  async create(input): Promise<Ingredient> {
    return this.ingredientModel.create(input);
  }

  async findOne(query): Promise<Ingredient> {
    return this.ingredientModel.findOne(query).lean();
  }

  async find(): Promise<Ingredient[]> {
    return this.ingredientModel.find().lean();
  }
}
