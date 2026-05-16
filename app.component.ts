import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
	selector: 'app-text-editor',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	userForm: FormGroup;
	submittedData: any[] = [];
	constructor(private fb: FormBuilder) {
		this.userForm = this.fb.group({
			name: ['', [Validators.required, Validators.minLength(3)]],
			address: ['', Validators.required],
			mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
			pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
		});
	}
	ngOnInit(): void { }
	onSubmit() {
		if (this.userForm.valid) {
			this.submittedData.push(this.userForm.value);
			this.userForm.reset();
		} else {
			this.userForm.markAllAsTouched();
		}
	}

}
