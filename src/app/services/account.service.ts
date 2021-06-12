import { Injectable } from '@angular/core';

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

	constructor() {}

	addAccount(name: string, status: string) {
		this.accounts.push({ name, status });
	}

	updateStatus(id: number, status: string): boolean {
		const account = this.accounts[id];

		if (!account) {
			return false;
		}

		account.status = status;
		return true;
	}
}
