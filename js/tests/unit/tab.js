/**
 * Author: guoyao
 * Time: 08-13-2013 10:38
 * Blog: http://www.guoyao.me
 */

$(function () {

    var $ = window.jQuery;

    module("tabs");

    test("should provide no conflict", function () {
        var guiTab = $.fn.guiTab.noConflict();
        ok(!$.fn.guiTab, 'guiTab was set back to undefined (org value)');
        $.fn.guiTab = guiTab;
    });

    test("should be defined on jquery object", function () {
        ok($(document.body).guiTab, 'guiTab method is defined');
    });

    test("should return element", function () {
        ok($(document.body).guiTab()[0] == document.body, 'document.body returned');
    });

    test("should activate element by tab id", function () {
        var tabsHTML =
            '<div class="gui-tab">'
                + '<ul class="tabs">'
                    + '<li id="firstTab"><a href="#tab1">Graceful Tab 1</a></li>'
                    + '<li id="secondTab"><a href="#tab2">Graceful Tab 2</a></li>'
                    + '<li id="thirdTab" data-target="#tab3"><a href="#tab2">Graceful Tab 3</a></li>'
                + '</ul>'
                + '<div id="tab1" class="tab-content">'
                    + 'JavaScript expressions can be evaluated as values inside .less files. We recommend using caution with this feature as the LESS will not be compilable by ports and it makes the LESS harder to maintain. If possible, try to think of a function that can be added to achieve the same purpose and ask for it on github. We have plans to allow expanding the default functions available. However, if you still want to use JavaScript in .less, this is done by wrapping the expression with back-ticks:'
                + '</div>'
                + '<div id="tab2" class="tab-content">'
                    + 'You can import both CSS and LESS files. Only LESS files import statements are processed, CSS file import statements are kept as they are. If you want to import a CSS file, and don’t want LESS to process it, just use the .css extension:'
                + '</div>'
                + '<div id="tab3" class="tab-content">'
                    + 'Content of imported LESS file is copied into importing style sheet and compiled together with it. Importing and imported files share all mixins, namespaces, variables and other structures.'
                    + 'In addition, if the import statement has media queries specified in it, imported content is enclosed in the @Media declaration.'
                + '</div>'
            + '</div>';

        $(tabsHTML).appendTo("#qunit-fixture");
        var $guiTab = $("#qunit-fixture").find(".gui-tab");
        $guiTab.guiTab();

        equal($guiTab.find(".active").attr("id"), "firstTab", "first tab is active");

        $guiTab.find("#secondTab").guiTab("show");

        ok(!$guiTab.find("#firstTab").hasClass("active"), "active tab changed");
        equal($guiTab.find('.active').attr('id'), "secondTab", "second tab is active");
        equal($($guiTab.find(".active a").attr("href")).css("display"), "block", "should display related element");

        /**
         * test data-target attribute
         */
        $guiTab.find("#thirdTab a").guiTab("show");
        equal($($guiTab.find(".active a").attr("href")).css("display"), "none", "data-target attribute should be prior");
        equal($($guiTab.find(".active").data("target")).css("display"), "block", "data-target attribute should be prior");
    });

});
