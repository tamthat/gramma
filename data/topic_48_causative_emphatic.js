const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "She had her car _____ yesterday.",
        "correct_answer": "repaired",
        "suggest_answer": "repaired",
        "explanation": "Repaired + Causative (Have + object + past participle) - Have something done",
        "difficulty": "Easy",
        "topic_id": 48
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "He got his hair _____.",
        "correct_answer": "cut",
        "suggest_answer": "cut",
        "explanation": "Cut + Causative (Get + object + past participle) - Get something done",
        "difficulty": "Easy",
        "topic_id": 48
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "I _____ do love your new dress!",
        "correct_answer": "do",
        "suggest_answer": "do",
        "explanation": "Do + Emphatic (do/does/did + verb) - Nhấn mạnh",
        "difficulty": "Easy",
        "topic_id": 48
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "She _____ go to the gym every day.",
        "correct_answer": "does",
        "suggest_answer": "does",
        "explanation": "Does + Emphatic (do/does/did + verb) - Nhấn mạnh",
        "difficulty": "Easy",
        "topic_id": 48
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "They _____ arrive on time, but they were late.",
        "correct_answer": "did",
        "suggest_answer": "did",
        "explanation": "Did + Emphatic (do/does/did + verb) - Nhấn mạnh",
        "difficulty": "Easy",
        "topic_id": 48
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "We had the house _____.",
        "correct_answer": "painted",
        "suggest_answer": "painted",
        "explanation": "Painted + Causative (Have + object + past participle)",
        "difficulty": "Easy",
        "topic_id": 48
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "She got the document _____.",
        "correct_answer": "typed",
        "suggest_answer": "typed",
        "explanation": "Typed + Causative (Get + object + past participle)",
        "difficulty": "Easy",
        "topic_id": 48
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "He _____ work hard to achieve his goals.",
        "correct_answer": "does",
        "suggest_answer": "does",
        "explanation": "Does + Emphatic",
        "difficulty": "Easy",
        "topic_id": 48
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "_____ sit down and listen!",
        "correct_answer": "Do",
        "suggest_answer": "Do",
        "explanation": "Do + Imperative (Mệnh lệnh)",
        "difficulty": "Easy",
        "topic_id": 48
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "They had their clothes _____.",
        "correct_answer": "washed",
        "suggest_answer": "washed",
        "explanation": "Washed + Causative (Have + object + past participle)",
        "difficulty": "Easy",
        "topic_id": 48
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "I had him _____ the garden.",
        "correct_answer": "water",
        "suggest_answer": "water",
        "explanation": "Water + Causative (Have + object + base form/past participle) - Nhờ ai làm gì",
        "difficulty": "Medium",
        "topic_id": 48
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "She got them _____ the room.",
        "correct_answer": "clean",
        "suggest_answer": "clean",
        "explanation": "Clean + Causative (Get + object + base form/past participle)",
        "difficulty": "Medium",
        "topic_id": 48
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "He _____ study hard, and he passed the exam.",
        "correct_answer": "did",
        "suggest_answer": "did",
        "explanation": "Did + Emphatic - để nhấn mạnh",
        "difficulty": "Medium",
        "topic_id": 48
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "We _____ appreciate your help.",
        "correct_answer": "do",
        "suggest_answer": "do",
        "explanation": "Do + Emphatic - để nhấn mạnh",
        "difficulty": "Medium",
        "topic_id": 48
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "I had the mechanic _____ my car.",
        "correct_answer": "fix",
        "suggest_answer": "fix",
        "explanation": "Fix + Causative (Have + object + base form)",
        "difficulty": "Medium",
        "topic_id": 48
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "She got the teacher _____ her homework.",
        "correct_answer": "check",
        "suggest_answer": "check",
        "explanation": "Check + Causative (Get + object + base form)",
        "difficulty": "Medium",
        "topic_id": 48
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "They _____ want to leave early.",
        "correct_answer": "do",
        "suggest_answer": "do",
        "explanation": "Do + Emphatic",
        "difficulty": "Medium",
        "topic_id": 48
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "He had the gardener _____ the lawn.",
        "correct_answer": "mow",
        "suggest_answer": "mow",
        "explanation": "Mow + Causative (Have + object + base form)",
        "difficulty": "Medium",
        "topic_id": 48
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "_____ be quiet and listen to me!",
        "correct_answer": "Do",
        "suggest_answer": "Do",
        "explanation": "Do + Imperative - mệnh lệnh nhấn mạnh",
        "difficulty": "Medium",
        "topic_id": 48
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "She _____ love traveling around the world.",
        "correct_answer": "does",
        "suggest_answer": "does",
        "explanation": "Does + Emphatic",
        "difficulty": "Medium",
        "topic_id": 48
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "I had my dress _____ by the tailor.",
        "correct_answer": "altered",
        "suggest_answer": "altered",
        "explanation": "Altered + Causative (Have + object + past participle) - nâng cao",
        "difficulty": "Hard",
        "topic_id": 48
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "He got the house _____ before the guests arrived.",
        "correct_answer": "cleaned",
        "suggest_answer": "cleaned",
        "explanation": "Cleaned + Causative (Get + object + past participle)",
        "difficulty": "Hard",
        "topic_id": 48
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "She _____ pass the driving test on her first attempt.",
        "correct_answer": "did",
        "suggest_answer": "did",
        "explanation": "Did + Emphatic - để nhấn mạnh điều đáng chú ý",
        "difficulty": "Hard",
        "topic_id": 48
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "We _____ make an effort to improve our service.",
        "correct_answer": "do",
        "suggest_answer": "do",
        "explanation": "Do + Emphatic",
        "difficulty": "Hard",
        "topic_id": 48
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "I had them _____ the broken window.",
        "correct_answer": "replace",
        "suggest_answer": "replace",
        "explanation": "Replace + Causative (Have + object + base form)",
        "difficulty": "Hard",
        "topic_id": 48
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "She got the plumber _____ the leak.",
        "correct_answer": "fix",
        "suggest_answer": "fix",
        "explanation": "Fix + Causative (Get + object + base form)",
        "difficulty": "Hard",
        "topic_id": 48
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "He _____ enjoy playing soccer.",
        "correct_answer": "does",
        "suggest_answer": "does",
        "explanation": "Does + Emphatic - để nhấn mạnh",
        "difficulty": "Hard",
        "topic_id": 48
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "They had the road _____.",
        "correct_answer": "repaved",
        "suggest_answer": "repaved",
        "explanation": "Repaved + Causative (Have + object + past participle)",
        "difficulty": "Hard",
        "topic_id": 48
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "_____ come to the meeting tomorrow!",
        "correct_answer": "Do",
        "suggest_answer": "Do",
        "explanation": "Do + Imperative - mệnh lệnh nhấn mạnh",
        "difficulty": "Hard",
        "topic_id": 48
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "I _____ believe you would do such a thing.",
        "correct_answer": "do",
        "suggest_answer": "do",
        "explanation": "Do + Emphatic",
        "difficulty": "Hard",
        "topic_id": 48
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which uses causative correctly?",
        "correct_answer": "She had her hair cut by the stylist.",
        "difficulty": "Easy",
        "explanation": "Had + object + past participle (Causative - Have something done)",
        "options": [
            {
                "id": 311,
                "option_text": "She had her hair cut by the stylist.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "She had cut her hair by the stylist.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "She has her hair cutting by the stylist.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "She has her hair to cut by the stylist.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 48
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which uses emphatic 'do' correctly?",
        "correct_answer": "I do love your new car!",
        "difficulty": "Easy",
        "explanation": "Do + base verb (Emphatic - để nhấn mạnh)",
        "options": [
            {
                "id": 321,
                "option_text": "I do love your new car!",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "I do loves your new car!",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "I do to love your new car!",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "I do loved your new car!",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 48
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "He got the broken window fixed.",
        "difficulty": "Easy",
        "explanation": "Got + object + past participle (Causative - Get something done)",
        "options": [
            {
                "id": 331,
                "option_text": "He got the broken window fixed.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "He got the broken window fix.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "He got fix the broken window.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "He got the broken window to fix.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 48
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "She does work hard every day.",
        "difficulty": "Easy",
        "explanation": "Does + base verb (Emphatic)",
        "options": [
            {
                "id": 341,
                "option_text": "She does work hard every day.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "She does works hard every day.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "She does to work hard every day.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "She does worked hard every day.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 48
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Do listen to what I'm saying!",
        "difficulty": "Easy",
        "explanation": "Do + base verb (Imperative - mệnh lệnh nhấn mạnh)",
        "options": [
            {
                "id": 351,
                "option_text": "Do listen to what I'm saying!",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "Do listens to what I'm saying!",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "Do to listen to what I'm saying!",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "Do listened to what I'm saying!",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 48
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I had the house painted last month.",
        "difficulty": "Easy",
        "explanation": "Had + object + past participle (Causative)",
        "options": [
            {
                "id": 361,
                "option_text": "I had the house painted last month.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "I had the house paint last month.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "I had paint the house last month.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "I had to paint the house last month.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 48
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "They did complete the project on time.",
        "difficulty": "Easy",
        "explanation": "Did + base verb (Emphatic)",
        "options": [
            {
                "id": 371,
                "option_text": "They did complete the project on time.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "They did completes the project on time.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "They did to complete the project on time.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "They did completed the project on time.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 48
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "She got her laptop repaired at the shop.",
        "difficulty": "Easy",
        "explanation": "Got + object + past participle (Causative - Get something done)",
        "options": [
            {
                "id": 381,
                "option_text": "She got her laptop repaired at the shop.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "She got her laptop repair at the shop.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "She got repair her laptop at the shop.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "She got her laptop to repair at the shop.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 48
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Do come to my party next Saturday!",
        "difficulty": "Easy",
        "explanation": "Do + base verb (Imperative - mệnh lệnh nhấn mạnh)",
        "options": [
            {
                "id": 391,
                "option_text": "Do come to my party next Saturday!",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "Do comes to my party next Saturday!",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "Do to come to my party next Saturday!",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "Do came to my party next Saturday!",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 48
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "We do appreciate your support.",
        "difficulty": "Easy",
        "explanation": "Do + base verb (Emphatic)",
        "options": [
            {
                "id": 401,
                "option_text": "We do appreciate your support.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "We do appreciates your support.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "We do to appreciate your support.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "We do appreciated your support.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 48
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I had him paint the fence.",
        "difficulty": "Medium",
        "explanation": "Have + object + base form (Causative - Nhờ ai làm gì)",
        "options": [
            {
                "id": 611,
                "option_text": "I had him paint the fence.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "I had him painted the fence.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "I had him to paint the fence.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "I had him painting the fence.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 48
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "She got someone to clean her apartment.",
        "difficulty": "Medium",
        "explanation": "Get + object + to + base form (Causative alternative)",
        "options": [
            {
                "id": 621,
                "option_text": "She got someone to clean her apartment.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "She got someone clean her apartment.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "She got someone cleaning her apartment.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "She got someone cleaned her apartment.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 48
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "He does like coffee, despite what you think.",
        "difficulty": "Medium",
        "explanation": "Does + base verb (Emphatic - để nhấn mạnh)",
        "options": [
            {
                "id": 631,
                "option_text": "He does like coffee, despite what you think.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "He does likes coffee, despite what you think.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "He does to like coffee, despite what you think.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "He does liked coffee, despite what you think.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 48
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "They had the documents translated.",
        "difficulty": "Medium",
        "explanation": "Had + object + past participle (Causative)",
        "options": [
            {
                "id": 641,
                "option_text": "They had the documents translated.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "They had the documents translate.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "They had the documents translating.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "They had translate the documents.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 48
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I do wish you would stay longer.",
        "difficulty": "Medium",
        "explanation": "Do + base verb (Emphatic)",
        "options": [
            {
                "id": 651,
                "option_text": "I do wish you would stay longer.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "I do wishes you would stay longer.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "I do to wish you would stay longer.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "I do wished you would stay longer.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 48
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "She got her eyes examined by the doctor.",
        "difficulty": "Medium",
        "explanation": "Got + object + past participle (Causative)",
        "options": [
            {
                "id": 661,
                "option_text": "She got her eyes examined by the doctor.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "She got her eyes examine by the doctor.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "She got her eyes examining by the doctor.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "She got examine her eyes by the doctor.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 48
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "You did say you would help me!",
        "difficulty": "Medium",
        "explanation": "Did + base verb (Emphatic - để nhấn mạnh, đôi khi dùng để khiến ai đó nhớ lại)",
        "options": [
            {
                "id": 671,
                "option_text": "You did say you would help me!",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "You did says you would help me!",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "You did to say you would help me!",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 684,
                "option_text": "You did said you would help me!",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 48
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "We had the report prepared in advance.",
        "difficulty": "Medium",
        "explanation": "Had + object + past participle (Causative)",
        "options": [
            {
                "id": 681,
                "option_text": "We had the report prepared in advance.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "We had the report prepare in advance.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "We had the report preparing in advance.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "We had prepare the report in advance.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 48
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Do help yourself to some coffee!",
        "difficulty": "Medium",
        "explanation": "Do + base verb (Imperative - mệnh lệnh nhấn mạnh)",
        "options": [
            {
                "id": 691,
                "option_text": "Do help yourself to some coffee!",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Do helps yourself to some coffee!",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "Do to help yourself to some coffee!",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "Do helped yourself to some coffee!",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 48
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "They do know how to handle this situation.",
        "difficulty": "Medium",
        "explanation": "Do + base verb (Emphatic)",
        "options": [
            {
                "id": 701,
                "option_text": "They do know how to handle this situation.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "They do knows how to handle this situation.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "They do to know how to handle this situation.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "They do knew how to handle this situation.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 48
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which distinguishes 'have something done' from 'have someone do'?",
        "correct_answer": "'Have something done' = passive; 'Have someone do' = active",
        "difficulty": "Hard",
        "explanation": "Khác nhau giữa causative structures (Cấu Trúc Nhờ Vả)",
        "options": [
            {
                "id": 811,
                "option_text": "'Have something done' = passive; 'Have someone do' = active",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "They are identical in meaning",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "'Have someone do' = passive; 'Have something done' = active",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "Only one can be used in English",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 48
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which shows the correct positions for emphatic 'do'?",
        "correct_answer": "Do + base verb (with no other auxiliary before it)",
        "difficulty": "Hard",
        "explanation": "Vị trí của emphatic 'do'",
        "options": [
            {
                "id": 821,
                "option_text": "Do + base verb (with no other auxiliary before it)",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Base verb + do",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Do can appear anywhere in the sentence",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "Do cannot be used with auxiliary verbs",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 48
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows the difference between 'get' and 'have'?",
        "correct_answer": "'Get' is more informal and persuasive; 'Have' is more neutral",
        "difficulty": "Hard",
        "explanation": "Get vs Have (Causative)",
        "options": [
            {
                "id": 831,
                "option_text": "'Get' is more informal and persuasive; 'Have' is more neutral",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "They are identical",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "'Have' is more informal; 'Get' is formal",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 844,
                "option_text": "Only one can be used",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 48
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which is INCORRECT causative form?",
        "correct_answer": "I had my car fixed myself. = WRONG (contradicts causative meaning)",
        "difficulty": "Hard",
        "explanation": "Sai - causative có nghĩa là nhờ người khác",
        "options": [
            {
                "id": 841,
                "option_text": "I had my car fixed myself. = WRONG (contradicts causative meaning)",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "I had my car fixed by a mechanic. = CORRECT",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "I got my hair cut at the salon. = CORRECT",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "I had the plumber fix the leak. = CORRECT",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 48
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct emphatic usage?",
        "correct_answer": "She does work hard, even though people say she's lazy.",
        "difficulty": "Hard",
        "explanation": "Emphatic 'do' để phủ định hoặc khẳng định mạnh mẽ",
        "options": [
            {
                "id": 851,
                "option_text": "She does work hard, even though people say she's lazy.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "She does works hard, even though people say she's lazy.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "She work does hard, even though people say she's lazy.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "She does to work hard, even though people say she's lazy.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 48
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses imperative with 'do'?",
        "correct_answer": "Do be careful with that vase!",
        "difficulty": "Hard",
        "explanation": "Do + base verb (Imperative)",
        "options": [
            {
                "id": 861,
                "option_text": "Do be careful with that vase!",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "Do is careful with that vase!",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "Do been careful with that vase!",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 884,
                "option_text": "Do to be careful with that vase!",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 48
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which shows the tense of emphatic 'do'?",
        "correct_answer": "Present: do/does; Past: did; Future: will do",
        "difficulty": "Hard",
        "explanation": "Emphatic 'do' theo thì",
        "options": [
            {
                "id": 871,
                "option_text": "Present: do/does; Past: did; Future: will do",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Present: does; Past: done; Future: doing",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "Emphatic 'do' has no tense",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 884,
                "option_text": "Only present tense can have emphatic 'do'",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 48
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which shows when to use emphatic 'do'?",
        "correct_answer": "To contradict, emphasize, or strongly affirm something",
        "difficulty": "Hard",
        "explanation": "Khi nào dùng emphatic 'do'",
        "options": [
            {
                "id": 881,
                "option_text": "To contradict, emphasize, or strongly affirm something",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "Randomly in any sentence",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "Only in questions",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "Emphatic 'do' is never used",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 48
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which shows common causative structures?",
        "correct_answer": "have + object + past participle; get + object + past participle",
        "difficulty": "Hard",
        "explanation": "Các cấu trúc causative phổ biến",
        "options": [
            {
                "id": 891,
                "option_text": "have + object + past participle; get + object + past participle",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "have + object + base form; get + object + base form",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "All causative structures are identical",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "There is only one causative structure",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 48
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Causative, Emphatic & Imperative",
        "correct_answer": "Causative shows someone doing something through others; Emphatic do emphasizes actions; Imperative do strengthens commands",
        "options": [
            {
                "id": 901,
                "option_text": "Causative shows someone doing something through others; Emphatic do emphasizes actions; Imperative do strengthens commands",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All three structures are identical in meaning",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Causative is never used in modern English",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Emphatic 'do' cannot be used with imperatives",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "options": [
            {
                "id": 901,
                "option_text": "Causative shows someone doing something through others; Emphatic do emphasizes actions; Imperative do strengthens commands",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All three structures are identical in meaning",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Causative is never used in modern English",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Emphatic 'do' cannot be used with imperatives",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 48
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which shows causative with 'make'?",
        "correct_answer": "make + object + base form (make someone do something)",
        "difficulty": "Hard",
        "explanation": "Causative với 'make'",
        "options": [
            {
                "id": 911,
                "option_text": "make + object + base form (make someone do something)",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "make + object + past participle",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "make + base form + object",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 924,
                "option_text": "'Make' cannot be used as a causative",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 48
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which shows causative with 'let'?",
        "correct_answer": "let + object + base form (let someone do something)",
        "difficulty": "Hard",
        "explanation": "Causative với 'let'",
        "options": [
            {
                "id": 921,
                "option_text": "let + object + base form (let someone do something)",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "let + object + past participle",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "let + base form + object",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "'Let' cannot be used as a causative",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 48
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows emphatic do with negation?",
        "correct_answer": "He does NOT like vegetables (emphatic negation)",
        "difficulty": "Hard",
        "explanation": "Emphatic 'do' với phủ định",
        "options": [
            {
                "id": 931,
                "option_text": "He does NOT like vegetables (emphatic negation)",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "He do not like vegetables",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "He does like vegetables NOT",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 944,
                "option_text": "Emphatic 'do' cannot be used with negation",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 48
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between causative and doing something yourself?",
        "correct_answer": "Causative = someone else does it; Direct = you do it yourself",
        "difficulty": "Hard",
        "explanation": "Causative vs Direct Action",
        "options": [
            {
                "id": 941,
                "option_text": "Causative = someone else does it; Direct = you do it yourself",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "They are completely identical",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Causative always means you do it",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Direct action is never used",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 48
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows causative in past?",
        "correct_answer": "I had the house painted last summer.",
        "difficulty": "Hard",
        "explanation": "Causative ở thì quá khứ",
        "options": [
            {
                "id": 951,
                "option_text": "I had the house painted last summer.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "I have the house painting last summer.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "I have had the house paint last summer.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "I will have the house painted last summer.",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 48
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which pair shows INCORRECT structure?",
        "correct_answer": "I have him painted the fence. = WRONG",
        "difficulty": "Hard",
        "explanation": "Sai - order không đúng",
        "options": [
            {
                "id": 961,
                "option_text": "I have him painted the fence. = WRONG",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "I have him paint the fence. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "I had the fence painted. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "I got the fence painted. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 48
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows make as causative?",
        "correct_answer": "The loud noise made me jump.",
        "difficulty": "Hard",
        "explanation": "Make + causative",
        "options": [
            {
                "id": 971,
                "option_text": "The loud noise made me jump.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "The loud noise made me jumped.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "The loud noise made me to jump.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 984,
                "option_text": "The loud noise made jumping me.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 48
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows let as causative?",
        "correct_answer": "Let me help you carry that.",
        "difficulty": "Hard",
        "explanation": "Let + causative",
        "options": [
            {
                "id": 981,
                "option_text": "Let me help you carry that.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "Let me helped you carry that.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "Let me to help you carry that.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "Let helping me you carry that.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 48
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which shows do as both emphatic and imperative?",
        "correct_answer": "Do help me! (combines both functions)",
        "difficulty": "Hard",
        "explanation": "Do vừa emphatic vừa imperative",
        "options": [
            {
                "id": 991,
                "option_text": "Do help me! (combines both functions)",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Help me do! (wrong order)",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Do to help me! (adds infinitive)",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "Emphatic and imperative are always separate",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 48
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "These structures allow expressing actions indirectly, emphasizing, and giving strong commands",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Causative, Emphatic & Imperative",
        "options": [
            {
                "id": 1001,
                "option_text": "These structures allow expressing actions indirectly, emphasizing, and giving strong commands",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "These structures are rarely used in modern English",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "These structures are identical in usage",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Only one of these structures is important",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 48
    }
];

export default questions;