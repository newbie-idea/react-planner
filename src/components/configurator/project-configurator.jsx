import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  ContentTitle,
  ContentContainer,
  FormLabel,
  FormBlock,
  FormNumberInput,
  FormSubmitButton,
  CancelButton
} from '../style/export';

export default class ProjectConfigurator extends Component {

  constructor(props, context) {
    super(props, context);

    let scene = props.state.scene;

    this.state = {
      dataWidth: scene.width,
      dataHeight: scene.height,
      dataGlobalTexture: scene.globalTexture, //Added for global texture.
      dataWorktopTexture: scene.worktopTexture, //Added for worktop texture.
    };
  }

  onSubmit(event) {
    event.preventDefault();

    let {projectActions} = this.context;

    let {dataWidth, dataHeight, dataGlobalTexture, dataWorktopTexture, dataWorktopsWidth, dataWorktopsHeight, dataWorktopsMaterial, dataWorktopsType, dataWorktopsCount, dataWorktops} = this.state; //Added dataGlobalTexture for global texture, dataWorktopTexture for worktop texture and the dataWorktops values for worktops and kickboards.
    dataWidth = parseInt(dataWidth);
    dataHeight = parseInt(dataHeight);
    if (dataWidth <= 100 || dataHeight <= 100) {
      alert('Scene size too small');
    } else {
      projectActions.setProjectProperties({width: dataWidth, height: dataHeight, globalTexture: dataGlobalTexture, worktopTexture: dataWorktopTexture }); //Added dataGlobalTexture for global texture, dataWorktopTexture for worktop texture and assigned the dataWorktops values to the specific json values.
    }
  }


  render() {
    let {width, height} = this.props;
    let {dataWidth, dataHeight, dataGlobalTexture, dataWorktopTexture} = this.state; //Added dataGlobalTexture for global texture, dataWorktopTexture for worktop texture and the dataWorktops values for worktops and kickboards.
    let {projectActions, translator} = this.context;

	  //Create new form blocks for global texture, worktop texture and worktops and kickboards.
    return (
      <ContentContainer width={width} height={height}>
        <ContentTitle>{translator.t('Project config')}</ContentTitle>

        <form onSubmit={e => this.onSubmit(e)}>
          <FormBlock>
            <FormLabel htmlFor='width'>{translator.t('width')}</FormLabel>
            <FormNumberInput
              id='width'
              placeholder='width'
              value={dataWidth / 2 * 10}
              onChange={e => this.setState({dataWidth: e.target.value / 10 * 2})}
            />
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor='height'>{translator.t('height')}</FormLabel>
            <FormNumberInput
              id='height'
              placeholder='height'
              value={dataHeight / 2 * 10}
              onChange={e => this.setState({dataHeight: e.target.value / 10 * 2})}
            />
          </FormBlock>
		  
		      {/* <FormBlock>
            <FormLabel htmlFor='texture'>{translator.t('texture')}</FormLabel>
            <FormNumberInput
              id='texture'
              placeholder='texture'
              value={dataTexture}
              onChange={e => this.setState({dataTexture: e.target.value})}
            />
          </FormBlock> */}
		  
		      <FormBlock>
            <FormLabel htmlFor='unit texture'>{translator.t('unit texture')}</FormLabel>
            <select id = "unit" value={dataGlobalTexture} onChange={e => this.setState({dataGlobalTexture: e.target.value})}>
              <option value = "No Texture"		>No Texture</option>
              <option value = "Beech"			    >Beech</option>
              <option value = "Ivory"			    >Ivory</option>
              <option value = "Light Oak"		  >Light Oak</option>
			        <option value = "Lissa Oak"		  >Lissa Oak</option>
              <option value = "Maple"			    >Maple</option>
              <option value = "Medium Walnut"	>Medium Walnut</option>
              <option value = "Natural Oak"		>Natural Oak</option>
			        <option value = "Pippy Oak"		  >Pippy Oak</option>
              <option value = "White"			    >White</option>
            </select>
          </FormBlock>

          <FormBlock>
            <FormLabel htmlFor='worktop texture'>{translator.t('worktop texture')}</FormLabel>
            <select id = "worktop" value={dataWorktopTexture} onChange={e => this.setState({dataWorktopTexture: e.target.value})}>
              <option value = "No Texture"		  >No Texture</option>
              <option value = "Cappuccino"	    >Cappuccino (40)</option>
              <option value = "Light Walnut"    >Light Walnut (40)</option>
              <option value = "Porto Granite"	  >Porto Granite (40)</option>
			        <option value = "Medium Walnut"	  >Medium Walnut (30)</option>
              <option value = "Mocca Granite"   >Mocca Granite (30)</option>
              <option value = "Porto Granite"	  >Porto Granite (30)</option>
			        <option value = "Venetian Stone"  >Venetian Stone (30)</option>
            </select>
          </FormBlock>

          <table style={{float: 'right'}}>
            <tbody>
            <tr>
              <td>
                <CancelButton size='large'
                onClick={e => projectActions.rollback()}>{translator.t('Cancel')}</CancelButton>
              </td>
              <td>
                <FormSubmitButton size='large'>{translator.t('Save')}</FormSubmitButton>
              </td>
            </tr>
            </tbody>
          </table>
        </form>
      </ContentContainer>
    )
  }
}

ProjectConfigurator.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
};

ProjectConfigurator.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
