package io.commoncoder.learning.angular.mock.services;

import com.google.common.collect.ImmutableList;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import io.commoncoder.learning.angular.mock.models.Rooms;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;

@Service
@Slf4j
public class RoomsService {

    private final Gson gson;

    @Autowired
    public RoomsService(Gson gson) {
        this.gson = gson;
    }


    public ImmutableList<Rooms> getAllRooms() {
        try (BufferedReader bufferedReader = new BufferedReader(Files.newBufferedReader(Paths.get("src/main/resources/mockRoomsData.json")))) {
            return ImmutableList.copyOf(gson.fromJson(bufferedReader, new TypeToken<ArrayList<Rooms>>(){}));
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            return ImmutableList.of();
        }
    }

}
