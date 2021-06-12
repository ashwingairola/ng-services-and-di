import { Component, Inject } from '@angular/core';
import { ILoggingService } from '../models';
import { AccountService } from '../services/account.service';
import { LOGGER } from '../tokens/tokens';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
	constructor(
		@Inject(LOGGER) private loggingService: ILoggingService,
		private accountService: AccountService
	) {}
	// constructor(private loggingService: LoggingService) {}

	onCreateAccount(accountName: string, accountStatus: string) {
		this.accountService.addAccount(accountName, accountStatus);
		// this.loggingService.logStatusChange(accountStatus);
		this.accountService.statusUpdated.emit(status);
	}
}
