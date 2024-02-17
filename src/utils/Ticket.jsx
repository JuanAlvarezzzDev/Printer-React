import CreatePdf from "./CreatePdf";
import ticket from "../constants";
const  fakeData = [
  { producto: "Arduino Nano", cantidad: 2, precio: 10000, total: 20000 },
  { producto: "Arduino Uno R3", cantidad: 2, precio: 10000, total: 20000 },
  { producto: "ESP32 WRROM CON CABLE", cantidad: 2, precio: 10000, total: 50000 },
  { producto: "Arduino Nano", cantidad: 2, precio: 10000, total: 60000 },
  { producto: "Arduino Nano", cantidad: 2, precio: 10000, total: 70000 },
  // Agrega más filas de datos si es necesario
];

const totalSum = fakeData.reduce((acc, row) => acc + row.total, 0);

const generateTicket = async (output) => {
  const content = [
    //DATOS EMPRESA
    {
      image: ticket.image, //Logo
      fit: [141.73, 56.692],
      alignment: "center",
    },
    //DATOS CEBECERA FACTURAR
    {
      margin: [0, 10, 0, 0],
      table: {
        widths: ["20%", "35%", "15%", "25%"],
        headerRows: 2,
        body: [
          [
            { text: "FECHA:", style: "tHeaderLabel", alignment: "left" },
            {
              text: new Date().toLocaleString(),
              style: "tHeaderValue",
              colSpan: 3,
              alignment: "left",
            },
            {},
            {},
          ],
          [
            { text: "PEDIDO:", style: "tHeaderLabel", alignment: "left" },
            {
              text: "001",
              style: "tHeaderValue",
              colSpan: 3,
              alignment: "left",
            },
            {},
            {},
          ],
          [
            { text: "CLIENTE", style: "tHeaderLabel", alignment: "left" },
            {
              text: "Camilo Alvarez",
              style: "tHeaderValue",
              colSpan: 3,
              alignment: "left",
            },
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
        widths: ["50%", "10%", "20%", "20%"],
        headerRows: 2,
        body: [
          [
            { text: "Producto", style: "tProductsHeader", alignment: "left" },
            { text: "Cant", style: "tProductsHeader", alignment: "left" },
            { text: "Precio", style: "tProductsHeader", alignment: "left" },
            { text: "Total", style: "tProductsHeader", alignment: "left" },
          ],
          ...fakeData.map(row => [
            { text: row.producto, style: "tProductsBody", alignment: "left" },
            { text: row.cantidad.toString(), style: "tProductsBody", alignment: "left" },
            { text: row.precio.toString(), style: "tProductsBody", alignment: "left" },
            { text: row.total.toString(), style: "tProductsBody", alignment: "left" },
          ]),

          [
            {},
            {},
            { text: "TOTAL:", style: "tTotals", alignment: "left"},
            { text: totalSum, style: "tTotals", alignment: "left"},
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
  ];

  const response = await CreatePdf({ content }, output);
  return response;
};

export default generateTicket;
