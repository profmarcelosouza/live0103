import format from "date-fns/format";
import locale from "date-fns/locale/pt-BR";

const page = document.querySelector("#time-options");

if(page){

    const hoje = new Date(); 

    const dataAgendamento = page.querySelector("h3") as HTMLHeadingElement;
    // const horarios = () => {
    //     page
    //     .querySelectorAll("radio")
    //     .forEach(el => console.log("Valores" + el.getAttribute("value")));
    // }

    const horarios = page.querySelectorAll("input");
    horarios.forEach(el => {
        console.log("teste");
    });
    console.log("Radios" + horarios);


    const render = () =>{
        dataAgendamento.innerText = format(hoje, "iiii','dd 'de' MMMM 'de' yyyy", {locale});
    }

    render();
    //horarios();

}