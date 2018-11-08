'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rightTextStyle = exports.leftTextStyle = exports.snapY75 = exports.snapY50 = exports.snapY1 = exports.snapX75 = exports.snapX50 = exports.snapX1 = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIf = require('../../utils/react-if');

var _reactIf2 = _interopRequireDefault(_reactIf);

var _footerToggleButton = require('./footer-toggle-button');

var _footerToggleButton2 = _interopRequireDefault(_footerToggleButton);

var _footerContentButton = require('./footer-content-button');

var _footerContentButton2 = _interopRequireDefault(_footerContentButton);

var _snap = require('../../utils/snap');

var _constants = require('../../constants');

var _sharedStyle = require('../../shared-style');

var SharedStyle = _interopRequireWildcard(_sharedStyle);

var _md = require('react-icons/lib/md');

var _version = require('../../version');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Setup variables for snap calculations in 'item.js'.
var snapX1 = exports.snapX1 = void 0;
var snapX50 = exports.snapX50 = void 0;
var snapX75 = exports.snapX75 = void 0;
var snapY1 = exports.snapY1 = void 0;
var snapY50 = exports.snapY50 = void 0;
var snapY75 = exports.snapY75 = void 0;

var footerBarStyle = {
  position: 'absolute',
  bottom: 0,
  lineHeight: '14px',
  fontSize: '12px',
  color: SharedStyle.COLORS.white,
  backgroundColor: SharedStyle.SECONDARY_COLOR.alt,
  padding: '3px 1em',
  margin: 0,
  boxSizing: 'border-box',
  cursor: 'default',
  userSelect: 'none',
  zIndex: '9001'
};

var leftTextStyle = exports.leftTextStyle = {
  position: 'relative',
  borderRight: '1px solid #FFF',
  float: 'left',
  padding: '0 1em',
  display: 'inline-block'
};

var rightTextStyle = exports.rightTextStyle = {
  position: 'relative',
  borderLeft: '1px solid #FFF',
  float: 'right',
  padding: '0 1em',
  display: 'inline-block'
};

var coordStyle = {
  display: 'inline-block',
  width: '7em',
  margin: 0,
  padding: 0
};

var appMessageStyle = { borderBottom: '1px solid #555', lineHeight: '1.5em' };

