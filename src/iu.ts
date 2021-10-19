/*
 * @Name: IU JS
 * @Repository: https://github.com/IUJS/IU
 * @License: GPLv3
 * @Date: 18 Oct, 2021
 *
 */

(function() {
	"use strict";
	const callbackNodes = (root: Element, data: Array, element: Element): void => {
		for (let i in data) {
			if (data[i].elm) {
				const elm = document.createElement(data[i]?.elm);
				data[i].attr?.map((item) => {
					const key = Object.keys(item);
					key.map((t) => elm.setAttribute(t, item[t]));
				});
				if (element) element.append(elm);
				else root.append(elm);
				if (data[i]?.node.length > 0) callbackNodes(root, data[i].node, elm);
			} else if (data[i]?.text?.length > 0) {
				if (!element) continue;
				let textNode = document.createTextNode(data[i].text);
				element.appendChild(textNode);
			}
		}
	};
	const mount = (root: Element, data: Object) => {
		root.addEventListener("onload", callbackNodes(root, data))
	}
	globalThis.iu = {
		mount: mount
	}
})();




