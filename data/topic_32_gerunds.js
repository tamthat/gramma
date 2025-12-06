const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "___ is my favorite hobby.",
        "correct_answer": "Reading",
        "suggest_answer": "Reading",
        "explanation": "Gerund as subject (Danh động từ làm chủ ngữ)",
        "difficulty": "Easy",
        "topic_id": 32
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "I enjoy ___ books in the afternoon.",
        "correct_answer": "reading",
        "suggest_answer": "reading",
        "explanation": "Gerund as object after 'enjoy' (Danh động từ làm tân ngữ)",
        "difficulty": "Easy",
        "topic_id": 32
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "She is good at ___ languages.",
        "correct_answer": "learning",
        "suggest_answer": "learning",
        "explanation": "Gerund after preposition 'at' (Danh động từ sau giới từ)",
        "difficulty": "Easy",
        "topic_id": 32
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "___ is the best way to stay healthy.",
        "correct_answer": "Exercising",
        "suggest_answer": "Exercising",
        "explanation": "Gerund as subject complement",
        "difficulty": "Easy",
        "topic_id": 32
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "He stopped ___ when he saw the sign.",
        "correct_answer": "running",
        "suggest_answer": "running",
        "explanation": "Gerund after 'stop' (verb taking gerund)",
        "difficulty": "Easy",
        "topic_id": 32
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "Before ___ the house, check all windows.",
        "correct_answer": "leaving",
        "suggest_answer": "leaving",
        "explanation": "Gerund after preposition 'before'",
        "difficulty": "Easy",
        "topic_id": 32
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "I look forward to ___ you soon.",
        "correct_answer": "seeing",
        "suggest_answer": "seeing",
        "explanation": "Gerund after phrasal preposition 'look forward to'",
        "difficulty": "Easy",
        "topic_id": 32
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "She practices ___ piano every day.",
        "correct_answer": "playing",
        "suggest_answer": "playing",
        "explanation": "Gerund after 'practice'",
        "difficulty": "Easy",
        "topic_id": 32
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "His hobby is ___.",
        "correct_answer": "collecting/painting/swimming",
        "suggest_answer": "collecting/painting/swimming",
        "explanation": "Gerund as subject complement after 'is'",
        "difficulty": "Easy",
        "topic_id": 32
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "After ___ breakfast, we went for a walk.",
        "correct_answer": "having",
        "suggest_answer": "having",
        "explanation": "Gerund after preposition 'after'",
        "difficulty": "Easy",
        "topic_id": 32
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "___ hard will help you succeed in life.",
        "correct_answer": "Working",
        "suggest_answer": "Working",
        "explanation": "Gerund as subject (Danh động từ làm chủ ngữ - phức tạp)",
        "difficulty": "Medium",
        "topic_id": 32
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "I appreciate your ___ me with this project.",
        "correct_answer": "helping",
        "suggest_answer": "helping",
        "explanation": "Gerund after 'appreciate' (verb + gerund)",
        "difficulty": "Medium",
        "topic_id": 32
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "The benefit of ___ regularly is improved health.",
        "correct_answer": "exercising",
        "suggest_answer": "exercising",
        "explanation": "Gerund after preposition 'of'",
        "difficulty": "Medium",
        "topic_id": 32
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "He admitted to ___ the truth.",
        "correct_answer": "lying",
        "suggest_answer": "lying",
        "explanation": "Gerund after 'admit to' (phrasal verb)",
        "difficulty": "Medium",
        "topic_id": 32
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "She can't stand ___ in long lines.",
        "correct_answer": "waiting",
        "suggest_answer": "waiting",
        "explanation": "Gerund after 'can't stand'",
        "difficulty": "Medium",
        "topic_id": 32
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "Without ___ hard, you won't achieve your goals.",
        "correct_answer": "working",
        "suggest_answer": "working",
        "explanation": "Gerund after preposition 'without'",
        "difficulty": "Medium",
        "topic_id": 32
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "I suggest ___ early to avoid traffic.",
        "correct_answer": "leaving",
        "suggest_answer": "leaving",
        "explanation": "Gerund after 'suggest'",
        "difficulty": "Medium",
        "topic_id": 32
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "She is afraid of ___ in public.",
        "correct_answer": "speaking",
        "suggest_answer": "speaking",
        "explanation": "Gerund after 'afraid of'",
        "difficulty": "Medium",
        "topic_id": 32
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "In addition to ___ English, she speaks French.",
        "correct_answer": "learning",
        "suggest_answer": "learning",
        "explanation": "Gerund after 'in addition to'",
        "difficulty": "Medium",
        "topic_id": 32
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "He risked ___ his job by refusing.",
        "correct_answer": "losing",
        "suggest_answer": "losing",
        "explanation": "Gerund after 'risk'",
        "difficulty": "Medium",
        "topic_id": 32
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "The act of ___ kindness never goes unnoticed.",
        "correct_answer": "performing",
        "suggest_answer": "performing",
        "explanation": "Gerund after 'act of' (Danh động từ phức tạp nâng cao)",
        "difficulty": "Hard",
        "topic_id": 32
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "She has a talent for ___ languages quickly.",
        "correct_answer": "learning",
        "suggest_answer": "learning",
        "explanation": "Gerund with adverb after 'talent for'",
        "difficulty": "Hard",
        "topic_id": 32
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "Owing to ___ resources, the project was cancelled.",
        "correct_answer": "lacking",
        "suggest_answer": "lacking",
        "explanation": "Gerund after 'owing to'",
        "difficulty": "Hard",
        "topic_id": 32
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "The process of ___ information requires careful analysis.",
        "correct_answer": "gathering",
        "suggest_answer": "gathering",
        "explanation": "Gerund after 'process of'",
        "difficulty": "Hard",
        "topic_id": 32
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "He accused her of ___ behind his back.",
        "correct_answer": "talking",
        "suggest_answer": "talking",
        "explanation": "Gerund after 'accuse of'",
        "difficulty": "Hard",
        "topic_id": 32
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "By ___ regularly, you improve your fitness.",
        "correct_answer": "exercising",
        "suggest_answer": "exercising",
        "explanation": "Gerund after 'by' (method/means)",
        "difficulty": "Hard",
        "topic_id": 32
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "Instead of ___, he decided to walk.",
        "correct_answer": "driving",
        "suggest_answer": "driving",
        "explanation": "Gerund after 'instead of'",
        "difficulty": "Hard",
        "topic_id": 32
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "The responsibility of ___ others weighs heavily.",
        "correct_answer": "leading",
        "suggest_answer": "leading",
        "explanation": "Gerund after 'responsibility of' with object",
        "difficulty": "Hard",
        "topic_id": 32
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "She persisted in ___ her dreams despite obstacles.",
        "correct_answer": "pursuing",
        "suggest_answer": "pursuing",
        "explanation": "Gerund after 'persist in'",
        "difficulty": "Hard",
        "topic_id": 32
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "The value of ___ lies in continuous improvement.",
        "correct_answer": "learning",
        "suggest_answer": "learning",
        "explanation": "Gerund as subject with preposition",
        "difficulty": "Hard",
        "topic_id": 32
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows gerund as subject?",
        "correct_answer": "Swimming is excellent exercise.",
        "difficulty": "Easy",
        "explanation": "Gerund as subject (Danh động từ làm chủ ngữ)",
        "options": [
            {
                "id": 311,
                "option_text": "Swimming is excellent exercise.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "I enjoy swimming in the pool.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "She is swimming now.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "To swim is fun.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 32
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows gerund as object?",
        "correct_answer": "I hate waiting in traffic.",
        "difficulty": "Easy",
        "explanation": "Gerund as object after verb (Danh động từ làm tân ngữ)",
        "options": [
            {
                "id": 321,
                "option_text": "I hate waiting in traffic.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "Waiting is tedious.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "I am waiting in traffic.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "I love to wait.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 32
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows gerund after preposition?",
        "correct_answer": "She is interested in learning Spanish.",
        "difficulty": "Easy",
        "explanation": "Gerund after preposition 'in' (Danh động từ sau giới từ)",
        "options": [
            {
                "id": 331,
                "option_text": "She is interested in learning Spanish.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "Learning Spanish interests her.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "She is learning Spanish now.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "She wants to learn Spanish.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 32
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which verb takes gerund, not infinitive?",
        "correct_answer": "enjoy",
        "difficulty": "Easy",
        "explanation": "Verbs taking gerund: enjoy, avoid, finish, suggest, etc.",
        "options": [
            {
                "id": 341,
                "option_text": "enjoy",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "want",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "decide",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "plan",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 32
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Which is correct use of gerund?",
        "correct_answer": "I avoid driving at night.",
        "difficulty": "Easy",
        "explanation": "Avoid takes gerund, not infinitive",
        "options": [
            {
                "id": 351,
                "option_text": "I avoid driving at night.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "I avoid to drive at night.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "I avoid drive at night.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "I avoid you drive at night.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 32
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Which shows gerund after 'without'?",
        "correct_answer": "He succeeded without trying.",
        "difficulty": "Easy",
        "explanation": "Preposition 'without' takes gerund",
        "options": [
            {
                "id": 361,
                "option_text": "He succeeded without trying.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "He succeeded without to try.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "He succeeded without try.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "He succeeded without tried.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 32
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Which shows gerund as subject complement?",
        "correct_answer": "Her hobby is painting.",
        "difficulty": "Easy",
        "explanation": "Gerund after 'be' verb",
        "options": [
            {
                "id": 371,
                "option_text": "Her hobby is painting.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "She is painting.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "Painting is what she does.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "She paints.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 32
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Which shows gerund after 'finish'?",
        "correct_answer": "She finished reading the book.",
        "difficulty": "Easy",
        "explanation": "Finish takes gerund, not infinitive",
        "options": [
            {
                "id": 381,
                "option_text": "She finished reading the book.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "She finished to read the book.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "She finished read the book.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "She finishes reading the book.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 32
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Which shows gerund after 'after'?",
        "correct_answer": "After finishing work, he went home.",
        "difficulty": "Easy",
        "explanation": "Preposition 'after' takes gerund",
        "options": [
            {
                "id": 391,
                "option_text": "After finishing work, he went home.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "After to finish work, he went home.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "After finish work, he went home.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "After finishes work, he went home.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 32
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Which shows gerund after 'deny'?",
        "correct_answer": "He denied taking the money.",
        "difficulty": "Easy",
        "explanation": "Deny takes gerund",
        "options": [
            {
                "id": 401,
                "option_text": "He denied taking the money.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "He denied to take the money.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "He denied take the money.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "He denied took the money.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 32
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with gerund subject:",
        "correct_answer": "Speaking English fluently requires practice.",
        "difficulty": "Medium",
        "explanation": "Gerund as subject with additional information (Danh động từ làm chủ ngữ phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "Speaking English fluently requires practice.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "To speak English fluently requires practice.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Speak English fluently requires practice.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "English speaking fluently requires practice.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 32
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use after 'postpone':",
        "correct_answer": "He postponed making a decision.",
        "difficulty": "Medium",
        "explanation": "Postpone takes gerund",
        "options": [
            {
                "id": 621,
                "option_text": "He postponed making a decision.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "He postponed to make a decision.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "He postponed make a decision.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "He postponed to making a decision.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 32
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use after 'insist on':",
        "correct_answer": "She insists on paying for dinner.",
        "difficulty": "Medium",
        "explanation": "Insist on takes gerund",
        "options": [
            {
                "id": 631,
                "option_text": "She insists on paying for dinner.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "She insists on to pay for dinner.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "She insists on pay for dinner.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "She insists paying for dinner.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 32
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with 'prevent from':",
        "correct_answer": "Nothing prevented him from trying.",
        "difficulty": "Medium",
        "explanation": "Prevent from takes gerund",
        "options": [
            {
                "id": 641,
                "option_text": "Nothing prevented him from trying.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "Nothing prevented him from to try.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "Nothing prevented him try.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "Nothing prevented him trying.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 32
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with 'spend time':",
        "correct_answer": "We spent time playing games.",
        "difficulty": "Medium",
        "explanation": "Spend time takes gerund",
        "options": [
            {
                "id": 651,
                "option_text": "We spent time playing games.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "We spent time to play games.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "We spent time play games.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "We spent playing games.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 32
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use after 'consider':",
        "correct_answer": "I am considering changing jobs.",
        "difficulty": "Medium",
        "explanation": "Consider takes gerund",
        "options": [
            {
                "id": 661,
                "option_text": "I am considering changing jobs.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "I am considering to change jobs.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "I am considering change jobs.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "I consider changing jobs.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 32
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use after 'feel like':",
        "correct_answer": "Do you feel like going out?",
        "difficulty": "Medium",
        "explanation": "Feel like takes gerund",
        "options": [
            {
                "id": 671,
                "option_text": "Do you feel like going out?",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "Do you feel like to go out?",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "Do you feel like go out?",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "Do you feel like out going?",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 32
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct gerund with object:",
        "correct_answer": "I appreciate you listening to my concerns.",
        "difficulty": "Medium",
        "explanation": "Gerund with possessive + gerund object",
        "options": [
            {
                "id": 681,
                "option_text": "I appreciate you listening to my concerns.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "I appreciate your listen to my concerns.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "I appreciate you listen to my concerns.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "I appreciate listening you to my concerns.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 32
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use after 'mind':",
        "correct_answer": "Do you mind waiting a few minutes?",
        "difficulty": "Medium",
        "explanation": "Mind takes gerund",
        "options": [
            {
                "id": 691,
                "option_text": "Do you mind waiting a few minutes?",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Do you mind to wait a few minutes?",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "Do you mind wait a few minutes?",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "Do you mind waited a few minutes?",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 32
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with 'be worth':",
        "correct_answer": "The book is worth reading.",
        "difficulty": "Medium",
        "explanation": "Worth + gerund",
        "options": [
            {
                "id": 701,
                "option_text": "The book is worth reading.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "The book is worth to read.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "The book is worth read.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "The book is to read worth.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 32
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Select the correct gerund use in complex sentence:",
        "correct_answer": "The process of learning requires patience and dedication.",
        "difficulty": "Hard",
        "explanation": "Gerund in complex nominal phrase (Danh động từ phức tạp nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "The process of learning requires patience and dedication.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "The process of to learn requires patience and dedication.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "The process learn requires patience and dedication.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "The process learning requires patience and dedication.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 32
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use after 'excuse':",
        "correct_answer": "Please excuse me leaving early.",
        "difficulty": "Hard",
        "explanation": "Excuse + object + gerund",
        "options": [
            {
                "id": 821,
                "option_text": "Please excuse me leaving early.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Please excuse me to leave early.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Please excuse me leave early.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "Please excuse leave me early.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 32
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use after 'pardon':",
        "correct_answer": "Pardon my interrupting you.",
        "difficulty": "Hard",
        "explanation": "Pardon + gerund (formal)",
        "options": [
            {
                "id": 831,
                "option_text": "Pardon my interrupting you.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "Pardon me interrupting you.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "Pardon me to interrupt you.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "Pardon interrupt you.",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 32
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use after 'go':",
        "correct_answer": "Let's go shopping downtown.",
        "difficulty": "Hard",
        "explanation": "Go + gerund (specific activity)",
        "options": [
            {
                "id": 841,
                "option_text": "Let's go shopping downtown.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "Let's go to shop downtown.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "Let's go shop downtown.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "Let's go for shopping downtown.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 32
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with complex preposition:",
        "correct_answer": "In addition to speaking English, she speaks French.",
        "difficulty": "Hard",
        "explanation": "Complex preposition + gerund",
        "options": [
            {
                "id": 851,
                "option_text": "In addition to speaking English, she speaks French.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "In addition to speak English, she speaks French.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "In addition to to speak English, she speaks French.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "In addition speaking English, she speaks French.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 32
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Select the correct gerund with negative:",
        "correct_answer": "He regrets not calling her earlier.",
        "difficulty": "Hard",
        "explanation": "Gerund with negation",
        "options": [
            {
                "id": 861,
                "option_text": "He regrets not calling her earlier.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "He regrets not to call her earlier.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "He regrets not called her earlier.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "He regrets calling not her earlier.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 32
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use of gerund with passive:",
        "correct_answer": "The building needs repainting.",
        "difficulty": "Hard",
        "explanation": "Need + gerund (passive meaning)",
        "options": [
            {
                "id": 871,
                "option_text": "The building needs repainting.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "The building needs to repaint.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "The building needs be repainted.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "The building is needing repainting.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 32
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with 'require':",
        "correct_answer": "This project requires careful planning.",
        "difficulty": "Hard",
        "explanation": "Require + gerund (alternative to infinitive)",
        "options": [
            {
                "id": 881,
                "option_text": "This project requires careful planning.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "This project requires to plan carefully.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "This project requires plan carefully.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "This project be requiring careful planning.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 32
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use of dual gerund/infinitive:",
        "correct_answer": "She likes both cooking and baking.",
        "difficulty": "Hard",
        "explanation": "Parallel structure with gerunds",
        "options": [
            {
                "id": 891,
                "option_text": "She likes both cooking and baking.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "She likes both to cook and to bake.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "She likes both cook and bake.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "She likes both cooking and to bake.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 32
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Select the correct gerund in idiomatic expression:",
        "correct_answer": "It goes without saying that she is talented.",
        "difficulty": "Hard",
        "explanation": "Idiom 'goes without saying' + gerund",
        "options": [
            {
                "id": 901,
                "option_text": "It goes without saying that she is talented.",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "It goes without to say that she is talented.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "It goes without said that she is talented.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "It goes to without saying she is talented.",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 32
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with 'look forward to':",
        "correct_answer": "I look forward to hearing from you.",
        "difficulty": "Hard",
        "explanation": "Phrasal verb 'look forward to' + gerund",
        "options": [
            {
                "id": 911,
                "option_text": "I look forward to hearing from you.",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "I look forward to hear from you.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "I look forward hearing from you.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "I look to forward hearing from you.",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 32
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with 'object to':",
        "correct_answer": "They object to raising the prices.",
        "difficulty": "Hard",
        "explanation": "Phrasal verb 'object to' + gerund",
        "options": [
            {
                "id": 921,
                "option_text": "They object to raising the prices.",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "They object to raise the prices.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "They object raising the prices.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "They to object raising the prices.",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 32
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Select the correct gerund in narrative:",
        "correct_answer": "Having finished dinner, we went for a walk.",
        "difficulty": "Hard",
        "explanation": "Perfect gerund for prior action",
        "options": [
            {
                "id": 931,
                "option_text": "Having finished dinner, we went for a walk.",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "Finishing dinner, we went for a walk.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "Having to finish dinner, we went for a walk.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "Finished dinner, we went for a walk.",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 32
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with 'take to':",
        "correct_answer": "She took to painting after retirement.",
        "difficulty": "Hard",
        "explanation": "Phrasal verb 'take to' + gerund",
        "options": [
            {
                "id": 941,
                "option_text": "She took to painting after retirement.",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "She took to paint after retirement.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "She took painting after retirement.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "She took to taking paint after retirement.",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 32
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Select the correct gerund in abstract context:",
        "correct_answer": "His constant complaining annoyed everyone.",
        "difficulty": "Hard",
        "explanation": "Gerund with possessive and adjective",
        "options": [
            {
                "id": 951,
                "option_text": "His constant complaining annoyed everyone.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "His constantly complaining annoyed everyone.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "He constant complaining annoyed everyone.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "His complaining constantly annoyed everyone.",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 32
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with 'resort to':",
        "correct_answer": "When diplomacy fails, nations resort to military action.",
        "difficulty": "Hard",
        "explanation": "Phrasal verb 'resort to' + gerund",
        "options": [
            {
                "id": 961,
                "option_text": "When diplomacy fails, nations resort to military action.",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "When diplomacy fails, nations resort to act militarily.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "When diplomacy fails, nations resort military action.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "When diplomacy fails, resort nations to military action.",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 32
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with 'set about':",
        "correct_answer": "He set about solving the problem immediately.",
        "difficulty": "Hard",
        "explanation": "Phrasal verb 'set about' + gerund",
        "options": [
            {
                "id": 971,
                "option_text": "He set about solving the problem immediately.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "He set about to solve the problem immediately.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "He set solving the problem immediately.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "He about set solving the problem immediately.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 32
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Select the correct gerund with comparison:",
        "correct_answer": "Rather than giving up, she persevered.",
        "difficulty": "Hard",
        "explanation": "Gerund after 'rather than'",
        "options": [
            {
                "id": 981,
                "option_text": "Rather than giving up, she persevered.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "Rather than to give up, she persevered.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "Rather than give up, she persevered.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "Rather give up than, she persevered.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 32
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use after 'can't help':",
        "correct_answer": "I can't help laughing at his jokes.",
        "difficulty": "Hard",
        "explanation": "Can't help + gerund (cannot avoid)",
        "options": [
            {
                "id": 991,
                "option_text": "I can't help laughing at his jokes.",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "I can't help to laugh at his jokes.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "I can't help laugh at his jokes.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "I can't help laughed at his jokes.",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 32
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Select the correct use with 'risk':",
        "correct_answer": "He risked offending her by telling the truth.",
        "difficulty": "Hard",
        "explanation": "Risk + gerund (take chance)",
        "options": [
            {
                "id": 1001,
                "option_text": "He risked offending her by telling the truth.",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "He risked to offend her by telling the truth.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "He risked offend her by telling the truth.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "He risked offended her by telling the truth.",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 32
    }
];

export default questions;