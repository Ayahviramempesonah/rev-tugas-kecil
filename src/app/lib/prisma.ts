// import "dotenv/config";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaClient } from "../../generated/prisma/";

import ws from "ws";
neonConfig.webSocketConstructor = ws;

// To work in edge environments (Cloudflare Workers, Vercel Edge, etc.), enable querying over fetch
neonConfig.poolQueryViaFetch = true;

// Type definitions
declare global {
  var prisma: PrismaClient | undefined;
}

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({ connectionString });
const prisma = global.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;

// // master start
// import { PrismaClient } from "../../generated/prisma/";
// declare global {
//   var prisma: PrismaClient | undefined;
// }
//
// const prisma = global.prisma || new PrismaClient();
// if (process.env.NODE_ENV !== "production") global.prisma = prisma;
// export default prisma;
//
// master end
