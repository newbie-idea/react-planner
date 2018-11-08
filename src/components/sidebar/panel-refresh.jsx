import React, {Component} from 'react';
import Panel from './panel';

export default class PanelRefresh extends Component {
  constructor() {
    super();

    this.state = {
	  value: ''
    };
  }

  render() {
    return (
      <Panel name='Refresh'>
	      <form>
          <fieldset>
            <legend>Refresh</legend>
			      <p>
			        <button>Refresh</button>
			      </p>
          </fieldset>
        </form>
      </Panel>
    )
  }

}