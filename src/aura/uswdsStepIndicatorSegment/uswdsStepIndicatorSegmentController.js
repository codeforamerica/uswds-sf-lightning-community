({
  doInit: function (component, event, helper) {
    helper.updateStatusClass(component);
    helper.validateLabelHasValue(component);
  }
});
