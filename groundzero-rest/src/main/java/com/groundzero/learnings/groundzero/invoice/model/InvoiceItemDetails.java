package com.groundzero.learnings.groundzero.invoiceitemdetails.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

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
