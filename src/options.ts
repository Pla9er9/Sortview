export default class Options {
    static PAUSE_TIME = 10;
    static BOX_QUANTITY = 205;
    static MAX_BOX_HEIGHT = 30;
    static BOXES_HTML_ELEMENT = document.getElementById("boxes");
    static defaultColor = "#fff";
    static activeColor = "orangered"
    static checkColor = "green"

    static saveToStorage() {
        localStorage.setItem("defaultColor", this.defaultColor)
        localStorage.setItem("activeColor", this.activeColor)
        localStorage.setItem("checkColor", this.checkColor)
    }
}
