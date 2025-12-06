const questions = [
  {
    "id": 1,
    "question_type": "fill_blank",
    "question_text": "She ___ [is work] in a hospital right now.",
    "correct_answer": "is working",
    "suggest_answer": "is work",
    "explanation": "Present Continuous for an action happening now. 3rd person singular + is + V-ing.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 2,
    "question_type": "fill_blank",
    "question_text": "They ___ [are play] football at the moment.",
    "correct_answer": "are playing",
    "suggest_answer": "are play",
    "explanation": "Present Continuous for an action in progress. Plural subject + are + V-ing.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 3,
    "question_type": "fill_blank",
    "question_text": "He ___ [is eat] breakfast at the moment.",
    "correct_answer": "is eating",
    "suggest_answer": "is eat",
    "explanation": "Present Continuous for an action happening now. 'eat' becomes 'eating'.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 4,
    "question_type": "fill_blank",
    "question_text": "I ___ [am live] with my cousin this month.",
    "correct_answer": "am living",
    "suggest_answer": "am live",
    "explanation": "Present Continuous for a temporary situation. I + am + V-ing.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 5,
    "question_type": "fill_blank",
    "question_text": "She ___ [is study] for her exam now.",
    "correct_answer": "is studying",
    "suggest_answer": "is study",
    "explanation": "Present Continuous for an activity happening now. 'study' -> 'studying'.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 6,
    "question_type": "fill_blank",
    "question_text": "We ___ [are watch] a movie at the moment.",
    "correct_answer": "are watching",
    "suggest_answer": "are watch",
    "explanation": "Present Continuous for an action in progress. Plural subject + are + V-ing.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 7,
    "question_type": "fill_blank",
    "question_text": "The children ___ [are play] in the garden now.",
    "correct_answer": "are playing",
    "suggest_answer": "are play",
    "explanation": "Present Continuous for actions happening now. 'children' = plural.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 8,
    "question_type": "fill_blank",
    "question_text": "My parents ___ [are travel] to Da Nang this week.",
    "correct_answer": "are travelling",
    "suggest_answer": "are travel",
    "explanation": "Present Continuous for a temporary trip. Plural subject + are + V-ing.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 9,
    "question_type": "fill_blank",
    "question_text": "It ___ [is rain] heavily outside.",
    "correct_answer": "is raining",
    "suggest_answer": "is rain",
    "explanation": "Present Continuous for weather happening now. 'rain' -> 'raining'.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 10,
    "question_type": "fill_blank",
    "question_text": "I ___ [am read] a very interesting book.",
    "correct_answer": "am reading",
    "suggest_answer": "am read",
    "explanation": "Present Continuous for action around now. I + am + V-ing.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 11,
    "question_type": "fill_blank",
    "question_text": "She ___ [is cook] dinner at the moment.",
    "correct_answer": "is cooking",
    "suggest_answer": "is cook",
    "explanation": "Present Continuous for an action in progress in the kitchen.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 12,
    "question_type": "fill_blank",
    "question_text": "They ___ [are build] a new house near ours.",
    "correct_answer": "are building",
    "suggest_answer": "are build",
    "explanation": "Present Continuous for an ongoing project.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 13,
    "question_type": "fill_blank",
    "question_text": "We ___ [are sit] in the living room now.",
    "correct_answer": "are sitting",
    "suggest_answer": "are sit",
    "explanation": "Present Continuous to describe current location/activity.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 14,
    "question_type": "fill_blank",
    "question_text": "He ___ [is drive] to work right now.",
    "correct_answer": "is driving",
    "suggest_answer": "is drive",
    "explanation": "Present Continuous for an action in progress while travelling.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 15,
    "question_type": "fill_blank",
    "question_text": "The students ___ [are write] an email to their teacher.",
    "correct_answer": "are writing",
    "suggest_answer": "are write",
    "explanation": "Present Continuous for an ongoing writing task.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 16,
    "question_type": "fill_blank",
    "question_text": "I ___ [am wait] for the bus at the moment.",
    "correct_answer": "am waiting",
    "suggest_answer": "am wait",
    "explanation": "Present Continuous for a temporary action happening now.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 17,
    "question_type": "fill_blank",
    "question_text": "She ___ [is talk] on the phone.",
    "correct_answer": "is talking",
    "suggest_answer": "is talk",
    "explanation": "Present Continuous for an action in progress.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 18,
    "question_type": "fill_blank",
    "question_text": "They ___ [are listen] to music right now.",
    "correct_answer": "are listening",
    "suggest_answer": "are listen",
    "explanation": "Present Continuous for an activity happening at this moment.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 19,
    "question_type": "fill_blank",
    "question_text": "We ___ [are learn] English this semester.",
    "correct_answer": "are learning",
    "suggest_answer": "are learn",
    "explanation": "Present Continuous for a temporary course of study.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 20,
    "question_type": "fill_blank",
    "question_text": "The cat ___ [is sleep] on the sofa now.",
    "correct_answer": "is sleeping",
    "suggest_answer": "is sleep",
    "explanation": "Present Continuous for an animal's current action.",
    "difficulty": "Easy",
    "topic_id": 2
  },
  {
    "id": 21,
    "question_type": "fill_blank",
    "question_text": "I ___ [am not work] today, so I can help you.",
    "correct_answer": "am not working",
    "suggest_answer": "am not work",
    "explanation": "Present Continuous negative. I + am not + V-ing.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 22,
    "question_type": "fill_blank",
    "question_text": "She ___ [is not study] in the library now.",
    "correct_answer": "is not studying; isn't studying",
    "suggest_answer": "is not study; isn't study",
    "explanation": "Present Continuous negative for a temporary action.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 23,
    "question_type": "fill_blank",
    "question_text": "They ___ [are not watch] TV at the moment.",
    "correct_answer": "are not watching; aren't watching",
    "suggest_answer": "are not watch; aren't watch",
    "explanation": "Present Continuous negative with plural subject.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 24,
    "question_type": "fill_blank",
    "question_text": "He ___ [is not drive] carefully right now.",
    "correct_answer": "is not driving; isn't driving",
    "suggest_answer": "is not drive; isn't drive",
    "explanation": "Present Continuous negative for action in progress.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 25,
    "question_type": "fill_blank",
    "question_text": "We ___ [are not stay] at this hotel anymore.",
    "correct_answer": "are not staying; aren't staying",
    "suggest_answer": "are not stay; aren't stay",
    "explanation": "Present Continuous negative to show a temporary situation that is changing.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 26,
    "question_type": "fill_blank",
    "question_text": "What ___ [are you do] at the moment?",
    "correct_answer": "are you doing",
    "suggest_answer": "are you do",
    "explanation": "Present Continuous question with 'what'. Are + subject + V-ing.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 27,
    "question_type": "fill_blank",
    "question_text": "Where ___ [is she go] now?",
    "correct_answer": "is she going",
    "suggest_answer": "is she go",
    "explanation": "Present Continuous WH-question. Is + subject + V-ing.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 28,
    "question_type": "fill_blank",
    "question_text": "Who ___ [is talk] so loudly right now?",
    "correct_answer": "is talking",
    "suggest_answer": "is talk",
    "explanation": "Present Continuous WH-question about the subject; use is + V-ing.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 29,
    "question_type": "fill_blank",
    "question_text": "Why ___ [are they shout] at each other?",
    "correct_answer": "are they shouting",
    "suggest_answer": "are they shout",
    "explanation": "Present Continuous WH-question with plural subject.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 30,
    "question_type": "fill_blank",
    "question_text": "Is he ___ [is work] late this week?",
    "correct_answer": "working",
    "suggest_answer": "is work",
    "explanation": "Present Continuous yes/no question. Be + subject + V-ing.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 31,
    "question_type": "fill_blank",
    "question_text": "Are you ___ [are prepare] for the meeting?",
    "correct_answer": "preparing",
    "suggest_answer": "are prepare",
    "explanation": "Present Continuous yes/no question with 'are you'.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 32,
    "question_type": "fill_blank",
    "question_text": "She ___ [is always complain] about the weather.",
    "correct_answer": "is always complaining",
    "suggest_answer": "is always complain",
    "explanation": "Present Continuous with 'always' to express annoyance.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 33,
    "question_type": "fill_blank",
    "question_text": "He ___ [is constantly check] his phone.",
    "correct_answer": "is constantly checking",
    "suggest_answer": "is constantly check",
    "explanation": "Present Continuous with frequency adverb for repeated irritating action.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 34,
    "question_type": "fill_blank",
    "question_text": "They ___ [are currently build] a new bridge.",
    "correct_answer": "are currently building",
    "suggest_answer": "are currently build",
    "explanation": "Present Continuous with 'currently' for ongoing project.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 35,
    "question_type": "fill_blank",
    "question_text": "We ___ [are still wait] for the results.",
    "correct_answer": "are still waiting",
    "suggest_answer": "are still wait",
    "explanation": "Present Continuous with 'still' for an unfinished action.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 36,
    "question_type": "fill_blank",
    "question_text": "My brother ___ [is not live] at home these days.",
    "correct_answer": "is not living; isn't living",
    "suggest_answer": "is not live; isn't live",
    "explanation": "Present Continuous negative for a temporary living arrangement.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 37,
    "question_type": "fill_blank",
    "question_text": "What ___ [are they work] on this week?",
    "correct_answer": "are they working",
    "suggest_answer": "are they work",
    "explanation": "Present Continuous WH-question about an ongoing project.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 38,
    "question_type": "fill_blank",
    "question_text": "Who ___ [are you talk] to right now?",
    "correct_answer": "are you talking",
    "suggest_answer": "are you talk",
    "explanation": "Present Continuous WH-question for a conversation in progress.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 39,
    "question_type": "fill_blank",
    "question_text": "Why ___ [is the baby cry] so loudly?",
    "correct_answer": "is the baby crying",
    "suggest_answer": "is the baby cry",
    "explanation": "Present Continuous WH-question with 3rd person singular.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 40,
    "question_type": "fill_blank",
    "question_text": "Where ___ [are we go] this evening?",
    "correct_answer": "are we going",
    "suggest_answer": "are we go",
    "explanation": "Present Continuous WH-question for a near future plan.",
    "difficulty": "Medium",
    "topic_id": 2
  },
  {
    "id": 41,
    "question_type": "fill_blank",
    "question_text": "I ___ [am currently work] on a project that ___ [is change] how people use water.",
    "correct_answer": "am currently working; is changing",
    "suggest_answer": "am currently work; is change",
    "explanation": "Present Continuous for ongoing project and developing change.",
    "difficulty": "Hard",
    "topic_id": 2
  },
  {
    "id": 42,
    "question_type": "fill_blank",
    "question_text": "She ___ [is gradually become] more confident because she ___ [is practise] every day.",
    "correct_answer": "is gradually becoming; is practising",
    "suggest_answer": "is gradually become; is practise",
    "explanation": "Present Continuous with adverbs to show gradual change and repeated temporary actions.",
    "difficulty": "Hard",
    "topic_id": 2
  },
  {
    "id": 43,
    "question_type": "fill_blank",
    "question_text": "They ___ [are always arrive] late and ___ [are disturb] the whole class.",
    "correct_answer": "are always arriving; are disturbing",
    "suggest_answer": "are always arrive; are disturb",
    "explanation": "Present Continuous with 'always' for criticism and an action causing another action.",
    "difficulty": "Hard",
    "topic_id": 2
  },
  {
    "id": 44,
    "question_type": "fill_blank",
    "question_text": "The cost of living ___ [is constantly rise] while many people ___ [are struggle] to pay their bills.",
    "correct_answer": "is constantly rising; are struggling",
    "suggest_answer": "is constantly rise; are struggle",
    "explanation": "Present Continuous for trends and ongoing difficulties.",
    "difficulty": "Hard",
    "topic_id": 2
  },
  {
    "id": 45,
    "question_type": "fill_blank",
    "question_text": "More and more companies ___ [are invest] in AI, and this ___ [is create] new jobs.",
    "correct_answer": "are investing; is creating",
    "suggest_answer": "are invest; is create",
    "explanation": "Present Continuous for developing trends and their consequences.",
    "difficulty": "Hard",
    "topic_id": 2
  },
  {
    "id": 46,
    "question_type": "fill_blank",
    "question_text": "I ___ [am not just read] this article; I ___ [am also take] notes.",
    "correct_answer": "am not just reading; am also taking",
    "suggest_answer": "am not just read; am also take",
    "explanation": "Present Continuous for simultaneous actions with focus on process.",
    "difficulty": "Hard",
    "topic_id": 2
  },
  {
    "id": 47,
    "question_type": "fill_blank",
    "question_text": "The river level ___ [is rise] quickly because it ___ [is rain] heavily in the mountains.",
    "correct_answer": "is rising; is raining",
    "suggest_answer": "is rise; is rain",
    "explanation": "Present Continuous for two related processes happening now.",
    "difficulty": "Hard",
    "topic_id": 2
  },
  {
    "id": 48,
    "question_type": "fill_blank",
    "question_text": "We ___ [are increasingly rely] on technology, and it ___ [is affect] our daily lives.",
    "correct_answer": "are increasingly relying; is affecting",
    "suggest_answer": "are increasingly rely; is affect",
    "explanation": "Present Continuous with adverbs for trends and ongoing effects.",
    "difficulty": "Hard",
    "topic_id": 2
  },
  {
    "id": 49,
    "question_type": "fill_blank",
    "question_text": "Scientists ___ [are currently test] a new vaccine that ___ [is show] promising results.",
    "correct_answer": "are currently testing; is showing",
    "suggest_answer": "are currently test; is show",
    "explanation": "Present Continuous in scientific context for ongoing experiments and temporary states.",
    "difficulty": "Hard",
    "topic_id": 2
  },
  {
    "id": 50,
    "question_type": "fill_blank",
    "question_text": "People ___ [are slowly realise] that climate change ___ [is happen] right now.",
    "correct_answer": "are slowly realising; is happening",
    "suggest_answer": "are slowly realise; is happen",
    "explanation": "Present Continuous for gradual mental change and current global process.",
    "difficulty": "Hard",
    "topic_id": 2
  },
  {
    "id": 51,
    "question_type": "multiple_choice",
    "question_text": "She ___ in the kitchen right now.",
    "correct_answer": "is cooking",
    "difficulty": "Easy",
    "explanation": "Present Continuous for an action happening now. She + is + V-ing.",
    "options": [
      {
        "id": 511,
        "option_text": "cooks",
        "is_correct": 0,
        "question_id": 51
      },
      {
        "id": 512,
        "option_text": "is cooking",
        "is_correct": 1,
        "question_id": 51
      },
      {
        "id": 513,
        "option_text": "cook",
        "is_correct": 0,
        "question_id": 51
      },
      {
        "id": 514,
        "option_text": "is cook",
        "is_correct": 0,
        "question_id": 51
      }
    ],
    "topic_id": 2
  },
  {
    "id": 52,
    "question_type": "multiple_choice",
    "question_text": "They ___ football at the moment.",
    "correct_answer": "are playing",
    "difficulty": "Easy",
    "explanation": "Present Continuous for an action in progress with 'at the moment'.",
    "options": [
      {
        "id": 521,
        "option_text": "play",
        "is_correct": 0,
        "question_id": 52
      },
      {
        "id": 522,
        "option_text": "are play",
        "is_correct": 0,
        "question_id": 52
      },
      {
        "id": 523,
        "option_text": "are playing",
        "is_correct": 1,
        "question_id": 52
      },
      {
        "id": 524,
        "option_text": "plays",
        "is_correct": 0,
        "question_id": 52
      }
    ],
    "topic_id": 2
  },
  {
    "id": 53,
    "question_type": "multiple_choice",
    "question_text": "I ___ to music right now.",
    "correct_answer": "am listening",
    "difficulty": "Easy",
    "explanation": "Present Continuous with I + am + V-ing.",
    "options": [
      {
        "id": 531,
        "option_text": "listen",
        "is_correct": 0,
        "question_id": 53
      },
      {
        "id": 532,
        "option_text": "am listen",
        "is_correct": 0,
        "question_id": 53
      },
      {
        "id": 533,
        "option_text": "am listening",
        "is_correct": 1,
        "question_id": 53
      },
      {
        "id": 534,
        "option_text": "listens",
        "is_correct": 0,
        "question_id": 53
      }
    ],
    "topic_id": 2
  },
  {
    "id": 54,
    "question_type": "multiple_choice",
    "question_text": "He ___ TV at the moment.",
    "correct_answer": "is watching",
    "difficulty": "Easy",
    "explanation": "Present Continuous for temporary action now.",
    "options": [
      {
        "id": 541,
        "option_text": "watches",
        "is_correct": 0,
        "question_id": 54
      },
      {
        "id": 542,
        "option_text": "is watching",
        "is_correct": 1,
        "question_id": 54
      },
      {
        "id": 543,
        "option_text": "watch",
        "is_correct": 0,
        "question_id": 54
      },
      {
        "id": 544,
        "option_text": "is watch",
        "is_correct": 0,
        "question_id": 54
      }
    ],
    "topic_id": 2
  },
  {
    "id": 55,
    "question_type": "multiple_choice",
    "question_text": "We ___ English this semester.",
    "correct_answer": "are learning",
    "difficulty": "Easy",
    "explanation": "Present Continuous for a temporary course.",
    "options": [
      {
        "id": 551,
        "option_text": "learn",
        "is_correct": 0,
        "question_id": 55
      },
      {
        "id": 552,
        "option_text": "are learn",
        "is_correct": 0,
        "question_id": 55
      },
      {
        "id": 553,
        "option_text": "are learning",
        "is_correct": 1,
        "question_id": 55
      },
      {
        "id": 554,
        "option_text": "learns",
        "is_correct": 0,
        "question_id": 55
      }
    ],
    "topic_id": 2
  },
  {
    "id": 56,
    "question_type": "multiple_choice",
    "question_text": "The children ___ in the garden now.",
    "correct_answer": "are playing",
    "difficulty": "Easy",
    "explanation": "Present Continuous with plural subject 'children'.",
    "options": [
      {
        "id": 561,
        "option_text": "play",
        "is_correct": 0,
        "question_id": 56
      },
      {
        "id": 562,
        "option_text": "are playing",
        "is_correct": 1,
        "question_id": 56
      },
      {
        "id": 563,
        "option_text": "are play",
        "is_correct": 0,
        "question_id": 56
      },
      {
        "id": 564,
        "option_text": "plays",
        "is_correct": 0,
        "question_id": 56
      }
    ],
    "topic_id": 2
  },
  {
    "id": 57,
    "question_type": "multiple_choice",
    "question_text": "My mother ___ dinner at the moment.",
    "correct_answer": "is making",
    "difficulty": "Easy",
    "explanation": "Present Continuous for an action happening now.",
    "options": [
      {
        "id": 571,
        "option_text": "makes",
        "is_correct": 0,
        "question_id": 57
      },
      {
        "id": 572,
        "option_text": "is make",
        "is_correct": 0,
        "question_id": 57
      },
      {
        "id": 573,
        "option_text": "is making",
        "is_correct": 1,
        "question_id": 57
      },
      {
        "id": 574,
        "option_text": "make",
        "is_correct": 0,
        "question_id": 57
      }
    ],
    "topic_id": 2
  },
  {
    "id": 58,
    "question_type": "multiple_choice",
    "question_text": "It ___ heavily outside.",
    "correct_answer": "is raining",
    "difficulty": "Easy",
    "explanation": "Present Continuous for weather happening now.",
    "options": [
      {
        "id": 581,
        "option_text": "rains",
        "is_correct": 0,
        "question_id": 58
      },
      {
        "id": 582,
        "option_text": "is raining",
        "is_correct": 1,
        "question_id": 58
      },
      {
        "id": 583,
        "option_text": "is rain",
        "is_correct": 0,
        "question_id": 58
      },
      {
        "id": 584,
        "option_text": "rain",
        "is_correct": 0,
        "question_id": 58
      }
    ],
    "topic_id": 2
  },
  {
    "id": 59,
    "question_type": "multiple_choice",
    "question_text": "I ___ a new laptop this week.",
    "correct_answer": "am using",
    "difficulty": "Easy",
    "explanation": "Present Continuous for a temporary situation.",
    "options": [
      {
        "id": 591,
        "option_text": "use",
        "is_correct": 0,
        "question_id": 59
      },
      {
        "id": 592,
        "option_text": "am use",
        "is_correct": 0,
        "question_id": 59
      },
      {
        "id": 593,
        "option_text": "am using",
        "is_correct": 1,
        "question_id": 59
      },
      {
        "id": 594,
        "option_text": "uses",
        "is_correct": 0,
        "question_id": 59
      }
    ],
    "topic_id": 2
  },
  {
    "id": 60,
    "question_type": "multiple_choice",
    "question_text": "They ___ in a hotel tonight.",
    "correct_answer": "are staying",
    "difficulty": "Easy",
    "explanation": "Present Continuous for temporary accommodation.",
    "options": [
      {
        "id": 601,
        "option_text": "stay",
        "is_correct": 0,
        "question_id": 60
      },
      {
        "id": 602,
        "option_text": "are stay",
        "is_correct": 0,
        "question_id": 60
      },
      {
        "id": 603,
        "option_text": "are staying",
        "is_correct": 1,
        "question_id": 60
      },
      {
        "id": 604,
        "option_text": "stays",
        "is_correct": 0,
        "question_id": 60
      }
    ],
    "topic_id": 2
  },
  {
    "id": 61,
    "question_type": "multiple_choice",
    "question_text": "He ___ to work right now.",
    "correct_answer": "is driving",
    "difficulty": "Easy",
    "explanation": "Present Continuous to describe current movement.",
    "options": [
      {
        "id": 611,
        "option_text": "drives",
        "is_correct": 0,
        "question_id": 61
      },
      {
        "id": 612,
        "option_text": "is driving",
        "is_correct": 1,
        "question_id": 61
      },
      {
        "id": 613,
        "option_text": "drive",
        "is_correct": 0,
        "question_id": 61
      },
      {
        "id": 614,
        "option_text": "is drive",
        "is_correct": 0,
        "question_id": 61
      }
    ],
    "topic_id": 2
  },
  {
    "id": 62,
    "question_type": "multiple_choice",
    "question_text": "We ___ for the bus at the moment.",
    "correct_answer": "are waiting",
    "difficulty": "Easy",
    "explanation": "Present Continuous for temporary action.",
    "options": [
      {
        "id": 621,
        "option_text": "wait",
        "is_correct": 0,
        "question_id": 62
      },
      {
        "id": 622,
        "option_text": "are waiting",
        "is_correct": 1,
        "question_id": 62
      },
      {
        "id": 623,
        "option_text": "are wait",
        "is_correct": 0,
        "question_id": 62
      },
      {
        "id": 624,
        "option_text": "waits",
        "is_correct": 0,
        "question_id": 62
      }
    ],
    "topic_id": 2
  },
  {
    "id": 63,
    "question_type": "multiple_choice",
    "question_text": "She ___ her homework now.",
    "correct_answer": "is doing",
    "difficulty": "Easy",
    "explanation": "Present Continuous with 'do' -> 'doing'.",
    "options": [
      {
        "id": 631,
        "option_text": "does",
        "is_correct": 0,
        "question_id": 63
      },
      {
        "id": 632,
        "option_text": "is doing",
        "is_correct": 1,
        "question_id": 63
      },
      {
        "id": 633,
        "option_text": "do",
        "is_correct": 0,
        "question_id": 63
      },
      {
        "id": 634,
        "option_text": "is do",
        "is_correct": 0,
        "question_id": 63
      }
    ],
    "topic_id": 2
  },
  {
    "id": 64,
    "question_type": "multiple_choice",
    "question_text": "They ___ a movie right now.",
    "correct_answer": "are watching",
    "difficulty": "Easy",
    "explanation": "Present Continuous with plural subject.",
    "options": [
      {
        "id": 641,
        "option_text": "watch",
        "is_correct": 0,
        "question_id": 64
      },
      {
        "id": 642,
        "option_text": "are watching",
        "is_correct": 1,
        "question_id": 64
      },
      {
        "id": 643,
        "option_text": "are watch",
        "is_correct": 0,
        "question_id": 64
      },
      {
        "id": 644,
        "option_text": "watches",
        "is_correct": 0,
        "question_id": 64
      }
    ],
    "topic_id": 2
  },
  {
    "id": 65,
    "question_type": "multiple_choice",
    "question_text": "I ___ a cup of coffee at the moment.",
    "correct_answer": "am drinking",
    "difficulty": "Easy",
    "explanation": "Present Continuous for an action happening now.",
    "options": [
      {
        "id": 651,
        "option_text": "drink",
        "is_correct": 0,
        "question_id": 65
      },
      {
        "id": 652,
        "option_text": "am drinking",
        "is_correct": 1,
        "question_id": 65
      },
      {
        "id": 653,
        "option_text": "am drink",
        "is_correct": 0,
        "question_id": 65
      },
      {
        "id": 654,
        "option_text": "drinks",
        "is_correct": 0,
        "question_id": 65
      }
    ],
    "topic_id": 2
  },
  {
    "id": 66,
    "question_type": "multiple_choice",
    "question_text": "The students ___ an online test this morning.",
    "correct_answer": "are taking",
    "difficulty": "Easy",
    "explanation": "Present Continuous for an activity in progress today.",
    "options": [
      {
        "id": 661,
        "option_text": "take",
        "is_correct": 0,
        "question_id": 66
      },
      {
        "id": 662,
        "option_text": "are take",
        "is_correct": 0,
        "question_id": 66
      },
      {
        "id": 663,
        "option_text": "are taking",
        "is_correct": 1,
        "question_id": 66
      },
      {
        "id": 664,
        "option_text": "takes",
        "is_correct": 0,
        "question_id": 66
      }
    ],
    "topic_id": 2
  },
  {
    "id": 67,
    "question_type": "multiple_choice",
    "question_text": "He ___ a new project this week.",
    "correct_answer": "is starting",
    "difficulty": "Easy",
    "explanation": "Present Continuous for something beginning around now.",
    "options": [
      {
        "id": 671,
        "option_text": "starts",
        "is_correct": 0,
        "question_id": 67
      },
      {
        "id": 672,
        "option_text": "is starting",
        "is_correct": 1,
        "question_id": 67
      },
      {
        "id": 673,
        "option_text": "start",
        "is_correct": 0,
        "question_id": 67
      },
      {
        "id": 674,
        "option_text": "is start",
        "is_correct": 0,
        "question_id": 67
      }
    ],
    "topic_id": 2
  },
  {
    "id": 68,
    "question_type": "multiple_choice",
    "question_text": "We ___ in the library right now.",
    "correct_answer": "are studying",
    "difficulty": "Easy",
    "explanation": "Present Continuous for activity happening at this moment.",
    "options": [
      {
        "id": 681,
        "option_text": "study",
        "is_correct": 0,
        "question_id": 68
      },
      {
        "id": 682,
        "option_text": "are study",
        "is_correct": 0,
        "question_id": 68
      },
      {
        "id": 683,
        "option_text": "are studying",
        "is_correct": 1,
        "question_id": 68
      },
      {
        "id": 684,
        "option_text": "studies",
        "is_correct": 0,
        "question_id": 68
      }
    ],
    "topic_id": 2
  },
  {
    "id": 69,
    "question_type": "multiple_choice",
    "question_text": "She ___ to some relaxing music.",
    "correct_answer": "is listening",
    "difficulty": "Easy",
    "explanation": "Present Continuous describing what she is doing now.",
    "options": [
      {
        "id": 691,
        "option_text": "listens",
        "is_correct": 0,
        "question_id": 69
      },
      {
        "id": 692,
        "option_text": "is listening",
        "is_correct": 1,
        "question_id": 69
      },
      {
        "id": 693,
        "option_text": "listen",
        "is_correct": 0,
        "question_id": 69
      },
      {
        "id": 694,
        "option_text": "is listen",
        "is_correct": 0,
        "question_id": 69
      }
    ],
    "topic_id": 2
  },
  {
    "id": 70,
    "question_type": "multiple_choice",
    "question_text": "They ___ photos of the sunset.",
    "correct_answer": "are taking",
    "difficulty": "Easy",
    "explanation": "Present Continuous for action in progress.",
    "options": [
      {
        "id": 701,
        "option_text": "take",
        "is_correct": 0,
        "question_id": 70
      },
      {
        "id": 702,
        "option_text": "are taking",
        "is_correct": 1,
        "question_id": 70
      },
      {
        "id": 703,
        "option_text": "are take",
        "is_correct": 0,
        "question_id": 70
      },
      {
        "id": 704,
        "option_text": "takes",
        "is_correct": 0,
        "question_id": 70
      }
    ],
    "topic_id": 2
  },
  {
    "id": 71,
    "question_type": "multiple_choice",
    "question_text": "I ___ today because it\u2019s a holiday.",
    "correct_answer": "am not working",
    "difficulty": "Medium",
    "explanation": "Present Continuous negative with 'am not'.",
    "options": [
      {
        "id": 711,
        "option_text": "am not work",
        "is_correct": 0,
        "question_id": 71
      },
      {
        "id": 712,
        "option_text": "am not working",
        "is_correct": 1,
        "question_id": 71
      },
      {
        "id": 713,
        "option_text": "amn't working",
        "is_correct": 0,
        "question_id": 71
      },
      {
        "id": 714,
        "option_text": "don't working",
        "is_correct": 0,
        "question_id": 71
      }
    ],
    "topic_id": 2
  },
  {
    "id": 72,
    "question_type": "multiple_choice",
    "question_text": "She ___ in the office this week.",
    "correct_answer": "is not working",
    "difficulty": "Medium",
    "explanation": "Present Continuous negative for temporary situation.",
    "options": [
      {
        "id": 721,
        "option_text": "isn't working",
        "is_correct": 0,
        "question_id": 72
      },
      {
        "id": 722,
        "option_text": "isn't work",
        "is_correct": 0,
        "question_id": 72
      },
      {
        "id": 723,
        "option_text": "is not working",
        "is_correct": 1,
        "question_id": 72
      },
      {
        "id": 724,
        "option_text": "doesn't working",
        "is_correct": 0,
        "question_id": 72
      }
    ],
    "topic_id": 2
  },
  {
    "id": 73,
    "question_type": "multiple_choice",
    "question_text": "They ___ TV right now; they\u2019re outside.",
    "correct_answer": "are not watching",
    "difficulty": "Medium",
    "explanation": "Present Continuous negative with 'are not/aren't'.",
    "options": [
      {
        "id": 731,
        "option_text": "are not watching",
        "is_correct": 1,
        "question_id": 73
      },
      {
        "id": 732,
        "option_text": "don't watching",
        "is_correct": 0,
        "question_id": 73
      },
      {
        "id": 733,
        "option_text": "aren't watch",
        "is_correct": 0,
        "question_id": 73
      },
      {
        "id": 734,
        "option_text": "aren't to watch",
        "is_correct": 0,
        "question_id": 73
      }
    ],
    "topic_id": 2
  },
  {
    "id": 74,
    "question_type": "multiple_choice",
    "question_text": "He ___ his car at the moment.",
    "correct_answer": "is not driving",
    "difficulty": "Medium",
    "explanation": "Present Continuous negative describing current action.",
    "options": [
      {
        "id": 741,
        "option_text": "isn't driving",
        "is_correct": 0,
        "question_id": 74
      },
      {
        "id": 742,
        "option_text": "is not driving",
        "is_correct": 1,
        "question_id": 74
      },
      {
        "id": 743,
        "option_text": "doesn't driving",
        "is_correct": 0,
        "question_id": 74
      },
      {
        "id": 744,
        "option_text": "isn't drive",
        "is_correct": 0,
        "question_id": 74
      }
    ],
    "topic_id": 2
  },
  {
    "id": 75,
    "question_type": "multiple_choice",
    "question_text": "We ___ at this hotel anymore.",
    "correct_answer": "are not staying",
    "difficulty": "Medium",
    "explanation": "Present Continuous negative for changing temporary situation.",
    "options": [
      {
        "id": 751,
        "option_text": "are not staying",
        "is_correct": 1,
        "question_id": 75
      },
      {
        "id": 752,
        "option_text": "don't staying",
        "is_correct": 0,
        "question_id": 75
      },
      {
        "id": 753,
        "option_text": "aren't stay",
        "is_correct": 0,
        "question_id": 75
      },
      {
        "id": 754,
        "option_text": "are stay not",
        "is_correct": 0,
        "question_id": 75
      }
    ],
    "topic_id": 2
  },
  {
    "id": 76,
    "question_type": "multiple_choice",
    "question_text": "What ___ right now?",
    "correct_answer": "are you doing",
    "difficulty": "Medium",
    "explanation": "Present Continuous WH-question with 'what'.",
    "options": [
      {
        "id": 761,
        "option_text": "you are doing",
        "is_correct": 0,
        "question_id": 76
      },
      {
        "id": 762,
        "option_text": "are you doing",
        "is_correct": 1,
        "question_id": 76
      },
      {
        "id": 763,
        "option_text": "are you do",
        "is_correct": 0,
        "question_id": 76
      },
      {
        "id": 764,
        "option_text": "do you doing",
        "is_correct": 0,
        "question_id": 76
      }
    ],
    "topic_id": 2
  },
  {
    "id": 77,
    "question_type": "multiple_choice",
    "question_text": "Where ___ now?",
    "correct_answer": "is she going",
    "difficulty": "Medium",
    "explanation": "Present Continuous WH-question with 'where'.",
    "options": [
      {
        "id": 771,
        "option_text": "she is going",
        "is_correct": 0,
        "question_id": 77
      },
      {
        "id": 772,
        "option_text": "is she going",
        "is_correct": 1,
        "question_id": 77
      },
      {
        "id": 773,
        "option_text": "is she go",
        "is_correct": 0,
        "question_id": 77
      },
      {
        "id": 774,
        "option_text": "does she going",
        "is_correct": 0,
        "question_id": 77
      }
    ],
    "topic_id": 2
  },
  {
    "id": 78,
    "question_type": "multiple_choice",
    "question_text": "Who ___ so loudly at the moment?",
    "correct_answer": "is talking",
    "difficulty": "Medium",
    "explanation": "Present Continuous question about the subject.",
    "options": [
      {
        "id": 781,
        "option_text": "is talking",
        "is_correct": 1,
        "question_id": 78
      },
      {
        "id": 782,
        "option_text": "is talk",
        "is_correct": 0,
        "question_id": 78
      },
      {
        "id": 783,
        "option_text": "talks",
        "is_correct": 0,
        "question_id": 78
      },
      {
        "id": 784,
        "option_text": "talking",
        "is_correct": 0,
        "question_id": 78
      }
    ],
    "topic_id": 2
  },
  {
    "id": 79,
    "question_type": "multiple_choice",
    "question_text": "Why ___ at each other?",
    "correct_answer": "are they shouting",
    "difficulty": "Medium",
    "explanation": "Present Continuous WH-question with plural subject.",
    "options": [
      {
        "id": 791,
        "option_text": "they are shouting",
        "is_correct": 0,
        "question_id": 79
      },
      {
        "id": 792,
        "option_text": "are they shouting",
        "is_correct": 1,
        "question_id": 79
      },
      {
        "id": 793,
        "option_text": "are they shout",
        "is_correct": 0,
        "question_id": 79
      },
      {
        "id": 794,
        "option_text": "do they shouting",
        "is_correct": 0,
        "question_id": 79
      }
    ],
    "topic_id": 2
  },
  {
    "id": 80,
    "question_type": "multiple_choice",
    "question_text": "___ late this week?",
    "correct_answer": "Is he working",
    "difficulty": "Medium",
    "explanation": "Present Continuous yes/no question, inversion of 'is' and subject.",
    "options": [
      {
        "id": 801,
        "option_text": "Is he working",
        "is_correct": 1,
        "question_id": 80
      },
      {
        "id": 802,
        "option_text": "He is working",
        "is_correct": 0,
        "question_id": 80
      },
      {
        "id": 803,
        "option_text": "Is working he",
        "is_correct": 0,
        "question_id": 80
      },
      {
        "id": 804,
        "option_text": "Does he working",
        "is_correct": 0,
        "question_id": 80
      }
    ],
    "topic_id": 2
  },
  {
    "id": 81,
    "question_type": "multiple_choice",
    "question_text": "___ for the exam tomorrow?",
    "correct_answer": "Are you studying",
    "difficulty": "Medium",
    "explanation": "Present Continuous yes/no question about near-future plan.",
    "options": [
      {
        "id": 811,
        "option_text": "Are you studying",
        "is_correct": 1,
        "question_id": 81
      },
      {
        "id": 812,
        "option_text": "You are studying",
        "is_correct": 0,
        "question_id": 81
      },
      {
        "id": 813,
        "option_text": "Are studying you",
        "is_correct": 0,
        "question_id": 81
      },
      {
        "id": 814,
        "option_text": "Do you studying",
        "is_correct": 0,
        "question_id": 81
      }
    ],
    "topic_id": 2
  },
  {
    "id": 82,
    "question_type": "multiple_choice",
    "question_text": "She ___ about the noise.",
    "correct_answer": "is always complaining",
    "difficulty": "Medium",
    "explanation": "Present Continuous with 'always' to show annoyance.",
    "options": [
      {
        "id": 821,
        "option_text": "always complains",
        "is_correct": 0,
        "question_id": 82
      },
      {
        "id": 822,
        "option_text": "is always complaining",
        "is_correct": 1,
        "question_id": 82
      },
      {
        "id": 823,
        "option_text": "is complaining always",
        "is_correct": 0,
        "question_id": 82
      },
      {
        "id": 824,
        "option_text": "complains always",
        "is_correct": 0,
        "question_id": 82
      }
    ],
    "topic_id": 2
  },
  {
    "id": 83,
    "question_type": "multiple_choice",
    "question_text": "He ___ his phone.",
    "correct_answer": "is constantly checking",
    "difficulty": "Medium",
    "explanation": "Present Continuous emphasising repeated action.",
    "options": [
      {
        "id": 831,
        "option_text": "constantly checks",
        "is_correct": 0,
        "question_id": 83
      },
      {
        "id": 832,
        "option_text": "is constantly checking",
        "is_correct": 1,
        "question_id": 83
      },
      {
        "id": 833,
        "option_text": "is checking constantly",
        "is_correct": 0,
        "question_id": 83
      },
      {
        "id": 834,
        "option_text": "checks constantly",
        "is_correct": 0,
        "question_id": 83
      }
    ],
    "topic_id": 2
  },
  {
    "id": 84,
    "question_type": "multiple_choice",
    "question_text": "They ___ a new road outside our house.",
    "correct_answer": "are currently building",
    "difficulty": "Medium",
    "explanation": "Present Continuous with 'currently' for ongoing project.",
    "options": [
      {
        "id": 841,
        "option_text": "are building currently",
        "is_correct": 0,
        "question_id": 84
      },
      {
        "id": 842,
        "option_text": "are currently building",
        "is_correct": 1,
        "question_id": 84
      },
      {
        "id": 843,
        "option_text": "currently are building",
        "is_correct": 0,
        "question_id": 84
      },
      {
        "id": 844,
        "option_text": "build currently",
        "is_correct": 0,
        "question_id": 84
      }
    ],
    "topic_id": 2
  },
  {
    "id": 85,
    "question_type": "multiple_choice",
    "question_text": "We ___ for the results.",
    "correct_answer": "are still waiting",
    "difficulty": "Medium",
    "explanation": "Present Continuous with 'still' for unfinished action.",
    "options": [
      {
        "id": 851,
        "option_text": "still are waiting",
        "is_correct": 0,
        "question_id": 85
      },
      {
        "id": 852,
        "option_text": "are still waiting",
        "is_correct": 1,
        "question_id": 85
      },
      {
        "id": 853,
        "option_text": "are waiting still",
        "is_correct": 0,
        "question_id": 85
      },
      {
        "id": 854,
        "option_text": "wait still",
        "is_correct": 0,
        "question_id": 85
      }
    ],
    "topic_id": 2
  },
  {
    "id": 86,
    "question_type": "multiple_choice",
    "question_text": "My brother ___ with a friend these days.",
    "correct_answer": "is not living",
    "difficulty": "Medium",
    "explanation": "Present Continuous negative for temporary living situation.",
    "options": [
      {
        "id": 861,
        "option_text": "isn't living",
        "is_correct": 0,
        "question_id": 86
      },
      {
        "id": 862,
        "option_text": "is not living",
        "is_correct": 1,
        "question_id": 86
      },
      {
        "id": 863,
        "option_text": "doesn't living",
        "is_correct": 0,
        "question_id": 86
      },
      {
        "id": 864,
        "option_text": "isn't live",
        "is_correct": 0,
        "question_id": 86
      }
    ],
    "topic_id": 2
  },
  {
    "id": 87,
    "question_type": "multiple_choice",
    "question_text": "What ___ on this week?",
    "correct_answer": "are they working",
    "difficulty": "Medium",
    "explanation": "Present Continuous WH-question about project.",
    "options": [
      {
        "id": 871,
        "option_text": "are they working",
        "is_correct": 1,
        "question_id": 87
      },
      {
        "id": 872,
        "option_text": "they are working",
        "is_correct": 0,
        "question_id": 87
      },
      {
        "id": 873,
        "option_text": "are working they",
        "is_correct": 0,
        "question_id": 87
      },
      {
        "id": 874,
        "option_text": "do they working",
        "is_correct": 0,
        "question_id": 87
      }
    ],
    "topic_id": 2
  },
  {
    "id": 88,
    "question_type": "multiple_choice",
    "question_text": "Who ___ to right now?",
    "correct_answer": "are you talking",
    "difficulty": "Medium",
    "explanation": "Present Continuous WH-question with 'who'.",
    "options": [
      {
        "id": 881,
        "option_text": "are you talking",
        "is_correct": 1,
        "question_id": 88
      },
      {
        "id": 882,
        "option_text": "you are talking",
        "is_correct": 0,
        "question_id": 88
      },
      {
        "id": 883,
        "option_text": "are talking you",
        "is_correct": 0,
        "question_id": 88
      },
      {
        "id": 884,
        "option_text": "do you talking",
        "is_correct": 0,
        "question_id": 88
      }
    ],
    "topic_id": 2
  },
  {
    "id": 89,
    "question_type": "multiple_choice",
    "question_text": "Why ___ so loudly?",
    "correct_answer": "is the baby crying",
    "difficulty": "Medium",
    "explanation": "Present Continuous with 3rd person singular.",
    "options": [
      {
        "id": 891,
        "option_text": "is the baby crying",
        "is_correct": 1,
        "question_id": 89
      },
      {
        "id": 892,
        "option_text": "the baby is crying",
        "is_correct": 0,
        "question_id": 89
      },
      {
        "id": 893,
        "option_text": "is crying the baby",
        "is_correct": 0,
        "question_id": 89
      },
      {
        "id": 894,
        "option_text": "does the baby crying",
        "is_correct": 0,
        "question_id": 89
      }
    ],
    "topic_id": 2
  },
  {
    "id": 90,
    "question_type": "multiple_choice",
    "question_text": "Where ___ this evening?",
    "correct_answer": "are we going",
    "difficulty": "Medium",
    "explanation": "Present Continuous for near-future arrangement.",
    "options": [
      {
        "id": 901,
        "option_text": "are we going",
        "is_correct": 1,
        "question_id": 90
      },
      {
        "id": 902,
        "option_text": "we are going",
        "is_correct": 0,
        "question_id": 90
      },
      {
        "id": 903,
        "option_text": "are going we",
        "is_correct": 0,
        "question_id": 90
      },
      {
        "id": 904,
        "option_text": "do we going",
        "is_correct": 0,
        "question_id": 90
      }
    ],
    "topic_id": 2
  },
  {
    "id": 91,
    "question_type": "multiple_choice",
    "question_text": "I ___ on a project that ___ how people communicate.",
    "correct_answer": "am currently working; is changing",
    "difficulty": "Hard",
    "explanation": "Present Continuous for ongoing project and developing change.",
    "options": [
      {
        "id": 911,
        "option_text": "am currently working; is changing",
        "is_correct": 1,
        "question_id": 91
      },
      {
        "id": 912,
        "option_text": "am current working; changes",
        "is_correct": 0,
        "question_id": 91
      },
      {
        "id": 913,
        "option_text": "am working currently; changes",
        "is_correct": 0,
        "question_id": 91
      },
      {
        "id": 914,
        "option_text": "currently am working; is change",
        "is_correct": 0,
        "question_id": 91
      }
    ],
    "topic_id": 2
  },
  {
    "id": 92,
    "question_type": "multiple_choice",
    "question_text": "She ___ more confident because she ___ every day.",
    "correct_answer": "is gradually becoming; is practising",
    "difficulty": "Hard",
    "explanation": "Present Continuous with adverbs of degree for change and repeated temporary actions.",
    "options": [
      {
        "id": 921,
        "option_text": "is gradually becoming; is practising",
        "is_correct": 1,
        "question_id": 92
      },
      {
        "id": 922,
        "option_text": "gradually is becoming; practises",
        "is_correct": 0,
        "question_id": 92
      },
      {
        "id": 923,
        "option_text": "is becoming gradually; practises",
        "is_correct": 0,
        "question_id": 92
      },
      {
        "id": 924,
        "option_text": "is gradually becoming; practises",
        "is_correct": 0,
        "question_id": 92
      }
    ],
    "topic_id": 2
  },
  {
    "id": 93,
    "question_type": "multiple_choice",
    "question_text": "They ___ late and ___ the whole class.",
    "correct_answer": "are always arriving; are disturbing",
    "difficulty": "Hard",
    "explanation": "Present Continuous with 'always' for criticism and another continuous result.",
    "options": [
      {
        "id": 931,
        "option_text": "always are arriving; are disturbing",
        "is_correct": 0,
        "question_id": 93
      },
      {
        "id": 932,
        "option_text": "are always arriving; are disturbing",
        "is_correct": 1,
        "question_id": 93
      },
      {
        "id": 933,
        "option_text": "are arriving always; disturb",
        "is_correct": 0,
        "question_id": 93
      },
      {
        "id": 934,
        "option_text": "are always arriving; disturb",
        "is_correct": 0,
        "question_id": 93
      }
    ],
    "topic_id": 2
  },
  {
    "id": 94,
    "question_type": "multiple_choice",
    "question_text": "The cost of living ___ while many people ___ to pay their bills.",
    "correct_answer": "is constantly rising; are struggling",
    "difficulty": "Hard",
    "explanation": "Present Continuous for trends and ongoing difficulties.",
    "options": [
      {
        "id": 941,
        "option_text": "constantly is rising; are struggling",
        "is_correct": 0,
        "question_id": 94
      },
      {
        "id": 942,
        "option_text": "is constantly rising; are struggling",
        "is_correct": 1,
        "question_id": 94
      },
      {
        "id": 943,
        "option_text": "is rising constantly; struggle",
        "is_correct": 0,
        "question_id": 94
      },
      {
        "id": 944,
        "option_text": "is constantly rising; struggle",
        "is_correct": 0,
        "question_id": 94
      }
    ],
    "topic_id": 2
  },
  {
    "id": 95,
    "question_type": "multiple_choice",
    "question_text": "More and more companies ___ in green energy, and this ___ new jobs.",
    "correct_answer": "are investing; is creating",
    "difficulty": "Hard",
    "explanation": "Present Continuous for developing trends and their consequences.",
    "options": [
      {
        "id": 951,
        "option_text": "are investing; is creating",
        "is_correct": 1,
        "question_id": 95
      },
      {
        "id": 952,
        "option_text": "invest; is creating",
        "is_correct": 0,
        "question_id": 95
      },
      {
        "id": 953,
        "option_text": "are investing; creates",
        "is_correct": 0,
        "question_id": 95
      },
      {
        "id": 954,
        "option_text": "are invest; is creating",
        "is_correct": 0,
        "question_id": 95
      }
    ],
    "topic_id": 2
  },
  {
    "id": 96,
    "question_type": "multiple_choice",
    "question_text": "I ___ this report and ___ notes at the same time.",
    "correct_answer": "am not just reading; am also taking",
    "difficulty": "Hard",
    "explanation": "Present Continuous for simultaneous detailed actions.",
    "options": [
      {
        "id": 961,
        "option_text": "am not just reading; am also taking",
        "is_correct": 1,
        "question_id": 96
      },
      {
        "id": 962,
        "option_text": "am not just read; am also taking",
        "is_correct": 0,
        "question_id": 96
      },
      {
        "id": 963,
        "option_text": "am not just reading; also am taking",
        "is_correct": 0,
        "question_id": 96
      },
      {
        "id": 964,
        "option_text": "am just not reading; am taking also",
        "is_correct": 0,
        "question_id": 96
      }
    ],
    "topic_id": 2
  },
  {
    "id": 97,
    "question_type": "multiple_choice",
    "question_text": "The river level ___ quickly because it ___ heavily upstream.",
    "correct_answer": "is rising; is raining",
    "difficulty": "Hard",
    "explanation": "Present Continuous for two related processes now.",
    "options": [
      {
        "id": 971,
        "option_text": "is rising; is raining",
        "is_correct": 1,
        "question_id": 97
      },
      {
        "id": 972,
        "option_text": "rises; is raining",
        "is_correct": 0,
        "question_id": 97
      },
      {
        "id": 973,
        "option_text": "is rising; rains",
        "is_correct": 0,
        "question_id": 97
      },
      {
        "id": 974,
        "option_text": "rises; rains",
        "is_correct": 0,
        "question_id": 97
      }
    ],
    "topic_id": 2
  },
  {
    "id": 98,
    "question_type": "multiple_choice",
    "question_text": "We ___ more and more on technology, and it ___ our daily lives.",
    "correct_answer": "are increasingly relying; is affecting",
    "difficulty": "Hard",
    "explanation": "Present Continuous with adverbs for trends and ongoing effects.",
    "options": [
      {
        "id": 981,
        "option_text": "are increasingly relying; is affecting",
        "is_correct": 1,
        "question_id": 98
      },
      {
        "id": 982,
        "option_text": "increasingly are relying; affects",
        "is_correct": 0,
        "question_id": 98
      },
      {
        "id": 983,
        "option_text": "are relying increasingly; affects",
        "is_correct": 0,
        "question_id": 98
      },
      {
        "id": 984,
        "option_text": "are increasingly rely; is affecting",
        "is_correct": 0,
        "question_id": 98
      }
    ],
    "topic_id": 2
  },
  {
    "id": 99,
    "question_type": "multiple_choice",
    "question_text": "Scientists ___ a new drug that ___ promising results so far.",
    "correct_answer": "are currently testing; is showing",
    "difficulty": "Hard",
    "explanation": "Present Continuous in scientific context.",
    "options": [
      {
        "id": 991,
        "option_text": "are currently testing; is showing",
        "is_correct": 1,
        "question_id": 99
      },
      {
        "id": 992,
        "option_text": "currently are testing; shows",
        "is_correct": 0,
        "question_id": 99
      },
      {
        "id": 993,
        "option_text": "are testing currently; is showing",
        "is_correct": 0,
        "question_id": 99
      },
      {
        "id": 994,
        "option_text": "are currently testing; shows",
        "is_correct": 0,
        "question_id": 99
      }
    ],
    "topic_id": 2
  },
  {
    "id": 100,
    "question_type": "multiple_choice",
    "question_text": "People ___ that climate change ___ right now.",
    "correct_answer": "are slowly realising; is happening",
    "difficulty": "Hard",
    "explanation": "Present Continuous for gradual mental change and ongoing global process.",
    "options": [
      {
        "id": 1001,
        "option_text": "are slowly realising; is happening",
        "is_correct": 1,
        "question_id": 100
      },
      {
        "id": 1002,
        "option_text": "slowly are realising; happens",
        "is_correct": 0,
        "question_id": 100
      },
      {
        "id": 1003,
        "option_text": "are realising slowly; is happening",
        "is_correct": 0,
        "question_id": 100
      },
      {
        "id": 1004,
        "option_text": "are slowly realising; happens",
        "is_correct": 0,
        "question_id": 100
      }
    ],
    "topic_id": 2
  }
];

export default questions;