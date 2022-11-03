import { page, render } from './library.js';
import {registerView} from "./views/register.js";

const main = document.querySelector('main');

page(decorateContext);
page('/', registerView);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    next();
}

function renderMain(templateResult) {
    render(templateResult, main);
}

