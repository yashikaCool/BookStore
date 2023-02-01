function getInputTag(obj){
    const { NUMBER, TEXT, DATE, BOOLEAN } = inputTypeConstants;
    const { type, key, id } = obj;
    let inputEle = null;

    switch(type){
        case NUMBER:
        case TEXT:
        case DATE:
            inputEle = document.createElement("input");
            inputEle.type = type;
            break;
        case BOOLEAN:
            break;
        default:
            //do something
    }

    const inputDiv = document.createElement("div");
    inputEle.id = "input"+id;

    const inputLabel = document.createElement("label");
    inputLabel.innerText = key;
    inputLabel.htmlFor = "input"+id;
    inputLabel.classList.add("bookLabels");
    inputDiv.classList.add("flex");
    
    inputEle.classList.add("inputClass");
    inputDiv.classList.add("inputDivClass");

    inputDiv.appendChild(inputLabel);
    inputDiv.appendChild(inputEle);

    return inputDiv;
}

function getTableTag() {
    const table = document.createElement("table");
    table.id = "bookTable";

    const tHead = document.createElement("thead");
    const tBody = document.createElement("tbody");
    tBody.classList.add("bookTableBody");
    
    const inputTagArr = getInputObjectsArr();
    const tHeadings = inputTagArr.map( (val, idx, arr) => {
        const th = document.createElement("th");
        th.classList.add("th");
        th.innerText = val.key;
        return th;
    } )

    tHead.append(...tHeadings);
    tHead.classList.add("thead");

    table.appendChild(tHead);
    table.appendChild(tBody);

    return table;
}