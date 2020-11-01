package com.groundzero.learnings.groundzero.invoice.service.impl;

import com.groundzero.learnings.groundzero.invoice.model.InvoiceDetails;
import com.groundzero.learnings.groundzero.invoice.model.InvoiceItemDetails;
import com.groundzero.learnings.groundzero.invoice.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public class InvoiceServiceImpl implements InvoiceService {

    @Autowired
    private JdbcTemplate gzJdbcTemplate;

    /*public static void createNewTable() {
        String sql = "CREATE TABLE IF NOT EXISTS invoicedetails (\n"
                + "     invoiceNumber integer PRIMARY KEY,\n"
                + "     invoiceDate integer NOT NULL, \n"
                + "     billedTo text NOT NULL, \n"
                + ");"
    }

    public static void createNewTable() {
        String sql = "CREATE TABLE IF NOT EXISTS invoiceitemdetails (\n"
                + "     itemId integer PRIMARY KEY,\n"
                + "     invoiceNumber integer NOT NULL, \n"
                + "     itemName text NOT NULL, \n"
                + "     itemQuantity integer NOT NULL, \n"
                + "     itemRate integer NOT NULL, \n"
                + "     totalAmount integer NOT NULL, \n"
                + "     addedDateTime integer NOT NULL, \n"
                + ");"
    }*/

    public String saveInvoiceDetails(InvoiceDetails invoiceDetails) {
        String sql = "INSERT into invoicedetails(invoiceNumber , invoiceDate , billedTo) values (?,?,?)";
        gzJdbcTemplate.update(sql, invoiceDetails.getInvoiceNumber(), invoiceDetails.getInvoiceDate(), invoiceDetails.getBilledTo());
        return "changes saved";
    }

    public String saveInvoiceItemDetails(InvoiceItemDetails invoiceitemDetails) {
        String sql = "INSERT into invoiceitemdetails(itemId , invoiceNumber , itemName , itemQuantity , itemRate, totalAmount , addedDateTime) values (?,?,?,?,?,?,?)";
        gzJdbcTemplate.update(sql, invoiceitemDetails.getItemId(), invoiceitemDetails.getItemName(), invoiceitemDetails.getItemQuantity(),
                invoiceitemDetails.getItemRate(), invoiceitemDetails.getTotalAmount(), invoiceitemDetails.getAddedDateTime());
        return "details added";
    }

    @Override
    public InvoiceDetails getInvoiceDetailsById(String number) {
        InvoiceDetails invoiceDetails = new InvoiceDetails();
        invoiceDetails.setInvoiceNumber(1);
        invoiceDetails.setBilledTo("Mohanth");
        return invoiceDetails;
    }
}
