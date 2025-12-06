const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "He is old ___ to drive a car.",
        "correct_answer": "enough",
        "suggest_answer": "enough",
        "explanation": "Enough + to-infinitive (Cấu trúc Enough to)",
        "difficulty": "Easy",
        "topic_id": 36
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "This coffee is ___ hot to drink.",
        "correct_answer": "too",
        "suggest_answer": "too",
        "explanation": "Too + adjective + to-infinitive (Cấu trúc Too to)",
        "difficulty": "Easy",
        "topic_id": 36
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "The problem was ___ difficult ___ we couldn't solve it.",
        "correct_answer": "so / that",
        "suggest_answer": "so / that",
        "explanation": "So + adjective + that (Cấu trúc So...that)",
        "difficulty": "Easy",
        "topic_id": 36
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "It was ___ beautiful place ___ everyone wanted to visit.",
        "correct_answer": "such a / that",
        "suggest_answer": "such a / that",
        "explanation": "Such + noun + that (Cấu trúc Such...that)",
        "difficulty": "Easy",
        "topic_id": 36
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "The book is interesting ___ to read in one sitting.",
        "correct_answer": "enough",
        "suggest_answer": "enough",
        "explanation": "Enough + to-infinitive (đủ thú vị)",
        "difficulty": "Easy",
        "topic_id": 36
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "The water is ___ cold to swim in.",
        "correct_answer": "too",
        "suggest_answer": "too",
        "explanation": "Too + adjective + to-infinitive (quá lạnh)",
        "difficulty": "Easy",
        "topic_id": 36
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "He spoke ___ fast ___ I couldn't understand.",
        "correct_answer": "so / that",
        "suggest_answer": "so / that",
        "explanation": "So + adverb + that (nói quá nhanh)",
        "difficulty": "Easy",
        "topic_id": 36
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "She has ___ much work ___ she can't rest.",
        "correct_answer": "such / that",
        "suggest_answer": "such / that",
        "explanation": "Such + much + noun + that",
        "difficulty": "Easy",
        "topic_id": 36
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "The problem is simple ___ for a child to solve.",
        "correct_answer": "enough",
        "suggest_answer": "enough",
        "explanation": "Enough + to-infinitive (đơn giản đủ)",
        "difficulty": "Easy",
        "topic_id": 36
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "The music is ___ loud to hear conversation.",
        "correct_answer": "too",
        "suggest_answer": "too",
        "explanation": "Too + adjective + to-infinitive (quá to)",
        "difficulty": "Easy",
        "topic_id": 36
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "He has enough money to buy a house and ___ have something left.",
        "correct_answer": "still",
        "suggest_answer": "still",
        "explanation": "Enough + to-infinitive (enough to + verb phrase) (Cấu trúc Enough nâng cao)",
        "difficulty": "Medium",
        "topic_id": 36
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "The box is ___ heavy for one person to carry alone.",
        "correct_answer": "too",
        "suggest_answer": "too",
        "explanation": "Too + adjective + to-infinitive (quá nặng)",
        "difficulty": "Medium",
        "topic_id": 36
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "The solution was ___ simple ___ everyone overlooked it.",
        "correct_answer": "so / that",
        "suggest_answer": "so / that",
        "explanation": "So + adjective + that (quá đơn giản)",
        "difficulty": "Medium",
        "topic_id": 36
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "It was ___ terrible weather ___ the flight was cancelled.",
        "correct_answer": "such / that",
        "suggest_answer": "such / that",
        "explanation": "Such + adjective + noun + that",
        "difficulty": "Medium",
        "topic_id": 36
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "She works hard ___ to earn a good living.",
        "correct_answer": "enough",
        "suggest_answer": "enough",
        "explanation": "Enough + to-infinitive (đủ để kiếm)",
        "difficulty": "Medium",
        "topic_id": 36
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "The pain was ___ severe to ignore.",
        "correct_answer": "too",
        "suggest_answer": "too",
        "explanation": "Too + adjective + to-infinitive (quá dữ dội)",
        "difficulty": "Medium",
        "topic_id": 36
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "The noise was ___ loud ___ the neighbors called the police.",
        "correct_answer": "so / that",
        "suggest_answer": "so / that",
        "explanation": "So + adjective + that (tiếng ồn quá to)",
        "difficulty": "Medium",
        "topic_id": 36
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "It was ___ delicious meal ___ we ordered it again.",
        "correct_answer": "such a / that",
        "suggest_answer": "such a / that",
        "explanation": "Such + a + adjective + noun + that",
        "difficulty": "Medium",
        "topic_id": 36
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "The instructions are clear ___ for anyone to follow.",
        "correct_answer": "enough",
        "suggest_answer": "enough",
        "explanation": "Enough + to-infinitive (rõ ràng đủ)",
        "difficulty": "Medium",
        "topic_id": 36
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "The road was ___ narrow for two cars to pass.",
        "correct_answer": "too",
        "suggest_answer": "too",
        "explanation": "Too + adjective + to-infinitive (quá hẹp)",
        "difficulty": "Medium",
        "topic_id": 36
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "The storm was ___ violent ___ crops were destroyed completely.",
        "correct_answer": "so / that",
        "suggest_answer": "so / that",
        "explanation": "So + adjective + that (Cấu trúc So...that nâng cao)",
        "difficulty": "Hard",
        "topic_id": 36
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "He told ___ interesting stories ___ we listened all night.",
        "correct_answer": "such / that",
        "suggest_answer": "such / that",
        "explanation": "Such + adjective + plural noun + that",
        "difficulty": "Hard",
        "topic_id": 36
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "The performance was skilled ___ to impress the critics.",
        "correct_answer": "enough",
        "suggest_answer": "enough",
        "explanation": "Enough + to-infinitive (tài năng đủ)",
        "difficulty": "Hard",
        "topic_id": 36
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "The task is ___ complex to complete in one day.",
        "correct_answer": "too",
        "suggest_answer": "too",
        "explanation": "Too + adjective + to-infinitive (quá phức tạp)",
        "difficulty": "Hard",
        "topic_id": 36
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "He drove ___ recklessly ___ caused several accidents.",
        "correct_answer": "so / that",
        "suggest_answer": "so / that",
        "explanation": "So + adverb + that (lái xe quá bồng bột)",
        "difficulty": "Hard",
        "topic_id": 36
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "It was ___ bad news ___ everyone was shocked.",
        "correct_answer": "such / that",
        "suggest_answer": "such / that",
        "explanation": "Such + adjective + noun + that (tin tức quá tệ)",
        "difficulty": "Hard",
        "topic_id": 36
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "The child was mature ___ to understand the situation.",
        "correct_answer": "enough",
        "suggest_answer": "enough",
        "explanation": "Enough + to-infinitive (trưởng thành đủ)",
        "difficulty": "Hard",
        "topic_id": 36
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "The examination is ___ difficult for most students to pass.",
        "correct_answer": "too",
        "suggest_answer": "too",
        "explanation": "Too + adjective + to-infinitive (quá khó)",
        "difficulty": "Hard",
        "topic_id": 36
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The presentation was ___ impressive ___ won first prize.",
        "correct_answer": "so / that",
        "suggest_answer": "so / that",
        "explanation": "So + adjective + that (thuyết trình quá ấn tượng)",
        "difficulty": "Hard",
        "topic_id": 36
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "She gave ___ wonderful performance ___ received standing ovation.",
        "correct_answer": "such a / that",
        "suggest_answer": "such a / that",
        "explanation": "Such + a + adjective + noun + that",
        "difficulty": "Hard",
        "topic_id": 36
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'enough'?",
        "correct_answer": "She is tall enough to reach the shelf.",
        "difficulty": "Easy",
        "explanation": "Adjective + enough + to-infinitive (Cấu trúc Enough to)",
        "options": [
            {
                "id": 311,
                "option_text": "She is tall enough to reach the shelf.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "She is enough tall to reach the shelf.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "She is tall to reach enough the shelf.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "She reaches enough tall the shelf.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 36
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'too'?",
        "correct_answer": "The task is too difficult to complete today.",
        "difficulty": "Easy",
        "explanation": "Too + adjective + to-infinitive (Cấu trúc Too to)",
        "options": [
            {
                "id": 321,
                "option_text": "The task is too difficult to complete today.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "The task is difficult too to complete today.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "The task is too to complete difficult today.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "The task too is difficult to complete today.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 36
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'so...that'?",
        "correct_answer": "The weather was so bad that we cancelled the picnic.",
        "difficulty": "Easy",
        "explanation": "So + adjective + that (Cấu trúc So...that)",
        "options": [
            {
                "id": 331,
                "option_text": "The weather was so bad that we cancelled the picnic.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "The weather was bad so that we cancelled the picnic.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "The weather was so that bad we cancelled the picnic.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "The weather so was bad that we cancelled the picnic.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 36
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'such...that'?",
        "correct_answer": "It was such a beautiful day that we went to the beach.",
        "difficulty": "Easy",
        "explanation": "Such + a + adjective + noun + that (Cấu trúc Such...that)",
        "options": [
            {
                "id": 341,
                "option_text": "It was such a beautiful day that we went to the beach.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "It was such beautiful a day that we went to the beach.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "It was beautiful such day that we went to the beach.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "It was such that beautiful day we went to the beach.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 36
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Which is correctly formed with enough?",
        "correct_answer": "He has experience enough to handle this project.",
        "difficulty": "Easy",
        "explanation": "Noun + enough + to-infinitive (với noun)",
        "options": [
            {
                "id": 351,
                "option_text": "He has experience enough to handle this project.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "He has enough experience to handle this project.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "He has to experience enough handle this project.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "He enough has experience to handle this project.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 36
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the sentence with correct 'too':",
        "correct_answer": "This sweater is too small for me to wear.",
        "difficulty": "Easy",
        "explanation": "Too + adjective + to-infinitive",
        "options": [
            {
                "id": 361,
                "option_text": "This sweater is too small for me to wear.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "This sweater is too for me to wear small.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "This sweater too is small for me to wear.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "This sweater is small too for me to wear.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 36
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the sentence with correct 'so...that':",
        "correct_answer": "He was so tired that he fell asleep immediately.",
        "difficulty": "Easy",
        "explanation": "So + adjective + that (cấu trúc đúng)",
        "options": [
            {
                "id": 371,
                "option_text": "He was so tired that he fell asleep immediately.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "He was tired so that he fell asleep immediately.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "He so was tired that he fell asleep immediately.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "He was so that tired he fell asleep immediately.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 36
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the sentence with correct 'such...that':",
        "correct_answer": "She has such good ideas that everyone listens to her.",
        "difficulty": "Easy",
        "explanation": "Such + adjective + noun + that",
        "options": [
            {
                "id": 381,
                "option_text": "She has such good ideas that everyone listens to her.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "She has good such ideas that everyone listens to her.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "She has such that good ideas everyone listens to her.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "She such has good ideas that everyone listens to her.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 36
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Which is correctly formed with enough?",
        "correct_answer": "We have enough time to finish the project.",
        "difficulty": "Easy",
        "explanation": "Enough + noun hoặc enough sau adjective",
        "options": [
            {
                "id": 391,
                "option_text": "We have enough time to finish the project.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "We have time enough to finish the project.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "We enough have time to finish the project.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "We have to enough time finish the project.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 36
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Which sentence is correctly formed?",
        "correct_answer": "The problem was too complex to solve quickly.",
        "difficulty": "Easy",
        "explanation": "Too + adjective + to-infinitive (cấu trúc đúng)",
        "options": [
            {
                "id": 401,
                "option_text": "The problem was too complex to solve quickly.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "The problem was complex too to solve quickly.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "The problem was too to solve complex quickly.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "The problem too was complex to solve quickly.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 36
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed sentence:",
        "correct_answer": "It was such a noise that I couldn't sleep.",
        "difficulty": "Medium",
        "explanation": "Such + a + noun + that (Cấu trúc Such...that phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "It was such a noise that I couldn't sleep.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "It was such noise a that I couldn't sleep.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "It was a such noise that I couldn't sleep.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "It such was a noise that I couldn't sleep.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 36
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed sentence:",
        "correct_answer": "He spoke so quickly that nobody understood him.",
        "difficulty": "Medium",
        "explanation": "So + adverb + that (với adverb thay adjective)",
        "options": [
            {
                "id": 621,
                "option_text": "He spoke so quickly that nobody understood him.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "He spoke quickly so that nobody understood him.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "He so spoke quickly that nobody understood him.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "He spoke so that quickly nobody understood him.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 36
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed sentence:",
        "correct_answer": "The book is interesting enough to keep you engaged.",
        "difficulty": "Medium",
        "explanation": "Adjective + enough + to-infinitive",
        "options": [
            {
                "id": 631,
                "option_text": "The book is interesting enough to keep you engaged.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "The book is enough interesting to keep you engaged.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "The book enough is interesting to keep you engaged.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "The book is interesting to keep enough you engaged.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 36
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed sentence:",
        "correct_answer": "The room is too dark to read comfortably.",
        "difficulty": "Medium",
        "explanation": "Too + adjective + to-infinitive",
        "options": [
            {
                "id": 641,
                "option_text": "The room is too dark to read comfortably.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "The room is dark too to read comfortably.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "The room too is dark to read comfortably.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "The room is too to read dark comfortably.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 36
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed sentence:",
        "correct_answer": "The pain was so severe that she fainted.",
        "difficulty": "Medium",
        "explanation": "So + adjective + that",
        "options": [
            {
                "id": 651,
                "option_text": "The pain was so severe that she fainted.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "The pain was severe so that she fainted.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "The pain so was severe that she fainted.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "The pain was so that severe she fainted.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 36
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed sentence:",
        "correct_answer": "She has such beautiful handwriting that everyone admires it.",
        "difficulty": "Medium",
        "explanation": "Such + adjective + noun (singular/plural) + that",
        "options": [
            {
                "id": 661,
                "option_text": "She has such beautiful handwriting that everyone admires it.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "She has beautiful such handwriting that everyone admires it.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "She such has beautiful handwriting that everyone admires it.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "She has such that beautiful handwriting everyone admires it.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 36
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed sentence:",
        "correct_answer": "He has enough sense not to believe that nonsense.",
        "difficulty": "Medium",
        "explanation": "Noun + enough + to-infinitive",
        "options": [
            {
                "id": 671,
                "option_text": "He has enough sense not to believe that nonsense.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "He has sense enough not to believe that nonsense.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "He enough has sense not to believe that nonsense.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "He has enough not to sense believe that nonsense.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 36
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed sentence:",
        "correct_answer": "The water is too hot for children to bathe in.",
        "difficulty": "Medium",
        "explanation": "Too + adjective + for + noun/pronoun + to-infinitive",
        "options": [
            {
                "id": 681,
                "option_text": "The water is too hot for children to bathe in.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "The water is hot too for children to bathe in.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "The water too is hot for children to bathe in.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "The water is too for children hot to bathe in.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 36
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed sentence:",
        "correct_answer": "She is talented enough to become a professional musician.",
        "difficulty": "Medium",
        "explanation": "Adjective + enough + to-infinitive (đủ tài năng)",
        "options": [
            {
                "id": 691,
                "option_text": "She is talented enough to become a professional musician.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "She is enough talented to become a professional musician.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "She enough is talented to become a professional musician.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "She is talented to become enough a professional musician.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 36
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed sentence:",
        "correct_answer": "The mistake was so serious that it cost him his job.",
        "difficulty": "Medium",
        "explanation": "So + adjective + that (lỗi quá nghiêm trọng)",
        "options": [
            {
                "id": 701,
                "option_text": "The mistake was so serious that it cost him his job.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "The mistake was serious so that it cost him his job.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "The mistake so was serious that it cost him his job.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "The mistake was so that serious it cost him his job.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 36
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed complex sentence:",
        "correct_answer": "The speech was so moving that many people cried.",
        "difficulty": "Hard",
        "explanation": "So + adjective + that (Cấu trúc So...that nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "The speech was so moving that many people cried.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "The speech was moving so that many people cried.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "The speech so was moving that many people cried.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "The speech was so that moving many people cried.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 36
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed complex sentence:",
        "correct_answer": "They have such extensive experience that they can handle any situation.",
        "difficulty": "Hard",
        "explanation": "Such + adjective + noun (plural) + that",
        "options": [
            {
                "id": 821,
                "option_text": "They have such extensive experience that they can handle any situation.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "They have extensive such experience that they can handle any situation.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "They such have extensive experience that they can handle any situation.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "They have such that extensive experience they can handle any situation.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 36
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed complex sentence:",
        "correct_answer": "The evidence is clear enough for everyone to understand the conclusion.",
        "difficulty": "Hard",
        "explanation": "Adjective + enough + for + noun + to-infinitive",
        "options": [
            {
                "id": 831,
                "option_text": "The evidence is clear enough for everyone to understand the conclusion.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "The evidence is enough clear for everyone to understand the conclusion.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "The evidence enough is clear for everyone to understand the conclusion.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "The evidence is clear for everyone enough to understand the conclusion.",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 36
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed complex sentence:",
        "correct_answer": "The conditions are too unstable for the experiment to proceed safely.",
        "difficulty": "Hard",
        "explanation": "Too + adjective + for + noun + to-infinitive",
        "options": [
            {
                "id": 841,
                "option_text": "The conditions are too unstable for the experiment to proceed safely.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "The conditions are unstable too for the experiment to proceed safely.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "The conditions too are unstable for the experiment to proceed safely.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "The conditions are too for the experiment unstable to proceed safely.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 36
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed complex sentence:",
        "correct_answer": "He spoke so enthusiastically that he convinced the entire audience.",
        "difficulty": "Hard",
        "explanation": "So + adverb + that (với adverb)",
        "options": [
            {
                "id": 851,
                "option_text": "He spoke so enthusiastically that he convinced the entire audience.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "He spoke enthusiastically so that he convinced the entire audience.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "He so spoke enthusiastically that he convinced the entire audience.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "He spoke so that enthusiastically he convinced the entire audience.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 36
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed complex sentence:",
        "correct_answer": "There is such a demand for these products that supplies run short.",
        "difficulty": "Hard",
        "explanation": "Such a + noun + that (có a với singular)",
        "options": [
            {
                "id": 861,
                "option_text": "There is such a demand for these products that supplies run short.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "There is a such demand for these products that supplies run short.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "There such is a demand for these products that supplies run short.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "There is such that a demand for these products supplies run short.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 36
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed complex sentence:",
        "correct_answer": "The solution is sophisticated enough to address all the issues.",
        "difficulty": "Hard",
        "explanation": "Adjective + enough + to-infinitive (đủ tinh vi)",
        "options": [
            {
                "id": 871,
                "option_text": "The solution is sophisticated enough to address all the issues.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "The solution is enough sophisticated to address all the issues.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "The solution enough is sophisticated to address all the issues.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "The solution is sophisticated to address enough all the issues.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 36
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed complex sentence:",
        "correct_answer": "The infrastructure is too fragile to withstand such pressure.",
        "difficulty": "Hard",
        "explanation": "Too + adjective + to-infinitive (quá mong manh)",
        "options": [
            {
                "id": 881,
                "option_text": "The infrastructure is too fragile to withstand such pressure.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "The infrastructure is fragile too to withstand such pressure.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "The infrastructure too is fragile to withstand such pressure.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "The infrastructure is too to withstand fragile such pressure.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 36
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed complex sentence:",
        "correct_answer": "The presentation was so comprehensive that everyone learned something valuable.",
        "difficulty": "Hard",
        "explanation": "So + adjective + that (thuyết trình quá toàn diện)",
        "options": [
            {
                "id": 891,
                "option_text": "The presentation was so comprehensive that everyone learned something valuable.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "The presentation was comprehensive so that everyone learned something valuable.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "The presentation so was comprehensive that everyone learned something valuable.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "The presentation was so that comprehensive everyone learned something valuable.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 36
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Select the correctly formed complex sentence:",
        "correct_answer": "She has such strong convictions that she never wavers in her principles.",
        "difficulty": "Hard",
        "explanation": "Such + adjective + plural noun + that",
        "options": [
            {
                "id": 901,
                "option_text": "She has such strong convictions that she never wavers in her principles.",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "She has strong such convictions that she never wavers in her principles.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "She such has strong convictions that she never wavers in her principles.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "She has such that strong convictions she never wavers in her principles.",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 36
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which correctly compares enough structures?",
        "correct_answer": "Adjective + enough / Enough + noun",
        "difficulty": "Hard",
        "explanation": "Vị trí của 'enough' khác nhau (Cấu trúc Enough nâng cao)",
        "options": [
            {
                "id": 911,
                "option_text": "Adjective + enough / Enough + noun",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "Enough + adjective / Noun + enough",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Both follow the same pattern",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Neither structure is common",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 36
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which correctly distinguishes so...that vs such...that?",
        "correct_answer": "So + adjective/adverb / Such + noun/adjective + noun",
        "difficulty": "Hard",
        "explanation": "Sự khác biệt giữa so và such",
        "options": [
            {
                "id": 921,
                "option_text": "So + adjective/adverb / Such + noun/adjective + noun",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "So + noun / Such + adjective/adverb",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "Both can be used interchangeably",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Neither is commonly used",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 36
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which structure shows too correctly?",
        "correct_answer": "Too + adjective + to-infinitive (expresses limitation)",
        "difficulty": "Hard",
        "explanation": "Too biểu thị sự giới hạn/vấn đề",
        "options": [
            {
                "id": 931,
                "option_text": "Too + adjective + to-infinitive (expresses limitation)",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "Too + noun + to-infinitive (expresses ability)",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "Too + adverb + to-infinitive (expresses opportunity)",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "Too + verb + to-infinitive (expresses permission)",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 36
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which structure shows enough correctly?",
        "correct_answer": "Enough + to-infinitive (expresses sufficiency)",
        "difficulty": "Hard",
        "explanation": "Enough biểu thị đủ/đủ khả năng",
        "options": [
            {
                "id": 941,
                "option_text": "Enough + to-infinitive (expresses sufficiency)",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "Enough + noun + to-infinitive (expresses limitation)",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Enough + that-clause (expresses consequence)",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Enough + gerund (expresses obligation)",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 36
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which structure shows so...that correctly?",
        "correct_answer": "So + adjective/adverb + that-clause (expresses consequence/result)",
        "difficulty": "Hard",
        "explanation": "So...that biểu thị kết quả/hệ quả",
        "options": [
            {
                "id": 951,
                "option_text": "So + adjective/adverb + that-clause (expresses consequence/result)",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "So + noun + that-clause (expresses intention)",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "So + verb + that-clause (expresses permission)",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "So + pronoun + that-clause (expresses contrast)",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 36
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which structure shows such...that correctly?",
        "correct_answer": "Such + noun/adjective + noun + that-clause (expresses consequence/result)",
        "difficulty": "Hard",
        "explanation": "Such...that cũng biểu thị kết quả nhưng với danh từ",
        "options": [
            {
                "id": 961,
                "option_text": "Such + noun/adjective + noun + that-clause (expresses consequence/result)",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "Such + adverb + that-clause (expresses purpose)",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "Such + verb + that-clause (expresses obligation)",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "Such + adjective + that-clause (expresses possibility)",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 36
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which comparison is accurate?",
        "correct_answer": "The coffee is too hot to drink = I cannot drink it / Enough = I can do it",
        "difficulty": "Hard",
        "explanation": "Too biểu thị vấn đề; Enough biểu thị khả năng",
        "options": [
            {
                "id": 971,
                "option_text": "The coffee is too hot to drink = I cannot drink it / Enough = I can do it",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "The coffee is too hot to drink = I can drink it / Enough = I cannot do it",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "Both too and enough express the same meaning",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "Neither too nor enough affects the meaning",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 36
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which comparison is accurate?",
        "correct_answer": "So...that emphasizes intensity; Such...that emphasizes quality/type",
        "difficulty": "Hard",
        "explanation": "So vs Such - cách dùng khác nhau",
        "options": [
            {
                "id": 981,
                "option_text": "So...that emphasizes intensity; Such...that emphasizes quality/type",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "So...that emphasizes quality; Such...that emphasizes intensity",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "Both so...that and such...that are interchangeable",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "Neither emphasizes anything meaningful",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 36
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'enough' with nouns?",
        "correct_answer": "We have enough time vs We have time enough (both acceptable, former more common)",
        "difficulty": "Hard",
        "explanation": "Enough với danh từ có hai vị trí",
        "options": [
            {
                "id": 991,
                "option_text": "We have enough time vs We have time enough (both acceptable, former more common)",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Only 'enough time' is correct",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Only 'time enough' is correct",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "Neither structure is standard",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 36
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "All four structures (enough/too/so/such) express degree but with different focuses",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Enough/Too/So/Such",
        "options": [
            {
                "id": 1001,
                "option_text": "All four structures (enough/too/so/such) express degree but with different focuses",
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
                "option_text": "Only enough and too are important; so and such are optional",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "None of these structures are commonly used",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 36
    }
];

export default questions;