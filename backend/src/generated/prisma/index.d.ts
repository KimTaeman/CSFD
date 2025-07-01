/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Student
 *
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>;
/**
 * Model Hint
 *
 */
export type Hint = $Result.DefaultSelection<Prisma.$HintPayload>;
/**
 * Model Mentor
 *
 */
export type Mentor = $Result.DefaultSelection<Prisma.$MentorPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const ROLE: {
    CS25: 'CS25';
    CS26: 'CS26';
  };

  export type ROLE = (typeof ROLE)[keyof typeof ROLE];
}

export type ROLE = $Enums.ROLE;

export const ROLE: typeof $Enums.ROLE;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hint`: Exposes CRUD operations for the **Hint** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Hints
   * const hints = await prisma.hint.findMany()
   * ```
   */
  get hint(): Prisma.HintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentor`: Exposes CRUD operations for the **Mentor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Mentors
   * const mentors = await prisma.mentor.findMany()
   * ```
   */
  get mentor(): Prisma.MentorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I,
  ) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Student: 'Student';
    Hint: 'Hint';
    Mentor: 'Mentor';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'student' | 'hint' | 'mentor';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>;
        fields: Prisma.StudentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[];
          };
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[];
          };
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[];
          };
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStudent>;
          };
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StudentGroupByOutputType>[];
          };
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>;
            result: $Utils.Optional<StudentCountAggregateOutputType> | number;
          };
        };
      };
      Hint: {
        payload: Prisma.$HintPayload<ExtArgs>;
        fields: Prisma.HintFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.HintFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.HintFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload>;
          };
          findFirst: {
            args: Prisma.HintFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.HintFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload>;
          };
          findMany: {
            args: Prisma.HintFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[];
          };
          create: {
            args: Prisma.HintCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload>;
          };
          createMany: {
            args: Prisma.HintCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.HintCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[];
          };
          delete: {
            args: Prisma.HintDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload>;
          };
          update: {
            args: Prisma.HintUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload>;
          };
          deleteMany: {
            args: Prisma.HintDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.HintUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.HintUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[];
          };
          upsert: {
            args: Prisma.HintUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$HintPayload>;
          };
          aggregate: {
            args: Prisma.HintAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHint>;
          };
          groupBy: {
            args: Prisma.HintGroupByArgs<ExtArgs>;
            result: $Utils.Optional<HintGroupByOutputType>[];
          };
          count: {
            args: Prisma.HintCountArgs<ExtArgs>;
            result: $Utils.Optional<HintCountAggregateOutputType> | number;
          };
        };
      };
      Mentor: {
        payload: Prisma.$MentorPayload<ExtArgs>;
        fields: Prisma.MentorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MentorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MentorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>;
          };
          findFirst: {
            args: Prisma.MentorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MentorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>;
          };
          findMany: {
            args: Prisma.MentorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>[];
          };
          create: {
            args: Prisma.MentorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>;
          };
          createMany: {
            args: Prisma.MentorCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MentorCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>[];
          };
          delete: {
            args: Prisma.MentorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>;
          };
          update: {
            args: Prisma.MentorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>;
          };
          deleteMany: {
            args: Prisma.MentorDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MentorUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MentorUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>[];
          };
          upsert: {
            args: Prisma.MentorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MentorPayload>;
          };
          aggregate: {
            args: Prisma.MentorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMentor>;
          };
          groupBy: {
            args: Prisma.MentorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MentorGroupByOutputType>[];
          };
          count: {
            args: Prisma.MentorCountArgs<ExtArgs>;
            result: $Utils.Optional<MentorCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    student?: StudentOmit;
    hint?: HintOmit;
    mentor?: MentorOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    mentees: number;
    givenHints: number;
    receivedHints: number;
  };

  export type StudentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    mentees?: boolean | StudentCountOutputTypeCountMenteesArgs;
    givenHints?: boolean | StudentCountOutputTypeCountGivenHintsArgs;
    receivedHints?: boolean | StudentCountOutputTypeCountReceivedHintsArgs;
  };

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMenteesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MentorWhereInput;
  };

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGivenHintsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: HintWhereInput;
  };

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountReceivedHintsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: HintWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  export type StudentAvgAggregateOutputType = {
    id: number | null;
    lives: number | null;
  };

  export type StudentSumAggregateOutputType = {
    id: number | null;
    lives: number | null;
  };

  export type StudentMinAggregateOutputType = {
    id: number | null;
    microsoftId: string | null;
    email: string | null;
    studentId: string | null;
    displayName: string | null;
    nickname: string | null;
    profilePic: string | null;
    house: string | null;
    instagram: string | null;
    nationality: string | null;
    role: $Enums.ROLE | null;
    isSenior: boolean | null;
    lives: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type StudentMaxAggregateOutputType = {
    id: number | null;
    microsoftId: string | null;
    email: string | null;
    studentId: string | null;
    displayName: string | null;
    nickname: string | null;
    profilePic: string | null;
    house: string | null;
    instagram: string | null;
    nationality: string | null;
    role: $Enums.ROLE | null;
    isSenior: boolean | null;
    lives: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type StudentCountAggregateOutputType = {
    id: number;
    microsoftId: number;
    email: number;
    studentId: number;
    displayName: number;
    nickname: number;
    profilePic: number;
    house: number;
    instagram: number;
    nationality: number;
    role: number;
    isSenior: number;
    lives: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type StudentAvgAggregateInputType = {
    id?: true;
    lives?: true;
  };

  export type StudentSumAggregateInputType = {
    id?: true;
    lives?: true;
  };

  export type StudentMinAggregateInputType = {
    id?: true;
    microsoftId?: true;
    email?: true;
    studentId?: true;
    displayName?: true;
    nickname?: true;
    profilePic?: true;
    house?: true;
    instagram?: true;
    nationality?: true;
    role?: true;
    isSenior?: true;
    lives?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type StudentMaxAggregateInputType = {
    id?: true;
    microsoftId?: true;
    email?: true;
    studentId?: true;
    displayName?: true;
    nickname?: true;
    profilePic?: true;
    house?: true;
    instagram?: true;
    nationality?: true;
    role?: true;
    isSenior?: true;
    lives?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type StudentCountAggregateInputType = {
    id?: true;
    microsoftId?: true;
    email?: true;
    studentId?: true;
    displayName?: true;
    nickname?: true;
    profilePic?: true;
    house?: true;
    instagram?: true;
    nationality?: true;
    role?: true;
    isSenior?: true;
    lives?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type StudentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Students
     **/
    _count?: true | StudentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: StudentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: StudentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StudentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StudentMaxAggregateInputType;
  };

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>;
  };

  export type StudentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StudentWhereInput;
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[];
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum;
    having?: StudentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
  };

  export type StudentGroupByOutputType = {
    id: number;
    microsoftId: string | null;
    email: string;
    studentId: string | null;
    displayName: string;
    nickname: string | null;
    profilePic: string | null;
    house: string | null;
    instagram: string | null;
    nationality: string | null;
    role: $Enums.ROLE;
    isSenior: boolean;
    lives: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StudentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
          : GetScalarType<T[P], StudentGroupByOutputType[P]>;
      }
    >
  >;

  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        microsoftId?: boolean;
        email?: boolean;
        studentId?: boolean;
        displayName?: boolean;
        nickname?: boolean;
        profilePic?: boolean;
        house?: boolean;
        instagram?: boolean;
        nationality?: boolean;
        role?: boolean;
        isSenior?: boolean;
        lives?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        mentor?: boolean | Student$mentorArgs<ExtArgs>;
        mentees?: boolean | Student$menteesArgs<ExtArgs>;
        givenHints?: boolean | Student$givenHintsArgs<ExtArgs>;
        receivedHints?: boolean | Student$receivedHintsArgs<ExtArgs>;
        _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['student']
    >;

  export type StudentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      microsoftId?: boolean;
      email?: boolean;
      studentId?: boolean;
      displayName?: boolean;
      nickname?: boolean;
      profilePic?: boolean;
      house?: boolean;
      instagram?: boolean;
      nationality?: boolean;
      role?: boolean;
      isSenior?: boolean;
      lives?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['student']
  >;

  export type StudentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      microsoftId?: boolean;
      email?: boolean;
      studentId?: boolean;
      displayName?: boolean;
      nickname?: boolean;
      profilePic?: boolean;
      house?: boolean;
      instagram?: boolean;
      nationality?: boolean;
      role?: boolean;
      isSenior?: boolean;
      lives?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['student']
  >;

  export type StudentSelectScalar = {
    id?: boolean;
    microsoftId?: boolean;
    email?: boolean;
    studentId?: boolean;
    displayName?: boolean;
    nickname?: boolean;
    profilePic?: boolean;
    house?: boolean;
    instagram?: boolean;
    nationality?: boolean;
    role?: boolean;
    isSenior?: boolean;
    lives?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'microsoftId'
      | 'email'
      | 'studentId'
      | 'displayName'
      | 'nickname'
      | 'profilePic'
      | 'house'
      | 'instagram'
      | 'nationality'
      | 'role'
      | 'isSenior'
      | 'lives'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['student']
    >;
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | Student$mentorArgs<ExtArgs>;
    mentees?: boolean | Student$menteesArgs<ExtArgs>;
    givenHints?: boolean | Student$givenHintsArgs<ExtArgs>;
    receivedHints?: boolean | Student$receivedHintsArgs<ExtArgs>;
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type StudentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type StudentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Student';
      objects: {
        mentor: Prisma.$MentorPayload<ExtArgs> | null;
        mentees: Prisma.$MentorPayload<ExtArgs>[];
        givenHints: Prisma.$HintPayload<ExtArgs>[];
        receivedHints: Prisma.$HintPayload<ExtArgs>[];
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: number;
          microsoftId: string | null;
          email: string;
          studentId: string | null;
          displayName: string;
          nickname: string | null;
          profilePic: string | null;
          house: string | null;
          instagram: string | null;
          nationality: string | null;
          role: $Enums.ROLE;
          isSenior: boolean;
          lives: number | null;
          createdAt: Date;
          updatedAt: Date;
        },
        ExtArgs['result']['student']
      >;
      composites: {};
    };

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> =
    $Result.GetResult<Prisma.$StudentPayload, S>;

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    StudentFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: StudentCountAggregateInputType | true;
  };

  export interface StudentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student']; meta: { name: 'Student' } };
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(
      args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(
      args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     *
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StudentFindManyArgs>(
      args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     *
     */
    create<T extends StudentCreateArgs>(
      args: SelectSubset<T, StudentCreateArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StudentCreateManyArgs>(
      args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StudentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     *
     */
    delete<T extends StudentDeleteArgs>(
      args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StudentUpdateArgs>(
      args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StudentDeleteManyArgs>(
      args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StudentUpdateManyArgs>(
      args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StudentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(
      args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
     **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends StudentAggregateArgs>(
      args: Subset<T, StudentAggregateArgs>,
    ): Prisma.PrismaPromise<GetStudentAggregateType<T>>;

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Student model
     */
    readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    mentor<T extends Student$mentorArgs<ExtArgs> = {}>(
      args?: Subset<T, Student$mentorArgs<ExtArgs>>,
    ): Prisma__MentorClient<
      $Result.GetResult<
        Prisma.$MentorPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    mentees<T extends Student$menteesArgs<ExtArgs> = {}>(
      args?: Subset<T, Student$menteesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    givenHints<T extends Student$givenHintsArgs<ExtArgs> = {}>(
      args?: Subset<T, Student$givenHintsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    receivedHints<T extends Student$receivedHintsArgs<ExtArgs> = {}>(
      args?: Subset<T, Student$receivedHintsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<'Student', 'Int'>;
    readonly microsoftId: FieldRef<'Student', 'String'>;
    readonly email: FieldRef<'Student', 'String'>;
    readonly studentId: FieldRef<'Student', 'String'>;
    readonly displayName: FieldRef<'Student', 'String'>;
    readonly nickname: FieldRef<'Student', 'String'>;
    readonly profilePic: FieldRef<'Student', 'String'>;
    readonly house: FieldRef<'Student', 'String'>;
    readonly instagram: FieldRef<'Student', 'String'>;
    readonly nationality: FieldRef<'Student', 'String'>;
    readonly role: FieldRef<'Student', 'ROLE'>;
    readonly isSenior: FieldRef<'Student', 'Boolean'>;
    readonly lives: FieldRef<'Student', 'Int'>;
    readonly createdAt: FieldRef<'Student', 'DateTime'>;
    readonly updatedAt: FieldRef<'Student', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput;
  };

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput;
  };

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * Student create
   */
  export type StudentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>;
  };

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Student update
   */
  export type StudentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>;
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput;
  };

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>;
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput;
    /**
     * Limit how many Students to update.
     */
    limit?: number;
  };

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>;
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput;
    /**
     * Limit how many Students to update.
     */
    limit?: number;
  };

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput;
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>;
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>;
  };

  /**
   * Student delete
   */
  export type StudentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput;
  };

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput;
    /**
     * Limit how many Students to delete.
     */
    limit?: number;
  };

  /**
   * Student.mentor
   */
  export type Student$mentorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null;
    where?: MentorWhereInput;
  };

  /**
   * Student.mentees
   */
  export type Student$menteesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null;
    where?: MentorWhereInput;
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[];
    cursor?: MentorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[];
  };

  /**
   * Student.givenHints
   */
  export type Student$givenHintsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null;
    where?: HintWhereInput;
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[];
    cursor?: HintWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[];
  };

  /**
   * Student.receivedHints
   */
  export type Student$receivedHintsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null;
    where?: HintWhereInput;
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[];
    cursor?: HintWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[];
  };

  /**
   * Student without action
   */
  export type StudentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
  };

  /**
   * Model Hint
   */

  export type AggregateHint = {
    _count: HintCountAggregateOutputType | null;
    _avg: HintAvgAggregateOutputType | null;
    _sum: HintSumAggregateOutputType | null;
    _min: HintMinAggregateOutputType | null;
    _max: HintMaxAggregateOutputType | null;
  };

  export type HintAvgAggregateOutputType = {
    id: number | null;
    order: number | null;
    seniorId: number | null;
    juniorId: number | null;
  };

  export type HintSumAggregateOutputType = {
    id: number | null;
    order: number | null;
    seniorId: number | null;
    juniorId: number | null;
  };

  export type HintMinAggregateOutputType = {
    id: number | null;
    content: string | null;
    revealDate: Date | null;
    order: number | null;
    seniorId: number | null;
    juniorId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type HintMaxAggregateOutputType = {
    id: number | null;
    content: string | null;
    revealDate: Date | null;
    order: number | null;
    seniorId: number | null;
    juniorId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type HintCountAggregateOutputType = {
    id: number;
    content: number;
    revealDate: number;
    order: number;
    seniorId: number;
    juniorId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type HintAvgAggregateInputType = {
    id?: true;
    order?: true;
    seniorId?: true;
    juniorId?: true;
  };

  export type HintSumAggregateInputType = {
    id?: true;
    order?: true;
    seniorId?: true;
    juniorId?: true;
  };

  export type HintMinAggregateInputType = {
    id?: true;
    content?: true;
    revealDate?: true;
    order?: true;
    seniorId?: true;
    juniorId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type HintMaxAggregateInputType = {
    id?: true;
    content?: true;
    revealDate?: true;
    order?: true;
    seniorId?: true;
    juniorId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type HintCountAggregateInputType = {
    id?: true;
    content?: true;
    revealDate?: true;
    order?: true;
    seniorId?: true;
    juniorId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type HintAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Hint to aggregate.
     */
    where?: HintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: HintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Hints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Hints
     **/
    _count?: true | HintCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: HintAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: HintSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: HintMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: HintMaxAggregateInputType;
  };

  export type GetHintAggregateType<T extends HintAggregateArgs> = {
    [P in keyof T & keyof AggregateHint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHint[P]>
      : GetScalarType<T[P], AggregateHint[P]>;
  };

  export type HintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: HintWhereInput;
      orderBy?: HintOrderByWithAggregationInput | HintOrderByWithAggregationInput[];
      by: HintScalarFieldEnum[] | HintScalarFieldEnum;
      having?: HintScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: HintCountAggregateInputType | true;
      _avg?: HintAvgAggregateInputType;
      _sum?: HintSumAggregateInputType;
      _min?: HintMinAggregateInputType;
      _max?: HintMaxAggregateInputType;
    };

  export type HintGroupByOutputType = {
    id: number;
    content: string;
    revealDate: Date;
    order: number;
    seniorId: number;
    juniorId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: HintCountAggregateOutputType | null;
    _avg: HintAvgAggregateOutputType | null;
    _sum: HintSumAggregateOutputType | null;
    _min: HintMinAggregateOutputType | null;
    _max: HintMaxAggregateOutputType | null;
  };

  type GetHintGroupByPayload<T extends HintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HintGroupByOutputType, T['by']> & {
        [P in keyof T & keyof HintGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], HintGroupByOutputType[P]>
          : GetScalarType<T[P], HintGroupByOutputType[P]>;
      }
    >
  >;

  export type HintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        content?: boolean;
        revealDate?: boolean;
        order?: boolean;
        seniorId?: boolean;
        juniorId?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        senior?: boolean | StudentDefaultArgs<ExtArgs>;
        junior?: boolean | Hint$juniorArgs<ExtArgs>;
      },
      ExtArgs['result']['hint']
    >;

  export type HintSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      revealDate?: boolean;
      order?: boolean;
      seniorId?: boolean;
      juniorId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      senior?: boolean | StudentDefaultArgs<ExtArgs>;
      junior?: boolean | Hint$juniorArgs<ExtArgs>;
    },
    ExtArgs['result']['hint']
  >;

  export type HintSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      revealDate?: boolean;
      order?: boolean;
      seniorId?: boolean;
      juniorId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      senior?: boolean | StudentDefaultArgs<ExtArgs>;
      junior?: boolean | Hint$juniorArgs<ExtArgs>;
    },
    ExtArgs['result']['hint']
  >;

  export type HintSelectScalar = {
    id?: boolean;
    content?: boolean;
    revealDate?: boolean;
    order?: boolean;
    seniorId?: boolean;
    juniorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type HintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'content'
      | 'revealDate'
      | 'order'
      | 'seniorId'
      | 'juniorId'
      | 'createdAt'
      | 'updatedAt',
      ExtArgs['result']['hint']
    >;
  export type HintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senior?: boolean | StudentDefaultArgs<ExtArgs>;
    junior?: boolean | Hint$juniorArgs<ExtArgs>;
  };
  export type HintIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    senior?: boolean | StudentDefaultArgs<ExtArgs>;
    junior?: boolean | Hint$juniorArgs<ExtArgs>;
  };
  export type HintIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    senior?: boolean | StudentDefaultArgs<ExtArgs>;
    junior?: boolean | Hint$juniorArgs<ExtArgs>;
  };

  export type $HintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Hint';
    objects: {
      senior: Prisma.$StudentPayload<ExtArgs>;
      junior: Prisma.$StudentPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        content: string;
        revealDate: Date;
        order: number;
        seniorId: number;
        juniorId: number | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['hint']
    >;
    composites: {};
  };

  type HintGetPayload<S extends boolean | null | undefined | HintDefaultArgs> = $Result.GetResult<
    Prisma.$HintPayload,
    S
  >;

  type HintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    HintFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: HintCountAggregateInputType | true;
  };

  export interface HintDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hint']; meta: { name: 'Hint' } };
    /**
     * Find zero or one Hint that matches the filter.
     * @param {HintFindUniqueArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HintFindUniqueArgs>(
      args: SelectSubset<T, HintFindUniqueArgs<ExtArgs>>,
    ): Prisma__HintClient<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Hint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HintFindUniqueOrThrowArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HintFindUniqueOrThrowArgs>(
      args: SelectSubset<T, HintFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__HintClient<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Hint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindFirstArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HintFindFirstArgs>(
      args?: SelectSubset<T, HintFindFirstArgs<ExtArgs>>,
    ): Prisma__HintClient<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Hint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindFirstOrThrowArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HintFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HintFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__HintClient<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Hints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hints
     * const hints = await prisma.hint.findMany()
     *
     * // Get first 10 Hints
     * const hints = await prisma.hint.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hintWithIdOnly = await prisma.hint.findMany({ select: { id: true } })
     *
     */
    findMany<T extends HintFindManyArgs>(
      args?: SelectSubset<T, HintFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Hint.
     * @param {HintCreateArgs} args - Arguments to create a Hint.
     * @example
     * // Create one Hint
     * const Hint = await prisma.hint.create({
     *   data: {
     *     // ... data to create a Hint
     *   }
     * })
     *
     */
    create<T extends HintCreateArgs>(
      args: SelectSubset<T, HintCreateArgs<ExtArgs>>,
    ): Prisma__HintClient<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Hints.
     * @param {HintCreateManyArgs} args - Arguments to create many Hints.
     * @example
     * // Create many Hints
     * const hint = await prisma.hint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends HintCreateManyArgs>(
      args?: SelectSubset<T, HintCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Hints and returns the data saved in the database.
     * @param {HintCreateManyAndReturnArgs} args - Arguments to create many Hints.
     * @example
     * // Create many Hints
     * const hint = await prisma.hint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Hints and only return the `id`
     * const hintWithIdOnly = await prisma.hint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends HintCreateManyAndReturnArgs>(
      args?: SelectSubset<T, HintCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Hint.
     * @param {HintDeleteArgs} args - Arguments to delete one Hint.
     * @example
     * // Delete one Hint
     * const Hint = await prisma.hint.delete({
     *   where: {
     *     // ... filter to delete one Hint
     *   }
     * })
     *
     */
    delete<T extends HintDeleteArgs>(
      args: SelectSubset<T, HintDeleteArgs<ExtArgs>>,
    ): Prisma__HintClient<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Hint.
     * @param {HintUpdateArgs} args - Arguments to update one Hint.
     * @example
     * // Update one Hint
     * const hint = await prisma.hint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends HintUpdateArgs>(
      args: SelectSubset<T, HintUpdateArgs<ExtArgs>>,
    ): Prisma__HintClient<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Hints.
     * @param {HintDeleteManyArgs} args - Arguments to filter Hints to delete.
     * @example
     * // Delete a few Hints
     * const { count } = await prisma.hint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends HintDeleteManyArgs>(
      args?: SelectSubset<T, HintDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Hints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hints
     * const hint = await prisma.hint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends HintUpdateManyArgs>(
      args: SelectSubset<T, HintUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Hints and returns the data updated in the database.
     * @param {HintUpdateManyAndReturnArgs} args - Arguments to update many Hints.
     * @example
     * // Update many Hints
     * const hint = await prisma.hint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Hints and only return the `id`
     * const hintWithIdOnly = await prisma.hint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends HintUpdateManyAndReturnArgs>(
      args: SelectSubset<T, HintUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Hint.
     * @param {HintUpsertArgs} args - Arguments to update or create a Hint.
     * @example
     * // Update or create a Hint
     * const hint = await prisma.hint.upsert({
     *   create: {
     *     // ... data to create a Hint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hint we want to update
     *   }
     * })
     */
    upsert<T extends HintUpsertArgs>(
      args: SelectSubset<T, HintUpsertArgs<ExtArgs>>,
    ): Prisma__HintClient<
      $Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Hints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintCountArgs} args - Arguments to filter Hints to count.
     * @example
     * // Count the number of Hints
     * const count = await prisma.hint.count({
     *   where: {
     *     // ... the filter for the Hints we want to count
     *   }
     * })
     **/
    count<T extends HintCountArgs>(
      args?: Subset<T, HintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HintCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Hint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends HintAggregateArgs>(
      args: Subset<T, HintAggregateArgs>,
    ): Prisma.PrismaPromise<GetHintAggregateType<T>>;

    /**
     * Group by Hint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends HintGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HintGroupByArgs['orderBy'] }
        : { orderBy?: HintGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, HintGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Hint model
     */
    readonly fields: HintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HintClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    senior<T extends StudentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, StudentDefaultArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      | $Result.GetResult<
          Prisma.$StudentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    junior<T extends Hint$juniorArgs<ExtArgs> = {}>(
      args?: Subset<T, Hint$juniorArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<
        Prisma.$StudentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Hint model
   */
  interface HintFieldRefs {
    readonly id: FieldRef<'Hint', 'Int'>;
    readonly content: FieldRef<'Hint', 'String'>;
    readonly revealDate: FieldRef<'Hint', 'DateTime'>;
    readonly order: FieldRef<'Hint', 'Int'>;
    readonly seniorId: FieldRef<'Hint', 'Int'>;
    readonly juniorId: FieldRef<'Hint', 'Int'>;
    readonly createdAt: FieldRef<'Hint', 'DateTime'>;
    readonly updatedAt: FieldRef<'Hint', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Hint findUnique
   */
  export type HintFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null;
    /**
     * Filter, which Hint to fetch.
     */
    where: HintWhereUniqueInput;
  };

  /**
   * Hint findUniqueOrThrow
   */
  export type HintFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null;
    /**
     * Filter, which Hint to fetch.
     */
    where: HintWhereUniqueInput;
  };

  /**
   * Hint findFirst
   */
  export type HintFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null;
    /**
     * Filter, which Hint to fetch.
     */
    where?: HintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Hints.
     */
    cursor?: HintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Hints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Hints.
     */
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[];
  };

  /**
   * Hint findFirstOrThrow
   */
  export type HintFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null;
    /**
     * Filter, which Hint to fetch.
     */
    where?: HintWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Hints.
     */
    cursor?: HintWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Hints.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Hints.
     */
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[];
  };

  /**
   * Hint findMany
   */
  export type HintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Hint
       */
      select?: HintSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Hint
       */
      omit?: HintOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: HintInclude<ExtArgs> | null;
      /**
       * Filter, which Hints to fetch.
       */
      where?: HintWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Hints to fetch.
       */
      orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Hints.
       */
      cursor?: HintWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Hints from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Hints.
       */
      skip?: number;
      distinct?: HintScalarFieldEnum | HintScalarFieldEnum[];
    };

  /**
   * Hint create
   */
  export type HintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null;
    /**
     * The data needed to create a Hint.
     */
    data: XOR<HintCreateInput, HintUncheckedCreateInput>;
  };

  /**
   * Hint createMany
   */
  export type HintCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Hints.
     */
    data: HintCreateManyInput | HintCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Hint createManyAndReturn
   */
  export type HintCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * The data used to create many Hints.
     */
    data: HintCreateManyInput | HintCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Hint update
   */
  export type HintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null;
    /**
     * The data needed to update a Hint.
     */
    data: XOR<HintUpdateInput, HintUncheckedUpdateInput>;
    /**
     * Choose, which Hint to update.
     */
    where: HintWhereUniqueInput;
  };

  /**
   * Hint updateMany
   */
  export type HintUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Hints.
     */
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyInput>;
    /**
     * Filter which Hints to update
     */
    where?: HintWhereInput;
    /**
     * Limit how many Hints to update.
     */
    limit?: number;
  };

  /**
   * Hint updateManyAndReturn
   */
  export type HintUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * The data used to update Hints.
     */
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyInput>;
    /**
     * Filter which Hints to update
     */
    where?: HintWhereInput;
    /**
     * Limit how many Hints to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Hint upsert
   */
  export type HintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null;
    /**
     * The filter to search for the Hint to update in case it exists.
     */
    where: HintWhereUniqueInput;
    /**
     * In case the Hint found by the `where` argument doesn't exist, create a new Hint with this data.
     */
    create: XOR<HintCreateInput, HintUncheckedCreateInput>;
    /**
     * In case the Hint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HintUpdateInput, HintUncheckedUpdateInput>;
  };

  /**
   * Hint delete
   */
  export type HintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null;
    /**
     * Filter which Hint to delete.
     */
    where: HintWhereUniqueInput;
  };

  /**
   * Hint deleteMany
   */
  export type HintDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Hints to delete
     */
    where?: HintWhereInput;
    /**
     * Limit how many Hints to delete.
     */
    limit?: number;
  };

  /**
   * Hint.junior
   */
  export type Hint$juniorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Student
       */
      select?: StudentSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Student
       */
      omit?: StudentOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: StudentInclude<ExtArgs> | null;
      where?: StudentWhereInput;
    };

  /**
   * Hint without action
   */
  export type HintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Hint
       */
      select?: HintSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Hint
       */
      omit?: HintOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: HintInclude<ExtArgs> | null;
    };

  /**
   * Model Mentor
   */

  export type AggregateMentor = {
    _count: MentorCountAggregateOutputType | null;
    _avg: MentorAvgAggregateOutputType | null;
    _sum: MentorSumAggregateOutputType | null;
    _min: MentorMinAggregateOutputType | null;
    _max: MentorMaxAggregateOutputType | null;
  };

  export type MentorAvgAggregateOutputType = {
    id: number | null;
    seniorId: number | null;
    juniorId: number | null;
  };

  export type MentorSumAggregateOutputType = {
    id: number | null;
    seniorId: number | null;
    juniorId: number | null;
  };

  export type MentorMinAggregateOutputType = {
    id: number | null;
    seniorId: number | null;
    juniorId: number | null;
    isFound: boolean | null;
    foundAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MentorMaxAggregateOutputType = {
    id: number | null;
    seniorId: number | null;
    juniorId: number | null;
    isFound: boolean | null;
    foundAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MentorCountAggregateOutputType = {
    id: number;
    seniorId: number;
    juniorId: number;
    isFound: number;
    foundAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type MentorAvgAggregateInputType = {
    id?: true;
    seniorId?: true;
    juniorId?: true;
  };

  export type MentorSumAggregateInputType = {
    id?: true;
    seniorId?: true;
    juniorId?: true;
  };

  export type MentorMinAggregateInputType = {
    id?: true;
    seniorId?: true;
    juniorId?: true;
    isFound?: true;
    foundAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MentorMaxAggregateInputType = {
    id?: true;
    seniorId?: true;
    juniorId?: true;
    isFound?: true;
    foundAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MentorCountAggregateInputType = {
    id?: true;
    seniorId?: true;
    juniorId?: true;
    isFound?: true;
    foundAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type MentorAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Mentor to aggregate.
     */
    where?: MentorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MentorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mentors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Mentors
     **/
    _count?: true | MentorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MentorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MentorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MentorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MentorMaxAggregateInputType;
  };

  export type GetMentorAggregateType<T extends MentorAggregateArgs> = {
    [P in keyof T & keyof AggregateMentor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentor[P]>
      : GetScalarType<T[P], AggregateMentor[P]>;
  };

  export type MentorGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MentorWhereInput;
    orderBy?: MentorOrderByWithAggregationInput | MentorOrderByWithAggregationInput[];
    by: MentorScalarFieldEnum[] | MentorScalarFieldEnum;
    having?: MentorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MentorCountAggregateInputType | true;
    _avg?: MentorAvgAggregateInputType;
    _sum?: MentorSumAggregateInputType;
    _min?: MentorMinAggregateInputType;
    _max?: MentorMaxAggregateInputType;
  };

  export type MentorGroupByOutputType = {
    id: number;
    seniorId: number;
    juniorId: number;
    isFound: boolean;
    foundAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MentorCountAggregateOutputType | null;
    _avg: MentorAvgAggregateOutputType | null;
    _sum: MentorSumAggregateOutputType | null;
    _min: MentorMinAggregateOutputType | null;
    _max: MentorMaxAggregateOutputType | null;
  };

  type GetMentorGroupByPayload<T extends MentorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MentorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MentorGroupByOutputType[P]>
          : GetScalarType<T[P], MentorGroupByOutputType[P]>;
      }
    >
  >;

  export type MentorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        seniorId?: boolean;
        juniorId?: boolean;
        isFound?: boolean;
        foundAt?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        senior?: boolean | StudentDefaultArgs<ExtArgs>;
        junior?: boolean | StudentDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['mentor']
    >;

  export type MentorSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      seniorId?: boolean;
      juniorId?: boolean;
      isFound?: boolean;
      foundAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      senior?: boolean | StudentDefaultArgs<ExtArgs>;
      junior?: boolean | StudentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['mentor']
  >;

  export type MentorSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      seniorId?: boolean;
      juniorId?: boolean;
      isFound?: boolean;
      foundAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      senior?: boolean | StudentDefaultArgs<ExtArgs>;
      junior?: boolean | StudentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['mentor']
  >;

  export type MentorSelectScalar = {
    id?: boolean;
    seniorId?: boolean;
    juniorId?: boolean;
    isFound?: boolean;
    foundAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type MentorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'seniorId' | 'juniorId' | 'isFound' | 'foundAt' | 'createdAt' | 'updatedAt',
      ExtArgs['result']['mentor']
    >;
  export type MentorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senior?: boolean | StudentDefaultArgs<ExtArgs>;
    junior?: boolean | StudentDefaultArgs<ExtArgs>;
  };
  export type MentorIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    senior?: boolean | StudentDefaultArgs<ExtArgs>;
    junior?: boolean | StudentDefaultArgs<ExtArgs>;
  };
  export type MentorIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    senior?: boolean | StudentDefaultArgs<ExtArgs>;
    junior?: boolean | StudentDefaultArgs<ExtArgs>;
  };

  export type $MentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Mentor';
    objects: {
      senior: Prisma.$StudentPayload<ExtArgs>;
      junior: Prisma.$StudentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        seniorId: number;
        juniorId: number;
        isFound: boolean;
        foundAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['mentor']
    >;
    composites: {};
  };

  type MentorGetPayload<S extends boolean | null | undefined | MentorDefaultArgs> =
    $Result.GetResult<Prisma.$MentorPayload, S>;

  type MentorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    MentorFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MentorCountAggregateInputType | true;
  };

  export interface MentorDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mentor']; meta: { name: 'Mentor' } };
    /**
     * Find zero or one Mentor that matches the filter.
     * @param {MentorFindUniqueArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentorFindUniqueArgs>(
      args: SelectSubset<T, MentorFindUniqueArgs<ExtArgs>>,
    ): Prisma__MentorClient<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Mentor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentorFindUniqueOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentorFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MentorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MentorClient<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Mentor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindFirstArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentorFindFirstArgs>(
      args?: SelectSubset<T, MentorFindFirstArgs<ExtArgs>>,
    ): Prisma__MentorClient<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Mentor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindFirstOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MentorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MentorClient<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Mentors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentors
     * const mentors = await prisma.mentor.findMany()
     *
     * // Get first 10 Mentors
     * const mentors = await prisma.mentor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mentorWithIdOnly = await prisma.mentor.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MentorFindManyArgs>(
      args?: SelectSubset<T, MentorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Mentor.
     * @param {MentorCreateArgs} args - Arguments to create a Mentor.
     * @example
     * // Create one Mentor
     * const Mentor = await prisma.mentor.create({
     *   data: {
     *     // ... data to create a Mentor
     *   }
     * })
     *
     */
    create<T extends MentorCreateArgs>(
      args: SelectSubset<T, MentorCreateArgs<ExtArgs>>,
    ): Prisma__MentorClient<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Mentors.
     * @param {MentorCreateManyArgs} args - Arguments to create many Mentors.
     * @example
     * // Create many Mentors
     * const mentor = await prisma.mentor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MentorCreateManyArgs>(
      args?: SelectSubset<T, MentorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Mentors and returns the data saved in the database.
     * @param {MentorCreateManyAndReturnArgs} args - Arguments to create many Mentors.
     * @example
     * // Create many Mentors
     * const mentor = await prisma.mentor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Mentors and only return the `id`
     * const mentorWithIdOnly = await prisma.mentor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MentorCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MentorCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Mentor.
     * @param {MentorDeleteArgs} args - Arguments to delete one Mentor.
     * @example
     * // Delete one Mentor
     * const Mentor = await prisma.mentor.delete({
     *   where: {
     *     // ... filter to delete one Mentor
     *   }
     * })
     *
     */
    delete<T extends MentorDeleteArgs>(
      args: SelectSubset<T, MentorDeleteArgs<ExtArgs>>,
    ): Prisma__MentorClient<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Mentor.
     * @param {MentorUpdateArgs} args - Arguments to update one Mentor.
     * @example
     * // Update one Mentor
     * const mentor = await prisma.mentor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MentorUpdateArgs>(
      args: SelectSubset<T, MentorUpdateArgs<ExtArgs>>,
    ): Prisma__MentorClient<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Mentors.
     * @param {MentorDeleteManyArgs} args - Arguments to filter Mentors to delete.
     * @example
     * // Delete a few Mentors
     * const { count } = await prisma.mentor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MentorDeleteManyArgs>(
      args?: SelectSubset<T, MentorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MentorUpdateManyArgs>(
      args: SelectSubset<T, MentorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Mentors and returns the data updated in the database.
     * @param {MentorUpdateManyAndReturnArgs} args - Arguments to update many Mentors.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Mentors and only return the `id`
     * const mentorWithIdOnly = await prisma.mentor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MentorUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MentorUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Mentor.
     * @param {MentorUpsertArgs} args - Arguments to update or create a Mentor.
     * @example
     * // Update or create a Mentor
     * const mentor = await prisma.mentor.upsert({
     *   create: {
     *     // ... data to create a Mentor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mentor we want to update
     *   }
     * })
     */
    upsert<T extends MentorUpsertArgs>(
      args: SelectSubset<T, MentorUpsertArgs<ExtArgs>>,
    ): Prisma__MentorClient<
      $Result.GetResult<Prisma.$MentorPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCountArgs} args - Arguments to filter Mentors to count.
     * @example
     * // Count the number of Mentors
     * const count = await prisma.mentor.count({
     *   where: {
     *     // ... the filter for the Mentors we want to count
     *   }
     * })
     **/
    count<T extends MentorCountArgs>(
      args?: Subset<T, MentorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MentorAggregateArgs>(
      args: Subset<T, MentorAggregateArgs>,
    ): Prisma.PrismaPromise<GetMentorAggregateType<T>>;

    /**
     * Group by Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MentorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorGroupByArgs['orderBy'] }
        : { orderBy?: MentorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MentorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMentorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Mentor model
     */
    readonly fields: MentorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mentor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    senior<T extends StudentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, StudentDefaultArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      | $Result.GetResult<
          Prisma.$StudentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    junior<T extends StudentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, StudentDefaultArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      | $Result.GetResult<
          Prisma.$StudentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Mentor model
   */
  interface MentorFieldRefs {
    readonly id: FieldRef<'Mentor', 'Int'>;
    readonly seniorId: FieldRef<'Mentor', 'Int'>;
    readonly juniorId: FieldRef<'Mentor', 'Int'>;
    readonly isFound: FieldRef<'Mentor', 'Boolean'>;
    readonly foundAt: FieldRef<'Mentor', 'DateTime'>;
    readonly createdAt: FieldRef<'Mentor', 'DateTime'>;
    readonly updatedAt: FieldRef<'Mentor', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Mentor findUnique
   */
  export type MentorFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null;
    /**
     * Filter, which Mentor to fetch.
     */
    where: MentorWhereUniqueInput;
  };

  /**
   * Mentor findUniqueOrThrow
   */
  export type MentorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null;
    /**
     * Filter, which Mentor to fetch.
     */
    where: MentorWhereUniqueInput;
  };

  /**
   * Mentor findFirst
   */
  export type MentorFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null;
    /**
     * Filter, which Mentor to fetch.
     */
    where?: MentorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Mentors.
     */
    cursor?: MentorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mentors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[];
  };

  /**
   * Mentor findFirstOrThrow
   */
  export type MentorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null;
    /**
     * Filter, which Mentor to fetch.
     */
    where?: MentorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Mentors.
     */
    cursor?: MentorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mentors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[];
  };

  /**
   * Mentor findMany
   */
  export type MentorFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null;
    /**
     * Filter, which Mentors to fetch.
     */
    where?: MentorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Mentors to fetch.
     */
    orderBy?: MentorOrderByWithRelationInput | MentorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Mentors.
     */
    cursor?: MentorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Mentors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Mentors.
     */
    skip?: number;
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[];
  };

  /**
   * Mentor create
   */
  export type MentorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Mentor
       */
      select?: MentorSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Mentor
       */
      omit?: MentorOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: MentorInclude<ExtArgs> | null;
      /**
       * The data needed to create a Mentor.
       */
      data: XOR<MentorCreateInput, MentorUncheckedCreateInput>;
    };

  /**
   * Mentor createMany
   */
  export type MentorCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Mentors.
     */
    data: MentorCreateManyInput | MentorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Mentor createManyAndReturn
   */
  export type MentorCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null;
    /**
     * The data used to create many Mentors.
     */
    data: MentorCreateManyInput | MentorCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Mentor update
   */
  export type MentorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Mentor
       */
      select?: MentorSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Mentor
       */
      omit?: MentorOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: MentorInclude<ExtArgs> | null;
      /**
       * The data needed to update a Mentor.
       */
      data: XOR<MentorUpdateInput, MentorUncheckedUpdateInput>;
      /**
       * Choose, which Mentor to update.
       */
      where: MentorWhereUniqueInput;
    };

  /**
   * Mentor updateMany
   */
  export type MentorUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Mentors.
     */
    data: XOR<MentorUpdateManyMutationInput, MentorUncheckedUpdateManyInput>;
    /**
     * Filter which Mentors to update
     */
    where?: MentorWhereInput;
    /**
     * Limit how many Mentors to update.
     */
    limit?: number;
  };

  /**
   * Mentor updateManyAndReturn
   */
  export type MentorUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null;
    /**
     * The data used to update Mentors.
     */
    data: XOR<MentorUpdateManyMutationInput, MentorUncheckedUpdateManyInput>;
    /**
     * Filter which Mentors to update
     */
    where?: MentorWhereInput;
    /**
     * Limit how many Mentors to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Mentor upsert
   */
  export type MentorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Mentor
       */
      select?: MentorSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Mentor
       */
      omit?: MentorOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: MentorInclude<ExtArgs> | null;
      /**
       * The filter to search for the Mentor to update in case it exists.
       */
      where: MentorWhereUniqueInput;
      /**
       * In case the Mentor found by the `where` argument doesn't exist, create a new Mentor with this data.
       */
      create: XOR<MentorCreateInput, MentorUncheckedCreateInput>;
      /**
       * In case the Mentor was found with the provided `where` argument, update it with this data.
       */
      update: XOR<MentorUpdateInput, MentorUncheckedUpdateInput>;
    };

  /**
   * Mentor delete
   */
  export type MentorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Mentor
       */
      select?: MentorSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Mentor
       */
      omit?: MentorOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: MentorInclude<ExtArgs> | null;
      /**
       * Filter which Mentor to delete.
       */
      where: MentorWhereUniqueInput;
    };

  /**
   * Mentor deleteMany
   */
  export type MentorDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Mentors to delete
     */
    where?: MentorWhereInput;
    /**
     * Limit how many Mentors to delete.
     */
    limit?: number;
  };

  /**
   * Mentor without action
   */
  export type MentorDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Mentor
     */
    select?: MentorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Mentor
     */
    omit?: MentorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentorInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const StudentScalarFieldEnum: {
    id: 'id';
    microsoftId: 'microsoftId';
    email: 'email';
    studentId: 'studentId';
    displayName: 'displayName';
    nickname: 'nickname';
    profilePic: 'profilePic';
    house: 'house';
    instagram: 'instagram';
    nationality: 'nationality';
    role: 'role';
    isSenior: 'isSenior';
    lives: 'lives';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type StudentScalarFieldEnum =
    (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];

  export const HintScalarFieldEnum: {
    id: 'id';
    content: 'content';
    revealDate: 'revealDate';
    order: 'order';
    seniorId: 'seniorId';
    juniorId: 'juniorId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type HintScalarFieldEnum = (typeof HintScalarFieldEnum)[keyof typeof HintScalarFieldEnum];

  export const MentorScalarFieldEnum: {
    id: 'id';
    seniorId: 'seniorId';
    juniorId: 'juniorId';
    isFound: 'isFound';
    foundAt: 'foundAt';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type MentorScalarFieldEnum =
    (typeof MentorScalarFieldEnum)[keyof typeof MentorScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'ROLE'
   */
  export type EnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE'>;

  /**
   * Reference to a field of type 'ROLE[]'
   */
  export type ListEnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[];
    OR?: StudentWhereInput[];
    NOT?: StudentWhereInput | StudentWhereInput[];
    id?: IntFilter<'Student'> | number;
    microsoftId?: StringNullableFilter<'Student'> | string | null;
    email?: StringFilter<'Student'> | string;
    studentId?: StringNullableFilter<'Student'> | string | null;
    displayName?: StringFilter<'Student'> | string;
    nickname?: StringNullableFilter<'Student'> | string | null;
    profilePic?: StringNullableFilter<'Student'> | string | null;
    house?: StringNullableFilter<'Student'> | string | null;
    instagram?: StringNullableFilter<'Student'> | string | null;
    nationality?: StringNullableFilter<'Student'> | string | null;
    role?: EnumROLEFilter<'Student'> | $Enums.ROLE;
    isSenior?: BoolFilter<'Student'> | boolean;
    lives?: IntNullableFilter<'Student'> | number | null;
    createdAt?: DateTimeFilter<'Student'> | Date | string;
    updatedAt?: DateTimeFilter<'Student'> | Date | string;
    mentor?: XOR<MentorNullableScalarRelationFilter, MentorWhereInput> | null;
    mentees?: MentorListRelationFilter;
    givenHints?: HintListRelationFilter;
    receivedHints?: HintListRelationFilter;
  };

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder;
    microsoftId?: SortOrderInput | SortOrder;
    email?: SortOrder;
    studentId?: SortOrderInput | SortOrder;
    displayName?: SortOrder;
    nickname?: SortOrderInput | SortOrder;
    profilePic?: SortOrderInput | SortOrder;
    house?: SortOrderInput | SortOrder;
    instagram?: SortOrderInput | SortOrder;
    nationality?: SortOrderInput | SortOrder;
    role?: SortOrder;
    isSenior?: SortOrder;
    lives?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    mentor?: MentorOrderByWithRelationInput;
    mentees?: MentorOrderByRelationAggregateInput;
    givenHints?: HintOrderByRelationAggregateInput;
    receivedHints?: HintOrderByRelationAggregateInput;
  };

  export type StudentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      microsoftId?: string;
      email?: string;
      studentId?: string;
      AND?: StudentWhereInput | StudentWhereInput[];
      OR?: StudentWhereInput[];
      NOT?: StudentWhereInput | StudentWhereInput[];
      displayName?: StringFilter<'Student'> | string;
      nickname?: StringNullableFilter<'Student'> | string | null;
      profilePic?: StringNullableFilter<'Student'> | string | null;
      house?: StringNullableFilter<'Student'> | string | null;
      instagram?: StringNullableFilter<'Student'> | string | null;
      nationality?: StringNullableFilter<'Student'> | string | null;
      role?: EnumROLEFilter<'Student'> | $Enums.ROLE;
      isSenior?: BoolFilter<'Student'> | boolean;
      lives?: IntNullableFilter<'Student'> | number | null;
      createdAt?: DateTimeFilter<'Student'> | Date | string;
      updatedAt?: DateTimeFilter<'Student'> | Date | string;
      mentor?: XOR<MentorNullableScalarRelationFilter, MentorWhereInput> | null;
      mentees?: MentorListRelationFilter;
      givenHints?: HintListRelationFilter;
      receivedHints?: HintListRelationFilter;
    },
    'id' | 'microsoftId' | 'email' | 'studentId'
  >;

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder;
    microsoftId?: SortOrderInput | SortOrder;
    email?: SortOrder;
    studentId?: SortOrderInput | SortOrder;
    displayName?: SortOrder;
    nickname?: SortOrderInput | SortOrder;
    profilePic?: SortOrderInput | SortOrder;
    house?: SortOrderInput | SortOrder;
    instagram?: SortOrderInput | SortOrder;
    nationality?: SortOrderInput | SortOrder;
    role?: SortOrder;
    isSenior?: SortOrder;
    lives?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: StudentCountOrderByAggregateInput;
    _avg?: StudentAvgOrderByAggregateInput;
    _max?: StudentMaxOrderByAggregateInput;
    _min?: StudentMinOrderByAggregateInput;
    _sum?: StudentSumOrderByAggregateInput;
  };

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[];
    OR?: StudentScalarWhereWithAggregatesInput[];
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Student'> | number;
    microsoftId?: StringNullableWithAggregatesFilter<'Student'> | string | null;
    email?: StringWithAggregatesFilter<'Student'> | string;
    studentId?: StringNullableWithAggregatesFilter<'Student'> | string | null;
    displayName?: StringWithAggregatesFilter<'Student'> | string;
    nickname?: StringNullableWithAggregatesFilter<'Student'> | string | null;
    profilePic?: StringNullableWithAggregatesFilter<'Student'> | string | null;
    house?: StringNullableWithAggregatesFilter<'Student'> | string | null;
    instagram?: StringNullableWithAggregatesFilter<'Student'> | string | null;
    nationality?: StringNullableWithAggregatesFilter<'Student'> | string | null;
    role?: EnumROLEWithAggregatesFilter<'Student'> | $Enums.ROLE;
    isSenior?: BoolWithAggregatesFilter<'Student'> | boolean;
    lives?: IntNullableWithAggregatesFilter<'Student'> | number | null;
    createdAt?: DateTimeWithAggregatesFilter<'Student'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Student'> | Date | string;
  };

  export type HintWhereInput = {
    AND?: HintWhereInput | HintWhereInput[];
    OR?: HintWhereInput[];
    NOT?: HintWhereInput | HintWhereInput[];
    id?: IntFilter<'Hint'> | number;
    content?: StringFilter<'Hint'> | string;
    revealDate?: DateTimeFilter<'Hint'> | Date | string;
    order?: IntFilter<'Hint'> | number;
    seniorId?: IntFilter<'Hint'> | number;
    juniorId?: IntNullableFilter<'Hint'> | number | null;
    createdAt?: DateTimeFilter<'Hint'> | Date | string;
    updatedAt?: DateTimeFilter<'Hint'> | Date | string;
    senior?: XOR<StudentScalarRelationFilter, StudentWhereInput>;
    junior?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null;
  };

  export type HintOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    revealDate?: SortOrder;
    order?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    senior?: StudentOrderByWithRelationInput;
    junior?: StudentOrderByWithRelationInput;
  };

  export type HintWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: HintWhereInput | HintWhereInput[];
      OR?: HintWhereInput[];
      NOT?: HintWhereInput | HintWhereInput[];
      content?: StringFilter<'Hint'> | string;
      revealDate?: DateTimeFilter<'Hint'> | Date | string;
      order?: IntFilter<'Hint'> | number;
      seniorId?: IntFilter<'Hint'> | number;
      juniorId?: IntNullableFilter<'Hint'> | number | null;
      createdAt?: DateTimeFilter<'Hint'> | Date | string;
      updatedAt?: DateTimeFilter<'Hint'> | Date | string;
      senior?: XOR<StudentScalarRelationFilter, StudentWhereInput>;
      junior?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null;
    },
    'id'
  >;

  export type HintOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    revealDate?: SortOrder;
    order?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: HintCountOrderByAggregateInput;
    _avg?: HintAvgOrderByAggregateInput;
    _max?: HintMaxOrderByAggregateInput;
    _min?: HintMinOrderByAggregateInput;
    _sum?: HintSumOrderByAggregateInput;
  };

  export type HintScalarWhereWithAggregatesInput = {
    AND?: HintScalarWhereWithAggregatesInput | HintScalarWhereWithAggregatesInput[];
    OR?: HintScalarWhereWithAggregatesInput[];
    NOT?: HintScalarWhereWithAggregatesInput | HintScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Hint'> | number;
    content?: StringWithAggregatesFilter<'Hint'> | string;
    revealDate?: DateTimeWithAggregatesFilter<'Hint'> | Date | string;
    order?: IntWithAggregatesFilter<'Hint'> | number;
    seniorId?: IntWithAggregatesFilter<'Hint'> | number;
    juniorId?: IntNullableWithAggregatesFilter<'Hint'> | number | null;
    createdAt?: DateTimeWithAggregatesFilter<'Hint'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Hint'> | Date | string;
  };

  export type MentorWhereInput = {
    AND?: MentorWhereInput | MentorWhereInput[];
    OR?: MentorWhereInput[];
    NOT?: MentorWhereInput | MentorWhereInput[];
    id?: IntFilter<'Mentor'> | number;
    seniorId?: IntFilter<'Mentor'> | number;
    juniorId?: IntFilter<'Mentor'> | number;
    isFound?: BoolFilter<'Mentor'> | boolean;
    foundAt?: DateTimeNullableFilter<'Mentor'> | Date | string | null;
    createdAt?: DateTimeFilter<'Mentor'> | Date | string;
    updatedAt?: DateTimeFilter<'Mentor'> | Date | string;
    senior?: XOR<StudentScalarRelationFilter, StudentWhereInput>;
    junior?: XOR<StudentScalarRelationFilter, StudentWhereInput>;
  };

  export type MentorOrderByWithRelationInput = {
    id?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
    isFound?: SortOrder;
    foundAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    senior?: StudentOrderByWithRelationInput;
    junior?: StudentOrderByWithRelationInput;
  };

  export type MentorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      juniorId?: number;
      seniorId_juniorId?: MentorSeniorIdJuniorIdCompoundUniqueInput;
      AND?: MentorWhereInput | MentorWhereInput[];
      OR?: MentorWhereInput[];
      NOT?: MentorWhereInput | MentorWhereInput[];
      seniorId?: IntFilter<'Mentor'> | number;
      isFound?: BoolFilter<'Mentor'> | boolean;
      foundAt?: DateTimeNullableFilter<'Mentor'> | Date | string | null;
      createdAt?: DateTimeFilter<'Mentor'> | Date | string;
      updatedAt?: DateTimeFilter<'Mentor'> | Date | string;
      senior?: XOR<StudentScalarRelationFilter, StudentWhereInput>;
      junior?: XOR<StudentScalarRelationFilter, StudentWhereInput>;
    },
    'id' | 'juniorId' | 'seniorId_juniorId'
  >;

  export type MentorOrderByWithAggregationInput = {
    id?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
    isFound?: SortOrder;
    foundAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: MentorCountOrderByAggregateInput;
    _avg?: MentorAvgOrderByAggregateInput;
    _max?: MentorMaxOrderByAggregateInput;
    _min?: MentorMinOrderByAggregateInput;
    _sum?: MentorSumOrderByAggregateInput;
  };

  export type MentorScalarWhereWithAggregatesInput = {
    AND?: MentorScalarWhereWithAggregatesInput | MentorScalarWhereWithAggregatesInput[];
    OR?: MentorScalarWhereWithAggregatesInput[];
    NOT?: MentorScalarWhereWithAggregatesInput | MentorScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Mentor'> | number;
    seniorId?: IntWithAggregatesFilter<'Mentor'> | number;
    juniorId?: IntWithAggregatesFilter<'Mentor'> | number;
    isFound?: BoolWithAggregatesFilter<'Mentor'> | boolean;
    foundAt?: DateTimeNullableWithAggregatesFilter<'Mentor'> | Date | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'Mentor'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Mentor'> | Date | string;
  };

  export type StudentCreateInput = {
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentor?: MentorCreateNestedOneWithoutJuniorInput;
    mentees?: MentorCreateNestedManyWithoutSeniorInput;
    givenHints?: HintCreateNestedManyWithoutSeniorInput;
    receivedHints?: HintCreateNestedManyWithoutJuniorInput;
  };

  export type StudentUncheckedCreateInput = {
    id?: number;
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentor?: MentorUncheckedCreateNestedOneWithoutJuniorInput;
    mentees?: MentorUncheckedCreateNestedManyWithoutSeniorInput;
    givenHints?: HintUncheckedCreateNestedManyWithoutSeniorInput;
    receivedHints?: HintUncheckedCreateNestedManyWithoutJuniorInput;
  };

  export type StudentUpdateInput = {
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mentor?: MentorUpdateOneWithoutJuniorNestedInput;
    mentees?: MentorUpdateManyWithoutSeniorNestedInput;
    givenHints?: HintUpdateManyWithoutSeniorNestedInput;
    receivedHints?: HintUpdateManyWithoutJuniorNestedInput;
  };

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mentor?: MentorUncheckedUpdateOneWithoutJuniorNestedInput;
    mentees?: MentorUncheckedUpdateManyWithoutSeniorNestedInput;
    givenHints?: HintUncheckedUpdateManyWithoutSeniorNestedInput;
    receivedHints?: HintUncheckedUpdateManyWithoutJuniorNestedInput;
  };

  export type StudentCreateManyInput = {
    id?: number;
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type StudentUpdateManyMutationInput = {
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type HintCreateInput = {
    content: string;
    revealDate: Date | string;
    order: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    senior: StudentCreateNestedOneWithoutGivenHintsInput;
    junior?: StudentCreateNestedOneWithoutReceivedHintsInput;
  };

  export type HintUncheckedCreateInput = {
    id?: number;
    content: string;
    revealDate: Date | string;
    order: number;
    seniorId: number;
    juniorId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type HintUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string;
    revealDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    senior?: StudentUpdateOneRequiredWithoutGivenHintsNestedInput;
    junior?: StudentUpdateOneWithoutReceivedHintsNestedInput;
  };

  export type HintUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    revealDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: IntFieldUpdateOperationsInput | number;
    seniorId?: IntFieldUpdateOperationsInput | number;
    juniorId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type HintCreateManyInput = {
    id?: number;
    content: string;
    revealDate: Date | string;
    order: number;
    seniorId: number;
    juniorId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type HintUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string;
    revealDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type HintUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    revealDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: IntFieldUpdateOperationsInput | number;
    seniorId?: IntFieldUpdateOperationsInput | number;
    juniorId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MentorCreateInput = {
    isFound?: boolean;
    foundAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    senior: StudentCreateNestedOneWithoutMenteesInput;
    junior: StudentCreateNestedOneWithoutMentorInput;
  };

  export type MentorUncheckedCreateInput = {
    id?: number;
    seniorId: number;
    juniorId: number;
    isFound?: boolean;
    foundAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MentorUpdateInput = {
    isFound?: BoolFieldUpdateOperationsInput | boolean;
    foundAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    senior?: StudentUpdateOneRequiredWithoutMenteesNestedInput;
    junior?: StudentUpdateOneRequiredWithoutMentorNestedInput;
  };

  export type MentorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    seniorId?: IntFieldUpdateOperationsInput | number;
    juniorId?: IntFieldUpdateOperationsInput | number;
    isFound?: BoolFieldUpdateOperationsInput | boolean;
    foundAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MentorCreateManyInput = {
    id?: number;
    seniorId: number;
    juniorId: number;
    isFound?: boolean;
    foundAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MentorUpdateManyMutationInput = {
    isFound?: BoolFieldUpdateOperationsInput | boolean;
    foundAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MentorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    seniorId?: IntFieldUpdateOperationsInput | number;
    juniorId?: IntFieldUpdateOperationsInput | number;
    isFound?: BoolFieldUpdateOperationsInput | boolean;
    foundAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type EnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>;
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>;
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type MentorNullableScalarRelationFilter = {
    is?: MentorWhereInput | null;
    isNot?: MentorWhereInput | null;
  };

  export type MentorListRelationFilter = {
    every?: MentorWhereInput;
    some?: MentorWhereInput;
    none?: MentorWhereInput;
  };

  export type HintListRelationFilter = {
    every?: HintWhereInput;
    some?: HintWhereInput;
    none?: HintWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type MentorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type HintOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder;
    microsoftId?: SortOrder;
    email?: SortOrder;
    studentId?: SortOrder;
    displayName?: SortOrder;
    nickname?: SortOrder;
    profilePic?: SortOrder;
    house?: SortOrder;
    instagram?: SortOrder;
    nationality?: SortOrder;
    role?: SortOrder;
    isSenior?: SortOrder;
    lives?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder;
    lives?: SortOrder;
  };

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder;
    microsoftId?: SortOrder;
    email?: SortOrder;
    studentId?: SortOrder;
    displayName?: SortOrder;
    nickname?: SortOrder;
    profilePic?: SortOrder;
    house?: SortOrder;
    instagram?: SortOrder;
    nationality?: SortOrder;
    role?: SortOrder;
    isSenior?: SortOrder;
    lives?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder;
    microsoftId?: SortOrder;
    email?: SortOrder;
    studentId?: SortOrder;
    displayName?: SortOrder;
    nickname?: SortOrder;
    profilePic?: SortOrder;
    house?: SortOrder;
    instagram?: SortOrder;
    nationality?: SortOrder;
    role?: SortOrder;
    isSenior?: SortOrder;
    lives?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder;
    lives?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type EnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>;
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>;
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumROLEFilter<$PrismaModel>;
    _max?: NestedEnumROLEFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput;
    isNot?: StudentWhereInput;
  };

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null;
    isNot?: StudentWhereInput | null;
  };

  export type HintCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    revealDate?: SortOrder;
    order?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type HintAvgOrderByAggregateInput = {
    id?: SortOrder;
    order?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
  };

  export type HintMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    revealDate?: SortOrder;
    order?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type HintMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    revealDate?: SortOrder;
    order?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type HintSumOrderByAggregateInput = {
    id?: SortOrder;
    order?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type MentorSeniorIdJuniorIdCompoundUniqueInput = {
    seniorId: number;
    juniorId: number;
  };

  export type MentorCountOrderByAggregateInput = {
    id?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
    isFound?: SortOrder;
    foundAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MentorAvgOrderByAggregateInput = {
    id?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
  };

  export type MentorMaxOrderByAggregateInput = {
    id?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
    isFound?: SortOrder;
    foundAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MentorMinOrderByAggregateInput = {
    id?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
    isFound?: SortOrder;
    foundAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MentorSumOrderByAggregateInput = {
    id?: SortOrder;
    seniorId?: SortOrder;
    juniorId?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type MentorCreateNestedOneWithoutJuniorInput = {
    create?: XOR<MentorCreateWithoutJuniorInput, MentorUncheckedCreateWithoutJuniorInput>;
    connectOrCreate?: MentorCreateOrConnectWithoutJuniorInput;
    connect?: MentorWhereUniqueInput;
  };

  export type MentorCreateNestedManyWithoutSeniorInput = {
    create?:
      | XOR<MentorCreateWithoutSeniorInput, MentorUncheckedCreateWithoutSeniorInput>
      | MentorCreateWithoutSeniorInput[]
      | MentorUncheckedCreateWithoutSeniorInput[];
    connectOrCreate?:
      | MentorCreateOrConnectWithoutSeniorInput
      | MentorCreateOrConnectWithoutSeniorInput[];
    createMany?: MentorCreateManySeniorInputEnvelope;
    connect?: MentorWhereUniqueInput | MentorWhereUniqueInput[];
  };

  export type HintCreateNestedManyWithoutSeniorInput = {
    create?:
      | XOR<HintCreateWithoutSeniorInput, HintUncheckedCreateWithoutSeniorInput>
      | HintCreateWithoutSeniorInput[]
      | HintUncheckedCreateWithoutSeniorInput[];
    connectOrCreate?:
      | HintCreateOrConnectWithoutSeniorInput
      | HintCreateOrConnectWithoutSeniorInput[];
    createMany?: HintCreateManySeniorInputEnvelope;
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[];
  };

  export type HintCreateNestedManyWithoutJuniorInput = {
    create?:
      | XOR<HintCreateWithoutJuniorInput, HintUncheckedCreateWithoutJuniorInput>
      | HintCreateWithoutJuniorInput[]
      | HintUncheckedCreateWithoutJuniorInput[];
    connectOrCreate?:
      | HintCreateOrConnectWithoutJuniorInput
      | HintCreateOrConnectWithoutJuniorInput[];
    createMany?: HintCreateManyJuniorInputEnvelope;
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[];
  };

  export type MentorUncheckedCreateNestedOneWithoutJuniorInput = {
    create?: XOR<MentorCreateWithoutJuniorInput, MentorUncheckedCreateWithoutJuniorInput>;
    connectOrCreate?: MentorCreateOrConnectWithoutJuniorInput;
    connect?: MentorWhereUniqueInput;
  };

  export type MentorUncheckedCreateNestedManyWithoutSeniorInput = {
    create?:
      | XOR<MentorCreateWithoutSeniorInput, MentorUncheckedCreateWithoutSeniorInput>
      | MentorCreateWithoutSeniorInput[]
      | MentorUncheckedCreateWithoutSeniorInput[];
    connectOrCreate?:
      | MentorCreateOrConnectWithoutSeniorInput
      | MentorCreateOrConnectWithoutSeniorInput[];
    createMany?: MentorCreateManySeniorInputEnvelope;
    connect?: MentorWhereUniqueInput | MentorWhereUniqueInput[];
  };

  export type HintUncheckedCreateNestedManyWithoutSeniorInput = {
    create?:
      | XOR<HintCreateWithoutSeniorInput, HintUncheckedCreateWithoutSeniorInput>
      | HintCreateWithoutSeniorInput[]
      | HintUncheckedCreateWithoutSeniorInput[];
    connectOrCreate?:
      | HintCreateOrConnectWithoutSeniorInput
      | HintCreateOrConnectWithoutSeniorInput[];
    createMany?: HintCreateManySeniorInputEnvelope;
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[];
  };

  export type HintUncheckedCreateNestedManyWithoutJuniorInput = {
    create?:
      | XOR<HintCreateWithoutJuniorInput, HintUncheckedCreateWithoutJuniorInput>
      | HintCreateWithoutJuniorInput[]
      | HintUncheckedCreateWithoutJuniorInput[];
    connectOrCreate?:
      | HintCreateOrConnectWithoutJuniorInput
      | HintCreateOrConnectWithoutJuniorInput[];
    createMany?: HintCreateManyJuniorInputEnvelope;
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type EnumROLEFieldUpdateOperationsInput = {
    set?: $Enums.ROLE;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type MentorUpdateOneWithoutJuniorNestedInput = {
    create?: XOR<MentorCreateWithoutJuniorInput, MentorUncheckedCreateWithoutJuniorInput>;
    connectOrCreate?: MentorCreateOrConnectWithoutJuniorInput;
    upsert?: MentorUpsertWithoutJuniorInput;
    disconnect?: MentorWhereInput | boolean;
    delete?: MentorWhereInput | boolean;
    connect?: MentorWhereUniqueInput;
    update?: XOR<
      XOR<MentorUpdateToOneWithWhereWithoutJuniorInput, MentorUpdateWithoutJuniorInput>,
      MentorUncheckedUpdateWithoutJuniorInput
    >;
  };

  export type MentorUpdateManyWithoutSeniorNestedInput = {
    create?:
      | XOR<MentorCreateWithoutSeniorInput, MentorUncheckedCreateWithoutSeniorInput>
      | MentorCreateWithoutSeniorInput[]
      | MentorUncheckedCreateWithoutSeniorInput[];
    connectOrCreate?:
      | MentorCreateOrConnectWithoutSeniorInput
      | MentorCreateOrConnectWithoutSeniorInput[];
    upsert?:
      | MentorUpsertWithWhereUniqueWithoutSeniorInput
      | MentorUpsertWithWhereUniqueWithoutSeniorInput[];
    createMany?: MentorCreateManySeniorInputEnvelope;
    set?: MentorWhereUniqueInput | MentorWhereUniqueInput[];
    disconnect?: MentorWhereUniqueInput | MentorWhereUniqueInput[];
    delete?: MentorWhereUniqueInput | MentorWhereUniqueInput[];
    connect?: MentorWhereUniqueInput | MentorWhereUniqueInput[];
    update?:
      | MentorUpdateWithWhereUniqueWithoutSeniorInput
      | MentorUpdateWithWhereUniqueWithoutSeniorInput[];
    updateMany?:
      | MentorUpdateManyWithWhereWithoutSeniorInput
      | MentorUpdateManyWithWhereWithoutSeniorInput[];
    deleteMany?: MentorScalarWhereInput | MentorScalarWhereInput[];
  };

  export type HintUpdateManyWithoutSeniorNestedInput = {
    create?:
      | XOR<HintCreateWithoutSeniorInput, HintUncheckedCreateWithoutSeniorInput>
      | HintCreateWithoutSeniorInput[]
      | HintUncheckedCreateWithoutSeniorInput[];
    connectOrCreate?:
      | HintCreateOrConnectWithoutSeniorInput
      | HintCreateOrConnectWithoutSeniorInput[];
    upsert?:
      | HintUpsertWithWhereUniqueWithoutSeniorInput
      | HintUpsertWithWhereUniqueWithoutSeniorInput[];
    createMany?: HintCreateManySeniorInputEnvelope;
    set?: HintWhereUniqueInput | HintWhereUniqueInput[];
    disconnect?: HintWhereUniqueInput | HintWhereUniqueInput[];
    delete?: HintWhereUniqueInput | HintWhereUniqueInput[];
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[];
    update?:
      | HintUpdateWithWhereUniqueWithoutSeniorInput
      | HintUpdateWithWhereUniqueWithoutSeniorInput[];
    updateMany?:
      | HintUpdateManyWithWhereWithoutSeniorInput
      | HintUpdateManyWithWhereWithoutSeniorInput[];
    deleteMany?: HintScalarWhereInput | HintScalarWhereInput[];
  };

  export type HintUpdateManyWithoutJuniorNestedInput = {
    create?:
      | XOR<HintCreateWithoutJuniorInput, HintUncheckedCreateWithoutJuniorInput>
      | HintCreateWithoutJuniorInput[]
      | HintUncheckedCreateWithoutJuniorInput[];
    connectOrCreate?:
      | HintCreateOrConnectWithoutJuniorInput
      | HintCreateOrConnectWithoutJuniorInput[];
    upsert?:
      | HintUpsertWithWhereUniqueWithoutJuniorInput
      | HintUpsertWithWhereUniqueWithoutJuniorInput[];
    createMany?: HintCreateManyJuniorInputEnvelope;
    set?: HintWhereUniqueInput | HintWhereUniqueInput[];
    disconnect?: HintWhereUniqueInput | HintWhereUniqueInput[];
    delete?: HintWhereUniqueInput | HintWhereUniqueInput[];
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[];
    update?:
      | HintUpdateWithWhereUniqueWithoutJuniorInput
      | HintUpdateWithWhereUniqueWithoutJuniorInput[];
    updateMany?:
      | HintUpdateManyWithWhereWithoutJuniorInput
      | HintUpdateManyWithWhereWithoutJuniorInput[];
    deleteMany?: HintScalarWhereInput | HintScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type MentorUncheckedUpdateOneWithoutJuniorNestedInput = {
    create?: XOR<MentorCreateWithoutJuniorInput, MentorUncheckedCreateWithoutJuniorInput>;
    connectOrCreate?: MentorCreateOrConnectWithoutJuniorInput;
    upsert?: MentorUpsertWithoutJuniorInput;
    disconnect?: MentorWhereInput | boolean;
    delete?: MentorWhereInput | boolean;
    connect?: MentorWhereUniqueInput;
    update?: XOR<
      XOR<MentorUpdateToOneWithWhereWithoutJuniorInput, MentorUpdateWithoutJuniorInput>,
      MentorUncheckedUpdateWithoutJuniorInput
    >;
  };

  export type MentorUncheckedUpdateManyWithoutSeniorNestedInput = {
    create?:
      | XOR<MentorCreateWithoutSeniorInput, MentorUncheckedCreateWithoutSeniorInput>
      | MentorCreateWithoutSeniorInput[]
      | MentorUncheckedCreateWithoutSeniorInput[];
    connectOrCreate?:
      | MentorCreateOrConnectWithoutSeniorInput
      | MentorCreateOrConnectWithoutSeniorInput[];
    upsert?:
      | MentorUpsertWithWhereUniqueWithoutSeniorInput
      | MentorUpsertWithWhereUniqueWithoutSeniorInput[];
    createMany?: MentorCreateManySeniorInputEnvelope;
    set?: MentorWhereUniqueInput | MentorWhereUniqueInput[];
    disconnect?: MentorWhereUniqueInput | MentorWhereUniqueInput[];
    delete?: MentorWhereUniqueInput | MentorWhereUniqueInput[];
    connect?: MentorWhereUniqueInput | MentorWhereUniqueInput[];
    update?:
      | MentorUpdateWithWhereUniqueWithoutSeniorInput
      | MentorUpdateWithWhereUniqueWithoutSeniorInput[];
    updateMany?:
      | MentorUpdateManyWithWhereWithoutSeniorInput
      | MentorUpdateManyWithWhereWithoutSeniorInput[];
    deleteMany?: MentorScalarWhereInput | MentorScalarWhereInput[];
  };

  export type HintUncheckedUpdateManyWithoutSeniorNestedInput = {
    create?:
      | XOR<HintCreateWithoutSeniorInput, HintUncheckedCreateWithoutSeniorInput>
      | HintCreateWithoutSeniorInput[]
      | HintUncheckedCreateWithoutSeniorInput[];
    connectOrCreate?:
      | HintCreateOrConnectWithoutSeniorInput
      | HintCreateOrConnectWithoutSeniorInput[];
    upsert?:
      | HintUpsertWithWhereUniqueWithoutSeniorInput
      | HintUpsertWithWhereUniqueWithoutSeniorInput[];
    createMany?: HintCreateManySeniorInputEnvelope;
    set?: HintWhereUniqueInput | HintWhereUniqueInput[];
    disconnect?: HintWhereUniqueInput | HintWhereUniqueInput[];
    delete?: HintWhereUniqueInput | HintWhereUniqueInput[];
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[];
    update?:
      | HintUpdateWithWhereUniqueWithoutSeniorInput
      | HintUpdateWithWhereUniqueWithoutSeniorInput[];
    updateMany?:
      | HintUpdateManyWithWhereWithoutSeniorInput
      | HintUpdateManyWithWhereWithoutSeniorInput[];
    deleteMany?: HintScalarWhereInput | HintScalarWhereInput[];
  };

  export type HintUncheckedUpdateManyWithoutJuniorNestedInput = {
    create?:
      | XOR<HintCreateWithoutJuniorInput, HintUncheckedCreateWithoutJuniorInput>
      | HintCreateWithoutJuniorInput[]
      | HintUncheckedCreateWithoutJuniorInput[];
    connectOrCreate?:
      | HintCreateOrConnectWithoutJuniorInput
      | HintCreateOrConnectWithoutJuniorInput[];
    upsert?:
      | HintUpsertWithWhereUniqueWithoutJuniorInput
      | HintUpsertWithWhereUniqueWithoutJuniorInput[];
    createMany?: HintCreateManyJuniorInputEnvelope;
    set?: HintWhereUniqueInput | HintWhereUniqueInput[];
    disconnect?: HintWhereUniqueInput | HintWhereUniqueInput[];
    delete?: HintWhereUniqueInput | HintWhereUniqueInput[];
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[];
    update?:
      | HintUpdateWithWhereUniqueWithoutJuniorInput
      | HintUpdateWithWhereUniqueWithoutJuniorInput[];
    updateMany?:
      | HintUpdateManyWithWhereWithoutJuniorInput
      | HintUpdateManyWithWhereWithoutJuniorInput[];
    deleteMany?: HintScalarWhereInput | HintScalarWhereInput[];
  };

  export type StudentCreateNestedOneWithoutGivenHintsInput = {
    create?: XOR<StudentCreateWithoutGivenHintsInput, StudentUncheckedCreateWithoutGivenHintsInput>;
    connectOrCreate?: StudentCreateOrConnectWithoutGivenHintsInput;
    connect?: StudentWhereUniqueInput;
  };

  export type StudentCreateNestedOneWithoutReceivedHintsInput = {
    create?: XOR<
      StudentCreateWithoutReceivedHintsInput,
      StudentUncheckedCreateWithoutReceivedHintsInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutReceivedHintsInput;
    connect?: StudentWhereUniqueInput;
  };

  export type StudentUpdateOneRequiredWithoutGivenHintsNestedInput = {
    create?: XOR<StudentCreateWithoutGivenHintsInput, StudentUncheckedCreateWithoutGivenHintsInput>;
    connectOrCreate?: StudentCreateOrConnectWithoutGivenHintsInput;
    upsert?: StudentUpsertWithoutGivenHintsInput;
    connect?: StudentWhereUniqueInput;
    update?: XOR<
      XOR<StudentUpdateToOneWithWhereWithoutGivenHintsInput, StudentUpdateWithoutGivenHintsInput>,
      StudentUncheckedUpdateWithoutGivenHintsInput
    >;
  };

  export type StudentUpdateOneWithoutReceivedHintsNestedInput = {
    create?: XOR<
      StudentCreateWithoutReceivedHintsInput,
      StudentUncheckedCreateWithoutReceivedHintsInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutReceivedHintsInput;
    upsert?: StudentUpsertWithoutReceivedHintsInput;
    disconnect?: StudentWhereInput | boolean;
    delete?: StudentWhereInput | boolean;
    connect?: StudentWhereUniqueInput;
    update?: XOR<
      XOR<
        StudentUpdateToOneWithWhereWithoutReceivedHintsInput,
        StudentUpdateWithoutReceivedHintsInput
      >,
      StudentUncheckedUpdateWithoutReceivedHintsInput
    >;
  };

  export type StudentCreateNestedOneWithoutMenteesInput = {
    create?: XOR<StudentCreateWithoutMenteesInput, StudentUncheckedCreateWithoutMenteesInput>;
    connectOrCreate?: StudentCreateOrConnectWithoutMenteesInput;
    connect?: StudentWhereUniqueInput;
  };

  export type StudentCreateNestedOneWithoutMentorInput = {
    create?: XOR<StudentCreateWithoutMentorInput, StudentUncheckedCreateWithoutMentorInput>;
    connectOrCreate?: StudentCreateOrConnectWithoutMentorInput;
    connect?: StudentWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type StudentUpdateOneRequiredWithoutMenteesNestedInput = {
    create?: XOR<StudentCreateWithoutMenteesInput, StudentUncheckedCreateWithoutMenteesInput>;
    connectOrCreate?: StudentCreateOrConnectWithoutMenteesInput;
    upsert?: StudentUpsertWithoutMenteesInput;
    connect?: StudentWhereUniqueInput;
    update?: XOR<
      XOR<StudentUpdateToOneWithWhereWithoutMenteesInput, StudentUpdateWithoutMenteesInput>,
      StudentUncheckedUpdateWithoutMenteesInput
    >;
  };

  export type StudentUpdateOneRequiredWithoutMentorNestedInput = {
    create?: XOR<StudentCreateWithoutMentorInput, StudentUncheckedCreateWithoutMentorInput>;
    connectOrCreate?: StudentCreateOrConnectWithoutMentorInput;
    upsert?: StudentUpsertWithoutMentorInput;
    connect?: StudentWhereUniqueInput;
    update?: XOR<
      XOR<StudentUpdateToOneWithWhereWithoutMentorInput, StudentUpdateWithoutMentorInput>,
      StudentUncheckedUpdateWithoutMentorInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedEnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>;
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>;
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedEnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>;
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>;
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumROLEFilter<$PrismaModel>;
    _max?: NestedEnumROLEFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type MentorCreateWithoutJuniorInput = {
    isFound?: boolean;
    foundAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    senior: StudentCreateNestedOneWithoutMenteesInput;
  };

  export type MentorUncheckedCreateWithoutJuniorInput = {
    id?: number;
    seniorId: number;
    isFound?: boolean;
    foundAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MentorCreateOrConnectWithoutJuniorInput = {
    where: MentorWhereUniqueInput;
    create: XOR<MentorCreateWithoutJuniorInput, MentorUncheckedCreateWithoutJuniorInput>;
  };

  export type MentorCreateWithoutSeniorInput = {
    isFound?: boolean;
    foundAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    junior: StudentCreateNestedOneWithoutMentorInput;
  };

  export type MentorUncheckedCreateWithoutSeniorInput = {
    id?: number;
    juniorId: number;
    isFound?: boolean;
    foundAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MentorCreateOrConnectWithoutSeniorInput = {
    where: MentorWhereUniqueInput;
    create: XOR<MentorCreateWithoutSeniorInput, MentorUncheckedCreateWithoutSeniorInput>;
  };

  export type MentorCreateManySeniorInputEnvelope = {
    data: MentorCreateManySeniorInput | MentorCreateManySeniorInput[];
    skipDuplicates?: boolean;
  };

  export type HintCreateWithoutSeniorInput = {
    content: string;
    revealDate: Date | string;
    order: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    junior?: StudentCreateNestedOneWithoutReceivedHintsInput;
  };

  export type HintUncheckedCreateWithoutSeniorInput = {
    id?: number;
    content: string;
    revealDate: Date | string;
    order: number;
    juniorId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type HintCreateOrConnectWithoutSeniorInput = {
    where: HintWhereUniqueInput;
    create: XOR<HintCreateWithoutSeniorInput, HintUncheckedCreateWithoutSeniorInput>;
  };

  export type HintCreateManySeniorInputEnvelope = {
    data: HintCreateManySeniorInput | HintCreateManySeniorInput[];
    skipDuplicates?: boolean;
  };

  export type HintCreateWithoutJuniorInput = {
    content: string;
    revealDate: Date | string;
    order: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    senior: StudentCreateNestedOneWithoutGivenHintsInput;
  };

  export type HintUncheckedCreateWithoutJuniorInput = {
    id?: number;
    content: string;
    revealDate: Date | string;
    order: number;
    seniorId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type HintCreateOrConnectWithoutJuniorInput = {
    where: HintWhereUniqueInput;
    create: XOR<HintCreateWithoutJuniorInput, HintUncheckedCreateWithoutJuniorInput>;
  };

  export type HintCreateManyJuniorInputEnvelope = {
    data: HintCreateManyJuniorInput | HintCreateManyJuniorInput[];
    skipDuplicates?: boolean;
  };

  export type MentorUpsertWithoutJuniorInput = {
    update: XOR<MentorUpdateWithoutJuniorInput, MentorUncheckedUpdateWithoutJuniorInput>;
    create: XOR<MentorCreateWithoutJuniorInput, MentorUncheckedCreateWithoutJuniorInput>;
    where?: MentorWhereInput;
  };

  export type MentorUpdateToOneWithWhereWithoutJuniorInput = {
    where?: MentorWhereInput;
    data: XOR<MentorUpdateWithoutJuniorInput, MentorUncheckedUpdateWithoutJuniorInput>;
  };

  export type MentorUpdateWithoutJuniorInput = {
    isFound?: BoolFieldUpdateOperationsInput | boolean;
    foundAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    senior?: StudentUpdateOneRequiredWithoutMenteesNestedInput;
  };

  export type MentorUncheckedUpdateWithoutJuniorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    seniorId?: IntFieldUpdateOperationsInput | number;
    isFound?: BoolFieldUpdateOperationsInput | boolean;
    foundAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MentorUpsertWithWhereUniqueWithoutSeniorInput = {
    where: MentorWhereUniqueInput;
    update: XOR<MentorUpdateWithoutSeniorInput, MentorUncheckedUpdateWithoutSeniorInput>;
    create: XOR<MentorCreateWithoutSeniorInput, MentorUncheckedCreateWithoutSeniorInput>;
  };

  export type MentorUpdateWithWhereUniqueWithoutSeniorInput = {
    where: MentorWhereUniqueInput;
    data: XOR<MentorUpdateWithoutSeniorInput, MentorUncheckedUpdateWithoutSeniorInput>;
  };

  export type MentorUpdateManyWithWhereWithoutSeniorInput = {
    where: MentorScalarWhereInput;
    data: XOR<MentorUpdateManyMutationInput, MentorUncheckedUpdateManyWithoutSeniorInput>;
  };

  export type MentorScalarWhereInput = {
    AND?: MentorScalarWhereInput | MentorScalarWhereInput[];
    OR?: MentorScalarWhereInput[];
    NOT?: MentorScalarWhereInput | MentorScalarWhereInput[];
    id?: IntFilter<'Mentor'> | number;
    seniorId?: IntFilter<'Mentor'> | number;
    juniorId?: IntFilter<'Mentor'> | number;
    isFound?: BoolFilter<'Mentor'> | boolean;
    foundAt?: DateTimeNullableFilter<'Mentor'> | Date | string | null;
    createdAt?: DateTimeFilter<'Mentor'> | Date | string;
    updatedAt?: DateTimeFilter<'Mentor'> | Date | string;
  };

  export type HintUpsertWithWhereUniqueWithoutSeniorInput = {
    where: HintWhereUniqueInput;
    update: XOR<HintUpdateWithoutSeniorInput, HintUncheckedUpdateWithoutSeniorInput>;
    create: XOR<HintCreateWithoutSeniorInput, HintUncheckedCreateWithoutSeniorInput>;
  };

  export type HintUpdateWithWhereUniqueWithoutSeniorInput = {
    where: HintWhereUniqueInput;
    data: XOR<HintUpdateWithoutSeniorInput, HintUncheckedUpdateWithoutSeniorInput>;
  };

  export type HintUpdateManyWithWhereWithoutSeniorInput = {
    where: HintScalarWhereInput;
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyWithoutSeniorInput>;
  };

  export type HintScalarWhereInput = {
    AND?: HintScalarWhereInput | HintScalarWhereInput[];
    OR?: HintScalarWhereInput[];
    NOT?: HintScalarWhereInput | HintScalarWhereInput[];
    id?: IntFilter<'Hint'> | number;
    content?: StringFilter<'Hint'> | string;
    revealDate?: DateTimeFilter<'Hint'> | Date | string;
    order?: IntFilter<'Hint'> | number;
    seniorId?: IntFilter<'Hint'> | number;
    juniorId?: IntNullableFilter<'Hint'> | number | null;
    createdAt?: DateTimeFilter<'Hint'> | Date | string;
    updatedAt?: DateTimeFilter<'Hint'> | Date | string;
  };

  export type HintUpsertWithWhereUniqueWithoutJuniorInput = {
    where: HintWhereUniqueInput;
    update: XOR<HintUpdateWithoutJuniorInput, HintUncheckedUpdateWithoutJuniorInput>;
    create: XOR<HintCreateWithoutJuniorInput, HintUncheckedCreateWithoutJuniorInput>;
  };

  export type HintUpdateWithWhereUniqueWithoutJuniorInput = {
    where: HintWhereUniqueInput;
    data: XOR<HintUpdateWithoutJuniorInput, HintUncheckedUpdateWithoutJuniorInput>;
  };

  export type HintUpdateManyWithWhereWithoutJuniorInput = {
    where: HintScalarWhereInput;
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyWithoutJuniorInput>;
  };

  export type StudentCreateWithoutGivenHintsInput = {
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentor?: MentorCreateNestedOneWithoutJuniorInput;
    mentees?: MentorCreateNestedManyWithoutSeniorInput;
    receivedHints?: HintCreateNestedManyWithoutJuniorInput;
  };

  export type StudentUncheckedCreateWithoutGivenHintsInput = {
    id?: number;
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentor?: MentorUncheckedCreateNestedOneWithoutJuniorInput;
    mentees?: MentorUncheckedCreateNestedManyWithoutSeniorInput;
    receivedHints?: HintUncheckedCreateNestedManyWithoutJuniorInput;
  };

  export type StudentCreateOrConnectWithoutGivenHintsInput = {
    where: StudentWhereUniqueInput;
    create: XOR<StudentCreateWithoutGivenHintsInput, StudentUncheckedCreateWithoutGivenHintsInput>;
  };

  export type StudentCreateWithoutReceivedHintsInput = {
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentor?: MentorCreateNestedOneWithoutJuniorInput;
    mentees?: MentorCreateNestedManyWithoutSeniorInput;
    givenHints?: HintCreateNestedManyWithoutSeniorInput;
  };

  export type StudentUncheckedCreateWithoutReceivedHintsInput = {
    id?: number;
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentor?: MentorUncheckedCreateNestedOneWithoutJuniorInput;
    mentees?: MentorUncheckedCreateNestedManyWithoutSeniorInput;
    givenHints?: HintUncheckedCreateNestedManyWithoutSeniorInput;
  };

  export type StudentCreateOrConnectWithoutReceivedHintsInput = {
    where: StudentWhereUniqueInput;
    create: XOR<
      StudentCreateWithoutReceivedHintsInput,
      StudentUncheckedCreateWithoutReceivedHintsInput
    >;
  };

  export type StudentUpsertWithoutGivenHintsInput = {
    update: XOR<StudentUpdateWithoutGivenHintsInput, StudentUncheckedUpdateWithoutGivenHintsInput>;
    create: XOR<StudentCreateWithoutGivenHintsInput, StudentUncheckedCreateWithoutGivenHintsInput>;
    where?: StudentWhereInput;
  };

  export type StudentUpdateToOneWithWhereWithoutGivenHintsInput = {
    where?: StudentWhereInput;
    data: XOR<StudentUpdateWithoutGivenHintsInput, StudentUncheckedUpdateWithoutGivenHintsInput>;
  };

  export type StudentUpdateWithoutGivenHintsInput = {
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mentor?: MentorUpdateOneWithoutJuniorNestedInput;
    mentees?: MentorUpdateManyWithoutSeniorNestedInput;
    receivedHints?: HintUpdateManyWithoutJuniorNestedInput;
  };

  export type StudentUncheckedUpdateWithoutGivenHintsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mentor?: MentorUncheckedUpdateOneWithoutJuniorNestedInput;
    mentees?: MentorUncheckedUpdateManyWithoutSeniorNestedInput;
    receivedHints?: HintUncheckedUpdateManyWithoutJuniorNestedInput;
  };

  export type StudentUpsertWithoutReceivedHintsInput = {
    update: XOR<
      StudentUpdateWithoutReceivedHintsInput,
      StudentUncheckedUpdateWithoutReceivedHintsInput
    >;
    create: XOR<
      StudentCreateWithoutReceivedHintsInput,
      StudentUncheckedCreateWithoutReceivedHintsInput
    >;
    where?: StudentWhereInput;
  };

  export type StudentUpdateToOneWithWhereWithoutReceivedHintsInput = {
    where?: StudentWhereInput;
    data: XOR<
      StudentUpdateWithoutReceivedHintsInput,
      StudentUncheckedUpdateWithoutReceivedHintsInput
    >;
  };

  export type StudentUpdateWithoutReceivedHintsInput = {
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mentor?: MentorUpdateOneWithoutJuniorNestedInput;
    mentees?: MentorUpdateManyWithoutSeniorNestedInput;
    givenHints?: HintUpdateManyWithoutSeniorNestedInput;
  };

  export type StudentUncheckedUpdateWithoutReceivedHintsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mentor?: MentorUncheckedUpdateOneWithoutJuniorNestedInput;
    mentees?: MentorUncheckedUpdateManyWithoutSeniorNestedInput;
    givenHints?: HintUncheckedUpdateManyWithoutSeniorNestedInput;
  };

  export type StudentCreateWithoutMenteesInput = {
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentor?: MentorCreateNestedOneWithoutJuniorInput;
    givenHints?: HintCreateNestedManyWithoutSeniorInput;
    receivedHints?: HintCreateNestedManyWithoutJuniorInput;
  };

  export type StudentUncheckedCreateWithoutMenteesInput = {
    id?: number;
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentor?: MentorUncheckedCreateNestedOneWithoutJuniorInput;
    givenHints?: HintUncheckedCreateNestedManyWithoutSeniorInput;
    receivedHints?: HintUncheckedCreateNestedManyWithoutJuniorInput;
  };

  export type StudentCreateOrConnectWithoutMenteesInput = {
    where: StudentWhereUniqueInput;
    create: XOR<StudentCreateWithoutMenteesInput, StudentUncheckedCreateWithoutMenteesInput>;
  };

  export type StudentCreateWithoutMentorInput = {
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentees?: MentorCreateNestedManyWithoutSeniorInput;
    givenHints?: HintCreateNestedManyWithoutSeniorInput;
    receivedHints?: HintCreateNestedManyWithoutJuniorInput;
  };

  export type StudentUncheckedCreateWithoutMentorInput = {
    id?: number;
    microsoftId?: string | null;
    email: string;
    studentId?: string | null;
    displayName: string;
    nickname?: string | null;
    profilePic?: string | null;
    house?: string | null;
    instagram?: string | null;
    nationality?: string | null;
    role?: $Enums.ROLE;
    isSenior: boolean;
    lives?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mentees?: MentorUncheckedCreateNestedManyWithoutSeniorInput;
    givenHints?: HintUncheckedCreateNestedManyWithoutSeniorInput;
    receivedHints?: HintUncheckedCreateNestedManyWithoutJuniorInput;
  };

  export type StudentCreateOrConnectWithoutMentorInput = {
    where: StudentWhereUniqueInput;
    create: XOR<StudentCreateWithoutMentorInput, StudentUncheckedCreateWithoutMentorInput>;
  };

  export type StudentUpsertWithoutMenteesInput = {
    update: XOR<StudentUpdateWithoutMenteesInput, StudentUncheckedUpdateWithoutMenteesInput>;
    create: XOR<StudentCreateWithoutMenteesInput, StudentUncheckedCreateWithoutMenteesInput>;
    where?: StudentWhereInput;
  };

  export type StudentUpdateToOneWithWhereWithoutMenteesInput = {
    where?: StudentWhereInput;
    data: XOR<StudentUpdateWithoutMenteesInput, StudentUncheckedUpdateWithoutMenteesInput>;
  };

  export type StudentUpdateWithoutMenteesInput = {
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mentor?: MentorUpdateOneWithoutJuniorNestedInput;
    givenHints?: HintUpdateManyWithoutSeniorNestedInput;
    receivedHints?: HintUpdateManyWithoutJuniorNestedInput;
  };

  export type StudentUncheckedUpdateWithoutMenteesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mentor?: MentorUncheckedUpdateOneWithoutJuniorNestedInput;
    givenHints?: HintUncheckedUpdateManyWithoutSeniorNestedInput;
    receivedHints?: HintUncheckedUpdateManyWithoutJuniorNestedInput;
  };

  export type StudentUpsertWithoutMentorInput = {
    update: XOR<StudentUpdateWithoutMentorInput, StudentUncheckedUpdateWithoutMentorInput>;
    create: XOR<StudentCreateWithoutMentorInput, StudentUncheckedCreateWithoutMentorInput>;
    where?: StudentWhereInput;
  };

  export type StudentUpdateToOneWithWhereWithoutMentorInput = {
    where?: StudentWhereInput;
    data: XOR<StudentUpdateWithoutMentorInput, StudentUncheckedUpdateWithoutMentorInput>;
  };

  export type StudentUpdateWithoutMentorInput = {
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mentees?: MentorUpdateManyWithoutSeniorNestedInput;
    givenHints?: HintUpdateManyWithoutSeniorNestedInput;
    receivedHints?: HintUpdateManyWithoutJuniorNestedInput;
  };

  export type StudentUncheckedUpdateWithoutMentorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    studentId?: NullableStringFieldUpdateOperationsInput | string | null;
    displayName?: StringFieldUpdateOperationsInput | string;
    nickname?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null;
    house?: NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE;
    isSenior?: BoolFieldUpdateOperationsInput | boolean;
    lives?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mentees?: MentorUncheckedUpdateManyWithoutSeniorNestedInput;
    givenHints?: HintUncheckedUpdateManyWithoutSeniorNestedInput;
    receivedHints?: HintUncheckedUpdateManyWithoutJuniorNestedInput;
  };

  export type MentorCreateManySeniorInput = {
    id?: number;
    juniorId: number;
    isFound?: boolean;
    foundAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type HintCreateManySeniorInput = {
    id?: number;
    content: string;
    revealDate: Date | string;
    order: number;
    juniorId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type HintCreateManyJuniorInput = {
    id?: number;
    content: string;
    revealDate: Date | string;
    order: number;
    seniorId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MentorUpdateWithoutSeniorInput = {
    isFound?: BoolFieldUpdateOperationsInput | boolean;
    foundAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    junior?: StudentUpdateOneRequiredWithoutMentorNestedInput;
  };

  export type MentorUncheckedUpdateWithoutSeniorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    juniorId?: IntFieldUpdateOperationsInput | number;
    isFound?: BoolFieldUpdateOperationsInput | boolean;
    foundAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MentorUncheckedUpdateManyWithoutSeniorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    juniorId?: IntFieldUpdateOperationsInput | number;
    isFound?: BoolFieldUpdateOperationsInput | boolean;
    foundAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type HintUpdateWithoutSeniorInput = {
    content?: StringFieldUpdateOperationsInput | string;
    revealDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    junior?: StudentUpdateOneWithoutReceivedHintsNestedInput;
  };

  export type HintUncheckedUpdateWithoutSeniorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    revealDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: IntFieldUpdateOperationsInput | number;
    juniorId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type HintUncheckedUpdateManyWithoutSeniorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    revealDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: IntFieldUpdateOperationsInput | number;
    juniorId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type HintUpdateWithoutJuniorInput = {
    content?: StringFieldUpdateOperationsInput | string;
    revealDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    senior?: StudentUpdateOneRequiredWithoutGivenHintsNestedInput;
  };

  export type HintUncheckedUpdateWithoutJuniorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    revealDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: IntFieldUpdateOperationsInput | number;
    seniorId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type HintUncheckedUpdateManyWithoutJuniorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    revealDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: IntFieldUpdateOperationsInput | number;
    seniorId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
