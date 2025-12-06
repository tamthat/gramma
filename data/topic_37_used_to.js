const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "He ___ live in Paris when he was young.",
        "correct_answer": "used to",
        "suggest_answer": "used to",
        "explanation": "Used to + V (thói quen trong quá khứ - Quen Thuộc & Thói Quen Trong Quá Khứ)",
        "difficulty": "Easy",
        "topic_id": 37
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "I am used to ___ early in the morning.",
        "correct_answer": "waking",
        "suggest_answer": "waking",
        "explanation": "Be used to + V-ing (đã quen với thói quen)",
        "difficulty": "Easy",
        "topic_id": 37
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "Every summer, we ___ go to the beach.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Would + V (thói quen lặp đi lặp lại trong quá khứ)",
        "difficulty": "Easy",
        "topic_id": 37
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "She ___ to hot weather, so the climate here doesn't bother her.",
        "correct_answer": "is used",
        "suggest_answer": "is used",
        "explanation": "Be used to (đã quen với điều gì)",
        "difficulty": "Easy",
        "topic_id": 37
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "My grandfather ___ tell stories before bedtime.",
        "correct_answer": "used to",
        "suggest_answer": "used to",
        "explanation": "Used to + V (thói quen trong quá khứ không còn)",
        "difficulty": "Easy",
        "topic_id": 37
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "When I was a student, I ___ study late at night.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Would + V (thói quen/hành động lặp lại trong quá khứ)",
        "difficulty": "Easy",
        "topic_id": 37
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "You'll get ___ to the noise eventually.",
        "correct_answer": "used",
        "suggest_answer": "used",
        "explanation": "Get used to (trở nên quen với)",
        "difficulty": "Easy",
        "topic_id": 37
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "They ___ drink coffee every morning, but now they prefer tea.",
        "correct_answer": "used to",
        "suggest_answer": "used to",
        "explanation": "Used to + V (thói quen cũ không còn)",
        "difficulty": "Easy",
        "topic_id": 37
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "I'm not used to ___ so much work.",
        "correct_answer": "having",
        "suggest_answer": "having",
        "explanation": "Be used to + V-ing (chưa quen với)",
        "difficulty": "Easy",
        "topic_id": 37
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "As a child, I ___ play in the park every afternoon.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Would + V (thói quen lặp đi lặp lại trong quá khứ)",
        "difficulty": "Easy",
        "topic_id": 37
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "Before he retired, he ___ work for the same company for 30 years.",
        "correct_answer": "used to",
        "suggest_answer": "used to",
        "explanation": "Used to + V (thói quen/trạng thái trong quá khứ lâu dài - Quen Thuộc & Thói Quen nâng cao)",
        "difficulty": "Medium",
        "topic_id": 37
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "She's getting ___ to the new job gradually.",
        "correct_answer": "used",
        "suggest_answer": "used",
        "explanation": "Get used to (từ từ thích ứng)",
        "difficulty": "Medium",
        "topic_id": 37
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "In the old days, people ___ spend hours together without mobile phones.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Would + V (thói quen tổng quát trong quá khứ)",
        "difficulty": "Medium",
        "topic_id": 37
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "I am now used to ___ on a small budget.",
        "correct_answer": "living",
        "suggest_answer": "living",
        "explanation": "Be used to + V-ing (đã quen với sinh sống)",
        "difficulty": "Medium",
        "topic_id": 37
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "He never ___ eat vegetables, but doctors told him to change his diet.",
        "correct_answer": "used to",
        "suggest_answer": "used to",
        "explanation": "Used to + V (phủ định - thói quen cũ)",
        "difficulty": "Medium",
        "topic_id": 37
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "Every evening, we ___ gather around the fireplace.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Would + V (hành động lặp đi lặp lại có tính chất)",
        "difficulty": "Medium",
        "topic_id": 37
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "You won't be used to ___ in such a crowded city.",
        "correct_answer": "living",
        "suggest_answer": "living",
        "explanation": "Be used to + V-ing (sự thích ứng)",
        "difficulty": "Medium",
        "topic_id": 37
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "My mother ___ make homemade bread every week.",
        "correct_answer": "used to",
        "suggest_answer": "used to",
        "explanation": "Used to + V (thói quen/hoạt động thường xuyên trong quá khứ)",
        "difficulty": "Medium",
        "topic_id": 37
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "Athletes are used to ___ under pressure.",
        "correct_answer": "performing",
        "suggest_answer": "performing",
        "explanation": "Be used to + V-ing (đã quen với tình huống)",
        "difficulty": "Medium",
        "topic_id": 37
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "In childhood, I ___ visit my grandmother every weekend.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Would + V (thói quen thời thơ ấu)",
        "difficulty": "Medium",
        "topic_id": 37
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "She didn't ___ to public speaking, so she was nervous at first.",
        "correct_answer": "use to",
        "suggest_answer": "use to",
        "explanation": "Used to (phủ định didn't use to) - Quen Thuộc & Thói Quen nâng cao",
        "difficulty": "Hard",
        "topic_id": 37
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "By the time she retired, she had become used to ___ in high-pressure situations.",
        "correct_answer": "working",
        "suggest_answer": "working",
        "explanation": "Be used to + V-ing (đã quen với qua thời gian)",
        "difficulty": "Hard",
        "topic_id": 37
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "When I was younger, I ___ stay up all night reading novels.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Would + V (thói quen lặp đi lặp lại với cảm xúc)",
        "difficulty": "Hard",
        "topic_id": 37
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "He ___ live like a king before he lost his fortune.",
        "correct_answer": "used to",
        "suggest_answer": "used to",
        "explanation": "Used to + V (trạng thái/cách sống trong quá khứ)",
        "difficulty": "Hard",
        "topic_id": 37
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "I've gotten used to ___ feedback without taking it personally.",
        "correct_answer": "receiving",
        "suggest_answer": "receiving",
        "explanation": "Get used to + V-ing (quá trình thích ứng hoàn tất)",
        "difficulty": "Hard",
        "topic_id": 37
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "He rarely ___ complain, but lately he's been frustrated.",
        "correct_answer": "used to",
        "suggest_answer": "used to",
        "explanation": "Used to + V (phủ định rarely - hiếm khi làm gì)",
        "difficulty": "Hard",
        "topic_id": 37
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "During summers at the cottage, we ___ wake early to see the sunrise.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Would + V (thói quen lặp đi lặp lại trong bối cảnh cụ thể)",
        "difficulty": "Hard",
        "topic_id": 37
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "She needs time to get ___ to the idea of moving abroad.",
        "correct_answer": "used",
        "suggest_answer": "used",
        "explanation": "Get used to (quá trình thích ứng)",
        "difficulty": "Hard",
        "topic_id": 37
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "Before modern technology, people ___ communicate through letters.",
        "correct_answer": "used to",
        "suggest_answer": "used to",
        "explanation": "Used to + V (phương pháp/cách làm trong quá khứ)",
        "difficulty": "Hard",
        "topic_id": 37
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "Dancers are used to ___ hours of practice every day.",
        "correct_answer": "enduring",
        "suggest_answer": "enduring",
        "explanation": "Be used to + V-ing (thói quen/tình trạng hiện tại)",
        "difficulty": "Hard",
        "topic_id": 37
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows 'used to'?",
        "correct_answer": "I used to live in London = past habit/state (no longer true)",
        "difficulty": "Easy",
        "explanation": "Used to + V (thói quen/trạng thái trong quá khứ - Quen Thuộc & Thói Quen)",
        "options": [
            {
                "id": 311,
                "option_text": "I used to live in London = past habit/state (no longer true)",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "I used to live in London = I am living there now",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "I used to live in London = I plan to live there",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "I used to live in London = I am used to the place",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 37
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows 'would'?",
        "correct_answer": "Every summer, we would visit the farm = repeated past habit",
        "difficulty": "Easy",
        "explanation": "Would + V (hành động lặp đi lặp lại trong quá khứ)",
        "options": [
            {
                "id": 321,
                "option_text": "Every summer, we would visit the farm = repeated past habit",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "Every summer, we would visit the farm = we will definitely go",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "Every summer, we would visit the farm = we refuse to go",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "Every summer, we would visit the farm = we are accustomed to",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 37
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows 'be used to'?",
        "correct_answer": "She is used to working long hours = this is normal for her now",
        "difficulty": "Easy",
        "explanation": "Be used to + V-ing (đã quen với)",
        "options": [
            {
                "id": 331,
                "option_text": "She is used to working long hours = this is normal for her now",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "She is used to working long hours = she used to work",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "She is used to working long hours = she will work",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "She is used to working long hours = she wants to work",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 37
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows 'get used to'?",
        "correct_answer": "He is getting used to the new city = gradually becoming accustomed",
        "difficulty": "Easy",
        "explanation": "Get used to (trở nên quen với)",
        "options": [
            {
                "id": 341,
                "option_text": "He is getting used to the new city = gradually becoming accustomed",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "He is getting used to the new city = he used to live there",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "He is getting used to the new city = he will leave soon",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "He is getting used to the new city = he refuses to stay",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 37
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "They used to visit us every month, but they don't anymore.",
        "difficulty": "Easy",
        "explanation": "Used to biểu thị hành động/trạng thái trong quá khứ không còn",
        "options": [
            {
                "id": 351,
                "option_text": "They used to visit us every month, but they don't anymore.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "They would visit us every month, but they don't anymore.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "They are used to visiting us every month, but they don't anymore.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "They are getting used to visiting us every month, but they don't anymore.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 37
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I'm used to getting up early because I work on a farm.",
        "difficulty": "Easy",
        "explanation": "Be used to biểu thị tình trạng quen thuộc hiện tại",
        "options": [
            {
                "id": 361,
                "option_text": "I'm used to getting up early because I work on a farm.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "I used to getting up early because I work on a farm.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "I would get up early because I work on a farm.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "I'm getting used getting up early because I work on a farm.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 37
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "She gradually got used to the pace of life in the big city.",
        "difficulty": "Easy",
        "explanation": "Get used to biểu thị quá trình thích ứng",
        "options": [
            {
                "id": 371,
                "option_text": "She gradually got used to the pace of life in the big city.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "She gradually used to the pace of life in the big city.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "She gradually was used to the pace of life in the big city.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "She gradually would the pace of life in the big city.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 37
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "When he was young, he would play football every afternoon.",
        "difficulty": "Easy",
        "explanation": "Would biểu thị thói quen lặp đi lặp lại",
        "options": [
            {
                "id": 381,
                "option_text": "When he was young, he would play football every afternoon.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "When he was young, he used to play football every afternoon.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "When he was young, he is used to playing football every afternoon.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "When he was young, he gets used to playing football every afternoon.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 37
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "They didn't use to eat fast food, but now they do.",
        "difficulty": "Easy",
        "explanation": "Phủ định: didn't use to (không từng)",
        "options": [
            {
                "id": 391,
                "option_text": "They didn't use to eat fast food, but now they do.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "They didn't used to eat fast food, but now they do.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "They wouldn't eat fast food, but now they do.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "They aren't used to eating fast food, but now they do.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 37
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "After years of experience, he is used to handling difficult clients.",
        "difficulty": "Easy",
        "explanation": "Be used to biểu thị trạng thái quen thuộc",
        "options": [
            {
                "id": 401,
                "option_text": "After years of experience, he is used to handling difficult clients.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "After years of experience, he used to handle difficult clients.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "After years of experience, he would handle difficult clients.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "After years of experience, he gets used to handle difficult clients.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 37
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I am used to V-ing; I used to V; I would V",
        "difficulty": "Medium",
        "explanation": "Ba cấu trúc khác nhau (Quen Thuộc & Thói Quen phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "I am used to V-ing; I used to V; I would V",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "I am used to V; I used to V-ing; I would V-ing",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "I am used V; I used V-ing; I would V-ing",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "All three follow the same structure",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 37
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct sentence:",
        "correct_answer": "Before I moved, I used to see my friend every day.",
        "difficulty": "Medium",
        "explanation": "Used to biểu thị hành động lặp đi lặp lại trong quá khứ",
        "options": [
            {
                "id": 621,
                "option_text": "Before I moved, I used to see my friend every day.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "Before I moved, I would see my friend every day.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "Before I moved, I am used to seeing my friend every day.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "Before I moved, I get used to see my friend every day.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 37
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct sentence:",
        "correct_answer": "He's been in the job for years and is now used to the routine.",
        "difficulty": "Medium",
        "explanation": "Be used to biểu thị hiện trạng quen thuộc",
        "options": [
            {
                "id": 631,
                "option_text": "He's been in the job for years and is now used to the routine.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "He's been in the job for years and used to the routine.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "He's been in the job for years and gets used to the routine.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "He's been in the job for years and would be used to the routine.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 37
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct sentence:",
        "correct_answer": "As a teenager, she would spend hours practicing the piano.",
        "difficulty": "Medium",
        "explanation": "Would biểu thị thói quen/hành động lặp đi lặp lại",
        "options": [
            {
                "id": 641,
                "option_text": "As a teenager, she would spend hours practicing the piano.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "As a teenager, she used to spend hours practicing the piano.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "As a teenager, she is used to spend hours practicing the piano.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "As a teenager, she gets used to spend hours practicing the piano.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 37
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct sentence:",
        "correct_answer": "I'm not used to eating such spicy food, so it's difficult for me.",
        "difficulty": "Medium",
        "explanation": "Be used to + V-ing biểu thị hiện tại chưa quen",
        "options": [
            {
                "id": 651,
                "option_text": "I'm not used to eating such spicy food, so it's difficult for me.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "I didn't use to eat such spicy food, so it's difficult for me.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "I wouldn't eat such spicy food, so it's difficult for me.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "I'm getting used eating such spicy food, so it's difficult for me.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 37
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct sentence:",
        "correct_answer": "She is gradually getting used to the cold weather of the north.",
        "difficulty": "Medium",
        "explanation": "Get used to biểu thị quá trình thích ứng dần dần",
        "options": [
            {
                "id": 661,
                "option_text": "She is gradually getting used to the cold weather of the north.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "She is gradually used to the cold weather of the north.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "She gradually used to the cold weather of the north.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "She would gradually used to the cold weather of the north.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 37
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct sentence:",
        "correct_answer": "My parents used to own a restaurant downtown, but they sold it.",
        "difficulty": "Medium",
        "explanation": "Used to biểu thị hành động/trạng thái trong quá khứ không còn",
        "options": [
            {
                "id": 671,
                "option_text": "My parents used to own a restaurant downtown, but they sold it.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "My parents would own a restaurant downtown, but they sold it.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "My parents are used to owning a restaurant downtown, but they sold it.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "My parents get used to own a restaurant downtown, but they sold it.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 37
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct sentence:",
        "correct_answer": "He's a surgeon and is used to working long hours in the operating room.",
        "difficulty": "Medium",
        "explanation": "Be used to biểu thị tình trạng quen thuộc hiện tại",
        "options": [
            {
                "id": 681,
                "option_text": "He's a surgeon and is used to working long hours in the operating room.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "He's a surgeon and used to working long hours in the operating room.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "He's a surgeon and would work long hours in the operating room.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "He's a surgeon and gets used to work long hours in the operating room.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 37
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct sentence:",
        "correct_answer": "During his school days, he would meet his friends at the café every Friday.",
        "difficulty": "Medium",
        "explanation": "Would biểu thị thói quen/quy luật lặp đi lặp lại",
        "options": [
            {
                "id": 691,
                "option_text": "During his school days, he would meet his friends at the café every Friday.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "During his school days, he used to meet his friends at the café every Friday.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "During his school days, he is used to meeting his friends at the café every Friday.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "During his school days, he gets used to meet his friends at the café every Friday.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 37
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct sentence:",
        "correct_answer": "Young athletes need time to get used to competing at this level.",
        "difficulty": "Medium",
        "explanation": "Get used to biểu thị quá trình học hỏi/thích ứng",
        "options": [
            {
                "id": 701,
                "option_text": "Young athletes need time to get used to competing at this level.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "Young athletes need time to used to competing at this level.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "Young athletes need time to be used competing at this level.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "Young athletes need time would compete at this level.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 37
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Select the most accurate distinction:",
        "correct_answer": "Used to = past (changed); Be used to = present (accustomed); Would = past repeated",
        "difficulty": "Hard",
        "explanation": "Phân biệt ba cấu trúc (Quen Thuộc & Thói Quen nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "Used to = past (changed); Be used to = present (accustomed); Would = past repeated",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "Used to = present; Be used to = past; Would = future",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "All three mean the same thing",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "Used to and Be used to are identical",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 37
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which distinguishes 'be used to' correctly?",
        "correct_answer": "Be used to + V-ing = accustomed to a habit NOW",
        "difficulty": "Hard",
        "explanation": "Be used to biểu thị hiện tại",
        "options": [
            {
                "id": 821,
                "option_text": "Be used to + V-ing = accustomed to a habit NOW",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Be used to + V-ing = accustomed to a past habit",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Be used to + V-ing = planning to do something",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "Be used to + V = accustomed to a habit",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 37
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which distinguishes 'get used to' correctly?",
        "correct_answer": "Get used to + V-ing = becoming accustomed gradually (process)",
        "difficulty": "Hard",
        "explanation": "Get used to biểu thị quá trình",
        "options": [
            {
                "id": 831,
                "option_text": "Get used to + V-ing = becoming accustomed gradually (process)",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "Get used to + V-ing = already accustomed (state)",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "Get used to + V = becoming accustomed",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "Get used to + infinitive = past habit",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 37
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Select the most accurate distinction:",
        "correct_answer": "He used to smoke = past (no longer does); He is used to smoking = now (still does)",
        "difficulty": "Hard",
        "explanation": "Used to vs Be used to - sự khác biệt rõ ràng",
        "options": [
            {
                "id": 841,
                "option_text": "He used to smoke = past (no longer does); He is used to smoking = now (still does)",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "He used to smoke = now; He is used to smoking = past",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "Both mean the same thing",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "Neither has clear distinction",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 37
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Select the correct understanding:",
        "correct_answer": "Would cannot be used to express states/conditions (only used to can)",
        "difficulty": "Hard",
        "explanation": "Would không dùng cho trạng thái; Used to có thể",
        "options": [
            {
                "id": 851,
                "option_text": "Would cannot be used to express states/conditions (only used to can)",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "Would can express states/conditions like used to",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "Both would and used to have identical usage",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "Used to cannot express states/conditions",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 37
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which sentence demonstrates the correct usage?",
        "correct_answer": "He used to be shy, but now he's confident = state change",
        "difficulty": "Hard",
        "explanation": "Used to có thể biểu thị trạng thái thay đổi",
        "options": [
            {
                "id": 861,
                "option_text": "He used to be shy, but now he's confident = state change",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "He would be shy, but now he's confident = state change",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "He is used to being shy, but now he's confident = state change",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "He gets used to shy, but now he's confident = state change",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 37
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Select the most specific meaning:",
        "correct_answer": "Be used to emphasizes a state of being comfortable or familiar NOW",
        "difficulty": "Hard",
        "explanation": "Be used to - hiện tại, trạng thái quen thuộc",
        "options": [
            {
                "id": 871,
                "option_text": "Be used to emphasizes a state of being comfortable or familiar NOW",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Be used to emphasizes a past habit no longer done",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "Be used to emphasizes repeated past actions",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "Be used to emphasizes future plans",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 37
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Select the most specific meaning:",
        "correct_answer": "Get used to emphasizes the PROCESS of becoming accustomed gradually",
        "difficulty": "Hard",
        "explanation": "Get used to - quá trình thích ứng",
        "options": [
            {
                "id": 881,
                "option_text": "Get used to emphasizes the PROCESS of becoming accustomed gradually",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "Get used to emphasizes already being accustomed",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "Get used to emphasizes past habit no longer done",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "Get used to emphasizes repeated past actions",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 37
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows negation forms?",
        "correct_answer": "Didn't use to / Wouldn't / Am not used to",
        "difficulty": "Hard",
        "explanation": "Phủ định của ba cấu trúc",
        "options": [
            {
                "id": 891,
                "option_text": "Didn't use to / Wouldn't / Am not used to",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "Wasn't used to / Didn't would / Am used to not",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "Haven't used to / Would not / Am not using",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "All negations follow the same pattern",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 37
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows question forms?",
        "correct_answer": "Did he use to? / Would he? / Is he used to?",
        "difficulty": "Hard",
        "explanation": "Câu hỏi của ba cấu trúc",
        "options": [
            {
                "id": 901,
                "option_text": "Did he use to? / Would he? / Is he used to?",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Used to he? / He would? / Used he to?",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Does he use to? / Will he? / Has he used to?",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "All questions follow the same pattern",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 37
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which is NOT a characteristic of 'would'?",
        "correct_answer": "Can express permanent states that no longer exist",
        "difficulty": "Hard",
        "explanation": "Would không thể dùng cho trạng thái bất biến",
        "options": [
            {
                "id": 911,
                "option_text": "Can express permanent states that no longer exist",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "Expresses repeated past actions",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Requires a time context (when, during, etc.)",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Used only in past time expressions",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 37
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which CANNOT follow 'be used to'?",
        "correct_answer": "Bare infinitive (must use gerund)",
        "difficulty": "Hard",
        "explanation": "Be used to + V-ing (không phải bare infinitive)",
        "options": [
            {
                "id": 921,
                "option_text": "Bare infinitive (must use gerund)",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "Gerund form",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "Noun",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Pronoun",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 37
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which shows the most common context for 'would'?",
        "correct_answer": "Nostalgic memories of childhood habits (Every summer, I would...)",
        "difficulty": "Hard",
        "explanation": "Would dùng trong bối cảnh hoài niệm",
        "options": [
            {
                "id": 931,
                "option_text": "Nostalgic memories of childhood habits (Every summer, I would...)",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "Expressing permanent past states",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "Expressing refusal in the past",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "Expressing past desire",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 37
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which sentence could NOT be replaced with 'would'?",
        "correct_answer": "She used to be a teacher = expressing a former state/profession",
        "difficulty": "Hard",
        "explanation": "Used to có thể biểu thị trạng thái; Would không",
        "options": [
            {
                "id": 941,
                "option_text": "She used to be a teacher = expressing a former state/profession",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "She used to visit every Friday = expressing repeated past action",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "She used to swim in summer = expressing seasonal habit",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "She used to wake early = expressing past routine",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 37
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which best explains the progression?",
        "correct_answer": "Used to (established)/Would (repeated)/Be used to (current state)/Get used to (ongoing process)",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - tiến triển thời gian",
        "options": [
            {
                "id": 951,
                "option_text": "Used to (established)/Would (repeated)/Be used to (current state)/Get used to (ongoing process)",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "All follow the same temporal reference",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "Would is most common for all contexts",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "Get used to is the same as be used to",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 37
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which pair can be directly swapped?",
        "correct_answer": "Be used to and get used to can both use present/future (am/was/will be used to; getting/got/will get used to)",
        "difficulty": "Hard",
        "explanation": "Be used to vs Get used to có thể thay đổi thì",
        "options": [
            {
                "id": 961,
                "option_text": "Be used to and get used to can both use present/future (am/was/will be used to; getting/got/will get used to)",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "Used to and would are completely interchangeable",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "All four structures use the same verb form",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "None can be directly swapped",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 37
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows the verb form after 'be used to'?",
        "correct_answer": "Be used to + GERUND (V-ing): accustomed to doing something",
        "difficulty": "Hard",
        "explanation": "Be used to phải theo sau bằng V-ing",
        "options": [
            {
                "id": 971,
                "option_text": "Be used to + GERUND (V-ing): accustomed to doing something",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "Be used to + INFINITIVE: accustomed to do something",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "Be used to + BARE VERB: accustomed to do",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "Be used to + PAST TENSE: accustomed to did",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 37
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows the verb form after 'used to'?",
        "correct_answer": "Used to + BASE FORM (V): did something habitually in the past",
        "difficulty": "Hard",
        "explanation": "Used to phải theo sau bằng base form",
        "options": [
            {
                "id": 981,
                "option_text": "Used to + BASE FORM (V): did something habitually in the past",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "Used to + GERUND: did something habitually",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "Used to + INFINITIVE: to do something",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "Used to + PAST TENSE: did something",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 37
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows the verb form after 'would'?",
        "correct_answer": "Would + BASE FORM (V): repeatedly did something in the past",
        "difficulty": "Hard",
        "explanation": "Would phải theo sau bằng base form",
        "options": [
            {
                "id": 991,
                "option_text": "Would + BASE FORM (V): repeatedly did something in the past",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Would + GERUND: repeatedly doing",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Would + INFINITIVE: would to do",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "Would + PAST TENSE: would did",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 37
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "All four structures address past/present habits but with different focuses and structures",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Quen Thuộc & Thói Quen Trong Quá Khứ",
        "options": [
            {
                "id": 1001,
                "option_text": "All four structures address past/present habits but with different focuses and structures",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "All four structures mean exactly the same thing",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Only used to and would are important; be/get used to are informal",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "These structures are rarely used in modern English",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 37
    }
];

export default questions;