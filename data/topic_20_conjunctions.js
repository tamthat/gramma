const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "She likes coffee ___ tea.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And is a coordinating conjunction used to join words or clauses.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "I wanted to go ___ it was raining.",
        "correct_answer": "but",
        "suggest_answer": "but",
        "explanation": "But is a conjunction showing contrast.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "He studied hard ___ he passed the exam.",
        "correct_answer": "because",
        "suggest_answer": "because",
        "explanation": "Because is a subordinating conjunction showing cause/reason.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "___ you study, you will pass.",
        "correct_answer": "If",
        "suggest_answer": "If",
        "explanation": "If is a conjunction expressing a condition.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "She speaks English ___ French.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And is a coordinating conjunction joining two objects.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "He is tall ___ his brother is short.",
        "correct_answer": "while",
        "suggest_answer": "but",
        "explanation": "While is a conjunction showing contrast between two clauses.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "I couldn't attend the meeting ___ I was sick.",
        "correct_answer": "because",
        "suggest_answer": "because",
        "explanation": "Because explains the reason for not attending.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "___ it rains tomorrow, we will stay home.",
        "correct_answer": "If",
        "suggest_answer": "If",
        "explanation": "If introduces a conditional clause.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "They invited John ___ Mary to the party.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And is a conjunction joining two names.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "I like the color ___ I don't like the style.",
        "correct_answer": "but",
        "suggest_answer": "but",
        "explanation": "But shows a contrasting idea.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "She moved to the city ___ she wanted a new job.",
        "correct_answer": "because",
        "suggest_answer": "because",
        "explanation": "Because introduces the reason for moving.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "___ you have finished your work, you can go home.",
        "correct_answer": "If",
        "suggest_answer": "If",
        "explanation": "If introduces a conditional statement.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "The cake is delicious ___ moist.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And joins two adjectives describing the cake.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "He is intelligent ___ lazy.",
        "correct_answer": "but",
        "suggest_answer": "but",
        "explanation": "But contrasts two opposing qualities.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "The plants died ___ nobody watered them.",
        "correct_answer": "because",
        "suggest_answer": "because",
        "explanation": "Because explains the cause of the plants dying.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "___ you call me, I will come immediately.",
        "correct_answer": "If",
        "suggest_answer": "If",
        "explanation": "If introduces a conditional clause.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "We bought bread ___ milk at the store.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And joins two items purchased.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "She worked hard ___ failed the test.",
        "correct_answer": "but",
        "suggest_answer": "but",
        "explanation": "But shows an unexpected contrast.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "I stayed home ___ I had a fever.",
        "correct_answer": "because",
        "suggest_answer": "because",
        "explanation": "Because explains why I stayed home.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "___ you understand, please raise your hand.",
        "correct_answer": "If",
        "suggest_answer": "If",
        "explanation": "If introduces a conditional request.",
        "difficulty": "Easy",
        "topic_id": 20
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "The movie was long ___ boring.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And joins two adjectives describing the movie.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "I wanted to help ___ I didn't have time.",
        "correct_answer": "but",
        "suggest_answer": "but",
        "explanation": "But shows the contrast between wanting to help and lack of time.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "The team won ___ they practiced every day.",
        "correct_answer": "because",
        "suggest_answer": "because",
        "explanation": "Because shows the reason for winning.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "___ you work hard, you will succeed.",
        "correct_answer": "If",
        "suggest_answer": "If",
        "explanation": "If introduces a conditional promise.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "She is a teacher ___ a writer.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And joins two occupations.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "The car is old ___ it still runs well.",
        "correct_answer": "but",
        "suggest_answer": "but",
        "explanation": "But contrasts age with functionality.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "The road was closed ___ an accident.",
        "correct_answer": "because of",
        "suggest_answer": "because of",
        "explanation": "Because of explains the reason for closure.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "___ you finish early, please help others.",
        "correct_answer": "If",
        "suggest_answer": "If",
        "explanation": "If introduces a conditional instruction.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "He speaks Spanish ___ Portuguese.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And joins two languages he speaks.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "The weather is cold ___ beautiful.",
        "correct_answer": "yet",
        "suggest_answer": "but",
        "explanation": "Yet shows a slight contrast, similar to but.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "I couldn't sleep ___ I was too excited.",
        "correct_answer": "because",
        "suggest_answer": "because",
        "explanation": "Because explains the reason for insomnia.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "___ you need help, please ask.",
        "correct_answer": "If",
        "suggest_answer": "If",
        "explanation": "If introduces a conditional statement.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "The event is fun ___ educational.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And joins two qualities of the event.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "She is rich ___ unhappy.",
        "correct_answer": "yet",
        "suggest_answer": "but",
        "explanation": "Yet shows an unexpected contrast.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "The business failed ___ poor management.",
        "correct_answer": "due to",
        "suggest_answer": "due to",
        "explanation": "Due to explains the cause of failure.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "___ the weather improves, we will go hiking.",
        "correct_answer": "When",
        "suggest_answer": "When",
        "explanation": "When introduces a conditional time clause.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "The book is informative ___ entertaining.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And joins two qualities describing the book.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "I studied all day ___ still failed.",
        "correct_answer": "but",
        "suggest_answer": "but",
        "explanation": "But shows an unexpected negative result.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "He left early ___ he had another meeting.",
        "correct_answer": "because",
        "suggest_answer": "because",
        "explanation": "Because explains the reason for leaving early.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "____ you see him, tell him to call me.",
        "correct_answer": "When",
        "suggest_answer": "When",
        "explanation": "When introduces a conditional time clause.",
        "difficulty": "Medium",
        "topic_id": 20
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "She is smart ___ independent ___ confident.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And joins multiple adjectives.",
        "difficulty": "Hard",
        "topic_id": 20
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "He wanted to go ___ his parents refused.",
        "correct_answer": "but",
        "suggest_answer": "but",
        "explanation": "But shows an obstacle to his desire.",
        "difficulty": "Hard",
        "topic_id": 20
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "The project succeeded ___ everyone's hard work.",
        "correct_answer": "because of",
        "suggest_answer": "because of",
        "explanation": "Because of explains the reason for success.",
        "difficulty": "Hard",
        "topic_id": 20
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "___ you practice regularly, you will improve.",
        "correct_answer": "Unless",
        "suggest_answer": "Unless",
        "explanation": "Unless introduces a negative condition.",
        "difficulty": "Hard",
        "topic_id": 20
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "They worked hard ___ earned good money.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And joins two related actions.",
        "difficulty": "Hard",
        "topic_id": 20
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "The plan is simple ___ effective.",
        "correct_answer": "yet",
        "suggest_answer": "yet",
        "explanation": "Yet shows a mild contrast between simplicity and effectiveness.",
        "difficulty": "Hard",
        "topic_id": 20
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "She couldn't attend ___ other commitments.",
        "correct_answer": "due to",
        "suggest_answer": "due to",
        "explanation": "Due to explains why she couldn't attend.",
        "difficulty": "Hard",
        "topic_id": 20
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "___ you arrive late, you will miss the opening.",
        "correct_answer": "Unless",
        "suggest_answer": "Unless",
        "explanation": "Unless introduces a negative conditional.",
        "difficulty": "Hard",
        "topic_id": 20
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "The solution is innovative ___ practical.",
        "correct_answer": "and",
        "suggest_answer": "and",
        "explanation": "And joins two positive attributes.",
        "difficulty": "Hard",
        "topic_id": 20
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "I wanted to buy it ___ it was too expensive.",
        "correct_answer": "but",
        "suggest_answer": "but",
        "explanation": "But expresses an obstacle to the desire.",
        "difficulty": "Hard",
        "topic_id": 20
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "She likes coffee ___ tea.",
        "correct_answer": "and",
        "difficulty": "Easy",
        "explanation": "And is a coordinating conjunction.",
        "options": [
            {
                "id": 511,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 20
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "I wanted to go ___ it was raining.",
        "correct_answer": "but",
        "difficulty": "Easy",
        "explanation": "But shows contrast.",
        "options": [
            {
                "id": 521,
                "option_text": "but",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 20
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "He studied hard ___ he passed the exam.",
        "correct_answer": "because",
        "difficulty": "Easy",
        "explanation": "Because shows cause/reason.",
        "options": [
            {
                "id": 531,
                "option_text": "because",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "unless",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 20
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "You study, you will pass.",
        "correct_answer": "If",
        "difficulty": "Easy",
        "explanation": "If introduces a condition.",
        "options": [
            {
                "id": 541,
                "option_text": "If",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "And",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "But",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 20
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "She speaks English ___ French.",
        "correct_answer": "and",
        "difficulty": "Easy",
        "explanation": "And joins two languages.",
        "options": [
            {
                "id": 551,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 20
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "He is tall ___ his brother is short.",
        "correct_answer": "while",
        "difficulty": "Easy",
        "explanation": "While shows contrast.",
        "options": [
            {
                "id": 561,
                "option_text": "while",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 20
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "I couldn't attend the meeting ___ I was sick.",
        "correct_answer": "because",
        "difficulty": "Easy",
        "explanation": "Because explains the reason.",
        "options": [
            {
                "id": 571,
                "option_text": "because",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "while",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 20
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "It rains tomorrow, we will stay home.",
        "correct_answer": "If",
        "difficulty": "Easy",
        "explanation": "If introduces a condition.",
        "options": [
            {
                "id": 581,
                "option_text": "If",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "And",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "But",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 20
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "They invited John ___ Mary to the party.",
        "correct_answer": "and",
        "difficulty": "Easy",
        "explanation": "And joins two people.",
        "options": [
            {
                "id": 591,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 20
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "I like the color ___ I don't like the style.",
        "correct_answer": "but",
        "difficulty": "Easy",
        "explanation": "But shows contrast.",
        "options": [
            {
                "id": 601,
                "option_text": "but",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 20
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "The movie was long ___ boring.",
        "correct_answer": "and",
        "difficulty": "Medium",
        "explanation": "And joins adjectives.",
        "options": [
            {
                "id": 611,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 20
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "I wanted to help ___ I didn't have time.",
        "correct_answer": "but",
        "difficulty": "Medium",
        "explanation": "But shows contrast.",
        "options": [
            {
                "id": 621,
                "option_text": "but",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 20
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "The team won ___ they practiced every day.",
        "correct_answer": "because",
        "difficulty": "Medium",
        "explanation": "Because shows cause.",
        "options": [
            {
                "id": 631,
                "option_text": "because",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 20
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "You work hard, you will succeed.",
        "correct_answer": "If",
        "difficulty": "Medium",
        "explanation": "If introduces a condition.",
        "options": [
            {
                "id": 641,
                "option_text": "If",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "And",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "But",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 20
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "She is a teacher ___ a writer.",
        "correct_answer": "and",
        "difficulty": "Medium",
        "explanation": "And joins two roles.",
        "options": [
            {
                "id": 651,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 20
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "The car is old ___ it still runs well.",
        "correct_answer": "but",
        "difficulty": "Medium",
        "explanation": "But shows contrast.",
        "options": [
            {
                "id": 661,
                "option_text": "but",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 20
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "The road was closed ___ an accident.",
        "correct_answer": "because of",
        "difficulty": "Medium",
        "explanation": "Because of explains the reason.",
        "options": [
            {
                "id": 671,
                "option_text": "because of",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 20
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "You finish early, please help others.",
        "correct_answer": "If",
        "difficulty": "Medium",
        "explanation": "If introduces a condition.",
        "options": [
            {
                "id": 681,
                "option_text": "If",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "And",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "But",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 20
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "He speaks Spanish ___ Portuguese.",
        "correct_answer": "and",
        "difficulty": "Medium",
        "explanation": "And joins two languages.",
        "options": [
            {
                "id": 691,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 20
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "The weather is cold ___ beautiful.",
        "correct_answer": "yet",
        "difficulty": "Medium",
        "explanation": "Yet shows contrast.",
        "options": [
            {
                "id": 701,
                "option_text": "yet",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 20
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "She is smart ___ independent ___ confident.",
        "correct_answer": "and",
        "difficulty": "Hard",
        "explanation": "And joins multiple adjectives.",
        "options": [
            {
                "id": 711,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 20
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "He wanted to go ___ his parents refused.",
        "correct_answer": "but",
        "difficulty": "Hard",
        "explanation": "But shows contrast.",
        "options": [
            {
                "id": 721,
                "option_text": "but",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 20
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "The project succeeded ___ everyone's hard work.",
        "correct_answer": "because of",
        "difficulty": "Hard",
        "explanation": "Because of shows cause.",
        "options": [
            {
                "id": 731,
                "option_text": "because of",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 20
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "You practice regularly, you will improve.",
        "correct_answer": "Unless",
        "difficulty": "Hard",
        "explanation": "Unless introduces negative condition.",
        "options": [
            {
                "id": 741,
                "option_text": "Unless",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "If",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "And",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 20
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "They worked hard ___ earned good money.",
        "correct_answer": "and",
        "difficulty": "Hard",
        "explanation": "And joins two related actions.",
        "options": [
            {
                "id": 751,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 20
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "The plan is simple ___ effective.",
        "correct_answer": "yet",
        "difficulty": "Hard",
        "explanation": "Yet shows mild contrast.",
        "options": [
            {
                "id": 761,
                "option_text": "yet",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 20
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "She couldn't attend ___ other commitments.",
        "correct_answer": "due to",
        "difficulty": "Hard",
        "explanation": "Due to shows cause.",
        "options": [
            {
                "id": 771,
                "option_text": "due to",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 20
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "You arrive late, you will miss the opening.",
        "correct_answer": "Unless",
        "difficulty": "Hard",
        "explanation": "Unless introduces negative condition.",
        "options": [
            {
                "id": 781,
                "option_text": "Unless",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "If",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "And",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 20
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "The solution is innovative ___ practical.",
        "correct_answer": "and",
        "difficulty": "Hard",
        "explanation": "And joins two positive attributes.",
        "options": [
            {
                "id": 791,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 20
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "I wanted to buy it ___ it was too expensive.",
        "correct_answer": "but",
        "difficulty": "Hard",
        "explanation": "But shows an obstacle.",
        "options": [
            {
                "id": 801,
                "option_text": "but",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 20
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "She moved to the city ___ she wanted a new job.",
        "correct_answer": "because",
        "difficulty": "Hard",
        "explanation": "Because introduces the reason.",
        "options": [
            {
                "id": 811,
                "option_text": "because",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 20
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "You have finished your work, you can go home.",
        "correct_answer": "If",
        "difficulty": "Hard",
        "explanation": "If introduces a condition.",
        "options": [
            {
                "id": 821,
                "option_text": "If",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "And",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "But",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 20
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "I couldn't sleep ___ I was too excited.",
        "correct_answer": "because",
        "difficulty": "Hard",
        "explanation": "Because explains the reason.",
        "options": [
            {
                "id": 831,
                "option_text": "because",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 20
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "You need help, please ask.",
        "correct_answer": "If",
        "difficulty": "Hard",
        "explanation": "If introduces a condition.",
        "options": [
            {
                "id": 841,
                "option_text": "If",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "And",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "But",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 20
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "The event is fun ___ educational.",
        "correct_answer": "and",
        "difficulty": "Hard",
        "explanation": "And joins two qualities.",
        "options": [
            {
                "id": 851,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 20
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "She is rich ___ unhappy.",
        "correct_answer": "yet",
        "difficulty": "Hard",
        "explanation": "Yet shows unexpected contrast.",
        "options": [
            {
                "id": 861,
                "option_text": "yet",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 20
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "The business failed ___ poor management.",
        "correct_answer": "due to",
        "difficulty": "Hard",
        "explanation": "Due to shows cause.",
        "options": [
            {
                "id": 871,
                "option_text": "due to",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 20
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "The weather improves, we will go hiking.",
        "correct_answer": "When",
        "difficulty": "Hard",
        "explanation": "When introduces a conditional time clause.",
        "options": [
            {
                "id": 881,
                "option_text": "When",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "If",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "But",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 20
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "I studied all day ___ still failed.",
        "correct_answer": "but",
        "difficulty": "Hard",
        "explanation": "But shows unexpected negative result.",
        "options": [
            {
                "id": 891,
                "option_text": "but",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 20
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "He left early ___ he had another meeting.",
        "correct_answer": "because",
        "difficulty": "Hard",
        "explanation": "Because explains the reason.",
        "options": [
            {
                "id": 901,
                "option_text": "because",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 20
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "The book is informative ___ entertaining.",
        "correct_answer": "and",
        "difficulty": "Hard",
        "explanation": "And joins two qualities.",
        "options": [
            {
                "id": 911,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 20
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "The cake is delicious ___ moist.",
        "correct_answer": "and",
        "difficulty": "Hard",
        "explanation": "And joins two adjectives.",
        "options": [
            {
                "id": 921,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 20
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "He is intelligent ___ lazy.",
        "correct_answer": "but",
        "difficulty": "Hard",
        "explanation": "But contrasts two qualities.",
        "options": [
            {
                "id": 931,
                "option_text": "but",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 20
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "The plants died ___ nobody watered them.",
        "correct_answer": "because",
        "difficulty": "Hard",
        "explanation": "Because explains the cause.",
        "options": [
            {
                "id": 941,
                "option_text": "because",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 20
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "You call me, I will come immediately.",
        "correct_answer": "If",
        "difficulty": "Hard",
        "explanation": "If introduces a condition.",
        "options": [
            {
                "id": 951,
                "option_text": "If",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "And",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "But",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 20
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "We bought bread ___ milk at the store.",
        "correct_answer": "and",
        "difficulty": "Hard",
        "explanation": "And joins two items.",
        "options": [
            {
                "id": 961,
                "option_text": "and",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 20
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "She worked hard ___ failed the test.",
        "correct_answer": "but",
        "difficulty": "Hard",
        "explanation": "But shows unexpected contrast.",
        "options": [
            {
                "id": 971,
                "option_text": "but",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "because",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 20
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "I stayed home ___ I had a fever.",
        "correct_answer": "because",
        "difficulty": "Hard",
        "explanation": "Because explains the reason.",
        "options": [
            {
                "id": 981,
                "option_text": "because",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "and",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "but",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "if",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 20
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "You understand, please raise your hand.",
        "correct_answer": "If",
        "difficulty": "Hard",
        "explanation": "If introduces a conditional request.",
        "options": [
            {
                "id": 991,
                "option_text": "If",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "And",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "But",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 20
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "You see him, tell him to call me.",
        "correct_answer": "When",
        "difficulty": "Hard",
        "explanation": "When introduces a conditional time clause.",
        "options": [
            {
                "id": 1001,
                "option_text": "When",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "If",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Because",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "But",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 20
    }
];

export default questions;