import { type Quest, QuestType } from "~/lib/Quest";

/**
 * Track 1: Play is Language
 * Explores the ubiquity of play across human existence through collecting
 * expressions and fragments from the lexical family of play, toys, and games
 */
export const track1Quests: Array<Quest> = [
  {
    id: "finish_the_phrase",
    image: "/quest_icons/t1q1.svg",
    brief: (t) =>
      t(
        "finish_the_phrase.brief",
        `Complete this series of common expression by filling in the missing word. Think about phrases you've heard in conversations about work, relationships, or everyday decisions.`,
      ),
    debrief: (t) =>
      t(
        "finish_the_phrase.debrief",
        `**TL;DR:** Game language infiltrates everyday speech because relationships, decisions, and social interactions follow game-like structures. We don't just talk about life using game metaphors but more rather life itself is organized through play.

# THE HIDDEN GAME IN EVERYDAY LIFE

You just completed phrases about relationships, decisions, or social strategy using words borrowed from games.

In 1938, Dutch historian Johan Huizinga published Homo Ludens arguing that play isn't something added to human culture but that play *is* the foundation of human culture (Huizinga, 1938). His argument that  we live through game-like structures has also linguistic foundations.

When someone says "the ball is in your court" during a business negotiation, they're revealing that negotiation itself has a ludic structure: alternating turns, clear rules about whose move it is, strategies for winning.

French sociologist Roger Caillois identified four fundamental categories of play that structure human experience (Caillois, 1961):

- AGON (Competition): "game changer," "ahead of the game": the drive to prove superiority through fair contest

- ALEA (Chance): "roll the dice," "hedge your bets": submitting to fate while managing uncertainty

- MIMICRY (Role-playing): "play the fool," "poker face": adopting identities and performing roles

- ILINX (Vertigo): "play with fire": seeking the thrill of losing control within safe boundaries

The structure is the same. That's why the language is the same.

When we say someone is "gaming the system," we're recognizing that systems have game-like rules that can be exploited. When we talk about "moving the goalposts," we're acknowledging that social rules can be changed unfairly.

The ancient Greeks had no word separating "play" from "games" from "music" from "education", they used one word, *paidia*, for all of it (Huizinga, 1938).

Your language just revealed the ludic structure hidden in plain sight.

---

REFERENCES:
Caillois, R. (1961). Man, Play and Games (M. Barash, Trans.). University of Illinois Press.
Huizinga, J. (1938). Homo Ludens: A Study of the Play-Element in Culture. Beacon Press.

FURTHER READING:
Borstelmann, N. (2020). Homo Ludens 2.0: Play, Media and Identity. Amsterdam University Press.
Henricks, T. S. (2015). Play and the Human Condition. University of Illinois Press.`,
      ),
    type: QuestType.Questions,
    questions: [
      {
        id: "t1q1i1",
        text: (t) => t("finish_the_phrase.q1.text", 'play the _________ (something you do in social situations)'),
        correctInputs: ["game", "field", "fool", "victim", "host", "matchmaker", "peacemaker", "mediator", "joc", "jocul", "terenul", "mâinile", "norocul", "viața", "viitorul", "cariera", "reputația", "șansele", "regulile", "față", "mișcare", "race card", "gallery", "odds", "part", "teatru", "un rol", "pe nervii cuiva", "fair-play", "murdar", "pe două fronturi", "la două capete", "rolul", "gazda"],
        typoTolerance: 2,
      },
      {
        id: "t1q1i2",
        text: (t) => t("finish_the_phrase.q2.text", 'the ball is in your _________ (about whose turn it is)'),
        correctInputs: ["court", "hands", "camp", "terenul", "terenul tău", "teren", "mâini", "mâinile"],
        typoTolerance: 2,
      },
      {
        id: "t1q1i3",
        text: (t) => t("finish_the_phrase.q3.text", 'roll the _________ (about taking a risk)'),
        correctInputs: ["dice", "zaruri", "zarurile"],
        typoTolerance: 2,
      }
    ]
  },
  {
    id: "language_domains",
    image: "/quest_icons/t1q2.svg",
    brief: (t) =>
      t(
        "language_domains.brief",
        `Language doesn't just describe play—language **is** play. 

Words dance with double meanings, sounds echo each other playfully, and phrases twist in unexpected ways.

You'll explore three ways language plays with itself: **puns** (words with multiple meanings), **sound patterns** (alliteration and rhyme), and **creative wordplay** (unexpected combinations).`,
      ),
    debrief: (t) =>
      t(
        "language_domains.debrief",
        `**TL;DR:** Language itself is play: puns, metaphors, and wordplay aren't decorations but the fundamental way thought works, discovering connections and generating meaning through ludic combination.

# THE PLAYFUL MIND

You just witnessed language playing with itself.

THINKING IS PLAY

Consider what occurred when you thought of your phrases. Your mind didn't march rationally from premise to conclusion. It danced, it leaped, it punned. It discovered connections through play.

"Play the field" works because "field" means both a sports arena and a domain of romantic possibility. The phrase is a pun. When Shakespeare has Mercutio dying with "Ask for me tomorrow and you shall find me a *grave* man" (Romeo and Juliet, Act III), he reveals that serious/buried, solemn/dead were always secretly connected.

Linguist Michael Agar calls this "languaculture"—the inseparability of language from the culture that thinks through it (Agar, 1994).

WORDPLAY AS THOUGHT-TOOL

Psychologist Arthur Koestler argued that all creativity emerges from "bisociation":perceiving a situation in two self-consistent but habitually incompatible frames of reference simultaneously (Koestler, 1964). This is precisely what puns, metaphors, and poetic language accomplish.

When you say someone "holds all the cards," you're bisociating: seeing social power through the frame of card games. The playful connection between domains *generates* understanding.

Cognitive scientists Fauconnier and Turner call this "conceptual blending" (2002): mental spaces merge to create emergent structure that exists in neither parent. "Time is money" blends temporal and economic domains, creating new thoughts: you can "spend" time, "invest" attention, "waste" hours.

POETRY: THE ULTIMATE LANGUAGE GAME

Poetry takes language's playfulness to extremes. Rhyme forces unlikely words into proximity, generating unexpected meanings. Meter creates constraints that demand creative solutions. Metaphor explodes conventional categories.

T.S. Eliot wrote: "Genuine poetry can communicate before it is understood" (1933, p. 151). This isrecognition that poetic language plays with sound, rhythm, and association in ways that bypass rational analysis while still carrying meaning.

Consider the linguistic playfulness in Dylan Thomas's "Do not go gentle into that good night": the night is "good" (death as rest) while we must "rage" against it. The contradiction is playful tension that generates emotional truth. The poem plays with language to think what prose cannot.

THE LUDIC NATURE OF THOUGHT

Developmental psychologist Lev Vygotsky demonstrated that children's language play isessential to cognitive development (Vygotsky, 1978). By manipulating linguistic forms playfully, children discover language's structure and their own expressive capacity.

Adults retain this playful cognition. We think in metaphors, speak in idioms, communicate through puns. Language is a playground where meaning emerges through creative combination and recombination.

Philosopher Hans-Georg Gadamer wrote: "Language is not just one of man's possessions in the world; rather, on it depends the fact that man has a world at all" (1975, p. 443). And that world-creation happens as linguistic play finds unexpected connections, generating novel meanings, dancing across domains.

---

REFERENCES:
Agar, M. (1994). Language Shock: Understanding the Culture of Conversation. William Morrow.
Eliot, T. S. (1933). The Use of Poetry and the Use of Criticism. Faber & Faber.
Fauconnier, G., & Turner, M. (2002). The Way We Think: Conceptual Blending and the Mind's Hidden Complexities. Basic Books.
Gadamer, H.-G. (1975). Truth and Method (G. Barden & J. Cumming, Trans.). Seabury Press.
Koestler, A. (1964). The Act of Creation. Macmillan.
Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.

FURTHER READING:
Cook, G. (2000). Language Play, Language Learning. Oxford University Press.
Crystal, D. (1998). Language Play. University of Chicago Press.
Lakoff, G., & Johnson, M. (1980). Metaphors We Live By. University of Chicago Press.
Turner, M. (1996). The Literary Mind. Oxford University Press.`,
      ),
    type: QuestType.Questions,
    questions: [
      {
        id: "t1q2i1",
        text: (t) => t("language_domains.q1.text", 'PUN - Give an example of a pun or phrase with a double meaning'),
        correctInputs: [
          // English puns - classic examples
          "time flies like an arrow",
          "fruit flies like a banana", 
          "i used to be a banker but i lost interest",
          "lost interest",
          "atheism is a non-prophet organization",
          "non-prophet",
          "i'm reading a book on anti-gravity it's impossible to put down",
          "impossible to put down",
          "broken pencils are pointless",
          "pointless",
          "i stayed up all night wondering where the sun went then it dawned on me",
          "it dawned on me",
          "energizer bunny arrested charged with battery",
          "charged with battery",
          "venison's dear isn't it",
          "dear",
          "a bicycle can't stand on its own because it's two tired",
          "two tired",
          "too tired",
          "what do you call a bear with no teeth a gummy bear",
          "gummy bear",
          "i wondered why the baseball kept getting bigger then it hit me",
          "it hit me",
          "england has no kidney bank but it does have a liverpool",
          "liverpool",
          "liver pool",
          "i did a theatrical performance about puns it was a play on words",
          "play on words",
          "haunted french pancakes give me the crepes",
          "the crepes",
          "velcro what a rip-off",
          "rip-off",
          "cartoonist found dead police say details are sketchy",
          "sketchy",
          "i used to be a shoe salesman but they gave me the boot",
          "gave me the boot",
          "earthquakes are groundbreaking",
          "groundbreaking",
          "need an ark to save two of every animal noah problem",
          "noah problem",
          "no problem",
          "sleeping comes so naturally i could do it with my eyes closed",
          "eyes closed",
          "what's the best thing about switzerland i don't know but the flag is a big plus",
          "big plus",
          "i'm on a seafood diet i see food and i eat it",
          "see food",
          "seafood",
          "past present and future walked into a bar it was tense",
          "tense",
          "seven days without a pun makes one weak",
          "one weak",
          "one week",
          "grave man",
          "ask for me tomorrow and you shall find me a grave man",
          
          // More profession puns (English)
          "i used to be a tailor but i wasn't suited for it",
          "wasn't suited for it",
          "i used to work at a calendar factory but i got fired for taking days off",
          "taking days off",
          "i used to be a baker but i couldn't make enough dough",
          "couldn't make enough dough",
          "i used to be a historian but there was no future in it",
          "no future in it",
          "i used to be an electrician but i found it shocking",
          "found it shocking",
          "i used to be a train driver but i got sidetracked",
          "got sidetracked",
          "i used to be a banker but i couldn't bank on it",
          "couldn't bank on it",
          "i used to be a teacher but i lost my class",
          "lost my class",
          "i used to be a musician but i wasn't noteworthy",
          "wasn't noteworthy",
          "i used to work in a blanket factory but it folded",
          "it folded",
          "i used to be a lumberjack but i couldn't hack it",
          "couldn't hack it",
          "i used to work at an orange juice factory but i got canned",
          "got canned",
          "i used to be a massage therapist but i rubbed people the wrong way",
          "rubbed people the wrong way",
          "i used to be a watchmaker but it was a waste of time",
          "waste of time",
          "i used to be a gardener but the job wasn't growing on me",
          "wasn't growing on me",
          "i used to work at a shoe recycling shop it was sole destroying",
          "sole destroying",
          "i used to be a tennis coach but it wasn't my racket",
          "wasn't my racket",
          
          // Body part puns
          "an arm and a leg",
          "costs an arm and a leg",
          "head over heels",
          "break a leg",
          "pull your leg",
          "elbow grease",
          "rule of thumb",
          "cold shoulder",
          "give someone the cold shoulder",
          "big mouth",
          "loose lips sink ships",
          "skeleton in the closet",
          "bone to pick",
          "got some skin in the game",
          "skin in the game",
          "all ears",
          "turn a deaf ear",
          "heart on your sleeve",
          "wear your heart on your sleeve",
          "gut feeling",
          "butterflies in my stomach",
          
          // Word category puns
          "bank", // financial or river
          "bark", // tree or dog sound
          "bill", // money or bird beak  
          "bluejay way",
          "bolt", // run or fastener
          "bow", // weapon or greeting
          "box", // container or fight
          "can", // able or container
          "capital", // city or money or letter
          "change", // money or transformation
          "coast", // shore or glide
          "cool", // temperature or awesome
          "court", // legal or sports
          "current", // electrical or present or water
          "date", // calendar or fruit or romantic
          "fair", // just or carnival
          "fall", // autumn or drop
          "fast", // quick or not eating
          "fine", // good or penalty
          "fire", // flame or dismiss
          "flat", // apartment or level
          "fly", // insect or aviation
          "fork", // utensil or diverge
          "frame", // picture or accuse
          "game", // play or hunted animal
          "grave", // serious or burial
          "gum", // chewing or teeth
          "hamper", // basket or hinder
          "hide", // conceal or animal skin
          "iron", // metal or press clothes
          "jam", // food or stuck or music
          "kind", // type or nice
          "last", // final or endure
          "lean", // thin or tilt
          "left", // direction or departed
          "lie", // recline or falsehood
          "light", // illumination or not heavy
          "match", // fire or sports or pairing
          "mean", // average or unkind or signify
          "mine", // belonging or excavation
          "miss", // failure or unmarried woman
          "mole", // animal or spy or skin
          "nail", // finger or metal or succeed
          "odd", // strange or number
          "palm", // hand or tree
          "park", // green space or vehicle storage
          "patient", // medical or tolerance
          "pitcher", // baseball or container
          "plant", // vegetation or factory or place secretly
          "play", // game or theater
          "plot", // story or land or scheme
          "point", // sharp end or purpose or score
          "pool", // swimming or billiards or combine
          "pound", // weight or hit or currency
          "present", // gift or current or attendance
          "pupil", // student or eye part
          "quarter", // coin or district or mercy
          "racket", // noise or sports or scheme
          "range", // stove or scope or mountains
          "rare", // uncommon or meat
          "rest", // relax or remainder
          "right", // correct or direction
          "ring", // jewelry or sound or circular
          "rock", // stone or music or motion
          "rose", // flower or past tense of rise
          "row", // line or argument or boat
          "ruler", // leader or measuring tool
          "sage", // wise or herb
          "saw", // tool or past tense of see or saying
          "scale", // weighing or fish or music or size
          "seal", // animal or close or official mark
          "second", // time or ordinal or support
          "shake", // tremble or beverage
          "sharp", // pointed or musical note
          "sink", // descend or basin
          "spell", // magic or letters or period
          "spring", // season or coil or water or jump
          "stalk", // follow or plant stem
          "star", // celestial or celebrity
          "state", // condition or government
          "stick", // wood or adhere
          "still", // motionless or yet or distillery
          "strike", // hit or labor or bowling
          "suit", // clothing or legal or cards
          "swallow", // bird or ingest
          "table", // furniture or postpone or chart
          "tear", // rip or cry
          "tender", // soft or offer or boat
          "tick", // sound or parasite or mark
          "tire", // wheel or exhaust
          "toast", // bread or celebration
          "train", // vehicle or educate
          "trunk", // tree or elephant or luggage or car
          "type", // kind or keyboard
          "watch", // timepiece or observe
          "wave", // ocean or gesture
          "well", // good or water source
          "will", // future or testament or determination
          "yard", // measurement or garden
          "band", // music or ring
          "bat", // animal or hit
          "bear", // animal or endure
          "bit", // small piece or drill or binary
          "blow", // wind or hit
          "book", // reading or reserve
          "boot", // footwear or kick or car trunk
          "bore", // drill or tedious
          "bowl", // dish or game
          "bridge", // structure or card game
          "brush", // hair tool or light touch
          "buck", // dollar or male deer
          "bug", // insect or annoy or listening device
          "bust", // sculpture or arrest or chest
          "cabinet", // furniture or government
          "calf", // baby cow or leg muscle
          "cast", // throw or actors or plaster
          "charge", // electricity or attack or cost
          "check", // verify or payment or chess
          "chest", // body or box
          "chip", // fragment or bet or computer
          "choke", // strangle or car part
          "close", // near or shut
          "club", // organization or weapon or card suit
          "coach", // trainer or vehicle
          "coast", // shore or glide
          "cock", // rooster or firearm part
          "coil", // spiral or electrical
          "concrete", // material or specific
          "count", // nobleman or enumerate
          "counter", // surface or opposite
          "court", // legal or woo
          "cover", // lid or protect
          "crack", // break or very good
          "crane", // bird or machine
          "crank", // handle or grumpy person
          "crow", // bird or boast
          "dash", // run or punctuation
          "deck", // ship or cards
          "desert", // abandon or dry land
          "dock", // pier or reduce or plant
          "dove", // bird or past tense of dive
          "down", // direction or feathers
          "draft", // sketch or conscription or beer
          "drill", // tool or practice
          "duck", // bird or lower head
          "dump", // discard or storage place
          "ear", // hearing or corn
          "engage", // involve or promise to marry
          "express", // fast or articulate
          "face", // head or confront
          "fair", // just or festival or light colored
          "fan", // admirer or cooling device
          "fast", // quick or abstain
          "fence", // barrier or sell stolen goods
          "file", // document or tool
          "fine", // okay or penalty or thin
          "firm", // company or solid
          "fish", // animal or search
          "found", // discovered or establish
          "free", // liberty or no cost
          "grave", // tomb or serious
          "ground", // earth or basis
          "guinea", // pig or coin
          "gum", // mouth or tree
          "hail", // ice or greet
          "hamper", // basket or obstruct
          "harbor", // port or shelter
          "hatch", // open or plan
          "haul", // pull or cargo
          "hawk", // bird or sell aggressively
          "head", // top or leader
          "heel", // foot or lean
          "hose", // tube or stockings
          "host", // entertainer or army or communion
          "interest", // curiosity or money earned
          "jar", // container or shake
          "jerk", // pull or rude person
          "joint", // connection or place or marijuana
          "kid", // child or joke
          "lap", // thigh area or circuit
          "lead", // guide or metal
          "leaves", // departs or foliage
          "left", // direction or departed
          "letter", // mail or alphabet
          "lie", // recline or falsehood
          "lift", // raise or ride
          "like", // similar or enjoy
          "limb", // body part or tree branch
          "line", // stripe or queue
          "link", // connection or chain part
          "list", // enumerate or tilt
          "loaf", // bread or idle
          "long", // extended or desire
          "mint", // plant or money factory or pristine
          "minute", // time or tiny
          "miss", // fail or title or long for
          "mold", // fungus or shape
          "monkey", // animal or tamper
          "morning", // time or grieving
          "mug", // cup or face or rob
          "objective", // goal or unbiased
          "organ", // body part or instrument
          "page", // paper or summon
          "pants", // trousers or breathes heavily
          "part", // piece or separate
          "pawn", // chess or pledge
          "pen", // writing or enclosure
          "pest", // annoying or plague
          "pet", // animal or caress
          "pine", // tree or yearn
          "pit", // hole or seed
          "plane", // aircraft or flat or tool
          "plug", // stopper or promote
          "pound", // weight or hit or enclosure
          "press", // push or media or iron
          "project", // assignment or predict
          "prop", // support or theater item
          "punch", // hit or drink
          "pupil", // student or eye
          "race", // competition or ethnicity
          "rail", // barrier or complain or train
          "rash", // skin or hasty
          "rear", // back or raise
          "record", // document or best performance
          "reflect", // mirror or think
          "refuse", // decline or garbage
          "report", // document or tell
          "rest", // relax or remainder
          "return", // come back or profit
          "review", // examine or critique
          "revolution", // rotation or uprising
          "ring", // jewelry or sound
          "root", // plant or cheer
          "round", // circular or ammunition or musical
          "seal", // animal or close
          "season", // time period or flavor
          "second", // time or support or ordinal
          "sentence", // grammar or prison term
          "service", // help or religious or repair
          "set", // collection or place or tennis
          "shed", // building or drop
          "ship", // boat or send
          "shock", // surprise or electricity
          "shoot", // fire or sprout
          "shop", // store or work area
          "short", // not tall or brief or electric fault
          "shoulder", // body part or push
          "show", // display or entertainment
          "shower", // bath or rain
          "side", // edge or team
          "sign", // symbol or autograph
          "sink", // basin or descend
          "skip", // hop or omit
          "slam", // hit or poetry
          "slap", // hit or comedy
          "slip", // slide or undergarment or dock
          "slug", // snail or bullet or hit
          "snap", // break or card game
          "sock", // clothing or hit
          "sole", // only or fish or shoe bottom
          "sound", // noise or healthy or body of water
          "space", // room or cosmos
          "spare", // extra or bowling
          "spell", // magic or period or letters
          "spirit", // ghost or enthusiasm or alcohol
          "spoke", // wheel part or talked
          "spot", // location or see or mark
          "spring", // season or coil or jump
          "square", // shape or plaza or uncool
          "stable", // steady or horse building
          "staff", // employees or stick
          "stage", // platform or phase
          "stake", // pole or wager or vampire
          "stall", // booth or delay or stable section
          "stamp", // postage or step
          "stand", // rise or booth or tolerate
          "staple", // fastener or main item
          "state", // condition or say or government
          "stem", // plant or stop
          "stick", // wood or stay
          "stiff", // rigid or corpse
          "stock", // supply or broth or shares
          "stomach", // organ or tolerate
          "store", // shop or save
          "story", // tale or floor
          "strand", // thread or beach or leave
          "strike", // hit or delete or labor action
          "strip", // remove or narrow piece
          "stroke", // caress or medical or swimming
          "stud", // fastener or male or breeding
          "subject", // topic or subordinate
          "suit", // clothing or legal or please
          "swallow", // bird or ingest
          "swell", // excellent or expand
          "switch", // change or hit or device
          "table", // furniture or list or postpone
          "tag", // label or game
          "tail", // rear or follow
          "tap", // faucet or hit lightly or select
          "tape", // adhesive or recording
          "target", // goal or store or aim
          "temple", // religious or head
          "tender", // soft or money or offer
          "tie", // necktie or bind or equal
          "till", // until or cash register or plow
          "tip", // end or gratuity or lean
          "toast", // bread or drink to
          "top", // summit or toy or garment
          "track", // path or follow
          "trade", // exchange or profession
          "train", // vehicle or teach or dress trail
          "trick", // deceive or magic or prostitution
          "trip", // journey or stumble
          "trunk", // luggage or tree or elephant
          "trust", // faith or monopoly
          "tube", // pipe or subway
          "turn", // rotate or opportunity
          "type", // kind or keyboard
          "unique", // one of a kind or unusual
          "upset", // disturbed or overturn
          "vault", // jump or safe or ceiling
          "vice", // bad habit or tool or deputy
          "volume", // book or loudness or space
          "wake", // arise or boat trail or death vigil
          "waste", // discard or waist
          "watch", // timepiece or observe
          "wave", // ocean or gesture
          "well", // good or water or very
          "wind", // air or coil
          "wing", // bird or building section
          "wound", // injury or coiled
          "yard", // garden or measurement
          
          // More Romanian puns and words with double meanings
          "acru", // sour or harsh
          "alb", // white or egg white
          "an", // year or anus
          "apă", // water or "vapă" sound-alike
          "arc", // bow or arc
          "armă", // weapon or "ar mă" (would me)
          "aș", // I would or ace (cards)
          "aur", // gold or "a ur" (to climb)
          "ban", // coin or ban
          "bar", // bar or "băr" old form
          "barană", // barrier or dialect word
          "bară", // bar or rod
          "bas", // bass or short
          "bază", // base or basis
          "boa", // boa or "bo" sound
          "boboc", // bud or freshman
          "cadru", // frame or staff member
          "cal", // horse or callus
          "cap", // head or end
          "car", // cart or because (poetic)
          "caz", // case or fall (verb form)
          "centru", // center or central
          "cer", // sky or I ask
          "cioc", // beak or I clink
          "clasa", // class or to classify
          "col", // corner or mountain pass
          "colț", // corner or fang
          "con", // cone or idiot (slang)
          "copac", // tree
          "cor", // choir or I fall (archaic)
          "corp", // body or building
          "cot", // elbow or bend
          "cotor", // stem or spine (book)
          "crin", // lily
          "cub", // cube or den
          "cur", // bottom or "I clean"
          "dată", // time or given
          "deal", // hill
          "disc", // disk or discussion
          "do", // C note or I give (archaic)
          "ドor", // longing or ache
          "dos", // back or dossier
          "draft", // draft
          "duc", // duke or I go/take
          "duș", // shower
          "făină", // flour or fine (colloquial)
          "far", // lighthouse or headlight
          "fasole", // bean
          "fată", // girl or face (archaic)
          "fază", // phase or story (slang)
          "fer", // iron (tool)
          "fier", // iron (metal)
          "film", // movie or film
          "fir", // thread or damn (interjection)
          "fiș", // index card
          "floare", // flower
          "foi", // sheets or you were (tu)
          "fond", // fund or background
          "formă", // shape or form or mold
          "frate", // brother or dude
          "frig", // cold or I fry
          "front", // front or forehead
          "fruntea", // forehead or front
          "fundă", // bow or ribbon
          "gard", // fence
          "gât", // neck or narrow pass
          "geam", // window or glass
          "gel", // gel or frost
          "gen", // type or like (slang filler)
          "ginere", // son-in-law
          "gol", // goal or naked
          "gră", // grain
          "grămadă", // pile or a lot
          "grilă", // grill or grid
          "gură", // mouth
          "hal", // state or market hall
          "har", // grace or gift
          "hăt", // shoo or far away (dialect)
          "inel", // ring
          "iubire", // love
          "jale", // sorrow or mourning
          "joc", // game or play or backlash
          "lac", // lake or lacquer
          "lampă", // lamp
          "lanț", // chain
          "larg", // wide or open sea
          "latură", // side
          "leg", // I tie or law (archaic)
          "lentilă", // lens or lentil
          "lift", // elevator
          "limbă", // tongue or language
          "lin", // smooth or linen
          "linie", // line
          "literă", // letter (alphabet)
          "loc", // place or I place
          "lovitură", // hit or stroke
          "lucru", // thing or work
          "lume", // people or world
          "lumină", // light
          "lung", // long
          "mai", // more or May
          "mal", // shore
          "mamă", // mother or damn (interjection)
          "mână", // hand or I drive
          "marfă", // goods or cool (slang)
          "marș", // march or scram
          "masă", // table or mass
          "matcă", // beehive or womb
          "măr", // apple
          "mărime", // size
          "meci", // match (sports)
          "mediu", // environment or medium or average
          "mers", // walking or going
          "metru", // meter
          "mie", // thousand or to me
          "mină", // mine or facial expression
          "minor", // minor (age/music)
          "minte", // mind
          "mișcare", // movement
          "mobil", // mobile or furniture (adj)
          "mod", // way or fashion or mood (music)
          "motan", // tomcat
          "motor", // engine
          "munte", // mountain
          "nas", // nose or godfather
          "neted", // smooth
          "nivel", // level
          "nod", // knot or node
          "nor", // cloud
          "normă", // norm or full-time
          "notă", // grade or note or bill
          "nou", // new or nine (archaic)
          "număr", // number
          "nume", // name
          "obiect", // object
          "ocol", // detour or I go around
          "om", // man or person
          "orb", // blind
          "organ", // organ
          "os", // bone
          "palmă", // palm or slap
          "pan", // break down or "până" sound
          "pasaj", // passage
          "pas", // step or pass
          "pată", // stain
          "pat", // bed or duck (animal)
          "pâine", // bread
          "perete", // wall
          "peste", // fish or over
          "piatră", // stone
          "picior", // foot or leg
          "pierdere", // loss
          "piesa", // play or piece
          "piesă", // piece or play
          "pin", // pine tree
          "plan", // plan or plane
          "plasă", // net or shopping bag
          "plată", // payment or flat
          "pleavă", // chaff or trash (fig)
          "plecare", // departure
          "plictiseală", // boredom
          "pliu", // pleat
          "pluton", // platoon
          "poartă", // gate or carries/wears
          "pod", // bridge or attic
          "poiană", // glade
          "pol", // pole
          "pop", // priest or pop music
          "popă", // priest
          "port", // port or costume or I carry
          "post", // position or fast or post
          "potrivit", // according to or fitting
          "pradă", // prey or plunder
          "prieten", // friend
          "prind", // I catch or suits
          "probă", // proof or sample or event (sports)
          "profil", // profile
          "proiect", // project
          "psalm", // psalm
          "punte", // bridge or deck
          "pupă", // I kiss or stern (boat)
          "ram", // ram or frame
          "rană", // wound
          "rând", // row or turn
          "rang", // rank
          "raport", // report or ratio
          "raton", // ration
          "rău", // bad or evil or river
          "razı", // ray or raid
          "rece", // cold
          "reg", // king (archaic)
          "rest", // rest or remainder or change (money)
          "rezervă", // reserve or spare
          "rezoluție", // resolution
          "ridicare", // raising or rise
          "rime", // rhyme
          "rob", // slave or carob
          "rol", // role
          "rolă", // roll or roller
          "roman", // novel or Roman
          "roșu", // red
          "rot", // wheel or I rotate
          "roată", // wheel
          "ru", // stream or I gnaw (archaic)
          "salon", // salon or living room
          "salt", // jump
          "sanie", // sled
          "sare", // salt or jumps
          "schemă", // scheme or diagram
          "scop", // goal or purpose
          "scor", // score
          "scrisoare", // letter (mail)
          "scule", // tools
          "scurt", // short
          "sec", // dry or second (time, slang)
          "secol", // century
          "semn", // sign
          "sens", // meaning or direction
          "serie", // series
          "serviciu", // service or job
          "set", // set
          "sfat", // advice or council
          "sfoară", // string or rope
          "similar", // similar
          "simplu", // simple
          "singe", // blood
          "singur", // alone or only
          "sistem", // system
          "soi", // kind or strain
          "somn", // sleep or catfish
          "sondă", // probe or drill
          "soră", // sister
          "spart", // broken
          "spate", // back
          "spectacol", // show
          "spic", // ear (grain) or I say (archaic)
          "spin", // thorn or spine
          "spirit", // spirit or alcohol
          "stagiu", // internship or stage
          "stan", // sheepfold
          "stare", // state or condition
          "stat", // state or stood
          "stea", // star
          "stil", // style
          "stoc", // stock
          "столp", // pole or pillar
          "strugure", // grape
          "suflet", // soul
          "sunet", // sound
          "sus", // up
          "șansă", // chance
          "șarpe", // snake
          "șef", // boss or chef
          "șervețel", // napkin
          "șir", // row or string
          "șlep", // barge or tow
          "școală", // school
          "șold", // hip
          "șosea", // road
          "șterge", // I erase or rag
          "tablă", // board or sheet metal
          "tablou", // painting or board
          "tactică", // tactics
          "taler", // plate (archaic) or thaler
          "tăietură", // cut
          "târg", // market or fair
          "tată", // father or I thresh
          "teatru", // theater
          "tehnică", // technique
          "telefon", // telephone
          "temă", // theme or homework
          "temperatură", // temperature
          "termen", // deadline or term
          "test", // test
          "ticălos", // scoundrel
          "tigaie", // pan
          "timbru", // stamp or timbre
          "timp", // time or I hit (archaic)
          "ținută", // outfit or posture
          "tip", // type or guy
          "titlu", // title
          "ton", // tone or tuna
          "tonă", // ton
          "top", // top or ranking
          "tort", // cake or tort (legal)
          "tractor", // tractor
          "trai", // living or I live
          "translație", // translation (movement)
          "treaptă", // step or stage
          "trecere", // passage or passing
          "tremur", // I tremble
          "tribunal", // court
          "tributar", // tributary
          "trist", // sad
          "turn", // tower or shift (work)
          "tupeu", // nerve or audacity
          "tur", // tour or round
          "țară", // country
          "țeavă", // pipe
          "țel", // goal or rifle sight
          "țintă", // target
          "țol", // inch
          "umăr", // shoulder
          "umbră", // shadow or shade
          "umed", // humid or wet
          "unghiu", // angle
          "unghi", // angle or corner
          "unitate", // unit or unity
          "unt", // butter
          "ură", // hatred or I hate
          "urs", // bear
          "uși", // doors
          "ușoară", // light or easy
          "vale", // valley
          "valoare", // value
          "vamă", // customs
          "vânt", // wind
          "vârf", // peak or tip
          "văr", // cousin or lime
          "vază", // vase or fame
          "verde", // green or unripe
          "veste", // vest or news
          "viață", // life
          "vin", // wine or I come
          "viol", // rape or violet (archaic)
          "viu", // alive or lively
          "vizită", // visit
          "vizor", // viewfinder
          "voce", // voice
          "volum", // volume
          "vot", // vote
          "vreme", // time or weather
          "zahăr", // sugar
          "zar", // die (dice)
          "zarvă", // noise or uproar
          "zăpadă", // snow
          "zi", // day
          "ziar", // newspaper
          "zid", // wall
          "zor", // hurry or hard work
          "zvon", // rumor
          
          // Phrases with double meaning (English)
          "break a leg",
          "kick the bucket",
          "bite the bullet",
          "hit the sack",
          "break the ice",
          "spill the beans",
          "cost an arm and a leg",
          "piece of cake",
          "under the weather",
          "beat around the bush",
          "let the cat out of the bag",
          "the ball is in your court",
      "play it by ear",
      "play second fiddle",
      "play ball",
      "play for time",
      "play fast and loose",
      "play both ends against the middle",
      "play hooky",
      "play the fool",
      "play favorites",
      "play dirty",
      "play hardball",
      "play it cool",
      "fair play",
      "foul play",
      "child's play",
      "play the race card",
      "play the victim",
      "play around",
      "play up",
      "play down",
      "all played out",
      "play to the gallery",
      "play your ace",
      "play a part",
      "play catch-up",
      "replay the tape",
      "the game is up",
      "beat someone at their own game",
      "game face",
      "fun and games",
      "give the game away",
      "name of the game",
      "off your game",
      "on your game",
      "two can play at that game",
      "what's your game",
      "rigged game",
      "fair game",
      "game on",
      "waiting game",
      "blame game",
      "numbers game",
      "guessing game",
      "whole new ball game",
          "on the ball",
      "have a ball",
      "keep your eye on the ball",
      "get the ball rolling",
      "run with the ball",
      "behind the eight ball",
      "curveball",
      "oddball",
      "snowball effect",
      "ballpark figure",
      "that's the way the ball bounces",
      "ace up your sleeve",
      "ace in the hole",
      "play your cards close to your vest",
      "house of cards",
      "wild card",
      "in the cards",
      "not playing with a full deck",
      "stack the deck",
      "deal someone in",
      "deal someone out",
      "shuffle the deck",
      "show your hand",
      "play the hand you're dealt",
      "fold your cards",
      "up the ante",
      "raise the stakes",
      "cash in your chips",
      "when the chips are down",
          "let the chips fall where they may",
      "throw in your cards",
      "deck is stacked against you",
      "checkmate",
      "stalemate",
      "pawn",
      "gambit",
      "make your move",
      "kingpin",
      "queen bee",
      "across the board",
      "go back to the drawing board",
      "take a roll of the dice",
      "no dice",
      "loaded dice",
      "dice with death",
      "the die is cast",
      "domino effect",
      "three strikes and you're out",
      "home run",
      "hit it out of the park",
      "step up to the plate",
      "throw a curveball",
      "pitch perfect",
      "cover all bases",
      "touch base",
      "out in left field",
          "right off the bat",
      "ballpark estimate",
      "keep your eye on the prize",
      "level playing field",
      "par for the course",
      "handicap",
      "tee up",
      "hole in one",
      "in the rough",
      "Monday morning quarterback",
      "Hail Mary pass",
      "fumble",
      "timeout",
      "game time decision",
      "down to the wire",
      "pass the baton",
      "false start",
      "jump the gun",
      "neck and neck",
      "front runner",
      "dark horse",
      "below the belt",
          "saved by the bell",
      "on the ropes",
      "roll with the punches",
      "punch above your weight",
      "heavyweight",
      "in your corner",
      "take it on the chin",
      "sucker punch",
      "one-two punch",
      "pull your punches",
      "the gloves are off",
      "serve an ace",
      "double fault",
      "match point",
      "deuce",
      "game, set, match",
      "volley back and forth",
      "net gain",
      "love-hate relationship",
      "score points",
      "keep score",
      "settle the score",
      "know the score",
      "hat trick",
      "own goal",
      "kick off",
      "take sides",
      "team player",
      "carry the team",
      "take one for the team",
      "bench warmer",
      "bench someone",
      "back to square one",
      "in the endgame",
      "opening gambit",
      "master stroke",
      "checkered past",
      "play to win",
      "all bets are off",
      "safe bet",
      "sure bet",
      "hedge your bets",
      "place your bets",
      "betting man",
      "play the odds",
      "stack the odds",
      "against all odds",
      "odds-on favorite",
      "even odds",
      "toy with",
      "toying with someone's affections",
      "plaything",
      "played for a fool",
      "playoff",
      "play out",
      "played out",
      "play on words",
      "interplay",
      "foreplay",
          "wordplay",
      "gameplay",
      "playbook",
      "play acting",
      "horseplay",
      "swordplay",
      "gunplay",
      "gamesman",
      "gamesmanship",
      "endgame",
      "metagame",
      "gamely",
      "game for anything",
      "game theory",
      "shell game",
      "skin in the game",
      "play into",
      "come into play",
      "bring into play",
      "at play",
      "in play",
      "out of play",
      "față de poker",
      "a juca teatru",
      "joc prefăcut",
      "a prinde cu cărțile în mână",
      "a juca la cacealma",
      "a juca murdar",
      "a juca la două capete",
      "a avea atuuri în mână",
      "a schimba regulile jocului",
      "a face jocul cuiva",
      "joc de putere",
      "a fi la mâna cuiva",
      "a ieși din joc",
      "jocul nu merită lumânarea",
      "a scoate din joc",
      "jocurile sunt făcute",
      "a da cu bâta-n baltă",
      "a se juca cu sentimentele cuiva",
      "jocul seducției",
      "jucător",
      "a se juca de-a v-ați ascunselea",
      "a juca cu focul",
      "a-și juca norocul",
      "a pune în joc",
      "a-și pune capul în joc",
      "joc periculos",
      "a-și juca viața",
      "a da cărțile pe față",
      "a-i descoperi jocul",
      "a juca pe două fronturi",
      "a-și joca ultima carte",
      "joc de interese",
      "joc politic",
      "joc diplomatic",
      "joc dublu",
      "joc triplu",
      "a intra în joc",
      "a-și juca viitorul",
      "a-și juca cariera",
      "a-și juca reputația",
      "a-și juca șansele",
      "a nu-și juca șansele",
      "a bate mingea la fileu",
      "a arunca mingea la fileu",
      "mingea este în terenul tău",
      "a juca un rol",
      "a-și juca rolul",
      "a juca pe nervii cuiva",
      "a juca fair-play",
      "joacă-te cu cine vrei dar nu te juca cu mine",
      "ce te joci cu mine",
      "nu te juca cu mine",
      "nu-i de joacă",
      "la balamuc își are fiecare jocul lui",
      "jocul de-a babele",
      "jocul valorilor",
          "joc de cuvinte",
      "joc de lumini",
      "joc de umbre",
      "joc de oglinzi",
      "joc de-a șoarecele și pisica",
      "joc de copii",
      "joc de-a viața și moartea",
      "a intra la joc",
      "a ieși la joc",
      "să ne jucăm de-a sinuciderea",
      "jucărie în mâinile cuiva",
      "a fi jucăria destinului",
      "a se juca cu destinul",
      "a se juca cu moartea",
      "joacă-te cu ghinionul tău",
      "unde dai și unde crapă",
      "joc de noroc",
      "jocul bătăi de joc",
      "dejucător de planuri",
      "a dejuca un plan",
      "a dejuca așteptările",
      "jucător de poker",
      "a avea o față de poker",
      "un joc frumos",
      "un joc urât",
      "jocul brațelor",
      "jocul cuvintelor",
      "jocul privirilor",
      "a intra în jocul seducției",
      "joc sincer",
      "joc deschis",
      "joc ascuns",
      "a avea joc deschis",
      "a-i da joc liber",
      "joc liber",
      "la joc se vede meșterul",
      "joacă bine cine joacă ultimul",
      "cine se joacă cu coada dracului se arde",
      "a se juca cu gândul",
      "nu te juca cu gândul ăsta",
      "a se juca pe viața cuiva",
      "a se juca cu sănătatea",
      "play for keeps",
      "in the game",
      "slam dunk",
      "lay-up",
      "alley-oop",
      "full court press",
      "drop the gloves",
      "hat in the ring",
      "play with house money",
      "double down",
      "tapped out",
      "go all in",
      "call it quits",
      "throw in the sponge",
      "take your lumps",
      "on deck",
      "play chicken",
      "Russian roulette",
      "Mexican standoff",
      "sudden death",
      "extra innings",
      "overtime",
      "injury time",
      "time out",
      "take a knee",
      "run out the clock",
      "play defense",
      "play offense",
      "zone defense",
      "man-to-man",
      "tackle the problem",
      "score a victory",
      "win hands down",
      "hands down winner",
      "by a nose",
      "photo finish",
      "wire to wire",
      "also-ran",
      "longshot",
      "underdog",
      "top dog",
      "stroke of luck",
      "lucky break",
      "bad break",
      "tough break",
      "break even",
      "break the bank",
      "bust",
      "crap out",
      "seven out",
      "snake eyes",
      "box cars",
      "play it straight",
      "moving the chains",
      "Hail Mary",
      "on the table",
      "off the table",
      "a da cărțile în față",
      "a avea atuuri",
      "a-și arăta cărțile",
      "a da totul pe o carte",
      "ultima carte",
      "a da cu zarul",
      "zarurile sunt aruncate",
      "a juca la ruletă rusească",
      "minge în poartă",
      "din prima lovitură",
      "lovitură de maestru",
      "lovitură fatală",
      "lovitură de teatru",
      "șah-mat",
      "pat",
      "pionul",
      "a muta piesa",
      "mutare de maestru",
      "mutare greșită",
      "a da mat",
      "scos din joc",
        ],
        typoTolerance: 4,
      },
      {
        id: "t1q2i2",
        text: (t) => t("language_domains.q2.text", 'ALLITERATION - Give a phrase where words start with the same sound (like "Peter Piper picked")'),
        correctInputs: [
          // Classic English alliterations
          "peter piper picked a peck of pickled peppers",
          "peter piper",
          "she sells seashells by the seashore",
          "she sells seashells",
          "seashells by the seashore",
          "how much wood would a woodchuck chuck",
          "woodchuck chuck",
          "fuzzy wuzzy was a bear",
          "fuzzy wuzzy",
          "betty botter bought some butter",
          "betty botter",
          "big bad wolf",
          "busy as a bee",
          "dead as a doornail",
          "dead doornail",
          "fit as a fiddle",
          "good as gold",
          "right as rain",
          "safe and sound",
          "tried and true",
          "footloose and fancy free",
          "down and dirty",
          "first and foremost",
          "last but not least",
          "part and parcel",
          "peace and quiet",
          "pins and needles",
          "prim and proper",
          "rough and ready",
          "short and sweet",
          "thick and thin",
          "through thick and thin",
          "time and tide",
          "wear and tear",
          
          // Brand names and slogans  
          "coca cola",
          "dunkin donuts",
          "best buy",
          "bed bath and beyond",
          "paypal",
          "range rover",
          "rolls royce",
          "krispy kreme",
          "kit kat",
          "american airlines",
          "circuit city",
          "blackberry",
          "minecraft",
          "mickey mouse",
          "donald duck",
          "bugs bunny",
          "porky pig",
          "road runner",
          "marvin the martian",
          "tweety bird",
          "daffy duck",
          "jessica jones",
          "lois lane",
          "pepper potts",
          "peter parker",
          "bruce banner",
          "stephen strange",
          "reed richards",
          "sue storm",
          "scott summers",
          "wonder woman",
          "wally west",
          "lex luthor",
          "lana lang",
          "kara kent",
          
          // Common alliterative phrases
          "break bread",
          "catch some zs",
          "dead duck",
          "fit as a fiddle",
          "go getter",
          "happy holidays",
          "heavy heart",
          "high hopes",
          "labor of love",
          "live and learn",
          "make money",
          "neck and neck",
          "no nonsense",
          "on occasion",
          "picture perfect",
          "plain and simple",
          "practice makes perfect",
          "quick question",
          "rags to riches",
          "ready and raring",
          "red roses",
          "run ragged",
          "scared silly",
          "see you soon",
          "sink or swim",
          "slippery slope",
          "slow and steady",
          "spick and span",
          "stop and stare",
          "take time",
          "to thine own self be true",
          "trick or treat",
          "veni vidi vici",
          "waste not want not",
          "wild and woolly",
          "winds of winter",
          "wit and wisdom",
          "work wonders",
          
          // Three word alliterations
          "cool calm collected",
          "cool calm and collected",
          "blood sweat and tears",
          "blood sweat tears",
          "live laugh love",
          "faith family friends",
          "mind over matter",
          "better safe than sorry",
          "bigger better faster",
          "faster farther further",
          "hop skip jump",
          "hop skip and jump",
          "bigger badder better",
          "dark deep dangerous",
          "fun fresh fabulous",
          "healthy happy whole",
          "happy healthy holy",
          "jump jive and wail",
          "location location location",
          "practice patience persistence",
          "power pride passion",
          "ready willing able",
          "ready willing and able",
          "stop drop roll",
          "stop drop and roll",
          "wild wacky wonderful",
          
          // Literary alliterations
          "doubting dreaming dreams",
          "suddenly i heard a tapping",
          "while i nodded nearly napping",
          "weak and weary",
          "once upon a midnight dreary",
          "the fair breeze blew",
          "what a tale of terror",
          "grim ungainly ghastly gaunt",
          
          // Descriptive phrases
          "brave bold beautiful",
          "bright beautiful brilliant",
          "calm cool collected",
          "dark damp dungeon",
          "eager earnest energetic",
          "free fair and frequent",
          "glorious golden gleaming",
          "happy healthy hearty",
          "intelligent inquisitive interesting",
          "jolly jovial joyful",
          "kind keen knowledgeable",
          "lazy languid lethargic",
          "mighty menacing massive",
          "noble noted notorious",
          "pretty perfect peaceful",
          "quick quiet quirky",
          "rough rugged robust",
          "silly simple senseless",
          "terribly terrible terrifying",
          "vivid vibrant vigorous",
          "wicked wild wonderful",
          
          // Romanian alliterations  
          "minte minunată", // wonderful mind
          "minte și mișcare", // mind and movement
          "pace și prosperitate", // peace and prosperity
          "pace prosperitate",
          "frumos și fericit", // beautiful and happy
          "frumos fericit",
          "sănătos și senin", // healthy and serene
          "sănătos senin",
          "tare și tânăr", // strong and young
          "tare tânăr",
          "vesel și vioi", // cheerful and lively
          "vesel vioi",
          "cald și calm", // warm and calm
          "rapid și riguros", // fast and rigorous
          "mare și minunat", // big and wonderful
          "bun și binevoitor", // good and benevolent
          "dulce și delicat", // sweet and delicate
          "dulce delicat",
          "galant și generos", // gallant and generous
          "gri și greu", // gray and heavy
          "lin și luminos", // smooth and bright
          "înalt și impunător", // tall and imposing
          "jar și jale", // ember and sorrow
          "carte și condeiul", // book and pen
          "pace și pâine", // peace and bread
          "frumos și fragil", // beautiful and fragile
          "verde și vioi", // green and lively
          "plin și puternic", // full and powerful
          "bine și bun", // well and good
          "mic și mândru", // small and proud
          "simplu și sincer", // simple and sincere
          "drept și demn", // right and dignified
          "curat și clar", // clean and clear
          "rece și rigid", // cold and rigid
          "moale și mieros", // soft and honeyed
          "trist și temător", // sad and fearful
          "fericit și fără frică", // happy and fearless
          "liber și luminos", // free and bright
          "nobil și natural", // noble and natural
          "vechi și venerabil", // old and venerable
          "zelos și zdravăn", // zealous and sturdy
          "strălucit și special", // brilliant and special
          "pasionat și perseverent", // passionate and perseverant
          "gras și greoi", // fat and heavy
          "subțire și suplu", // thin and supple
          "harnic și hotărât", // hardworking and determined
          "iute și iscusit", // quick and skilled
          "larg și lung", // wide and long
          "mare și masiv", // big and massive
          "negru și nocturn", // black and nocturnal
          "primul și perfect", // first and perfect
          "roz și rotund", // pink and round
          "scurt și scump", // short and expensive
          "tare și trainic", // strong and durable
          "umed și uriluitor", // wet and giant
          "vast și variat", // vast and varied
          "alb și albastru", // white and blue
          "bogat și bun", // rich and good
          "calm și calculat", // calm and calculated
          "deștept și diligent", // smart and diligent
          "elegant și energic", // elegant and energetic
          "fin și fragil", // fine and fragile
          "grațios și gingaș", // graceful and gentle
          "hazliu și harnic", // funny and hardworking
          "inteligent și ingenios", // intelligent and ingenious
          "jovial și just", // jovial and just
          "known și...oops that's English", // error example
          "limpede și liniștit", // clear and quiet
          "minunat și magic", // wonderful and magic
          "neted și normal", // smooth and normal
          "original și optimist", // original and optimist
          "plăcut și pașnic", // pleasant and peaceful
          "quiet...oops also English", // error example
          "radiant și rar", // radiant and rare
          "solid și sigur", // solid and safe
          "tandru și talentat", // tender and talented
          "unic șiutil", // unique and useful
          "valoros și veritabil", // valuable and true
          "înțelept și egal", // wise and equal
          "zâmbitor și zelos", // smiling and zealous
          "blând și bun la suflet", // gentle and good at heart
          "curajos și credincios", // brave and faithful
          "destoinic și devotat", // capable and devoted
          "econom și eficient", // economical and efficient
          "ferm și fără frică", // firm and fearless
          "gânditor și generos", // thoughtful and generous
          "harnic și hotărât", // hardworking and determined
          "isteț și inventiv", // clever and inventive
          "just și jovial", // just and jovial
          "liniștit și loial", // quiet and loyal
          "muncitor și modest", // hardworking and modest
          "necesar și nobil", // necessary and noble
          "onest și optimist", // honest and optimistic
          "politicos și prudent", // polite and prudent
          "responsabil și respectuos", // responsible and respectful
          "serios și sincer", // serious and sincere
          "talentat și tolerant", // talented and tolerant
          "util și unit", // useful and united
          "virtuos și viguros", // virtuous and vigorous
          "vrednic și vesel", // worthy and cheerful
          "zâmbet și zel", // smile and zeal
          "adevăr și armonie", // truth and harmony
          "bucurie și bunătate", // joy and goodness
          "credință și curaj", // faith and courage
          "demnitate și devotament", // dignity and devotion
          "empatie și energie", // empathy and energy
          "frumusețe și forță", // beauty and strength
          "grație și generozitate", // grace and generosity
          "harmonie și hărnicie", // harmony and diligence
          "inspirație și integritate", // inspiration and integrity
          "jurământ și justice...oops English again", // error example
          "lumină și libertate", // light and liberty
          "mândrie și milostenie", // pride and mercy
          "nădejde și noblete", // hope and nobility
          "ordine și onoare", // order and honor
          "pace și putere", // peace and power
          "râvnă și răbdare", // zeal and patience
          "salvare și sănătate", // salvation and health
          "tărie și temeinicie", // strength and thoroughness
          "unitate și utilitate", // unity and utility
          "voință și vitejie", // will and bravery
          "zahăr și zel", // sugar and zeal
          
          // Romanian tongue twisters (expanded)
          "capra calcă piatra", // goat steps on stone
          "capra calcă piatra piatra crăpă", // goat steps stone cracks
          "șase sași în șase saci", // six Saxons in six sacks
          "sași în saci",
          "trage tata tare", // father pulls hard
          "papă capul purcelului", // eat piglet's head
          "papă lapte cald", // eat warm milk
          "șapte saci de sare", // seven sacks of salt
          "șoarecele șoarecelui", // mouse to mouse
          "să-mi spui și mie", // tell me too
          "treizeci și trei", // thirty three
          "știi să spui", // know to say
          "spune-mi și mie să știu și eu", // tell me too so I know
          "spune și tu", // you say too
          "spune repede", // say quickly
          "stai să-ți spun", // wait to tell you
          "trei tigri triști", // three sad tigers
          "tigri triști",
          "patru pietre", // four stones
          "pietre prețioase", // precious stones
          "poartă portocalie", // orange gate
          "capra cu papucii de plută", // goat with cork slippers
          "un pui de pui", // a chick's chick
          "un cur de cal", // a horse's rear
          "pentru portavoce", // for spokesman
          "bărbatul bălai", // blond man
          "bătrânul biberon", // old baby bottle (nonsense)
          "biblia biblică", // biblical bible
          "brânză bună", // good cheese
          "bubuituri bulgarești", // bulgarian rumbles
          "căpșună caldă", // warm strawberry
          "călugărul cu carâmb", // monk with crosier
          "cinci copii", // five children
          "cornul cu cremă", // cream horn
          "cravată croată", // croatian tie
          "dans danez", // danish dance
          "deal deasupra", // hill above
          "doctor doct", // doctor taught
          "dragon drăguț", // cute dragon
          "dans și distracție", // dance and fun
          "elev exemplar", // exemplary student
          "elvețian elegant", // elegant Swiss
          "expert eccentric", // eccentric expert
          "fată frumoasă", // beautiful girl
          "femeie fericită", // happy woman
          "filozof francez", // French philosopher
          "floare fermecată", // magic flower
          "formidabil fantastic", // formidable fantastic
          "gât gol", // naked neck
          "găină grasă", // fat hen
          "general grec", // Greek general
          "glob verde", // green globe... wait that's not alliteration
          "harnic și hotărât", // hardworking and determined
          "hotel hanul", // hotel inn
          "haine hâoase", // old clothes (that come loose)
          "iarna îngheța", // winter froze
          "iepure imens", // huge rabbit
          "indian inteligent", // intelligent Indian
          "joc jucăuș", // playful game
          "jurnal japonez", // Japanese journal
          "carte complexă", // complex book
          "cuvânt complicat", // complicated word
          "cal care calcă", // horse that steps
          "leu leneș", // lazy lion
          "lună luminoasă", // bright moon
          "lucruri liniștitoare", // calming things
          "mâncare miroasă", // food smells... wait that doesn't work either
          "măr mare", // big apple
          "minge moale", // soft ball
          "munte masiv", // massive mountain
          "noapte neagră", // black night
          "nor negru", // black cloud
          "nume nou", // new name
          "oală oarbă", // blind pot (nonsense for example)
          "om onest", // honest man
          "parte principală", // main part
          "pasăre pestriță", // colorful bird
          "piatră prețioasă", // precious stone
          "poartă portocalie", // orange gate
          "porumb proaspăt", // fresh corn
          "profet prusac", // Prussian prophet
          "roșu rubiniu", // ruby red
          "round român", // Romanian round
          "răbdare rară", // rare patience
          "sac simplu", // simple sack
          "sare sănătoasă", // healthy salt
          "seară senină", // serene evening
          "soare strălucitor", // shining sun
          "șarpe șmecher", // clever snake
          "șef șmecher", // clever boss
          "știință subtilă", // subtle science
          "tablou trist", // sad painting
          "tată temător", // fearful father
          "tigru tare", // strong tiger
          "turn înalt", // tall tower
          "țară târzie", // late country (nonsense)
          "urs uriaș", // giant bear
          "vale verde", // green valley
          "vânt violent", // violent wind
          "viață veselă", // merry life
          "vulpe vicleană", // cunning fox
          "zâmbet zdravăn", // healthy smile
          "zar zugrăvit", // painted die
          "zgomot zgomotos", // noisy noise
          
          // Common expressions
          "practice makes perfect",
          "beggars can't be choosers",
          "better late than never",
          "busy as a bee",
          "curiosity killed the cat",
          "easy come easy go",
          "every cloud has a silver lining",
          "good grief",
          "home sweet home",
          "money makes the world go round",
          "no news is good news",
          "the more the merrier",
          "time will tell",
          "what will be will be",
          "you win some you lose some",
          
          // Generic acceptable answers
          "alliteration",
          "same sound",
          "repeated sound",
          "sound pattern",
          "aliterație",
          "sunet repetat",
          "același sunet",
          "pattern sonor"
        ],
        typoTolerance: 4,
      },
      {
        id: "t1q2i3",
        text: (t) => t("language_domains.q3.text", 'Another playful use of language is in poetry. Create a rhyme or a poetic usage of language.'),
        correctInputs: [
          // Rhyming phrases (English)
          "see you later alligator",
          "in a while crocodile",
          "after a while crocodile",
          "bye bye butterfly",
          "chop chop lollipop",
          "peace out trout",
          "see you soon baboon",
          "gotta go buffalo",
          "be sweet parakeet",
          "out the door dinosaur",
          "better swish jellyfish",
          "better shake rattlesnake",
          "blow a kiss goldfish",
          "give a hug ladybug",
          "take care polar bear",
          "time to go buffalo",
          "can't stay i'm on my way",
          "hit the trail snail",
          "got to fly butterfly",
          "time to scoot little newt",
          "toodle-oo kangaroo",
          "see you soon raccoon",
          "night night sleep tight",
          "night night don't let the bedbugs bite",
          "sleep tight don't let the bedbugs bite",
          "sweet dreams jellybean",
          "nighty night sleep tight",
          "catch you on the flip side",
          
          // Portmanteaus / blended words
          "brunch",
          "breakfast and lunch",
          "smog",
          "smoke and fog",
          "motel",
          "motor hotel",
          "spork",
          "spoon and fork",
          "frenemy",
          "friend and enemy",
          "staycation",
          "stay vacation",
          "glamping",
          "glamorous camping",
          "hangry",
          "hungry angry",
          "chillax",
          "chill relax",
          "shopaholic",
          "shopping alcoholic",
          "webinar",
          "web seminar",
          "frankenstein",
          "bromance",
          "bro romance",
          "mockumentary",
          "mock documentary",
          "infomercial",
          "information commercial",
          "ginormous",
          "gigantic enormous",
          "humongous",
          "huge monstrous",
          "fantabulous",
          "fantastic fabulous",
          "splendiferous",
          "splendid coniferous",
          "bodacious",
          "bold audacious",
          "bootylicious",
          "booty delicious",
          "sexting",
          "sex texting",
          "mansplaining",
          "man explaining",
          "brexit",
          "british exit",
          "shart",
          "shit fart",
          
          // Reduplication / fun repetition
          "super duper",
          "okey dokey",
          "lovey dovey",
          "itty bitty",
          "teeny weeny",
          "itsy bitsy",
          "wishy washy",
          "razzle dazzle",
          "hocus pocus",
          "hokey pokey",
          "hanky panky",
          "mumbo jumbo",
          "pitter patter",
          "chit chat",
          "zig zag",
          "flip flop",
          "tick tock",
          "ping pong",
          "ding dong",
          "hip hop",
          "see saw",
          "clip clop",
          "knick knack",
          "mishmash",
          "helter skelter",
          "topsy turvy",
          "easy peasy",
          "easy peasy lemon squeezy",
          "fancy schmancy",
          "loosey goosey",
          "namby pamby",
          "nitty gritty",
          "hoity toity",
          "arty farty",
          "fuddy duddy",
          "hurly burly",
          "willy nilly",
          "dilly dally",
          "shilly shally",
          "fuzzy wuzzy",
          "boogie woogie",
          "heebie jeebies",
          "jeepers creepers",
          "yada yada yada",
          
          // Made up words / neologisms  
          "cromulent",
          "embiggen",
          "irregardless",
          "supposably",
          "conversate",
          "funner",
          "adulting",
          "selfie",
          "photobomb",
          "binge watch",
          "ghosting",
          "catfish",
          "stan",
          "ship",
          "lowkey",
          "highkey",
          "salty",
          "tea",
          "spill the tea",
          "slay",
          "lit",
          "fire",
          "flex",
          "cap",
          "no cap",
          "bet",
          "vibe",
          "mood",
          "savage",
          "woke",
          "canceled",
          "karen",
          "ok boomer",
          "simp",
          "sus",
          "bussin",
          "slaps",
          "hits different",
          "living rent free",
          "main character energy",
          "side quest",
          
          // Twisted expressions / anti-proverbs
          "a bird in the hand is worth two in the bush",
          "curiosity killed the cat satisfaction brought it back",
          "don't count your chickens before they hatch",
          "early bird catches the worm",
          "too many cooks spoil the broth",
          "actions speak louder than words",
          "if it ain't broke don't fix it",
          "if it ain't broke break it",
          "when life gives you lemons make lemonade",
          "when life gives you lemons",
          "the early bird gets the worm but the second mouse gets the cheese",
          "second mouse gets the cheese",
          "i'm not arguing i'm just explaining why i'm right",
          "not all who wander are lost",
          "keep calm and carry on",
          "keep calm",
          "carpe diem",
          "yolo",
          "you only live once",
          "hakuna matata",
          "winter is coming",
          "may the force be with you",
          "live long and prosper",
          
          // Romanian rhymes and playful phrases
          "pe mâine", // on tomorrow
          "la revedere", // goodbye
          "la mulți ani", // happy birthday/many years
          "noroc și spor", // luck and prosperity
          "drum bun", // good road/journey
          "să fie într-un ceas bun", // may it be in a good hour
          "cât ai zice pește", // as you'd say fish (quickly)
          "cât ai clipi", // as you'd blink
          "dintr-o palmă", // from one palm (quickly)
          "într-o clipă", // in a blink
          "cap coadă", // head tail
          "de-a berbeleacul", // topsy turvy
          "de-a-ndoaselea", // backwards
          "de-a-n pulea", // backwards (vulgar)
          "de-a bușilelea", // upside down
          "de-a-n șaua", // on horseback backwards
          "bum", // boom
          "pac", // smack
          "țăc", // crack
          "ciup", // thwack
          "hai hui", // quickly
          "pic pic", // drip drip
          "tic tac", // tick tock
          "zdup", // wham
          "ham ham", // yum yum
          "miau", // meow
          "ham", // nom
          "bau", // woof/bow-wow
          "cucurigu", // cock-a-doodle-doo
          "moo", // moo
          "mac mac", // quack quack
          "cip cip", // cheep cheep
          "cot cot", // cluck cluck
          "bee bee", // baa baa
          "gâg gâg", // cackle
          "oink oink", // oink
          "neee", // neigh
          "ron ron", // purr purr
          "cri cri", // chirp chirp
          "buzz buzz", // buzz
          "ssss", // hiss
          "groar", // roar
          "auuuu", // howl
          "hap", // chomp
          "cloponțel", // little bell
          "ding dong", // ding dong
          "poc poc", // pop pop
          "puf", // poof
          "bufff", // whooosh
          "șuier", // whistle
          "clap", // splash
          "pleosc", // splash (bigger)
          "trosc", // crack/crunch
          "cârâit", // squeak
          "scârț", // scrape
          "zgomot", // noise
          "vuiet", // rumble/roar
          "țiuit", // beep/chirp
          "trosnet", // crackle
          "fâșâit", // rustle
          "șuierat", // whistling
          "huruit", // rustle/rushing
          "bâzâit", // buzzing
          "zumzet", // buzz/hum
          "murmur", // murmur
          "pârâit", // crackling
          "freamăt", // stirring/rustle
          
          // Romanian children's rhymes and songs
          "hai la joc", // come to dance/play
          "jocul horei", // hora dance
          "sus în deal", // up on the hill
          "hai să mergem", // let's go
          "cântă cucu", // cuckoo sings
          "bate vântu", // wind blows
          "cade bruma", // frost falls
          "ninge iar", // snowing again
          "iarna grea", // harsh winter
          "primăvară", // spring
          "vara caldă", // hot summer
          "toamna vine", // autumn comes
          "frunze galbene", // yellow leaves
          "cad pe jos", // fall on ground
          "ploaia bate", // rain beats
          "soarele arde", // sun burns
          "luna crește", // moon grows
          "stele cad", // stars fall
          "noapte bună", // good night
          "somn ușor", // light sleep
          "vise plăcute", // pleasant dreams
          "la anul", // next year
          "și la mulți ani", // and many years
          "pentru tine", // for you
          "cu drag", // with love
          "din inimă", // from heart
          "cu bucurie", // with joy
          "mereu", // always
          "pentru totdeauna", // forever
          "în veci", // eternally
          "până la sânge", // to the blood
          "până la capăt", // to the end
          "până una alta", // meanwhile
          "pe dos", // backwards
          "pe invers", // reverse
          "pe sărite", // skipping
          "de-a lungul", // lengthwise
          "de-a latul", // widthwise
          "în diagonală", // diagonally
          "în cerc", // in circle
          "în spirală", // in spiral
          "într-un picior", // on one foot
          "cu ochii închiși", // with eyes closed
          "cu mâinile sus", // with hands up
          "de-a calul", // horseback
          "de-a ursul", // bearback
          "de-a v-ați ascunselea", // hide and seek
          "de-a vânătoarea", // chase
          "de-a prinsul", // tag/catch
          "de-a baba oarba", // blind man's buff
          "de-a șoarecele", // mouse game
          "de-a pisica", // cat game
          "capra calcă", // goat steps
          "ursul doarme", // bear sleeps
          "lupul latră", // wolf barks
          "vulpea fuge", // fox runs
          "iepurele sare", // rabbit jumps
          "vrabia cântă", // sparrow sings
          "cucul strigă", // cuckoo calls
          "porumbelul gânguește", // dove coos
          "corbul croncăne", // raven caws
          "barza crotălește", // stork clatters
          "cioara croaie", // crow caws
          "rândunica zbor", // swallow's flight
          "fluturele dansează", // butterfly dances
          "albina bâzâie", // bee buzzes
          "greierele cântă", // cricket chirps
          "broasca oarba", // blind frog (game)
          "șotronul", // hopscotch
          "elasticul", // elastic game
          "coarda", // rope (jumping)
          "mingea", // ball
          "balonul", // balloon
          "avionul", // airplane (paper)
          "bărcuța", // little boat
          "zmeu de hârtie", // paper kite
          "păpușa", // doll
          "ursulețul", // teddy bear
          "mașinuța", // little car
          "trenulețul", // little train
          "căluțul", // little horse
          "cățelul", // puppy
          "pisicuța", // kitty
          "iepurașul", // bunny
          "vrăbiuța", // little sparrow
          
          // Romanian diminutives and affectionate forms
          "puiuț", // little one (chick-like)
          "micuț", // tiny
          "drăguț", // cute/dear
          "dulceață", // sweetie
          "iubirel", // little love
          "copilaș", // little child
          "fetiță", // little girl
          "băiețel", // little boy
          "omuleț", // little man
          "căsuță", // little house
          "floricică", // little flower
          "stelulă", // little star
          "lunița", // little moon
          "nouraș", // little cloud
          "picătură", // droplet
          "firicel", // little thread
          "frunzuliță", // little leaf
          "bobocei", // little buds
          "curcubeu", // rainbow
          "boare", // breeze
          "adiere", // waft
          "răcoare", // coolness
          "umbră", // shadow
          "licăr", // glimmer
          "scânteie", // spark
          "flăcăruie", // little flame
          "jeratic", // ember
          
          // Romanian slang and modern expressions
          "mișto", // cool
          "fain", // nice
          "tare", // cool/strong
          "super", // super
          "wow", // wow
          "uau", // wow (Romanian)
          "grozav", // great
          "perfect", // perfect
          "bravo", // bravo
          "felicitări", // congratulations
          "respect", // respect
          "forță", // strength/power
          "țeapăn", // stiff/uptight
          "căcălău", // wimp
          "fraier", // sucker
          "șmecher", // clever/sneaky
          "deștept", // smart
          "prost", // stupid
          "tâmpit", // dumb
          "nebun", // crazy
          "smardoi", // brat
          "papagal", // parrot/copycat
          "laba goale", // blabbermouth
          "gura mare", // big mouth
          "limbă de moarte", // sharp tongue
          "nas băgăcios", // nosy
          "urechi lungi", // long ears (gossip)
          "ochi mari", // big eyes (greedy)
          "mână lungă", // long hand (thief)
          "picior ușor", // light foot (fast)
          "cap greu", // heavy head (stubborn)
          "inimă rea", // bad heart (mean)
          "suflet negru", // black soul (evil)
          "gând rău", // bad thought (evil intent)
          "vorbă goală", // empty words
          "promisiune deșartă", // empty promise
          "speranță zadarnic", // vain hope
          "visuri de copil", // childhood dreams
          "iluzii mari", // grand illusions
          "așteptări mari", // high expectations
          "pretenții multe", // many demands
          "dorințe nebunești", // crazy desires
          
          // More Romanian wordplay
          "ce faci", // what are you doing
          "ce zici", // what do you say
          "cum merge", // how's it going
          "ce mai faci", // what's up
          "totul bine", // all good
          "nimic special", // nothing special
          "la fel", // same
          "tot aia", // same old
          "merge", // it goes (it's okay)
          "duce", // it goes (it's okay)
          "suportabil", // bearable
          "așa și așa", // so-so
          "nu mă pot plânge", // can't complain
          "merge treaba", // things are going
          "o ducem", // we're managing
          "ne descurcăm", // we're managing
          "supraviețuim", // we're surviving
          "trăim", // we're living
          "rezistăm", // we're resisting
          "luptăm", // we're fighting
          "muncim", // we're working
          "încercăm", // we're trying
          "sperăm", // we're hoping
          "așteptăm", // we're waiting
          "vedem", // we'll see
          "nu știm", // we don't know
          "poate", // maybe
          "probabil", // probably
          "sigur", // sure
          "desigur", // certainly
          "categoric", // categorically
          "evident", // obviously
          "clar", // clearly
          "fără îndoială", // without doubt
          "absolut", // absolutely
          "exact", // exactly
          "perfect", // perfectly
          "corect", // correct
          "just", // right
          "precis", // precisely
          "întocmai", // exactly so
          
          // Romanian portmanteaus / tech terms / modern blends
          "netul", // the net
          "internetul", // the internet
          "telenovelă", // telenovela
          "videochat", // videochat
          "webcam", // webcam
          "laptop", // laptop
          "smartphone", // smartphone
          "email", // email
          "blog", // blog
          "vlog", // vlog
          "selfie", // selfie
          "wi-fi", // wi-fi
          "bluetoothuit", // bluetoothed (jokingly)
          "googluit", // googled
          "facebookuit", // facebooked
          "whatsappuit", // whatsapped
          "instauit", // instagrammed
          "tweetuit", // tweeted
          "sharuit", // shared
          "postat", // posted
          "uploadat", // uploaded
          "downloadat", // downloaded
          "streamuit", // streamed
          "scrolluit", // scrolled
          "swipeuit", // swiped
          "clickuit", // clicked
          "tagguit", // tagged
          "likeit", // liked
          "comentat", // commented
          "viraliza", // go viral
          "trenduit", // trended
          "emoji", // emoji
          "gif", // gif
          "meme", // meme
          "hashtag", // hashtag
          "story", // story (social media)
          "reel", // reel
          "tiktok", // tiktok
          "snapchat", // snapchat
          "telegram", // telegram
          "zoom", // zoom
          "skype", // skype
          "discord", // discord
          "twitch", // twitch
          "youtube", // youtube
          "netflix", // netflix
          "spotify", // spotify
          "podcast", // podcast
          "influencer", // influencer
          "youtuber", // youtuber
          "streamer", // streamer
          "gamer", // gamer
          "cosplayer", // cosplayer
          "blogger", // blogger
          "vlogger", // vlogger
          "tiktoker", // tiktoker
          "fotoshop", // photoshop (verb)
          "editat", // edited
          "filteruit", // filtered
          "croppuit", // cropped
          "zoomuit", // zoomed
          "printuit", // printed
          "scannuit", // scanned
          "buffering", // buffering
          "loading", // loading
          "refresh", // refresh
          "update", // update
          "upgrade", // upgrade
          "backup", // backup
          "cloud", // cloud
          "storage", // storage
          "algoritm", // algorithm
          "cookie", // cookie (tech)
          "cache", // cache
          "spam", // spam
          "virus", // virus
          "malware", // malware
          "hacker", // hacker
          "phishing", // phishing
          "screenshot", // screenshot
          "screenrecording", // screen recording
          "playlist", // playlist
          "shuffle", // shuffle
          "repeat", // repeat
          "mute", // mute
          "unmute", // unmute
          "bass", // bass
          "glitch", // glitch
          "lag", // lag
          "ping", // ping
          "fps", // fps
          "dlc", // dlc
          "npc", // npc
          "pvp", // pvp
          "mmorpg", // mmorpg
          "lol", // lol (laugh or league)
          "omg", // omg
          "wtf", // wtf
          "brb", // brb
          "afk", // afk
          "gg", // gg (good game)
          "ggwp", // ggwp
          "noob", // noob
          "pro", // pro
          "camper", // camper
          "troller", // troller (gaming)
          "griefing", // griefing
          "speedrun", // speedrun
          "ragequit", // ragequit
          "pwned", // pwned
          "ownuit", // owned
          "rekt", // rekt
          "epic fail", // epic fail
          "facepalm", // facepalm
          "cringy", // cringy
          "cringe", // cringe
          "stalker", // stalker (social media)
          "lurker", // lurker
          "troll", // troll
          "hater", // hater
          "fanboy", // fanboy
          "fangirl", // fangirl
          "shipper", // shipper
          "stăn", // stan
          "cancelat", // canceled
          "woke", // woke
          "boomer", // boomer
          "zoomer", // zoomer
          "millennial", // millennial
          "gen z", // gen z
          "ok boomer", // ok boomer
          "karen", // karen
          "chad", // chad
          "simp", // simp
          "simping", // simping
          "friendzone", // friendzone
          "ghosting", // ghosting
          "catfish", // catfish
          "breadcrumbing", // breadcrumbing
          "gaslighting", // gaslighting
          "mansplaining", // mansplaining
          "whitesplaining", // whitesplaining
          "humblebragging", // humblebragging
          "flexing", // flexing
          "clout", // clout
          "savage", // savage
          "salty", // salty
          "shook", // shook
          "triggered", // triggered
          "lowkey", // lowkey
          "highkey", // highkey
          "deadass", // deadass
          "no cap", // no cap
          "cap", // cap (lying)
          "bet", // bet
          "facts", // facts
          "periodt", // periodt
          "yeet", // yeet
          "oof", // oof
          "big mood", // big mood
          "same", // same
          "vibe check", // vibe check
          "main character", // main character
          "side quest", // side quest
          "npc energy", // npc energy
          "rent free", // rent free (living)
          "understood the assignment", // understood assignment
          "hits different", // hits different
          "slaps", // slaps
          "bussin", // bussin
          "sheesh", // sheesh
          "respectfully", // respectfully
          "iykyk", // if you know you know
          "fomo", // fomo
          "yolo", // yolo
          "adulting", // adulting
          "moodboard", // moodboard
          "aesthetic", // aesthetic
          "soft girl", // soft girl
          "eboy", // eboy
          "egirl", // egirl
          "soft boy", // soft boy
          "pick me", // pick me (girl/boy)
          "girlboss", // girlboss
          "queen", // queen
          "king", // king
          "slay", // slay
          "yas", // yas
          "werk", // werk
          "serving", // serving (looks)
          "ate", // ate (did well)
          "left no crumbs", // left no crumbs
          "the tea", // the tea (gossip)
          "spilling tea", // spilling tea
          "and i oop", // and i oop
          "sksksk", // sksksk
          "vsco", // vsco
          "uwu", // uwu
          "owo", // owo
          "poggers", // poggers
          "pog", // pog
          "pepega", // pepega
          "kappa", // kappa
          "monkas", // monkas
          "weirdchamp", // weirdchamp
          "based", // based
          "cringe", // cringe
          "cope", // cope
          "seethe", // seethe
          "mald", // mald (mad+bald)
          "ratio", // ratio
          "l", // L (loss)
          "w", // W (win)
          "fr", // fr (for real)
          "ngl", // ngl (not gonna lie)
          "tbh", // tbh (to be honest)
          "imo", // imo (in my opinion)
          "imho", // imho
          "smh", // smh (shaking my head)
          "fyi", // fyi
          "tmi", // tmi
          "tl;dr", // tldr
          "eli5", // eli5
          "ama", // ama
          "til", // til (today I learned)
          "diy", // diy
          "ootd", // ootd (outfit of day)
          "mcm", // mcm (man crush monday)
          "wcw", // wcw (woman crush wed)
          "tbt", // tbt (throwback thursday)
          "fbf", // fbf (flashback friday)
          "bff", // bff
          "bae", // bae
          "boo", // boo
          "squad", // squad
          "fam", // fam
          "bruh", // bruh
          "dude", // dude
          "homie", // homie
          "bestie", // bestie
          "ship", // ship (relationship)
          "otp", // otp (one true pairing)
          "bromance", // bromance
          "womance", // womance
          "friendzone", // friendzone
          "situationship", // situationship
          "talking stage", // talking stage
          "soft launch", // soft launch (relationship)
          "hard launch", // hard launch
          "red flag", // red flag
          "green flag", // green flag
          "beige flag", // beige flag
          "ick", // ick
          "rizz", // rizz
          "no rizz", // no rizz
          "mid", // mid
          "npc", // npc (boring person)
          "basic", // basic
          "extra", // extra
          "bougie", // bougie
          "boujee", // boujee
          "ratchet", // ratchet
          "ghetto", // ghetto
          "hood", // hood
          "street", // street
          "drip", // drip (style)
          "fit", // fit (outfit)
          "fire", // fire
          "lit", // lit
          "turnt", // turnt
          "hype", // hype
          "mood", // mood
          "vibe", // vibe
          "energy", // energy
          "aura", // aura
          "delulu", // delulu (delusional)
          "solulu", // solulu (solution)
          "gatekeep", // gatekeep
          "gaslight", // gaslight
          "girlboss", // girlboss (repeated but combined)
          "slay queen", // slay queen
          "it girl", // it girl
          "hot girl summer", // hot girl summer
          "sad girl", // sad girl
          "clean girl", // clean girl
          "that girl", // that girl
          "material girl", // material girl
          
          // Generic acceptable creative answers
          "cat hat",
          "bat cat",
          "dog log",
          "fox box",
          "bee tree",
          "bear chair",
          "mouse house",
          "fish dish",
          "frog log",
          "bug rug",
          "star car",
          "moon soon",
          "sun fun",
          "rain train",
          "snow go",
          "blue true",
          "red bed",
          "green seen",
          "white light",
          "black back",
          "pink drink",
          "brown town",
          "gray day",
          "nice ice",
          "cold gold",
          "hot pot",
          "wet pet",
          "dry fly",
          "high sky",
          "low snow",
          "big pig",
          "small ball",
          "tall wall",
          "short court",
          "long song",
          "fast past",
          "slow grow",
          "old cold",
          "new blue",
          "young sung",
          "good wood",
          "bad dad",
          "sad lad",
          "mad pad",
          "glad brad",
          "fat cat",
          "thin skin",
          "thick stick",
          "light night",
          "dark park",
          "bright right",
          "dim him",
          "loud cloud",
          "quiet riot",
          "soft loft",
          "hard card",
          "smooth smooth", // intentional
          "rough stuff",
          "clean bean",
          "dirty birdy",
          "neat feet",
          "messy bessie",
          "pretty city",
          "ugly bugly",
          "cute flute",
          "sweet beat",
          "sour hour",
          "bitter glitter",
          "spicy icy",
          "salty faulty",
          "fresh mesh",
          "stale whale",
          "warm storm",
          "cool pool",
          "hot spot",
          "cold bold",
          "warm charm",
          "happy happy",
          "joy boy",
          "fun run",
          "play day",
          "sad bad",
          "cry sky",
          "tear fear",
          "pain rain",
          "hurt dirt",
          "love dove",
          "hate wait",
          "like bike",
          "care bear",
          "friend end",
          "boy toy",
          "girl pearl",
          "man plan",
          "woman roman",
          "kid lid",
          "baby maybe",
          "mom bomb",
          "dad mad",
          "son fun",
          "daughter water",
          "brother other",
          "sister mister",
          
          // Romanian simple rhymes
          "alb galb", // white yellow (approximate rhyme)
          "roșu frumos", // red beautiful
          "verde tare", // green strong
          "albastru iute", // blue fast
          "galben dulce", // yellow sweet
          "negru greu", // black heavy
          "roz frumos", // pink beautiful
          "violet fericit", // purple happy
          "maro tare", // brown strong
          "gri mare", // gray big
          "pisică fiică", // cat daughter
          "câine pâine", // dog bread
          "iepure floare", // rabbit flower
          "pasăre dulce", // bird sweet
          "pește măr", // fish apple (imperfect but used in children's rhymes)
          "cal șal", // horse scarf
          "vacă apă", // cow water (imperfect)
          "oaie vale", // sheep valley
          "porc corc", // pig cork (imperfect)
          "gâscă casă", // goose house (approximate)
          "rață pată", // duck stain
          "cocoș frumos", // rooster beautiful
          "pui bui", // chick mist
          "măr car", // apple cart
          "pară țară", // pear country
          "cireașă reașă", // cherry (no good rhyme, this is made up)
          "prună bună", // plum good
          "strugure dulce", // grape sweet
          "lămâie pâine", // lemon bread (imperfect)
          "portocală galbenă", // orange yellow (not rhyme, description)
          "banană ană", // banana ana (name)
          "casă masă", // house table
          "pat dată", // bed date/time
          "scaun bun", // chair good
          "masă casă", // table house
          "fereastră noastră", // window ours
          "ușă goală", // door empty (imperfect)
          "perete verde", // wall green (approximate)
          "acoperiș mic", // roof small
          "podea grea", // floor heavy (imperfect)
          "soare floare", // sun flower
          "lună bună", // moon good
          "stea grea", // star heavy (imperfect)
          "nori coșuri", // clouds baskets (imperfect, but rhythmic)
          "ploaie mare", // rain big
          "ninsoare floare", // snow flower
          "ger ger", // frost frost
          "vânt cântat", // wind sung
          "furtună bună", // storm good
          "munte soare", // mountain sun (imperfect)
          "mare tare", // sea strong
          "râu nou", // river new
          "lac crac", // lake crack (imperfect)
          "dealeal", // hill hill
          "vale dale", // valley other valley
          "pădure dure", // forest hard (imperfect)
          "câmp lung", // field long
          "grădină mină", // garden mine
          "floare soare", // flower sun
          "copac pac", // tree whack
          "frunză nuntă", // leaf wedding (imperfect)
          "rădăcină mină", // root mine
          "trunchi chi", // trunk chi (nonsense ending)
          "ramură dură", // branch hard
          "carte tare", // book strong
          "pix mic", // pen small
          "creion bun", // pencil good
          "hârtie fie", // paper be
          "caiet strict", // notebook strict
          "radieră sieră", // eraser (no good rhyme)
          "rucsac crac", // backpack crack
          "ghiozdan dan", // schoolbag dan (name)
          "școală goală", // school empty
          "clasă masă", // classroom table
          "tablă hablă", // blackboard (no rhyme, made up)
          "catedră teatră", // desk (no rhyme)
          "profesoară soare", // teacher sun (female, imperfect)
          "elev elev", // student student
          "lecție petiție", // lesson petition (imperfect)
          "temă problemă", // homework problem
          "notă goală", // grade empty
          "mașină mină", // car mine
          "bicicletă retă", // bicycle (no rhyme)
          "autobuz uz", // bus use
          "tren bun", // train good
          "avion bun", // plane good
          "vapor capor", // ship (no rhyme)
          "barcă hărcă", // boat (no rhyme, made up)
          "iaht naht", // yacht (no rhyme)
          "velier ier", // sailboat (imperfect)
          "elicopter er", // helicopter (imperfect)
          "rachetă retă", // rocket (no rhyme)
          "stație rație", // station ration
          "drum bun", // road good
          "stradă bradă", // street fir tree
          "bulevard tard", // boulevard late
          "alee fee", // alley (no rhyme)
          "cărare rare", // path rare
          "potecă retecă", // trail (no rhyme, made up)
          
          // Silly made-up expressions
          "that's so fetch",
          "fetch",
          "streets ahead",
          "cool beans",
          "groovy",
          "radical",
          "tubular",
          "gnarly",
          "bodacious",
          "wicked",
          "sick",
          "dope",
          "fresh",
          "fly",
          "phat",
          "da bomb",
          "all that and a bag of chips",
          "off the chain",
          "off the hook",
          "tight",
          "money",
          "clutch",
          "beast",
          "legit",
          "dank",
          "sus",
          "cringe",
          "based",
          "poggers",
          "sheesh",
          "respectfully",
          "periodT",
          "and i oop",
          "sksksk",
          "vsco girl",
          
          // Generic acceptable creative answers
          "rhyme",
          "made up word",
          "wordplay",
          "creative phrase",
          "playful combination",
          "twist on saying",
          "rimă",
          "cuvânt inventat",
          "joc de cuvinte",
          "expresie creative",
          "combinație creativă",
          "expresie răsucită",
          "neologism",
          "portmanteau",
          "blend",
          "mash-up"
        ],
        typoTolerance: 10,
      }
    ]
  },
  {
    id: "the_breadth_of_play",
    image: "/quest_icons/t1q3.svg",
    brief: (t) =>
      t(
        "the_breadth_of_play.brief",
        `The word "play" appears in many surprising contexts beyond games. Think broadly, from machinery to music to technology to theater.

Write ONE expression using "play" or "game" that is NOT about recreational games, for each of the categories below.`
      ),
    debrief: (t) =>
      t(
        "the_breadth_of_play.debrief",
        `**TL;DR:** Play is "free movement within a more rigid structure": this definition unifies mechanical slack, theatrical performance, musical expression, and game strategy, revealing that play isn't a separate activity but a fundamental pattern woven throughout reality.

# THE DEFINITION OF PLAY ITSELF

You just traced "play" into contexts beyond recreational games.

This reveals that "play" is remarkably hard to define.

Most words have stable meanings. A "chair" is a chair. But "play" sprawls across domains with nothing in common: a child playing tag, an actor playing Hamlet, a musician playing Chopin, free movement in gears, pressing a button to start video, strategic deception, light shimmering on water.

Philosopher Ludwig Wittgenstein argued that "game" and "play" are "family resemblance" concepts: there's no single feature shared by all instances, just overlapping similarities (Wittgenstein, 1953).

In Rules of Play, Zimmerman and Salen offer this formulation:

"Play is free movement within a more rigid structure." (Salen & Zimmerman, 2004, p. 304)

Look at your expression through this lens:

- MECHANICAL PLAY: A gear has "play" when there's slack allowing free movement within the mechanism's rigid structure

- THEATRICAL PLAY: An actor has interpretive freedom within the rigid structure of script and stage

- MUSICAL PLAY: A musician explores expression within the rigid structure of notation and instrument

- GAME PLAY: Chess players discover endless possibilities within chess's rigid 64-square structure

- MEDIA PLAYBACK: Pressing "play" releases free movement of video within its rigid timeline

- LINGUISTIC PLAY: "Playing dumb" finds freedom within rigid social expectations

In every case: FREEDOM WITHIN CONSTRAINT. Movement within boundaries. Possibility within structure.

This definition is recursive as it applies to itself. The word "play" exhibits free movement (across all these contexts) within the rigid structure of language. "Play" itself plays.

Zimmerman identifies three categories:

1. GAME PLAY - Playing games with explicit rules (chess, poker, video games). This is what most people think "play" means. But it's just one type.

2. LUDIC ACTIVITIES - Less structured play (bouncing a ball, playing with toys, horseplay). You test boundaries, experiment with physics, discover possibilities. Looser rules.

3. BEING PLAYFUL - Playful attitude applied to non-play contexts (playing dumb, playful banter, "play on words"). Play seeps into everything, transforming ordinary activities.

Huizinga called it the "magic circle" that special space where play happens (Huizinga, 1938, p. 10). But your quest proved something deeper: the magic circle isn't separate from ordinary life. It's woven throughout it.

You've been inside it all along.

---

REFERENCES:
Caillois, R. (1961). Man, Play and Games (M. Barash, Trans.). University of Illinois Press.
Huizinga, J. (1938). Homo Ludens: A Study of the Play-Element in Culture. Beacon Press.
Salen, K., & Zimmerman, E. (2004). Rules of Play: Game Design Fundamentals. MIT Press.
Wittgenstein, L. (1953). Philosophical Investigations (G. E. M. Anscombe, Trans.). Blackwell.

FURTHER READING:
Hans, J. S. (1981). The Play of the World. University of Massachusetts Press.
Sutton-Smith, B. (1997). The Ambiguity of Play. Harvard University Press.`,
      ),
    type: QuestType.Questions,
    questions: [
      {
        id: "t1q3i1",
        text: (t) => t("the_breadth_of_play.q1.text", 'MECHANICAL - An expression about movement or slack in machines'),
        correctInputs: ["play in the steering wheel", "free play", "play in the gears", "play of light", "mechanical play", "play in machinery", "slack in the mechanism", "clearance", "backlash", "loose play", "steering play", "play in the wheel", "play in the joint", "play in the bearings", "play in the system", "give and take", "slack", "slop", "joc de lumini", "joc în direcție", "joc liber", "joc în sistem", "joc în roți", "joc în lagăre", "joc mecanic"],
        typoTolerance: 2,
      },
      {
        id: "t1q3i2",
        text: (t) => t("the_breadth_of_play.q2.text", 'THEATRICAL - An expression about acting or performance'),
        correctInputs: ["play a role", "stage play", "theatre play", "play rehersal", "playwright", "play a character", "radio play", "screen play", "screenplay", "miracle play", "mystery play", "passion play", "morality play", "play production", "play rehearsal", "theater play", "play a part", "role play", "play acting", "play out a scene", "play to the audience", "teleplay", "play out the drama", "play the scene", "a juca teatru", "a juca un rol", "a-și juca rolul", "a juca într-o piesă", "a juca într-un film", "a juca într-un serial", "a juca pe scenă", "a juca live", "joc teatral", "piesă de teatru", "a juca o scenă", "piesa de teatru", "a monta o piesă"],
        typoTolerance: 2,
      },
      {
        id: "t1q3i3",
        text: (t) => t("the_breadth_of_play.q3.text", 'MUSICAL - An expression about music or dancing'),
        correctInputs: ["play the piano", "play piano", "play guitar", "play by ear", "hai la joc", "jocul horei", "play an instrument", "joacă bine", "play music", "play violin", "play drums", "play flute", "play saxophone", "play trumpet", "play bass", "play keyboard", "play organ", "play harmonica", "play accordion", "play cello", "play viola", "play clarinet", "play trombone", "play tuba", "play harp", "play banjo", "play ukulele", "play mandolin", "play a song", "play a tune", "play a melody", "play a piece", "play the violin", "play the guitar", "play the drums", "play the flute", "play a record", "play a CD", "play a track", "play an album", "play back", "playback", "replay", "a juca o melodie", "a juca la chitară", "a juca la pian", "a juca la vioară", "a juca la flaut", "a juca la tobe", "a juca la saxofon", "a juca la trompetă", "a juca la orgă", "a juca într-o orchestră", "a juca într-o trupă", "a juca într-un concert", "a cânta la pian", "a cânta la chitară", "a cânta la vioară", "a pune muzică", "a reda muzică", "a cânta"],
        typoTolerance: 2,
      },
      {
        id: "t1q3i4",
        text: (t) => t("the_breadth_of_play.q4.text", 'DECEPTION - An expression meaning "pretending" or "fake behavior"'),
        correctInputs: ["play possum", "play dumb", "playing games", "play along", "a juca teatru", "a juca murdar", "a juca la cacealma", "play the fool", "play fast and loose", "play both ends against the middle", "play hooky", "play favorites", "play dirty", "play acting", "play the victim", "play the race card", "played for a fool", "play around", "play it cool", "poker face", "play a part", "play a role", "play innocent", "play coy", "play pretend", "play games with someone", "game someone", "play tricks", "playact", "put on an act", "joc prefăcut", "a se juca cu sentimentele cuiva", "față de poker", "a avea o față de poker", "a se juca de-a v-ați ascunselea", "a juca pe nervii cuiva", "a juca un rol", "joc la cacealma", "a juca la două capete", "a păcăli", "a trage pe sfoară", "a duce de nas", "a face pe prostul", "a se preface"],
        typoTolerance: 2,
      }
    ]
  },
    {
    id: "ritual_play",
    image: "/quest_icons/t1q4.svg",
   brief: (t) =>
      t (
        "ritual_play.brief",
      "Go to the LABORATORY room and take a sheet of paper from the Q1-B bin. Write your answer to the quest your were given by a fellow player. Lastly, scan the QR code.",
      ),
    debrief: (t) =>
      t(
        "ritual_play.debrief",
        `**TL;DR:** Play and the sacred aren't opposites, they're twins sharing the same liminal space, transformative rules, and binding power, which is why ancient cultures used one word for ritual and play.

# THE PERMEABLE BOUNDARY

You've traced play through everyday language, across cognitive domains, into machinery and music and theater. Now confront the most provocative claim: play and the sacred aren't opposites, but twins.

A theatrical "play" was once a "mystery play" or "miracle play", explicitly religious performances. The ancient Greeks had no separate words for play, ritual, and festival, they used *agōn* (sacred contest) for both athletic games and theatrical performances (Huizinga, 1938).

When we call something "child's play," we mean trivial. But when Shakespeare wrote "the play's the thing wherein I'll catch the conscience of the king," he revealed play's capacity to access profound truth. Sports stadiums are called "temples." Fans perform "rituals." We speak of the "religion" of football. These are symbolic resonances made plain in language.

Anthropologist Brian Sutton-Smith observed that in tribal societies, "festival play is sacred play": excesses of behavior decreed appropriate to seasonal or religious occasions (Sutton-Smith, 1997, p. 83). Modern civilization insists play is "profane and optional," ritual is "sacred and obligatory." But the linguistic membrane between them remains breathtakingly thin.

In 1938, Dutch historian Johan Huizinga made an audacious claim: "The concept of play merges quite naturally with that of holiness" (Huizinga, 1938, p. 23). Ritual, he argued, has all the formal characteristics of play as it transports participants to another world, operates by special rules, exists in dedicated time and space, and creates intense communal bonds. Archaic ritual is "sacred play, indispensable for the well-being of the community" (Huizinga, 1938, p. 18).

Anthropologist Victor Turner synthesized these insights through "liminality", the threshold state where normal social structures dissolve (Turner, 1969). Ritual creates liminal space where transformation happens. But so does play. Turner studied play as "a kind of liminal space or 'play frame' that suspends the ordinary rules and structures of social life" (Turner, 1982, p. 33). Both ritual and play inhabit the same transitional realm.

THE LIVING EVIDENCE

Among the Q'ero people in Peru's remote highlands, there is no word separating sacred from play. They practice *pukllay*—literally "sacred play", a biopsychospiritual practice infiltrating all aspects of daily life (Christensen, 2020).

The four great games of ancient Greece—Olympic, Pythian, Isthmian, Nemean—were religious festivals honoring Zeus, Apollo, Poseidon, and Zeus again. Athletes were performing ritual obligations. The boundary between contest and ceremony didn't exist.

Modern sports preserve these traces. Stadiums evoke temples in scale and social function. Fans perform elaborate rituals (lucky jerseys, pregame traditions, anthem chanting). Moments of silence create communal reverence. We call transcendent athletic moments "miraculous."

THE MEMBRANE IS THIN

You've collected the linguistic fragments proving we are Homo Ludens not despite our capacity for the sacred, but because of it. When humans gather to play by shared rules in dedicated space and time, submitting to arbitrary constraints that somehow feel absolute, accepting roles that transform us, creating experiences that outlast the event.

Language never stopped knowing. We just stopped listening.

---

REFERENCES:
Caillois, R. (1961). Man, Play and Games (M. Barash, Trans.). University of Illinois Press.
Christensen, T. (2020). Sacred play: An ancient contribution to contemporary play theory. Annals of Leisure Research, 24(1), 58-75.
Huizinga, J. (1938). Homo Ludens: A Study of the Play-Element in Culture. Beacon Press.
Sutton-Smith, B. (1997). The Ambiguity of Play. Harvard University Press.
Turner, V. (1969). The Ritual Process: Structure and Anti-Structure. Aldine Publishing.
Turner, V. (1982). From Ritual to Theatre: The Human Seriousness of Play. PAJ Publications.

FURTHER READING:
Grimes, R. L. (2014). The Craft of Ritual Studies. Oxford University Press.
Riley, A. T. (2005). The theory of play/games and sacrality in popular culture: The relevance of Roger Caillois for contemporary neo-Durkheimian cultural theory. Durkheimian Studies, 11, 85-109.
Sansone, D. (1988). Greek Athletics and the Genesis of Sport. University of California Press.`,
      ),
    type: QuestType.Scannable,
    scanToken: "t1q4",
  },
];
