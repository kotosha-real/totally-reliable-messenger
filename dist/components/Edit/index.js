import AbstractComponent from '../AbstractComponent.js';
import { sidebarTemplate as sidebar } from '../CommonTmpl/SidebarSettingsTemplate.js';
import { editTemplate as screen } from './template.js';
import { setFormValidation } from '../../utils/libs/form.js';
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
    render() {
        const { _element } = this;
        if (_element) {
            const form = _element.querySelector('#editForm');
            if (form)
                setFormValidation(form);
        }
    }
    unmount() {
        Handlebars.unregisterPartial('sidebar');
        Handlebars.unregisterPartial('screen');
    }
}
