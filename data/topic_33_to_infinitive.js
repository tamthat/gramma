const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "I want ___ to the cinema.",
        "correct_answer": "to go",
        "suggest_answer": "to go",
        "explanation": "To-infinitive after 'want' (Động từ nguyên mẫu có TO sau động từ)",
        "difficulty": "Easy",
        "topic_id": 33
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "She is eager ___ the exam.",
        "correct_answer": "to pass",
        "suggest_answer": "to pass",
        "explanation": "To-infinitive after adjective 'eager' (Động từ nguyên mẫu sau tính từ)",
        "difficulty": "Easy",
        "topic_id": 33
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "He worked hard ___ his goals.",
        "correct_answer": "to achieve",
        "suggest_answer": "to achieve",
        "explanation": "To-infinitive to show purpose/goal (Để chỉ mục đích)",
        "difficulty": "Easy",
        "topic_id": 33
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "It is important ___ on time.",
        "correct_answer": "to arrive",
        "suggest_answer": "to arrive",
        "explanation": "To-infinitive after 'be + adjective'",
        "difficulty": "Easy",
        "topic_id": 33
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "He promised ___ the truth.",
        "correct_answer": "to tell",
        "suggest_answer": "to tell",
        "explanation": "To-infinitive after 'promise'",
        "difficulty": "Easy",
        "topic_id": 33
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "She is afraid ___ in public.",
        "correct_answer": "to speak",
        "suggest_answer": "to speak",
        "explanation": "To-infinitive after adjective 'afraid'",
        "difficulty": "Easy",
        "topic_id": 33
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "We came ___ the situation.",
        "correct_answer": "to understand",
        "suggest_answer": "to understand",
        "explanation": "To-infinitive after 'come' (gradual action)",
        "difficulty": "Easy",
        "topic_id": 33
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "She is happy ___ home.",
        "correct_answer": "to be",
        "suggest_answer": "to be",
        "explanation": "To-infinitive after adjective 'happy'",
        "difficulty": "Easy",
        "topic_id": 33
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "He arranged ___ at noon.",
        "correct_answer": "to meet",
        "suggest_answer": "to meet",
        "explanation": "To-infinitive after 'arrange'",
        "difficulty": "Easy",
        "topic_id": 33
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "I plan ___ next month.",
        "correct_answer": "to travel",
        "suggest_answer": "to travel",
        "explanation": "To-infinitive after 'plan'",
        "difficulty": "Easy",
        "topic_id": 33
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "It is easy ___ mistakes in English.",
        "correct_answer": "to make",
        "suggest_answer": "to make",
        "explanation": "To-infinitive with 'be + easy/difficult/hard' (Động từ nguyên mẫu phức tạp)",
        "difficulty": "Medium",
        "topic_id": 33
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "She was reluctant ___ help.",
        "correct_answer": "to ask for",
        "suggest_answer": "to ask for",
        "explanation": "To-infinitive after adjective 'reluctant'",
        "difficulty": "Medium",
        "topic_id": 33
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "I saved money ___ a car.",
        "correct_answer": "to buy",
        "suggest_answer": "to buy",
        "explanation": "To-infinitive showing purpose",
        "difficulty": "Medium",
        "topic_id": 33
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "He appears ___ the problem.",
        "correct_answer": "to understand",
        "suggest_answer": "to understand",
        "explanation": "To-infinitive after 'appear'",
        "difficulty": "Medium",
        "topic_id": 33
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "It's unlikely ___ rain today.",
        "correct_answer": "to",
        "suggest_answer": "to",
        "explanation": "To-infinitive with 'unlikely' expressing possibility",
        "difficulty": "Medium",
        "topic_id": 33
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "She learned ___ guitar at age five.",
        "correct_answer": "to play",
        "suggest_answer": "to play",
        "explanation": "To-infinitive after 'learn'",
        "difficulty": "Medium",
        "topic_id": 33
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "He works hard ___ his family.",
        "correct_answer": "to support",
        "suggest_answer": "to support",
        "explanation": "To-infinitive showing purpose/reason",
        "difficulty": "Medium",
        "topic_id": 33
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "It is crucial ___ careful.",
        "correct_answer": "to be",
        "suggest_answer": "to be",
        "explanation": "To-infinitive with 'be + crucial'",
        "difficulty": "Medium",
        "topic_id": 33
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "They were delighted ___ the news.",
        "correct_answer": "to hear",
        "suggest_answer": "to hear",
        "explanation": "To-infinitive after 'delighted'",
        "difficulty": "Medium",
        "topic_id": 33
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "I came here ___ you.",
        "correct_answer": "to help/to see",
        "suggest_answer": "to help/to see",
        "explanation": "To-infinitive showing purpose",
        "difficulty": "Medium",
        "topic_id": 33
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "She is determined ___ her degree despite challenges.",
        "correct_answer": "to complete",
        "suggest_answer": "to complete",
        "explanation": "To-infinitive after 'determined' (Động từ nguyên mẫu nâng cao)",
        "difficulty": "Hard",
        "topic_id": 33
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "It is fundamental ___ the client's needs.",
        "correct_answer": "to understand",
        "suggest_answer": "to understand",
        "explanation": "To-infinitive with formal adjectives",
        "difficulty": "Hard",
        "topic_id": 33
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "He went to the conference ___ with industry leaders.",
        "correct_answer": "to network",
        "suggest_answer": "to network",
        "explanation": "To-infinitive showing purpose",
        "difficulty": "Hard",
        "topic_id": 33
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "She was anxious ___ such responsibility.",
        "correct_answer": "to take on",
        "suggest_answer": "to take on",
        "explanation": "To-infinitive after 'anxious'",
        "difficulty": "Hard",
        "topic_id": 33
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "It is paramount ___ ethical standards.",
        "correct_answer": "to maintain",
        "suggest_answer": "to maintain",
        "explanation": "To-infinitive with 'paramount'",
        "difficulty": "Hard",
        "topic_id": 33
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "They were hesitant ___ such a major decision.",
        "correct_answer": "to make",
        "suggest_answer": "to make",
        "explanation": "To-infinitive after 'hesitant'",
        "difficulty": "Hard",
        "topic_id": 33
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "The government implemented policies ___ poverty.",
        "correct_answer": "to reduce",
        "suggest_answer": "to reduce",
        "explanation": "To-infinitive showing purpose in formal context",
        "difficulty": "Hard",
        "topic_id": 33
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "She went to the store ___ groceries.",
        "correct_answer": "to buy",
        "suggest_answer": "to buy",
        "explanation": "To-infinitive expressing purpose/goal",
        "difficulty": "Hard",
        "topic_id": 33
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "It is advisable ___ professional help.",
        "correct_answer": "to seek",
        "suggest_answer": "to seek",
        "explanation": "To-infinitive with 'advisable'",
        "difficulty": "Hard",
        "topic_id": 33
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "They were thrilled ___ the opportunity.",
        "correct_answer": "to get",
        "suggest_answer": "to get",
        "explanation": "To-infinitive after 'thrilled'",
        "difficulty": "Hard",
        "topic_id": 33
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows to-infinitive as object?",
        "correct_answer": "He wants to study medicine.",
        "difficulty": "Easy",
        "explanation": "To-infinitive after 'want' (Động từ nguyên mẫu sau động từ)",
        "options": [
            {
                "id": 311,
                "option_text": "He wants to study medicine.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "He studies medicine.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "He wants studying medicine.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "He wants study medicine.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 33
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows to-infinitive after adjective?",
        "correct_answer": "She is happy to help.",
        "difficulty": "Easy",
        "explanation": "To-infinitive after adjective 'happy' (Động từ nguyên mẫu sau tính từ)",
        "options": [
            {
                "id": 321,
                "option_text": "She is happy to help.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "She is happy helping.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "She is happy help.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "She happy helps.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 33
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows to-infinitive for purpose?",
        "correct_answer": "I went to the bank to withdraw money.",
        "difficulty": "Easy",
        "explanation": "To-infinitive showing purpose (Để chỉ mục đích)",
        "options": [
            {
                "id": 331,
                "option_text": "I went to the bank to withdraw money.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "I went to the bank withdrawing money.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "I went to the bank for withdraw money.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "I go to the bank withdraw money.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 33
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which verb takes to-infinitive?",
        "correct_answer": "decide",
        "difficulty": "Easy",
        "explanation": "Verbs taking to-infinitive: want, plan, decide, hope, try, etc.",
        "options": [
            {
                "id": 341,
                "option_text": "decide",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "enjoy",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "avoid",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "finish",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 33
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Which is correct use of to-infinitive?",
        "correct_answer": "I hope to pass the exam.",
        "difficulty": "Easy",
        "explanation": "Hope takes to-infinitive",
        "options": [
            {
                "id": 351,
                "option_text": "I hope to pass the exam.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "I hope passing the exam.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "I hope pass the exam.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "I hope of passing the exam.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 33
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Which shows to-infinitive with 'difficult'?",
        "correct_answer": "It is difficult to understand.",
        "difficulty": "Easy",
        "explanation": "To-infinitive after 'be + difficult'",
        "options": [
            {
                "id": 361,
                "option_text": "It is difficult to understand.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "It is difficult understanding.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "Difficult to understand it.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "It difficult understand.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 33
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Which shows to-infinitive with 'ready'?",
        "correct_answer": "Are you ready to leave?",
        "difficulty": "Easy",
        "explanation": "To-infinitive after 'ready'",
        "options": [
            {
                "id": 371,
                "option_text": "Are you ready to leave?",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "Are you ready leaving?",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "You ready leave?",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "Are you ready for leave?",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 33
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Which shows to-infinitive with 'able'?",
        "correct_answer": "He is able to solve the problem.",
        "difficulty": "Easy",
        "explanation": "To-infinitive after 'able'",
        "options": [
            {
                "id": 381,
                "option_text": "He is able to solve the problem.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "He is able solving the problem.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "He able solve the problem.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "He is able for solve the problem.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 33
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Which shows to-infinitive with 'promise'?",
        "correct_answer": "He promised to help us.",
        "difficulty": "Easy",
        "explanation": "To-infinitive after 'promise'",
        "options": [
            {
                "id": 391,
                "option_text": "He promised to help us.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "He promised helping us.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "He promised help us.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "He promised for help us.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 33
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Which shows to-infinitive with 'expect'?",
        "correct_answer": "We expect to arrive tomorrow.",
        "difficulty": "Easy",
        "explanation": "To-infinitive after 'expect'",
        "options": [
            {
                "id": 401,
                "option_text": "We expect to arrive tomorrow.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "We expect arriving tomorrow.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "We expect arrive tomorrow.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "We expect for arrive tomorrow.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 33
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select correct to-infinitive use with complex sentence:",
        "correct_answer": "It is essential to understand the problem first.",
        "difficulty": "Medium",
        "explanation": "To-infinitive with 'be + essential' (Động từ nguyên mẫu phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "It is essential to understand the problem first.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "It is essential understanding the problem first.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Essential understand the problem first.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "It is essential for understand the problem first.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 33
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'tend':",
        "correct_answer": "People tend to make mistakes.",
        "difficulty": "Medium",
        "explanation": "Tend takes to-infinitive",
        "options": [
            {
                "id": 621,
                "option_text": "People tend to make mistakes.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "People tend making mistakes.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "People tend make mistakes.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "People tend for make mistakes.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 33
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'afford':",
        "correct_answer": "Can we afford to buy a house?",
        "difficulty": "Medium",
        "explanation": "Afford takes to-infinitive",
        "options": [
            {
                "id": 631,
                "option_text": "Can we afford to buy a house?",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "Can we afford buying a house?",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "Can we afford buy a house?",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "Can we afford for buy a house?",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 33
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'refuse':",
        "correct_answer": "She refused to apologize.",
        "difficulty": "Medium",
        "explanation": "Refuse takes to-infinitive",
        "options": [
            {
                "id": 641,
                "option_text": "She refused to apologize.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "She refused apologizing.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "She refused apologize.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "She refused for apologize.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 33
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'deserve':",
        "correct_answer": "You deserve to be happy.",
        "difficulty": "Medium",
        "explanation": "Deserve takes to-infinitive",
        "options": [
            {
                "id": 651,
                "option_text": "You deserve to be happy.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "You deserve being happy.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "You deserve be happy.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "You deserve for be happy.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 33
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'persuade':",
        "correct_answer": "They persuaded him to join the team.",
        "difficulty": "Medium",
        "explanation": "Persuade takes object + to-infinitive",
        "options": [
            {
                "id": 661,
                "option_text": "They persuaded him to join the team.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "They persuaded him joining the team.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "They persuaded him join the team.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "They persuaded for him to join the team.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 33
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'encourage':",
        "correct_answer": "I encourage you to pursue your dreams.",
        "difficulty": "Medium",
        "explanation": "Encourage takes object + to-infinitive",
        "options": [
            {
                "id": 671,
                "option_text": "I encourage you to pursue your dreams.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "I encourage you pursuing your dreams.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "I encourage you pursue your dreams.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "I encourage for you pursuing your dreams.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 33
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'warn':",
        "correct_answer": "I warned him not to go there.",
        "difficulty": "Medium",
        "explanation": "Warn takes object + to-infinitive (negative)",
        "options": [
            {
                "id": 681,
                "option_text": "I warned him not to go there.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "I warned him not going there.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "I warned him go there.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "I warned not him to go there.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 33
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'advise':",
        "correct_answer": "The doctor advised me to rest.",
        "difficulty": "Medium",
        "explanation": "Advise takes object + to-infinitive",
        "options": [
            {
                "id": 691,
                "option_text": "The doctor advised me to rest.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "The doctor advised me resting.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "The doctor advised me rest.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "The doctor advised for me resting.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 33
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'allow':",
        "correct_answer": "They allow students to use calculators.",
        "difficulty": "Medium",
        "explanation": "Allow takes object + to-infinitive",
        "options": [
            {
                "id": 701,
                "option_text": "They allow students to use calculators.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "They allow students using calculators.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "They allow students use calculators.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "They allow for students to use calculators.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 33
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Select correct to-infinitive with complex purpose:",
        "correct_answer": "She studied hard to pass the exam and secure her future.",
        "difficulty": "Hard",
        "explanation": "Multiple to-infinitives expressing purpose (Động từ nguyên mẫu nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "She studied hard to pass the exam and secure her future.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "She studied hard to passing the exam and secure her future.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "She studied hard for pass the exam and secure her future.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "She studied hard to pass the exam and securing her future.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 33
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'compel':",
        "correct_answer": "Circumstances compelled him to resign.",
        "difficulty": "Hard",
        "explanation": "Compel takes object + to-infinitive (formal)",
        "options": [
            {
                "id": 821,
                "option_text": "Circumstances compelled him to resign.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Circumstances compelled him resigning.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Circumstances compelled for him resign.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "Circumstances compelled to resign him.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 33
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'oblige':",
        "correct_answer": "You are obliged to follow the rules.",
        "difficulty": "Hard",
        "explanation": "Obliged takes to-infinitive (passive)",
        "options": [
            {
                "id": 831,
                "option_text": "You are obliged to follow the rules.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "You are obliged following the rules.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "You obliged follow the rules.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "You are obliged for follow the rules.",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 33
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'seem':",
        "correct_answer": "He seems to understand the concept.",
        "difficulty": "Hard",
        "explanation": "Seem takes to-infinitive",
        "options": [
            {
                "id": 841,
                "option_text": "He seems to understand the concept.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "He seems understanding the concept.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "He seems understand the concept.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "He seems for understand the concept.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 33
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'unlikely':",
        "correct_answer": "It is unlikely to rain tomorrow.",
        "difficulty": "Hard",
        "explanation": "Unlikely takes to-infinitive",
        "options": [
            {
                "id": 851,
                "option_text": "It is unlikely to rain tomorrow.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "It is unlikely raining tomorrow.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "It is unlikely rain tomorrow.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "It is unlikely for rain tomorrow.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 33
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'supposed to':",
        "correct_answer": "You are supposed to finish by Friday.",
        "difficulty": "Hard",
        "explanation": "Supposed to takes to-infinitive (obligation/expectation)",
        "options": [
            {
                "id": 861,
                "option_text": "You are supposed to finish by Friday.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "You are supposed finishing by Friday.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "You are supposed finish by Friday.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "You supposed to finish by Friday.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 33
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'turn out':",
        "correct_answer": "The party turned out to be successful.",
        "difficulty": "Hard",
        "explanation": "Turn out takes to-infinitive",
        "options": [
            {
                "id": 871,
                "option_text": "The party turned out to be successful.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "The party turned out being successful.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "The party turned out be successful.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "The party turned being out successful.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 33
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'happen':",
        "correct_answer": "I happened to meet him yesterday.",
        "difficulty": "Hard",
        "explanation": "Happen takes to-infinitive (chance occurrence)",
        "options": [
            {
                "id": 881,
                "option_text": "I happened to meet him yesterday.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "I happened meeting him yesterday.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "I happened meet him yesterday.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "I happened for meet him yesterday.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 33
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'manage':",
        "correct_answer": "She managed to finish the work on time.",
        "difficulty": "Hard",
        "explanation": "Manage takes to-infinitive (succeed in doing)",
        "options": [
            {
                "id": 891,
                "option_text": "She managed to finish the work on time.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "She managed finishing the work on time.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "She managed finish the work on time.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "She managed for finish the work on time.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 33
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'guarantee':",
        "correct_answer": "This plan guarantees to improve efficiency.",
        "difficulty": "Hard",
        "explanation": "Guarantee takes to-infinitive",
        "options": [
            {
                "id": 901,
                "option_text": "This plan guarantees to improve efficiency.",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "This plan guarantees improving efficiency.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "This plan guarantees improve efficiency.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "This plan guarantees for improve efficiency.",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 33
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'consent':",
        "correct_answer": "He finally consented to marry her.",
        "difficulty": "Hard",
        "explanation": "Consent (to) takes to-infinitive",
        "options": [
            {
                "id": 911,
                "option_text": "He finally consented to marry her.",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "He finally consented marrying her.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "He finally consented marry her.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "He finally consented for marry her.",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 33
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with negative to-infinitive:",
        "correct_answer": "I advised her not to go there.",
        "difficulty": "Hard",
        "explanation": "Not + to-infinitive (negative)",
        "options": [
            {
                "id": 921,
                "option_text": "I advised her not to go there.",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "I advised her to not go there.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "I advised not her to go there.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "I not advised her to go there.",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 33
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with formal adjective:",
        "correct_answer": "It is imperative to act immediately.",
        "difficulty": "Hard",
        "explanation": "Imperative takes to-infinitive (formal/academic)",
        "options": [
            {
                "id": 931,
                "option_text": "It is imperative to act immediately.",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "It is imperative acting immediately.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "It is imperative act immediately.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "It is imperative for act immediately.",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 33
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Select correct split infinitive avoidance:",
        "correct_answer": "I wanted to really understand this concept.",
        "difficulty": "Hard",
        "explanation": "Best practice: adverb after to-infinitive (not split)",
        "options": [
            {
                "id": 941,
                "option_text": "I wanted to really understand this concept.",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "I wanted to really understand this concept.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "I really wanted to understand this concept.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "I wanted really to understand this concept.",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 33
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'inclined':",
        "correct_answer": "I am inclined to agree with you.",
        "difficulty": "Hard",
        "explanation": "Inclined takes to-infinitive",
        "options": [
            {
                "id": 951,
                "option_text": "I am inclined to agree with you.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "I am inclined agreeing with you.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "I am inclined agree with you.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "I am inclined for agree with you.",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 33
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'apt':",
        "correct_answer": "Students are apt to forget grammar rules.",
        "difficulty": "Hard",
        "explanation": "Apt takes to-infinitive (likely to)",
        "options": [
            {
                "id": 961,
                "option_text": "Students are apt to forget grammar rules.",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "Students are apt forgetting grammar rules.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "Students are apt forget grammar rules.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "Students are apt for forget grammar rules.",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 33
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'primed':",
        "correct_answer": "The system is primed to launch automatically.",
        "difficulty": "Hard",
        "explanation": "Primed takes to-infinitive (ready/prepared)",
        "options": [
            {
                "id": 971,
                "option_text": "The system is primed to launch automatically.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "The system is primed launching automatically.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "The system is primed launch automatically.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "The system is primed for launch automatically.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 33
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with object + to-infinitive:",
        "correct_answer": "We encouraged the children to explore freely.",
        "difficulty": "Hard",
        "explanation": "Encourage + object + to-infinitive",
        "options": [
            {
                "id": 981,
                "option_text": "We encouraged the children to explore freely.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "We encouraged the children exploring freely.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "We encouraged to explore the children freely.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "We encouraged the children explore freely.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 33
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Select correct use with 'hesitant':",
        "correct_answer": "She was hesitant to commit to the project.",
        "difficulty": "Hard",
        "explanation": "Hesitant takes to-infinitive",
        "options": [
            {
                "id": 991,
                "option_text": "She was hesitant to commit to the project.",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "She was hesitant committing to the project.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "She was hesitant commit to the project.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "She was hesitant for commit to the project.",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 33
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Select correct purpose clause with to-infinitive:",
        "correct_answer": "He studied the map carefully to plan the route.",
        "difficulty": "Hard",
        "explanation": "To-infinitive for purpose (detailed sentence)",
        "options": [
            {
                "id": 1001,
                "option_text": "He studied the map carefully to plan the route.",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "He studied the map carefully for plan the route.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "He studied the map carefully planning the route.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "He studied the map carefully plan the route.",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 33
    }
];

export default questions;