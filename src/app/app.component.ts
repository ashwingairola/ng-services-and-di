import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from './services/account.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	accounts: { name: string; status: string }[] = [];
	statusUpdateSub?: Subscription;

	constructor(private accountService: AccountService) {}

	ngOnInit() {
		this.accounts = this.accountService.accounts;

		this.accountService.statusUpdated.subscribe(status => {
			console.log('Status updated:', status);
		});
	}

	ngOnDestroy() {
		if (this.statusUpdateSub) {
			this.statusUpdateSub.unsubscribe();
		}
	}
}
