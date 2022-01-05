import format from "date-fns/format";
import locale from "date-fns/locale/pt-BR";

const page = document.querySelector("#time-options");

if(page){

    const hoje = new Date();

    const dataAgendamento = page.querySelector("h3") as HTMLHeadingElement;

    const render = () =>{
        dataAgendamento.innerText = format(hoje, "MMMM yyyy", {locale});
    }

    render();
}