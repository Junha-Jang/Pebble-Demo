import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Stream from '../imports/ui/Stream.js';

Meteor.startup(() => {
  render(<Stream />, document.getElementById('render-target-stream'));
});