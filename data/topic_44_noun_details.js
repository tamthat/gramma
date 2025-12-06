const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "The ___ of the team are very skilled.",
        "correct_answer": "members",
        "suggest_answer": "members",
        "explanation": "Members (danh từ tập hợp - plural verb) (Danh Từ Chi Tiết - Danh Từ Tập Hợp)",
        "difficulty": "Easy",
        "topic_id": 44
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "I saw two ___ in the forest.",
        "correct_answer": "deer",
        "suggest_answer": "deer",
        "explanation": "Deer (số nhiều = số ít) (Danh Từ Chi Tiết - Số Nhiều Bất Quy Tắc)",
        "difficulty": "Easy",
        "topic_id": 44
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "The ___ are very good players.",
        "correct_answer": "children",
        "suggest_answer": "children",
        "explanation": "Children (bất quy tắc) (Danh Từ Chi Tiết - Số Nhiều Bất Quy Tắc)",
        "difficulty": "Easy",
        "topic_id": 44
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "There are several ___ in the house.",
        "correct_answer": "mice",
        "suggest_answer": "mice",
        "explanation": "Mice (bất quy tắc: mouse → mice)",
        "difficulty": "Easy",
        "topic_id": 44
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "The ___ are trying to catch the fish.",
        "correct_answer": "cats",
        "suggest_answer": "cats",
        "explanation": "Cats (quy tắc: +s)",
        "difficulty": "Easy",
        "topic_id": 44
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "My family ___ on vacation next week.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "Family (danh từ tập hợp - singular verb) (Danh Từ Chi Tiết - Danh Từ Tập Hợp)",
        "difficulty": "Easy",
        "topic_id": 44
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "The company ___ founded in 2000.",
        "correct_answer": "was",
        "suggest_answer": "was",
        "explanation": "Company (danh từ tập hợp - singular verb)",
        "difficulty": "Easy",
        "topic_id": 44
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "The ___ of sheep is very large.",
        "correct_answer": "flock",
        "suggest_answer": "flock",
        "explanation": "Flock (danh từ tập hợp chỉ nhóm)",
        "difficulty": "Easy",
        "topic_id": 44
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "I lost my ___ last week.",
        "correct_answer": "glasses",
        "suggest_answer": "glasses",
        "explanation": "Glasses (luôn số nhiều) (Danh Từ Chi Tiết - Danh Từ Luôn Số Nhiều)",
        "difficulty": "Easy",
        "topic_id": 44
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "The ___ are very expensive.",
        "correct_answer": "scissors",
        "suggest_answer": "scissors",
        "explanation": "Scissors (luôn số nhiều)",
        "difficulty": "Easy",
        "topic_id": 44
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "I have two pairs of ___.",
        "correct_answer": "trousers",
        "suggest_answer": "trousers",
        "explanation": "Trousers (luôn số nhiều) (Danh Từ Chi Tiết - Danh Từ Luôn Số Nhiều phức tạp)",
        "difficulty": "Medium",
        "topic_id": 44
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "The ___ in the museum are priceless.",
        "correct_answer": "paintings",
        "suggest_answer": "paintings",
        "explanation": "Paintings (quy tắc: +s)",
        "difficulty": "Medium",
        "topic_id": 44
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "There are many ___ in the city.",
        "correct_answer": "people",
        "suggest_answer": "people",
        "explanation": "People (bất quy tắc: person → people)",
        "difficulty": "Medium",
        "topic_id": 44
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "The ___ are very impressive.",
        "correct_answer": "phenomena",
        "suggest_answer": "phenomena",
        "explanation": "Phenomena (bất quy tắc: phenomenon → phenomena)",
        "difficulty": "Medium",
        "topic_id": 44
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "I bought new ___ yesterday.",
        "correct_answer": "clothes",
        "suggest_answer": "clothes",
        "explanation": "Clothes (luôn số nhiều)",
        "difficulty": "Medium",
        "topic_id": 44
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "The jury ___ reached a decision.",
        "correct_answer": "has",
        "suggest_answer": "has",
        "explanation": "Jury (danh từ tập hợp - singular verb) (Danh Từ Chi Tiết - Danh Từ Tập Hợp)",
        "difficulty": "Medium",
        "topic_id": 44
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "The police ___ investigating the crime.",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Police (luôn plural verb)",
        "difficulty": "Medium",
        "topic_id": 44
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "The data ___ been analyzed.",
        "correct_answer": "has",
        "suggest_answer": "has",
        "explanation": "Data (có thể singular hoặc plural - formal: singular)",
        "difficulty": "Medium",
        "topic_id": 44
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "There are several ___ attending the conference.",
        "correct_answer": "alumni",
        "suggest_answer": "alumni",
        "explanation": "Alumni (bất quy tắc: alumnus → alumni)",
        "difficulty": "Medium",
        "topic_id": 44
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "The ___ were very beautiful.",
        "correct_answer": "geese",
        "suggest_answer": "geese",
        "explanation": "Geese (bất quy tắc: goose → geese)",
        "difficulty": "Medium",
        "topic_id": 44
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "The audience ___ silent during the speech.",
        "correct_answer": "was",
        "suggest_answer": "was",
        "explanation": "Audience (danh từ tập hợp - singular verb) (Danh Từ Chi Tiết - Danh Từ Tập Hợp nâng cao)",
        "difficulty": "Hard",
        "topic_id": 44
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "The staff ___ divided on this issue.",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Staff (danh từ tập hợp - có thể plural verb khi chỉ các cá nhân)",
        "difficulty": "Hard",
        "topic_id": 44
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "I bought new ___.",
        "correct_answer": "shoes",
        "suggest_answer": "shoes",
        "explanation": "Shoes (luôn plural) (Danh Từ Chi Tiết - Danh Từ Luôn Số Nhiều)",
        "difficulty": "Hard",
        "topic_id": 44
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "The committee ___ made their decision.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Committee (danh từ tập hợp - plural verb khi chỉ các thành viên riêng lẻ)",
        "difficulty": "Hard",
        "topic_id": 44
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "The criteria ___ very strict.",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Criteria (bất quy tắc: criterion → criteria - luôn plural)",
        "difficulty": "Hard",
        "topic_id": 44
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "The media ___ reporting on the event.",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Media (bất quy tắc: medium → media - luôn plural)",
        "difficulty": "Hard",
        "topic_id": 44
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "The bacteria ___ harmful.",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Bacteria (bất quy tắc: bacterium → bacteria - luôn plural)",
        "difficulty": "Hard",
        "topic_id": 44
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "The analysis ___ complete.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "Analysis (singular noun dù từ 'analyze')",
        "difficulty": "Hard",
        "topic_id": 44
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The memoranda ___ sent yesterday.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Memoranda (bất quy tắc: memorandum → memoranda)",
        "difficulty": "Hard",
        "topic_id": 44
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "The indices ___ very useful.",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Indices (bất quy tắc: index → indices hoặc indexes)",
        "difficulty": "Hard",
        "topic_id": 44
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of irregular plurals?",
        "correct_answer": "I saw two women and three men at the party.",
        "difficulty": "Easy",
        "explanation": "Women/Men (bất quy tắc) (Danh Từ Chi Tiết - Số Nhiều Bất Quy Tắc)",
        "options": [
            {
                "id": 311,
                "option_text": "I saw two women and three men at the party.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "I saw two womans and three mans at the party.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "I saw two woman and three man at the party.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "I saw two womens and three mens at the party.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 44
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of collective nouns?",
        "correct_answer": "The team is playing well today.",
        "difficulty": "Easy",
        "explanation": "Team (danh từ tập hợp - singular verb) (Danh Từ Chi Tiết - Danh Từ Tập Hợp)",
        "options": [
            {
                "id": 321,
                "option_text": "The team is playing well today.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "The team are playing well today.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "The teams is playing well today.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "The team play well today.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 44
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct plural form?",
        "correct_answer": "The children are playing in the park.",
        "difficulty": "Easy",
        "explanation": "Children (bất quy tắc: child → children)",
        "options": [
            {
                "id": 331,
                "option_text": "The children are playing in the park.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "The childs are playing in the park.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "The childes are playing in the park.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "The child are playing in the park.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 44
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I need new glasses for reading.",
        "difficulty": "Easy",
        "explanation": "Glasses (luôn plural)",
        "options": [
            {
                "id": 341,
                "option_text": "I need new glasses for reading.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "I need a new glass for reading.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "I need new glass for reading.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "I need a new glasses for reading.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 44
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The scissors are very sharp.",
        "difficulty": "Easy",
        "explanation": "Scissors (luôn plural)",
        "options": [
            {
                "id": 351,
                "option_text": "The scissors are very sharp.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "The scissor is very sharp.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "A scissors is very sharp.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "The scissorses are very sharp.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 44
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "There are many deer in the forest.",
        "difficulty": "Easy",
        "explanation": "Deer (số nhiều = số ít)",
        "options": [
            {
                "id": 361,
                "option_text": "There are many deer in the forest.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "There are many deers in the forest.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "There is many deer in the forest.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "There is a deer in the forest.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 44
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The group of students has completed the project.",
        "difficulty": "Easy",
        "explanation": "Group (danh từ tập hợp - singular verb)",
        "options": [
            {
                "id": 371,
                "option_text": "The group of students has completed the project.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "The group of students have completed the project.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "The groups of students has completed the project.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "A group of students have completed the project.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 44
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "My trousers are torn.",
        "difficulty": "Easy",
        "explanation": "Trousers (luôn plural)",
        "options": [
            {
                "id": 381,
                "option_text": "My trousers are torn.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "My trouser is torn.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "My trousers is torn.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "My trouser are torn.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 44
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "We saw several sheep on the farm.",
        "difficulty": "Easy",
        "explanation": "Sheep (số nhiều = số ít)",
        "options": [
            {
                "id": 391,
                "option_text": "We saw several sheep on the farm.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "We saw several sheeps on the farm.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "We saw a sheep on the farm.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "We saw several sheepes on the farm.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 44
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The committee has approved the budget.",
        "difficulty": "Easy",
        "explanation": "Committee (danh từ tập hợp - singular verb)",
        "options": [
            {
                "id": 401,
                "option_text": "The committee has approved the budget.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "The committee have approved the budget.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "The committees has approved the budget.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "A committee have approved the budget.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 44
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The axes of the graph are clearly labeled.",
        "difficulty": "Medium",
        "explanation": "Axes (bất quy tắc: axis → axes) (Danh Từ Chi Tiết - Số Nhiều Bất Quy Tắc phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "The axes of the graph are clearly labeled.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "The axis of the graph are clearly labeled.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "The axis of the graph is clearly labeled.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "The axises of the graph are clearly labeled.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 44
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The audience members were enthusiastic.",
        "difficulty": "Medium",
        "explanation": "Audience (danh từ tập hợp - singular) nhưng có thể thêm 'members' để làm plural",
        "options": [
            {
                "id": 621,
                "option_text": "The audience members were enthusiastic.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "The audience was enthusiastic.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "The audiences were enthusiastic.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "The audience have been enthusiastic.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 44
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The data has been collected from multiple sources.",
        "difficulty": "Medium",
        "explanation": "Data (singular verb - formal) (Danh Từ Chi Tiết - Số Nhiều Bất Quy Tắc)",
        "options": [
            {
                "id": 631,
                "option_text": "The data has been collected from multiple sources.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "The data have been collected from multiple sources.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "The datas has been collected from multiple sources.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "A data has been collected from multiple sources.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 44
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The flock of birds is flying south for winter.",
        "difficulty": "Medium",
        "explanation": "Flock (danh từ tập hợp - singular verb)",
        "options": [
            {
                "id": 641,
                "option_text": "The flock of birds is flying south for winter.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "The flock of birds are flying south for winter.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "The flocks of birds is flying south for winter.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "A flock of birds are flying south for winter.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 44
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "These phenomena are well-documented.",
        "difficulty": "Medium",
        "explanation": "Phenomena (bất quy tắc: phenomenon → phenomena)",
        "options": [
            {
                "id": 651,
                "option_text": "These phenomena are well-documented.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "This phenomenon are well-documented.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "These phenomenons are well-documented.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "This phenomenas are well-documented.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 44
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The alumni are returning for the reunion.",
        "difficulty": "Medium",
        "explanation": "Alumni (bất quy tắc: alumnus → alumni - plural)",
        "options": [
            {
                "id": 661,
                "option_text": "The alumni are returning for the reunion.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "The alumnus are returning for the reunion.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "The alumnus is returning for the reunion.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "A alumnus are returning for the reunion.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 44
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "My jeans are in the washing machine.",
        "difficulty": "Medium",
        "explanation": "Jeans (luôn plural)",
        "options": [
            {
                "id": 671,
                "option_text": "My jeans are in the washing machine.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "My jean is in the washing machine.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "My jeans is in the washing machine.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "A jeans is in the washing machine.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 44
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The bacteria found in the sample is dangerous.",
        "difficulty": "Medium",
        "explanation": "Bacteria (bất quy tắc - thường plural, nhưng có thể singular khi chỉ một loại)",
        "options": [
            {
                "id": 681,
                "option_text": "The bacteria found in the sample is dangerous.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "The bacterium found in the sample are dangerous.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "The bacteria found in the sample are dangerous.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "The bacterias found in the sample is dangerous.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 44
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The government has announced new policies.",
        "difficulty": "Medium",
        "explanation": "Government (danh từ tập hợp - singular verb)",
        "options": [
            {
                "id": 691,
                "option_text": "The government has announced new policies.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "The government have announced new policies.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "The governments has announced new policies.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "A government have announced new policies.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 44
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The geese were swimming in the pond.",
        "difficulty": "Medium",
        "explanation": "Geese (bất quy tắc: goose → geese)",
        "options": [
            {
                "id": 701,
                "option_text": "The geese were swimming in the pond.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "The goose were swimming in the pond.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "The gooses were swimming in the pond.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "The geese was swimming in the pond.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 44
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between collective nouns and plural?",
        "correct_answer": "Collective noun + singular verb (the team is); Plural + plural verb (the teams are)",
        "difficulty": "Hard",
        "explanation": "Danh từ tập hợp vs Plural (Danh Từ Chi Tiết nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "Collective noun + singular verb (the team is); Plural + plural verb (the teams are)",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "Collective noun + plural verb; Plural + singular verb",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "They follow the same verb agreement rule",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "Collective nouns are never used in English",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 44
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which shows irregular plurals correctly?",
        "correct_answer": "man→men, woman→women, child→children, person→people",
        "difficulty": "Hard",
        "explanation": "Số nhiều bất quy tắc",
        "options": [
            {
                "id": 821,
                "option_text": "man→men, woman→women, child→children, person→people",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "man→mans, woman→womans, child→childs, person→persons",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "man→mans, woman→womens, child→childes, person→peoples",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "All irregular plurals follow the +s rule",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 44
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which shows nouns with same singular and plural form?",
        "correct_answer": "sheep, deer, fish, moose, species",
        "difficulty": "Hard",
        "explanation": "Danh từ - số ít = số nhiều",
        "options": [
            {
                "id": 831,
                "option_text": "sheep, deer, fish, moose, species",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "sheep, deers, fishes, mooses, specieses",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "sheeps, deers, fish, mooses, species",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 844,
                "option_text": "All nouns with same form are invented",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 44
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which shows nouns that are always plural?",
        "correct_answer": "glasses, scissors, trousers, jeans, pants",
        "difficulty": "Hard",
        "explanation": "Danh từ luôn plural",
        "options": [
            {
                "id": 841,
                "option_text": "glasses, scissors, trousers, jeans, pants",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "glass, scissor, trouser, jean, pant",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "glasses, scissor, trouser, jeans, pant",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "These nouns can be singular or plural freely",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 44
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which correctly distinguishes British vs American usage?",
        "correct_answer": "British: The staff are divided; American: The staff is divided",
        "difficulty": "Hard",
        "explanation": "Khác nhau giữa Anh và Mỹ",
        "options": [
            {
                "id": 851,
                "option_text": "British: The staff are divided; American: The staff is divided",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "British: The staff is divided; American: The staff are divided",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "Both use 'The staff are divided' always",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "Both use 'The staff is divided' always",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 44
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which shows Latin/Greek plurals correctly?",
        "correct_answer": "stimulus→stimuli, cactus→cacti, fungus→fungi, thesis→theses",
        "difficulty": "Hard",
        "explanation": "Số nhiều Latin/Greek",
        "options": [
            {
                "id": 861,
                "option_text": "stimulus→stimuli, cactus→cacti, fungus→fungi, thesis→theses",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "stimulus→stimuluses, cactus→cactuses, fungus→funguses, thesis→thesises",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "stimulus→stimulas, cactus→cactas, fungus→fungas, thesis→thesas",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 884,
                "option_text": "All follow the regular +s or +es rule",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 44
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which uses compound nouns correctly?",
        "correct_answer": "The brothers-in-law are coming; The mother-in-laws are here",
        "difficulty": "Hard",
        "explanation": "Danh từ ghép",
        "options": [
            {
                "id": 871,
                "option_text": "The brothers-in-law are coming; The mother-in-laws are here",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "The brother-in-laws are coming; The mothers-in-law are here",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "The brother-in-laws are coming; The mother-in-laws are here",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 884,
                "option_text": "The brothers-in-laws are coming; The mothers-in-laws are here",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 44
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which correctly pluralizes compound nouns?",
        "correct_answer": "editors-in-chief, commanders-in-chief, attorneys-at-law",
        "difficulty": "Hard",
        "explanation": "Danh từ ghép - plural",
        "options": [
            {
                "id": 881,
                "option_text": "editors-in-chief, commanders-in-chief, attorneys-at-law",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "editor-in-chiefs, commander-in-chiefs, attorney-at-laws",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "editors-in-chieves, commanders-in-chieves, attorneys-at-lawes",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "All compound nouns just add +s at the end",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 44
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct agreement with 'police'?",
        "correct_answer": "The police are investigating the case.",
        "difficulty": "Hard",
        "explanation": "Police - luôn plural verb",
        "options": [
            {
                "id": 891,
                "option_text": "The police are investigating the case.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "The police is investigating the case.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "The policeman are investigating the case.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "The polices are investigating the case.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 44
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Noun Details",
        "correct_answer": "Noun details include irregular plurals, collective nouns, and always-plural nouns",
        "options": [
            {
                "id": 901,
                "option_text": "Noun details include irregular plurals, collective nouns, and always-plural nouns",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All nouns follow regular +s or +es rules",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Collective nouns are rarely used in English",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Noun agreement rules are the same in all languages",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "options": [
            {
                "id": 901,
                "option_text": "Noun details include irregular plurals, collective nouns, and always-plural nouns",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All nouns follow regular +s or +es rules",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Collective nouns are rarely used in English",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Noun agreement rules are the same in all languages",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 44
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which shows when to use 'data' as singular vs plural?",
        "correct_answer": "Formal: data is; Informal: data are",
        "difficulty": "Hard",
        "explanation": "Data - singular hoặc plural",
        "options": [
            {
                "id": 911,
                "option_text": "Formal: data is; Informal: data are",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "Always: data is",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Always: data are",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Data cannot be used in English",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 44
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct collective noun behavior?",
        "correct_answer": "When the group acts as one unit: The team is; When members act individually: The team are",
        "difficulty": "Hard",
        "explanation": "Danh từ tập hợp - singular vs plural",
        "options": [
            {
                "id": 921,
                "option_text": "When the group acts as one unit: The team is; When members act individually: The team are",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "Collective nouns always use singular verb",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "Collective nouns always use plural verb",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Context doesn't matter for collective nouns",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 44
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which shows Greek/Latin plural rules?",
        "correct_answer": "-us→-i (cactus→cacti), -is→-es (thesis→theses), -on→-a (phenomenon→phenomena)",
        "difficulty": "Hard",
        "explanation": "Quy tắc Latin/Greek",
        "options": [
            {
                "id": 931,
                "option_text": "-us→-i (cactus→cacti), -is→-es (thesis→theses), -on→-a (phenomenon→phenomena)",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "-us→-es (cactus→cacteses), -is→-is (thesis→thesis), -on→-on (phenomenon→phenomenon)",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "-us→-s (cactus→cactuss), -is→-s (thesis→thesiss), -on→-s (phenomenon→phenomenons)",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 944,
                "option_text": "All Greek/Latin nouns follow +s rule",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 44
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which correctly identifies compound noun plurals?",
        "correct_answer": "Noun + modifier: Plural the noun (mothers-in-law, brothers-in-law)",
        "difficulty": "Hard",
        "explanation": "Danh từ ghép - plural form",
        "options": [
            {
                "id": 941,
                "option_text": "Noun + modifier: Plural the noun (mothers-in-law, brothers-in-law)",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "Always plural the last part (mother-in-laws, brother-in-laws)",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Add +s to both parts (mothers-in-laws, brothers-in-laws)",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Compound nouns never change form",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 44
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which shows words requiring plural agreement?",
        "correct_answer": "police, people, media, bacteria, criteria",
        "difficulty": "Hard",
        "explanation": "Danh từ - luôn plural verb",
        "options": [
            {
                "id": 951,
                "option_text": "police, people, media, bacteria, criteria",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "police, person, medium, bacterium, criterion",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "polices, peoples, medias, bacterias, criterias",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "All nouns can be either singular or plural",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 44
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which pair is INCORRECT?",
        "correct_answer": "The sheeps are in the field. = WRONG (should be 'sheep' - same singular/plural)",
        "difficulty": "Hard",
        "explanation": "Sai - sheep",
        "options": [
            {
                "id": 961,
                "option_text": "The sheeps are in the field. = WRONG (should be 'sheep' - same singular/plural)",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "The sheep are in the field. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "The team is playing well. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "The children are studying. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 44
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which correctly forms compound noun plurals?",
        "correct_answer": "passersby, hangers-on, lookers-on",
        "difficulty": "Hard",
        "explanation": "Danh từ ghép - plural",
        "options": [
            {
                "id": 971,
                "option_text": "passersby, hangers-on, lookers-on",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "passers-by, hanging-on, looking-on",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "passerby, hangers-ons, lookers-ons",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "All compound nouns just add +s",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 44
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which correctly identifies nouns with irregular plurals?",
        "correct_answer": "tooth→teeth, foot→feet, goose→geese, mouse→mice, louse→lice",
        "difficulty": "Hard",
        "explanation": "Số nhiều bất quy tắc",
        "options": [
            {
                "id": 981,
                "option_text": "tooth→teeth, foot→feet, goose→geese, mouse→mice, louse→lice",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "tooth→tooths, foot→foots, goose→gooses, mouse→mouses, louse→louses",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "tooth→teethes, foot→feetes, goose→geeses, mouse→mices, louse→lices",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "All irregular plurals follow a single rule",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 44
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which shows British collective noun usage?",
        "correct_answer": "The government are divided; The team are playing",
        "difficulty": "Hard",
        "explanation": "Anh - collective nouns often plural",
        "options": [
            {
                "id": 991,
                "option_text": "The government are divided; The team are playing",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "The government is divided; The team is playing",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "The governments are divided; The teams are playing",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "British and American rules are identical",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 44
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Irregular plurals, collective nouns, and compound nouns require special attention to verb agreement",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Noun Details",
        "options": [
            {
                "id": 1001,
                "option_text": "Irregular plurals, collective nouns, and compound nouns require special attention to verb agreement",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "All nouns follow identical verb agreement rules",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Noun details don't affect sentence structure",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Compound nouns are rarely used in English",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 44
    }
];

export default questions;