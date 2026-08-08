import type { ContentBlock } from "@/components/Prose";

export type BlogSection = {
  heading: string;
  blocks: ContentBlock[];
};

export type BlogPostData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  datePublished: string;
  dateModified: string;
  excerpt: string;
  imageAlt: string;
  intro: ContentBlock[];
  sections: BlogSection[];
  ctaServiceSlug: string;
  ctaText: string;
};

export const BLOG_POSTS: BlogPostData[] = [
  {
    slug: "best-time-exterior-painting-missouri",
    title: "When to Paint Your House Exterior in Missouri",
    metaTitle: "Best Time to Paint a House Exterior in MO",
    metaDescription:
      "The exterior paint window in St. Louis County runs two short stretches a year. Here's why timing matters more than the brand of paint you choose.",
    category: "Exterior",
    datePublished: "2025-02-04",
    dateModified: "2025-02-04",
    excerpt:
      "Missouri's exterior paint window isn't about the calendar date — it's about two conditions holding together long enough for a coat to cure.",
    imageAlt: "Exterior house siding being painted during a clear spring day in St. Louis County",
    intro: [
      {
        type: "p",
        text: "Ask five homeowners in St. Louis County when to paint their house exterior and you'll get five different answers, most of them based on whoever happened to be free that month. The better question isn't when a crew is available — it's when the weather will actually let a coating cure. That window is narrower than most people assume, and missing it is the single most common reason an exterior repaint fails early.",
      },
    ],
    sections: [
      {
        heading: "The two windows that actually work",
        blocks: [
          {
            type: "p",
            text: "In the St. Louis area, exterior paint has a real shot at curing properly in two stretches: late April through mid-June, and mid-September through late October. Outside of those windows, one of two things is working against the film — either the air is too hot and humid for the paint to level and cure evenly, or the nights are cold enough that the film can't finish hardening before a freeze hits it.",
          },
          {
            type: "p",
            text: "What actually matters inside those windows is two conditions holding together at the same time: overnight lows staying reliably above 50°F, and afternoon humidity staying under roughly 75%. A single warm afternoon doesn't qualify if the temperature drops hard after sunset — the film still has to cure through the night, not just dry during the day.",
          },
        ],
      },
      {
        heading: "Why summer and late fall are the wrong bets",
        blocks: [
          {
            type: "p",
            text: "Summer heat causes its own problems. Paint applied in direct sun on a hot afternoon can dry on the surface before it has a chance to properly bond, which shows up later as premature peeling. Summer storms complicate scheduling further — a wall that gets rained on before the film sets is a redo, not a delay.",
          },
          {
            type: "p",
            text: "Late fall is the more dangerous mistake because it looks fine in the moment. A mild November day can feel like a good painting day, but an early hard freeze a week later can crack a film that hasn't fully cured. Crews that push exterior work into November to clear a backlog are gambling with a homeowner's money, even if the day they're painting on feels warm enough.",
          },
        ],
      },
      {
        heading: "Book earlier than you think you need to",
        blocks: [
          {
            type: "p",
            text: "Because the workable stretches are short and everyone in the region is competing for the same weeks, good crews book out ahead of both windows. The practical move is to get exterior bids in late winter for spring work, and in mid-summer for fall work, rather than waiting until the weather is already right and hoping a crew has an opening.",
          },
          {
            type: "p",
            text: "This is also where prep timing matters. Washing, scraping, and caulk repair can often happen slightly outside the ideal window, as long as the finish coats themselves land inside it. A contractor who front-loads the prep work is usually protecting your project's actual paint date, not just filling their own schedule.",
          },
        ],
      },
    ],
    ctaServiceSlug: "exterior-painting",
    ctaText:
      "Exterior work in St. Louis County has two good stretches a year, and they book up fast. See our full exterior painting process, including how we handle fascia, soffit, and freeze-thaw joints.",
  },
  {
    slug: "how-often-repaint-interior-rooms",
    title: "How Often Should You Repaint Each Room?",
    metaTitle: "How Often to Repaint Interior Rooms",
    metaDescription:
      "Kitchens, hallways and bedrooms wear at different rates. Here's a realistic room-by-room repaint schedule instead of one number for the whole house.",
    category: "Interior",
    datePublished: "2025-01-20",
    dateModified: "2025-01-20",
    excerpt:
      "There's no single repaint number for a house — kitchens, hallways, and bedrooms all wear at different speeds, for different reasons.",
    imageAlt: "Freshly painted living room wall with trim in a St. Louis County home",
    intro: [
      {
        type: "p",
        text: "\"How often should I repaint?\" is really six different questions wearing one coat of paint. A kitchen, a hallway, and a guest bedroom don't age the same way, because they aren't exposed to the same things. Treating a whole house as one repaint cycle usually means painting rooms that didn't need it yet, while the rooms that actually needed attention keep waiting.",
      },
    ],
    sections: [
      {
        heading: "A realistic timeline, room by room",
        blocks: [
          {
            type: "ul",
            items: [
              "**Living rooms and dining rooms** typically hold five to seven years. Moderate foot traffic, almost no moisture, and usually no direct grease exposure.",
              "**Adult bedrooms** run five to ten years for similar reasons, often longer if the room sees light use.",
              "**Kitchens** are the short end at three to four years — grease, cooking heat, and splatter break a finish down faster than almost anywhere else in the house.",
              "**Hallways and stairwells** wear fastest of all, because they take constant contact in a narrow space: shoulders, bags, furniture corners, pets.",
              "**Ceilings** often go a decade or more untouched, unless a leak or a cooking vent has stained them.",
              "**Baseboards and trim** take abuse from vacuums, shoes, and pets and frequently need attention every two to three years — well before the wall above them does.",
            ],
          },
        ],
      },
      {
        heading: "Why sheen affects the timeline too",
        blocks: [
          {
            type: "p",
            text: "The paint sheen on a wall changes how visibly it ages. Eggshell finishes have a soft, low sheen that hides minor wear and wall imperfections well, which is part of why they're common in living rooms and bedrooms. Satin has more sheen and cleans more easily, which is why it shows up in kitchens, bathrooms, and hallways — but more sheen also means more visible surface flaws, so those rooms show scuffs sooner even though the paint itself may be holding up fine underneath.",
          },
        ],
      },
      {
        heading: "Painting in batches instead of all at once",
        blocks: [
          {
            type: "p",
            text: "Most homeowners don't repaint a whole house on one cycle — they repaint in batches, tackling the rooms that are actually due while leaving the ones that still look fine. That approach also makes it easier to keep the house livable during the work, since bedrooms and bathrooms don't all need to be out of service simultaneously.",
          },
          {
            type: "p",
            text: "The other advantage of a targeted approach is cost control: painting three rooms that genuinely need it costs less than painting eight rooms because one of them finally became noticeable. Walking the house room by room, rather than defaulting to a whole-house number, is what turns a repaint into a planned expense instead of a surprise one.",
          },
        ],
      },
    ],
    ctaServiceSlug: "interior-painting",
    ctaText:
      "Not sure which rooms in your house are actually due? See our interior painting process — we'll walk the house with you and tell you what's genuinely worn versus what can wait.",
  },
  {
    slug: "freeze-thaw-exterior-paint-st-louis",
    title: "Why Freeze-Thaw Destroys Exterior Paint Here",
    metaTitle: "Freeze-Thaw and Exterior Paint Damage in MO",
    metaDescription:
      "St. Louis exterior paint fails at joints and end grain first, not in the middle of a wall. Freeze-thaw cycling is usually why. Here's the mechanism.",
    category: "Exterior",
    datePublished: "2025-03-11",
    dateModified: "2025-03-11",
    excerpt:
      "Exterior paint failures in St. Louis County almost always start at a joint or a seam — rarely in the middle of a clean wall. Freeze-thaw is why.",
    imageAlt: "Peeling exterior paint at a window trim joint showing freeze-thaw damage",
    intro: [
      {
        type: "p",
        text: "If you look closely at where exterior paint actually fails first on a St. Louis County house, it's almost never in the middle of a flat wall. It's at a window joint, along a piece of trim, at the end grain of a fascia board, or where an old bead of caulk has started to separate. That pattern isn't random — it's freeze-thaw doing exactly what freeze-thaw does.",
      },
    ],
    sections: [
      {
        heading: "The mechanism, simply put",
        blocks: [
          {
            type: "p",
            text: "Water finds its way into porous materials — brick, aging caulk, exposed end grain on wood — through tiny gaps and capillary action. When that water freezes, it expands. Expanding water inside a joint or a seam physically pushes outward, and that pressure is what lifts paint film off the substrate from underneath, rather than wearing it down from the surface. This is why the damage shows up at joints and seams first: those are the places water actually gets in.",
          },
          {
            type: "p",
            text: "Missouri's winters aren't defined by one long freeze — they're defined by cycling. Temperatures swing above and below freezing repeatedly through the season, which means the expansion-and-contraction process isn't a single event. It repeats, over and over, at every vulnerable joint on the house, all winter long.",
          },
        ],
      },
      {
        heading: "Why this changes what a coating needs to do",
        blocks: [
          {
            type: "p",
            text: "A coating in this climate has to tolerate repeated movement, not just resist sun and rain. That's a different job than UV resistance or mildew resistance, and it's the reason film flexibility matters as much as it does — a rigid film cracks under repeated seasonal movement in wood siding and trim, where a more flexible film can move with the substrate instead of fighting it.",
          },
          {
            type: "p",
            text: "Caulk matters just as much as the paint itself, and often more. Caulk is almost always the first thing to fail at an exterior joint, and once it fails, that joint becomes the entry point water uses to start the freeze-thaw cycle underneath the paint film. Treating caulk selection as a real specification decision — not an afterthought bought in bulk from whatever's on the shelf — is one of the more overlooked parts of a durable exterior job.",
          },
        ],
      },
      {
        heading: "What this means for maintenance",
        blocks: [
          {
            type: "p",
            text: "Because freeze-thaw damage concentrates at joints and seams, those are the spots worth checking every year, even between full repaints. A homeowner who catches a failing caulk line early and gets it resealed is protecting the paint job around it. Waiting until the paint is visibly peeling at that joint usually means the substrate underneath has already been exposed to a full winter or two of cycling, which turns a small maintenance task into part of the next full repaint.",
          },
        ],
      },
    ],
    ctaServiceSlug: "exterior-painting",
    ctaText:
      "A coating spec built for freeze-thaw is different from a generic exterior paint job. See how we approach caulk, prep and product selection for Missouri's climate.",
  },
  {
    slug: "refinish-vs-replace-kitchen-cabinets",
    title: "Refinish or Replace? A Kitchen Cabinet Guide",
    metaTitle: "Refinish vs Replace Kitchen Cabinets Guide",
    metaDescription:
      "Refinishing, refacing and replacement solve different problems. Here's the honest breakdown so you don't overpay to fix a kitchen that isn't broken.",
    category: "Cabinets",
    datePublished: "2025-04-08",
    dateModified: "2025-04-08",
    excerpt:
      "Refinish, reface, or replace — three words that get used interchangeably even though they solve completely different problems.",
    imageAlt: "Freshly refinished white kitchen cabinet doors with new hardware",
    intro: [
      {
        type: "p",
        text: "Most kitchen cabinets in St. Louis County aren't broken — the boxes are solid, the doors close the way they did on day one, and the layout still works for the family using it. They just look like the decade they were installed in. That distinction matters, because it determines which of three very different projects actually solves the problem.",
      },
    ],
    sections: [
      {
        heading: "Three words, three different jobs",
        blocks: [
          {
            type: "ul",
            items: [
              "**Refinishing** keeps your existing boxes and doors. Everything gets cleaned, degreased, sanded, primed, and sprayed with a new color or stain. It's the least expensive of the three options, the fastest, and the right call when the cabinets are structurally sound and the layout already works.",
              "**Refacing** keeps the boxes but replaces the doors and drawer fronts, then veneers the visible box surfaces to match. It costs meaningfully more than refinishing, and often lands closer to full replacement cost than homeowners expect going in.",
              "**Replacement** removes everything. It's the only one of the three that lets you change the layout, add features like pull-out shelving, or fix a kitchen that genuinely doesn't function well.",
            ],
          },
        ],
      },
      {
        heading: "The question that actually decides it",
        blocks: [
          {
            type: "p",
            text: "The decision usually comes down to one question: is the problem how the kitchen looks, or how it works? If the boxes are sound and the layout serves the household fine, refinishing changes the entire visual character of the room — for a fraction of what replacement costs, and without the demolition, plumbing disconnection, or countertop removal that a full replacement requires.",
          },
          {
            type: "p",
            text: "If the actual complaint is that there isn't enough storage, the layout fights how the kitchen gets used, or the boxes themselves are failing, no amount of new paint fixes that. That's a replacement conversation, not a finish conversation.",
          },
        ],
      },
      {
        heading: "What determines whether refinishing is a good candidate",
        blocks: [
          {
            type: "p",
            text: "Solid wood and plywood cabinets refinish well under normal conditions. Laminate and thermofoil can be refinished too, but they need specific bonding primers and are less forgiving of shortcuts — if the surface is already peeling or bubbling at the door edges, that's usually a sign the substrate underneath is already compromised, and painting over it won't hold.",
          },
          {
            type: "p",
            text: "Open-grain woods like oak are their own category. The grain will telegraph straight through paint unless it's filled first, which is an added step and an added cost. Some homeowners like the texture that comes through; others expect a smooth, modern look and are disappointed when the grain shows anyway. That's worth deciding before the first coat goes on, not after.",
          },
        ],
      },
      {
        heading: "How long each option actually lasts",
        blocks: [
          {
            type: "p",
            text: "A professionally applied refinish typically holds eight to fifteen years with normal care. New cabinets can run twenty to thirty years. That comparison only matters, though, if the boxes were actually the problem — if they aren't, you're weighing the lifespan of a finish against the cost of replacing something that wasn't broken in the first place.",
          },
        ],
      },
    ],
    ctaServiceSlug: "cabinet-refinishing",
    ctaText:
      "Not sure which category your kitchen falls into? See our cabinet refinishing process — we'll tell you honestly whether refinishing gets you what you're picturing.",
  },
  {
    slug: "eggshell-vs-satin-paint-sheen",
    title: "Eggshell vs Satin: Picking a Sheen by Room",
    metaTitle: "Eggshell vs Satin Paint Sheen by Room",
    metaDescription:
      "Sheen affects durability and how flaws show, not just shine. Here's how to match eggshell and satin paint to the rooms in your home that need them.",
    category: "Interior",
    datePublished: "2025-01-28",
    dateModified: "2025-01-28",
    excerpt:
      "Sheen isn't a style preference — it changes how a wall hides flaws, how easily it cleans, and how long it looks fresh in a high-traffic room.",
    imageAlt: "Close-up comparison of eggshell and satin paint sheen on interior wall samples",
    intro: [
      {
        type: "p",
        text: "Homeowners usually pick a paint sheen the way they pick a paint color — by what looks good on the sample card. Sheen deserves more thought than that, because it changes how a wall behaves in daily use, not just how it looks under a showroom light.",
      },
    ],
    sections: [
      {
        heading: "What sheen actually does",
        blocks: [
          {
            type: "p",
            text: "Eggshell has a soft, low sheen that does a good job hiding minor wall imperfections — nail pops, slight texture variation, small repairs. That makes it a common default for living rooms, dining rooms, and bedrooms, where the walls see moderate use and the priority is a smooth, low-glare look.",
          },
          {
            type: "p",
            text: "Satin carries more sheen, which means it cleans more easily and holds up better against scrubbing. That durability is exactly why it's the usual pick for kitchens, bathrooms, hallways, and kids' rooms — surfaces that need to survive fingerprints, splatter, and the occasional wipe-down without dulling.",
          },
        ],
      },
      {
        heading: "The trade-off nobody mentions",
        blocks: [
          {
            type: "p",
            text: "More sheen doesn't just mean more durability — it also means more visible surface flaws. A satin wall shows drywall imperfections, roller marks, and prior patch work more readily than an eggshell wall does, because light reflects off a glossier surface at a sharper angle. That's why higher-traffic rooms that get satin also need more careful surface prep beforehand; the finish will show whatever is underneath it, for better or worse.",
          },
        ],
      },
      {
        heading: "Matching sheen at touch-up time",
        blocks: [
          {
            type: "p",
            text: "One of the more common interior mistakes isn't picking the wrong sheen originally — it's touching up a wall later with the wrong one. A satin wall touched up with leftover eggshell will read as a visible patch forever, even in the exact same paint color, because the sheen mismatch catches the light differently than the surrounding wall. If you're not sure what sheen is currently on a wall, it's worth checking before doing any touch-up work yourself.",
          },
        ],
      },
      {
        heading: "A simple room-by-room starting point",
        blocks: [
          {
            type: "ul",
            items: [
              "**Living rooms and bedrooms** — eggshell, for the softer look and flaw-hiding.",
              "**Kitchens and bathrooms** — satin, for cleanability against grease and moisture.",
              "**Hallways and kids' rooms** — satin, for durability against contact and scuffing.",
              "**Ceilings** — typically a flat or matte finish regardless of the walls, since ceilings see almost no direct contact.",
            ],
          },
        ],
      },
    ],
    ctaServiceSlug: "interior-painting",
    ctaText:
      "Picking the right sheen is only half the job — proper prep is what makes it look right. See our interior painting process for how we handle both.",
  },
  {
    slug: "why-drywall-patch-still-visible",
    title: "Why Your Drywall Patch Still Shows",
    metaTitle: "Why a Drywall Patch Still Shows After Paint",
    metaDescription:
      "A drywall repair that still catches the light usually failed on flatness or texture, not the paint color. Here's what a repair actually has to match.",
    category: "Interior",
    datePublished: "2025-05-06",
    dateModified: "2025-05-06",
    excerpt:
      "Almost nobody calls about drywall because of the hole. They call because the patch that was supposed to disappear is still catching the light.",
    imageAlt: "Wall with a visible drywall patch outline under raking window light",
    intro: [
      {
        type: "p",
        text: "Drywall repair sounds like a simple job — fill the hole, sand it, paint over it. But most homeowners who've had a patch done know the frustrating result: the hole is gone, and yet the patch is still obviously there, especially in afternoon light. That's not really a patching failure. It's a matching failure, and matching is the part of the job that actually determines whether a repair disappears.",
      },
    ],
    sections: [
      {
        heading: "It's a matching problem, not a filling problem",
        blocks: [
          {
            type: "p",
            text: "A drywall repair has to match the surrounding wall on more than one dimension at once, and a patch that gets even one of them wrong will show. The first and most common failure point is flatness: if joint compound isn't feathered out wide enough beyond the damaged area, a straightedge held across the repair will reveal gaps and slightly raised or sunken spots. Under raking light — from a window in the afternoon or a can light overhead — that unevenness casts a visible shadow line, and it's obvious from across the room even though the hole itself is completely filled.",
          },
        ],
      },
      {
        heading: "Why texture is the part people underestimate",
        blocks: [
          {
            type: "p",
            text: "Beyond flatness, the wall's texture has to be matched too. Most St. Louis County homes have some form of applied texture — orange peel, knockdown, or a hand-troweled finish — and each of those has its own pattern and scale. A perfectly flat, smooth patch dropped into a textured wall will always be visible, no matter how well the paint color matches, because the surrounding wall has a texture the patch simply doesn't have. Matching texture convincingly takes practice and the right tools; it isn't something that happens by accident with a single pass of a trowel.",
          },
        ],
      },
      {
        heading: "Why paint alone can't fix a bad patch",
        blocks: [
          {
            type: "p",
            text: "It's a common instinct to think a fresh coat of paint will hide an imperfect patch. In practice, paint tends to do the opposite — a glossier sheen actually highlights flatness problems more, because it reflects light more directly off any high or low spots. Flat and matte finishes forgive minor texture mismatches slightly better than satin or eggshell, but neither can fully disguise a repair that wasn't feathered or textured correctly underneath.",
          },
          {
            type: "p",
            text: "This is also why priming matters more on a repair than people assume. Fresh joint compound is porous, and paint applied directly over it without a primer absorbs unevenly — creating a dull, flat-looking patch known as flashing, which is visible even when the texture and flatness are otherwise well matched.",
          },
        ],
      },
      {
        heading: "What a repair that disappears actually requires",
        blocks: [
          {
            type: "p",
            text: "A drywall repair that truly blends in gets three things right at once: the compound is feathered wide and sanded flat, the texture is matched to the surrounding wall's pattern, and the area is properly primed before the finish coat goes on. Skip any one of the three, and the wall will still tell you exactly where the damage used to be — just in a slightly different way than a hole would have.",
          },
        ],
      },
    ],
    ctaServiceSlug: "drywall-repair",
    ctaText:
      "Have a patch that's still visible from your last repair? Get a free estimate and we'll assess what it actually takes to make it disappear.",
  },
  {
    slug: "lead-safe-painting-pre-1978-homes",
    title: "Lead Paint Rules for Pre-1978 Homes",
    metaTitle: "Lead Paint Rules for Pre-1978 Homes",
    metaDescription:
      "Federal rules require an EPA Lead-Safe Certified firm for paid work on most pre-1978 homes. Here's what the thresholds actually mean for your project.",
    category: "Compliance",
    datePublished: "2025-02-18",
    dateModified: "2025-02-18",
    excerpt:
      "If your home was built before 1978, federal law puts real requirements on any paid contractor disturbing painted surfaces — and the threshold is lower than most people think.",
    imageAlt: "Older St. Louis County home exterior with original wood trim being prepped for painting",
    intro: [
      {
        type: "p",
        text: "A lot of St. Louis County housing predates 1978, which is the year the federal government banned lead-based residential paint. That date matters for more than trivia — it triggers a specific federal rule that governs how paid contractors are allowed to disturb painted surfaces in older homes, and the threshold for that rule is lower than most homeowners assume.",
      },
    ],
    sections: [
      {
        heading: "What the rule actually says",
        blocks: [
          {
            type: "p",
            text: "The EPA's Renovation, Repair and Painting (RRP) rule requires that any paid work disturbing more than six square feet of interior painted surface, or more than twenty square feet of exterior painted surface, in a home built before 1978 be performed by an EPA Lead-Safe Certified firm using contained work practices. That's not a large threshold — a normal exterior repaint crosses twenty square feet within the first hour of scraping window trim and soffits, and a typical interior repair or repaint clears six square feet almost immediately.",
          },
        ],
      },
      {
        heading: "Why the threshold is set so low",
        blocks: [
          {
            type: "p",
            text: "The rule exists because disturbing lead-based paint — through scraping, sanding, or heat — can create lead dust and chips that are hazardous, particularly to children and pregnant women. Because that risk exists at a small scale, the law doesn't wait for a large renovation to apply; it applies as soon as a paid contractor's work crosses those modest square-footage numbers on a pre-1978 property.",
          },
        ],
      },
      {
        heading: "What certification actually requires",
        blocks: [
          {
            type: "p",
            text: "A firm holding EPA Lead-Safe certification has agreed to follow specific containment and cleanup practices designed to prevent lead dust from spreading during the work and to verify the area is properly cleaned afterward. This isn't a marketing badge — it reflects a documented process the firm is expected to follow on every applicable job, not just the ones where a homeowner happens to ask about it.",
          },
        ],
      },
      {
        heading: "What this means if you're hiring a contractor",
        blocks: [
          {
            type: "p",
            text: "If your home was built before 1978 — which describes a large share of the housing stock in cities like Kirkwood, Webster Groves, Manchester, and older sections of Ballwin — it's worth asking any contractor bidding the job directly for their firm's EPA Lead-Safe certification, not just assuming they have it. A contractor who can't produce it, or who seems unfamiliar with the requirement, is a sign the job may not be handled with the containment practices the law actually requires.",
          },
          {
            type: "p",
            text: "This applies to both interior and exterior work, and it applies regardless of whether lead paint has been confirmed on the specific surface being worked on — the rule is based on the home's construction date, not on testing every layer of paint before starting.",
          },
        ],
      },
    ],
    ctaServiceSlug: "interior-painting",
    ctaText:
      "ValuePro Painting is EPA Lead-Safe Certified. Whether it's an interior repaint or an exterior job, ask us about our certification before you ask anyone else.",
  },
  {
    slug: "painting-historic-homes-kirkwood",
    title: "Painting Kirkwood's Historic Homes",
    metaTitle: "Painting Historic Homes in Kirkwood, MO",
    metaDescription:
      "Kirkwood's historic districts and pre-1978 housing stock need a different painting approach than newer construction. Here's what that actually means.",
    category: "Locations",
    datePublished: "2025-03-25",
    dateModified: "2025-03-25",
    excerpt:
      "A Victorian near the Kirkwood train station and a 1960s ranch off Big Bend are two different painting jobs — and treating them the same does one of them badly.",
    imageAlt: "Historic Victorian-style home exterior trim in Kirkwood, Missouri",
    intro: [
      {
        type: "p",
        text: "There's no single \"Kirkwood house.\" The city was established in 1853 as the first planned residential commuter suburb west of the Mississippi, and its housing reflects more than a century and a half of continuous building — bungalows, Craftsman homes, Cape Cod Revivals, American Foursquares, Tudor Revivals, Colonial Revivals, Prairie homes, Victorians, ranches, and mid-century moderns all sit within the same city limits. Painting Kirkwood well means recognizing which of those you're standing in front of.",
      },
    ],
    sections: [
      {
        heading: "Why Kirkwood's age changes the job",
        blocks: [
          {
            type: "p",
            text: "Kirkwood incorporated in 1865 and still centers on its 1893 train station, which continues to serve Amtrak today. A city built out that early is a city where pre-1978 construction is the rule rather than the exception — and that has a direct, practical consequence: the federal lead-safe rule applies to the overwhelming majority of exterior and interior repaint work here. A normal exterior repaint on a home near the Jefferson-Argonne or Meacham Highlands districts will cross the federal disturbance threshold within the first hour of scraping trim, which makes EPA Lead-Safe certification something to verify, not assume, when hiring a contractor.",
          },
        ],
      },
      {
        heading: "Historic districts and review expectations",
        blocks: [
          {
            type: "p",
            text: "Kirkwood documents 85 designated landmarks and nine local historic districts, alongside multiple properties and districts on the National Register, including Jefferson-Argonne, North Taylor, and Meacham Highlands. Homes inside these districts commonly carry review expectations for exterior changes, which means a color scheme change on a designated property may need a conversation with the city before work begins — a short step that prevents a far more expensive one after the fact.",
          },
        ],
      },
      {
        heading: "Original trim needs a different hand",
        blocks: [
          {
            type: "p",
            text: "Original wood trim, porch columns, railings, and detail work are typically where an older Kirkwood house shows its age first, and they need hand prep rather than a fast spray-and-go approach. A spray gun moving quickly across ornate trim will flatten detail that took real craftsmanship to produce in the first place. That slower, more deliberate approach is the difference between a repaint that respects the house's original character and one that quietly erodes it, coat by coat.",
          },
        ],
      },
      {
        heading: "Not every Kirkwood house is historic",
        blocks: [
          {
            type: "p",
            text: "Alongside the landmark districts, Kirkwood also has substantial mid-century housing stock in neighborhoods out toward Geyer, Watson, and Big Bend — ranches and split-levels built well after the Victorian-era core of the city. These homes still often predate 1978, so lead-safe practices still apply, but the surfaces themselves — flatter trim profiles, simpler siding details — call for a different pace of work than a hand-detailed Victorian porch does. Both are normal work in Kirkwood; they're just not the same job.",
          },
        ],
      },
    ],
    ctaServiceSlug: "exterior-painting",
    ctaText:
      "Have an older Kirkwood home with original trim worth keeping? See our exterior painting process, or visit our Kirkwood service area page for more on how we work in the city's historic districts.",
  },
  {
    slug: "mildew-shaded-elevations-wildwood",
    title: "Wildwood's Shaded Elevations and Mildew",
    metaTitle: "Mildew on Shaded House Elevations in Wildwood",
    metaDescription:
      "Wildwood's wooded lots keep north and east house elevations damp longer after every rain — exactly where mildew establishes on exterior paint finishes.",
    category: "Locations",
    datePublished: "2025-04-22",
    dateModified: "2025-04-22",
    excerpt:
      "Shade isn't neutral for exterior paint. In Wildwood's wooded lots, it's often the single biggest factor in how long a coating actually lasts.",
    imageAlt: "Shaded north-facing house exterior wall under mature trees in Wildwood, Missouri",
    intro: [
      {
        type: "p",
        text: "Wildwood is the largest city by land area in St. Louis County and the third largest in Missouri — roughly 68 square miles holding around 35,400 people, which works out to only about 530 residents per square mile. That low density comes from estate lots and mature wooded acreage, and for exterior paint, the trees aren't just scenery. They're one of the biggest factors in whether a coating holds up.",
      },
    ],
    sections: [
      {
        heading: "Why shade accelerates mildew, not sun damage",
        blocks: [
          {
            type: "p",
            text: "Most people assume sun exposure is the main threat to exterior paint, and on south and west elevations, it is — UV fades pigment and breaks down binders over time. But on north and east-facing walls under heavy tree cover, the bigger issue is moisture. Shaded elevations dry out far more slowly after rain than exposed ones, and that extended dampness is exactly the condition mildew needs to establish and spread across a painted surface.",
          },
        ],
      },
      {
        heading: "Why it keeps coming back after a wash",
        blocks: [
          {
            type: "p",
            text: "Pressure washing removes the mildew that's currently visible, but it doesn't change the underlying condition that let it grow in the first place. If the elevation stays shaded and slow-drying, and if the coating going back on doesn't contain a mildewcide, the growth typically returns within a season. Both pieces have to be addressed together — the cleaning and the coating — or the homeowner ends up rewashing the same wall every year without solving anything.",
          },
        ],
      },
      {
        heading: "What a Wildwood exterior spec should account for",
        blocks: [
          {
            type: "p",
            text: "For homes on wooded lots, mildew-resistant coatings on the shaded elevations aren't optional upgrades — they're the baseline spec. It's also worth washing shaded elevations somewhat more frequently between full repaints than sun-exposed ones, since moisture and organic growth accumulate faster there regardless of how good the underlying coating is.",
          },
        ],
      },
      {
        heading: "Access is its own consideration",
        blocks: [
          {
            type: "p",
            text: "Wildwood's estate lots and long private drives also change the logistics of a job in ways that smaller subdivision lots don't. Staging equipment, reaching elevations set back from the road, and working around mature landscaping all take more planning on a wooded acreage lot than on a standard subdivision property — which is one more reason a Wildwood bid should be built from an actual site walk rather than estimated from the road.",
          },
        ],
      },
    ],
    ctaServiceSlug: "exterior-painting",
    ctaText:
      "If mildew keeps coming back on a shaded wall, the fix is usually the coating, not just another wash. See our exterior painting process or visit our Wildwood service area page.",
  },
  {
    slug: "chesterfield-exterior-painting-guide",
    title: "Chesterfield Exteriors: Big Houses, Real Prep",
    metaTitle: "Chesterfield MO Exterior Painting Guide",
    metaDescription:
      "Chesterfield's two-story elevations and tall gables need real access equipment and a proper caulk spec. Here's what to expect from an accurate bid.",
    category: "Locations",
    datePublished: "2025-05-20",
    dateModified: "2025-05-20",
    excerpt:
      "A Chesterfield exterior bid built from the driveway is a bid that's about to be wrong. Two-story elevations need to be measured, not estimated.",
    imageAlt: "Two-story house exterior with tall gables in Chesterfield, Missouri",
    intro: [
      {
        type: "p",
        text: "Chesterfield incorporated in 1988 and covers roughly 32 square miles with more than 47,000 residents, sitting about 25 minutes west of downtown St. Louis along I-64. Its housing reflects the era it was built in: predominantly newer construction on generous lots, with two-story elevations, tall gables, and long runs of trim that simply don't exist on the same scale in the county's older, inner-ring suburbs.",
      },
    ],
    sections: [
      {
        heading: "Why size changes the bidding process",
        blocks: [
          {
            type: "p",
            text: "Bidding a Chesterfield exterior accurately means measuring what's actually up there — total elevation height, trim linear footage, gable area — rather than estimating from the ground. A house with a tall two-story entry and steep roof gables has significantly more painted surface than its footprint suggests, and a bid that doesn't account for that will either come in too low or require a change order once the crew is actually on site.",
          },
        ],
      },
      {
        heading: "Access equipment isn't optional here",
        blocks: [
          {
            type: "p",
            text: "Painting Chesterfield's larger elevations properly requires real access equipment, not just an extension ladder. Second-story trim, tall gables, and steep grade changes around the foundation all need to be reached safely for prep to happen correctly. A crew that can't reach a surface safely will almost always cut corners on exactly the surfaces that fail first — which defeats the purpose of the repaint before it even starts.",
          },
        ],
      },
      {
        heading: "What's actually attacking a Chesterfield exterior",
        blocks: [
          {
            type: "p",
            text: "Because Chesterfield's housing stock is largely newer construction, these homes generally aren't fighting the lead paint or 1950s substrate issues that show up in older county suburbs. Instead, the main pressures are sun exposure on large south and west-facing elevations, and caulk performance across a lot of linear feet of trim. More trim simply means more joints, and more joints means more places where caulk failure can let water in and start freeze-thaw damage underneath the paint film.",
          },
        ],
      },
      {
        heading: "The commercial side of Chesterfield",
        blocks: [
          {
            type: "p",
            text: "Chesterfield's own description of itself — office buildings, tree-lined neighborhoods, shopping centers, and rustic horse farms across rolling hills — is a fair summary of a city with a real commercial base alongside its residential streets. Office parks and retail buildings here need exterior work scheduled around business hours as much as around weather, which is a different planning problem than a purely residential exterior repaint.",
          },
        ],
      },
    ],
    ctaServiceSlug: "exterior-painting",
    ctaText:
      "Have a two-story Chesterfield exterior that needs a bid built from real measurements? See our exterior painting process or visit our Chesterfield service area page.",
  },
  {
    slug: "webster-groves-trim-painting",
    title: "What Webster Groves Trim Work Actually Takes",
    metaTitle: "Trim Painting in Webster Groves, MO",
    metaDescription:
      "Webster Groves homes have more painted surface than their square footage suggests. Deep eaves and bracketed trim take real time to prep the right way.",
    category: "Locations",
    datePublished: "2025-06-10",
    dateModified: "2025-06-10",
    excerpt:
      "A Webster Groves bid that treats the house as wall area alone is a bid that's about to run short on trim.",
    imageAlt: "Detailed bracketed eave and window trim on a home in Webster Groves, Missouri",
    intro: [
      {
        type: "p",
        text: "Webster Groves homes tend to carry more painted surface than their square footage suggests. Deep eaves, bracketed detail, window casings with real profile, and porches with columns and rails are common features here — the kind that look effortless from the street and take a crew considerably longer to prep properly than a plain, flat-trimmed exterior would.",
      },
    ],
    sections: [
      {
        heading: "An inner-ring suburb with an inner-ring housing stock",
        blocks: [
          {
            type: "p",
            text: "Webster Groves is one of St. Louis's traditional inner-ring suburbs, grouped with Shrewsbury and Rock Hill by the local area chamber, which has served these communities since 1937. That long history is a useful proxy for the housing itself — established, long-settled residential fabric built out well before west county's postwar subdivisions, with the ornamental trim detail that era of construction tends to include.",
          },
        ],
      },
      {
        heading: "Why trim takes longer than walls",
        blocks: [
          {
            type: "p",
            text: "Flat wall area is fast to prep and paint. Detailed trim is not. Every bracket, every profiled window casing, every porch column and railing has multiple faces and edges that need scraping, sanding, and priming individually, rather than in one continuous pass the way a flat wall allows. On a Webster Groves house with this level of detail, trim work alone can take as long as the entire field of the siding — which is exactly the part a quick walk-by estimate tends to underestimate.",
          },
        ],
      },
      {
        heading: "Lead-safe practices and tight lots, together",
        blocks: [
          {
            type: "p",
            text: "The same age that produces this ornamental detail also means pre-1978 construction is the default assumption in Webster Groves, putting EPA Lead-Safe certification directly into play on ordinary exterior work. Combine that with tighter lot spacing than west county's newer subdivisions, and containment during prep becomes more than a compliance requirement — with houses sitting close together, controlling dust and debris during scraping is also basic consideration for the property next door.",
          },
        ],
      },
      {
        heading: "What a proper trim-focused bid looks like",
        blocks: [
          {
            type: "p",
            text: "A bid that accounts for Webster Groves trim honestly should separate trim scope from wall scope, rather than folding both into one flat number. That separation is what allows a homeowner to see where the time and cost in the estimate is actually going, and it's a reasonable thing to ask for from any contractor bidding a detail-heavy house.",
          },
        ],
      },
    ],
    ctaServiceSlug: "exterior-painting",
    ctaText:
      "Detail work is where a Webster Groves estimate gets honest. See our exterior painting process or visit our Webster Groves service area page.",
  },
  {
    slug: "creve-coeur-1970s-ranch-painting",
    title: "Painting a 1970s Creve Coeur Ranch",
    metaTitle: "Painting a 1970s Ranch in Creve Coeur, MO",
    metaDescription:
      "Creve Coeur's mid-century ranches have overhangs, fascia and wood detailing that need a lighter touch than newer infill construction next door.",
    category: "Locations",
    datePublished: "2025-06-24",
    dateModified: "2025-06-24",
    excerpt:
      "A 1970s ranch and a 2020 custom build can share a Creve Coeur property line — and have almost nothing else in common as painting projects.",
    imageAlt: "Mid-century modern ranch home exterior with deep overhangs in Creve Coeur, Missouri",
    intro: [
      {
        type: "p",
        text: "Creve Coeur has a housing pattern that shows up here more cleanly than almost anywhere else in the county: a 1970s ranch and a modern custom build sitting on the same street, sometimes sharing a property line. Most Creve Coeur homes were constructed in the 1970s, with a substantial share of the housing stock dating from 1970 to 1999 and roughly another quarter from 1940 to 1969 — including genuine mid-century modern ranches in neighborhoods like River Bend.",
      },
    ],
    sections: [
      {
        heading: "Why mid-century homes need a lighter touch",
        blocks: [
          {
            type: "p",
            text: "Mid-century modern ranches are defined by low-slope rooflines, deep overhangs, and wide fascia runs — architectural features that were deliberately designed to be visible, not hidden. Original wood detailing on these homes needs a lighter hand than a heavy spray coat would give it; the goal is to coat the wood and protect it, not to bury the detailing under a thick film or fill in reveals with caulk that was never part of the original design.",
          },
        ],
      },
      {
        heading: "The lead-safe piece of the older third",
        blocks: [
          {
            type: "p",
            text: "The roughly quarter of Creve Coeur's housing stock dating from 1940 to 1969 is entirely pre-1978, which puts lead-safe practices directly into play on that portion of the city's homes. This is a meaningful share of the market here — enough that EPA Lead-Safe certification matters in Creve Coeur in a way it simply doesn't in a city built predominantly after 1990.",
          },
        ],
      },
      {
        heading: "New infill is a different job entirely",
        blocks: [
          {
            type: "p",
            text: "Layered on top of the older housing stock is heavy infill — newer, larger builds dropped onto established streets, some of them recent construction on lots that previously held something much smaller. These homes call for a different approach altogether: large elevations, tight caulk specs given the volume of trim and siding seams, and finishes selected to match a builder's existing palette rather than an owner's individual color preference.",
          },
        ],
      },
      {
        heading: "Two houses, one crew, two different plans",
        blocks: [
          {
            type: "p",
            text: "Painting a 1970s ranch and a new infill build in the same week isn't unusual in Creve Coeur, but it means walking in with two different plans rather than one generic approach. The ranch needs careful, detail-preserving work on original wood; the infill build needs large-elevation efficiency and a caulk spec built for a lot of linear footage. Treating either one like the other produces a worse result on both.",
          },
        ],
      },
    ],
    ctaServiceSlug: "exterior-painting",
    ctaText:
      "Whether your home is a mid-century original or newer infill, see our exterior painting process or visit our Creve Coeur service area page for more detail.",
  },
  {
    slug: "ballwin-subdivision-home-repaint",
    title: "Repainting Your Ballwin Subdivision Home",
    metaTitle: "Repainting a Subdivision Home in Ballwin, MO",
    metaDescription:
      "Ballwin's postwar subdivisions share siding and trim details house to house. Here's what that means for lead-safe practices and repaint bids.",
    category: "Locations",
    datePublished: "2025-07-08",
    dateModified: "2025-07-08",
    excerpt:
      "Ballwin's subdivisions were largely built out at once — which means a lot of neighboring houses share the exact same failure points.",
    imageAlt: "Postwar subdivision home exterior in Ballwin, Missouri",
    intro: [
      {
        type: "p",
        text: "Ballwin was established in 1837 but didn't incorporate until December 1950, and its 2020 population of 31,103 sits on just under nine square miles. That combination tells you almost everything about the housing stock here: this is a city that filled in during the postwar decades, subdivision by subdivision, on relatively compact lots — much of it going up around the same time, using the same materials and details.",
      },
    ],
    sections: [
      {
        heading: "Why subdivision uniformity is actually useful",
        blocks: [
          {
            type: "p",
            text: "Because so much of Ballwin's housing went up in the same era with similar siding, soffit, and trim details, a contractor familiar with the neighborhood can often identify what's failing on a given house before finishing a walk around the back elevation. If three houses on a street have the same style of wood trim, and two of them have visible failure at the same joint type, the third is worth checking there specifically — even before a full inspection.",
          },
        ],
      },
      {
        heading: "The pre-1978 factor in a postwar city",
        blocks: [
          {
            type: "p",
            text: "A large share of Ballwin's housing predates 1978, the year lead-based residential paint was banned federally. That means EPA Lead-Safe certification isn't a formality for a Ballwin repaint — it's a real requirement that applies to the majority of exterior work and much of the interior work happening in these subdivisions. Any contractor bidding a Ballwin home should be asked directly for their firm's certification, not just assumed to have it.",
          },
        ],
      },
      {
        heading: "What actually wears out first in a Ballwin subdivision",
        blocks: [
          {
            type: "p",
            text: "Given the age and construction style common here, the usual failure points are the ones freeze-thaw cycling targets everywhere in the region: caulk joints, window and door trim, and any exposed end grain on wood fascia or siding. Because so many Ballwin homes share similar construction details, these failure points tend to appear at a similar age across the neighborhood — which is useful information when deciding whether it's time to schedule an exterior repaint.",
          },
        ],
      },
      {
        heading: "Bidding a subdivision home",
        blocks: [
          {
            type: "p",
            text: "A fair bid on a Ballwin subdivision home should reflect the specific condition of that house — not a generic number based on square footage alone. The materials and construction era may be shared with the neighbors, but the actual wear on caulk, trim, and siding depends on that house's individual sun exposure, drainage, and maintenance history. A proper walk-around inspection, not a drive-by estimate, is what surfaces those differences.",
          },
        ],
      },
    ],
    ctaServiceSlug: "exterior-painting",
    ctaText:
      "We're based in Ballwin, so a subdivision repaint here is close to home for us — literally. See our exterior painting process or visit our Ballwin service area page.",
  },
  {
    slug: "hoa-paint-bid-comparison-guide",
    title: "How HOA Boards Should Compare Paint Bids",
    metaTitle: "How to Compare HOA Painting Bids",
    metaDescription:
      "The cheapest HOA paint bid is usually cheap for a reason — the gap is almost always in the prep work. Here's what a board should compare before signing.",
    category: "HOA",
    datePublished: "2025-03-04",
    dateModified: "2025-03-04",
    excerpt:
      "When one HOA painting bid comes in far below the others, the difference is almost never efficiency. It's prep that isn't in the scope.",
    imageAlt: "HOA community building exterior with multiple units ready for a repaint",
    intro: [
      {
        type: "p",
        text: "An HOA repaint isn't really a painting decision — it's a governance one. Before a brush touches a building, there's a reserve line item, a bid comparison, an architectural review, and often a resident vote involved. A board that compares bids on price alone, without understanding what's actually included in each one, is the board most likely to end up redoing the project in half the expected cycle.",
      },
    ],
    sections: [
      {
        heading: "Why the cheapest bid is rarely the best deal",
        blocks: [
          {
            type: "p",
            text: "When one bid comes in noticeably below the others, the difference is almost never a more efficient crew. It's prep scope that quietly isn't in the number — less scraping, less caulk replacement, fewer coats, a lower-grade product. Those differences don't show up on move-in day; they show up two or three years later, when the cheaper job starts failing while the more thorough one is still holding.",
          },
        ],
      },
      {
        heading: "What a board-ready proposal should actually contain",
        blocks: [
          {
            type: "p",
            text: "A proposal a board can genuinely evaluate — rather than just skim for the total — includes a one-page executive summary with price, timeline, warranty, and qualifications; scope broken out by building and substrate rather than a vague \"paint the buildings\" line; named materials, including exact product, sheen, and number of coats rather than a generic \"premium paint\" description; a documented color approval path with manufacturer names and codes; a phasing and notification plan for residents; and insurance and warranty terms in writing.",
          },
        ],
      },
      {
        heading: "Understanding your own approval timeline",
        blocks: [
          {
            type: "p",
            text: "Most associations route exterior changes through an architectural review committee before the board acts on them, and those review windows commonly run 30 to 60 days, though some fast-tracking communities respond in about two weeks. It's worth checking your own CC&Rs for an auto-approval clause — many contain language stating that if the committee misses its own stated response window, the request is deemed approved. Boards that understand their own timeline tend to get projects finished within a single season; boards that don't often lose an entire year to process delays.",
          },
        ],
      },
      {
        heading: "Reserve cycles and realistic timing",
        blocks: [
          {
            type: "p",
            text: "Exterior repaints are one of the most predictable line items in a reserve study, and repaint cycles for community exteriors commonly land in the seven-to-twelve-year range depending on climate and substrate. In a climate with real freeze-thaw cycling and summer humidity, communities are generally better served planning toward the shorter end of that range rather than the longer one — catching deterioration before it's visible from the parking lot, rather than after.",
          },
        ],
      },
    ],
    ctaServiceSlug: "hoa-properties",
    ctaText:
      "Bringing in a contractor before the bid deadline — not after — gives your board time to compare proposals properly. See how we build board-ready HOA proposals.",
  },
  {
    slug: "commercial-painting-without-closing",
    title: "Painting Your Business Without Closing",
    metaTitle: "Commercial Painting Without Closing Your Business",
    metaDescription:
      "After-hours phasing and low-VOC coatings let most St. Louis County businesses repaint without shutting down. Here's how the scheduling actually works.",
    category: "Commercial",
    datePublished: "2025-04-15",
    dateModified: "2025-04-15",
    excerpt:
      "For a business, the real cost of a repaint isn't the invoice — it's the hours the space can't be used. That's the number that decides everything.",
    imageAlt: "Empty retail storefront interior being painted overnight before business hours",
    intro: [
      {
        type: "p",
        text: "Business owners often assume a commercial repaint means closing the doors for a stretch of days. In most cases, that's not actually necessary. The real planning question isn't whether the paint can be applied — it's when the space is genuinely empty, and building the entire project schedule around that answer.",
      },
    ],
    sections: [
      {
        heading: "Three scheduling models, three different disruption levels",
        blocks: [
          {
            type: "ul",
            items: [
              "**After-hours and overnight.** The crew works once the last customer or employee has left. A zone gets painted, dries, and is back in service by morning. A typical office suite in the two-to-three-thousand-square-foot range usually takes three to five overnight sessions.",
              "**Phased zoning.** For larger buildings — multi-suite offices, medical facilities, hospitality — the crew works section by section, finishing and clearing each zone before moving to the next. It takes longer overall, but disruption stays contained to one area at a time rather than affecting the whole building at once.",
              "**Planned closures.** Businesses with an existing dark day or a predictable seasonal slow period get the fastest version of the project, since full, uninterrupted access lets a crew move at real speed.",
            ],
          },
        ],
      },
      {
        heading: "Why low-VOC coatings changed what's possible",
        blocks: [
          {
            type: "p",
            text: "Low-VOC and zero-VOC commercial coatings have made overnight and occupied-space work far more practical than it used to be. These products produce little to no lingering odor and cure quickly enough that a space painted overnight is genuinely ready for staff and customers by the next morning. That combination — minimal smell, fast cure — is what actually makes painting around a business's operating hours realistic instead of theoretical.",
          },
        ],
      },
      {
        heading: "Why after-hours work costs more, and why that's fair",
        blocks: [
          {
            type: "p",
            text: "Evening, overnight, and weekend labor costs more than standard daytime work, and phased projects add setup and teardown time to every single session rather than just once. That premium is real, but for almost any operating business, it's still smaller than the revenue and productivity lost by closing the doors for days at a time. The math almost always favors paying the after-hours premium over shutting down.",
          },
        ],
      },
      {
        heading: "Questions worth asking before signing",
        blocks: [
          {
            type: "p",
            text: "Any commercial painting contractor should be able to speak clearly to their actual after-hours availability, their experience painting occupied — not just vacant — commercial space, their commitment to low- or zero-VOC products in writing, what their warranty covers, and whether they can produce a certificate of insurance naming your business. A contractor who can't answer these plainly is a sign the project may not run as smoothly as the pitch suggests.",
          },
        ],
      },
    ],
    ctaServiceSlug: "commercial-painting",
    ctaText:
      "Tell us when your space is genuinely empty and we'll build the phasing plan around it. See our full commercial painting process.",
  },
  {
    slug: "cabinet-refinishing-timeline",
    title: "Cabinet Refinishing: What the Week Looks Like",
    metaTitle: "Cabinet Refinishing Timeline: What to Expect",
    metaDescription:
      "Cabinet refinishing disrupts a kitchen for days, not weeks. Here's what actually happens at each stage of the refinishing process, from start to finish.",
    category: "Cabinets",
    datePublished: "2025-05-13",
    dateModified: "2025-05-13",
    excerpt:
      "Cabinet refinishing is one of the few kitchen projects where the visual change is dramatic and the disruption is measured in days.",
    imageAlt: "Kitchen cabinet doors removed and labeled during a refinishing project",
    intro: [
      {
        type: "p",
        text: "One of the biggest misconceptions about cabinet refinishing is how long it takes. Homeowners picture a kitchen renovation timeline — weeks of disruption, living out of boxes, takeout every night. In practice, a refinishing project is a fundamentally shorter and less disruptive process than that, because it isn't touching the plumbing, the layout, or the countertops at all.",
      },
    ],
    sections: [
      {
        heading: "The stages, in order",
        blocks: [
          {
            type: "ol",
            items: [
              "**Assessment.** Box condition, door material, hinge and hardware condition, and how much grease has actually soaked into the existing finish near the range all get checked before anything is touched.",
              "**Label and remove.** Doors, drawer fronts, and hardware come off and get labeled so every piece returns to its exact original opening — a step that prevents mismatched gaps or misaligned hinges at reinstall.",
              "**Degrease.** This is the step that most commonly gets skipped by less careful crews, and it's the one that causes premature failures. Years of cooking residue sit on kitchen cabinets in a way no primer can bond through if it isn't fully removed first.",
              "**Sand and prep.** Scuff-sanding gives the primer mechanical grip, and any hardware holes that are being relocated or removed get filled at this stage.",
              "**Prime.** The correct bonding primer depends on the substrate — solid wood, plywood, laminate, and thermofoil all require different approaches.",
              "**Spray finish coats.** A sprayed finish, not a brushed one, is what produces the smooth, factory-like result people picture when they imagine refinished cabinets.",
              "**Cure and reinstall.** Once cured, doors go back onto their labeled openings with hardware reinstalled or upgraded.",
            ],
          },
        ],
      },
      {
        heading: "Where the kitchen stays usable, and where it doesn't",
        blocks: [
          {
            type: "p",
            text: "The disruptive stretch of a refinishing project is genuinely short. There's no demolition, no plumbing disconnection, and no countertop removal — the kitchen stays largely usable through most of the timeline, with the most disruptive days concentrated around the door removal and final reinstall stages.",
          },
        ],
      },
      {
        heading: "Why timelines vary between projects",
        blocks: [
          {
            type: "p",
            text: "The exact number of days depends heavily on cabinet count and whether doors are sprayed in a controlled shop environment or on-site with containment. In-shop spraying generally produces the most controlled, consistent result, while on-site spraying is used when full removal isn't practical for the project. Either way, the total timeline is measured in days, not the weeks or months a full kitchen renovation would require.",
          },
        ],
      },
      {
        heading: "What homeowners need to do to prepare",
        blocks: [
          {
            type: "p",
            text: "The main preparation task on the homeowner's side is emptying the cabinets completely before work begins. Boxes need to be empty so interiors and edges can be properly prepped and coated, and so nothing stored inside picks up dust or overspray during the process. Knowing exactly which cabinets need to be cleared, and when, is something a contractor should specify clearly before the project starts — not something homeowners have to guess at.",
          },
        ],
      },
    ],
    ctaServiceSlug: "cabinet-refinishing",
    ctaText:
      "Curious how many days your specific kitchen would take? See our full cabinet refinishing process for the details.",
  },
  {
    slug: "fascia-soffit-rot-warning-signs",
    title: "Fascia and Soffit: The Rot You Can't See",
    metaTitle: "Fascia and Soffit Rot Warning Signs",
    metaDescription:
      "Fascia and soffit sit directly in the water path and often fail before homeowners notice anything wrong. Here are the warning signs paint alone can't fix.",
    category: "Exterior",
    datePublished: "2025-07-22",
    dateModified: "2025-07-22",
    excerpt:
      "Fascia and soffit are the parts of a house that fail first and get looked at last — and paint can only do so much once rot has started.",
    imageAlt: "Close-up of house fascia and soffit trim along a roofline showing signs of wear",
    intro: [
      {
        type: "p",
        text: "Most homeowners never look closely at their fascia and soffit until a gutter problem forces the issue. That's unfortunate, because these two components sit directly in the path of water running off the roof, which makes them some of the first parts of a house to show real damage — often well before it's visible from the ground.",
      },
    ],
    sections: [
      {
        heading: "What fascia and soffit actually do",
        blocks: [
          {
            type: "p",
            text: "The fascia is the vertical board that runs along the edge of the roofline and carries the gutters. The soffit is the horizontal panel underneath the roof overhang, usually vented to allow airflow into the attic space. Together they form the transition between the roof and the exterior walls — and because gutters, runoff, and ice can all concentrate water right at this junction, both components take on more moisture exposure over time than most of the rest of the exterior.",
          },
        ],
      },
      {
        heading: "Why paint slows rot but doesn't stop it",
        blocks: [
          {
            type: "p",
            text: "A quality coating on sound fascia and soffit genuinely extends its life by sealing out moisture. But once wood has actually started to rot — softening, crumbling, or delaminating — paint can no longer do that job. Coating over rotted wood might hide the problem's appearance for a season, but it does nothing to stop the underlying decay, and it can make the eventual repair more expensive by delaying when the damage actually gets addressed.",
          },
        ],
      },
      {
        heading: "Warning signs worth checking for",
        blocks: [
          {
            type: "ul",
            items: [
              "Soft spots when pressed, especially near seams or corners",
              "Visible peeling or bubbling paint concentrated specifically along the roofline rather than the wall field",
              "Staining or dark streaking below the gutter line, which often indicates chronic overflow or a failed seal",
              "Any sagging or visible gap between the fascia board and the gutter it's supporting",
              "Aluminum soffit panels that look chalky or have a coating visibly separating from the metal surface",
            ],
          },
        ],
      },
      {
        heading: "Why aluminum soffit needs a different coating than wood",
        blocks: [
          {
            type: "p",
            text: "Wood fascia typically takes a premium exterior acrylic or an acrylic-urethane blend. Aluminum soffit is a different substrate entirely and needs a coating specifically rated for metal — using standard house paint on metal soffit is a common shortcut that tends to fail through poor adhesion, peeling away from the panel over time rather than wearing down gradually the way a properly rated coating would.",
          },
        ],
      },
      {
        heading: "The right sequence when rot is found",
        blocks: [
          {
            type: "p",
            text: "When rot is identified during an exterior painting job, the correct sequence is to repair or replace the damaged board first, and coat only after that repair is complete — never the reverse. A contractor whose scope is limited to painting, rather than carpentry, should identify rot plainly and tell the homeowner what needs replacing, rather than quietly coating over a problem that paint was never going to solve.",
          },
        ],
      },
    ],
    ctaServiceSlug: "exterior-painting",
    ctaText:
      "If you're seeing any of these warning signs, get an honest look before it becomes a bigger repair. See our exterior painting process, including how we handle fascia and soffit.",
  },
];

export function blogPostBySlug(slug: string): BlogPostData | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
