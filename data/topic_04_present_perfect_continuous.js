const questions = [
  {
    "id": 1,
    "question_type": "fill_blank",
    "question_text": "I ___ here for two hours. [wait]",
    "correct_answer": "have been waiting",
    "suggest_answer": "wait",
    "explanation": "Present Perfect Continuous for an action that started in the past and continues to the present. Subject 'I' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 2,
    "question_type": "fill_blank",
    "question_text": "It ___ all day. [rain]",
    "correct_answer": "has been raining",
    "suggest_answer": "rain",
    "explanation": "Action started in the past and is likely still happening. Subject 'It' takes 'has'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 3,
    "question_type": "fill_blank",
    "question_text": "They ___ English for three years. [study]",
    "correct_answer": "have been studying",
    "suggest_answer": "study",
    "explanation": "Continuous action over a period. Subject 'They' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 4,
    "question_type": "fill_blank",
    "question_text": "She ___ at this company since 2020. [work]",
    "correct_answer": "has been working",
    "suggest_answer": "work",
    "explanation": "Continuous action. Subject 'She' takes 'has'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 5,
    "question_type": "fill_blank",
    "question_text": "We ___ football for hours. [play]",
    "correct_answer": "have been playing",
    "suggest_answer": "play",
    "explanation": "Action over a period. Subject 'We' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 6,
    "question_type": "fill_blank",
    "question_text": "He ___ for a long time. [sleep]",
    "correct_answer": "has been sleeping",
    "suggest_answer": "sleep",
    "explanation": "Continuous action. Subject 'He' takes 'has'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 7,
    "question_type": "fill_blank",
    "question_text": "I ___ unwell recently. [feel]",
    "correct_answer": "have been feeling",
    "suggest_answer": "feel",
    "explanation": "Describes a recent continuous state. Subject 'I' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 8,
    "question_type": "fill_blank",
    "question_text": "She ___ all morning. [cook]",
    "correct_answer": "has been cooking",
    "suggest_answer": "cook",
    "explanation": "Continuous action with a present result (e.g., the kitchen is warm). Subject 'She' takes 'has'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 9,
    "question_type": "fill_blank",
    "question_text": "You ___ on the phone for ages. [talk]",
    "correct_answer": "have been talking",
    "suggest_answer": "talk",
    "explanation": "Continuous action over a period. Subject 'You' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 10,
    "question_type": "fill_blank",
    "question_text": "I ___ for my keys everywhere. [look]",
    "correct_answer": "have been looking",
    "suggest_answer": "look",
    "explanation": "Describes a search over a period. Subject 'I' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 11,
    "question_type": "fill_blank",
    "question_text": "It ___ since last night. [snow]",
    "correct_answer": "has been snowing",
    "suggest_answer": "snow",
    "explanation": "Continuous weather event. Subject 'It' takes 'has'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 12,
    "question_type": "fill_blank",
    "question_text": "We ___ for six hours. [drive]",
    "correct_answer": "have been driving",
    "suggest_answer": "drive",
    "explanation": "Continuous action over a period. Subject 'We' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 13,
    "question_type": "fill_blank",
    "question_text": "The baby ___. His eyes are red. [cry]",
    "correct_answer": "has been crying",
    "suggest_answer": "cry",
    "explanation": "Recent action with a visible result (red eyes). Subject 'The baby' takes 'has'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 14,
    "question_type": "fill_blank",
    "question_text": "They ___ TV all afternoon. [watch]",
    "correct_answer": "have been watching",
    "suggest_answer": "watch",
    "explanation": "Continuous action. Subject 'They' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 15,
    "question_type": "fill_blank",
    "question_text": "The dog ___ for an hour. [bark]",
    "correct_answer": "has been barking",
    "suggest_answer": "bark",
    "explanation": "Continuous action. Subject 'The dog' takes 'has'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 16,
    "question_type": "fill_blank",
    "question_text": "I'm tired because I ___ the house. [clean]",
    "correct_answer": "have been cleaning",
    "suggest_answer": "clean",
    "explanation": "Recent continuous action. Subject 'I' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 17,
    "question_type": "fill_blank",
    "question_text": "He ___ the piano since he was a child. [practice]",
    "correct_answer": "has been practicing",
    "suggest_answer": "practice",
    "explanation": "Continuous action to achieve a goal. Subject 'He' takes 'has'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 18,
    "question_type": "fill_blank",
    "question_text": "They ___ in this city for a decade. [live]",
    "correct_answer": "have been living",
    "suggest_answer": "live",
    "explanation": "Continuous action over time. Subject 'They' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 19,
    "question_type": "fill_blank",
    "question_text": "The phone ___ for the last five minutes. [ring]",
    "correct_answer": "has been ringing",
    "suggest_answer": "ring",
    "explanation": "Repeated action over a short period. Subject 'The phone' takes 'has'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 20,
    "question_type": "fill_blank",
    "question_text": "We ___ to solve this problem all morning. [try]",
    "correct_answer": "have been trying",
    "suggest_answer": "try",
    "explanation": "Continuous effort. Subject 'We' takes 'have'.",
    "difficulty": "Easy",
    "topic_id": 4
  },
  {
    "id": 21,
    "question_type": "fill_blank",
    "question_text": "They seem upset. They ___ about something. [argue]",
    "correct_answer": "have been arguing",
    "suggest_answer": "argue",
    "explanation": "Focuses on the continuous nature of the recent activity. Plural subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 22,
    "question_type": "fill_blank",
    "question_text": "The climate ___ warmer for several years. [get]",
    "correct_answer": "has been getting",
    "suggest_answer": "get",
    "explanation": "Describes a trend or change over time. Subject 'The climate' takes 'has'.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 23,
    "question_type": "fill_blank",
    "question_text": "My neighbors ___ their house for the past few months. [renovate]",
    "correct_answer": "have been renovating",
    "suggest_answer": "renovate",
    "explanation": "An unfinished action that started in the past. Subject 'My neighbors' takes 'have'.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 24,
    "question_type": "fill_blank",
    "question_text": "She has not ___ well lately; she looks pale. [feel]",
    "correct_answer": "has been feeling",
    "suggest_answer": "feel",
    "explanation": "A continuous state over a recent period. The 'not' is part of the context, not the answer.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 25,
    "question_type": "fill_blank",
    "question_text": "I ___ to call you all week, but I've been so busy. [mean]",
    "correct_answer": "have been meaning",
    "suggest_answer": "mean",
    "explanation": "'To mean to do something' is an intention held over time. Subject 'I' takes 'have'.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 26,
    "question_type": "fill_blank",
    "question_text": "That pipe ___ for days; there's a huge puddle on the floor. [leak]",
    "correct_answer": "has been leaking",
    "suggest_answer": "leak",
    "explanation": "A continuous problem with a present result (the puddle). Singular subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 27,
    "question_type": "fill_blank",
    "question_text": "What ___ lately? I haven't seen you in ages. [you;do]",
    "correct_answer": "have you been doing",
    "suggest_answer": "you;do",
    "explanation": "Question form of the tense, asking about activity over a period. Multi-word answer.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 28,
    "question_type": "fill_blank",
    "question_text": "The company ___ money for the last two quarters. [lose]",
    "correct_answer": "has been losing",
    "suggest_answer": "lose",
    "explanation": "A process happening over a period of time. Singular subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 29,
    "question_type": "fill_blank",
    "question_text": "They ___ my emails for weeks now. [ignore]",
    "correct_answer": "have been ignoring",
    "suggest_answer": "ignore",
    "explanation": "A continuous action (or inaction) over time. Plural subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 30,
    "question_type": "fill_blank",
    "question_text": "He ___ to get that promotion for over a year. [try]",
    "correct_answer": "has been trying",
    "suggest_answer": "try",
    "explanation": "A continuous effort over time to achieve something. Singular subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 31,
    "question_type": "fill_blank",
    "question_text": "We ___ a lot of problems with our internet connection recently. [have]",
    "correct_answer": "have been having",
    "suggest_answer": "have",
    "explanation": "Although 'have' can be a stative verb, in the context of 'having problems', it's an action and can be used in the continuous form.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 32,
    "question_type": "fill_blank",
    "question_text": "How long ___ Japanese? [she;learn]",
    "correct_answer": "has she been learning",
    "suggest_answer": "she;learn",
    "explanation": "Question form asking about the duration of a continuous action. Multi-word answer.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 33,
    "question_type": "fill_blank",
    "question_text": "The scientist ___ this theory for his entire career. [develop]",
    "correct_answer": "has been developing",
    "suggest_answer": "develop",
    "explanation": "Describes a process of creation over a long period. Singular subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 34,
    "question_type": "fill_blank",
    "question_text": "The police ___ the suspect for several days. [follow]",
    "correct_answer": "have been following",
    "suggest_answer": "follow",
    "explanation": "Describes a continuous action of monitoring or being interested in something. Plural subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 35,
    "question_type": "fill_blank",
    "question_text": "The new product ___ popularity since its launch. [gain]",
    "correct_answer": "has been gaining",
    "suggest_answer": "gain",
    "explanation": "Describes a trend or gradual increase. Singular subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 36,
    "question_type": "fill_blank",
    "question_text": "That's exactly what we ___. [discuss]",
    "correct_answer": "have been discussing",
    "suggest_answer": "discuss",
    "explanation": "A recent continuous action that is the subject of the current moment. Plural subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 37,
    "question_type": "fill_blank",
    "question_text": "He looks exhausted because he ___. [overwork]",
    "correct_answer": "has been overworking",
    "suggest_answer": "overwork",
    "explanation": "Explains the reason for a present state (exhaustion). Singular subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 38,
    "question_type": "fill_blank",
    "question_text": "I'm worried because I ___ attention in class. [not;pay]",
    "correct_answer": "have not been paying",
    "suggest_answer": "not;pay",
    "explanation": "Negative form of the tense, describing a continuous lack of action. Plural subject, multi-word answer.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 39,
    "question_type": "fill_blank",
    "question_text": "The city ___ this new bridge for more than two years. [build]",
    "correct_answer": "has been building",
    "suggest_answer": "build",
    "explanation": "A process of construction over time. Singular subject.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 40,
    "question_type": "fill_blank",
    "question_text": "We ___ for a new car for a while now. [save up]",
    "correct_answer": "have been saving up",
    "suggest_answer": "save up",
    "explanation": "A continuous action towards a future goal. Phrasal verb 'save up'.",
    "difficulty": "Medium",
    "topic_id": 4
  },
  {
    "id": 41,
    "question_type": "fill_blank",
    "question_text": "Lately, the team members ___ with each other. [not;get along]",
    "correct_answer": "have not been getting along",
    "suggest_answer": "not;get along",
    "explanation": "Negative form with a phrasal verb ('get along') to describe a continuous state of conflict.",
    "difficulty": "Hard",
    "topic_id": 4
  },
  {
    "id": 42,
    "question_type": "fill_blank",
    "question_text": "She ___ moving to a different country, but hasn't made a decision yet. [consider]",
    "correct_answer": "has been considering",
    "suggest_answer": "consider",
    "explanation": "While 'consider' can be stative, here it's an active mental process over time, making the continuous form appropriate.",
    "difficulty": "Hard",
    "topic_id": 4
  },
  {
    "id": 43,
    "question_type": "fill_blank",
    "question_text": "For how long ___ the new policies? [they;implement]",
    "correct_answer": "have they been implementing",
    "suggest_answer": "they;implement",
    "explanation": "Question form of the tense using a more formal verb ('implement'). Asks about the process of a continuous action.",
    "difficulty": "Hard",
    "topic_id": 4
  },
  {
    "id": 44,
    "question_type": "fill_blank",
    "question_text": "He ___ going to the dentist for months. [put off]",
    "correct_answer": "has been putting off",
    "suggest_answer": "put off",
    "explanation": "Using the phrasal verb 'put off' to describe a continuous act of procrastination. Singular subject.",
    "difficulty": "Hard",
    "topic_id": 4
  },
  {
    "id": 45,
    "question_type": "fill_blank",
    "question_text": "Detectives ___ the evidence since the crime was discovered. [piece together]",
    "correct_answer": "have been piecing together",
    "suggest_answer": "piece together",
    "explanation": "A complex phrasal verb ('piece together') used to describe the continuous process of investigation.",
    "difficulty": "Hard",
    "topic_id": 4
  },
  {
    "id": 46,
    "question_type": "fill_blank",
    "question_text": "The government ___ this issue for the entire session. [grapple with]",
    "correct_answer": "has been grappling with",
    "suggest_answer": "grapple with",
    "explanation": "Using a more advanced verb phrase ('grapple with') to indicate a continuous struggle.",
    "difficulty": "Hard",
    "topic_id": 4
  },
  {
    "id": 47,
    "question_type": "fill_blank",
    "question_text": "___ me all week? Have I done something wrong? [Why;you;avoid]",
    "correct_answer": "Why have you been avoiding",
    "suggest_answer": "Why;you;avoid",
    "explanation": "A 'Wh-' question in the negative context, asking for the reason behind a continuous action.",
    "difficulty": "Hard",
    "topic_id": 4
  },
  {
    "id": 48,
    "question_type": "fill_blank",
    "question_text": "The patient ___ intensive therapy for the past three weeks. [undergo]",
    "correct_answer": "has been undergoing",
    "suggest_answer": "undergo",
    "explanation": "Using a more formal verb ('undergo') to describe a continuous process of change or treatment.",
    "difficulty": "Hard",
    "topic_id": 4
  },
  {
    "id": 49,
    "question_type": "fill_blank",
    "question_text": "I ___ my student loan debt for years, but there's still a lot left. [chip away at]",
    "correct_answer": "have been chipping away at",
    "suggest_answer": "chip away at",
    "explanation": "Idiomatic phrasal verb ('chip away at') to describe making slow, continuous progress on a large task.",
    "difficulty": "Hard",
    "topic_id": 4
  },
  {
    "id": 50,
    "question_type": "fill_blank",
    "question_text": "The main server ___ properly since the power surge. [not;function]",
    "correct_answer": "has not been functioning",
    "suggest_answer": "not;function",
    "explanation": "Negative form with a more technical verb ('function') to describe a continuous state of being broken.",
    "difficulty": "Hard",
    "topic_id": 4
  },
  {
    "id": 51,
    "question_type": "multiple_choice",
    "question_text": "I ___ to my manager about a promotion.",
    "correct_answer": "have been talking",
    "difficulty": "Easy",
    "explanation": "Subject 'I' requires 'have been' + verb-ing for a continuous action up to now.",
    "options": [
      {"id": 511, "option_text": "have been talking", "is_correct": 1, "question_id": 51},
      {"id": 512, "option_text": "am talking", "is_correct": 0, "question_id": 51},
      {"id": 513, "option_text": "talked", "is_correct": 0, "question_id": 51},
      {"id": 514, "option_text": "has been talking", "is_correct": 0, "question_id": 51}
    ],
    "topic_id": 4
  },
  {
    "id": 52,
    "question_type": "multiple_choice",
    "question_text": "It ___ for hours.",
    "correct_answer": "has been raining",
    "difficulty": "Easy",
    "explanation": "Subject 'It' requires 'has been' + verb-ing. 'For hours' indicates a continuous period.",
    "options": [
      {"id": 521, "option_text": "is raining", "is_correct": 0, "question_id": 52},
      {"id": 522, "option_text": "has been raining", "is_correct": 1, "question_id": 52},
      {"id": 523, "option_text": "rained", "is_correct": 0, "question_id": 52},
      {"id": 524, "option_text": "have been raining", "is_correct": 0, "question_id": 52}
    ],
    "topic_id": 4
  },
  {
    "id": 53,
    "question_type": "multiple_choice",
    "question_text": "They ___ French since last year.",
    "correct_answer": "have been learning",
    "difficulty": "Easy",
    "explanation": "Subject 'They' requires 'have been' + verb-ing. 'Since last year' indicates the starting point of a continuous action.",
    "options": [
      {"id": 531, "option_text": "are learning", "is_correct": 0, "question_id": 53},
      {"id": 532, "option_text": "learned", "is_correct": 0, "question_id": 53},
      {"id": 533, "option_text": "have been learning", "is_correct": 1, "question_id": 53},
      {"id": 534, "option_text": "has been learning", "is_correct": 0, "question_id": 53}
    ],
    "topic_id": 4
  },
  {
    "id": 54,
    "question_type": "multiple_choice",
    "question_text": "He's tired because he ___ all day.",
    "correct_answer": "has been working",
    "difficulty": "Easy",
    "explanation": "Subject 'He' requires 'has been' + verb-ing. 'All day' emphasizes the continuous nature of the action.",
    "options": [
      {"id": 541, "option_text": "works", "is_correct": 0, "question_id": 54},
      {"id": 542, "option_text": "is working", "is_correct": 0, "question_id": 54},
      {"id": 543, "option_text": "have been working", "is_correct": 0, "question_id": 54},
      {"id": 544, "option_text": "has been working", "is_correct": 1, "question_id": 54}
    ],
    "topic_id": 4
  },
  {
    "id": 55,
    "question_type": "multiple_choice",
    "question_text": "We ___ for the bus for a long time.",
    "correct_answer": "have been waiting",
    "difficulty": "Easy",
    "explanation": "Subject 'We' requires 'have been' + verb-ing. 'For a long time' indicates duration.",
    "options": [
      {"id": 551, "option_text": "waited", "is_correct": 0, "question_id": 55},
      {"id": 552, "option_text": "have been waiting", "is_correct": 1, "question_id": 55},
      {"id": 553, "option_text": "are waiting", "is_correct": 0, "question_id": 55},
      {"id": 554, "option_text": "has been waiting", "is_correct": 0, "question_id": 55}
    ],
    "topic_id": 4
  },
  {
    "id": 56,
    "question_type": "multiple_choice",
    "question_text": "The cat ___ on the sofa all afternoon.",
    "correct_answer": "has been sleeping",
    "difficulty": "Easy",
    "explanation": "Subject 'The cat' requires 'has been' + verb-ing for a continuous state.",
    "options": [
      {"id": 561, "option_text": "has been sleeping", "is_correct": 1, "question_id": 56},
      {"id": 562, "option_text": "is sleeping", "is_correct": 0, "question_id": 56},
      {"id": 563, "option_text": "slept", "is_correct": 0, "question_id": 56},
      {"id": 564, "option_text": "have been sleeping", "is_correct": 0, "question_id": 56}
    ],
    "topic_id": 4
  },
  {
    "id": 57,
    "question_type": "multiple_choice",
    "question_text": "You look great! ___ you ___ well lately?",
    "correct_answer": "have been feeling",
    "difficulty": "Easy",
    "explanation": "'Lately' suggests a recent, continuous state. Subject 'You' takes 'have'.",
    "options": [
      {"id": 571, "option_text": "felt", "is_correct": 0, "question_id": 57},
      {"id": 572, "option_text": "are feeling", "is_correct": 0, "question_id": 57},
      {"id": 573, "option_text": "have been feeling", "is_correct": 1, "question_id": 57},
      {"id": 574, "option_text": "has been feeling", "is_correct": 0, "question_id": 57}
    ],
    "topic_id": 4
  },
  {
    "id": 58,
    "question_type": "multiple_choice",
    "question_text": "What's that delicious smell? Maria ___.",
    "correct_answer": "has been cooking",
    "difficulty": "Easy",
    "explanation": "The smell is a present result of the recent continuous action. Subject 'Maria' takes 'has'.",
    "options": [
      {"id": 581, "option_text": "is cooking", "is_correct": 0, "question_id": 58},
      {"id": 582, "option_text": "has been cooking", "is_correct": 1, "question_id": 58},
      {"id": 583, "option_text": "cooked", "is_correct": 0, "question_id": 58},
      {"id": 584, "option_text": "cooks", "is_correct": 0, "question_id": 58}
    ],
    "topic_id": 4
  },
  {
    "id": 59,
    "question_type": "multiple_choice",
    "question_text": "The children are dirty because they ___ in the mud.",
    "correct_answer": "have been playing",
    "difficulty": "Easy",
    "explanation": "The mess is a result of the continuous action. Subject 'The children' takes 'have'.",
    "options": [
      {"id": 591, "option_text": "played", "is_correct": 0, "question_id": 59},
      {"id": 592, "option_text": "are playing", "is_correct": 0, "question_id": 59},
      {"id": 593, "option_text": "have been playing", "is_correct": 1, "question_id": 59},
      {"id": 594, "option_text": "has been playing", "is_correct": 0, "question_id": 59}
    ],
    "topic_id": 4
  },
  {
    "id": 60,
    "question_type": "multiple_choice",
    "question_text": "She ___ to call you for the last hour.",
    "correct_answer": "has been trying",
    "difficulty": "Easy",
    "explanation": "A continuous effort over a period. Subject 'She' takes 'has'.",
    "options": [
      {"id": 601, "option_text": "is trying", "is_correct": 0, "question_id": 60},
      {"id": 602, "option_text": "has been trying", "is_correct": 1, "question_id": 60},
      {"id": 603, "option_text": "tries", "is_correct": 0, "question_id": 60},
      {"id": 604, "option_text": "have been trying", "is_correct": 0, "question_id": 60}
    ],
    "topic_id": 4
  },
  {
    "id": 61,
    "question_type": "multiple_choice",
    "question_text": "I ___ since 6 AM this morning.",
    "correct_answer": "have been driving",
    "difficulty": "Easy",
    "explanation": "The focus is on the long, continuous action. Subject 'I' takes 'have'.",
    "options": [
      {"id": 611, "option_text": "drove", "is_correct": 0, "question_id": 61},
      {"id": 612, "option_text": "am driving", "is_correct": 0, "question_id": 61},
      {"id": 613, "option_text": "have been driving", "is_correct": 1, "question_id": 61},
      {"id": 614, "option_text": "has been driving", "is_correct": 0, "question_id": 61}
    ],
    "topic_id": 4
  },
  {
    "id": 62,
    "question_type": "multiple_choice",
    "question_text": "Look at all the snow! It ___ heavily.",
    "correct_answer": "has been snowing",
    "difficulty": "Easy",
    "explanation": "Continuous weather event up to the present. Subject 'It' takes 'has'.",
    "options": [
      {"id": 621, "option_text": "is snowing", "is_correct": 0, "question_id": 62},
      {"id": 622, "option_text": "has been snowing", "is_correct": 1, "question_id": 62},
      {"id": 623, "option_text": "snowed", "is_correct": 0, "question_id": 62},
      {"id": 624, "option_text": "snows", "is_correct": 0, "question_id": 62}
    ],
    "topic_id": 4
  },
  {
    "id": 63,
    "question_type": "multiple_choice",
    "question_text": "We ___ this series for three weeks now.",
    "correct_answer": "have been watching",
    "difficulty": "Easy",
    "explanation": "Continuous action over a period. Subject 'We' takes 'have'.",
    "options": [
      {"id": 631, "option_text": "are watching", "is_correct": 0, "question_id": 63},
      {"id": 632, "option_text": "watched", "is_correct": 0, "question_id": 63},
      {"id": 633, "option_text": "have been watching", "is_correct": 1, "question_id": 63},
      {"id": 634, "option_text": "has been watching", "is_correct": 0, "question_id": 63}
    ],
    "topic_id": 4
  },
  {
    "id": 64,
    "question_type": "multiple_choice",
    "question_text": "My neighbor's dog ___ all night.",
    "correct_answer": "has been barking",
    "difficulty": "Easy",
    "explanation": "The annoyance is caused by the continuous action. Subject 'My neighbor's dog' takes 'has'.",
    "options": [
      {"id": 641, "option_text": "barks", "is_correct": 0, "question_id": 64},
      {"id": 642, "option_text": "has been barking", "is_correct": 1, "question_id": 64},
      {"id": 643, "option_text": "is barking", "is_correct": 0, "question_id": 64},
      {"id": 644, "option_text": "barked", "is_correct": 0, "question_id": 64}
    ],
    "topic_id": 4
  },
  {
    "id": 65,
    "question_type": "multiple_choice",
    "question_text": "They are tired because they ___ the garage.",
    "correct_answer": "have been cleaning",
    "difficulty": "Easy",
    "explanation": "Explains the reason for the present state (being tired). Subject 'They' takes 'have'.",
    "options": [
      {"id": 651, "option_text": "cleaned", "is_correct": 0, "question_id": 65},
      {"id": 652, "option_text": "are cleaning", "is_correct": 0, "question_id": 65},
      {"id": 653, "option_text": "have been cleaning", "is_correct": 1, "question_id": 65},
      {"id": 654, "option_text": "has been cleaning", "is_correct": 0, "question_id": 65}
    ],
    "topic_id": 4
  },
  {
    "id": 66,
    "question_type": "multiple_choice",
    "question_text": "How long ___ here?",
    "correct_answer": "has he been living",
    "difficulty": "Easy",
    "explanation": "Question form of the tense. Subject 'he' uses 'has'.",
    "options": [
      {"id": 661, "option_text": "is he living", "is_correct": 0, "question_id": 66},
      {"id": 662, "option_text": "has he been living", "is_correct": 1, "question_id": 66},
      {"id": 663, "option_text": "does he live", "is_correct": 0, "question_id": 66},
      {"id": 664, "option_text": "have he been living", "is_correct": 0, "question_id": 66}
    ],
    "topic_id": 4
  },
  {
    "id": 67,
    "question_type": "multiple_choice",
    "question_text": "I ___ a lot recently.",
    "correct_answer": "have been exercising",
    "difficulty": "Easy",
    "explanation": "'Recently' points to a continuous action in the near past. Subject 'I' takes 'have'.",
    "options": [
      {"id": 671, "option_text": "have been exercising", "is_correct": 1, "question_id": 67},
      {"id": 672, "option_text": "exercised", "is_correct": 0, "question_id": 67},
      {"id": 673, "option_text": "am exercising", "is_correct": 0, "question_id": 67},
      {"id": 674, "option_text": "exercise", "is_correct": 0, "question_id": 67}
    ],
    "topic_id": 4
  },
  {
    "id": 68,
    "question_type": "multiple_choice",
    "question_text": "The fire alarm ___ for ten minutes. Can someone turn it off?",
    "correct_answer": "has been beeping",
    "difficulty": "Easy",
    "explanation": "A repeated, continuous action causing annoyance. Subject 'The fire alarm' takes 'has'.",
    "options": [
      {"id": 681, "option_text": "is beeping", "is_correct": 0, "question_id": 68},
      {"id": 682, "option_text": "beeps", "is_correct": 0, "question_id": 68},
      {"id": 683, "option_text": "has been beeping", "is_correct": 1, "question_id": 68},
      {"id": 684, "option_text": "beeped", "is_correct": 0, "question_id": 68}
    ],
    "topic_id": 4
  },
  {
    "id": 69,
    "question_type": "multiple_choice",
    "question_text": "We ___ our vacation for months.",
    "correct_answer": "have been planning",
    "difficulty": "Easy",
    "explanation": "Continuous action of preparation over a period. Subject 'We' takes 'have'.",
    "options": [
      {"id": 691, "option_text": "planned", "is_correct": 0, "question_id": 69},
      {"id": 692, "option_text": "have been planning", "is_correct": 1, "question_id": 69},
      {"id": 693, "option_text": "are planning", "is_correct": 0, "question_id": 69},
      {"id": 694, "option_text": "plan", "is_correct": 0, "question_id": 69}
    ],
    "topic_id": 4
  },
  {
    "id": 70,
    "question_type": "multiple_choice",
    "question_text": "My boss ___ about the sales figures all week.",
    "correct_answer": "has been complaining",
    "difficulty": "Easy",
    "explanation": "Continuous action of complaining. Subject 'My boss' takes 'has'.",
    "options": [
      {"id": 701, "option_text": "complains", "is_correct": 0, "question_id": 70},
      {"id": 702, "option_text": "has been complaining", "is_correct": 1, "question_id": 70},
      {"id": 703, "option_text": "is complaining", "is_correct": 0, "question_id": 70},
      {"id": 704, "option_text": "complained", "is_correct": 0, "question_id": 70}
    ],
    "topic_id": 4
  },
  {
    "id": 71,
    "question_type": "multiple_choice",
    "question_text": "They're not speaking to each other. They ___.",
    "correct_answer": "have been arguing",
    "difficulty": "Medium",
    "explanation": "Distinction between the continuous action (arguing) and the result (not speaking). Present Perfect Simple ('have argued') would focus on the completion, not the process.",
    "options": [
      {"id": 711, "option_text": "have argued", "is_correct": 0, "question_id": 71},
      {"id": 712, "option_text": "have been arguing", "is_correct": 1, "question_id": 71},
      {"id": 713, "option_text": "were arguing", "is_correct": 0, "question_id": 71},
      {"id": 714, "option_text": "argued", "is_correct": 0, "question_id": 71}
    ],
    "topic_id": 4
  },
  {
    "id": 72,
    "question_type": "multiple_choice",
    "question_text": "It ___ darker and darker recently.",
    "correct_answer": "has been getting",
    "difficulty": "Medium",
    "explanation": "Describes a gradual change over time. 'Is getting' is also possible but PPC emphasizes the duration from the past until now.",
    "options": [
      {"id": 721, "option_text": "gets", "is_correct": 0, "question_id": 72},
      {"id": 722, "option_text": "has gotten", "is_correct": 0, "question_id": 72},
      {"id": 723, "option_text": "has been getting", "is_correct": 1, "question_id": 72},
      {"id": 724, "option_text": "got", "is_correct": 0, "question_id": 72}
    ],
    "topic_id": 4
  },
  {
    "id": 73,
    "question_type": "multiple_choice",
    "question_text": "What ___ all this time? I've been waiting for you.",
    "correct_answer": "have you been doing",
    "difficulty": "Medium",
    "explanation": "Question asking about activity over a period ('all this time'). The other options are grammatically incorrect or have a different meaning.",
    "options": [
      {"id": 731, "option_text": "did you do", "is_correct": 0, "question_id": 73},
      {"id": 732, "option_text": "are you doing", "is_correct": 0, "question_id": 73},
      {"id": 733, "option_text": "have you done", "is_correct": 0, "question_id": 73},
      {"id": 734, "option_text": "have you been doing", "is_correct": 1, "question_id": 73}
    ],
    "topic_id": 4
  },
  {
    "id": 74,
    "question_type": "multiple_choice",
    "question_text": "He ___ very well lately.",
    "correct_answer": "has not been feeling",
    "difficulty": "Medium",
    "explanation": "Negative form for a continuous state over a recent period ('lately').",
    "options": [
      {"id": 741, "option_text": "has not felt", "is_correct": 0, "question_id": 74},
      {"id": 742, "option_text": "has not been feeling", "is_correct": 1, "question_id": 74},
      {"id": 743, "option_text": "is not feeling", "is_correct": 0, "question_id": 74},
      {"id": 744, "option_text": "did not feel", "is_correct": 0, "question_id": 74}
    ],
    "topic_id": 4
  },
  {
    "id": 75,
    "question_type": "multiple_choice",
    "question_text": "Sorry I'm late, I ___ to call you.",
    "correct_answer": "have been meaning",
    "difficulty": "Medium",
    "explanation": "Used to express an intention that has existed for a while but has not been acted upon. 'Have meant' is less common for this specific context.",
    "options": [
      {"id": 751, "option_text": "have been meaning", "is_correct": 1, "question_id": 75},
      {"id": 752, "option_text": "have meant", "is_correct": 0, "question_id": 75},
      {"id": 753, "option_text": "was meaning", "is_correct": 0, "question_id": 75},
      {"id": 754, "option_text": "meant", "is_correct": 0, "question_id": 75}
    ],
    "topic_id": 4
  },
  {
    "id": 76,
    "question_type": "multiple_choice",
    "question_text": "He ___ a lot of weight since he started his new diet.",
    "correct_answer": "has been losing",
    "difficulty": "Medium",
    "explanation": "Describes a continuous process of losing something over time. 'Has lost' would imply the process is complete.",
    "options": [
      {"id": 761, "option_text": "has lost", "is_correct": 0, "question_id": 76},
      {"id": 762, "option_text": "has been losing", "is_correct": 1, "question_id": 76},
      {"id": 763, "option_text": "is losing", "is_correct": 0, "question_id": 76},
      {"id": 764, "option_text": "lost", "is_correct": 0, "question_id": 76}
    ],
    "topic_id": 4
  },
  {
    "id": 77,
    "question_type": "multiple_choice",
    "question_text": "Why do you think she ___ you recently?",
    "correct_answer": "have been ignoring",
    "difficulty": "Medium",
    "explanation": "The focus is on the continuous, repeated action of ignoring. 'Have ignored' would focus on the result.",
    "options": [
      {"id": 771, "option_text": "have ignored", "is_correct": 0, "question_id": 77},
      {"id": 772, "option_text": "were ignoring", "is_correct": 0, "question_id": 77},
      {"id": 773, "option_text": "have been ignoring", "is_correct": 1, "question_id": 77},
      {"id": 774, "option_text": "ignore", "is_correct": 0, "question_id": 77}
    ],
    "topic_id": 4
  },
  {
    "id": 78,
    "question_type": "multiple_choice",
    "question_text": "My computer is slow. It ___ to update for an hour.",
    "correct_answer": "has been trying",
    "difficulty": "Medium",
    "explanation": "Emphasizes the continuous effort, not just the result. 'Has tried' would suggest one or more completed attempts.",
    "options": [
      {"id": 781, "option_text": "has tried", "is_correct": 0, "question_id": 78},
      {"id": 782, "option_text": "has been trying", "is_correct": 1, "question_id": 78},
      {"id": 783, "option_text": "is trying", "is_correct": 0, "question_id": 78},
      {"id": 784, "option_text": "tried", "is_correct": 0, "question_id": 78}
    ],
    "topic_id": 4
  },
  {
    "id": 79,
    "question_type": "multiple_choice",
    "question_text": "We ___ strange dreams lately.",
    "correct_answer": "have been having",
    "difficulty": "Medium",
    "explanation": "In this context, 'have' is an action verb (experiencing), so the continuous form is correct to emphasize duration.",
    "options": [
      {"id": 791, "option_text": "have had", "is_correct": 0, "question_id": 79},
      {"id": 792, "option_text": "have been having", "is_correct": 1, "question_id": 79},
      {"id": 793, "option_text": "are having", "is_correct": 0, "question_id": 79},
      {"id": 794, "option_text": "had", "is_correct": 0, "question_id": 79}
    ],
    "topic_id": 4
  },
  {
    "id": 80,
    "question_type": "multiple_choice",
    "question_text": "___ Spanish? Her accent is great.",
    "correct_answer": "How long has she been learning",
    "difficulty": "Medium",
    "explanation": "The correct question structure is 'How long + has/have + subject + been + verb-ing'.",
    "options": [
      {"id": 801, "option_text": "How long is she learning", "is_correct": 0, "question_id": 80},
      {"id": 802, "option_text": "How long does she learn", "is_correct": 0, "question_id": 80},
      {"id": 803, "option_text": "How long has she been learning", "is_correct": 1, "question_id": 80},
      {"id": 804, "option_text": "How long she has been learning", "is_correct": 0, "question_id": 80}
    ],
    "topic_id": 4
  },
  {
    "id": 81,
    "question_type": "multiple_choice",
    "question_text": "I ___ this series since the first episode.",
    "correct_answer": "have been following",
    "difficulty": "Medium",
    "explanation": "Describes a continuous action of monitoring. 'Have followed' suggests the action is complete.",
    "options": [
      {"id": 811, "option_text": "have followed", "is_correct": 0, "question_id": 81},
      {"id": 812, "option_text": "have been following", "is_correct": 1, "question_id": 81},
      {"id": 813, "option_text": "were following", "is_correct": 0, "question_id": 81},
      {"id": 814, "option_text": "followed", "is_correct": 0, "question_id": 81}
    ],
    "topic_id": 4
  },
  {
    "id": 82,
    "question_type": "multiple_choice",
    "question_text": "The cryptocurrency ___ value steadily over the past few days.",
    "correct_answer": "has been gaining",
    "difficulty": "Medium",
    "explanation": "Indicates a gradual increase or trend over time. 'Has gained' would imply a completed achievement.",
    "options": [
      {"id": 821, "option_text": "has gained", "is_correct": 0, "question_id": 82},
      {"id": 822, "option_text": "gains", "is_correct": 0, "question_id": 82},
      {"id": 823, "option_text": "has been gaining", "is_correct": 1, "question_id": 82},
      {"id": 824, "option_text": "is gaining", "is_correct": 0, "question_id": 82}
    ],
    "topic_id": 4
  },
  {
    "id": 83,
    "question_type": "multiple_choice",
    "question_text": "The board members ___ the merger for hours.",
    "correct_answer": "have been discussing",
    "difficulty": "Medium",
    "explanation": "The context implies the discussion has been ongoing and is the reason for the meeting.",
    "options": [
      {"id": 831, "option_text": "have discussed", "is_correct": 0, "question_id": 83},
      {"id": 832, "option_text": "have been discussing", "is_correct": 1, "question_id": 83},
      {"id": 833, "option_text": "were discussing", "is_correct": 0, "question_id": 83},
      {"id": 834, "option_text": "discussed", "is_correct": 0, "question_id": 83}
    ],
    "topic_id": 4
  },
  {
    "id": 84,
    "question_type": "multiple_choice",
    "question_text": "He seems stressed. I think he ___ lately.",
    "correct_answer": "has been overworking",
    "difficulty": "Medium",
    "explanation": "Explains the present result (stress) with a continuous past action.",
    "options": [
      {"id": 841, "option_text": "has overworked", "is_correct": 0, "question_id": 84},
      {"id": 842, "option_text": "has been overworking", "is_correct": 1, "question_id": 84},
      {"id": 843, "option_text": "is overworking", "is_correct": 0, "question_id": 84},
      {"id": 844, "option_text": "overworked", "is_correct": 0, "question_id": 84}
    ],
    "topic_id": 4
  },
  {
    "id": 85,
    "question_type": "multiple_choice",
    "question_text": "I don't understand. I admit I ___ attention.",
    "correct_answer": "have not been paying",
    "difficulty": "Medium",
    "explanation": "Negative form to describe a continuous lack of attention, explaining the current lack of understanding.",
    "options": [
      {"id": 851, "option_text": "have not paid", "is_correct": 0, "question_id": 85},
      {"id": 852, "option_text": "have not been paying", "is_correct": 1, "question_id": 85},
      {"id": 853, "option_text": "was not paying", "is_correct": 0, "question_id": 85},
      {"id": 854, "option_text": "did not pay", "is_correct": 0, "question_id": 85}
    ],
    "topic_id": 4
  },
  {
    "id": 86,
    "question_type": "multiple_choice",
    "question_text": "Traffic ___ on the highway since the accident.",
    "correct_answer": "has been building up",
    "difficulty": "Medium",
    "explanation": "Phrasal verb 'build up' used to describe a gradual accumulation.",
    "options": [
      {"id": 861, "option_text": "has built up", "is_correct": 0, "question_id": 86},
      {"id": 862, "option_text": "has been building up", "is_correct": 1, "question_id": 86},
      {"id": 863, "option_text": "is building up", "is_correct": 0, "question_id": 86},
      {"id": 864, "option_text": "built up", "is_correct": 0, "question_id": 86}
    ],
    "topic_id": 4
  },
  {
    "id": 87,
    "question_type": "multiple_choice",
    "question_text": "We ___ for a down payment on a house.",
    "correct_answer": "have been saving up",
    "difficulty": "Medium",
    "explanation": "Phrasal verb 'save up' to denote a continuous action for a future purpose.",
    "options": [
      {"id": 871, "option_text": "have been saving up", "is_correct": 1, "question_id": 87},
      {"id": 872, "option_text": "have saved up", "is_correct": 0, "question_id": 87},
      {"id": 873, "option_text": "were saving up", "is_correct": 0, "question_id": 87},
      {"id": 874, "option_text": "saved up", "is_correct": 0, "question_id": 87}
    ],
    "topic_id": 4
  },
  {
    "id": 88,
    "question_type": "multiple_choice",
    "question_text": "My phone ___ strangely since I downloaded that app.",
    "correct_answer": "has been acting",
    "difficulty": "Medium",
    "explanation": "'Act' here means 'behaving', a temporary and continuous action.",
    "options": [
      {"id": 881, "option_text": "has acted", "is_correct": 0, "question_id": 88},
      {"id": 882, "option_text": "has been acting", "is_correct": 1, "question_id": 88},
      {"id": 883, "option_text": "is acting", "is_correct": 0, "question_id": 88},
      {"id": 884, "option_text": "acted", "is_correct": 0, "question_id": 88}
    ],
    "topic_id": 4
  },
  {
    "id": 89,
    "question_type": "multiple_choice",
    "question_text": "Investors ___ this announcement for weeks.",
    "correct_answer": "have been anticipating",
    "difficulty": "Medium",
    "explanation": "Describes a continuous mental state of expectation.",
    "options": [
      {"id": 891, "option_text": "have anticipated", "is_correct": 0, "question_id": 89},
      {"id": 892, "option_text": "have been anticipating", "is_correct": 1, "question_id": 89},
      {"id": 893, "option_text": "were anticipating", "is_correct": 0, "question_id": 89},
      {"id": 894, "option_text": "anticipate", "is_correct": 0, "question_id": 89}
    ],
    "topic_id": 4
  },
  {
    "id": 90,
    "question_type": "multiple_choice",
    "question_text": "She ___ her younger sister while their parents are away.",
    "correct_answer": "has been taking care of",
    "difficulty": "Medium",
    "explanation": "Phrasal verb 'take care of' to describe a continuous responsibility.",
    "options": [
      {"id": 901, "option_text": "has taken care of", "is_correct": 0, "question_id": 90},
      {"id": 902, "option_text": "has been taking care of", "is_correct": 1, "question_id": 90},
      {"id": 903, "option_text": "is taking care of", "is_correct": 0, "question_id": 90},
      {"id": 904, "option_text": "took care of", "is_correct": 0, "question_id": 90}
    ],
    "topic_id": 4
  },
  {
    "id": 91,
    "question_type": "multiple_choice",
    "question_text": "Surprisingly, the new colleagues ___ really well recently.",
    "correct_answer": "have been getting along",
    "difficulty": "Hard",
    "explanation": "PPC with a phrasal verb. The context implies a continuous state. 'Have got along' would be less natural and imply a finished process.",
    "options": [
      {"id": 911, "option_text": "have got along", "is_correct": 0, "question_id": 91},
      {"id": 912, "option_text": "have been getting along", "is_correct": 1, "question_id": 91},
      {"id": 913, "option_text": "were getting along", "is_correct": 0, "question_id": 91},
      {"id": 914, "option_text": "got along", "is_correct": 0, "question_id": 91}
    ],
    "topic_id": 4
  },
  {
    "id": 92,
    "question_type": "multiple_choice",
    "question_text": "For months, the CEO ___ a major restructuring of the company.",
    "correct_answer": "has been considering",
    "difficulty": "Hard",
    "explanation": "Using 'consider' as a dynamic verb of mental process over time. 'Has considered' would suggest the thought process is over.",
    "options": [
      {"id": 921, "option_text": "has considered", "is_correct": 0, "question_id": 92},
      {"id": 922, "option_text": "has been considering", "is_correct": 1, "question_id": 92},
      {"id": 923, "option_text": "was considering", "is_correct": 0, "question_id": 92},
      {"id": 924, "option_text": "considers", "is_correct": 0, "question_id": 92}
    ],
    "topic_id": 4
  },
  {
    "id": 93,
    "question_type": "multiple_choice",
    "question_text": "For the last year, historians ___ the sequence of events.",
    "correct_answer": "have been piecing together",
    "difficulty": "Hard",
    "explanation": "The complex phrasal verb 'piece together' emphasizes the slow, continuous process of investigation.",
    "options": [
      {"id": 931, "option_text": "have pieced together", "is_correct": 0, "question_id": 93},
      {"id": 932, "option_text": "have been piecing together", "is_correct": 1, "question_id": 93},
      {"id": 933, "option_text": "were piecing together", "is_correct": 0, "question_id": 93},
      {"id": 934, "option_text": "pieced together", "is_correct": 0, "question_id": 93}
    ],
    "topic_id": 4
  },
  {
    "id": 94,
    "question_type": "multiple_choice",
    "question_text": "The country ___ high inflation for two years now.",
    "correct_answer": "has been grappling with",
    "difficulty": "Hard",
    "explanation": "The verb 'grapple with' implies a difficult, ongoing struggle, perfectly suited for the PPC.",
    "options": [
      {"id": 941, "option_text": "has grappled with", "is_correct": 0, "question_id": 94},
      {"id": 942, "option_text": "has been grappling with", "is_correct": 1, "question_id": 94},
      {"id": 943, "option_text": "is grappling with", "is_correct": 0, "question_id": 94},
      {"id": 944, "option_text": "grappled with", "is_correct": 0, "question_id": 94}
    ],
    "topic_id": 4
  },
  {
    "id": 95,
    "question_type": "multiple_choice",
    "question_text": "We ___ each other much lately because of our schedules.",
    "correct_answer": "have not been seeing",
    "difficulty": "Hard",
    "explanation": "'See' usually is a stative verb, but here it means 'meeting' or 'dating', which is an action. The negative continuous form is appropriate.",
    "options": [
      {"id": 951, "option_text": "have not seen", "is_correct": 0, "question_id": 95},
      {"id": 952, "option_text": "have not been seeing", "is_correct": 1, "question_id": 95},
      {"id": 953, "option_text": "are not seeing", "is_correct": 0, "question_id": 95},
      {"id": 954, "option_text": "did not see", "is_correct": 0, "question_id": 95}
    ],
    "topic_id": 4
  },
  {
    "id": 96,
    "question_type": "multiple_choice",
    "question_text": "The historic building ___ restoration for the past five years.",
    "correct_answer": "has been undergoing",
    "difficulty": "Hard",
    "explanation": "The formal verb 'undergo' describes a long process, making the PPC the best choice to emphasize duration.",
    "options": [
      {"id": 961, "option_text": "has undergone", "is_correct": 0, "question_id": 96},
      {"id": 962, "option_text": "has been undergoing", "is_correct": 1, "question_id": 96},
      {"id": 963, "option_text": "is undergoing", "is_correct": 0, "question_id": 96},
      {"id": 964, "option_text": "underwent", "is_correct": 0, "question_id": 96}
    ],
    "topic_id": 4
  },
  {
    "id": 97,
    "question_type": "multiple_choice",
    "question_text": "The lawyers ___ the opponent's argument all morning.",
    "correct_answer": "have been chipping away at",
    "difficulty": "Hard",
    "explanation": "The idiomatic phrasal verb 'chip away at' highlights the slow, continuous reduction of something.",
    "options": [
      {"id": 971, "option_text": "have chipped away at", "is_correct": 0, "question_id": 97},
      {"id": 972, "option_text": "have been chipping away at", "is_correct": 1, "question_id": 97},
      {"id": 973, "option_text": "were chipping away at", "is_correct": 0, "question_id": 97},
      {"id": 974, "option_text": "chipped away at", "is_correct": 0, "question_id": 97}
    ],
    "topic_id": 4
  },
  {
    "id": 98,
    "question_type": "multiple_choice",
    "question_text": "The company ___ staff since the beginning of the recession.",
    "correct_answer": "has been laying off",
    "difficulty": "Hard",
    "explanation": "PPC with the phrasal verb 'lay off', indicating a continuous process of making people redundant.",
    "options": [
      {"id": 981, "option_text": "has laid off", "is_correct": 0, "question_id": 98},
      {"id": 982, "option_text": "has been laying off", "is_correct": 1, "question_id": 98},
      {"id": 983, "option_text": "is laying off", "is_correct": 0, "question_id": 98},
      {"id": 984, "option_text": "laid off", "is_correct": 0, "question_id": 98}
    ],
    "topic_id": 4
  },
  {
    "id": 99,
    "question_type": "multiple_choice",
    "question_text": "Activists ___ for this change for more than a generation.",
    "correct_answer": "have been fighting",
    "difficulty": "Hard",
    "explanation": "The context implies an ongoing, continuous battle rather than a single completed action.",
    "options": [
      {"id": 991, "option_text": "have fought", "is_correct": 0, "question_id": 99},
      {"id": 992, "option_text": "have been fighting", "is_correct": 1, "question_id": 99},
      {"id": 993, "option_text": "were fighting", "is_correct": 0, "question_id": 99},
      {"id": 994, "option_text": "fought", "is_correct": 0, "question_id": 99}
    ],
    "topic_id": 4
  },
  {
    "id": 100,
    "question_type": "multiple_choice",
    "question_text": "How long ___? The ground is completely white.",
    "correct_answer": "has it been snowing",
    "difficulty": "Hard",
    "explanation": "The correct question structure for PPC. It asks about a continuous action up to the present. The other options are grammatically incorrect or change the meaning.",
    "options": [
      {"id": 1001, "option_text": "it has been snowing", "is_correct": 0, "question_id": 100},
      {"id": 1002, "option_text": "has it snowed", "is_correct": 0, "question_id": 100},
      {"id": 1003, "option_text": "has it been snowing", "is_correct": 1, "question_id": 100},
      {"id": 1004, "option_text": "is it snowing", "is_correct": 0, "question_id": 100}
    ],
    "topic_id": 4
  }
];

export default questions;
