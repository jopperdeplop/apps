// Replace the previous imports entirely:
import { EncryptedMetadataManager } from "@saleor/app-sdk/settings-manager";
import { AppConfigRepository } from "@saleor/app-sdk/settings-manager/app-config-repository";
import { saleorApp } from "../../../../lib/saleor-app";
import { env } from "../../../../lib/env";

/*
 * This implementation uses Saleor's Encrypted Metadata Manager to store
 * the Stripe configurations, eliminating the dependency on DynamoDB/AWS.
 */

// Initialize the metadata manager to handle encryption and persistence
const metadataManager = new EncryptedMetadataManager({
  // The app's authorization and client are taken from the main saleorApp instance
  appId: saleorApp.manifest.id,
  apl: saleorApp.apl,
  // The SECRET_KEY from your Vercel environment variables is used for encryption
  encryptionKey: env.SECRET_KEY, 
});

// Use the Metadata Manager as the repository implementation
export const appConfigRepoImpl = new AppConfigRepository(metadataManager);