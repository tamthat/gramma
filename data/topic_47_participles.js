const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "The _____ dog was barking loudly.",
        "correct_answer": "barking",
        "suggest_answer": "barking",
        "explanation": "Barking + hiện tại phân từ (V-ing) (Phân Từ - Present Participle)",
        "difficulty": "Easy",
        "topic_id": 47
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "The _____ man was walking slowly.",
        "correct_answer": "aged",
        "suggest_answer": "aged",
        "explanation": "Aged + quá khứ phân từ (V3/ed) (Phân Từ - Past Participle)",
        "difficulty": "Easy",
        "topic_id": 47
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "I saw a _____ child playing in the park.",
        "correct_answer": "smiling",
        "suggest_answer": "smiling",
        "explanation": "Smiling + hiện tại phân từ (V-ing) (Phân Từ - Present Participle)",
        "difficulty": "Easy",
        "topic_id": 47
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "The _____ window needs to be fixed.",
        "correct_answer": "broken",
        "suggest_answer": "broken",
        "explanation": "Broken + quá khứ phân từ (V3/ed) (Phân Từ - Past Participle)",
        "difficulty": "Easy",
        "topic_id": 47
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "The _____ students listened carefully.",
        "correct_answer": "studying",
        "suggest_answer": "studying",
        "explanation": "Studying + hiện tại phân từ (V-ing) (Phân Từ - Present Participle)",
        "difficulty": "Easy",
        "topic_id": 47
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "I found a _____ book in the library.",
        "correct_answer": "lost",
        "suggest_answer": "lost",
        "explanation": "Lost + quá khứ phân từ (V3/ed) (Phân Từ - Past Participle)",
        "difficulty": "Easy",
        "topic_id": 47
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "The _____ flowers were beautiful.",
        "correct_answer": "blooming",
        "suggest_answer": "blooming",
        "explanation": "Blooming + hiện tại phân từ (V-ing) (Phân Từ - Present Participle)",
        "difficulty": "Easy",
        "topic_id": 47
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "The _____ letter arrived yesterday.",
        "correct_answer": "expected",
        "suggest_answer": "expected",
        "explanation": "Expected + quá khứ phân từ (V3/ed) (Phân Từ - Past Participle)",
        "difficulty": "Easy",
        "topic_id": 47
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "The _____ water was cold.",
        "correct_answer": "flowing",
        "suggest_answer": "flowing",
        "explanation": "Flowing + hiện tại phân từ (V-ing) (Phân Từ - Present Participle)",
        "difficulty": "Easy",
        "topic_id": 47
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "The _____ house was sold.",
        "correct_answer": "damaged",
        "suggest_answer": "damaged",
        "explanation": "Damaged + quá khứ phân từ (V3/ed) (Phân Từ - Past Participle)",
        "difficulty": "Easy",
        "topic_id": 47
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "_____ the news, she was shocked.",
        "correct_answer": "Hearing",
        "suggest_answer": "Hearing",
        "explanation": "Hearing + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Medium",
        "topic_id": 47
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "_____ by the storm, the trees fell down.",
        "correct_answer": "Beaten",
        "suggest_answer": "Beaten",
        "explanation": "Beaten + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Medium",
        "topic_id": 47
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "_____ her degree, she got a job.",
        "correct_answer": "Finishing",
        "suggest_answer": "Finishing",
        "explanation": "Finishing + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Medium",
        "topic_id": 47
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "_____ by the judge, the defendant was silent.",
        "correct_answer": "Questioned",
        "suggest_answer": "Questioned",
        "explanation": "Questioned + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Medium",
        "topic_id": 47
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "_____ about the accident, he was worried.",
        "correct_answer": "Thinking",
        "suggest_answer": "Thinking",
        "explanation": "Thinking + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Medium",
        "topic_id": 47
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "_____ in the sun, the ice melted quickly.",
        "correct_answer": "Placed",
        "suggest_answer": "Placed",
        "explanation": "Placed + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Medium",
        "topic_id": 47
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "_____ tired from work, he went to sleep.",
        "correct_answer": "Feeling",
        "suggest_answer": "Feeling",
        "explanation": "Feeling + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Medium",
        "topic_id": 47
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "_____ the instructions, the students completed the task.",
        "correct_answer": "Following",
        "suggest_answer": "Following",
        "explanation": "Following + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Medium",
        "topic_id": 47
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "_____ to the hospital, the patient recovered.",
        "correct_answer": "Admitted",
        "suggest_answer": "Admitted",
        "explanation": "Admitted + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Medium",
        "topic_id": 47
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "_____ the opportunity, he was grateful.",
        "correct_answer": "Given",
        "suggest_answer": "Given",
        "explanation": "Given + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Medium",
        "topic_id": 47
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "_____ through the forest, we saw many animals.",
        "correct_answer": "Walking",
        "suggest_answer": "Walking",
        "explanation": "Walking + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause nâng cao)",
        "difficulty": "Hard",
        "topic_id": 47
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "_____ with the results, the manager praised the team.",
        "correct_answer": "Satisfied",
        "suggest_answer": "Satisfied",
        "explanation": "Satisfied + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Hard",
        "topic_id": 47
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "_____ the problem, we found a solution.",
        "correct_answer": "Analyzing",
        "suggest_answer": "Analyzing",
        "explanation": "Analyzing + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Hard",
        "topic_id": 47
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "_____ by her success, the colleagues were envious.",
        "correct_answer": "Impressed",
        "suggest_answer": "Impressed",
        "explanation": "Impressed + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Hard",
        "topic_id": 47
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "_____ about the proposal, the investors decided to fund it.",
        "correct_answer": "Convinced",
        "suggest_answer": "Convinced",
        "explanation": "Convinced + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Hard",
        "topic_id": 47
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "_____ down the mountain, we felt exhilarated.",
        "correct_answer": "Running",
        "suggest_answer": "Running",
        "explanation": "Running + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Hard",
        "topic_id": 47
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "_____ in an accident, he couldn't walk.",
        "correct_answer": "Injured",
        "suggest_answer": "Injured",
        "explanation": "Injured + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Hard",
        "topic_id": 47
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "_____ all the facts, the jury made a decision.",
        "correct_answer": "Considering",
        "suggest_answer": "Considering",
        "explanation": "Considering + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Hard",
        "topic_id": 47
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "_____ under stress, she performed poorly.",
        "correct_answer": "Working",
        "suggest_answer": "Working",
        "explanation": "Working + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Hard",
        "topic_id": 47
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "_____ at the party, they had fun.",
        "correct_answer": "Being",
        "suggest_answer": "Being",
        "explanation": "Being + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "difficulty": "Hard",
        "topic_id": 47
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which uses present participle correctly?",
        "correct_answer": "The running water was refreshing.",
        "difficulty": "Easy",
        "explanation": "Running + hiện tại phân từ (Phân Từ - Present Participle)",
        "options": [
            {
                "id": 311,
                "option_text": "The running water was refreshing.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "The run water was refreshing.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "The ran water was refreshing.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "The to run water was refreshing.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 47
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which uses past participle correctly?",
        "correct_answer": "The broken glass was dangerous.",
        "difficulty": "Easy",
        "explanation": "Broken + quá khứ phân từ (Phân Từ - Past Participle)",
        "options": [
            {
                "id": 321,
                "option_text": "The broken glass was dangerous.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "The breaking glass was dangerous.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "The break glass was dangerous.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "The to break glass was dangerous.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 47
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Hearing the alarm, he woke up immediately.",
        "difficulty": "Easy",
        "explanation": "Hearing + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 331,
                "option_text": "Hearing the alarm, he woke up immediately.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "Hearing the alarm, he is waking up immediately.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "Heard the alarm, he woke up immediately.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "To hear the alarm, he woke up immediately.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 47
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Defeated by the team, they accepted defeat gracefully.",
        "difficulty": "Easy",
        "explanation": "Defeated + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 341,
                "option_text": "Defeated by the team, they accepted defeat gracefully.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "Defeating by the team, they accepted defeat gracefully.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "Defeat by the team, they accepted defeat gracefully.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "To defeat by the team, they accepted defeat gracefully.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 47
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The exciting movie kept us entertained.",
        "difficulty": "Easy",
        "explanation": "Exciting + hiện tại phân từ - tính từ (Phân Từ - Present Participle as Adjective)",
        "options": [
            {
                "id": 351,
                "option_text": "The exciting movie kept us entertained.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "The excited movie kept us entertained.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "The excite movie kept us entertained.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "The to excite movie kept us entertained.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 47
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The exhausted traveler finally rested.",
        "difficulty": "Easy",
        "explanation": "Exhausted + quá khứ phân từ - tính từ (Phân Từ - Past Participle as Adjective)",
        "options": [
            {
                "id": 361,
                "option_text": "The exhausted traveler finally rested.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "The exhausting traveler finally rested.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "The exhaust traveler finally rested.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "The to exhaust traveler finally rested.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 47
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Having finished homework, she went outside.",
        "difficulty": "Easy",
        "explanation": "Having finished + perfect participle (Phân Từ - Perfect Participle)",
        "options": [
            {
                "id": 371,
                "option_text": "Having finished homework, she went outside.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "Finished homework, she went outside.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "Finishing homework, she goes outside.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "To finish homework, she went outside.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 47
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The dog running in the park is mine.",
        "difficulty": "Easy",
        "explanation": "Running + hiện tại phân từ - trong mệnh đề tính từ (Phân Từ - Present Participle in Relative Clause)",
        "options": [
            {
                "id": 381,
                "option_text": "The dog running in the park is mine.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "The dog run in the park is mine.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "The dog that runs in the park is mine (if rút gọn).",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "The dog to run in the park is mine.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 47
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The book written by the author is famous.",
        "difficulty": "Easy",
        "explanation": "Written + quá khứ phân từ - trong mệnh đề tính từ (Phân Từ - Past Participle in Relative Clause)",
        "options": [
            {
                "id": 391,
                "option_text": "The book written by the author is famous.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "The book write by the author is famous.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "The book writing by the author is famous.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "The book to write by the author is famous.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 47
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The swimming pool is closed today.",
        "difficulty": "Easy",
        "explanation": "Swimming + hiện tại phân từ - tính từ (Phân Từ - Present Participle as Adjective)",
        "options": [
            {
                "id": 401,
                "option_text": "The swimming pool is closed today.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "The swim pool is closed today.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "The swum pool is closed today.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "The to swim pool is closed today.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 47
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Surprised by the news, she didn't know what to say.",
        "difficulty": "Medium",
        "explanation": "Surprised + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 611,
                "option_text": "Surprised by the news, she didn't know what to say.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "Surprising by the news, she didn't know what to say.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Surprising the news, she didn't know what to say.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "To surprise by the news, she didn't know what to say.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 47
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Looking at the stars, he felt peaceful.",
        "difficulty": "Medium",
        "explanation": "Looking + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 621,
                "option_text": "Looking at the stars, he felt peaceful.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "Looked at the stars, he felt peaceful.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "Look at the stars, he felt peaceful.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "To look at the stars, he felt peaceful.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 47
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Encouraged by the coach, the players tried harder.",
        "difficulty": "Medium",
        "explanation": "Encouraged + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 631,
                "option_text": "Encouraged by the coach, the players tried harder.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "Encouraging by the coach, the players tried harder.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "Encourage by the coach, the players tried harder.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "To encourage by the coach, the players tried harder.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 47
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Sitting in the cafe, they discussed business.",
        "difficulty": "Medium",
        "explanation": "Sitting + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 641,
                "option_text": "Sitting in the cafe, they discussed business.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "Sat in the cafe, they discussed business.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "Sit in the cafe, they discussed business.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "To sit in the cafe, they discussed business.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 47
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Raised in poverty, he never forgot his roots.",
        "difficulty": "Medium",
        "explanation": "Raised + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 651,
                "option_text": "Raised in poverty, he never forgot his roots.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "Raising in poverty, he never forgot his roots.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "Raise in poverty, he never forgot his roots.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "To raise in poverty, he never forgot his roots.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 47
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Playing the piano, she felt happy.",
        "difficulty": "Medium",
        "explanation": "Playing + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 661,
                "option_text": "Playing the piano, she felt happy.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "Played the piano, she felt happy.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "Play the piano, she felt happy.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "To play the piano, she felt happy.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 47
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Given time, he could have succeeded.",
        "difficulty": "Medium",
        "explanation": "Given + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 671,
                "option_text": "Given time, he could have succeeded.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "Giving time, he could have succeeded.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "Give time, he could have succeeded.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "To give time, he could have succeeded.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 47
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Confused by the instructions, the students asked for help.",
        "difficulty": "Medium",
        "explanation": "Confused + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 681,
                "option_text": "Confused by the instructions, the students asked for help.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "Confusing by the instructions, the students asked for help.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "Confuse by the instructions, the students asked for help.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "To confuse by the instructions, the students asked for help.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 47
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Knowing the facts, she made an informed decision.",
        "difficulty": "Medium",
        "explanation": "Knowing + hiện tại phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 691,
                "option_text": "Knowing the facts, she made an informed decision.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Known the facts, she made an informed decision.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "Know the facts, she made an informed decision.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "To know the facts, she made an informed decision.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 47
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Moved by the story, everyone cried.",
        "difficulty": "Medium",
        "explanation": "Moved + quá khứ phân từ - rút gọn mệnh đề (Phân Từ - Reduced Clause)",
        "options": [
            {
                "id": 701,
                "option_text": "Moved by the story, everyone cried.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "Moving by the story, everyone cried.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "Move by the story, everyone cried.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "To move by the story, everyone cried.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 47
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which distinguishes present vs past participles?",
        "correct_answer": "Present: active; Past: passive or completed action",
        "difficulty": "Hard",
        "explanation": "Khác nhau giữa present và past participles (Phân Từ)",
        "options": [
            {
                "id": 811,
                "option_text": "Present: active; Past: passive or completed action",
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
                "option_text": "Present: passive; Past: active",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "They cannot be used as adjectives",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 47
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between 'excited' and 'exciting'?",
        "correct_answer": "'Excited' = feeling; 'Exciting' = causing the feeling",
        "difficulty": "Hard",
        "explanation": "Excited vs Exciting",
        "options": [
            {
                "id": 821,
                "option_text": "'Excited' = feeling; 'Exciting' = causing the feeling",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "They are completely interchangeable",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "'Exciting' is always used with people",
                "is_correct": 0,
                "question_id": 823
            },
            {
                "id": 824,
                "option_text": "'Excited' is never used as an adjective",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 47
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which correctly reduces a relative clause?",
        "correct_answer": "The man who was sleeping → The man sleeping (present participle)",
        "difficulty": "Hard",
        "explanation": "Rút gọn mệnh đề tính từ",
        "options": [
            {
                "id": 831,
                "option_text": "The man who was sleeping → The man sleeping (present participle)",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "The man who was sleeping → The man slept (past tense)",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "The man who was sleeping → The man to sleep (infinitive)",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 844,
                "option_text": "Relative clauses cannot be reduced",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 47
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of perfect participle?",
        "correct_answer": "Having finished work, he left the office.",
        "difficulty": "Hard",
        "explanation": "Perfect Participle",
        "options": [
            {
                "id": 841,
                "option_text": "Having finished work, he left the office.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "Finishing work, he had left the office.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "Finished work, he left the office.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "To have finished work, he left the office.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 47
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which shows how to form absolute phrases with participles?",
        "correct_answer": "The work done, everyone left happily.",
        "difficulty": "Hard",
        "explanation": "Absolute Phrase",
        "options": [
            {
                "id": 851,
                "option_text": "The work done, everyone left happily.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "The work doing, everyone left happily.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "The work was done, everyone left happily.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "The work to do, everyone left happily.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 47
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses participles in a sentence?",
        "correct_answer": "The running dog chased the escaped cat.",
        "difficulty": "Hard",
        "explanation": "Present và Past Participles như tính từ",
        "options": [
            {
                "id": 861,
                "option_text": "The running dog chased the escaped cat.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "The ran dog chased the escaping cat.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "The run dog chased the escape cat.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 884,
                "option_text": "The to run dog chased the to escape cat.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 47
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which shows misplaced participle (dangling modifier)?",
        "correct_answer": "Walking down the street, the store caught our attention. = WRONG",
        "difficulty": "Hard",
        "explanation": "Dangling Modifier",
        "options": [
            {
                "id": 871,
                "option_text": "Walking down the street, the store caught our attention. = WRONG",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Walking down the street, we saw the store. = CORRECT",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "The store walking down the street caught our attention. = CORRECT",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 884,
                "option_text": "Participles cannot be misplaced",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 47
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows participle phrases?",
        "correct_answer": "Present: running; Past: broken; Perfect: having finished",
        "difficulty": "Hard",
        "explanation": "Các loại participle phrases",
        "options": [
            {
                "id": 881,
                "option_text": "Present: running; Past: broken; Perfect: having finished",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "Present: to run; Past: was broken; Perfect: had finished",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "All participles are the same",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "Only present participles exist",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 47
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which shows how to reduce an adverbial clause with 'while'?",
        "correct_answer": "While studying, he fell asleep. → Studying, he fell asleep.",
        "difficulty": "Hard",
        "explanation": "Rút gọn mệnh đề phụ trạng từ",
        "options": [
            {
                "id": 891,
                "option_text": "While studying, he fell asleep. → Studying, he fell asleep.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "While studying, he fell asleep. → Studied, he fell asleep.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "While studying, he fell asleep. → To study, he fell asleep.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "Adverbial clauses cannot be reduced",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 47
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Participles",
        "correct_answer": "Participles function as adjectives and can reduce clauses to shorter forms",
        "options": [
            {
                "id": 901,
                "option_text": "Participles function as adjectives and can reduce clauses to shorter forms",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Participles are only used in continuous tenses",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Participles cannot modify nouns",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "All participles have identical meanings",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "options": [
            {
                "id": 901,
                "option_text": "Participles function as adjectives and can reduce clauses to shorter forms",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Participles are only used in continuous tenses",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Participles cannot modify nouns",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "All participles have identical meanings",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 47
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which shows common adjective-forming participles?",
        "correct_answer": "interesting, excited, surprising, confused, tired",
        "difficulty": "Hard",
        "explanation": "Phân từ dùng làm tính từ",
        "options": [
            {
                "id": 911,
                "option_text": "interesting, excited, surprising, confused, tired",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "run, go, have, do, make",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "to run, to go, to have, to do, to make",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 924,
                "option_text": "Participles are never used as adjectives",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 47
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which correctly reduces 'because she was tired'?",
        "correct_answer": "Being tired; Tired (past participle); Because of being tired",
        "difficulty": "Hard",
        "explanation": "Rút gọn mệnh đề do",
        "options": [
            {
                "id": 921,
                "option_text": "Being tired; Tired (past participle); Because of being tired",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "To be tired; Was tired; For being tired",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "Tiredly; Have tired; Tire",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Clauses cannot be reduced with participles",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 47
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which correctly converts relative clause to participle phrase?",
        "correct_answer": "The girl who runs every day → The girl running every day",
        "difficulty": "Hard",
        "explanation": "Rút gọn mệnh đề tính từ chủ động",
        "options": [
            {
                "id": 931,
                "option_text": "The girl who runs every day → The girl running every day",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "The girl who runs every day → The girl runs every day",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "The girl who runs every day → The girl to run every day",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 944,
                "option_text": "Relative clauses cannot be reduced",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 47
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which correctly converts passive relative clause?",
        "correct_answer": "The letter which was written → The letter written",
        "difficulty": "Hard",
        "explanation": "Rút gọn mệnh đề tính từ bị động",
        "options": [
            {
                "id": 941,
                "option_text": "The letter which was written → The letter written",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "The letter which was written → The letter writing",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "The letter which was written → The letter to write",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Passive relative clauses cannot be reduced",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 47
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which is an example of dangling modifier?",
        "correct_answer": "Running to the store, my wallet was left behind.",
        "difficulty": "Hard",
        "explanation": "Dangling Modifier - Lỗi phổ biến",
        "options": [
            {
                "id": 951,
                "option_text": "Running to the store, my wallet was left behind.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "Running to the store, I left my wallet behind.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "I left my wallet behind, running to the store.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "Running to the store, I saw my wallet.",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 47
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which pair shows INCORRECT participle use?",
        "correct_answer": "Boring movie watched everyone. = WRONG",
        "difficulty": "Hard",
        "explanation": "Sai - từ chủ ngữ không khớp",
        "options": [
            {
                "id": 961,
                "option_text": "Boring movie watched everyone. = WRONG",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "The boring movie kept everyone awake. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "Everyone watched the boring movie. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "The movie was boring, so everyone watched it. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 47
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which shows how participles can be combined?",
        "correct_answer": "Having studied and practiced, he was ready.",
        "difficulty": "Hard",
        "explanation": "Kết hợp multiple participles",
        "options": [
            {
                "id": 971,
                "option_text": "Having studied and practiced, he was ready.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "Having studied and practice, he was ready.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "Studied and practicing, he was ready.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 984,
                "option_text": "Participles cannot be combined",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 47
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses participles with auxiliaries?",
        "correct_answer": "He is running; The book has been written.",
        "difficulty": "Hard",
        "explanation": "Participles trong continuous và perfect tenses",
        "options": [
            {
                "id": 981,
                "option_text": "He is running; The book has been written.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "He runs running; The book has write.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "He is to run; The book has writing.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "Participles don't use auxiliaries",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 47
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows participle vs gerund?",
        "correct_answer": "Participle: modifier; Gerund: noun (I like running.)",
        "difficulty": "Hard",
        "explanation": "Participle vs Gerund",
        "options": [
            {
                "id": 991,
                "option_text": "Participle: modifier; Gerund: noun (I like running.)",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "They are identical",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Gerunds modify nouns; Participles are nouns",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "Participles and gerunds are never used together",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 47
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Participles are verb forms that function as adjectives and reduce clauses efficiently",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Participles",
        "options": [
            {
                "id": 1001,
                "option_text": "Participles are verb forms that function as adjectives and reduce clauses efficiently",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "Participles are always nouns",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Participles cannot modify anything",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "There is only one type of participle",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 47
    }
];

export default questions;