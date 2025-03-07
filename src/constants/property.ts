export type steps =
  | "property_info"
  | "new_property_details"
  | "pricing_and_availability"
  | "rules_and_policies"
  | "additional_information"
  | "ready_to_publish";

export type status = "pending" | "done" | "progress";

export const checkpointToStepMap: Record<string, steps> = {
  checkpoint1: "property_info",
  checkpoint2: "new_property_details",
  checkpoint3: "pricing_and_availability",
  checkpoint4: "rules_and_policies",
  checkpoint5: "additional_information",
  checkpoint6: "ready_to_publish",
};


export const propertyTypeOptions = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House' },
  { value: 'condo', label: 'Condo' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'villa', label: 'Villa' },
];
export const propertyCategoryOptions = [
  { value: 'house_rental', label: 'House Rental' },
  { value: 'apartment_rental', label: 'Apartment Rental' },
  { value: 'condo_rental', label: 'Condo Rental' },
  { value: 'townhouse_rental', label: 'Townhouse Rental' },
];
export const StateOptions = [
  { value: 'Alabama', label: 'Alabama' },
  { value: 'Alaska', label: 'Alaska' },
  { value: 'Arizona', label: 'Arizona' },
  { value: 'Arkansas', label: 'Arkansas' },
]
export const CityOptions = [
  { value: 'Birmingham', label: 'Birmingham' },
  { value: 'Chicago', label: 'Chicago' },
  { value: 'Denver', label: 'Denver' },
  { value: 'New York', label: 'New York' },
]

export const Amenities = [
  {
    title: 'Recommended Amenities',
    subtitle: 'Travelers prefer these amenities when booking homes',
    items: ['Air conditioning', 'Breakfast', 'Cable TV', 'Fireplace', 'Kitchen', 'Private entrance', 'Smoke detector', 'Washer', 'Wifi'],
  },
  {
    title: 'Guest’s favorites',
    subtitle: 'Most of our successful properties provide these amenities.',
    items: ['Closet', "Dryer", "Essentials", "Heating", "Iron", "Laptop friendly workspace", "TV", "Hangers", "Hair dryer"],
  },
  {
    title: 'Kitchen',
    subtitle: 'Guests often book homes because of the kitchen, make sure you let travelers know what to expect in your kitchen spaces.',
    items: ['Coffee maker', 'Cooking basics', 'Dishes and silverware', 'Dishwasher', 'Microwave', 'Oven', 'Refrigerator', 'Stove'],
  },
  {
    title: 'Safety and Cleanlinesss',
    subtitle: 'Safety features that guests often look for when booking homes.',
    items: ['Fire extinguisher', 'First aid kit', 'Smoke detector', 'Carbon monoxide detector', 'Lock on bedroom door', 'Private entrance', 'Safety card', 'Window guards', 'Bedroom comforts'],
  },
  {
    title: 'Others',
    subtitle: 'Other amenities that guests often look for when booking homes.',
    items: ['Carbon monoxide detector', 'First aid kit', 'Free parking on premises', 'Gym', 'Hot tub', 'Pool', 'Self check-in', 'Pets allowed', 'Wheelchair accessible'],
  }
]