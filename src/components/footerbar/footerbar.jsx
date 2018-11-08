import React, { Component } from 'react';
import PropTypes from 'prop-types';
import If from '../../utils/react-if';
import FooterToggleButton from './footer-toggle-button';
import FooterContentButton from './footer-content-button';
import { SNAP_POINT, SNAP_LINE, SNAP_SEGMENT, SNAP_GRID, SNAP_GUIDE } from '../../utils/snap';
import { MODE_SNAPPING } from '../../constants';
import * as SharedStyle from '../../shared-style';
import { MdAddCircle, MdWarning } from 'react-icons/lib/md';
import { VERSION } from '../../version';

//Setup variables for snap calculations in 'item.js'.
export let snapX1;
export let snapX50;
export let snapX75;
export let snapY1;
export let snapY50;
export let snapY75;

const footerBarStyle = {
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

export const leftTextStyle = {
  position: 'relative',
  borderRight: '1px solid #FFF',
  float: 'left',
  padding: '0 1em',
  display: 'inline-block'
};

export const rightTextStyle = {
  position: 'relative',
  borderLeft: '1px solid #FFF',
  float: 'right',
  padding: '0 1em',
  display: 'inline-block'
};

const coordStyle = {
  display: 'inline-block',
  width: '7em',
  margin: 0,
  padding: 0
};

const appMessageStyle = { borderBottom: '1px solid #555', lineHeight: '1.5em' };

export default class FooterBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    let { state: globalState, width, height } = this.props;
    let { translator, projectActions } = this.context;
    let { x, y } = globalState.get('mouse').toJS();
    let zoom = globalState.get('zoom');
    let mode = globalState.get('mode');

    let errors = globalState.get('errors').toArray();
    let errorsJsx = errors.map((err, ind) =>
      <div key={ind} style={appMessageStyle}>[ {(new Date(err.date)).toLocaleString()} ] {err.error}</div>
    );
    let errorLableStyle = errors.length ? { color: SharedStyle.MATERIAL_COLORS[500].red } : {};
    let errorIconStyle = errors.length ? { transform: 'rotate(45deg)', color: SharedStyle.MATERIAL_COLORS[500].red } : { transform: 'rotate(45deg)' };

    let warnings = globalState.get('warnings').toArray();
    let warningsJsx = warnings.map((warn, ind) =>
      <div key={ind} style={appMessageStyle}>[ {(new Date(warn.date)).toLocaleString()} ] {warn.warning}</div>
    );
    let warningLableStyle = warnings.length ? { color: SharedStyle.MATERIAL_COLORS[500].yellow } : {};
    let warningIconStyle = warningLableStyle;

    let updateSnapMask = (val) => projectActions.toggleSnap(globalState.snapMask.merge(val));

	  //Comment out existing footer buttons and create new footer buttons for snap variables. Also correct scale.
    return (
      <div style={{ ...footerBarStyle, width, height }}>

        <If condition={MODE_SNAPPING.includes(mode)}>
          <div style={leftTextStyle}>
            <div title={translator.t('Mouse X Coordinate')} style={coordStyle}>X : {x.toFixed(0)/2 * 10}</div>
            <div title={translator.t('Mouse Y Coordinate')} style={coordStyle}>Y : {y.toFixed(0)/2 * 10}</div>
          </div>

          <div style={leftTextStyle} title={translator.t('Scene Zoom Level')}>Zoom: {zoom.toFixed(3)}X</div>

          <div style={leftTextStyle}>
            {/* <FooterToggleButton
              state={this.state}
              toggleOn={() => { updateSnapMask({ SNAP_POINT: true }); }}
              toggleOff={() => { updateSnapMask({ SNAP_POINT: false }); }}
              text="Snap PT"
              toggleState={globalState.snapMask.get(SNAP_POINT)}
              title={translator.t('Snap to Point')}
            />
            <FooterToggleButton
              state={this.state}
              toggleOn={() => { updateSnapMask({ SNAP_LINE: true }); }}
              toggleOff={() => { updateSnapMask({ SNAP_LINE: false }); }}
              text="Snap LN"
              toggleState={globalState.snapMask.get(SNAP_LINE)}
              title={translator.t('Snap to Line')}
            />
            <FooterToggleButton
              state={this.state}
              toggleOn={() => { updateSnapMask({ SNAP_SEGMENT: true }); }}
              toggleOff={() => { updateSnapMask({ SNAP_SEGMENT: false }); }}
              text="Snap SEG"
              toggleState={globalState.snapMask.get(SNAP_SEGMENT)}
              title={translator.t('Snap to Segment')}
            />
            <FooterToggleButton
              state={this.state}
              toggleOn={() => { updateSnapMask({ SNAP_GRID: true }); }}
              toggleOff={() => { updateSnapMask({ SNAP_GRID: false }); }}
              text="Snap GRD"
              toggleState={globalState.snapMask.get(SNAP_GRID)}
              title={translator.t('Snap to Grid')}
            />
            <FooterToggleButton
              state={this.state}
              toggleOn={() => { updateSnapMask({ SNAP_GUIDE: true }); }}
              toggleOff={() => { updateSnapMask({ SNAP_GUIDE: false }); }}
              text="Snap GDE"
              toggleState={globalState.snapMask.get(SNAP_GUIDE)}
              title={translator.t('Snap to Guide')}
            /> */}
			
             {/* Toggle buttons to determine which snap features are turned on */}
             <FooterToggleButton
                state={this.state}
                toggleOn={() => { snapX1 = true, snapX50 = false, snapX75 = false; }}
                toggleOff={() => { snapX1 = false; }}
			          toggleState={snapX1}
                text="Snap X1"
                title='Snap X to Nearest 1'
              />
			       <FooterToggleButton
                state={this.state}
                toggleOn={() => { snapX50 = true, snapX1 = false, snapX75 = false; }}
                toggleOff={() => { snapX50 = false; }}
			          toggleState={snapX50}
                text="Snap X50"
                title='Snap X to Nearest 50'
              />
			        <FooterToggleButton
                state={this.state}
                toggleOn={() => { snapX75 = true, snapX1 = false, snapX50 = false; }}
                toggleOff={() => { snapX75 = false; }}
			          toggleState={snapX75}
                text="Snap X75"
                title='Snap X to Nearest 25 or 75'
              />
              <FooterToggleButton
                state={this.state}
                toggleOn={() => { snapY1 = true, snapY50 = false, snapY75 = false; }}
                toggleOff={() => { snapY1 = false; }}
			          toggleState={snapY1}
                text="Snap Y1"
                title='Snap Y to Nearest 1'
              />
			        <FooterToggleButton
                state={this.state}
                toggleOn={() => { snapY50 = true, snapY1 = false, snapY75 = false; }}
                toggleOff={() => { snapY50 = false; }}
			          toggleState={snapY50}
                text="Snap Y50"
                title='Snap Y to Nearest 50'
              />
			        <FooterToggleButton
                state={this.state}
                toggleOn={() => { snapY75 = true, snapY1 = false, snapY50 = false; }}
                toggleOff={() => { snapY75 = false; }}
			          toggleState={snapY75}
                text="Snap Y75"
                title='Snap Y to Nearest 25 or 75'
              />
          </div>
        </If>

        {this.props.footerbarComponents.map((Component, index) => <Component state={state} key={index} />)}

        {
          this.props.softwareSignature ?
            <div
              style={rightTextStyle}
            >
              {"Powered by IMAC-IT"}
            </div>
            : null
        }

        <div style={rightTextStyle}>
          <FooterContentButton
            state={this.state}
            icon={MdAddCircle}
            iconStyle={errorIconStyle}
            text={errors.length.toString()}
            textStyle={errorLableStyle}
            title={`Errors [ ${errors.length} ]`}
            titleStyle={errorLableStyle}
            content={[errorsJsx]}
          />
          <FooterContentButton
            state={this.state}
            icon={MdWarning}
            iconStyle={warningIconStyle}
            text={warnings.length.toString()}
            textStyle={warningLableStyle}
            title={`Warnings [ ${warnings.length} ]`}
            titleStyle={warningLableStyle}
            content={[warningsJsx]}
          />
        </div>

      </div>
    );
  }
}

FooterBar.propTypes = {
  state: PropTypes.object.isRequired,
  footerbarComponents: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  softwareSignature: PropTypes.string
};

FooterBar.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
