import { Inject, Injectable } from '@angular/core';
import { LOGGER } from '../tokens/tokens';
import { LoggingService } from './logging.service';

@Injectable({
	providedIn: 'root'
})
export class AccountService {
	accounts = [
		{
			name: 'Master Account',
			status: 'active'
		},
		{
			name: 'Test Account',
			status: 'inactive'
		},
		{
			name: 'Hidden Account',
			status: 'unknown'
		}
	];

	constructor(@Inject(LOGGER) private loggingService: LoggingService) {}

	addAccount(name: string, status: string) {
		this.accounts.push({ name, status });
		this.loggingService.logStatusChange(status);
	}

	updateStatus(id: number, status: string): boolean {
		const account = this.accounts[id];

		if (!account) {
			return false;
		}

		account.status = status;
		this.loggingService.logStatusChange(status);
		return true;
	}
}
