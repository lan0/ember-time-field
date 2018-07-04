import State from "../utils/state";

export default State.extend({
  enter(manager) {
    this.focusIn(manager);
  },

  focusIn(manager) {
    manager.get("input").selectPeriod();
  },

  left(manager) {
    manager.transitionTo("minutes.digit1");
  },

  up(manager) {
    manager.get("input").togglePeriod();
  },

  down(manager) {
    manager.get("input").togglePeriod();
  },

  // TODO - intl
  key(manager, code) {
    switch (code) {
      case 'A'.charCodeAt(0):
        manager.get("input").changePeriod("am");
        break;

      case 'P'.charCodeAt(0):
        manager.get("input").changePeriod("pm");
        break;
    }
  }
});
