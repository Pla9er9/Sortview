export default class Options {
    static PAUSE_TIME = 100;
    static BOX_QUANTITY = 105;
    static MAX_BOX_HEIGHT = 30;
    static BOXES_HTML_ELEMENT = document.getElementById("boxes");
    static defaultColor = this.loadDefault();
    static activeColor = this.loadActive();
    static checkColor = this.loadCheck();

    private static loadDefault() {
        const dc = localStorage.getItem("defaultColor");
        return dc === null ? "#fff" : dc;
    }

    private static loadActive() {
        const dc = localStorage.getItem("activeColor");
        return dc === null ? "orangered" : dc;
    }

    private static loadCheck() {
        const dc = localStorage.getItem("checkColor");
        return dc === null ? "green" : dc;
    }

    static saveOptionsToStorage() {
        localStorage.setItem("defaultColor", this.defaultColor);
        localStorage.setItem("activeColor", this.activeColor);
        localStorage.setItem("checkColor", this.checkColor);
    }
}
