const inputTagArr = getInputObjectsArr();

const getTagArr = getInputObjectsArr().map( (val, idx, arr) => {
    return getInputTag(val);
} );

const inputContainerRef = document.getElementById("inputContainer");

for( let input of getTagArr ) {
    inputContainerRef.appendChild(input);
}

const tableContainerRef = document.getElementById("tableContainer");

tableContainerRef.appendChild( getTableTag() );

function saveInputDataInTable() {
    const tBody = document.querySelector(".bookTableBody");
    const tr = document.createElement("tr");

    for(let input of inputTagArr) {
        const { id } = input;
        const inputData = document.querySelector(`#${"input"+id}`);
        const value = inputData.value;

        const td = document.createElement("td");
        td.innerText = value;
        td.classList.add("td");

        tr.appendChild(td);
    }

    tBody.appendChild(tr);
    clearInputField();
}

const saveBtnRef = document.querySelector("#saveBtn");

saveBtnRef.addEventListener('click', saveInputDataInTable);

function clearInputField() {
    for(let input of inputTagArr) {
        const { id } = input;

        const inputData = document.querySelector(`#${"input"+id}`);
        inputData.value = "";
    }
}