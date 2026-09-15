import type { FAQItem } from "@/components/FAQAccordion";
import type { LocalResource } from "@/components/LocalResources";

export type LocationPageData = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  localLead: string;
  localContext: string[];
  serviceLines: string[];
  faqs: FAQItem[];
  proof: string[];
  localResources: LocalResource[];
  nearbyCities: string[];
  ctaHeading: string;
  ctaBody: string;
  clientFacts: string[];
};

const COMMON_CLIENT_FACTS = [
  "[CLIENT FACT REQUIRED — WARRANTY TERMS]",
];

export const LOCATIONS_DATA: LocationPageData[] = [
  {
    slug: "ballwin",
    name: "Ballwin",
    metaTitle: "House Painters in Ballwin, MO | ValuePro Painting",
    metaDescription:
      "Painting contractor based in Ballwin, MO. Interior, exterior, cabinets and drywall repair for west county homes. EPA Lead-Safe certified. Free estimate.",
    h1: "House Painters in Ballwin, Missouri",
    localLead:
      "Ballwin is where we're based, which means it's the one city on this list we're not driving to — we're already here. That matters more than it sounds like it should, because a painting job isn't one visit. It's an estimate, a prep day, coat days, and a walkthrough, and the crew that lives fifteen minutes from your street handles a rain delay differently than a crew coming from across the metro.",
    localContext: [
      "Ballwin was established in 1837 but didn't incorporate until December 1950, and its 2020 population of 31,103 sits on just under nine square miles. That combination tells you what the housing stock is: this is a city that filled in during the postwar decades, subdivision by subdivision, on relatively compact lots. Practically, that means a lot of Ballwin homes predate 1978 — the federal lead-paint threshold — and a lot of them share the same siding, soffit, and trim details as their neighbors, because they went up together.",
      "Both facts change how we bid work here. The pre-1978 stock is why our EPA Lead-Safe certification is not a formality in Ballwin. The subdivision uniformity is why we can usually tell a homeowner what's failing on their house before we've walked the back elevation.",
    ],
    serviceLines: [
      "[Interior painting](/services/interior-painting) — walls, ceilings, trim and doors in homes where the trim usually needs it before the walls do.",
      "[Exterior painting](/services/exterior-painting) — siding, stucco, fascia and soffit, scheduled inside Missouri's two workable seasons.",
      "[Cabinet refinishing](/services/cabinet-refinishing) — the fastest way to change a kitchen in a house whose layout is fine.",
      "[Drywall repair](/services/drywall-repair) — patch, texture match, prime and paint.",
      "[Lime wash & specialized painting](/services/lime-wash-specialized-painting), [commercial painting](/services/commercial-painting), [HOA properties](/services/hoa-properties).",
    ],
    faqs: [
      {
        question: "Are you actually based in Ballwin?",
        answer:
          "Yes. Ballwin is our home base, and it's the reason our response times across west St. Louis County are what they are. We're a mobile business without a storefront, so estimates happen at your house rather than at an office.",
      },
      {
        question: "My Ballwin house was built in the 1960s. Does the lead rule apply?",
        answer:
          "Very likely. Federal rules require an EPA Lead-Safe Certified firm for paid work disturbing more than six square feet of interior or twenty square feet of exterior painted surface in pre-1978 housing. A great deal of Ballwin's housing stock predates 1978. We're certified — ask any other bidder for their firm certification.",
      },
      {
        question: "How quickly can you get out for an estimate?",
        answer:
          "Faster in Ballwin than anywhere else we serve, for obvious reasons. Call and we'll usually give you a same-week window.",
      },
      {
        question: "Do you work in the neighboring cities too?",
        answer:
          "Yes — Manchester, Ellisville, Wildwood, Des Peres and the rest of west county. Ballwin just happens to be the middle of it.",
      },
    ],
    proof: [
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Ballwin customer]",
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Ballwin customer]",
    ],
    localResources: [
      {
        name: "West St. Louis County Chamber of Commerce",
        url: "https://westcountychamber.com/",
        note: "serves Ballwin, Ellisville, Manchester, Wildwood and neighboring west county cities",
      },
    ],
    nearbyCities: ["manchester", "ellisville", "wildwood", "des-peres", "town-and-country"],
    ctaHeading: "We're already in the neighborhood.",
    ctaBody: "Call and we'll come look at it this week.",
    clientFacts: COMMON_CLIENT_FACTS,
  },
  {
    slug: "chesterfield",
    name: "Chesterfield",
    metaTitle: "House Painters in Chesterfield, MO | ValuePro",
    metaDescription:
      "Painting contractor serving Chesterfield, MO. Large-elevation exteriors, interiors and cabinet refinishing across west county. Free written estimate.",
    h1: "House Painters in Chesterfield, Missouri",
    localLead:
      "Chesterfield houses are big, and that changes the job before anything else does. Two-story elevations, tall gables, long runs of trim, and a lot of square footage between the ground and the roofline. Bidding one accurately means measuring what's actually up there rather than estimating from the driveway, and painting one means access equipment, not just a step ladder.",
    localContext: [
      "Chesterfield incorporated in 1988 and covers roughly 32 square miles with more than 47,000 residents, sitting about 25 minutes west of downtown St. Louis along I-64. Its own description of itself — mid-level office buildings, tree-lined neighborhoods, shopping centers and rustic horse farms across rolling hills and valleys — is unusually accurate, and it explains the split we see in the work. The residential side is predominantly newer construction on generous lots. The commercial side is real: office parks and retail that need repaints scheduled around business hours rather than around weather alone.",
      "That's the opposite profile from the older inner-ring suburbs east of here. Chesterfield homes generally aren't fighting lead paint or 1950s substrate problems — they're fighting sun exposure on large south and west elevations, and caulk joints on a lot of linear feet of trim.",
    ],
    serviceLines: [
      "[Exterior painting](/services/exterior-painting) — the main event here, on elevations that need proper access and a real caulk spec.",
      "[Interior painting](/services/interior-painting) — including the two-story entries and stairwells that most homeowners can't reach themselves.",
      "[Cabinet refinishing](/services/cabinet-refinishing) — updating large kitchens without touching the layout.",
      "[Commercial painting](/services/commercial-painting) — office and retail repaints phased around your hours.",
      "[HOA properties](/services/hoa-properties), [drywall repair](/services/drywall-repair), [lime wash & specialized painting](/services/lime-wash-specialized-painting).",
    ],
    faqs: [
      {
        question: "Do you have the equipment for a two-story Chesterfield exterior?",
        answer:
          "Yes — and it's the right question to ask any bidder. Tall gables, second-story trim, and steep grade changes need proper access to prep correctly. A crew that can't reach a surface safely will cut the prep short on exactly the surfaces that fail first.",
      },
      {
        question: "Do you do commercial work in Chesterfield too?",
        answer:
          "Yes. Chesterfield has a significant office and retail base, and we schedule that work around business hours — after-hours and overnight phasing so a space is back in use the next morning. See commercial painting.",
      },
      {
        question: "When should I schedule an exterior repaint?",
        answer:
          "Late April through mid-June, or mid-September through late October. Those windows are when overnight temperatures and humidity actually let a film cure here. They also book up, so bids in late winter are not early.",
      },
      {
        question: "Which cities near Chesterfield do you cover?",
        answer: "Wildwood, Ballwin, Creve Coeur, Town and Country and Ellisville, among others.",
      },
    ],
    proof: [
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Chesterfield customer]",
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Chesterfield customer]",
    ],
    localResources: [
      {
        name: "Chesterfield Regional Chamber of Commerce",
        url: "https://www.chesterfieldmochamber.com/",
      },
    ],
    nearbyCities: ["wildwood", "ballwin", "town-and-country", "creve-coeur", "ellisville"],
    ctaHeading: "Big elevations need a bid built from measurements, not a glance.",
    ctaBody: "We'll walk all four sides and put the scope in writing.",
    clientFacts: COMMON_CLIENT_FACTS,
  },
  {
    slug: "wildwood",
    name: "Wildwood",
    metaTitle: "House Painters in Wildwood, MO | ValuePro Painting",
    metaDescription:
      "Painting contractor serving Wildwood, MO. Wooded-lot exteriors, mildew-prone elevations, interiors and cabinets. Free estimate across west county.",
    h1: "House Painters in Wildwood, Missouri",
    localLead:
      "Wildwood is the only city we serve where the trees are part of the job. Houses here sit on wooded acreage under mature canopy, and shade is not neutral for a paint film — north and east elevations under heavy tree cover stay damp longer after every rain, which is where mildew establishes and where a coating without mildewcide gives up first.",
    localContext: [
      "Wildwood incorporated on September 1, 1995 after a five-year resident-led effort, and it's the largest city by land area in St. Louis County and the third largest in Missouri — roughly 68 square miles holding about 35,400 people, which works out to only around 530 residents per square mile. It preserves the legacy of eleven pre-incorporation communities, including Centaur, Fox Creek, Glencoe, Grover and Hollow. It borders Chesterfield and Clarkson Valley to the north, Ellisville to the northeast, Eureka to the east, Pacific to the south, and Franklin County to the west, with the Meramec River along much of its southern edge.",
      "For a painter, the density figure is the operative one. Estate lots and long private drives mean a Wildwood job has different logistics than a subdivision job — staging, access, and the simple fact that neighboring houses aren't close enough to compare against. Every bid here is built on its own.",
    ],
    serviceLines: [
      "[Exterior painting](/services/exterior-painting) — specified for shaded, mildew-prone elevations and seasonal movement.",
      "[Interior painting](/services/interior-painting) — including the larger open interiors typical of newer Wildwood construction.",
      "[Cabinet refinishing](/services/cabinet-refinishing), [drywall repair](/services/drywall-repair), [lime wash & specialized painting](/services/lime-wash-specialized-painting), [commercial painting](/services/commercial-painting), [HOA properties](/services/hoa-properties).",
    ],
    faqs: [
      {
        question: "Why does mildew keep coming back on my north side?",
        answer:
          "Because that elevation stays shaded and damp — and in Wildwood, heavy tree cover makes that worse than in an open subdivision. Two things fix it: washing to remove the existing spores, and a coating that actually contains mildewcides. Doing one without the other buys you a season.",
      },
      {
        question: "Do you serve the Fox Creek and Glencoe areas?",
        answer:
          "Yes. Wildwood covers roughly 68 square miles and we work across it, including the areas that carry the names of the pre-incorporation communities.",
      },
      {
        question: "My house is on a long private drive. Is that a problem?",
        answer:
          "No, but tell us at the estimate. Access affects staging and equipment, and it's better priced into the scope up front than discovered on day one.",
      },
      {
        question: "Do you cover Ellisville and Chesterfield as well?",
        answer:
          "Yes — Ellisville borders Wildwood to the northeast and Chesterfield to the north. Both have their own pages.",
      },
    ],
    proof: [
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Wildwood customer]",
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Wildwood customer]",
    ],
    localResources: [
      {
        name: "West St. Louis County Chamber of Commerce",
        url: "https://westcountychamber.com/",
        note: "covers Wildwood among eight west county cities",
      },
    ],
    nearbyCities: ["ellisville", "chesterfield", "ballwin", "manchester"],
    ctaHeading: "Shaded elevations need a different spec than sunny ones.",
    ctaBody: "Let us look at the tree line and tell you what your house actually needs.",
    clientFacts: COMMON_CLIENT_FACTS,
  },
  {
    slug: "kirkwood",
    name: "Kirkwood",
    metaTitle: "House Painters in Kirkwood, MO | ValuePro Painting",
    metaDescription:
      "Painting contractor serving Kirkwood, MO. Historic-district homes, mid-century ranches, EPA Lead-Safe certified crews. Free estimate on interior and exterior.",
    h1: "House Painters in Kirkwood, Missouri",
    localLead:
      "There is no single \"Kirkwood house.\" A Victorian near the train station and a 1960s ranch off Big Bend are two different painting jobs with two different failure modes, and a contractor who treats them the same will do one of them badly. Kirkwood is the city on our list where knowing which house you're standing in front of matters most.",
    localContext: [
      "Kirkwood was established in 1853 as the first planned residential commuter suburb west of the Mississippi, incorporated in 1865, and still centers on the 1893 train station that serves Amtrak. The city documents 85 designated landmarks, nine local historic districts, and multiple properties and districts on the National Register. Its own preservation materials describe a housing mix spanning bungalows, Craftsman homes, Cape Cod Revivals, American Foursquares, Tudor Revivals, Colonial Revivals, Prairie homes, Victorians, ranches and mid-century moderns — and National Register districts including Jefferson-Argonne, North Taylor and Meacham Highlands, alongside the Central Place neighborhood.",
      "For painting, this is the most consequential local fact on the whole site. A city built out from 1853 onward is a city where pre-1978 paint is the rule, not the exception. Our EPA Lead-Safe certification is not a marketing line in Kirkwood — a normal exterior repaint on a house near Argonne crosses the federal threshold within the first hour of scraping trim. It also means original wood trim, real end grain, and detail work that a spray-and-go crew will flatten.",
    ],
    serviceLines: [
      "[Exterior painting](/services/exterior-painting) — prep-heavy work on original wood siding, trim and porches, done lead-safe.",
      "[Interior painting](/services/interior-painting) — including the plaster walls and deep trim profiles common in the older districts.",
      "[Drywall repair](/services/drywall-repair) — patching and texture matching in additions and mid-century sections.",
      "[Cabinet refinishing](/services/cabinet-refinishing), [lime wash & specialized painting](/services/lime-wash-specialized-painting), [commercial painting](/services/commercial-painting), [HOA properties](/services/hoa-properties).",
    ],
    faqs: [
      {
        question: "My house is in a historic district. Are there rules about paint?",
        answer:
          "Kirkwood has nine local historic districts and 85 designated landmarks, and districts commonly carry review expectations for exterior changes. Check with the city before you commit to a color scheme on a designated property — it's a short conversation that prevents an expensive one.",
      },
      {
        question: "Is lead paint really an issue in Kirkwood?",
        answer:
          "Yes, more here than almost anywhere else we work. The city dates to 1853 and much of its housing stock predates 1978 by decades. Federal rules require an EPA Lead-Safe Certified firm for paid work disturbing more than six square feet interior or twenty square feet exterior of painted surface in those homes. We're certified.",
      },
      {
        question: "Do you work on the older wood trim and porches, or just siding?",
        answer:
          "Both. Original trim, porch columns, railings and detail work are where Kirkwood houses show their age first, and they need hand prep rather than a spray gun. That's slower and it's the difference between a repaint that respects the house and one that fills in its details.",
      },
      {
        question: "Do you serve the Meacham Highlands and Jefferson-Argonne areas?",
        answer:
          "Yes, and the mid-century neighborhoods out toward Geyer, Watson and Big Bend as well. Both halves of Kirkwood's housing stock are normal work for us.",
      },
    ],
    proof: [
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Kirkwood customer]",
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Kirkwood customer]",
    ],
    localResources: [
      {
        name: "Kirkwood–Des Peres Area Chamber of Commerce",
        url: "https://www.kirkwooddesperes.com/",
      },
    ],
    nearbyCities: ["webster-groves", "des-peres", "manchester", "ballwin"],
    ctaHeading: "Old houses reward the crew that slows down.",
    ctaBody: "If your house has original trim worth keeping, let's talk about how it gets prepped.",
    clientFacts: COMMON_CLIENT_FACTS,
  },
  {
    slug: "webster-groves",
    name: "Webster Groves",
    metaTitle: "House Painters in Webster Groves, MO | ValuePro",
    metaDescription:
      "Painting contractor serving Webster Groves, MO. Older inner-ring homes, deep trim profiles, lead-safe prep. Interior and exterior. Free written estimate.",
    h1: "House Painters in Webster Groves, Missouri",
    localLead:
      "Webster Groves homes tend to have more painted surface than their square footage suggests. Deep eaves, bracketed detail, window casings with actual profile, porches with columns and rails — the kind of features that look effortless and take a crew twice as long to prep properly. A quote that treats a Webster Groves house as wall area is a quote that's about to run short.",
    localContext: [
      "Webster Groves is one of St. Louis's traditional inner-ring suburbs, grouped with Shrewsbury and Rock Hill by the area chamber, which has served these communities since 1937. That date is a useful proxy for the housing: this is established, long-settled residential fabric rather than postwar subdivision, and it sits close enough to the city core to have been built out well before west county was.",
      "The painting consequence is the same one that governs Kirkwood next door — pre-1978 stock is the default assumption here, which puts our EPA Lead-Safe certification directly in play on ordinary exterior work. The second consequence is different from Kirkwood's: Webster Groves lots are tighter and the houses sit closer together, so containment during exterior prep isn't just a compliance step, it's a neighbor-relations one.",
    ],
    serviceLines: [
      "[Exterior painting](/services/exterior-painting) — detail-heavy prep on older siding, trim, eaves and porches, done with proper containment.",
      "[Interior painting](/services/interior-painting) — plaster, deep baseboards, tall trim and the stairwells older homes are built around.",
      "[Drywall repair](/services/drywall-repair) — including patching where plaster and drywall meet in remodeled sections.",
      "[Cabinet refinishing](/services/cabinet-refinishing), [lime wash & specialized painting](/services/lime-wash-specialized-painting), [commercial painting](/services/commercial-painting), [HOA properties](/services/hoa-properties).",
    ],
    faqs: [
      {
        question: "How do you handle prep when my neighbor's house is fifteen feet away?",
        answer:
          "Containment. On older inner-ring lots that means ground cover extending past the drip line, sheeting where needed, and daily cleanup rather than end-of-job cleanup. It's a lead-safe requirement on pre-1978 homes and it's also basic courtesy on a street where houses sit close.",
      },
      {
        question: "Do you paint plaster walls, or only drywall?",
        answer:
          "Both. Plaster behaves differently — it's harder, it cracks in patterns drywall doesn't, and repairs need to be tied in rather than simply patched. If your walls are original plaster, tell us at the estimate.",
      },
      {
        question: "Is lead paint a concern in Webster Groves?",
        answer:
          "Assume yes on anything built before 1978, which covers most of the older housing here. We're EPA Lead-Safe Certified, which is required for paid work disturbing more than six square feet of interior or twenty square feet of exterior painted surface in those homes.",
      },
      {
        question: "Do you also serve Shrewsbury and Rock Hill?",
        answer:
          "Yes. Those are neighboring communities in the same chamber area, and they're inside our normal service range from Ballwin.",
      },
    ],
    proof: [
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Webster Groves customer]",
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Webster Groves customer]",
    ],
    localResources: [
      {
        name: "Webster Groves/Shrewsbury/Rock Hill/Brentwood Area Chamber of Commerce",
        url: "https://www.webstershrewsburychamber.com/",
        note: "serving the area since 1937",
      },
    ],
    nearbyCities: ["kirkwood", "des-peres", "creve-coeur"],
    ctaHeading: "Detail work is where the estimate gets honest.",
    ctaBody: "We'll count the trim, not just the walls.",
    clientFacts: COMMON_CLIENT_FACTS,
  },
  {
    slug: "manchester",
    name: "Manchester",
    metaTitle: "House Painters in Manchester, MO | ValuePro Painting",
    metaDescription:
      "Painting contractor serving Manchester, MO. Interior, exterior, cabinets and drywall repair, minutes from our Ballwin base. Free written estimate.",
    h1: "House Painters in Manchester, Missouri",
    localLead:
      "Manchester sits directly next to our base, which makes it one of the few places where we can realistically do a same-week estimate and still hold the schedule for the jobs already on the books. Short drive, full crew, no travel padding in the bid.",
    localContext: [
      "Manchester is a west St. Louis County city organized along the Manchester Road corridor, with its city hall at 14317 Manchester Road, immediately adjacent to Ballwin. It's one of the eight cities represented by the West St. Louis County Chamber of Commerce.",
      "That corridor is the defining feature for our work here. Manchester Road is a working commercial artery, which means Manchester carries a real mix of residential streets and street-facing businesses — and those two need opposite scheduling. Homes get daytime crews. The retail and service businesses along the corridor get after-hours phasing so their doors stay open.",
    ],
    serviceLines: [
      "[Interior painting](/services/interior-painting) and [exterior painting](/services/exterior-painting) for homes off the corridor.",
      "[Commercial painting](/services/commercial-painting) — for the businesses along Manchester Road that can't close for a week.",
      "[Cabinet refinishing](/services/cabinet-refinishing), [drywall repair](/services/drywall-repair), [lime wash & specialized painting](/services/lime-wash-specialized-painting), [HOA properties](/services/hoa-properties).",
    ],
    faqs: [
      {
        question: "How far is Manchester from your base?",
        answer:
          "Minutes. We're based in Ballwin, immediately adjacent, so Manchester is effectively home territory for scheduling and for coming back if something needs attention after the job.",
      },
      {
        question: "I own a business on Manchester Road. Can you paint without closing us?",
        answer:
          "Yes. That's standard commercial practice for us — after-hours or overnight phasing with fast-curing low-odor coatings so the space is usable the next morning. Details on the commercial painting page.",
      },
      {
        question: "Do older Manchester homes have lead paint concerns?",
        answer:
          "Anything built before 1978 should be assumed to, and Manchester has a good deal of housing in that range. We're EPA Lead-Safe Certified, which federal rules require for paid work disturbing painted surfaces above the threshold in those homes.",
      },
      {
        question: "Which nearby cities do you also cover?",
        answer: "Ballwin, Ellisville, Kirkwood and Des Peres, among others.",
      },
    ],
    proof: [
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Manchester customer]",
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Manchester customer]",
    ],
    localResources: [
      {
        name: "West St. Louis County Chamber of Commerce",
        url: "https://westcountychamber.com/",
        note: "Manchester is one of its member cities",
      },
    ],
    nearbyCities: ["ballwin", "ellisville", "kirkwood", "des-peres"],
    ctaHeading: "Next town over means we can be there fast.",
    ctaBody: "Residential or storefront, we're ready when you call.",
    clientFacts: COMMON_CLIENT_FACTS,
  },
  {
    slug: "ellisville",
    name: "Ellisville",
    metaTitle: "House Painters in Ellisville, MO | ValuePro Painting",
    metaDescription:
      "Painting contractor serving Ellisville, MO. Interior, exterior, cabinet refinishing and drywall repair across west St. Louis County. Free estimate.",
    h1: "House Painters in Ellisville, Missouri",
    localLead:
      "Ellisville is small enough that word travels, which is a good reason for a painting contractor to do the unglamorous parts right. There isn't a version of this town where a job that fails in two years stays quiet.",
    localContext: [
      "Ellisville is a west St. Louis County city with its municipal offices at 1 Weis Avenue, sitting between Ballwin to the east and Wildwood to the southwest — Wildwood's own boundary description names Ellisville as its northeastern neighbor. It's also where the West St. Louis County Chamber of Commerce is headquartered, at 15965 Manchester Road.",
      "Geographically that puts Ellisville at a genuine transition point on our map: east of here the lots tighten into postwar subdivision density, and southwest of here they open into Wildwood's wooded acreage. Houses on the Ellisville side of that line tend to sit in between — enough tree cover to matter on shaded elevations, close enough spacing that containment during prep is still a real consideration.",
    ],
    serviceLines: [
      "[Exterior painting](/services/exterior-painting) — specified for the mix of exposure conditions this part of the county produces.",
      "[Interior painting](/services/interior-painting), [cabinet refinishing](/services/cabinet-refinishing), [drywall repair](/services/drywall-repair).",
      "[Lime wash & specialized painting](/services/lime-wash-specialized-painting), [commercial painting](/services/commercial-painting), [HOA properties](/services/hoa-properties).",
    ],
    faqs: [
      {
        question: "How far out is Ellisville from your crews?",
        answer:
          "Short. We're based in Ballwin, immediately east, so Ellisville sits inside our tightest service ring along with Manchester and Wildwood.",
      },
      {
        question: "Do you handle both older and newer Ellisville homes?",
        answer:
          "Yes, and they're different jobs. Anything pre-1978 gets lead-safe practices — we're EPA Lead-Safe Certified — while newer construction is usually about caulk joints, sun exposure and substrate rather than legacy coatings.",
      },
      {
        question: "Can you match a subdivision color scheme?",
        answer:
          "Usually. If your neighborhood has an established palette or an association with approved schemes, bring us the names and codes and we'll work inside them rather than guessing from a chip.",
      },
      {
        question: "Which neighboring cities do you serve?",
        answer: "Ballwin, Wildwood, Manchester and Chesterfield.",
      },
    ],
    proof: [
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from an Ellisville customer]",
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from an Ellisville customer]",
    ],
    localResources: [
      {
        name: "West St. Louis County Chamber of Commerce",
        url: "https://westcountychamber.com/",
        note: "the chamber is headquartered in Ellisville",
      },
    ],
    nearbyCities: ["ballwin", "wildwood", "manchester", "chesterfield"],
    ctaHeading: "Small town, long memory — which is why we prep properly.",
    ctaBody: "Free estimate, straightforward answers.",
    clientFacts: COMMON_CLIENT_FACTS,
  },
  {
    slug: "creve-coeur",
    name: "Creve Coeur",
    metaTitle: "House Painters in Creve Coeur, MO | ValuePro",
    metaDescription:
      "Painting contractor serving Creve Coeur, MO. 1970s ranches, mid-century moderns and new infill builds. Interior, exterior and cabinets. Free estimate.",
    h1: "House Painters in Creve Coeur, Missouri",
    localLead:
      "Creve Coeur has a housing pattern we rarely see this cleanly anywhere else on our map: a 1970s ranch and a 2020 custom build, on the same street, sharing a property line. Painting one of each in the same week is normal here, and the two jobs have almost nothing in common except the crew.",
    localContext: [
      "Most Creve Coeur homes were constructed in the 1970s, with a substantial share of the housing stock built between 1970 and 1999 and roughly another quarter dating from 1940 to 1969. Mid-century modern ranches are a genuine architectural presence here, including homes in neighborhoods like River Bend. Layered on top of that is heavy infill — newer, larger builds dropped onto established streets, some of them post-2015 construction on lots that held something much smaller.",
      "For painting, this mix is the whole story. The 1940–1969 portion is pre-1978 and puts lead-safe practices in play, which is why our EPA certification matters here in a way it doesn't in a city built after 1990. The mid-century homes bring their own specifics — low-slope rooflines, deep overhangs, wide fascia runs, and original wood detailing that a heavy hand will erase. The new infill builds are a different job entirely: large elevations, tight caulk specs, and finishes chosen to match a builder's palette.",
    ],
    serviceLines: [
      "[Exterior painting](/services/exterior-painting) — including the wide fascia and deep overhangs that define mid-century elevations.",
      "[Interior painting](/services/interior-painting) — for both dated ranch interiors and new construction.",
      "[Cabinet refinishing](/services/cabinet-refinishing) — the highest-leverage update in a 1970s kitchen whose boxes are still sound.",
      "[Lime wash & specialized painting](/services/lime-wash-specialized-painting), [drywall repair](/services/drywall-repair), [commercial painting](/services/commercial-painting), [HOA properties](/services/hoa-properties).",
    ],
    faqs: [
      {
        question: "My house is a mid-century modern. Do you work on those?",
        answer:
          "Yes, and they need a lighter touch than people expect. Deep overhangs, wide fascia boards, and original wood detailing define the look — the goal is to coat them, not to bury them under a heavy film or fill the reveals with caulk that wasn't there originally.",
      },
      {
        question: "We have a 1970s kitchen. Refinish or replace?",
        answer:
          "If the boxes are solid and the layout works, refinishing changes the look for a fraction of replacement and takes days rather than months. If the kitchen doesn't function — bad layout, no storage — paint can't fix that. See cabinet refinishing for the honest comparison.",
      },
      {
        question: "Does the lead rule apply to Creve Coeur homes?",
        answer:
          "To a meaningful share of them, yes. Roughly a quarter of the housing stock here dates from 1940 to 1969, all of it pre-1978. We're EPA Lead-Safe Certified for that work.",
      },
      {
        question: "Do you also serve Olivette and the surrounding area?",
        answer:
          "Yes — Olivette shares the Creve Coeur chamber and sits inside our normal range. Town and Country and Chesterfield have their own pages.",
      },
    ],
    proof: [
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Creve Coeur customer]",
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Creve Coeur customer]",
    ],
    localResources: [
      {
        name: "Creve Coeur–Olivette Chamber of Commerce",
        url: "https://www.ccochamber.com/",
        note: "serves Creve Coeur and Olivette",
      },
    ],
    nearbyCities: ["town-and-country", "chesterfield", "des-peres", "webster-groves"],
    ctaHeading: "Two houses, two centuries of construction, one street.",
    ctaBody: "Tell us which one is yours and we'll bid it properly.",
    clientFacts: COMMON_CLIENT_FACTS,
  },
  {
    slug: "town-and-country",
    name: "Town and Country",
    metaTitle: "House Painters in Town and Country, MO | ValuePro",
    metaDescription:
      "Painting contractor serving Town and Country, MO. Large-property interiors and exteriors with careful scheduling and protection. Free written estimate.",
    h1: "House Painters in Town and Country, Missouri",
    localLead:
      "Town and Country properties are large, and on a large property the thing that goes wrong isn't usually the paint — it's everything around it. Landscaping, hardscape, outbuildings, vehicles, and a lot of ground that has to end the job in the same condition it started.",
    localContext: [
      "Town and Country sits in central-west St. Louis County, adjacent to Creve Coeur to the north and Chesterfield to the west, on notably larger residential parcels than the surrounding municipalities. It falls outside the boundaries of the Creve Coeur–Olivette chamber, whose service area stops at Highway 141 and I-64.",
      "What that means for the work: bids here are property bids, not house bids. Access, staging, protection of grounds and hardscape, and a schedule that accounts for a longer setup are all part of the scope rather than afterthoughts.",
    ],
    serviceLines: [
      "[Exterior painting](/services/exterior-painting) — large elevations with full grounds protection.",
      "[Interior painting](/services/interior-painting), [cabinet refinishing](/services/cabinet-refinishing), [lime wash & specialized painting](/services/lime-wash-specialized-painting).",
      "[Drywall repair](/services/drywall-repair), [commercial painting](/services/commercial-painting), [HOA properties](/services/hoa-properties).",
    ],
    faqs: [
      {
        question: "How do you protect landscaping and hardscape during an exterior job?",
        answer:
          "It's built into the scope before anyone shows up — where equipment stages, what gets covered, and how we move around plantings and stonework. On a large property this is the difference between a finished paint job and a finished paint job plus a landscaping bill.",
      },
      {
        question: "Can you handle a property with multiple structures?",
        answer:
          "Yes. Outbuildings, pool houses and detached garages are sequenced as part of the same project rather than quoted as an afterthought, so the whole property finishes at once.",
      },
      {
        question: "Which nearby cities do you serve?",
        answer: "Creve Coeur to the north, Chesterfield to the west, and Des Peres and Ballwin nearby.",
      },
    ],
    proof: ["[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Town and Country customer]"],
    localResources: [],
    nearbyCities: ["creve-coeur", "chesterfield", "des-peres", "ballwin"],
    ctaHeading: "On a big property, the protection plan matters as much as the paint.",
    ctaBody: "Let's walk it.",
    clientFacts: [
      ...COMMON_CLIENT_FACTS,
      "[BUILD NOTE — this page is deliberately short. No dedicated Town and Country chamber of commerce was found; do not add neighborhoods, landmarks, subdivision names, or history beyond what's verified above.]",
    ],
  },
  {
    slug: "des-peres",
    name: "Des Peres",
    metaTitle: "House Painters in Des Peres, MO | ValuePro Painting",
    metaDescription:
      "Painting contractor serving Des Peres, MO. Homes and West County Mall-area businesses. Interior, exterior, cabinets and drywall repair. Free estimate.",
    h1: "House Painters in Des Peres, Missouri",
    localLead:
      "Des Peres is compact, central, and busier than its size suggests — a small residential city wrapped around one of the region's larger retail destinations. That combination means our work here splits cleanly: quiet residential streets on one side, and commercial space that can't afford to close on the other.",
    localContext: [
      "Des Peres is a central-west St. Louis County city, adjacent to Kirkwood, with which it shares the Kirkwood–Des Peres Area Chamber of Commerce. It is the location of West County Mall, a two-level center with more than 150 stores, which sits roughly ten minutes south of Creve Coeur and draws traffic from across west county.",
      "The retail center is the local fact that actually changes our scheduling. In a city this size, a meaningful share of the painting demand is commercial and retail-adjacent, and that work happens after hours by necessity. On the residential side, Des Peres shares Kirkwood's older-suburb character closely enough that pre-1978 construction is a live assumption rather than an edge case — which is why our EPA Lead-Safe certification applies to ordinary jobs here.",
    ],
    serviceLines: [
      "[Commercial painting](/services/commercial-painting) — retail and office space phased around trading hours.",
      "[Exterior painting](/services/exterior-painting) and [interior painting](/services/interior-painting) for residential streets, lead-safe on pre-1978 homes.",
      "[Cabinet refinishing](/services/cabinet-refinishing), [drywall repair](/services/drywall-repair), [lime wash & specialized painting](/services/lime-wash-specialized-painting), [HOA properties](/services/hoa-properties).",
    ],
    faqs: [
      {
        question: "I run a store near West County Mall. Can you paint without closing?",
        answer:
          "Yes. Retail is the clearest case for after-hours and overnight phasing — the crew works once the doors close, the coating cures overnight, and you open normally. Details on the commercial painting page.",
      },
      {
        question: "Is the housing here similar to Kirkwood's?",
        answer:
          "Closely enough that we plan for it the same way. Des Peres shares Kirkwood's older-suburb profile, which means assuming pre-1978 construction until proven otherwise and working lead-safe accordingly. We're EPA certified for exactly that.",
      },
      {
        question: "How fast can you get to Des Peres from Ballwin?",
        answer:
          "Quickly — it's a short run east on the main corridors and sits comfortably inside our regular service range.",
      },
      {
        question: "Which nearby cities do you cover?",
        answer: "Kirkwood, Manchester, Ballwin, Town and Country and Creve Coeur.",
      },
    ],
    proof: [
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Des Peres customer]",
      "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review from a Des Peres customer]",
    ],
    localResources: [
      {
        name: "Kirkwood–Des Peres Area Chamber of Commerce",
        url: "https://www.kirkwooddesperes.com/",
        note: "shared with the Kirkwood page",
      },
    ],
    nearbyCities: ["kirkwood", "manchester", "town-and-country", "creve-coeur"],
    ctaHeading: "Storefront or street, we schedule around you.",
    ctaBody: "Free estimate, no pressure.",
    clientFacts: COMMON_CLIENT_FACTS,
  },
];

export function locationDataBySlug(slug: string): LocationPageData | undefined {
  return LOCATIONS_DATA.find((c) => c.slug === slug);
}
