package com.moim.somoimmng.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;

public class CamelMap extends HashMap<String, Object> {
    @Autowired
    private ObjectMapper objectMapper;

    private String toProperCase(String s, boolean isCapital) {
        String rtnValue = "";

        if(isCapital) {
            rtnValue = s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase();
        } else {
            rtnValue = s.toLowerCase();
        }

        return rtnValue;
    }

    private String toCamelCase(String s) {
        String[] parts = s.split("_");
        StringBuilder camelCaseString = new StringBuilder();

        for(int i=0; i<parts.length; i++) {
            String part = parts[i];
            camelCaseString.append(toProperCase(part, (i != 0 ? true : false)));
        }

        return camelCaseString.toString();
    }

    @Override
    public Object put(String key, Object value) {
        return super.put((String) toCamelCase(key), value);
    }
}
