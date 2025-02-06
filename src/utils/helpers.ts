import { Prisma, PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

const checkExists = new PrismaClient().$extends({
  name: "<name>",
  model: {
    $allModels: {
      async exists<T>(
        this: T,
        where: Prisma.Args<T, "findFirst">["where"]
      ): Promise<boolean> {
        const context = Prisma.getExtensionContext(this);

        const result = await (context as any).findFirst({ where });
        return result !== null;
      },
    },
  },
});

const getById = new PrismaClient().$extends({
  query: {
    $allModels: {
      async findUnique({ model, args, operation, query }) {
        const { id } = args.where;
        args.where = { ...args.where, id };
        return query(args);
      },
    },
  },
});

const prismaAdd = new PrismaClient().$extends({
  model: {
    $allModels: {
      async add<T>(this: T, data: Prisma.Args<T, "create">): Promise<T> {
        const context = Prisma.getExtensionContext(this);

        const result = await (context as any).create(data);

        return result;
      },
    },
  },
});

const uniqueConstraintError = (error: unknown) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return true;
    }
  }
};

// const add = new PrismaClient().$extends({
//     model: {
//         $allModels: {
//             async add<T>(
//                 this: T,
//               where: Prisma.Args<T, 'create'>
//             ): Promise<T> {
//                 const context = Prisma.getExtensionContext(this)

//                 const result = await (context as any).create({data: {this}})

//                 return result
//             }
//         }
//     }
// })

export { getById, checkExists, prismaAdd, uniqueConstraintError };
