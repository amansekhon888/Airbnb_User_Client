interface User {
    _id: string;
    first_name: string;
    last_name: string;
}

interface IReview {
    _id: string;
    property_id: string;
    user: User; // Assuming user_id can be null
    content: string;
    rating: number;
    created_at: string; // Using string to represent the ISO date format
    updated_at?: string; // Using string to represent the ISO date format
}

interface ICoordinates {
    type: string;
    location_coordinates: [number, number];
}

interface ILocation {
    region_id: string;
    address: string;
    city: string;
    country: string;
    state: string;
    coordinates: ICoordinates;
    landmark: string;
    zip_code: string;
}

interface IAmenity {
    _id: string;
    title: string;
    icon: string;
    __v: number;
}

interface IAvailability {
    start_date: string;
    end_date: string;
    _id: string;
}

interface IGallery {
    url: string;
    isPrimary: boolean;
    caption?: string;
}

interface ICapacity {
    max_guest: number;
    adult: number;
    child: number;
}

interface TopReviewsWithAvgRatings {
    averageRating: number;
    reviews: IReview[];
    totalReviews: number;
}

interface IPropertyDetails {
    _id: string;
    category: string;
    property_type: string;
    name: string;
    rating: number;
    details: {
        description: string;
        bed: number;
        bed_rooms: number;
        bath_rooms: number;
        lot_size: number;
        type: string;
        perks: string[];
        Languages: string;
    };
    tags: string[];
    experience_tag: string[];
    status: string;
    amenities: IAmenity[];
    availability: IAvailability[];
    location: ILocation;
    __v: number;
    capacity: ICapacity;
    host: string;
    price: string;
    gallery: IGallery[];
    topReviewsWithAvgRatings: TopReviewsWithAvgRatings;
    title: string;
    liked: boolean;
}

interface PropertyDetailsResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: IPropertyDetails;
}

export type {
    PropertyDetailsResponse,
    IPropertyDetails,
    IGallery,
    TopReviewsWithAvgRatings,
};
