# Editor.js plugin for selecting of component (more likely simple selector)

![preview](/images/preview.png)

## Disclaimer
My advice: Do not use this library =)
This lib do not render React components to Editor.js, just render image

### Installation
```bash
yarn add editorjs-component-selector
```

### Usage
```javascript
import ComponentSelectorTool from "editorjs-component-selector";
// ...
var editor = EditorJS({
  tools: {
    component: {
        class: ComponentSelectorTool,
        config: {
            name: "OrderForm",
            alias: "Форма заявки",
            props: {},
            preview: "..."
        }
    }
  }
});
```

### Data example
```json
{
    "type": "component",
    "data": {
        "component": "OrderForm",
        "props": {}
    }
}
```
