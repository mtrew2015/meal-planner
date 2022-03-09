import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { IngredientService } from './ingredient/ingredient.service';
import { IngredientModule } from './ingredient/ingredient.module';
import { IngredientResolver } from './ingredient/ingredient.resolver';
import { databaseProviders } from './database/database.providers';
import { ingredientProviders } from './ingredient/ingredient.providers';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
    DatabaseModule,
    IngredientModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    IngredientService,
    IngredientResolver,
    ...databaseProviders,
    ...ingredientProviders,
  ],
})
export class AppModule {}
