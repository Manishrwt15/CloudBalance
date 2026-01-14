package com.CloudBalance.Backend.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.Getter;

@Getter
public enum GroupBy {

    SERVICE("SERVICE"),
    INSTANCE_TYPE("INSTANCE_TYPE"),
    ACCOUNT_ID("ACCOUNT_ID"),
    USAGE_TYPE("USAGE_TYPE"),
    PLATFORM("PLATFORM"),
    REGION("REGION");

    private final String column;

    GroupBy(String column) {
        this.column = column;
    }

    @JsonCreator
    public static GroupBy fromValue(String value) {
        for (GroupBy gb : GroupBy.values()) {
            if (gb.name().equalsIgnoreCase(value.trim())) {
                return gb;
            }
        }
        throw new IllegalArgumentException("Invalid groupBy value: " + value);
    }
}
