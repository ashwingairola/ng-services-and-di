import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LOGGER } from './tokens/tokens';
import { LoggingService } from './services/logging.service';

@NgModule({
	declarations: [AppComponent, AccountComponent, NewAccountComponent],
	imports: [BrowserModule],
	providers: [{ provide: LOGGER, useClass: LoggingService }],
	bootstrap: [AppComponent]
})
export class AppModule {}
