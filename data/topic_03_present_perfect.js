const questions = [
  {
    "id": 1,
    "question_type": "fill_blank",
    "question_text": "I ___ [have live] here for five years.",
    "correct_answer": "have lived",
    "suggest_answer": "have live",
    "explanation": "Present Perfect for an action that started in the past and continues until now.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 2,
    "question_type": "fill_blank",
    "question_text": "She ___ [has just finish] her homework.",
    "correct_answer": "has just finished",
    "suggest_answer": "has just finish",
    "explanation": "Present Perfect with 'just' for a recently completed action.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 3,
    "question_type": "fill_blank",
    "question_text": "They ___ [have visit] Hanoi many times.",
    "correct_answer": "have visited",
    "suggest_answer": "have visit",
    "explanation": "Present Perfect for repeated experiences.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 4,
    "question_type": "fill_blank",
    "question_text": "He ___ [has never be] to London.",
    "correct_answer": "has never been",
    "suggest_answer": "has never be",
    "explanation": "Present Perfect with 'never' for lack of life experience.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 5,
    "question_type": "fill_blank",
    "question_text": "We ___ [have already eat] breakfast.",
    "correct_answer": "have already eaten",
    "suggest_answer": "have already eat",
    "explanation": "Present Perfect with 'already' for completed action before now.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 6,
    "question_type": "fill_blank",
    "question_text": "She ___ [has work] at this company since 2020.",
    "correct_answer": "has worked",
    "suggest_answer": "has work",
    "explanation": "Present Perfect with 'since' for an action starting at a specific time in the past.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 7,
    "question_type": "fill_blank",
    "question_text": "I ___ [have know] him for a long time.",
    "correct_answer": "have known",
    "suggest_answer": "have know",
    "explanation": "Present Perfect with 'for' to show duration.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 8,
    "question_type": "fill_blank",
    "question_text": "They ___ [have not see] that movie.",
    "correct_answer": "have not seen; haven't seen",
    "suggest_answer": "have not see; haven't see",
    "explanation": "Present Perfect negative form for experience.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 9,
    "question_type": "fill_blank",
    "question_text": "He ___ [has already read] this book.",
    "correct_answer": "has already read",
    "suggest_answer": "has already read",
    "explanation": "Present Perfect with 'already' for completed reading.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 10,
    "question_type": "fill_blank",
    "question_text": "We ___ [have just arrive] home.",
    "correct_answer": "have just arrived",
    "suggest_answer": "have just arrive",
    "explanation": "Present Perfect with 'just' for recent arrival.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 11,
    "question_type": "fill_blank",
    "question_text": "She ___ [has never try] Japanese food.",
    "correct_answer": "has never tried",
    "suggest_answer": "has never try",
    "explanation": "Present Perfect with 'never' for missing experience.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 12,
    "question_type": "fill_blank",
    "question_text": "I ___ [have see] that film three times.",
    "correct_answer": "have seen",
    "suggest_answer": "have see",
    "explanation": "Present Perfect for repeated actions in life.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 13,
    "question_type": "fill_blank",
    "question_text": "They ___ [have not finish] their project yet.",
    "correct_answer": "have not finished; haven't finished",
    "suggest_answer": "have not finish; haven't finish",
    "explanation": "Present Perfect negative with 'yet'.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 14,
    "question_type": "fill_blank",
    "question_text": "He ___ [has visit] his grandparents this week.",
    "correct_answer": "has visited",
    "suggest_answer": "has visit",
    "explanation": "Present Perfect for an action in the unfinished time period 'this week'.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 15,
    "question_type": "fill_blank",
    "question_text": "We ___ [have travel] abroad twice.",
    "correct_answer": "have travelled",
    "suggest_answer": "have travel",
    "explanation": "Present Perfect for life experiences.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 16,
    "question_type": "fill_blank",
    "question_text": "She ___ [has lose] her keys.",
    "correct_answer": "has lost",
    "suggest_answer": "has lose",
    "explanation": "Present Perfect for a past action with a present result.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 17,
    "question_type": "fill_blank",
    "question_text": "I ___ [have break] my phone screen.",
    "correct_answer": "have broken",
    "suggest_answer": "have break",
    "explanation": "Present Perfect with irregular past participle 'broken'.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 18,
    "question_type": "fill_blank",
    "question_text": "They ___ [have not call] me today.",
    "correct_answer": "have not called; haven't called",
    "suggest_answer": "have not call; haven't call",
    "explanation": "Present Perfect negative in an unfinished time period 'today'.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 19,
    "question_type": "fill_blank",
    "question_text": "He ___ [has borrow] my bike twice.",
    "correct_answer": "has borrowed",
    "suggest_answer": "has borrow",
    "explanation": "Present Perfect for repeated actions with 3rd person singular.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 20,
    "question_type": "fill_blank",
    "question_text": "We ___ [have hear] this song before.",
    "correct_answer": "have heard",
    "suggest_answer": "have hear",
    "explanation": "Present Perfect for past experience connected to now.",
    "difficulty": "Easy",
    "topic_id": 3
  },
  {
    "id": 21,
    "question_type": "fill_blank",
    "question_text": "I ___ [have not see] him since last month.",
    "correct_answer": "have not seen; haven't seen",
    "suggest_answer": "have not see; haven't see",
    "explanation": "Present Perfect negative with 'since' + point in time.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 22,
    "question_type": "fill_blank",
    "question_text": "She ___ [has live] in this city for ten years.",
    "correct_answer": "has lived",
    "suggest_answer": "has live",
    "explanation": "Present Perfect with 'for' to show duration.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 23,
    "question_type": "fill_blank",
    "question_text": "They ___ [have just start] a new project.",
    "correct_answer": "have just started",
    "suggest_answer": "have just start",
    "explanation": "Present Perfect with 'just' for a newly begun action.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 24,
    "question_type": "fill_blank",
    "question_text": "He ___ [has never drive] a car.",
    "correct_answer": "has never driven",
    "suggest_answer": "has never drive",
    "explanation": "Present Perfect with irregular verb 'drive' -> 'driven'.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 25,
    "question_type": "fill_blank",
    "question_text": "We ___ [have visit] that museum several times.",
    "correct_answer": "have visited",
    "suggest_answer": "have visit",
    "explanation": "Present Perfect for repeated visits.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 26,
    "question_type": "fill_blank",
    "question_text": "How long ___ [have you know] each other?",
    "correct_answer": "have you known",
    "suggest_answer": "have you know",
    "explanation": "Present Perfect question starting with 'How long' + have + subject + past participle.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 27,
    "question_type": "fill_blank",
    "question_text": "Where ___ [has she go] now?",
    "correct_answer": "has she gone",
    "suggest_answer": "has she go",
    "explanation": "Present Perfect WH-question with 'where'.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 28,
    "question_type": "fill_blank",
    "question_text": "What ___ [have they do] today?",
    "correct_answer": "have they done",
    "suggest_answer": "have they do",
    "explanation": "Present Perfect WH-question in an unfinished time period 'today'.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 29,
    "question_type": "fill_blank",
    "question_text": "Why ___ [have you not finish] your report yet?",
    "correct_answer": "have you not finished; haven't you finished",
    "suggest_answer": "have you not finish; haven't you finish",
    "explanation": "Present Perfect question with 'yet' and negative form.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 30,
    "question_type": "fill_blank",
    "question_text": "He ___ [has not call] me for two weeks.",
    "correct_answer": "has not called; hasn't called",
    "suggest_answer": "has not call; hasn't call",
    "explanation": "Present Perfect negative with 'for' to show duration.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 31,
    "question_type": "fill_blank",
    "question_text": "They ___ [have already decide] what to do.",
    "correct_answer": "have already decided",
    "suggest_answer": "have already decide",
    "explanation": "Present Perfect with 'already' for a completed decision.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 32,
    "question_type": "fill_blank",
    "question_text": "We ___ [have never see] such a beautiful view.",
    "correct_answer": "have never seen",
    "suggest_answer": "have never see",
    "explanation": "Present Perfect with 'never' to describe experience.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 33,
    "question_type": "fill_blank",
    "question_text": "She ___ [has not visit] us since Christmas.",
    "correct_answer": "has not visited; hasn't visited",
    "suggest_answer": "has not visit; hasn't visit",
    "explanation": "Present Perfect negative with 'since'.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 34,
    "question_type": "fill_blank",
    "question_text": "How many times ___ [have you read] this book?",
    "correct_answer": "have you read",
    "suggest_answer": "have you read",
    "explanation": "Present Perfect question about frequency of experience.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 35,
    "question_type": "fill_blank",
    "question_text": "He ___ [has break] his leg twice.",
    "correct_answer": "has broken",
    "suggest_answer": "has break",
    "explanation": "Present Perfect with irregular verb 'break' -> 'broken'.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 36,
    "question_type": "fill_blank",
    "question_text": "They ___ [have move] to a new apartment recently.",
    "correct_answer": "have moved",
    "suggest_answer": "have move",
    "explanation": "Present Perfect with 'recently' for a change connected to now.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 37,
    "question_type": "fill_blank",
    "question_text": "I ___ [have not finish] my work yet.",
    "correct_answer": "have not finished; haven't finished",
    "suggest_answer": "have not finish; haven't finish",
    "explanation": "Present Perfect negative with 'yet'.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 38,
    "question_type": "fill_blank",
    "question_text": "She ___ [has just come] back from the meeting.",
    "correct_answer": "has just come",
    "suggest_answer": "has just come",
    "explanation": "Present Perfect with 'just' for recent return.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 39,
    "question_type": "fill_blank",
    "question_text": "We ___ [have be] friends for a long time.",
    "correct_answer": "have been",
    "suggest_answer": "have be",
    "explanation": "Present Perfect with 'been' as past participle of 'be'.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 40,
    "question_type": "fill_blank",
    "question_text": "They ___ [have already clean] the house.",
    "correct_answer": "have already cleaned",
    "suggest_answer": "have already clean",
    "explanation": "Present Perfect with 'already' for finished action.",
    "difficulty": "Medium",
    "topic_id": 3
  },
  {
    "id": 41,
    "question_type": "fill_blank",
    "question_text": "He ___ [has study] English for three years.",
    "correct_answer": "has studied",
    "suggest_answer": "has study",
    "explanation": "Present Perfect with 'for' showing study duration.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 42,
    "question_type": "fill_blank",
    "question_text": "I ___ [have not make] a final decision yet because I ___ [have not receive] all the information.",
    "correct_answer": "have not made; have not received; haven't made; haven't received",
    "suggest_answer": "have not make; have not receive; haven't make; haven't receive",
    "explanation": "Present Perfect negative in a complex sentence with two related unfinished actions.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 43,
    "question_type": "fill_blank",
    "question_text": "She ___ [has work] here since she ___ [has graduate] from university.",
    "correct_answer": "has worked; graduated",
    "suggest_answer": "has work; has graduate",
    "explanation": "Present Perfect in the main clause and past simple in the time clause.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 44,
    "question_type": "fill_blank",
    "question_text": "They ___ [have argue] all morning, so they ___ [have not finish] the report.",
    "correct_answer": "have been arguing; have not finished",
    "suggest_answer": "have argue; have not finish",
    "explanation": "Present Perfect Continuous for ongoing action and Present Perfect for result.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 45,
    "question_type": "fill_blank",
    "question_text": "He ___ [has change] a lot since he ___ [has move] to the city.",
    "correct_answer": "has changed; moved",
    "suggest_answer": "has change; has move",
    "explanation": "Present Perfect for present result and past simple in time clause.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 46,
    "question_type": "fill_blank",
    "question_text": "We ___ [have not solve] the problem yet, but we ___ [have try] several solutions.",
    "correct_answer": "have not solved; have tried; haven't solved; have tried",
    "suggest_answer": "have not solve; have try; haven't solve; have try",
    "explanation": "Present Perfect negative plus affirmative with focus on experience.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 47,
    "question_type": "fill_blank",
    "question_text": "The company ___ [has grow] rapidly because it ___ [has invest] in new technology.",
    "correct_answer": "has grown; has invested",
    "suggest_answer": "has grow; has invest",
    "explanation": "Present Perfect for change over time with cause and effect.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 48,
    "question_type": "fill_blank",
    "question_text": "I ___ [have read] most of her books, but I ___ [have not read] the latest one yet.",
    "correct_answer": "have read; have not read; haven't read",
    "suggest_answer": "have read; have not read; haven't read",
    "explanation": "Present Perfect for experience and unfinished action with 'yet'.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 49,
    "question_type": "fill_blank",
    "question_text": "She ___ [has not reply] to my emails, even though she ___ [has see] them.",
    "correct_answer": "has not replied; has seen; hasn't replied; has seen",
    "suggest_answer": "has not reply; has see; hasn't reply; has see",
    "explanation": "Present Perfect negative contrasted with affirmative to show contrast.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 50,
    "question_type": "fill_blank",
    "question_text": "They ___ [have live] in several countries, so they ___ [have learn] to adapt quickly.",
    "correct_answer": "have lived; have learned",
    "suggest_answer": "have live; have learn",
    "explanation": "Present Perfect for multiple past experiences and their result.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 51,
    "question_type": "fill_blank",
    "question_text": "We ___ [have work] on this project for months, and we ___ [have just reach] an important milestone.",
    "correct_answer": "have worked; have just reached",
    "suggest_answer": "have work; have just reach",
    "explanation": "Present Perfect with 'for' for duration and 'just' for recent result.",
    "difficulty": "Hard",
    "topic_id": 3
  },
  {
    "id": 52,
    "question_type": "multiple_choice",
    "question_text": "I ___ in this city for ten years.",
    "correct_answer": "have lived",
    "difficulty": "Easy",
    "explanation": "Present Perfect with 'for' to show duration from past to now.",
    "options": [
      {
        "id": 521,
        "option_text": "have lived",
        "is_correct": 1,
        "question_id": 52
      },
      {
        "id": 522,
        "option_text": "lived",
        "is_correct": 0,
        "question_id": 52
      },
      {
        "id": 523,
        "option_text": "has lived",
        "is_correct": 0,
        "question_id": 52
      },
      {
        "id": 524,
        "option_text": "am living",
        "is_correct": 0,
        "question_id": 52
      }
    ],
    "topic_id": 3
  },
  {
    "id": 53,
    "question_type": "multiple_choice",
    "question_text": "She ___ just ___ her homework.",
    "correct_answer": "has finished",
    "difficulty": "Easy",
    "explanation": "Present Perfect with 'just' for recent completion.",
    "options": [
      {
        "id": 531,
        "option_text": "has finished",
        "is_correct": 1,
        "question_id": 53
      },
      {
        "id": 532,
        "option_text": "have finished",
        "is_correct": 0,
        "question_id": 53
      },
      {
        "id": 533,
        "option_text": "finished",
        "is_correct": 0,
        "question_id": 53
      },
      {
        "id": 534,
        "option_text": "is finishing",
        "is_correct": 0,
        "question_id": 53
      }
    ],
    "topic_id": 3
  },
  {
    "id": 54,
    "question_type": "multiple_choice",
    "question_text": "They ___ Hanoi many times.",
    "correct_answer": "have visited",
    "difficulty": "Easy",
    "explanation": "Present Perfect for repeated experiences.",
    "options": [
      {
        "id": 541,
        "option_text": "visited",
        "is_correct": 0,
        "question_id": 54
      },
      {
        "id": 542,
        "option_text": "have visited",
        "is_correct": 1,
        "question_id": 54
      },
      {
        "id": 543,
        "option_text": "has visited",
        "is_correct": 0,
        "question_id": 54
      },
      {
        "id": 544,
        "option_text": "are visiting",
        "is_correct": 0,
        "question_id": 54
      }
    ],
    "topic_id": 3
  },
  {
    "id": 55,
    "question_type": "multiple_choice",
    "question_text": "He ___ never ___ to London.",
    "correct_answer": "has been",
    "difficulty": "Easy",
    "explanation": "Present Perfect with 'never' for life experience.",
    "options": [
      {
        "id": 551,
        "option_text": "has been",
        "is_correct": 1,
        "question_id": 55
      },
      {
        "id": 552,
        "option_text": "have been",
        "is_correct": 0,
        "question_id": 55
      },
      {
        "id": 553,
        "option_text": "was",
        "is_correct": 0,
        "question_id": 55
      },
      {
        "id": 554,
        "option_text": "is",
        "is_correct": 0,
        "question_id": 55
      }
    ],
    "topic_id": 3
  },
  {
    "id": 56,
    "question_type": "multiple_choice",
    "question_text": "We ___ already ___ breakfast.",
    "correct_answer": "have eaten",
    "difficulty": "Easy",
    "explanation": "Present Perfect with 'already' and irregular verb 'eat' -> 'eaten'.",
    "options": [
      {
        "id": 561,
        "option_text": "have eaten",
        "is_correct": 1,
        "question_id": 56
      },
      {
        "id": 562,
        "option_text": "ate",
        "is_correct": 0,
        "question_id": 56
      },
      {
        "id": 563,
        "option_text": "has eaten",
        "is_correct": 0,
        "question_id": 56
      },
      {
        "id": 564,
        "option_text": "are eating",
        "is_correct": 0,
        "question_id": 56
      }
    ],
    "topic_id": 3
  },
  {
    "id": 57,
    "question_type": "multiple_choice",
    "question_text": "She ___ at this company since 2020.",
    "correct_answer": "has worked",
    "difficulty": "Easy",
    "explanation": "Present Perfect with 'since' + point in time.",
    "options": [
      {
        "id": 571,
        "option_text": "has worked",
        "is_correct": 1,
        "question_id": 57
      },
      {
        "id": 572,
        "option_text": "have worked",
        "is_correct": 0,
        "question_id": 57
      },
      {
        "id": 573,
        "option_text": "worked",
        "is_correct": 0,
        "question_id": 57
      },
      {
        "id": 574,
        "option_text": "is working",
        "is_correct": 0,
        "question_id": 57
      }
    ],
    "topic_id": 3
  },
  {
    "id": 58,
    "question_type": "multiple_choice",
    "question_text": "I ___ him for a long time.",
    "correct_answer": "have known",
    "difficulty": "Easy",
    "explanation": "Present Perfect with 'for' to show duration.",
    "options": [
      {
        "id": 581,
        "option_text": "have known",
        "is_correct": 1,
        "question_id": 58
      },
      {
        "id": 582,
        "option_text": "knew",
        "is_correct": 0,
        "question_id": 58
      },
      {
        "id": 583,
        "option_text": "have knew",
        "is_correct": 0,
        "question_id": 58
      },
      {
        "id": 584,
        "option_text": "know",
        "is_correct": 0,
        "question_id": 58
      }
    ],
    "topic_id": 3
  },
  {
    "id": 59,
    "question_type": "multiple_choice",
    "question_text": "They ___ not ___ that movie yet.",
    "correct_answer": "have seen",
    "difficulty": "Easy",
    "explanation": "Present Perfect negative with 'yet' (note: full sentence would use 'have not seen').",
    "options": [
      {
        "id": 591,
        "option_text": "have seen",
        "is_correct": 1,
        "question_id": 59
      },
      {
        "id": 592,
        "option_text": "have not seen",
        "is_correct": 0,
        "question_id": 59
      },
      {
        "id": 593,
        "option_text": "has seen",
        "is_correct": 0,
        "question_id": 59
      },
      {
        "id": 594,
        "option_text": "didn't see",
        "is_correct": 0,
        "question_id": 59
      }
    ],
    "topic_id": 3
  },
  {
    "id": 60,
    "question_type": "multiple_choice",
    "question_text": "He ___ already ___ this book.",
    "correct_answer": "has read",
    "difficulty": "Easy",
    "explanation": "Present Perfect with 'already' and same form for past participle and base form.",
    "options": [
      {
        "id": 601,
        "option_text": "has read",
        "is_correct": 1,
        "question_id": 60
      },
      {
        "id": 602,
        "option_text": "have read",
        "is_correct": 0,
        "question_id": 60
      },
      {
        "id": 603,
        "option_text": "read",
        "is_correct": 0,
        "question_id": 60
      },
      {
        "id": 604,
        "option_text": "is reading",
        "is_correct": 0,
        "question_id": 60
      }
    ],
    "topic_id": 3
  },
  {
    "id": 61,
    "question_type": "multiple_choice",
    "question_text": "We ___ just ___ home.",
    "correct_answer": "have arrived",
    "difficulty": "Easy",
    "explanation": "Present Perfect with 'just' for recent arrival.",
    "options": [
      {
        "id": 611,
        "option_text": "have arrived",
        "is_correct": 1,
        "question_id": 61
      },
      {
        "id": 612,
        "option_text": "arrived",
        "is_correct": 0,
        "question_id": 61
      },
      {
        "id": 613,
        "option_text": "has arrived",
        "is_correct": 0,
        "question_id": 61
      },
      {
        "id": 614,
        "option_text": "are arriving",
        "is_correct": 0,
        "question_id": 61
      }
    ],
    "topic_id": 3
  },
  {
    "id": 62,
    "question_type": "multiple_choice",
    "question_text": "She ___ never ___ Japanese food.",
    "correct_answer": "has tried",
    "difficulty": "Easy",
    "explanation": "Present Perfect with 'never' for lack of experience.",
    "options": [
      {
        "id": 621,
        "option_text": "has tried",
        "is_correct": 1,
        "question_id": 62
      },
      {
        "id": 622,
        "option_text": "have tried",
        "is_correct": 0,
        "question_id": 62
      },
      {
        "id": 623,
        "option_text": "tried",
        "is_correct": 0,
        "question_id": 62
      },
      {
        "id": 624,
        "option_text": "is trying",
        "is_correct": 0,
        "question_id": 62
      }
    ],
    "topic_id": 3
  },
  {
    "id": 63,
    "question_type": "multiple_choice",
    "question_text": "I ___ that film three times.",
    "correct_answer": "have seen",
    "difficulty": "Easy",
    "explanation": "Present Perfect for repeated actions.",
    "options": [
      {
        "id": 631,
        "option_text": "have seen",
        "is_correct": 1,
        "question_id": 63
      },
      {
        "id": 632,
        "option_text": "saw",
        "is_correct": 0,
        "question_id": 63
      },
      {
        "id": 633,
        "option_text": "see",
        "is_correct": 0,
        "question_id": 63
      },
      {
        "id": 634,
        "option_text": "has seen",
        "is_correct": 0,
        "question_id": 63
      }
    ],
    "topic_id": 3
  },
  {
    "id": 64,
    "question_type": "multiple_choice",
    "question_text": "They ___ not ___ their project yet.",
    "correct_answer": "have finished",
    "difficulty": "Easy",
    "explanation": "Present Perfect negative context with 'yet' (correct full sentence: 'have not finished').",
    "options": [
      {
        "id": 641,
        "option_text": "have finished",
        "is_correct": 1,
        "question_id": 64
      },
      {
        "id": 642,
        "option_text": "have not finished",
        "is_correct": 0,
        "question_id": 64
      },
      {
        "id": 643,
        "option_text": "finished",
        "is_correct": 0,
        "question_id": 64
      },
      {
        "id": 644,
        "option_text": "didn't finish",
        "is_correct": 0,
        "question_id": 64
      }
    ],
    "topic_id": 3
  },
  {
    "id": 65,
    "question_type": "multiple_choice",
    "question_text": "He ___ his grandparents this week.",
    "correct_answer": "has visited",
    "difficulty": "Easy",
    "explanation": "Present Perfect with 'this week' as unfinished time period.",
    "options": [
      {
        "id": 651,
        "option_text": "has visited",
        "is_correct": 1,
        "question_id": 65
      },
      {
        "id": 652,
        "option_text": "visited",
        "is_correct": 0,
        "question_id": 65
      },
      {
        "id": 653,
        "option_text": "have visited",
        "is_correct": 0,
        "question_id": 65
      },
      {
        "id": 654,
        "option_text": "is visiting",
        "is_correct": 0,
        "question_id": 65
      }
    ],
    "topic_id": 3
  },
  {
    "id": 66,
    "question_type": "multiple_choice",
    "question_text": "We ___ abroad twice.",
    "correct_answer": "have travelled",
    "difficulty": "Easy",
    "explanation": "Present Perfect for life experience.",
    "options": [
      {
        "id": 661,
        "option_text": "have travelled",
        "is_correct": 1,
        "question_id": 66
      },
      {
        "id": 662,
        "option_text": "travelled",
        "is_correct": 0,
        "question_id": 66
      },
      {
        "id": 663,
        "option_text": "has travelled",
        "is_correct": 0,
        "question_id": 66
      },
      {
        "id": 664,
        "option_text": "are travelling",
        "is_correct": 0,
        "question_id": 66
      }
    ],
    "topic_id": 3
  },
  {
    "id": 67,
    "question_type": "multiple_choice",
    "question_text": "She ___ her keys.",
    "correct_answer": "has lost",
    "difficulty": "Easy",
    "explanation": "Present Perfect for past action with present result.",
    "options": [
      {
        "id": 671,
        "option_text": "has lost",
        "is_correct": 1,
        "question_id": 67
      },
      {
        "id": 672,
        "option_text": "lost",
        "is_correct": 0,
        "question_id": 67
      },
      {
        "id": 673,
        "option_text": "have lost",
        "is_correct": 0,
        "question_id": 67
      },
      {
        "id": 674,
        "option_text": "is losing",
        "is_correct": 0,
        "question_id": 67
      }
    ],
    "topic_id": 3
  },
  {
    "id": 68,
    "question_type": "multiple_choice",
    "question_text": "I ___ my phone screen.",
    "correct_answer": "have broken",
    "difficulty": "Easy",
    "explanation": "Present Perfect with irregular past participle 'broken'.",
    "options": [
      {
        "id": 681,
        "option_text": "have broken",
        "is_correct": 1,
        "question_id": 68
      },
      {
        "id": 682,
        "option_text": "broke",
        "is_correct": 0,
        "question_id": 68
      },
      {
        "id": 683,
        "option_text": "has broken",
        "is_correct": 0,
        "question_id": 68
      },
      {
        "id": 684,
        "option_text": "am breaking",
        "is_correct": 0,
        "question_id": 68
      }
    ],
    "topic_id": 3
  },
  {
    "id": 69,
    "question_type": "multiple_choice",
    "question_text": "They ___ not ___ me today.",
    "correct_answer": "have called",
    "difficulty": "Easy",
    "explanation": "Present Perfect negative context in 'today' as unfinished time.",
    "options": [
      {
        "id": 691,
        "option_text": "have called",
        "is_correct": 1,
        "question_id": 69
      },
      {
        "id": 692,
        "option_text": "have not called",
        "is_correct": 0,
        "question_id": 69
      },
      {
        "id": 693,
        "option_text": "called",
        "is_correct": 0,
        "question_id": 69
      },
      {
        "id": 694,
        "option_text": "didn't call",
        "is_correct": 0,
        "question_id": 69
      }
    ],
    "topic_id": 3
  },
  {
    "id": 70,
    "question_type": "multiple_choice",
    "question_text": "He ___ my bike twice.",
    "correct_answer": "has borrowed",
    "difficulty": "Easy",
    "explanation": "Present Perfect for repeated actions.",
    "options": [
      {
        "id": 701,
        "option_text": "has borrowed",
        "is_correct": 1,
        "question_id": 70
      },
      {
        "id": 702,
        "option_text": "borrowed",
        "is_correct": 0,
        "question_id": 70
      },
      {
        "id": 703,
        "option_text": "have borrowed",
        "is_correct": 0,
        "question_id": 70
      },
      {
        "id": 704,
        "option_text": "is borrowing",
        "is_correct": 0,
        "question_id": 70
      }
    ],
    "topic_id": 3
  },
  {
    "id": 71,
    "question_type": "multiple_choice",
    "question_text": "We ___ this song before.",
    "correct_answer": "have heard",
    "difficulty": "Easy",
    "explanation": "Present Perfect for experience connected to present.",
    "options": [
      {
        "id": 711,
        "option_text": "have heard",
        "is_correct": 1,
        "question_id": 71
      },
      {
        "id": 712,
        "option_text": "heard",
        "is_correct": 0,
        "question_id": 71
      },
      {
        "id": 713,
        "option_text": "has heard",
        "is_correct": 0,
        "question_id": 71
      },
      {
        "id": 714,
        "option_text": "are hearing",
        "is_correct": 0,
        "question_id": 71
      }
    ],
    "topic_id": 3
  },
  {
    "id": 72,
    "question_type": "multiple_choice",
    "question_text": "I ___ him since last month.",
    "correct_answer": "have not seen",
    "difficulty": "Medium",
    "explanation": "Present Perfect negative with 'since' + point in time.",
    "options": [
      {
        "id": 721,
        "option_text": "have not seen",
        "is_correct": 1,
        "question_id": 72
      },
      {
        "id": 722,
        "option_text": "didn't see",
        "is_correct": 0,
        "question_id": 72
      },
      {
        "id": 723,
        "option_text": "haven't saw",
        "is_correct": 0,
        "question_id": 72
      },
      {
        "id": 724,
        "option_text": "don't see",
        "is_correct": 0,
        "question_id": 72
      }
    ],
    "topic_id": 3
  },
  {
    "id": 73,
    "question_type": "multiple_choice",
    "question_text": "She ___ in this city for ten years.",
    "correct_answer": "has lived",
    "difficulty": "Medium",
    "explanation": "Present Perfect with 'for' + period of time.",
    "options": [
      {
        "id": 731,
        "option_text": "has lived",
        "is_correct": 1,
        "question_id": 73
      },
      {
        "id": 732,
        "option_text": "have lived",
        "is_correct": 0,
        "question_id": 73
      },
      {
        "id": 733,
        "option_text": "lived",
        "is_correct": 0,
        "question_id": 73
      },
      {
        "id": 734,
        "option_text": "is living",
        "is_correct": 0,
        "question_id": 73
      }
    ],
    "topic_id": 3
  },
  {
    "id": 74,
    "question_type": "multiple_choice",
    "question_text": "They ___ just ___ a new project.",
    "correct_answer": "have started",
    "difficulty": "Medium",
    "explanation": "Present Perfect with 'just' for recent start.",
    "options": [
      {
        "id": 741,
        "option_text": "have started",
        "is_correct": 1,
        "question_id": 74
      },
      {
        "id": 742,
        "option_text": "started",
        "is_correct": 0,
        "question_id": 74
      },
      {
        "id": 743,
        "option_text": "has started",
        "is_correct": 0,
        "question_id": 74
      },
      {
        "id": 744,
        "option_text": "are starting",
        "is_correct": 0,
        "question_id": 74
      }
    ],
    "topic_id": 3
  },
  {
    "id": 75,
    "question_type": "multiple_choice",
    "question_text": "He ___ never ___ a car.",
    "correct_answer": "has driven",
    "difficulty": "Medium",
    "explanation": "Present Perfect with irregular past participle 'driven'.",
    "options": [
      {
        "id": 751,
        "option_text": "has driven",
        "is_correct": 1,
        "question_id": 75
      },
      {
        "id": 752,
        "option_text": "has drove",
        "is_correct": 0,
        "question_id": 75
      },
      {
        "id": 753,
        "option_text": "drived",
        "is_correct": 0,
        "question_id": 75
      },
      {
        "id": 754,
        "option_text": "drove",
        "is_correct": 0,
        "question_id": 75
      }
    ],
    "topic_id": 3
  },
  {
    "id": 76,
    "question_type": "multiple_choice",
    "question_text": "We ___ that museum several times.",
    "correct_answer": "have visited",
    "difficulty": "Medium",
    "explanation": "Present Perfect for repeated visits.",
    "options": [
      {
        "id": 761,
        "option_text": "have visited",
        "is_correct": 1,
        "question_id": 76
      },
      {
        "id": 762,
        "option_text": "visited",
        "is_correct": 0,
        "question_id": 76
      },
      {
        "id": 763,
        "option_text": "has visited",
        "is_correct": 0,
        "question_id": 76
      },
      {
        "id": 764,
        "option_text": "are visiting",
        "is_correct": 0,
        "question_id": 76
      }
    ],
    "topic_id": 3
  },
  {
    "id": 77,
    "question_type": "multiple_choice",
    "question_text": "How long ___ each other?",
    "correct_answer": "have you known",
    "difficulty": "Medium",
    "explanation": "Present Perfect question with 'How long'.",
    "options": [
      {
        "id": 771,
        "option_text": "have you known",
        "is_correct": 1,
        "question_id": 77
      },
      {
        "id": 772,
        "option_text": "did you know",
        "is_correct": 0,
        "question_id": 77
      },
      {
        "id": 773,
        "option_text": "have you knew",
        "is_correct": 0,
        "question_id": 77
      },
      {
        "id": 774,
        "option_text": "do you know",
        "is_correct": 0,
        "question_id": 77
      }
    ],
    "topic_id": 3
  },
  {
    "id": 78,
    "question_type": "multiple_choice",
    "question_text": "Where ___ now?",
    "correct_answer": "has she gone",
    "difficulty": "Medium",
    "explanation": "Present Perfect WH-question asking about result.",
    "options": [
      {
        "id": 781,
        "option_text": "has she gone",
        "is_correct": 1,
        "question_id": 78
      },
      {
        "id": 782,
        "option_text": "did she go",
        "is_correct": 0,
        "question_id": 78
      },
      {
        "id": 783,
        "option_text": "has she went",
        "is_correct": 0,
        "question_id": 78
      },
      {
        "id": 784,
        "option_text": "is she going",
        "is_correct": 0,
        "question_id": 78
      }
    ],
    "topic_id": 3
  },
  {
    "id": 79,
    "question_type": "multiple_choice",
    "question_text": "What ___ today?",
    "correct_answer": "have they done",
    "difficulty": "Medium",
    "explanation": "Present Perfect about actions in 'today'.",
    "options": [
      {
        "id": 791,
        "option_text": "have they done",
        "is_correct": 1,
        "question_id": 79
      },
      {
        "id": 792,
        "option_text": "did they do",
        "is_correct": 0,
        "question_id": 79
      },
      {
        "id": 793,
        "option_text": "have they did",
        "is_correct": 0,
        "question_id": 79
      },
      {
        "id": 794,
        "option_text": "are they doing",
        "is_correct": 0,
        "question_id": 79
      }
    ],
    "topic_id": 3
  },
  {
    "id": 80,
    "question_type": "multiple_choice",
    "question_text": "Why ___ your report yet?",
    "correct_answer": "have you not finished",
    "difficulty": "Medium",
    "explanation": "Present Perfect question with 'yet' and negative form.",
    "options": [
      {
        "id": 801,
        "option_text": "have you not finished",
        "is_correct": 1,
        "question_id": 80
      },
      {
        "id": 802,
        "option_text": "haven't you finished",
        "is_correct": 0,
        "question_id": 80
      },
      {
        "id": 803,
        "option_text": "didn't you finish",
        "is_correct": 0,
        "question_id": 80
      },
      {
        "id": 804,
        "option_text": "don't you finish",
        "is_correct": 0,
        "question_id": 80
      }
    ],
    "topic_id": 3
  },
  {
    "id": 81,
    "question_type": "multiple_choice",
    "question_text": "He ___ me for two weeks.",
    "correct_answer": "has not called",
    "difficulty": "Medium",
    "explanation": "Present Perfect negative with 'for'.",
    "options": [
      {
        "id": 811,
        "option_text": "has not called",
        "is_correct": 1,
        "question_id": 81
      },
      {
        "id": 812,
        "option_text": "have not called",
        "is_correct": 0,
        "question_id": 81
      },
      {
        "id": 813,
        "option_text": "didn't call",
        "is_correct": 0,
        "question_id": 81
      },
      {
        "id": 814,
        "option_text": "doesn't call",
        "is_correct": 0,
        "question_id": 81
      }
    ],
    "topic_id": 3
  },
  {
    "id": 82,
    "question_type": "multiple_choice",
    "question_text": "They ___ already ___ what to do.",
    "correct_answer": "have decided",
    "difficulty": "Medium",
    "explanation": "Present Perfect with 'already'.",
    "options": [
      {
        "id": 821,
        "option_text": "have decided",
        "is_correct": 1,
        "question_id": 82
      },
      {
        "id": 822,
        "option_text": "decided",
        "is_correct": 0,
        "question_id": 82
      },
      {
        "id": 823,
        "option_text": "has decided",
        "is_correct": 0,
        "question_id": 82
      },
      {
        "id": 824,
        "option_text": "are deciding",
        "is_correct": 0,
        "question_id": 82
      }
    ],
    "topic_id": 3
  },
  {
    "id": 83,
    "question_type": "multiple_choice",
    "question_text": "We ___ never ___ such a beautiful view.",
    "correct_answer": "have seen",
    "difficulty": "Medium",
    "explanation": "Present Perfect with 'never' for experience.",
    "options": [
      {
        "id": 831,
        "option_text": "have seen",
        "is_correct": 1,
        "question_id": 83
      },
      {
        "id": 832,
        "option_text": "saw",
        "is_correct": 0,
        "question_id": 83
      },
      {
        "id": 833,
        "option_text": "seen",
        "is_correct": 0,
        "question_id": 83
      },
      {
        "id": 834,
        "option_text": "has seen",
        "is_correct": 0,
        "question_id": 83
      }
    ],
    "topic_id": 3
  },
  {
    "id": 84,
    "question_type": "multiple_choice",
    "question_text": "She ___ us since Christmas.",
    "correct_answer": "has not visited",
    "difficulty": "Medium",
    "explanation": "Present Perfect negative with 'since'.",
    "options": [
      {
        "id": 841,
        "option_text": "has not visited",
        "is_correct": 1,
        "question_id": 84
      },
      {
        "id": 842,
        "option_text": "have not visited",
        "is_correct": 0,
        "question_id": 84
      },
      {
        "id": 843,
        "option_text": "didn't visit",
        "is_correct": 0,
        "question_id": 84
      },
      {
        "id": 844,
        "option_text": "doesn't visit",
        "is_correct": 0,
        "question_id": 84
      }
    ],
    "topic_id": 3
  },
  {
    "id": 85,
    "question_type": "multiple_choice",
    "question_text": "How many times ___ this book?",
    "correct_answer": "have you read",
    "difficulty": "Medium",
    "explanation": "Present Perfect question about frequency.",
    "options": [
      {
        "id": 851,
        "option_text": "have you read",
        "is_correct": 1,
        "question_id": 85
      },
      {
        "id": 852,
        "option_text": "did you read",
        "is_correct": 0,
        "question_id": 85
      },
      {
        "id": 853,
        "option_text": "have you readed",
        "is_correct": 0,
        "question_id": 85
      },
      {
        "id": 854,
        "option_text": "do you read",
        "is_correct": 0,
        "question_id": 85
      }
    ],
    "topic_id": 3
  },
  {
    "id": 86,
    "question_type": "multiple_choice",
    "question_text": "He ___ his leg twice.",
    "correct_answer": "has broken",
    "difficulty": "Medium",
    "explanation": "Present Perfect with irregular verb 'break' -> 'broken'.",
    "options": [
      {
        "id": 861,
        "option_text": "has broken",
        "is_correct": 1,
        "question_id": 86
      },
      {
        "id": 862,
        "option_text": "broke",
        "is_correct": 0,
        "question_id": 86
      },
      {
        "id": 863,
        "option_text": "has broke",
        "is_correct": 0,
        "question_id": 86
      },
      {
        "id": 864,
        "option_text": "broken",
        "is_correct": 0,
        "question_id": 86
      }
    ],
    "topic_id": 3
  },
  {
    "id": 87,
    "question_type": "multiple_choice",
    "question_text": "They ___ to a new apartment recently.",
    "correct_answer": "have moved",
    "difficulty": "Medium",
    "explanation": "Present Perfect with 'recently' for change.",
    "options": [
      {
        "id": 871,
        "option_text": "have moved",
        "is_correct": 1,
        "question_id": 87
      },
      {
        "id": 872,
        "option_text": "moved",
        "is_correct": 0,
        "question_id": 87
      },
      {
        "id": 873,
        "option_text": "has moved",
        "is_correct": 0,
        "question_id": 87
      },
      {
        "id": 874,
        "option_text": "are moving",
        "is_correct": 0,
        "question_id": 87
      }
    ],
    "topic_id": 3
  },
  {
    "id": 88,
    "question_type": "multiple_choice",
    "question_text": "I ___ my work yet.",
    "correct_answer": "have not finished",
    "difficulty": "Medium",
    "explanation": "Present Perfect negative with 'yet'.",
    "options": [
      {
        "id": 881,
        "option_text": "have not finished",
        "is_correct": 1,
        "question_id": 88
      },
      {
        "id": 882,
        "option_text": "didn't finish",
        "is_correct": 0,
        "question_id": 88
      },
      {
        "id": 883,
        "option_text": "haven't finish",
        "is_correct": 0,
        "question_id": 88
      },
      {
        "id": 884,
        "option_text": "don't finish",
        "is_correct": 0,
        "question_id": 88
      }
    ],
    "topic_id": 3
  },
  {
    "id": 89,
    "question_type": "multiple_choice",
    "question_text": "She ___ just ___ back from the meeting.",
    "correct_answer": "has come",
    "difficulty": "Medium",
    "explanation": "Present Perfect with 'just' for recent return.",
    "options": [
      {
        "id": 891,
        "option_text": "has come",
        "is_correct": 1,
        "question_id": 89
      },
      {
        "id": 892,
        "option_text": "has came",
        "is_correct": 0,
        "question_id": 89
      },
      {
        "id": 893,
        "option_text": "have come",
        "is_correct": 0,
        "question_id": 89
      },
      {
        "id": 894,
        "option_text": "came",
        "is_correct": 0,
        "question_id": 89
      }
    ],
    "topic_id": 3
  },
  {
    "id": 90,
    "question_type": "multiple_choice",
    "question_text": "We ___ friends for a long time.",
    "correct_answer": "have been",
    "difficulty": "Medium",
    "explanation": "Present Perfect with 'been' + 'for'.",
    "options": [
      {
        "id": 901,
        "option_text": "have been",
        "is_correct": 1,
        "question_id": 90
      },
      {
        "id": 902,
        "option_text": "were",
        "is_correct": 0,
        "question_id": 90
      },
      {
        "id": 903,
        "option_text": "have being",
        "is_correct": 0,
        "question_id": 90
      },
      {
        "id": 904,
        "option_text": "are",
        "is_correct": 0,
        "question_id": 90
      }
    ],
    "topic_id": 3
  },
  {
    "id": 91,
    "question_type": "multiple_choice",
    "question_text": "They ___ already ___ the house.",
    "correct_answer": "have cleaned",
    "difficulty": "Medium",
    "explanation": "Present Perfect with 'already'.",
    "options": [
      {
        "id": 911,
        "option_text": "have cleaned",
        "is_correct": 1,
        "question_id": 91
      },
      {
        "id": 912,
        "option_text": "cleaned",
        "is_correct": 0,
        "question_id": 91
      },
      {
        "id": 913,
        "option_text": "has cleaned",
        "is_correct": 0,
        "question_id": 91
      },
      {
        "id": 914,
        "option_text": "are cleaning",
        "is_correct": 0,
        "question_id": 91
      }
    ],
    "topic_id": 3
  },
  {
    "id": 92,
    "question_type": "multiple_choice",
    "question_text": "He ___ English for three years.",
    "correct_answer": "has studied",
    "difficulty": "Hard",
    "explanation": "Present Perfect with 'for' to show study duration.",
    "options": [
      {
        "id": 921,
        "option_text": "has studied",
        "is_correct": 1,
        "question_id": 92
      },
      {
        "id": 922,
        "option_text": "have studied",
        "is_correct": 0,
        "question_id": 92
      },
      {
        "id": 923,
        "option_text": "studied",
        "is_correct": 0,
        "question_id": 92
      },
      {
        "id": 924,
        "option_text": "is studying",
        "is_correct": 0,
        "question_id": 92
      }
    ],
    "topic_id": 3
  },
  {
    "id": 93,
    "question_type": "multiple_choice",
    "question_text": "I ___ a final decision yet because I ___ all the information.",
    "correct_answer": "have not made; have not received",
    "difficulty": "Hard",
    "explanation": "Present Perfect negative for two unfinished related actions.",
    "options": [
      {
        "id": 931,
        "option_text": "have not made; have not received",
        "is_correct": 1,
        "question_id": 93
      },
      {
        "id": 932,
        "option_text": "have not made; did not receive",
        "is_correct": 0,
        "question_id": 93
      },
      {
        "id": 933,
        "option_text": "did not make; have not received",
        "is_correct": 0,
        "question_id": 93
      },
      {
        "id": 934,
        "option_text": "haven't make; haven't receive",
        "is_correct": 0,
        "question_id": 93
      }
    ],
    "topic_id": 3
  },
  {
    "id": 94,
    "question_type": "multiple_choice",
    "question_text": "She ___ here since she ___ from university.",
    "correct_answer": "has worked; graduated",
    "difficulty": "Hard",
    "explanation": "Present Perfect with 'since' and past simple in time clause.",
    "options": [
      {
        "id": 941,
        "option_text": "has worked; graduated",
        "is_correct": 1,
        "question_id": 94
      },
      {
        "id": 942,
        "option_text": "worked; has graduated",
        "is_correct": 0,
        "question_id": 94
      },
      {
        "id": 943,
        "option_text": "has worked; has graduated",
        "is_correct": 0,
        "question_id": 94
      },
      {
        "id": 944,
        "option_text": "has been working; has graduated",
        "is_correct": 0,
        "question_id": 94
      }
    ],
    "topic_id": 3
  },
  {
    "id": 95,
    "question_type": "multiple_choice",
    "question_text": "They ___ all morning, so they ___ the report.",
    "correct_answer": "have been arguing; have not finished",
    "difficulty": "Hard",
    "explanation": "Present Perfect Continuous for process and Present Perfect for result.",
    "options": [
      {
        "id": 951,
        "option_text": "have been arguing; have not finished",
        "is_correct": 1,
        "question_id": 95
      },
      {
        "id": 952,
        "option_text": "argued; have not finished",
        "is_correct": 0,
        "question_id": 95
      },
      {
        "id": 953,
        "option_text": "have argued; did not finish",
        "is_correct": 0,
        "question_id": 95
      },
      {
        "id": 954,
        "option_text": "have been arguing; did not finish",
        "is_correct": 0,
        "question_id": 95
      }
    ],
    "topic_id": 3
  },
  {
    "id": 96,
    "question_type": "multiple_choice",
    "question_text": "He ___ a lot since he ___ to the city.",
    "correct_answer": "has changed; moved",
    "difficulty": "Hard",
    "explanation": "Present Perfect with 'since' and past simple in time clause.",
    "options": [
      {
        "id": 961,
        "option_text": "has changed; moved",
        "is_correct": 1,
        "question_id": 96
      },
      {
        "id": 962,
        "option_text": "changed; has moved",
        "is_correct": 0,
        "question_id": 96
      },
      {
        "id": 963,
        "option_text": "has changed; has moved",
        "is_correct": 0,
        "question_id": 96
      },
      {
        "id": 964,
        "option_text": "has been changing; moved",
        "is_correct": 0,
        "question_id": 96
      }
    ],
    "topic_id": 3
  },
  {
    "id": 97,
    "question_type": "multiple_choice",
    "question_text": "We ___ the problem yet, but we ___ several solutions.",
    "correct_answer": "have not solved; have tried",
    "difficulty": "Hard",
    "explanation": "Present Perfect negative and affirmative showing experience.",
    "options": [
      {
        "id": 971,
        "option_text": "have not solved; have tried",
        "is_correct": 1,
        "question_id": 97
      },
      {
        "id": 972,
        "option_text": "did not solve; have tried",
        "is_correct": 0,
        "question_id": 97
      },
      {
        "id": 973,
        "option_text": "have not solved; tried",
        "is_correct": 0,
        "question_id": 97
      },
      {
        "id": 974,
        "option_text": "haven't solve; have tried",
        "is_correct": 0,
        "question_id": 97
      }
    ],
    "topic_id": 3
  },
  {
    "id": 98,
    "question_type": "multiple_choice",
    "question_text": "The company ___ rapidly because it ___ in new technology.",
    "correct_answer": "has grown; has invested",
    "difficulty": "Hard",
    "explanation": "Present Perfect for change and cause.",
    "options": [
      {
        "id": 981,
        "option_text": "has grown; has invested",
        "is_correct": 1,
        "question_id": 98
      },
      {
        "id": 982,
        "option_text": "grew; has invested",
        "is_correct": 0,
        "question_id": 98
      },
      {
        "id": 983,
        "option_text": "has grown; invested",
        "is_correct": 0,
        "question_id": 98
      },
      {
        "id": 984,
        "option_text": "has been growing; has invested",
        "is_correct": 0,
        "question_id": 98
      }
    ],
    "topic_id": 3
  },
  {
    "id": 99,
    "question_type": "multiple_choice",
    "question_text": "I ___ most of her books, but I ___ the latest one yet.",
    "correct_answer": "have read; have not read",
    "difficulty": "Hard",
    "explanation": "Present Perfect for experience and unfinished action with 'yet'.",
    "options": [
      {
        "id": 991,
        "option_text": "have read; have not read",
        "is_correct": 1,
        "question_id": 99
      },
      {
        "id": 992,
        "option_text": "read; have not read",
        "is_correct": 0,
        "question_id": 99
      },
      {
        "id": 993,
        "option_text": "have read; did not read",
        "is_correct": 0,
        "question_id": 99
      },
      {
        "id": 994,
        "option_text": "have read; haven't readed",
        "is_correct": 0,
        "question_id": 99
      }
    ],
    "topic_id": 3
  },
  {
    "id": 100,
    "question_type": "multiple_choice",
    "question_text": "She ___ to my emails, even though she ___ them.",
    "correct_answer": "has not replied; has seen",
    "difficulty": "Hard",
    "explanation": "Present Perfect negative contrasted with affirmative.",
    "options": [
      {
        "id": 1001,
        "option_text": "has not replied; has seen",
        "is_correct": 1,
        "question_id": 100
      },
      {
        "id": 1002,
        "option_text": "did not reply; has seen",
        "is_correct": 0,
        "question_id": 100
      },
      {
        "id": 1003,
        "option_text": "has not replied; saw",
        "is_correct": 0,
        "question_id": 100
      },
      {
        "id": 1004,
        "option_text": "hasn't reply; has seen",
        "is_correct": 0,
        "question_id": 100
      }
    ],
    "topic_id": 3
  },
  {
    "id": 101,
    "question_type": "multiple_choice",
    "question_text": "They ___ in several countries, so they ___ to adapt quickly.",
    "correct_answer": "have lived; have learned",
    "difficulty": "Hard",
    "explanation": "Present Perfect for multiple experiences and resulting ability.",
    "options": [
      {
        "id": 1011,
        "option_text": "have lived; have learned",
        "is_correct": 1,
        "question_id": 101
      },
      {
        "id": 1012,
        "option_text": "lived; have learned",
        "is_correct": 0,
        "question_id": 101
      },
      {
        "id": 1013,
        "option_text": "have lived; learned",
        "is_correct": 0,
        "question_id": 101
      },
      {
        "id": 1014,
        "option_text": "have been living; have learned",
        "is_correct": 0,
        "question_id": 101
      }
    ],
    "topic_id": 3
  },
  {
    "id": 102,
    "question_type": "multiple_choice",
    "question_text": "We ___ on this project for months, and we ___ an important milestone.",
    "correct_answer": "have worked; have just reached",
    "difficulty": "Hard",
    "explanation": "Present Perfect with 'for' and 'just' for recent result.",
    "options": [
      {
        "id": 1021,
        "option_text": "have worked; have just reached",
        "is_correct": 1,
        "question_id": 102
      },
      {
        "id": 1022,
        "option_text": "have been working; have just reached",
        "is_correct": 0,
        "question_id": 102
      },
      {
        "id": 1023,
        "option_text": "worked; have just reached",
        "is_correct": 0,
        "question_id": 102
      },
      {
        "id": 1024,
        "option_text": "have worked; just reached",
        "is_correct": 0,
        "question_id": 102
      }
    ],
    "topic_id": 3
  }
];

export default questions;