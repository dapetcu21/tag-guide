import { type Quest, QuestType } from "~/lib/Quest";

export const quests: Array<Quest> = [
  {
    id: "finish_the_phrase",
    image: "/quest_icons/t1q1.svg",
    brief: (t) =>
      t(
        "finish_the_phrase.brief",
        `Complete this common expression by filling in the missing word. Think about phrases you've heard in conversations about work, relationships, or everyday decisions.

**play the ________**

(Something you do in social situations)`,
      ),
    debrief: (t) =>
      t(
        "finish_the_phrase.debrief",
        `# THE HIDDEN GAME IN EVERYDAY LIFE

You just completed a phrase about relationships, decisions, or social strategy—yet it borrowed its words from games. Not occasionally. Constantly and naturally.

This isn't decorative language. It's evidence.

In 1938, Dutch historian Johan Huizinga published Homo Ludens (literally "Man the Player") arguing that play isn't something added to human culture—play *is* the foundation of human culture (Huizinga, 1938). We don't just play games; we live through game-like structures. Our language proves it.

When someone says "the ball is in your court" during a business negotiation, they're revealing that negotiation itself has a ludic structure: alternating turns, clear rules about whose move it is, strategies for winning. The game language works because the situation *is* game-like.

French sociologist Roger Caillois identified four fundamental categories of play that structure human experience (Caillois, 1961):

- AGON (Competition): "game changer," "ahead of the game"—the drive to prove superiority through fair contest

- ALEA (Chance): "roll the dice," "hedge your bets"—submitting to fate while managing uncertainty

- MIMICRY (Role-playing): "play the fool," "poker face"—adopting identities and performing roles

- ILINX (Vertigo): "play with fire"—seeking the thrill of losing control within safe boundaries

Game designers Eric Zimmerman and Katie Salen captured this pattern: "Play is free movement within a more rigid structure" (Salen & Zimmerman, 2004, p. 304). A chess player finds creative moves within rigid rules. A negotiator finds clever strategies within business protocols. A romantic "playing the field" explores freedom within dating's social norms.

The structure is the same. That's why the language is the same.

When we say someone is "gaming the system," we're recognizing that systems have game-like rules that can be exploited. When we talk about "moving the goalposts," we're acknowledging that social rules—like game rules—can be changed unfairly.

We don't play games to escape life. Life already contains games. The ancient Greeks had no word separating "play" from "games" from "music" from "education"—they used one word, *paidia*, for all of it (Huizinga, 1938).

Your language just revealed the ludic structure hidden in plain sight.

---

REFERENCES:
Caillois, R. (1961). Man, Play and Games (M. Barash, Trans.). University of Illinois Press.
Huizinga, J. (1938). Homo Ludens: A Study of the Play-Element in Culture. Beacon Press.
Salen, K., & Zimmerman, E. (2004). Rules of Play: Game Design Fundamentals. MIT Press.

FURTHER READING:
Borstelmann, N. (2020). Homo Ludens 2.0: Play, Media and Identity. Amsterdam University Press.
Henricks, T. S. (2015). Play and the Human Condition. University of Illinois Press.`,
      ),
    type: QuestType.TextInput,
    correctInputs: [
      "game",
      "field",
      "fool",
      "victim",
      "joc",
      "terenul",
      "mâinile",
      "norocul",
      "viața",
      "viitorul",
      "cariera",
      "reputația",
      "șansele",
      "regulile",
      "față",
      "mișcare",
    ],
    typoTolerance: 1,
  },
  {
    id: "language_domains",
    image: "/quest_icons/t1q2.svg",
    brief: (t) =>
      t(
        "language_domains.brief",
        `Think about different aspects of life—deception, power, failure, romance, risk, strategy.

Write ONE expression that uses game or play language from any of these domains. Draw from your own memory—phrases you've heard people say or that you use yourself.

Examples: "poker face" (deception), "hold all the cards" (power), "game over" (failure), "play the field" (romance), "roll the dice" (risk), "game plan" (strategy)`,
      ),
    debrief: (t) =>
      t(
        "language_domains.debrief",
        `# THE PLAYFUL MIND

You just searched through human life experience and found game language describing it.

This reveals something fundamental about how minds work.

THE RATIONALIST MISTAKE

For centuries, Western philosophy claimed the human mind is fundamentally rational—a logic machine that calculates outcomes and makes decisions (Descartes, 1637/1998). Play was considered a distraction from "real" thinking.

But your quest proves otherwise.

When you think about romance, you don't just calculate compatibility. You "play the field," "play hard to get," engage in "love games." When facing deception, you don't just analyze truth probability. You "play along," "call bluffs," maintain a "poker face."

Cognitive linguists George Lakoff and Mark Johnson demonstrated that human thought is fundamentally metaphorical (Lakoff & Johnson, 1980). We understand abstract concepts—time, love, argument, ideas—by mapping them onto concrete experiences. Crucially, these metaphors aren't just describing thoughts. They're *creating* them.

When you think about arguments as war ("defend your position," "attack that claim"), you literally think differently than if you thought about arguments as dance. The metaphor shapes the cognition.

And one of our most powerful cognitive metaphors is play.

LANGUAGE PLAYING WITH ITSELF

Look at what happened to the word "play" itself:
- Originally: movement, exercise (Old English *plegian*)
- Then: free movement in machinery (14th century)
- Then: theatrical performance (16th century)
- Then: recreational games (16th century)
- Then: musical performance (17th century)
- Now: all of these plus dozens more

The word *played* across contexts, finding new freedoms within language's structures. This enacts Zimmerman's definition: "free movement within a more rigid structure" (Salen & Zimmerman, 2004, p. 304).

Language isn't a rigid code. It's a playground.

Children learning language don't memorize rules—they play with sounds, test boundaries, invent words (Vygotsky, 1978). Poets exploit ambiguities and create novel combinations. Even ordinary speakers constantly engage in wordplay and metaphorical innovation.

This contradicts the computational theory of mind from the 1950s—the idea that brains are computers running algorithms (Fodor, 1975). If true, language would be unambiguous and literal. But it's not. It plays.

German philosopher Friedrich Schiller wrote: "Man only plays when he is in the fullest sense of the word a human being, and he is only fully a human being when he plays" (Schiller, 1795/2004, p. 80).

Your quest revealed this truth. You collected an expression and found play woven into it.

This isn't because we occasionally use game metaphors. It's because human cognition itself is ludic. We understand abstract domains by mapping them onto play structures. We process uncertainty through game-like scenarios. We solve problems by playing with possibilities.

The game expressions you collected aren't decoration. They're evidence of how thought works. We are Homo Ludens—the playing species.

---

REFERENCES:
Descartes, R. (1637/1998). Discourse on Method and Meditations on First Philosophy (D. A. Cress, Trans.). Hackett Publishing.
Fodor, J. A. (1975). The Language of Thought. Harvard University Press.
Lakoff, G., & Johnson, M. (1980). Metaphors We Live By. University of Chicago Press.
Schiller, F. (1795/2004). On the Aesthetic Education of Man (R. Snell, Trans.). Dover Publications.
Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.

FURTHER READING:
Cook, G. (2000). Language Play, Language Learning. Oxford University Press.
Pinker, S. (1994). The Language Instinct: How the Mind Creates Language. William Morrow.`,
      ),
    type: QuestType.TextInput,
    correctInputs: [
      "poker face",
      "play dumb",
      "play along",
      "call someone's bluff",
      "call their bluff",
      "call your bluff",
      "play possum",
      "card up your sleeve",
      "hold all the cards",
      "move the goalposts",
      "play into someone's hands",
      "trump card",
      "power play",
      "throw in the towel",
      "drop the ball",
      "game over",
      "strike out",
      "down for the count",
      "play the field",
      "play hard to get",
      "make a play for",
      "player",
      "love game",
      "play with fire",
      "roll the dice",
      "bet your bottom dollar",
      "all in",
      "play it safe",
      "long shot",
      "play your cards right",
      "game plan",
      "chess game",
      "gaming the system",
      "ahead of the game",
      "game changer",
      "the ball is in your court",
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
    ],
    typoTolerance: 2,
  },
  {
    id: "the_breadth_of_play",
    image: "/quest_icons/t1q3.svg",
    brief: (t) =>
      t(
        "the_breadth_of_play.brief",
        `The word "play" appears in many surprising contexts beyond games. Think broadly—from machinery to music to technology to theater.

Write ONE expression using "play" or "game" that is NOT about recreational games.

Examples: "play in the steering wheel" (mechanical), "play a role" (theatrical), "play piano" (musical), "press play" (media), "play acting" (deception)`,
      ),
    debrief: (t) =>
      t(
        "the_breadth_of_play.debrief",
        `# THE DEFINITION OF PLAY ITSELF

You just traced "play" into a context beyond recreational games—maybe machinery, theater, music, deception, or technology.

This reveals something profound: "play" is remarkably hard to define. But this difficulty isn't a problem—it's the point.

Most words have stable meanings. A "chair" is a chair. But "play" sprawls across domains with nothing in common: a child playing tag, an actor playing Hamlet, a musician playing Chopin, free movement in gears, pressing a button to start video, strategic deception, light shimmering on water.

Philosopher Ludwig Wittgenstein argued that "game" and "play" are "family resemblance" concepts—there's no single feature shared by all instances, just overlapping similarities (Wittgenstein, 1953). Some games have winners; some don't. Some require skill; some are pure chance.

But Eric Zimmerman found a unifying structure beneath this diversity.

THE CORE DEFINITION

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

This definition is recursive—it applies to itself. The word "play" exhibits free movement (across all these contexts) within the rigid structure of language. "Play" itself plays.

THREE TYPES OF PLAY

Zimmerman identifies three categories:

1. GAME PLAY - Playing games with explicit rules (chess, poker, video games). This is what most people think "play" means. But it's just one type.

2. LUDIC ACTIVITIES - Less structured play (bouncing a ball, playing with toys, horseplay). You test boundaries, experiment with physics, discover possibilities. Looser rules.

3. BEING PLAYFUL - Playful attitude applied to non-play contexts (playing dumb, playful banter, "play on words"). Play seeps into everything, transforming ordinary activities.

TRANSFORMATIVE PLAY

Some play is so powerful it transforms the structures within which it operates. Zimmerman calls this "transformative play" (Salen & Zimmerman, 2004, p. 305).

Playful slang ("cool," "sick," "lit") starts as rule-breaking but enters the dictionary, becoming standard. The play transforms the structure. "Play" originally meant physical exercise (Old English *plegian*). Then someone playfully applied it to machinery (14th century), theater (16th century), music (17th century), media technology (20th century). Each extension was strange—then became normal.

WHY PLAY RESISTS DEFINITION

Any rigid definition would contradict play's nature. Play is *characterized by* free movement, boundary-testing, creative exploration. A definition that rigidly constrained it would kill what makes it play.

Caillois understood this. His four categories (agon, alea, mimicry, ilinx) map play's territory without pinning it down (Caillois, 1961). Huizinga described play's qualities but refused to constrain it completely (Huizinga, 1938).

THE JOURNEY COMPLETE

The "Finish the Phrase" quest revealed that life domains already have ludic structures—that's why game language describes them naturally.

The "Language Domains" quest revealed that language itself is playful, that human cognition is ludic, that thinking is creative exploration.

This quest revealed that play itself is definable only as "free movement within rigid structure"—and this pattern appears everywhere, from gears to grammar, from chess to theater to technology.

You've discovered what Huizinga argued in 1938: we are Homo Ludens. Not because we sometimes play games. But because play—this dance between freedom and structure—is the fundamental pattern through which we engage with reality, create meaning, use language, and understand ourselves.

Huizinga called it the "magic circle"—that special space where play happens (Huizinga, 1938, p. 10). But your quest proved something deeper: the magic circle isn't separate from ordinary life. It's woven throughout it.

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
    type: QuestType.TextInput,
    correctInputs: [
      "play in the steering wheel",
      "free play",
      "play in the gears",
      "play of light",
      "mechanical play",
      "play a role",
      "stage play",
      "play rehearsal",
      "playwright",
      "play a character",
      "play piano",
      "play guitar",
      "play by ear",
      "play an instrument",
      "play music",
      "play acting",
      "play possum",
      "play dumb",
      "playing games",
      "play along",
      "play a video",
      "press play",
      "hit play",
      "playback",
      "replay",
      "auto-play",
      "autoplay",
      "joc în direcție",
      "joc mecanic",
      "joc liber",
      "joc de lumini",
      "joc în angrenaje",
      "a juca un rol",
      "piesă de teatru",
      "a-și juca rolul",
      "spectacol teatral",
      "dramaturg",
      "a juca la pian",
      "a juca la chitară",
      "a cânta din ureche",
      "a interpreta muzică",
      "a se juca pe instrumente",
      "a cânta la",
      "a juca teatru",
      "joc prefăcut",
      "a se preface",
      "a juca la cacealma",
      "a juca murdar",
      "a reda un video",
      "a apăsa play",
      "redare",
      "reluare",
      "redare automată",
      "playback",
    ],
    typoTolerance: 2,
  },
  {
    id:"ritual_play",
    image: "/quest_icons/t1q4.svg",
    brief: () => "Scan the QR to complete this quest.",
    debrief: () => "Congrats! You scanned the QR.",
    type: QuestType.Scannable,
    scanToken: "test",
  },
  {
    id: "play_to_survive",
    image: "/quest_icons/t2q1.svg",
    brief: (t) =>
      t(
        "play_to_survive.brief",
        "Explore the ARCADE section and the EXIT FOYER. Find the oldest games on display—those from the early 1980s. Examine their descriptions, release dates, and mechanics to answer the questions.",
      ),
    debrief: (t) =>
      t(
        "play_to_survive.debrief",
        `# PLAY AS NATURE'S TEACHING TOOL

Play is older than human civilisation. Long before we built schools or wrote textbooks, animals were learning through play. Wolf pups wrestle to practice hunting. Dolphins toss objects to develop coordination. Even octopuses explore their environment through playful manipulation (Burghardt, 2005). Play allows animals (including humans) to practice survival skills in low-stakes situations where mistakes are not tragic.

The early arcade games you just examined tap into this ancient learning system. Ms. PAC-MAN teaches spatial awareness as you track ghost patterns. BurgerTime teaches cause and effect—step here, ingredient falls there. Lock 'N' Chase teaches evasion and pursuit.

Inside a game, failure is safe. You can die and restart. You can experiment without real consequences. This is what makes games such powerful learning tools: they let you practice, fail, and improve without actual risk.

Neuroscience backs this up. When you play a game and when you successfully learn something new, the same reward pathways light up in your brain (Koepp et al., 1998). That feeling of "fun" you get? It's your brain's way of saying "you're learning something useful—keep doing this!" Evolution wired us to enjoy learning through play.

Games, by offering clear rules and goals, quick feedback when you succeed or fail and gradual increases in difficulty are creating what the psychologist Lev Vygotsky would later call "scaffolded learning environments" (Vygotsky, 1978): structures that support you as you learn, then fade away as you master the skill.

Play is how nature teaches.

---

REFERENCES:
Burghardt, G. M. (2005). The Genesis of Animal Play: Testing the Limits. MIT Press.
Huizinga, J. (1938). Homo Ludens: A Study of the Play-Element in Culture. Beacon Press.
Koepp, M. J., Gunn, R. N., Lawrence, A. D., Cunningham, V. J., Dagher, A., Jones, T., ... & Grasby, P. M. (1998). Evidence for striatal dopamine release during a video game. Nature, 393(6682), 266-268.
Salen, K., & Zimmerman, E. (2004). Rules of Play: Game Design Fundamentals. MIT Press.
Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.

FURTHER READING:
Sutton-Smith, B. (1997). The Ambiguity of Play. Harvard University Press.
Pellegrini, A. D. (2009). The Role of Play in Human Development. Oxford University Press.
Caillois, R. (1961). Man, Play and Games`,
      ),
    type: QuestType.Questions,
    questions: [
      {
        id: "q1",
        text: (t) =>
          t(
            "play_to_survive.q1.text",
            "What year was Ms. PAC-MAN first released?",
          ),
        answers: [
          (t) => t("play_to_survive.q1.a1", "1979"),
          (t) => t("play_to_survive.q1.a2", "1981"),
          (t) => t("play_to_survive.q1.a3", "1983"),
          (t) => t("play_to_survive.q1.a4", "1985"),
          (t) => t("play_to_survive.q1.a5", "1987"),
        ],
        correctAnswer: 1,
      },
      {
        id: "q2",
        text: (t) =>
          t(
            "play_to_survive.q2.text",
            "According to the description, what must Ms. PAC-MAN do to advance to the next stage?",
          ),
        answers: [
          (t) => t("play_to_survive.q2.a1", "Defeat all the ghosts"),
          (t) =>
            t("play_to_survive.q2.a2", "Collect power-ups in a specific order"),
          (t) =>
            t(
              "play_to_survive.q2.a3",
              "Eat all the Pac-Dots while avoiding ghosts",
            ),
          (t) => t("play_to_survive.q2.a4", "Complete a time trial"),
          (t) => t("play_to_survive.q2.a5", "Solve maze puzzles"),
        ],
        correctAnswer: 2,
      },
      {
        id: "q3",
        text: (t) =>
          t(
            "play_to_survive.q3.text",
            "What is the main objective in BurgerTime according to its description?",
          ),
        answers: [
          (t) => t("play_to_survive.q3.a1", "Race against a timer"),
          (t) =>
            t(
              "play_to_survive.q3.a2",
              "Control chef Peter Pepper to make ingredients fall and stack on buns",
            ),
          (t) => t("play_to_survive.q3.a3", "Shoot all enemies"),
          (t) => t("play_to_survive.q3.a4", "Solve mathematical puzzles"),
          (t) =>
            t("play_to_survive.q3.a5", "Defend against waves of attackers"),
        ],
        correctAnswer: 1,
      },
      {
        id: "q4",
        text: (t) =>
          t(
            "play_to_survive.q4.text",
            "What genre/type of game is Lock 'N' Chase (1981) described as in the EXIT FOYER?",
          ),
        answers: [
          (t) => t("play_to_survive.q4.a1", "Racing game"),
          (t) => t("play_to_survive.q4.a2", "Maze chase"),
          (t) => t("play_to_survive.q4.a3", "Story-driven adventure"),
          (t) => t("play_to_survive.q4.a4", "Multiplayer sports"),
          (t) => t("play_to_survive.q4.a5", "Vertical shooter"),
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "the_learning_ladder",
    image: "/quest_icons/t2q2.svg",
    brief: (t) =>
      t(
        "the_learning_ladder.brief",
        "Explore the INDIES SPOTLIGHT, THE PLAYER IS PRESENT, KIDS ROOM, and EXIT FOYER sections. Compare games from different eras (1980s through 2020s). Pay attention to genre descriptions, gameplay complexity, and design evolution.",
      ),
    debrief: (t) =>
      t(
        "the_learning_ladder.debrief",
        `# DESIGNERS AS LEARNING ARCHITECTS

Notice what just happened? This quest was harder than the first one. You had to compare games across different eras, understand terms like "rogue-lite," and analyze how game design evolved over decades. We built on what you learned in Quest 1. You already knew how to extract information from exhibits, so now we could ask you to do something more complex with that information.

This is exactly what game designers do—and psychologist Mihaly Csikszentmihalyi explained why it works. His "flow theory" shows that people are happiest and learn best when a task is perfectly balanced: not so easy that you're bored, not so hard that you're frustrated (Csikszentmihalyi, 1990). Games keep you in this sweet spot—what he called the "flow channel" - by constantly adjusting difficulty as your skills improve.

Game designers scaffold learning by:
* Introducing ONE new concept at a time
* Giving IMMEDIATE FEEDBACK (you know instantly if you succeeded)
* Increasing DIFFICULTY GRADUALLY (each level slightly harder)
* Allowing SAFE FAILURE (you can try again without real consequences)
* Rewarding MASTERY (that satisfying feeling when you "get it")

Trinity Fusion's "rogue-lite" design brilliantly demonstrates this. You die and restart, but you're smarter each time—you've learned enemy patterns, level layouts, and strategies. The game resets, but your knowledge persists. Research shows this kind of structured challenge, with scaffolding that doesn't interrupt gameplay, enhances both learning and enjoyment (Barzilai & Blau, 2014).

Here's the remarkable part: when learning is scaffolded this way, it doesn't feel like work. It feels like play. Your brain is doing exactly what evolution designed it to do—learn through voluntary, enjoyable engagement. Game designers just figured out how to make that ladder really, really effective at keeping you climbing.

---

## REFERENCES:
Barzilai, S., & Blau, I. (2014). Scaffolding game-based learning: Impact on learning achievements, perceived learning, and game experiences. Computers & Education, 70, 65-79.
Bruner, J. S. (1960). The Process of Education. Harvard University Press.
Chen, J. (2007). Flow in games (and everything else). Communications of the ACM, 50(4), 31-34.
Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience. Harper & Row.
Habgood, M. J., & Ainsworth, S. E. (2011). Motivating children to learn effectively: Exploring the value of intrinsic integration in educational games. Journal of the Learning Sciences, 20(2), 169-206.
Sweetser, P., & Wyeth, P. (2005). GameFlow: A model for evaluating player enjoyment in games. Computers in Entertainment, 3(3), 1-24.
Vygotsky, L. S. (1978). Mind in Society. Harvard University Press.
Wood, D., Bruner, J. S., & Ross, G. (1976). The role of tutoring in problem solving. Journal of Child Psychology and Psychiatry, 17(2), 89-100.

## FURTHER READING:
Garris, R., Ahlers, R., & Driskell, J. E. (2002). Games, motivation, and learning: A research and practice model. Simulation & Gaming, 33(4), 441-467.
Gee, J. P. (2007). What Video Games Have to Teach Us About Learning and Literacy (2nd ed.). Palgrave Macmillan.
Mayer, R. E. (2014). Computer Games for Learning: An Evidence-Based Approach. MIT Press.`,
      ),
    type: QuestType.Questions,
    questions: [
      {
        id: "q1",
        text: (t) =>
          t(
            "the_learning_ladder.q1.text",
            "Find Simpler Times in the INDIES SPOTLIGHT by Romanian studio Stoneskip. How is this game described?",
          ),
        answers: [
          (t) => t("the_learning_ladder.q1.a1", "Fast-paced action shooter"),
          (t) =>
            t(
              "the_learning_ladder.q1.a2",
              "Cozy musical / experiential meditation",
            ),
          (t) =>
            t("the_learning_ladder.q1.a3", "Competitive multiplayer battle"),
          (t) => t("the_learning_ladder.q1.a4", "Horror survival experience"),
          (t) => t("the_learning_ladder.q1.a5", "Complex strategy simulation"),
        ],
        correctAnswer: 1,
      },
      {
        id: "q2",
        text: (t) =>
          t(
            "the_learning_ladder.q2.text",
            "Compare two eras: BurgerTime (1982) taught ONE core mechanic (walk over ingredients). Now find The Witcher 3 (2015) in THE PLAYER IS PRESENT. What does its description emphasise?",
          ),
        answers: [
          (t) => t("the_learning_ladder.q2.a1", "Simple arcade action"),
          (t) =>
            t("the_learning_ladder.q2.a2", "A single puzzle type repeated"),
          (t) =>
            t(
              "the_learning_ladder.q2.a3",
              "Complex world exploration, monster hunting, and story choices",
            ),
          (t) => t("the_learning_ladder.q2.a4", "Only combat mechanics"),
          (t) =>
            t(
              "the_learning_ladder.q2.a5",
              "Passive watching without interaction",
            ),
        ],
        correctAnswer: 2,
      },
      {
        id: "q3",
        text: (t) =>
          t(
            "the_learning_ladder.q3.text",
            "Game Builder Garage (2021) in the KIDS ROOM explicitly teaches players about what?",
          ),
        answers: [
          (t) =>
            t("the_learning_ladder.q3.a1", "How to play existing games better"),
          (t) =>
            t(
              "the_learning_ladder.q3.a2",
              "The basics of game design and visual programming",
            ),
          (t) =>
            t("the_learning_ladder.q3.a3", "Historical facts about gaming"),
          (t) =>
            t("the_learning_ladder.q3.a4", "Competitive esports strategies"),
          (t) => t("the_learning_ladder.q3.a5", "Art and music composition"),
        ],
        correctAnswer: 1,
      },
      {
        id: "q4",
        text: (t) =>
          t(
            "the_learning_ladder.q4.text",
            'Find Trinity Fusion by Romanian developer Angry Mob Games. It\'s described as a "rogue-lite action platformer." What does "rogue-lite" mean about its learning design?',
          ),
        answers: [
          (t) =>
            t(
              "the_learning_ladder.q4.a1",
              "Players start over when they die, but keep some progress/knowledge",
            ),
          (t) =>
            t(
              "the_learning_ladder.q4.a2",
              "There is only one correct path through the game",
            ),
          (t) =>
            t(
              "the_learning_ladder.q4.a3",
              "The game has no challenge or difficulty",
            ),
          (t) => t("the_learning_ladder.q4.a4", "Players can only play once"),
          (t) =>
            t(
              "the_learning_ladder.q4.a5",
              "All levels are exactly the same each time",
            ),
        ],
        correctAnswer: 0,
      },
      {
        id: "q5",
        text: (t) =>
          t(
            "the_learning_ladder.q5.text",
            "In the EXIT FOYER, find Wizard Fire (1992). According to its description, what setting and genre does it use?",
          ),
        answers: [
          (t) => t("the_learning_ladder.q5.a1", "Modern city, racing game"),
          (t) => t("the_learning_ladder.q5.a2", "Year 355 A.D., hack 'n slash"),
          (t) => t("the_learning_ladder.q5.a3", "Space station, puzzle game"),
          (t) =>
            t("the_learning_ladder.q5.a4", "Medieval castle, platformer only"),
          (t) => t("the_learning_ladder.q5.a5", "Underwater world, adventure"),
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "beyond_the_game",
    image: "/quest_icons/t2q3.svg",
    brief: (t) =>
      t(
        "beyond_the_game.brief",
        "Synthesize knowledge across the entire exhibition. Cross-reference information between sections. Analyze patterns in gaming history, developer ecosystems, and design evolution from 1980s to present.",
      ),
    debrief: (t) =>
      t(
        "beyond_the_game.debrief",
        `GAMES AS A MODEL FOR ALL LEARNING

You've completed all three quests. Now for the uncomfortable question: if games are so good at teaching, why doesn't all learning work this way?

Think about traditional education for a moment. Lectures where you sit passively for an hour. Textbooks you read weeks before the test. Exams that come with no second chances. Subjects presented in isolation from each other. Failure that's punished rather than used as feedback for improvement.

This is almost the opposite of how games teach. Research by Shute and Ke (2012) shows that delayed, high-stakes assessment—the kind used in most schools—actively undermines learning compared to the immediate, low-stakes feedback games provide naturally. Games give you information right when you need it; traditional education makes you wait weeks to find out if you understood anything.

Cognitive Load Theory explains why lectures often fail: our working memory can only handle so much information at once (Sweller, 1988). Dump too much at us, and we can't process any of it. Games naturally "chunk" information—giving you one new concept, letting you practice, then giving you the next. They do this instinctively because players quit games that overwhelm them.

In this exhibition, each quest scaffolded the next. The difficulty increased gradually. You got immediate feedback (right or wrong answers). Failure was safe (you could try again). This is how Bloom's Taxonomy describes sophisticated learning: starting with basic knowledge and building up to synthesis and evaluation (Krathwohl, 2002).

The evidence is mounting that this approach works beyond games:

- Duolingo uses game mechanics (points, levels, streaks) to teach languages more effectively than traditional courses (Vesselinov & Grego, 2012)
- Medical students learn surgery better in simulators—where they can fail safely and repeat endlessly—than through traditional apprenticeship (Seymour et al., 2002)
- Even this quest system gamifies museum education, turning you from a passive observer into an active learner

The Romanian developers you discovered exemplify this shift. Critique Gaming's Interrogation doesn't lecture you about ethics—it makes you face ethical dilemmas and live with the consequences. Breadcrumbs Interactive's Yaga doesn't tell you about Slavic folklore—it lets you experience it. Last Tales creates spaces where you learn by solving problems together. These aren't "games that happen to teach"—they're teaching that happens through play.

Rain World offers a perfect metaphor: you're simultaneously predator and prey in an ecosystem that's always slightly beyond your current ability. Every death teaches you something. The environment provides just enough support to keep you progressing. This is what Vygotsky called the "Zone of Proximal Development"—that sweet spot where you're challenged but not overwhelmed (Vygotsky, 1978). Rain World enforces this through its very structure.

Think about your answer to that last question. You recognized that your own learning was scaffolded across these three quests. This awareness—what educators call "metacognition"—is the ultimate learning goal. You didn't just learn facts about games; you learned how learning itself works. Now you can recognize these patterns in other contexts and maybe even design learning experiences yourself.

The question isn't "Should we make learning more like games?"

Play is humanity's original learning technology, refined across millions of years before schools existed. The question is: why did we stop using these principles when we created formal education—and can games help us remember?

Games don't just teach content. They teach how learning works. That's their revolutionary contribution.

---

REFERENCES:
Dweck, C. S. (2006). Mindset: The New Psychology of Success. Random House.
Krathwohl, D. R. (2002). A revision of Bloom's taxonomy: An overview. Theory into Practice, 41(4), 212-218.
Seymour, N. E., Gallagher, A. G., Roman, S. A., O'Brien, M. K., Bansal, V. K., Andersen, D. K., & Satava, R. M. (2002). Virtual reality training improves operating room performance: Results of a randomized, double-blinded study. Annals of Surgery, 236(4), 458-464.
Shute, V. J. (2011). Stealth assessment in computer-based games to support learning. In S. Tobias & J. D. Fletcher (Eds.), Computer Games and Instruction (pp. 503-524). Information Age Publishers.
Shute, V. J., & Ke, F. (2012). Games, learning, and assessment. In D. Ifenthaler, D. Eseryel, & X. Ge (Eds.), Assessment in Game-Based Learning: Foundations, Innovations, and Perspectives (pp. 43-58). Springer.
Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257-285.
Vesselinov, R., & Grego, J. (2012). Duolingo Effectiveness Study. City University of New York.

FURTHER READING:
Clark, D. B., Tanner-Smith, E. E., & Killingsworth, S. S. (2016). Digital games, design, and learning: A systematic review and meta-analysis. Review of Educational Research, 86(1), 79-122.
Honey, M. A., & Hilton, M. L. (Eds.). (2011). Learning Science Through Computer Games and Simulations. National Academies Press.
Prensky, M. (2006). Don't Bother Me, Mom, I'm Learning!: How Computer and Video Games are Preparing Your Kids for 21st Century Success and How You Can Help! Paragon House.
Young, M. F., Slota, S., Cutter, A. B., Jalette, G., Mullin, G., Lai, B., ... & Yukhymenko, M. (2012). Our princess is in another castle: A review of trends in serious gaming for education. Review of Educational Research, 82(1), 61-89.`,
      ),
    type: QuestType.Questions,
    questions: [
      {
        id: "q1",
        text: (t) =>
          t(
            "beyond_the_game.q1.text",
            "Arrange these four games chronologically from OLDEST to NEWEST: Ms. PAC-MAN, Papers Please, Stray, BurgerTime",
          ),
        answers: [
          (t) =>
            t(
              "beyond_the_game.q1.a1",
              "Ms. PAC-MAN (1981), BurgerTime (1982), Papers Please (2013), Stray (2022)",
            ),
          (t) =>
            t(
              "beyond_the_game.q1.a2",
              "BurgerTime (1982), Ms. PAC-MAN (1981), Stray (2022), Papers Please (2013)",
            ),
          (t) =>
            t(
              "beyond_the_game.q1.a3",
              "Papers Please (2013), BurgerTime (1982), Ms. PAC-MAN (1981), Stray (2022)",
            ),
          (t) =>
            t(
              "beyond_the_game.q1.a4",
              "Stray (2022), Papers Please (2013), Ms. PAC-MAN (1981), BurgerTime (1982)",
            ),
          (t) =>
            t(
              "beyond_the_game.q1.a5",
              "BurgerTime (1982), Papers Please (2013), Ms. PAC-MAN (1981), Stray (2022)",
            ),
        ],
        correctAnswer: 0,
      },
      {
        id: "q2",
        text: (t) =>
          t(
            "beyond_the_game.q2.text",
            "Which game in the exhibition EXPLICITLY teaches game design itself, demonstrating that game principles can teach complex subjects?",
          ),
        answers: [
          (t) => t("beyond_the_game.q2.a1", "The Hex by Daniel Mullins Games"),
          (t) => t("beyond_the_game.q2.a2", "Game Builder Garage by Nintendo"),
          (t) =>
            t("beyond_the_game.q2.a3", "There Is No Game: Wrong Dimension"),
          (t) =>
            t("beyond_the_game.q2.a4", "Portal (referenced in descriptions)"),
          (t) =>
            t(
              "beyond_the_game.q2.a5",
              "Minecraft (referenced in descriptions)",
            ),
        ],
        correctAnswer: 1,
      },
      {
        id: "q3",
        text: (t) =>
          t(
            "beyond_the_game.q3.text",
            "ROMANIAN GAME DEVELOPMENT - Which Romanian developer created a game for the KIDS ROOM section, showing how local developers contribute to global gaming education?",
          ),
        answers: [
          (t) =>
            t(
              "beyond_the_game.q3.a1",
              "Last Tales (Raiders of The Lost Island)",
            ),
          (t) => t("beyond_the_game.q3.a2", "stoneskip. (Simpler Times)"),
          (t) => t("beyond_the_game.q3.a3", "Breadcrumbs Interactive (Yaga)"),
          (t) => t("beyond_the_game.q3.a4", "Sand Sailor Studio (ASKA)"),
          (t) => t("beyond_the_game.q3.a5", "Edgeflow Studio (Breachway)"),
        ],
        correctAnswer: 0,
      },
      {
        id: "q4",
        text: (t) =>
          t(
            "beyond_the_game.q4.text",
            'According to its description, in Rain World you play as a "nomadic slugcat" in what kind of environment?',
          ),
        answers: [
          (t) => t("beyond_the_game.q4.a1", "A peaceful garden sanctuary"),
          (t) =>
            t(
              "beyond_the_game.q4.a2",
              "A broken ecosystem where you are both predator and prey",
            ),
          (t) => t("beyond_the_game.q4.a3", "A friendly city with no danger"),
          (t) => t("beyond_the_game.q4.a4", "A time-traveling dimension"),
          (t) => t("beyond_the_game.q4.a5", "An underwater coral reef"),
        ],
        correctAnswer: 1,
      },
      {
        id: "q5",
        text: (t) =>
          t(
            "beyond_the_game.q5.text",
            "DEVELOPER IDENTIFICATION - Match each Romanian developer to their game:\n- Game A: Bear and Breakfast\n- Game B: Interrogation: You will be deceived\n- Game C: Yaga",
          ),
        answers: [
          (t) =>
            t(
              "beyond_the_game.q5.a1",
              "Gummy Cat, Critique Gaming, Breadcrumbs Interactive",
            ),
          (t) =>
            t(
              "beyond_the_game.q5.a2",
              "Critique Gaming, Gummy Cat, Breadcrumbs Interactive",
            ),
          (t) =>
            t(
              "beyond_the_game.q5.a3",
              "Breadcrumbs Interactive, Gummy Cat, Critique Gaming",
            ),
          (t) =>
            t(
              "beyond_the_game.q5.a4",
              "Angry Mob Games, KillHouse Games, Alien Pixel Studios",
            ),
          (t) =>
            t(
              "beyond_the_game.q5.a5",
              "stoneskip., Last Tales, Sand Sailor Studio",
            ),
        ],
        correctAnswer: 0,
      },
      {
        id: "q6",
        text: (t) =>
          t(
            "beyond_the_game.q6.text",
            "META-LEARNING QUESTION - Think about YOUR experience with these three quests. Which statement is TRUE about your learning journey?",
          ),
        answers: [
          (t) =>
            t(
              "beyond_the_game.q6.a1",
              "All three quests were equally difficult with no progression",
            ),
          (t) =>
            t(
              "beyond_the_game.q6.a2",
              "Quest 1 taught basics, Quest 2 built on that knowledge, Quest 3 required synthesizing everything—demonstrating scaffolded learning",
            ),
          (t) =>
            t(
              "beyond_the_game.q6.a3",
              "The quests got easier as you progressed",
            ),
          (t) =>
            t(
              "beyond_the_game.q6.a4",
              "Each quest taught completely unrelated information",
            ),
          (t) =>
            t(
              "beyond_the_game.q6.a5",
              "Only Quest 3 contained any real learning",
            ),
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "test_text",
    image: "/quest_icons/t2q4.svg",
    brief: () => 'Type "Cats/Dogs are cool!" to complete this quest.',
    debrief: () => "Congrats! You like animals.\n![](https://www.publicdomainpictures.net/pictures/180000/velka/cat-1464103447LmK.jpg)",
    type: QuestType.TextInput,
    correctInputs: ["Cats are cool!", "Dogs are cool!"],
    typoTolerance: 2,
  },
  {
    id: "who_do_you_become",
    image: "/quest_icons/t3q1.svg",
    brief: (t) =>
      t(
        "who_do_you_become.brief",
        `Play these two games where you embody characters with distinct personalities:

**THE PLAYER IS PRESENT section:**
- The Witcher 3 (play as Geralt of Rivia, monster hunter)

**INDIES SPOTLIGHT section:**
- Yaga (play as Ivan, a cursed one-handed blacksmith)

Play each game for at least 10 minutes. Experience what it feels like to inhabit these characters. Then scan the QR codes displayed on screen or on the game's info panels.`,
      ),
    debrief: (t) =>
      t(
        "who_do_you_become.debrief",
        `# THE MASK AS MIRROR

You just experienced mimicry—one of play's four fundamental categories identified by Roger Caillois (Caillois, 2001). When you became Geralt tracking monsters or Ivan confronting his curse, you engaged in the same act as ancient ritual dancers and theater performers across millennia: temporarily setting aside your everyday identity to explore what it feels like to be someone else.

But the character isn't just costume. It's alibi.

Role-playing games researcher Sarah Lynne Bowman describes alibi as a "protective frame" allowing players to explore aspects of themselves they might not feel safe expressing otherwise (Bowman et al., 2023). The character provides permission: "I'm just seeing what Geralt would do" becomes cover for testing courage you haven't shown, expressing emotions you've kept hidden.

Your first answer reveals how you use this alibi. If you felt completely different from yourself, the character became full escape—sometimes necessary to see ourselves clearly. If you felt like discovering hidden parts, you experienced what Nordic larp calls "bleed"—when boundaries between player and character become permeable (Bowman, 2015). The character's feelings bleed into yours; transformation happens here.

Your second answer is key. When you identified a quality you'd bring back from the character, you revealed your shadow—psychologist Carl Jung's term for unexpressed aspects of ourselves (Jung, 1968). Not bad parts—unexpressed parts. The hero's courage. The warrior's strength. Games offer a laboratory for shadow work: we can try on these qualities where stakes are imaginary but feelings are real.

Theater director Keith Johnstone observed: "In a play, you can be serious without anybody thinking you ARE serious" (Johnstone, 1979, p. 93). Games go further: you discover you were serious all along, but needed permission to find out.

The character you played isn't someone else. It's a possible you, living in a different story. Now you know what qualities you hunger for, what kind of person you might become.

---

## REFERENCES:
Bowman, S. L. (2015). Bleed: The spillover between player and character. Nordic Larp. https://nordiclarp.org/2015/03/02/bleed-the-spillover-between-player-and-character/
Bowman, S. L., Diakolambrianou, E., Torner, E., Westborg, J., & Hugaas, K. H. (2023). Transformative Role-Playing Game Design. Uppsala, Sweden: Uppsala University Press.
Caillois, R. (2001). Man, Play and Games (M. Barash, Trans.). Urbana, IL: University of Illinois Press. (Original work published 1958)
Johnstone, K. (1979). Impro: Improvisation and the Theatre. London: Methuen.
Jung, C. G. (1968). The Archetypes and the Collective Unconscious (2nd ed., R. F. C. Hull, Trans.). Princeton, NJ: Princeton University Press. (Original work published 1959)

## FURTHER READING:
Beltrán, W. S. (2013). Shadow work: A Jungian perspective on the underside of live action role-play in the United States. In S. L. Bowman & A. Vanek (Eds.), Wyrd Con Companion Book 2013 (pp. 94-101). Los Angeles, CA: Wyrd Con.
Montola, M., & Stenros, J. (Eds.). (2010). Nordic Larp. Stockholm, Sweden: Fëa Livia.`,
      ),
    type: QuestType.Questions,
    numRequiredQuestions: 2,
    questions: [
      {
        id: "witcher_feeling",
        text: (t) =>
          t(
            "who_do_you_become.witcher_feeling.text",
            "When you play as The Witcher's Geralt, which of these feelings is STRONGEST?",
          ),
        answers: [
          (t) =>
            t(
              "who_do_you_become.witcher_feeling.a1",
              "I feel completely different from my everyday self",
            ),
          (t) =>
            t(
              "who_do_you_become.witcher_feeling.a2",
              "I feel somewhat different, but still recognize myself",
            ),
          (t) =>
            t(
              "who_do_you_become.witcher_feeling.a3",
              "I feel like a version of myself with new abilities",
            ),
          (t) =>
            t(
              "who_do_you_become.witcher_feeling.a4",
              "I feel like myself in different circumstances",
            ),
          (t) =>
            t(
              "who_do_you_become.witcher_feeling.a5",
              "I feel like I'm discovering hidden parts of who I am",
            ),
        ],
        scanToken: "witcher3",
      },
      {
        id: "witcher_quality",
        text: (t) =>
          t(
            "who_do_you_become.witcher_quality.text",
            "If you could bring ONE quality from Geralt into your real life, how intensely do you desire it?",
          ),
        answers: [
          (t) =>
            t(
              "who_do_you_become.witcher_quality.a1",
              "Not interested in taking anything back",
            ),
          (t) =>
            t(
              "who_do_you_become.witcher_quality.a2",
              "Mildly curious about one quality",
            ),
          (t) =>
            t(
              "who_do_you_become.witcher_quality.a3",
              "Moderately drawn to one quality",
            ),
          (t) =>
            t(
              "who_do_you_become.witcher_quality.a4",
              "Strongly desire one quality",
            ),
          (t) =>
            t(
              "who_do_you_become.witcher_quality.a5",
              "Deeply yearn to embody one quality",
            ),
        ],
        scanToken: "witcher3",
      },
      {
        id: "yaga_feeling",
        text: (t) =>
          t(
            "who_do_you_become.yaga_feeling.text",
            "When you play as Yaga's Ivan, which of these feelings is STRONGEST?",
          ),
        answers: [
          (t) =>
            t(
              "who_do_you_become.yaga_feeling.a1",
              "I feel completely different from my everyday self",
            ),
          (t) =>
            t(
              "who_do_you_become.yaga_feeling.a2",
              "I feel somewhat different, but still recognize myself",
            ),
          (t) =>
            t(
              "who_do_you_become.yaga_feeling.a3",
              "I feel like a version of myself with new abilities",
            ),
          (t) =>
            t(
              "who_do_you_become.yaga_feeling.a4",
              "I feel like myself in different circumstances",
            ),
          (t) =>
            t(
              "who_do_you_become.yaga_feeling.a5",
              "I feel like I'm discovering hidden parts of who I am",
            ),
        ],
        scanToken: "yaga",
      },
      {
        id: "yaga_quality",
        text: (t) =>
          t(
            "who_do_you_become.yaga_quality.text",
            "If you could bring ONE quality from Ivan into your real life, how intensely do you desire it?",
          ),
        answers: [
          (t) =>
            t(
              "who_do_you_become.yaga_quality.a1",
              "Not interested in taking anything back",
            ),
          (t) =>
            t(
              "who_do_you_become.yaga_quality.a2",
              "Mildly curious about one quality",
            ),
          (t) =>
            t(
              "who_do_you_become.yaga_quality.a3",
              "Moderately drawn to one quality",
            ),
          (t) =>
            t(
              "who_do_you_become.yaga_quality.a4",
              "Strongly desire one quality",
            ),
          (t) =>
            t(
              "who_do_you_become.yaga_quality.a5",
              "Deeply yearn to embody one quality",
            ),
        ],
        scanToken: "yaga",
      },
    ],
  },
  {
    id: "the_fellowship_of_selves",
    image: "/quest_icons/t3q2.svg",
    brief: (t) =>
      t(
        "the_fellowship_of_selves.brief",
        `Play these two games where you can choose or create different character types:

**THE PLAYER IS PRESENT section:**
- The Elder Scrolls IV: Oblivion Remastered (create your character and choose a class: warrior, mage, thief, or hybrid)

**INDIES SPOTLIGHT section:**
- West of Loathing (choose from six character classes in this comedy Western RPG)

Explore the character creation/selection process in each game. Try playing as different types or spend time considering which type calls to you. Play for at least 10 minutes per game, then scan the QR codes.`,
      ),
    debrief: (t) =>
      t(
        "the_fellowship_of_selves.debrief",
        `# THE PARTY OF ONE

Carl Jung proposed that within each psyche exists not one self, but many—archetypes, universal patterns woven into human consciousness (Jung, 1968). The Hero. The Sage. The Caregiver. The Rebel. When Dungeons & Dragons formalized "character classes" in 1974—Fighter, Cleric, Magic-User, Thief—they translated these ancient patterns into game mechanics.

Your first answer reveals how you relate to this inner multiplicity. If you always play the same type, you've found your dominant archetype—familiar and comfortable. But Jung warned against over-identifying with a single pattern, calling it "inflation" (Jung, 1968). The warrior who cannot be vulnerable. The sage who cannot act.

If you want to play them all, you're experiencing what Jung called "individuation"—integrating these aspects into a complete self (Jung, 1968). Nordic larp's "playing to lose" illuminates this: players deliberately choose uncomfortable character types—the aggressive player as gentle healer, the intellectual as brutal warrior—to explore exiled qualities (Montola & Stenros, 2010).

Your third answer reveals the gap between authentic and adapted selves. We learn certain roles to survive and belong—Jung's "persona," the mask we show the world (Jung, 1968). This adaptation isn't false, but sometimes the persona becomes prison.

Games reveal this gap. When you play the rogue after years as the responsible caregiver, the leader after hiding in the background, the warrior after avoiding conflict—you're recovering parts life hasn't let you express.

Researcher Kjell Hedgard Hugaas describes "identity bleed"—when role-playing shifts how we understand ourselves (Hugaas, 2024). A player realizes confidence isn't a trait you have; it's behavior you practice. Another discovers cruelty and kindness coexist in everyone—we choose which to act on.

The standard adventuring party requires Tank, Healer, DPS, and Controller—a mechanical necessity that mirrors psychological truth. A complete person needs all these capacities: endurance, nurturing, assertion, influence. Life demands we specialize. Games invite us to remember we contain multitudes.

---

## REFERENCES:
Hugaas, K. H. (2024). Bleed and identity: A conceptual model of bleed and how bleed-out from role-playing games can affect a player's sense of self. International Journal of Role-Playing, 15, 9-35.
Jung, C. G. (1968). The Archetypes and the Collective Unconscious (2nd ed., R. F. C. Hull, Trans.). Princeton, NJ: Princeton University Press. (Original work published 1959)
Montola, M., & Stenros, J. (Eds.). (2010). Nordic Larp. Stockholm, Sweden: Fëa Livia.

## FURTHER READING:
Bowman, S. L. (2010). The Functions of Role-Playing Games: How Participants Create Community, Solve Problems and Explore Identity. Jefferson, NC: McFarland & Co.
Nephew, M. (2006). Playing with identity: Unconscious desire and role-playing games. In J. P. Williams, S. Q. Hendricks, & W. K. Winkler (Eds.), Gaming as Culture: Essays on Reality, Identity and Experience in Fantasy Games (pp. 120-139). Jefferson, NC: McFarland & Co.`,
      ),
    type: QuestType.Questions,
    questions: [
      {
        id: "pattern",
        text: (t) =>
          t(
            "the_fellowship_of_selves.pattern.text",
            "When games offer different character types (warrior, mage, healer, thief), which pattern describes you BEST?",
          ),
        answers: [
          (t) =>
            t(
              "the_fellowship_of_selves.pattern.a1",
              "I always play the same type—I know what I like",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.pattern.a2",
              "I usually play the same type with occasional experiments",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.pattern.a3",
              "I alternate between 2-3 favorite types",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.pattern.a4",
              "I like to try many different types to see what fits",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.pattern.a5",
              "I want to play them ALL—every type calls to something in me",
            ),
        ],
        scanToken: "oblivion",
      },
      {
        id: "resonance",
        text: (t) =>
          t(
            "the_fellowship_of_selves.resonance.text",
            'Think about your FAVORITE character type to play. How strongly does this statement resonate: "This character type expresses something about who I really am or want to be"?',
          ),
        answers: [
          (t) =>
            t(
              "the_fellowship_of_selves.resonance.a1",
              "Not at all—it's just gameplay strategy",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.resonance.a2",
              "Slightly—there might be a small connection",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.resonance.a3",
              "Moderately—it somewhat reflects my personality",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.resonance.a4",
              "Strongly—it definitely expresses something true about me",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.resonance.a5",
              "Profoundly—this character type feels like meeting myself",
            ),
        ],
        scanToken: "oblivion",
      },
      {
        id: "real_life_class",
        text: (t) =>
          t(
            "the_fellowship_of_selves.real_life_class.text",
            'When you imagine your real-life "character class," how strongly do you feel: "I wish I could be a different type than I am in daily life"?',
          ),
        answers: [
          (t) =>
            t(
              "the_fellowship_of_selves.real_life_class.a1",
              "Not at all—I'm happy with my real-life role",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.real_life_class.a2",
              "Rarely—mostly content with minor wishes",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.real_life_class.a3",
              "Sometimes—I feel constrained by my current role",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.real_life_class.a4",
              "Often—I wish I could express different qualities",
            ),
          (t) =>
            t(
              "the_fellowship_of_selves.real_life_class.a5",
              "Constantly—I feel trapped in the wrong archetype",
            ),
        ],
        scanToken: "west_of_loathing",
      },
    ],
  },
  {
    id: "the_safe_space_for_transformation",
    image: "/quest_icons/t3q3.svg",
    brief: (t) =>
      t(
        "the_safe_space_for_transformation.brief",
        `Play these two games that create intense emotional situations and moral dilemmas:

**INDIES SPOTLIGHT section:**
- Papers, Please (you control a border checkpoint inspector making life-or-death decisions)

**11 BIT STUDIO section:**
- This War of Mine (survive as civilians in a war zone, making impossible choices)

Engage deeply with these challenging scenarios. Allow yourself to feel the weight of the decisions. Play each for at least 10-15 minutes, then scan the QR codes.`,
      ),
    debrief: (t) =>
      t(
        "the_safe_space_for_transformation.debrief",
        `# THE MAGIC CIRCLE AS SACRED SPACE

Historian Johan Huizinga described the "magic circle"—the boundary separating play from ordinary life where normal rules suspend and new possibilities emerge (Huizinga, 1955). Within this circle, consequences disconnect from material reality. But games offer more than consequence-free experimentation. They offer a "transformative container"—a safe yet challenging space for encountering parts of ourselves that daily life has no room for (Bowman et al., 2023).

You experienced bleed—the most studied concept in Nordic larp theory. Kjell Hedgard Hugaas identifies three types (Hugaas, 2019):

**EMOTIONAL BLEED:** The character's feelings become yours. Playing Papers, Please, denying desperate refugees, you feel genuine guilt—not because YOU did wrong, but because the boundary between you and the character dissolved.

**PROCEDURAL BLEED:** Game behaviors transfer to real life. After This War of Mine, you notice resource scarcity differently, consider moral compromises more carefully. The game taught your mind new patterns.

**MEMETIC BLEED:** Game ideas change how you think. Papers, Please doesn't just simulate bureaucratic cruelty—it makes you see that complicity everywhere afterward. It rewrites your understanding of systems, power, and moral compromise.

If experiences stay with you for days, you're experiencing significant bleed. This isn't a bug—it's the feature. The magic circle is permeable by design, letting game experiences safely infiltrate and transform daily life.

Psychotherapist Elektra Diakolambrianou uses role-playing games clinically for their "safe-enough" containers (Diakolambrianou & Bowman, 2023). The game provides structure—"just playing"—while allowing genuine vulnerability. You explore difficult emotions through scenarios where you can pause, debrief, or stop when it becomes too much. This is "therapeutic distance" (Landy, 1994): not the real problem, so you can examine it without being overwhelmed, but real enough that insights transfer.

Research consistently shows participants reporting lasting changes from transformative role-playing: perspective shifts, shadow integration, increased empathy, greater self-awareness (Bowman, 2010; Stark, 2012; Hugaas, 2024).

But transformation isn't automatic. It requires intentionality and integration work (Bowman et al., 2023). The game reveals—you must recognize. The game challenges—you must reflect. The game offers new ways of being—you must carry them across the threshold into daily life.

The ritual structure of play—entering the circle, undergoing trials, exiting transformed—mirrors initiation ceremonies across cultures (Turner, 1969). The shaman enters trance. The initiate enters wilderness. The player enters the game. All return changed—if they do the integration work.

This debrief is that work. What did you discover about your values? What did you learn about your capacity for ruthlessness or mercy? What aspects of yourself did the game let you safely explore?

These games weren't entertainment. They were mirrors—sometimes flattering, sometimes damning, always revealing. Now you know who you are when stakes feel real but consequences aren't. Which is, perhaps, who you've always been underneath the roles life demanded you play.

---

## REFERENCES:
Bowman, S. L. (2010). The Functions of Role-Playing Games: How Participants Create Community, Solve Problems and Explore Identity. Jefferson, NC: McFarland & Co.
Bowman, S. L., Diakolambrianou, E., Torner, E., Westborg, J., & Hugaas, K. H. (2023). Transformative Role-Playing Game Design. Uppsala, Sweden: Uppsala University Press.
Diakolambrianou, E., & Bowman, S. L. (2023). Therapy and larp. In S. L. Bowman, E. Diakolambrianou, E. Torner, J. Westborg, & K. H. Hugaas, Transformative Role-Playing Game Design (pp. 173-197). Uppsala, Sweden: Uppsala University Press.
Hugaas, K. H. (2019). Investigating types of bleed in larp: Emotional, procedural, and memetic. Nordic Larp. https://nordiclarp.org/2019/01/25/investigating-types-of-bleed-in-larp-emotional-procedural-and-memetic/
Hugaas, K. H. (2024). Bleed and identity: A conceptual model of bleed and how bleed-out from role-playing games can affect a player's sense of self. International Journal of Role-Playing, 15, 9-35.
Huizinga, J. (1955). Homo Ludens: A Study of the Play-Element in Culture. Boston, MA: Beacon Press. (Original work published 1938)
Landy, R. J. (1994). Drama Therapy: Concepts, Theories and Practices (2nd ed.). Springfield, IL: Charles C Thomas.
Stark, L. (2012). Leaving Mundania: Inside the Transformative World of Live Action Role-Playing Games. Chicago, IL: Chicago Review Press.
Turner, V. (1969). The Ritual Process: Structure and Anti-Structure. Chicago, IL: Aldine Publishing.

## FURTHER READING:
Beltrán, W. S. (2012). Yearning for the hero within: Live action role-playing as engagement with mythical archetypes. In S. L. Bowman & A. Vanek (Eds.), Wyrd Con Companion Book 2012 (pp. 89-96). Los Angeles, CA: Wyrd Con.
Grimes, R. L. (2000). Deeply Into the Bone: Re-inventing Rites of Passage. Berkeley, CA: University of California Press.
Kemper, J. (2017). The battle of Primrose Park: Playing for emancipatory bleed in Fortune & Felicity. Nordic Larp. https://nordiclarp.org/2017/06/21/the-battle-of-primrose-park-playing-for-emancipatory-bleed-in-fortune-felicity/`,
      ),
    type: QuestType.Questions,
    questions: [
      {
        id: "self_learning",
        text: (t) =>
          t(
            "the_safe_space_for_transformation.self_learning.text",
            'In these games, you face difficult choices or situations you\'d never encounter in real life. How intensely do you feel: "I learned something about myself from how I responded"?',
          ),
        answers: [
          (t) =>
            t(
              "the_safe_space_for_transformation.self_learning.a1",
              "Not at all—they're just game decisions",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.self_learning.a2",
              "Slightly—one choice made me think a bit",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.self_learning.a3",
              "Moderately—several moments revealed my values",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.self_learning.a4",
              "Strongly—I discovered beliefs I didn't know I held",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.self_learning.a5",
              "Profoundly—I saw myself in a completely new way",
            ),
        ],
        scanToken: "papers_please",
      },
      {
        id: "lingering",
        text: (t) =>
          t(
            "the_safe_space_for_transformation.lingering.text",
            "After playing games with intense emotional or moral content, how strongly do these experiences stay with you?",
          ),
        answers: [
          (t) =>
            t(
              "the_safe_space_for_transformation.lingering.a1",
              "They disappear the moment I stop playing",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.lingering.a2",
              "I think about them briefly afterward",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.lingering.a3",
              "They linger for hours, sometimes surfacing later",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.lingering.a4",
              "They affect my mood and thinking for a day or more",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.lingering.a5",
              "They become part of how I understand myself and the world",
            ),
        ],
        scanToken: "this_war_of_mine",
      },
      {
        id: "transformative_potential",
        text: (t) =>
          t(
            "the_safe_space_for_transformation.transformative_potential.text",
            "If you could design a game to help you work through a real challenge in your life, how strongly do you believe playing that game could actually help you?",
          ),
        answers: [
          (t) =>
            t(
              "the_safe_space_for_transformation.transformative_potential.a1",
              "Not at all—games and real life are completely separate",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.transformative_potential.a2",
              "Unlikely—maybe slight insight but no real change",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.transformative_potential.a3",
              "Possibly—it might offer a new perspective",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.transformative_potential.a4",
              "Probably—practicing in games could transfer to life",
            ),
          (t) =>
            t(
              "the_safe_space_for_transformation.transformative_potential.a5",
              "Definitely—games are a powerful space for real transformation",
            ),
        ],
        scanToken: "this_war_of_mine",
      },
    ],
  },
  {
    id: "final_transformation",
    image: "/quest_icons/t3q4.svg",
    brief: () => "Scan the QR to complete this quest.",
    debrief: () => "Congrats! You scanned the QR.",
    type: QuestType.Scannable,
    scanToken: "test",
  },
  {
    id: "track4_quest1",
    image: "/quest_icons/t4q1.svg",
    brief: () => "Scan the QR to complete this quest.",
    debrief: () => "Congrats! You scanned the QR.",
    type: QuestType.Scannable,
    scanToken: "test",
  },
  {
    id: "track4_quest2",
    image: "/quest_icons/t4q2.svg",
    brief: () => "Scan the QR to complete this quest.",
    debrief: () => "Congrats! You scanned the QR.",
    type: QuestType.Scannable,
    scanToken: "test",
  },
  {
    id: "track4_quest3",
    image: "/quest_icons/t4q3.svg",
    brief: () => "Scan the QR to complete this quest.",
    debrief: () => "Congrats! You scanned the QR.",
    type: QuestType.Scannable,
    scanToken: "test",
  },
  {
    id: "track4_quest4",
    image: "/quest_icons/t4q4.svg",
    brief: () => "Scan the QR to complete this quest.",
    debrief: () => "Congrats! You scanned the QR.",
    type: QuestType.Scannable,
    scanToken: "test",
  },
];
