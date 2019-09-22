# Editor.js plugin for selecting of component (more likely simple selector)

## Disclaimer
My advice: Do not use this library =)

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
            title: "OrderForm",
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
        "props": {},
        "preview": "..."
    }
}
```
