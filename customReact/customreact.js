function customRender(reactElement, container) {

    // #NOT PRACTICAL IF MORE ATTRIBUTES ARE THERE IN AN OBJECT.#

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)


    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
        style: "color: green; font-size: 80px ",
    },
    children: 'Click me to visit google!!'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)