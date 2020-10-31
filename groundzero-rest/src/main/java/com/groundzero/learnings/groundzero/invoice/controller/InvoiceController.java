package com.groundzero.learnings.groundzero.invoice.controller;

import com.groundzero.learnings.groundzero.invoice.service.InvoiceService;
import com.groundzero.learnings.groundzero.invoice.service.impl.InvoiceServiceImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.groundzero.learnings.groundzero.invoice.model.InvoiceDetails;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/invoicedetails")
public class InvoiceController {
    private InvoiceService invoiceService = new InvoiceServiceImpl();

    @GetMapping("/getinvoice/{number}")
    @ResponseBody 
    public InvoiceDetails getUserId(@PathVariable String number) {
        return invoiceService.getInvoiceDetailsById(number);
    }
    @PostMapping("/saveinvoice")
    public String saveInvoice(@RequestBody String invoiceDetailsStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        InvoiceDetails invoiceDetails = mapper.readValue(invoiceDetailsStr,InvoiceDetails.class);
        return invoiceService.saveInvoiceDetails(invoiceDetails);
    }
}
