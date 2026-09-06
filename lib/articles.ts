export type ArticleCategory = "Technology" | "Science";

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type DeeperLink = {
  title: string;
  url: string;
  source: string;
};

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  icon: string;
  description: string;
  readTime: string;
  content: ArticleSection[];
  deeperLinks: DeeperLink[];
};

export const articles: Article[] = [
  {
    slug: "phone-numbers",
    title: "Why Do Phone Numbers Have 10 Digits?",
    category: "Technology",
    icon: "📱",
    description: "A phone number is a tiny address in a much larger communication system.",
    readTime: "4 min read",
    content: [
      { heading: "A number with a job", paragraphs: ["Phone numbers are not just identifiers for people. They are addresses that help a network decide where to send a call or message.", "The familiar ten-digit pattern used in North America combines an area code with a local number, giving the system enough combinations for many communities."] },
      { heading: "Why ten?", paragraphs: ["With ten choices for each digit, a ten-digit string can represent ten billion combinations before special rules and reserved numbers are removed.", "The exact format varies around the world. Countries choose numbering plans based on population, geography, existing infrastructure, and future growth."] },
      { heading: "The bigger picture", paragraphs: ["When you dial, the network reads the number in pieces. Prefixes guide the call toward a region or service, while the remaining digits identify the destination.", "That layered design keeps a global system understandable to machines and practical for people."] }
    ],
    deeperLinks: [
      { title: "International numbering resources", url: "https://www.itu.int/en/ITU-T/inr/Pages/default.aspx", source: "International Telecommunication Union" },
      { title: "The North American Numbering Plan", url: "https://www.nationalnanpa.com/about_us/", source: "NANPA" }
    ]
  },
  {
    slug: "voice-recording",
    title: "Why Does Your Voice Sound Different in a Recording?",
    category: "Science",
    icon: "🗣️",
    description: "The voice in your head reaches your ears through two routes, not one.",
    readTime: "3 min read",
    content: [
      { heading: "Two paths for sound", paragraphs: ["When you speak, sound travels through the air into your ears. At the same time, vibrations from your vocal cords travel through the bones and tissues of your head.", "That second route, called bone conduction, adds a deeper quality to the voice you hear while talking."] },
      { heading: "What a recording captures", paragraphs: ["A microphone mainly hears the pressure changes moving through the air. It does not capture the vibrations traveling through your skull in the same way.", "Playback therefore sounds brighter or higher to you than your familiar internal version, even though it is closer to what everyone else hears."] },
      { heading: "A useful illusion", paragraphs: ["Neither version is fake. They are two perspectives on the same sound, shaped by the route it takes to your ears.", "The surprise fades once you remember that hearing is not only about a source; it is also about the path between the source and your brain."] }
    ],
    deeperLinks: [
      { title: "How do we hear?", url: "https://www.nidcd.nih.gov/health/how-do-we-hear", source: "NIDCD" },
      { title: "Sound and hearing", url: "https://www.britannica.com/science/sound-physics", source: "Encyclopaedia Britannica" }
    ]
  },
  {
    slug: "popcorn",
    title: "Why Does Popcorn Suddenly Pop?",
    category: "Science",
    icon: "🍿",
    description: "A small pocket of water turns a hard kernel into a fluffy snack.",
    readTime: "3 min read",
    content: [
      { heading: "A sealed little system", paragraphs: ["Every popcorn kernel contains a small amount of water surrounded by a hard outer shell and a starchy interior.", "The shell is strong enough to hold pressure, which makes the kernel behave a bit like a tiny pressure vessel."] },
      { heading: "Heat builds pressure", paragraphs: ["As the kernel heats up, the water turns into steam. Steam takes far more space than liquid water, so pressure rises inside the shell.", "At roughly 180 degrees Celsius, the shell can no longer contain the pressure and cracks open."] },
      { heading: "The dramatic expansion", paragraphs: ["The softened starch expands rapidly as the pressure drops. It cools into the familiar white shape while the shell becomes the small hull left behind.", "The pop is a sudden change from a sealed, pressurized interior to open air."] }
    ],
    deeperLinks: [
      { title: "Why does popcorn pop?", url: "https://www.loc.gov/everyday-mysteries/food-and-nutrition/item/why-does-popcorn-pop/", source: "Library of Congress" },
      { title: "The science of popcorn", url: "https://www.scientificamerican.com/article/why-does-popcorn-pop/", source: "Scientific American" }
    ]
  },
  {
    slug: "qr-codes",
    title: "How Does a QR Scanner Know What It's Looking At?",
    category: "Technology",
    icon: "▦",
    description: "Those black and white squares are a carefully engineered visual language.",
    readTime: "4 min read",
    content: [
      { heading: "Finding the pattern", paragraphs: ["A scanner first looks for the three large square markers near the corners of a QR code. Their distinctive shape helps the camera locate the code and estimate its orientation.", "The surrounding quiet zone gives the pattern a visual boundary so it can stand apart from its background."] },
      { heading: "From squares to data", paragraphs: ["Once the code is aligned, software reads the small dark and light modules as binary information. Some modules describe the format; others carry the actual message.", "Error-correction data lets a scanner recover the message even when part of the code is dirty or covered."] },
      { heading: "Why it works at an angle", paragraphs: ["The scanner mathematically transforms the photographed grid back into a square before decoding it. That is why a code can still work when it is tilted or viewed from the side.", "A QR code is a compact, redundant data structure designed for cameras."] }
    ],
    deeperLinks: [
      { title: "About QR Code", url: "https://www.qrcode.com/en/about/", source: "DENSO WAVE" },
      { title: "QR Code features", url: "https://www.qrcode.com/en/about/version.html", source: "DENSO WAVE" }
    ]
  },
  {
    slug: "phone-compass",
    title: "How Does Your Phone's Compass Know Which Way You're Facing?",
    category: "Technology",
    icon: "🧭",
    description: "Your phone combines a magnetic sensor with motion sensors to estimate direction.",
    readTime: "4 min read",
    content: [
      { heading: "Reading Earth's magnetism", paragraphs: ["A magnetometer measures the direction and strength of Earth's magnetic field. Because the field points roughly toward magnetic north, the phone can use it as a directional reference.", "The sensor is tiny, but its measurements are sensitive enough to detect changes as you rotate the device."] },
      { heading: "More than a compass", paragraphs: ["Accelerometers and gyroscopes help the phone understand its tilt and movement. Software combines those readings so the compass can stay useful when the phone is held at an angle.", "Nearby metal, magnets, and electronics can distort the field, which is why a phone may ask you to move it in a slow figure eight."] },
      { heading: "Magnetic is not geographic", paragraphs: ["Magnetic north and geographic north are different places. The difference, called magnetic declination, changes depending on where you are.", "A mapping app can correct for that difference when it needs a true geographic heading."] }
    ],
    deeperLinks: [
      { title: "Earth's magnetic field", url: "https://www.nasa.gov/general/earths-magnetic-field/", source: "NASA" },
      { title: "Magnetic field", url: "https://www.britannica.com/science/magnetic-field", source: "Encyclopaedia Britannica" }
    ]
  },
  {
    slug: "gps",
    title: "How Does GPS Find Your Location Without You Telling It Where You Are?",
    category: "Technology",
    icon: "🌍",
    description: "Satellites help your phone calculate its position using incredibly precise timing.",
    readTime: "5 min read",
    content: [
      { heading: "Time becomes distance", paragraphs: ["GPS satellites continuously broadcast their position and the exact time a signal was sent. Your receiver notes when each signal arrives.", "Because radio waves travel at a known speed, the delay tells the receiver how far away each satellite appears to be."] },
      { heading: "Trilateration in space", paragraphs: ["One distance narrows your location to a sphere. Several distances intersect at a much smaller area. In practice, a receiver uses at least four satellites to solve for position and correct its own clock.", "This process is called trilateration because it relies on distances rather than angles."] },
      { heading: "Why a clear sky helps", paragraphs: ["Buildings, trees, and reflected signals can make timing less precise. Your phone improves the result by combining satellite data with Wi-Fi, cell towers, maps, and motion sensors.", "GPS is the foundation, but modern location services are a team effort."] }
    ],
    deeperLinks: [
      { title: "GPS fundamentals", url: "https://www.gps.gov/systems/gps/", source: "GPS.gov" },
      { title: "GPS overview", url: "https://www.nasa.gov/directorates/somd/space-communications-navigation-program/", source: "NASA" }
    ]
  },
  {
    slug: "wifi",
    title: "How Does Wi-Fi Send a Video to Your Phone Through the Air?",
    category: "Technology",
    icon: "📶",
    description: "Your router turns streams of digital information into carefully shaped radio signals.",
    readTime: "5 min read",
    content: [
      { heading: "Data becomes a signal", paragraphs: ["A video is broken into packets of digital data. Your router and phone encode those bits into patterns carried by radio waves, often in the 2.4, 5, or 6 gigahertz bands.", "The wave itself is not the video; its controlled changes represent the information."] },
      { heading: "A conversation, not a broadcast", paragraphs: ["Wi-Fi devices take turns using a shared channel. They listen before transmitting and confirm that packets arrived, sending missing pieces again when needed.", "This coordination lets many devices share one radio environment."] },
      { heading: "Why distance matters", paragraphs: ["Radio signals weaken as they travel and can be absorbed or reflected by walls. Faster Wi-Fi modes often need a cleaner, stronger signal, while slower modes can be more resilient.", "Your video feels continuous because the network manages thousands of small deliveries each second."] }
    ],
    deeperLinks: [
      { title: "What is Wi-Fi?", url: "https://www.cisco.com/c/en/us/products/wireless/what-is-wifi.html", source: "Cisco" },
      { title: "Wi-Fi explained", url: "https://www.cloudflare.com/learning/network-layer/what-is-wi-fi/", source: "Cloudflare" }
    ]
  },
  {
    slug: "bluetooth",
    title: "How Does Bluetooth Know Which Device to Connect To?",
    category: "Technology",
    icon: "⌁",
    description: "Short-range radios use discovery, identity, and a shared security process to pair.",
    readTime: "4 min read",
    content: [
      { heading: "Finding nearby devices", paragraphs: ["A Bluetooth device can announce that it is available, while another scans for those announcements. Names, service information, and device addresses help software distinguish what is nearby.", "A pair of headphones can advertise that it offers audio services, for example."] },
      { heading: "Pairing creates trust", paragraphs: ["During pairing, devices exchange information and establish keys that let them recognize one another later. Depending on the devices, you may confirm a number, tap a button, or accept the connection.", "After that, they can encrypt their communication instead of treating every nearby radio as trusted."] },
      { heading: "Keeping the channel tidy", paragraphs: ["Bluetooth uses short-range radio and rapidly changes channels to reduce interference. It also adjusts how much power it uses based on the kind of connection and distance involved.", "That combination makes a small, personal network practical in a crowded room."] }
    ],
    deeperLinks: [
      { title: "Bluetooth technology overview", url: "https://www.bluetooth.com/learn-about-bluetooth/tech-overview/", source: "Bluetooth SIG" },
      { title: "Bluetooth key attributes", url: "https://www.bluetooth.com/learn-about-bluetooth/key-attributes/", source: "Bluetooth SIG" }
    ]
  },
  {
    slug: "soap",
    title: "How Does Soap Actually Remove Dirt and Oil?",
    category: "Science",
    icon: "🫧",
    description: "Soap molecules are social adapters that help water carry away oily grime.",
    readTime: "4 min read",
    content: [
      { heading: "Two different personalities", paragraphs: ["A soap molecule has a water-loving end and an oil-loving end. Water alone struggles to surround greasy dirt, but soap can interact with both sides.", "That dual nature is why soap is called amphiphilic: it bridges materials that normally avoid one another."] },
      { heading: "Building tiny bubbles", paragraphs: ["The oil-loving ends gather around a grease particle while the water-loving ends point outward. Together they form a structure called a micelle.", "The micelle keeps oily material suspended in wash water instead of letting it settle back onto your skin or a plate."] },
      { heading: "Rinsing completes the job", paragraphs: ["Friction and warm water help loosen the particles, while rinsing carries the soap, water, and trapped grime away.", "Soap does not make oil disappear. It changes how oil is packaged so flowing water can transport it."] }
    ],
    deeperLinks: [
      { title: "The chemistry of soap", url: "https://www.acs.org/education/whatischemistry/adventures-in-chemistry/experiments/soap.html", source: "American Chemical Society" },
      { title: "Soap", url: "https://www.britannica.com/science/soap", source: "Encyclopaedia Britannica" }
    ]
  },
  {
    slug: "ice-floats",
    title: "Why Does Ice Float When Most Solids Sink?",
    category: "Science",
    icon: "❄️",
    description: "Water expands as it freezes, leaving ice less dense than the liquid below it.",
    readTime: "4 min read",
    content: [
      { heading: "Most solids pack tightly", paragraphs: ["For many materials, cooling lets particles settle into a compact solid. The solid takes up less space and becomes denser than the liquid it came from.", "Water takes a surprising detour from that usual pattern."] },
      { heading: "A roomy crystal", paragraphs: ["Water molecules form hydrogen bonds with one another. In ice, those bonds hold the molecules in an open, hexagonal arrangement with extra space between them.", "The same amount of water therefore occupies more volume when it freezes, lowering its density."] },
      { heading: "A floating layer matters", paragraphs: ["Because ice floats, it forms an insulating surface on lakes and ponds rather than sinking to the bottom. The liquid water underneath can remain unfrozen for longer.", "This unusual property helps aquatic ecosystems survive cold seasons."] }
    ],
    deeperLinks: [
      { title: "Ice, snow, and water", url: "https://www.usgs.gov/special-topics/water-science-school/science/ice-snow-and-water", source: "U.S. Geological Survey" },
      { title: "Ice", url: "https://www.britannica.com/science/ice", source: "Encyclopaedia Britannica" }
    ]
  }
];
