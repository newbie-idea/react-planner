'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalColour = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _panel = require('./panel');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var globalColour = exports.globalColour = 0;

var PanelColour = function (_Component) {
  _inherits(PanelColour, _Component);

  function PanelColour() {
    _classCallCheck(this, PanelColour);

    var _this = _possibleConstructorReturn(this, (PanelColour.__proto__ || Object.getPrototypeOf(PanelColour)).call(this));

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(PanelColour, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var myList = document.getElementById("myList");
      exports.globalColour = globalColour = myList.options[myList.selectedIndex].value;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _panel2.default,
        { name: 'Colour' },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
              'legend',
              null,
              'Global Colour'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'label',
                null,
                'Texture '
              ),
              _react2.default.createElement(
                'select',
                { id: 'myList', onChange: this.handleChange.bind(this) },
                _react2.default.createElement(
                  'option',
                  { value: '0' },
                  'No Texture'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '1' },
                  'Beech'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '2' },
                  'Ivory'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '3' },
                  'Light Oak'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '4' },
                  'Lissa Oak'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '5' },
                  'Maple'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '6' },
                  'Medium Walnut'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '7' },
                  'Natural Oak'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '8' },
                  'Pippy Oak'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '9' },
                  'White'
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'button',
                null,
                'Refresh'
              )
            )
          )
        )
      );
    }
  }]);

  return PanelColour;
}(_react.Component);

exports.default = PanelColour;