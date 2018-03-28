/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	console.clear();
	
	var Title = function Title(_ref) {
	  var todoCount = _ref.todoCount;
	
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h1",
	        null,
	        React.createElement(
	          "div",
	          null,
	          "HI! SO YOU ARE GOING TO START RUNNING."
	        ),
	        React.createElement(
	          "div",
	          null,
	          "NOW WRITE DOWN YOUR GOALS: (",
	          todoCount,
	          ")"
	        )
	      )
	    )
	  );
	};
	
	var Goals = function Goals() {
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        null,
	        " run 1 km "
	      ),
	      React.createElement(
	        "div",
	        null,
	        " run 2 km "
	      ),
	      React.createElement(
	        "div",
	        null,
	        " run 500 m  "
	      ),
	      React.createElement(
	        "div",
	        null,
	        " take part in competition  "
	      )
	    )
	  );
	};
	
	var Test = (function (_React$Component) {
	  _inherits(Test, _React$Component);
	
	  function Test() {
	    _classCallCheck(this, Test);
	
	    _get(Object.getPrototypeOf(Test.prototype), "constructor", this).call(this);
	    this.state = {
	      color_black: true
	    };
	  }
	
	  _createClass(Test, [{
	    key: "changeColor",
	    value: function changeColor() {
	      this.setState({ color_black: !this.state.color_black });
	    }
	  }]);
	
	  return Test;
	})(React.Component);
	
	var button = function button() {
	  var bgColor = undefined.state.color_black ? "black" : "white";
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "button",
	      { style: { backgroundColor: red }, onClick: undefined.changeColor.bind(undefined) },
	      "Button"
	    )
	  );
	};
	
	var TodoForm = function TodoForm(_ref2) {
	  var addTodo = _ref2.addTodo;
	
	  // Input Tracker
	  var input = undefined;
	  // Return JSX
	  return React.createElement(
	    "form",
	    { onSubmit: function (e) {
	        e.preventDefault();
	        addTodo(input.value);
	        input.value = '';
	      } },
	    React.createElement("input", { className: "form-control col-md-12", ref: function (node) {
	        input = node;
	      } }),
	    React.createElement("br", null)
	  );
	};
	
	var Todo = function Todo(_ref3) {
	  var todo = _ref3.todo;
	  var remove = _ref3.remove;
	
	  // Each Todo
	  return React.createElement(
	    "a",
	    { href: "#", className: "list-group-item", onClick: function () {
	        remove(todo.id);
	      } },
	    todo.text
	  );
	};
	
	var TodoList = function TodoList(_ref4) {
	  var todos = _ref4.todos;
	  var remove = _ref4.remove;
	
	  // Map through the todos
	  var todoNode = todos.map(function (todo) {
	    return React.createElement(Todo, { todo: todo, key: todo.id, remove: remove });
	  });
	  return React.createElement(
	    "div",
	    { className: "list-group", style: { marginTop: '30px' } },
	    todoNode
	  );
	};
	
	// Contaner Component
	// Todo Id
	window.id = 0;
	
	var TodoApp = (function (_React$Component2) {
	  _inherits(TodoApp, _React$Component2);
	
	  function TodoApp(props) {
	    _classCallCheck(this, TodoApp);
	
	    // Pass props to parent class
	    _get(Object.getPrototypeOf(TodoApp.prototype), "constructor", this).call(this, props);
	    // Set initial state
	    this.state = {
	      data: []
	    };
	    this.apiUrl = '//57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';
	  }
	
	  // Lifecycle method
	
	  _createClass(TodoApp, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this = this;
	
	      // Make HTTP reques with Axios
	      axios.get(this.apiUrl).then(function (res) {
	        // Set state with result
	        _this.setState({ data: res.data });
	      });
	    }
	
	    // Add todo handler
	  }, {
	    key: "addTodo",
	    value: function addTodo(val) {
	      var _this2 = this;
	
	      // Assemble data
	      var todo = { text: val };
	      // Update data
	      axios.post(this.apiUrl, todo).then(function (res) {
	        _this2.state.data.push(res.data);
	        _this2.setState({ data: _this2.state.data });
	      });
	    }
	
	    // Handle remove
	  }, {
	    key: "handleRemove",
	    value: function handleRemove(id) {
	      var _this3 = this;
	
	      // Filter all todos except the one to be removed
	      var remainder = this.state.data.filter(function (todo) {
	        if (todo.id !== id) return todo;
	      });
	      // Update state with filter
	      axios["delete"](this.apiUrl + '/' + id).then(function (res) {
	        _this3.setState({ data: remainder });
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      // Render JSX
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(Title, { todoCount: this.state.data.length }),
	        React.createElement(TodoForm, { addTodo: this.addTodo.bind(this) }),
	        React.createElement(TodoList, {
	          todos: this.state.data,
	          remove: this.handleRemove.bind(this)
	        }),
	        React.createElement("button", null),
	        React.createElement(Goals, null),
	        React.createElement("button", null)
	      );
	    }
	  }]);
	
	  return TodoApp;
	})(React.Component);
	
	ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('container'));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map