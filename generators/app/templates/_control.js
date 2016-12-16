goog.provide('<%= controlBlockProvide %>');

goog.require('cl.iControl.Control');


goog.scope(function() {
    /**
     * <%= blockDescriptionName %> block
     * @param {cl.iControl.View} view
     * @param {goog.dom.DomHelper=} opt_domHelper
     * @constructor
     * @extends {cl.iControl.Control}
     */
    <%= controlBlockProvide %> = function(view, opt_domHelper) {
        <%= controlBlockProvide %>.base(
            this, 'constructor', view, opt_domHelper
        );

      this.setSupportedState(goog.ui.Component.State.ALL, false);
      this.setAllowTextSelection(false);

    };
    goog.inherits(<%= controlBlockProvide %>, cl.iControl.Control);
    var <%= blockDescriptionName %> = <%= controlBlockProvide %>;


    /**
     * List of <%= blockDescriptionName %> events
     * @enum {string}
     * @const
     */
    <%= blockDescriptionName %>.Event = {
    };


    /**
     * @override
     * @param {Element} element
     */
    <%= blockDescriptionName %>.prototype.decorateInternal = function(element) {
        <%= blockDescriptionName %>.base(this, 'decorateInternal', element);
    };


    /**
     * @override
     */
    <%= blockDescriptionName %>.prototype.enterDocument = function() {
        <%= blockDescriptionName %>.base(this, 'enterDocument');
    };

});  // goog.scope
