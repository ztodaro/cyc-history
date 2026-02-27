export interface TimelineFact {
  label: string;
  value: string;
}

export interface TimelineQuote {
  text: string;
  attribution: string;
}

export interface TimelineImage {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
}

export interface TimelineEra {
  id: string;
  title: string;
  years: string;
  summary: string;
  paragraphs: string[];
  facts?: TimelineFact[];
  quote?: TimelineQuote;
  image?: TimelineImage;
  gradientFrom: string;
  gradientTo: string;
}

export interface Source {
  label: string;
  url?: string;
}

export const eras: TimelineEra[] = [
  {
    id: "maritime-genesis",
    title: "Maritime Genesis",
    years: "1885\u20131912",
    summary:
      "Before there was a yacht club, there was a bay, a bold land deal, and a boathouse that moonlighted as a marine science lab.",
    paragraphs: [
      "In 1885, Elisha S. Babcock Jr. and Hampton L. Story bought the entire Coronado peninsula for $110,000. They formed the Coronado Beach Company in 1886 and immediately started building infrastructure: water systems, railroad tracks, roads, and the crown jewel, the Hotel del Coronado, which opened in 1888 and instantly drew a global clientele with an interest in yachting and fishing.",
      "A year before the hotel opened, the Reid brothers designed and built a boathouse on Glorietta Bay as a kind of architectural dress rehearsal. The Boathouse was a miniature version of the Hotel del in style, and it became the center of Coronado's social and maritime life for decades. Guests rowed, canoed, and swam in a protected bay enclosure connected to a two-story bathhouse with 70 changing rooms. It was the heart of waterfront recreation.",
      "In 1903, a UC Berkeley zoologist named William E. Ritter set up a temporary marine research station inside the Boathouse. His work was backed by two of Coronado's most prominent figures: Ellen Browning Scripps and John D. Spreckels. That modest lab in a boathouse eventually grew into the Scripps Institution of Oceanography, one of the most important marine research centers in the world.",
      "Spreckels himself arrived in Coronado in 1906, bringing significant capital and private yachts like the Venetian. His presence accelerated the development of the bay as a maritime destination. But early \"yachting\" around Coronado was still a rough and informal affair. Prosperous businessmen would rent working fishing sloops for Sunday competitions. Boats like the 1902 Butcher Boy were prized because they were fast, and they were fast because they had to be. In the commercial fishing industry, the first boat back to the market got the best prices. That competitive instinct carried directly into weekend racing, embedding a racing ethos into Coronado's waterfront culture years before anyone thought to formalize it.",
    ],
    facts: [
      { label: "Peninsula Purchase", value: "$110,000" },
      { label: "Boathouse Built", value: "1887" },
      { label: "Hotel del Opens", value: "1888" },
      { label: "Scripps Marine Lab", value: "1903" },
      { label: "Spreckels Arrives", value: "1906" },
    ],
    image: {
      src: "/images/boathouse-1888.jpg",
      alt: "The Coronado Boathouse with bath house addition, 1888",
      caption: "The Coronado Boathouse on Glorietta Bay, 1888. Designed by the Reid brothers as an architectural dress rehearsal for the Hotel del Coronado.",
      credit: "Coronado Historical Association",
    },
    gradientFrom: "#0A1628",
    gradientTo: "#4A90A4",
  },
  {
    id: "first-incorporation",
    title: "First Incorporation & WWI",
    years: "1913\u20131931",
    summary:
      "The club was born in 1913, fueled by Tent City sailors and boathouse gatherings. Then the Great War shut it all down for fifteen years.",
    paragraphs: [
      "The Coronado Yacht Club was formally founded in 1913. According to a 1974 San Diego History Center journal article, the club was \"first organized between 1913 and 1916.\" It grew directly out of the sailing culture surrounding Tent City, John D. Spreckels' wildly popular seasonal resort along the Coronado shoreline. The club set up its first headquarters inside the historic Boathouse, the same building that had anchored waterfront social life for a quarter century.",
      "Regattas and organized racing were catching on, and the bay was becoming a genuine yachting destination. But World War I brought everything to a halt. Civilian yachting in San Diego Bay was severely restricted during the war years. Many private yachts were requisitioned for military service, including Spreckels' luxury liner, the Lurline. The U.S. Navy recognized the strategic value of the yachting community. Secretary of the Navy Josephus Daniels publicly praised yachtsmen for their naval preparedness, noting that their recreational sailing experience served as vital preliminary training for wartime service.",
      "Despite that acknowledgment, the CYC's organizational structure dissolved during the conflict. The original members paid off the club's remaining debts and joined the San Diego Yacht Club instead. For the next decade and a half, there was no formal Coronado yacht club. The institution simply ceased to exist.",
      "But the desire for one never really went away. Through the 1920s, Coronado's maritime culture stayed alive. Local sailors kept racing informally. The San Diego Yacht Club even used the old Boathouse as temporary headquarters for a period. Activities like \"surf board riding\" and aquaplaning kept people on the water. The community's relationship with the bay was too deep to disappear. It just needed the right moment to come back.",
    ],
    facts: [
      { label: "Founded", value: "1913" },
      { label: "Dissolved", value: "~1917" },
      { label: "Hiatus", value: "15 years" },
    ],
    quote: {
      text: "The recreational experience of yachtsmen served as vital preliminary training for naval service.",
      attribution: "Josephus Daniels, Secretary of the Navy",
    },
    image: {
      src: "/images/tent-city-aerial-1903.jpg",
      alt: "Aerial view of Tent City with the Boathouse visible, 1903",
      caption: "Tent City and the Boathouse on Glorietta Bay, 1903. Spreckels' seasonal resort drew the sailors who would found the yacht club a decade later.",
      credit: "Coronado Historical Association",
    },
    gradientFrom: "#162240",
    gradientTo: "#357080",
  },
  {
    id: "resurrection-snell",
    title: "Resurrection & the Snell Era",
    years: "1932\u20131945",
    summary:
      "Six yachtsmen, $10 dues, $15 monthly rent, and a lot of elbow grease. In the depths of the Depression, the club came back to life and built itself from nothing.",
    paragraphs: [
      "On April 23, 1932, six Coronado yachtsmen leased a wing of the Hotel del Coronado Boathouse and restarted the club. They called it the \"second beginning.\" Annual dues were set at $10, designed to be accessible in the middle of the Great Depression. Rent on the boathouse wing was $15 a month. The members used the space for meetings and as a base for organizing their activities on the bay.",
      "The driving force behind the reconstitution was Major Ivan B. Snell, who served as Commodore from 1932 to 1935. (A 1974 San Diego History Center journal article also names Henry Weston as an early commodore in 1932, suggesting leadership may have shifted rapidly in the first months of reorganization.) Snell was a believer in the Corinthian spirit: amateurism, cooperation, and service to the community. He articulated the club's civic purpose in a 1935 CYC Directory: \"to attract yachtsmen to the harbor, encourage yachting in San Diego Bay, and work for the benefit of Coronado.\"",
      "Under Snell's watch, membership grew to 200 people within a couple of years. These members didn't just join. They built the place. Dock materials were obtained on credit, and the members themselves hammered in every piling and plank, working side by side to construct slips and docks from scratch. This wasn't a country club with hired contractors. It was a community building its own harbor.",
      "Snell's most significant contribution was leading the campaign to dredge Glorietta Bay. The bay was too shallow for serious yachting. Dredging transformed it into a navigable harbor capable of hosting large regattas and predicted log races. The muck pulled from the bay floor was repurposed to create the land for the Coronado Municipal Golf Course and to expand the local beach dunes. One infrastructure project literally built another.",
      "In 1934, the Hotel del Coronado purchased several Snowbird-class sailboats that had previously been used in the Olympics. The hotel fitted them with brilliantly colored sails and put them on the bay. The Rainbow Fleet became one of the most recognizable sights in Coronado and served as a primary training vessel for generations of young sailors. The brightly colored boats on Glorietta Bay became an iconic image of the community.",
      "The Coronado Rod and Reel Club was organized in 1935 as a subsidiary of the CYC, bringing sport fishing under the same institutional umbrella as sailing. The subsidiary provided facilities for weighing and recording catches, embedding fishing as a parallel pillar of club life alongside racing. By the mid-1930s, the CYC was a genuine community institution.",
      "The club also hosted the James Craig Predicted Log Contest for the first time in 1941, positioning itself as a key venue on the regional yachting calendar. Socially, the era carried a certain glamour. Rumors of an unpublicized casino at the nearby Coronado Islands Yacht Club (a separate entity founded by Frederick W. Hamilton and Mariano Escobedo) intertwined with the social lore of the time, which included visits from celebrities like Al Capone and Errol Flynn. The CYC's own character, though, was defined less by glamour than by the members who built their own docks on credit.",
    ],
    facts: [
      { label: "Annual Dues", value: "$10" },
      { label: "Monthly Rent", value: "$15" },
      { label: "Members by 1934", value: "200+" },
      { label: "Rainbow Fleet", value: "1934" },
      { label: "Rod & Reel Club", value: "1935" },
    ],
    quote: {
      text: "To attract yachtsmen to the harbor, encourage yachting in San Diego Bay, and work for the benefit of Coronado.",
      attribution: "1935 CYC Directory, statement of club purpose",
    },
    image: {
      src: "/images/fdr-ferry-1935.jpg",
      alt: "President Roosevelt on the Coronado Ferry with CYC boats in farewell, 1935",
      caption: "President FDR crossing by ferry from Coronado, October 2, 1935. Boats from the Coronado Yacht Club say farewell.",
      credit: "Coronado Historical Association",
    },
    gradientFrom: "#0A1628",
    gradientTo: "#D4A843",
  },
  {
    id: "postwar-transformation",
    title: "Post-War Transformation",
    years: "1946\u20131959",
    summary:
      "Two Navy barracks floated across the bay on a barge became the clubhouse. It was supposed to be temporary. That was 1947. Nearly eighty years later, they're still standing.",
    paragraphs: [
      "World War II put the brakes on recreational sailing again. The Navy took over much of Coronado for temporary housing and expanded military facilities. Recreational areas like the local golf course were temporarily lost to the war effort. But as the war ended, the CYC moved fast to secure its future.",
      "In 1946, the club obtained a long-term lease on its present property at 1631 Strand Way, at the head of Glorietta Bay in the southwest arm of San Diego Harbor. The location had a unique geographic character: an eight-mile cruise to the open sea, but the ocean breakers of the Pacific were audible just a few hundred yards to the west.",
      "The next year, 1947, came the move that would define the club's physical identity for the next eight decades. The CYC purchased two government surplus barracks that had housed WAVES (Women Accepted for Volunteer Emergency Service) during the war. The buildings were loaded onto a barge, floated across the bay, and installed on the new leasehold to provide larger quarters for the expanding membership. It was supposed to be a temporary arrangement. Originally considered a makeshift solution, these repurposed barracks became the club's permanent headquarters, embodying an \"Old Coronado\" aesthetic that members would fight to preserve for generations.",
      "The transition from the Boathouse to Strand Way mattered for several reasons beyond just square footage. The club's location on tidelands administered through Port governance would later shape decades of land-use and public-access controversies. And the fact that the clubhouse was \"never meant to be permanent\" became a recurring theme in modern redevelopment discussions, framing renovation as both modernization and a way of finally ending an era of impermanence.",
      "In December 1947, the club formally established its Junior Division, a separate unit with its own officers and social calendar, designed to give young sailors a sense of agency and to instill the Corinthian ideals of sportsmanship and achievement. The Junior Division would become the foundation of one of the most successful youth sailing programs in the country.",
      "In January 1948, the club launched its first newsletter, the Whisker Pole, named by club historian Teddy G. Ackerman. The newsletter became a lasting institution, still published today. Also during this period, the James Craig Predicted Log Contest resumed after its wartime hiatus. From 1946 to 1971, the CYC hosted the first-half opening day ceremonies for the contest, with trophy awards held at the Hotel del Coronado. This positioned the club as a central node in the regional yachting calendar.",
      "Through the 1950s, the marina expanded steadily. Dry storage was built to accommodate 81 boats. Slips went up for more than 270 yachts. The modest boathouse club of the 1930s had become a full-scale marina and social institution.",
    ],
    facts: [
      { label: "Lease Secured", value: "1946" },
      { label: "WAVES Barracks", value: "1947" },
      { label: "Junior Division", value: "Dec. 1947" },
      { label: "Whisker Pole", value: "Jan. 1948" },
      { label: "Wet Slips", value: "270+" },
      { label: "Dry Storage", value: "81 boats" },
    ],
    image: {
      src: "/images/hotel-del-1899.jpg",
      alt: "Hotel del Coronado and surrounding waterfront, circa 1899",
      caption: "The Hotel del Coronado and Coronado waterfront, c. 1899. The club's post-war home at 1631 Strand Way sits at the head of Glorietta Bay, just south of here.",
      credit: "Library of Congress, Detroit Publishing Co. (Public Domain)",
    },
    gradientFrom: "#162240",
    gradientTo: "#4A90A4",
  },
  {
    id: "golden-era",
    title: "Golden Era of Sailing",
    years: "1960\u20131989",
    summary:
      "Three Olympic gold medals. World championships in multiple classes. An America's Cup winner. And it all started with kids learning to sail Sabots on Glorietta Bay.",
    paragraphs: [
      "The Junior Program, which had started as a modest youth division in 1947, evolved into an internationally recognized pipeline for competitive sailors. In 1966, the club began its first organized Sailing Program for youth, with a curriculum built on a rigorous three-step Achievement Program: safety, racing, and seamanship. Kids who started on Sabots in the protected waters of Glorietta Bay ended up competing at the highest levels of the sport.",
      "The results were historic. Robbie Haines graduated from the CYC junior program and won Olympic gold. So did Rod Davis, who went on to become an America's Cup champion. Ed Trevelyn also earned Olympic gold. Jon Rogers won world championships in J-24, J-22, and Snipe classes. Willem Van Waay became a J70 World Champion. Lauren Bernsen was named SDAYC Junior Yachtsman of the Year in both 1999 and 2001. Mikee Anderson-Mitterling became College Sailor of the Year. The program wasn't producing one or two standout sailors. It was producing them by the dozen.",
      "In 1969, the juniors got their own clubhouse, an annex of the main building. They had their own officers, their own events, and their own identity. It was a club within a club, and the autonomy it gave young sailors helped build the culture of ownership that made the program so effective. Through the 1980s and 1990s, the Junior Program opened up to the broader Coronado community, welcoming kids who weren't from club families. This broadening of access would become a defining theme of CYC's modern identity.",
      "On the adult side, the club joined the Southern California Yachting Association in 1960 and became a regular host for major regattas, PHRF events, and small-boat racing. The SCYA profile described the club community as roughly 60% sail and 40% power. The marina grew to include floating dry storage docks for active Sabot and Laser fleets.",
      "Social traditions cemented the club's role as a community gathering place. Beer Can races became a Friday staple, with families gathering on the front deck for casual racing, BBQ dinners, and the kind of low-key entertainment that defined CYC culture. Year-round activities included large regattas, class and handicap racing, predicted log races, and organized cruising. By the late 1960s, the club had around 900 members, capacity for 270 yachts, and about 80 smaller boats. A Coronado Historical Association account describes this period as the high-water mark of mid-century expansion.",
    ],
    facts: [
      { label: "Olympic Golds", value: "3" },
      { label: "America's Cup", value: "Rod Davis" },
      { label: "Members by 1969", value: "~900" },
      { label: "SCYA Joined", value: "1960" },
      { label: "Junior Clubhouse", value: "1969" },
    ],
    quote: {
      text: "The kids who started on Sabots in Glorietta Bay ended up on Olympic podiums.",
      attribution: "CYC Junior Sailing Program",
    },
    image: {
      src: "/images/aerial-hotel-del.jpg",
      alt: "Aerial view of Hotel del Coronado showing boathouse and bay",
      caption: "Aerial view of the Hotel del Coronado, the historic Boathouse, and Glorietta Bay. The yacht club marina is visible along the bay to the south.",
      credit: "Coronado Historical Association",
    },
    gradientFrom: "#0A1628",
    gradientTo: "#6BB0C4",
  },
  {
    id: "community-stewardship",
    title: "Community Stewardship",
    years: "1990\u20132010",
    summary:
      "Raising half a million dollars a year for hospice care. Navigating Coastal Commission battles. Protecting eelgrass beds. And keeping a 650-member cap to preserve the club's soul.",
    paragraphs: [
      "The Sharp HospiceCare Benefit Dinner and Regatta became the club's signature community event. Hosted in partnership with the Cortez Racing Association, with dinner at the Hotel del Coronado and racing on the bay, the annual fundraiser grew into one of the region's premier philanthropic events. By 2025, the event was drawing more than 1,200 guests and raising over $500,000 annually for hospice homes. The 2026 edition would mark the 23rd consecutive year.",
      "Environmental awareness became embedded in the club's operating reality. The mission statement was updated to emphasize protecting Glorietta Bay and preventing plastics from entering the waterways. The Rod and Reel Club shifted to catch-and-release fishing to protect local species. When the club pursued a major slip expansion in 1990, the EIR process required eelgrass monitoring and construction timing around least tern nesting season. Environmental compliance wasn't just a regulatory box to check. It shaped when and how the club could build.",
      "That 1990 expansion brought the club into direct contact with California's coastal governance system. The Port of San Diego approved construction of an approximately 640-foot main dock extension with 18 new finger floats, 48 new slips, utilities, and refurbishment on public tidelands. A representative of the Bay Users Group filed an appeal. The California Coastal Commission took up the case, and a 1993 appellate decision laid out the results: the Commission's de novo approval included conditions requiring the club to add an explicit non-discrimination statement to its bylaws (by race, sex, national origin, or religion) and to convert 12 private parking spaces to public parking with signage. It was a concrete example of the tension between private club operations and public trust obligations that would define the next three decades of CYC governance.",
      "Membership stayed intimate by design. The club's structure was explicitly stratified: Flag membership (with full property rights and voting) was capped at 650, with a waitlist and a sponsor-and-reference-based admissions process that included background checks. Junior Flag membership covered ages 24 to 34 with reduced rights. Junior membership served ages 7 to 24. Social membership was time-limited. Including all categories, total membership hovered around 900.",
      "The social calendar kept evolving. Maryland Crab Feasts, Taco Tuesdays, and reciprocal visits from yacht clubs around the Pacific drew diverse groups. The club hosted the Coronado High School Sailing Team free of charge and opened its doors to local nonprofits. In 2020, the Coronado Historical Association held a public program on sailing in Glorietta Bay that included CYC representation and intergenerational recording by high school students, treating the club's stories as community heritage. The CYC was as much a community center as a yacht club.",
    ],
    facts: [
      { label: "Hospice Benefit", value: "$500K+/yr" },
      { label: "Flag Member Cap", value: "650" },
      { label: "Total Members", value: "~900" },
      { label: "New Slips (1990)", value: "48" },
      { label: "Dock Extension", value: "640 ft" },
    ],
    image: {
      src: "/images/hotel-del-habs-1971.jpg",
      alt: "Hotel del Coronado entrance elevation, 1971 HABS survey",
      caption: "The Hotel del Coronado, documented in 1971 by the Historic American Buildings Survey. The CYC and the Hotel del have been neighbors and partners for over a century.",
      credit: "Library of Congress, HABS Survey by Marvin Rand (Public Domain)",
    },
    gradientFrom: "#162240",
    gradientTo: "#D4A843",
  },
  {
    id: "modern-era",
    title: "The Modern Era",
    years: "2011\u2013Present",
    summary:
      "An $18.5 million redevelopment. Adaptive sailing championships. A public trust lawsuit. And a plan to literally rise above the tides.",
    paragraphs: [
      "The WAVES barracks that arrived on a barge in 1947 were never meant to last this long. The clubhouse sits less than half a foot above mean high tide. When the club's long-term lease with the Port of San Diego expired in 2011, it triggered a years-long planning process while the club operated on short-term extensions.",
      "The 2011 expiration coincided with the Port posting a Notice of Determination for a major \"Coronado Yacht Club Redevelopment & Port Master Plan Amendment Project.\" The plan called for demolishing and reconstructing all landside improvements: the clubhouse, junior sailing facility, multipurpose room, storage building, and shop/yard, plus 42 additional parking spaces. On the water side, the project included reconfiguring the marina with up to 108 additional boat slips. It required a full Environmental Impact Report and a Port Master Plan Amendment. That plan did not move forward as envisioned, partly because a prior concept was challenged for routing a public walkway around buildings rather than along the waterfront.",
      "In the meantime, incremental modernization continued. In 2022, the Port approved the replacement of a deteriorated \"shed farm\" of 73 aluminum storage units with 10 cargo containers converted into 80 storage spaces, treated as categorically exempt under CEQA. The current marina operates with 250 wet slips and 79 dry berths with hoist access.",
      "In 2023, the club faced a direct legal challenge when a petition was filed (Herron v. San Diego Unified Port District) questioning the Port's lease of public trust property to a private yacht club. The petitioner alleged violations of public trust doctrine, arguing there had been inadequate public notice and a lack of competitive bidding. The Court of Appeal affirmed dismissal in January 2025, ruling that the Port's leasing decisions involve discretion and that the administrative mandamus claims were time-barred. The opinion quoted lease language specifying the club's use as a nonprofit private yacht club with approximately 264 slips, along with some public-availability programming and community/charitable event uses.",
      "Then in March 2025, the Port of San Diego Board of Port Commissioners authorized environmental review for the current $18.5 million redevelopment proposal. The plan calls for demolishing the existing clubhouse, parking areas, and landscaping and replacing them with a new two-story, 17,000-square-foot clubhouse and a dedicated youth sailing school center. The junior sailors currently operate out of a makeshift double-wide trailer. About 450 kids learn to sail there each summer, and roughly half of them aren't even club members. The new facility would give one of the largest youth sailing programs in the country its first permanent home.",
      "The project includes a six-foot-wide public promenade and a bayside viewing platform along the shoreline, using grade separation to balance private club activities with California's public trust requirements for coastal access. The entire site would be elevated three to seven feet, with a new seawall, to address sea-level rise. The Port's press release specified that the project involves no public funding. The club estimates a minimum investment exceeding $18.5 million. The plan must proceed through CEQA and Coastal Act review, and may require a new lease. The current lease expires in December 2028.",
      "Meanwhile, the club's identity has broadened in significant ways. In 2015, CYC established and hosted the Kyle C. McArthur Memorial Regatta in partnership with Challenged Sailors San Diego, supported by the Port of San Diego. In September 2025, the club hosted the US Sailing Para Sailing Championship, with nine Martin 16s racing on Glorietta Bay and participants traveling from across the United States and internationally. Adaptive sailing has become a real part of the club's identity, not a token program.",
      "Membership has grown past 1,200 people. When the new clubhouse opens, it will be the first purpose-built facility in the club's history. Everything before it was borrowed, bartered, or built by hand. The club's coordinates remain 32\u00b0 40.88\u2032 N, 117\u00b0 10.44\u2032 W, and it still monitors VHF Channel 69. But what stands at the head of Glorietta Bay is about to change for the first time since two barracks floated across the harbor on a barge.",
    ],
    facts: [
      { label: "Redevelopment", value: "$18.5M" },
      { label: "New Clubhouse", value: "17,000 sq ft" },
      { label: "Site Elevation", value: "3\u20137 ft" },
      { label: "Junior Sailors/Summer", value: "~450" },
      { label: "Wet Slips", value: "250" },
      { label: "Total Members", value: "1,200+" },
    ],
    quote: {
      text: "A lasting legacy for the future.",
      attribution: "Coronado Yacht Club Redevelopment Vision",
    },
    image: {
      src: "/images/hotel-del-modern.jpg",
      alt: "The Hotel del Coronado today",
      caption: "The Hotel del Coronado today, the iconic neighbor of the Coronado Yacht Club since 1888. The CYC sits just south along Glorietta Bay.",
      credit: "Wikimedia Commons (CC BY 3.0)",
    },
    gradientFrom: "#0A1628",
    gradientTo: "#4A90A4",
  },
];

