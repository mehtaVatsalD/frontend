import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "../../environments/environment";

export const APP_CONFIG_IT = new InjectionToken<AppConfig>('app_config');

export const APP_CONFIG: AppConfig = environment;