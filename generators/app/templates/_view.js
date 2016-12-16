goog.provide('<%= viewBlockProvide %>');

goog.require('cl.iControl.View');



goog.scope(function() {
    /**
     * View for <%= blockDescriptionName %> block
     * @param {Object=} opt_params
     * @param {string=} opt_type
     * @param {String=} opt_modifier
     * @constructor
     * @extends {cl.iControl.View}
     */
    <%= viewBlockProvide %> = function(opt_params, opt_type, opt_modifier) {
        <%= viewBlockProvide %>.base(
            this, 'constructor', opt_params, opt_type, opt_modifier
        );
    };
    goog.inherits(<%= viewBlockProvide %>, cl.iControl.View);
    var View = <%= viewBlockProvide %>;


    /**
     * List of CSS classes
     * @enum {string}
     * @const
     */
    View.CssClass = {
        ROOT: '<%= name %>'
    };


    /**
     * @override
     * @param {Element} element
     */
    View.prototype.decorateInternal = function(element) {
        View.base(this, 'decorateInternal', element);
    };


    /**
     * @override
     */
    View.prototype.enterDocument = function() {
        View.base(this, 'enterDocument');
    };
});  // goog.scope
