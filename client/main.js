import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import AppContainerRouter from '../imports/containers/AppContainerRouter.jsx';
 
Meteor.startup(() => {
  render(<AppContainerRouter />, document.getElementById('render-target'));
});