import fetch from "node-fetch";
import fs from "fs";

const PDFGEN_API_URL = "https://pdfgen.app/api";
const TEMPLATE_ID = "3c43232";

const data = {
  date: "Jan 9, 2023",
  dueDate: "Feb 9, 2023",
  customer: {
    zip: "20002",
    city: "Anytown",
    name: "Ron John Surfer",
    state: "KS",
    address: "123 Any Street",
    country: "United States",
  },
  lineItems: [
    {
      tax: 0.06,
      item: "Surf Board",
      price: 1000,
      quantity: 1,
      description: "Rides big waves",
    },
    {
      tax: 0.06,
      item: "Board Wax",
      price: 75,
      quantity: 2,
      description: "Best wax in town",
    },
    {
      tax: 0.06,
      item: "Board rack",
      price: 300,
      quantity: 1,
      description: "Holds your board",
    },
    {
      tax: 0.06,
      item: "Surf Board",
      price: 1000,
      quantity: 1,
      description: "Rides big waves",
    },
    {
      tax: 0.06,
      item: "Board Wax",
      price: 75,
      quantity: 2,
      description: "Best wax in town",
    },
    {
      tax: 0.06,
      item: "Board rack",
      price: 300,
      quantity: 1,
      description: "Holds your board",
    },
    {
      tax: 0.06,
      item: "Surf Board",
      price: 1000,
      quantity: 1,
      description: "Rides big waves",
    },
    {
      tax: 0.06,
      item: "Board Wax",
      price: 75,
      quantity: 2,
      description: "Best wax in town",
    },
    {
      tax: 0.06,
      item: "Board rack",
      price: 300,
      quantity: 1,
      description: "Holds your board",
    },
    {
      tax: 0.06,
      item: "Surf Board",
      price: 1000,
      quantity: 1,
      description: "Rides big waves",
    },
    {
      tax: 0.06,
      item: "Board Wax",
      price: 75,
      quantity: 2,
      description: "Best wax in town",
    },
    {
      tax: 0.06,
      item: "Board rack",
      price: 300,
      quantity: 1,
      description: "Holds your board",
    },
  ],
  invoiceNumber: "0003578",
};

async function main() {
  const response = await fetch(
    `${PDFGEN_API_URL}/generate?templateId=${TEMPLATE_ID}`,
    {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        api_key: "tMYEQWD2LfPACKgSogbt9",
      },
    }
  );
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync("pdfs/myfile.pdf", buffer);
}

main();
