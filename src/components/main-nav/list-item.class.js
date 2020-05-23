export default class ListItem {
    constructor({icon = "", label = "", link = "", activeLinks = [], active = false, visible = true}){
        this.icon = icon;
        this.label = label;
        this.link = link;
        this.activeLinks = activeLinks;
        this.active = active;
        this.visible = visible;
    }
}