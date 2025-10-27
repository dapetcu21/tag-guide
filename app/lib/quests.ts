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
      t(
        "test_text.brief",
        "Type \"Cats/Dogs are cool!\" to complete this quest.",
      ),
    debrief: (t) => t("test_text.debrief", "Congrats! You like animals."),
    type: QuestType.TextInput,
    correctInputs: ["Cats are cool!", "Dogs are cool!"],
    typoTolerance: 2,
  },
  {
    id: "test_questions",
    brief: (t) => t("test_questions.brief", "Answer the questions correctly."),
    debrief: (t) => t("test_questions.debrief", "Congrats! You can do math."),
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
    brief: (t) => t("play_to_survive.brief"),
    debrief: (t) => t("play_to_survive.debrief"),
    type: QuestType.Questions,
    questions: [
      {
        id: "q1",
        text: (t) => t("play_to_survive.q1.text"),
        answers: [
          (t) => t("play_to_survive.q1.a1"),
          (t) => t("play_to_survive.q1.a2"),
          (t) => t("play_to_survive.q1.a3"),
          (t) => t("play_to_survive.q1.a4"),
          (t) => t("play_to_survive.q1.a5"),
        ],
        correctAnswer: 1,
      },
      {
        id: "q2",
        text: (t) => t("play_to_survive.q2.text"),
        answers: [
          (t) => t("play_to_survive.q2.a1"),
          (t) => t("play_to_survive.q2.a2"),
          (t) => t("play_to_survive.q2.a3"),
          (t) => t("play_to_survive.q2.a4"),
          (t) => t("play_to_survive.q2.a5"),
        ],
        correctAnswer: 2,
      },
      {
        id: "q3",
        text: (t) => t("play_to_survive.q3.text"),
        answers: [
          (t) => t("play_to_survive.q3.a1"),
          (t) => t("play_to_survive.q3.a2"),
          (t) => t("play_to_survive.q3.a3"),
          (t) => t("play_to_survive.q3.a4"),
          (t) => t("play_to_survive.q3.a5"),
        ],
        correctAnswer: 1,
      },
      {
        id: "q4",
        text: (t) => t("play_to_survive.q4.text"),
        answers: [
          (t) => t("play_to_survive.q4.a1"),
          (t) => t("play_to_survive.q4.a2"),
          (t) => t("play_to_survive.q4.a3"),
          (t) => t("play_to_survive.q4.a4"),
          (t) => t("play_to_survive.q4.a5"),
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
    id: "who_do_you_become",
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
            "Think about your FAVORITE character type to play. How strongly does this statement resonate: \"This character type expresses something about who I really am or want to be\"?",
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
            "When you imagine your real-life \"character class,\" how strongly do you feel: \"I wish I could be a different type than I am in daily life\"?",
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
            "In these games, you face difficult choices or situations you'd never encounter in real life. How intensely do you feel: \"I learned something about myself from how I responded\"?",
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
];

export const questsById: Map<string, Quest> = new Map(
  quests.map((quest) => [quest.id, quest]),
);
