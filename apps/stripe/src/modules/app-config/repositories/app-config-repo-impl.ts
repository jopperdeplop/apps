// app-config-repo-impl.ts

// 1. Import the Redis implementation instead of DynamoDB
import { RedisAppConfigRepo } from "@/modules/app-config/repositories/redis/redis-app-config-repo"; 

/*
 * Replace this implementation with custom DB (Redis, Metadata etc) to drop DynamoDB and bring something else
 */
// 2. Instantiate and export the Redis repository
export const appConfigRepoImpl = new RedisAppConfigRepo();