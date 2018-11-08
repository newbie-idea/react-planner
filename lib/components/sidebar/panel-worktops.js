'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalText = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _panel = require('./panel');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var globalText = exports.globalText = '';

var PanelWorktops = function (_Component) {
  _inherits(PanelWorktops, _Component);

  function PanelWorktops() {
    _classCallCheck(this, PanelWorktops);

    return _possibleConstructorReturn(this, (PanelWorktops.__proto__ || Object.getPrototypeOf(PanelWorktops)).call(this));
  }

  _createClass(PanelWorktops, [{
    key: 'doSomething',
    value: function doSomething(e) {
      //document.getElementById("myText").value = "Something";
      document.getElementById("myLabel").value = document.getElementById("myText").value;
      exports.globalText = globalText = document.getElementById("myText").value.toString();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _panel2.default,
        { name: 'Worktops' },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
              'legend',
              null,
              'Worktops and Kickboards'
            ),
            _react2.default.createElement('textarea', { id: 'myLabel', rows: '10', cols: '36', readOnly: 'readOnly' }),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Components '
              ),
              _react2.default.createElement('textarea', { id: 'myText', rows: '5', cols: '26' })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                { onClick: this.doSomething },
                'Add'
              )
            )
          )
        )
      );
    }
  }]);

  return PanelWorktops;
}(_react.Component);

exports.default = PanelWorktops;