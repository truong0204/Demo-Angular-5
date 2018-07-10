import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public itemmenus: any[] =
		[
			{ name: 'Home', link: '/home' },
			{ name: 'News', link: '/news' },
			{ name: 'Jobs', link: '/jobs' },
			{ name: 'Register', link: '/register' },
			{ name: 'Login', link: '/login' }
		];

	constructor() { }

	ngOnInit() {
	}
}

