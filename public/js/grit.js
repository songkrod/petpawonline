(function() {

// Define our constructor
	this.Grit = function() {
		this.wrap = null;
		this.transitionEnd = transitionSelect();

		var defaults = {
			element: null,
			isElement: false,
			selector: "grit",
			itemSelector: "grit-item",
			columnWidth: "auto",
			gap: 10,
			autoLayout: true,
			animation: true
		}

		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		} else {
			this.options = extendDefaults(defaults, {});
		}

		if ( this.options.element != null ) this.options.isElement = true;

		if ( this.options.autoLayout === true) this.init();
	}

// Public Methods
	Grit.prototype.init = function() {
		buildOut.call(this);
		initializeEvent.call(this);
	}

	Grit.prototype.layout = function() {
		buildOut.call(this);
	}

// Private Methods
	function extendDefaults(source, properties) {
		var property;
		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}
		return source;
	}

	function transitionSelect() {
		var el = document.createElement("div");
		if (el.style.WebkitTransition) return "webkitTransitionEnd";
		if (el.style.OTransition) return "oTransitionEnd";
		return 'transitionend';
	}

	function getSize(element) {
		var computedStyle = window.getComputedStyle(element);

		var s = {};
		s.paddingTop = parseInt(computedStyle.paddingTop);
		s.paddingLeft = parseInt(computedStyle.paddingLeft);
		s.paddingRight = parseInt(computedStyle.paddingRight);
		s.paddingBottom = parseInt(computedStyle.paddingBottom);
		s.height = element.clientHeight - s.paddingTop - s.paddingBottom;
		s.width = element.clientWidth - s.paddingLeft - s.paddingRight;

		return s;
	}

	function indexOfMin(arr) {
		if (arr.length === 0) {
			return -1;
		}

		var min = arr[0];
		var minIndex = 0;

		for (var i = 1; i < arr.length; i++) {
			if (arr[i] < min) {
				minIndex = i;
				min = arr[i];
			}
		}

		return {index:minIndex, value:min};
	}

	function indexOfMax(arr) {
		if (arr.length === 0) {
			return -1;
		}

		var max = arr[0];
		var maxIndex = 0;

		for (var i = 1; i < arr.length; i++) {
			if (arr[i] > max) {
				maxIndex = i;
				max = arr[i];
			}
		}

		return {index:maxIndex, value:max};
	}

	function IsNumeric(input) {
		return (input - 0) == input && (''+input).trim().length > 0;
	}

	function buildOut() {
		this.wrap = this.options.element; //document.getElementsByClassName(this.options.selector);

		var pos = {
			top: [],
			left: []
		}

		// for (var i = 0; i < this.wrap.length; i++) {

			var computedStyle = window.getComputedStyle(this.wrap);
			var wrapInfo = {
				borderTop: parseInt(computedStyle.borderTopWidth),
				borderLeft: parseInt(computedStyle.borderLeftWidth),
				borderRight: parseInt(computedStyle.borderRightWidth),
				borderBottom: parseInt(computedStyle.borderBottomWidth),

				paddingTop: parseInt(computedStyle.paddingTop),
				paddingLeft: parseInt(computedStyle.paddingLeft),
				paddingRight: parseInt(computedStyle.paddingRight),
				paddingBottom: parseInt(computedStyle.paddingBottom),
				
				width: parseInt(computedStyle.width),
				height: parseInt(computedStyle.height)
			}

			wrapInfo.width -= wrapInfo.borderLeft + wrapInfo.borderRight + wrapInfo.paddingLeft + wrapInfo.paddingRight;
			wrapInfo.height -= wrapInfo.borderTop + wrapInfo.borderBottom + wrapInfo.paddingTop + wrapInfo.paddingBottom;

			var items = this.wrap.getElementsByClassName(this.options.itemSelector);

			if (items.length > 0) {
				
				this.options.columnWidth = items[0].offsetWidth;

				var columnWidth = ( IsNumeric(this.options.columnWidth) ) ? parseInt(this.options.columnWidth) : items[0].offsetWidth;
				var column = Math.floor(wrapInfo.width / (columnWidth + parseInt(this.options.gap)));

				column = (column < 1) ? 1 : column;

				var space = {
					top: wrapInfo.paddingTop,
					bottom: wrapInfo.paddingBottom,
					left: wrapInfo.paddingLeft + ((wrapInfo.width - ( (columnWidth*column) + (parseInt(this.options.gap)*(column-1)) )) / 2)
				}

				for (var j = 0; j < column; j++) {
					pos.top.push(space.top);
					pos.left.push(space.left + (j * (columnWidth + parseInt(this.options.gap))));
				}

				for (var j = 0; j < items.length; j++) {
					items[j].style.width = columnWidth;
					
					var tmpIndex = indexOfMin(pos.top).index;
					items[j].style.top = pos.top[tmpIndex] + "px";
					items[j].style.left = pos.left[tmpIndex] + "px";

					pos.top[tmpIndex] += items[j].offsetHeight + parseInt(this.options.gap);
				}
				console.log(pos);
				this.wrap.style.height = indexOfMax(pos.top).value + space.bottom;
			}
		// }
	}

	function initializeEvent() {
		var _ = this;

		window.onresize = function () {
			_.layout();
		}
	}
}());

// can call with
// var myGrit = new Grit();

// document.getElementsByClassName("grit-item")

// this.wrap[i].getElementsByClassName(this.options.itemSelector)[0].style.backgroundColor = "red";