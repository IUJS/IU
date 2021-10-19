/*
 * @Name: IU JS
 * @Repository: https://github.com/IUJS/IU
 * @License: GPLv3
 * @Date: 18 Oct, 2021
 *
 */

interface IU {
	mount(root: Element, data: Array<Tag>): void;
}

interface CssProperty {
	[key: string]: string; // TODO
}

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
	const createStyle = (styles: CssProperty): string => {
		console.log(styles);
		return "";
	};
	const callbackNodes = (root: Element, data: Array<Tag>, element: Element | null): void => {
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
	const mount = (root: Element, data: Array<Tag>): void => {
		if(!root) return;
		callbackNodes(root, data, null);
		// root.addEventListener("onload", () => {});
	};
	(globalThis as any).iu = {
		mount: mount
	};
})();

// declare global {
//   interface Window {
//     ENV: any;
//   }
// }
