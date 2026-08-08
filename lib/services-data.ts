import type { ContentBlock } from "@/components/Prose";
import type { FAQItem } from "@/components/FAQAccordion";

export type ServiceSection = {
  heading: string;
  blocks: ContentBlock[];
};

export type AuthorityLink = {
  name: string;
  url: string;
  anchor: string;
};

export type ServicePageData = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: ContentBlock[];
  sections: ServiceSection[];
  faqs: FAQItem[];
  ctaHeading: string;
  ctaBody: string;
  authorityLink?: AuthorityLink;
  relatedServices: string[];
  relatedCities: string[];
  clientFacts: string[];
  contentComplete: boolean;
};

export const SERVICES_DATA: ServicePageData[] = [
  // ------------------------------------------------------------------
  // PAGE 1 — INTERIOR PAINTING
  // ------------------------------------------------------------------
  {
    slug: "interior-painting",
    name: "Interior Painting",
    metaTitle: "Interior Painting St. Louis County | ValuePro Painting",
    metaDescription:
      "Interior painting across St. Louis County — low-dust prep, clean lines, and EPA Lead-Safe certified crews. Walls, ceilings, trim and doors. Get a free estimate.",
    h1: "Interior Painting in St. Louis County",
    contentComplete: true,
    intro: [
      {
        type: "p",
        text: "Most interior repaints don't get scheduled because a wall failed. They get scheduled because the hallway finally looks worse than the rest of the house, or a room's color stopped matching how the family actually uses it. That's a different job than fixing damage — it means the finished result is judged against every other surface in the house, in daylight, by someone who lives there. ValuePro Painting works interior repaints across St. Louis County with that standard in mind: the prep is low-dust, the cut lines are sharp, and the house goes back to normal at the end of each day.",
      },
    ],
    sections: [
      {
        heading: "How long interior paint actually lasts, room by room",
        blocks: [
          {
            type: "p",
            text: "Homeowners are usually surprised that there isn't one number. Living rooms and dining rooms typically hold five to seven years because they see moderate traffic and almost no moisture. Adult bedrooms run five to ten. Kitchens are the short straw — grease, splatter, and heat mean three to four years is realistic. Hallways and stairwells wear fastest of anything in the house because of constant contact in a narrow space. Ceilings often go ten years or more unless something stained them. Baseboards and trim take the worst of it from vacuums, shoes, and pets, and often need attention every two to three years while the walls above them are still fine.",
          },
          {
            type: "p",
            text: "Knowing which surfaces are actually due is how a repaint stops being a whole-house expense and becomes a targeted one.",
          },
        ],
      },
      {
        heading: "Our interior process",
        blocks: [
          {
            type: "ol",
            items: [
              "**Walkthrough and surface assessment.** We identify what's actually failing versus what just looks dated — flashing, prior touch-up patches, moisture staining, nail pops, and any surface where the existing sheen will fight a new coat.",
              "**Lead-safe evaluation on pre-1978 homes.** ValuePro is EPA Lead-Safe Certified. On older St. Louis County housing stock this isn't optional paperwork — see the FAQ below.",
              "**Containment and protection.** Floors covered, furniture moved and wrapped, doorways sealed. Dust control is a prep decision, not a cleanup decision.",
              "**Repair and prep.** Patching, caulking gaps in trim and casing, sanding glossy surfaces so the new coat has something to grip, spot-priming stains and any bare or repaired area.",
              "**Priming.** Full or spot, depending on the substrate and the color change. Dark-to-light and light-to-dark are different jobs.",
              "**Finish coats.** Cut and roll, two coats standard, with attention to the wall-to-ceiling and wall-to-trim lines that are the first thing anyone notices.",
              "**Daily reset and final walkthrough.** The space is usable each evening. Final walkthrough is done with the homeowner, in the lighting the room actually has.",
            ],
          },
        ],
      },
      {
        heading: "What we paint inside",
        blocks: [
          {
            type: "p",
            text: "Walls, ceilings, trim, baseboards, door casing, doors, crown molding, closets, stairwells, basements and finished lower levels, and accent walls. If a wall needs more than a single color — a lime wash, a plaster finish, a decorative treatment — that's a different craft; see lime wash and specialized painting.",
          },
        ],
      },
      {
        heading: "The problems that ruin an interior job",
        blocks: [
          {
            type: "ul",
            items: [
              "**Sheen mismatch.** A satin wall touched up with eggshell reads as a patch forever, even in the same color.",
              "**Skipping primer over repairs.** Fresh joint compound is porous. Paint straight onto it and it absorbs unevenly, leaving a dull spot that shows in raking light. This is called flashing.",
              "**Painting over a moisture source.** A ceiling stain that came from a leak will come back through the new paint unless the leak is fixed and the stain is sealed with a stain-blocking primer.",
              "**Under-prepping glossy trim.** Old oil-based trim that hasn't been de-glossed will let the new coat peel off in sheets a year later.",
              "**Rushing recoat times.** Dry and cured aren't the same thing. Paint that's dry to the touch can still mar under a piece of furniture pushed back too early.",
            ],
          },
        ],
      },
      {
        heading: "Value framing",
        blocks: [
          {
            type: "p",
            text: "A good interior repaint is invisible work wrapped around a visible result. Nobody notices that the trim was de-glossed or that the patches were spot-primed — they notice that the room looks finished and stays that way. That's the part that separates a job that holds for seven years from one that starts showing its seams in eighteen months.",
          },
        ],
      },
    ],
    clientFacts: [
      "[CLIENT FACT REQUIRED — YEARS IN BUSINESS]",
      "[CLIENT FACT REQUIRED — WARRANTY TERMS]",
    ],
    faqs: [
      {
        question: "How often should I repaint the inside of my house?",
        answer:
          "There's no single answer, because rooms wear differently. Living and dining rooms usually hold five to seven years. Bedrooms run five to ten. Kitchens need it every three to four because of grease and heat. Hallways and stairwells go fastest. Ceilings often last a decade or more. Most homeowners repaint rooms in batches rather than doing the whole house at once.",
      },
      {
        question: "Do I need to move out while you paint?",
        answer:
          "No. We work room by room and reset each space at the end of the day so the house stays livable. Most interior projects are scheduled so that bedrooms and bathrooms are never all out of service at once. If you'd rather we work while you're away, we can sequence the job around your schedule.",
      },
      {
        question: "How much dust will there be?",
        answer:
          "Sanding creates dust — the question is where it goes. We contain the work area, cover floors and furniture, seal doorways, and vacuum as we go rather than at the end. You should not be finding drywall dust on a bookshelf two rooms away, and if you are, the containment wasn't done right.",
      },
      {
        question: "What's the difference between eggshell and satin, and which do I want?",
        answer:
          "Eggshell has a soft, low sheen that hides wall imperfections well — good for living rooms, dining rooms, and bedrooms. Satin has more sheen, cleans more easily, and stands up better to scrubbing, which makes it the usual pick for kitchens, bathrooms, hallways, and kids' rooms. More sheen also means more visible surface flaws, so the wall has to be prepped accordingly.",
      },
      {
        question: "My house was built before 1978. Does that change anything?",
        answer:
          "Yes, significantly. Federal law requires that any paid work disturbing more than six square feet of interior painted surface in a pre-1978 home be done by an EPA Lead-Safe Certified firm using contained work practices. ValuePro is certified. On older St. Louis County homes, a normal interior repaint crosses that threshold immediately, so this isn't a technicality — ask any contractor you're considering for their certification.",
      },
      {
        question: "Can you paint over wallpaper?",
        answer:
          "Sometimes, but it's usually the wrong call. Paint over wallpaper and you're betting the adhesive holds forever — if any seam lifts later, the paint lifts with it and the repair is worse than the original removal would have been. We'll assess it, but our default recommendation is removal, skim coat, and prime.",
      },
      {
        question: "How long before I can put the room back together?",
        answer:
          "Walls are typically dry to the touch within a few hours and safe for light use the same day. Full cure — the point where the film has hardened enough to resist marring — takes longer, often a couple of weeks depending on product and humidity. Practically: hang art the next day, but avoid sliding furniture hard against fresh walls for the first week.",
      },
      {
        question: "Do you paint ceilings and trim, or just walls?",
        answer:
          "All of it — ceilings, walls, trim, baseboards, casing, doors, and crown. Trim and baseboards are often the surfaces that actually need attention while the walls are still fine, since they take the most physical contact in the house.",
      },
      {
        question: "Will the new color look like the sample?",
        answer:
          "Not exactly, and that's normal. A two-inch chip under store lighting behaves differently than an entire wall under your fixtures and window exposure. We recommend sampling on the actual wall, checking it at morning and evening, and looking at it against your existing trim before committing.",
      },
    ],
    authorityLink: {
      name: "EPA's Lead-Safe certification requirements",
      url: "https://www.epa.gov/lead/renovation-repair-and-painting-program-contractors",
      anchor: "EPA's Lead-Safe certification requirements",
    },
    ctaHeading: "Ready to see what the rooms actually need?",
    ctaBody:
      "We'll walk the house with you, tell you which surfaces are genuinely due and which can wait, and put it in writing. Free estimate — call or send the form.",
    relatedServices: ["drywall-repair", "cabinet-refinishing"],
    relatedCities: ["ballwin", "kirkwood", "webster-groves", "chesterfield"],
  },

  // ------------------------------------------------------------------
  // PAGE 2 — EXTERIOR PAINTING
  // ------------------------------------------------------------------
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    metaTitle: "Exterior Painting St. Louis County | ValuePro Painting",
    metaDescription:
      "Exterior painting in St. Louis County built for Missouri freeze-thaw. Siding, stucco, brick, fascia and soffit. EPA Lead-Safe certified. Free estimate.",
    h1: "Exterior Painting in St. Louis County",
    contentComplete: true,
    intro: [
      {
        type: "p",
        text: "Exterior paint in eastern Missouri isn't fighting one thing, it's fighting the swing. Humid summers, genuinely cold winters, and shoulder seasons where the temperature can move forty degrees between morning and afternoon. That movement is what pries a coating off a house — not sunlight alone, and not rain alone. ValuePro Painting specs and schedules exterior work in St. Louis County around that reality, which mostly means doing the prep nobody sees and putting the paint on when the weather will actually let it cure.",
      },
    ],
    sections: [
      {
        heading: "When exterior painting should happen here",
        blocks: [
          {
            type: "p",
            text: "The workable window in the St. Louis area runs roughly late April through mid-June, and again from mid-September through late October. What matters isn't the calendar date but two conditions holding together: overnight lows staying reliably above 50°F, and afternoon humidity below about 75%. Both matter, because a film that goes on in the afternoon still has to cure through the night.",
          },
          {
            type: "p",
            text: "Crews that push jobs into November to clear a backlog are gambling — an early hard freeze can crack a film that hasn't fully cured. Because good crews book out weeks ahead during those windows, the practical advice for homeowners is to get bids in late winter for spring work.",
          },
        ],
      },
      {
        heading: "Why freeze-thaw is the real enemy",
        blocks: [
          {
            type: "p",
            text: "Water that soaks into porous brick, aging caulk, or bare wood expands when it freezes. That expansion is what lifts paint film off the substrate from underneath — which is why exterior failures usually start at joints, end grain, and previously-caulked seams rather than in the middle of a clean wall. The St. Louis region cycles through freezing and thawing many times each winter, so a coating here has to tolerate repeated movement, not just resist UV.",
          },
        ],
      },
      {
        heading: "What that means for the spec",
        blocks: [
          {
            type: "ul",
            items: [
              "**Mildew resistance.** Missouri summer humidity feeds mildew growth on north-facing and shaded elevations. Exterior coatings here need mildewcides or the chalky green comes back within a season.",
              "**UV-stable pigments.** South and west elevations take the most sun and fade first. Better pigment systems hold color longer and protect the binder underneath.",
              "**Film flexibility.** Coatings with higher elongation handle seasonal movement in wood siding and trim far better than rigid films. In a climate with forty-degree single-day swings, flexibility is what keeps the film intact when the wood moves.",
              "**Caulk selection.** Caulk fails before paint does at almost every exterior joint. It is a specification decision, not an afterthought.",
            ],
          },
        ],
      },
      {
        heading: "Our exterior process",
        blocks: [
          {
            type: "ol",
            items: [
              "**Inspection.** Elevation by elevation — failing caulk, chalking, peeling, exposed end grain, soft wood, gutter overflow staining, and mildew.",
              "**Lead-safe protocol on pre-1978 homes.** A normal exterior repaint disturbs well over the 20-square-foot federal threshold within the first hour of scraping soffits and window trim. ValuePro is EPA Lead-Safe Certified and works these homes with contained practices.",
              "**Wash.** Pressure washing to remove chalk, dirt, mildew, and spores. Surfaces then have to dry fully before anything goes on.",
              "**Scrape and sand.** Loose and failing film removed back to a sound edge, feathered so the transition doesn't telegraph.",
              "**Repairs and caulk.** Window and door perimeters, trim joints, and siding gaps sealed.",
              "**Spot-prime.** Bare wood, repairs, tannin-prone species, and any previously peeling area get primed before finish coats. Peeling that was never primed will peel again.",
              "**Finish coats.** Applied within the temperature and humidity window, working elevations in sequence so nothing sits half-done through a weather change.",
            ],
          },
        ],
      },
      {
        heading: "Fascia, soffit and trim",
        blocks: [
          {
            type: "p",
            text: "Fascia and soffit are the parts of a house that fail first and get looked at last. The fascia is the vertical board along the roof edge that carries the gutters; the soffit is the horizontal panel underneath. Both live directly in the water path, and both are where a repaint either buys another eight years or gets called back in two.",
          },
          {
            type: "p",
            text: "**What ValuePro does here:** preparation and coating of existing fascia, soffit, trim, eaves, and casing. Wood fascia takes premium exterior acrylic or an acrylic-urethane blend. Aluminum soffit needs a coating rated for metal — house paint on metal soffit is a common shortcut that fails. Where possible, trim boards are sealed on all faces rather than just the visible one, because water enters through end grain and back faces.",
          },
          {
            type: "p",
            text: "**What ValuePro does not do:** rot replacement and carpentry. If a board is soft, crumbling, or delaminating, coating it is throwing money away — paint slows rot, it does not stop it, and a rotted fascia left alone can eventually reach the roof overhang framing and the wall below. On inspection we identify rot, tell you plainly what has to be replaced, and coordinate the timing so the coating goes on after the repair is done, not over it.",
          },
        ],
      },
      {
        heading: "Value framing",
        blocks: [
          {
            type: "p",
            text: "An exterior repaint is the only maintenance a house gets that is also its first impression. The part that determines which of those two it delivers is entirely in the prep and the timing — whether the chalk actually came off, whether the bare wood got primed, and whether the finish coat went on in a window where it could cure. That work is invisible on day one and obvious in year five.",
          },
        ],
      },
    ],
    clientFacts: [
      "[CLIENT FACT REQUIRED — YEARS IN BUSINESS]",
      "[CLIENT FACT REQUIRED — WARRANTY TERMS]",
    ],
    faqs: [
      {
        question: "When is the best time of year to paint a house exterior in Missouri?",
        answer:
          "Late April through mid-June, and mid-September through late October. The conditions that matter are overnight lows staying above about 50°F and afternoon humidity under roughly 75%, because the film has to cure overnight, not just dry during the day. Summer heat and storms and late-fall freezes both cause problems. Book early — the good windows fill up.",
      },
      {
        question: "How long will an exterior paint job last here?",
        answer:
          "Longer than most homeowners expect if the prep was real, and much shorter if it wasn't. In this climate the limiting factor is usually caulk and joints rather than the field of the siding. Regular attention to seams and any spot where water sits will extend the whole job significantly. Sun-facing elevations will always fade before shaded ones.",
      },
      {
        question: "Can you paint brick?",
        answer:
          "Yes, but it's close to permanent — once brick is painted, going back is expensive and rarely comes out clean. Brick also has to breathe, so the coating choice matters more than on siding. We'll walk through the trade-off honestly before you commit rather than after.",
      },
      {
        question: "Do you pressure wash first, and do I need to worry about it?",
        answer:
          "Yes, and no. Washing removes chalk, dirt, mildew and spores so the new coat bonds to the substrate instead of to a layer of grime. We work at pressures appropriate to the surface — the goal is clean, not stripped. Surfaces then have to dry fully before coating, which is why a wash day and a paint day aren't the same day.",
      },
      {
        question: "What if there's rot in the fascia or trim?",
        answer:
          "We identify it and tell you. We don't replace it — we coat existing surfaces. Painting over soft or crumbling wood hides the problem for one season and makes the eventual repair bigger, so we'll flag what needs to be replaced and time our work to follow the repair rather than cover it.",
      },
      {
        question: "My house is from the 1960s. Does the lead rule apply?",
        answer:
          "Almost certainly. The federal RRP rule covers paid work disturbing more than 20 square feet of exterior painted surface on pre-1978 housing, and a normal repaint blows past that in the first hour of scraping soffits and window trim. ValuePro is EPA Lead-Safe Certified. Any contractor bidding your house should be able to produce their firm certification on request.",
      },
      {
        question: "Why is mildew coming back on the north side of my house?",
        answer:
          "Because that elevation stays shaded and damp, and because the previous coating likely had no mildewcide in it — or the surface was painted before it was properly cleaned of existing spores. Washing removes what's there; the right coating resists it coming back. Both steps are needed.",
      },
      {
        question: "Will you paint if rain is in the forecast?",
        answer:
          "No. Wet surfaces prevent bonding, and a film that gets rained on before it sets is a redo. Missouri forecasts change, so we sequence elevations to avoid leaving large areas half-finished, and we'd rather move a day than gamble a wall.",
      },
      {
        question: "Can you match my existing color?",
        answer:
          "Usually. Faded paint is not the same color it was, so matching what's currently on the house and matching what was originally specified are two different requests. If you have the original color name or a piece of unfaded siding from a protected area, that gives us the best starting point.",
      },
    ],
    authorityLink: {
      name: "the federal RRP rule for pre-1978 housing",
      url: "https://epa.gov/lead/lead-renovation-repair-and-painting-program",
      anchor: "the federal RRP rule for pre-1978 housing",
    },
    ctaHeading: "Get on the calendar before the window closes.",
    ctaBody:
      "Exterior work in St. Louis County has two good stretches a year and they book up. Walk the house with us, get a written scope, and pick your date.",
    relatedServices: ["interior-painting", "hoa-properties"],
    relatedCities: ["wildwood", "town-and-country", "ellisville", "manchester"],
  },

  // ------------------------------------------------------------------
  // PAGE 3 — CABINET REFINISHING
  // ------------------------------------------------------------------
  {
    slug: "cabinet-refinishing",
    name: "Cabinet Refinishing",
    metaTitle: "Cabinet Refinishing St. Louis County | ValuePro",
    metaDescription:
      "Cabinet refinishing across St. Louis County — factory-smooth sprayed finishes, in-shop or on-site. A fraction of replacement, done in days. Free estimate.",
    h1: "Cabinet Refinishing in St. Louis County",
    contentComplete: true,
    intro: [
      {
        type: "p",
        text: "The cabinets in most St. Louis County kitchens aren't broken. The boxes are solid, the layout works, and the doors close the way they did on day one — they just look like the decade they were installed in. That's the whole case for refinishing: you're paying to change how a kitchen looks, not to rebuild one that still works. ValuePro Painting sprays cabinet finishes to a factory-smooth standard, in-shop or on-site depending on the project.",
      },
    ],
    sections: [
      {
        heading: "Refinish, reface, or replace — the honest comparison",
        blocks: [
          {
            type: "p",
            text: "These three words get used interchangeably and they are not the same job.",
          },
          {
            type: "ul",
            items: [
              "**Refinishing** keeps your boxes and your doors. Everything is cleaned, degreased, sanded, primed, and sprayed with a new color or stain. Cheapest of the three, fastest, and the right call when the cabinets are structurally sound and you like the layout.",
              "**Refacing** keeps the boxes but replaces the doors and drawer fronts, then veneers the visible box surfaces to match. Costs meaningfully more than refinishing — and often closer to replacement than homeowners expect.",
              "**Replacement** rips everything out. This is the only option that lets you change the layout, add pull-outs, or fix a kitchen that genuinely doesn't function.",
            ],
          },
          {
            type: "p",
            text: "A professionally applied refinish typically holds eight to fifteen years with normal care. New cabinets can last twenty to thirty. The decision usually comes down to a simple question: is the problem how the kitchen looks, or how it works? Refinishing solves the first one and cannot solve the second.",
          },
        ],
      },
      {
        heading: "Our cabinet process",
        blocks: [
          {
            type: "ol",
            items: [
              "**Assessment.** We check box condition, door material, hinge and hardware condition, and how much grease has actually soaked into the finish near the range.",
              "**Label and remove.** Doors, drawer fronts, and hardware come off and get labeled so everything returns to its original opening.",
              "**Degrease.** This is the step that gets skipped and it's the one that causes failures. Kitchen cabinets carry years of cooking residue that no primer will bond through.",
              "**Sand and prep.** Scuff-sanding to give the primer mechanical grip, and filling of any hardware holes that are moving.",
              "**Prime.** Bonding primer appropriate to the substrate — solid wood, plywood, laminate, and thermofoil all behave differently.",
              "**Spray finish coats.** Sprayed, not brushed. A brushed cabinet door reads as brushed forever. In-shop spraying gives the most controlled result; on-site spraying with proper containment works where removal isn't practical.",
              "**Cure and reinstall.** Doors go back on labeled openings with hardware reinstalled or replaced.",
            ],
          },
        ],
      },
      {
        heading: "What can and can't be refinished",
        blocks: [
          {
            type: "p",
            text: "Solid wood and plywood cabinets refinish well. Laminate and thermofoil can be done, but they require specific bonding primers and are less forgiving — anything already peeling or bubbling at the edges is a poor candidate. Open-grain woods like oak will still read as open-grain after painting unless the grain is filled first, which is an extra step and an extra cost. That's a conversation to have before the project starts, not after the first coat.",
          },
        ],
      },
      {
        heading: "Value framing",
        blocks: [
          {
            type: "p",
            text: "A refinished kitchen is the rare project where the visible change is enormous and the disruption is measured in days rather than months. You keep your sink, your countertops, your plumbing, and your layout. What changes is the single largest visual surface in the room — which is why kitchens are where refinishing returns the most for what it costs.",
          },
        ],
      },
    ],
    clientFacts: [
      "[CLIENT FACT REQUIRED — YEARS IN BUSINESS]",
      "[CLIENT FACT REQUIRED — WARRANTY TERMS]",
    ],
    faqs: [
      {
        question: "Is refinishing actually cheaper than new cabinets?",
        answer:
          "Substantially, in most kitchens — because you're not paying for cabinet boxes, demolition, disposal, rough-in work, or installation. The gap narrows if you're comparing against low-end stock replacement, and it narrows further with refacing, which sometimes lands closer to replacement cost than people expect.",
      },
      {
        question: "How long does a refinished cabinet finish last?",
        answer:
          "A professionally applied finish typically runs eight to fifteen years with normal care. New cabinets last longer — twenty to thirty — but that comparison only matters if the boxes were the problem. If your boxes are sound, you're comparing the life of a finish against the cost of replacing something that isn't broken.",
      },
      {
        question: "How long will my kitchen be out of commission?",
        answer:
          "Days, not weeks. The exact timeline depends on cabinet count and whether doors go to the shop or get sprayed on site. The kitchen stays usable through most of the project — the disruptive stretch is short, and there's no demolition, no plumbing work, and no countertop removal.",
      },
      {
        question: "Can you paint laminate or thermofoil cabinets?",
        answer:
          "Often, with the right bonding primer. Both are less forgiving than wood and both fail badly if the prep is rushed. If the thermofoil is already lifting or bubbling at door edges, that's a sign the substrate is compromised and painting will not fix it.",
      },
      {
        question: "My cabinets are oak. Will the grain still show?",
        answer:
          "Yes, unless we fill it. Oak has deep open grain that telegraphs straight through paint — some homeowners like the texture, others expect a modern flat look and are disappointed. Grain filling is an added step with added cost, and it's worth deciding before we start rather than after you see the first coat.",
      },
      {
        question: "Do you spray or brush?",
        answer:
          "Spray. A sprayed finish is the whole point — brush marks on a cabinet door are permanent and read as a DIY job from across the room. Where doors can be removed we spray them in a controlled environment; where that isn't practical we spray on site with full containment.",
      },
      {
        question: "Do you replace the hardware?",
        answer:
          "We remove and reinstall your existing hardware as part of the job, or install new hardware you've selected. If new hardware has a different hole spacing, existing holes get filled and finished as part of the prep rather than left visible.",
      },
      {
        question: "Do I have to empty the cabinets?",
        answer:
          "Yes — boxes need to be empty so interiors and edges can be prepped and coated properly, and so nothing inside picks up dust or overspray. We'll tell you exactly which cabinets need to be cleared and when, so you're not living out of boxes longer than necessary.",
      },
    ],
    ctaHeading: "Find out if your boxes are worth keeping.",
    ctaBody:
      "We'll look at the cabinets you have and tell you straight whether refinishing gets you what you're picturing — or whether it doesn't.",
    relatedServices: ["interior-painting"],
    relatedCities: ["chesterfield", "creve-coeur", "des-peres", "kirkwood"],
  },

  // ------------------------------------------------------------------
  // PAGE 4 — COMMERCIAL PAINTING
  // ------------------------------------------------------------------
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    metaTitle: "Commercial Painting St. Louis County | ValuePro",
    metaDescription:
      "Commercial painting in St. Louis County scheduled around your hours. Retail, office and light industrial repaints with low-VOC coatings. Free walkthrough.",
    h1: "Commercial Painting in St. Louis County",
    contentComplete: true,
    intro: [
      {
        type: "p",
        text: "For a business, the cost of a repaint isn't the invoice — it's the hours the space can't be used. That's the number that actually decides whether the project happens this year or gets pushed again. ValuePro Painting schedules commercial work in St. Louis County around when your space is empty, not around when it's convenient for a crew, so retail floors, offices, and light industrial spaces stay open through the project.",
      },
    ],
    sections: [
      {
        heading: "How the schedule actually works",
        blocks: [
          {
            type: "p",
            text: "The most important planning question on a commercial job isn't about paint. It's when is this space genuinely empty? Everything else follows from the answer.",
          },
          {
            type: "ul",
            items: [
              "**After-hours and overnight.** The crew works once the last customer or employee has gone. A zone is painted, dried, and back in service by morning. A typical office suite of two to three thousand square feet usually takes three to five overnight sessions.",
              "**Phased zoning.** For larger buildings — multi-suite offices, medical, hospitality — the crew works section by section, finishing and clearing each zone before moving on. Takes longer overall, but disruption stays contained to one area at a time.",
              "**Planned closures.** Restaurants and retail with an existing dark day or seasonal slow week get the fastest version, because full access lets a crew move at speed.",
            ],
          },
          {
            type: "p",
            text: "Off-hours work carries a premium over straight daytime scheduling — evening and weekend rates are real, and phased jobs take longer because of setup and teardown each session. That premium is almost always smaller than the revenue lost by closing.",
          },
        ],
      },
      {
        heading: "Coatings for occupied spaces",
        blocks: [
          {
            type: "p",
            text: "Low-VOC and zero-VOC commercial products have changed what's possible in occupied buildings. They produce little to no lingering odor and cure fast enough that a space painted overnight is ready the next morning. That's the difference between painting around your operation and shutting it down. For any work happening while people are in the building, low- or zero-VOC should be specified explicitly rather than assumed — the price difference is small and the air quality difference isn't.",
          },
          {
            type: "p",
            text: "Beyond odor, commercial surfaces have different demands than residential: high-traffic corridors, metal doors and frames, block walls, ceilings with existing suspended grid, and signage-adjacent surfaces that have to hold a clean line.",
          },
        ],
      },
      {
        heading: "What we handle",
        blocks: [
          {
            type: "p",
            text: "Retail interiors and storefronts, offices and suites, light industrial and warehouse space, common areas and corridors, restrooms, back-of-house, exterior building repaints, and metal doors and frames. Exterior commercial work has to be scheduled inside the same seasonal window as residential exteriors — see exterior painting for what that window is in Missouri.",
          },
        ],
      },
      {
        heading: "What to ask any commercial painter before you sign",
        blocks: [
          {
            type: "ul",
            items: [
              "Have you painted occupied commercial space before, and can you provide business references rather than only residential ones? The skill sets are different.",
              "What is your actual after-hours availability? A crew that only works 8 to 5 cannot paint your office without closing it.",
              "What products go into occupied spaces, and will you commit to low- or zero-VOC in writing?",
              "What does the warranty cover — peeling, fading, workmanship — and for how long?",
              "Can you produce a certificate of insurance naming our entity?",
            ],
          },
          { type: "p", text: "We'd rather you ask us these than not." },
        ],
      },
      {
        heading: "Value framing",
        blocks: [
          {
            type: "p",
            text: "Commercial painting is a logistics job with a paintbrush attached. The finish quality matters, but what determines whether the project was a success is whether your staff walked in Monday to a finished space and no story about it. Everything in our commercial process — the phasing plan, the product selection, the daily reset — exists to make the work invisible to the people who use the building.",
          },
        ],
      },
    ],
    clientFacts: [
      "[CLIENT FACT REQUIRED — YEARS IN BUSINESS]",
      "[CLIENT FACT REQUIRED — WARRANTY TERMS]",
      "[CLIENT FACT REQUIRED — CREW SIZE]",
      "[CLIENT FACT REQUIRED — INSURANCE COVERAGE LIMITS]",
    ],
    faqs: [
      {
        question: "Can you paint our space without closing the business?",
        answer:
          "In most cases, yes. With after-hours or overnight scheduling and fast-curing low-odor coatings, the work happens in zones once the space is empty and each zone is back in service by the next morning. Businesses that can't close at all are the normal case for us, not the exception.",
      },
      {
        question: "How many nights will it take?",
        answer:
          "A standard office suite of two to three thousand square feet typically runs three to five overnight sessions. Larger retail spaces and multi-story buildings take longer. The real driver is the phasing plan and how much prep the surfaces need, so the estimate comes after a walkthrough, not over the phone.",
      },
      {
        question: "Will the space smell like paint when my staff arrives?",
        answer:
          "Not if low-VOC or zero-VOC products are used, which is what we specify for occupied spaces. These cure quickly and leave little to no residual odor. If a contractor won't commit to low-VOC for an occupied building, that tells you something.",
      },
      {
        question: "Is after-hours work more expensive?",
        answer:
          "Yes, and it should be — evening, overnight and weekend crews cost more, and phased work adds setup and teardown time to every session. It isn't padding. For nearly every business, the premium is far less than the revenue and productivity lost by closing the doors for a week.",
      },
      {
        question: "Do you carry insurance and can you provide a COI?",
        answer:
          "Yes. We'll provide a certificate of insurance naming your entity before work begins. Property managers and building owners usually require this as a matter of course, and any commercial painter who can't produce one quickly should be off your list.",
      },
      {
        question: "Can you work around our IT equipment, inventory, and fixtures?",
        answer:
          "Yes. Protection and masking are part of the plan built at the walkthrough, not improvised on site. We'll identify what needs to be moved, what gets covered in place, and who is responsible for each — agreed before the first session so nothing is a surprise at 7pm.",
      },
      {
        question: "Do you do exterior commercial work too?",
        answer:
          "Yes, though exterior scheduling is dictated by weather rather than by your hours. In Missouri that means a spring and a fall window, and it means building rain contingency into the plan so a half-painted storefront isn't sitting exposed while a crew waits for a dry day.",
      },
      {
        question: "What's a realistic lead time?",
        answer:
          "It depends on scope and season, but commercial projects generally need more lead time than residential because the phasing plan has to be built and agreed before anyone shows up. Start the conversation earlier than you think you need to, particularly for exterior work.",
      },
    ],
    ctaHeading: "Tell us when your space is empty and we'll build the plan around it.",
    ctaBody: "Walkthrough, phasing schedule, and a written scope before anything gets moved.",
    relatedServices: ["hoa-properties", "drywall-repair"],
    relatedCities: ["chesterfield", "creve-coeur", "manchester", "ballwin"],
  },

  // ------------------------------------------------------------------
  // PAGE 5 — HOA PROPERTIES
  // ------------------------------------------------------------------
  {
    slug: "hoa-properties",
    name: "HOA and Community Association Painting",
    metaTitle: "HOA Painting Contractor St. Louis | ValuePro",
    metaDescription:
      "HOA and community association painting across St. Louis County. Board-ready proposals, ARC-compliant color documentation, phased building schedules.",
    h1: "HOA and Community Association Painting in St. Louis County",
    contentComplete: true,
    intro: [
      {
        type: "p",
        text: "An HOA repaint isn't a painting decision, it's a governance one. Before a brush touches a building there's a reserve line item, a bid comparison, an architectural review, and often a resident vote — and a contractor who doesn't understand that sequence will waste a board's time. ValuePro Painting works with St. Louis County associations and property managers on the terms boards actually operate on: documented scope, documented color, and a phasing plan that residents can live with.",
      },
    ],
    sections: [
      {
        heading: "How the approval process usually runs",
        blocks: [
          {
            type: "p",
            text: "Most associations route exterior changes through an architectural review committee, which makes a recommendation to the board. Review windows commonly run 30 to 60 days, though some fast-tracking communities respond in about 14. Many sets of CC&Rs contain an auto-approval clause — if the committee misses its own stated window, the request can be deemed approved. Boards that know their own timelines get projects done in a season; boards that don't lose a year.",
          },
          {
            type: "p",
            text: "Where a project exceeds a budget threshold or requires a special assessment, homeowner approval often comes into play as well. That means the proposal a board takes to its membership has to be legible to non-contractors, which is a document problem as much as a painting one.",
          },
        ],
      },
      {
        heading: "What a board-ready proposal contains",
        blocks: [
          {
            type: "p",
            text: "Boards compare bids, and the cheapest one is usually cheap for a reason — the gap is almost always prep. A proposal a board can actually evaluate includes:",
          },
          {
            type: "ul",
            items: [
              "**A one-page executive summary.** Total price, timeline, warranty, qualifications. This is the page that gets forwarded to the whole board.",
              "**Scope broken out by building and substrate.** Not \"paint the buildings\" — the actual prep sequence, wash pressure, what gets scraped, what gets spot-primed, and where caulk is being replaced.",
              "**Named materials.** Exact product, sheen, and number of coats, rather than \"premium paint.\"",
              "**The color approval path.** Which schemes, documented with names and codes, and how the ARC signs off.",
              "**The phasing and notification plan.** Which buildings when, how residents are told, and what access is needed.",
              "**Insurance and warranty in writing.**",
            ],
          },
        ],
      },
      {
        heading: "Reserve cycles and timing",
        blocks: [
          {
            type: "p",
            text: "Exterior repaints are one of the most predictable line items in a reserve study, which is why they get flagged in reserve audits. Repaint cycles for community exteriors commonly land in the seven-to-twelve-year range depending on climate and substrate; interior common areas typically need attention more often. In eastern Missouri, freeze-thaw movement and summer humidity push toward the shorter end of any range built for a mild climate — see exterior painting for what that climate does to a coating.",
          },
          {
            type: "p",
            text: "The practical implication for a board: inspections should be finding the need before the deterioration is visible from the parking lot, because a coating that has already failed costs more to prepare than one caught on schedule.",
          },
        ],
      },
      {
        heading: "What we handle for associations",
        blocks: [
          {
            type: "p",
            text: "Building exteriors, common area interiors, clubhouses and amenity spaces, corridors and stairwells, mailbox structures and railings, fencing and gates, and unit-side trim work where the association is responsible. Work is phased building by building with resident notification built into the schedule.",
          },
        ],
      },
      {
        heading: "Value framing",
        blocks: [
          {
            type: "p",
            text: "Boards aren't buying paint, they're buying the absence of a problem — no special assessment surprise, no resident complaints, no explaining to the membership why the job needs redoing in four years. That's a documentation and scheduling standard as much as a craftsmanship one, and it's the standard we bid to.",
          },
        ],
      },
    ],
    clientFacts: [
      "[CLIENT FACT REQUIRED — YEARS IN BUSINESS]",
      "[CLIENT FACT REQUIRED — WARRANTY TERMS]",
      "[CLIENT FACT REQUIRED — CREW SIZE]",
      "[CLIENT FACT REQUIRED — HOA/COMMERCIAL REFERENCES]",
    ],
    faqs: [
      {
        question: "How long does board approval usually take?",
        answer:
          "Architectural review committees commonly take 30 to 60 days, though some communities fast-track in about two weeks. Check your CC&Rs for an auto-approval clause — many state that if the committee doesn't respond within its stated window, the request is deemed approved. Building that timeline into the project schedule up front prevents losing an entire painting season.",
      },
      {
        question: "How often should a community repaint its exteriors?",
        answer:
          "Reserve studies commonly plan exterior repaints on a seven-to-twelve-year cycle, with harsher climates at the short end. Missouri's freeze-thaw and summer humidity argue for the shorter end of whatever your reserve study assumed. Interior common areas generally need attention more frequently than exteriors.",
      },
      {
        question: "We have to get three bids. What should we compare besides price?",
        answer:
          "Prep scope, named products, and warranty. When one bid comes in far below the others, the difference is almost never efficiency — it's prep that isn't in the scope. Ask each bidder to specify wash method, what gets scraped and spot-primed, caulk product, and coats. That's where a seven-year job and a three-year job diverge.",
      },
      {
        question: "Can you work building by building so residents aren't all disrupted at once?",
        answer:
          "Yes — that's the standard approach. We phase by building or section, with a notification schedule so residents know when work reaches them, what access we need, and when they can use their patios, entries, and parking normally again.",
      },
      {
        question: "Who handles color approval — us or you?",
        answer:
          "The association owns the decision; we make it easy to document. We provide scheme options with manufacturer names and color codes so the ARC is approving something specific rather than a concept like \"neutral tones,\" which is where approval disputes usually start. If your community already has pre-approved schemes, we'll work within them.",
      },
      {
        question: "Do you work with property management companies?",
        answer:
          "Yes. Management companies typically need the same documentation a board does, plus a certificate of insurance and a defined point of contact for the duration. We'll provide both before work starts.",
      },
      {
        question: "What if we find rot or damage once work starts?",
        answer:
          "We flag it and price it separately rather than absorbing it silently or coating over it. ValuePro does preparation and coating, not carpentry — if boards or trim need replacement, we identify it, document it for the board, and sequence our work to follow the repair.",
      },
      {
        question: "Can we get a multi-year maintenance plan instead of one big repaint?",
        answer:
          "That's worth discussing. Some associations prefer predictable annual spending — washing and caulk maintenance in the early years, targeted touch-up mid-cycle, then the full repaint — because it makes reserve planning easier than one large irregular expense. We can scope it either way.",
      },
    ],
    ctaHeading: "Bring us in before the bid deadline, not after.",
    ctaBody:
      "We'll walk the property and put together a proposal your board can actually compare — scope, products, phasing, and warranty in writing.",
    relatedServices: ["exterior-painting", "commercial-painting"],
    relatedCities: ["chesterfield", "wildwood", "ballwin", "town-and-country"],
  },

  // ------------------------------------------------------------------
  // PAGE 6 — DRYWALL REPAIR (Part 2 was delivered truncated —
  // content below is verbatim through the cutoff point only.
  // Do not extend the FAQ/process/CTA sections until the rest of
  // Part 2 is supplied.)
  // ------------------------------------------------------------------
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    metaTitle: "Drywall Repair St. Louis County | ValuePro Painting",
    metaDescription:
      "Drywall repair and texture matching in St. Louis County. Holes, cracks, water damage, orange peel and knockdown blended so the patch disappears. Free estimate.",
    h1: "Drywall Repair in St. Louis County",
    contentComplete: false,
    intro: [
      {
        type: "p",
        text: "Almost nobody calls about drywall because of the hole. They call because of the patch — the one that was supposed to disappear and instead sits there catching the light from the window every afternoon. Drywall repair is not really a patching job. It's a matching job, and the matching is where it succeeds or fails. ValuePro Painting repairs and blends drywall across St. Louis County so the finished wall reads as one surface.",
      },
    ],
    sections: [
      {
        heading: "Why patches still show after they're \"fixed\"",
        blocks: [
          {
            type: "p",
            text: "A repair has to match three things at once, and most failed repairs got one or two of them.",
          },
          {
            type: "ul",
            items: [
              "**Flatness.** If the compound wasn't feathered wide enough, a straightedge held across the patch shows gaps and high spots. Under raking light from a window or a can light, that shadow line is visible from across the room.",
              "**Texture.** Orange peel, knockdown, skip trowel and hand textures each have a droplet size and pattern that has to be matched — content for this section is pending the remainder of Part 2.",
            ],
          },
        ],
      },
    ],
    clientFacts: [
      "[CLIENT FACT REQUIRED — YEARS IN BUSINESS]",
      "[CLIENT FACT REQUIRED — WARRANTY TERMS]",
      "[CONTENT PENDING — remainder of Part 2 (Drywall Repair) was not delivered: texture-matching detail, process steps, FAQs, internal links, authority link, and CTA are missing. Do not publish this page live until that content is supplied and placed verbatim.]",
    ],
    faqs: [],
    ctaHeading: "Get an honest look at what the repair needs.",
    ctaBody:
      "We'll assess the damage and tell you what it takes to make it disappear. Call or send the form for a free estimate.",
    relatedServices: ["interior-painting", "commercial-painting"],
    relatedCities: ["ballwin", "kirkwood"],
  },

  // ------------------------------------------------------------------
  // PAGE 7 — LIME WASH & SPECIALIZED PAINTING
  // No content was delivered for this page in Part 2. Placeholder
  // only — do not fabricate FAQs, process, or copy for this service.
  // ------------------------------------------------------------------
  {
    slug: "lime-wash-specialized-painting",
    name: "Lime Wash & Specialized Painting",
    metaTitle: "Lime Wash & Specialized Painting | ValuePro Painting",
    metaDescription:
      "Lime wash, Venetian plaster and Roman clay finishes from ValuePro Painting in St. Louis County. Page content pending final copy. Call for a free estimate.",
    h1: "Lime Wash & Specialized Painting",
    contentComplete: false,
    intro: [
      {
        type: "p",
        text: "ValuePro Painting offers lime wash, Venetian plaster and Roman clay hand-applied mineral finishes across St. Louis County.",
      },
    ],
    sections: [],
    clientFacts: [
      "[CONTENT PENDING — this service page's copy was never delivered in Part 2 (no intro, process, FAQs, or CTA were supplied). Do not fabricate this content. Placeholder only until source copy is provided.]",
    ],
    faqs: [],
    ctaHeading: "Ask us about specialized finishes.",
    ctaBody: "Call or send the form to talk through lime wash, Venetian plaster and Roman clay options.",
    relatedServices: ["interior-painting"],
    relatedCities: ["ballwin"],
  },
];

export function serviceDataBySlug(slug: string): ServicePageData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
