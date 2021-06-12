import { InjectionToken } from '@angular/core';
import { ILoggingService } from '../models';

export const LOGGER = new InjectionToken<ILoggingService>('ILoggingService');
