/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
    "use strict";
    var LanguageManager = brackets.getModule("language/LanguageManager");

    LanguageManager.defineLanguage("fortran", {
        name: "Fortran",
        mode: "fortran",
        fileExtensions: ["f", "for", "f90", "f95", "f03", "f15"],
        lineComment: ["!"]
    });
});