var FooterBar = function (_Component) {
  _inherits(FooterBar, _Component);

  function FooterBar(props, context) {
    _classCallCheck(this, FooterBar);

    var _this = _possibleConstructorReturn(this, (FooterBar.__proto__ || Object.getPrototypeOf(FooterBar)).call(this, props, context));

    _this.state = {};
    return _this;
  }

  _createClass(FooterBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          globalState = _props.state,
          width = _props.width,
          height = _props.height;
      var _context = this.context,
          translator = _context.translator,
          projectActions = _context.projectActions;

      var _globalState$get$toJS = globalState.get('mouse').toJS(),
          x = _globalState$get$toJS.x,
          y = _globalState$get$toJS.y;

      var zoom = globalState.get('zoom');
      var mode = globalState.get('mode');

      var errors = globalState.get('errors').toArray();
      var errorsJsx = errors.map(function (err, ind) {
        return _react2.default.createElement(
          'div',
          { key: ind, style: appMessageStyle },
          '[ ',
          new Date(err.date).toLocaleString(),
          ' ] ',
          err.error
        );
      });
      var errorLableStyle = errors.length ? { color: SharedStyle.MATERIAL_COLORS[500].red } : {};
      var errorIconStyle = errors.length ? { transform: 'rotate(45deg)', color: SharedStyle.MATERIAL_COLORS[500].red } : { transform: 'rotate(45deg)' };

      var warnings = globalState.get('warnings').toArray();
      var warningsJsx = warnings.map(function (warn, ind) {
        return _react2.default.createElement(
          'div',
          { key: ind, style: appMessageStyle },
          '[ ',
          new Date(warn.date).toLocaleString(),
          ' ] ',
          warn.warning
        );
      });
      var warningLableStyle = warnings.length ? { color: SharedStyle.MATERIAL_COLORS[500].yellow } : {};
      var warningIconStyle = warningLableStyle;

      var updateSnapMask = function updateSnapMask(val) {
        return projectActions.toggleSnap(globalState.snapMask.merge(val));
      };

      //Comment out existing footer buttons and create new footer buttons for snap variables. Also correct scale.
      return _react2.default.createElement(
        'div',
        { style: _extends({}, footerBarStyle, { width: width, height: height }) },
        _react2.default.createElement(
          _reactIf2.default,
          { condition: _constants.MODE_SNAPPING.includes(mode) },
          _react2.default.createElement(
            'div',
            { style: leftTextStyle },
            _react2.default.createElement(
              'div',
              { title: translator.t('Mouse X Coordinate'), style: coordStyle },
              'X : ',
              x.toFixed(0) / 2 * 10
            ),
            _react2.default.createElement(
              'div',
              { title: translator.t('Mouse Y Coordinate'), style: coordStyle },
              'Y : ',
              y.toFixed(0) / 2 * 10
            )
          ),
          _react2.default.createElement(
            'div',
            { style: leftTextStyle, title: translator.t('Scene Zoom Level') },
            'Zoom: ',
            zoom.toFixed(3),
            'X'
          ),
          _react2.default.createElement(
            'div',
            { style: leftTextStyle },
            _react2.default.createElement(_footerToggleButton2.default, {
              state: this.state,
              toggleOn: function toggleOn() {
                exports.snapX1 = snapX1 = true, exports.snapX50 = snapX50 = false, exports.snapX75 = snapX75 = false;
              },
              toggleOff: function toggleOff() {
                exports.snapX1 = snapX1 = false;
              },
              toggleState: snapX1,
              text: 'Snap X1',
              title: 'Snap X to Nearest 1'
            }),
            _react2.default.createElement(_footerToggleButton2.default, {
              state: this.state,
              toggleOn: function toggleOn() {
                exports.snapX50 = snapX50 = true, exports.snapX1 = snapX1 = false, exports.snapX75 = snapX75 = false;
              },
              toggleOff: function toggleOff() {
                exports.snapX50 = snapX50 = false;
              },
              toggleState: snapX50,
              text: 'Snap X50',
              title: 'Snap X to Nearest 50'
            }),
            _react2.default.createElement(_footerToggleButton2.default, {
              state: this.state,
              toggleOn: function toggleOn() {
                exports.snapX75 = snapX75 = true, exports.snapX1 = snapX1 = false, exports.snapX50 = snapX50 = false;
              },
              toggleOff: function toggleOff() {
                exports.snapX75 = snapX75 = false;
              },
              toggleState: snapX75,
              text: 'Snap X75',
              title: 'Snap X to Nearest 25 or 75'
            }),
            _react2.default.createElement(_footerToggleButton2.default, {
              state: this.state,
              toggleOn: function toggleOn() {
                exports.snapY1 = snapY1 = true, exports.snapY50 = snapY50 = false, exports.snapY75 = snapY75 = false;
              },
              toggleOff: function toggleOff() {
                exports.snapY1 = snapY1 = false;
              },
              toggleState: snapY1,
              text: 'Snap Y1',
              title: 'Snap Y to Nearest 1'
            }),
            _react2.default.createElement(_footerToggleButton2.default, {
              state: this.state,
              toggleOn: function toggleOn() {
                exports.snapY50 = snapY50 = true, exports.snapY1 = snapY1 = false, exports.snapY75 = snapY75 = false;
              },
              toggleOff: function toggleOff() {
                exports.snapY50 = snapY50 = false;
              },
              toggleState: snapY50,
              text: 'Snap Y50',
              title: 'Snap Y to Nearest 50'
            }),
            _react2.default.createElement(_footerToggleButton2.default, {
              state: this.state,
              toggleOn: function toggleOn() {
                exports.snapY75 = snapY75 = true, exports.snapY1 = snapY1 = false, exports.snapY50 = snapY50 = false;
              },
              toggleOff: function toggleOff() {
                exports.snapY75 = snapY75 = false;
              },
              toggleState: snapY75,
              text: 'Snap Y75',
              title: 'Snap Y to Nearest 25 or 75'
            })
          )
        ),
        this.props.footerbarComponents.map(function (Component, index) {
          return _react2.default.createElement(Component, { state: state, key: index });
        }),
        this.props.softwareSignature ? _react2.default.createElement(
          'div',
          {
            style: rightTextStyle
          },
          "Powered by IMAC-IT"
        ) : null,
        _react2.default.createElement(
          'div',
          { style: rightTextStyle },
          _react2.default.createElement(_footerContentButton2.default, {
            state: this.state,
            icon: _md.MdAddCircle,
            iconStyle: errorIconStyle,
            text: errors.length.toString(),
            textStyle: errorLableStyle,
            title: 'Errors [ ' + errors.length + ' ]',
            titleStyle: errorLableStyle,
            content: [errorsJsx]
          }),
          _react2.default.createElement(_footerContentButton2.default, {
            state: this.state,
            icon: _md.MdWarning,
            iconStyle: warningIconStyle,
            text: warnings.length.toString(),
            textStyle: warningLableStyle,
            title: 'Warnings [ ' + warnings.length + ' ]',
            titleStyle: warningLableStyle,
            content: [warningsJsx]
          })
        )
      );
    }
  }]);

  return FooterBar;
}(_react.Component);

exports.default = FooterBar;


FooterBar.propTypes = {
  state: _propTypes2.default.object.isRequired,
  footerbarComponents: _propTypes2.default.array.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  softwareSignature: _propTypes2.default.string
};

FooterBar.contextTypes = {
  projectActions: _propTypes2.default.object.isRequired,
  viewer2DActions: _propTypes2.default.object.isRequired,
  viewer3DActions: _propTypes2.default.object.isRequired,
  linesActions: _propTypes2.default.object.isRequired,
  holesActions: _propTypes2.default.object.isRequired,
  itemsActions: _propTypes2.default.object.isRequired,
  translator: _propTypes2.default.object.isRequired
};