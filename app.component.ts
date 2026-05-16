import { Component } from '@angular/core';

@Component({
	selector: 'app-text-editor',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor() {
	}
	ngOnInit(): void { }
	user = {
		name: '',
		address: '',
		mobile: '',
		pincode: ''
	};
	userList: any[] = [];
	addUser(form: any) {
		if (form.valid) {
			this.userList.push({ ...this.user });
			form.resetForm();
		}
	}
}
