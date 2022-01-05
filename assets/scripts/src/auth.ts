//arquivo para controle de foemulários de controle de autenticação;

const authPage = document.querySelector("main#auth");

if (authPage) {

    const hideAuthForms = () => {
        document
            .querySelectorAll("#auth form")
            .forEach(el => el.classList.add("hide"));
    }

    const showAuthForms = (id: string) => {
        document.getElementById(id)?.classList.remove("hide")
    };
    const authHash = () => {
        hideAuthForms();

        if (sessionStorage.getItem('email')) {
            const emails =
                [...document.querySelectorAll<HTMLInputElement>("[name=email]")];
            emails.forEach((el: HTMLInputElement) => {
                if (el) {
                    el.value = sessionStorage.getItem("email") ?? "";
                }
            });
        }

        switch (window.location.hash) {
            case '#register':
                showAuthForms('register');
                break;
            case '#login':
                showAuthForms('login');
                break;
            case '#forget':
                showAuthForms('forget');
                break;
            case '#reset':
                showAuthForms('reset');
                break;
            default:
                showAuthForms("auth-email")
        }
    }

    //init.
    window.addEventListener('load', (e) => {
        //O site carregou
        authHash();
    });

    window.addEventListener('hashchange', (e) => {
        //O site carregou
        authHash();
    });

    const formAuthEmail = document.querySelector("#auth-email") as HTMLFormElement;

    formAuthEmail?.addEventListener("submit", (e: Event) => {
        e.preventDefault();

        try {
            const form = e.target as HTMLFormElement;
            const button = form.querySelector("[type=submit]") as HTMLButtonElement;
            const { value } = form.querySelector("[type=email]") as HTMLInputElement;

            button.disabled = true;
            sessionStorage.setItem("email", value);
            location.hash = "#login";
            button.disabled = false;
        }catch{
            console.warn(`Erro do nevio do formulário`);
        }
        
        
    });
}