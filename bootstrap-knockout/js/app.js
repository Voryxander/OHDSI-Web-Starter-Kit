define([
	'jquery',
	'knockout',
	'components/webapi-configuration',
	'bootstrap',
	'css!styles/app'
], function ($, ko) {

	var appModel = function () {
		this.appHeading = ko.observable('Data Bound Panel Heading');
		this.appBody = ko.observable('Data Bound Panel Body Content');

		// configure services to include at least one valid OHDSI WebAPI endpoint
		this.services = [
			{
				name: 'Local',
				url: 'http://localhost:8084/WebAPI/',
				dialect: ko.observable('loading'),
				version: ko.observable('loading')
			}
		];

		this.currentServiceUrl = ko.observable(this.services[0].url);
	}

	return appModel;
});
