interface Room {
    totalRooms: number
    availableRooms: number;
    bookedRooms: number;
};

enum RoomType {
    NORMAL = "NORMAL",
    LUXURY = "LUXURY",
    TERI_AUKAT_SE_BAHAR = "TERI_AUKAT_SE_BAHAR"
};

interface RoomDetails {
    roomType: RoomType;
    amenities: string[];
    roomNumber: number;
    floor: number;
    price: number;
    photo: string;
    rating: number;
    checkinTime: Date;
    checkoutTime: Date;
}

export { Room as Roomz, RoomDetails, RoomType };