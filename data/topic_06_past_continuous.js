const questions = [
  {
    "id": 1,
    "question_type": "fill_blank",
    "question_text": "I ___ when you called. [sleep]",
    "correct_answer": "was sleeping",
    "suggest_answer": "sleep",
    "explanation": "Past Continuous for an action in progress at a specific past time. Subject 'I' takes 'was'.",
    "difficulty": "Easy",
    "topic_id": 6
  },
  {
    "id": 2,
    "question_type": "fill_blank",
    "question_text": "She ___ a book when the phone rang. [read]",
    "correct_answer": "was reading",
    "suggest_answer": "read",
    "explanation": "Past Continuous describes action interrupted by another past event.",
    "difficulty": "Easy",
    "topic_id": 6
  },
  {
    "id": 3,
    "question_type": "fill_blank",
    "question_text": "They ___ in the garden at 3 PM yesterday. [play]",
    "correct_answer": "were playing",
    "suggest_answer": "play",
    "explanation": "Past Continuous for plural subject at a specific time. 'They were'.",
    "difficulty": "Easy",
    "topic_id": 6
  },
  {
    "id": 4,
    "question_type": "fill_blank",
    "question_text": "He ___ TV when I arrived. [watch]",
    "correct_answer": "was watching",
    "suggest_answer": "watch",
    "explanation": "Action in progress when another action occurred. Subject 'He' takes 'was'.",
    "difficulty": "Easy",
    "topic_id": 6
  },
  {
    "id": 5,
    "question_type": "fill_blank",
    "question_text": "It ___ when we left the house. [rain]",
    "correct_answer": "was raining",
    "suggest_answer": "rain",
    "explanation": "Past Continuous for weather condition at a point in the past.",
    "difficulty": "Easy",
    "topic_id": 6
  },
  {
    "id": 6,
    "question_type": "fill_blank",
    "question_text": "We ___ dinner when the guests arrived. [have]",
    "correct_answer": "were having",
    "suggest_answer": "have",
    "explanation": "Plural subject in Past Continuous. 'We were'.",
    "difficulty": "Easy",
    "topic_id": 6
  },
  {
    "id": 7,
    "question_type": "fill_blank",
    "question_text": "The children ___ their homework at 5 PM. [do]",
    "correct_answer": "were doing",
    "suggest_answer": "do",
    "explanation": "Plural noun phrase takes 'were' in Past Continuous.",
    "difficulty": "Easy",
    "topic_id": 6
  },
  {
    "id": 8,
    "question_type": "fill_blank",
    "question_text": "I ___ to the radio when the news came on. [listen]",
    "correct_answer": "was listening",
    "suggest_answer": "listen",
    "explanation": "Singular subject 'I' takes 'was' in Past Continuous.",
    "difficulty": "Easy",
    "topic_id": 6
  },
  {
    "id": 9,
    "question_type": "fill_blank",
    "question_text": "She ___ in the river when she saw the fish. [swim]",
    "correct_answer": "was swimming",
    "suggest_answer": "swim",
    "explanation": "Past Continuous action interrupted by observation.",
    "difficulty": "Easy",
    "topic_id": 6
  },
  {
    "id": 10,
    "question_type": "fill_blank",
    "question_text": "We ___ a movie when the power went out. [watch]",
    "correct_answer": "were watching",
    "suggest_answer": "watch",
    "explanation": "Plural subject in Past Continuous describes ongoing action.",
    "difficulty": "Easy",
    "topic_id": 6
  },
  {
    "id": 11,
    "question_type": "fill_blank",
    "question_text": "While I ___ for the bus, I ___ an old friend. [wait;see]",
    "correct_answer": "was waiting;saw",
    "suggest_answer": "wait;see",
    "explanation": "Past Continuous (was waiting) interrupted by Past Simple (saw). Multi-word answer.",
    "difficulty": "Medium",
    "topic_id": 6
  },
  {
    "id": 12,
    "question_type": "fill_blank",
    "question_text": "What ___ you ___ at 9 PM last night? [do]",
    "correct_answer": "were;doing",
    "suggest_answer": "do",
    "explanation": "Question form of Past Continuous with 'what'. Multi-word answer.",
    "difficulty": "Medium",
    "topic_id": 6
  },
  {
    "id": 13,
    "question_type": "fill_blank",
    "question_text": "The students ___ when the teacher entered. [talk]",
    "correct_answer": "were talking",
    "suggest_answer": "talk",
    "explanation": "Plural noun in Past Continuous describes ongoing behavior.",
    "difficulty": "Medium",
    "topic_id": 6
  },
  {
    "id": 14,
    "question_type": "fill_blank",
    "question_text": "It ___ snowing when we started our journey. [be]",
    "correct_answer": "was",
    "suggest_answer": "be",
    "explanation": "Past Continuous of 'be' used with gerund (was snowing).",
    "difficulty": "Medium",
    "topic_id": 6
  },
  {
    "id": 15,
    "question_type": "fill_blank",
    "question_text": "They ___ not ___ attention in class. [pay]",
    "correct_answer": "were;paying",
    "suggest_answer": "not;pay",
    "explanation": "Negative Past Continuous. Multi-word answer.",
    "difficulty": "Medium",
    "topic_id": 6
  },
  {
    "id": 16,
    "question_type": "fill_blank",
    "question_text": "The workers ___ when the accident happened. [construct]",
    "correct_answer": "were constructing",
    "suggest_answer": "construct",
    "explanation": "Plural subject in ongoing action at specific past moment.",
    "difficulty": "Medium",
    "topic_id": 6
  },
  {
    "id": 17,
    "question_type": "fill_blank",
    "question_text": "She ___ a letter while her son ___ homework. [write;do]",
    "correct_answer": "was writing;was doing",
    "suggest_answer": "write;do",
    "explanation": "Two simultaneous Past Continuous actions.",
    "difficulty": "Medium",
    "topic_id": 6
  },
  {
    "id": 18,
    "question_type": "fill_blank",
    "question_text": "The band ___ when the power failed. [perform]",
    "correct_answer": "was performing",
    "suggest_answer": "perform",
    "explanation": "Singular collective noun takes 'was' in Past Continuous.",
    "difficulty": "Medium",
    "topic_id": 6
  },
  {
    "id": 19,
    "question_type": "fill_blank",
    "question_text": "I ___ not ___ the film when you called. [watch]",
    "correct_answer": "was;watching",
    "suggest_answer": "not;watch",
    "explanation": "Negative Past Continuous form.",
    "difficulty": "Medium",
    "topic_id": 6
  },
  {
    "id": 20,
    "question_type": "fill_blank",
    "question_text": "Who ___ you ___ to when I saw you yesterday? [talk]",
    "correct_answer": "were;talking",
    "suggest_answer": "talk",
    "explanation": "Question form with 'who' in Past Continuous.",
    "difficulty": "Medium",
    "topic_id": 6
  },
  {
    "id": 21,
    "question_type": "fill_blank",
    "question_text": "While the committee ___ the proposal, tensions ___. [discuss;escalate]",
    "correct_answer": "was discussing;escalated",
    "suggest_answer": "discuss;escalate",
    "explanation": "Past Continuous (discussing) with interrupting Past Simple (escalated).",
    "difficulty": "Hard",
    "topic_id": 6
  },
  {
    "id": 22,
    "question_type": "fill_blank",
    "question_text": "As the negotiations ___, both parties ___ for compromise. [proceed;strive]",
    "correct_answer": "were proceeding;were striving",
    "suggest_answer": "proceed;strive",
    "explanation": "Two simultaneous Past Continuous actions in complex sentence.",
    "difficulty": "Hard",
    "topic_id": 6
  },
  {
    "id": 23,
    "question_type": "fill_blank",
    "question_text": "The scientist ___ not ___ aware of the development occurring nearby. [be]",
    "correct_answer": "was;being",
    "suggest_answer": "be",
    "explanation": "Negative Past Continuous with 'being' (rarely used form for emphasis).",
    "difficulty": "Hard",
    "topic_id": 6
  },
  {
    "id": 24,
    "question_type": "fill_blank",
    "question_text": "While the storm ___ outside, the residents ___ supplies. [rage;stockpile]",
    "correct_answer": "was raging;were stockpiling",
    "suggest_answer": "rage;stockpile",
    "explanation": "Two simultaneous actions, one interrupted by the other contextually.",
    "difficulty": "Hard",
    "topic_id": 6
  },
  {
    "id": 25,
    "question_type": "fill_blank",
    "question_text": "The authorities ___ the situation carefully as it ___ more complex. [monitor;become]",
    "correct_answer": "were monitoring;became",
    "suggest_answer": "monitor;become",
    "explanation": "Past Continuous (monitoring) with Past Simple (became).",
    "difficulty": "Hard",
    "topic_id": 6
  },
  {
    "id": 26,
    "question_type": "fill_blank",
    "question_text": "While we ___ about the incident, the police ___ their investigation. [debate;intensify]",
    "correct_answer": "were debating;intensified",
    "suggest_answer": "debate;intensify",
    "explanation": "Two temporal actions - one continuous, one completed.",
    "difficulty": "Hard",
    "topic_id": 6
  },
  {
    "id": 27,
    "question_type": "fill_blank",
    "question_text": "The team ___ new strategies while competitors ___ ahead. [devise;pull]",
    "correct_answer": "were devising;were pulling",
    "suggest_answer": "devise;pull",
    "explanation": "Two simultaneous ongoing actions in Past Continuous.",
    "difficulty": "Hard",
    "topic_id": 6
  },
  {
    "id": 28,
    "question_type": "fill_blank",
    "question_text": "As the documentary ___, viewers ___ to understand the implications. [unfold;begin]",
    "correct_answer": "was unfolding;were beginning",
    "suggest_answer": "unfold;begin",
    "explanation": "Past Continuous with 'as' clause showing simultaneity.",
    "difficulty": "Hard",
    "topic_id": 6
  },
  {
    "id": 29,
    "question_type": "fill_blank",
    "question_text": "The activists ___ not ___ any support when the movement ___. [receive;gain momentum]",
    "correct_answer": "were;receiving;gained",
    "suggest_answer": "not;receive;gain momentum",
    "explanation": "Complex sentence with negative Past Continuous and Past Simple.",
    "difficulty": "Hard",
    "topic_id": 6
  },
  {
    "id": 30,
    "question_type": "fill_blank",
    "question_text": "What ___ the engineers ___ when the structural failure ___? [design;occur]",
    "correct_answer": "were;designing;occurred",
    "suggest_answer": "design;occur",
    "explanation": "Question with Past Continuous and interrupting Past Simple.",
    "difficulty": "Hard",
    "topic_id": 6
  },
  {
    "id": 31,
    "question_type": "multiple_choice",
    "question_text": "I ___ when you called yesterday.",
    "correct_answer": "was sleeping",
    "difficulty": "Easy",
    "explanation": "Past Continuous for action in progress at past time. 'I was sleeping'.",
    "options": [
      {"id": 311, "option_text": "slept", "is_correct": 0, "question_id": 31},
      {"id": 312, "option_text": "was sleeping", "is_correct": 1, "question_id": 31},
      {"id": 313, "option_text": "am sleeping", "is_correct": 0, "question_id": 31},
      {"id": 314, "option_text": "have slept", "is_correct": 0, "question_id": 31}
    ],
    "topic_id": 6
  },
  {
    "id": 32,
    "question_type": "multiple_choice",
    "question_text": "She ___ a book when I visited.",
    "correct_answer": "was reading",
    "difficulty": "Easy",
    "explanation": "Past Continuous describes ongoing action at a specific past time.",
    "options": [
      {"id": 321, "option_text": "read", "is_correct": 0, "question_id": 32},
      {"id": 322, "option_text": "was reading", "is_correct": 1, "question_id": 32},
      {"id": 323, "option_text": "has read", "is_correct": 0, "question_id": 32},
      {"id": 324, "option_text": "reads", "is_correct": 0, "question_id": 32}
    ],
    "topic_id": 6
  },
  {
    "id": 33,
    "question_type": "multiple_choice",
    "question_text": "They ___ in the park when it started raining.",
    "correct_answer": "were playing",
    "difficulty": "Easy",
    "explanation": "Plural subject in Past Continuous. Interrupted action.",
    "options": [
      {"id": 331, "option_text": "played", "is_correct": 0, "question_id": 33},
      {"id": 332, "option_text": "were playing", "is_correct": 1, "question_id": 33},
      {"id": 333, "option_text": "have been playing", "is_correct": 0, "question_id": 33},
      {"id": 334, "option_text": "are playing", "is_correct": 0, "question_id": 33}
    ],
    "topic_id": 6
  },
  {
    "id": 34,
    "question_type": "multiple_choice",
    "question_text": "He ___ TV when the power went out.",
    "correct_answer": "was watching",
    "difficulty": "Easy",
    "explanation": "Singular subject in Past Continuous for action interrupted.",
    "options": [
      {"id": 341, "option_text": "watched", "is_correct": 0, "question_id": 34},
      {"id": 342, "option_text": "was watching", "is_correct": 1, "question_id": 34},
      {"id": 343, "option_text": "has watched", "is_correct": 0, "question_id": 34},
      {"id": 344, "option_text": "watches", "is_correct": 0, "question_id": 34}
    ],
    "topic_id": 6
  },
  {
    "id": 35,
    "question_type": "multiple_choice",
    "question_text": "It ___ when we arrived at the airport.",
    "correct_answer": "was raining",
    "difficulty": "Easy",
    "explanation": "Past Continuous for weather condition at a past time.",
    "options": [
      {"id": 351, "option_text": "rained", "is_correct": 0, "question_id": 35},
      {"id": 352, "option_text": "was raining", "is_correct": 1, "question_id": 35},
      {"id": 353, "option_text": "has rained", "is_correct": 0, "question_id": 35},
      {"id": 354, "option_text": "rains", "is_correct": 0, "question_id": 35}
    ],
    "topic_id": 6
  },
  {
    "id": 36,
    "question_type": "multiple_choice",
    "question_text": "The children ___ dinner when their father came home.",
    "correct_answer": "were having",
    "difficulty": "Easy",
    "explanation": "Plural noun in Past Continuous describes ongoing meal.",
    "options": [
      {"id": 361, "option_text": "had", "is_correct": 0, "question_id": 36},
      {"id": 362, "option_text": "were having", "is_correct": 1, "question_id": 36},
      {"id": 363, "option_text": "have had", "is_correct": 0, "question_id": 36},
      {"id": 364, "option_text": "are having", "is_correct": 0, "question_id": 36}
    ],
    "topic_id": 6
  },
  {
    "id": 37,
    "question_type": "multiple_choice",
    "question_text": "I ___ my homework at 7 PM yesterday.",
    "correct_answer": "was doing",
    "difficulty": "Easy",
    "explanation": "Singular subject at specific past time in Past Continuous.",
    "options": [
      {"id": 371, "option_text": "did", "is_correct": 0, "question_id": 37},
      {"id": 372, "option_text": "was doing", "is_correct": 1, "question_id": 37},
      {"id": 373, "option_text": "have done", "is_correct": 0, "question_id": 37},
      {"id": 374, "option_text": "am doing", "is_correct": 0, "question_id": 37}
    ],
    "topic_id": 6
  },
  {
    "id": 38,
    "question_type": "multiple_choice",
    "question_text": "She ___ in the garden when the accident happened.",
    "correct_answer": "was working",
    "difficulty": "Easy",
    "explanation": "Singular subject interrupted by another past event.",
    "options": [
      {"id": 381, "option_text": "worked", "is_correct": 0, "question_id": 38},
      {"id": 382, "option_text": "was working", "is_correct": 1, "question_id": 38},
      {"id": 383, "option_text": "has worked", "is_correct": 0, "question_id": 38},
      {"id": 384, "option_text": "works", "is_correct": 0, "question_id": 38}
    ],
    "topic_id": 6
  },
  {
    "id": 39,
    "question_type": "multiple_choice",
    "question_text": "We ___ to music when you knocked on the door.",
    "correct_answer": "were listening",
    "difficulty": "Easy",
    "explanation": "Plural subject in Past Continuous interrupted by past action.",
    "options": [
      {"id": 391, "option_text": "listened", "is_correct": 0, "question_id": 39},
      {"id": 392, "option_text": "were listening", "is_correct": 1, "question_id": 39},
      {"id": 393, "option_text": "have listened", "is_correct": 0, "question_id": 39},
      {"id": 394, "option_text": "are listening", "is_correct": 0, "question_id": 39}
    ],
    "topic_id": 6
  },
  {
    "id": 40,
    "question_type": "multiple_choice",
    "question_text": "The dog ___ loudly all night.",
    "correct_answer": "was barking",
    "difficulty": "Easy",
    "explanation": "Singular subject for continuous action over duration.",
    "options": [
      {"id": 401, "option_text": "barked", "is_correct": 0, "question_id": 40},
      {"id": 402, "option_text": "was barking", "is_correct": 1, "question_id": 40},
      {"id": 403, "option_text": "has barked", "is_correct": 0, "question_id": 40},
      {"id": 404, "option_text": "barks", "is_correct": 0, "question_id": 40}
    ],
    "topic_id": 6
  },
  {
    "id": 41,
    "question_type": "multiple_choice",
    "question_text": "What ___ you ___ at 5 PM yesterday?",
    "correct_answer": "were;doing",
    "difficulty": "Easy",
    "explanation": "Question form of Past Continuous. Structure: What were you doing?",
    "options": [
      {"id": 411, "option_text": "did;do", "is_correct": 0, "question_id": 41},
      {"id": 412, "option_text": "were;doing", "is_correct": 1, "question_id": 41},
      {"id": 413, "option_text": "are;doing", "is_correct": 0, "question_id": 41},
      {"id": 414, "option_text": "have;done", "is_correct": 0, "question_id": 41}
    ],
    "topic_id": 6
  },
  {
    "id": 42,
    "question_type": "multiple_choice",
    "question_text": "The cat ___ on the windowsill when I arrived home.",
    "correct_answer": "was sitting",
    "difficulty": "Easy",
    "explanation": "Singular subject in Past Continuous describes stationary action.",
    "options": [
      {"id": 421, "option_text": "sat", "is_correct": 0, "question_id": 42},
      {"id": 422, "option_text": "was sitting", "is_correct": 1, "question_id": 42},
      {"id": 423, "option_text": "has sat", "is_correct": 0, "question_id": 42},
      {"id": 424, "option_text": "sits", "is_correct": 0, "question_id": 42}
    ],
    "topic_id": 6
  },
  {
    "id": 43,
    "question_type": "multiple_choice",
    "question_text": "The students ___ the lecture when the fire alarm rang.",
    "correct_answer": "were attending",
    "difficulty": "Easy",
    "explanation": "Plural noun in Past Continuous describes action interrupted.",
    "options": [
      {"id": 431, "option_text": "attended", "is_correct": 0, "question_id": 43},
      {"id": 432, "option_text": "were attending", "is_correct": 1, "question_id": 43},
      {"id": 433, "option_text": "have attended", "is_correct": 0, "question_id": 43},
      {"id": 434, "option_text": "are attending", "is_correct": 0, "question_id": 43}
    ],
    "topic_id": 6
  },
  {
    "id": 44,
    "question_type": "multiple_choice",
    "question_text": "I ___ not ___ the film when you arrived.",
    "correct_answer": "was;watching",
    "difficulty": "Easy",
    "explanation": "Negative Past Continuous form. 'I was not watching' or 'I wasn't watching'.",
    "options": [
      {"id": 441, "option_text": "did;watch", "is_correct": 0, "question_id": 44},
      {"id": 442, "option_text": "was;watching", "is_correct": 1, "question_id": 44},
      {"id": 443, "option_text": "have;watched", "is_correct": 0, "question_id": 44},
      {"id": 444, "option_text": "am;watching", "is_correct": 0, "question_id": 44}
    ],
    "topic_id": 6
  },
  {
    "id": 45,
    "question_type": "multiple_choice",
    "question_text": "They ___ the game on television when the match ended.",
    "correct_answer": "were watching",
    "difficulty": "Easy",
    "explanation": "Plural subject in Past Continuous for ongoing television viewing.",
    "options": [
      {"id": 451, "option_text": "watched", "is_correct": 0, "question_id": 45},
      {"id": 452, "option_text": "were watching", "is_correct": 1, "question_id": 45},
      {"id": 453, "option_text": "have watched", "is_correct": 0, "question_id": 45},
      {"id": 454, "option_text": "are watching", "is_correct": 0, "question_id": 45}
    ],
    "topic_id": 6
  },
  {
    "id": 46,
    "question_type": "multiple_choice",
    "question_text": "She ___ the piano when the guests arrived.",
    "correct_answer": "was playing",
    "difficulty": "Easy",
    "explanation": "Singular subject in Past Continuous for music performance.",
    "options": [
      {"id": 461, "option_text": "played", "is_correct": 0, "question_id": 46},
      {"id": 462, "option_text": "was playing", "is_correct": 1, "question_id": 46},
      {"id": 463, "option_text": "has played", "is_correct": 0, "question_id": 46},
      {"id": 464, "option_text": "plays", "is_correct": 0, "question_id": 46}
    ],
    "topic_id": 6
  },
  {
    "id": 47,
    "question_type": "multiple_choice",
    "question_text": "The workers ___ the building when the storm hit.",
    "correct_answer": "were constructing",
    "difficulty": "Easy",
    "explanation": "Plural noun in Past Continuous for construction action.",
    "options": [
      {"id": 471, "option_text": "constructed", "is_correct": 0, "question_id": 47},
      {"id": 472, "option_text": "were constructing", "is_correct": 1, "question_id": 47},
      {"id": 473, "option_text": "have constructed", "is_correct": 0, "question_id": 47},
      {"id": 474, "option_text": "are constructing", "is_correct": 0, "question_id": 47}
    ],
    "topic_id": 6
  },
  {
    "id": 48,
    "question_type": "multiple_choice",
    "question_text": "He ___ the mail when the phone rang.",
    "correct_answer": "was checking",
    "difficulty": "Easy",
    "explanation": "Singular subject in Past Continuous interrupted by another event.",
    "options": [
      {"id": 481, "option_text": "checked", "is_correct": 0, "question_id": 48},
      {"id": 482, "option_text": "was checking", "is_correct": 1, "question_id": 48},
      {"id": 483, "option_text": "has checked", "is_correct": 0, "question_id": 48},
      {"id": 484, "option_text": "checks", "is_correct": 0, "question_id": 48}
    ],
    "topic_id": 6
  },
  {
    "id": 49,
    "question_type": "multiple_choice",
    "question_text": "We ___ the city when the earthquake occurred.",
    "correct_answer": "were exploring",
    "difficulty": "Easy",
    "explanation": "Plural subject in Past Continuous during exploration.",
    "options": [
      {"id": 491, "option_text": "explored", "is_correct": 0, "question_id": 49},
      {"id": 492, "option_text": "were exploring", "is_correct": 1, "question_id": 49},
      {"id": 493, "option_text": "have explored", "is_correct": 0, "question_id": 49},
      {"id": 494, "option_text": "are exploring", "is_correct": 0, "question_id": 49}
    ],
    "topic_id": 6
  },
  {
    "id": 50,
    "question_type": "multiple_choice",
    "question_text": "The baby ___ when the loud noise startled it.",
    "correct_answer": "was sleeping",
    "difficulty": "Easy",
    "explanation": "Singular subject in Past Continuous for infant sleep interrupted.",
    "options": [
      {"id": 501, "option_text": "slept", "is_correct": 0, "question_id": 50},
      {"id": 502, "option_text": "was sleeping", "is_correct": 1, "question_id": 50},
      {"id": 503, "option_text": "has slept", "is_correct": 0, "question_id": 50},
      {"id": 504, "option_text": "sleeps", "is_correct": 0, "question_id": 50}
    ],
    "topic_id": 6
  },
  {
    "id": 51,
    "question_type": "multiple_choice",
    "question_text": "While I ___ for the bus, it suddenly started raining.",
    "correct_answer": "was waiting",
    "difficulty": "Medium",
    "explanation": "Past Continuous with 'while' clause showing duration when another event occurred.",
    "options": [
      {"id": 511, "option_text": "waited", "is_correct": 0, "question_id": 51},
      {"id": 512, "option_text": "was waiting", "is_correct": 1, "question_id": 51},
      {"id": 513, "option_text": "have been waiting", "is_correct": 0, "question_id": 51},
      {"id": 514, "option_text": "am waiting", "is_correct": 0, "question_id": 51}
    ],
    "topic_id": 6
  },
  {
    "id": 52,
    "question_type": "multiple_choice",
    "question_text": "The committee ___ the proposal when an urgent matter interrupted.",
    "correct_answer": "was reviewing",
    "difficulty": "Medium",
    "explanation": "Singular collective noun in Past Continuous.",
    "options": [
      {"id": 521, "option_text": "reviewed", "is_correct": 0, "question_id": 52},
      {"id": 522, "option_text": "was reviewing", "is_correct": 1, "question_id": 52},
      {"id": 523, "option_text": "have been reviewing", "is_correct": 0, "question_id": 52},
      {"id": 524, "option_text": "is reviewing", "is_correct": 0, "question_id": 52}
    ],
    "topic_id": 6
  },
  {
    "id": 53,
    "question_type": "multiple_choice",
    "question_text": "They ___ not ___ any progress when the project was cancelled.",
    "correct_answer": "were;making",
    "difficulty": "Medium",
    "explanation": "Negative Past Continuous. Two-word answer required.",
    "options": [
      {"id": 531, "option_text": "did;make", "is_correct": 0, "question_id": 53},
      {"id": 532, "option_text": "were;making", "is_correct": 1, "question_id": 53},
      {"id": 533, "option_text": "have;made", "is_correct": 0, "question_id": 53},
      {"id": 534, "option_text": "are;making", "is_correct": 0, "question_id": 534}
    ],
    "topic_id": 6
  },
  {
    "id": 54,
    "question_type": "multiple_choice",
    "question_text": "As the negotiations ___, both sides ___ compromise.",
    "correct_answer": "proceeded;sought",
    "difficulty": "Medium",
    "explanation": "Past Continuous with concurrent Past Simple showing parallel actions.",
    "options": [
      {"id": 541, "option_text": "proceeded;sought", "is_correct": 1, "question_id": 54},
      {"id": 542, "option_text": "were proceeding;were seeking", "is_correct": 0, "question_id": 54},
      {"id": 543, "option_text": "had proceeded;had sought", "is_correct": 0, "question_id": 54},
      {"id": 544, "option_text": "proceed;seek", "is_correct": 0, "question_id": 54}
    ],
    "topic_id": 6
  },
  {
    "id": 55,
    "question_type": "multiple_choice",
    "question_text": "What ___ the researchers ___ when the breakthrough occurred?",
    "correct_answer": "were;investigating",
    "difficulty": "Medium",
    "explanation": "Question form of Past Continuous with 'what'. Two-word answer.",
    "options": [
      {"id": 551, "option_text": "did;investigate", "is_correct": 0, "question_id": 55},
      {"id": 552, "option_text": "were;investigating", "is_correct": 1, "question_id": 55},
      {"id": 553, "option_text": "have;investigated", "is_correct": 0, "question_id": 55},
      {"id": 554, "option_text": "are;investigating", "is_correct": 0, "question_id": 55}
    ],
    "topic_id": 6
  },
  {
    "id": 56,
    "question_type": "multiple_choice",
    "question_text": "The band ___ intensely when the audience suddenly rushed the stage.",
    "correct_answer": "was performing",
    "difficulty": "Medium",
    "explanation": "Singular collective noun (band) in Past Continuous.",
    "options": [
      {"id": 561, "option_text": "performed", "is_correct": 0, "question_id": 56},
      {"id": 562, "option_text": "was performing", "is_correct": 1, "question_id": 56},
      {"id": 563, "option_text": "have been performing", "is_correct": 0, "question_id": 56},
      {"id": 564, "option_text": "is performing", "is_correct": 0, "question_id": 56}
    ],
    "topic_id": 6
  },
  {
    "id": 57,
    "question_type": "multiple_choice",
    "question_text": "She ___ the suspect when he suddenly fled.",
    "correct_answer": "was questioning",
    "difficulty": "Medium",
    "explanation": "Singular subject in Past Continuous interrupted by sudden action.",
    "options": [
      {"id": 571, "option_text": "questioned", "is_correct": 0, "question_id": 57},
      {"id": 572, "option_text": "was questioning", "is_correct": 1, "question_id": 57},
      {"id": 573, "option_text": "have been questioning", "is_correct": 0, "question_id": 57},
      {"id": 574, "option_text": "is questioning", "is_correct": 0, "question_id": 57}
    ],
    "topic_id": 6
  },
  {
    "id": 58,
    "question_type": "multiple_choice",
    "question_text": "We ___ our supplies when the unexpected visitors arrived.",
    "correct_answer": "were organizing",
    "difficulty": "Medium",
    "explanation": "Plural subject in Past Continuous during task.",
    "options": [
      {"id": 581, "option_text": "organized", "is_correct": 0, "question_id": 58},
      {"id": 582, "option_text": "were organizing", "is_correct": 1, "question_id": 58},
      {"id": 583, "option_text": "have been organizing", "is_correct": 0, "question_id": 58},
      {"id": 584, "option_text": "are organizing", "is_correct": 0, "question_id": 58}
    ],
    "topic_id": 6
  },
  {
    "id": 59,
    "question_type": "multiple_choice",
    "question_text": "While the surgeon ___ the operation, complications ___.",
    "correct_answer": "was performing;arose",
    "difficulty": "Medium",
    "explanation": "Past Continuous interrupted by Past Simple action.",
    "options": [
      {"id": 591, "option_text": "was performing;arose", "is_correct": 1, "question_id": 59},
      {"id": 592, "option_text": "performed;arose", "is_correct": 0, "question_id": 59},
      {"id": 593, "option_text": "was performing;were arising", "is_correct": 0, "question_id": 59},
      {"id": 594, "option_text": "performs;arise", "is_correct": 0, "question_id": 59}
    ],
    "topic_id": 6
  },
  {
    "id": 60,
    "question_type": "multiple_choice",
    "question_text": "The tourists ___ the museum when the guide suddenly stopped.",
    "correct_answer": "were touring",
    "difficulty": "Medium",
    "explanation": "Plural noun in Past Continuous for group activity.",
    "options": [
      {"id": 601, "option_text": "toured", "is_correct": 0, "question_id": 60},
      {"id": 602, "option_text": "were touring", "is_correct": 1, "question_id": 60},
      {"id": 603, "option_text": "have been touring", "is_correct": 0, "question_id": 60},
      {"id": 604, "option_text": "are touring", "is_correct": 0, "question_id": 60}
    ],
    "topic_id": 6
  },
  {
    "id": 61,
    "question_type": "multiple_choice",
    "question_text": "I ___ not ___ much attention during the lecture.",
    "correct_answer": "was;paying",
    "difficulty": "Medium",
    "explanation": "Negative Past Continuous form.",
    "options": [
      {"id": 611, "option_text": "did;pay", "is_correct": 0, "question_id": 61},
      {"id": 612, "option_text": "was;paying", "is_correct": 1, "question_id": 61},
      {"id": 613, "option_text": "have;paid", "is_correct": 0, "question_id": 61},
      {"id": 614, "option_text": "am;paying", "is_correct": 0, "question_id": 61}
    ],
    "topic_id": 6
  },
  {
    "id": 62,
    "question_type": "multiple_choice",
    "question_text": "The engineers ___ the bridge when the accident occurred.",
    "correct_answer": "were inspecting",
    "difficulty": "Medium",
    "explanation": "Plural noun in Past Continuous for inspection activity.",
    "options": [
      {"id": 621, "option_text": "inspected", "is_correct": 0, "question_id": 62},
      {"id": 622, "option_text": "were inspecting", "is_correct": 1, "question_id": 62},
      {"id": 623, "option_text": "have been inspecting", "is_correct": 0, "question_id": 62},
      {"id": 624, "option_text": "are inspecting", "is_correct": 0, "question_id": 62}
    ],
    "topic_id": 6
  },
  {
    "id": 63,
    "question_type": "multiple_choice",
    "question_text": "He ___ a letter when the fire alarm sounded.",
    "correct_answer": "was writing",
    "difficulty": "Medium",
    "explanation": "Singular subject in Past Continuous interrupted by urgent event.",
    "options": [
      {"id": 631, "option_text": "wrote", "is_correct": 0, "question_id": 63},
      {"id": 632, "option_text": "was writing", "is_correct": 1, "question_id": 63},
      {"id": 633, "option_text": "has been writing", "is_correct": 0, "question_id": 63},
      {"id": 634, "option_text": "is writing", "is_correct": 0, "question_id": 63}
    ],
    "topic_id": 6
  },
  {
    "id": 64,
    "question_type": "multiple_choice",
    "question_text": "The employees ___ their work when the CEO entered.",
    "correct_answer": "were resuming",
    "difficulty": "Medium",
    "explanation": "Plural noun in Past Continuous for workplace action.",
    "options": [
      {"id": 641, "option_text": "resumed", "is_correct": 0, "question_id": 64},
      {"id": 642, "option_text": "were resuming", "is_correct": 1, "question_id": 64},
      {"id": 643, "option_text": "have been resuming", "is_correct": 0, "question_id": 64},
      {"id": 644, "option_text": "are resuming", "is_correct": 0, "question_id": 64}
    ],
    "topic_id": 6
  },
  {
    "id": 65,
    "question_type": "multiple_choice",
    "question_text": "The patient ___ when the doctor arrived.",
    "correct_answer": "was recovering",
    "difficulty": "Medium",
    "explanation": "Singular subject in Past Continuous for medical recovery.",
    "options": [
      {"id": 651, "option_text": "recovered", "is_correct": 0, "question_id": 65},
      {"id": 652, "option_text": "was recovering", "is_correct": 1, "question_id": 65},
      {"id": 653, "option_text": "has been recovering", "is_correct": 0, "question_id": 653},
      {"id": 654, "option_text": "is recovering", "is_correct": 0, "question_id": 654}
    ],
    "topic_id": 6
  },
  {
    "id": 66,
    "question_type": "multiple_choice",
    "question_text": "They ___ a contract when the dispute ___.",
    "correct_answer": "were drafting;emerged",
    "difficulty": "Medium",
    "explanation": "Past Continuous interrupted by Past Simple.",
    "options": [
      {"id": 661, "option_text": "were drafting;emerged", "is_correct": 1, "question_id": 66},
      {"id": 662, "option_text": "drafted;emerged", "is_correct": 0, "question_id": 66},
      {"id": 663, "option_text": "were drafting;was emerging", "is_correct": 0, "question_id": 66},
      {"id": 664, "option_text": "draft;emerges", "is_correct": 0, "question_id": 664}
    ],
    "topic_id": 6
  },
  {
    "id": 67,
    "question_type": "multiple_choice",
    "question_text": "Who ___ you ___ to when I called?",
    "correct_answer": "were;talking",
    "difficulty": "Medium",
    "explanation": "Question with 'who' in Past Continuous.",
    "options": [
      {"id": 671, "option_text": "did;talk", "is_correct": 0, "question_id": 67},
      {"id": 672, "option_text": "were;talking", "is_correct": 1, "question_id": 67},
      {"id": 673, "option_text": "have;talked", "is_correct": 0, "question_id": 67},
      {"id": 674, "option_text": "are;talking", "is_correct": 0, "question_id": 67}
    ],
    "topic_id": 6
  },
  {
    "id": 68,
    "question_type": "multiple_choice",
    "question_text": "The orchestra ___ beautifully when the conductor suddenly stopped.",
    "correct_answer": "was playing",
    "difficulty": "Medium",
    "explanation": "Singular collective noun in Past Continuous.",
    "options": [
      {"id": 681, "option_text": "played", "is_correct": 0, "question_id": 68},
      {"id": 682, "option_text": "was playing", "is_correct": 1, "question_id": 68},
      {"id": 683, "option_text": "have been playing", "is_correct": 0, "question_id": 68},
      {"id": 684, "option_text": "is playing", "is_correct": 0, "question_id": 68}
    ],
    "topic_id": 6
  },
  {
    "id": 69,
    "question_type": "multiple_choice",
    "question_text": "The detective ___ the case when new evidence came to light.",
    "correct_answer": "was investigating",
    "difficulty": "Medium",
    "explanation": "Singular subject in Past Continuous for investigative work.",
    "options": [
      {"id": 691, "option_text": "investigated", "is_correct": 0, "question_id": 69},
      {"id": 692, "option_text": "was investigating", "is_correct": 1, "question_id": 69},
      {"id": 693, "option_text": "has been investigating", "is_correct": 0, "question_id": 69},
      {"id": 694, "option_text": "is investigating", "is_correct": 0, "question_id": 69}
    ],
    "topic_id": 6
  },
  {
    "id": 70,
    "question_type": "multiple_choice",
    "question_text": "We ___ about the issue when the decision was made.",
    "correct_answer": "were debating",
    "difficulty": "Medium",
    "explanation": "Plural subject in Past Continuous for discussion.",
    "options": [
      {"id": 701, "option_text": "debated", "is_correct": 0, "question_id": 70},
      {"id": 702, "option_text": "were debating", "is_correct": 1, "question_id": 70},
      {"id": 703, "option_text": "have been debating", "is_correct": 0, "question_id": 70},
      {"id": 704, "option_text": "are debating", "is_correct": 0, "question_id": 70}
    ],
    "topic_id": 6
  },
  {
    "id": 71,
    "question_type": "multiple_choice",
    "question_text": "The swimmers ___ across the lake when the storm hit.",
    "correct_answer": "were racing",
    "difficulty": "Medium",
    "explanation": "Plural noun in Past Continuous for physical competition.",
    "options": [
      {"id": 711, "option_text": "raced", "is_correct": 0, "question_id": 71},
      {"id": 712, "option_text": "were racing", "is_correct": 1, "question_id": 71},
      {"id": 713, "option_text": "have been racing", "is_correct": 0, "question_id": 71},
      {"id": 714, "option_text": "are racing", "is_correct": 0, "question_id": 71}
    ],
    "topic_id": 6
  },
  {
    "id": 72,
    "question_type": "multiple_choice",
    "question_text": "He ___ not ___ any notice when the warning was issued.",
    "correct_answer": "was;paying",
    "difficulty": "Medium",
    "explanation": "Negative Past Continuous.",
    "options": [
      {"id": 721, "option_text": "did;pay", "is_correct": 0, "question_id": 72},
      {"id": 722, "option_text": "was;paying", "is_correct": 1, "question_id": 72},
      {"id": 723, "option_text": "have;paid", "is_correct": 0, "question_id": 72},
      {"id": 724, "option_text": "am;paying", "is_correct": 0, "question_id": 72}
    ],
    "topic_id": 6
  },
  {
    "id": 73,
    "question_type": "multiple_choice",
    "question_text": "The activists ___ support when the backlash ___.",
    "correct_answer": "were gathering;intensified",
    "difficulty": "Medium",
    "explanation": "Past Continuous interrupted by Past Simple.",
    "options": [
      {"id": 731, "option_text": "were gathering;intensified", "is_correct": 1, "question_id": 73},
      {"id": 732, "option_text": "gathered;intensified", "is_correct": 0, "question_id": 73},
      {"id": 733, "option_text": "were gathering;were intensifying", "is_correct": 0, "question_id": 73},
      {"id": 734, "option_text": "gather;intensify", "is_correct": 0, "question_id": 73}
    ],
    "topic_id": 6
  },
  {
    "id": 74,
    "question_type": "multiple_choice",
    "question_text": "The children ___ in the park when their parents called.",
    "correct_answer": "were playing",
    "difficulty": "Medium",
    "explanation": "Plural noun in Past Continuous.",
    "options": [
      {"id": 741, "option_text": "played", "is_correct": 0, "question_id": 74},
      {"id": 742, "option_text": "were playing", "is_correct": 1, "question_id": 74},
      {"id": 743, "option_text": "have been playing", "is_correct": 0, "question_id": 74},
      {"id": 744, "option_text": "are playing", "is_correct": 0, "question_id": 74}
    ],
    "topic_id": 6
  },
  {
    "id": 75,
    "question_type": "multiple_choice",
    "question_text": "While the technicians ___ the system, the failure ___.",
    "correct_answer": "were updating;occurred",
    "difficulty": "Medium",
    "explanation": "Past Continuous interrupted by Past Simple.",
    "options": [
      {"id": 751, "option_text": "were updating;occurred", "is_correct": 1, "question_id": 75},
      {"id": 752, "option_text": "updated;occurred", "is_correct": 0, "question_id": 75},
      {"id": 753, "option_text": "were updating;were occurring", "is_correct": 0, "question_id": 75},
      {"id": 754, "option_text": "update;occurs", "is_correct": 0, "question_id": 75}
    ],
    "topic_id": 6
  },
  {
    "id": 76,
    "question_type": "multiple_choice",
    "question_text": "While the delegation ___ with officials, rumors ___ of a coup.",
    "correct_answer": "were negotiating;circulated",
    "difficulty": "Hard",
    "explanation": "Past Continuous with concurrent Past Simple in complex political context.",
    "options": [
      {"id": 761, "option_text": "were negotiating;circulated", "is_correct": 1, "question_id": 76},
      {"id": 762, "option_text": "negotiated;circulated", "is_correct": 0, "question_id": 76},
      {"id": 763, "option_text": "were negotiating;were circulating", "is_correct": 0, "question_id": 76},
      {"id": 764, "option_text": "negotiate;circulate", "is_correct": 0, "question_id": 76}
    ],
    "topic_id": 6
  },
  {
    "id": 77,
    "question_type": "multiple_choice",
    "question_text": "The corporation ___ its assets when investigators ___ them.",
    "correct_answer": "was liquidating;seized",
    "difficulty": "Hard",
    "explanation": "Past Continuous with interrupting Past Simple in legal context.",
    "options": [
      {"id": 771, "option_text": "was liquidating;seized", "is_correct": 1, "question_id": 77},
      {"id": 772, "option_text": "liquidated;seized", "is_correct": 0, "question_id": 77},
      {"id": 773, "option_text": "was liquidating;were seizing", "is_correct": 0, "question_id": 77},
      {"id": 774, "option_text": "liquidate;seize", "is_correct": 0, "question_id": 77}
    ],
    "topic_id": 6
  },
  {
    "id": 78,
    "question_type": "multiple_choice",
    "question_text": "As the trial ___ forward, evidence ___ its credibility.",
    "correct_answer": "proceeded;undermined",
    "difficulty": "Hard",
    "explanation": "Past Continuous with parallel Past Simple action.",
    "options": [
      {"id": 781, "option_text": "proceeded;undermined", "is_correct": 1, "question_id": 78},
      {"id": 782, "option_text": "was proceeding;was undermining", "is_correct": 0, "question_id": 78},
      {"id": 783, "option_text": "proceeds;undermines", "is_correct": 0, "question_id": 78},
      {"id": 784, "option_text": "had proceeded;had undermined", "is_correct": 0, "question_id": 78}
    ],
    "topic_id": 6
  },
  {
    "id": 79,
    "question_type": "multiple_choice",
    "question_text": "The regime ___ dissent when the uprising ___.",
    "correct_answer": "was suppressing;erupted",
    "difficulty": "Hard",
    "explanation": "Past Continuous describing oppressive action interrupted by revolution.",
    "options": [
      {"id": 791, "option_text": "was suppressing;erupted", "is_correct": 1, "question_id": 79},
      {"id": 792, "option_text": "suppressed;erupted", "is_correct": 0, "question_id": 79},
      {"id": 793, "option_text": "was suppressing;was erupting", "is_correct": 0, "question_id": 79},
      {"id": 794, "option_text": "suppress;erupt", "is_correct": 0, "question_id": 79}
    ],
    "topic_id": 6
  },
  {
    "id": 80,
    "question_type": "multiple_choice",
    "question_text": "The ecosystem ___ when human interference ___.",
    "correct_answer": "was deteriorating;accelerated",
    "difficulty": "Hard",
    "explanation": "Past Continuous environmental degradation with accelerating cause.",
    "options": [
      {"id": 801, "option_text": "was deteriorating;accelerated", "is_correct": 1, "question_id": 80},
      {"id": 802, "option_text": "deteriorated;accelerated", "is_correct": 0, "question_id": 80},
      {"id": 803, "option_text": "was deteriorating;was accelerating", "is_correct": 0, "question_id": 80},
      {"id": 804, "option_text": "deteriorate;accelerate", "is_correct": 0, "question_id": 80}
    ],
    "topic_id": 6
  },
  {
    "id": 81,
    "question_type": "multiple_choice",
    "question_text": "The institution ___ its mission when scandal ___.",
    "correct_answer": "was fulfilling;erupted",
    "difficulty": "Hard",
    "explanation": "Past Continuous organizational action interrupted by crisis.",
    "options": [
      {"id": 811, "option_text": "was fulfilling;erupted", "is_correct": 1, "question_id": 81},
      {"id": 812, "option_text": "fulfilled;erupted", "is_correct": 0, "question_id": 81},
      {"id": 813, "option_text": "was fulfilling;was erupting", "is_correct": 0, "question_id": 81},
      {"id": 814, "option_text": "fulfill;erupt", "is_correct": 0, "question_id": 81}
    ],
    "topic_id": 6
  },
  {
    "id": 82,
    "question_type": "multiple_choice",
    "question_text": "The movement ___ momentum when external forces ___.",
    "correct_answer": "was gaining;intervened",
    "difficulty": "Hard",
    "explanation": "Past Continuous social movement with external interference.",
    "options": [
      {"id": 821, "option_text": "was gaining;intervened", "is_correct": 1, "question_id": 82},
      {"id": 822, "option_text": "gained;intervened", "is_correct": 0, "question_id": 82},
      {"id": 823, "option_text": "was gaining;were intervening", "is_correct": 0, "question_id": 823},
      {"id": 824, "option_text": "gain;intervene", "is_correct": 0, "question_id": 824}
    ],
    "topic_id": 6
  },
  {
    "id": 83,
    "question_type": "multiple_choice",
    "question_text": "The technology ___ its dominance when new competitors ___.",
    "correct_answer": "was establishing;emerged",
    "difficulty": "Hard",
    "explanation": "Past Continuous market dominance with competitive disruption.",
    "options": [
      {"id": 831, "option_text": "was establishing;emerged", "is_correct": 1, "question_id": 83},
      {"id": 832, "option_text": "established;emerged", "is_correct": 0, "question_id": 83},
      {"id": 833, "option_text": "was establishing;were emerging", "is_correct": 0, "question_id": 83},
      {"id": 834, "option_text": "establish;emerge", "is_correct": 0, "question_id": 834}
    ],
    "topic_id": 6
  },
  {
    "id": 84,
    "question_type": "multiple_choice",
    "question_text": "The process ___ when a critical error ___.",
    "correct_answer": "was unfolding;manifested",
    "difficulty": "Hard",
    "explanation": "Past Continuous technical process with error occurrence.",
    "options": [
      {"id": 841, "option_text": "was unfolding;manifested", "is_correct": 1, "question_id": 84},
      {"id": 842, "option_text": "unfolded;manifested", "is_correct": 0, "question_id": 84},
      {"id": 843, "option_text": "was unfolding;was manifesting", "is_correct": 0, "question_id": 84},
      {"id": 844, "option_text": "unfold;manifest", "is_correct": 0, "question_id": 844}
    ],
    "topic_id": 6
  },
  {
    "id": 85,
    "question_type": "multiple_choice",
    "question_text": "The scenario ___ when assumptions ___.",
    "correct_answer": "was unraveling;collapsed",
    "difficulty": "Hard",
    "explanation": "Past Continuous scenario deterioration with foundational failure.",
    "options": [
      {"id": 851, "option_text": "was unraveling;collapsed", "is_correct": 1, "question_id": 85},
      {"id": 852, "option_text": "unraveled;collapsed", "is_correct": 0, "question_id": 85},
      {"id": 853, "option_text": "was unraveling;were collapsing", "is_correct": 0, "question_id": 85},
      {"id": 854, "option_text": "unravel;collapse", "is_correct": 0, "question_id": 854}
    ],
    "topic_id": 6
  },
  {
    "id": 86,
    "question_type": "multiple_choice",
    "question_text": "The strategy ___ coherence when circumstances ___.",
    "correct_answer": "was losing;shifted",
    "difficulty": "Hard",
    "explanation": "Past Continuous loss of strategic coherence with context change.",
    "options": [
      {"id": 861, "option_text": "was losing;shifted", "is_correct": 1, "question_id": 86},
      {"id": 862, "option_text": "lost;shifted", "is_correct": 0, "question_id": 86},
      {"id": 863, "option_text": "was losing;were shifting", "is_correct": 0, "question_id": 86},
      {"id": 864, "option_text": "lose;shift", "is_correct": 0, "question_id": 864}
    ],
    "topic_id": 6
  },
  {
    "id": 87,
    "question_type": "multiple_choice",
    "question_text": "The discussion ___ when the revelation ___.",
    "correct_answer": "was progressing;surfaced",
    "difficulty": "Hard",
    "explanation": "Past Continuous dialogue with unexpected information.",
    "options": [
      {"id": 871, "option_text": "was progressing;surfaced", "is_correct": 1, "question_id": 87},
      {"id": 872, "option_text": "progressed;surfaced", "is_correct": 0, "question_id": 87},
      {"id": 873, "option_text": "was progressing;were surfacing", "is_correct": 0, "question_id": 87},
      {"id": 874, "option_text": "progress;surface", "is_correct": 0, "question_id": 874}
    ],
    "topic_id": 6
  },
  {
    "id": 88,
    "question_type": "multiple_choice",
    "question_text": "The research ___ conclusions when funding ___.",
    "correct_answer": "was yielding;dried up",
    "difficulty": "Hard",
    "explanation": "Past Continuous research with resource cessation.",
    "options": [
      {"id": 881, "option_text": "was yielding;dried up", "is_correct": 1, "question_id": 88},
      {"id": 882, "option_text": "yielded;dried up", "is_correct": 0, "question_id": 88},
      {"id": 883, "option_text": "was yielding;were drying up", "is_correct": 0, "question_id": 88},
      {"id": 884, "option_text": "yield;dry up", "is_correct": 0, "question_id": 884}
    ],
    "topic_id": 6
  },
  {
    "id": 89,
    "question_type": "multiple_choice",
    "question_text": "The collaboration ___ when disagreement ___.",
    "correct_answer": "was flourishing;emerged",
    "difficulty": "Hard",
    "explanation": "Past Continuous partnership with conflict introduction.",
    "options": [
      {"id": 891, "option_text": "was flourishing;emerged", "is_correct": 1, "question_id": 89},
      {"id": 892, "option_text": "flourished;emerged", "is_correct": 0, "question_id": 89},
      {"id": 893, "option_text": "was flourishing;were emerging", "is_correct": 0, "question_id": 89},
      {"id": 894, "option_text": "flourish;emerge", "is_correct": 0, "question_id": 894}
    ],
    "topic_id": 6
  },
  {
    "id": 90,
    "question_type": "multiple_choice",
    "question_text": "The vision ___ clarity when details ___.",
    "correct_answer": "was gaining;crystallized",
    "difficulty": "Hard",
    "explanation": "Past Continuous vision refinement with detail specification.",
    "options": [
      {"id": 901, "option_text": "was gaining;crystallized", "is_correct": 1, "question_id": 90},
      {"id": 902, "option_text": "gained;crystallized", "is_correct": 0, "question_id": 90},
      {"id": 903, "option_text": "was gaining;were crystallizing", "is_correct": 0, "question_id": 90},
      {"id": 904, "option_text": "gain;crystallize", "is_correct": 0, "question_id": 904}
    ],
    "topic_id": 6
  },
  {
    "id": 91,
    "question_type": "multiple_choice",
    "question_text": "The atmosphere ___ tension when the announcement ___.",
    "correct_answer": "was building;approached",
    "difficulty": "Hard",
    "explanation": "Past Continuous environmental tension with approaching moment.",
    "options": [
      {"id": 911, "option_text": "was building;approached", "is_correct": 1, "question_id": 91},
      {"id": 912, "option_text": "built;approached", "is_correct": 0, "question_id": 91},
      {"id": 913, "option_text": "was building;was approaching", "is_correct": 0, "question_id": 91},
      {"id": 914, "option_text": "build;approach", "is_correct": 0, "question_id": 914}
    ],
    "topic_id": 6
  },
  {
    "id": 92,
    "question_type": "multiple_choice",
    "question_text": "The campaign ___ effectiveness when critics ___.",
    "correct_answer": "was losing;intensified",
    "difficulty": "Hard",
    "explanation": "Past Continuous campaign effectiveness with criticism escalation.",
    "options": [
      {"id": 921, "option_text": "was losing;intensified", "is_correct": 1, "question_id": 92},
      {"id": 922, "option_text": "lost;intensified", "is_correct": 0, "question_id": 92},
      {"id": 923, "option_text": "was losing;were intensifying", "is_correct": 0, "question_id": 92},
      {"id": 924, "option_text": "lose;intensify", "is_correct": 0, "question_id": 924}
    ],
    "topic_id": 6
  },
  {
    "id": 93,
    "question_type": "multiple_choice",
    "question_text": "The agreement ___ form when complications ___.",
    "correct_answer": "was taking;arose",
    "difficulty": "Hard",
    "explanation": "Past Continuous agreement formation with obstacle emergence.",
    "options": [
      {"id": 931, "option_text": "was taking;arose", "is_correct": 1, "question_id": 93},
      {"id": 932, "option_text": "took;arose", "is_correct": 0, "question_id": 93},
      {"id": 933, "option_text": "was taking;were arising", "is_correct": 0, "question_id": 93},
      {"id": 934, "option_text": "take;arise", "is_correct": 0, "question_id": 934}
    ],
    "topic_id": 6
  },
  {
    "id": 94,
    "question_type": "multiple_choice",
    "question_text": "The influence ___ when opposition ___.",
    "correct_answer": "was expanding;mobilized",
    "difficulty": "Hard",
    "explanation": "Past Continuous influence expansion with organized resistance.",
    "options": [
      {"id": 941, "option_text": "was expanding;mobilized", "is_correct": 1, "question_id": 94},
      {"id": 942, "option_text": "expanded;mobilized", "is_correct": 0, "question_id": 94},
      {"id": 943, "option_text": "was expanding;were mobilizing", "is_correct": 0, "question_id": 94},
      {"id": 944, "option_text": "expand;mobilize", "is_correct": 0, "question_id": 944}
    ],
    "topic_id": 6
  },
  {
    "id": 95,
    "question_type": "multiple_choice",
    "question_text": "The project ___ pace when resources ___.",
    "correct_answer": "was gaining;materialized",
    "difficulty": "Hard",
    "explanation": "Past Continuous project acceleration with resource availability.",
    "options": [
      {"id": 951, "option_text": "was gaining;materialized", "is_correct": 1, "question_id": 95},
      {"id": 952, "option_text": "gained;materialized", "is_correct": 0, "question_id": 95},
      {"id": 953, "option_text": "was gaining;were materializing", "is_correct": 0, "question_id": 95},
      {"id": 954, "option_text": "gain;materialize", "is_correct": 0, "question_id": 954}
    ],
    "topic_id": 6
  },
  {
    "id": 96,
    "question_type": "multiple_choice",
    "question_text": "The narrative ___ when the twist ___.",
    "correct_answer": "was unfolding;occurred",
    "difficulty": "Hard",
    "explanation": "Past Continuous story progression with surprising revelation.",
    "options": [
      {"id": 961, "option_text": "was unfolding;occurred", "is_correct": 1, "question_id": 96},
      {"id": 962, "option_text": "unfolded;occurred", "is_correct": 0, "question_id": 96},
      {"id": 963, "option_text": "was unfolding;was occurring", "is_correct": 0, "question_id": 96},
      {"id": 964, "option_text": "unfold;occur", "is_correct": 0, "question_id": 964}
    ],
    "topic_id": 6
  },
  {
    "id": 97,
    "question_type": "multiple_choice",
    "question_text": "The foundation ___ when the quake ___.",
    "correct_answer": "was settling;struck",
    "difficulty": "Hard",
    "explanation": "Past Continuous structural settling with seismic interruption.",
    "options": [
      {"id": 971, "option_text": "was settling;struck", "is_correct": 1, "question_id": 97},
      {"id": 972, "option_text": "settled;struck", "is_correct": 0, "question_id": 97},
      {"id": 973, "option_text": "was settling;were striking", "is_correct": 0, "question_id": 97},
      {"id": 974, "option_text": "settle;strike", "is_correct": 0, "question_id": 974}
    ],
    "topic_id": 6
  },
  {
    "id": 98,
    "question_type": "multiple_choice",
    "question_text": "The erosion ___ when intervention ___.",
    "correct_answer": "was accelerating;began",
    "difficulty": "Hard",
    "explanation": "Past Continuous environmental degradation with action initiation.",
    "options": [
      {"id": 981, "option_text": "was accelerating;began", "is_correct": 1, "question_id": 98},
      {"id": 982, "option_text": "accelerated;began", "is_correct": 0, "question_id": 98},
      {"id": 983, "option_text": "was accelerating;was beginning", "is_correct": 0, "question_id": 98},
      {"id": 984, "option_text": "accelerate;begin", "is_correct": 0, "question_id": 984}
    ],
    "topic_id": 6
  },
  {
    "id": 99,
    "question_type": "multiple_choice",
    "question_text": "The sentiment ___ when news ___.",
    "correct_answer": "was shifting;broke",
    "difficulty": "Hard",
    "explanation": "Past Continuous public opinion change with information dissemination.",
    "options": [
      {"id": 991, "option_text": "was shifting;broke", "is_correct": 1, "question_id": 99},
      {"id": 992, "option_text": "shifted;broke", "is_correct": 0, "question_id": 99},
      {"id": 993, "option_text": "was shifting;was breaking", "is_correct": 0, "question_id": 99},
      {"id": 994, "option_text": "shift;break", "is_correct": 0, "question_id": 994}
    ],
    "topic_id": 6
  },
  {
    "id": 100,
    "question_type": "multiple_choice",
    "question_text": "The momentum ___ when circumstances ___.",
    "correct_answer": "was building;transformed",
    "difficulty": "Hard",
    "explanation": "Past Continuous momentum development with context transformation.",
    "options": [
      {"id": 1001, "option_text": "was building;transformed", "is_correct": 1, "question_id": 100},
      {"id": 1002, "option_text": "built;transformed", "is_correct": 0, "question_id": 100},
      {"id": 1003, "option_text": "was building;were transforming", "is_correct": 0, "question_id": 100},
      {"id": 1004, "option_text": "build;transform", "is_correct": 0, "question_id": 1004}
    ],
    "topic_id": 6
  }
];

export default questions;
