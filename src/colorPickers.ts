import Options from "./options";
import Pickr from "@simonwep/pickr";

const arr = [
    ["#defaultColorPicker", Options.defaultColor],
    ["#activeColorPicker", Options.activeColor],
    ["#checkColorPicer", Options.checkColor],
];

export default function setColorPickers() {
    arr.forEach((e) => {
        const pickr = Pickr.create({
            el: e[0],
            theme: "monolith",
            default: e[1],
            components: {
                preview: true,
                opacity: true,
                hue: true,

                interaction: {
                    hex: true,
                    rgba: true,
                    input: true,
                    clear: true,
                    save: true,
                },
            },
        });
        pickr.on("save", () => {
            const hexColor = String(pickr.getColor().toHEXA());
            switch (e[0].replace("#", "")) {
                case "defaultColorPicker":
                    Options.defaultColor = hexColor;
                    break;
                case "activeColorPicker":
                    Options.activeColor = hexColor;
                    break;
                case "checkColorPicer":
                    Options.checkColor = hexColor;
            }
            Options.saveOptionsToStorage();
        });
    });
}
