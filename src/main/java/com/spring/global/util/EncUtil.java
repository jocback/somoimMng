package com.spring.global.util;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;
import org.springframework.stereotype.Component;

/**
 * @title  Encryption Util
 * @author Gamma
 * @since  2024. 03. 03.
 */
@Slf4j
@Component
public class EncUtil {
	
	private static final String MARIA_ENC_KEY = "somoim";
	
	/**
	 * @title  AES 암호화
	 * @param  String
	 * @param  String
	 * @return String
	 */
	public static String getAESEnc(String text, String passphrase) {
		String encStr = "";
		
		try {
			if(StringUtil.isEmpty(text) || StringUtil.isEmpty(passphrase)) {
				return null;
			}
			
			String iv = passphrase.substring(0, 16);
			byte[] keyBytes = new byte[16];
			byte[] b = passphrase.getBytes("UTF-8");
			int len = b.length;
			
			if(len > keyBytes.length)
				len = keyBytes.length;
			
			System.arraycopy(b, 0, keyBytes, 0, len);
			SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "AES");
			
			Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
	        c.init(Cipher.ENCRYPT_MODE, keySpec, new IvParameterSpec(iv.getBytes()));
	 
	        byte[] encrypted = c.doFinal(text.getBytes("UTF-8"));
	        encStr = new String(Base64.encodeBase64(encrypted));
		} catch (Exception e) {
			log.error(e.toString());
		}
		
