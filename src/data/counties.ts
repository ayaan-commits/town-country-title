export interface County {
  name: string;
  slug: string;
  population?: string;
  countySeats: string;
  description: string;
  landmarks: string[];
  majorCities: string[];
  realEstateInfo: string;
}

export const floridaCounties: County[] = [
  {
    name: "Alachua",
    slug: "alachua-county",
    population: "285,000+",
    countySeats: "Gainesville",
    description: "Home to the University of Florida, Alachua County is a vibrant educational and cultural hub in North Central Florida.",
    landmarks: ["University of Florida", "Paynes Prairie", "Devil's Millhopper"],
    majorCities: ["Gainesville", "Alachua", "High Springs", "Newberry"],
    realEstateInfo: "The Gainesville real estate market is driven by the University of Florida, with strong demand for student housing, family homes, and investment properties."
  },
  {
    name: "Baker",
    slug: "baker-county",
    population: "29,000+",
    countySeats: "Macclenny",
    description: "Baker County offers small-town Florida living with easy access to Jacksonville's amenities.",
    landmarks: ["Osceola National Forest", "Ocean Pond"],
    majorCities: ["Macclenny", "Glen St. Mary", "Sanderson"],
    realEstateInfo: "Baker County features affordable housing options for those seeking rural living with proximity to Jacksonville's job market."
  },
  {
    name: "Bay",
    slug: "bay-county",
    population: "175,000+",
    countySeats: "Panama City",
    description: "Bay County is famous for its stunning beaches and the popular destination of Panama City Beach.",
    landmarks: ["Panama City Beach", "St. Andrews State Park", "Tyndall Air Force Base"],
    majorCities: ["Panama City", "Panama City Beach", "Lynn Haven", "Callaway"],
    realEstateInfo: "Bay County's real estate market features beach condos, vacation rentals, and family homes, with strong tourism-driven investment opportunities."
  },
  {
    name: "Bradford",
    slug: "bradford-county",
    population: "28,000+",
    countySeats: "Starke",
    description: "Bradford County is a quiet, rural community in North Central Florida with a rich agricultural heritage.",
    landmarks: ["Camp Blanding", "Kingsley Lake"],
    majorCities: ["Starke", "Lawtey", "Hampton"],
    realEstateInfo: "Bradford County offers affordable rural properties and farmland with a peaceful, small-town atmosphere."
  },
  {
    name: "Brevard",
    slug: "brevard-county",
    population: "605,000+",
    countySeats: "Titusville",
    description: "Known as Florida's Space Coast, Brevard County is home to Kennedy Space Center and beautiful Atlantic beaches.",
    landmarks: ["Kennedy Space Center", "Cocoa Beach", "Canaveral National Seashore"],
    majorCities: ["Melbourne", "Palm Bay", "Titusville", "Cocoa Beach", "Rockledge"],
    realEstateInfo: "Brevard County offers diverse real estate from beachfront condos to suburban homes, driven by the aerospace industry and tourism."
  },
  {
    name: "Broward",
    slug: "broward-county",
    population: "1.9 million+",
    countySeats: "Fort Lauderdale",
    description: "Broward County is South Florida's second-most populous county, known for Fort Lauderdale's beaches, arts, and culture.",
    landmarks: ["Fort Lauderdale Beach", "Sawgrass Mills", "Las Olas Boulevard", "Port Everglades"],
    majorCities: ["Fort Lauderdale", "Hollywood", "Pembroke Pines", "Coral Springs", "Miramar", "Davie"],
    realEstateInfo: "Broward County features a dynamic real estate market with waterfront properties, luxury condos, and diverse suburban communities."
  },
  {
    name: "Calhoun",
    slug: "calhoun-county",
    population: "14,000+",
    countySeats: "Blountstown",
    description: "Calhoun County is a rural community along the Apalachicola River in the Florida Panhandle.",
    landmarks: ["Apalachicola River", "Torreya State Park"],
    majorCities: ["Blountstown", "Altha"],
    realEstateInfo: "Calhoun County offers affordable rural properties with river access and natural beauty."
  },
  {
    name: "Charlotte",
    slug: "charlotte-county",
    population: "190,000+",
    countySeats: "Punta Gorda",
    description: "Charlotte County is known for its pristine waters, fishing, and the charming downtown of Punta Gorda.",
    landmarks: ["Charlotte Harbor", "Englewood Beach", "Peace River"],
    majorCities: ["Punta Gorda", "Port Charlotte", "Englewood"],
    realEstateInfo: "Charlotte County attracts retirees and families with waterfront living, golf communities, and a relaxed coastal lifestyle."
  },
  {
    name: "Citrus",
    slug: "citrus-county",
    population: "155,000+",
    countySeats: "Inverness",
    description: "Citrus County is the 'Manatee Capital of the World' with crystal-clear springs and natural beauty.",
    landmarks: ["Crystal River", "Homosassa Springs", "Three Sisters Springs"],
    majorCities: ["Crystal River", "Inverness", "Homosassa"],
    realEstateInfo: "Citrus County offers waterfront properties, retirement communities, and access to world-famous manatee viewing."
  },
  {
    name: "Clay",
    slug: "clay-county",
    population: "225,000+",
    countySeats: "Green Cove Springs",
    description: "Clay County is a growing suburban community south of Jacksonville with excellent schools and family-friendly neighborhoods.",
    landmarks: ["Camp Blanding", "Jennings State Forest", "Black Creek"],
    majorCities: ["Orange Park", "Fleming Island", "Green Cove Springs", "Middleburg"],
    realEstateInfo: "Clay County is popular with families seeking quality schools, affordable homes, and proximity to Jacksonville."
  },
  {
    name: "Collier",
    slug: "collier-county",
    population: "390,000+",
    countySeats: "Naples",
    description: "Collier County is home to Naples, one of Florida's most prestigious communities with world-class golf and beaches.",
    landmarks: ["Naples Beach", "Everglades National Park", "Marco Island", "Corkscrew Swamp"],
    majorCities: ["Naples", "Marco Island", "Immokalee"],
    realEstateInfo: "Collier County features luxury real estate, golf course communities, and some of Florida's most expensive waterfront properties."
  },
  {
    name: "Columbia",
    slug: "columbia-county",
    population: "72,000+",
    countySeats: "Lake City",
    description: "Columbia County is located at the crossroads of I-75 and I-10, serving as a gateway to North Florida.",
    landmarks: ["O'Leno State Park", "Ichetucknee Springs"],
    majorCities: ["Lake City", "Fort White"],
    realEstateInfo: "Columbia County offers affordable housing with easy access to Gainesville and Jacksonville job markets."
  },
  {
    name: "DeSoto",
    slug: "desoto-county",
    population: "38,000+",
    countySeats: "Arcadia",
    description: "DeSoto County is Florida's 'Cattle Country' with a rich ranching heritage and antique shops in historic Arcadia.",
    landmarks: ["Peace River", "Arcadia Historic District"],
    majorCities: ["Arcadia", "Nocatee"],
    realEstateInfo: "DeSoto County features agricultural properties, ranchettes, and affordable rural living."
  },
  {
    name: "Dixie",
    slug: "dixie-county",
    population: "17,000+",
    countySeats: "Cross City",
    description: "Dixie County offers authentic Old Florida with pristine nature and Gulf Coast access.",
    landmarks: ["Lower Suwannee National Wildlife Refuge", "Horseshoe Beach"],
    majorCities: ["Cross City", "Horseshoe Beach", "Old Town"],
    realEstateInfo: "Dixie County provides affordable waterfront properties and secluded rural living on Florida's Nature Coast."
  },
  {
    name: "Duval",
    slug: "duval-county",
    population: "995,000+",
    countySeats: "Jacksonville",
    description: "Duval County is home to Jacksonville, Florida's largest city by population and land area.",
    landmarks: ["Jacksonville Beach", "St. Johns River", "TIAA Bank Field", "Jacksonville Zoo"],
    majorCities: ["Jacksonville", "Jacksonville Beach", "Atlantic Beach", "Neptune Beach"],
    realEstateInfo: "Duval County offers diverse real estate from urban condos to beach homes and suburban neighborhoods."
  },
  {
    name: "Escambia",
    slug: "escambia-county",
    population: "320,000+",
    countySeats: "Pensacola",
    description: "Escambia County is Florida's westernmost county, home to Pensacola and its famous white-sand beaches.",
    landmarks: ["Pensacola Beach", "National Naval Aviation Museum", "Fort Pickens"],
    majorCities: ["Pensacola", "Pensacola Beach", "Perdido Key"],
    realEstateInfo: "Escambia County features military housing demand, beach properties, and historic downtown Pensacola homes."
  },
  {
    name: "Flagler",
    slug: "flagler-county",
    population: "120,000+",
    countySeats: "Bunnell",
    description: "Flagler County is one of Florida's fastest-growing counties with beautiful beaches and planned communities.",
    landmarks: ["Flagler Beach", "Washington Oaks Gardens", "Marineland"],
    majorCities: ["Palm Coast", "Flagler Beach", "Bunnell"],
    realEstateInfo: "Flagler County offers new construction, master-planned communities, and a growing real estate market."
  },
  {
    name: "Franklin",
    slug: "franklin-county",
    population: "12,000+",
    countySeats: "Apalachicola",
    description: "Franklin County is home to historic Apalachicola and some of Florida's most pristine barrier islands.",
    landmarks: ["Apalachicola", "St. George Island", "Carrabelle"],
    majorCities: ["Apalachicola", "Carrabelle", "St. George Island"],
    realEstateInfo: "Franklin County features vacation properties, waterfront homes, and investment opportunities in a growing tourism area."
  },
  {
    name: "Gadsden",
    slug: "gadsden-county",
    population: "44,000+",
    countySeats: "Quincy",
    description: "Gadsden County is located in the Tallahassee metro area with rolling hills and agricultural heritage.",
    landmarks: ["Lake Talquin", "Quincy Historic District"],
    majorCities: ["Quincy", "Havana", "Chattahoochee"],
    realEstateInfo: "Gadsden County offers affordable properties near Tallahassee with rural character and natural beauty."
  },
  {
    name: "Gilchrist",
    slug: "gilchrist-county",
    population: "18,000+",
    countySeats: "Trenton",
    description: "Gilchrist County is home to natural springs and the Suwannee River in rural North Florida.",
    landmarks: ["Suwannee River", "Gilchrist Blue Springs", "Hart Springs"],
    majorCities: ["Trenton", "Bell", "Fanning Springs"],
    realEstateInfo: "Gilchrist County provides affordable rural properties with access to springs and river activities."
  },
  {
    name: "Glades",
    slug: "glades-county",
    population: "13,000+",
    countySeats: "Moore Haven",
    description: "Glades County borders Lake Okeechobee and offers rural Florida living with fishing and agriculture.",
    landmarks: ["Lake Okeechobee", "Fisheating Creek"],
    majorCities: ["Moore Haven", "Buckhead Ridge"],
    realEstateInfo: "Glades County features lakefront properties and agricultural land at affordable prices."
  },
  {
    name: "Gulf",
    slug: "gulf-county",
    population: "16,000+",
    countySeats: "Port St. Joe",
    description: "Gulf County is home to Mexico Beach and Port St. Joe with stunning Gulf Coast beaches.",
    landmarks: ["Mexico Beach", "St. Joseph Peninsula", "Dead Lakes"],
    majorCities: ["Port St. Joe", "Wewahitchka", "Mexico Beach"],
    realEstateInfo: "Gulf County offers beach homes, vacation rentals, and rebuilding opportunities following Hurricane Michael."
  },
  {
    name: "Hamilton",
    slug: "hamilton-county",
    population: "14,000+",
    countySeats: "Jasper",
    description: "Hamilton County is a rural community along the Suwannee River in North Florida.",
    landmarks: ["Stephen Foster Folk Culture Center", "Big Shoals State Park"],
    majorCities: ["Jasper", "White Springs", "Jennings"],
    realEstateInfo: "Hamilton County provides affordable rural properties with river access and natural beauty."
  },
  {
    name: "Hardee",
    slug: "hardee-county",
    population: "27,000+",
    countySeats: "Wauchula",
    description: "Hardee County is in the heart of Florida's citrus and cattle country.",
    landmarks: ["Peace River", "Paynes Creek Historic State Park"],
    majorCities: ["Wauchula", "Bowling Green", "Zolfo Springs"],
    realEstateInfo: "Hardee County offers agricultural properties and affordable rural living in Central Florida."
  },
  {
    name: "Hendry",
    slug: "hendry-county",
    population: "42,000+",
    countySeats: "LaBelle",
    description: "Hendry County is known for sugar cane production and access to Lake Okeechobee.",
    landmarks: ["Lake Okeechobee", "Big Cypress Seminole Reservation"],
    majorCities: ["LaBelle", "Clewiston"],
    realEstateInfo: "Hendry County features agricultural land, lakefront properties, and affordable rural homes."
  },
  {
    name: "Hernando",
    slug: "hernando-county",
    population: "195,000+",
    countySeats: "Brooksville",
    description: "Hernando County is part of the Tampa Bay metro area with springs, forests, and growing communities.",
    landmarks: ["Weeki Wachee Springs", "Chassahowitzka River", "Withlacoochee State Forest"],
    majorCities: ["Spring Hill", "Brooksville", "Weeki Wachee"],
    realEstateInfo: "Hernando County offers affordable housing alternatives to Tampa with new construction and natural amenities."
  },
  {
    name: "Highlands",
    slug: "highlands-county",
    population: "105,000+",
    countySeats: "Sebring",
    description: "Highlands County is home to Sebring and the famous 12 Hours of Sebring race.",
    landmarks: ["Sebring International Raceway", "Lake Placid Murals", "Highlands Hammock State Park"],
    majorCities: ["Sebring", "Avon Park", "Lake Placid"],
    realEstateInfo: "Highlands County features retirement communities, lakefront properties, and affordable Central Florida living."
  },
  {
    name: "Hillsborough",
    slug: "hillsborough-county",
    population: "1.5 million+",
    countySeats: "Tampa",
    description: "Hillsborough County is home to Tampa, Florida's third-largest city, with major sports, culture, and business.",
    landmarks: ["Tampa Riverwalk", "Busch Gardens", "Ybor City", "Raymond James Stadium"],
    majorCities: ["Tampa", "Brandon", "Plant City", "Temple Terrace"],
    realEstateInfo: "Hillsborough County features diverse real estate from downtown condos to suburban homes and waterfront properties."
  },
  {
    name: "Holmes",
    slug: "holmes-county",
    population: "19,000+",
    countySeats: "Bonifay",
    description: "Holmes County is a rural community in the Florida Panhandle with a strong agricultural heritage.",
    landmarks: ["Ponce de Leon Springs", "Choctawhatchee River"],
    majorCities: ["Bonifay", "Ponce de Leon", "Westville"],
    realEstateInfo: "Holmes County offers affordable rural properties and farmland in the Panhandle."
  },
  {
    name: "Indian River",
    slug: "indian-river-county",
    population: "160,000+",
    countySeats: "Vero Beach",
    description: "Indian River County is known for its citrus heritage and the upscale community of Vero Beach.",
    landmarks: ["Vero Beach", "McKee Botanical Garden", "Indian River Lagoon"],
    majorCities: ["Vero Beach", "Sebastian", "Fellsmere"],
    realEstateInfo: "Indian River County offers beach homes, golf communities, and a sophisticated coastal lifestyle."
  },
  {
    name: "Jackson",
    slug: "jackson-county",
    population: "47,000+",
    countySeats: "Marianna",
    description: "Jackson County is home to Florida Caverns State Park and rolling hills in the Panhandle.",
    landmarks: ["Florida Caverns State Park", "Chipola River"],
    majorCities: ["Marianna", "Graceville", "Sneads"],
    realEstateInfo: "Jackson County provides affordable properties with unique geological features and natural beauty."
  },
  {
    name: "Jefferson",
    slug: "jefferson-county",
    population: "14,000+",
    countySeats: "Monticello",
    description: "Jefferson County features historic Monticello and a charming small-town atmosphere near Tallahassee.",
    landmarks: ["Monticello Opera House", "Aucilla River"],
    majorCities: ["Monticello"],
    realEstateInfo: "Jefferson County offers historic homes, rural properties, and proximity to Tallahassee."
  },
  {
    name: "Lafayette",
    slug: "lafayette-county",
    population: "8,500+",
    countySeats: "Mayo",
    description: "Lafayette County is Florida's least populous county with pristine rivers and Old Florida charm.",
    landmarks: ["Suwannee River", "Lafayette Blue Springs"],
    majorCities: ["Mayo"],
    realEstateInfo: "Lafayette County provides affordable rural properties with river access in a peaceful setting."
  },
  {
    name: "Lake",
    slug: "lake-county",
    population: "395,000+",
    countySeats: "Tavares",
    description: "Lake County is home to over 1,000 lakes and growing communities in Central Florida.",
    landmarks: ["Mount Dora", "Lake Harris", "Clermont's Champions Gate"],
    majorCities: ["Clermont", "Leesburg", "Mount Dora", "Tavares", "Eustis"],
    realEstateInfo: "Lake County offers lakefront properties, new construction, and convenient access to Orlando attractions."
  },
  {
    name: "Lee",
    slug: "lee-county",
    population: "780,000+",
    countySeats: "Fort Myers",
    description: "Lee County is home to Fort Myers, Sanibel Island, and Southwest Florida's premier beaches.",
    landmarks: ["Sanibel Island", "Edison & Ford Winter Estates", "Fort Myers Beach"],
    majorCities: ["Fort Myers", "Cape Coral", "Bonita Springs", "Lehigh Acres", "Sanibel"],
    realEstateInfo: "Lee County features beach homes, waterfront properties, and diverse residential communities."
  },
  {
    name: "Leon",
    slug: "leon-county",
    population: "295,000+",
    countySeats: "Tallahassee",
    description: "Leon County is home to Florida's capital, Tallahassee, and two major universities.",
    landmarks: ["Florida State Capitol", "Florida State University", "Lake Jackson"],
    majorCities: ["Tallahassee"],
    realEstateInfo: "Leon County features government and university-driven real estate with historic neighborhoods and new developments."
  },
  {
    name: "Levy",
    slug: "levy-county",
    population: "43,000+",
    countySeats: "Bronson",
    description: "Levy County offers Nature Coast living with pristine rivers and Gulf Coast access.",
    landmarks: ["Cedar Key", "Manatee Springs State Park", "Suwannee River"],
    majorCities: ["Williston", "Chiefland", "Cedar Key", "Bronson"],
    realEstateInfo: "Levy County features waterfront properties, rural homes, and the artsy island community of Cedar Key."
  },
  {
    name: "Liberty",
    slug: "liberty-county",
    population: "8,500+",
    countySeats: "Bristol",
    description: "Liberty County is a sparsely populated county with vast national forest lands.",
    landmarks: ["Apalachicola National Forest", "Torreya State Park"],
    majorCities: ["Bristol"],
    realEstateInfo: "Liberty County offers secluded rural properties surrounded by natural forest lands."
  },
  {
    name: "Madison",
    slug: "madison-county",
    population: "18,000+",
    countySeats: "Madison",
    description: "Madison County features a charming downtown and agricultural heritage in North Florida.",
    landmarks: ["Madison Blue Spring", "Suwannee River State Park"],
    majorCities: ["Madison", "Lee"],
    realEstateInfo: "Madison County provides affordable rural properties with spring access and small-town living."
  },
  {
    name: "Manatee",
    slug: "manatee-county",
    population: "410,000+",
    countySeats: "Bradenton",
    description: "Manatee County is home to Bradenton and Anna Maria Island in the Tampa Bay area.",
    landmarks: ["Anna Maria Island", "Robinson Preserve", "De Soto National Memorial"],
    majorCities: ["Bradenton", "Palmetto", "Anna Maria", "Holmes Beach", "Lakewood Ranch"],
    realEstateInfo: "Manatee County offers beach homes, master-planned communities, and Tampa Bay metro access."
  },
  {
    name: "Marion",
    slug: "marion-county",
    population: "380,000+",
    countySeats: "Ocala",
    description: "Marion County is the 'Horse Capital of the World' with beautiful horse farms and Silver Springs.",
    landmarks: ["Silver Springs", "Ocala National Forest", "Rainbow Springs"],
    majorCities: ["Ocala", "Dunnellon", "Belleview"],
    realEstateInfo: "Marion County features horse farms, retirement communities, and affordable Central Florida living."
  },
  {
    name: "Martin",
    slug: "martin-county",
    population: "160,000+",
    countySeats: "Stuart",
    description: "Martin County offers the 'Sailfish Capital of the World' with strict growth management.",
    landmarks: ["Stuart", "Hutchinson Island", "St. Lucie Inlet"],
    majorCities: ["Stuart", "Palm City", "Indiantown", "Jensen Beach"],
    realEstateInfo: "Martin County features waterfront properties and a commitment to controlled, quality development."
  },
  {
    name: "Miami-Dade",
    slug: "miami-dade-county",
    population: "2.7 million+",
    countySeats: "Miami",
    description: "Miami-Dade County is Florida's most populous county, home to Miami and its international culture.",
    landmarks: ["South Beach", "Everglades National Park", "Brickell", "Coral Gables"],
    majorCities: ["Miami", "Miami Beach", "Hialeah", "Coral Gables", "Doral", "Homestead"],
    realEstateInfo: "Miami-Dade offers luxury condos, waterfront estates, and diverse neighborhoods from urban to suburban."
  },
  {
    name: "Monroe",
    slug: "monroe-county",
    population: "82,000+",
    countySeats: "Key West",
    description: "Monroe County comprises the Florida Keys, a tropical island chain extending into the Gulf of Mexico.",
    landmarks: ["Key West", "Dry Tortugas", "Seven Mile Bridge", "Bahia Honda"],
    majorCities: ["Key West", "Marathon", "Key Largo", "Islamorada"],
    realEstateInfo: "Monroe County features unique island properties with limited land and premium waterfront values."
  },
  {
    name: "Nassau",
    slug: "nassau-county",
    population: "92,000+",
    countySeats: "Fernandina Beach",
    description: "Nassau County is home to Amelia Island and historic Fernandina Beach in Northeast Florida.",
    landmarks: ["Amelia Island", "Fort Clinch", "Fernandina Beach Historic District"],
    majorCities: ["Fernandina Beach", "Yulee", "Callahan"],
    realEstateInfo: "Nassau County offers beach homes, golf communities, and growing suburban developments."
  },
  {
    name: "Okaloosa",
    slug: "okaloosa-county",
    population: "215,000+",
    countySeats: "Crestview",
    description: "Okaloosa County is home to Destin and the Emerald Coast's famous beaches.",
    landmarks: ["Destin Harbor", "Henderson Beach State Park", "Eglin Air Force Base"],
    majorCities: ["Fort Walton Beach", "Destin", "Crestview", "Niceville"],
    realEstateInfo: "Okaloosa County features beach condos, vacation rentals, and military housing demand."
  },
  {
    name: "Okeechobee",
    slug: "okeechobee-county",
    population: "42,000+",
    countySeats: "Okeechobee",
    description: "Okeechobee County borders Florida's largest lake with fishing and agricultural heritage.",
    landmarks: ["Lake Okeechobee", "Okeechobee Battlefield Historic State Park"],
    majorCities: ["Okeechobee"],
    realEstateInfo: "Okeechobee County offers lakefront properties, ranchland, and affordable rural living."
  },
  {
    name: "Orange",
    slug: "orange-county",
    population: "1.4 million+",
    countySeats: "Orlando",
    description: "Orange County is home to Orlando and world-famous theme parks including Walt Disney World.",
    landmarks: ["Walt Disney World", "Universal Orlando", "Lake Eola", "Orlando Eye"],
    majorCities: ["Orlando", "Winter Park", "Winter Garden", "Apopka", "Ocoee"],
    realEstateInfo: "Orange County offers diverse real estate from downtown condos to vacation homes near theme parks."
  },
  {
    name: "Osceola",
    slug: "osceola-county",
    population: "395,000+",
    countySeats: "Kissimmee",
    description: "Osceola County is home to Kissimmee and the southern gateway to Walt Disney World.",
    landmarks: ["Celebration", "Old Town Kissimmee", "Shingle Creek"],
    majorCities: ["Kissimmee", "St. Cloud", "Celebration"],
    realEstateInfo: "Osceola County features vacation homes, short-term rentals, and growing residential communities."
  },
  {
    name: "Palm Beach",
    slug: "palm-beach-county",
    population: "1.5 million+",
    countySeats: "West Palm Beach",
    description: "Palm Beach County is home to exclusive Palm Beach Island and diverse communities.",
    landmarks: ["Worth Avenue", "Palm Beach", "Everglades", "Morikami Museum"],
    majorCities: ["West Palm Beach", "Boca Raton", "Delray Beach", "Boynton Beach", "Jupiter"],
    realEstateInfo: "Palm Beach County offers luxury estates, beach condos, and diverse residential options."
  },
  {
    name: "Pasco",
    slug: "pasco-county",
    population: "565,000+",
    countySeats: "Dade City",
    description: "Pasco County is a fast-growing part of the Tampa Bay metro area with New Port Richey and nature preserves.",
    landmarks: ["Starkey Wilderness Park", "Werner-Boyce Salt Springs", "Land O' Lakes"],
    majorCities: ["New Port Richey", "Dade City", "Zephyrhills", "Land O' Lakes", "Wesley Chapel"],
    realEstateInfo: "Pasco County features new construction, master-planned communities, and affordable Tampa Bay alternatives."
  },
  {
    name: "Pinellas",
    slug: "pinellas-county",
    population: "975,000+",
    countySeats: "Clearwater",
    description: "Pinellas County is Florida's most densely populated county with Clearwater Beach and St. Petersburg.",
    landmarks: ["Clearwater Beach", "St. Pete Beach", "Salvador Dali Museum", "Tropicana Field"],
    majorCities: ["St. Petersburg", "Clearwater", "Largo", "Dunedin", "Tarpon Springs"],
    realEstateInfo: "Pinellas County offers beach condos, waterfront homes, and urban living in St. Petersburg."
  },
  {
    name: "Polk",
    slug: "polk-county",
    population: "750,000+",
    countySeats: "Bartow",
    description: "Polk County is Central Florida's largest county with Lakeland, citrus heritage, and LEGOLAND.",
    landmarks: ["LEGOLAND Florida", "Bok Tower Gardens", "Lake Wales Ridge"],
    majorCities: ["Lakeland", "Winter Haven", "Bartow", "Lake Wales", "Haines City"],
    realEstateInfo: "Polk County offers affordable Central Florida living with easy access to Tampa and Orlando."
  },
  {
    name: "Putnam",
    slug: "putnam-county",
    population: "74,000+",
    countySeats: "Palatka",
    description: "Putnam County features the St. Johns River and historic Palatka in Northeast Florida.",
    landmarks: ["Ravine Gardens State Park", "St. Johns River"],
    majorCities: ["Palatka", "Crescent City", "Interlachen"],
    realEstateInfo: "Putnam County provides affordable properties with river access and natural beauty."
  },
  {
    name: "Santa Rosa",
    slug: "santa-rosa-county",
    population: "195,000+",
    countySeats: "Milton",
    description: "Santa Rosa County offers Navarre Beach and Blackwater River in the Florida Panhandle.",
    landmarks: ["Navarre Beach", "Blackwater River State Park", "Gulf Islands National Seashore"],
    majorCities: ["Milton", "Navarre", "Gulf Breeze", "Pace"],
    realEstateInfo: "Santa Rosa County features beach properties, river homes, and growing suburban communities."
  },
  {
    name: "Sarasota",
    slug: "sarasota-county",
    population: "440,000+",
    countySeats: "Sarasota",
    description: "Sarasota County is known for its arts scene, Siesta Key Beach, and upscale communities.",
    landmarks: ["Siesta Key Beach", "Ringling Museum", "St. Armands Circle", "Myakka River"],
    majorCities: ["Sarasota", "Venice", "North Port", "Englewood", "Siesta Key"],
    realEstateInfo: "Sarasota County offers beach homes, golf communities, and a sophisticated cultural lifestyle."
  },
  {
    name: "Seminole",
    slug: "seminole-county",
    population: "480,000+",
    countySeats: "Sanford",
    description: "Seminole County is a suburban Orlando community with excellent schools and quality of life.",
    landmarks: ["Wekiwa Springs", "Lake Monroe", "Historic Sanford"],
    majorCities: ["Sanford", "Altamonte Springs", "Lake Mary", "Oviedo", "Longwood"],
    realEstateInfo: "Seminole County features top-rated schools, established neighborhoods, and Orlando metro convenience."
  },
  {
    name: "St. Johns",
    slug: "st-johns-county",
    population: "290,000+",
    countySeats: "St. Augustine",
    description: "St. Johns County is home to historic St. Augustine and consistently ranked among Florida's best.",
    landmarks: ["St. Augustine", "Ponte Vedra Beach", "Fort Matanzas", "Castillo de San Marcos"],
    majorCities: ["St. Augustine", "Ponte Vedra Beach", "St. Augustine Beach"],
    realEstateInfo: "St. Johns County offers historic properties, beach homes, and premier golf communities."
  },
  {
    name: "St. Lucie",
    slug: "st-lucie-county",
    population: "345,000+",
    countySeats: "Fort Pierce",
    description: "St. Lucie County offers Treasure Coast living with Port St. Lucie's growth.",
    landmarks: ["Port St. Lucie", "Fort Pierce Inlet", "Savannas Preserve"],
    majorCities: ["Port St. Lucie", "Fort Pierce"],
    realEstateInfo: "St. Lucie County features affordable coastal living and one of Florida's fastest-growing cities."
  },
  {
    name: "Sumter",
    slug: "sumter-county",
    population: "140,000+",
    countySeats: "Bushnell",
    description: "Sumter County is home to The Villages, the world's largest retirement community.",
    landmarks: ["The Villages", "Dade Battlefield Historic State Park"],
    majorCities: ["The Villages", "Bushnell", "Wildwood"],
    realEstateInfo: "Sumter County is dominated by The Villages with active adult communities and amenities."
  },
  {
    name: "Suwannee",
    slug: "suwannee-county",
    population: "45,000+",
    countySeats: "Live Oak",
    description: "Suwannee County features the famous Suwannee River and springs in North Florida.",
    landmarks: ["Suwannee River", "Ichetucknee Springs", "Spirit of the Suwannee Music Park"],
    majorCities: ["Live Oak", "Branford"],
    realEstateInfo: "Suwannee County offers river properties, rural homes, and affordable North Florida living."
  },
  {
    name: "Taylor",
    slug: "taylor-county",
    population: "21,000+",
    countySeats: "Perry",
    description: "Taylor County is the 'Tree Capital of the South' with forestry heritage and Gulf Coast access.",
    landmarks: ["Keaton Beach", "Econfina River"],
    majorCities: ["Perry", "Steinhatchee"],
    realEstateInfo: "Taylor County provides affordable properties with fishing access and rural character."
  },
  {
    name: "Union",
    slug: "union-county",
    population: "15,000+",
    countySeats: "Lake Butler",
    description: "Union County is a small, rural community in North Central Florida.",
    landmarks: ["Santa Fe River"],
    majorCities: ["Lake Butler", "Worthington Springs"],
    realEstateInfo: "Union County offers affordable rural properties with proximity to Gainesville."
  },
  {
    name: "Volusia",
    slug: "volusia-county",
    population: "560,000+",
    countySeats: "DeLand",
    description: "Volusia County is home to Daytona Beach, the World's Most Famous Beach, and NASCAR.",
    landmarks: ["Daytona Beach", "Daytona International Speedway", "New Smyrna Beach", "DeLand"],
    majorCities: ["Daytona Beach", "Port Orange", "Deltona", "Ormond Beach", "New Smyrna Beach", "DeLand"],
    realEstateInfo: "Volusia County offers beach homes, motorsports-area properties, and diverse residential options."
  },
  {
    name: "Wakulla",
    slug: "wakulla-county",
    population: "35,000+",
    countySeats: "Crawfordville",
    description: "Wakulla County features Wakulla Springs and pristine natural areas near Tallahassee.",
    landmarks: ["Wakulla Springs State Park", "St. Marks National Wildlife Refuge"],
    majorCities: ["Crawfordville", "St. Marks", "Sopchoppy"],
    realEstateInfo: "Wakulla County offers rural properties with natural beauty and Tallahassee access."
  },
  {
    name: "Walton",
    slug: "walton-county",
    population: "82,000+",
    countySeats: "DeFuniak Springs",
    description: "Walton County is home to 30A and some of Florida's most beautiful beaches.",
    landmarks: ["30A", "Seaside", "Grayton Beach", "Topsail Hill Preserve"],
    majorCities: ["DeFuniak Springs", "Santa Rosa Beach", "Miramar Beach", "Freeport"],
    realEstateInfo: "Walton County features premium beach properties along 30A and growing communities."
  },
  {
    name: "Washington",
    slug: "washington-county",
    population: "26,000+",
    countySeats: "Chipley",
    description: "Washington County is a rural Panhandle community with natural springs and forests.",
    landmarks: ["Falling Waters State Park", "Pine Log State Forest"],
    majorCities: ["Chipley", "Vernon"],
    realEstateInfo: "Washington County offers affordable rural properties in the Florida Panhandle."
  }
];

export const getCountyBySlug = (slug: string): County | undefined => {
  return floridaCounties.find(county => county.slug === slug);
};

export const getCountiesByRegion = (region: string): County[] => {
  const regions: { [key: string]: string[] } = {
    'south-florida': ['Miami-Dade', 'Broward', 'Palm Beach', 'Monroe'],
    'southwest-florida': ['Collier', 'Lee', 'Charlotte', 'Sarasota', 'Manatee'],
    'central-florida': ['Orange', 'Osceola', 'Seminole', 'Lake', 'Polk', 'Volusia'],
    'tampa-bay': ['Hillsborough', 'Pinellas', 'Pasco', 'Hernando'],
    'north-florida': ['Duval', 'St. Johns', 'Clay', 'Nassau', 'Baker'],
    'panhandle': ['Escambia', 'Santa Rosa', 'Okaloosa', 'Walton', 'Bay', 'Gulf', 'Franklin']
  };

  const countyNames = regions[region] || [];
  return floridaCounties.filter(county => countyNames.includes(county.name));
};
