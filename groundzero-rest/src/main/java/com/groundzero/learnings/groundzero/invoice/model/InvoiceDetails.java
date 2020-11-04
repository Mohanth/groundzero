package com.groundzero.learnings.groundzero.invoice.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class InvoiceDetails {
    Integer invoiceNumber;
    Integer invoiceDate;
    String billedTo;
    List<InvoiceItemDetails> invoiceItemDetails;
}
