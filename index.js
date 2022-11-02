//npm install jspdf --save

//import {jsPDF} from "jspdf";

const {jsPDF} = require("jspdf");


//Instanciar jdPDF
const doc = new jsPDF({
    //parameters
    orientation: 'l', // portrait ou landscape 'p' or 'l'
    unit: 'mm',
    format: 'a4', //formato 
    putOnlyUsedFonts: true,
    floatPrecision: 16
});

doc.text("Certificado de Participação", 10, 10, 'center');
doc.save("certificacion.pdf");