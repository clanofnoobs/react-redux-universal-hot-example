import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';

@connect(
  state => ({
    zip: state.weather.zip,
    editing: state.widgets.editing,
    error: state.widgets.error,
    loading: state.widgets.loading
  }),
  {...widgetActions, initializeWithKey })

export default class Weather extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    load: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({value: event.target.value});
    this.props.initialize('survey', {});
  }

  render() {
    return (
      <div className="container">
        <h1>Weather</h1>
        <Helmet title="Weather"/>

        <p>Get weather details from your area!</p>

        <div style={{textAlign: 'center', margin: 15}}>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value}/>
            <input type="submit" value="Submit zipcode"/>
          </form>
        </div>

        <p>The circles to the left of the inputs correspond to flags provided by <code>redux-form</code>:
          Touched, Visited, Active, and Dirty.</p>

      </div>
    );
  }
}