		return encStr;
	}
	
	/**
	 * @title  AES 복호화
	 * @param  String
	 * @param  String
	 * @return String
	 */
	public static String getAESDec(String text, String passphrase) {
		try {
			if(StringUtil.isEmpty(text) || StringUtil.isEmpty(passphrase)) {
				return null;
			}
			
			String iv = passphrase.substring(0, 16);
			byte[] keyBytes = new byte[16];
			byte[] b = passphrase.getBytes("UTF-8");
			int len = b.length;
			
			if(len > keyBytes.length)
				len = keyBytes.length;
			
			System.arraycopy(b, 0, keyBytes, 0, len);
			SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "AES");
			
			Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
	        c.init(Cipher.DECRYPT_MODE, keySpec, new IvParameterSpec(iv.getBytes("UTF-8")));
	 
	        byte[] byteStr = Base64.decodeBase64(text);
	 
	        return new String(c.doFinal(byteStr),"UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	/**
	 * @title  MariaDB 암호화
	 * @param  String
	 * @return String
	 */
	public static String getMariaDbEnc(String str) {
		try {
			if(StringUtil.isEmpty(str)) {
				return str;
			}
			
			final Cipher encryptCipher = Cipher.getInstance("AES");                            
	        encryptCipher.init(Cipher.ENCRYPT_MODE, generateMySQLAESKey(getSHA512(MARIA_ENC_KEY), "UTF-8"));
	        return new String(Hex.encodeHex(encryptCipher.doFinal(str.getBytes("UTF-8")))).toUpperCase();
		} catch (Exception e) {
			log.error(e.toString());
			return null;
		}
	}
	
	/**
	 * @title  MariaDB 복호화
	 * @param  String
	 * @return String
	 */
	public static String getMariaDbDec(String str) {
		try {
			if(StringUtil.isEmpty(str)) {
				return str;
			}
			
			final Cipher decryptCipher = Cipher.getInstance("AES");                            
	        decryptCipher.init(Cipher.DECRYPT_MODE, generateMySQLAESKey(getSHA512(MARIA_ENC_KEY), "UTF-8"));
	        return new String(decryptCipher.doFinal(Hex.decodeHex(str.toCharArray())));
		} catch (Exception e) {
			log.error(e.toString());
			return null;
		}
	}
	
	/**
	 * @title  MySQL AES Key Generator
	 * @param  String
	 * @param  String
	 * @return SecretKeySpec
	 */
	private static SecretKeySpec generateMySQLAESKey(final String key, final String encoding) {
        try {
            final byte[] finalKey = new byte[16];
            int i = 0;
            for(byte b : key.getBytes(encoding))
                finalKey[i++%16] ^= b;            
            return new SecretKeySpec(finalKey, "AES");
        } catch(UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }
 
	/**
	 * @title  SHA-1
	 * @param  String
	 * @return String
	 */
	public static String getSHA1(String input) {
		String result = null;
		
		try {
			if(StringUtil.isEmpty(input)) {
				return input;
			}
			
		    MessageDigest digest = MessageDigest.getInstance("SHA-1");
		    digest.reset();
		    digest.update(input.getBytes("utf8"));
		    result = String.format("%064x", new BigInteger(1, digest.digest()));
		} catch (Exception e) {
		    log.error(e.toString());
		}
		
		return result;
	}
	
	/**
	 * @title  SHA-256
	 * @param  String
	 * @return String
	 */
	public static String getSHA256(String input) {
		String result = null;
		
		try {
			if(StringUtil.isEmpty(input)) {
				return input;
			}
			
		    MessageDigest digest = MessageDigest.getInstance("SHA-256");
		    digest.reset();
		    digest.update(input.getBytes("utf8"));
		    result = String.format("%064x", new BigInteger(1, digest.digest()));
		} catch (Exception e) {
		    log.error(e.toString());
		}
		
		return result;
	}
	
	/**
	 * @title  SHA-512
	 * @param  String
	 * @return String
	 */
	public static String getSHA512(String input) {
		String result = null;
		
		try {
			if(StringUtil.isEmpty(input)) {
				return input;
			}
			
		    MessageDigest digest = MessageDigest.getInstance("SHA-512");
		    digest.reset();
		    digest.update(input.getBytes("utf8"));
		    result = String.format("%0128x", new BigInteger(1, digest.digest()));
		} catch (Exception e) {
		    log.error(e.toString());
		}
		
		return result;
	}
	
	/**
	 * @title  CryptoJS AES Decryption
	 * @param  String
	 * @param  String
	 * @return String
	 */
	public static String decrypt(String ciphertext, String passphrase) {
        try {
            final int keySize = 256;
            final int ivSize = 128;
 
            byte[] ctBytes = Base64.decodeBase64(ciphertext.getBytes("UTF-8"));
            byte[] saltBytes = Arrays.copyOfRange(ctBytes, 8, 16);
            byte[] ciphertextBytes = Arrays.copyOfRange(ctBytes, 16, ctBytes.length);
            byte[] key = new byte[keySize / 8];
            byte[] iv = new byte[ivSize / 8];
            
            EvpKDF(passphrase.getBytes("UTF-8"), keySize, ivSize, saltBytes, key, iv);
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
            cipher.init(Cipher.DECRYPT_MODE, new SecretKeySpec(key, "AES"), new IvParameterSpec(iv));
            byte[] recoveredPlaintextBytes = cipher.doFinal(ciphertextBytes);
            return new String(recoveredPlaintextBytes);
        } catch (Exception e) {
            log.error(e.toString());
        }
 
        return null;
    }
    
	/**
	 * EvpKDF
	 * @param  byte[]
	 * @param  int
	 * @param  int
	 * @param  byte[]
	 * @param  byte[]
	 * @param  byte[]
	 * @return byte[]
	 * @throws NoSuchAlgorithmException
	 */
    private static byte[] EvpKDF(byte[] password, int keySize, int ivSize, byte[] salt, byte[] resultKey, byte[] resultIv) throws NoSuchAlgorithmException {
        return EvpKDF(password, keySize, ivSize, salt, 1, "MD5", resultKey, resultIv);
    }
    
    /**
     * EvpKDF
     * @param  byte[]
     * @param  int
     * @param  int
     * @param  byte[]
     * @param  int
     * @param  String
     * @param  byte[]
     * @param  byte[]
     * @return byte[]s
     * @throws NoSuchAlgorithmException
     */
    private static byte[] EvpKDF(byte[] password, int keySize, int ivSize, byte[] salt, int iterations, String hashAlgorithm, byte[] resultKey, byte[] resultIv) throws NoSuchAlgorithmException {
        keySize = keySize / 32;
        ivSize = ivSize / 32;
        int targetKeySize = keySize + ivSize;
        byte[] derivedBytes = new byte[targetKeySize * 4];
        int numberOfDerivedWords = 0;
        byte[] block = null;
        MessageDigest hasher = MessageDigest.getInstance(hashAlgorithm);
        
        while(numberOfDerivedWords < targetKeySize) {
            if(block != null) {
                hasher.update(block);
            }
            
            hasher.update(password);            
            block = hasher.digest(salt);
            hasher.reset();
            
            for(int i=1; i<iterations; i++) {
                block = hasher.digest(block);
                hasher.reset();
            }
            
            System.arraycopy(block, 0, derivedBytes, numberOfDerivedWords * 4, Math.min(block.length, (targetKeySize - numberOfDerivedWords) * 4));
            numberOfDerivedWords += block.length / 4;
        }
        
        System.arraycopy(derivedBytes, 0, resultKey, 0, keySize * 4);
        System.arraycopy(derivedBytes, keySize * 4, resultIv, 0, ivSize * 4);
        return derivedBytes;
    }
}