export const sources: Source[] = [
  { label: "CYC Official History", url: "https://www.coronadoyc.org/theclub/history" },
  { label: "CYC Clubhouse", url: "https://www.coronadoyc.org/theclub/clubhouse" },
  { label: "CYC Junior Sailing Handbook", url: "https://www.coronadoyc.org/jrsailing/handbook" },
  { label: "CYC Mission & Goals", url: "https://www.coronadoyc.org/theclub" },
  { label: "CYC Marina", url: "https://www.coronadoyc.org/marina" },
  { label: "San Diego History Center: \"Yachting: Its History in San Diego\" (1974)", url: "https://sandiegohistory.org/journal/1974/october/yachting/" },
  { label: "Port of San Diego: Redevelopment Environmental Review Authorization (March 2025)", url: "https://www.portofsandiego.org/press-releases/general-press-releases/coronado-yacht-club-redevelopment-proposal-advances" },
  { label: "CEQAnet: Coronado Yacht Club Slip Expansion EIR (1990)" },
  { label: "CEQAnet: CYC Redevelopment & Port Master Plan Amendment (2011)" },
  { label: "CEQAnet: Shed Farm Replacement Categorical Exemption (2022)" },
  { label: "California Court of Appeal: Coastal Commission Jurisdiction Decision (1993)" },
  { label: "California Court of Appeal: Herron v. San Diego Unified Port District (2025)" },
  { label: "The Coronado News: \"Coronado Yacht Club plans $18.5 million revamp\" (2025)" },
  { label: "Coronado Times: \"$18.5 Million CYC Redevelopment Project Moves Forward\" (2025)" },
  { label: "San Diego Reader: \"How Coronado Yacht Club fends off the public\" (2020)" },
  { label: "Coronado Historical Association" },
  { label: "Coronado Historical Association: History Matters Newsletter (2020)" },
  { label: "Sharp HealthCare: HospiceCare Benefit Dinner and Regatta" },
  { label: "Southern California Yachting Association: Club Profile" },
  { label: "Coronado Boathouse History (coronado-boathouse.com)" },
  { label: "KMAC Foundation: Kyle C. McArthur Memorial Regatta" },
  { label: "Challenged Sailors San Diego Newsletter (2025)" },
  { label: "Library of Congress: Detroit Publishing Co. Collection" },
];
