/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by ryan on 2018/2/21.
                                                                                                                                                                                                                                                                   */


var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(19);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _products = __webpack_require__(20);

var _products2 = _interopRequireDefault(_products);

var _news = __webpack_require__(21);

var _news2 = _interopRequireDefault(_news);

var _about = __webpack_require__(22);

var _about2 = _interopRequireDefault(_about);

var _contact = __webpack_require__(23);

var _contact2 = _interopRequireDefault(_contact);

var _search = __webpack_require__(24);

var _search2 = _interopRequireDefault(_search);

var _Product = __webpack_require__(25);

var _Product2 = _interopRequireDefault(_Product);

var _Item = __webpack_require__(26);

var _Item2 = _interopRequireDefault(_Item);

var _user = __webpack_require__(27);

var _user2 = _interopRequireDefault(_user);

var _Login = __webpack_require__(28);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(29);

var _Register2 = _interopRequireDefault(_Register);

var _NotFoundPage = __webpack_require__(30);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _products2.default, {
        path: '/products'
    }), _extends({}, _news2.default, {
        path: '/news'
    }), _extends({}, _about2.default, {
        path: '/about'
    }), _extends({}, _contact2.default, {
        path: '/contact'
    }), _extends({}, _user2.default, {
        path: '/user'
    }), _extends({}, _Login2.default, {
        path: '/login'

    }), _extends({}, _Register2.default, {
        path: '/register'
    }), _extends({}, _search2.default, {
        routes: [_extends({}, _Product2.default, {
            path: '/search/',
            exact: true
        }), _extends({}, _Item2.default, {
            path: '/search/:itemId'
        }), _extends({}, _NotFoundPage2.default)]
    })]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by ryan on 2018/2/21.
 */
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = "fetch_current_user";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by ryan on 2018/2/27.
 */
exports.default = {
    colors: {
        primary: '#BD4932',
        secondary: '#DB9E36',
        grayLight: '#E5E5E5',
        grayDark: '#333',
        danger: '#E0320f',
        success: '#9BD347',
        blue: '#22d3c5',
        blue2: '#28ecdc',
        green: '#8bdc65',
        green2: '#9bf671',
        gray: '#a5bbc2',
        gray2: '#7e969b',
        red: '#ff8188',
        red2: '#ff8188',
        yellow: '#e1e61e'
    },
    fontFamilies: {
        primary: "'Roboto', sans-serif"
    },
    medias: {
        phablet: '850px',
        desktop: '992px',
        xl: '1440px',
        maxW: '1000px',
        mobile: '800px'
    }

};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _expressHttpProxy = __webpack_require__(12);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(31);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(35);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /**
                                     * Created by ryan on 2018/2/5.
                                     */


app.use('/api', (0, _expressHttpProxy2.default)('http://localhost', {
    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return optsl;
    }
}));

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);
    //console.log(Routes);
    console.log("path: ", req.path);
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        //console.log('route : ' , route);
        return route.loadData ? route.loadData(store) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function () {
        var context = {};
        var content = (0, _renderer2.default)(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n     /* \u8A2D\u5B9A\u9AD8\u5EA6\u6700\u5C0F\u70BA100%, \u5982\u679C\u5167\u5BB9\u5340\u584A\u5F88\u591A, \u53EF\u4EE5\u9577\u5927 */\n    min-height: 100%;\n    /* \u4F4D\u7F6E\u8A2D\u70BArelative, \u4F5C\u70BAfooter\u5340\u584A\u4F4D\u7F6E\u7684\u53C3\u8003 */\n    position: relative;\n    \n    \n    /* Now we have our methods on media and can use them instead of raw queries */\n    ', '\n    ', '\n    ', '\n'], ['\n     /* \u8A2D\u5B9A\u9AD8\u5EA6\u6700\u5C0F\u70BA100%, \u5982\u679C\u5167\u5BB9\u5340\u584A\u5F88\u591A, \u53EF\u4EE5\u9577\u5927 */\n    min-height: 100%;\n    /* \u4F4D\u7F6E\u8A2D\u70BArelative, \u4F5C\u70BAfooter\u5340\u584A\u4F4D\u7F6E\u7684\u53C3\u8003 */\n    position: relative;\n    \n    \n    /* Now we have our methods on media and can use them instead of raw queries */\n    ', '\n    ', '\n    ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['background: ', ';'], ['background: ', ';']),
    _templateObject3 = _taggedTemplateLiteral(['background: mediumseagreen;'], ['background: mediumseagreen;']),
    _templateObject4 = _taggedTemplateLiteral(['background: palevioletred;'], ['background: palevioletred;']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

var _action = __webpack_require__(14);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(16);

var _Footer2 = _interopRequireDefault(_Footer);

__webpack_require__(17);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = __webpack_require__(18);

var _media2 = _interopRequireDefault(_media);

var _theme = __webpack_require__(7);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * Created by ryan on 2018/2/21.
                                                                                                                                                   */


var Content = _styledComponents2.default.div(_templateObject, _media2.default.desktop(_templateObject2, _theme2.default.colors.blue), _media2.default.phablet(_templateObject3), _media2.default.mobile(_templateObject4));

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        Content,
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes),
        _react2.default.createElement(_Footer2.default, null)
    );
};

