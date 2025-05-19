import { CountryType } from '../types';

export const africanCountries: CountryType[] = [
  {
    id: 1,
    name: "Algeria",
    slug: "algeria",
    capital: "Algiers",
    population: 44616624,
    area: 2381741,
    currency: "Algerian Dinar (DZD)",
    flagUrl: "https://flagcdn.com/w320/dz.png",
    flagFact: "The Algerian flag features a red crescent and star on a green and white background, symbolizing Islam and peace.",
    flagDescription: "The flag consists of two equal vertical bars, with white on the left and green on the right, centered with a red crescent and star.",
    funFact: "Algeria is the largest country in Africa by land area after the partition of Sudan.",
    regions: ["northern", "sahara"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290078/Algiers_ebpj8x.jpg",
    languages: [
      { name: "Arabic", percentage: 85 },
      { name: "Tamazight (Berber)", percentage: 15 }
    ],
    geographicFacts: [
      "Home to much of the Sahara desert",
      "Has a Mediterranean coastline of over 1,600 km",
      "Atlas Mountains run through the northern region",
      "Contains several UNESCO World Heritage sites"
    ],
    economicFacts: [
      "Major exporter of natural gas and oil",
      "Has the 4th largest economy in Africa",
      "Significant phosphate mining industry",
      "Growing tourism sector"
    ],
    touristAttractions: [
      {
        name: "Timgad Roman Ruins",
        location: "Batna Province",
        description: "Timgad is a UNESCO World Heritage site featuring remarkably well-preserved Roman ruins. Founded by Emperor Trajan around 100 CE, this ancient city showcases a perfect example of Roman urban planning with its grid layout, grand colonnaded streets, and impressive public buildings.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427158/Timgad_Roman_Ruins_okfzsa.jpg"
      },
      {
        name: "Casbah of Algiers",
        location: "Algiers",
        description: "The Casbah of Algiers is a UNESCO World Heritage site and historic citadel with distinctive Ottoman architecture. This labyrinthine medina features narrow winding streets, traditional houses, ancient mosques, and palaces dating back to the 16th century.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427158/Kasbah_of_Algiers_k2wdqp.jpg"
      },
      {
        name: "Tassili n'Ajjer",
        location: "Sahara Desert, Southeastern Algeria",
        description: "Tassili n'Ajjer is a vast plateau in the Sahara Desert known for its extraordinary collection of prehistoric rock art. This UNESCO World Heritage site contains over 15,000 rock paintings and engravings dating back to 6000 BCE, depicting changes in climate, wildlife, and human activities.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427158/tassili_n_ajjer_hc5qdf.jpg"
      },
      {
        name: "Djémila",
        location: "Sétif Province",
        description: "Djémila, meaning 'beautiful' in Arabic, is an exceptionally well-preserved Roman city set in the high mountains of northern Algeria. This UNESCO World Heritage site features remarkable Roman architecture adapted to a mountain environment, including temples, basilicas, and beautiful mosaics.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427434/Dj%C3%A9mila_v5jxp1.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "Angola",
    slug: "angola",
    capital: "Luanda",
    population: 32866272,
    area: 1246700,
    currency: "Angolan Kwanza (AOA)",
    flagUrl: "https://flagcdn.com/w320/ao.png",
    flagFact: "The Angolan flag features a machete and star inspired by the Soviet flag, representing revolution and independence.",
    flagDescription: "Two horizontal stripes of red and black with a central emblem featuring a yellow machete, star, and gear wheel.",
    funFact: "Angola is the seventh-largest country in Africa and is known for its abundant natural resources.",
    regions: ["southern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290077/Luanda_ewzkki.jpg",
    languages: [
      { name: "Portuguese", percentage: 71 },
      { name: "Umbundu", percentage: 23 },
      { name: "Other", percentage: 6 }
    ],
    geographicFacts: [
      "Has a tropical Atlantic coastline spanning 1,600 km",
      "Home to part of the Congo Basin rainforest",
      "Contains the Namib Desert in the south",
      "Rich in rivers and waterfalls"
    ],
    economicFacts: [
      "Major oil producer in Africa",
      "Significant diamond mining industry",
      "Growing manufacturing sector",
      "Developing tourism industry"
    ],
    touristAttractions: [
      {
        name: "Kissama National Park",
        location: "Luanda Province",
        description: "A vast wildlife reserve featuring diverse African fauna and impressive baobab trees. The park is part of Angola's conservation efforts to restore wildlife populations after the civil war, with elephants, antelopes, and various bird species now thriving in this protected ecosystem.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427157/Kissama_National_Park_vb0xm9.jpg"
      },
      {
        name: "Luanda Bay",
        location: "Luanda",
        description: "A stunning coastal area in Angola's capital featuring a beautiful crescent-shaped promenade known as the Marginal. The bay offers breathtaking views of the Atlantic Ocean, modern architecture, and is a popular spot for locals and tourists to enjoy sunset walks and outdoor activities.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427157/Luanda_Bay_nnidil.jpg"
      },
      {
        name: "Kalandula Falls",
        location: "Malanje Province",
        description: "One of Africa's largest waterfalls, with a width of about 400 meters and a drop of 105 meters. These spectacular falls on the Lucala River create a magnificent cascade surrounded by lush vegetation, offering visitors breathtaking views and photography opportunities.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427157/kalandula_falls_jxseos.jpg"
      },
      {
        name: "Miradouro da Lua",
        location: "Luanda Province",
        description: "A fascinating geological formation resembling a lunar landscape, located about 40km south of Luanda. Centuries of erosion have sculpted these distinctive clay cliffs into otherworldly shapes that change color with the setting sun, creating a truly magical spectacle for visitors.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427157/miradouro_da_lua_jjv5zf.jpg"
      }
    ]
  },
  {
    id: 3,
    name: "Benin",
    slug: "benin",
    capital: "Porto-Novo",
    population: 12123200,
    area: 114763,
    currency: "West African CFA Franc (XOF)",
    flagUrl: "https://flagcdn.com/w320/bj.png",
    flagFact: "The Benin flag features a green stripe and a yellow stripe with a red stripe on the hoist side, symbolizing hope and cultural heritage.",
    flagDescription: "A vertical green stripe on the hoist side and two horizontal stripes: yellow above and red below.",
    funFact: "Benin was the birthplace of Vodun (Voodoo) and is still practiced widely today.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290065/Porto-Novo_hctxoz.jpg",
    languages: [
      { name: "French", percentage: 45 },
      { name: "Fon", percentage: 24 },
      { name: "Yoruba", percentage: 20 },
      { name: "Other", percentage: 11 }
    ],
    geographicFacts: [
      "Located in the Gulf of Guinea",
      "Mostly flat terrain with some hills in the north",
      "Home to important wetlands and lagoons",
      "Tropical climate with two rainy seasons"
    ],
    economicFacts: [
      "Major cotton producer",
      "Growing digital economy",
      "Important port facilities",
      "Developing tourism sector"
    ],
    touristAttractions: [
      {
        name: "Royal Palaces of Abomey",
        location: "Abomey",
        description: "A UNESCO World Heritage site featuring twelve royal palaces built by the kings of Dahomey from 1625 to 1900. These earthen structures showcase remarkable bas-reliefs, colorful murals, and artifacts that tell the story of the powerful Dahomey Kingdom, offering visitors a glimpse into West Africa's rich pre-colonial history.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427157/Royal_Palaces_of_Abomey_bnsnwb.jpg"
      },
      {
        name: "Ganvié Stilt Village",
        location: "Lake Nokoué",
        description: "Often called the 'Venice of Africa,' Ganvié is a remarkable village built entirely on stilts above Lake Nokoué. Home to over 20,000 people of the Tofinu ethnic group, this unique settlement was established in the 16th-17th centuries to escape slave traders. Today, residents travel by pirogue (dugout canoe) and maintain a traditional fishing lifestyle.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427157/Ganvi%C3%A9_Stilt_Village_wz7sst.jpg"
      },
      {
        name: "Pendjari National Park",
        location: "Atakora Department",
        description: "One of West Africa's most important wildlife reserves, spanning over 2,750 square kilometers. The park is home to some of the last populations of big game in the region, including elephants, lions, cheetahs, and various antelope species. Its diverse landscapes range from woodland savanna to lush forests along the Pendjari River.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427158/Pendjari_National_Park_txhmkj.jpg"
      },
      {
        name: "Door of No Return",
        location: "Ouidah",
        description: "A powerful memorial arch on Ouidah's beach marking the final point of the 'Slave Route' where captured Africans were forced onto ships bound for the Americas. This somber monument stands as a reminder of the transatlantic slave trade's brutality and serves as an important site for reflection and remembrance of this tragic historical period.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426532/Door_of_No_Return_wdsv15.png"
      }
    ]
  },
  {
    id: 4,
    name: "Botswana",
    slug: "botswana",
    capital: "Gaborone",
    population: 2351627,
    area: 581730,
    currency: "Botswana Pula (BWP)",
    flagUrl: "https://flagcdn.com/w320/bw.png",
    flagFact: "The Botswana flag's light blue color represents water, specifically the rain that is essential in the arid country.",
    flagDescription: "Light blue background with a black horizontal stripe bordered by thin white stripes in the center.",
    funFact: "Botswana has the world's largest elephant population and is known for its successful conservation efforts.",
    regions: ["southern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290076/Gaborone_nyzgtc.jpg",
    languages: [
      { name: "Setswana", percentage: 78 },
      { name: "English", percentage: 20 },
      { name: "Other", percentage: 2 }
    ],
    geographicFacts: [
      "Home to the Kalahari Desert",
      "Contains the Okavango Delta, world's largest inland river delta",
      "Mostly flat terrain with gentle hills",
      "Semi-arid climate"
    ],
    economicFacts: [
      "World's largest diamond producer by value",
      "Strong tourism sector",
      "Stable democratic government",
      "One of Africa's fastest-growing economies"
    ],
    touristAttractions: [
      {
        name: "Okavango Delta",
        location: "Northwestern Botswana",
        description: "A UNESCO World Heritage site and one of Africa's most extraordinary ecosystems, where the Okavango River empties into the Kalahari Desert, creating a unique inland delta. This pristine wetland paradise supports incredible biodiversity with channels, lagoons, and islands that are home to elephants, hippos, crocodiles, and hundreds of bird species.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427156/Okavango_Delta_v1ff8n.jpg"
      },
      {
        name: "Chobe National Park",
        location: "Northern Botswana",
        description: "Botswana's first national park and home to one of Africa's largest concentrations of elephants, with an estimated population of 120,000. The park is renowned for its spectacular riverfront area along the Chobe River, where wildlife congregates during the dry season, offering visitors extraordinary game viewing opportunities from both land and water.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427158/Chobe_National_Park_zmvlt9.jpg"
      },
      {
        name: "Moremi Game Reserve",
        location: "Okavango Delta",
        description: "A protected area covering about a third of the eastern Okavango Delta, renowned for its incredible concentration of wildlife and diverse ecosystems. The reserve features a stunning mosaic of lagoons, floodplains, and forests that support the Big Five (lion, leopard, elephant, buffalo, and rhino) as well as endangered wild dogs and over 400 bird species.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427158/Moremi_Game_Reserve_gyotm7.jpg"
      },
      {
        name: "Makgadikgadi Pans",
        location: "Northeastern Botswana",
        description: "One of the world's largest salt flats, covering an area of 16,000 square kilometers. These vast, shimmering white pans are the remnants of an ancient super-lake that once covered much of northern Botswana. During the rainy season, the pans transform into crucial breeding grounds for flamingos, while the dry season reveals surreal, lunar-like landscapes.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427156/Makgadikgadi_Pans_vjclld.jpg"
      }
    ]
  },
  {
    id: 5,
    name: "Burkina Faso",
    slug: "burkina-faso",
    capital: "Ouagadougou",
    population: 20903273,
    area: 274200,
    currency: "West African CFA Franc (XOF)",
    flagUrl: "https://flagcdn.com/w320/bf.png",
    flagFact: "The flag features red and green horizontal stripes with a yellow star, symbolizing the revolution and mineral wealth.",
    flagDescription: "Two equal horizontal stripes: red over green, with a yellow five-pointed star in the center.",
    funFact: "The name 'Burkina Faso' means 'Land of Incorruptible People' in Moore and Dioula languages.",
    regions: ["western", "sahara"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290077/Ouagadougou_fartju.jpg",
    languages: [
      { name: "Moore", percentage: 52 },
      { name: "Dioula", percentage: 28 },
      { name: "French", percentage: 20 }
    ],
    geographicFacts: [
      "Landlocked country in West Africa",
      "Mostly flat with some hills in the southwest",
      "Part of the Sahel region",
      "Tropical climate with distinct wet and dry seasons"
    ],
    economicFacts: [
      "Major cotton producer",
      "Growing gold mining sector",
      "Important livestock industry",
      "Developing arts and crafts sector"
    ],
    touristAttractions: [
      {
        name: "Tiébélé Painted Houses",
        location: "Tiébélé, Southern Burkina Faso",
        description: "A remarkable village known for its elaborately decorated traditional Kassena houses. These earthen structures feature intricate geometric patterns and symbolic designs painted with natural pigments. The village serves as both a living museum of Kassena culture and a stunning example of indigenous African architecture that has been maintained for centuries.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427156/Ti%C3%A9b%C3%A9l%C3%A9_Painted_Houses_z11lou.jpg"
      },
      {
        name: "Sindou Peaks",
        location: "Sindou, Southwestern Burkina Faso",
        description: "A spectacular formation of eroded rock spires that create a dramatic landscape of narrow corridors and sharp pinnacles. These ancient sandstone formations, shaped by millions of years of wind and water erosion, hold cultural significance for local communities and offer visitors breathtaking panoramic views from their summits.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427156/Les_Pics_de_Sindou_kc4euj.jpg"
      },
      {
        name: "Bobo-Dioulasso Grand Mosque",
        location: "Bobo-Dioulasso",
        description: "An impressive example of Sudano-Sahelian architecture built in 1880 and considered one of West Africa's most beautiful mud-brick mosques. The structure features distinctive wooden support beams that protrude from its walls, conical towers, and an interior courtyard. As an active place of worship, it represents both architectural heritage and living Islamic tradition.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427159/Bobo-Dioulasso_Grand_Mosque_fhweaa.jpg"
      },
      {
        name: "Laongo Sculpture Park",
        location: "Laongo, near Ouagadougou",
        description: "An open-air museum where international artists have carved sculptures directly into granite outcrops, creating a unique fusion of art and nature. Established in 1989, this outdoor gallery spans several kilometers and features over 2,000 works that blend contemporary artistic expression with the natural landscape, making it one of Africa's most distinctive art installations.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427159/Laongo_Sculpture_Park_gzgadl.jpg"
      }
    ]
  },
  {
    id: 6,
    name: "Burundi",
    slug: "burundi",
    capital: "Gitega",
    population: 11890784,
    area: 27830,
    currency: "Burundian Franc (BIF)",
    flagUrl: "https://flagcdn.com/w320/bi.png",
    flagFact: "The Burundi flag features a white cross dividing red and green sections, with three stars representing unity.",
    flagDescription: "White diagonal cross dividing red and green sections, with three red six-pointed stars in the center.",
    funFact: "Burundi is one of the few countries where drum playing is a significant part of cultural heritage.",
    regions: ["eastern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290077/Gitega_eyuan7.jpg",
    languages: [
      { name: "Kirundi", percentage: 85 },
      { name: "French", percentage: 10 },
      { name: "Other", percentage: 5 }
    ],
    geographicFacts: [
      "Landlocked country with significant elevation",
      "Part of the African Great Lakes region",
      "Contains source of the Nile River",
      "Tropical highland climate"
    ],
    economicFacts: [
      "Major coffee and tea exporter",
      "Growing mining sector",
      "Developing tourism industry",
      "Important agricultural economy"
    ],
    touristAttractions: [
      {
        name: "Lake Tanganyika",
        location: "Western Burundi",
        description: "The world's second-deepest and second-oldest freshwater lake, forming Burundi's western border. This ancient lake, part of the African Great Lakes system, boasts crystal-clear waters, sandy beaches, and remarkable biodiversity with over 350 fish species, many of which are endemic. The lake offers opportunities for swimming, boating, and observing unique aquatic life.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427156/lake_tanganyika_fiqath.jpg"
      },
      {
        name: "Kibira National Park",
        location: "Northwestern Burundi",
        description: "A protected montane rainforest that forms part of the Congo-Nile Divide and covers approximately 40,000 hectares. This lush forest is home to diverse wildlife including primates such as chimpanzees and colobus monkeys, numerous bird species, and rare plants. The park's high-altitude terrain offers stunning views and hiking opportunities through pristine natural environments.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427159/Kibira_National_Park_uvk8cz.jpg"
      },
      {
        name: "Source of the Nile",
        location: "Rutovu",
        description: "The southernmost source of the Nile River, marked by a pyramid-shaped monument that identifies this historically significant site. This remote location in the Bururi Province is considered the beginning of the Nile's longest branch, the Ruvyironza River, which eventually flows into Lake Victoria and then forms the White Nile. The site offers visitors a chance to stand at the origin of the world's longest river.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427160/Source_of_the_Nile_c8r1ut.jpg"
      },
      {
        name: "Livingstone-Stanley Monument",
        location: "Mugere",
        description: "A historic site marking the location where explorers Dr. David Livingstone and Henry Morton Stanley met in 1871. This monument commemorates their famous encounter and subsequent joint exploration of Lake Tanganyika. Located about 12km south of Bujumbura, the site offers panoramic views of the lake and surrounding landscapes, along with insights into the European exploration of Central Africa.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427159/Livingstone-Stanley_Monument_kse9ch.jpg"
      }
    ]
  },
  {
    id: 7,
    name: "Cabo Verde",
    slug: "cabo-verde",
    capital: "Praia",
    population: 555987,
    area: 4033,
    currency: "Cape Verdean Escudo (CVE)",
    flagUrl: "https://flagcdn.com/w320/cv.png",
    flagFact: "The flag features a circle of ten stars representing the main islands of the archipelago.",
    flagDescription: "Blue background with a red horizontal stripe and a circle of ten yellow stars.",
    funFact: "Cabo Verde is an archipelago of 10 volcanic islands and was uninhabited until Portuguese discovery in 1456.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290065/Praia_je5wuw.jpg",
    languages: [
      { name: "Portuguese", percentage: 95 },
      { name: "Cape Verdean Creole", percentage: 100 }
    ],
    geographicFacts: [
      "Archipelago of 10 volcanic islands",
      "Located in the central Atlantic Ocean",
      "Varied terrain from sandy beaches to mountains",
      "Semi-arid climate"
    ],
    economicFacts: [
      "Service-based economy",
      "Growing tourism sector",
      "Important fishing industry",
      "Developing renewable energy sector"
    ],
    touristAttractions: [
      {
        name: "Pico do Fogo Volcano",
        location: "Fogo Island",
        description: "An active volcano rising 2,829 meters above sea level, making it the highest peak in Cabo Verde. The volcano last erupted in 2014-2015, dramatically altering the landscape. Visitors can hike to the summit for breathtaking views and explore the unique community of Chã das Caldeiras, where residents live within the volcano's caldera and produce distinctive wines from grapes grown in volcanic soil.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427155/pico_do_fogo_volcano_ohfkiq.jpg"
      },
      {
        name: "Santa Maria Beach",
        location: "Sal Island",
        description: "One of Cabo Verde's most famous beaches, featuring eight kilometers of pristine white sand and crystal-clear turquoise waters. This beach is renowned for its excellent conditions for water sports including windsurfing, kitesurfing, and diving. The nearby town of Santa Maria offers a vibrant atmosphere with colorful buildings, restaurants serving fresh seafood, and lively music venues.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427155/santa_maria_beach_y9osae.jpg"
      },
      {
        name: "Cidade Velha",
        location: "Santiago Island",
        description: "A UNESCO World Heritage site and the first European colonial settlement in the tropics, established in the 15th century. This historic town features well-preserved colonial architecture including the Royal Fortress of São Filipe, the ruins of the Cathedral of Nossa Senhora do Rosário (the oldest colonial church in the world), and Pillory Square, which stands as a reminder of the town's role in the Atlantic slave trade.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427155/Cidade_Velha_cnhm27.jpg"
      },
      {
        name: "Tarrafal Beach",
        location: "Santiago Island",
        description: "A stunning crescent-shaped bay with golden sands and calm, clear waters, surrounded by palm trees and mountains. This picturesque beach offers excellent swimming conditions in a sheltered cove and is known for its relaxed atmosphere. The nearby fishing village provides authentic cultural experiences and fresh seafood, making it a perfect destination for travelers seeking both natural beauty and local charm.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427155/tarrafal_beach_zihx86.jpg"
      }
    ]
  },
  {
    id: 8,
    name: "Cameroon",
    slug: "cameroon",
    capital: "Yaoundé",
    population: 26545863,
    area: 475442,
    currency: "Central African CFA Franc (XAF)",
    flagUrl: "https://flagcdn.com/w320/cm.png",
    flagFact: "The Cameroon flag's star represents unity, with green symbolizing forests, red representing unity, and yellow standing for sunshine.",
    flagDescription: "Three vertical stripes of green, red, and yellow with a gold star in the center of the red stripe.",
    funFact: "Cameroon is often called 'Africa in miniature' because it contains all major climates and geographical features of the continent.",
    regions: ["central", "coastal", "rainforest"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290076/Yaound%C3%A9_cacmie.jpg",
    languages: [
      { name: "French", percentage: 45 },
      { name: "English", percentage: 25 },
      { name: "Local languages", percentage: 30 }
    ],
    geographicFacts: [
      "Diverse landscape from tropical beaches to mountains",
      "Home to Mount Cameroon, active volcano",
      "Contains part of the Congo Basin rainforest",
      "Various climate zones from tropical to semi-arid"
    ],
    economicFacts: [
      "Major oil producer",
      "Significant agricultural exports",
      "Growing manufacturing sector",
      "Developing tourism industry"
    ],
    touristAttractions: [
      {
        name: "Mount Cameroon",
        location: "Southwest Region",
        description: "The highest peak in West Africa at 4,040 meters (13,255 feet) and one of Africa's most active volcanoes, with its last eruption in 2012. Also known locally as 'Mongo ma Ndemi' (Mountain of Greatness), this massive stratovolcano offers challenging hiking experiences through multiple ecological zones, from rainforest to alpine, with stunning views of the Gulf of Guinea and surrounding landscapes.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427155/Mount_Cameroon_wcbsib.jpg"
      },
      {
        name: "Waza National Park",
        location: "Far North Region",
        description: "Cameroon's most famous wildlife reserve, covering 1,700 square kilometers of Sudano-Sahelian savanna. This UNESCO Biosphere Reserve is home to numerous iconic African species including elephants, giraffes, lions, cheetahs, and various antelope species. The park's diverse habitats, from seasonal floodplains to acacia forests, support over 379 bird species, making it a premier destination for wildlife enthusiasts.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427154/waza_national_park_wvf3u4.jpg"
      },
      {
        name: "Kribi Beach",
        location: "South Region",
        description: "One of Central Africa's most beautiful coastal areas, featuring pristine golden sand beaches lined with coconut palms and clear blue waters of the Gulf of Guinea. This idyllic stretch of coastline is known for its fresh seafood, relaxed atmosphere, and the unique Lobé Waterfalls nearby—one of the few places in the world where a waterfall empties directly into the ocean.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427154/kribi_beach_qjwd2w.jpg"
      },
      {
        name: "Limbe Wildlife Centre",
        location: "Southwest Region",
        description: "A wildlife rescue and rehabilitation center established in 1993, providing sanctuary for orphaned and rescued primates and other animals. The center houses various species including gorillas, chimpanzees, drills, and other primates native to Cameroon's forests. Located at the foot of Mount Cameroon near the coast, it offers educational programs about conservation while providing care for animals rescued from the bushmeat trade and illegal pet trade.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427154/limbe_wildlife_centre_vt65yu.jpg"
      }
    ]
  },
  {
    id: 9,
    name: "Central African Republic",
    slug: "central-african-republic",
    capital: "Bangui",
    population: 4829767,
    area: 622984,
    currency: "Central African CFA Franc (XAF)",
    flagUrl: "https://flagcdn.com/w320/cf.png",
    flagFact: "The flag features a vertical red stripe representing the blood shed for independence, with a yellow star symbolizing unity.",
    flagDescription: "Four horizontal stripes of blue, white, green, and yellow, with a vertical red stripe and yellow star.",
    funFact: "The Central African Republic is home to the densest population of forest elephants in Africa.",
    regions: ["central", "rainforest"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290076/Bangui_uqdmql.jpg",
    languages: [
      { name: "Sango", percentage: 60 },
      { name: "French", percentage: 30 },
      { name: "Other", percentage: 10 }
    ],
    geographicFacts: [
      "Landlocked country in central Africa",
      "Mostly flat with scattered hills",
      "Contains part of the Congo Basin rainforest",
      "Tropical climate with wet and dry seasons"
    ],
    economicFacts: [
      "Diamond and gold mining",
      "Timber industry",
      "Agricultural sector",
      "Developing tourism potential"
    ],
    touristAttractions: [
      {
        name: "Dzanga-Sangha Reserve",
        location: "Southwest",
        description: "A pristine rainforest reserve that forms part of the Sangha Trinational UNESCO World Heritage site. This 4,500 square kilometer protected area is renowned for its exceptional biodiversity, including forest elephants, western lowland gorillas, and over 100 mammal species. The reserve's unique Dzanga Bai clearing offers visitors extraordinary opportunities to observe elephants and other wildlife gathering in natural mineral-rich clearings.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427155/dzanga-sangha_reserve_nwvkgz.jpg"
      },
      {
        name: "Boali Waterfalls",
        location: "Boali",
        description: "A magnificent series of waterfalls on the Mbali River, approximately 100 kilometers northwest of Bangui. These impressive falls drop about 50 meters across a 250-meter-wide cliff face, creating a spectacular curtain of water especially during the rainy season. The site includes viewing platforms and is surrounded by lush vegetation, making it one of the country's most picturesque natural attractions.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747438925/Boali_Waterfalls_kopjud.jpg"
      },
      {
        name: "Bangui Rapids",
        location: "Bangui",
        description: "A series of dramatic rapids on the Ubangi River that forms the natural border between the Central African Republic and the Democratic Republic of Congo. Located in the heart of the capital city, these powerful rapids create a striking contrast with the urban setting. The site offers panoramic views of both Bangui and Kinshasa across the river, particularly beautiful at sunset when the water reflects the changing colors of the sky.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427154/Bangui_Rapids_okfb6d.jpg"
      },
      {
        name: "Manovo-Gounda St. Floris National Park",
        location: "Northern Central African Republic",
        description: "A UNESCO World Heritage site (currently on the endangered list) spanning 17,400 square kilometers of diverse savanna ecosystems. This vast park protects crucial habitats for black rhinoceros, elephants, cheetahs, leopards, and various antelope species. The park encompasses three major river systems and features spectacular landscapes ranging from floodplains to wooded savannas, representing one of Central Africa's most important conservation areas despite facing significant challenges.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427154/Manovo-Gounda_ymil2k.jpg"
      }
    ]
  },
  {
    id: 10,
    name: "Chad",
    slug: "chad",
    capital: "N'Djamena",
    population: 16425864,
    area: 1284000,
    currency: "Central African CFA Franc (XAF)",
    flagUrl: "https://flagcdn.com/w320/td.png",
    flagFact: "The Chad flag is similar to Romania's flag but with a darker shade of blue, representing the sky and hope.",
    flagDescription: "Three vertical stripes of blue, yellow, and red.",
    funFact: "Chad contains significant portions of the Sahara Desert and Lake Chad, one of Africa's largest wetlands.",
    regions: ["central", "sahara"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290071/N_Djamena_o5oyup.jpg",
    languages: [
      { name: "Arabic", percentage: 40 },
      { name: "French", percentage: 35 },
      { name: "Sara", percentage: 25 }
    ],
    geographicFacts: [
      "Spans three major geographic regions",
      "Contains part of the Sahara Desert",
      "Home to Lake Chad",
      "Varied climate from desert to tropical"
    ],
    economicFacts: [
      "Oil production",
      "Cotton export",
      "Livestock farming",
      "Growing mining sector"
    ],
    touristAttractions: [
      {
        name: "Lakes of Ounianga",
        location: "Ennedi Region, Northern Chad",
        description: "A UNESCO World Heritage site consisting of 18 interconnected lakes in the heart of the Sahara Desert. These stunning blue and green lakes, surrounded by palm groves and dunes, form a unique hydrological system fed by ancient groundwater. The contrast between the azure waters and the surrounding desert creates one of Africa's most spectacular and unexpected landscapes.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427154/Lakes_of_Ounianga_pxnlct.jpg"
      },
      {
        name: "Ennedi Plateau",
        location: "Northeastern Chad",
        description: "A vast sandstone massif eroded over millennia into spectacular formations, arches, pillars, and canyons. This natural wonder is also home to thousands of ancient rock paintings and engravings dating back 7,000 years. The plateau's otherworldly landscapes have earned it the nickname 'Africa's Stonehenge' and provide insights into the region's wetter past when the Sahara was green.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427154/ennedi_plateau_pbbyap.jpg"
      },
      {
        name: "Zakouma National Park",
        location: "Southern Chad",
        description: "One of Africa's most remarkable conservation success stories, where elephant populations have rebounded after near-extinction. This 3,000 square kilometer park protects crucial Sudano-Sahelian ecosystems and hosts large herds of buffalo, giraffes, roan antelopes, and over 373 bird species. The park's seasonal floodplains and acacia savannas provide vital habitat for some of Central Africa's last remaining large mammal populations.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427154/zakouma_national_park_kregul.jpg"
      },
      {
        name: "Tibesti Mountains",
        location: "Northern Chad",
        description: "A massive volcanic range in the central Sahara featuring Chad's highest peak, Emi Koussi (3,445m), and covering over 100,000 square kilometers. This remote mountain range contains dramatic calderas, hot springs, and unique geological formations. Despite its harsh environment, the Tibesti has been home to the Toubou people for millennia and offers some of the most challenging and rewarding trekking in the Sahara.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427153/Tibesti_Mountains_vm3qmr.jpg"
      }
    ]
  },
  {
    id: 11,
    name: "Comoros",
    slug: "comoros",
    capital: "Moroni",
    population: 869601,
    area: 2235,
    currency: "Comorian Franc (KMF)",
    flagUrl: "https://flagcdn.com/w320/km.png",
    flagFact: "The Comoros flag features four stripes representing its four main islands, with a crescent moon symbolizing Islam.",
    flagDescription: "Four horizontal stripes (yellow, white, red, blue) with green triangle at hoist containing white crescent and stars.",
    funFact: "Comoros is the world's largest producer of ylang-ylang, used in perfumes.",
    regions: ["eastern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290070/Moroni_fw7l97.jpg",
    languages: [
      { name: "Comorian", percentage: 95 },
      { name: "Arabic", percentage: 30 },
      { name: "French", percentage: 25 }
    ],
    geographicFacts: [
      "Archipelago of four main islands",
      "Volcanic origin with active volcano",
      "Tropical climate",
      "Diverse marine ecosystem"
    ],
    economicFacts: [
      "Ylang-ylang export",
      "Vanilla production",
      "Fishing industry",
      "Growing tourism sector"
    ],
    touristAttractions: [
      {
        name: "Mount Karthala",
        location: "Grande Comore",
        description: "An active volcano that dominates the island of Grande Comore, rising to 2,361 meters (7,746 feet) as the country's highest point. This massive shield volcano features one of the world's largest calderas, measuring 3 km in diameter. Hiking to the summit offers breathtaking panoramic views of the island and the Indian Ocean, while the surrounding forests host unique flora and fauna adapted to the volcanic environment.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426721/Mount_Karthala_pbn7b5.jpg"
      },
      {
        name: "Chomoni Beach",
        location: "Grande Comore",
        description: "One of Comoros' most beautiful beaches, featuring pristine white sand and crystal-clear turquoise waters framed by volcanic rocks and lush vegetation. This secluded beach offers excellent swimming and snorkeling opportunities in calm waters teeming with colorful fish. The peaceful setting, with views of Mount Karthala in the background, makes it a perfect spot for relaxation away from crowds.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426721/chomoni_beach_akgxiv.jpg"
      },
      {
        name: "Mohéli Marine Park",
        location: "Mohéli",
        description: "Comoros' first protected marine area, covering 404 square kilometers of pristine marine ecosystems. Established in 2001, this park protects important nesting sites for green sea turtles and hosts diverse marine life including dolphins, whales, and vibrant coral reefs. The park is managed with local community involvement and offers visitors opportunities for snorkeling, diving, and witnessing turtle nesting on its protected beaches.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426721/Moh%C3%A9li_National_Park_ygaljg.jpg"
      },
      {
        name: "Old Friday Mosque (Ancienne Mosquée du Vendredi)",
        location: "Moroni, Grande Comore",
        description: "A historic mosque in the capital city dating back to 1427, showcasing distinctive Swahili-Arabic architecture with intricate coral stone carvings and wooden doors. This important religious and cultural landmark reflects the islands' rich Islamic heritage and the influence of Arab, Persian, and East African cultures. The mosque's elegant minaret and ornate interior demonstrate the skilled craftsmanship of medieval Comorian builders.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426721/Old_Friday_Mosque_Ancienne_Mosqu%C3%A9e_du_Vendredi_aqwbfs.jpg"
      }
    ]
  },
  {
    id: 12,
    name: "Democratic Republic of the Congo",
    slug: "democratic-republic-of-the-congo",
    capital: "Kinshasa",
    population: 89561403,
    area: 2344858,
    currency: "Congolese Franc (CDF)",
    flagUrl: "https://flagcdn.com/w320/cd.png",
    flagFact: "The DRC flag features a star representing unity and a bright future, with diagonal yellow stripe symbolizing mineral wealth.",
    flagDescription: "Sky blue field with red diagonal stripe bordered by yellow, and yellow star in upper left.",
    funFact: "The Congo River is the second most powerful river in the world after the Amazon.",
    regions: ["central", "rainforest"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747293934/Kinshasa_ozgcyc.png",
    languages: [
      { name: "French", percentage: 40 },
      { name: "Lingala", percentage: 25 },
      { name: "Swahili", percentage: 20 },
      { name: "Other", percentage: 15 }
    ],
    geographicFacts: [
      "Home to large portion of Congo Rainforest",
      "Contains active volcanoes",
      "Vast river system",
      "Diverse ecosystems"
    ],
    economicFacts: [
      "Rich in minerals",
      "Major copper producer",
      "Significant cobalt reserves",
      "Growing agricultural sector"
    ],
    touristAttractions: [
      {
        name: "Virunga National Park",
        location: "Eastern DRC",
        description: "Africa's oldest national park and a UNESCO World Heritage site, spanning 7,800 square kilometers of extraordinary biodiversity. Established in 1925, this remarkable park protects about one-third of the world's endangered mountain gorillas, along with chimpanzees, okapis, and forest elephants. The park's diverse landscapes include active volcanoes, savannas, forests, and the Rwenzori Mountains, offering visitors unparalleled wildlife viewing and trekking experiences.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747438877/Virunga_National_Park_ov20m0.jpg"
      },
      {
        name: "Kahuzi-Biega National Park",
        location: "South Kivu Province",
        description: "A UNESCO World Heritage site protecting one of the last populations of eastern lowland gorillas. This 6,000 square kilometer park spans both mountainous and lowland terrain, with dense primary tropical forests covering most of its area. Besides the critically endangered gorillas, the park harbors over 136 mammal species and 349 bird species, including forest elephants, chimpanzees, and the endemic Congo peafowl.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426723/kahuzi-biega_national_park_zoa92q.jpg"
      },
      {
        name: "Lola ya Bonobo Sanctuary",
        location: "Near Kinshasa",
        description: "The world's only sanctuary for orphaned bonobos, our closest living relatives sharing 98.7% of human DNA. Founded in 1994, this 30-hectare forested sanctuary rescues bonobos orphaned by the bushmeat trade and rehabilitates them for potential release back into the wild. Visitors can observe these fascinating great apes in a natural setting while learning about conservation efforts to protect this endangered species found only in the DRC.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426722/lola_ya_bonobo_sanctuary_xcuaom.jpg"
      },
      {
        name: "Nyiragongo Volcano",
        location: "Eastern DRC",
        description: "One of the world's most active volcanoes, featuring the largest permanent lava lake on Earth. Rising 3,470 meters (11,380 feet) above sea level, this stratovolcano in the Virunga Mountains offers intrepid hikers a challenging climb rewarded with the mesmerizing sight of bubbling lava within its crater. The overnight trek to the summit provides a rare opportunity to witness the hypnotic glow of molten lava against the night sky.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426735/nyiragongo_volcano_f0smcv.jpg"
      }
    ]
  },
  {
    id: 13,
    name: "Republic of the Congo",
    slug: "republic-of-the-congo",
    capital: "Brazzaville",
    population: 5518087,
    area: 342000,
    currency: "Central African CFA Franc (XAF)",
    flagUrl: "https://flagcdn.com/w320/cg.png",
    flagFact: "The Republic of Congo flag features diagonal stripes of green and red, symbolizing agriculture and the struggle for independence.",
    flagDescription: "Green and red diagonal stripes with yellow diagonal stripe in between.",
    funFact: "Brazzaville and Kinshasa are the world's closest capital cities, separated only by the Congo River.",
    regions: ["central", "rainforest", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290068/Brazzaville_tckciq.jpg",
    languages: [
      { name: "French", percentage: 60 },
      { name: "Lingala", percentage: 25 },
      { name: "Kituba", percentage: 15 }
    ],
    geographicFacts: [
      "Extensive rainforest coverage",
      "Atlantic coastline",
      "Congo River basin",
      "Tropical climate"
    ],
    economicFacts: [
      "Oil production",
      "Timber industry",
      "Mining sector",
      "Growing service sector"
    ],
    touristAttractions: [
      {
        name: "Nouabalé-Ndoki National Park",
        location: "Northern Congo",
        description: "A pristine wilderness area covering 4,200 square kilometers of untouched lowland rainforest. Part of the Sangha Trinational UNESCO World Heritage site, this park represents one of the most intact forest ecosystems in Central Africa. Visitors can observe forest elephants, western lowland gorillas, chimpanzees, and bongo antelopes from viewing platforms at Mbeli Bai and other clearings, offering rare glimpses of wildlife in their natural habitat.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426735/nouabal%C3%A9-ndoki_national_park_x6miia.jpg"
      },
      {
        name: "Loufoulakari Falls",
        location: "Pool Department",
        description: "A spectacular waterfall where the Loufoulakari River meets the Congo River, about 80 kilometers southwest of Brazzaville. These powerful falls cascade over multiple levels, creating an impressive display of rushing water surrounded by lush vegetation. The site holds historical significance as the place where Italian-born explorer Pierre Savorgnan de Brazza signed a treaty establishing French control over the region in the late 19th century.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426735/Loufoulakari_Falls_aay3xy.jpg"
      },
      {
        name: "Gorges of Diosso",
        location: "Near Pointe-Noire",
        description: "A dramatic red canyon formed by centuries of erosion, often called the 'Grand Canyon of Congo.' These striking geological formations feature deep ravines with vibrant red soil contrasting against the green vegetation. The gorges are not only a natural wonder but also hold cultural significance for local communities, with various legends associated with their formation and several sacred sites located within the canyon system.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426735/gorges_of_diosso_vzerzx.jpg"
      },
      {
        name: "Pointe-Noire Beach",
        location: "Pointe-Noire",
        description: "A stunning stretch of golden sand along the Atlantic coast in Congo's second-largest city. This urban beach offers a perfect blend of natural beauty and convenient amenities, with calm waters ideal for swimming and water sports. The beachfront is lined with restaurants and bars serving fresh seafood, while the bay's crescent shape provides beautiful views, especially at sunset when fishing boats return to shore.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426735/Pointe-Noire_Beach_d1q9mc.jpg"
      }
    ]
  },
  {
    id: 14,
    name: "Côte d'Ivoire",
    slug: "cote-divoire",
    capital: "Yamoussoukro",
    population: 26378274,
    area: 322463,
    currency: "West African CFA Franc (XOF)",
    flagUrl: "https://flagcdn.com/w320/ci.png",
    flagFact: "The flag's orange represents the savannah, white symbolizes peace, and green represents the forests.",
    flagDescription: "Three vertical stripes of orange, white, and green.",
    funFact: "Côte d'Ivoire is the world's largest exporter of cocoa beans.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290076/Yamoussoukro_od50x2.jpg",
    languages: [
      { name: "French", percentage: 70 },
      { name: "Dioula", percentage: 15 },
      { name: "Other local", percentage: 15 }
    ],
    geographicFacts: [
      "Coastal country in West Africa",
      "Terrain ranges from coastal plains to mountains",
      "Tropical climate",
      "Extensive river system"
    ],
    economicFacts: [
      "World's largest cocoa producer",
      "Major coffee exporter",
      "Growing manufacturing sector",
      "Important regional port"
    ],
    touristAttractions: [
      {
        name: "Basilica of Our Lady of Peace",
        location: "Yamoussoukro",
        description: "The largest church in the world according to the Guinness World Records, surpassing even St. Peter's Basilica in Vatican City in terms of height. Completed in 1989, this architectural marvel features 7,000 square meters of stained glass windows, marble imported from Italy, and a massive dome rising 158 meters. The basilica can accommodate 18,000 worshippers, with a striking colonnade inspired by St. Peter's but built at a larger scale.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426736/Basilica_of_Our_Lady_of_Peace_zm5ci0.jpg"
      },
      {
        name: "Tai National Park",
        location: "Southwestern Côte d'Ivoire",
        description: "A UNESCO World Heritage site protecting one of the last major remnants of primary tropical forest in West Africa. This 3,300 square kilometer park is home to 11 monkey species, forest elephants, pygmy hippopotamuses, and over 230 bird species. The park's biodiversity is exceptional, with many endemic species and rare plants. Visitors can explore the forest on guided walks, observing wildlife and learning about conservation efforts in this crucial ecosystem.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426736/tai_national_park_mnzau5.jpg"
      },
      {
        name: "Grand-Bassam",
        location: "Southeastern Côte d'Ivoire",
        description: "The former French colonial capital and a UNESCO World Heritage site featuring well-preserved colonial architecture. This historic town, established in the late 19th century, showcases a unique blend of colonial buildings, traditional Ivorian houses, and commercial structures. The old quarter includes the Governor's Palace, courthouse, and various period buildings now housing museums and cultural centers, offering visitors insight into the country's colonial past.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426736/Grand_Bassam_j22swe.jpg"
      },
      {
        name: "Mount Nimba Strict Nature Reserve",
        location: "Western Côte d'Ivoire",
        description: "A UNESCO World Heritage site shared with Guinea, featuring unique ecosystems across various altitudes. Rising to 1,752 meters, Mount Nimba hosts exceptional biodiversity with many endemic species, including viviparous toads that give birth to live young instead of laying eggs. The reserve's diverse habitats range from grasslands to dense forests, supporting chimpanzees, duikers, and over 200 bird species in a relatively small but ecologically significant area.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426736/Nimba_Range_mzs3ov.jpg"
      }
    ]
  },
  {
    id: 15,
    name: "Djibouti",
    slug: "djibouti",
    capital: "Djibouti City",
    population: 988000,
    area: 23200,
    currency: "Djiboutian Franc (DJF)",
    flagUrl: "https://flagcdn.com/w320/dj.png",
    flagFact: "The Djibouti flag features a star representing unity and independence, with colors symbolizing peace and nature.",
    flagDescription: "Two horizontal stripes (light blue and green) with white triangle containing red star at hoist.",
    funFact: "Lake Assal in Djibouti is the lowest point in Africa and third lowest point on Earth.",
    regions: ["eastern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290066/Djibouti_hqtrha.jpg",
    languages: [
      { name: "French", percentage: 50 },
      { name: "Arabic", percentage: 40 },
      { name: "Somali", percentage: 60 },
      { name: "Afar", percentage: 35 }
    ],
    geographicFacts: [
      "Strategic location on Red Sea",
      "Volcanic landscape",
      "Desert climate",
      "Unique geological features"
    ],
    economicFacts: [
      "Important shipping port",
      "Growing service sector",
      "Developing tourism",
      "Strategic military bases"
    ],
    touristAttractions: [
      {
        name: "Lake Assal",
        location: "Central Djibouti",
        description: "A crater lake situated at 155 meters below sea level, making it the lowest point in Africa and the third lowest point on Earth. This hypersaline lake is 10 times saltier than the ocean and surrounded by white salt deposits that create a surreal landscape. The striking contrast between the turquoise water and white salt banks makes it one of Djibouti's most photographed natural wonders.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426736/Lake_Assal_rumc2g.jpg"
      },
      {
        name: "Goda Mountains",
        location: "Central Djibouti",
        description: "The highest mountain range in Djibouti, reaching 1,750 meters above sea level. This verdant area contains the Day Forest National Park, a protected ecosystem that serves as a refuge for endangered species and represents one of the last remaining primary forests in the country. The mountains offer a stark contrast to Djibouti's otherwise arid landscape, with hiking trails providing panoramic views of the surrounding terrain.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426737/Goda_Mountains_de9kpr.jpg"
      },
      {
        name: "Lake Abbé",
        location: "Djibouti-Ethiopia Border",
        description: "A salt lake on the Ethiopia-Djibouti border known for its otherworldly limestone chimneys that rise up to 50 meters high. These dramatic formations, created by hot springs depositing minerals, vent steam and give the landscape an alien appearance that has been compared to the surface of the moon. The lake served as a filming location for the opening scene of the 1968 film 'Planet of the Apes' due to its unique topography.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426788/lake_abb%C3%A9_lfqrtp.jpg"
      },
      {
        name: "Moucha Island",
        location: "Gulf of Tadjoura",
        description: "A small coral island located in the Gulf of Tadjoura, just a short boat ride from Djibouti City. This pristine island offers excellent snorkeling and diving opportunities with vibrant coral reefs and diverse marine life including tropical fish, rays, and occasionally whale sharks. With its white sandy beaches and crystal-clear waters, Moucha Island provides a perfect tropical getaway from the heat and bustle of the mainland.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427151/moucha_island_txdwvk.jpg"
      }
    ]
  },
  {
    id: 16,
    name: "Egypt",
    slug: "egypt",
    capital: "Cairo",
    population: 104258327,
    area: 1001450,
    currency: "Egyptian Pound (EGP)",
    flagUrl: "https://flagcdn.com/w320/eg.png",
    flagFact: "The Egyptian flag features the Eagle of Saladin, a symbol of Arab nationalism and strength.",
    flagDescription: "Three horizontal stripes (red, white, black) with golden Eagle of Saladin in center white stripe.",
    funFact: "Egypt is home to the only remaining wonder of the ancient world, the Great Pyramid of Giza.",
    regions: ["northern", "sahara"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747294214/Cairo_wxkuas.jpg",
    languages: [
      { name: "Arabic", percentage: 99 },
      { name: "Other", percentage: 1 }
    ],
    geographicFacts: [
      "Home to the Nile River",
      "Mostly desert terrain",
      "Mediterranean coastline",
      "Ancient archaeological sites"
    ],
    economicFacts: [
      "Major tourism industry",
      "Suez Canal revenue",
      "Agricultural exports",
      "Growing tech sector"
    ],
    touristAttractions: [
      {
        name: "Pyramids of Giza",
        location: "Giza",
        description: "One of the Seven Wonders of the Ancient World and the only one still standing today. This iconic complex includes the Great Pyramid of Khufu, the Pyramid of Khafre, the Pyramid of Menkaure, and the Great Sphinx. Built over 4,500 years ago, these massive structures continue to astound visitors with their precise engineering and astronomical alignment, representing the pinnacle of ancient Egyptian civilization's architectural achievements.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426761/Great_Pyramid_of_Giza_jyunf7.jpg"
      },
      {
        name: "Valley of the Kings",
        location: "Luxor",
        description: "A vast necropolis where, for nearly 500 years (16th to 11th century BCE), tombs were constructed for the Pharaohs and powerful nobles of the New Kingdom. This UNESCO World Heritage site contains at least 63 tombs and chambers, including the famous tomb of Tutankhamun. The elaborately decorated burial chambers provide extraordinary insights into ancient Egyptian beliefs about the afterlife and showcase remarkable artistic achievements.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427151/valley_of_the_kings_ashugb.jpg"
      },
      {
        name: "Abu Simbel Temples",
        location: "Aswan Governorate",
        description: "Two massive rock temples carved out of the mountainside during the reign of Pharaoh Ramesses II in the 13th century BCE. The temples were relocated in the 1960s to avoid being submerged during the creation of Lake Nasser. The Great Temple is dedicated to Ramesses II and features four colossal statues of the pharaoh at its entrance, while the smaller temple honors his wife, Queen Nefertari. Twice a year, the sun aligns perfectly to illuminate the inner sanctuary.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427151/abu_simbel_temples_d7u2uh.jpg"
      },
      {
        name: "Khan el-Khalili",
        location: "Cairo",
        description: "A historic bazaar and souk in the heart of Islamic Cairo, dating back to the 14th century. This labyrinthine market is filled with narrow alleys, ornate architecture, and hundreds of shops selling everything from spices and perfumes to gold, textiles, and traditional crafts. The bazaar is also home to several historic coffeehouses, including the famous El-Fishawi café, which has been in continuous operation since 1773 and was a favorite haunt of Nobel laureate Naguib Mahfouz.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427151/Khan_el-Khalili_pr0itd.jpg"
      }
    ]
  },
  {
    id: 17,
    name: "Equatorial Guinea",
    slug: "equatorial-guinea",
    capital: "Malabo",
    population: 1402985,
    area: 28051,
    currency: "Central African CFA Franc (XAF)",
    flagUrl: "https://flagcdn.com/w320/gq.png",
    flagFact: "The flag features a tree symbolizing independence and growth, with stripes representing the sea and land.",
    flagDescription: "Three horizontal stripes (green, white, red) with blue triangle at hoist containing national coat of arms.",
    funFact: "Equatorial Guinea is the only African country where Spanish is an official language.",
    regions: ["central", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290069/Malabo_mhvjfq.png",
    languages: [
      { name: "Spanish", percentage: 67 },
      { name: "French", percentage: 32 },
      { name: "Other", percentage: 1 }
    ],
    geographicFacts: [
      "Consists of mainland and islands",
      "Tropical climate",
      "Volcanic islands",
      "Dense rainforest"
    ],
    economicFacts: [
      "Oil production",
      "Natural gas exports",
      "Developing tourism",
      "Growing infrastructure"
    ],
    touristAttractions: [
      {
        name: "Monte Alén National Park",
        location: "Continental Region",
        description: "A vast protected area covering over 2,000 square kilometers of pristine rainforest in the continental region of Equatorial Guinea. This biodiversity hotspot is home to forest elephants, gorillas, chimpanzees, and numerous other primate species, along with over 300 bird species. The park features a network of hiking trails that allow visitors to explore its dense forests, waterfalls, and clearings while experiencing one of Central Africa's most intact ecosystems.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427151/monte_al%C3%A9n_national_park_jm4qnj.jpg"
      },
      {
        name: "Malabo Cathedral",
        location: "Malabo",
        description: "A striking neo-gothic cathedral built during the Spanish colonial period in 1916. Located in the capital city on Bioko Island, this architectural landmark features twin spires, ornate stained glass windows, and a distinctive red and white façade. The cathedral serves as both an important religious center for the predominantly Catholic population and a reminder of the country's colonial history, standing as one of the most recognizable buildings in Malabo.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427151/Malabo_Cathedral_ayfgto.jpg"
      },
      {
        name: "Arena Blanca Beach",
        location: "Bioko Island",
        description: "A pristine white sand beach located on the southern coast of Bioko Island, surrounded by lush tropical vegetation and volcanic mountains. This secluded beach is known for its crystal-clear waters and is an important nesting site for several endangered sea turtle species. Visitors can enjoy swimming in protected coves, hiking in the nearby rainforest, and occasionally spotting nesting turtles during the breeding season from November to February.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427152/Arena_Blanca_Beach_xewrfz.jpg"
      },
      {
        name: "Bioko Island",
        location: "Gulf of Guinea",
        description: "A volcanic island in the Gulf of Guinea that serves as home to the capital city of Malabo. The island features dramatic landscapes including volcanic peaks rising to over 3,000 meters, pristine beaches, and dense rainforests. Bioko's unique isolation has created distinct ecosystems with numerous endemic species, particularly primates. The island's southern coast forms part of the Gran Caldera Scientific Reserve, which protects critical habitat for endangered primates and nesting sea turtles.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427152/Bioko_Island_gnsrvy.jpg"
      }
    ]
  },
  {
    id: 18,
    name: "Eritrea",
    slug: "eritrea",
    capital: "Asmara",
    population: 3546421,
    area: 117600,
    currency: "Eritrean Nakfa (ERN)",
    flagUrl: "https://flagcdn.com/w320/er.png",
    flagFact: "The flag's red triangle represents the blood of freedom fighters, with green representing agriculture and blue for the sea.",
    flagDescription: "Red triangle at hoist with green and blue triangles, featuring golden olive wreath.",
    funFact: "Asmara is known as 'Africa's Miami' due to its Art Deco architecture.",
    regions: ["eastern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290067/Asmara_k2zvk2.jpg",
    languages: [
      { name: "Tigrinya", percentage: 55 },
      { name: "Arabic", percentage: 30 },
      { name: "Other", percentage: 15 }
    ],
    geographicFacts: [
      "Red Sea coastline",
      "Highland plateau",
      "Coastal desert",
      "Varied climate zones"
    ],
    economicFacts: [
      "Mining sector",
      "Fishing industry",
      "Agricultural exports",
      "Growing tourism potential"
    ],
    touristAttractions: [
      {
        name: "Asmara Art Deco Architecture",
        location: "Asmara",
        description: "A UNESCO World Heritage site showcasing one of the world's most concentrated and intact collections of modernist architecture. Built during the Italian colonial period in the 1930s, Asmara's cityscape features futurist, rationalist, and Art Deco buildings including the Fiat Tagliero building (shaped like an airplane), Cinema Impero, and the former Opera House. This 'modernist city of Africa' represents a unique blend of European architectural ideas adapted to African highland conditions.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427152/Asmara_Art_Deco_Architecture_vx4qgj.jpg"
      },
      {
        name: "Dahlak Archipelago",
        location: "Red Sea",
        description: "A group of over 200 islands and islets in the Red Sea, known for their pristine beaches, vibrant coral reefs, and rich marine biodiversity. These largely uninhabited islands feature historical sites including ancient cisterns, ruins, and cemeteries with Islamic tombstones dating back to the 8th century. The archipelago's isolated location has preserved both its natural environment and cultural heritage, making it a paradise for diving, snorkeling, and archaeological exploration.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427152/Dahlak_Archipelago_recxbc.jpg"
      },
      {
        name: "Massawa Old Town",
        location: "Massawa",
        description: "A historic port city on the Red Sea coast with a rich architectural heritage reflecting Ottoman, Egyptian, and Italian influences. The old town features narrow winding streets lined with coral block buildings, Ottoman-era structures, and colonial Italian architecture. Notable landmarks include the 16th-century Sheikh Hanafi Mosque, the former Imperial Palace, and the old port facilities. Despite damage from the independence war, Massawa retains its atmospheric charm and historical significance.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427152/massawa_old_town_ybomzh.jpg"
      },
      {
        name: "Martyrs National Park",
        location: "Near Asmara",
        description: "A memorial park dedicated to those who died during Eritrea's 30-year struggle for independence. The park features a striking monument with an eternal flame, sculptures commemorating the freedom fighters, and landscaped grounds that serve as a place for reflection and remembrance. The site holds profound significance for Eritreans as a symbol of national identity and sacrifice, hosting annual ceremonies on Martyrs' Day (June 20) to honor the estimated 65,000 fighters who lost their lives during the liberation struggle.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427153/Martyrs_National_Park_w36qna.jpg"
      }
    ]
  },
  {
    id: 19,
    name: "Eswatini",
    slug: "eswatini",
    capital: "Mbabane",
    population: 1160164,
    area: 17364,
    currency: "Swazi Lilangeni (SZL)",
    flagUrl: "https://flagcdn.com/w320/sz.png",
    flagFact: "The flag features a Nguni shield and spears representing protection of the nation.",
    flagDescription: "Horizontal stripes of blue, yellow, and red with black and white Nguni shield and spears.",
    funFact: "Eswatini is one of the world's last absolute monarchies.",
    regions: ["southern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290070/Mbabane_administrative_ntnmhh.jpg",
    languages: [
      { name: "Swati", percentage: 90 },
      { name: "English", percentage: 10 }
    ],
    geographicFacts: [
      "Landlocked country",
      "Varied landscape with mountains",
      "Savanna grasslands",
      "Sub-tropical climate"
    ],
    economicFacts: [
      "Sugar exports",
      "Mining industry",
      "Tourism sector",
      "Textile manufacturing"
    ],
    touristAttractions: [
      {
        name: "Mlilwane Wildlife Sanctuary",
        location: "Ezulwini Valley",
        description: "The oldest protected area in Eswatini, established in 1961 as the kingdom's first conservation area. This accessible sanctuary offers a relaxed atmosphere where visitors can walk, cycle, or horseback ride among free-roaming wildlife including zebras, antelopes, warthogs, and numerous bird species. The sanctuary's diverse habitats range from grasslands to forests, with the dramatic backdrop of the Nyonyane Mountain. Historic sites within the reserve include traditional beehive huts and the original farmhouse.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427153/Mlilwane_Wildlife_Sanctuary_uqvnsx.jpg"
      },
      {
        name: "Mantenga Cultural Village",
        location: "Ezulwini Valley",
        description: "A living museum showcasing traditional Swazi lifestyle, customs, and crafts. The village features 16 traditional beehive huts arranged according to Swazi custom, with demonstrations of traditional activities including grinding grain, brewing beer, and making handicrafts. Visitors can experience vibrant Sibhaca dance performances that showcase the kingdom's rich cultural heritage. Adjacent to the village are the Mantenga Falls, a 95-meter waterfall cascading down dramatic rock formations.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427153/Mantenga_Nature_Reserve_Cultural_Village_meczls.jpg"
      },
      {
        name: "Malolotja Nature Reserve",
        location: "Northwestern Eswatini",
        description: "A pristine wilderness area covering 18,000 hectares in the northwestern highlands of Eswatini. The reserve protects diverse montane grasslands, forests, and wetlands, with over 200 bird species and rare plants including many endemic wildflowers. Malolotja features Eswatini's highest waterfall (95m), extensive hiking trails, and Africa's longest canopy tour with 10 ziplines traversing the forest canopy. The reserve's dramatic landscapes include deep valleys, towering peaks, and the stunning Komati River gorge.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427153/Malolotja_Nature_ReservE_n4rczb.jpg"
      },
      {
        name: "Hlane Royal National Park",
        location: "Eastern Eswatini",
        description: "Eswatini's largest protected area and home to the kingdom's largest herds of game. This royal park, whose name means 'wilderness,' is managed by the king and features classic African savanna with umbrella thorn trees and wildlife including lions, elephants, rhinos, and numerous antelope species. Visitors can enjoy self-drive safaris, guided game drives, rhino walks, and bird watching at the Ndlovu waterhole, which attracts diverse wildlife throughout the day.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427153/hlane_royal_national_park_xk1n2r.jpg"
      }
    ]
  },
  {
    id: 20,
    name: "Ethiopia",
    slug: "ethiopia",
    capital: "Addis Ababa",
    population: 114963588,
    area: 1104300,
    currency: "Ethiopian Birr (ETB)",
    flagUrl: "https://flagcdn.com/w320/et.png",
    flagFact: "The Ethiopian flag's colors represent unity (red), peace and love (yellow), and hope and prosperity (green).",
    flagDescription: "Three horizontal stripes of green, yellow, and red with national emblem in center.",
    funFact: "Ethiopia is the only African country that was never colonized by European powers.",
    regions: ["eastern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290066/Addis_Ababa_t7ytwa.jpg",
    languages: [
      { name: "Amharic", percentage: 45 },
      { name: "Oromo", percentage: 35 },
      { name: "Other", percentage: 20 }
    ],
    geographicFacts: [
      "Home to the Danakil Depression",
      "Source of Blue Nile",
      "Great Rift Valley",
      "Varied climate zones"
    ],
    economicFacts: [
      "Coffee exports",
      "Agricultural production",
      "Growing manufacturing",
      "Developing tourism"
    ],
    touristAttractions: [
      {
        name: "Lalibela Rock-Hewn Churches",
        location: "Lalibela",
        description: "A UNESCO World Heritage site featuring 11 medieval monolithic churches carved directly into the rock during the 12th-13th centuries. These remarkable structures were commissioned by King Lalibela to create a 'New Jerusalem' after Muslim conquests halted Christian pilgrimages to the Holy Land. Each church was chiseled from a single block of stone, with intricate details including windows, columns, and symbolic religious imagery. The site remains an active place of worship and pilgrimage for Ethiopian Orthodox Christians.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426577/Lalibela_Rock-Hewn_Churches_io5iyu.jpg"
      },
      {
        name: "Simien Mountains National Park",
        location: "Northern Ethiopia",
        description: "A UNESCO World Heritage site featuring spectacular landscapes with jagged mountain peaks, deep valleys, and sheer cliffs dropping 1,500 meters. This dramatic highland region is home to rare wildlife including the endangered Walia ibex (found nowhere else on Earth), Ethiopian wolves, and gelada baboons with their distinctive red chest patches. The park offers some of Africa's most stunning trekking routes, with breathtaking viewpoints like Imet Gogo providing panoramic vistas across this ancient volcanic landscape.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426577/Simien_Mountains_National_Park_lfgh7g.jpg"
      },
      {
        name: "Danakil Depression",
        location: "Afar Region",
        description: "One of Earth's most extreme environments, lying 125 meters below sea level with temperatures regularly exceeding 50°C (122°F). This geological wonder features otherworldly landscapes including the technicolor sulfur springs of Dallol, vast salt flats, active volcanoes, and bubbling lava lakes. The area is home to the Afar people who continue the centuries-old tradition of salt mining and camel caravans. Despite its harsh conditions, the Danakil offers visitors a glimpse into what Earth's primordial landscape might have looked like.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426577/Danakil_Depression_ffsbzv.jpg"
      },
      {
        name: "Gondar Castles",
        location: "Gondar",
        description: "A UNESCO World Heritage site known as the 'Camelot of Africa,' featuring a royal enclosure with six castles and various buildings constructed in the 17th and 18th centuries. These medieval stone fortresses blend Portuguese, Indian, and local architectural styles, reflecting Ethiopia's historical connections with different civilizations. The most impressive structure is Fasilides Castle, built by Emperor Fasilides in 1640, which stands as a testament to the power and sophistication of the Ethiopian Empire during its golden age.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426577/Gondar_Castles_vw0jtu.jpg"
      }
    ]
  },
  {
    id: 21,
    name: "Gabon",
    slug: "gabon",
    capital: "Libreville",
    population: 2225734,
    area: 267667,
    currency: "Central African CFA Franc (XAF)",
    flagUrl: "https://flagcdn.com/w320/ga.png",
    flagFact: "The Gabonese flag's green represents forests, yellow represents the equator, and blue represents the sea.",
    flagDescription: "Three horizontal stripes of green, yellow, and blue.",
    funFact: "Gabon has one of the highest percentages of protected land in the world.",
    regions: ["central", "coastal", "rainforest"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290069/Libreville_dkivlq.jpg",
    languages: [
      { name: "French", percentage: 80 },
      { name: "Fang", percentage: 15 },
      { name: "Other", percentage: 5 }
    ],
    geographicFacts: [
      "Extensive rainforest coverage",
      "Atlantic coastline",
      "Equatorial climate",
      "Diverse ecosystems"
    ],
    economicFacts: [
      "Oil production",
      "Timber exports",
      "Mining sector",
      "Ecotourism"
    ],
    touristAttractions: [
      {
        name: "Lopé National Park",
        location: "Central Gabon",
        description: "A UNESCO World Heritage site that uniquely combines dense rainforest with savanna landscapes, creating a remarkable biodiversity hotspot. The park is home to over 400 bird species and numerous mammals including forest elephants, gorillas, chimpanzees, and mandrills. Lopé also features prehistoric rock engravings dating back thousands of years, providing evidence of human habitation since the Paleolithic era. The park's Ogooué River valley offers stunning vistas where visitors can observe wildlife against the backdrop of ancient volcanic formations.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426577/lop%C3%A9_national_park_eqzypx.jpg"
      },
      {
        name: "Pointe Denis Beach",
        location: "Near Libreville",
        description: "A pristine peninsula located just a short boat ride from Libreville across the Gabon Estuary. This idyllic stretch of white sand beach extends for kilometers along the Atlantic coast, offering visitors a tranquil escape from the capital city. The beach is known for its clear waters ideal for swimming, water sports, and fishing. The area features several resorts and restaurants while maintaining its natural beauty with palm trees and mangroves. Visitors might spot nesting sea turtles during the breeding season.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426577/Pointe_Denis_Beach_mulox5.jpg"
      },
      {
        name: "Ivindo National Park",
        location: "Eastern Gabon",
        description: "A vast protected area encompassing one of Central Africa's most pristine rainforest ecosystems, recently designated as a UNESCO World Heritage site. The park is famous for its spectacular waterfalls, including the majestic Kongou Falls often called 'Africa's most beautiful waterfall.' Ivindo's network of rivers, swamps, and forests supports incredible biodiversity, including forest elephants, gorillas, and the rare picathartes bird. The park's Langoué Bai is a natural forest clearing where visitors can observe wildlife gathering to feed on mineral-rich soil.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426578/ivindo_national_park_jj0c3u.jpg"
      },
      {
        name: "Batéké Plateau National Park",
        location: "Southeastern Gabon",
        description: "A unique protected area characterized by rolling hills of golden savanna interspersed with gallery forests and deep river valleys. This diverse landscape supports a variety of wildlife including lions (recently reintroduced after decades of local extinction), elephants, buffalo, and numerous bird species. The park is culturally significant as the ancestral home of the Batéké people, who have traditional connections to this land. The contrast between savanna and forest creates spectacular scenery, particularly at sunrise and sunset when the grasslands glow in golden light.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426578/Bat%C3%A9k%C3%A9_Plateau_National_Park_fqpbdl.jpg"
      }
    ]
  },
  {
    id: 22,
    name: "Gambia",
    slug: "gambia",
    capital: "Banjul",
    population: 2416668,
    area: 11295,
    currency: "Gambian Dalasi (GMD)",
    flagUrl: "https://flagcdn.com/w320/gm.png",
    flagFact: "The Gambian flag's red represents the sun, blue represents the Gambia River, and green represents agriculture.",
    flagDescription: "Three horizontal stripes of red, blue bordered by white stripes, and green.",
    funFact: "The Gambia is the smallest country in mainland Africa.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290067/Banjul_imb182.jpg",
    languages: [
      { name: "English", percentage: 40 },
      { name: "Mandinka", percentage: 35 },
      { name: "Other local", percentage: 25 }
    ],
    geographicFacts: [
      "Built around Gambia River",
      "Surrounded by Senegal",
      "Atlantic coastline",
      "Tropical climate"
    ],
    economicFacts: [
      "Tourism industry",
      "Groundnut exports",
      "Fishing sector",
      "Growing service sector"
    ],
    touristAttractions: [
      {
        name: "Kunta Kinteh Island",
        location: "Gambia River",
        description: "A UNESCO World Heritage site formerly known as James Island, renamed to honor the character from Alex Haley's novel 'Roots.' This small island in the Gambia River was an important historical site in the Atlantic slave trade, with ruins of a British colonial fort dating back to the 17th century. The island and related sites along the river collectively document the different facets and periods of the African-European encounter, from the 15th century to independence, including the slave trade's painful legacy.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426581/Kunta_Kinteh_Island_rwodsh.jpg"
      },
      {
        name: "Abuko Nature Reserve",
        location: "Western Division",
        description: "The Gambia's first protected area and one of the most accessible wildlife reserves in Africa, located just 25 kilometers from Banjul. Despite its small size (134 hectares), this dense tropical forest supports remarkable biodiversity, including over 270 bird species, various primates like vervet monkeys and Western red colobus, crocodiles, and numerous reptiles. The reserve features well-maintained trails, a visitor center, an animal orphanage, and several observation hides overlooking pools that attract diverse wildlife.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426583/Abuko_Nature_Reserve_qmbioc.jpg"
      },
      {
        name: "Sanyang Beach",
        location: "South Coast",
        description: "One of The Gambia's most beautiful beaches, also known as Paradise Beach, featuring golden sands stretching for kilometers along the Atlantic coast. This pristine beach is less developed than other tourist areas, offering a more authentic experience with local fishing activities and fresh seafood served at beachside restaurants. A distinctive feature is the lagoon that runs parallel to the ocean, creating a unique landscape. The beach is known for its relaxed atmosphere, stunning sunsets, and the iconic 'Paradise Beach' sign popular with photographers.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426583/Sanyang_Beach_n0roso.jpg"
      },
      {
        name: "Bijilo Forest Park",
        location: "Near Kololi",
        description: "A small protected woodland area covering 51 hectares along the Atlantic coastline, commonly known as 'Monkey Park' due to its resident primate population. Visitors can observe western red colobus and vervet monkeys in their natural habitat while walking along well-maintained nature trails through coastal forest and dune vegetation. The park is also home to over 100 bird species and various reptiles. Located close to the main tourist area, it offers an accessible wildlife experience and the opportunity to escape the beach resorts for a few hours of nature exploration.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426584/bijilo_forest_park_ro13rz.jpg"
      }
    ]
  },
  {
    id: 23,
    name: "Ghana",
    slug: "ghana",
    capital: "Accra",
    population: 31072940,
    area: 238535,
    currency: "Ghanaian Cedi (GHS)",
    flagUrl: "https://flagcdn.com/w320/gh.png",
    flagFact: "The Ghanaian flag was the first African flag to feature the Pan-African colors, with a black star representing African freedom.",
    flagDescription: "Three horizontal stripes of red, yellow, and green with black star in center.",
    funFact: "Ghana was the first sub-Saharan African country to gain independence from colonial rule.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290066/Accra_onphzz.jpg",
    languages: [
      { name: "English", percentage: 67 },
      { name: "Akan", percentage: 40 },
      { name: "Other", percentage: 30 }
    ],
    geographicFacts: [
      "Gulf of Guinea coastline",
      "Lake Volta (largest artificial lake)",
      "Tropical rainforests",
      "Savanna plains"
    ],
    economicFacts: [
      "Gold mining",
      "Cocoa production",
      "Oil exports",
      "Growing tech sector"
    ],
    touristAttractions: [
      {
        name: "Cape Coast Castle",
        location: "Cape Coast",
        description: "A UNESCO World Heritage site that served as one of the most important stops in the transatlantic slave trade. Built by the Swedes in 1653 and later taken over by the British, this massive white fortress contains dungeons where enslaved Africans were held before being shipped across the Atlantic. The castle's 'Door of No Return' symbolizes the final exit point for captives leaving their homeland forever. Today, the site houses a powerful museum documenting the brutal history of the slave trade and its impact on Ghana, Africa, and the African diaspora.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426584/cape_coast_castle_ytysdy.jpg"
      },
      {
        name: "Kakum National Park",
        location: "Central Region",
        description: "A dense tropical rainforest preserving rare endangered species and featuring Africa's first canopy walkway. This 350-meter-long series of suspended bridges hangs 30 meters above the forest floor, offering visitors a unique perspective of the rainforest ecosystem and possible glimpses of forest elephants, diana monkeys, and hundreds of bird and butterfly species. The park protects one of Ghana's remaining primary forests and serves as an important bird conservation area with over 300 species. Educational exhibits explain the medicinal uses of various forest plants and traditional conservation practices.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426584/kakum_national_park_hxfncx.jpg"
      },
      {
        name: "Mole National Park",
        location: "Northern Region",
        description: "Ghana's largest wildlife sanctuary covering 4,840 square kilometers of savanna and riparian ecosystems. The park is home to over 93 mammal species, including elephants, buffalo, warthogs, various antelope species, and occasionally lions. Visitors can experience walking safaris with armed rangers, offering a rare opportunity to approach wildlife on foot, or take driving safaris to more remote areas. The park's Mole Motel sits on an escarpment overlooking a waterhole frequently visited by elephants, allowing guests to observe wildlife from their accommodations.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426584/Mole_National_Park_gkf3jy.jpg"
      },
      {
        name: "Elmina Castle",
        location: "Elmina",
        description: "The oldest European structure in sub-Saharan Africa, built by the Portuguese in 1482 as a trading post and later used in the transatlantic slave trade. This UNESCO World Heritage site, with its imposing white walls contrasting against the blue Atlantic Ocean, contains dungeons, a church, and administrative quarters that tell the complex story of European-African interactions over five centuries. The castle passed through Portuguese, Dutch, and British hands, each leaving their mark on its architecture. Like Cape Coast Castle, it serves as an important memorial to those who suffered during the slave trade era.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426585/elmina_castle_purzdq.jpg"
      }
    ]
  },
  {
    id: 24,
    name: "Guinea",
    slug: "guinea",
    capital: "Conakry",
    population: 13132795,
    area: 245857,
    currency: "Guinean Franc (GNF)",
    flagUrl: "https://flagcdn.com/w320/gn.png",
    flagFact: "The Guinean flag's colors represent struggle for independence (red), sun and riches (yellow), and vegetation (green).",
    flagDescription: "Three vertical stripes of red, yellow, and green.",
    funFact: "Guinea is known as the 'water tower of West Africa' due to its many rivers.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290065/Conakry_fdarec.jpg",
    languages: [
      { name: "French", percentage: 40 },
      { name: "Pular", percentage: 30 },
      { name: "Malinke", percentage: 30 }
    ],
    geographicFacts: [
      "Source of major West African rivers",
      "Diverse landscape",
      "Atlantic coastline",
      "Mount Nimba region"
    ],
    economicFacts: [
      "Bauxite mining",
      "Agricultural exports",
      "Fishing industry",
      "Hydroelectric potential"
    ],
    touristAttractions: [
      {
        name: "Mount Nimba Strict Nature Reserve",
        location: "Nzérékoré Region",
        description: "A UNESCO World Heritage site straddling the borders of Guinea, Côte d'Ivoire, and Liberia, featuring unique ecosystems with exceptional biodiversity. Rising to 1,752 meters, Mount Nimba hosts over 2,000 plant species and rare animals including viviparous toads that give birth to live young instead of laying eggs. The reserve's diverse habitats range from grasslands to dense forests, creating a natural laboratory for evolutionary studies. Despite its protected status, the area faces threats from mining interests due to its rich iron ore deposits.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426585/Nimba_Range_vk4llo.jpg"
      },
      {
        name: "Îles de Los",
        location: "Off Conakry",
        description: "A picturesque archipelago of three main islands located just off the coast of Conakry in the Atlantic Ocean. These volcanic islands feature white sandy beaches, crystal-clear waters, and lush vegetation, providing a tranquil escape from the bustling capital. Kassa, the largest and most developed island, offers beachside restaurants and accommodations, while Roume and Tamara islands provide more secluded experiences. The islands have historical significance as former slave trading posts and were mentioned in the novel 'Treasure Island' by Robert Louis Stevenson.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426586/%C3%8Eles_de_Los_ohhcgb.jpg"
      },
      {
        name: "Fouta Djallon Highlands",
        location: "Central Guinea",
        description: "A breathtaking highland region known as the 'Water Tower of West Africa' due to its numerous rivers and waterfalls that feed major West African river systems. This mountainous plateau features dramatic landscapes with deep valleys, towering cliffs, and cascading waterfalls including the famous Chutes de Kinkon and Kambadaga Falls. The region is home to the Fulani people who maintain traditional pastoral lifestyles. Visitors can explore cave systems, trek through diverse ecosystems, and experience the cool climate that contrasts with Guinea's coastal lowlands.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426590/Fouta_Djallon_Highlands_zolxjs.jpg"
      },
      {
        name: "Conakry Grand Mosque",
        location: "Conakry",
        description: "One of the largest mosques in West Africa, built with funding from Saudi Arabia and completed in 1982. This impressive religious edifice features a distinctive architectural style with four tall minarets and a massive central dome. The mosque can accommodate up to 10,000 worshippers in its main prayer hall, which is adorned with intricate Islamic calligraphy and decorative elements. Located in the heart of Guinea's capital city, the Grand Mosque serves as both an important religious center and a significant landmark visible from many parts of Conakry.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426591/Conakry_Grand_Mosque_qahhul.jpg"
      }
    ]
  },
  {
    id: 25,
    name: "Guinea-Bissau",
    slug: "guinea-bissau",
    capital: "Bissau",
    population: 1968001,
    area: 36125,
    currency: "West African CFA Franc (XOF)",
    flagUrl: "https://flagcdn.com/w320/gw.png",
    flagFact: "The Guinea-Bissau flag features a black star representing African unity, with Pan-African colors.",
    flagDescription: "Two horizontal stripes of yellow and green with vertical red stripe at hoist containing black star.",
    funFact: "The Bijagos Archipelago is one of Africa's most unique and preserved island groups.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290068/Bissau_zejbgf.jpg",
    languages: [
      { name: "Portuguese", percentage: 30 },
      { name: "Creole", percentage: 60 },
      { name: "African languages", percentage: 40 }
    ],
    geographicFacts: [
      "Numerous islands and estuaries",
      "Lowland terrain",
      "Tropical climate",
      "Mangrove swamps"
    ],
    economicFacts: [
      "Cashew nut exports",
      "Fishing industry",
      "Agriculture sector",
      "Growing tourism"
    ],
    touristAttractions: [
      {
        name: "Bijagós Archipelago",
        location: "Atlantic Ocean",
        description: "A UNESCO Biosphere Reserve comprising 88 islands and islets off the coast of Guinea-Bissau, representing one of Africa's most diverse coastal environments. Only about 20 islands are permanently inhabited, with the Bijagós people maintaining unique matriarchal traditions and animist beliefs that have remained largely unchanged for centuries. The archipelago is a critical habitat for endangered marine species including sea turtles, manatees, and the rare saltwater hippopotamus. The islands feature pristine beaches, mangrove forests, and traditional villages where sacred ceremonies and initiations still take place.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426591/Bijag%C3%B3s_Islands_ijnyxw.jpg"
      },
      {
        name: "Varela Beach",
        location: "Cacheu Region",
        description: "One of West Africa's most unspoiled beaches, located in the northwestern corner of Guinea-Bissau near the Senegalese border. This remote stretch of golden sand extends for kilometers along the Atlantic coast, backed by palm trees and lush vegetation. The beach area features dramatic clay cliffs, natural pools at low tide, and the meeting point of the Cacheu River with the ocean. The nearby fishing village offers insights into traditional coastal livelihoods, with colorful wooden fishing boats dotting the shoreline and fresh seafood available from local restaurants.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426591/varela_beach_i0lxf6.jpg"
      },
      {
        name: "Orango Islands National Park",
        location: "Bijagós Archipelago",
        description: "A protected area covering 158,000 hectares across several islands in the Bijagós Archipelago, established primarily to protect the rare saltwater hippopotamus that has adapted to living in the brackish channels between islands. The park encompasses diverse ecosystems including mangroves, palm forests, savanna, and marine zones. Besides hippos, visitors might spot crocodiles, monkeys, and numerous bird species. The park is also home to traditional Bijagós communities where visitors can learn about local customs, including the famous Vaca Bruto (wild bull) masquerade ceremonies that are central to the islands' cultural heritage.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426592/orango_islands_national_park_vu7kxl.jpg"
      },
      {
        name: "Cacheu River Mangroves Natural Park",
        location: "Northern Guinea-Bissau",
        description: "The largest protected area in Guinea-Bissau, covering 88,615 hectares of pristine mangrove forests, mudflats, and savanna woodlands along the Cacheu River estuary. This ecological sanctuary protects one of West Africa's largest continuous mangrove ecosystems, serving as a critical habitat for numerous bird species, manatees, crocodiles, and monkeys. The park can be explored by boat, offering visitors the chance to navigate through narrow mangrove channels while spotting wildlife. Several ethnic groups including the Felupes and Bainunks maintain traditional lifestyles within the park boundaries, practicing sustainable fishing and rice cultivation methods.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426592/Cacheu_River_Mangroves_Natural_Park_tzmnd1.jpg"
      }
    ]
  },
  {
    id: 26,
    name: "Kenya",
    slug: "kenya",
    capital: "Nairobi",
    population: 53771296,
    area: 580367,
    currency: "Kenyan Shilling (KES)",
    flagUrl: "https://flagcdn.com/w320/ke.png",
    flagFact: "The Kenyan flag features a traditional Maasai shield and spears, symbolizing defense of freedom.",
    flagDescription: "Three horizontal stripes of black, red, and green with white edges, featuring shield and spears.",
    funFact: "Kenya is home to the world's only desert lake, Lake Turkana.",
    regions: ["eastern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290070/Nairobi_umbafb.jpg",
    languages: [
      { name: "English", percentage: 40 },
      { name: "Swahili", percentage: 45 },
      { name: "Local languages", percentage: 15 }
    ],
    geographicFacts: [
      "Great Rift Valley",
      "Mount Kenya",
      "Indian Ocean coastline",
      "Savanna grasslands"
    ],
    economicFacts: [
      "Tourism industry",
      "Agricultural exports",
      "Technology hub",
      "Growing manufacturing"
    ],
    touristAttractions: [
      {
        name: "Maasai Mara National Reserve",
        location: "Narok County",
        description: "A world-renowned wildlife conservation area and northern extension of Tanzania's Serengeti National Park. The reserve is famous for the annual Great Migration, when over 1.5 million wildebeest and hundreds of thousands of zebras and gazelles cross the Mara River in search of fresh grazing. This spectacular ecosystem supports extraordinary concentrations of wildlife including the 'Big Five' (lion, leopard, elephant, buffalo, and rhino). The reserve is also home to the Maasai people, whose distinctive culture and traditional way of life add to the region's rich heritage.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426596/maasai_mara_national_reserve_sdjbml.jpg"
      },
      {
        name: "Mount Kenya",
        location: "Central Kenya",
        description: "Africa's second-highest mountain and a UNESCO World Heritage site, featuring dramatic glaciated peaks that rise from the surrounding savanna. This extinct volcano reaches 5,199 meters (17,057 feet) at its highest point and encompasses diverse ecological zones from bamboo forests to alpine moorlands and glaciers. The mountain is considered sacred by the Kikuyu people, who believe it is the home of their god, Ngai. Mount Kenya offers challenging climbing routes for experienced mountaineers as well as less demanding treks through its unique afro-alpine environment.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426596/mount_kenya_mna7rm.jpg"
      },
      {
        name: "Amboseli National Park",
        location: "Kajiado County",
        description: "A park renowned for its large elephant herds and spectacular views of Mount Kilimanjaro across the border in Tanzania. The name 'Amboseli' comes from the Maasai word meaning 'salty dust,' referring to the dried-up lake bed that dominates the park during dry seasons. Despite its relatively small size, the park supports a rich diversity of wildlife thanks to its varied habitats including wetlands fed by underground springs from Kilimanjaro's melting snow. The combination of wildlife against the backdrop of Africa's highest mountain creates one of the continent's most iconic photographic opportunities.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426596/amboseli_national_park_ch4po0.jpg"
      },
      {
        name: "Lamu Old Town",
        location: "Lamu Island",
        description: "The oldest and best-preserved Swahili settlement in East Africa, designated as a UNESCO World Heritage site. Founded in the 14th century, this coastal town features narrow winding streets, coral stone buildings with impressive carved wooden doors, hidden courtyards, and over 23 mosques. Lamu has maintained its traditional functions and remains a significant center for education in Islamic and Swahili culture. The absence of cars (transportation is by donkey or boat) and the town's relaxed pace create a unique atmosphere that offers visitors a glimpse into the coastal trading history of East Africa.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426596/Lamu_Old_Town_u9g7c1.jpg"
      }
    ]
  },
  {
    id: 27,
    name: "Lesotho",
    slug: "lesotho",
    capital: "Maseru",
    population: 2142249,
    area: 30355,
    currency: "Lesotho Loti (LSL)",
    flagUrl: "https://flagcdn.com/w320/ls.png",
    flagFact: "The Lesotho flag features a traditional Basotho hat, symbolizing the nation's indigenous people.",
    flagDescription: "Three horizontal stripes of blue, white, and green with black Basotho hat in center.",
    funFact: "Lesotho is the only independent state that lies entirely above 1,000 meters in elevation.",
    regions: ["southern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747294899/Maseru_xnceh7.jpg",
    languages: [
      { name: "Sesotho", percentage: 85 },
      { name: "English", percentage: 15 }
    ],
    geographicFacts: [
      "Mountainous terrain",
      "Highest low point in world",
      "Enclave within South Africa",
      "Alpine climate"
    ],
    economicFacts: [
      "Water exports",
      "Diamond mining",
      "Textile industry",
      "Tourism sector"
    ],
    touristAttractions: [
      {
        name: "Maloti-Drakensberg Park",
        location: "Eastern Lesotho",
        description: "A transboundary UNESCO World Heritage site shared with South Africa, featuring spectacular mountain scenery and extraordinary biodiversity. This high-altitude wilderness area contains the highest peaks in southern Africa and protects over 2,500 plant species, including many endemics. The park is also renowned for its exceptional collection of San rock art, with over 40,000 paintings in 600 sites dating back thousands of years. Visitors can enjoy hiking, horseback riding, and fly fishing while experiencing the unique alpine environment of the 'Kingdom in the Sky.'",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426596/Maloti-Drakensberg_Park_dgrqug.jpg"
      },
      {
        name: "Katse Dam",
        location: "Central Lesotho",
        description: "Africa's second-largest double-curvature arch dam and the centerpiece of the Lesotho Highlands Water Project, which transfers water to South Africa's industrial heartland. Standing 185 meters tall in a dramatic mountain setting, the dam's curved wall is an engineering marvel that has created a vast reservoir extending 35 kilometers upstream. Visitors can tour the dam wall, learn about the project at the information center, and enjoy boat trips on the reservoir. The project represents a significant economic resource for Lesotho, generating both hydroelectric power and revenue from water exports.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426596/Katse_Dam_y3sscx.jpg"
      },
      {
        name: "Thaba-Bosiu",
        location: "Near Maseru",
        description: "A sandstone plateau with great historical and cultural significance as the mountain fortress of King Moshoeshoe I, founder of the Basotho nation. Rising 120 meters above the surrounding plains, this natural fortress helped the Basotho resist numerous attacks during the 19th century. The site features ruins of Moshoeshoe's settlement, royal graves, and a modern cultural village and museum. From the summit, visitors can enjoy panoramic views of the surrounding countryside and Maseru in the distance. The mountain remains a sacred site for the Basotho people and hosts important cultural ceremonies.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426597/Thaba-Bosiu_jrvuvg.jpg"
      },
      {
        name: "Maletsunyane Falls",
        location: "Near Semonkong",
        description: "One of Africa's highest single-drop waterfalls, plunging 192 meters into a spectacular gorge. The name 'Semonkong' means 'Place of Smoke,' referring to the mist created by the falling water that rises from the gorge and can be seen from a distance. The falls offer not only breathtaking views but also the world's longest commercially operated single-drop abseil (rappel), attracting adventure seekers from around the globe. The surrounding area features traditional Basotho villages, opportunities for pony trekking, and hiking trails through the dramatic mountain landscape.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747438964/Maletsunyane_Falls_yheus6.jpg"
      }
    ]
  },
  {
    id: 28,
    name: "Liberia",
    slug: "liberia",
    capital: "Monrovia",
    population: 5057681,
    area: 111369,
    currency: "Liberian Dollar (LRD)",
    flagUrl: "https://flagcdn.com/w320/lr.png",
    flagFact: "The Liberian flag is modeled after the U.S. flag, reflecting the nation's founding by freed American slaves.",
    flagDescription: "Eleven horizontal stripes alternating red and white, with blue canton containing white star.",
    funFact: "Liberia is Africa's oldest republic and was never colonized by European powers.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290070/Monrovia_mbnhnt.jpg",
    languages: [
      { name: "English", percentage: 20 },
      { name: "Indigenous languages", percentage: 80 }
    ],
    geographicFacts: [
      "Atlantic coastline",
      "Tropical rainforests",
      "Rolling hills",
      "Mangrove swamps"
    ],
    economicFacts: [
      "Rubber production",
      "Iron ore mining",
      "Timber exports",
      "Maritime registry"
    ],
    touristAttractions: [
      {
        name: "Sapo National Park",
        location: "Sinoe County",
        description: "Liberia's largest protected area and one of the most significant remaining portions of the Upper Guinean Forest ecosystem, which once stretched across much of West Africa. This 1,804-square-kilometer rainforest park harbors exceptional biodiversity, including forest elephants, pygmy hippopotamuses, chimpanzees, and the rare Jentink's duiker. The park's remote location has helped preserve its pristine nature, with minimal human impact allowing ancient trees to reach impressive heights. Researchers have documented over 1,000 plant species and numerous endemic animals within its boundaries. Though challenging to access, the park offers adventurous visitors the opportunity to experience one of Africa's most intact rainforest ecosystems through guided hikes along forest trails and boat trips on the park's rivers.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426597/Sapo_National_Park_etj1fs.jpg"
      },
      {
        name: "Providence Island",
        location: "Monrovia",
        description: "A historic site at the mouth of the Mesurado River where freed American slaves (known as Americo-Liberians) first landed in 1822, establishing what would become Africa's first independent republic. This small island, originally named Dozoa by indigenous peoples, played a crucial role in Liberia's founding and represents the complex relationship between the settlers and native populations. Stone ruins of early settlements remain, along with a large cotton tree said to have been present when the first colonists arrived. The island offers panoramic views of Monrovia's skyline and serves as an important symbol of Liberian identity and history. Recent restoration efforts aim to develop the site as a cultural and educational destination highlighting the nation's unique founding story.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747162496/Providence_Island_cnwm7p.jpg"
      },
      {
        name: "Robertsport",
        location: "Grand Cape Mount County",
        description: "A picturesque coastal town nestled between the Atlantic Ocean and Lake Piso, known for its stunning beaches, excellent surfing conditions, and historical significance. Named after Liberia's first president, Joseph Jenkins Roberts, the town features well-preserved Americo-Liberian architecture, including colonial-style buildings that reflect the nation's unique heritage. The nearby Cassava Beach offers some of West Africa's best surfing waves, attracting international surfers to its consistent point breaks. Lake Piso, Liberia's largest lake and a designated Ramsar wetland site, provides opportunities for fishing and birdwatching. The surrounding rainforest-covered mountains of Cape Mount create a dramatic backdrop for this tranquil coastal retreat, which offers a glimpse into both Liberia's natural beauty and cultural history.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426597/robertsport_beach_ixju3o.jpg"
      },
      {
        name: "Kpatawee Waterfall",
        location: "Bong County",
        description: "One of Liberia's most spectacular natural attractions, featuring a series of cascades tumbling down rocky outcrops in the lush rainforest of central Liberia. The falls consist of multiple tiers, with the main cascade dropping approximately 100 feet into a refreshing natural pool perfect for swimming. Surrounded by dense vegetation and towering trees, the site offers a peaceful retreat where visitors can enjoy picnics, swimming, and hiking. The journey to the falls involves a moderate trek through traditional villages and farmland, providing insight into rural Liberian life. Local guides share knowledge about medicinal plants and cultural practices of the region. The falls are particularly impressive during the rainy season (May to October) when water volume increases dramatically, though they remain accessible and beautiful year-round.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747162500/Kpatawee_Waterfall_laxt1e.png"
      }
    ]
  },
  {
    id: 29,
    name: "Libya",
    slug: "libya",
    capital: "Tripoli",
    population: 6871292,
    area: 1759540,
    currency: "Libyan Dinar (LYD)",
    flagUrl: "https://flagcdn.com/w320/ly.png",
    flagFact: "The Libyan flag features a single white star and crescent on a plain black background.",
    flagDescription: "Plain green field with white crescent and star in center.",
    funFact: "Libya has the largest proven oil reserves in Africa.",
    regions: ["northern", "sahara"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290072/Tripoli_qbudoe.jpg",
    languages: [
      { name: "Arabic", percentage: 95 },
      { name: "Berber", percentage: 5 }
    ],
    geographicFacts: [
      "Mostly desert terrain",
      "Mediterranean coastline",
      "Ancient Roman ruins",
      "Saharan oases"
    ],
    economicFacts: [
      "Oil production",
      "Natural gas exports",
      "Growing construction sector",
      "Developing tourism"
    ],
    touristAttractions: [
      {
        name: "Leptis Magna",
        location: "Al Khums",
        description: "One of the most spectacular and well-preserved Roman ruins in the Mediterranean world and a UNESCO World Heritage site. Founded by Phoenicians in the 7th century BCE and later becoming a prominent Roman city, Leptis Magna reached its golden age under Emperor Septimius Severus, who was born there and lavished his hometown with magnificent buildings. The site features remarkably intact structures including a monumental arch, forum, basilica, amphitheater, and circus. The Hunting Baths contain well-preserved mosaics and frescoes, while the harbor complex demonstrates advanced Roman engineering. The quality of preservation is exceptional due to the city being abandoned and covered by desert sand for centuries, protecting its marble columns, intricate carvings, and public spaces from weathering and looting.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426629/Leptis_Magna_y1kbkj.jpg"
      },
      {
        name: "Cyrene",
        location: "Eastern Libya",
        description: "An ancient Greek colony and later Roman city founded in 631 BCE, now a UNESCO World Heritage site showcasing the blending of Hellenic and Roman architectural traditions. Situated in a lush, high plateau with views of the Mediterranean, Cyrene was one of the principal cities in the Hellenic world, known as the 'Athens of Africa' for its cultural importance. The archaeological site features the Temple of Apollo, one of the most complete Greek temples outside Greece, along with a well-preserved theater, agora, forum, and the Fountain of Apollo. The nearby Necropolis contains thousands of rock-cut tombs spanning several centuries. The site's significance lies in its demonstration of Greek urban planning principles adapted to North African conditions and its later evolution under Roman rule.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747162500/Cyrene_wbbxse.jpg"
      },
      {
        name: "Acacus Mountains",
        location: "Fezzan Region",
        description: "A UNESCO World Heritage site featuring one of the world's richest collections of prehistoric rock art, with thousands of paintings and engravings dating from 12,000 BCE to 100 CE. This mountain range in the Sahara Desert near the Algerian border contains dramatic sandstone formations sculpted by wind and water erosion into arches, pillars, and deep ravines. The rock art documents the changing environment of the Sahara from savanna to desert and depicts the evolution of human activities from hunting to animal domestication and early settlements. Different artistic styles reflect cultural changes over millennia, providing invaluable insights into ancient Saharan civilizations. The area's remote location and harsh desert conditions have helped preserve these fragile artworks, though they face threats from climate change and tourism.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426720/akakus_mountains_kw4uav.jpg"
      },
      {
        name: "Ghadames",
        location: "Western Libya",
        description: "Known as the 'pearl of the desert,' this ancient oasis town is a UNESCO World Heritage site featuring unique multi-level desert architecture adapted to extreme Saharan conditions. Founded in ancient times, Ghadames developed a distinctive urban plan with covered streets providing shade from the desert sun and interconnected houses with separate spaces for different seasons and activities. The ground floors typically contained storage areas, middle floors were living spaces, and rooftops served as open-air spaces for women's gatherings. The whitewashed buildings feature intricate geometric decorations and colorful painted interiors. The town's ingenious irrigation system distributed water from underground springs to gardens that produced dates and other crops. Though most residents now live in modern housing outside the old town, the historic center remains a remarkable example of traditional desert architecture and sustainable design.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426656/Ghadames_Old_Town_p4vx5w.jpg"
      }
    ]
  },
  {
    id: 30,
    name: "Madagascar",
    slug: "madagascar",
    capital: "Antananarivo",
    population: 27691018,
    area: 587041,
    currency: "Malagasy Ariary (MGA)",
    flagUrl: "https://flagcdn.com/w320/mg.png",
    flagFact: "The Madagascan flag's white stripe represents purity, red for sovereignty, and green for hope.",
    flagDescription: "Two horizontal stripes of red and green with white vertical stripe at hoist.",
    funFact: "Madagascar is home to 5% of the world's plant and animal species, with about 90% being endemic.",
    regions: ["eastern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290066/Antananarivo_bqruyh.jpg",
    languages: [
      { name: "Malagasy", percentage: 85 },
      { name: "French", percentage: 15 }
    ],
    geographicFacts: [
      "World's fourth-largest island",
      "Unique biodiversity",
      "Varied climate zones",
      "Ancient rainforests"
    ],
    economicFacts: [
      "Vanilla exports",
      "Mining sector",
      "Tourism industry",
      "Agricultural production"
    ],
    touristAttractions: [
      {
        name: "Avenue of the Baobabs",
        location: "Menabe Region",
        description: "A natural monument featuring a striking group of ancient baobab trees lining a dirt road between Morondava and Belon'i Tsiribihina. These massive trees, some over 800 years old and reaching 30 meters in height, belong to the species Adansonia grandidieri, endemic to Madagascar. The avenue formed as surrounding forests were cleared for agriculture, leaving these iconic trees standing in isolation. Their distinctive bottle-shaped trunks can store up to 120,000 liters of water, an adaptation to the region's dry conditions. The site is particularly magical at sunrise and sunset when the trees cast long shadows across the landscape, creating one of Madagascar's most photographed scenes. Conservation efforts are underway to protect these majestic trees and replant the surrounding area to create an ecological corridor.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427160/Avenue_of_the_Baobabs_tdl0w9.jpg"
      },
      {
        name: "Tsingy de Bemaraha",
        location: "Melaky Region",
        description: "A UNESCO World Heritage site featuring one of the world's most unique geological formations – a vast 'forest' of limestone needles. The word 'tsingy' in Malagasy means 'where one cannot walk barefoot,' aptly describing these razor-sharp limestone pinnacles that have been carved by centuries of rainfall and groundwater movement. The national park covers 1,575 square kilometers and contains two distinct areas: the Great Tsingy with dramatic tall pinnacles and the Little Tsingy with smaller formations. Despite the harsh terrain, the park supports remarkable biodiversity, including 11 lemur species and numerous endemic plants that have adapted to the challenging conditions. Suspended bridges, fixed cables, and ladders allow visitors to explore this otherworldly landscape, offering breathtaking views across the stone forest and glimpses of wildlife in the canyons below.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426720/Tsingy_de_Bemaraha_n6jyq0.jpg"
      },
      {
        name: "Ranomafana National Park",
        location: "Southeastern Madagascar",
        description: "A biodiversity hotspot protecting 41,600 hectares of mid-altitude rainforest that was established in 1991 following the discovery of the golden bamboo lemur. The park's name, meaning 'hot water' in Malagasy, refers to the thermal springs found within its boundaries. With elevations ranging from 500 to 1,500 meters, the park encompasses diverse habitats supporting extraordinary biodiversity, including 12 lemur species, over 130 bird species, and countless reptiles, amphibians, and insects. Many of these species are found nowhere else on Earth. The park's research station, Centre ValBio, conducts important conservation work and ecological studies. Visitors can explore well-maintained trails with local guides who help spot camouflaged wildlife, from the tiny mouse lemur to the colorful Parson's chameleon, while learning about the complex relationships between species in this unique ecosystem.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427159/Ranomafana_National_Park_h3mckc.jpg"
      },
      {
        name: "Isalo National Park",
        location: "Ihorombe Region",
        description: "A dramatic landscape of eroded sandstone formations creating a Malagasy 'Grand Canyon' with deep gorges, towering cliffs, and natural swimming pools. Established in 1962, this 81,540-hectare park features diverse terrain from grassy plains to rugged massifs sculpted by wind and water over millions of years. The park's unique microclimate supports distinctive flora, including several endemic plant species adapted to the harsh conditions, such as the elephant's foot plant and Malagasy aloe. Hidden within the canyons are lush oases with natural swimming pools fed by crystal-clear streams, offering refreshing respite from the heat. The area holds cultural significance for the local Bara people, who traditionally buried their dead in caves high in the sandstone cliffs. Hiking trails of varying difficulty allow visitors to explore this surreal landscape while potentially spotting ring-tailed lemurs, sifakas, and numerous bird species.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427159/Isalo_National_Park_ogtqah.jpg"
      }
    ]
  },
  {
    id: 31,
    name: "Malawi",
    slug: "malawi",
    capital: "Lilongwe",
    population: 19129952,
    area: 118484,
    currency: "Malawian Kwacha (MWK)",
    flagUrl: "https://flagcdn.com/w320/mw.png",
    flagFact: "The Malawian flag features a rising sun, symbolizing the dawn of hope and freedom in Africa.",
    flagDescription: "Three horizontal stripes of black, red, and green with red rising sun in black stripe.",
    funFact: "Lake Malawi contains more species of fish than any other lake in the world.",
    regions: ["eastern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290069/Lilongwe_rv8kwb.jpg",
    languages: [
      { name: "Chichewa", percentage: 65 },
      { name: "English", percentage: 25 },
      { name: "Other", percentage: 10 }
    ],
    geographicFacts: [
      "Lake Malawi (third largest in Africa)",
      "Great Rift Valley",
      "Diverse landscapes",
      "Tropical climate"
    ],
    economicFacts: [
      "Agriculture-based economy",
      "Tobacco exports",
      "Growing tourism",
      "Tea production"
    ],
    touristAttractions: [
      {
        name: "Lake Malawi",
        location: "Eastern Malawi",
        description: "Africa's third-largest lake and a UNESCO World Heritage site, known for its exceptional biodiversity with over 1,000 species of cichlid fish, more than any other lake on Earth. This vast freshwater lake, stretching 580 kilometers along Malawi's eastern border, features crystal-clear waters and numerous islands, creating a paradise for snorkeling, diving, and beach activities. Lake Malawi National Park protects the southern portion, including the Nankhumba Peninsula and several offshore islands. The lake's shores offer a variety of accommodations from luxury resorts to rustic beach lodges, while traditional fishing villages provide glimpses into local culture and the opportunity to experience the warmth of Malawian hospitality.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426549/lake_malawi_nouxmf.jpg"
      },
      {
        name: "Mount Mulanje",
        location: "Southern Malawi",
        description: "An enormous granite massif that rises dramatically from the surrounding plains, reaching 3,002 meters at its highest point, Sapitwa Peak. The mountain's isolation and varied topography have created unique ecosystems with numerous endemic species, including the Mulanje cedar, Malawi's national tree. The massif features deep ravines, valleys, waterfalls, and over 20 peaks, offering spectacular hiking opportunities ranging from day walks to multi-day treks with overnight stays in mountain huts. Local guides share knowledge about the mountain's ecology and folklore, including stories of spirits believed to inhabit Sapitwa Peak. The mountain's slopes support tea plantations that create a patchwork of green against the imposing rock faces.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426549/mount_mulanje_l6qem8.jpg"
      },
      {
        name: "Liwonde National Park",
        location: "Southern Malawi",
        description: "Malawi's premier wildlife destination, situated along the Shire River, which creates a wildlife-rich floodplain ecosystem. The park is home to large populations of elephants, hippos, crocodiles, and numerous antelope species, with recent reintroductions of lions, cheetahs, and black rhinos enhancing its conservation significance. Boat safaris on the river offer exceptional wildlife viewing and birdwatching opportunities, with over 400 bird species recorded. The combination of riverine environments, mopane woodlands, and grasslands creates diverse habitats supporting varied wildlife. Conservation efforts led by African Parks have transformed Liwonde into a model of protected area management, with community engagement programs benefiting surrounding villages while securing the park's future.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426549/liwonde_national_park_evwvxc.jpg"
      },
      {
        name: "Nyika National Park",
        location: "Northern Malawi",
        description: "Malawi's largest national park, covering a vast rolling plateau at elevations between 2,100 and 2,600 meters. This unique highland environment features montane grasslands dotted with wildflowers, creating landscapes often compared to the Scottish Highlands but with zebras, antelopes, and leopards roaming freely. The park is particularly known for its orchids, with over 200 species blooming during the rainy season. Nyika offers exceptional hiking, mountain biking, and horseback riding opportunities across its expansive terrain. The high elevation creates a temperate climate distinct from much of Malawi, with cool temperatures and occasional mists adding to the atmospheric beauty. Stunning viewpoints along the plateau's edge provide panoramic vistas across northern Malawi and into neighboring Zambia.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426550/nyika_national_park_izmghc.jpg"
      }
    ]
  },
  {
    id: 32,
    name: "Mali",
    slug: "mali",
    capital: "Bamako",
    population: 20250833,
    area: 1240192,
    currency: "West African CFA Franc (XOF)",
    flagUrl: "https://flagcdn.com/w320/ml.png",
    flagFact: "The Mali flag uses the Pan-African colors, with green representing fertility, yellow for mineral wealth, and red for independence struggle.",
    flagDescription: "Three vertical stripes of green, yellow, and red.",
    funFact: "Timbuktu was once one of the world's most important centers of Islamic learning.",
    regions: ["western", "sahara"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290067/Bamako_i6fpix.png",
    languages: [
      { name: "French", percentage: 35 },
      { name: "Bambara", percentage: 45 },
      { name: "Other", percentage: 20 }
    ],
    geographicFacts: [
      "Sahara Desert in north",
      "Niger River basin",
      "Ancient city of Timbuktu",
      "Diverse ecosystems"
    ],
    economicFacts: [
      "Gold mining",
      "Cotton production",
      "Agricultural exports",
      "Growing tourism"
    ],
    touristAttractions: [
      {
        name: "Djenné Great Mosque",
        location: "Djenné",
        description: "The world's largest mud-brick structure and a UNESCO World Heritage site, exemplifying the distinctive Sudano-Sahelian architectural style. Built in 1907 on the site of earlier mosques dating back to the 13th century, this impressive building is constructed entirely of sun-dried mud bricks covered with a mud plaster that gives it its smooth, sculptural appearance. The mosque features three large towers on its eastern wall, each topped with an ostrich egg symbolizing fertility and purity. Every spring, the entire community participates in the re-plastering of the mosque during a festive event known as the Crépissage. The building remains an active place of worship and the centerpiece of Djenné's old town, itself a UNESCO site of earthen architecture.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426550/Djenn%C3%A9_Great_Mosque_q0cjxv.jpg"
      },
      {
        name: "Bandiagara Escarpment",
        location: "Mopti Region",
        description: "A spectacular 150-kilometer-long sandstone cliff rising up to 500 meters above the plains, home to the Dogon people whose unique culture and traditions have fascinated anthropologists for generations. The escarpment and surrounding Dogon Country form a UNESCO World Heritage site that features remarkable cliff-dwelling villages built into the rock face, with distinctive granaries on stilts and elaborately carved wooden doors. The Dogon are known for their complex cosmology, masked dances, and traditional religious practices that have remained largely intact despite outside influences. Hiking along the escarpment offers visitors the opportunity to experience Dogon hospitality while exploring villages that seem to grow organically from the dramatic landscape.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426550/bandiagara_escarpment_ibd1p5.jpg"
      },
      {
        name: "Timbuktu",
        location: "Northern Mali",
        description: "A legendary desert city and UNESCO World Heritage site that was once a flourishing center of Islamic scholarship and a key trading hub in the trans-Saharan gold and salt trade. Founded around the 12th century, Timbuktu reached its golden age in the 15th and 16th centuries when its universities attracted scholars from across the Islamic world. The city's three great mosques – Djingareyber, Sankore, and Sidi Yahia – exemplify the earthen architecture of the region and house collections of invaluable ancient manuscripts. Though security concerns have affected tourism in recent years, Timbuktu remains an iconic destination whose name evokes the romance of ancient caravan routes and the intellectual achievements of West Africa's medieval empires.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426552/timbuktu_t9vaqv.jpg"
      },
      {
        name: "Niger River",
        location: "Southern Mali",
        description: "Africa's third-longest river, flowing through Mali for approximately 1,700 kilometers and serving as the country's lifeblood. The river creates a fertile inland delta that contrasts dramatically with the surrounding arid landscapes, supporting agriculture, fishing communities, and diverse wildlife. Boat journeys along the Niger offer a unique perspective on Malian life, with traditional pinasse canoes and larger vessels connecting riverside communities. The river is particularly scenic around Ségou, where colorful pirogues with distinctive eye motifs dot the water, and near Koulikoro, where dramatic sandstone cliffs frame the waterway. During the annual flooding season, parts of the inland delta transform into a maze of channels and temporary islands, creating one of Africa's most unusual and ecologically important wetland environments.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426553/niger_river_tpkhuw.jpg"
      }
    ]
  },
  {
    id: 33,
    name: "Mauritania",
    slug: "mauritania",
    capital: "Nouakchott",
    population: 4649658,
    area: 1030700,
    currency: "Mauritanian Ouguiya (MRU)",
    flagUrl: "https://flagcdn.com/w320/mr.png",
    flagFact: "The Mauritanian flag features a golden crescent and star on a green field, symbolizing Islam and hope.",
    flagDescription: "Green field with golden crescent and star.",
    funFact: "Mauritania is home to the world's largest monolith, Ben Amera.",
    regions: ["western", "sahara"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290071/Nouakchott_czbcsg.jpg",
    languages: [
      { name: "Arabic", percentage: 100 },
      { name: "French", percentage: 5 },
      { name: "Other", percentage: 5 }
    ],
    geographicFacts: [
      "Mostly Sahara Desert",
      "Atlantic coastline",
      "Ancient trade routes",
      "Unique desert landscapes"
    ],
    economicFacts: [
      "Iron ore exports",
      "Fishing industry",
      "Mining sector",
      "Growing tourism"
    ],
    touristAttractions: [
      {
        name: "Chinguetti",
        location: "Adrar Region",
        description: "A UNESCO World Heritage site and the seventh holiest city of Islam, founded in the 13th century as a trading center and religious hub in the Sahara Desert. The old town features distinctive stone architecture with houses and mosques built from ochre-colored dry stone, designed to withstand the harsh desert environment. Chinguetti is renowned for its ancient libraries containing thousands of precious manuscripts on subjects ranging from religion and astronomy to poetry and mathematics, some dating back to the 9th century. The city's Friday Mosque with its distinctive square minaret exemplifies medieval Saharan architecture and continues to serve as a place of worship. Though partially engulfed by encroaching sand dunes, Chinguetti remains an atmospheric window into the region's rich intellectual and commercial history.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426553/chinguetti_vuvwvb.jpg"
      },
      {
        name: "Banc d'Arguin National Park",
        location: "Atlantic Coast",
        description: "A UNESCO World Heritage site covering over 12,000 square kilometers where the Sahara Desert meets the Atlantic Ocean, creating one of the world's most important marine and coastal ecosystems. The park serves as a critical wintering site for millions of migratory birds, with over 2 million shorebirds arriving annually from northern Europe, Siberia, and Greenland. The shallow coastal waters and extensive mudflats support diverse marine life including dolphins, whales, and endangered monk seals. The Imraguen people, traditional fishermen who have inhabited the area for centuries, continue to practice sustainable fishing methods, including a unique cooperative technique with wild dolphins. The park's striking landscapes feature shifting sand dunes meeting the sea, creating a constantly changing boundary between desert and ocean.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426553/banc_d_arguin_national_park_hzkbsb.jpg"
      },
      {
        name: "Richat Structure (Eye of the Sahara)",
        location: "Adrar Region",
        description: "A mysterious geological formation visible from space, appearing as a giant 'bull's-eye' in the desert with concentric rings spanning approximately 40 kilometers in diameter. Initially thought to be an impact crater, scientists now believe it formed through natural erosion of a symmetrical geological dome. The structure's distinctive circular pattern results from varying resistance to erosion in different rock layers, creating alternating ridges and depressions. The central dome contains ancient rocks dating back over 500 million years, offering geologists insights into Earth's distant past. Though remote, the site attracts adventurous travelers seeking to witness this natural wonder from both ground level and aerial perspectives. The otherworldly landscape has inspired numerous theories and legends, adding to its mystique as one of the Sahara's most enigmatic landmarks.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426553/Richat_Structure_Eye_of_the_Sahara_fgk2ge.jpg"
      },
      {
        name: "Ouadane",
        location: "Adrar Region",
        description: "An ancient caravan town founded in 1147 and designated as a UNESCO World Heritage site, once serving as an important trading post on trans-Saharan routes connecting North Africa with sub-Saharan regions. The town's stone ruins cascade down a rocky hillside, with narrow streets winding between buildings constructed from local sandstone. Ouadane's historical significance stems from its role in the gold, salt, and date trades, as well as being a center of Islamic scholarship. The partially restored Great Mosque stands as a testament to the town's religious importance, while abandoned houses reveal architectural techniques adapted to the extreme desert climate. Though much of the old town lies in picturesque ruins, a modern settlement continues nearby, maintaining the area's centuries-old human presence in this challenging environment.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426554/Ouadane_udt0lb.jpg"
      }
    ]
  },
  {
    id: 34,
    name: "Mauritius",
    slug: "mauritius",
    capital: "Port Louis",
    population: 1271768,
    area: 2040,
    currency: "Mauritian Rupee (MUR)",
    flagUrl: "https://flagcdn.com/w320/mu.png",
    flagFact: "The Mauritian flag's four horizontal stripes represent independence, peace, nature, and prosperity.",
    flagDescription: "Four horizontal stripes of red, blue, yellow, and green.",
    funFact: "Mauritius was the only known habitat of the now-extinct dodo bird.",
    regions: ["eastern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290071/Port_Louis_pxlbyd.jpg",
    languages: [
      { name: "Creole", percentage: 85 },
      { name: "French", percentage: 10 },
      { name: "English", percentage: 5 }
    ],
    geographicFacts: [
      "Volcanic island origin",
      "Coral reefs",
      "Tropical climate",
      "Diverse marine life"
    ],
    economicFacts: [
      "Tourism industry",
      "Financial services",
      "Sugar exports",
      "Textile manufacturing"
    ],
    touristAttractions: [
      {
        name: "Black River Gorges National Park",
        location: "Southwestern Mauritius",
        description: "Mauritius's largest national park, protecting over 6,500 hectares of native rainforest and serving as the last refuge for many of the island's endemic species. This biodiversity hotspot is home to over 300 species of flowering plants and nine species of birds found nowhere else on Earth, including the endangered pink pigeon and Mauritius kestrel, both brought back from the brink of extinction. The park features dramatic landscapes with gorges, waterfalls, and peaks reaching over 800 meters, offering spectacular panoramic views across the island to the ocean beyond. An extensive network of hiking trails allows visitors to explore diverse habitats while interpretive centers provide insights into conservation efforts preserving this ecological treasure.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426554/black_river_gorges_national_park_tnhtej.jpg"
      },
      {
        name: "Chamarel Seven Colored Earth",
        location: "Chamarel",
        description: "A geological phenomenon where volcanic soil has formed distinct layers of different colored earth in mesmerizing patterns of red, brown, violet, green, blue, purple, and yellow. This natural wonder was created when volcanic ash cooled at different temperatures, causing the iron and aluminum oxides in the soil to form various colored compounds. Remarkably, even when mixed together, these sands naturally separate back into distinct layers. The site is surrounded by lush vegetation, creating a striking contrast with the barren colored dunes. Nearby attractions include the 100-meter Chamarel Waterfall, which plunges dramatically over a cliff into a pool below, and the Curious Corner of Chamarel, an interactive museum of optical illusions.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426554/chamarel_seven_colored_earths_urhref.jpg"
      },
      {
        name: "Île aux Cerfs",
        location: "East Coast",
        description: "A pristine island paradise covering approximately 87 hectares off Mauritius's east coast, renowned for its powder-white beaches, crystal-clear turquoise lagoons, and swaying palm trees. Despite its name meaning 'Deer Island,' no deer remain today, but the island offers numerous recreational activities including water sports, golf on the 18-hole championship course designed by Bernhard Langer, and boat excursions to nearby waterfalls. Visitors typically arrive by speedboat or catamaran for day trips, enjoying beachside restaurants serving fresh seafood and Mauritian specialties. The island's sheltered lagoon provides ideal conditions for swimming and snorkeling, with coral reefs supporting colorful marine life just offshore.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426554/%C3%8Ele_aux_Cerfs_tyhjgi.jpg"
      },
      {
        name: "L'Aventure du Sucre",
        location: "Pamplemousses",
        description: "An interactive museum housed in the former Beau Plan sugar factory, chronicling Mauritius's 250-year history of sugar production and its profound impact on the island's development. The museum explains how sugar cultivation shaped Mauritius's multicultural society through the arrival of different ethnic groups as laborers, creating the diverse cultural tapestry that defines the nation today. Exhibits display antique tools, machinery, and historical artifacts, while multimedia presentations explain the complex process of transforming sugarcane into refined sugar. The museum concludes with a tasting room offering various types of sugar and locally produced rum. Adjacent to the famous Sir Seewoosagur Ramgoolam Botanical Garden, this attraction provides valuable context for understanding Mauritius's colonial past and cultural heritage.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747162498/L_Aventure_du_Sucre_qfya4f.png"
      }
    ]
  },
  {
    id: 35,
    name: "Morocco",
    slug: "morocco",
    capital: "Rabat",
    population: 36910560,
    area: 446550,
    currency: "Moroccan Dirham (MAD)",
    flagUrl: "https://flagcdn.com/w320/ma.png",
    flagFact: "The Moroccan flag features the Seal of Solomon, representing the link between God and the nation.",
    flagDescription: "Red field with green pentagram (five-pointed star).",
    funFact: "Morocco is home to the oldest university in the world, University of Al Quaraouiyine, founded in 859 AD.",
    regions: ["northern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290071/Rabat_qb0dp7.jpg",
    languages: [
      { name: "Arabic", percentage: 65 },
      { name: "Berber", percentage: 35 },
      { name: "French", percentage: 33 }
    ],
    geographicFacts: [
      "Atlas Mountains",
      "Sahara Desert",
      "Mediterranean coast",
      "Atlantic coast"
    ],
    economicFacts: [
      "Tourism industry",
      "Phosphate mining",
      "Agricultural exports",
      "Manufacturing sector"
    ],
    touristAttractions: [
      {
        name: "Medina of Fez",
        location: "Fez",
        description: "The world's largest car-free urban area and a UNESCO World Heritage site, founded in the 9th century and considered the most complete medieval city in the Arab world. This labyrinthine city contains over 9,000 narrow streets and alleys lined with historic buildings, bustling souks, and ancient institutions. The medina is home to the University of Al Quaraouiyine, founded in 859 and recognized as the world's oldest continuously operating educational institution. Visitors can explore traditional crafts quarters where artisans use techniques unchanged for centuries, from copper workers and tanners to potters and weavers. Architectural highlights include the ornate Bou Inania Madrasa, the Nejjarine Fountain, and numerous historic mosques, while the famous Chouara Tannery offers a glimpse into traditional leather production methods dating back to medieval times.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747164368/Medina_of_Fez_fdf2qj.jpg"
      },
      {
        name: "Jemaa el-Fnaa",
        location: "Marrakech",
        description: "The bustling heart of Marrakech and a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity, this historic square transforms throughout the day from a morning market to an evening carnival of storytellers, musicians, acrobats, snake charmers, and food vendors. Dating back to the founding of Marrakech in the 11th century, the square has served as a trading post, execution site, and entertainment venue over the centuries. Surrounded by souks, cafés, and the iconic Koutoubia Mosque, Jemaa el-Fnaa exemplifies Morocco's vibrant cultural traditions. As night falls, dozens of food stalls create an open-air restaurant serving traditional Moroccan dishes amid swirling smoke and the sounds of Gnawa music, creating an immersive sensory experience that has captivated visitors for generations.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426558/Jemaa_el-Fnaa_Square_dq2eev.jpg"
      },
      {
        name: "Chefchaouen",
        location: "Rif Mountains",
        description: "A picturesque mountain town renowned for its buildings painted in various shades of blue, creating a dreamlike atmosphere that has made it one of Morocco's most photogenic destinations. Founded in 1471 as a fortress to fight Portuguese invasions, the town later became a haven for Jewish and Muslim refugees from Spain. The distinctive blue color, introduced by Jewish settlers in the 1930s, is said to symbolize the sky and heaven, though some claim it was originally used to repel mosquitoes. The medina features Andalusian-influenced architecture with red-tiled roofs and narrow winding streets that open onto charming squares. Surrounded by the dramatic landscapes of the Rif Mountains, Chefchaouen offers excellent hiking opportunities in the nearby Talassemtane National Park, home to rare Barbary macaques and diverse plant species.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426558/chefchaouen_blue_city_zuqzs8.jpg"
      },
      {
        name: "Ait Benhaddou",
        location: "Ouarzazate Province",
        description: "A spectacular fortified village (ksar) and UNESCO World Heritage site that has served as a backdrop for numerous films and television shows, including 'Gladiator,' 'Game of Thrones,' and 'Lawrence of Arabia.' Built along a former caravan route between the Sahara and Marrakech, this earthen clay architecture masterpiece dates primarily from the 17th century, though its foundations are much older. The village consists of a group of buildings surrounded by high defensive walls reinforced by corner towers, showcasing the traditional pre-Saharan construction techniques of southern Morocco. Though only a few families still live within the ancient walls, the site remains a remarkable example of Moroccan earthen clay architecture and offers visitors insight into traditional Berber building methods adapted to semi-desert environments.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426558/Ait_Ben_Haddou_shdk2n.jpg"
      }
    ]
  },
  {
    id: 36,
    name: "Mozambique",
    slug: "mozambique",
    capital: "Maputo",
    population: 31255435,
    area: 799380,
    currency: "Mozambican Metical (MZN)",
    flagUrl: "https://flagcdn.com/w320/mz.png",
    flagFact: "The Mozambican flag features an AK-47 rifle, symbolizing defense and vigilance.",
    flagDescription: "Horizontal stripes of green, black, and yellow, separated by white stripes, with red triangle at hoist containing star and weapon.",
    funFact: "Mozambique has one of the longest coastlines in Africa, stretching over 2,500 kilometers.",
    regions: ["eastern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290069/Maputo_njrxw3.jpg",
    languages: [
      { name: "Portuguese", percentage: 50 },
      { name: "Makhuwa", percentage: 25 },
      { name: "Other", percentage: 25 }
    ],
    geographicFacts: [
      "Indian Ocean coastline",
      "Great Rift Valley",
      "Zambezi River",
      "Diverse ecosystems"
    ],
    economicFacts: [
      "Natural gas reserves",
      "Agricultural exports",
      "Tourism potential",
      "Mining sector"
    ],
    touristAttractions: [
      {
        name: "Bazaruto Archipelago",
        location: "Inhambane Province",
        description: "A protected marine national park comprising five pristine islands in the Indian Ocean, renowned for its crystal-clear turquoise waters, white sand beaches, and towering sand dunes. The archipelago supports extraordinary marine biodiversity, including over 2,000 fish species, dolphins, whales, sharks, manta rays, and the rare dugong (sea cow). The islands were formed from sand deposited by the Save River over thousands of years, creating a unique ecosystem where coastal forests, grasslands, freshwater lakes, and coral reefs exist in close proximity. Luxury eco-lodges on Bazaruto and Benguerra islands offer exclusive accommodation for visitors seeking to experience world-class diving, snorkeling, deep-sea fishing, and dhow sailing excursions in this unspoiled paradise.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426559/Bazaruto_Archipelago_frbvjk.jpg"
      },
      {
        name: "Gorongosa National Park",
        location: "Central Mozambique",
        description: "Once known as 'Africa's Eden' for its extraordinary wildlife abundance, this 4,000-square-kilometer park has become one of conservation's greatest success stories after being devastated during Mozambique's civil war. An ambitious restoration project has revitalized the ecosystem, with wildlife populations rebounding dramatically. The park encompasses diverse habitats including floodplains, savanna, woodland, and rainforest on Mount Gorongosa, supporting lions, elephants, hippos, crocodiles, and over 500 bird species. The Carr Foundation's partnership with the Mozambican government has established community development programs, scientific research facilities, and tourism infrastructure, creating a model for conservation that benefits both wildlife and local communities. Visitors can experience game drives, walking safaris, and boat trips on Lake Urema.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747162498/Gorongosa_National_Park_ilq8xp.png"
      },
      {
        name: "Ilha de Moçambique",
        location: "Nampula Province",
        description: "A UNESCO World Heritage site and the former capital of Portuguese East Africa for nearly four centuries, this small coral island (less than 3 kilometers long) contains one of the most significant collections of colonial architecture in Africa. Connected to the mainland by a 3.5-kilometer bridge, the island features two distinct areas: Stone Town with its Portuguese colonial buildings and Macuti Town with traditional reed houses. Key landmarks include the Fort of São Sebastião (the oldest complete fort still standing in sub-Saharan Africa), the Palace and Chapel of São Paulo, and numerous historic churches and mosques reflecting the island's diverse cultural heritage. The surrounding waters offer excellent diving and snorkeling opportunities, while the island's rich cultural traditions blend Portuguese, Arab, Indian, and African influences.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747165052/Ilha_de_Mo%C3%A7ambique_cdbl8w.jpg"
      },
      {
        name: "Quirimbas Archipelago",
        location: "Cabo Delgado Province",
        description: "A string of 32 coral islands stretching along Mozambique's northern coast, combining pristine natural beauty with rich cultural heritage. The southern portion of the archipelago is protected as Quirimbas National Park, encompassing 7,500 square kilometers of marine and terrestrial habitats. The islands feature mangrove forests, coral reefs, and diverse marine life including sea turtles, dolphins, whales, and over 375 fish species. The archipelago's history as a trading center has created a unique blend of African, Arab, Portuguese, and Indian influences visible in the architecture and culture of Ibo Island, the historical center of the region. Visitors can explore colonial-era forts, experience traditional silversmithing, or stay at exclusive island lodges offering world-class diving, fishing, and sailing in this remote paradise.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747162499/Quirimbas_Archipelago_ekdjr0.jpg"
      }
    ]
  },
  {
    id: 37,
    name: "Namibia",
    slug: "namibia",
    capital: "Windhoek",
    population: 2540905,
    area: 825615,
    currency: "Namibian Dollar (NAD)",
    flagUrl: "https://flagcdn.com/w320/na.png",
    flagFact: "The Namibian flag's sun symbol represents life and energy.",
    flagDescription: "Diagonal blue stripe with red stripe above and green below, with golden sun in upper left.",
    funFact: "Namibia is home to the world's largest population of free-roaming cheetahs.",
    regions: ["southern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747295895/Windhoek_dbkaf6.jpg",
    languages: [
      { name: "English", percentage: 3 },
      { name: "Oshiwambo", percentage: 49 },
      { name: "Other", percentage: 48 }
    ],
    geographicFacts: [
      "Namib Desert",
      "Atlantic coastline",
      "Fish River Canyon",
      "Etosha Pan"
    ],
    economicFacts: [
      "Diamond mining",
      "Tourism industry",
      "Fishing sector",
      "Uranium mining"
    ],
    touristAttractions: [
      {
        name: "Sossusvlei",
        location: "Namib Desert",
        description: "A salt and clay pan surrounded by towering red sand dunes in the southern part of the Namib Desert. The area's iconic rust-colored dunes, some reaching over 300 meters high, are among the tallest in the world and were formed by sand carried by the Orange River to the Atlantic Ocean, then blown inland over millions of years. The most famous features include the surreal Dead Vlei with its ancient camel thorn trees standing on a white clay pan, and the massive 'Big Daddy' dune. The ever-changing colors at sunrise and sunset make this one of Africa's most photographed landscapes.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426559/sossusvlei_xakqqh.jpg"
      },
      {
        name: "Etosha National Park",
        location: "Northern Namibia",
        description: "One of Africa's greatest wildlife sanctuaries, centered around the vast Etosha Pan, a salt flat so large it can be seen from space. During the dry season, this shimmering white expanse draws diverse wildlife to scattered waterholes, creating exceptional game viewing opportunities. The park is home to four of the 'Big Five' (lion, leopard, elephant, and rhino) along with numerous other species including endemic black-faced impala and the endangered black rhino. The unique landscape transitions from dense bush to open plains, with floodlit waterholes at rest camps allowing for nighttime wildlife observation.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426560/etosha_national_park_bkf8uk.jpg"
      },
      {
        name: "Fish River Canyon",
        location: "Southern Namibia",
        description: "The largest canyon in Africa and second largest in the world after the Grand Canyon, stretching approximately 160 kilometers long, up to 27 kilometers wide, and 550 meters deep. Formed over 500 million years ago through a combination of earth movements, water erosion, and the collapse of the valley floor, the canyon offers breathtaking vistas of rugged landscape and the meandering Fish River below. The challenging 85-kilometer Fish River Hiking Trail is one of Africa's most famous treks, taking 4-5 days to complete through the canyon's ancient geological formations.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426560/Fish_River_Canyon_gbs2sx.jpg"
      },
      {
        name: "Skeleton Coast",
        location: "Northwestern Coast",
        description: "A hauntingly beautiful stretch of Atlantic coastline named for the numerous shipwrecks scattered along its shores, the victims of treacherous currents, thick fog, and shifting sandbanks. This remote wilderness area extends from the Swakop River to the Kunene River at the Angolan border, featuring towering sand dunes that meet the ocean, salt pans, and unusual geological formations. Despite its forbidding name and harsh conditions, the coast supports surprising biodiversity, including desert-adapted elephants, lions, and unique plant species. The northern section is one of Africa's most inaccessible areas, accessible only by fly-in safari.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426564/Skeleton_Coast_phpiyi.jpg"
      }
    ]
  },
  {
    id: 38,
    name: "Niger",
    slug: "niger",
    capital: "Niamey",
    population: 24206644,
    area: 1267000,
    currency: "West African CFA Franc (XOF)",
    flagUrl: "https://flagcdn.com/w320/ne.png",
    flagFact: "The Niger flag's orange disc represents the sun and Sahara Desert.",
    flagDescription: "Three horizontal stripes of orange, white, and green with orange disc in center.",
    funFact: "Niger is the largest country in West Africa and is mostly covered by the Sahara Desert.",
    regions: ["western", "sahara"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290071/Niamey_jvnbnn.jpg",
    languages: [
      { name: "French", percentage: 30 },
      { name: "Hausa", percentage: 55 },
      { name: "Other", percentage: 15 }
    ],
    geographicFacts: [
      "Sahara Desert",
      "Niger River",
      "Aïr Mountains",
      "Sahel region"
    ],
    economicFacts: [
      "Uranium mining",
      "Agricultural sector",
      "Livestock farming",
      "Growing tourism"
    ],
    touristAttractions: [
      {
        name: "Air and Ténéré Natural Reserves",
        location: "Northern Niger",
        description: "A UNESCO World Heritage site encompassing 7.7 million hectares of Saharan desert landscape, including the volcanic Aïr Mountains and the surrounding Ténéré Desert. This vast protected area features remarkable geological formations, sand dunes, and oases that support surprising biodiversity despite the harsh conditions. The reserves are home to endangered species such as addax antelope, Dama gazelle, and Barbary sheep, along with over 40 mammal species and 165 bird species. The area also contains archaeological sites with rock engravings dating back thousands of years, documenting the region's ancient human habitation.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426565/Air_and_T%C3%A9n%C3%A9r%C3%A9_Natural_Reserves_a5ts9i.jpg"
      },
      {
        name: "W National Park",
        location: "Southwestern Niger",
        description: "Part of the largest transboundary protected area in West Africa (shared with Benin and Burkina Faso), named for the W-shaped bends in the Niger River that form its boundaries. This UNESCO World Heritage site protects the most important continuum of terrestrial, semi-aquatic, and aquatic ecosystems in the West African savanna belt. The park is home to some of the last remaining populations of West African lions and elephants, along with buffalo, cheetahs, leopards, and numerous bird species. The diverse landscape includes woodlands, bush savannas, and gallery forests along the rivers.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426564/W_National_Par_twysl0.jpg"
      },
      {
        name: "Agadez Grand Mosque",
        location: "Agadez",
        description: "An iconic mud-brick structure in the historic center of Agadez, built in the 16th century and reconstructed in its current form in 1844. The mosque's most distinctive feature is its 27-meter minaret, the tallest mud-brick structure in the world, supported by 90 wooden toron (stakes) that protrude from the exterior walls and serve as both decoration and scaffolding for annual maintenance. The building exemplifies traditional Sudano-Sahelian architectural style and remains an active place of worship. The surrounding old town of Agadez is a UNESCO World Heritage site known for its earthen architecture.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426565/agadez_grand_mosque_rb9xvq.jpg"
      },
      {
        name: "Koure Giraffe Reserve",
        location: "Near Niamey",
        description: "Home to the last remaining population of West African giraffes (Giraffa camelopardalis peralta), a distinct subspecies that was on the brink of extinction with fewer than 50 individuals in the 1990s. Thanks to conservation efforts, the population has grown to over 600 giraffes that roam freely among local villages in a unique example of human-wildlife coexistence. Unlike other giraffe populations that inhabit savanna environments, these giraffes have adapted to the tiger bush habitat of thorny trees and shrubs. Visitors can take guided tours to observe these magnificent animals in their natural habitat, just 60 kilometers from Niger's capital.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426565/koure_giraffe_reserve_bqj9dm.jpg"
      }
    ]
  },
  {
    id: 39,
    name: "Nigeria",
    slug: "nigeria",
    capital: "Abuja",
    population: 206139589,
    area: 923768,
    currency: "Nigerian Naira (NGN)",
    flagUrl: "https://flagcdn.com/w320/ng.png",
    flagFact: "The Nigerian flag's green stripes represent agriculture and forests, while white represents peace.",
    flagDescription: "Three vertical stripes, green-white-green.",
    funFact: "Nigeria is Africa's most populous country and has the continent's largest economy.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290065/Abuja_c4l7zw.jpg",
    languages: [
      { name: "English", percentage: 60 },
      { name: "Hausa", percentage: 30 },
      { name: "Yoruba", percentage: 20 },
      { name: "Igbo", percentage: 18 }
    ],
    geographicFacts: [
      "Niger River Delta",
      "Tropical rainforests",
      "Savanna plains",
      "Coastal regions"
    ],
    economicFacts: [
      "Oil production",
      "Agricultural exports",
      "Technology sector",
      "Entertainment industry"
    ],
    touristAttractions: [
      {
        name: "Osun-Osogbo Sacred Grove",
        location: "Osun State",
        description: "A UNESCO World Heritage site and one of the last remaining sacred forests of the Yoruba people, containing shrines, sculptures, and sanctuaries dedicated to Osun, the Yoruba goddess of fertility. This dense forest along the Osun River has been preserved as a sacred site for centuries, with traditional religious practices still actively maintained. The grove features remarkable sculptures by Austrian artist Susanne Wenger (who became a Yoruba priestess) and her New Sacred Art movement, blending traditional and contemporary artistic expressions. The annual Osun-Osogbo Festival draws thousands of visitors and worshippers celebrating the covenant between the goddess and the people of Osogbo.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426565/Osun-Osogbo_Sacred_Grove_kvw0ll.jpg"
      },
      {
        name: "Yankari National Park",
        location: "Bauchi State",
        description: "Nigeria's premier wildlife reserve, covering 2,244 square kilometers of savanna woodland and home to one of West Africa's largest remaining elephant populations. The park protects numerous species including buffalo, waterbuck, roan antelope, and occasionally lions. A major attraction is the Wikki Warm Springs, natural springs maintaining a constant temperature of 31°C year-round, where visitors can swim in crystal-clear waters after game drives. The park also features ancient rock paintings and the Marshall Caves, a system of ancient dwelling places with historical and archaeological significance.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426565/Yankari_Game_Reserve_h9sv8j.jpg"
      },
      {
        name: "Lekki Conservation Centre",
        location: "Lagos",
        description: "An urban nature park established in 1990 to protect the coastal swamp forests of Lagos, providing a green oasis within Nigeria's largest city. The center features a 401-meter canopy walkway (one of the longest in Africa) suspended 22 meters above the forest floor, offering visitors panoramic views of the ecosystem below. Nature trails wind through diverse habitats including swamps, savanna grasslands, and secondary forests, home to monkeys, crocodiles, snakes, and numerous bird species. Educational displays explain the importance of conservation, making it both a recreational destination and an environmental education facility.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426565/lekki_conservation_centre_bz6ffg.jpg"
      },
      {
        name: "Idanre Hills",
        location: "Ondo State",
        description: "A spectacular landscape of mysterious valleys and granite hills rising about 3,000 feet above sea level, with a history dating back 800 years. The ancient Idanre settlement atop the hills was inhabited until 1928 when residents moved to the valley below, leaving behind a rich cultural landscape now on UNESCO's Tentative List. Visitors can climb 682 steps to explore the old settlement, which includes the first primary school in the area, the king's palace, ancient courtyards, and peculiar footprints said to belong to historical figures. The unique ecosystem supports rare flora and fauna, while the dramatic rock formations offer stunning views and challenging climbing opportunities.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426566/idanre_hills_zqfyi1.jpg"
      }
    ]
  },
  {
    id: 40,
    name: "Rwanda",
    slug: "rwanda",
    capital: "Kigali",
    population: 12952218,
    area: 26338,
    currency: "Rwandan Franc (RWF)",
    flagUrl: "https://flagcdn.com/w320/rw.png",
    flagFact: "The Rwandan flag's sun represents unity and enlightenment after the 1994 genocide.",
    flagDescription: "Three horizontal stripes of blue, yellow, and green with golden sun in upper right.",
    funFact: "Rwanda is known as the 'Land of a Thousand Hills' due to its mountainous terrain.",
    regions: ["eastern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290068/Kigali_ggd8jw.jpg",
    languages: [
      { name: "Kinyarwanda", percentage: 95 },
      { name: "English", percentage: 30 },
      { name: "French", percentage: 25 }
    ],
    geographicFacts: [
      "Mountainous terrain",
      "Volcanoes National Park",
      "Lake Kivu",
      "Rainforests"
    ],
    economicFacts: [
      "Coffee and tea exports",
      "Tourism industry",
      "Technology sector",
      "Mining"
    ],
    touristAttractions: [
      {
        name: "Volcanoes National Park",
        location: "Northern Province",
        description: "Part of the Virunga Conservation Area spanning Rwanda, Uganda, and the Democratic Republic of Congo, this park protects the Rwandan portion of the Virunga Mountains, home to endangered mountain gorillas. Made famous by the work of primatologist Dian Fossey, the park offers visitors the rare opportunity to trek through bamboo forests to observe gorilla families in their natural habitat. The park encompasses five volcanoes (Karisimbi, Bisoke, Muhabura, Gahinga, and Sabyinyo) and protects other endangered species including golden monkeys. Besides gorilla trekking, visitors can hike to Dian Fossey's grave, climb volcanoes, or visit the twin lakes of Burera and Ruhondo.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426566/Volcanoes_National_Park_jz6j57.jpg"
      },
      {
        name: "Lake Kivu",
        location: "Western Rwanda",
        description: "One of Africa's Great Lakes, forming part of the border between Rwanda and the Democratic Republic of Congo. This freshwater lake sits at an elevation of 1,460 meters and is surrounded by stunning mountainous landscapes and terraced hillsides. The lake contains high concentrations of dissolved methane gas, which Rwanda is harnessing as an energy source. Visitors can enjoy boat tours, kayaking, swimming (the lake is free of hippos and crocodiles), and relaxing at beach resorts in towns like Gisenyi, Kibuye, and Cyangugu. The lake's numerous islands, including Napoleon Island with its colony of fruit bats, offer additional exploration opportunities.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426570/lake_kivu_ormutq.jpg"
      },
      {
        name: "Nyungwe Forest National Park",
        location: "Southwestern Rwanda",
        description: "One of Africa's oldest and largest high-altitude rainforests, protecting over 1,000 plant species, 13 primate species, and 300 bird species. This pristine mountain rainforest features a 200-meter-long canopy walkway suspended 50 meters above the forest floor, offering spectacular views of the treetops and valleys. Visitors can trek to see chimpanzees and other primates including colobus monkeys, track rare birds, or hike to beautiful waterfalls. The forest plays a crucial ecological role as a water catchment for Rwanda and contains the source of the Nile's furthest headwaters. The park's biodiversity and scenic beauty make it a highlight of Rwanda's conservation success story.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426570/nyungwe_forest_national_park_j4aqlz.jpg"
      },
      {
        name: "Kigali Genocide Memorial",
        location: "Kigali",
        description: "A poignant memorial commemorating the 1994 Rwandan genocide in which over one million Tutsi and moderate Hutu were killed in just 100 days. The memorial serves as the final resting place for more than 250,000 victims and includes three permanent exhibitions: one documenting the genocide, another on the history of genocidal violence worldwide, and a children's memorial. Through photographs, artifacts, and personal testimonies, the site provides a powerful educational experience about Rwanda's tragic history and remarkable journey toward reconciliation and healing. The memorial's gardens offer spaces for reflection, while guided tours provide context and insights into Rwanda's transformation in the decades since the genocide.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426532/kigali_genocide_memorial_pm2op1.png"
      }
    ]
  },
  {
    id: 41,
    name: "São Tomé and Príncipe",
    slug: "sao-tome-and-principe",
    capital: "São Tomé",
    population: 219159,
    area: 964,
    currency: "São Tomé and Príncipe Dobra (STN)",
    flagUrl: "https://flagcdn.com/w320/st.png",
    flagFact: "The flag's stars represent the two main islands of the archipelago.",
    flagDescription: "Three horizontal stripes of green and yellow with red triangle at hoist containing two black stars.",
    funFact: "São Tomé and Príncipe is Africa's second-smallest country and consists of two main islands.",
    regions: ["central", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290071/S%C3%A3o_Tom%C3%A9_hy3yuu.jpg",
    languages: [
      { name: "Portuguese", percentage: 98 },
      { name: "Creole", percentage: 85 }
    ],
    geographicFacts: [
      "Volcanic islands",
      "Equatorial location",
      "Rainforests",
      "Coastal beaches"
    ],
    economicFacts: [
      "Cocoa production",
      "Tourism industry",
      "Fishing sector",
      "Palm oil exports"
    ],
    touristAttractions: [
      {
        name: "Obo National Park",
        location: "São Tomé and Príncipe Islands",
        description: "A vast protected area covering approximately 30% of the nation's territory across both main islands, preserving one of Africa's most important rainforest ecosystems. This UNESCO Biosphere Reserve features exceptional biodiversity with numerous endemic species that evolved in isolation, including 16 bird species found nowhere else on Earth. The park's diverse landscapes range from lowland forests to misty mountain peaks, including Pico de São Tomé which rises 2,024 meters above sea level. Visitors can explore hiking trails through pristine forests, discover hidden waterfalls, and observe rare wildlife including the São Tomé giant sunbird and the critically endangered São Tomé fiscal shrike.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426571/obo_national_park_ojef2d.jpg"
      },
      {
        name: "Pico Cão Grande",
        location: "Southern São Tomé",
        description: "A dramatic needle-shaped volcanic plug that rises approximately 370 meters above the surrounding terrain, creating one of Africa's most distinctive natural landmarks. This ancient volcanic remnant, shrouded in mist and covered with lush vegetation, towers over the landscape of southern São Tomé like a natural skyscraper. The peak is a challenging destination for expert rock climbers, while most visitors admire its otherworldly silhouette from viewpoints in the surrounding rainforest. The area around the peak is rich in biodiversity and offers excellent hiking opportunities through landscapes that have been compared to the fictional world of Jurassic Park.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426571/Pico_C%C3%A3o_Grande_vxhflw.jpg"
      },
      {
        name: "Bom Bom Island",
        location: "Northern Príncipe",
        description: "A small islet connected to Príncipe Island by a 230-meter wooden walkway, home to an eco-resort that exemplifies sustainable luxury tourism. This pristine location offers some of the archipelago's most beautiful beaches with crystal-clear waters ideal for swimming, snorkeling, and diving among vibrant coral reefs. The surrounding waters are part of the UNESCO Biosphere Reserve and provide opportunities to spot sea turtles, whales, and dolphins. The resort itself was built with minimal environmental impact and operates with sustainable practices, allowing visitors to experience the natural beauty of this remote paradise while supporting conservation efforts.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426571/Bom_Bom_Island_thxqum.jpg"
      },
      {
        name: "Jalé Beach",
        location: "Southern São Tomé",
        description: "One of the most pristine beaches in São Tomé, located in the remote southern region of the island where the rainforest meets the sea. This unspoiled stretch of golden sand is an important nesting site for several endangered sea turtle species, including leatherback, green, and olive ridley turtles. From November to February, visitors can participate in guided nighttime turtle watching tours to witness these ancient creatures laying their eggs or hatchlings making their way to the ocean. The beach's isolation has preserved its natural beauty, with excellent opportunities for swimming, surfing, and exploring nearby mangroves. Simple eco-lodges in the area offer an authentic experience close to nature.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426571/Jal%C3%A9_Beach_buixdc.jpg"
      }
    ]
  },
  {
    id: 42,
    name: "Senegal",
    slug: "senegal",
    capital: "Dakar",
    population: 16743927,
    area: 196722,
    currency: "West African CFA Franc (XOF)",
    flagUrl: "https://flagcdn.com/w320/sn.png",
    flagFact: "The Senegalese flag's star represents unity and progress.",
    flagDescription: "Three vertical stripes of green, yellow, and red with green star in center.",
    funFact: "Senegal's Pink Lake (Lake Retba) is one of only a few naturally pink lakes in the world.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290065/Dakar_lh8ry2.jpg",
    languages: [
      { name: "French", percentage: 30 },
      { name: "Wolof", percentage: 40 },
      { name: "Other local", percentage: 30 }
    ],
    geographicFacts: [
      "Atlantic coastline",
      "Sahel region",
      "Senegal River",
      "Diverse ecosystems"
    ],
    economicFacts: [
      "Phosphate mining",
      "Fishing industry",
      "Tourism sector",
      "Agricultural exports"
    ],
    touristAttractions: [
      {
        name: "Gorée Island",
        location: "Off Dakar Coast",
        description: "A small, car-free island that served as one of the largest slave-trading centers on the African coast from the 15th to the 19th century. Now a UNESCO World Heritage site, the island preserves the painful memory of the Atlantic slave trade through sites like the House of Slaves with its 'Door of No Return,' through which enslaved Africans took their final steps on African soil. Beyond its somber historical significance, the island features colorful colonial buildings, art galleries, and a vibrant community of artists. The peaceful atmosphere, absence of vehicles, and beautiful views of Dakar across the water make it both an educational and contemplative destination.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426571/Gor%C3%A9e_Island_vcatgr.jpg"
      },
      {
        name: "Djoudj National Bird Sanctuary",
        location: "Saint-Louis Region",
        description: "A wetland sanctuary comprising over 16,000 hectares in the Senegal River delta, serving as the first major oasis that migratory birds encounter after crossing the Sahara Desert. This UNESCO World Heritage site hosts approximately three million birds annually, including pelicans, flamingos, cormorants, and the magnificent African spoonbill. Visitors can take guided boat tours through the sanctuary's network of channels, lakes, and reed beds to observe vast colonies of birds in their natural habitat. The park also protects other wildlife including warthogs, jackals, and Nile monitors, making it one of the most important ecological sites in West Africa.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426572/Djoudj_National_Bird_Sanctuary_adv3uc.jpg"
      },
      {
        name: "Lake Retba (Pink Lake)",
        location: "Near Dakar",
        description: "A unique natural wonder known for its distinctive pink waters, caused by the Dunaliella salina algae that produces a red pigment to absorb sunlight. The lake's high salt content (up to 40% in some areas) allows these algae to thrive and creates conditions where people can float effortlessly on the surface. Local salt harvesters wade into the lake with baskets, collecting salt from the bottom in a traditional practice that has continued for generations. The striking contrast between the pink water, white salt mounds along the shores, and surrounding sand dunes creates a surreal landscape that has made this one of Senegal's most photographed natural attractions.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426572/Lake_Retba_Pink_Lake_wanawq.jpg"
      },
      {
        name: "African Renaissance Monument",
        location: "Dakar",
        description: "The tallest statue in Africa at 49 meters (160 feet), depicting a man, woman, and child emerging from a volcanic mountaintop, symbolizing Africa's emergence from centuries of oppression and looking toward a promising future. Completed in 2010 to commemorate Senegal's 50 years of independence, this bronze monument offers panoramic views of Dakar from its observation deck inside the man's head. Though controversial for its cost and North Korean construction, the monument has become an iconic landmark representing African pride and resilience. The site includes a museum explaining the monument's symbolism and the history of the African renaissance movement.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426576/African_Renaissance_Monument_n8nf2q.jpg"
      }
    ]
  },
  {
    id: 43,
    name: "Seychelles",
    slug: "seychelles",
    capital: "Victoria",
    population: 98347,
    area: 459,
    currency: "Seychellois Rupee (SCR)",
    flagUrl: "https://flagcdn.com/w320/sc.png",
    flagFact: "The Seychelles flag's oblique bands represent a dynamic new country moving forward into the future.",
    flagDescription: "Five oblique bands of blue, yellow, red, white, and green radiating from lower hoist.",
    funFact: "The Seychelles is home to the Aldabra giant tortoise, one of the largest tortoises in the world.",
    regions: ["eastern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290072/Victoria_fiq2fd.jpg",
    languages: [
      { name: "Seychellois Creole", percentage: 90 },
      { name: "English", percentage: 60 },
      { name: "French", percentage: 40 }
    ],
    geographicFacts: [
      "115 granite and coral islands",
      "Tropical climate",
      "Unique wildlife",
      "Beautiful beaches"
    ],
    economicFacts: [
      "Tourism industry",
      "Fishing sector",
      "Financial services",
      "Agricultural exports"
    ],
    touristAttractions: [
      {
        name: "Anse Source d'Argent",
        location: "La Digue Island",
        description: "Often cited as the most photographed beach in the world, this iconic shoreline is characterized by its unique granite boulders, powder-white sand, and crystal-clear turquoise waters. The massive, weathered granite rocks create a series of small, sheltered coves that offer calm, shallow waters perfect for swimming and snorkeling. The beach's otherworldly beauty has made it a favorite backdrop for fashion shoots, films, and commercials. Accessible through the historic L'Union Estate (a former coconut and vanilla plantation), visitors can combine beach time with cultural experiences including visiting a traditional copra mill and the plantation house.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426534/Anse_Source_d_Argent_ralmek.jpg"
      },
      {
        name: "Vallée de Mai",
        location: "Praslin Island",
        description: "A UNESCO World Heritage site often described as the 'Garden of Eden,' this pristine palm forest preserves the last substantial population of the legendary coco de mer palm, which produces the largest seed in the plant kingdom. The valley's ancient forest feels prehistoric, with a cathedral-like atmosphere created by the massive fronds of endemic palms filtering sunlight onto the forest floor. Besides the famous coco de mer, the forest harbors five other endemic palm species and rare wildlife including the Seychelles black parrot, blue pigeon, and bronze gecko. Well-maintained trails allow visitors to explore this remarkable ecosystem while learning about its unique flora and fauna.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426534/Vall%C3%A9e_de_Mai_gyjgw5.jpg"
      },
      {
        name: "Aldabra Atoll",
        location: "Outer Islands",
        description: "The world's second-largest coral atoll and a UNESCO World Heritage site, this remote and pristine ecosystem is often compared to the Galápagos for its ecological importance. The atoll is home to the largest population of giant tortoises in the world, with over 100,000 individuals roaming freely. The raised coral islands, mangrove forests, and lagoon ecosystems support remarkable biodiversity, including frigatebirds, flightless rails, and numerous marine species. Due to its isolation and protected status, Aldabra remains largely untouched by human influence, with strictly limited visitor numbers requiring special permits, making it one of the most exclusive and unspoiled natural wonders on the planet.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426532/aldabra_atoll_tknck7.jpg"
      },
      {
        name: "Morne Seychellois National Park",
        location: "Mahé Island",
        description: "Covering more than 20% of Mahé Island, this national park encompasses the highest peak in Seychelles, Morne Seychellois, which rises 905 meters above sea level. The park's diverse landscapes include misty mountain forests, mangrove swamps, and coastal zones, all connected by an extensive network of hiking trails ranging from easy walks to challenging mountain climbs. From various viewpoints, hikers can enjoy breathtaking panoramas of the island and surrounding ocean. The park protects important watersheds and numerous endemic plant and animal species, including the critically endangered Seychelles scops owl. Popular trails include the Morne Blanc, Trois Frères, and Copolia paths, each offering unique perspectives on the island's natural beauty.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426532/morne_seychellois_national_park_q4uyvm.jpg"
      }
    ]
  },
  {
    id: 44,
    name: "Sierra Leone",
    slug: "sierra-leone",
    capital: "Freetown",
    population: 7976983,
    area: 71740,
    currency: "Sierra Leonean Leone (SLL)",
    flagUrl: "https://flagcdn.com/w320/sl.png",
    flagFact: "The Sierra Leone flag's colors represent peace (green), justice (white), and unity (blue).",
    flagDescription: "Three horizontal stripes of green, white, and blue.",
    funFact: "Sierra Leone is home to the third-largest natural harbor in the world.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290067/Freetown_gzhzas.jpg",
    languages: [
      { name: "English", percentage: 30 },
      { name: "Krio", percentage: 95 },
      { name: "Other local", percentage: 60 }
    ],
    geographicFacts: [
      "Atlantic coastline",
      "Tropical rainforests",
      "Mountains",
      "Mangrove swamps"
    ],
    economicFacts: [
      "Diamond mining",
      "Agricultural exports",
      "Tourism potential",
      "Fishing industry"
    ],
    touristAttractions: [
      {
        name: "Tacugama Chimpanzee Sanctuary",
        location: "Western Area Peninsula",
        description: "A conservation center established in 1995 to rehabilitate orphaned and rescued chimpanzees, many of whom were victims of the illegal pet and bushmeat trades. Set within a lush rainforest reserve just outside Freetown, the sanctuary now houses over 100 chimpanzees in a series of large, naturalistic enclosures. Visitors can take guided tours to learn about chimpanzee behavior, conservation challenges, and the sanctuary's rehabilitation process. Beyond its primary mission of chimpanzee conservation, Tacugama has expanded its work to include environmental education, community development, and research. The sanctuary also offers eco-lodges where guests can stay overnight, surrounded by forest sounds and occasional chimpanzee calls.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426533/tacugama_chimpanzee_sanctuary_oygjit.jpg"
      },
      {
        name: "Bunce Island",
        location: "Sierra Leone River",
        description: "A small island that served as a British slave trading post from the late 17th century until the early 19th century, when the slave trade was abolished. The haunting ruins of the fortress, slave yards, and cannon emplacements remain as a powerful reminder of this tragic period in history. Located about 30 kilometers upriver from Freetown, the island was strategically positioned to ship enslaved Africans to North America, particularly to rice plantations in South Carolina and Georgia. Today, the site is an important historical monument and pilgrimage destination for African Americans tracing their ancestral roots. Guided tours explain the island's history and its significance in the transatlantic slave trade.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426534/Bunce_Island_c2otwd.jpg"
      },
      {
        name: "River No. 2 Beach",
        location: "Western Peninsula",
        description: "Widely considered one of West Africa's most beautiful beaches, featuring a stunning crescent of soft white sand framed by lush green mountains and the clear waters of the Atlantic Ocean. The beach is named after the river that flows into the ocean at this point, creating a unique landscape where freshwater meets saltwater. Unlike many tropical destinations, this beach remains relatively undeveloped, with a community-based tourism initiative ensuring that local residents benefit from visitor activities. Beachgoers can enjoy swimming in the protected bay, boat trips up the river to explore mangroves, fresh seafood prepared by local cooks, and various water sports including surfing during certain seasons.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426534/River_No._2_Beach_mi19oy.jpg"
      },
      {
        name: "Tiwai Island Wildlife Sanctuary",
        location: "Moa River",
        description: "A 12-square-kilometer island reserve in the Moa River that protects one of Sierra Leone's most diverse ecosystems and highest concentrations of primates. The island is home to 11 primate species, including the rare and endangered pygmy hippopotamus, Diana monkeys, and Campbell's monkeys. Over 135 bird species and numerous rare plants have been documented in this biodiversity hotspot. Visitors can stay in simple but comfortable accommodations while exploring the island's network of trails with knowledgeable local guides. Activities include guided forest walks, night safaris to spot nocturnal wildlife, boat trips around the island, and cultural visits to surrounding communities. The sanctuary is community-managed, with tourism revenues supporting both conservation and local development.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426536/Tiwai_Island_Wildlife_Sanctuary_tmht56.jpg"
      }
    ]
  },
  {
    id: 45,
    name: "Somalia",
    slug: "somalia",
    capital: "Mogadishu",
    population: 15893222,
    area: 637657,
    currency: "Somali Shilling (SOS)",
    flagUrl: "https://flagcdn.com/w320/so.png",
    flagFact: "The Somali flag's star represents the five regions where Somali people traditionally lived.",
    flagDescription: "Light blue field with white five-pointed star in center.",
    funFact: "Somalia has the longest coastline on mainland Africa.",
    regions: ["eastern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290070/Mogadishu_dqbyoq.jpg",
    languages: [
      { name: "Somali", percentage: 85 },
      { name: "Arabic", percentage: 15 }
    ],
    geographicFacts: [
      "Indian Ocean coastline",
      "Gulf of Aden coast",
      "Semi-arid terrain",
      "Two permanent rivers"
    ],
    economicFacts: [
      "Livestock exports",
      "Fishing industry",
      "Remittances",
      "Agricultural sector"
    ],
    touristAttractions: [
      {
        name: "Laas Geel Cave Paintings",
        location: "Somaliland",
        description: "One of Africa's most important and well-preserved rock art sites, discovered only in 2002 and estimated to be between 5,000 and 10,000 years old. The complex consists of about 20 rock shelters featuring remarkably vivid and colorful Neolithic paintings depicting wild animals, ceremonial scenes, and humans. The most striking images show cattle with distinctive curved horns, decorated with ceremonial robes, suggesting the animals' spiritual significance to the ancient pastoralists who created the artwork. The site's excellent preservation is attributed to the dry climate and remote location. Located about 50 kilometers from Hargeisa in the self-declared republic of Somaliland, the site offers a glimpse into the region's ancient cultural heritage.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426536/laas_geel_cave_paintings_qidepb.jpg"
      },
      {
        name: "Mogadishu Cathedral",
        location: "Mogadishu",
        description: "A striking example of Italian colonial architecture built in 1928 in the Norman Gothic style, once the largest cathedral in the Horn of Africa. The cathedral was severely damaged during the Somali Civil War but its impressive façade and much of the structure remain standing, serving as a poignant reminder of Somalia's complex history. The building features a distinctive twin-towered façade and was designed by Italian architect Antonio Vandone. Though no longer functioning as a place of worship, the cathedral stands as an important historical landmark in Mogadishu's old quarter. Efforts have been proposed to restore the building as part of Somalia's cultural heritage preservation initiatives.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426536/mogadishu_cathedral_jatswu.jpg"
      },
      {
        name: "Liido Beach",
        location: "Mogadishu",
        description: "A stunning stretch of white sand beach along the Indian Ocean that has become a symbol of Mogadishu's gradual recovery and resilience. Once a popular destination during Somalia's peaceful years before the civil war, Liido Beach has experienced a revival in recent years with local residents returning to enjoy its natural beauty. The beach features crystal-clear turquoise waters and soft white sand, with new restaurants, cafes, and facilities being developed along the shoreline. On Fridays and weekends, the beach comes alive with families, young people playing soccer, and vendors selling traditional foods and refreshments, offering a glimpse of normal life returning to the capital city.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426536/Liido_Beach_dson3o.jpg"
      },
      {
        name: "Zeila",
        location: "Northwestern Somalia",
        description: "An ancient port city with a history dating back to the 7th century when it was an important trading hub connecting Africa with Asia and the Middle East. Located in the self-declared republic of Somaliland near the border with Djibouti, Zeila contains fascinating ruins from various periods of its history, including Ottoman, Egyptian, and British colonial influences. The city's old quarter features coral stone buildings, narrow winding streets, and the remains of a historic mosque. Offshore, the Zeila Archipelago consists of several small coral islands with pristine beaches and rich marine life. The area's historical significance as part of ancient trade networks that connected the Horn of Africa with the Arabian Peninsula and beyond makes it an important archaeological site.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426535/Zeila_jruyx1.jpg"
      }
    ]
  },
  {
    id: 46,
    name: "South Africa",
    slug: "south-africa",
    capital: "Pretoria (administrative), Cape Town (legislative), Bloemfontein (judicial)",
    population: 59308690,
    area: 1219090,
    currency: "South African Rand (ZAR)",
    flagUrl: "https://flagcdn.com/w320/za.png",
    flagFact: "The South African flag's Y-shape represents the convergence of different cultures.",
    flagDescription: "Six colors in Y-pattern: red, blue, green, yellow, black, and white.",
    funFact: "South Africa is the only country in the world to have three capital cities.",
    regions: ["southern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747296454/Pretoria_aemtxi.jpg",
    languages: [
      { name: "English", percentage: 10 },
      { name: "Zulu", percentage: 23 },
      { name: "Xhosa", percentage: 16 },
      { name: "Afrikaans", percentage: 13 }
    ],
    geographicFacts: [
      "Two oceans meet at Cape Point",
      "Table Mountain",
      "Diverse landscapes",
      "Kruger National Park"
    ],
    economicFacts: [
      "Mining industry",
      "Manufacturing sector",
      "Tourism",
      "Agricultural exports"
    ],
    touristAttractions: [
      {
        name: "Table Mountain",
        location: "Cape Town",
        description: "A flat-topped mountain forming a dramatic backdrop to Cape Town and recognized as one of the New Seven Wonders of Nature. Rising 1,086 meters above sea level, this iconic landmark can be accessed via a rotating cable car that provides 360-degree views during the ascent, or by hiking up one of several trails of varying difficulty. The mountain's summit plateau stretches approximately 3 kilometers from side to side, offering spectacular panoramic views of Cape Town, Table Bay, and the Atlantic Ocean. The area is part of Table Mountain National Park and hosts an incredible diversity of plant species, many endemic to the Cape Floral Region, a UNESCO World Heritage site.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426535/table_mountain_taq9np.jpg"
      },
      {
        name: "Kruger National Park",
        location: "Northeastern South Africa",
        description: "One of Africa's largest and most renowned game reserves, covering nearly 20,000 square kilometers and offering an unrivaled wildlife experience. Established in 1898 to protect the wildlife of the South African Lowveld, the park is home to an impressive diversity of species including the 'Big Five' (lion, leopard, rhinoceros, elephant, and Cape buffalo) and over 500 bird species. Visitors can explore the park through self-drive safaris on an extensive network of roads, guided game drives, or walking safaris led by armed rangers. The park features various accommodation options from basic camping to luxury lodges, and its size encompasses several distinct ecosystems, from dense woodland to open savanna.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426535/kruger_national_park_og4l4r.jpg"
      },
      {
        name: "Robben Island",
        location: "Table Bay, Cape Town",
        description: "A UNESCO World Heritage site and former prison where Nelson Mandela spent 18 of his 27 years of imprisonment during apartheid. Located just 7 kilometers off the coast of Cape Town, this island has a complex history that includes use as a leper colony, mental hospital, and military base before becoming the maximum-security prison for political prisoners. Today, the island operates as a living museum with tours conducted by former political prisoners who share firsthand accounts of their experiences. Visitors reach the island via a 30-minute ferry ride from the V&A Waterfront and can see Mandela's cell, the limestone quarry where prisoners were forced to work, and other historical buildings that tell the story of South Africa's journey to democracy.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426535/robben_island_nk2ito.jpg"
      },
      {
        name: "Cape of Good Hope",
        location: "Cape Peninsula",
        description: "A rocky headland on the Atlantic coast of the Cape Peninsula, often mistakenly thought to be the southernmost point of Africa (which is actually Cape Agulhas). This dramatic promontory was a significant navigational landmark for sailors for centuries and features in maritime history as the 'Cape of Storms' before being renamed to reflect the optimism of finding a sea route to India. Now part of Table Mountain National Park, the area offers breathtaking coastal scenery with rugged cliffs, pristine beaches, and diverse flora and fauna including baboons, various antelope species, and ostriches. Visitors can take a funicular to the historic Cape Point lighthouse for spectacular views, hike along scenic trails, or visit the famous wooden sign marking this iconic geographical location.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426535/Cape_of_Good_Hope_s2zwcx.jpg"
      }
    ]
  },
  {
    id: 47,
    name: "South Sudan",
    slug: "south-sudan",
    capital: "Juba",
    population: 11193725,
    area: 644329,
    currency: "South Sudanese Pound (SSP)",
    flagUrl: "https://flagcdn.com/w320/ss.png",
    flagFact: "The South Sudan flag's colors represent black for the people, red for the blood of freedom fighters, green for land, white for peace, and blue for the Nile.",
    flagDescription: "Three horizontal stripes of black, red, and green, separated by white stripes, with blue triangle and gold star at hoist.",
    funFact: "South Sudan is the world's youngest country, gaining independence in 2011.",
    regions: ["eastern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290068/Juba_u3erbd.png",
    languages: [
      { name: "English", percentage: 30 },
      { name: "Arabic", percentage: 40 },
      { name: "Other local", percentage: 30 }
    ],
    geographicFacts: [
      "Nile River system",
      "Sudd wetlands",
      "Tropical forests",
      "Savanna grasslands"
    ],
    economicFacts: [
      "Oil production",
      "Agricultural potential",
      "Livestock farming",
      "Mining sector"
    ],
    touristAttractions: [
      {
        name: "Boma National Park",
        location: "Eastern South Sudan",
        description: "One of Africa's largest wildlife migration areas, covering approximately 22,800 square kilometers of vast grasslands and floodplains. The park is famous for hosting the second-largest wildlife migration in Africa, with an estimated 1.2 million white-eared kob, tiang antelope, and Mongalla gazelle moving through the area seasonally. This spectacular natural phenomenon rivals the Serengeti migration but remains largely unknown to international visitors. The park is also home to significant populations of elephants, giraffes, buffalo, and various predators. Despite challenges related to conservation and infrastructure, Boma represents one of East Africa's last great wilderness areas and a crucial habitat for numerous endangered species.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426532/boma_national_park_axezaq.png"
      },
      {
        name: "Bandingilo National Park",
        location: "Central South Sudan",
        description: "A protected area covering approximately 10,000 square kilometers that serves as another key site for the massive annual wildlife migration in South Sudan. The park's varied landscape of savanna, wetlands, and woodlands supports diverse wildlife including elephants, giraffes, lions, and numerous antelope species. During migration season, the plains fill with hundreds of thousands of white-eared kob and tiang antelope, creating one of Africa's most impressive wildlife spectacles. The Nile River flows through the park, adding to its ecological importance and scenic beauty. Though tourism infrastructure remains limited, the park represents an important conservation area in this young nation and offers tremendous potential for future wildlife tourism development.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426535/bandingilo_national_park_zwlpak.png"
      },
      {
        name: "Nimule National Park",
        location: "Southern South Sudan",
        description: "South Sudan's most accessible national park, located along the border with Uganda where the White Nile enters the country. Covering approximately 410 square kilometers, this relatively small park features diverse habitats including riverine forests, grasslands, and wetlands. The park is known for its population of elephants that move between South Sudan and Uganda, as well as hippos, crocodiles, and various antelope species. Nimule's proximity to the town of the same name and its location along the Nile make it more accessible than other protected areas in the country. Visitors can take boat trips on the Nile, offering opportunities to observe wildlife along the riverbanks and experience the powerful Fula Rapids.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426533/Nimule_National_Park_ubshje.jpg"
      },
      {
        name: "Southern National Park",
        location: "Southwestern South Sudan",
        description: "A vast protected area covering approximately 23,000 square kilometers of diverse habitats including wooded savanna, gallery forests, and floodplains. The park supports significant populations of elephant, buffalo, roan antelope, and various predators including lions and leopards. The Ibba River flows through the park, creating important water sources for wildlife and adding to the scenic landscape. Though remote and undeveloped in terms of tourism infrastructure, the park represents an important conservation area with tremendous biodiversity. The area's isolation has helped protect its wildlife during periods of conflict, making it one of the more intact ecosystems in the region and a potential future destination for adventurous eco-tourists seeking unspoiled wilderness experiences.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426533/South_sudan_southern_national_park_hc85zn.jpg"
      }
    ]
  },
  {
    id: 48,
    name: "Sudan",
    slug: "sudan",
    capital: "Khartoum",
    population: 43849260,
    area: 1861484,
    currency: "Sudanese Pound (SDG)",
    flagUrl: "https://flagcdn.com/w320/sd.png",
    flagFact: "The Sudanese flag's colors represent pan-Arab colors with the addition of green representing Islam.",
    flagDescription: "Three horizontal stripes of red, white, and black with green triangle at hoist.",
    funFact: "Sudan has more pyramids than Egypt, though they are smaller in size.",
    regions: ["northern", "sahara"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747296197/Khartoum_d11i9w.jpg",
    languages: [
      { name: "Arabic", percentage: 90 },
      { name: "English", percentage: 10 }
    ],
    geographicFacts: [
      "Nile River confluence",
      "Nubian Desert",
      "Red Sea coast",
      "Ancient pyramids"
    ],
    economicFacts: [
      "Agriculture sector",
      "Gold mining",
      "Oil production",
      "Livestock exports"
    ],
    touristAttractions: [
      {
        name: "Meroe Pyramids",
        location: "Northern Sudan",
        description: "A UNESCO World Heritage site featuring over 200 ancient pyramids built by the rulers of the Kingdom of Kush between 300 BCE and 300 CE. These distinctive steep-sided pyramids are smaller than their Egyptian counterparts but more numerous, with unique decorative elements reflecting Nubian architectural style. The pyramids served as royal tombs for the kings and queens of Meroe, an ancient city that was once the capital of the Kingdom of Kush. Set against the backdrop of desert sands, these remarkably preserved structures feature elaborate relief carvings depicting royal scenes, offerings to gods, and aspects of Kushite life. The site offers a glimpse into the powerful civilization that once rivaled Egypt and controlled vast territories along the Nile.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426537/meroe_pyramids_pxht82.jpg"
      },
      {
        name: "Dinder National Park",
        location: "Southeastern Sudan",
        description: "Sudan's largest national park, covering approximately 10,000 square kilometers along the Ethiopian border. This vast protected area encompasses diverse ecosystems including riverine forests, wetlands, and savanna woodlands that support a remarkable variety of wildlife. The park is home to over 27 large mammal species including lions, leopards, cheetahs, elephants, giraffes, and numerous antelope species. Dinder is particularly important for migratory species that move between Sudan and Ethiopia seasonally. The Dinder and Rahad rivers flow through the park, creating 'mayas' (oxbow lakes) that serve as critical water sources during the dry season and attract concentrations of wildlife, making them excellent locations for game viewing.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426532/dinder_national_park_k0bea9.png"
      },
      {
        name: "Sanganeb Marine National Park",
        location: "Red Sea",
        description: "A UNESCO World Heritage site protecting one of the most diverse coral reef ecosystems in the world. This marine park is centered around the Sanganeb Atoll, a coral structure rising from the depths of the Red Sea approximately 30 kilometers offshore from Port Sudan. The atoll features a distinctive lighthouse built by the British in 1958 that serves as a landmark for divers. The park's crystal-clear waters support over 300 species of coral and 1,000 species of fish, along with dolphins, manta rays, sharks, and sea turtles. The exceptional visibility (often exceeding 30 meters) and variety of dive sites ranging from shallow coral gardens to steep drop-offs make Sanganeb a world-class destination for diving and snorkeling enthusiasts.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426537/Sanganeb_Marine_National_Park_qhwhd5.jpg"
      },
      {
        name: "Nile Confluence (Khartoum)",
        location: "Khartoum",
        description: "The dramatic meeting point of the Blue Nile and White Nile rivers at Sudan's capital city, creating one of the most famous confluences in the world. This natural phenomenon is visible from several vantage points in Khartoum, with the most popular being Al-Mogran Family Park. The two rivers are distinctly different in color – the Blue Nile carries dark sediment from the Ethiopian highlands, while the White Nile's waters are lighter – creating a striking visual effect where they meet before continuing northward as the Main Nile. The confluence area features several bridges connecting Khartoum with its sister cities Omdurman and Bahri, offering different perspectives of this geographical landmark that has shaped Sudan's history and development.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426537/Nile_Confluence_Khartoum_spwnyq.jpg"
      }
    ]
  },
  {
    id: 49,
    name: "Tanzania",
    slug: "tanzania",
    capital: "Dodoma",
    population: 59734218,
    area: 945087,
    currency: "Tanzanian Shilling (TZS)",
    flagUrl: "https://flagcdn.com/w320/tz.png",
    flagFact: "The Tanzanian flag's diagonal stripes represent mineral wealth, while green represents agriculture and blue represents the ocean.",
    flagDescription: "Diagonal black stripe bordered by yellow stripes, dividing green and blue triangles.",
    funFact: "Tanzania is home to Mount Kilimanjaro, Africa's highest peak and the world's highest free-standing mountain.",
    regions: ["eastern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290066/Dodoma_vzjbkj.jpg",
    languages: [
      { name: "Swahili", percentage: 95 },
      { name: "English", percentage: 30 },
      { name: "Other local", percentage: 10 }
    ],
    geographicFacts: [
      "Mount Kilimanjaro",
      "Serengeti Plains",
      "Zanzibar Archipelago",
      "Great Lakes region"
    ],
    economicFacts: [
      "Tourism industry",
      "Mining sector",
      "Agricultural exports",
      "Natural gas reserves"
    ],
    touristAttractions: [
      {
        name: "Mount Kilimanjaro",
        location: "Northern Tanzania",
        description: "Africa's highest peak and the world's tallest free-standing mountain, rising 5,895 meters (19,341 feet) above sea level. This dormant volcano features three distinct volcanic cones: Kibo, Mawenzi, and Shira, with Uhuru Peak on Kibo being the highest point. Despite its proximity to the equator, the mountain's summit is covered with glaciers and snow, though these have diminished significantly due to climate change. Kilimanjaro attracts thousands of climbers annually who attempt to reach its summit via several established routes of varying difficulty. The mountain's slopes pass through five distinct ecological zones, from cultivated farmlands and rainforest to alpine desert and arctic summit, creating a remarkable journey through changing landscapes and biodiversity.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426537/Mount_Kilimanjaro_qlzmfg.jpg"
      },
      {
        name: "Serengeti National Park",
        location: "Northern Tanzania",
        description: "A UNESCO World Heritage site covering 14,750 square kilometers of savanna plains, renowned for hosting the largest terrestrial mammal migration on Earth. Each year, approximately 1.5 million wildebeest, 200,000 zebras, and 300,000 Thomson's gazelles make the circular journey through the Serengeti ecosystem in search of fresh grazing and water. This spectacular natural event, known as the Great Migration, includes dramatic river crossings where predators lie in wait. Beyond the migration, the park supports extraordinary biodiversity with over 500 bird species and high densities of predators including lions, leopards, cheetahs, and hyenas. The Serengeti's vast, open landscapes dotted with acacia trees and kopjes (rocky outcrops) epitomize the classic African safari experience.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426537/serengeti_national_park_wu6qlt.jpg"
      },
      {
        name: "Zanzibar Stone Town",
        location: "Zanzibar Archipelago",
        description: "The historic heart of Zanzibar City and a UNESCO World Heritage site, representing a unique blend of African, Arab, Indian, and European influences that have shaped this trading center over more than a millennium. The town's labyrinthine alleyways are lined with intricately carved wooden doors, balconies, and coral stone buildings that tell the story of its multicultural heritage. Significant landmarks include the Old Fort, the House of Wonders, the Sultan's Palace, and the former slave market. Stone Town remains a living community where traditional crafts continue alongside modern commerce. The area is also known for its vibrant food culture, with night markets at Forodhani Gardens offering local specialties and spices that reflect Zanzibar's historical role in the spice trade.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426537/zanzibar_stone_town_oiqlxn.jpg"
      },
      {
        name: "Ngorongoro Crater",
        location: "Northern Tanzania",
        description: "The world's largest intact volcanic caldera, formed when a massive volcano exploded and collapsed on itself two to three million years ago. This natural enclosure covers 260 square kilometers and has walls rising up to 600 meters high, creating a natural sanctuary for an extraordinary concentration of wildlife. The crater floor contains distinct habitats including grasslands, swamps, forests, and Lake Magadi, a soda lake that attracts flamingos. This diversity supports approximately 25,000 large animals, including one of Africa's densest populations of lions and endangered black rhinos. The crater is part of the larger Ngorongoro Conservation Area, a UNESCO World Heritage site that uniquely allows wildlife conservation to coexist with traditional Maasai pastoralism.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426538/Ngorongoro_Crater_cft7hl.jpg"
      }
    ]
  },
  {
    id: 50,
    name: "Togo",
    slug: "togo",
    capital: "Lomé",
    population: 8278724,
    area: 56785,
    currency: "West African CFA Franc (XOF)",
    flagUrl: "https://flagcdn.com/w320/tg.png",
    flagFact: "The Togolese flag's star represents hope and independence.",
    flagDescription: "Five horizontal stripes alternating green and yellow with red canton containing white star.",
    funFact: "Togo is one of the smallest countries in Africa but has one of the largest phosphate deposits in the world.",
    regions: ["western", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290069/Lom%C3%A9_zcrxjk.jpg",
    languages: [
      { name: "French", percentage: 40 },
      { name: "Ewe", percentage: 30 },
      { name: "Kabiye", percentage: 25 },
      { name: "Other", percentage: 5 }
    ],
    geographicFacts: [
      "Atlantic coastline",
      "Togo Mountains",
      "Savanna regions",
      "Lake Togo"
    ],
    economicFacts: [
      "Phosphate mining",
      "Agricultural exports",
      "Port facilities",
      "Growing tourism"
    ],
    touristAttractions: [
      {
        name: "Koutammakou",
        location: "Kara Region",
        description: "A UNESCO World Heritage site and home to the Batammariba people, known for their remarkable mud tower-houses called 'takienta.' These unique two-story fortified dwellings, made of clay and straw, represent both practical architecture and profound cultural symbolism, with different sections representing the relationship between the living and ancestors. The cultural landscape extends beyond the distinctive buildings to include agricultural practices, sacred forests, and initiation sites that have maintained their cultural integrity for centuries. Visitors can explore several villages in the region, learn about traditional customs, and witness a way of life that has remained largely unchanged despite outside influences.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426538/Koutammakou_adgxlp.jpg"
      },
      {
        name: "Lake Togo",
        location: "Maritime Region",
        description: "A shallow saltwater lagoon near the capital city of Lomé, offering a peaceful retreat from urban life. The lake is surrounded by small villages where traditional fishing methods are still practiced, and visitors can take boat trips to explore the lake's calm waters and observe local life along its shores. The area is known for its voodoo culture, with several sacred sites and occasional ceremonies that visitors may be permitted to witness. Popular activities include swimming, kayaking, and dining at lakeside restaurants serving fresh fish and local specialties. The nearby village of Togoville, accessible by boat, has historical significance as the location where the treaty establishing the German protectorate of Togo was signed in 1884.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426538/Lake_Togo_vgqvpf.jpg"
      },
      {
        name: "Fazao-Malfakassa National Park",
        location: "Central Togo",
        description: "Togo's largest protected area, covering approximately 1,920 square kilometers of diverse landscapes including mountains, valleys, and savanna woodlands. The park is home to various wildlife species including elephants, buffalo, antelopes, monkeys, and numerous bird species, though populations have declined due to poaching and habitat encroachment. The Fazao Mountains within the park offer spectacular scenery and hiking opportunities, with trails leading to viewpoints overlooking the surrounding countryside. The park represents an important conservation effort in a country with limited protected areas and serves as a refuge for wildlife in the region. Visitors can arrange guided tours through the park administration or tour operators based in nearby towns.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426539/Fazao-Malfakassa_National_Park_giivzk.jpg"
      },
      {
        name: "Lomé Grand Market",
        location: "Lomé",
        description: "A vibrant commercial hub in Togo's capital city where hundreds of vendors sell everything from fresh produce and spices to textiles, crafts, and traditional medicines. The market is particularly famous for its 'Nana Benz' – successful female cloth merchants who traditionally drove Mercedes-Benz cars as symbols of their prosperity. Visitors can explore the labyrinthine alleys filled with colorful displays of West African fabrics, handcrafted jewelry, wooden sculptures, and local food products. The market provides insight into daily Togolese life and commerce while offering opportunities to purchase authentic souvenirs. The nearby Fetish Market (Marché des Féticheurs) specializes in traditional voodoo items including herbs, animal parts, and ceremonial objects used in traditional religious practices.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426542/Lom%C3%A9_Grand_Market_l3vc7r.jpg"
      }
    ]
  },
  {
    id: 51,
    name: "Tunisia",
    slug: "tunisia",
    capital: "Tunis",
    population: 11818619,
    area: 163610,
    currency: "Tunisian Dinar (TND)",
    flagUrl: "https://flagcdn.com/w320/tn.png",
    flagFact: "The Tunisian flag features a crescent moon and star, traditional symbols of Islam.",
    flagDescription: "Red field with white circle containing red crescent and star.",
    funFact: "Tunisia's ancient city of Carthage was once one of the most powerful cities in the ancient world.",
    regions: ["northern", "coastal"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290072/Tunis_tzmgyz.jpg",
    languages: [
      { name: "Arabic", percentage: 98 },
      { name: "French", percentage: 60 }
    ],
    geographicFacts: [
      "Mediterranean coastline",
      "Sahara Desert",
      "Atlas Mountains",
      "Ancient ruins"
    ],
    economicFacts: [
      "Tourism industry",
      "Agricultural exports",
      "Phosphate mining",
      "Manufacturing sector"
    ],
    touristAttractions: [
      {
        name: "Amphitheatre of El Jem",
        location: "El Jem",
        description: "A UNESCO World Heritage site and one of the most impressive Roman amphitheaters in the world, built around 238 CE when the area was part of the Roman province of Africa. This massive structure could seat up to 35,000 spectators and is remarkably well-preserved, with much of its three-story exterior wall and interior arches still intact. The amphitheater's design is similar to Rome's Colosseum but with a more oval shape and unique architectural elements. Visitors can explore the underground chambers where gladiators and animals were kept before contests, walk through the corridors once used by spectators, and climb to the upper tiers for panoramic views of the surrounding town. The site regularly hosts cultural events and concerts, taking advantage of its excellent acoustics.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426542/amphitheatre_of_el_jem_mpsoi3.jpg"
      },
      {
        name: "Medina of Tunis",
        location: "Tunis",
        description: "A UNESCO World Heritage site dating back to the 7th century, this historic walled city contains over 700 monuments from the Almohad and Hafsid periods. The labyrinthine network of narrow streets and alleyways is home to bustling souks (markets) selling everything from spices and perfumes to traditional crafts and carpets. Key landmarks include the 9th-century Ez-Zitouna Mosque (Great Mosque), numerous madrasas (Islamic schools), palaces, and hammams (traditional bathhouses). The medina's architecture features distinctive elements including ornate doorways, central courtyards, and decorative tilework. Despite modernization in other parts of Tunis, the medina remains a living community where traditional crafts and commerce continue alongside residential life, offering visitors an authentic glimpse into Tunisia's cultural heritage.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426543/Medina_old_Town_of_Tunis_hdjkjl.jpg"
      },
      {
        name: "Dougga",
        location: "Northern Tunisia",
        description: "The best-preserved Roman city in North Africa and a UNESCO World Heritage site, showcasing remarkable urban planning and architectural achievements from the 2nd and 3rd centuries CE. Spread across 65 hectares on a hillside, the archaeological site features impressive public buildings including a well-preserved Capitol (temple dedicated to Jupiter, Juno, and Minerva), theater, multiple bath complexes, and the unique Square of the Winds. The site also contains pre-Roman Numidian structures and Punic-Libyan mausoleums, reflecting the area's diverse cultural influences. Visitors can walk along ancient paved streets past the remains of homes, markets, and temples, gaining insight into daily life in a prosperous Roman provincial town. The elevated location offers spectacular views of the surrounding countryside and agricultural plains that once supported the city.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426543/Dougga_kyo80k.jpg"
      },
      {
        name: "Sidi Bou Said",
        location: "Near Tunis",
        description: "A picturesque clifftop village overlooking the Mediterranean Sea, famous for its distinctive blue and white architecture that has inspired artists and writers for generations. Named after a 13th-century Sufi saint whose tomb is located in the village, Sidi Bou Said became a bohemian haven in the early 20th century, attracting figures like Paul Klee, August Macke, and André Gide. The village's narrow cobblestone streets are lined with whitewashed buildings adorned with blue doors and window frames, ornate wrought-iron window grilles, and colorful bougainvillea. Visitors can explore artisan shops, enjoy traditional mint tea with pine nuts at clifftop cafés, and visit the Dar Ennejma Ezzhara palace-museum, which houses an impressive collection of traditional artifacts. The village offers spectacular panoramic views of the Gulf of Tunis and nearby Carthage.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426543/sidi_bou_said_rtwrph.jpg"
      }
    ]
  },
  {
    id: 52,
    name: "Uganda",
    slug: "uganda",
    capital: "Kampala",
    population: 45741007,
    area: 241550,
    currency: "Ugandan Shilling (UGX)",
    flagUrl: "https://flagcdn.com/w320/ug.png",
    flagFact: "The Ugandan flag features a crested crane, the national bird of Uganda.",
    flagDescription: "Six horizontal stripes of black, yellow, and red, with crested crane in white circle at center.",
    funFact: "Uganda is one of the few countries in the world where you can see mountain gorillas in their natural habitat.",
    regions: ["eastern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290068/Kampala_dt2q7c.jpg",
    languages: [
      { name: "English", percentage: 40 },
      { name: "Swahili", percentage: 30 },
      { name: "Luganda", percentage: 20 },
      { name: "Other", percentage: 10 }
    ],
    geographicFacts: [
      "Source of the Nile",
      "Lake Victoria",
      "Rwenzori Mountains",
      "Tropical forests"
    ],
    economicFacts: [
      "Coffee exports",
      "Tourism industry",
      "Agricultural sector",
      "Oil reserves"
    ],
    touristAttractions: [
      {
        name: "Bwindi Impenetrable Forest",
        location: "Southwestern Uganda",
        description: "A UNESCO World Heritage site and one of Africa's most ancient rainforests, dating back over 25,000 years and covering 331 square kilometers of steep mountains and deep valleys. The forest is home to approximately half of the world's remaining mountain gorillas, with several habituated families that visitors can trek to observe in their natural habitat. Beyond the iconic gorillas, the forest supports extraordinary biodiversity including 120 mammal species, 348 bird species, 220 butterfly species, and over 1,000 flowering plant species. The challenging terrain that gives the forest its 'impenetrable' name creates diverse microhabitats and has helped preserve this ecosystem despite surrounding human pressure. Community-based tourism initiatives benefit local villages while supporting conservation efforts in this critical habitat.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426543/Bwindi_Impenetrable_Forest_qxs5dy.jpg"
      },
      {
        name: "Murchison Falls",
        location: "Northwestern Uganda",
        description: "The centerpiece of Uganda's largest and oldest conservation area, where the mighty Nile River forces its way through a narrow 7-meter gap in the Rift Valley escarpment, dropping 43 meters with tremendous force. This spectacular waterfall creates a permanent rainbow and can be viewed from both above and below through boat safaris and hiking trails. The surrounding Murchison Falls National Park protects diverse savanna and riverine habitats supporting elephants, giraffes, buffaloes, hippos, crocodiles, and over 450 bird species. The park has historical significance as the site where Ernest Hemingway survived two plane crashes in 1954 while on safari. Visitors can explore the park through game drives, boat cruises to the base of the falls, chimpanzee tracking in Budongo Forest, and cultural experiences with local communities.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426543/Murchison_Falls_o1rmnw.jpg"
      },
      {
        name: "Queen Elizabeth National Park",
        location: "Western Uganda",
        description: "Uganda's most popular safari destination, spanning nearly 2,000 square kilometers across the Albertine Rift Valley. The park's diverse ecosystems include savanna grasslands, tropical forests, wetlands, and volcanic features, supporting extraordinary biodiversity including 95 mammal species and over 600 bird species – one of the highest in Africa. The park is famous for its tree-climbing lions in the Ishasha sector, a rare behavior seen in only a few lion populations worldwide. Other highlights include boat safaris on the Kazinga Channel, where visitors can observe large concentrations of hippos, elephants, and waterbirds; the volcanic crater lakes of the Katwe area; and chimpanzee tracking in Kyambura Gorge, a dramatic 'underground forest' within a deep river valley cutting through the savanna.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426544/queen_elizabeth_national_park_lsgwqw.jpg"
      },
      {
        name: "Source of the Nile",
        location: "Jinja",
        description: "The historic site where the world's longest river begins its 6,650-kilometer journey to the Mediterranean Sea, flowing out of Lake Victoria. This sacred spot was identified by British explorer John Hanning Speke in 1862, ending centuries of speculation about the Nile's origin. Today, visitors can stand at the exact point where the river leaves the lake, marked by a monument honoring Speke's discovery. The area has developed into an adventure tourism hub offering white-water rafting, kayaking, bungee jumping, and boat cruises. The source has spiritual significance for local communities, with traditional beliefs holding that the site possesses healing powers and is home to spirits. The surrounding gardens provide a peaceful setting for contemplating the river that has shaped the history and development of multiple civilizations throughout history.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747427160/Source_of_the_Nile_c8r1ut.jpg"
      }
    ]
  },
  {
    id: 53,
    name: "Zambia",
    slug: "zambia",
    capital: "Lusaka",
    population: 18383955,
    area: 752618,
    currency: "Zambian Kwacha (ZMW)",
    flagUrl: "https://flagcdn.com/w320/zm.png",
    flagFact: "The Zambian flag's eagle represents the people's ability to rise above national challenges.",
    flagDescription: "Green field with orange eagle over vertical stripes of red, black, and orange at fly.",
    funFact: "Zambia shares Victoria Falls, one of the Seven Natural Wonders of the World, with Zimbabwe.",
    regions: ["southern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290069/Lusaka_o03wnm.jpg",
    languages: [
      { name: "English", percentage: 50 },
      { name: "Nyanja", percentage: 20 },
      { name: "Bemba", percentage: 30 }
    ],
    geographicFacts: [
      "Victoria Falls",
      "Zambezi River",
      "Savanna grasslands",
      "Copper Belt region"
    ],
    economicFacts: [
      "Copper mining",
      "Tourism industry",
      "Agricultural sector",
      "Hydroelectric power"
    ],
    touristAttractions: [
      {
        name: "Victoria Falls",
        location: "Southern Province",
        description: "One of the Seven Natural Wonders of the World and a UNESCO World Heritage site, locally known as 'Mosi-oa-Tunya' (The Smoke That Thunders). This spectacular waterfall on the Zambezi River forms the border between Zambia and Zimbabwe, with a width of 1,708 meters and a height of 108 meters, creating the world's largest sheet of falling water. During the rainy season (February to May), over 500 million liters of water plunge over the edge every minute, creating a spray visible from 50 kilometers away. The Zambian side offers unique experiences including swimming in the Devil's Pool, a natural infinity pool at the edge of the falls (during low water season), and the Knife-Edge Bridge providing face-to-face encounters with the thundering water. The surrounding rainforest ecosystem, sustained by the falls' spray, supports unique plant and animal species.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426544/Victoria_Falls_vqp3yc.jpg"
      },
      {
        name: "South Luangwa National Park",
        location: "Eastern Province",
        description: "Often called one of Africa's greatest wildlife sanctuaries, covering 9,050 square kilometers of unspoiled wilderness in the Luangwa Valley. The park is renowned for its walking safaris, pioneered here in the 1950s and offering an intimate, immersive way to experience the African bush with expert guides. The Luangwa River, a major tributary of the Zambezi, forms the park's eastern boundary and supports dense concentrations of wildlife, particularly during the dry season when animals gather at the shrinking water sources. The park is famous for its leopard population, one of Africa's highest, along with large herds of elephants, endemic Thornicroft's giraffes, and over 400 bird species. Unique features include 'dambos' (seasonal wetlands) and oxbow lagoons that create diverse habitats supporting the park's extraordinary biodiversity.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426544/south_luangwa_national_park_sehtk1.jpg"
      },
      {
        name: "Lower Zambezi National Park",
        location: "Southern Zambia",
        description: "A relatively undeveloped wilderness area situated opposite Zimbabwe's Mana Pools Reserve, creating a vast transfrontier conservation area along the mighty Zambezi River. The park covers 4,092 square kilometers, with most of its game concentrated along the valley floor adjacent to the river. The dramatic landscape features a steep escarpment as backdrop, lush riverine vegetation, and numerous islands and channels in the river itself. The park offers exceptional water-based safari activities including canoeing safaris, where visitors can silently drift past bathing elephants and drinking wildlife. Fishing for the legendary tiger fish is another popular activity. The park supports healthy populations of lion, leopard, elephant, buffalo, and numerous antelope species, with the river adding hippos, crocodiles, and over 350 bird species to the biodiversity mix.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426544/lower_zambezi_national_park_sun9wj.jpg"
      },
      {
        name: "Kafue National Park",
        location: "Western Zambia",
        description: "Zambia's oldest and largest national park, covering an enormous 22,400 square kilometers of diverse landscapes including the vast Busanga Plains, miombo woodland, and riverine forests along the Kafue River. Established in 1924, the park remains one of Africa's wildest and most unspoiled wilderness areas despite being just a few hours' drive from Lusaka. The northern Busanga Plains flood seasonally, creating a paradise for large herds of red lechwe antelope and predators including the park's famous tree-climbing lions. The park is particularly noted for its diversity of antelope species, including rare sitatunga, roan, and sable. The Kafue River and its tributaries offer excellent fishing opportunities and boat safaris, while the park's relatively low visitor numbers provide a genuine wilderness experience away from the crowds found in more famous safari destinations.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426546/kafue_national_park_ngfbno.jpg"
      }
    ]
  },
  {
    id: 54,
    name: "Zimbabwe",
    slug: "zimbabwe",
    capital: "Harare",
    population: 14862924,
    area: 390757,
    currency: "US Dollar (USD), RTGS Dollar",
    flagUrl: "https://flagcdn.com/w320/zw.png",
    flagFact: "The Zimbabwean flag features the Zimbabwe Bird, a national symbol found in ancient ruins.",
    flagDescription: "Seven horizontal stripes of green, yellow, red, and black with white triangle containing red star and Zimbabwe Bird.",
    funFact: "The Great Zimbabwe ruins are the largest ancient structures in sub-Saharan Africa.",
    regions: ["southern"],
    capitalImageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747290067/Harare_bvxfr2.jpg",
    languages: [
      { name: "English", percentage: 40 },
      { name: "Shona", percentage: 70 },
      { name: "Ndebele", percentage: 20 }
    ],
    geographicFacts: [
      "Victoria Falls",
      "Great Zimbabwe ruins",
      "Eastern Highlands",
      "Zambezi River"
    ],
    economicFacts: [
      "Mining sector",
      "Tourism industry",
      "Agricultural exports",
      "Manufacturing"
    ],
    touristAttractions: [
      {
        name: "Victoria Falls",
        location: "Northwestern Zimbabwe",
        description: "Known locally as 'Mosi-oa-Tunya' (The Smoke That Thunders), this UNESCO World Heritage site is one of the world's most spectacular waterfalls. The Zimbabwean side offers the most comprehensive views, with 16 viewpoints along a walking trail through rainforest that provides face-to-face encounters with the 1.7-kilometer-wide curtain of falling water. During peak flow (February to May), over 500 million liters of water cascade over the 108-meter drop every minute, creating a thunderous roar and spray that can rise 400 meters into the air. The colonial-era Victoria Falls Bridge, connecting Zimbabwe and Zambia, offers additional perspectives and bungee jumping opportunities. The nearby town of Victoria Falls serves as a tourism hub with accommodations ranging from backpacker hostels to luxury lodges.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426544/Victoria_Falls_vqp3yc.jpg"
      },
      {
        name: "Great Zimbabwe Ruins",
        location: "Masvingo Province",
        description: "The largest ancient stone structure in sub-Saharan Africa and a UNESCO World Heritage site, built between the 11th and 15th centuries by the ancestors of the Shona people. This massive complex of stone walls, monuments, and towers was the capital of the Kingdom of Great Zimbabwe, which controlled the gold trade with the Swahili coast. The site covers 722 hectares and features three main areas: the Hill Complex (likely a royal residence), the Great Enclosure with its impressive 11-meter-high walls (the largest ancient structure in sub-Saharan Africa), and the Valley Ruins (residential areas). The sophisticated dry-stone construction techniques used without mortar demonstrate remarkable engineering skills. The site gave Zimbabwe its name after independence and remains a powerful symbol of pre-colonial African achievement and cultural heritage.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426548/Great_Zimbabwe_Ruins_axtczd.jpg"
      },
      {
        name: "Mana Pools National Park",
        location: "Northern Zimbabwe",
        description: "A UNESCO World Heritage site renowned for its exceptional natural beauty and wildlife viewing opportunities. The name 'Mana' means 'four' in the local Shona language, referring to the four main pools (remnant ox-bow lakes) that form along the Zambezi River's southern bank. During the dry season, these permanent water sources attract dense concentrations of wildlife, creating one of Africa's most spectacular natural settings. The park is famous for allowing walking safaris without guides (though accompanied walks are recommended), offering adventurous visitors unique, up-close wildlife encounters. Mana Pools is particularly known for its large populations of elephants, many of which have developed the unusual behavior of standing on their hind legs to reach acacia pods in tall trees. The park's floodplains, bordered by forests of mahogany, wild figs, and baobabs, support diverse wildlife including lions, leopards, wild dogs, and over 350 bird species.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426548/mana_pools_national_park_hx2pes.jpg"
      },
      {
        name: "Hwange National Park",
        location: "Western Zimbabwe",
        description: "Zimbabwe's largest national park, covering approximately 14,650 square kilometers of diverse landscapes ranging from the semi-arid scrub and Kalahari sands in the south to teak forests and mopane woodland in the north. The park is famous for its elephant population, one of Africa's largest with numbers exceeding 40,000 during the dry season when they concentrate around artificially maintained waterholes. These waterholes, originally created to compensate for the park's lack of natural water sources, now provide exceptional wildlife viewing opportunities as diverse species gather to drink. Hwange supports over 100 mammal species, including all of Zimbabwe's specially protected animals, and more than 400 bird species. The park's relatively flat terrain and network of roads make it ideal for self-drive safaris, while its proximity to Victoria Falls makes it a popular addition to itineraries visiting the famous waterfall.",
        imageUrl: "https://res.cloudinary.com/doxgry3tq/image/upload/v1747426549/Hwange_National_Park_i62ltp.jpg"
      }
    ]
  }
];