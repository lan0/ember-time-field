import Ember from 'ember';
import StateManager from "ember-states/state-manager";
import UnfocusedState from './unfocused';
import FocusedState from './focused';

export default StateManager.extend({
  // enableLogging: true,
  initialState: 'unfocused',
  unfocused:    UnfocusedState,
  focused:      FocusedState,

  unhandledEvent(manager, event) {
    if (this.get('currentState.name') !== 'unfocused') {
      throw new Ember.Error(this.toString() + " could not respond to event " + event + " in state " + this.get('currentState.path') + ".");
    }
  },
});
