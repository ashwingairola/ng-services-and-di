import { Component, Inject, Input } from '@angular/core';
import { ILoggingService } from '../models';
import { AccountService } from '../services/account.service';
import { LOGGER } from '../tokens/tokens';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css']
})
export class AccountComponent {
	@Input() account!: { name: string; status: string };
	@Input() id!: number;

	constructor(
		@Inject(LOGGER) private loggingService: ILoggingService,
		private accountService: AccountService
	) {}

	onSetTo(status: string) {
		this.accountService.updateStatus(this.id, status);
		this.loggingService.logStatusChange(status);
	}
}
