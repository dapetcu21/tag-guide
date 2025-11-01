import { type Quest, QuestType } from "~/lib/Quest";

/**
 * Track 4: Play is Making/Design
 * Reveals design tools (feedback loops, goals, rewards) and invites visitors
 * to design new quests that become part of the living exhibition
 */
export const track4Quests: Array<Quest> = [
  {
    id: "track4_quest1",
    image: "/quest_icons/t4q1.svg",
    brief: (t) =>
      t (
        "track4_quest1.brief",
      "Go to the LABORATORY room and take a sheet of paper from the Q1-A bin. Write a challenge for a fellow future player, in which you prompt them to find an idiom or use of language of words either connected to games, or in the lexical families of game or play. Then in the bottom of the paper, write upside down in small letters potential answers to your challenge. Lastly, scan the QR code and leave the sheet of paper in bin Q1-B.",
      ),
    debrief: (t) =>
      t(
        "track4_quest1.debrief",
        `# THE MAKER'S IMPULSE

You just designed a quest for a stranger. You transformed from player into maker and discovered the secret: playing games and making games are the same impulse.

THE CREATIVE CORE OF PLAY

Evolutionary psychologist Peter Gray describes play as fundamentally creative practice. His research demonstrates that curiosity drives knowledge acquisition while play develops skills. Crucially, these aren't separate processes (Gray, 2013). When children engage in free play, they're not just consuming experiences; they're constantly iterating, testing, and creating novel variations.

Developmental psychologist Lev Vygotsky observed that all advanced play contains elements of rule-creation. Even toddlers playing "house" aren't merely imitating, they're actively designing social systems, negotiating rules, and authoring scenarios (Vygotsky, 1978). Play is proto-design.

Cognitive research confirms this connection. A Michigan State University study of 491 twelve-year-olds found that video game playing correlated strongly with creativity across all measures—drawing, storytelling, problem-solving—regardless of game genre or player demographics (Jackson et al., 2012). The researchers concluded that the creative thinking required to navigate game systems transfers directly to creative production.

Recent neuroscience strengthens this link. Studies on gaming and brain plasticity show that game interaction enhances cognitive flexibility, pattern recognition, and the capacity to generate novel solutions, the exact cognitive mechanisms underlying creative production (Bavelier et al., 2012). Playing games doesn't just inspire making; it trains the neural pathways required for design.

THE MINECRAFT-ROBLOX PHENOMENON

The explosive success of creation-focused games provides historical proof of this maker's impulse. Minecraft, launched in 2009, by providing tools rather than objectives, unleashed millions of players-turned-designers (Duncan, 2011).

But Minecraft is merely prologue to Roblox's revelation. Founded in 2006 by David Baszucki explicitly as a platform for user-created games, Roblox has produced over 50 million games—not pieces of user-generated content, but actual games, each with mechanics, rules, and designed experiences (Baszucki, 2020). By 2025, Roblox hosts 12.3 million monthly active creators and has paid out billions to developers through its DevEx program (Roblox Corporation, 2025).

Consider the scale: over half of Roblox's top-performing games in 2025 were created by solo developers or small teams, many of them teenagers (Takahashi, 2025). 75% of Roblox creators are under 24, spending an average of 9.2 hours weekly building and testing their games. They're designers.

THE PSYCHOLOGICAL IMPERATIVE

Why do players become makers? Social psychologist Mihaly Csikszentmihalyi's concept of "autotelic personality" provides insight. Those who achieve flow states don't simply seek to repeat pleasurable experiences, they seek to understand and recreate the mechanisms that produced those experiences (Csikszentmihalyi, 1990). Playing a brilliant game creates the drive to understand how that brilliance was designed.

Sociologist Richard Sennett argues that craftsmanship emerges from "the desire to do a job well for its own sake" (Sennett, 2008, p. 9). Players who spend thousands of hours in games develop craftsman's knowledge, intimate familiarity with mechanics, systems, and design patterns. This knowledge demands expression through making.

YOUR QUEST AS EVIDENCE

You just experienced this impulse firsthand. You played our games, absorbed their patterns, identified their design principles, then agreed to create because play naturally generates the desire to make.

Game designer Frank Lantz captures this perfectly: "Games are the aesthetic form of the condition that we find ourselves in. A universe that is fundamentally plastic, fundamentally under our control" (Lantz, 2019, p. 156). When we play, we discover that rules can be changed, systems can be redesigned, experiences can be authored. And once we know that, the impulse to make becomes irresistible.

---

REFERENCES:
Bavelier, D., Green, C. S., Pouget, A., & Schrater, P. (2012). Brain plasticity through the life span: Learning to learn and action video games. Annual Review of Neuroscience, 35, 391-416.
Baszucki, D. (2020). Building the metaverse. Roblox Blog. https://blog.roblox.com
Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience. Harper & Row.
Duncan, S. (2011). Minecraft, beyond construction and survival. Well Played, 1(1), 1-22.
Gray, P. (2013). Free to Learn: Why Unleashing the Instinct to Play Will Make Our Children Happier, More Self-Reliant, and Better Students for Life. Basic Books.
Jackson, L. A., Witt, E. A., Games, A. I., Fitzgerald, H. E., von Eye, A., & Zhao, Y. (2012). Information technology use and creativity: Findings from the Children and Technology Project. Computers in Human Behavior, 28(2), 370-376.
Lantz, F. (2019). The Beauty of Games. MIT Press.
Norton, M. I., Mochon, D., & Ariely, D. (2012). The IKEA effect: When labor leads to love. Journal of Consumer Psychology, 22(3), 453-460.
Roblox Corporation. (2025). Q1 2025 Financial Results. Roblox Investor Relations.
Sennett, R. (2008). The Craftsman. Yale University Press.
Takahashi, D. (2025). Roblox creators earning millions as platform scales. VentureBeat.
Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press.

FURTHER READING:
Gee, J. P. (2003). What Video Games Have to Teach Us About Learning and Literacy. Palgrave Macmillan.
Kafai, Y. B. (1995). Minds in Play: Computer Game Design as a Context for Children's Learning. Routledge.
Papert, S. (1980). Mindstorms: Children, Computers, and Powerful Ideas. Basic Books.`
      ),
    type: QuestType.Scannable,
    scanToken: "t4q1",
  },
  {
    id: "track4_quest2",
    image: "/quest_icons/t4q2.svg",
    brief: (t) =>
      t (
        "track4_quest2.brief",
        "Go to the LABORATORY room and take a sheet of paper from the Q2-A bin. Write 2 questions with 3 potential answers each, whose answers one cand find somewhere in the exhibition. Then in the bottom of the paper, write upside down in small letters the correct answers to each of them. Lastly, scan the QR code and leave the sheet of paper in bin Q2-B.",
      ),
    debrief: (t) =>
      t(
        "track4_quest2.debrief",
        `# THE EMERGENCE OF A DISCIPLINE

You just designed quiz questions about game knowledge. But where does that knowledge come from? Who decided that game design is something that can be known, studied, taught?

THE 1990s CRYSTALLIZATION

Throughout the 1980s, people made games, but "game design" as a distinct craft didn't exist. Programmers programmed, artists drew, and somewhere in the intersection, games emerged. Sid Meier created Civilization (1991), but he didn't call himself a "game designer", he was a programmer who made software (Meier, 2020).

Everything changed in the 1990s. The decade's technological explosion created complexity that demanded specialization. Making Doom (1993) required different expertise than making Space Invaders (1978). Someone needed to orchestrate how mechanics, narrative, visuals, and player experience cohered. That someone became "the game designer."

Will Wright's SimCity (1989) and The Sims (2000) demonstrated that game design could be *about* something beyond mechanical challenge: systems modeling, emergent narrative, sandbox creativity. Shigeru Miyamoto's work on Super Mario 64 (1996) established spatial design principles that would define 3D gaming. They became architects of experience.

DEFINING THE DISCIPLINE

Game design is the practice of creating the rules, mechanics, and structures that define interactive play experiences, orchestrating what players can do, what they should do, and what happens when they do it. But this simple definition conceals extraordinary complexity.

Katie Salen and Eric Zimmerman's foundational text *Rules of Play* (2004) established game design as analyzing the relationship between rules (the mechanics), play (the interaction), and culture (the meaning). Their work demonstrated that game design required synthesizing insights from computer science, psychology, narrative theory, systems thinking, and art.

THE ACADEMIC ESTABLISHMENT

The academic legitimization of game design studies began in the 1990s but exploded in the 2000s. DigiPen Institute of Technology (founded 1988) pioneered game-specific education. Carnegie Mellon established its Entertainment Technology Center in 1998. The University of Southern California launched its Interactive Media & Games Division in 2002. New York University's Game Center opened in 2008 (Freyermuth, 2015).

By 2013, game studies had crystallized as an academic discipline with its own journals (*Game Studies*, *Games and Culture*), conferences (DiGRA, CHI Play), and theoretical frameworks (Planells, 2013). Programs emerged globally: from MIT's Comparative Media Studies to the IT University of Copenhagen's Center for Computer Games Research to China's Communication University game design programs. Even in Romania UNATC (The National University for Theatrical Arts) offers a Masters degree in Game Design.

Game design now has academic legitimacy: doctoral programs, tenure-track professorships, peer-reviewed research. Universities teach game design theory alongside computer science, fine art, and literature.

THE THEORETICAL TOOLKIT

Game design as discipline emerged through the development of a number of analytical frameworks, used everyday by game designers. Just a few of them that have been used as tools to check and improve the design of these games are:

**Flow Theory** (Mihaly Csikszentmihalyi, 1975): Optimal experience occurs when challenge matches skill, creating focused immersion. Game designers manipulate difficulty curves to keep players in flow channels—between boredom (too easy) and anxiety (too hard). This theory explains why games must progressively increase challenge as players develop competence (Csikszentmihalyi, 1990).

**The MDA Framework** (Hunicke, LeBlanc, Zubek, 2004): Games exist at three levels—Mechanics (rules), Dynamics (behavior during play), and Aesthetics (emotional response). Designers work from mechanics toward aesthetics, but players experience aesthetics first. This framework reveals why identical mechanics can produce radically different experiences.

**Core Loops and Engagement Curves**: Games are structured around repeated action cycles—the core loop (shoot, collect ammo, advance) and meta-loops (complete level, upgrade abilities, access new content). Designer understanding how these loops nest and intersect determines whether games remain engaging across dozens or hundreds of hours.

**Balancing Systems**: Game designer must solve the equation: how do we create meaningful choice without dominant strategies? This requires understanding Nash equilibria, feedback loops (positive amplifying winning, negative preventing runaway), and how small numerical tweaks cascade through complex systems (Adams & Dormans, 2012).

And many others.

THE CRAFT YOU INHERITED

When you designed quiz questions about games, you participated in knowledge transmission, the defining characteristic of an established discipline. Game design isn't intuitive genius anymore. It's teachable, learnable, criticizable craft with principles, methodologies, and theoretical foundations.

You're standing on the shoulders of designers who spent the 1990s and 2000s transforming individual brilliance into collective knowledge. Every choice you made when designing your quest draws from decades of crystallized wisdom.

---

REFERENCES:
Adams, E., & Dormans, J. (2012). Game Mechanics: Advanced Game Design. New Riders.
Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience. Harper & Row.
Freyermuth, G. S. (2015). Games, Game Design, Game Studies: An Introduction. Transcript Verlag.
Hunicke, R., LeBlanc, M., & Zubek, R. (2004). MDA: A formal approach to game design and game research. AAAI Workshop on Challenges in Game AI.
Meier, S. (2020). Sid Meier's Memoir!: A Life in Computer Games. W. W. Norton & Company.
Planells, A. J. (2013). La emergencia de los Game Studies como disciplina propia. Historia y Comunicación Social, 18, 519-528.
Romero, B., & Schreiber, I. (2009). Challenges for Game Designers. Charles River Media.
Salen, K., & Zimmerman, E. (2004). Rules of Play: Game Design Fundamentals. MIT Press.
Schell, J. (2008). The Art of Game Design: A Book of Lenses. Morgan Kaufmann.

FURTHER READING:
Costikyan, G. (2002). I Have No Words & I Must Design. Interactive Fantasy, 2.
Fullerton, T. (2014). Game Design Workshop: A Playcentric Approach to Creating Innovative Games (3rd ed.). CRC Press.
Juul, J. (2005). Half-Real: Video Games between Real Rules and Fictional Worlds. MIT Press.`
      ),
    type: QuestType.Scannable,
    scanToken: "t4q2",
  },
  {
    id: "track4_quest3",
    image: "/quest_icons/t4q3.svg",
    brief: (t) =>
      t (
        "track4_quest3.brief",
        "Go to the LABORATORY room and take a sheet of paper from the Q3-A bin. Challenge a player to play a game in the exhibition. Write afterwards two questions in which you ask the player to express something about their feelings or thoughts connected to their experience with the game. Try to raise dillemas of meaningful reflection. Lastly, scan the QR code and leave the sheet of paper in bin Q3-B.",
      ),
    debrief: (t) =>
      t(
        "track4_quest3.debrief",
        `# BEFORE COMMODIFICATION: GAMES AS FOLK ART

You just designed a quest that will be played by strangers, freely shared, owned by no one. You participated in an ancient tradition: the communal, non-commodified creation of games.

THE ANCIENT COMMONS

For most of human history, games weren't products—they were practices, passed through communities like language, cuisine, or song. The Royal Game of Ur (2600 BCE), discovered in Mesopotamian royal tombs, had no inventor—or rather, everyone who played it was its inventor, iterating rules through generations (Finkel, 2007).

Senet, played in ancient Egypt for over 3000 years, evolved from racing game to spiritual metaphor for the journey to the afterlife, its rules transforming through centuries of communal play (Piccione, 1980). Mancala variants appear across Africa, the Middle East, and Asia—over 200 distinct regional versions, each shaped by local culture, with no single origin point (Murray, 1952).

Chess illuminates this folk process perfectly. Emerging from India's chaturanga (6th century CE), it flowed through Persia as shatranj, across the Islamic world, into medieval Europe, transforming at each step. The queen, now the board's most powerful piece, didn't exist until the late 15th century when European players, inspired by powerful female monarchs like Isabella of Castile, completely reimagined the game (Yalom, 2004). No one "owned" chess. No designer "balanced" it. Players iteratively created it across a thousand years.

Board games historian David Parlett explains: "Traditional games evolved through folk process: played, modified, and transmitted orally through communities without codified rules or known authors" (Parlett, 1999, p. 5). Like folktales, they belong to everyone and no one.

SPORTS AS COMMUNAL CREATION

The same pattern governs sports. Modern football emerged not through design but through decades of violent, chaotic mob games in medieval England. Various schools and regions played different versions until the Cambridge Rules (1848) attempted standardization.

Baseball evolved further through American playground experimentation. The rules stabilized not through single authorship but through the collective practice of amateur clubs in the 1840s-1850s (Block, 2005).

Even today's Olympic sports often trace to folk games. Taekwondo synthesizes Korean martial traditions. Judo was formalized from jujitsu but reflects centuries of grappling practice. These games emerged from cultures, not from designers.

THE HISTORICAL RUPTURE

The commodification of games is astonishingly recent, primarily a post-1970 phenomenon tied to the video game industry's emergence. When Nolan Bushnell founded Atari in 1972, he created something unprecedented: games as intellectual property, owned by corporations, designed by paid professionals, sold as products.

Before this, even commercial board games often emerged from folk practice. Monopoly (1935) derives from Elizabeth Magie's The Landlord's Game (1904), which itself formalized property trading games played informally. Magie created it as political education, not product, and lost control as variations spread through folk process before Parker Brothers commodified it (Pilon, 2015).

Compare this to modern video game development: Epic Games spent over $500 million developing Fortnite, employing hundreds of designers, artists, programmers at an industrial-scale investment unimaginable before the digital era (Takahashi, 2020). Games became products requiring capital, intellectual property law, and corporate infrastructure.

This represents a fundamental shift. For 5000 years, games were made communally, shared freely, evolved collectively.

FOLKLORE PERSISTS

Yet folk game creation never disappeared. Playground games like tag, hide-and-seek, and red rover transmit through child culture without adult instruction or commercial mediation. Regional card game variants proliferate. Sports pickup games modify rules situationally.

The internet revived folk game creation at scale. Open-source game engines, free distribution platforms, and modding communities create games outside commodity relations. Itch.io hosts over 1 million games, most distributed freely or pay-what-you-want. The indie game movement explicitly rejects industrial production models, returning to artisanal creation (Parker, 2013).

Even within commercial gaming, folk practices persist. Minecraft's explosive popularity stems from treating the game as commons—players create, share, and modify without payment. Mods transform commercial games into new games: Counter-Strike began as a Half-Life mod, DotA as a Warcraft III mod (Postigo, 2007).

YOUR QUEST AS FOLK ART

When you designed your quest, you participated in this ancient tradition. You created without compensation, shared without ownership, contributed to a commons. Your quest will evolve as players interpret it, will be forgotten or remembered based on communal value, will exist in the public space of play.

Anthropologist Victor Turner wrote about "liminoid" activities: voluntary, creative practices that exist outside economic production, where participants generate meaning through shared performance (Turner, 1982). Your quest-making was liminoid: outside the market, inside the culture.

Mayhaps in the grand game of history the reign of capital, through its forever search for abundance and ease of production, bring forth its undoing.

---

REFERENCES:
Block, D. (2005). Baseball Before We Knew It: A Search for the Roots of the Game. University of Nebraska Press.
Finkel, I. (2007). On the rules for the Royal Game of Ur. In I. Finkel (Ed.), Ancient Board Games in Perspective (pp. 16-32). British Museum Press.
Harvey, A. (2005). Football: The First Hundred Years. Routledge.
Murray, H. J. R. (1952). A History of Board Games Other Than Chess. Oxford University Press.
Parker, F. (2013). Indie game developers and the problem of alternative cultural production. Loading..., 7(11), 25-40.
Parlett, D. (1999). The Oxford History of Board Games. Oxford University Press.
Piccione, P. A. (1980). In search of the meaning of senet. Archaeology, 33(4), 55-58.
Pilon, M. (2015). The Monopolists: Obsession, Fury, and the Scandal Behind the World's Favorite Board Game. Bloomsbury.
Postigo, H. (2007). Of mods and modders: Chasing down the value of fan-based digital game modifications. Games and Culture, 2(4), 300-313.
Takahashi, D. (2020). Fortnite has made more than $10 billion in lifetime revenue. VentureBeat.
Turner, V. (1982). From Ritual to Theatre: The Human Seriousness of Play. PAJ Publications.
Yalom, M. (2004). Birth of the Chess Queen. HarperCollins.

FURTHER READING:
Bell, R. C. (1979). Board and Table Games from Many Civilizations. Dover Publications.
Flanagan, M. (2009). Critical Play: Radical Game Design. MIT Press.
Suits, B. (1978). The Grasshopper: Games, Life and Utopia. University of Toronto Press.`
      ),
    type: QuestType.Scannable,
    scanToken: "t4q3",
  },
  {
    id: "track4_quest4",
    image: "/quest_icons/t4q4.svg",
    brief: (t) =>
      t (
        "track4_quest4.brief",
        "Go to the LABORATORY room and take a sheet of paper from the Q4-A bin. Tell us there of a game, existing or of your design, that you think would have fit well in TAG. Answer the other questions regarding your experience with this game and the exhibition. Lastly, scan the QR code and leave the sheet of paper in bin Q4-B.",
      ),
    debrief: (t) =>
      t(
        "track4_quest4.debrief",
        `# FROM SPECTACLE TO CO-CREATION

You just completed this exhibition's final quest. But look at what you did: you didn't merely view our games, you played them. You didn't just read about play, you designed new play. This shift from passive consumption to participatory creation represents a revolution in how museums understand their purpose.

THE TOY-ART DICHOTOMY

For most of museum history, a rigid hierarchy existed: Fine Art (painting, sculpture) demanded contemplation; decorative arts (furniture, ceramics) served function; toys and games were beneath notice, treated as children's trifles, unworthy of institutional attention.

This changed slowly. The Museum of Modern Art began challenging these boundaries in the 1930s, collecting industrial design alongside painting (Antonelli, 2011). But games remained culturally suspect: associated with children, commerce, and lowbrow entertainment.

The 21st century shattered this hierarchy. In 2012, MoMA acquired 14 video games for its permanent collection, curator Paola Antonelli declaring: "Are video games art? They sure are, but they are also design" (Antonelli, 2012). The Smithsonian American Art Museum mounted *The Art of Video Games* (2012), drawing massive audiences across its national tour (Melissinos & O'Rourke, 2012).

These exhibitions sparked fierce debate. Art critic Jonathan Jones proclaimed: "Sorry MoMA, video games are not art" (Jones, 2012). Roger Ebert maintained until his death that games could never achieve art's status because player agency destroys authorial intent (Ebert, 2010).

But the debate itself proved games had entered the artworld conversation. Museums now regularly exhibit games: the Victoria & Albert Museum's *Videogames: Design/Play/Disrupt* (2018), the Musée des Arts Décoratifs' *Video Game: The Immersive Art* (2022). Games moved from curiosity to legitimate cultural form.

THE DE-INFANTILIZATION OF GAMES

This legitimation required overcoming games' association with childhood. The Entertainment Software Association's 2024 data revealed the average game player is 33 years old; 76% of players are over 18 (ESA, 2024). Games are adult media.

Game scholar Ian Bogost argues that games' delayed cultural acceptance stems from their participatory nature: "The question isn't whether games can be art, but whether art institutions can accommodate participation" (Bogost, 2011, p. 22). Traditional art demands contemplation; games demand interaction. Museums built for passive viewing struggle with active play.

This tension mirrors broader shifts in art theory. Nicolas Bourriaud's relational aesthetics (1998) argued that art's value lies in creating social encounters rather than objects.

Games were participatory art before participatory art was theorized. They require co-creation between designer and player, what game designer Frank Lantz calls "authored play" (Lantz, 2019). Players complete games through performance.

THE PARTICIPATORY MUSEUM REVOLUTION

Game-like exhibitions lead this transformation. The Smithsonian's *Ghosts of a Chance* (2008-2010) turned gallery visits into alternate-reality games where players solved mysteries through close observation of artworks (McGonigal, 2011). The Museum of London's *Streetmuseum* app (2010) used AR to superimpose historical images onto current streets, gamifying urban exploration.

These experiments drew directly from game design: clear goals, immediate feedback, scaffolded challenges, social interaction. Museum educator Jennifer Roberts observes: "Games create participatory frameworks where visitors co-construct meaning" (Roberts, 2013, p. 89).

THIS EXHIBITION AS MANIFESTO

Everything you experienced here enacts this philosophy.

Your participation was constitutive. Without players playing and creating, this exhibition doesn't exist. The games sitting unplayed are incomplete. The empty quest bins are potential awaiting activation. You performed more than visited the exhibition.

This represents museums' future: spaces not for passive consumption but for collective expression, not for displaying culture but for making it together. Game designer Robin Hunicke describes this as moving from "museums that tell you what to think" to "museums that teach you how to think" (Hunicke, 2019).

When you designed your quest, you became curator, designer, artist. When future players complete what you created, they'll extend this chain of participatory creation. This is museums reimagined through play: not repositories of artifacts but communities of makers.

Thank you for playing. Thank you for making. Thank you for proving that the future of museums looks like this: all of us, together, at play.

---

REFERENCES:
Antonelli, P. (2011). States of Design 01: Thresholds. In P. Antonelli (Ed.), Talk to Me: Design and the Communication between People and Objects. MoMA.
Antonelli, P. (2012). Video games: 14 in the collection, for starters. MoMA Blog.
Bogost, I. (2011). How to Do Things with Videogames. University of Minnesota Press.
Bourriaud, N. (1998). Relational Aesthetics. Les Presses du Réel.
Ebert, R. (2010). Video games can never be art. Roger Ebert's Journal. Chicago Sun-Times.
Entertainment Software Association (2024). 2024 Essential Facts About the Video Game Industry. ESA.
Hunicke, R. (2019). The future of play. Keynote address, Games for Change Festival.
Jones, J. (2012). Sorry MoMA, video games are not art. The Guardian.
Lantz, F. (2019). The Beauty of Games. MIT Press.
McGonigal, J. (2011). Reality Is Broken: Why Games Make Us Better and How They Can Change the World. Penguin Press.
Melissinos, C., & O'Rourke, P. (2012). The Art of Video Games: From Pac-Man to Mass Effect. Welcome Books.
Roberts, J. (2013). Designing museum experiences for active participation. Curator: The Museum Journal, 56(1), 85-97.
Russell, J. (2024). The rise of the immersive experience: Museums in the age of Instagram. Museum Management and Curatorship, 39(2), 112-129.
Simon, N. (2010). The Participatory Museum. Museum 2.0.

FURTHER READING:
Bederson, B. B. (1995). Audio augmented reality: A prototype automated tour guide. CHI '95 Conference Companion.
Falk, J. H., & Dierking, L. D. (2012). Museum Experience Revisited. Left Coast Press.
Marr, L. (2013). Gaming the field: The ever-evolving relationship between museums and video games. Museums & Social Issues, 8(1-2), 101-115.`
      ),
    type: QuestType.Scannable,
    scanToken: "t4q4",
  },
];
