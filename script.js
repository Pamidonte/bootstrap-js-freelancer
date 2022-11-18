function submitForm(event){
    event.preventDefault();
    calcoloprezzo();
}


function sconto(prezzofinale){
    let codiceSconto=document.getElementById("inputdiscountcode").value;
    console.log(codiceSconto);
    let scontoDaSottrarre= 0;
    let scontononvalido=document.getElementById("scontononvalido");
    if (codiceSconto.toString() == "YHDNU32" || codiceSconto.toString() == "JANJC63" || codiceSconto.toString() == "PWKCN25" || codiceSconto.toString() == "SJDPO96" || codiceSconto.toString() == "POCIE24"){
        scontoDaSottrarre= (prezzofinale *25 ) /100;
        console.log(scontoDaSottrarre);
        scontononvalido.innerHTML="";
        
        } else{
            scontononvalido.innerHTML="lo sconto inserito non è valido";

        }
        let prezzototale= document.getElementById("prezzototale");
    prezzototale.innerHTML= Math.floor(prezzofinale-scontoDaSottrarre).toString();
    
}



function calcoloprezzo() {
    let tipodilavoro= document.getElementById("inputwork");
    let prezzolavoro= tipodilavoro.value;
    console.log(prezzolavoro);
    let oretotali= document.getElementById("inputhours").value;
    console.log(oretotali);
    let prezzofinale= prezzolavoro * oretotali;
    console.log(prezzofinale);
    sconto(prezzofinale);
}