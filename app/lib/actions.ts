'use server';

// By adding the 'use server', you mark all the exported functions within the file as server functions. These server functions can then be imported into Client and Server components, making them extremely versatile.

export async function createInvoice(formData: FormData) {}
