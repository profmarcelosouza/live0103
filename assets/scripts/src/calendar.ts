import format from "date-fns/format";
import locale from "date-fns/locale/pt-BR";
import endOfMonth from "date-fns/endOfMonth";
import startOfMonth from "date-fns/startOfMonth";
import { addMonths, subMonths } from "date-fns";

// console.log("Primeiro dia do Mês: " + format(new Date(), "d 'de' MMMM 'de' yyyy 'às' HH:mm:ss", {
//     locale
// }));

// console.log("Dia atual: " + format(new Date(), "dd/mm/yyyy HH:mm:ss"));

// console.log("Úlrimo dia do Mês: " + format(endOfMonth(new Date()), "d 'de' MMMM 'de' yyyy 'às' HH:mm:ss", {
//     locale
// }));

const page = document.querySelector("#schedules-new");

if(page){
    const hoje      = new Date();
    let inicioMes   = startOfMonth(hoje);
    let fimMes      = endOfMonth(hoje);

    const btnHoje       = page.querySelector(".btn-today") as HTMLButtonElement;
    const btnAnterior   = page.querySelector(".btn-prev") as HTMLButtonElement;
    const btnProximo    = page.querySelector(".btn-next") as HTMLButtonElement;
    const titulo        = page.querySelector("h2") as HTMLHeadingElement;
    const calendar      = page.querySelector(".days") as HTMLUListElement;

    const render = () =>{
        titulo.innerText = format(inicioMes, "MMMM yyyy", {locale});
    }

    btnProximo.addEventListener("click", () =>{
        inicioMes = addMonths(inicioMes, 1);
        render();
    });

    btnAnterior.addEventListener("click", () =>{
        inicioMes = subMonths(inicioMes, 1);
        render();
    });

    btnHoje.addEventListener("click", () =>{
        inicioMes = startOfMonth(hoje);
        render();
    });
    
}