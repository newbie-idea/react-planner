'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _export = require('../style/export');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectConfigurator = function (_Component) {
  _inherits(ProjectConfigurator, _Component);

  function ProjectConfigurator(props, context) {
    _classCallCheck(this, ProjectConfigurator);

    var _this = _possibleConstructorReturn(this, (ProjectConfigurator.__proto__ || Object.getPrototypeOf(ProjectConfigurator)).call(this, props, context));

    var scene = props.state.scene;

    _this.state = {
      dataWidth: scene.width,
      dataHeight: scene.height,
      dataGlobalTexture: scene.globalTexture, //Added for global texture.
      dataWorktopTexture: scene.worktopTexture //Added for worktop texture.
    };
    return _this;
  }

  _createClass(ProjectConfigurator, [{
    key: 'onSubmit',
    value: function onSubmit(event) {
      event.preventDefault();

      var projectActions = this.context.projectActions;
      var _state = this.state,
          dataWidth = _state.dataWidth,
          dataHeight = _state.dataHeight,
          dataGlobalTexture = _state.dataGlobalTexture,
          dataWorktopTexture = _state.dataWorktopTexture,
          dataWorktopsWidth = _state.dataWorktopsWidth,
          dataWorktopsHeight = _state.dataWorktopsHeight,
          dataWorktopsMaterial = _state.dataWorktopsMaterial,
          dataWorktopsType = _state.dataWorktopsType,
          dataWorktopsCount = _state.dataWorktopsCount,
          dataWorktops = _state.dataWorktops; //Added dataGlobalTexture for global texture, dataWorktopTexture for worktop texture and the dataWorktops values for worktops and kickboards.

      dataWidth = parseInt(dataWidth);
      dataHeight = parseInt(dataHeight);
      if (dataWidth <= 100 || dataHeight <= 100) {
        alert('Scene size too small');
      } else {
        projectActions.setProjectProperties({ width: dataWidth, height: dataHeight, globalTexture: dataGlobalTexture, worktopTexture: dataWorktopTexture }); //Added dataGlobalTexture for global texture, dataWorktopTexture for worktop texture and assigned the dataWorktops values to the specific json values.
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          width = _props.width,
          height = _props.height;
      var _state2 = this.state,
          dataWidth = _state2.dataWidth,
          dataHeight = _state2.dataHeight,
          dataGlobalTexture = _state2.dataGlobalTexture,
          dataWorktopTexture = _state2.dataWorktopTexture; //Added dataGlobalTexture for global texture, dataWorktopTexture for worktop texture and the dataWorktops values for worktops and kickboards.

      var _context = this.context,
          projectActions = _context.projectActions,
          translator = _context.translator;

      //Create new form blocks for global texture, worktop texture and worktops and kickboards.

      return _react2.default.createElement(
        _export.ContentContainer,
        { width: width, height: height },
        _react2.default.createElement(
          _export.ContentTitle,
          null,
          translator.t('Project config')
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.onSubmit(e);
            } },
          _react2.default.createElement(
            _export.FormBlock,
            null,
            _react2.default.createElement(
              _export.FormLabel,
              { htmlFor: 'width' },
              translator.t('width')
            ),
            _react2.default.createElement(_export.FormNumberInput, {
              id: 'width',
              placeholder: 'width',
              value: dataWidth / 2 * 10,
              onChange: function onChange(e) {
                return _this2.setState({ dataWidth: e.target.value / 10 * 2 });
              }
            })
          ),
          _react2.default.createElement(
            _export.FormBlock,
            null,
            _react2.default.createElement(
              _export.FormLabel,
              { htmlFor: 'height' },
              translator.t('height')
            ),
            _react2.default.createElement(_export.FormNumberInput, {
              id: 'height',
              placeholder: 'height',
              value: dataHeight / 2 * 10,
              onChange: function onChange(e) {
                return _this2.setState({ dataHeight: e.target.value / 10 * 2 });
              }
            })
          ),
          _react2.default.createElement(
            _export.FormBlock,
            null,
            _react2.default.createElement(
              _export.FormLabel,
              { htmlFor: 'unit texture' },
              translator.t('unit texture')
            ),
            _react2.default.createElement(
              'select',
              { id: 'unit', value: dataGlobalTexture, onChange: function onChange(e) {
                  return _this2.setState({ dataGlobalTexture: e.target.value });
                } },
              _react2.default.createElement(
                'option',
                { value: 'No Texture' },
                'No Texture'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Beech' },
                'Beech'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Ivory' },
                'Ivory'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Light Oak' },
                'Light Oak'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Lissa Oak' },
                'Lissa Oak'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Maple' },
                'Maple'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Medium Walnut' },
                'Medium Walnut'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Natural Oak' },
                'Natural Oak'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Pippy Oak' },
                'Pippy Oak'
              ),
              _react2.default.createElement(
                'option',
                { value: 'White' },
                'White'
              )
            )
          ),
          _react2.default.createElement(
            _export.FormBlock,
            null,
            _react2.default.createElement(
              _export.FormLabel,
              { htmlFor: 'worktop texture' },
              translator.t('worktop texture')
            ),
            _react2.default.createElement(
              'select',
              { id: 'worktop', value: dataWorktopTexture, onChange: function onChange(e) {
                  return _this2.setState({ dataWorktopTexture: e.target.value });
                } },
              _react2.default.createElement(
                'option',
                { value: 'No Texture' },
                'No Texture'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Cappuccino' },
                'Cappuccino (40)'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Light Walnut' },
                'Light Walnut (40)'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Porto Granite' },
                'Porto Granite (40)'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Medium Walnut' },
                'Medium Walnut (30)'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Mocca Granite' },
                'Mocca Granite (30)'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Porto Granite' },
                'Porto Granite (30)'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Venetian Stone' },
                'Venetian Stone (30)'
              )
            )
          ),
          _react2.default.createElement(
            'table',
            { style: { float: 'right' } },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _export.CancelButton,
                    { size: 'large',
                      onClick: function onClick(e) {
                        return projectActions.rollback();
                      } },
                    translator.t('Cancel')
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _export.FormSubmitButton,
                    { size: 'large' },
                    translator.t('Save')
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ProjectConfigurator;
}(_react.Component);

exports.default = ProjectConfigurator;


ProjectConfigurator.propTypes = {
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  state: _propTypes2.default.object.isRequired
};

ProjectConfigurator.contextTypes = {
  projectActions: _propTypes2.default.object.isRequired,
  translator: _propTypes2.default.object.isRequired
};