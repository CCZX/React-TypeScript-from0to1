"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Welcome = /** @class */ (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { id: 'zhufeng' };
        return _this;
    }
    Welcome.prototype.render = function () {
        this.props.className;
        return react_1["default"].createElement('h1', { className: 'title' }, 'hello');
    };
    return Welcome;
}(react_1["default"].Component));
//{type:Hello,props,children:['hello']}
var props = { className: 'title' };
var element = (react_1["default"].createElement(Welcome, props));
react_dom_1["default"].render(element, document.getElementById('root'));
/**
 *  如何定义函数组件
 */
var b1;
(function (b1) {
    var B = /** @class */ (function () {
        function B() {
        }
        return B;
    }());
})(b1 || (b1 = {}));
var b2;
(function (b2) {
    var B = /** @class */ (function () {
        function B() {
        }
        return B;
    }());
})(b2 || (b2 = {}));
