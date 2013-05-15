(function(window) {

	/**
	 * Base widgets factory.
	 */
	var getWidgets = function(options) {
		var widgets = {};

		/**
		 * Get all elements with attribute.
		 * @param attribute {string} Attribute name
		 */
		var getAllElementsWithAttribute = function(attribute) {
			var matchingElements = [];
			var allElements = document.getElementsByTagName('*');
			for (var i = 0; i < allElements.length; i++) {
				if (allElements[i].getAttribute(attribute)) {
					matchingElements.push(allElements[i]);
				}
			}
			return matchingElements;
		};

		/**
		 * Add event to DOM element.
		 */
		var addEvent = function(evnt, elem, func) {
			if (elem.addEventListener) {
				elem.addEventListener(evnt,func,false);
			} else if (elem.attachEvent) {
					var r = elem.attachEvent('on'+evnt, func);
					return r;
			}
		};


		/**
		 * Return public properties and methods of widget utils.
		 */
		var getUtils = function getUtils() {
			var scripts = [],
			    css = [];

			return {
				loadScript: function (url, callback) {
					for (var i in scripts) {
						if (scripts[i] === url) {
							if (callback !== undefined) {
								callback();
							}
							return;
						}
					}

					var element = document.createElement('script');
					element.src = url;
					element.rel = url;
					if (callback !== undefined) {
						addEvent('load', element, callback);
					}
					document.getElementsByTagName('HEAD')[0].appendChild(element);
					scripts.push(url);
				},

				loadCss: function (url, callback) {
					for (var i in scripts) {
						if (scripts[i] === url) {
							if (callback !== undefined) {
								callback();
							}
							return;
						}
					}

					var element = document.createElement('LINK');
					element.rel = 'stylesheet';
					element.type = 'text/css';
					element.href = url;
					if (callback !== undefined) {
						addEvent('load', element, callback);
					}
					document.getElementsByTagName('HEAD')[0].appendChild(element);
					css.push(url);
				}
			};
		};


		/**
		 * Return public methods and properties of widgets.
		 */
		var publicObject = {
			widgetBaseUrl: 'widgets',
			attributeName: 'data-ext',
		
			add: function(name, obj) {
				widgets[name] = obj;
			},

			load: function (name, element) {
				var element = element || window,
				    insertInDOM = false;

				var scriptId = 'widget_' + name,
				    scriptElement = document.getElementById(scriptId);

				if (scriptElement === null) {
					scriptElement = document.createElement('script');
					scriptElement.src = this.widgetBaseUrl + '/' + name + '.js';
					scriptElement.rel = name;
					scriptElement.id = scriptId;

					widgets[name] = null;
					insertInDOM = true;
				}

				addEvent('load', scriptElement, (function(publicObject, name, element) {
					return function() {
						publicObject.execute(name, element);
					};
				})(this, name, element));

				if (insertInDOM === true) {
					document.getElementsByTagName('HEAD')[0].appendChild(scriptElement);
				}
			},

			execute: function(name, element)
			{
				if (typeof widgets[name] === 'function') {
					widgets[name].apply(element);
				}
			},

			run: function() {
				var elements = getAllElementsWithAttribute(this.attributeName);

				if (elements.length === 0) return null;

				for (var i in elements) {
					var element = elements[i],
					    name = element.getAttribute(this.attributeName);

					this.load(name, element);
				}
			},

			utils: getUtils()
		};

		// Assign options properties
		for (var i in options) {
			publicObject[i] = options[i];
		}

		return publicObject;
	};

	// Run
	window.widgets = getWidgets({
//		widgetBaseUrl: 'http://jmas.github.io/html_widgets/widgets'
	});
	window.widgets.run();

})(window);
