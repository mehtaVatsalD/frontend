package io.commoncoder.learning.angular.mock.models;

import com.google.common.collect.ImmutableList;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class Rooms {

    RoomType roomType;
    List<String> amenities;
    Long roomNumber;
    Long floor;
    Long price;
    String photo;
    Integer rating;
    Long checkinTime;
    Long checkoutTime;

    public enum RoomType {
        NORMAL,
        LUXURY,
        TERI_AUKAT_SE_BAHAR
    }
}
