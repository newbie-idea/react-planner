import React, {Component} from 'react';
import Panel from './panel';

export let globalColour = 0;

export default class PanelColour extends Component {
  constructor() {
    super();

    this.state = {
	  value: ''
    };
  }
  
  handleChange(e) {
	  let myList = document.getElementById("myList");
	  globalColour = myList.options[myList.selectedIndex].value;
  }

  render() {
    return (
      <Panel name='Colour'>
	      <form>
          <fieldset>
            <legend>Global Colour</legend>
            <p>
              <label>Texture </label>
              <select id = "myList" onChange={this.handleChange.bind(this)}>
                <option value = "0">No Texture</option>
                <option value = "1">Beech</option>
                <option value = "2">Ivory</option>
                <option value = "3">Light Oak</option>
				        <option value = "4">Lissa Oak</option>
                <option value = "5">Maple</option>
                <option value = "6">Medium Walnut</option>
                <option value = "7">Natural Oak</option>
				        <option value = "8">Pippy Oak</option>
                <option value = "9">White</option>
              </select>
            </p>
			      <p>
			        <button>Refresh</button>
			      </p>
          </fieldset>
        </form>
      </Panel>
    )
  }

}