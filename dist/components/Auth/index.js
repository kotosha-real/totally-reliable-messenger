import AbstractComponent from '../AbstractComponent.js';
import { setFormValidation } from '../../utils/libs/form.js';
export default class ErrorScreen extends AbstractComponent {
    constructor(template, options) {
        super(template, options);
    }
    init() { }
    componentDidMount() { }
    componentDidUpdate() { }
    componentWillRender() { }
    render() {
        const { _element } = this;
        if (_element) {
            const form = _element.querySelector('#authForm');
            if (form)
                setFormValidation(form);
        }
    }
    unmount() { }
}
