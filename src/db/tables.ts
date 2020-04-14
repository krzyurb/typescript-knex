export enum Tables {
  PRODUCTS = 'products',
  CUSTOMERS = 'customers',
  ORDERS = 'orders',
  PRODUCT_ORDERS = 'product_orders',
}

export const tableColumn = (table: Tables, column: string): string =>
  [table, column].join('.');
