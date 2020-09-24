import AbstractComponent from '../AbstractComponent.js';
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarSettingsTemplate.js';
import { profileTemplate as screen } from './template.js';
export default class Profile extends AbstractComponent {
    constructor(template, options) {
        super(template, options);
    }
    init() { }
    componentDidMount() { }
    componentDidUpdate() { }
    componentWillRender() {
        Handlebars.registerPartial('sidebar', sidebar);
        Handlebars.registerPartial('screen', screen);
    }
    render() { }
    unmount() {
        Handlebars.unregisterPartial('sidebar');
        Handlebars.unregisterPartial('screen');
    }
}
