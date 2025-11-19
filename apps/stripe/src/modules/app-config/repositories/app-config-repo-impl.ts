// Fix 1: Correct Import Paths. AppConfigRepository is in a specific submodule.
import { EncryptedMetadataManager } from "@saleor/app-sdk/settings-manager";
import { AppConfigRepository } from "@saleor/app-sdk/settings-manager/app-config-repository"; // Corrected specific submodule path
import { saleorApp } from "@/lib/saleor-app"; 
import { env } from "@/lib/env";

/*
 * This implementation uses Saleor's Encrypted Metadata Manager to store
 * the Stripe configurations, eliminating the dependency on DynamoDB/AWS.
 */

// Initialize the metadata manager to handle encryption and persistence
const metadataManager = new EncryptedMetadataManager({
  // Fix 2: Use optional chaining and a fallback ID to prevent the 
  // TypeError: Cannot read properties of undefined (reading 'id') during Next.js build.
  appId: saleorApp.manifest?.id || "fallback-app-id", 
  apl: saleorApp.apl,
  // The SECRET_KEY from your Vercel environment variables is used for encryption
  encryptionKey: env.SECRET_KEY, 
});

// Use the Metadata Manager as the repository implementation
export const appConfigRepoImpl = new AppConfigRepository(metadataManager);