import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Class = {
  __typename?: 'Class';
  hit_die?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ErrorRequest = {
  __typename?: 'ErrorRequest';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type Listing = {
  __typename?: 'Listing';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Monster = {
  __typename?: 'Monster';
  alignment?: Maybe<Scalars['String']>;
  armor_class?: Maybe<Scalars['Int']>;
  challenge_rating?: Maybe<Scalars['Int']>;
  charisma?: Maybe<Scalars['Int']>;
  constitution?: Maybe<Scalars['Int']>;
  dexterity?: Maybe<Scalars['Int']>;
  hit_dice?: Maybe<Scalars['String']>;
  hit_points?: Maybe<Scalars['Int']>;
  hit_points_roll?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['Int']>;
  languages?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  speed?: Maybe<Speed>;
  strength?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  wisdom?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
};

export type MonsterRequest = ErrorRequest | Monster;

export type Query = {
  __typename?: 'Query';
  classByIndex?: Maybe<Class>;
  classes?: Maybe<Array<Maybe<Listing>>>;
  googleImage?: Maybe<Scalars['String']>;
  monsterByIndex?: Maybe<MonsterRequest>;
  monsters?: Maybe<Array<Maybe<Listing>>>;
  spellByIndex?: Maybe<Spell>;
  spells?: Maybe<Array<Maybe<Listing>>>;
};


export type QueryClassByIndexArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QueryGoogleImageArgs = {
  query?: InputMaybe<Scalars['String']>;
};


export type QueryMonsterByIndexArgs = {
  index?: InputMaybe<Scalars['String']>;
};


export type QuerySpellByIndexArgs = {
  index?: InputMaybe<Scalars['String']>;
};

export type Speed = {
  __typename?: 'Speed';
  fly?: Maybe<Scalars['String']>;
  swim?: Maybe<Scalars['String']>;
  walk?: Maybe<Scalars['String']>;
};

export type Spell = {
  __typename?: 'Spell';
  _id?: Maybe<Scalars['ID']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Class: ResolverTypeWrapper<Class>;
  ErrorRequest: ResolverTypeWrapper<ErrorRequest>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Listing: ResolverTypeWrapper<Listing>;
  Monster: ResolverTypeWrapper<Monster>;
  MonsterRequest: ResolversTypes['ErrorRequest'] | ResolversTypes['Monster'];
  Query: ResolverTypeWrapper<{}>;
  Speed: ResolverTypeWrapper<Speed>;
  Spell: ResolverTypeWrapper<Spell>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Class: Class;
  ErrorRequest: ErrorRequest;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Listing: Listing;
  Monster: Monster;
  MonsterRequest: ResolversParentTypes['ErrorRequest'] | ResolversParentTypes['Monster'];
  Query: {};
  Speed: Speed;
  Spell: Spell;
  String: Scalars['String'];
};

export type ClassResolvers<ContextType = any, ParentType extends ResolversParentTypes['Class'] = ResolversParentTypes['Class']> = {
  hit_die?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorRequest'] = ResolversParentTypes['ErrorRequest']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Listing'] = ResolversParentTypes['Listing']> = {
  index?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Monster'] = ResolversParentTypes['Monster']> = {
  alignment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  armor_class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  challenge_rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  charisma?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  constitution?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dexterity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hit_dice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hit_points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hit_points_roll?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  intelligence?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<ResolversTypes['Speed']>, ParentType, ContextType>;
  strength?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wisdom?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonsterRequest'] = ResolversParentTypes['MonsterRequest']> = {
  __resolveType: TypeResolveFn<'ErrorRequest' | 'Monster', ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  classByIndex?: Resolver<Maybe<ResolversTypes['Class']>, ParentType, ContextType, Partial<QueryClassByIndexArgs>>;
  classes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Listing']>>>, ParentType, ContextType>;
  googleImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<QueryGoogleImageArgs>>;
  monsterByIndex?: Resolver<Maybe<ResolversTypes['MonsterRequest']>, ParentType, ContextType, Partial<QueryMonsterByIndexArgs>>;
  monsters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Listing']>>>, ParentType, ContextType>;
  spellByIndex?: Resolver<Maybe<ResolversTypes['Spell']>, ParentType, ContextType, Partial<QuerySpellByIndexArgs>>;
  spells?: Resolver<Maybe<Array<Maybe<ResolversTypes['Listing']>>>, ParentType, ContextType>;
};

export type SpeedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Speed'] = ResolversParentTypes['Speed']> = {
  fly?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swim?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  walk?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpellResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spell'] = ResolversParentTypes['Spell']> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Class?: ClassResolvers<ContextType>;
  ErrorRequest?: ErrorRequestResolvers<ContextType>;
  Listing?: ListingResolvers<ContextType>;
  Monster?: MonsterResolvers<ContextType>;
  MonsterRequest?: MonsterRequestResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Speed?: SpeedResolvers<ContextType>;
  Spell?: SpellResolvers<ContextType>;
};

