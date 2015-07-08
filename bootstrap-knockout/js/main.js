requirejs.config({
	baseUrl: 'js',
	map: {
		'*': {
			'css': 'plugins/css.min',
			'text': 'plugins/text'
		}
	},
	shim: {
		"bootstrap": {
			"deps": [
				'jquery',
				"css!https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css",
				"css!https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css"
			]
		}
	},
	paths: {
		"jquery": "http://code.jquery.com/jquery-1.11.2.min",
		"bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min",
		"knockout": "https://cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-min"
	}
});

requirejs(['knockout', './app'], function(ko, app) {
	ko.applyBindings(new app());
});
