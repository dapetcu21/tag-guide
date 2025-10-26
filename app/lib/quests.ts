import type { DefaultNamespace, TFunction } from "i18next";

export enum QuestType {
  Scannable,
  TextInput,
  Questions,
}

type IntlFunc = (t: TFunction<DefaultNamespace>) => string;

export type Question = {
  id: string;
  text: IntlFunc;
  answers: Array<IntlFunc>;
  correctAnswer?: number; // 0-3. Omit to not require validation
  scanToken?: string; // Add this to hide the question until scanned. Omit to always display.
};

export type Quest = {
  id: string;
  image?: string;
  brief: IntlFunc;
  debrief: IntlFunc;
} & (
    | {
      type: QuestType.Scannable;
      scanToken: string;
    }
    | {
      type: QuestType.TextInput;
      correctInputs?: Array<string>; // Omit to allow free answer
      typoTolerance: number; // Number of allowable mistyped characters
    }
    | {
      type: QuestType.Questions;
      questions: Array<Question>;
      numRequiredQuestions?: number; // Number of questions required to complete the quest. Omit to require all questions
    }
  );

export const quests: Array<Quest> = [
  {
    id: "test_scannable",
    brief: (t) =>
      t("test_scannable.brief", "Scan the QR to complete this quest."),
    debrief: (t) =>
      t("test_scannable.debrief", "Congrats! You scanned the QR."),
    type: QuestType.Scannable,
    scanToken: "test",
  },
  {
    id: "test_text",
    brief: (t) =>
      t("test_text.brief", `Type "Cats/Dogs are cool!" to complete this quest.`),
    debrief: (t) =>
      t("test_text.debrief", "Congrats! You like animals."),
    type: QuestType.TextInput,
    correctInputs: ["Cats are cool!", "Dogs are cool!"],
    typoTolerance: 2,
  },
  {
    id: "test_questions",
    brief: (t) => t("test_questions.brief", "Answer the questions correctly."),
    debrief: (t) =>
      t("test_questions.debrief", "Congrats! You can do math."),
    type: QuestType.Questions,
    questions: [
      {
        id: "q1",
        text: (t) => t("test_questions.q1.text", "2 + 2 = ?"),
        answers: [
          (t) => t("test_questions.q1.a1", "1"),
          (t) => t("test_questions.q1.a2", "2"),
          (t) => t("test_questions.q1.a3", "3"),
          (t) => t("test_questions.q1.a4", "4"),
        ],
        correctAnswer: 3,
      },
      {
        id: "q2",
        text: (t) => t("test_questions.q2.text", "2 - 2 = ?"),
        answers: [
          (t) => t("test_questions.q2.a1", "1"),
          (t) => t("test_questions.q2.a2", "2"),
          (t) => t("test_questions.q2.a3", "0"),
          (t) => t("test_questions.q2.a4", "4"),
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "test_questions_qr",
    brief: (t) => t("test_questions_qr.brief", "Answer one of the questions."),
    debrief: (t) =>
      t("test_questions_qr.debrief", "Congrats! You have opinions."),
    type: QuestType.Questions,
    numRequiredQuestions: 1,
    questions: [
      {
        id: "color",
        text: (t) =>
          t("test_questions_qr.color.text", "What is your favorite color?"),
        answers: [
          (t) => t("test_questions_qr.color.red", "Red"),
          (t) => t("test_questions_qr.color.green", "Green"),
          (t) => t("test_questions_qr.color.blue", "Blue"),
          (t) => t("test_questions_qr.color.yellow", "Yellow"),
        ],
        scanToken: "q1",
      },
      {
        id: "author",
        text: (t) =>
          t(
            "test_question_qr.author.text",
            "What is your favorite fantasy author?",
          ),
        answers: [
          (t) => t("test_question_qr.author.gaiman", "Neil Gaiman"),
          (t) => t("test_question_qr.author.pratchett", "Terry Pratchett"),
          (t) => t("test_question_qr.author.sanderson", "Brandon Sanderson"),
          (t) => t("test_question_qr.author.rrmartin", "George R. R. Martin"),
        ],
        scanToken: "q2",
      },
    ],
  },
  {
    id: "play_to_survive",
    brief: (t) =>
      t(
        "play_to_survive.brief",
        "Explore the ARCADE section and the EXIT FOYER. Find the oldest games on display—those from the early 1980s. Examine their descriptions, release dates, and mechanics to answer the questions.",
      ),
    debrief: (t) =>
      t(
        "play_to_survive.debrief",
        `PLAY AS NATURE'S TEACHING TOOL

Play is older than human civilisation. Long before we built schools or wrote textbooks, animals were learning through play. Wolf pups wrestle to practice hunting. Dolphins toss objects to develop coordination. Even octopuses explore their environment through playful manipulation (Burghardt, 2005). Play allows animals (including humans) to practice survival skills in low-stakes situations where mistakes are not tragic.

The early arcade games you just examined tap into this ancient learning system. Ms. PAC-MAN teaches spatial awareness as you track ghost patterns. BurgerTime teaches cause and effect—step here, ingredient falls there. Lock 'N' Chase teaches evasion and pursuit.

Inside a game, failure is safe. You can die and restart. You can experiment without real consequences. This is what makes games such powerful learning tools: they let you practice, fail, and improve without actual risk.

Neuroscience backs this up. When you play a game and when you successfully learn something new, the same reward pathways light up in your brain (Koepp et al., 1998). That feeling of "fun" you get? It's your brain's way of saying "you're learning something useful—keep doing this!" Evolution wired us to enjoy learning through play.

Games, by offering clear rules and goals, quick feedback when you succeed or fail and gradual increases in difficulty arecreating what the psychologist Lev Vygotsky would later call "scaffolded learning environments" (Vygotsky, 1978): structures that support you as you learn, then fade away as you master the skill.

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
          (t) => t("play_to_survive.q3.a5", "Defend against waves of attackers"),
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
    brief: (t) =>
      t(
        "the_learning_ladder.brief",
        "Explore the INDIES SPOTLIGHT, THE PLAYER IS PRESENT, KIDS ROOM, and EXIT FOYER sections. Compare games from different eras (1980s through 2020s). Pay attention to genre descriptions, gameplay complexity, and design evolution.",
      ),
    debrief: (t) =>
      t(
        "the_learning_ladder.debrief",
        `DESIGNERS AS LEARNING ARCHITECTS

Notice what just happened? This quest was harder than the first one. You had to compare games across different eras, understand terms like "rogue-lite," and analyze how game design evolved over decades. We built on what you learned in Quest 1. You already knew how to extract information from exhibits, so now we could ask you to do something more complex with that information.

This is exactly what game designers do—and psychologist Mihaly Csikszentmihalyi explained why it works. His "flow theory" shows that people are happiest and learn best when a task is perfectly balanced: not so easy that you're bored, not so hard that you're frustrated (Csikszentmihalyi, 1990). Games keep you in this sweet spot—what he called the "flow channel" - by constantly adjusting difficulty as your skills improve.

Game designers scaffold learning by:
- Introducing ONE new concept at a time
- Giving IMMEDIATE FEEDBACK (you know instantly if you succeeded)
- Increasing DIFFICULTY GRADUALLY (each level slightly harder)
- Allowing SAFE FAILURE (you can try again without real consequences)
- Rewarding MASTERY (that satisfying feeling when you "get it")

Trinity Fusion's "rogue-lite" design brilliantly demonstrates this. You die and restart, but you're smarter each time—you've learned enemy patterns, level layouts, and strategies. The game resets, but your knowledge persists. Research shows this kind of structured challenge, with scaffolding that doesn't interrupt gameplay, enhances both learning and enjoyment (Barzilai & Blau, 2014).

Here's the remarkable part: when learning is scaffolded this way, it doesn't feel like work. It feels like play. Your brain is doing exactly what evolution designed it to do—learn through voluntary, enjoyable engagement. Game designers just figured out how to make that ladder really, really effective at keeping you climbing.

---

REFERENCES:
Barzilai, S., & Blau, I. (2014). Scaffolding game-based learning: Impact on learning achievements, perceived learning, and game experiences. Computers & Education, 70, 65-79.
Bruner, J. S. (1960). The Process of Education. Harvard University Press.
Chen, J. (2007). Flow in games (and everything else). Communications of the ACM, 50(4), 31-34.
Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience. Harper & Row.
Habgood, M. J., & Ainsworth, S. E. (2011). Motivating children to learn effectively: Exploring the value of intrinsic integration in educational games. Journal of the Learning Sciences, 20(2), 169-206.
Sweetser, P., & Wyeth, P. (2005). GameFlow: A model for evaluating player enjoyment in games. Computers in Entertainment, 3(3), 1-24.
Vygotsky, L. S. (1978). Mind in Society. Harvard University Press.
Wood, D., Bruner, J. S., & Ross, G. (1976). The role of tutoring in problem solving. Journal of Child Psychology and Psychiatry, 17(2), 89-100.

FURTHER READING:
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
          (t) => t("the_learning_ladder.q2.a2", "A single puzzle type repeated"),
          (t) =>
            t(
              "the_learning_ladder.q2.a3",
              "Complex world exploration, monster hunting, and story choices",
            ),
          (t) => t("the_learning_ladder.q2.a4", "Only combat mechanics"),
          (t) =>
            t("the_learning_ladder.q2.a5", "Passive watching without interaction"),
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
          (t) => t("the_learning_ladder.q3.a3", "Historical facts about gaming"),
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
            "Find Trinity Fusion by Romanian developer Angry Mob Games. It's described as a \"rogue-lite action platformer.\" What does \"rogue-lite\" mean about its learning design?",
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
          (t) => t("beyond_the_game.q2.a4", "Portal (referenced in descriptions)"),
          (t) =>
            t("beyond_the_game.q2.a5", "Minecraft (referenced in descriptions)"),
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
            t("beyond_the_game.q3.a1", "Last Tales (Raiders of The Lost Island)"),
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
            "According to its description, in Rain World you play as a \"nomadic slugcat\" in what kind of environment?",
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
          (t) => t("beyond_the_game.q6.a3", "The quests got easier as you progressed"),
          (t) =>
            t(
              "beyond_the_game.q6.a4",
              "Each quest taught completely unrelated information",
            ),
          (t) => t("beyond_the_game.q6.a5", "Only Quest 3 contained any real learning"),
        ],
        correctAnswer: 1,
      },
    ],
  },
];

export const questsById: Map<string, Quest> = new Map(
  quests.map((quest) => [quest.id, quest]),
);
