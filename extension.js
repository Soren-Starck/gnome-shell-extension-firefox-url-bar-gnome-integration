const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;

var FirefoxUrlBarExtension = class FirefoxUrlBarExtension extends PanelMenu.Button {
    _init() {
        super._init(0.0, 'Firefox URL Bar');

        let box = new St.BoxLayout();
        let label = new St.Label({ text: 'URL' });
        let entry = new St.Entry({ text: '' });

        box.add(label);
        box.add(entry);
        this.add_child(box);
    }
};

function init() {
    return new FirefoxUrlBarExtension();
}

function enable() {
    Main.panel.addToStatusArea('firefox-url-bar', new FirefoxUrlBarExtension());
}

function disable() {
    Main.panel.statusArea['firefox-url-bar'].destroy();
}