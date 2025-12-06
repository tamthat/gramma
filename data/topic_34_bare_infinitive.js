const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "You must ___ hard to succeed.",
        "correct_answer": "work",
        "suggest_answer": "work",
        "explanation": "Bare infinitive after modal verb 'must' (Động từ nguyên mẫu không TO sau modal verbs)",
        "difficulty": "Easy",
        "topic_id": 34
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "She can ___ three languages.",
        "correct_answer": "speak",
        "suggest_answer": "speak",
        "explanation": "Bare infinitive after modal 'can'",
        "difficulty": "Easy",
        "topic_id": 34
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "He would ___ to help if he could.",
        "correct_answer": "like",
        "suggest_answer": "like",
        "explanation": "Bare infinitive after modal 'would'",
        "difficulty": "Easy",
        "topic_id": 34
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "Let me ___ the door.",
        "correct_answer": "open",
        "suggest_answer": "open",
        "explanation": "Bare infinitive after 'let' (Động từ nguyên mẫu sau let)",
        "difficulty": "Easy",
        "topic_id": 34
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "She made him ___ the truth.",
        "correct_answer": "tell",
        "suggest_answer": "tell",
        "explanation": "Bare infinitive after 'make' (Động từ nguyên mẫu sau make)",
        "difficulty": "Easy",
        "topic_id": 34
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "I saw him ___ the street.",
        "correct_answer": "cross",
        "suggest_answer": "cross",
        "explanation": "Bare infinitive after perception verb 'see' (Động từ nguyên mẫu sau động từ tri giác)",
        "difficulty": "Easy",
        "topic_id": 34
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "May I ___ you a question?",
        "correct_answer": "ask",
        "suggest_answer": "ask",
        "explanation": "Bare infinitive after modal 'may'",
        "difficulty": "Easy",
        "topic_id": 34
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "I heard her ___ my name.",
        "correct_answer": "call",
        "suggest_answer": "call",
        "explanation": "Bare infinitive after 'hear'",
        "difficulty": "Easy",
        "topic_id": 34
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "He will ___ the exam next month.",
        "correct_answer": "take",
        "suggest_answer": "take",
        "explanation": "Bare infinitive after modal 'will'",
        "difficulty": "Easy",
        "topic_id": 34
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "Let's ___ to the restaurant.",
        "correct_answer": "go",
        "suggest_answer": "go",
        "explanation": "Bare infinitive after 'let's'",
        "difficulty": "Easy",
        "topic_id": 34
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "You shouldn't ___ about the past.",
        "correct_answer": "worry",
        "suggest_answer": "worry",
        "explanation": "Bare infinitive after modal 'shouldn't' (Động từ nguyên mẫu không TO phức tạp)",
        "difficulty": "Medium",
        "topic_id": 34
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "They can't ___ the meeting tomorrow.",
        "correct_answer": "attend",
        "suggest_answer": "attend",
        "explanation": "Bare infinitive after 'can't'",
        "difficulty": "Medium",
        "topic_id": 34
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "Help me ___ the boxes.",
        "correct_answer": "carry",
        "suggest_answer": "carry",
        "explanation": "Bare infinitive after 'help' (Động từ nguyên mẫu sau help)",
        "difficulty": "Medium",
        "topic_id": 34
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "I watched them ___ soccer in the park.",
        "correct_answer": "play",
        "suggest_answer": "play",
        "explanation": "Bare infinitive after 'watch'",
        "difficulty": "Medium",
        "topic_id": 34
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "He might ___ to the party.",
        "correct_answer": "come",
        "suggest_answer": "come",
        "explanation": "Bare infinitive after modal 'might'",
        "difficulty": "Medium",
        "topic_id": 34
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "Don't let him ___ alone.",
        "correct_answer": "go",
        "suggest_answer": "go",
        "explanation": "Bare infinitive after 'let' (negative form)",
        "difficulty": "Medium",
        "topic_id": 34
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "We noticed her ___ the room.",
        "correct_answer": "enter",
        "suggest_answer": "enter",
        "explanation": "Bare infinitive after 'notice'",
        "difficulty": "Medium",
        "topic_id": 34
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "You must ___ the deadline.",
        "correct_answer": "meet",
        "suggest_answer": "meet",
        "explanation": "Bare infinitive after 'must'",
        "difficulty": "Medium",
        "topic_id": 34
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "I felt him ___ my shoulder.",
        "correct_answer": "touch",
        "suggest_answer": "touch",
        "explanation": "Bare infinitive after 'feel'",
        "difficulty": "Medium",
        "topic_id": 34
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "She would rather ___ home.",
        "correct_answer": "stay",
        "suggest_answer": "stay",
        "explanation": "Bare infinitive after 'would rather'",
        "difficulty": "Medium",
        "topic_id": 34
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "You ought ___ more carefully about this decision.",
        "correct_answer": "to think",
        "suggest_answer": "to think",
        "explanation": "Bare infinitive with 'ought' (Động từ nguyên mẫu nâng cao - ought to)",
        "difficulty": "Hard",
        "topic_id": 34
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "He dares ___ to contradict the authority.",
        "correct_answer": "not",
        "suggest_answer": "not",
        "explanation": "Bare infinitive after 'dare'",
        "difficulty": "Hard",
        "topic_id": 34
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "Make them ___ every detail carefully.",
        "correct_answer": "check",
        "suggest_answer": "check",
        "explanation": "Bare infinitive after 'make' (causative)",
        "difficulty": "Hard",
        "topic_id": 34
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "I heard the witness ___ his story in court.",
        "correct_answer": "tell",
        "suggest_answer": "tell",
        "explanation": "Bare infinitive after 'hear' with full action",
        "difficulty": "Hard",
        "topic_id": 34
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "You needn't ___ the examination.",
        "correct_answer": "take",
        "suggest_answer": "take",
        "explanation": "Bare infinitive after 'needn't' (modal-like)",
        "difficulty": "Hard",
        "topic_id": 34
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "She let her children ___ what they wanted.",
        "correct_answer": "do",
        "suggest_answer": "do",
        "explanation": "Bare infinitive after 'let' with object",
        "difficulty": "Hard",
        "topic_id": 34
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "We observed the suspects ___ the building.",
        "correct_answer": "enter",
        "suggest_answer": "enter",
        "explanation": "Bare infinitive after 'observe'",
        "difficulty": "Hard",
        "topic_id": 34
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "The teacher made the students ___ the assignment.",
        "correct_answer": "complete",
        "suggest_answer": "complete",
        "explanation": "Bare infinitive after 'make' (obligation)",
        "difficulty": "Hard",
        "topic_id": 34
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "I can ___ the difference in quality.",
        "correct_answer": "see",
        "suggest_answer": "see",
        "explanation": "Bare infinitive after modal 'can'",
        "difficulty": "Hard",
        "topic_id": 34
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "Help them ___ the heavy furniture.",
        "correct_answer": "move",
        "suggest_answer": "move",
        "explanation": "Bare infinitive after 'help'",
        "difficulty": "Hard",
        "topic_id": 34
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows bare infinitive after modal?",
        "correct_answer": "You must finish the work.",
        "difficulty": "Easy",
        "explanation": "Bare infinitive after 'must' (Động từ nguyên mẫu không TO sau modal verbs)",
        "options": [
            {
                "id": 311,
                "option_text": "You must finish the work.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "You must to finish the work.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "You finish the work must.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "You must finishing the work.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 34
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows bare infinitive after 'let'?",
        "correct_answer": "Let me help you.",
        "difficulty": "Easy",
        "explanation": "Bare infinitive after 'let' (Động từ nguyên mẫu sau let)",
        "options": [
            {
                "id": 321,
                "option_text": "Let me help you.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "Let me to help you.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "Let me helping you.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "Let help me you.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 34
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows bare infinitive after 'make'?",
        "correct_answer": "She made him apologize.",
        "difficulty": "Easy",
        "explanation": "Bare infinitive after 'make' (Động từ nguyên mẫu sau make)",
        "options": [
            {
                "id": 331,
                "option_text": "She made him apologize.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "She made him to apologize.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "She made him apologizing.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "She made apologize him.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 34
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which shows bare infinitive after 'see'?",
        "correct_answer": "I saw them leave.",
        "difficulty": "Easy",
        "explanation": "Bare infinitive after perception verb 'see' (Động từ nguyên mẫu sau động từ tri giác)",
        "options": [
            {
                "id": 341,
                "option_text": "I saw them leave.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "I saw them to leave.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "I saw them leaving.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "I saw leaving them.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 34
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Which shows bare infinitive after 'can'?",
        "correct_answer": "She can swim very well.",
        "difficulty": "Easy",
        "explanation": "Bare infinitive after modal 'can'",
        "options": [
            {
                "id": 351,
                "option_text": "She can swim very well.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "She can to swim very well.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "She can swimming very well.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "She swimming can very well.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 34
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Which shows bare infinitive after 'hear'?",
        "correct_answer": "We heard the alarm ring.",
        "difficulty": "Easy",
        "explanation": "Bare infinitive after 'hear'",
        "options": [
            {
                "id": 361,
                "option_text": "We heard the alarm ring.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "We heard the alarm to ring.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "We heard the alarm ringing.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "We heard ringing the alarm.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 34
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Which shows bare infinitive after 'will'?",
        "correct_answer": "I will call you tomorrow.",
        "difficulty": "Easy",
        "explanation": "Bare infinitive after modal 'will'",
        "options": [
            {
                "id": 371,
                "option_text": "I will call you tomorrow.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "I will to call you tomorrow.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "I will calling you tomorrow.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "I will to calling you tomorrow.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 34
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Which shows bare infinitive after 'help'?",
        "correct_answer": "Help me carry the bags.",
        "difficulty": "Easy",
        "explanation": "Bare infinitive after 'help'",
        "options": [
            {
                "id": 381,
                "option_text": "Help me carry the bags.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "Help me to carry the bags.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "Help me carrying the bags.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "Help carry me the bags.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 34
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Which shows bare infinitive after 'watch'?",
        "correct_answer": "Watch the sun set.",
        "difficulty": "Easy",
        "explanation": "Bare infinitive after 'watch'",
        "options": [
            {
                "id": 391,
                "option_text": "Watch the sun set.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "Watch the sun to set.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "Watch the sun setting.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "Watch setting the sun.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 34
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Which shows bare infinitive after 'may'?",
        "correct_answer": "You may go now.",
        "difficulty": "Easy",
        "explanation": "Bare infinitive after modal 'may'",
        "options": [
            {
                "id": 401,
                "option_text": "You may go now.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "You may to go now.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "You may going now.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "You may going to go now.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 34
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'could':",
        "correct_answer": "They could find a solution.",
        "difficulty": "Medium",
        "explanation": "Bare infinitive after modal 'could' (Động từ nguyên mẫu không TO phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "They could find a solution.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "They could to find a solution.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "They could finding a solution.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "They finding could a solution.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 34
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'ought':",
        "correct_answer": "You ought to help him.",
        "difficulty": "Medium",
        "explanation": "Bare infinitive after 'ought to' (takes 'to')",
        "options": [
            {
                "id": 621,
                "option_text": "You ought to help him.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "You ought help him.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "You ought helping him.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "You ought to helping him.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 34
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive after 'notice':",
        "correct_answer": "I noticed him enter the building.",
        "difficulty": "Medium",
        "explanation": "Bare infinitive after 'notice' (perception verb)",
        "options": [
            {
                "id": 631,
                "option_text": "I noticed him enter the building.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "I noticed him to enter the building.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "I noticed him entering the building.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "I noticed entering him the building.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 34
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'dare':",
        "correct_answer": "He dare not speak.",
        "difficulty": "Medium",
        "explanation": "Bare infinitive after 'dare' (semi-modal)",
        "options": [
            {
                "id": 641,
                "option_text": "He dare not speak.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "He dare to not speak.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "He dare not speaking.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "He not dare speak.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 34
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'need':",
        "correct_answer": "You needn't attend the meeting.",
        "difficulty": "Medium",
        "explanation": "Bare infinitive after 'need' (semi-modal)",
        "options": [
            {
                "id": 651,
                "option_text": "You needn't attend the meeting.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "You needn't to attend the meeting.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "You needn't attending the meeting.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "You not needn't attend the meeting.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 34
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'feel':",
        "correct_answer": "I felt the house shake.",
        "difficulty": "Medium",
        "explanation": "Bare infinitive after 'feel' (perception)",
        "options": [
            {
                "id": 661,
                "option_text": "I felt the house shake.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "I felt the house to shake.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "I felt the house shaking.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "I felt shaking the house.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 34
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'would':",
        "correct_answer": "I would rather stay home.",
        "difficulty": "Medium",
        "explanation": "Bare infinitive after 'would rather'",
        "options": [
            {
                "id": 671,
                "option_text": "I would rather stay home.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "I would rather to stay home.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "I would rather staying home.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "I would rather home stay.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 34
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive after 'let':",
        "correct_answer": "Don't let him go.",
        "difficulty": "Medium",
        "explanation": "Bare infinitive after 'let' (negative)",
        "options": [
            {
                "id": 681,
                "option_text": "Don't let him go.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "Don't let him to go.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "Don't let him going.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "Don't let going him.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 34
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'should':",
        "correct_answer": "You should finish before dark.",
        "difficulty": "Medium",
        "explanation": "Bare infinitive after modal 'should'",
        "options": [
            {
                "id": 691,
                "option_text": "You should finish before dark.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "You should to finish before dark.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "You should finishing before dark.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "You finishing should before dark.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 34
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'observe':",
        "correct_answer": "We observed them leave the office.",
        "difficulty": "Medium",
        "explanation": "Bare infinitive after 'observe' (perception)",
        "options": [
            {
                "id": 701,
                "option_text": "We observed them leave the office.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "We observed them to leave the office.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "We observed them leaving the office.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "We observed leaving them the office.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 34
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with complex 'make':",
        "correct_answer": "The tragedy made him reconsider his life.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'make' (causative) (Động từ nguyên mẫu nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "The tragedy made him reconsider his life.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "The tragedy made him to reconsider his life.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "The tragedy made him reconsidering his life.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "The tragedy made reconsider him his life.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 34
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'can't':",
        "correct_answer": "I can't help but laugh.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'can't help but'",
        "options": [
            {
                "id": 821,
                "option_text": "I can't help but laugh.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "I can't help but to laugh.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "I can't but help laughing.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "I can't help laughing but.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 34
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with complex 'see':",
        "correct_answer": "I see you have won the prize.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive (or clause) after 'see'",
        "options": [
            {
                "id": 831,
                "option_text": "I see you have won the prize.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "I see you to have won the prize.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "I see you winning the prize.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "I see won you the prize.",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 34
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with modal passive:",
        "correct_answer": "The work must be done today.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive (be) after modal in passive",
        "options": [
            {
                "id": 841,
                "option_text": "The work must be done today.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "The work must to be done today.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "The work must being done today.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "The work be must done today.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 34
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'help':",
        "correct_answer": "Can you help solve this problem?",
        "difficulty": "Hard",
        "explanation": "Help with bare infinitive (to can be omitted)",
        "options": [
            {
                "id": 851,
                "option_text": "Can you help solve this problem?",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "Can you help to solve this problem?",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "Can you help solving this problem?",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "Can you solve help this problem?",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 34
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'might':",
        "correct_answer": "She might come tomorrow.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after modal 'might'",
        "options": [
            {
                "id": 861,
                "option_text": "She might come tomorrow.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "She might to come tomorrow.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "She might coming tomorrow.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "She coming might tomorrow.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 34
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'hear':",
        "correct_answer": "They heard the birds sing.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'hear' (complete action)",
        "options": [
            {
                "id": 871,
                "option_text": "They heard the birds sing.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "They heard the birds to sing.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "They heard the birds singing.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "They heard singing the birds.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 34
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive comparison:",
        "correct_answer": "He'd rather work than sit idle.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'rather...than'",
        "options": [
            {
                "id": 881,
                "option_text": "He'd rather work than sit idle.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "He'd rather to work than sit idle.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "He'd rather work than sitting idle.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "He rather work than sit idle.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 34
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with negative modal:",
        "correct_answer": "You mustn't tell anyone.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after negative modal 'mustn't'",
        "options": [
            {
                "id": 891,
                "option_text": "You mustn't tell anyone.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "You mustn't to tell anyone.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "You mustn't telling anyone.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "You not mustn't tell anyone.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 34
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'let us':",
        "correct_answer": "Let us consider all options.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'let us' (formal)",
        "options": [
            {
                "id": 901,
                "option_text": "Let us consider all options.",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Let us to consider all options.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Let us considering all options.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Let considering us all options.",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 34
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'watch':",
        "correct_answer": "Watch the fire spread rapidly.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'watch' (complete action)",
        "options": [
            {
                "id": 911,
                "option_text": "Watch the fire spread rapidly.",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "Watch the fire to spread rapidly.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Watch the fire spreading rapidly.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Watch spreading the fire rapidly.",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 34
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with causative:",
        "correct_answer": "The pressure made him resign.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive (not 'to') after causative 'make'",
        "options": [
            {
                "id": 921,
                "option_text": "The pressure made him resign.",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "The pressure made him to resign.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "The pressure made him resigning.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "The pressure made resign him.",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 34
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with perception passive:",
        "correct_answer": "He was seen leave the room.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive in passive (less common)",
        "options": [
            {
                "id": 931,
                "option_text": "He was seen leave the room.",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "He was seen to leave the room.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "He was seen leaving the room.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "He was seen for leave the room.",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 34
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with modal form:",
        "correct_answer": "He could not help but smile.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'could not help but'",
        "options": [
            {
                "id": 941,
                "option_text": "He could not help but smile.",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "He could not help but to smile.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "He could not help but smiling.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "He could not but smile help.",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 34
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with double perception:",
        "correct_answer": "I watched him paint the entire wall.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'watch' (complete action)",
        "options": [
            {
                "id": 951,
                "option_text": "I watched him paint the entire wall.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "I watched him to paint the entire wall.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "I watched him painting the entire wall.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "I watched paint him the entire wall.",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 34
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive in permission:",
        "correct_answer": "Let me stay a bit longer.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'let' (permission/request)",
        "options": [
            {
                "id": 961,
                "option_text": "Let me stay a bit longer.",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "Let me to stay a bit longer.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "Let me staying a bit longer.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "Let staying me a bit longer.",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 34
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with complex modal:",
        "correct_answer": "She may not understand initially.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after modal 'may' with negation",
        "options": [
            {
                "id": 971,
                "option_text": "She may not understand initially.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "She may not to understand initially.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "She may not understanding initially.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "She not may understand initially.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 34
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with obligation:",
        "correct_answer": "We must leave before sunset.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'must' (obligation)",
        "options": [
            {
                "id": 981,
                "option_text": "We must leave before sunset.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "We must to leave before sunset.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "We must leaving before sunset.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "We leaving must before sunset.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 34
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive with 'allow':",
        "correct_answer": "Will you let me help?",
        "difficulty": "Hard",
        "explanation": "Bare infinitive after 'let' (permission)",
        "options": [
            {
                "id": 991,
                "option_text": "Will you let me help?",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Will you let me to help?",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Will you let me helping?",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "Will you let help me?",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 34
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Select correct bare infinitive in complex context:",
        "correct_answer": "I heard the explosion from miles away.",
        "difficulty": "Hard",
        "explanation": "Bare infinitive (or noun) after 'hear'",
        "options": [
            {
                "id": 1001,
                "option_text": "I heard the explosion from miles away.",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "I heard to hear the explosion from miles away.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "I heard exploding from miles away.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "I heard the explosion to explode miles away.",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 34
    }
];

export default questions;