import * as React from "react";
import { Config } from "sitebuilder.client";

export interface ProviderState {
  defaultConfig: Config | null;
}

export interface UpdateStateArg {
  key: keyof ProviderState;
  value: any;
}

export interface ProviderStore {
  state: ProviderState | null;
}

export default React.createContext({
  state: null
} as ProviderStore);
