export interface TimelineFact {
  label: string;
  value: string;
}

export interface TimelineQuote {
  text: string;
  attribution: string;
}

export interface TimelineEra {
  id: string;
  title: string;
  years: string;
  summary: string;
  paragraphs: string[];
  facts?: TimelineFact[];
  quote?: TimelineQuote;
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
      "Before there was a yacht club, there was a bay. The story starts with a $110,000 land deal and a boathouse that doubled as a marine science lab.",
    paragraphs: [
      "In 1885, Elisha Babcock Jr. and Hampton Story bought the entire Coronado peninsula for $110,000. They formed the Coronado Beach Company the following year and got to work building roads, rail lines, water systems, and the crown jewel: the Hotel del Coronado.",
      "The Reid brothers, the same architects behind the Hotel del, designed a boathouse on Glorietta Bay in 1887 as a kind of practice run. It became the center of Coronado's social and maritime life. Guests rowed, canoed, and swam in a protected bay enclosure connected to a two-story bathhouse with 70 changing rooms.",
      "In 1903, a UC Berkeley zoologist named William Ritter set up a temporary marine research station inside the boathouse. Ellen Browning Scripps and John D. Spreckels backed his work. That small lab eventually grew into the Scripps Institution of Oceanography.",
      "Early \"yachting\" around Coronado was rough and informal. Businessmen would rent working fishing sloops for Sunday races. Boats like the 1902 Butcher Boy were fast because they had to be. In the fishing industry, the first boat back to port got the best prices. That competitive edge carried over into weekend racing.",
    ],
    facts: [
      { label: "Peninsula Purchase", value: "$110,000" },
      { label: "Boathouse Built", value: "1887" },
      { label: "Hotel del Opens", value: "1888" },
    ],
    gradientFrom: "#0A1628",
    gradientTo: "#4A90A4",
  },
  {
    id: "first-incorporation",
    title: "First Incorporation & WWI",
    years: "1913\u20131931",
    summary:
      "The club was born in 1913, fueled by Tent City sailors and boathouse gatherings. Then the Great War shut it all down.",
    paragraphs: [
      "The Coronado Yacht Club was formally founded in 1913. It grew out of the sailing culture around Tent City, John D. Spreckels' popular seasonal resort along the Coronado shoreline. The club set up headquarters in the historic boathouse, the same building that had anchored waterfront life for 25 years.",
      "Regattas and racing were catching on, but World War I brought everything to a halt. Civilian yachting in San Diego Bay was severely restricted. Many private yachts were requisitioned for military service, including Spreckels' luxury liner, the Lurline. Secretary of the Navy Josephus Daniels praised yachtsmen for their naval preparedness, noting that recreational sailing served as preliminary training for wartime service.",
      "The CYC's organizational structure dissolved during the war. Original members paid off the club's debts and joined the San Diego Yacht Club instead. For the next decade and a half, there was no formal Coronado yacht club. But the desire for one never went away.",
      "Through the 1920s, local sailors kept racing informally. The San Diego Yacht Club even used the old boathouse as temporary headquarters for a while. Coronado's water culture stayed alive, just waiting for the right spark.",
    ],
    facts: [
      { label: "Founded", value: "1913" },
      { label: "Hiatus", value: "~15 years" },
    ],
    quote: {
      text: "The recreational experience of yachtsmen served as vital preliminary training for naval service.",
      attribution: "Josephus Daniels, Secretary of the Navy",
    },
    gradientFrom: "#162240",
    gradientTo: "#357080",
  },
  {
    id: "resurrection-snell",
    title: "Resurrection & the Snell Era",
    years: "1932\u20131945",
    summary:
      "Six yachtsmen, $10 dues, and a lot of elbow grease. In the depths of the Depression, the club came back to life.",
    paragraphs: [
      "On April 23, 1932, six Coronado yachtsmen leased a wing of the Hotel del Coronado Boathouse and restarted the club. Dues were $10 a year. Rent was $15 a month. They called it the \"second beginning.\"",
      "The driving force was Major Ivan B. Snell, who served as Commodore from 1932 to 1935. Snell believed in the Corinthian spirit: amateurism, cooperation, and service to the community. Under his watch, membership grew to 200 people within a couple of years.",
      "These members didn't just join. They built the place. Dock materials were obtained on credit, and the members themselves hammered in every piling and plank. Snell also led the campaign to dredge Glorietta Bay, turning a shallow mudflat into a real harbor. The muck pulled from the bay floor was used to create land for the Coronado Municipal Golf Course and expand the local beach dunes.",
      "In 1934, the Hotel del Coronado bought several Snowbird-class sailboats that had been used in the Olympics. They fitted them with brightly colored sails and put them on the bay. The Rainbow Fleet became one of the most recognizable sights in Coronado and trained generations of young sailors.",
      "The Coronado Rod and Reel Club was organized in 1935 as a subsidiary, bringing sport fishing under the same roof as sailing. By the mid-1930s, the CYC was a genuine community institution.",
    ],
    facts: [
      { label: "Annual Dues", value: "$10" },
      { label: "Members by 1934", value: "200+" },
      { label: "Rainbow Fleet", value: "1934" },
      { label: "Rod & Reel Club", value: "1935" },
    ],
    quote: {
      text: "To attract yachtsmen to the harbor, encourage yachting in San Diego Bay, and work for the benefit of Coronado.",
      attribution: "Club purpose, 1935 CYC Directory",
    },
    gradientFrom: "#0A1628",
    gradientTo: "#D4A843",
  },
  {
    id: "postwar-transformation",
    title: "Post-War Transformation",
    years: "1946\u20131959",
    summary:
      "Two Navy barracks floated across the bay on a barge became the clubhouse. It was supposed to be temporary. That was 1947.",
    paragraphs: [
      "World War II put the brakes on recreational sailing again. The Navy took over much of Coronado, converting recreational areas into temporary military housing. But as the war ended, the CYC moved fast.",
      "In 1946, the club secured a long-term lease on its present property at 1631 Strand Way, at the head of Glorietta Bay. The location is unique: an eight-mile cruise to the open sea, but you can hear Pacific breakers from just a few hundred yards away.",
      "The next year, 1947, the club bought two surplus Navy barracks that had housed WAVES (Women Accepted for Volunteer Emergency Service) during the war. The buildings were loaded onto a barge, floated across the bay, and installed on the new leasehold. They were meant to be a temporary solution. Nearly 80 years later, they're still there.",
      "Also in 1947, the club formally established its Junior Division. Young sailors got their own officers, their own social calendar, and a sense of ownership over their program. The first issue of the club newsletter, the Whisker Pole, came out in January 1948, named by club historian Teddy Ackerman.",
      "Through the 1950s, the marina expanded steadily. Dry storage went up for 81 boats. Slips were built to handle more than 270 yachts. The old boathouse club was becoming something much bigger.",
    ],
    facts: [
      { label: "Lease Secured", value: "1946" },
      { label: "WAVES Barracks", value: "1947" },
      { label: "Wet Slips", value: "270+" },
      { label: "Dry Storage", value: "81 boats" },
    ],
    gradientFrom: "#162240",
    gradientTo: "#4A90A4",
  },
  {
    id: "golden-era",
    title: "Golden Era of Sailing",
    years: "1960\u20131989",
    summary:
      "Olympic gold medals, world championships, and Beer Can races on Friday nights. The junior program became a pipeline for greatness.",
    paragraphs: [
      "The Junior Program went from a local youth activity to an internationally recognized pipeline for competitive sailors. The curriculum was built on a three-step system: safety, racing, and seamanship. Kids who started on Sabots in Glorietta Bay ended up on Olympic podiums.",
      "Robbie Haines won Olympic gold. So did Rod Davis, who also became an America's Cup champion. Ed Trevelyn earned gold at the Olympics as well. Jon Rogers won world championships in J-24, J-22, and Snipe classes. These were CYC juniors who learned to sail on the same bay where members had hammered in docks 30 years earlier.",
      "In 1969, the juniors got their own clubhouse, an annex of the main building. They had their own officers, their own events, and their own identity. The program began opening up to the broader Coronado community in the 1980s, welcoming kids who weren't from club families.",
      "On the social side, Beer Can races became a Friday tradition. Families gathered on the front deck for casual racing, BBQ dinners, and the kind of low-key community gathering that defined CYC culture. By the late 1960s, the club had around 900 members.",
      "The club joined the Southern California Yachting Association in 1960 and became a regular host for major regattas, PHRF events, and small-boat racing. The community was roughly 60% sail and 40% power.",
    ],
    facts: [
      { label: "Olympic Golds", value: "3" },
      { label: "Members", value: "~900" },
      { label: "SCYA Joined", value: "1960" },
    ],
    quote: {
      text: "The kids who started on Sabots in Glorietta Bay ended up on Olympic podiums.",
      attribution: "CYC Junior Sailing Program",
    },
    gradientFrom: "#0A1628",
    gradientTo: "#6BB0C4",
  },
  {
    id: "community-stewardship",
    title: "Community Stewardship",
    years: "1990\u20132010",
    summary:
      "Raising hundreds of thousands for hospice care, protecting eelgrass beds, and keeping the club's intimate feel with a 650-member cap.",
    paragraphs: [
      "The Sharp Hospice Care Benefit Dinner and Regatta became the signature community event. Hosted in partnership with the Cortez Racing Association, with dinner at the Hotel del Coronado and racing on the bay, the annual benefit drew more than a thousand guests and raised over $500,000 in peak years for hospice services in the region.",
      "Environmental awareness became part of the club's identity. The mission statement was updated to emphasize protecting Glorietta Bay and preventing plastics from entering the waterways. The Rod and Reel Club shifted to catch-and-release fishing to protect local species. Eelgrass monitoring and least tern nesting season restrictions became part of the club's operating reality.",
      "Membership stayed intimate by design. Flag membership, the primary class with full rights and voting privileges, was capped at 650. A waitlist and sponsor-based admissions process kept the community tight. Including juniors and other categories, total membership hovered around 900.",
      "The social calendar kept evolving. Maryland Crab Feasts, Taco Tuesdays, and reciprocal visits from yacht clubs around the Pacific drew diverse groups. The club hosted the Coronado High School Sailing Team free of charge and opened its doors to local nonprofits. The CYC was as much a community center as a yacht club.",
    ],
    facts: [
      { label: "Hospice Benefit Peak", value: "$500K+" },
      { label: "Flag Membership Cap", value: "650" },
      { label: "Total Members", value: "~900" },
    ],
    gradientFrom: "#162240",
    gradientTo: "#D4A843",
  },
  {
    id: "modern-era",
    title: "The Modern Era",
    years: "2011\u2013Present",
    summary:
      "An $18.5 million rebuild, adaptive sailing championships, and a plan to rise above the tides. The next chapter is under construction.",
    paragraphs: [
      "The WAVES barracks that arrived on a barge in 1947 were never meant to last this long. The clubhouse sits less than half a foot above mean high tide. The long-term lease with the Port of San Diego expired in 2011, leading to a series of short-term extensions while a major redevelopment plan took shape.",
      "In March 2025, the Port of San Diego Board of Commissioners authorized environmental review for an $18.5 million redevelopment project. The plan calls for demolishing the existing clubhouse and building a new two-story, 17,000-square-foot facility, plus a dedicated youth sailing school center to replace the current double-wide trailer where about 450 kids learn to sail each summer. Roughly half of those kids aren't even club members.",
      "The project also includes a six-foot-wide public promenade and a bayside viewing platform along the shoreline, balancing the private club with California's public trust requirements. The entire site would be elevated three to seven feet to handle sea-level rise.",
      "Meanwhile, the club's identity has expanded. CYC hosted the US Sailing Para Sailing Championship in 2025, with adaptive sailors from across the country racing Martin 16s on Glorietta Bay. The Kyle C. McArthur Memorial Regatta, launched in 2015, brings together challenged sailors from San Diego and beyond.",
      "Membership has grown past 1,200 people. The current lease runs through December 2028. When the new clubhouse opens, it will be the first purpose-built facility in the club's history. Everything before it was borrowed, bartered, or built by hand.",
    ],
    facts: [
      { label: "Redevelopment Cost", value: "$18.5M" },
      { label: "New Clubhouse", value: "17,000 sq ft" },
      { label: "Junior Sailors/Summer", value: "~450" },
      { label: "Total Members", value: "1,200+" },
    ],
    quote: {
      text: "A lasting legacy for the future.",
      attribution: "Coronado Yacht Club Redevelopment Vision",
    },
    gradientFrom: "#0A1628",
    gradientTo: "#4A90A4",
  },
];

export const sources: Source[] = [
  { label: "CYC Official History", url: "https://www.coronadoyc.org/theclub/history" },
  { label: "CYC Clubhouse", url: "https://www.coronadoyc.org/theclub/clubhouse" },
  { label: "CYC Junior Sailing Handbook", url: "https://www.coronadoyc.org/jrsailing/handbook" },
  { label: "San Diego History Center: Yachting History", url: "https://sandiegohistory.org/journal/1974/october/yachting/" },
  { label: "Port of San Diego: Redevelopment Press Release (2025)", url: "https://www.portofsandiego.org/press-releases/general-press-releases/coronado-yacht-club-redevelopment-proposal-advances" },
  { label: "The Coronado News: $18.5M Revamp (2025)" },
  { label: "Coronado Times: Redevelopment Project (2025)" },
  { label: "Coronado Historical Association" },
  { label: "Sharp HealthCare: HospiceCare Benefit" },
  { label: "Southern California Yachting Association: Club Profile" },
  { label: "Coronado Boathouse History" },
  { label: "Challenged Sailors San Diego Newsletter (2025)" },
];
