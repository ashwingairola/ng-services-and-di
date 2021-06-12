import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ILoggingService } from '../models';
import { LOGGER } from '../tokens/tokens';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
	@Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

	constructor(@Inject(LOGGER) private loggingService: ILoggingService) {}

	onCreateAccount(accountName: string, accountStatus: string) {
		this.accountAdded.emit({
			name: accountName,
			status: accountStatus
		});
		this.loggingService.logStatusChange(accountStatus);
	}
}
