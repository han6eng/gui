/**
 * User: guoyao
 * Time: 07-26-2013 18:27
 * Blog: http://www.guoyao.me
 */

require(["jquery", "prettify", "graceful-web-ui"], function ($, prettify) {
    $(".module-container .grace-nav").graceNav({
        backgroundColor: "#eeeeee",
        border: "1px solid #d1d1d1",
        itemWidth: "130px",
        itemHeight: "35px",
        itemOverColor: "#d5d5d5",
        animationDuration: 500
    });

    prettify.prettyPrint();
});
