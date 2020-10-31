package com.groundzero.learnings.groundzero.invoicedetails.controller;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.groundzero.learnings.groundzero.invoicedetails.InvoiceDetails;
import com.groundzero.learnings.groundzero.courses.service.impl.InvoiceServiceImpl;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/invoicedetails")
public class InvoiceController {
    private InvoiceServiceImpl invoiceService = new InvoiceServiceImpl();
    @GetMapping("/getinvoice/{number}")
    @ResponseBody 

    public InvoiceDetails getUserId(@PathVariable String number) {
        return invoiceService.getInvoiceDetailsById(number);
    }
    @PostMapping("/saveinvoice")
    public String saveinvoice(@RequestBody String invoiceDetailsStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        InvoiceDetails invoiceDetails = mapper.readValue(invoiceDetailsStr,InvoiceDetails.class);
        return invoiceService.saveInvoiceDetails(invoiceDetails);
    }
}
