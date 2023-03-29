let courses = [
    {
        id: 1,
        title: "Java for Dummies",
        numPages: 400,
        forBeginners: true,
        cost: 40.00
    },
    {
        id: 2,
        title: "Php for Dummies",
        numPages: 500,
        forBeginners: true,
        cost: 10.00
    },
    {
        id: 3,
        title: "JavaScript for Experts",
        numPages: 300,
        forBeginners: false,
        cost: 30.00
    },
    {
        id: 4,
        title: "CSS for Experts",
        numPages: 100,
        forBeginners: false,
        cost: 70.00
    }
];

let TableGenerator = {
    init: function(StringCssSelector,arrayData){
        let position = document.querySelector(StringCssSelector);
        if(!arrayData){
            let h2 = document.createElement("h2");
            h2 = document.createTextNode("Non ci sono dati da visualizzare");
            position.appendChild(h2);
            return;
        }
        this.generateTable(position,arrayData);
    },
    generateTable: function(position,arrayData){
        let table = document.createElement("table");
        table.appendChild(this.generateHeader(arrayData));
        table.appendChild(this.generateBody(arrayData));
        position.appendChild(table);
    },
    generateHeader: function(arrayData){
        let tableHeader = document.createElement("thead");
        let headerRow = document.createElement("tr");
        for (let property in arrayData[0]) {
            let headerCell = document.createElement("th");
            let headerText = document.createTextNode(property);
            headerCell.appendChild(headerText);
            headerRow.appendChild(headerCell);
        }
        tableHeader.appendChild(headerRow);
        return tableHeader;
    },
    generateBody: function(arrayData){
        let tableBody = document.createElement("tbody");
        arrayData.forEach((entity) => {
            let row = document.createElement("tr");
            for (let property in entity) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(entity[property]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tableBody.appendChild(row);
        });
        return tableBody;
    },
};
TableGenerator.init("#cc",null);

/*
rifarlo con oggetto table gerator, avrà come metodi:
1. init che passa id di tabella esistente e array di dati con cui lavorare
2. generateTable metodo per generare la tabella in maniera dinamica a partire dai dati all'interno
    deve chiamare al suo interno 2 metodi: generateHeader e generateRow
*/