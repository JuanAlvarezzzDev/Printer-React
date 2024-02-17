import CreatePdf from "./CreatePdf";
import ticket from "../constants";

const generateTicket = async (output) => {
  const content = [
    //DATOS EMPRESA
    {
      image: ticket.image, //Logo
      fit: [141.73, 56.692],
      alignment: "center",
    },
    { text: "BIGTRONICA", style: "header", margin: [0, 10, 0, 0] },
    { text: "BIGTRONICA", style: "header" },
    { text: "Medellin ", style: "header" },
    { text: "EIN 11603314323", style: "header" },

    //TIPO Y NUMERO DOCUMENTO
    { text: "FACTURA ELECTRÓNICA", style: "header", margin: [0, 10, 0, 2.25] },
    { text: "F001-000001", style: "header", margin: [0, 2.25, 0, 0] },

    //DATOS CEBECERA FACTURAR
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ["25%", "35%", "15%", "25%"],
        body: [
          [
            { text: "FECHA:", style: "tHeaderLabel" },
            { text: "2023-09-30", style: "tHeaderValue" },
            { text: "HORA:", style: "tHeaderLabel" },
            { text: "00:45:10", style: "tHeaderValue" },
          ],
          [
            { text: "PEDIDO:", style: "tHeaderLabel" },
            { text: "V001-000001", style: "tHeaderValue", colSpan: 3 },
            {},
            {},
          ],
          [
            { text: "PROYECTO:", style: "tHeaderLabel" },
            { text: "P001-000001", style: "tHeaderValue", colSpan: 3 },
            {},
            {},
          ],
          [
            { text: "CAJERO:", style: "tHeaderLabel" },
            { text: "RUTH JOIN", style: "tHeaderValue", colSpan: 3 },
            {},
            {},
          ],
          [
            { text: "VENDEDOR:", style: "tHeaderLabel" },
            { text: "MARK SAM", style: "tHeaderValue", colSpan: 3 },
            {},
            {},
          ],
        ],
      },
      layout: "noBorders",
    },
    //TABLA PRODUCTOS
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ["20%", "20%", "30%", "30%"],
        headerRows: 2,
        body: [
          [
            {
              text: "CÓDIGO - DESCRIPCIÓN",
              colSpan: 4,
              style: "tProductsHeader",
            },
            {},
            {},
            {},
          ],
          [
            { text: "CANT.", style: "tProductsHeader" },
            { text: "UM", style: "tProductsHeader", alignment: "center" },
            { text: "PRECIO", style: "tProductsHeader", alignment: "right" },
            { text: "TOTAL", style: "tProductsHeader", alignment: "right" },
          ],
          [
            {
              text: "PLK180024 - Pelikano Mel Bellota 18mm (2150x2440)",
              style: "tProductsBody",
              colSpan: 4,
            },
            {},
            {},
            {},
          ],
          [
            { text: "0.50", style: "tProductsBody", alignment: "center" },
            { text: "UND", style: "tProductsBody", alignment: "center" },
            { text: "295.00", style: "tProductsBody", alignment: "right" },
            { text: "147.50", style: "tProductsBody", alignment: "right" },
          ],
          [
            {
              text: "CANTOBELLOT01 - Canto Bellota 0.45x22mm",
              style: "tProductsBody",
              colSpan: 4,
            },
            {},
            {},
            {},
          ],
          [
            { text: "40", style: "tProductsBody", alignment: "center" },
            { text: "UND", style: "tProductsBody", alignment: "center" },
            { text: "0.90", style: "tProductsBody", alignment: "right" },
            { text: "36.00", style: "tProductsBody", alignment: "right" },
          ],
          [
            {
              text: "CANTOBELLOT01 - Canto Bellota 0.45x22mm",
              style: "tProductsBody",
              colSpan: 4,
            },
            {},
            {},
            {},
          ],
          [
            { text: "40", style: "tProductsBody", alignment: "center" },
            { text: "UND", style: "tProductsBody", alignment: "center" },
            { text: "0.90", style: "tProductsBody", alignment: "right" },
            { text: "36.00", style: "tProductsBody", alignment: "right" },
          ],
          [
            {
              text: "CANTOBELLOT01 - Canto Bellota 0.45x22mm",
              style: "tProductsBody",
              colSpan: 4,
            },
            {},
            {},
            {},
          ],
          [
            { text: "40", style: "tProductsBody", alignment: "center" },
            { text: "UND", style: "tProductsBody", alignment: "center" },
            { text: "0.90", style: "tProductsBody", alignment: "right" },
            { text: "36.00", style: "tProductsBody", alignment: "right" },
          ],
          [
            {
              text: "CANTOBELLOT01 - Canto Bellota 0.45x22mm",
              style: "tProductsBody",
              colSpan: 4,
            },
            {},
            {},
            {},
          ],
          [
            { text: "40", style: "tProductsBody", alignment: "center" },
            { text: "UND", style: "tProductsBody", alignment: "center" },
            { text: "0.90", style: "tProductsBody", alignment: "right" },
            { text: "36.00", style: "tProductsBody", alignment: "right" },
          ],
        ],
      },
      layout: {
        hLineWidth: function (i, node) {
          return i === 2 ? 0.5 : 0;
        },
        vLineWidth: function (i, node) {
          return 0;
        },
        hLineColor: function () {
          return "#f2f0f0";
        },
        paddingTop: function (i, node) {
          return i % 2 === 0 ? 10 : 1;
        },
      },
    },
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ["25%", "35%", "15%", "25%"],
        body: [
          //TOTALES
          [
            { text: "SUBTOTAL: S/", style: "tTotals", colSpan: 2 },
            {},
            { text: "538.14", style: "tTotals", colSpan: 2 },
            {},
          ],
          [
            { text: "I.G.V: S/", style: "tTotals", colSpan: 2 },
            {},
            { text: "96.86", style: "tTotals", colSpan: 2 },
            {},
          ],
          [
            { text: "TOTAL: S/", style: "tTotals", colSpan: 2 },
            {},
            { text: "635.00", style: "tTotals", colSpan: 2 },
            {},
          ],
          //TOTAL IMPORTE EN LETRAS
          [
            {
              text: "IMPORTE EN LETRAS:",
              style: "tTotals",
              alignment: "left",
              colSpan: 4,
              margin: [0, 4, 0, 0],
            },
            {},
            {},
            {},
          ],
          [
            {
              text: "SON: SEISCIENTOS TREINTA MIL QUINIENTOS CINCO Y CINCO CON 00/100 SOLES",
              style: "tProductsBody",
              colSpan: 4,
            },
            {},
            {},
            {},
          ],
          //FORMAS PAGO
          [
            {
              text: "FORMA DE PAGO:",
              style: "tTotals",
              alignment: "left",
              colSpan: 4,
              margin: [0, 4, 0, 0],
            },
            {},
            {},
            {},
          ],
          [{ text: "CONTADO", style: "tProductsBody", colSpan: 4 }, {}, {}, {}],
          [
            { text: "EFECTIVO: S/", style: "tTotals", colSpan: 2 },
            {},
            { text: "635.00", style: "tTotals", colSpan: 2 },
            {},
          ],
          [
            { text: "VISA: S/", style: "tTotals", colSpan: 2 },
            {},
            { text: "635.00", style: "tTotals", colSpan: 2 },
            {},
          ],
          //DATOS CLIENTE
          [
            {
              text: "CLIENTE: ",
              style: "tTotals",
              alignment: "left",
              colSpan: 4,
              margin: [0, 6, 0, 0],
            },
            {},
            {},
            {},
          ],
          [
            { text: "NOMBRES: ", style: "tClientLabel" },
            {
              text: "MADERAS CASTOREO S.A.",
              style: "tClientValue",
              colSpan: 3,
            },
            {},
            {},
          ],
          [
            { text: "DOC.ID: ", style: "tClientLabel" },
            { text: "11155998822", style: "tClientValue", colSpan: 3 },
            {},
            {},
          ],
          [
            { text: "DIRECC.: ", style: "tClientLabel" },
            {
              text: "15Z INT. 7X6 URB. JARDIN - SAN ISIDRO - LIMA",
              style: "tClientValue",
              colSpan: 3,
            },
            {},
            {},
          ],
        ],
      },
      layout: "noBorders",
    },
    //NOTA DE PIE
    {
      text: "ESTIMADO CLIENTE, TIENE COMO PLAZO MAXIMO DE 5 DIAS HABILES EN RECOGER SU MERCADERÍA, DICHO ESTO SE LE COBRARÍA PENALIDAD DE ALMACEN POR EL MONTO DE S/20.00 POR DIA, GRACIAS.",
      style: "text",
      alignment: "justify",
      margin: [0, 5],
    },
  ];

  const response = await CreatePdf({ content }, output);
  return response;
};

export default generateTicket;
