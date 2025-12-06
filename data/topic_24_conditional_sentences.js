const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "If you study hard, you ___ the exam.",
        "correct_answer": "will pass",
        "suggest_answer": "will pass",
        "explanation": "Zero Conditional: If + Simple Present, Simple Present. (General truths)",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "If I ___ you, I would help.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Second Conditional: If + Simple Past, would + verb. (Hypothetical situations)",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "If you had studied, you ___ passed.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Third Conditional: If + Past Perfect, would have + Past Participle. (Impossible past situations)",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "Should you need help, ___ me.",
        "correct_answer": "contact",
        "suggest_answer": "contact",
        "explanation": "Inverted form of First Conditional: Should + subject + verb, imperative/main clause.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "Had I known, I ___ told you.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Inverted form of Third Conditional: Had + subject + Past Participle, would have + verb.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "If water boils, it ___ into steam.",
        "correct_answer": "turns",
        "suggest_answer": "turns",
        "explanation": "Zero Conditional: General truth about natural phenomena.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "If I won the lottery, I ___ buy a house.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Second Conditional: Hypothetical future situation.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "If she had come, we ___ gone to the movie.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Third Conditional: Impossible past situation.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "Were you to arrive early, ___ would wait.",
        "correct_answer": "I",
        "suggest_answer": "I",
        "explanation": "Inverted form of Second Conditional: Were + subject + to verb, main clause.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "Unless you apologize, I ___ forgive you.",
        "correct_answer": "won't",
        "suggest_answer": "won't",
        "explanation": "First Conditional with 'unless': If you don't apologize, I won't forgive you.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "If cats eat fish, they ___ healthy.",
        "correct_answer": "become",
        "suggest_answer": "become",
        "explanation": "Zero Conditional: General truth about cause and effect.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "If I had money, I ___ travel around the world.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Second Conditional: Hypothetical present/future situation.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "If they had trained harder, they ___ won the race.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Third Conditional: Impossible past situation.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "Should it rain tomorrow, the event ___ postponed.",
        "correct_answer": "will be",
        "suggest_answer": "will be",
        "explanation": "Inverted form of First Conditional: Should + subject + verb, main clause.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "Had we met earlier, we ___ became friends sooner.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Inverted form of Third Conditional.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "If you heat ice, it ___.",
        "correct_answer": "melts",
        "suggest_answer": "melts",
        "explanation": "Zero Conditional: Scientific fact.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "If she studied medicine, she ___ become a doctor.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Second Conditional: Hypothetical situation.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "If he had called me, I ___ helped him.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Third Conditional: Impossible past situation.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "Were I you, I ___ take that job.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Inverted form of Second Conditional.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "If you don't hurry, you ___ miss the train.",
        "correct_answer": "will",
        "suggest_answer": "will",
        "explanation": "First Conditional: Real possibility in future.",
        "difficulty": "Easy",
        "topic_id": 24
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "If people exercise regularly, they ___ fit.",
        "correct_answer": "stay",
        "suggest_answer": "stay",
        "explanation": "Zero Conditional: General truth.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "If I were rich, I ___ donate to charity.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Second Conditional: Hypothetical situation with 'were'.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "If you had listened to me, you ___ made that mistake.",
        "correct_answer": "wouldn't have",
        "suggest_answer": "wouldn't have",
        "explanation": "Third Conditional: Regret about past.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "Should you change your mind, ___ me know.",
        "correct_answer": "let",
        "suggest_answer": "let",
        "explanation": "Inverted First Conditional: Should + subject + verb, imperative.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "Had she been careful, she ___ broken the vase.",
        "correct_answer": "wouldn't have",
        "suggest_answer": "wouldn't have",
        "explanation": "Inverted Third Conditional: Had + subject + been + adjective, wouldn't have + verb.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "If you mix red and blue, you ___ purple.",
        "correct_answer": "get",
        "suggest_answer": "get",
        "explanation": "Zero Conditional: Scientific fact.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "If I had the time, I ___ take a vacation.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Second Conditional: Hypothetical present condition.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "If they had trained properly, they ___ won the championship.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Third Conditional: Impossible past scenario.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "Should you see her, ___ tell her to call me.",
        "correct_answer": "please",
        "suggest_answer": "please",
        "explanation": "Inverted First Conditional.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "Had I known the truth, I ___ acted differently.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Inverted Third Conditional.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "If salt dissolves in water, it ___ a solution.",
        "correct_answer": "forms",
        "suggest_answer": "forms",
        "explanation": "Zero Conditional: Scientific principle.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "If she were president, she ___ reform the system.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Second Conditional: Impossible present condition.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "If we had invested early, we ___ lost money.",
        "correct_answer": "wouldn't have",
        "suggest_answer": "wouldn't have",
        "explanation": "Third Conditional: Regret about past decision.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "Were he to resign, the company ___ collapse.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Inverted Second Conditional.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "Had we informed them earlier, they ___ been upset.",
        "correct_answer": "wouldn't have",
        "suggest_answer": "wouldn't have",
        "explanation": "Inverted Third Conditional with past participle.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "If you press this button, the alarm ___.",
        "correct_answer": "goes off",
        "suggest_answer": "goes off",
        "explanation": "Zero Conditional: Cause and effect.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "If I lived in Paris, I ___ visit museums daily.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Second Conditional: Hypothetical situation.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "If they had prepared better, they ___ succeeded.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Third Conditional: Impossible past with preparation.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "Should there be an emergency, ___ the alarm.",
        "correct_answer": "pull",
        "suggest_answer": "pull",
        "explanation": "Inverted First Conditional.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "Had I seen him, I ___ greeted him.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Inverted Third Conditional.",
        "difficulty": "Medium",
        "topic_id": 24
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "If you apply for the job, you ___ have a good chance.",
        "correct_answer": "will",
        "suggest_answer": "will",
        "explanation": "First Conditional: Real possibility.",
        "difficulty": "Hard",
        "topic_id": 24
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "If everybody spoke the same language, there ___ fewer conflicts.",
        "correct_answer": "would be",
        "suggest_answer": "would be",
        "explanation": "Second Conditional: Hypothetical universal situation.",
        "difficulty": "Hard",
        "topic_id": 24
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "If the government had acted sooner, the crisis ___ been prevented.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Third Conditional: Impossible past with major consequences.",
        "difficulty": "Hard",
        "topic_id": 24
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "Were you to discover a flaw, ___ report it immediately.",
        "correct_answer": "you must",
        "suggest_answer": "you must",
        "explanation": "Inverted Second Conditional with obligation.",
        "difficulty": "Hard",
        "topic_id": 24
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "Had they understood the risks, they ___ proceeded.",
        "correct_answer": "wouldn't have",
        "suggest_answer": "wouldn't have",
        "explanation": "Inverted Third Conditional: Hypothetical past understanding.",
        "difficulty": "Hard",
        "topic_id": 24
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "If temperatures rise, glaciers ___.",
        "correct_answer": "melt",
        "suggest_answer": "melt",
        "explanation": "Zero Conditional: Scientific relationship.",
        "difficulty": "Hard",
        "topic_id": 24
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "If the economy were stronger, unemployment ___ lower.",
        "correct_answer": "would be",
        "suggest_answer": "would be",
        "explanation": "Second Conditional: Hypothetical economic scenario.",
        "difficulty": "Hard",
        "topic_id": 24
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "If we had invested more capital, the company ___ expanded.",
        "correct_answer": "would have",
        "suggest_answer": "would have",
        "explanation": "Third Conditional: Impossible past business scenario.",
        "difficulty": "Hard",
        "topic_id": 24
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "Should the system fail, ___ contact technical support.",
        "correct_answer": "please",
        "suggest_answer": "please",
        "explanation": "Inverted First Conditional with courtesy.",
        "difficulty": "Hard",
        "topic_id": 24
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "Had the architects consulted experts, the building ___ collapsed.",
        "correct_answer": "wouldn't have",
        "suggest_answer": "wouldn't have",
        "explanation": "Inverted Third Conditional: Professional consultation scenario.",
        "difficulty": "Hard",
        "topic_id": 24
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "Which is a Zero Conditional sentence?",
        "correct_answer": "If you heat water, it boils.",
        "difficulty": "Easy",
        "explanation": "Zero Conditional expresses general truths or facts.",
        "options": [
            {
                "id": 511,
                "option_text": "If you heat water, it boils.",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "If you heated water, it would boil.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "If you had heated water, it would have boiled.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "If you heat water, it will boil.",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 24
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "Which is a First Conditional sentence?",
        "correct_answer": "If you study hard, you will pass.",
        "difficulty": "Easy",
        "explanation": "First Conditional: If + Simple Present, will + verb (real future possibility)",
        "options": [
            {
                "id": 521,
                "option_text": "If you study hard, you will pass.",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "If you studied hard, you would pass.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "If you had studied hard, you would have passed.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "If you study hard, you pass.",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 24
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "Which is a Second Conditional sentence?",
        "correct_answer": "If I were you, I would apologize.",
        "difficulty": "Easy",
        "explanation": "Second Conditional: If + Simple Past, would + verb (hypothetical present)",
        "options": [
            {
                "id": 531,
                "option_text": "If I were you, I would apologize.",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "If I am you, I would apologize.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "If I had been you, I would have apologized.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "If I are you, I apologize.",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 24
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "Which is a Third Conditional sentence?",
        "correct_answer": "If you had studied, you would have passed.",
        "difficulty": "Easy",
        "explanation": "Third Conditional: If + Past Perfect, would have + Past Participle (impossible past)",
        "options": [
            {
                "id": 541,
                "option_text": "If you had studied, you would have passed.",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "If you studied, you would pass.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "If you study, you will pass.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "If you have studied, you pass.",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 24
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "Which is an inverted form of Second Conditional?",
        "correct_answer": "Were I you, I would help.",
        "difficulty": "Easy",
        "explanation": "Inverted Second Conditional: Were + subject + to verb, would + verb",
        "options": [
            {
                "id": 551,
                "option_text": "Were I you, I would help.",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "Should I you, I would help.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "Had I you, I would help.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "If I am you, I would help.",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 24
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "Which is an inverted form of Third Conditional?",
        "correct_answer": "Had I known, I would have told you.",
        "difficulty": "Easy",
        "explanation": "Inverted Third Conditional: Had + subject + Past Participle, would have + verb",
        "options": [
            {
                "id": 561,
                "option_text": "Had I known, I would have told you.",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "Should I known, I would have told you.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "Were I known, I would have told you.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "If I know, I would have told you.",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 24
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "Which is an inverted form of First Conditional?",
        "correct_answer": "Should you need help, contact me.",
        "difficulty": "Easy",
        "explanation": "Inverted First Conditional: Should + subject + verb, imperative/main clause",
        "options": [
            {
                "id": 571,
                "option_text": "Should you need help, contact me.",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "Were you need help, contact me.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "Had you need help, contact me.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "If you need help, will contact me.",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 24
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "If you miss the bus, you ___ be late.",
        "correct_answer": "will",
        "difficulty": "Easy",
        "explanation": "First Conditional: Real possibility in future.",
        "options": [
            {
                "id": 581,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 24
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "If he had money, he ___ travel.",
        "correct_answer": "would",
        "difficulty": "Easy",
        "explanation": "Second Conditional: Hypothetical present.",
        "options": [
            {
                "id": 591,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "has",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 24
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "If she had tried, she ___ succeeded.",
        "correct_answer": "would have",
        "difficulty": "Easy",
        "explanation": "Third Conditional: Impossible past.",
        "options": [
            {
                "id": 601,
                "option_text": "would have",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "succeeded",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 24
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Which sentence correctly shows a Zero Conditional?",
        "correct_answer": "If you mix salt and water, they dissolve.",
        "difficulty": "Medium",
        "explanation": "Zero Conditional with scientific fact.",
        "options": [
            {
                "id": 611,
                "option_text": "If you mix salt and water, they dissolve.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "If you mixed salt and water, they would dissolve.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "If you had mixed salt and water, they would have dissolved.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "If you mix salt and water, they will dissolve.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 24
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Were she to accept the job, she ___ move to London.",
        "correct_answer": "would",
        "difficulty": "Medium",
        "explanation": "Inverted Second Conditional.",
        "options": [
            {
                "id": 621,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 24
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Had they prepared well, they ___ pass the exam.",
        "correct_answer": "would have",
        "difficulty": "Medium",
        "explanation": "Inverted Third Conditional.",
        "options": [
            {
                "id": 631,
                "option_text": "would have",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 24
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Should you encounter any problems, ___ inform the manager.",
        "correct_answer": "please",
        "difficulty": "Medium",
        "explanation": "Inverted First Conditional with politeness.",
        "options": [
            {
                "id": 641,
                "option_text": "please",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 24
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "If the weather improves, we ___ go for a picnic.",
        "correct_answer": "will",
        "difficulty": "Medium",
        "explanation": "First Conditional: Real possibility.",
        "options": [
            {
                "id": 651,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "can",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 24
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "If I won the lottery, I ___ buy a mansion.",
        "correct_answer": "would",
        "difficulty": "Medium",
        "explanation": "Second Conditional: Hypothetical scenario.",
        "options": [
            {
                "id": 661,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 24
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "If we had left earlier, we ___ missed the traffic.",
        "correct_answer": "wouldn't have",
        "difficulty": "Medium",
        "explanation": "Third Conditional: Impossible past regret.",
        "options": [
            {
                "id": 671,
                "option_text": "wouldn't have",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "wouldn't",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "won't",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "hadn't",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 24
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Were you in my position, what ___ you do?",
        "correct_answer": "would",
        "difficulty": "Medium",
        "explanation": "Inverted Second Conditional with question.",
        "options": [
            {
                "id": 681,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "have",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 24
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Had the building been stronger, it ___ withstand the earthquake.",
        "correct_answer": "would have",
        "difficulty": "Medium",
        "explanation": "Inverted Third Conditional with 'been'.",
        "options": [
            {
                "id": 691,
                "option_text": "would have",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 24
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "If salt is added to water, the freezing point ___.",
        "correct_answer": "lowers",
        "difficulty": "Medium",
        "explanation": "Zero Conditional: Scientific principle.",
        "options": [
            {
                "id": 701,
                "option_text": "lowers",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "would lower",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "would have lowered",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "will lower",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 24
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "Unless you study, you ___ fail the test.",
        "correct_answer": "will",
        "difficulty": "Hard",
        "explanation": "First Conditional with 'unless' (If you don't study...)",
        "options": [
            {
                "id": 711,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "must",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 24
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "Had we known the consequences, we ___ proceeded.",
        "correct_answer": "wouldn't have",
        "difficulty": "Hard",
        "explanation": "Inverted Third Conditional: regret about past action.",
        "options": [
            {
                "id": 721,
                "option_text": "wouldn't have",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "wouldn't",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "won't",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "haven't",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 24
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "Were the government to implement these policies, the economy ___ improve.",
        "correct_answer": "would",
        "difficulty": "Hard",
        "explanation": "Inverted Second Conditional with complex subject.",
        "options": [
            {
                "id": 731,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 24
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "Should you receive any complaints, ___ notify the supervisor.",
        "correct_answer": "you should",
        "difficulty": "Hard",
        "explanation": "Inverted First Conditional with obligation.",
        "options": [
            {
                "id": 741,
                "option_text": "you should",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "you would",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "you might",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "you could",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 24
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "If poverty could be eradicated, society ___ transform.",
        "correct_answer": "would",
        "difficulty": "Hard",
        "explanation": "Second Conditional: Hypothetical ideal scenario.",
        "options": [
            {
                "id": 751,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 24
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "If humans had lived sustainably, climate change ___ accelerated.",
        "correct_answer": "wouldn't have",
        "difficulty": "Hard",
        "explanation": "Third Conditional: Alternative past scenario.",
        "options": [
            {
                "id": 761,
                "option_text": "wouldn't have",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "wouldn't",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "won't",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "hadn't",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 24
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "Had the rescue team arrived sooner, more lives ___ saved.",
        "correct_answer": "would have been",
        "difficulty": "Hard",
        "explanation": "Inverted Third Conditional with passive voice.",
        "options": [
            {
                "id": 771,
                "option_text": "would have been",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "would be",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 24
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "If the policy is enforced strictly, it ___ reduce corruption.",
        "correct_answer": "will",
        "difficulty": "Hard",
        "explanation": "First Conditional: Real possibility with formal tone.",
        "options": [
            {
                "id": 781,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 24
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "Were I to be given a second chance, I ___ do things differently.",
        "correct_answer": "would",
        "difficulty": "Hard",
        "explanation": "Inverted Second Conditional with 'to be'.",
        "options": [
            {
                "id": 791,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 24
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "Should global warming continue, sea levels ___ rise dramatically.",
        "correct_answer": "will",
        "difficulty": "Hard",
        "explanation": "Inverted First Conditional with environmental concern.",
        "options": [
            {
                "id": 801,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 24
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "If you combine oxygen and hydrogen, you ___ water.",
        "correct_answer": "get",
        "difficulty": "Hard",
        "explanation": "Zero Conditional: Scientific fact.",
        "options": [
            {
                "id": 811,
                "option_text": "get",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "would get",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "would have gotten",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "will get",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 24
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Unless you work hard, you ___ achieve your dreams.",
        "correct_answer": "won't",
        "difficulty": "Hard",
        "explanation": "First Conditional with 'unless' (negative condition).",
        "options": [
            {
                "id": 821,
                "option_text": "won't",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "wouldn't",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "wouldn't have",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "wouldn't will",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 24
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "If we had invested in renewable energy, we ___ reduced our carbon footprint.",
        "correct_answer": "would have",
        "difficulty": "Hard",
        "explanation": "Third Conditional: Hypothetical past investment decision.",
        "options": [
            {
                "id": 831,
                "option_text": "would have",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "have",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 24
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Were technology to disappear, how ___ humanity survive?",
        "correct_answer": "would",
        "difficulty": "Hard",
        "explanation": "Inverted Second Conditional with hypothetical scenario.",
        "options": [
            {
                "id": 841,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 24
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Had they received proper training, the accident ___ prevented.",
        "correct_answer": "would have been",
        "difficulty": "Hard",
        "explanation": "Inverted Third Conditional with passive construction.",
        "options": [
            {
                "id": 851,
                "option_text": "would have been",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "would be",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 24
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "If you apply pressure to water, it ___ compress slightly.",
        "correct_answer": "will",
        "difficulty": "Hard",
        "explanation": "First Conditional or Zero Conditional depending on context.",
        "options": [
            {
                "id": 861,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "compresses",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 24
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Unless the situation changes, the company ___ bankruptcy.",
        "correct_answer": "will face",
        "difficulty": "Hard",
        "explanation": "First Conditional with 'unless' and future consequence.",
        "options": [
            {
                "id": 871,
                "option_text": "will face",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "would face",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "would have faced",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "faces",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 24
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "If you had listened to advice, you ___ avoided trouble.",
        "correct_answer": "would have",
        "difficulty": "Hard",
        "explanation": "Third Conditional: Regret about ignoring advice.",
        "options": [
            {
                "id": 881,
                "option_text": "would have",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "have",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 24
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Were I in charge, I ___ implement these changes immediately.",
        "correct_answer": "would",
        "difficulty": "Hard",
        "explanation": "Inverted Second Conditional: hypothetical leadership position.",
        "options": [
            {
                "id": 891,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 24
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Had we known about the project earlier, we ___ participated.",
        "correct_answer": "would have",
        "difficulty": "Hard",
        "explanation": "Inverted Third Conditional: missed opportunity.",
        "options": [
            {
                "id": 901,
                "option_text": "would have",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 24
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "If the medicine is taken regularly, the patient ___ recover.",
        "correct_answer": "will",
        "difficulty": "Hard",
        "explanation": "First Conditional or Zero Conditional: medical likelihood.",
        "options": [
            {
                "id": 911,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "recovers",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 24
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "If you had studied harder, you ___ gotten a higher score.",
        "correct_answer": "would have",
        "difficulty": "Hard",
        "explanation": "Third Conditional: Alternative past outcome.",
        "options": [
            {
                "id": 921,
                "option_text": "would have",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "have",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 24
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Were she to accept, the team ___ have a better chance.",
        "correct_answer": "would",
        "difficulty": "Hard",
        "explanation": "Inverted Second Conditional with team impact.",
        "options": [
            {
                "id": 931,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 24
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Had the warning been heeded, the disaster ___ occurred.",
        "correct_answer": "wouldn't have",
        "difficulty": "Hard",
        "explanation": "Inverted Third Conditional: negligence consequence.",
        "options": [
            {
                "id": 941,
                "option_text": "wouldn't have",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "wouldn't",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "won't",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "hadn't",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 24
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Should you require further information, ___ contact the office.",
        "correct_answer": "please",
        "difficulty": "Hard",
        "explanation": "Inverted First Conditional with polite instruction.",
        "options": [
            {
                "id": 951,
                "option_text": "please",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 24
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "If modern medicine had not been developed, mortality rates ___ much higher.",
        "correct_answer": "would be",
        "difficulty": "Hard",
        "explanation": "Mixed/Hypothetical Third Conditional: counterfactual past affecting present.",
        "options": [
            {
                "id": 961,
                "option_text": "would be",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "would have been",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "will be",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 24
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "If you push this lever, the mechanism ___.",
        "correct_answer": "activates",
        "difficulty": "Hard",
        "explanation": "Zero Conditional or First Conditional: mechanical cause and effect.",
        "options": [
            {
                "id": 971,
                "option_text": "activates",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "would activate",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "will activate",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "would have activated",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 24
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Unless reforms are introduced, the system ___ continue to fail.",
        "correct_answer": "will",
        "difficulty": "Hard",
        "explanation": "First Conditional with 'unless' and structural problems.",
        "options": [
            {
                "id": 981,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "would have",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 24
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Had you been honest, I ___ trusted you more.",
        "correct_answer": "would have",
        "difficulty": "Hard",
        "explanation": "Inverted Third Conditional: trust consequence of honesty.",
        "options": [
            {
                "id": 991,
                "option_text": "would have",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "have",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 24
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Were the organization better managed, its ___ would improve dramatically.",
        "correct_answer": "performance",
        "difficulty": "Hard",
        "explanation": "Inverted Second Conditional with abstract consequence (alternative word).",
        "options": [
            {
                "id": 1001,
                "option_text": "performance",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 24
    }
];

export default questions;