package com.groundzero.learnings.groundzero.invoice.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class InvoiceItemDetails {
    int itemId;
    String itemName;
    int itemQuantity;
    int itemRate;
    int addedDateTime;
    int totalAmount;

    public InvoiceItemDetails() {
    }
}
