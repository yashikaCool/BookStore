const inputTypeConstants = {
    NUMBER: "number",
    TEXT: "text",
    DATE: "date",
    BOOLEAN: "boolean"
}

function getInputObjectsArr() {
    const { NUMBER, TEXT, DATE, BOOLEAN } = inputTypeConstants;

    const inputTagArr = [
        {
            id: 1,
            key: "ISBN",
            type: NUMBER
        },
        {
            id: 2,
            key: "Author Name",
            type: TEXT
        },
        {
            id: 3,
            key: "Book Name",
            type: TEXT
        },
        {
            id: 4,
            key: "Page Count",
            type: TEXT
        },
        {
            id: 5,
            key: "Price",
            type: NUMBER
        },
        {
            id: 6,
            key: "Discount",
            type: NUMBER
        },
        {
            id: 7,
            key: "Date of Publish",
            type: DATE
        },
        {
            id: 8,
            key: "In Stock",
            type: TEXT
        }
    ];

    return inputTagArr;
}