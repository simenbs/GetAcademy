// Model
const app = document.getElementById('app');

let head = 'head';
let body = 'body';
let legs = 'legs';
let valgtHode = 1;
let valgtKropp = 1;
let valgtBein = 1;



// View
updateView();
function updateView(){
    let html = '';
    html += kroppsDeler(hode,valgtHode);
    html += kroppsDeler(kropp,valgtKropp);
    html += kroppsDeler(bein,valgtBein);


    document.getElementById('app').innerHTML = html;

}

function kroppsDeler(deler,delNummer){
    let html = '';
    html += '<div class=kroppsDeler>'
    html += `<button onclick="nesteDel(${deler},'neste')"> ← </button>`
    html += `<img src="${deler}${delNummer}.png">`
    html += `<button onclick="nesteDel(${deler},'forrige')"> → </button>`
    html += '</div>'
    return html

}

// Controller

function getPartNumber(direction,partVariable){           
    if(direction === 'neste'){
        if(partVariable == 4){
            partVariable = 1;
            
        }
        else{
            partVariable++;
        }                
    }
    else{
        if(partVariable == 1){
            partVariable = 4;
        }
        else{
            partVariable--;
        }  
    }
    return partVariable;
}

function nextPart(part,direction){
    if(part == 'face'){
        valgtHode = getPartNumber(direction,valgtHode)
    }
    else if(part == 'bod'){
        valgtKropp = getPartNumber(direction,valgtKropp)
    }
    else{
        valgtBein = getPartNumber(direction,valgtBein)
    }
    view();
}
