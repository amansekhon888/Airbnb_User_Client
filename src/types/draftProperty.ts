type CheckpointType =
  | "checkpoint1"
  | "checkpoint2"
  | "checkpoint3"
  | "checkpoint4"
  | "checkpoint5";

type RetrievedDraftResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: IRetrievedDraftData;
};

type IRetrievedDraftData = {
  exists: boolean;
  completedCheckpoints: CheckpointType[]; // Array of completed checkpoints
  checkpoints: Checkpoint[]; // Single checkpoint (can be any of the 5 types)
};

// Enforce the relationship between checkpointNumber and data.type
type Checkpoint =
  | {
      checkpointNumber: 1;
      data: Checkpoint1;
      savedAt: string;
    }
  | {
      checkpointNumber: 2;
      data: Checkpoint2;
      savedAt: string;
    }
  | {
      checkpointNumber: 3;
      data: Checkpoint3;
      savedAt: string;
    }
  | {
      checkpointNumber: 4;
      data: Checkpoint4;
      savedAt: string;
    }
  | {
      checkpointNumber: 5;
      data: Checkpoint5;
      savedAt: string;
    };

// Checkpoint data types
export type Checkpoint1 = {
  type: "checkpoint1"; 
  propertyTitle: string; //done
  propertyCity?: string; //done
  propertyType: string; //done
  propertyCategoryId: string; //done
  propertyPlaceType: string;
  propertyAvailabilityDates: {
    startDate: string;
    endDate: string;
  };
  propertyCountry: string; //done
  propertyState: string; //done
  propertyDescription: string; //done
  propertyGallery?: PropertyGallery[];
  propertyAddress: string; //done
  propertyLandmark?: string; //done
  propertyZipcode: string; //done
  propertyCoordinates: PropertyCoordinates;
};

export type Checkpoint2 = {
  type: "checkpoint2"; // Discriminant property
  noOfBedroom: number;
  noOfBed: number;
  maxGuest: number;
  noOfBathroom: number;
  amenities: string[];
};

export type Checkpoint3 = {
  type: "checkpoint3"; // Discriminant property
  pricePerNight: number;
  cleaningFees: number;
  serviceFees: number;
  weeklyRateDiscount?: number;
  monthlyRateDiscount: number;
  firstThreeBookingsDiscount: boolean;
};

export type Checkpoint4 = {
  type: "checkpoint4"; // Discriminant property
  houseRule: string;
  cancellationPolicy: {
    type: "";
    description: "";
  };
  safetyAndProperty: string;
  checkIn: string;
  checkOut: string;
};

export type Checkpoint5 = {
  type: "checkpoint5"; // Discriminant property
  isPetAllowed: string;
  isHaveInstantBooking: boolean;
  isHaveSelfCheckin: boolean;
  noteForGuest: string;
  nearByAttractionNote: string;
};

export type CheckpointDataResponse = {
  draftId: string;
  checkpointNumber: number;
  totalCheckpoints: number;
  isComplete: boolean;
  nextCheckpoint: string;
};
export type CheckpointData =
  | Checkpoint1
  | Checkpoint2
  | Checkpoint3
  | Checkpoint4
  | Checkpoint5;

type PropertyGallery = {
  url: string;
  isPrimary: boolean;
  caption: string;
};

type PropertyCoordinates = {
  latitude: number;
  longitude: number;
};

type AllDraftData = {
  _id: string;
  user_id: string;
  is_draft: boolean;
  check_points: Checkpoint[];
  draft_stage: string[]; // Array of checkpoint types (e.g., ["checkpoint1", "checkpoint2", "checkpoint3"])
  is_ready: boolean;
  is_published: boolean;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  __v: number;
};

type DeleteDraftData = {
  acknowledged: boolean;
  deletedCount: number;
};

export type {
  RetrievedDraftResponse,
  IRetrievedDraftData,
  Checkpoint,
  PropertyGallery,
  AllDraftData,
  DeleteDraftData,
};
