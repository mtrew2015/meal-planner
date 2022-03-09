import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateIngredientInput } from './ingredient.input';
import { IngredientService } from '../ingredient/ingredient.service';
import { Ingredient } from './ingredient.schema';

@Resolver(() => Ingredient)
export class IngredientResolver {
  constructor(private ingredientService: IngredientService) {}

  @Mutation(() => Ingredient)
  async createIngredient(@Args('input') input: CreateIngredientInput) {
    return this.ingredientService.create(input);
  }

  @Query(() => [Ingredient])
  async ingredients() {
    return this.ingredientService.find();
  }
}
