import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ILoggingService } from '../models';
import { LOGGER } from '../tokens/tokens';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css']
})
export class AccountComponent {
	@Input() account!: { name: string; status: string };
	@Input() id!: number;
	@Output() statusChanged = new EventEmitter<{
		id: number;
		newStatus: string;
	}>();

	constructor(@Inject(LOGGER) private loggingService: ILoggingService) {}

	onSetTo(status: string) {
		this.statusChanged.emit({ id: this.id, newStatus: status });
		this.loggingService.logStatusChange(status);
	}
}
