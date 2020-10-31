package com.groundzero.learnings.groundzero.invoice.service;

import com.groundzero.learnings.groundzero.invoice.model.InvoiceDetails;

public interface InvoiceService {

    InvoiceDetails getInvoiceDetailsById(String number);

    String saveInvoiceDetails(InvoiceDetails invoiceDetails);
}
