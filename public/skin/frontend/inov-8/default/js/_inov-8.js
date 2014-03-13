/*global document, window, console, FastClick*/

// Add validation hints
Validation.defaultOptions.immediate = true;
Validation.defaultOptions.addClassNameToContainer = true;

var Innov8 = (function ($, window) {
    "use strict";
    return {
        first: function () {

            //alert('First');

        },
        init: function (initModules) {

            this.first();

            $.each(initModules, function(key, value) {
                if (value === true) {
                    Innov8[key].init();
                }
            });

        }
    };
})(window.jQuery, window);

jQuery(function ($) {
    "use strict";

    FastClick.attach(document.body);

    var initModules = {};

    Innov8.init(initModules);
});