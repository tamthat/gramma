const questions = [
  {
    "id": 1,
    "question_type": "fill_blank",
    "question_text": "I ___ to the store yesterday. [go]",
    "correct_answer": "went",
    "suggest_answer": "go",
    "explanation": "Past Simple for completed action. Verb 'go' becomes 'went' in the past.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 2,
    "question_type": "fill_blank",
    "question_text": "She ___ a beautiful dress last week. [buy]",
    "correct_answer": "bought",
    "suggest_answer": "buy",
    "explanation": "Past Simple for irregular verb 'buy'. Becomes 'bought' in the past.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 3,
    "question_type": "fill_blank",
    "question_text": "They ___ in the park yesterday. [play]",
    "correct_answer": "played",
    "suggest_answer": "play",
    "explanation": "Past Simple for regular verb 'play'. Add '-ed' suffix.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 4,
    "question_type": "fill_blank",
    "question_text": "He ___ a book last night. [read]",
    "correct_answer": "read",
    "suggest_answer": "read",
    "explanation": "Past Simple for 'read'. Spelling stays the same but pronunciation changes.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 5,
    "question_type": "fill_blank",
    "question_text": "We ___ dinner at 7 PM yesterday. [have]",
    "correct_answer": "had",
    "suggest_answer": "have",
    "explanation": "Past Simple for irregular verb 'have'. Becomes 'had'.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 6,
    "question_type": "fill_blank",
    "question_text": "The children ___ happy at the party. [be]",
    "correct_answer": "were",
    "suggest_answer": "be",
    "explanation": "Past Simple of 'be' for plural subject. 'They were' or 'The children were'.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 7,
    "question_type": "fill_blank",
    "question_text": "I ___ my homework this morning. [do]",
    "correct_answer": "did",
    "suggest_answer": "do",
    "explanation": "Past Simple for irregular verb 'do'. Becomes 'did'.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 8,
    "question_type": "fill_blank",
    "question_text": "She ___ to the beach last summer. [go]",
    "correct_answer": "went",
    "suggest_answer": "go",
    "explanation": "Past Simple for 'go'. Becomes 'went' (irregular).",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 9,
    "question_type": "fill_blank",
    "question_text": "We ___ a movie last Friday. [watch]",
    "correct_answer": "watched",
    "suggest_answer": "watch",
    "explanation": "Past Simple for regular verb 'watch'. Add '-ed' suffix.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 10,
    "question_type": "fill_blank",
    "question_text": "They ___ coffee this morning. [drink]",
    "correct_answer": "drank",
    "suggest_answer": "drink",
    "explanation": "Past Simple for irregular verb 'drink'. Becomes 'drank'.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 11,
    "question_type": "fill_blank",
    "question_text": "He ___ his phone yesterday. [lose]",
    "correct_answer": "lost",
    "suggest_answer": "lose",
    "explanation": "Past Simple for irregular verb 'lose'. Becomes 'lost'.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 12,
    "question_type": "fill_blank",
    "question_text": "I ___ a dream last night. [have]",
    "correct_answer": "had",
    "suggest_answer": "have",
    "explanation": "Past Simple of 'have'. Becomes 'had'.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 13,
    "question_type": "fill_blank",
    "question_text": "She ___ the door and left. [close]",
    "correct_answer": "closed",
    "suggest_answer": "close",
    "explanation": "Past Simple for regular verb 'close'. Add '-ed' suffix.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 14,
    "question_type": "fill_blank",
    "question_text": "The students ___ the exam yesterday. [pass]",
    "correct_answer": "passed",
    "suggest_answer": "pass",
    "explanation": "Past Simple for regular verb 'pass'. Add '-ed' suffix.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 15,
    "question_type": "fill_blank",
    "question_text": "He ___ sick last week. [be]",
    "correct_answer": "was",
    "suggest_answer": "be",
    "explanation": "Past Simple of 'be' for singular subject. 'He was' or 'She was'.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 16,
    "question_type": "fill_blank",
    "question_text": "They ___ a new restaurant last night. [try]",
    "correct_answer": "tried",
    "suggest_answer": "try",
    "explanation": "Past Simple for regular verb 'try'. Change 'y' to 'i' and add '-ed'.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 17,
    "question_type": "fill_blank",
    "question_text": "I ___ my keys on the table. [see]",
    "correct_answer": "saw",
    "suggest_answer": "see",
    "explanation": "Past Simple for irregular verb 'see'. Becomes 'saw'.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 18,
    "question_type": "fill_blank",
    "question_text": "She ___ to London last month. [fly]",
    "correct_answer": "flew",
    "suggest_answer": "fly",
    "explanation": "Past Simple for irregular verb 'fly'. Becomes 'flew'.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 19,
    "question_type": "fill_blank",
    "question_text": "The teacher ___ the question again. [ask]",
    "correct_answer": "asked",
    "suggest_answer": "ask",
    "explanation": "Past Simple for regular verb 'ask'. Add '-ed' suffix.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 20,
    "question_type": "fill_blank",
    "question_text": "We ___ at the hotel for three days. [stay]",
    "correct_answer": "stayed",
    "suggest_answer": "stay",
    "explanation": "Past Simple for regular verb 'stay'. Add '-ed' suffix.",
    "difficulty": "Easy",
    "topic_id": 5
  },
  {
    "id": 21,
    "question_type": "fill_blank",
    "question_text": "He ___ the letter carefully before replying. [read]",
    "correct_answer": "read",
    "suggest_answer": "read",
    "explanation": "Past Simple for 'read'. Same spelling, different pronunciation.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 22,
    "question_type": "fill_blank",
    "question_text": "They ___ the bridge at midnight. [cross]",
    "correct_answer": "crossed",
    "suggest_answer": "cross",
    "explanation": "Past Simple for regular verb 'cross'. Add '-ed' suffix.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 23,
    "question_type": "fill_blank",
    "question_text": "I ___ to work even though I was tired. [go]",
    "correct_answer": "went",
    "suggest_answer": "go",
    "explanation": "Past Simple for 'go'. Becomes 'went' (irregular).",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 24,
    "question_type": "fill_blank",
    "question_text": "She ___ not ___ the news until yesterday. [know]",
    "correct_answer": "did;know",
    "suggest_answer": "know",
    "explanation": "Negative Past Simple. 'Did not know' or 'Didn't know'.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 25,
    "question_type": "fill_blank",
    "question_text": "The crime ___ on a dark night. [occur]",
    "correct_answer": "occurred",
    "suggest_answer": "occur",
    "explanation": "Past Simple for regular verb 'occur'. Double final consonant: occur-occurred.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 26,
    "question_type": "fill_blank",
    "question_text": "We ___ at the restaurant for two hours last night. [sit]",
    "correct_answer": "sat",
    "suggest_answer": "sit",
    "explanation": "Past Simple for irregular verb 'sit'. Becomes 'sat'.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 27,
    "question_type": "fill_blank",
    "question_text": "When did you ___ your decision? [make]",
    "correct_answer": "make",
    "suggest_answer": "make",
    "explanation": "Past Simple question with 'did'. Use base form after 'did'.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 28,
    "question_type": "fill_blank",
    "question_text": "The athletes ___ for weeks before the competition. [train]",
    "correct_answer": "trained",
    "suggest_answer": "train",
    "explanation": "Past Simple for regular verb 'train'. Add '-ed' suffix.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 29,
    "question_type": "fill_blank",
    "question_text": "She ___ her purse at the supermarket. [find]",
    "correct_answer": "found",
    "suggest_answer": "find",
    "explanation": "Past Simple for irregular verb 'find'. Becomes 'found'.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 30,
    "question_type": "fill_blank",
    "question_text": "The old building ___ during the earthquake. [collapse]",
    "correct_answer": "collapsed",
    "suggest_answer": "collapse",
    "explanation": "Past Simple for regular verb 'collapse'. Add '-ed' suffix.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 31,
    "question_type": "fill_blank",
    "question_text": "He ___ the job interview last Monday. [win]",
    "correct_answer": "won",
    "suggest_answer": "win",
    "explanation": "Past Simple for irregular verb 'win'. Becomes 'won'.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 32,
    "question_type": "fill_blank",
    "question_text": "The scientists ___ a cure for the disease. [discover]",
    "correct_answer": "discovered",
    "suggest_answer": "discover",
    "explanation": "Past Simple for regular verb 'discover'. Add '-ed' suffix.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 33,
    "question_type": "fill_blank",
    "question_text": "She ___ him to the party but he ___ the invitation. [invite;refuse]",
    "correct_answer": "invited;refused",
    "suggest_answer": "invite;refuse",
    "explanation": "Two Past Simple verbs. 'Invited' and 'refused'.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 34,
    "question_type": "fill_blank",
    "question_text": "The manager ___ a budget for next year. [set]",
    "correct_answer": "set",
    "suggest_answer": "set",
    "explanation": "Past Simple for irregular verb 'set'. Same form as base form.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 35,
    "question_type": "fill_blank",
    "question_text": "I ___ a postcard from my friend abroad. [receive]",
    "correct_answer": "received",
    "suggest_answer": "receive",
    "explanation": "Past Simple for regular verb 'receive'. Add '-ed' suffix.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 36,
    "question_type": "fill_blank",
    "question_text": "The children ___ their homework before dinner. [finish]",
    "correct_answer": "finished",
    "suggest_answer": "finish",
    "explanation": "Past Simple for regular verb 'finish'. Add '-ed' suffix.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 37,
    "question_type": "fill_blank",
    "question_text": "He ___ his old friend at the reunion. [meet]",
    "correct_answer": "met",
    "suggest_answer": "meet",
    "explanation": "Past Simple for irregular verb 'meet'. Becomes 'met'.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 38,
    "question_type": "fill_blank",
    "question_text": "The news ___ him deeply. [shock]",
    "correct_answer": "shocked",
    "suggest_answer": "shock",
    "explanation": "Past Simple for regular verb 'shock'. Add '-ed' suffix.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 39,
    "question_type": "fill_blank",
    "question_text": "We ___ not ___ about the change until last week. [hear]",
    "correct_answer": "did;hear",
    "suggest_answer": "hear",
    "explanation": "Negative Past Simple. 'Did not hear' or 'Didn't hear'.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 40,
    "question_type": "fill_blank",
    "question_text": "The patient ___ better after the treatment. [get]",
    "correct_answer": "got",
    "suggest_answer": "get",
    "explanation": "Past Simple for irregular verb 'get'. Becomes 'got'.",
    "difficulty": "Medium",
    "topic_id": 5
  },
  {
    "id": 41,
    "question_type": "fill_blank",
    "question_text": "The ancient manuscript ___ to historians long after its creation. [remain]",
    "correct_answer": "remained",
    "suggest_answer": "remain",
    "explanation": "Past Simple for regular verb 'remain'. Add '-ed' suffix. Describes historical fact.",
    "difficulty": "Hard",
    "topic_id": 5
  },
  {
    "id": 42,
    "question_type": "fill_blank",
    "question_text": "The economist ___ the market trends years before the crisis. [predict]",
    "correct_answer": "predicted",
    "suggest_answer": "predict",
    "explanation": "Past Simple for regular verb 'predict'. Add '-ed' suffix.",
    "difficulty": "Hard",
    "topic_id": 5
  },
  {
    "id": 43,
    "question_type": "fill_blank",
    "question_text": "The negotiations ___ for months before an agreement was ___ . [drag;reach]",
    "correct_answer": "dragged;reached",
    "suggest_answer": "drag;reach",
    "explanation": "Two Past Simple verbs in complex sentence. 'Dragged on' and 'reached'.",
    "difficulty": "Hard",
    "topic_id": 5
  },
  {
    "id": 44,
    "question_type": "fill_blank",
    "question_text": "The researcher ___ groundbreaking results through unconventional methods. [obtain]",
    "correct_answer": "obtained",
    "suggest_answer": "obtain",
    "explanation": "Past Simple for regular verb 'obtain'. Add '-ed' suffix.",
    "difficulty": "Hard",
    "topic_id": 5
  },
  {
    "id": 45,
    "question_type": "fill_blank",
    "question_text": "Although they ___ many obstacles, they ___ to succeed. [encounter;persist]",
    "correct_answer": "encountered;persisted",
    "suggest_answer": "encounter;persist",
    "explanation": "Two Past Simple verbs in contrast. Both regular verbs.",
    "difficulty": "Hard",
    "topic_id": 5
  },
  {
    "id": 46,
    "question_type": "fill_blank",
    "question_text": "The expedition ___ through uncharted territory despite severe conditions. [venture]",
    "correct_answer": "ventured",
    "suggest_answer": "venture",
    "explanation": "Past Simple for regular verb 'venture'. Add '-ed' suffix.",
    "difficulty": "Hard",
    "topic_id": 5
  },
  {
    "id": 47,
    "question_type": "fill_blank",
    "question_text": "The witness ___ the perpetrator had ___ the scene before police arrived. [confirm;flee]",
    "correct_answer": "confirmed;fled",
    "suggest_answer": "confirm;flee",
    "explanation": "Two Past Simple verbs. 'Confirmed' (regular) and 'fled' (irregular).",
    "difficulty": "Hard",
    "topic_id": 5
  },
  {
    "id": 48,
    "question_type": "fill_blank",
    "question_text": "The symphony ___ at the concert hall and later ___ by critics. [premiere;acclaim]",
    "correct_answer": "premiered;was acclaimed",
    "suggest_answer": "premiere;acclaim",
    "explanation": "Past Simple active and passive forms. 'Premiered' and 'was acclaimed'.",
    "difficulty": "Hard",
    "topic_id": 5
  },
  {
    "id": 49,
    "question_type": "fill_blank",
    "question_text": "The legislation ___ widespread debate and eventually ___ by parliament. [spark;approve]",
    "correct_answer": "sparked;was approved",
    "suggest_answer": "spark;approve",
    "explanation": "Two Past Simple verbs with passive voice. 'Sparked' and 'was approved'.",
    "difficulty": "Hard",
    "topic_id": 5
  },
  {
    "id": 50,
    "question_type": "fill_blank",
    "question_text": "When the evidence ___ light, the investigation ___ and the case was reopened. [come;intensify]",
    "correct_answer": "came to;intensified",
    "suggest_answer": "come to;intensify",
    "explanation": "Two Past Simple verbs. 'Came to light' (phrasal) and 'intensified'.",
    "difficulty": "Hard",
    "topic_id": 5
  },
  {
    "id": 51,
    "question_type": "multiple_choice",
    "question_text": "I ___ to the cinema last Saturday.",
    "correct_answer": "went",
    "difficulty": "Easy",
    "explanation": "Past Simple for regular action at specific time. 'Go' becomes 'went'.",
    "options": [
      {"id": 511, "option_text": "go", "is_correct": 0, "question_id": 51},
      {"id": 512, "option_text": "went", "is_correct": 1, "question_id": 51},
      {"id": 513, "option_text": "have gone", "is_correct": 0, "question_id": 51},
      {"id": 514, "option_text": "am going", "is_correct": 0, "question_id": 51}
    ],
    "topic_id": 5
  },
  {
    "id": 52,
    "question_type": "multiple_choice",
    "question_text": "She ___ a beautiful song at the concert.",
    "correct_answer": "sang",
    "difficulty": "Easy",
    "explanation": "Past Simple for 'sing'. Irregular verb: sing-sang-sung.",
    "options": [
      {"id": 521, "option_text": "sing", "is_correct": 0, "question_id": 52},
      {"id": 522, "option_text": "sang", "is_correct": 1, "question_id": 52},
      {"id": 523, "option_text": "has sung", "is_correct": 0, "question_id": 52},
      {"id": 524, "option_text": "is singing", "is_correct": 0, "question_id": 52}
    ],
    "topic_id": 5
  },
  {
    "id": 53,
    "question_type": "multiple_choice",
    "question_text": "We ___ at home yesterday evening.",
    "correct_answer": "were",
    "difficulty": "Easy",
    "explanation": "Past Simple of 'be' for plural. 'We were'.",
    "options": [
      {"id": 531, "option_text": "are", "is_correct": 0, "question_id": 53},
      {"id": 532, "option_text": "were", "is_correct": 1, "question_id": 53},
      {"id": 533, "option_text": "have been", "is_correct": 0, "question_id": 53},
      {"id": 534, "option_text": "had been", "is_correct": 0, "question_id": 53}
    ],
    "topic_id": 5
  },
  {
    "id": 54,
    "question_type": "multiple_choice",
    "question_text": "The children ___ to the park and played.",
    "correct_answer": "went",
    "difficulty": "Easy",
    "explanation": "Past Simple for completed action. 'Go' becomes 'went'.",
    "options": [
      {"id": 541, "option_text": "go", "is_correct": 0, "question_id": 54},
      {"id": 542, "option_text": "went", "is_correct": 1, "question_id": 54},
      {"id": 543, "option_text": "have gone", "is_correct": 0, "question_id": 54},
      {"id": 544, "option_text": "are going", "is_correct": 0, "question_id": 54}
    ],
    "topic_id": 5
  },
  {
    "id": 55,
    "question_type": "multiple_choice",
    "question_text": "They ___ the game yesterday afternoon.",
    "correct_answer": "won",
    "difficulty": "Easy",
    "explanation": "Past Simple for 'win'. Irregular: win-won-won.",
    "options": [
      {"id": 551, "option_text": "win", "is_correct": 0, "question_id": 55},
      {"id": 552, "option_text": "won", "is_correct": 1, "question_id": 55},
      {"id": 553, "option_text": "have won", "is_correct": 0, "question_id": 55},
      {"id": 554, "option_text": "are winning", "is_correct": 0, "question_id": 55}
    ],
    "topic_id": 5
  },
  {
    "id": 56,
    "question_type": "multiple_choice",
    "question_text": "I ___ my keys this morning.",
    "correct_answer": "found",
    "difficulty": "Easy",
    "explanation": "Past Simple for 'find'. Irregular: find-found-found.",
    "options": [
      {"id": 561, "option_text": "find", "is_correct": 0, "question_id": 56},
      {"id": 562, "option_text": "found", "is_correct": 1, "question_id": 56},
      {"id": 563, "option_text": "have found", "is_correct": 0, "question_id": 56},
      {"id": 564, "option_text": "was finding", "is_correct": 0, "question_id": 56}
    ],
    "topic_id": 5
  },
  {
    "id": 57,
    "question_type": "multiple_choice",
    "question_text": "He ___ sick last week.",
    "correct_answer": "was",
    "difficulty": "Easy",
    "explanation": "Past Simple of 'be' for singular. 'He was'.",
    "options": [
      {"id": 571, "option_text": "is", "is_correct": 0, "question_id": 57},
      {"id": 572, "option_text": "was", "is_correct": 1, "question_id": 57},
      {"id": 573, "option_text": "has been", "is_correct": 0, "question_id": 57},
      {"id": 574, "option_text": "is being", "is_correct": 0, "question_id": 57}
    ],
    "topic_id": 5
  },
  {
    "id": 58,
    "question_type": "multiple_choice",
    "question_text": "She ___ a letter to her friend yesterday.",
    "correct_answer": "wrote",
    "difficulty": "Easy",
    "explanation": "Past Simple for 'write'. Irregular: write-wrote-written.",
    "options": [
      {"id": 581, "option_text": "write", "is_correct": 0, "question_id": 58},
      {"id": 582, "option_text": "wrote", "is_correct": 1, "question_id": 58},
      {"id": 583, "option_text": "have written", "is_correct": 0, "question_id": 58},
      {"id": 584, "option_text": "is writing", "is_correct": 0, "question_id": 58}
    ],
    "topic_id": 5
  },
  {
    "id": 59,
    "question_type": "multiple_choice",
    "question_text": "We ___ the movie last night. It was great!",
    "correct_answer": "watched",
    "difficulty": "Easy",
    "explanation": "Past Simple for regular verb 'watch'. Add '-ed' suffix.",
    "options": [
      {"id": 591, "option_text": "watch", "is_correct": 0, "question_id": 59},
      {"id": 592, "option_text": "watched", "is_correct": 1, "question_id": 59},
      {"id": 593, "option_text": "have watched", "is_correct": 0, "question_id": 59},
      {"id": 594, "option_text": "are watching", "is_correct": 0, "question_id": 59}
    ],
    "topic_id": 5
  },
  {
    "id": 60,
    "question_type": "multiple_choice",
    "question_text": "They ___ coffee at the café this morning.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Past Simple for 'have'. Irregular: have-had-had.",
    "options": [
      {"id": 601, "option_text": "have", "is_correct": 0, "question_id": 60},
      {"id": 602, "option_text": "had", "is_correct": 1, "question_id": 60},
      {"id": 603, "option_text": "are having", "is_correct": 0, "question_id": 60},
      {"id": 604, "option_text": "have had", "is_correct": 0, "question_id": 60}
    ],
    "topic_id": 5
  },
  {
    "id": 61,
    "question_type": "multiple_choice",
    "question_text": "I ___ the book you recommended. It was excellent.",
    "correct_answer": "read",
    "difficulty": "Easy",
    "explanation": "Past Simple for 'read'. Spelling same, pronunciation different.",
    "options": [
      {"id": 611, "option_text": "read", "is_correct": 1, "question_id": 61},
      {"id": 612, "option_text": "have read", "is_correct": 0, "question_id": 61},
      {"id": 613, "option_text": "am reading", "is_correct": 0, "question_id": 61},
      {"id": 614, "option_text": "was reading", "is_correct": 0, "question_id": 61}
    ],
    "topic_id": 5
  },
  {
    "id": 62,
    "question_type": "multiple_choice",
    "question_text": "The teacher ___ the exam on Friday.",
    "correct_answer": "gave",
    "difficulty": "Easy",
    "explanation": "Past Simple for 'give'. Irregular: give-gave-given.",
    "options": [
      {"id": 621, "option_text": "give", "is_correct": 0, "question_id": 62},
      {"id": 622, "option_text": "gave", "is_correct": 1, "question_id": 62},
      {"id": 623, "option_text": "has given", "is_correct": 0, "question_id": 62},
      {"id": 624, "option_text": "is giving", "is_correct": 0, "question_id": 62}
    ],
    "topic_id": 5
  },
  {
    "id": 63,
    "question_type": "multiple_choice",
    "question_text": "Where ___ you ___ last summer?",
    "correct_answer": "did;go",
    "difficulty": "Easy",
    "explanation": "Past Simple question. Use 'did' + base form of verb.",
    "options": [
      {"id": 631, "option_text": "did;go", "is_correct": 1, "question_id": 63},
      {"id": 632, "option_text": "have;gone", "is_correct": 0, "question_id": 63},
      {"id": 633, "option_text": "are;going", "is_correct": 0, "question_id": 63},
      {"id": 634, "option_text": "will;go", "is_correct": 0, "question_id": 63}
    ],
    "topic_id": 5
  },
  {
    "id": 64,
    "question_type": "multiple_choice",
    "question_text": "She ___ me the answer when I asked.",
    "correct_answer": "told",
    "difficulty": "Easy",
    "explanation": "Past Simple for 'tell'. Irregular: tell-told-told.",
    "options": [
      {"id": 641, "option_text": "tell", "is_correct": 0, "question_id": 64},
      {"id": 642, "option_text": "told", "is_correct": 1, "question_id": 64},
      {"id": 643, "option_text": "has told", "is_correct": 0, "question_id": 64},
      {"id": 644, "option_text": "is telling", "is_correct": 0, "question_id": 64}
    ],
    "topic_id": 5
  },
  {
    "id": 65,
    "question_type": "multiple_choice",
    "question_text": "The students ___ hard for the exam.",
    "correct_answer": "studied",
    "difficulty": "Easy",
    "explanation": "Past Simple for regular verb 'study'. Change 'y' to 'i' and add '-ed'.",
    "options": [
      {"id": 651, "option_text": "study", "is_correct": 0, "question_id": 65},
      {"id": 652, "option_text": "studied", "is_correct": 1, "question_id": 65},
      {"id": 653, "option_text": "have studied", "is_correct": 0, "question_id": 65},
      {"id": 654, "option_text": "are studying", "is_correct": 0, "question_id": 65}
    ],
    "topic_id": 5
  },
  {
    "id": 66,
    "question_type": "multiple_choice",
    "question_text": "He ___ an old friend at the reunion.",
    "correct_answer": "met",
    "difficulty": "Easy",
    "explanation": "Past Simple for 'meet'. Irregular: meet-met-met.",
    "options": [
      {"id": 661, "option_text": "meet", "is_correct": 0, "question_id": 66},
      {"id": 662, "option_text": "met", "is_correct": 1, "question_id": 66},
      {"id": 663, "option_text": "have met", "is_correct": 0, "question_id": 66},
      {"id": 664, "option_text": "is meeting", "is_correct": 0, "question_id": 66}
    ],
    "topic_id": 5
  },
  {
    "id": 67,
    "question_type": "multiple_choice",
    "question_text": "It ___ all day yesterday.",
    "correct_answer": "rained",
    "difficulty": "Easy",
    "explanation": "Past Simple for regular verb 'rain'. Add '-ed' suffix.",
    "options": [
      {"id": 671, "option_text": "rains", "is_correct": 0, "question_id": 67},
      {"id": 672, "option_text": "rained", "is_correct": 1, "question_id": 67},
      {"id": 673, "option_text": "has rained", "is_correct": 0, "question_id": 67},
      {"id": 674, "option_text": "is raining", "is_correct": 0, "question_id": 67}
    ],
    "topic_id": 5
  },
  {
    "id": 68,
    "question_type": "multiple_choice",
    "question_text": "We ___ at 5 PM yesterday.",
    "correct_answer": "arrived",
    "difficulty": "Easy",
    "explanation": "Past Simple for regular verb 'arrive'. Add '-ed' suffix.",
    "options": [
      {"id": 681, "option_text": "arrive", "is_correct": 0, "question_id": 68},
      {"id": 682, "option_text": "arrived", "is_correct": 1, "question_id": 68},
      {"id": 683, "option_text": "have arrived", "is_correct": 0, "question_id": 68},
      {"id": 684, "option_text": "are arriving", "is_correct": 0, "question_id": 68}
    ],
    "topic_id": 5
  },
  {
    "id": 69,
    "question_type": "multiple_choice",
    "question_text": "The film ___ at the cinema last week.",
    "correct_answer": "started",
    "difficulty": "Easy",
    "explanation": "Past Simple for regular verb 'start'. Add '-ed' suffix.",
    "options": [
      {"id": 691, "option_text": "starts", "is_correct": 0, "question_id": 69},
      {"id": 692, "option_text": "started", "is_correct": 1, "question_id": 69},
      {"id": 693, "option_text": "has started", "is_correct": 0, "question_id": 69},
      {"id": 694, "option_text": "is starting", "is_correct": 0, "question_id": 69}
    ],
    "topic_id": 5
  },
  {
    "id": 70,
    "question_type": "multiple_choice",
    "question_text": "I ___ him not to go, but he didn't listen.",
    "correct_answer": "warned",
    "difficulty": "Easy",
    "explanation": "Past Simple for regular verb 'warn'. Add '-ed' suffix.",
    "options": [
      {"id": 701, "option_text": "warn", "is_correct": 0, "question_id": 70},
      {"id": 702, "option_text": "warned", "is_correct": 1, "question_id": 70},
      {"id": 703, "option_text": "have warned", "is_correct": 0, "question_id": 70},
      {"id": 704, "option_text": "is warning", "is_correct": 0, "question_id": 70}
    ],
    "topic_id": 5
  },
  {
    "id": 71,
    "question_type": "multiple_choice",
    "question_text": "The entrepreneur ___ a successful business from nothing.",
    "correct_answer": "built",
    "difficulty": "Medium",
    "explanation": "Past Simple for 'build'. Irregular: build-built-built.",
    "options": [
      {"id": 711, "option_text": "builds", "is_correct": 0, "question_id": 71},
      {"id": 712, "option_text": "built", "is_correct": 1, "question_id": 71},
      {"id": 713, "option_text": "has built", "is_correct": 0, "question_id": 71},
      {"id": 714, "option_text": "is building", "is_correct": 0, "question_id": 71}
    ],
    "topic_id": 5
  },
  {
    "id": 72,
    "question_type": "multiple_choice",
    "question_text": "The scientists ___ a breakthrough in their research.",
    "correct_answer": "achieved",
    "difficulty": "Medium",
    "explanation": "Past Simple for regular verb 'achieve'. Add '-ed' suffix.",
    "options": [
      {"id": 721, "option_text": "achieve", "is_correct": 0, "question_id": 72},
      {"id": 722, "option_text": "achieved", "is_correct": 1, "question_id": 72},
      {"id": 723, "option_text": "have achieved", "is_correct": 0, "question_id": 72},
      {"id": 724, "option_text": "are achieving", "is_correct": 0, "question_id": 72}
    ],
    "topic_id": 5
  },
  {
    "id": 73,
    "question_type": "multiple_choice",
    "question_text": "He ___ money when he found the wallet.",
    "correct_answer": "spent",
    "difficulty": "Medium",
    "explanation": "Past Simple for 'spend'. Irregular: spend-spent-spent.",
    "options": [
      {"id": 731, "option_text": "spends", "is_correct": 0, "question_id": 73},
      {"id": 732, "option_text": "spent", "is_correct": 1, "question_id": 73},
      {"id": 733, "option_text": "has spent", "is_correct": 0, "question_id": 73},
      {"id": 734, "option_text": "is spending", "is_correct": 0, "question_id": 73}
    ],
    "topic_id": 5
  },
  {
    "id": 74,
    "question_type": "multiple_choice",
    "question_text": "The decision ___ him to reconsider his plans.",
    "correct_answer": "forced",
    "difficulty": "Medium",
    "explanation": "Past Simple for regular verb 'force'. Add '-ed' suffix.",
    "options": [
      {"id": 741, "option_text": "forces", "is_correct": 0, "question_id": 74},
      {"id": 742, "option_text": "forced", "is_correct": 1, "question_id": 74},
      {"id": 743, "option_text": "has forced", "is_correct": 0, "question_id": 74},
      {"id": 744, "option_text": "is forcing", "is_correct": 0, "question_id": 74}
    ],
    "topic_id": 5
  },
  {
    "id": 75,
    "question_type": "multiple_choice",
    "question_text": "They ___ the evidence and concluded it was authentic.",
    "correct_answer": "examined",
    "difficulty": "Medium",
    "explanation": "Past Simple for regular verb 'examine'. Add '-ed' suffix.",
    "options": [
      {"id": 751, "option_text": "examine", "is_correct": 0, "question_id": 75},
      {"id": 752, "option_text": "examined", "is_correct": 1, "question_id": 75},
      {"id": 753, "option_text": "have examined", "is_correct": 0, "question_id": 75},
      {"id": 754, "option_text": "are examining", "is_correct": 0, "question_id": 75}
    ],
    "topic_id": 5
  },
  {
    "id": 76,
    "question_type": "multiple_choice",
    "question_text": "The witness ___ he ___ the suspect near the crime scene.",
    "correct_answer": "stated;saw",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Stated' (regular) and 'saw' (irregular: see-saw-seen).",
    "options": [
      {"id": 761, "option_text": "stated;saw", "is_correct": 1, "question_id": 76},
      {"id": 762, "option_text": "states;sees", "is_correct": 0, "question_id": 76},
      {"id": 763, "option_text": "has stated;has seen", "is_correct": 0, "question_id": 76},
      {"id": 764, "option_text": "is stating;is seeing", "is_correct": 0, "question_id": 76}
    ],
    "topic_id": 5
  },
  {
    "id": 77,
    "question_type": "multiple_choice",
    "question_text": "The artist ___ inspiration from nature and ___ masterpieces.",
    "correct_answer": "drew;created",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Drew' (irregular: draw-drew-drawn) and 'created' (regular).",
    "options": [
      {"id": 771, "option_text": "drew;created", "is_correct": 1, "question_id": 77},
      {"id": 772, "option_text": "draws;creates", "is_correct": 0, "question_id": 77},
      {"id": 773, "option_text": "has drawn;has created", "is_correct": 0, "question_id": 77},
      {"id": 774, "option_text": "is drawing;is creating", "is_correct": 0, "question_id": 77}
    ],
    "topic_id": 5
  },
  {
    "id": 78,
    "question_type": "multiple_choice",
    "question_text": "Although the economy ___, unemployment ___ throughout the period.",
    "correct_answer": "grew;remained",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs in contrast. 'Grew' (irregular) and 'remained' (regular).",
    "options": [
      {"id": 781, "option_text": "grew;remained", "is_correct": 1, "question_id": 78},
      {"id": 782, "option_text": "grows;remains", "is_correct": 0, "question_id": 78},
      {"id": 783, "option_text": "has grown;has remained", "is_correct": 0, "question_id": 78},
      {"id": 784, "option_text": "is growing;is remaining", "is_correct": 0, "question_id": 78}
    ],
    "topic_id": 5
  },
  {
    "id": 79,
    "question_type": "multiple_choice",
    "question_text": "The negotiations ___ several months and finally ___.",
    "correct_answer": "lasted;succeeded",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Lasted' and 'succeeded' (both regular).",
    "options": [
      {"id": 791, "option_text": "lasted;succeeded", "is_correct": 1, "question_id": 79},
      {"id": 792, "option_text": "last;succeed", "is_correct": 0, "question_id": 79},
      {"id": 793, "option_text": "have lasted;have succeeded", "is_correct": 0, "question_id": 79},
      {"id": 794, "option_text": "are lasting;are succeeding", "is_correct": 0, "question_id": 79}
    ],
    "topic_id": 5
  },
  {
    "id": 80,
    "question_type": "multiple_choice",
    "question_text": "When the storm _____ over, the residents _____ the damage.",
    "correct_answer": "passed;assessed",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Passed' and 'assessed' (both regular).",
    "options": [
      {"id": 801, "option_text": "passed;assessed", "is_correct": 1, "question_id": 80},
      {"id": 802, "option_text": "passes;assesses", "is_correct": 0, "question_id": 80},
      {"id": 803, "option_text": "has passed;has assessed", "is_correct": 0, "question_id": 80},
      {"id": 804, "option_text": "is passing;is assessing", "is_correct": 0, "question_id": 80}
    ],
    "topic_id": 5
  },
  {
    "id": 81,
    "question_type": "multiple_choice",
    "question_text": "The conference _____ important discussions and _____ new policies.",
    "correct_answer": "facilitated;established",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Facilitated' and 'established' (both regular).",
    "options": [
      {"id": 811, "option_text": "facilitated;established", "is_correct": 1, "question_id": 81},
      {"id": 812, "option_text": "facilitates;establishes", "is_correct": 0, "question_id": 81},
      {"id": 813, "option_text": "has facilitated;has established", "is_correct": 0, "question_id": 81},
      {"id": 814, "option_text": "is facilitating;is establishing", "is_correct": 0, "question_id": 81}
    ],
    "topic_id": 5
  },
  {
    "id": 82,
    "question_type": "multiple_choice",
    "question_text": "The detective _____ a pattern and _____ the case after years.",
    "correct_answer": "recognized;solved",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Recognized' and 'solved' (both regular).",
    "options": [
      {"id": 821, "option_text": "recognized;solved", "is_correct": 1, "question_id": 82},
      {"id": 822, "option_text": "recognizes;solves", "is_correct": 0, "question_id": 82},
      {"id": 823, "option_text": "has recognized;has solved", "is_correct": 0, "question_id": 82},
      {"id": 824, "option_text": "is recognizing;is solving", "is_correct": 0, "question_id": 82}
    ],
    "topic_id": 5
  },
  {
    "id": 83,
    "question_type": "multiple_choice",
    "question_text": "The campaign _____ widespread support and _____ significant changes.",
    "correct_answer": "generated;catalyzed",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Generated' and 'catalyzed' (both regular).",
    "options": [
      {"id": 831, "option_text": "generated;catalyzed", "is_correct": 1, "question_id": 83},
      {"id": 832, "option_text": "generates;catalyzes", "is_correct": 0, "question_id": 83},
      {"id": 833, "option_text": "has generated;has catalyzed", "is_correct": 0, "question_id": 83},
      {"id": 834, "option_text": "is generating;is catalyzing", "is_correct": 0, "question_id": 83}
    ],
    "topic_id": 5
  },
  {
    "id": 84,
    "question_type": "multiple_choice",
    "question_text": "The accident _____ traffic flow and _____ several injuries.",
    "correct_answer": "disrupted;caused",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Disrupted' and 'caused' (both regular).",
    "options": [
      {"id": 841, "option_text": "disrupted;caused", "is_correct": 1, "question_id": 84},
      {"id": 842, "option_text": "disrupts;causes", "is_correct": 0, "question_id": 84},
      {"id": 843, "option_text": "has disrupted;has caused", "is_correct": 0, "question_id": 84},
      {"id": 844, "option_text": "is disrupting;is causing", "is_correct": 0, "question_id": 84}
    ],
    "topic_id": 5
  },
  {
    "id": 85,
    "question_type": "multiple_choice",
    "question_text": "The proposal _____ controversy and _____ fierce debate.",
    "correct_answer": "triggered;provoked",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Triggered' and 'provoked' (both regular).",
    "options": [
      {"id": 851, "option_text": "triggered;provoked", "is_correct": 1, "question_id": 85},
      {"id": 852, "option_text": "triggers;provokes", "is_correct": 0, "question_id": 85},
      {"id": 853, "option_text": "has triggered;has provoked", "is_correct": 0, "question_id": 85},
      {"id": 854, "option_text": "is triggering;is provoking", "is_correct": 0, "question_id": 85}
    ],
    "topic_id": 5
  },
  {
    "id": 86,
    "question_type": "multiple_choice",
    "question_text": "The investigation _____ evidence and _____ the suspect.",
    "correct_answer": "uncovered;implicated",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Uncovered' and 'implicated' (both regular).",
    "options": [
      {"id": 861, "option_text": "uncovered;implicated", "is_correct": 1, "question_id": 86},
      {"id": 862, "option_text": "uncovers;implicates", "is_correct": 0, "question_id": 86},
      {"id": 863, "option_text": "has uncovered;has implicated", "is_correct": 0, "question_id": 86},
      {"id": 864, "option_text": "is uncovering;is implicating", "is_correct": 0, "question_id": 86}
    ],
    "topic_id": 5
  },
  {
    "id": 87,
    "question_type": "multiple_choice",
    "question_text": "The program _____ employment opportunities and _____ the community.",
    "correct_answer": "created;enriched",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Created' and 'enriched' (both regular).",
    "options": [
      {"id": 871, "option_text": "created;enriched", "is_correct": 1, "question_id": 87},
      {"id": 872, "option_text": "creates;enriches", "is_correct": 0, "question_id": 87},
      {"id": 873, "option_text": "has created;has enriched", "is_correct": 0, "question_id": 87},
      {"id": 874, "option_text": "is creating;is enriching", "is_correct": 0, "question_id": 87}
    ],
    "topic_id": 5
  },
  {
    "id": 88,
    "question_type": "multiple_choice",
    "question_text": "The storm _____ trees and _____ widespread damage.",
    "correct_answer": "uprooted;caused",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Uprooted' and 'caused' (both regular).",
    "options": [
      {"id": 881, "option_text": "uprooted;caused", "is_correct": 1, "question_id": 88},
      {"id": 882, "option_text": "uproots;causes", "is_correct": 0, "question_id": 88},
      {"id": 883, "option_text": "has uprooted;has caused", "is_correct": 0, "question_id": 88},
      {"id": 884, "option_text": "is uprooting;is causing", "is_correct": 0, "question_id": 88}
    ],
    "topic_id": 5
  },
  {
    "id": 89,
    "question_type": "multiple_choice",
    "question_text": "The research _____ findings and _____ new possibilities.",
    "correct_answer": "yielded;opened",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Yielded' and 'opened' (both regular).",
    "options": [
      {"id": 891, "option_text": "yielded;opened", "is_correct": 1, "question_id": 89},
      {"id": 892, "option_text": "yields;opens", "is_correct": 0, "question_id": 89},
      {"id": 893, "option_text": "has yielded;has opened", "is_correct": 0, "question_id": 89},
      {"id": 894, "option_text": "is yielding;is opening", "is_correct": 0, "question_id": 89}
    ],
    "topic_id": 5
  },
  {
    "id": 90,
    "question_type": "multiple_choice",
    "question_text": "The partnership _____ synergies and _____ mutual benefits.",
    "correct_answer": "created;delivered",
    "difficulty": "Medium",
    "explanation": "Two Past Simple verbs. 'Created' and 'delivered' (both regular).",
    "options": [
      {"id": 901, "option_text": "created;delivered", "is_correct": 1, "question_id": 90},
      {"id": 902, "option_text": "creates;delivers", "is_correct": 0, "question_id": 90},
      {"id": 903, "option_text": "has created;has delivered", "is_correct": 0, "question_id": 90},
      {"id": 904, "option_text": "is creating;is delivering", "is_correct": 0, "question_id": 90}
    ],
    "topic_id": 5
  },
  {
    "id": 91,
    "question_type": "multiple_choice",
    "question_text": "The philosopher's writings _____ generations of thinkers and _____ intellectual discourse.",
    "correct_answer": "influenced;transformed",
    "difficulty": "Hard",
    "explanation": "Two Past Simple verbs describing historical impact. Both regular verbs.",
    "options": [
      {"id": 911, "option_text": "influenced;transformed", "is_correct": 1, "question_id": 91},
      {"id": 912, "option_text": "influences;transforms", "is_correct": 0, "question_id": 91},
      {"id": 913, "option_text": "have influenced;have transformed", "is_correct": 0, "question_id": 91},
      {"id": 914, "option_text": "are influencing;are transforming", "is_correct": 0, "question_id": 91}
    ],
    "topic_id": 5
  },
  {
    "id": 92,
    "question_type": "multiple_choice",
    "question_text": "The treaty _____ disputes and _____ peaceful coexistence for decades.",
    "correct_answer": "resolved;ensured",
    "difficulty": "Hard",
    "explanation": "Two Past Simple verbs with diplomatic context. Both regular verbs.",
    "options": [
      {"id": 921, "option_text": "resolved;ensured", "is_correct": 1, "question_id": 92},
      {"id": 922, "option_text": "resolves;ensures", "is_correct": 0, "question_id": 92},
      {"id": 923, "option_text": "have resolved;have ensured", "is_correct": 0, "question_id": 92},
      {"id": 924, "option_text": "are resolving;are ensuring", "is_correct": 0, "question_id": 92}
    ],
    "topic_id": 5
  },
  {
    "id": 93,
    "question_type": "multiple_choice",
    "question_text": "The catastrophe _____ thousands of lives and _____ the landscape forever.",
    "correct_answer": "claimed;altered",
    "difficulty": "Hard",
    "explanation": "Two Past Simple verbs describing tragic historical events. Both regular verbs.",
    "options": [
      {"id": 931, "option_text": "claimed;altered", "is_correct": 1, "question_id": 93},
      {"id": 932, "option_text": "claims;alters", "is_correct": 0, "question_id": 93},
      {"id": 933, "option_text": "have claimed;have altered", "is_correct": 0, "question_id": 93},
      {"id": 934, "option_text": "are claiming;are altering", "is_correct": 0, "question_id": 93}
    ],
    "topic_id": 5
  },
  {
    "id": 94,
    "question_type": "multiple_choice",
    "question_text": "The innovation _____ industry standards and _____ new possibilities.",
    "correct_answer": "revolutionized;ushered in",
    "difficulty": "Hard",
    "explanation": "Two Past Simple verbs with 'revolutionized' (regular) and phrasal 'ushered in' (regular).",
    "options": [
      {"id": 941, "option_text": "revolutionized;ushered in", "is_correct": 1, "question_id": 94},
      {"id": 942, "option_text": "revolutionizes;ushers in", "is_correct": 0, "question_id": 94},
      {"id": 943, "option_text": "have revolutionized;have ushered in", "is_correct": 0, "question_id": 94},
      {"id": 944, "option_text": "are revolutionizing;are ushering in", "is_correct": 0, "question_id": 94}
    ],
    "topic_id": 5
  },
  {
    "id": 95,
    "question_type": "multiple_choice",
    "question_text": "The expedition _____ unknown territories and _____ geographical knowledge.",
    "correct_answer": "explored;advanced",
    "difficulty": "Hard",
    "explanation": "Two Past Simple verbs in historical context. Both regular verbs.",
    "options": [
      {"id": 951, "option_text": "explored;advanced", "is_correct": 1, "question_id": 95},
      {"id": 952, "option_text": "explores;advances", "is_correct": 0, "question_id": 95},
      {"id": 953, "option_text": "have explored;have advanced", "is_correct": 0, "question_id": 95},
      {"id": 954, "option_text": "are exploring;are advancing", "is_correct": 0, "question_id": 95}
    ],
    "topic_id": 5
  },
  {
    "id": 96,
    "question_type": "multiple_choice",
    "question_text": "The scandal _____ the government and _____ widespread reforms.",
    "correct_answer": "shook;necessitated",
    "difficulty": "Hard",
    "explanation": "Two Past Simple verbs where 'shook' is irregular (shake-shook-shaken) and 'necessitated' is regular.",
    "options": [
      {"id": 961, "option_text": "shook;necessitated", "is_correct": 1, "question_id": 96},
      {"id": 962, "option_text": "shakes;necessitates", "is_correct": 0, "question_id": 96},
      {"id": 963, "option_text": "have shaken;have necessitated", "is_correct": 0, "question_id": 96},
      {"id": 964, "option_text": "are shaking;are necessitating", "is_correct": 0, "question_id": 96}
    ],
    "topic_id": 5
  },
  {
    "id": 97,
    "question_type": "multiple_choice",
    "question_text": "The movement _____ social consciousness and _____ systemic changes.",
    "correct_answer": "awakened;catalyzed",
    "difficulty": "Hard",
    "explanation": "Two Past Simple verbs. 'Awakened' (regular) and 'catalyzed' (regular).",
    "options": [
      {"id": 971, "option_text": "awakened;catalyzed", "is_correct": 1, "question_id": 97},
      {"id": 972, "option_text": "awakens;catalyzes", "is_correct": 0, "question_id": 97},
      {"id": 973, "option_text": "have awakened;have catalyzed", "is_correct": 0, "question_id": 97},
      {"id": 974, "option_text": "are awakening;are catalyzing", "is_correct": 0, "question_id": 97}
    ],
    "topic_id": 5
  },
  {
    "id": 98,
    "question_type": "multiple_choice",
    "question_text": "The discovery _____ the foundation for modern medicine and _____ countless lives.",
    "correct_answer": "laid;saved",
    "difficulty": "Hard",
    "explanation": "Two Past Simple verbs. 'Laid' (irregular: lay-laid-laid) and 'saved' (regular).",
    "options": [
      {"id": 981, "option_text": "laid;saved", "is_correct": 1, "question_id": 98},
      {"id": 982, "option_text": "lays;saves", "is_correct": 0, "question_id": 98},
      {"id": 983, "option_text": "have laid;have saved", "is_correct": 0, "question_id": 98},
      {"id": 984, "option_text": "are laying;are saving", "is_correct": 0, "question_id": 98}
    ],
    "topic_id": 5
  },
  {
    "id": 99,
    "question_type": "multiple_choice",
    "question_text": "The war _____ millions of lives and _____ the political landscape.",
    "correct_answer": "took;reshaped",
    "difficulty": "Hard",
    "explanation": "Two Past Simple verbs. 'Took' (irregular: take-took-taken) and 'reshaped' (regular).",
    "options": [
      {"id": 991, "option_text": "took;reshaped", "is_correct": 1, "question_id": 99},
      {"id": 992, "option_text": "takes;reshapes", "is_correct": 0, "question_id": 99},
      {"id": 993, "option_text": "have taken;have reshaped", "is_correct": 0, "question_id": 99},
      {"id": 994, "option_text": "are taking;are reshaping", "is_correct": 0, "question_id": 99}
    ],
    "topic_id": 5
  },
  {
    "id": 100,
    "question_type": "multiple_choice",
    "question_text": "The invention _____ manufacturing and _____ economic growth.",
    "correct_answer": "revolutionized;stimulated",
    "difficulty": "Hard",
    "explanation": "Two Past Simple verbs describing industrial transformation. Both regular verbs.",
    "options": [
      {"id": 1001, "option_text": "revolutionized;stimulated", "is_correct": 1, "question_id": 100},
      {"id": 1002, "option_text": "revolutionizes;stimulates", "is_correct": 0, "question_id": 100},
      {"id": 1003, "option_text": "have revolutionized;have stimulated", "is_correct": 0, "question_id": 100},
      {"id": 1004, "option_text": "are revolutionizing;are stimulating", "is_correct": 0, "question_id": 100}
    ],
    "topic_id": 5
  }
];

export default questions;
