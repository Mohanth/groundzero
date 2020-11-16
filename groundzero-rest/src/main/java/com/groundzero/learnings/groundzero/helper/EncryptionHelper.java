package com.groundzero.learnings.groundzero.helper;

import org.mindrot.jbcrypt.BCrypt;

public class EncryptionHelper {

    public static String encrypt(String plainPassword) {
        return BCrypt.hashpw(plainPassword, BCrypt.gensalt(10));
    }

    public static boolean isValid(String plainPassword, String encryptedPassword) {
        return BCrypt.checkpw(plainPassword, encryptedPassword);
    }
}
