import { Injectable } from '@angular/core';
import { ILoggingService } from '../models';

@Injectable()
export class LoggingService implements ILoggingService {
	constructor() {}

	logStatusChange(status: string) {
		console.log('A server status changed, new status: ' + status);
	}
}
