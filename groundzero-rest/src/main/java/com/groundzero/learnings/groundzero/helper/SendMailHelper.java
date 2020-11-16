package com.groundzero.learnings.groundzero.helper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Map;

public class SendMailHelper {

    private SpringTemplateEngine templateEngine = new SpringTemplateEngine();
    private JavaMailSender mailSender = new JavaMailSenderImpl();

    public void sendMail(String from, String to, String subject, Map<String, Object> params, String htmlTemplate)
            throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, false, "utf-8");
        Context context = new Context();
        context.setVariables(params);
        String html = templateEngine.process("gmail", context);
        helper.setFrom(from);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(html, true);
        mailSender.send(message);
    }
}
