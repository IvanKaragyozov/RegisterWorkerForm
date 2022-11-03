import { register } from '../api/users.js';
import { html } from '../library.js';

const registerTemplate = (onSubmit) => html`
    <section id="register">
        <div class="form">
            <h2>Worker</h2>
            <form @submit="${onSubmit}" class="login-form">
                <input
                        type="text"
                        name="name"
                        id="register-name"
                        placeholder="name"
                />
                <input
                        type="text"
                        name="salary"
                        id="register-salary"
                        placeholder="salary"
                />
                <input
                        type="text"
                        name="position"
                        id="position"
                        placeholder="position"
                />
                <button type="submit">submit</button>
            </form>
        </div>
    </section>
`;

export function registerView(ctx){
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const name = formData.get('name').trim();
        const salary = formData.get('salary').trim();
        const position = formData.get('position').trim();

        if(name === '' || salary === '') {
            return alert('Name and salary are required!');
        }

        await register(name, salary, position);
    }
}
