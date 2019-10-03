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
                        name: "OrderForm",
                        alias: "Форма заявки",
                        props: {},
                        preview:
                            "https://reactjsexample.com/content/images/2018/10/Calendar-and-Clock.jpg"
                    },
                    {
                        name: "SubscribeForm",
                        alias: "Форма подписки",
                        props: {},
                        preview:
                            "https://1stwebdesigner.com/wp-content/uploads/2010/09/contact-form-html-php-tutorial.jpg"
                    }
                ]
            }
        }
    },
    data: {
        blocks: [
            {
                type: "component",
                data: {
                    component: "SubscribeForm",
                    props: {}
                }
            }
        ]
    }
});

const button = document.getElementById("savebutton");
if (button) {
    button.addEventListener("click", async () => {
        const data = await editor.save();
        console.log(data);
    });
}
