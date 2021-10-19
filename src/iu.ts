/*
 * @Name: IU JS
 * @Repository: https://github.com/IUJS/IU
 * @License: GPLv3
 * @Date: 18 Oct, 2021
 *
 */

interface TagAttrs {
   [key: string]: string; // TODO
}

interface Tag {
    elm: string;
    text: string;
    node: Array<Tag>;
    attr: TagAttrs
}

(function() {
	const callbackNodes = (root: Element, data: Array<Tag>, element: Element): void => {
		for (let i in data) {
			if (data[i].elm) {
				const elm = document.createElement(data[i]?.elm);
				for (let key in data[i].attr)
					elm.setAttribute(key, data[i].attr[key])
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
		if(!root) return;
		root.addEventListener("onload", callbackNodes(root, data), undefined);
	}
	globalThis.iu = {
		mount: mount
	}
})();




