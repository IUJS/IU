"use strict";
/*
 * @Name: IU JS
 * @Repository: https://github.com/IUJS/IU
 * @License: GPLv3
 * @Date: 18 Oct, 2021
 *
 */
(function () {
    var createStyle = function (styles) {
        if (styles === {})
            return "";
        console.log(styles);
        var res = "";
        for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
            var key = styles_1[_i];
            console.log(key);
            res += key + ":" + styles[key] + ";";
        }
        return rtrim(res, ";"); // TODO: add rtrim
    };
    var callbackNodes = function (root, data, element) {
        var _a, _b, _c, _d;
        for (var i in data) {
            if (data[i].elm) {
                var elm = document.createElement((_a = data[i]) === null || _a === void 0 ? void 0 : _a.elm);
                for (var key in data[i].attr) {
                    if (key === "style" && typeof data[i].attr[key] === "object") {
                        var value = data[i].attr[key];
                        elm.setAttribute(key, createStyle(value));
                    }
                    else {
                        elm.setAttribute(key, data[i].attr[key]);
                    }
                }
                if (element)
                    element.append(elm);
                else
                    root.append(elm);
                if (((_b = data[i]) === null || _b === void 0 ? void 0 : _b.node.length) > 0)
                    callbackNodes(root, data[i].node, elm);
            }
            else if (((_d = (_c = data[i]) === null || _c === void 0 ? void 0 : _c.text) === null || _d === void 0 ? void 0 : _d.length) > 0) {
                if (!element)
                    continue;
                var textNode = document.createTextNode(data[i].text);
                element.appendChild(textNode);
            }
        }
    };
    var mount = function (root, data) {
        if (!root)
            return;
        callbackNodes(root, data, null);
        // root.addEventListener("onload", () => {});
    };
    globalThis.iu = {
        mount: mount
    };
})();
// declare global {
//   interface Window {
//     ENV: any;
//   }
// }
