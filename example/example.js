import EditorJS from "@editorjs/editorjs";
import ComponentSelectorTool from "../src/index";

const editor = new EditorJS({
    holder: "app",
    tools: {
        component: {
            class: ComponentSelectorTool,
            config: {
                components: [
                    {
                        title: "OrderForm",
                        props: {},
                        preview:
                            "https://reactjsexample.com/content/images/2018/10/Calendar-and-Clock.jpg"
                    },
                    {
                        title: "SubscribeForm",
                        props: {},
                        preview:
                            "https://1stwebdesigner.com/wp-content/uploads/2010/09/contact-form-html-php-tutorial.jpg"
                    }
                ]
            }
        }
    },
    data: {
        blocks: []
    }
});

const button = document.getElementById("savebutton");
if (button) {
    button.addEventListener("click", async () => {
        const data = await editor.save();
        console.log(data);
    });
}