exports.default = {
    component: App,
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _action.fetchCurrentUser)());
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchCurrentUser = undefined;

var _actionTypes = __webpack_require__(6);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by ryan on 2018/2/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/current_user');

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: _actionTypes.FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var auth = _ref.auth;


    return _react2.default.createElement(
        'div',
        { id: 'eiway_header' },
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/' },
                    ' EI-WAY Logo'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/products' },
                    '\u7522\u54C1\u4ECB\u7D39'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/news' },
                    '\u6700\u65B0\u6D88\u606F'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/about' },
                    '\u95DC\u65BC\u6211\u5011'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/contact' },
                    '\u806F\u7D61\u8CC7\u8A0A'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/search' },
                    '\u7522\u54C1\u641C\u5C0B'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/login' },
                    '\u767B\u5165'
                )
            )
        )
    );
}; /**
    * Created by ryan on 2018/2/21.
    */


function mapStateToProps(_ref2) {
    var auth = _ref2.auth;

    return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Header);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
    return _react2.default.createElement(
        'div',
        { id: 'eiway_footer' },
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
            'div',
            null,
            'i am footer'
        )
    );
}; /**
    * Created by ryan on 2018/2/26.
    */
exports.default = Footer;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        @media (max-width : ', ') {\n            ', '\n        }\n    '], ['\n        @media (max-width : ', ') {\n            ', '\n        }\n    ']);

var _styledComponents = __webpack_require__(4);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = __webpack_require__(7);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * Created by ryan on 2018/2/27.
                                                                                                                                                   */


var media = Object.keys(_theme2.default.medias).reduce(function (acc, label) {
    acc[label] = function () {
        return (0, _styledComponents.css)(_templateObject, _theme2.default.medias[label], _styledComponents.css.apply(undefined, arguments));
    };
    return acc;
}, {});

exports.default = media;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        "div",
        { id: "eiway_content" },
        _react2.default.createElement(
            "h3",
            null,
            "Welcome"
        ),
        _react2.default.createElement(
            "p",
            null,
            " Home Page"
        )
    );
}; /**
    * Created by ryan on 2018/2/21.
    */

exports.default = {
    component: Home
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ryan on 2018/2/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ProductsIntro = function (_Component) {
    _inherits(ProductsIntro, _Component);

    function ProductsIntro() {
        _classCallCheck(this, ProductsIntro);

        return _possibleConstructorReturn(this, (ProductsIntro.__proto__ || Object.getPrototypeOf(ProductsIntro)).apply(this, arguments));
    }

    _createClass(ProductsIntro, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                ' Product introduction'
            );
        }
    }]);

    return ProductsIntro;
}(_react.Component);

exports.default = {
    component: ProductsIntro
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ryan on 2018/2/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var News = function (_Component) {
    _inherits(News, _Component);

    function News() {
        _classCallCheck(this, News);

        return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));
    }

    _createClass(News, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                ' News Page '
            );
        }
    }]);

    return News;
}(_react.Component);

