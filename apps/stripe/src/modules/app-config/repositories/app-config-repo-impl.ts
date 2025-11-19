// Fix 1: Importing core classes from their dedicated submodule paths to resolve Webpack/constructor conflicts.
import { EncryptedMetadataManager } from "@saleor/app-sdk/settings-manager/encrypted-metadata-manager";
import { AppConfigRepository } from "@saleor/app-sdk/settings-manager/app-config-repository";

// Fix 2: Use path aliases (verified in tsconfig) for internal dependencies
import { saleorApp } from "@/lib/saleor-app"; 
import { env } from "@/lib/env";

/*
 * This implementation replaces the default DynamodbAppConfigRepo with the
 * EncryptedMetadataManager. This ensures Stripe configurations are stored
 * securely in Saleor's metadata, eliminating the dependency on AWS/DynamoDB.
 */

// Initialization must happen at the top level for TRPC to consume the export
const metadataManager = new EncryptedMetadataManager({
  // FIX 3: Use optional chaining and a fallback ID to prevent the critical 
  // "Cannot read properties of undefined (reading 'id')" TypeError during Next.js build compilation.
  appId: saleorApp.manifest?.id || "fallback-app-id", 
  apl: saleorApp.apl,
  // The SECRET_KEY from your Vercel environment variables is used for encryption
  encryptionKey: env.SECRET_KEY, 
});

// Use the Metadata Manager as the repository implementation
export const appConfigRepoImpl = new AppConfigRepository(metadataManager);