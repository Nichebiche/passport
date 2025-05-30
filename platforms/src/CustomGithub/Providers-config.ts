import { PlatformSpec, PlatformGroupSpec, Provider } from "../types.js";
import { CustomGithubProvider } from "./Providers/index.js";

export const PlatformDetails: PlatformSpec = {
  icon: "./assets/dev-icon.svg",
  platform: "DeveloperList",
  name: "Developer List",
  description: "Verify you are part of a community",
  connectMessage: "Verify",
  isEVM: false,
};

export const ProviderConfig: PlatformGroupSpec[] = [];

export const providers: Provider[] = [new CustomGithubProvider()];
