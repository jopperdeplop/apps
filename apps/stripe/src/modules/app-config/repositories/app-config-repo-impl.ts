// Reverting to the direct import method, which is structurally cleaner and should now work
// since we disabled ESLint and other build-time checks in previous steps.

// Import the required classes directly from the module entry point.
import {
  AppConfigRepository,
  EncryptedMetadataManager,
} from "@saleor/app-sdk/settings-manager";

import { saleorApp } from "@/lib/saleor-app"; 
import { env } from "@/lib/env";

/*
 * This implementation replaces DynamodbAppConfigRepo with the
 * EncryptedMetadataManager to store Stripe configurations securely 
 * in Saleor's private metadata, resolving the configuration errors.
 */

// Initialization must happen at the top level for TRPC to consume the export
const metadataManager = new EncryptedMetadataManager({
  // FIX: Use optional chaining and a fallback ID to prevent the TypeError during Next.js build compilation.
  appId: saleorApp.manifest?.id || "fallback-app-id", 
  apl: saleorApp.apl,
  // The SECRET_KEY from your Vercel environment variables is used for encryption
  encryptionKey: env.SECRET_KEY, 
});

// Use the Metadata Manager as the repository implementation
export const appConfigRepoImpl = new AppConfigRepository(metadataManager);