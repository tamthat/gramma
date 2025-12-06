const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "Never ___ I seen such a beautiful sunset.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Inversion with negative adverb 'Never' + auxiliary verb (Đảo ngữ với trạng từ phủ định)",
        "difficulty": "Easy",
        "topic_id": 31
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "Hardly ___ he finished when the phone rang.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Inversion with 'Hardly' + past perfect auxiliary",
        "difficulty": "Easy",
        "topic_id": 31
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "Should you need help, ___ contact me.",
        "correct_answer": "do",
        "suggest_answer": "do",
        "explanation": "Inversion in conditional: Should + subject + verb (Đảo ngữ với điều kiện)",
        "difficulty": "Easy",
        "topic_id": 31
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "No sooner had she arrived ___ she got the news.",
        "correct_answer": "than",
        "suggest_answer": "than",
        "explanation": "Inversion with 'No sooner...than'",
        "difficulty": "Easy",
        "topic_id": 31
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "Scarcely ___ the meeting started when the fire alarm went off.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Inversion with 'Scarcely' + past perfect",
        "difficulty": "Easy",
        "topic_id": 31
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "Not only ___ he a teacher but also a writer.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "Inversion with 'Not only...but also'",
        "difficulty": "Easy",
        "topic_id": 31
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "Were I in your position, I ___ accept the offer.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Inversion in conditional (subjunctive): Were + subject (Đảo ngữ điều kiện)",
        "difficulty": "Easy",
        "topic_id": 31
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "Seldom ___ such a talented musician seen in this city.",
        "correct_answer": "has",
        "suggest_answer": "has",
        "explanation": "Inversion with 'Seldom' + present perfect",
        "difficulty": "Easy",
        "topic_id": 31
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "Had I known the truth, I ___ not have acted so hastily.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Inversion in past conditional: Had + subject (Đảo ngữ điều kiện)",
        "difficulty": "Easy",
        "topic_id": 31
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "Nowhere ___ you find a better restaurant.",
        "correct_answer": "will/can",
        "suggest_answer": "will/can",
        "explanation": "Inversion with negative adverbial 'Nowhere'",
        "difficulty": "Easy",
        "topic_id": 31
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "Little did we realize ___ much danger we were in.",
        "correct_answer": "how",
        "suggest_answer": "how",
        "explanation": "Inversion with 'Little did' + auxiliary (Đảo ngữ phức tạp)",
        "difficulty": "Medium",
        "topic_id": 31
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "Not until she graduated ___ she understand the importance of education.",
        "correct_answer": "did",
        "suggest_answer": "did",
        "explanation": "Inversion with 'Not until'",
        "difficulty": "Medium",
        "topic_id": 31
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "Rarely ___ such controversial statements made by a politician.",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Inversion with 'Rarely' in passive voice",
        "difficulty": "Medium",
        "topic_id": 31
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "Should the company fail to deliver, ___ we pursue legal action.",
        "correct_answer": "will/would",
        "suggest_answer": "will/would",
        "explanation": "Inversion in conditional clause: Should + subject",
        "difficulty": "Medium",
        "topic_id": 31
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "Only when I read the fine print ___ I realize the hidden costs.",
        "correct_answer": "did",
        "suggest_answer": "did",
        "explanation": "Inversion with 'Only when'",
        "difficulty": "Medium",
        "topic_id": 31
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "Were it not for your help, we ___ not have succeeded.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Inversion: Were it not for + clause (Đảo ngữ điều kiện phủ định)",
        "difficulty": "Medium",
        "topic_id": 31
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "On no account ___ you reveal this secret.",
        "correct_answer": "must/should",
        "suggest_answer": "must/should",
        "explanation": "Inversion with 'On no account' (emphatic negative)",
        "difficulty": "Medium",
        "topic_id": 31
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "So determined was she ___ she overcame every obstacle.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Inversion for emphasis: So + adjective + auxiliary + subject + that",
        "difficulty": "Medium",
        "topic_id": 31
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "Not a single word ___ she speak during the entire meeting.",
        "correct_answer": "did",
        "suggest_answer": "did",
        "explanation": "Inversion with negative expression 'Not a single'",
        "difficulty": "Medium",
        "topic_id": 31
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "As soon as the door opened, ___ she rushed out.",
        "correct_answer": "did / out",
        "suggest_answer": "did / out",
        "explanation": "Optional inversion with 'As soon as' for narrative effect",
        "difficulty": "Medium",
        "topic_id": 31
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "Nowhere in the world ___ you encounter such diversity.",
        "correct_answer": "will",
        "suggest_answer": "will",
        "explanation": "Inversion with 'Nowhere' + future auxiliary (Đảo ngữ phức tạp nâng cao)",
        "difficulty": "Hard",
        "topic_id": 31
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "So crucial is environmental protection ___ we must act immediately.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Inversion for strong emphasis with 'So' + adjective",
        "difficulty": "Hard",
        "topic_id": 31
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "Not only had he lost his job, ___ he had lost his home.",
        "correct_answer": "but",
        "suggest_answer": "but",
        "explanation": "Double inversion with 'Not only...but also'",
        "difficulty": "Hard",
        "topic_id": 31
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "Should any problems arise, ___ I be informed immediately.",
        "correct_answer": "must",
        "suggest_answer": "must",
        "explanation": "Inversion in formal conditional with 'Should'",
        "difficulty": "Hard",
        "topic_id": 31
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "Never before ___ such catastrophic consequences been witnessed.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Inversion with 'Never before' in passive voice",
        "difficulty": "Hard",
        "topic_id": 31
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "Only if you study consistently ___ you achieve excellence.",
        "correct_answer": "will",
        "suggest_answer": "will",
        "explanation": "Inversion with 'Only if' (conditional emphasis)",
        "difficulty": "Hard",
        "topic_id": 31
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "Had we been more careful, the accident ___ not have happened.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Inversion in mixed conditional: Had + subject + verb",
        "difficulty": "Hard",
        "topic_id": 31
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "Under no circumstances ___ the terms be compromised.",
        "correct_answer": "should/must",
        "suggest_answer": "should/must",
        "explanation": "Inversion with formal negative phrase 'Under no circumstances'",
        "difficulty": "Hard",
        "topic_id": 31
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "Such was their excitement ___ they could barely sleep.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Inversion with 'Such...was' for narrative emphasis",
        "difficulty": "Hard",
        "topic_id": 31
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "Not in a million years ___ I have imagined this outcome.",
        "correct_answer": "would/could",
        "suggest_answer": "would/could",
        "explanation": "Inversion with emphatic negative 'Not in a million years'",
        "difficulty": "Hard",
        "topic_id": 31
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with negative adverb?",
        "correct_answer": "Never have I heard such music.",
        "difficulty": "Easy",
        "explanation": "Inversion with 'Never' + auxiliary (Đảo ngữ với trạng từ phủ định)",
        "options": [
            {
                "id": 311,
                "option_text": "Never have I heard such music.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "Never I have heard such music.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "I have never heard such music.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "Never heard I such music.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 31
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'Hardly'?",
        "correct_answer": "Hardly had they left when it started raining.",
        "difficulty": "Easy",
        "explanation": "Inversion: Hardly + auxiliary + subject",
        "options": [
            {
                "id": 321,
                "option_text": "Hardly had they left when it started raining.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "Hardly they had left when it started raining.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "They hardly had left when it started raining.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "Hardly left they when it started raining.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 31
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion in conditional (Should)?",
        "correct_answer": "Should you arrive late, please inform us.",
        "difficulty": "Easy",
        "explanation": "Inversion: Should + subject + verb (formal conditional) (Đảo ngữ điều kiện)",
        "options": [
            {
                "id": 331,
                "option_text": "Should you arrive late, please inform us.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "Should arrive you late, please inform us.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "You should arrive late, please inform us.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "Should you late arrive, please inform us.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 31
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion in conditional (Had)?",
        "correct_answer": "Had I known, I would have helped.",
        "difficulty": "Easy",
        "explanation": "Inversion: Had + subject + verb (subjunctive conditional)",
        "options": [
            {
                "id": 341,
                "option_text": "Had I known, I would have helped.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "Had known I, I would have helped.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "I had known, I would have helped.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "If had I known, I would have helped.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 31
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'Were'?",
        "correct_answer": "Were I you, I would refuse.",
        "difficulty": "Easy",
        "explanation": "Inversion: Were + subject + (subjunctive)",
        "options": [
            {
                "id": 351,
                "option_text": "Were I you, I would refuse.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "Was I you, I would refuse.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "I were you, I would refuse.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "If were I you, I would refuse.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 31
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'Not only'?",
        "correct_answer": "Not only is he intelligent, but also talented.",
        "difficulty": "Easy",
        "explanation": "Inversion: Not only + auxiliary + subject",
        "options": [
            {
                "id": 361,
                "option_text": "Not only is he intelligent, but also talented.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "Not only he is intelligent, but also talented.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "Not only intelligent he is, but also talented.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "He is not only intelligent, but also talented.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 31
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'Nowhere'?",
        "correct_answer": "Nowhere else can you find such service.",
        "difficulty": "Easy",
        "explanation": "Inversion: Nowhere + auxiliary + subject",
        "options": [
            {
                "id": 371,
                "option_text": "Nowhere else can you find such service.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "Nowhere else you can find such service.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "You nowhere else can find such service.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "You can nowhere find such service.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 31
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'No sooner...than'?",
        "correct_answer": "No sooner had he arrived than he fell asleep.",
        "difficulty": "Easy",
        "explanation": "Inversion: No sooner + auxiliary + subject + than",
        "options": [
            {
                "id": 381,
                "option_text": "No sooner had he arrived than he fell asleep.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "No sooner he had arrived than he fell asleep.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "He had no sooner arrived than he fell asleep.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "No sooner had arrived he than he fell asleep.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 31
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'Seldom'?",
        "correct_answer": "Seldom have I witnessed such dedication.",
        "difficulty": "Easy",
        "explanation": "Inversion: Seldom + auxiliary + subject",
        "options": [
            {
                "id": 391,
                "option_text": "Seldom have I witnessed such dedication.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "Seldom I have witnessed such dedication.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "I seldom have witnessed such dedication.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "Seldom witnessed I such dedication.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 31
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'Only when'?",
        "correct_answer": "Only when I mature will I understand.",
        "difficulty": "Easy",
        "explanation": "Inversion: Only when + condition + auxiliary + subject",
        "options": [
            {
                "id": 401,
                "option_text": "Only when I mature will I understand.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "Only when I mature I will understand.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "When I only mature will I understand.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "I will understand only when I mature.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 31
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Little did':",
        "correct_answer": "Little did we know what was coming.",
        "difficulty": "Medium",
        "explanation": "Inversion with 'Little did' emphasizes surprise (Đảo ngữ phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "Little did we know what was coming.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "Little we did know what was coming.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "We little did know what was coming.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "Little know we what was coming.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 31
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Not until':",
        "correct_answer": "Not until the end did I realize the truth.",
        "difficulty": "Medium",
        "explanation": "Inversion: Not until + time + auxiliary + subject",
        "options": [
            {
                "id": 621,
                "option_text": "Not until the end did I realize the truth.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "Not until the end I did realize the truth.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "Until not the end I realize the truth.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "I did not until the end realize the truth.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 31
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'So':",
        "correct_answer": "So determined was he that he succeeded.",
        "difficulty": "Medium",
        "explanation": "Inversion: So + adjective + auxiliary + subject + that",
        "options": [
            {
                "id": 631,
                "option_text": "So determined was he that he succeeded.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "So determined he was that he succeeded.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "He was so determined that he succeeded.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "So he was determined that he succeeded.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 31
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Rarely':",
        "correct_answer": "Rarely do such opportunities present themselves.",
        "difficulty": "Medium",
        "explanation": "Inversion: Rarely + auxiliary + subject",
        "options": [
            {
                "id": 641,
                "option_text": "Rarely do such opportunities present themselves.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "Rarely such opportunities do present themselves.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "Such opportunities rarely do present themselves.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "Rarely present themselves opportunities.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 31
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Under no circumstances':",
        "correct_answer": "Under no circumstances should you reveal the secret.",
        "difficulty": "Medium",
        "explanation": "Inversion: Under no circumstances + modal + subject",
        "options": [
            {
                "id": 651,
                "option_text": "Under no circumstances should you reveal the secret.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "Under no circumstances you should reveal the secret.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "You should under no circumstances reveal the secret.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "Under no circumstances reveal you the secret.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 31
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Were it not for':",
        "correct_answer": "Were it not for your support, I would fail.",
        "difficulty": "Medium",
        "explanation": "Inversion in subjunctive conditional",
        "options": [
            {
                "id": 661,
                "option_text": "Were it not for your support, I would fail.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "If it were not for your support, I would fail.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "Was it not for your support, I would fail.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "It were not for your support, I would fail.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 31
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Scarcely':",
        "correct_answer": "Scarcely had the game begun when rain stopped it.",
        "difficulty": "Medium",
        "explanation": "Inversion: Scarcely + auxiliary + subject + when",
        "options": [
            {
                "id": 671,
                "option_text": "Scarcely had the game begun when rain stopped it.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "Scarcely the game had begun when rain stopped it.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "The game scarcely had begun when rain stopped it.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "Scarcely begun the game when rain stopped it.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 31
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Not a single':",
        "correct_answer": "Not a single mistake did he make.",
        "difficulty": "Medium",
        "explanation": "Inversion with emphatic negative expression",
        "options": [
            {
                "id": 681,
                "option_text": "Not a single mistake did he make.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "Not a single mistake he did make.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "He did not a single mistake make.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "Not a single did he mistake make.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 31
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Such':",
        "correct_answer": "Such was the chaos that no one escaped.",
        "difficulty": "Medium",
        "explanation": "Inversion: Such + auxiliary + subject + that (narrative emphasis)",
        "options": [
            {
                "id": 691,
                "option_text": "Such was the chaos that no one escaped.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Such the chaos was that no one escaped.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "The chaos was such that no one escaped.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "Such chaos was that no one escaped.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 31
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'On no account':",
        "correct_answer": "On no account must you discuss this publicly.",
        "difficulty": "Medium",
        "explanation": "Inversion: On no account + modal + subject",
        "options": [
            {
                "id": 701,
                "option_text": "On no account must you discuss this publicly.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "On no account you must discuss this publicly.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "You must on no account discuss this publicly.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "On no account discuss you this publicly.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 31
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Should':",
        "correct_answer": "Should you require further assistance, call us.",
        "difficulty": "Hard",
        "explanation": "Formal conditional inversion (Đảo ngữ điều kiện nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "Should you require further assistance, call us.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "If should you require further assistance, call us.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "Should require you further assistance, call us.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "You should require further assistance, call us.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 31
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Had':",
        "correct_answer": "Had I arrived earlier, I would have seen her.",
        "difficulty": "Hard",
        "explanation": "Subjunctive conditional inversion for past",
        "options": [
            {
                "id": 821,
                "option_text": "Had I arrived earlier, I would have seen her.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "If I had arrived earlier, I would have seen her.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Had arrived I earlier, I would have seen her.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "I had arrived earlier, I would have seen her.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 31
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Were':",
        "correct_answer": "Were there a solution, we would find it.",
        "difficulty": "Hard",
        "explanation": "Subjunctive conditional with 'were' (existential)",
        "options": [
            {
                "id": 831,
                "option_text": "Were there a solution, we would find it.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "If were there a solution, we would find it.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "There were a solution, we would find it.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "Were a solution there, we would find it.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 31
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Never':",
        "correct_answer": "Never before have I encountered such complexity.",
        "difficulty": "Hard",
        "explanation": "Inversion: Never before + auxiliary + subject (emphatic negation)",
        "options": [
            {
                "id": 841,
                "option_text": "Never before have I encountered such complexity.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "Never before I have encountered such complexity.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "I have never before encountered such complexity.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "Never before encountered I such complexity.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 31
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'So...that':",
        "correct_answer": "So compelling was her argument that everyone agreed.",
        "difficulty": "Hard",
        "explanation": "Inversion for strong emphasis with consequence",
        "options": [
            {
                "id": 851,
                "option_text": "So compelling was her argument that everyone agreed.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "So compelling her argument was that everyone agreed.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "Her argument was so compelling that everyone agreed.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "So was compelling her argument that everyone agreed.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 31
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Only if':",
        "correct_answer": "Only if you practice diligently will you master the skill.",
        "difficulty": "Hard",
        "explanation": "Inversion: Only if + condition + auxiliary + subject",
        "options": [
            {
                "id": 861,
                "option_text": "Only if you practice diligently will you master the skill.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "Only if you practice diligently you will master the skill.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "If only you practice diligently will you master the skill.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "You will master the skill only if you practice diligently.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 31
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with double emphasis:",
        "correct_answer": "Not only had he lost his job, but also his confidence.",
        "difficulty": "Hard",
        "explanation": "Inversion with 'Not only...but also' (double inversion)",
        "options": [
            {
                "id": 871,
                "option_text": "Not only had he lost his job, but also his confidence.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Not only he had lost his job, but also his confidence.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "Not only lost he his job, but also his confidence.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "He had not only lost his job, but also his confidence.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 31
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Nowhere':",
        "correct_answer": "Nowhere in the world is such discrimination tolerated.",
        "difficulty": "Hard",
        "explanation": "Inversion: Nowhere + auxiliary + subject (passive voice possible)",
        "options": [
            {
                "id": 881,
                "option_text": "Nowhere in the world is such discrimination tolerated.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "Nowhere in the world such discrimination is tolerated.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "In the world nowhere is such discrimination tolerated.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "Such discrimination nowhere is tolerated in the world.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 31
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Not in a million years':",
        "correct_answer": "Not in a million years would I betray your trust.",
        "difficulty": "Hard",
        "explanation": "Inversion with emphatic negative time expression",
        "options": [
            {
                "id": 891,
                "option_text": "Not in a million years would I betray your trust.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "Not in a million years I would betray your trust.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "I would not in a million years betray your trust.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "In a million years not would I betray your trust.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 31
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Hardly...when':",
        "correct_answer": "Hardly had she finished speaking when controversy erupted.",
        "difficulty": "Hard",
        "explanation": "Inversion: Hardly + auxiliary + subject + when",
        "options": [
            {
                "id": 901,
                "option_text": "Hardly had she finished speaking when controversy erupted.",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Hardly she had finished speaking when controversy erupted.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "She had hardly finished speaking when controversy erupted.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Hardly finished had she speaking when controversy erupted.",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 31
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion for formal conditions:",
        "correct_answer": "Should you wish to complain, here is the procedure.",
        "difficulty": "Hard",
        "explanation": "Formal inversion for polite/official context",
        "options": [
            {
                "id": 911,
                "option_text": "Should you wish to complain, here is the procedure.",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "If should you wish to complain, here is the procedure.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "You should wish to complain, here is the procedure.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Should wish you to complain, here is the procedure.",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 31
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'As soon as':",
        "correct_answer": "As soon as the bell rang, out rushed the students.",
        "difficulty": "Hard",
        "explanation": "Optional inversion with 'As soon as' for narrative effect",
        "options": [
            {
                "id": 921,
                "option_text": "As soon as the bell rang, out rushed the students.",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "As soon as the bell rang, the students rushed out.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "As soon as the bell rang, rushed out the students.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "The bell rang as soon as, out rushed the students.",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 31
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with 'Much as':",
        "correct_answer": "Much as I would like to help, I cannot.",
        "difficulty": "Hard",
        "explanation": "Inversion with concessive clauses",
        "options": [
            {
                "id": 931,
                "option_text": "Much as I would like to help, I cannot.",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "Much I would like to help, I cannot.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "I would like to help much as, I cannot.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "As much I would like to help, I cannot.",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 31
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion in formal reports:",
        "correct_answer": "Never in history has such progress been made.",
        "difficulty": "Hard",
        "explanation": "Inversion in academic/formal writing with negative adverbials",
        "options": [
            {
                "id": 941,
                "option_text": "Never in history has such progress been made.",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "Never in history such progress has been made.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Such progress has never in history been made.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Never been made in history such progress.",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 31
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with consecutive result:",
        "correct_answer": "So severe was the winter that the rivers froze.",
        "difficulty": "Hard",
        "explanation": "Inversion: So + adjective + auxiliary + subject + that (result clause)",
        "options": [
            {
                "id": 951,
                "option_text": "So severe was the winter that the rivers froze.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "So severe the winter was that the rivers froze.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "The winter was so severe that the rivers froze.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "So the severe winter was that the rivers froze.",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 31
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with alternative condition:",
        "correct_answer": "Should you decide to stay, we will be delighted.",
        "difficulty": "Hard",
        "explanation": "Inversion as alternative to 'if' in formal writing",
        "options": [
            {
                "id": 961,
                "option_text": "Should you decide to stay, we will be delighted.",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "If should you decide to stay, we will be delighted.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "You should decide to stay, we will be delighted.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "Should decide you to stay, we will be delighted.",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 31
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion in comparison:",
        "correct_answer": "No sooner did one problem solve than another arose.",
        "difficulty": "Hard",
        "explanation": "Inversion: No sooner + auxiliary + subject + than (sequence emphasis)",
        "options": [
            {
                "id": 971,
                "option_text": "No sooner did one problem solve than another arose.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "One problem no sooner did solve than another arose.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "One problem solved no sooner than another arose.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "No sooner one problem did solve than another arose.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 31
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with passive transformation:",
        "correct_answer": "Rarely has such courage been demonstrated.",
        "difficulty": "Hard",
        "explanation": "Inversion with passive voice and negative adverbial",
        "options": [
            {
                "id": 981,
                "option_text": "Rarely has such courage been demonstrated.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "Rarely such courage has been demonstrated.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "Such courage rarely has been demonstrated.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "Rarely been demonstrated such courage has.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 31
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with modal transformation:",
        "correct_answer": "Under any other circumstances would this be unacceptable.",
        "difficulty": "Hard",
        "explanation": "Inversion with modal auxiliary in subjunctive",
        "options": [
            {
                "id": 991,
                "option_text": "Under any other circumstances would this be unacceptable.",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Under any other circumstances this would be unacceptable.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "This would under any circumstances be unacceptable.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "Would under any other circumstances this be unacceptable.",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 31
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Select the correct inversion with literary emphasis:",
        "correct_answer": "Up the mountain strode the hikers with determination.",
        "difficulty": "Hard",
        "explanation": "Optional inversion with adverbial of place for narrative effect",
        "options": [
            {
                "id": 1001,
                "option_text": "Up the mountain strode the hikers with determination.",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "The hikers strode up the mountain with determination.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Up the mountain the hikers strode with determination.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Strode up the mountain the hikers with determination.",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 31
    }
];

export default questions;