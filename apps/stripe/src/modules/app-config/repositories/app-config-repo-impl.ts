// Imports corrected to use modern SDK structure and aliases
import {
  EncryptedMetadataManager, 
  AppConfigRepository 
} from "@saleor/app-sdk/settings-manager";
import { saleorApp } from "@/lib/saleor-app"; 
import { env } from "@/lib/env";

/*
 * This implementation replaces DynamodbAppConfigRepo with the
 * EncryptedMetadataManager to store Stripe configurations securely 
 * in Saleor's private metadata.
 */

// Initialize the metadata manager to handle encryption and persistence
const metadataManager = new EncryptedMetadataManager({
  // FIX: Use optional chaining and a fallback ID ("fallback-app-id") 
  // to prevent the TypeError during Next.js build compilation.
  appId: saleorApp.manifest?.id || "fallback-app-id", 
  apl: saleorApp.apl,
  // The SECRET_KEY from your Vercel environment variables is used for encryption
  encryptionKey: env.SECRET_KEY, 
});

// Use the Metadata Manager as the repository implementation
export const appConfigRepoImpl = new AppConfigRepository(metadataManager);