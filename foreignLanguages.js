function foreignLanguages(coutry) {
    if (coutry === "England" || coutry === "USA") {
        console.log(`English`);
    } else if (coutry === "Spain" || coutry === "Argentina" || coutry === "Mexico") {
        console.log(`Spanish`);
    } else {
        console.log(`unknown`);
    }
}

foreignLanguages("USA");