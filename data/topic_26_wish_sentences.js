const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ speak French fluently.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for present ability: wish + could + verb (Ước ước có khả năng hiện tại)",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "I wish he ___ here with us.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Wish for present situation: wish + were/Simple Past (Ước ước tình huống hiện tại)",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ studied harder when I was younger.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Wish for past: wish + had + Past Participle (Ước ước quá khứ)",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "If only I ___ rich.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "If only for present: If only + were/Simple Past (Giá như...hiện tại)",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "If only he ___ called me yesterday.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past: If only + had + Past Participle (Giá như...quá khứ)",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ visit Paris next year.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for future possibility: wish + could + verb",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "She wishes she ___ more time for her hobbies.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Wish for present desire: wish + had + noun (Ước ước có cái gì)",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "If only it ___ raining tomorrow.",
        "correct_answer": "weren't",
        "suggest_answer": "weren't",
        "explanation": "If only for future: If only + weren't (Giá như...không mưa ngày mai)",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "I wish my parents ___ proud of me.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Wish for present condition: wish + were",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "If only I ___ taken that job opportunity.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past regret: If only + had + Past Participle",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ drive a sports car.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for present ability/desire",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "She wishes she ___ taller.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Wish for present physical characteristic",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "If only he ___ realized his mistake.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past action",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "I wish this ___ my last day of work.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Wish for present situation change",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "If only I ___ made that decision differently.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past decision regret",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "I wish you ___ understand how I feel.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for ability to understand",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "She wishes it ___ not so cold outside.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Wish for weather to change",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "If only I ___ told the truth back then.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past honesty regret",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ afford a vacation right now.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for present financial ability",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "If only she ___ listen to my advice.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "If only for someone's willingness",
        "difficulty": "Easy",
        "topic_id": 26
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ remember his name correctly.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for present memory ability in complex context",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "She wishes she ___ born in a different era.",
        "correct_answer": "had been",
        "suggest_answer": "had been",
        "explanation": "Wish for past state of being",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "If only I ___ invested in that company years ago.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past investment decision",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ know what you're thinking.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for mind-reading ability",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "If only my family ___ supportive of my decisions.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "If only for present family support",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ take back what I said yesterday.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for ability to undo past action",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "She wishes she ___ pursued her dream earlier.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Wish for past action about dreams",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "If only I ___ present during that important meeting.",
        "correct_answer": "had been",
        "suggest_answer": "had been",
        "explanation": "If only for past presence",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ live in a countryside.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for hypothetical lifestyle",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "If only they ___ more flexible with their policies.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "If only for institutional behavior",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ visited my grandmother more often.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Wish for past frequency regret",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "She wishes her children ___ more independent.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Wish for others' present characteristics",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "If only I ___ known about this opportunity sooner.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past knowledge",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ stay young forever.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for impossible present desire",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "If only the economy ___ stronger during that period.",
        "correct_answer": "had been",
        "suggest_answer": "had been",
        "explanation": "If only for past economic condition",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ forgive myself for past mistakes.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for emotional ability",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "She wishes she ___ more confident in her abilities.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Wish for present confidence",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "If only I ___ accepted that job offer back then.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past career decision",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "I wish you ___ understand my perspective.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for others' understanding ability",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "If only life ___ simpler and less complicated.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "If only for present life circumstances",
        "difficulty": "Medium",
        "topic_id": 26
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ possessed the wisdom I have now back then.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Wish for past wisdom: complex regret",
        "difficulty": "Hard",
        "topic_id": 26
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "She wishes she ___ never taken that fateful decision.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Wish for never having done something",
        "difficulty": "Hard",
        "topic_id": 26
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "If only the circumstances ___ different at that time.",
        "correct_answer": "had been",
        "suggest_answer": "had been",
        "explanation": "If only for past circumstantial change",
        "difficulty": "Hard",
        "topic_id": 26
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ travel back in time.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for impossible supernatural ability",
        "difficulty": "Hard",
        "topic_id": 26
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "If only he ___ realized the consequences of his actions.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past realization",
        "difficulty": "Hard",
        "topic_id": 26
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ prevent this tragedy from happening.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for ability to prevent",
        "difficulty": "Hard",
        "topic_id": 26
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "She wishes she ___ seized that once-in-a-lifetime opportunity.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Wish for past action on unique opportunity",
        "difficulty": "Hard",
        "topic_id": 26
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "If only I ___ come from a wealthier background.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past birth circumstances",
        "difficulty": "Hard",
        "topic_id": 26
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "I wish I ___ achieve my lifelong ambitions.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Wish for future achievement possibility",
        "difficulty": "Hard",
        "topic_id": 26
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "If only my career ___ progressed more rapidly.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "If only for past career progression",
        "difficulty": "Hard",
        "topic_id": 26
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "Which sentence expresses a wish for present ability?",
        "correct_answer": "I wish I could speak English fluently.",
        "difficulty": "Easy",
        "explanation": "Wish for present ability: wish + could + verb",
        "options": [
            {
                "id": 511,
                "option_text": "I wish I could speak English fluently.",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "I wish I had spoken English fluently.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "I wish I were speaking English fluently.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "I wish I can speak English fluently.",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 26
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "Which sentence expresses a wish for present situation?",
        "correct_answer": "I wish he were here with us.",
        "difficulty": "Easy",
        "explanation": "Wish for present situation: wish + were/Simple Past",
        "options": [
            {
                "id": 521,
                "option_text": "I wish he were here with us.",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "I wish he had been here with us.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "I wish he is here with us.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "I wish he would be here with us.",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 26
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "Which sentence expresses a wish for past event?",
        "correct_answer": "I wish I had studied harder when I was young.",
        "difficulty": "Easy",
        "explanation": "Wish for past: wish + had + Past Participle",
        "options": [
            {
                "id": 531,
                "option_text": "I wish I had studied harder when I was young.",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "I wish I could study harder when I was young.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "I wish I studied harder when I was young.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "I wish I were studying harder when I was young.",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 26
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "Which sentence uses 'if only' for present situation?",
        "correct_answer": "If only I were rich.",
        "difficulty": "Easy",
        "explanation": "If only for present: If only + were/Simple Past",
        "options": [
            {
                "id": 541,
                "option_text": "If only I were rich.",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "If only I had been rich.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "If only I am rich.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "If only I will be rich.",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 26
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "Which sentence uses 'if only' for past event?",
        "correct_answer": "If only he had called me yesterday.",
        "difficulty": "Easy",
        "explanation": "If only for past: If only + had + Past Participle",
        "options": [
            {
                "id": 551,
                "option_text": "If only he had called me yesterday.",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "If only he called me yesterday.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "If only he were calling me yesterday.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "If only he would call me yesterday.",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 26
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "Which best expresses regret about past inaction?",
        "correct_answer": "I wish I had taken that opportunity.",
        "difficulty": "Easy",
        "explanation": "Regret structure: wish + had + Past Participle",
        "options": [
            {
                "id": 561,
                "option_text": "I wish I had taken that opportunity.",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "I wish I could take that opportunity.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "I wish I would take that opportunity.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "I wish I take that opportunity.",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 26
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct wish for present desire:",
        "correct_answer": "She wishes she had more time.",
        "difficulty": "Easy",
        "explanation": "Wish for present possession: wish + had + noun",
        "options": [
            {
                "id": 571,
                "option_text": "She wishes she had more time.",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "She wishes she would have more time.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "She wishes she has more time.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "She wishes she could have more time.",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 26
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct if only statement for present characteristic:",
        "correct_answer": "If only it were sunny today.",
        "difficulty": "Easy",
        "explanation": "If only for weather/characteristic: If only + were",
        "options": [
            {
                "id": 581,
                "option_text": "If only it were sunny today.",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "If only it had been sunny today.",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "If only it is sunny today.",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "If only it would be sunny today.",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 26
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "I wish you ___ listen to my warnings.",
        "correct_answer": "would",
        "difficulty": "Easy",
        "explanation": "Wish for someone's willingness/action",
        "options": [
            {
                "id": 591,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 26
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ made that mistake.",
        "correct_answer": "hadn't",
        "difficulty": "Easy",
        "explanation": "If only for avoiding past mistake",
        "options": [
            {
                "id": 601,
                "option_text": "hadn't",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "wouldn't have",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "hadn't have",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "weren't",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 26
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wish for complex present inability:",
        "correct_answer": "I wish I could understand quantum physics.",
        "difficulty": "Medium",
        "explanation": "Wish for intellectual ability",
        "options": [
            {
                "id": 611,
                "option_text": "I wish I could understand quantum physics.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "I wish I understood quantum physics.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "I wish I had understood quantum physics.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "I wish I understand quantum physics.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 26
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wish for past being:",
        "correct_answer": "She wishes she had been braver.",
        "difficulty": "Medium",
        "explanation": "Wish for past state of being",
        "options": [
            {
                "id": 621,
                "option_text": "She wishes she had been braver.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "She wishes she were braver.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "She wishes she could be braver.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "She wishes she is braver.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 26
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ my education more seriously.",
        "correct_answer": "had taken",
        "difficulty": "Medium",
        "explanation": "If only for past action with object",
        "options": [
            {
                "id": 631,
                "option_text": "had taken",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "would take",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "could take",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "took",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 26
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ learn all the world's languages.",
        "correct_answer": "could",
        "difficulty": "Medium",
        "explanation": "Wish for ambitious present goal",
        "options": [
            {
                "id": 641,
                "option_text": "could",
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
                "option_text": "had",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 26
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "If only my family ___ supportive.",
        "correct_answer": "were",
        "difficulty": "Medium",
        "explanation": "If only for others' present characteristics",
        "options": [
            {
                "id": 651,
                "option_text": "were",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "had been",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "would be",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 26
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ make everyone happy.",
        "correct_answer": "could",
        "difficulty": "Medium",
        "explanation": "Wish for idealistic present ability",
        "options": [
            {
                "id": 661,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 26
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ lived my life differently.",
        "correct_answer": "had",
        "difficulty": "Medium",
        "explanation": "If only for alternative past life",
        "options": [
            {
                "id": 671,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "lived",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 26
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "She wishes she ___ more outgoing.",
        "correct_answer": "were",
        "difficulty": "Medium",
        "explanation": "Wish for present personality trait",
        "options": [
            {
                "id": 681,
                "option_text": "were",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "had been",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "could be",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "is",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 26
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ known about this opportunity earlier.",
        "correct_answer": "had",
        "difficulty": "Medium",
        "explanation": "If only for past discovery",
        "options": [
            {
                "id": 691,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "knew",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 26
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ visit all countries in the world.",
        "correct_answer": "could",
        "difficulty": "Medium",
        "explanation": "Wish for ambitious travel ability",
        "options": [
            {
                "id": 701,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 26
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "Select the appropriate wish for inability to change past:",
        "correct_answer": "I wish I hadn't said those hurtful words.",
        "difficulty": "Hard",
        "explanation": "Regret for past harmful action",
        "options": [
            {
                "id": 711,
                "option_text": "I wish I hadn't said those hurtful words.",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "I wish I wouldn't say those hurtful words.",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "I wish I couldn't say those hurtful words.",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "I wish I didn't say those hurtful words.",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 26
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "If only circumstances ___ more favorable.",
        "correct_answer": "had been",
        "difficulty": "Hard",
        "explanation": "If only for past circumstantial advantage",
        "options": [
            {
                "id": 721,
                "option_text": "had been",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "would be",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 26
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ prevent this catastrophe.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for power to prevent major disaster",
        "options": [
            {
                "id": 731,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 26
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ recognized the warning signs earlier.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for earlier detection of problems",
        "options": [
            {
                "id": 741,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "recognized",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 26
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ transcend human limitations.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for superhuman ability",
        "options": [
            {
                "id": 751,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 26
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "If only circumstances ___ aligned differently.",
        "correct_answer": "had been",
        "difficulty": "Hard",
        "explanation": "If only for alternative fate/destiny",
        "options": [
            {
                "id": 761,
                "option_text": "had been",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "would be",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 26
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ possess extraordinary talents.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for exceptional natural abilities",
        "options": [
            {
                "id": 771,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 26
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ demonstrated more courage.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for past courage/bravery",
        "options": [
            {
                "id": 781,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "demonstrated",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 26
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ manipulate reality itself.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for impossible reality-changing power",
        "options": [
            {
                "id": 791,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 26
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ possessed the wisdom of the ancients.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for extraordinary past wisdom",
        "options": [
            {
                "id": 801,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "possessed",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 26
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ access the deepest secrets of knowledge.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for profound knowledge access",
        "options": [
            {
                "id": 811,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 26
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ chosen a different path.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for alternative life choices",
        "options": [
            {
                "id": 821,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "chose",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 26
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ reverse the hands of time.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for time-reversal power",
        "options": [
            {
                "id": 831,
                "option_text": "could",
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
                "option_text": "had",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 26
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "If only society ___ valued different priorities.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for collective past values",
        "options": [
            {
                "id": 841,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "valued",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 26
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ unlock the mysteries of existence.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for ultimate universal understanding",
        "options": [
            {
                "id": 851,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 26
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ pursued my passion earlier.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for earlier life pursuit",
        "options": [
            {
                "id": 861,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "pursued",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 26
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ defy the laws of physics.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for superhuman/supernatural power",
        "options": [
            {
                "id": 871,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 26
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ invested more time in relationships.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for time allocation in past",
        "options": [
            {
                "id": 881,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "invested",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 26
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ reshape the future entirely.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for power over future destiny",
        "options": [
            {
                "id": 891,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 26
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ connected with my inner strength.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for past self-discovery",
        "options": [
            {
                "id": 901,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "connected",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 26
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ understand all human emotions.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for emotional omniscience",
        "options": [
            {
                "id": 911,
                "option_text": "could",
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
                "option_text": "had",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 26
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ lived without regrets.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for regret-free life",
        "options": [
            {
                "id": 921,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "lived",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 26
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ perceive hidden dimensions.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for expanded perception abilities",
        "options": [
            {
                "id": 931,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 26
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ abandoned my fears.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for past fear-overcoming",
        "options": [
            {
                "id": 941,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "abandoned",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 26
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ commune with all living beings.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for universal communication",
        "options": [
            {
                "id": 951,
                "option_text": "could",
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
                "option_text": "had",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 26
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ embraced vulnerability.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for past emotional openness",
        "options": [
            {
                "id": 961,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "embraced",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 26
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ harness infinite potential.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for limitless capability",
        "options": [
            {
                "id": 971,
                "option_text": "could",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 26
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ listened to my intuition.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for past intuitive guidance",
        "options": [
            {
                "id": 981,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "listened",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 26
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "I wish I ___ channel divine inspiration.",
        "correct_answer": "could",
        "difficulty": "Hard",
        "explanation": "Wish for spiritual/creative transcendence",
        "options": [
            {
                "id": 991,
                "option_text": "could",
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
                "option_text": "had",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "were",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 26
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "If only I ___ honored my true self.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "If only for past authentic self-expression",
        "options": [
            {
                "id": 1001,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "honored",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 26
    }
];

export default questions;