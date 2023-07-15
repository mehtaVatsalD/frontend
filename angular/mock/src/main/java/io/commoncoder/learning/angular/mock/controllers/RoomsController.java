package io.commoncoder.learning.angular.mock.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.ImmutableList;

import io.commoncoder.learning.angular.mock.models.Rooms;
import io.commoncoder.learning.angular.mock.services.RoomsService;

@RestController
@RequestMapping(("/api/v1/rooms"))
public class RoomsController {

    private final RoomsService roomsService;

    @Autowired
    public RoomsController(RoomsService roomsService) {
        this.roomsService = roomsService;
    }

    @GetMapping
    public ImmutableList<Rooms> getAllRooms() {
        return roomsService.getAllRooms();
    }

}
