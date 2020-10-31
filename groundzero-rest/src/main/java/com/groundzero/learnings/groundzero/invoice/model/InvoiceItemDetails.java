package com.groundzero.learnings.groundzero.invoice.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)

public class InvoiceItemDetails {
    Integer itemId;
    String itemName;
    Integer itemQuantity;
    Integer itemRate;
    Integer addedDateTime;

    public InvoiceItemDetails() {
    }
}
