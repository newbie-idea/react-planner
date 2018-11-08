import React, {Component} from 'react';
import Panel from './panel';

export let globalText = '';

export default class PanelWorktops extends Component {
  constructor() {
    super();
  }
  
  doSomething(e) {
	  //document.getElementById("myText").value = "Something";
	  document.getElementById("myLabel").value = document.getElementById("myText").value;
	  globalText = document.getElementById("myText").value.toString();
  }

  render() {
    return (
      <Panel name='Worktops'>
	      <form>
          <fieldset>
            <legend>Worktops and Kickboards</legend>
			      <textarea id="myLabel" rows="10" cols="36" readOnly="readOnly"></textarea>
            <p>
              <label>Components </label>
              <textarea id="myText" rows="5" cols="26"/>
            </p>
			      <p>
			        <label onClick={this.doSomething}>Add</label>
			      </p>
          </fieldset>
        </form>
      </Panel>
    )
  }

}