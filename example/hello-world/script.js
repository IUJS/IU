const root = document.body;
const page = [
  {
    elm: "div",
    attr: [{ class: "my-class" }],
    node: [
      {
        elm: "form",
        attr: [{ method: "POST", action: "another-link" }],
        node: [
          {
            elm: "input",
            attr: [{ type: "search", value: "default value" }],
            node: [
              {
                elm: "p",
                attr: [],
                node: [{ text: "A TEXT" }],
              },
              {
                text: "next text",
              },
              {
                elm: "br",
                self_close: true,
                attr: [],
                node: [],
              },
              {
                elm: "a",
                attr: [{ href: "https://google.com" }],
                node: [
                  {
                    text: "click me",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
iu.mount(root, page);
