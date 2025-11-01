import { type Quest, QuestType } from "~/lib/Quest";

/**
 * Track 3: Play is Self-Discovery
 * Invites players to discover themselves through reflections on taste,
 * preference, and play style triggered by QR codes on games they play
 */
export const track3Quests: Array<Quest> = [
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

You just experienced mimicry, one of play's four fundamental categories identified by Roger Caillois (Caillois, 2001). When you became Geralt tracking monsters or Ivan confronting his curse, you engaged in the same act as ancient ritual dancers and theater performers across millennia: temporarily setting aside your everyday identity to explore what it feels like to be someone else.

But the character isn't just costume. It's alibi.

Role-playing games researcher Sarah Lynne Bowman describes alibi as a "protective frame" allowing players to explore aspects of themselves they might not feel safe expressing otherwise (Bowman et al., 2023). The character provides permission: "I'm just seeing what Geralt would do" becomes cover for testing courage you haven't shown, expressing emotions you've kept hidden.

Your first answer reveals how you use this alibi. If you felt completely different from yourself, the character became full escape, sometimes necessary to see ourselves clearly. If you felt like discovering hidden parts, you experienced what Nordic larp calls "bleed", when boundaries between player and character become permeable (Bowman, 2015). The character's feelings bleed into yours; transformation happens here.

Your second answer is key. When you identified a quality you'd bring back from the character, you revealed your shadow, psychologist Carl Jung's term for unexpressed aspects of ourselves (Jung, 1968). Not bad parts but unexpressed parts. The hero's courage. The warrior's strength. Games offer a laboratory for shadow work: we can try on these qualities where stakes are imaginary but feelings are real.

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

Your first answer reveals how you relate to this inner multiplicity. If you always play the same type, you've found your dominant archetype, familiar and comfortable. But Jung warned against over-identifying with a single pattern, calling it "inflation" (Jung, 1968). The warrior who cannot be vulnerable. The sage who cannot act.

If you want to play them all, you're pursuing the inner yearn for what Jung called "individuation", integrating these aspects into a complete self (Jung, 1968).

Your third answer reveals the gap between authentic and adapted selves. We learn certain roles to survive and belong, Jung's "persona," the mask we show the world (Jung, 1968). This adaptation isn't false, but sometimes the persona becomes prison.

Games reveal this gap. When you play the rogue after years as the responsible caregiver, the leader after hiding in the background, the warrior after avoiding conflict, you're recovering parts life hasn't let you express.

Researcher Kjell Hedgard Hugaas describes "identity bleed": when role-playing shifts how we understand ourselves (Hugaas, 2024). A player realizes confidence isn't a trait you have; it's behavior you practice. Another discovers cruelty and kindness coexist in everyone: we choose which to act on.

Life demands we specialize and formulate to self and others a narrative of a singural, specific, unchanging and socially adjusted identity. Games invite us to remember we contain multitudes.

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

Historian Johan Huizinga described the "magic circle": the boundary separating play from ordinary life where normal rules suspend and new possibilities emerge (Huizinga, 1955). Within this circle, consequences disconnect from material reality. But games offer more than consequence-free experimentation. They offer a "transformative container", a safe yet challenging space for encountering parts of ourselves that daily life has no room for (Bowman et al., 2023).

You might have experienced bleed (or maybe if you will play these gamescat home for longer you will), the most studied concept in Nordic larp theory. Kjell Hedgard Hugaas identifies three types (2019):

**EMOTIONAL BLEED:** The character's feelings become yours. Playing Papers, Please, denying desperate refugees, you feel genuine guilt—not because YOU did wrong, but because the boundary between you and the character dissolved.

**PROCEDURAL BLEED:** Game behaviors transfer to real life. After This War of Mine, you notice resource scarcity differently, consider moral compromises more carefully. The game taught your mind new patterns.

**MEMETIC BLEED:** Game ideas change how you think. Papers, Please doesn't just simulate bureaucratic cruelty—it makes you see that complicity everywhere afterward. It rewrites your understanding of systems, power, and moral compromise.

If experiences stay with you for days, you're experiencing significant bleed. The magic circle is permeable by design, letting game experiences safely infiltrate and transform daily life.

Psychotherapist Elektra Diakolambrianou uses role-playing games clinically for their "safe-enough" containers (Diakolambrianou & Bowman, 2023). The game provides structure ("just playing") while allowing genuine vulnerability. You explore difficult emotions through scenarios where you can pause, debrief, or stop when it becomes too much. This is "therapeutic distance" (Landy, 1994): not the real problem, so you can examine it without being overwhelmed, but real enough that insights transfer.

Research consistently shows participants reporting lasting changes from transformative role-playing: perspective shifts, shadow integration, increased empathy, greater self-awareness (Bowman, 2010; Stark, 2012; Hugaas, 2024).

But transformation isn't automatic. It requires intentionality and integration work (Bowman et al., 2023). The game reveals—you must recognize. The game challenges—you must reflect. The game offers new ways of being—you must carry them across the threshold into daily life.

The ritual structure of play, entering the circle, undergoing trials, exiting transformed, mirrors initiation ceremonies across cultures (Turner, 1969). The shaman enters trance. The initiate enters wilderness. The player enters the game. All return changed if they do the integration work.

This debrief is that work. What did you discover about your values? What did you learn about your capacity for ruthlessness or mercy? What aspects of yourself did the game let you safely explore?

These games weren't entertainment. They were mirrors: sometimes flattering, sometimes damning, always revealing. Now you know who you are when stakes feel real but consequences aren't. Which is, perhaps, who you've always been underneath the roles life demanded you play.

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
    brief: (t) =>
      t (
        "track3_quest4.brief",
      "Go to the LABORATORY room and take a sheet of paper from the Q3-B bin. Write your answer to the quest your were given by a fellow player. Lastly, scan the QR code.",
      ),
    debrief: (t) =>
      t(
        "final_transformation.debrief",
        `# PLAY AS SOCIAL RITUAL

You just completed a quest designed by another player. Someone you'll likely never meet created this challenge—and you performed it. This is social structure emerging through play.

THE SOLIDIFICATION OF SOCIAL ROLES

When communities gather to play repeatedly, roles crystallize. Sociologist Émile Durkheim observed that ritual transforms individuals into collectives, reinforcing social order through shared performance (Durkheim, 1912/1995). Gaming guilds, sports teams, and larp groups exhibit this pattern: raid leaders emerge, healers specialize, tanks anchor: roles that begin as mechanical necessity become social identity.

Social psychologist Henri Tajfel demonstrated that even arbitrary group categories create powerful in-group loyalty and identity (Tajfel & Turner, 1979). His "minimal group paradigm" showed people favor their group after mere random assignment. Gaming amplifies this: shared raids, coordinated strategies, and collective victories forge communities where roles become identity. The role within the game becomes who you are within that social structure.

Communities of practice scholar Etienne Wenger describes how shared activities create identity through "mutual engagement, joint enterprise, and shared repertoire" (Wenger, 1998). Speedrunning communities, esports teams, tabletop gaming groups, each develops specialized knowledge, insider language, and recognized expertise. These aren't just people who play together; they're social structures where participation defines membership and competence determines status.

THE LIBERATORY PARADOX

But play's relationship to social structure is double-edged. The same mechanism that solidifies roles also dissolves them.

Nordic larp researcher Jonaya Kemper introduces "wyrding the self": using roleplay to resist what Audre Lorde called the "mythical norm," society's invisible standard against which all are measured (Kemper, 2020). When marginalized players inhabit characters with power, confidence, or authority society denies them, they practice liberation. The character provides "alibi", narrative permission to attempt actions their assigned social position forbids.

Sarah Lynne Bowman identifies this as "emancipatory bleed", the liberatory feeling when players successfully resist systematic oppression within the game and carry that resistance outward (Bowman, 2018). A player discovers that confidence isn't innate; it's performed and practiced. Another learns that social constraints aren't natural law but arbitrary rules that can be challenged.

Game designer Avery Alder's framework of "belonging outside belonging" captures this tension: games create spaces where players belong through participation while simultaneously existing outside normative social structures (Alder, 2017). You're both within the community (following its rules, accepting its roles) and outside conventional society (experimenting with identities society forbids).

THE RITUAL YOU JUST PERFORMED

This quest embodied this paradox. You accepted a role—quest-completer—in a social structure created by players. You followed rules established by community practice. You performed a ritual that connects you to fellow players through shared experience.

But you also experienced liberation. Their quest gave you permission to explore parts of the exhibition you might have skipped, think thoughts you hadn't considered, practice behaviors you don't typically perform.

Play simultaneously binds us to social structures and offers escape from them. It creates communities where we find belonging and spaces where we practice liberation from the roles those very communities might impose.

---

REFERENCES:
Alder, A. (2017). Belonging Outside Belonging [Game design framework]. Buried Without Ceremony.
Bowman, S. L. (2018). Immersion and Shared Imagination in Role-Playing Games. In J. P. Zagal & S. Deterding (Eds.), Role-Playing Game Studies: Transmedia Foundations (pp. 379-394). Routledge.
Durkheim, É. (1995). The Elementary Forms of Religious Life (K. E. Fields, Trans.). Free Press. (Original work published 1912)
Kemper, J. (2020). Wyrding the self: Using navigational play to resist systematic oppression in larp. Nordic Larp. https://nordiclarp.org/2020/05/18/wyrding-the-self/
Tajfel, H., & Turner, J. C. (1979). An integrative theory of intergroup conflict. In W. G. Austin & S. Worchel (Eds.), The Social Psychology of Intergroup Relations (pp. 33-47). Brooks/Cole.
Wenger, E. (1998). Communities of Practice: Learning, Meaning, and Identity. Cambridge University Press.

FURTHER READING:
Anderson, B. (1983). Imagined Communities: Reflections on the Origin and Spread of Nationalism. Verso.
Goffman, E. (1959). The Presentation of Self in Everyday Life. Anchor Books.
Putnam, R. D. (2000). Bowling Alone: The Collapse and Revival of American Community. Simon & Schuster.`,
      ),
    type: QuestType.Scannable,
    scanToken: "t3q4",
  },
];
