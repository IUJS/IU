"use strict";
/*
 * @Name: IU JS
 * @Repository: https://github.com/IUJS/IU
 * @License: GPLv3
 * @Date: 18 Oct, 2021
 *
 */
(function () {
    "use strict";
    var callbackNodes = function (root, data, element) {
        var _a, _b, _c, _d, _e;
        var _loop_1 = function (i) {
            if (data[i].elm) {
                var elm_1 = document.createElement((_a = data[i]) === null || _a === void 0 ? void 0 : _a.elm);
                (_b = data[i].attr) === null || _b === void 0 ? void 0 : _b.map(function (item) {
                    var key = Object.keys(item);
                    key.map(function (t) { return elm_1.setAttribute(t, item[t]); });
                });
                if (element)
                    element.append(elm_1);
                else
                    root.append(elm_1);
                if (((_c = data[i]) === null || _c === void 0 ? void 0 : _c.node.length) > 0)
                    callbackNodes(root, data[i].node, elm_1);
            }
            else if (((_e = (_d = data[i]) === null || _d === void 0 ? void 0 : _d.text) === null || _e === void 0 ? void 0 : _e.length) > 0) {
                if (!element)
                    return "continue";
                var textNode = document.createTextNode(data[i].text);
                element.appendChild(textNode);
            }
        };
        for (var i in data) {
            _loop_1(i);
        }
    };
    var mount = function (root, data) {
        root.addEventListener("onload", callbackNodes(root, data));
    };
    globalThis.iu = {
        mount: mount
    };
})();
