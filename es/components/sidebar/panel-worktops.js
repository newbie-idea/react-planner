var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Panel from './panel';

export var globalText = '';

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
      globalText = document.getElementById("myText").value.toString();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        Panel,
        { name: 'Worktops' },
        React.createElement(
          'form',
          null,
          React.createElement(
            'fieldset',
            null,
            React.createElement(
              'legend',
              null,
              'Worktops and Kickboards'
            ),
            React.createElement('textarea', { id: 'myLabel', rows: '10', cols: '36', readOnly: 'readOnly' }),
            React.createElement(
              'p',
              null,
              React.createElement(
                'label',
                null,
                'Components '
              ),
              React.createElement('textarea', { id: 'myText', rows: '5', cols: '26' })
            ),
            React.createElement(
              'p',
              null,
              React.createElement(
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
}(Component);

export default PanelWorktops;