"use strict";
/*
 * @Name: IU JS
 * @Repository: https://github.com/IUJS/IU
 * @License: GPLv3
 * @Date: 18 Oct, 2021
 *
 */
(function () {
    var callbackNodes = function (root, data, element) {
        var _a, _b, _c, _d;
        for (var i in data) {
            if (data[i].elm) {
                var elm = document.createElement((_a = data[i]) === null || _a === void 0 ? void 0 : _a.elm);
                for (var key in data[i].attr)
                    elm.setAttribute(key, data[i].attr[key]);
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
        var dom = callbackNodes(root, data, null);
        root.addEventListener("onload", dom);
    };
    globalThis.iu = {
        mount: mount
    };
})();
