var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Panel from './panel';

export var globalColour = 0;

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
      globalColour = myList.options[myList.selectedIndex].value;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        Panel,
        { name: 'Colour' },
        React.createElement(
          'form',
          null,
          React.createElement(
            'fieldset',
            null,
            React.createElement(
              'legend',
              null,
              'Global Colour'
            ),
            React.createElement(
              'p',
              null,
              React.createElement(
                'label',
                null,
                'Texture '
              ),
              React.createElement(
                'select',
                { id: 'myList', onChange: this.handleChange.bind(this) },
                React.createElement(
                  'option',
                  { value: '0' },
                  'No Texture'
                ),
                React.createElement(
                  'option',
                  { value: '1' },
                  'Beech'
                ),
                React.createElement(
                  'option',
                  { value: '2' },
                  'Ivory'
                ),
                React.createElement(
                  'option',
                  { value: '3' },
                  'Light Oak'
                ),
                React.createElement(
                  'option',
                  { value: '4' },
                  'Lissa Oak'
                ),
                React.createElement(
                  'option',
                  { value: '5' },
                  'Maple'
                ),
                React.createElement(
                  'option',
                  { value: '6' },
                  'Medium Walnut'
                ),
                React.createElement(
                  'option',
                  { value: '7' },
                  'Natural Oak'
                ),
                React.createElement(
                  'option',
                  { value: '8' },
                  'Pippy Oak'
                ),
                React.createElement(
                  'option',
                  { value: '9' },
                  'White'
                )
              )
            ),
            React.createElement(
              'p',
              null,
              React.createElement(
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
}(Component);

export default PanelColour;