exports.default = {
    component: News
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ryan on 2018/2/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var About = function (_Component) {
    _inherits(About, _Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "eiway_content" },
                " About Page "
            );
        }
    }]);

    return About;
}(_react.Component);

exports.default = {
    component: About
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ryan on 2018/2/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Contact = function (_Component) {
    _inherits(Contact, _Component);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                ' Contact Page '
            );
        }
    }]);

    return Contact;
}(_react.Component);

exports.default = {
    component: Contact
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ryan on 2018/2/26.
 */
var Search = function Search(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: Search
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ryan on 2018/2/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SearchProduct = function (_Component) {
    _inherits(SearchProduct, _Component);

    function SearchProduct(props) {
        _classCallCheck(this, SearchProduct);

        return _possibleConstructorReturn(this, (SearchProduct.__proto__ || Object.getPrototypeOf(SearchProduct)).call(this, props));
    }

    _createClass(SearchProduct, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            console.log("params : ", this.props.match);
            var itemId = this.props.match.params.itemId;

            return _react2.default.createElement(
                'div',
                null,
                'Search Product Page1111',
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/search/1234566' },
                        'item'
                    )
                ),
                itemId
            );
        }
    }]);

    return SearchProduct;
}(_react.Component);

exports.default = {
    component: SearchProduct
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ryan on 2018/2/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Item = function (_Component) {
    _inherits(Item, _Component);

    function Item(props) {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));
    }

    _createClass(Item, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            console.log("params : ", this.props.match.params);
            var itemId = this.props.match.params.itemId;

            return _react2.default.createElement(
                "div",
                null,
                "Item id : ",
                itemId
            );
        }
    }]);

    return Item;
}(_react.Component);

exports.default = {
    component: Item
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ryan on 2018/2/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var User = function (_Component) {
    _inherits(User, _Component);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
    }

    _createClass(User, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'User Page '
            );
        }
    }]);

    return User;
}(_react.Component);

exports.default = {
    component: User
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ryan on 2018/2/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'eiway_content' },
                _react2.default.createElement(
                    'div',
                    null,
                    'Login Page'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/register' },
                        '\u8A3B\u518A'
                    )
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

exports.default = {
    component: Login
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ryan on 2018/2/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register() {
        _classCallCheck(this, Register);

        return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
    }

    _createClass(Register, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Register Page'
            );
        }
    }]);

    return Register;
}(_react.Component);

exports.default = {
    component: Register
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Ooops, route not found. '
        )
    );
}; /**
    * Created by ryan on 2018/2/21.
    */
exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(32);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(33);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(34);

var _styledComponents = __webpack_require__(4);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
    var sheet = new _styledComponents.ServerStyleSheet();
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _styledComponents.StyleSheetManager,
        { sheet: sheet.instance },
        _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { location: req.path, context: context },
                _react2.default.createElement(
                    'div',
                    null,
                    (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
                )
            )
        )
    ));

    var styleTags = sheet.getStyleTags();
    var helmet = _reactHelmet.Helmet.renderStatic();

    return '\n        <html>\n            <head>\n                ' + helmet.title.toString() + '\n                ' + helmet.meta.toString() + '\n                ' + styleTags + '\n                 <link rel="stylesheet" href="/style.css">\n            </head>\n            <body>\n                <div id="root">' + content + '</div>\n                <script>\n                    window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                </script>\n                <script src="/bundle.js"></script>\n            </body>\n        </html>\n    ';
}; /**
    * Created by ryan on 2018/2/5.
    */

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(36);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(37);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(38);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ryan on 2018/2/5.
 */
exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        baseURL: 'http://localhost',
        headers: { cookie: req.get('cookie') || '' }
    });

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
    return store;
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _authReducer = __webpack_require__(39);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ryan on 2018/2/21.
 */

exports.default = (0, _redux.combineReducers)({
  common: _authReducer2.default
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

var _actionTypes = __webpack_require__(6);

/***/ })
/******/ ]);