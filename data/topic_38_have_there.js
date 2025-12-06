const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "I ___ a new car.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have sở hữu (Có & Tồn Tại)",
        "difficulty": "Easy",
        "topic_id": 38
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "He ___ got a sister.",
        "correct_answer": "has",
        "suggest_answer": "has",
        "explanation": "Have got = sở hữu (thay thế Have)",
        "difficulty": "Easy",
        "topic_id": 38
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "___ a table in the kitchen.",
        "correct_answer": "There is",
        "suggest_answer": "There is",
        "explanation": "There is/are - tồn tại (There is - singular)",
        "difficulty": "Easy",
        "topic_id": 38
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "___ many books on the shelf.",
        "correct_answer": "There are",
        "suggest_answer": "There are",
        "explanation": "There are - tồn tại (plural)",
        "difficulty": "Easy",
        "topic_id": 38
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "She ___ two dogs at home.",
        "correct_answer": "has",
        "suggest_answer": "has",
        "explanation": "Have sở hữu (thứ ba số ít)",
        "difficulty": "Easy",
        "topic_id": 38
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "We ___ got a big house.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have got - sở hữu (We have)",
        "difficulty": "Easy",
        "topic_id": 38
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "___ any students in the classroom?",
        "correct_answer": "Are there",
        "suggest_answer": "Are there",
        "explanation": "There are - câu hỏi (Có tồn tại)",
        "difficulty": "Easy",
        "topic_id": 38
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "Do you ___ a pen?",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have sở hữu (câu hỏi)",
        "difficulty": "Easy",
        "topic_id": 38
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "___ a park near your house?",
        "correct_answer": "Is there",
        "suggest_answer": "Is there",
        "explanation": "There is - câu hỏi (singular)",
        "difficulty": "Easy",
        "topic_id": 38
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "They ___ got three children.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have got - sở hữu (plural)",
        "difficulty": "Easy",
        "topic_id": 38
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "She doesn't ___ any free time.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have sở hữu - phủ định (Có & Tồn Tại phức tạp)",
        "difficulty": "Medium",
        "topic_id": 38
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "He hasn't ___ a car.",
        "correct_answer": "got",
        "suggest_answer": "got",
        "explanation": "Have got - phủ định (hasn't got)",
        "difficulty": "Medium",
        "topic_id": 38
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "___ a problem with the computer?",
        "correct_answer": "Is there",
        "suggest_answer": "Is there",
        "explanation": "There is - câu hỏi về sự tồn tại",
        "difficulty": "Medium",
        "topic_id": 38
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "I ___ five brothers and sisters.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have sở hữu (số nhiều)",
        "difficulty": "Medium",
        "topic_id": 38
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "___ a restaurant in this town.",
        "correct_answer": "There isn't",
        "suggest_answer": "There isn't",
        "explanation": "There isn't - phủ định singular",
        "difficulty": "Medium",
        "topic_id": 38
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "Do they ___ any experience?",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have sở hữu - câu hỏi (plural)",
        "difficulty": "Medium",
        "topic_id": 38
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "___ ten people at the meeting last night.",
        "correct_answer": "There were",
        "suggest_answer": "There were",
        "explanation": "There were - quá khứ (plural)",
        "difficulty": "Medium",
        "topic_id": 38
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "She ___ got a lot of responsibilities.",
        "correct_answer": "has",
        "suggest_answer": "has",
        "explanation": "Have got - sở hữu (thứ ba số ít)",
        "difficulty": "Medium",
        "topic_id": 38
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "___ any coffee left in the pot?",
        "correct_answer": "Is there",
        "suggest_answer": "Is there",
        "explanation": "There is - câu hỏi về sự tồn tại",
        "difficulty": "Medium",
        "topic_id": 38
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "I don't ___ much money in my wallet.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have - phủ định",
        "difficulty": "Medium",
        "topic_id": 38
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "___ no doubt that she will succeed.",
        "correct_answer": "There is",
        "suggest_answer": "There is",
        "explanation": "There is - cấu trúc formal (Có & Tồn Tại nâng cao)",
        "difficulty": "Hard",
        "topic_id": 38
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "She hasn't ___ any contact with her family for years.",
        "correct_answer": "got",
        "suggest_answer": "got",
        "explanation": "Have got - phủ định quá khứ",
        "difficulty": "Hard",
        "topic_id": 38
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "___ been any significant changes recently?",
        "correct_answer": "Have there",
        "suggest_answer": "Have there",
        "explanation": "There + Have (perfect) - câu hỏi",
        "difficulty": "Hard",
        "topic_id": 38
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "They ___ got a lot to do before the deadline.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have got - plural",
        "difficulty": "Hard",
        "topic_id": 38
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "___ been some issues with the project.",
        "correct_answer": "There have",
        "suggest_answer": "There have",
        "explanation": "There have - present perfect (plural)",
        "difficulty": "Hard",
        "topic_id": 38
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "We ___ got everything we need for the trip.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have got - sở hữu",
        "difficulty": "Hard",
        "topic_id": 38
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "___ going to ___ a meeting tomorrow.",
        "correct_answer": "There is / be",
        "suggest_answer": "There is / be",
        "explanation": "There is going to be - tương lai",
        "difficulty": "Hard",
        "topic_id": 38
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "Do you ___ any allergies?",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have - câu hỏi",
        "difficulty": "Hard",
        "topic_id": 38
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "___ a strong possibility that it will rain.",
        "correct_answer": "There is",
        "suggest_answer": "There is",
        "explanation": "There is - tồn tại (khả năng)",
        "difficulty": "Hard",
        "topic_id": 38
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "I ___ got a feeling something is wrong.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have got - cảm giác (idiom)",
        "difficulty": "Hard",
        "topic_id": 38
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'have'?",
        "correct_answer": "I have a book = I own a book (possession)",
        "difficulty": "Easy",
        "explanation": "Have - sở hữu (Có & Tồn Tại)",
        "options": [
            {
                "id": 311,
                "option_text": "I have a book = I own a book (possession)",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "I have a book = There is a book (existence)",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "I have a book = I am reading a book",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "I have a book = I will get a book",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 38
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'have got'?",
        "correct_answer": "He has got a car = He owns a car (same as have)",
        "difficulty": "Easy",
        "explanation": "Have got - thay thế Have (sở hữu)",
        "options": [
            {
                "id": 321,
                "option_text": "He has got a car = He owns a car (same as have)",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "He has got a car = He is getting a car",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "He has got a car = He received a car",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "He has got a car = There is a car",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 38
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'there is'?",
        "correct_answer": "There is a cat in the room = existence of something",
        "difficulty": "Easy",
        "explanation": "There is - tồn tại (singular)",
        "options": [
            {
                "id": 331,
                "option_text": "There is a cat in the room = existence of something",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "There is a cat in the room = possession",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "There is a cat in the room = location description only",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "There is a cat in the room = I own a cat",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 38
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'there are'?",
        "correct_answer": "There are five cats in the room = plural existence",
        "difficulty": "Easy",
        "explanation": "There are - tồn tại (plural)",
        "options": [
            {
                "id": 341,
                "option_text": "There are five cats in the room = plural existence",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "There are five cats in the room = I own five cats",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "There are five cats in the room = the cats are sitting",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "There are five cats in the room = five cats have something",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 38
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I have a dog and there is a cat outside.",
        "difficulty": "Easy",
        "explanation": "Have (sở hữu) vs There is (tồn tại)",
        "options": [
            {
                "id": 351,
                "option_text": "I have a dog and there is a cat outside.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "There is a dog and I have a cat outside.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "I am a dog and there are a cat outside.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "I exist a dog and there have a cat outside.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 38
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "She has got a new phone, but there is no internet.",
        "difficulty": "Easy",
        "explanation": "Have got vs There is",
        "options": [
            {
                "id": 361,
                "option_text": "She has got a new phone, but there is no internet.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "There has got a new phone, but she is no internet.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "She is got a new phone, but there have no internet.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "There have got a new phone, but she is no internet.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 38
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct question:",
        "correct_answer": "Do you have a car? / Is there a parking lot?",
        "difficulty": "Easy",
        "explanation": "Câu hỏi với Have vs There is",
        "options": [
            {
                "id": 371,
                "option_text": "Do you have a car? / Is there a parking lot?",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "Have you a car? / There is a parking lot?",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "Are you have a car? / Does there a parking lot?",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "Do you got a car? / Is there a parking lot?",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 38
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct negation:",
        "correct_answer": "I don't have money / There isn't time",
        "difficulty": "Easy",
        "explanation": "Phủ định Have vs There is",
        "options": [
            {
                "id": 381,
                "option_text": "I don't have money / There isn't time",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "I haven't money / There isn't is time",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "I not have money / Time isn't there",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "Not I have money / Isn't there time",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 38
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct statement:",
        "correct_answer": "He hasn't got any brothers / There are no chairs",
        "difficulty": "Easy",
        "explanation": "Phủ định Have got vs There are",
        "options": [
            {
                "id": 391,
                "option_text": "He hasn't got any brothers / There are no chairs",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "He didn't got any brothers / There is no chairs",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "He not got any brothers / Chairs aren't there",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "He has no got brothers / There aren't any no chairs",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 38
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct statement:",
        "correct_answer": "They have a problem / There is a solution",
        "difficulty": "Easy",
        "explanation": "Have vs There is (khác biệt cơ bản)",
        "options": [
            {
                "id": 401,
                "option_text": "They have a problem / There is a solution",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "There have a problem / They is a solution",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "They is a problem / There have a solution",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "There have got a problem / They are a solution",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 38
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Have I got? / Is there a problem?",
        "difficulty": "Medium",
        "explanation": "Câu hỏi Have got vs There is (Có & Tồn Tại phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "Have I got? / Is there a problem?",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "I have got? / There is a problem?",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Got I have? / Is a problem there?",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "Have got I? / There is problem?",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 38
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "She has got two children and there is one more on the way.",
        "difficulty": "Medium",
        "explanation": "Have got vs There is (kết hợp)",
        "options": [
            {
                "id": 621,
                "option_text": "She has got two children and there is one more on the way.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "There has got two children and she is one more on the way.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "She is two children and there got one more on the way.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "She have got two children and there are one more on the way.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 38
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Have you got a job? / Is there any work available?",
        "difficulty": "Medium",
        "explanation": "Câu hỏi Have got vs There is",
        "options": [
            {
                "id": 631,
                "option_text": "Have you got a job? / Is there any work available?",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "You have got a job? / There is any work available?",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "Got you have a job? / Is there any work available?",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "Have you got a job? / Is any work there available?",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 38
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "They don't have any money and there are no jobs.",
        "difficulty": "Medium",
        "explanation": "Phủ định Have vs There are",
        "options": [
            {
                "id": 641,
                "option_text": "They don't have any money and there are no jobs.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "There don't have any money and they are no jobs.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "They haven't any money and there is no jobs.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "They not have money and there aren't any no jobs.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 38
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I haven't got time but there is hope.",
        "difficulty": "Medium",
        "explanation": "Haven't got vs There is",
        "options": [
            {
                "id": 651,
                "option_text": "I haven't got time but there is hope.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "I have not time but there is hope.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "There haven't time but I is hope.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "I haven't got time but there are hope.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 38
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Do you have a car? / Is there parking?",
        "difficulty": "Medium",
        "explanation": "Câu hỏi Have vs There is",
        "options": [
            {
                "id": 661,
                "option_text": "Do you have a car? / Is there parking?",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "Have you a car? / Parking there is?",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "You have a car? / Is parking there?",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "Do you got a car? / There is parking?",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 38
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "She has got three siblings and there are two cousins.",
        "difficulty": "Medium",
        "explanation": "Have got vs There are",
        "options": [
            {
                "id": 671,
                "option_text": "She has got three siblings and there are two cousins.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "There has got three siblings and she are two cousins.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "She is three siblings and there got two cousins.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "She have got three siblings and there is two cousins.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 38
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "We haven't got enough time and there isn't a solution.",
        "difficulty": "Medium",
        "explanation": "Haven't got vs There isn't",
        "options": [
            {
                "id": 681,
                "option_text": "We haven't got enough time and there isn't a solution.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "There haven't got enough time and we isn't a solution.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "We have no time and there is not a solution.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "We haven't time and there aren't a solution.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 38
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Do they have a dog? / Is there a vet nearby?",
        "difficulty": "Medium",
        "explanation": "Câu hỏi Have vs There is",
        "options": [
            {
                "id": 691,
                "option_text": "Do they have a dog? / Is there a vet nearby?",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Have they a dog? / There is a vet nearby?",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "They have a dog? / Is a vet there nearby?",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "Do they got a dog? / There is a vet nearby?",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 38
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "He has got a fever and there is medicine in the cabinet.",
        "difficulty": "Medium",
        "explanation": "Have got vs There is",
        "options": [
            {
                "id": 701,
                "option_text": "He has got a fever and there is medicine in the cabinet.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "There has got a fever and he is medicine in the cabinet.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "He is a fever and there got medicine in the cabinet.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "He have got a fever and there are medicine in the cabinet.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 38
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which distinguishes 'have' vs 'there is' correctly?",
        "correct_answer": "Have = possession/ownership; There is = existence of something",
        "difficulty": "Hard",
        "explanation": "Phân biệt Have vs There is (Có & Tồn Tại nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "Have = possession/ownership; There is = existence of something",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "Have = existence; There is = ownership",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "Both mean exactly the same thing",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "Neither has meaningful distinction",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 38
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which is the key difference between 'have' and 'have got'?",
        "correct_answer": "Have got = more informal/British; Have = formal/both American/British",
        "difficulty": "Hard",
        "explanation": "Have vs Have got - register khác nhau",
        "options": [
            {
                "id": 821,
                "option_text": "Have got = more informal/British; Have = formal/both American/British",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Have got = formal; Have = informal",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Have got = American; Have = British",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "They have identical usage and register",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 38
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which can be correctly used in a question?",
        "correct_answer": "Do you have? / Have you got? (both acceptable)",
        "difficulty": "Hard",
        "explanation": "Câu hỏi Have vs Have got",
        "options": [
            {
                "id": 831,
                "option_text": "Do you have? / Have you got? (both acceptable)",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "Have you? / Got you have? (both acceptable)",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "Do you got? / Have you have? (both acceptable)",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 844,
                "option_text": "Only one form is acceptable",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 38
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct 'there' with different tenses?",
        "correct_answer": "There is/was/will be/has been (agreement with 'be')",
        "difficulty": "Hard",
        "explanation": "There với các thì khác nhau",
        "options": [
            {
                "id": 841,
                "option_text": "There is/was/will be/has been (agreement with 'be')",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "There have/had/will have/has have (always 'have')",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "There does/did/will do/has do (always 'do')",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "All use identical forms across tenses",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 38
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows subject-verb agreement with 'there'?",
        "correct_answer": "There is one cat but there are many dogs",
        "difficulty": "Hard",
        "explanation": "Subject-verb agreement với There",
        "options": [
            {
                "id": 851,
                "option_text": "There is one cat but there are many dogs",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "There are one cat but there is many dogs",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "There is one cat and there is many dogs",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "There are one cat and there are many dogs",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 38
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which CANNOT use 'there'?",
        "correct_answer": "I have a book (possession - not about existence)",
        "difficulty": "Hard",
        "explanation": "Khi không thể dùng There",
        "options": [
            {
                "id": 861,
                "option_text": "I have a book (possession - not about existence)",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "A book on the table (existence)",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "Lots of people in the room (existence)",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "Something unusual happened (existence)",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 38
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which CANNOT use 'have'?",
        "correct_answer": "There is no time (about existence)",
        "difficulty": "Hard",
        "explanation": "Khi không thể dùng Have",
        "options": [
            {
                "id": 871,
                "option_text": "There is no time (about existence)",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "I have a watch (ownership)",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "She has two brothers (kinship/possession)",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 884,
                "option_text": "They have many friends (possession)",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 38
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which uses 'there' correctly in past tense?",
        "correct_answer": "There was a problem yesterday / There were many issues",
        "difficulty": "Hard",
        "explanation": "There với quá khứ",
        "options": [
            {
                "id": 881,
                "option_text": "There was a problem yesterday / There were many issues",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "There had a problem yesterday / There had many issues",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "There is a problem yesterday / There are many issues",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "There been a problem yesterday / There been many issues",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 38
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which uses 'there' correctly in perfect tense?",
        "correct_answer": "There have been changes / There has been a solution",
        "difficulty": "Hard",
        "explanation": "There với perfect tense",
        "options": [
            {
                "id": 891,
                "option_text": "There have been changes / There has been a solution",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "There has been changes / There have been a solution",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "There is been changes / There are been a solution",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "There be changes / There be a solution",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 38
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Have = ownership; Have got = British informal ownership; There is/are = existence",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Có & Tồn Tại",
        "options": [
            {
                "id": 901,
                "option_text": "Have = ownership; Have got = British informal ownership; There is/are = existence",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All three structures mean exactly the same",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Have is the only correct form in modern English",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "These structures are rarely used anymore",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 38
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which sentence pair uses the structures correctly?",
        "correct_answer": "I have a car = I own it / There is a car = it exists",
        "difficulty": "Hard",
        "explanation": "Phân biệt Have vs There is - thực tiễn",
        "options": [
            {
                "id": 911,
                "option_text": "I have a car = I own it / There is a car = it exists",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "I have a car = it exists / There is a car = I own it",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Both sentences mean the same thing",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Neither sentence is commonly used",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 38
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows negation in question form?",
        "correct_answer": "Don't you have any? / Hasn't there been any?",
        "difficulty": "Hard",
        "explanation": "Phủ định câu hỏi với Have vs There",
        "options": [
            {
                "id": 921,
                "option_text": "Don't you have any? / Hasn't there been any?",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "Haven't you any? / There hasn't been any?",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "You don't have? / Is there not been?",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Do you not have? / There not has been?",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 38
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which context requires 'there is' (not 'have')?",
        "correct_answer": "Introducing new information about existence/location",
        "difficulty": "Hard",
        "explanation": "Khi dùng There is",
        "options": [
            {
                "id": 931,
                "option_text": "Introducing new information about existence/location",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "Expressing personal possession",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "Stating relationship between people",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 944,
                "option_text": "Describing what someone owns",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 38
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which context requires 'have' (not 'there is')?",
        "correct_answer": "Expressing possession, ownership, relationships, qualities",
        "difficulty": "Hard",
        "explanation": "Khi dùng Have",
        "options": [
            {
                "id": 941,
                "option_text": "Expressing possession, ownership, relationships, qualities",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "Introducing something new in a place",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Describing general existence of things",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Stating a location of something",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 38
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which correctly transforms 'I have' to question form?",
        "correct_answer": "Do I have? / Have I got? (both acceptable)",
        "difficulty": "Hard",
        "explanation": "Chuyển đổi Have thành câu hỏi",
        "options": [
            {
                "id": 951,
                "option_text": "Do I have? / Have I got? (both acceptable)",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "Have I? / Got I have? (both acceptable)",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "I have? / I got? (both acceptable)",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "Only one transformation is possible",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 38
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which correctly transforms 'there is' to question form?",
        "correct_answer": "Is there a solution? / Is there any hope?",
        "difficulty": "Hard",
        "explanation": "Chuyển đổi There is thành câu hỏi",
        "options": [
            {
                "id": 961,
                "option_text": "Is there a solution? / Is there any hope?",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "There is a solution? / There is any hope?",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "Does there a solution? / Does there any hope?",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "There does a solution? / There does any hope?",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 38
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows short answers?",
        "correct_answer": "Do you have it? Yes, I do / Is there time? Yes, there is",
        "difficulty": "Hard",
        "explanation": "Câu trả lời ngắn",
        "options": [
            {
                "id": 971,
                "option_text": "Do you have it? Yes, I do / Is there time? Yes, there is",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "Do you have it? Yes, I have / Is there time? Yes, it is",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "Do you have it? Yes, I am / Is there time? Yes, I am",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "Do you have it? Yes / Is there time? Yes",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 38
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which is grammatically most accurate?",
        "correct_answer": "There are many people who have excellent skills",
        "difficulty": "Hard",
        "explanation": "Kết hợp There + Have",
        "options": [
            {
                "id": 981,
                "option_text": "There are many people who have excellent skills",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "There have many people who are excellent skills",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "Many people there have excellent skills are",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "Have many people there excellent skills",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 38
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which shows the most common usage pattern?",
        "correct_answer": "Have for personal possession; There is for introducing/locating",
        "difficulty": "Hard",
        "explanation": "Mô hình dùng phổ biến",
        "options": [
            {
                "id": 991,
                "option_text": "Have for personal possession; There is for introducing/locating",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Have for locations; There is for possession",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Both used equally for all contexts",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "Have is preferred in all modern usage",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 38
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Have = ownership focus / Have got = British informal / There = existence/location focus",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Có & Tồn Tại",
        "options": [
            {
                "id": 1001,
                "option_text": "Have = ownership focus / Have got = British informal / There = existence/location focus",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "All three are completely interchangeable",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Only have is correct in modern English",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "These structures serve no practical purpose",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 38
    }
];

export default questions;