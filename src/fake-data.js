import { faker } from "@faker-js/faker";

function randomInvoice() {
  return {
    id: faker.datatype.uuid(),
    invoiceNumber: Math.floor(100000 + Math.random() * 900000),
    invoiceDate: faker.date
      .betweens("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z", 1)[0]
      .toString(),
    customerName: faker.name.firstName() + " " + faker.name.lastName(),
    productName: faker.commerce.product(),
    productPrice: faker.commerce.price(100, 1000),
    productQuantity: Math.floor(Math.random() * (100 - 0 + 1)) + 0,
  };
}
const invoice = function (max_size) {
  const i = [];
  for (let index = 0; index < max_size; index++) {
    i.push(randomInvoice());
  }
  return i;
};
export const invoiceData = invoice(5);
