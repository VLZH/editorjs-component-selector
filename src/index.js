import "./styles.css";

const ICON = `<img width="20" height="20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K">`;

const DEFAULT_DATA = {
    component: null,
    props: {}
};

class ComponentSelectorTool {
    constructor({ data, config, api }) {
        this.api = api;
        this.config = config;
        if (!config.components || !config.components.length) {
            throw new Error("You must define one component at least")
        }
        this.nodes = {
            container: null,
            //
            selector: null,
            selector_wrapper: null,
            options: [],
            // preview
            preview_wrapper: null,
            preview: null
        };
        this._data = null;
        this.data = data;
    }

    static get toolbox() {
        return {
            title: "Component selector",
            icon: ICON
        };
    }

    /**
     * Create element with styles
     * @param {string} tag
     * @param {Array<string>} classes
     * @param {Object} attrs
     */
    makeElement(tag, classes, attrs) {
        const element = document.createElement(tag);
        element.classList.add(...classes);
        if (attrs) {
            for (const key in attrs) {
                element.setAttribute(key, attrs[key]);
            }
        }
        return element;
    }

    /**
     * Create class string with tool prefix
     * @param {string} cls
     */
    makeClass(cls) {
        return `component-selector_tool__${cls}`;
    }

    render() {
        this.nodes.container = this.makeElement("div", [
            this.makeClass("container"),
            "cdx-block"
        ]);
        this.nodes.container.appendChild(this.makeSelector());
        return this.nodes.container;
    }

    set data(data) {
        this._data = Object.assign({}, DEFAULT_DATA, data);
        setTimeout(() => {
            if (this.validate()) {
                this.renderPreview();
            }
        }, 0);
    }

    get data() {
        return this._data;
    }

    save() {
        return this.data;
    }

    validate() {
        if (this.data.component) {
            return true;
        }
        return false;
    }

    getComponentByName(name) {
        return this.config.components.find(c => c.name === name);
    }

    changeComponent(selector) {
        const component = this.getComponentByName(selector.value);
        this.data = {
            component: component.name,
            props: component.props || {}
        };
    }

    /**
     * Create selector element + options and setup listeners
     */
    makeSelector() {
        this.nodes.selector_wrapper = this.makeElement("div", [
            this.makeClass("selector_wrapper")
        ]);
        const selector = (this.nodes.selector = this.makeElement("select", [
            this.makeClass("selector")
        ]));
        this.nodes.selector_wrapper.appendChild(selector);
        for (let component of this.config.components) {
            const option = this.makeElement(
                "option",
                [this.makeClass("option")],
                {
                    value: component.name
                }
            );
            option.innerText = component.alias || component.name;
            this.nodes.options.push(option);
            selector.appendChild(option);
        }
        selector.value = this.data.component || this.config.components[0].name;
        selector.addEventListener("change", event =>
            this.changeComponent(event.target)
        );
        this.changeComponent(selector);
        return this.nodes.selector_wrapper;
    }

    /**
     * Make wrapper for preview
     */
    makePreviewWrapper() {
        this.nodes.preview_wrapper = this.makeElement("div", [
            this.makeClass("preview_wrapper")
        ]);
        return this.nodes.preview_wrapper;
    }

    /**
     * Render preview element
     * @param {string} preview
     */
    renderPreview() {
        if (!this.nodes.preview) {
            this.nodes.container.appendChild(this.makePreviewWrapper());
            this.nodes.preview = this.makeElement("img", [
                this.makeClass("preveiw")
            ]);
            this.nodes.preview_wrapper.appendChild(this.nodes.preview);
        }
        this.nodes.preview.src = this.getComponentByName(
            this.data.component
        ).preview;
    }
}

export default ComponentSelectorTool;
