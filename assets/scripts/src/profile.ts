const page = document.querySelector("#profile");
if(page){
    console.log("Página do profile");

    const fechaAlert = () => {
        page.querySelector("div .toast success open")?.classList.remove("open");
        page.querySelector("div .toast success open")?.classList.remove("close");
    }

    fechaAlert();
    
}