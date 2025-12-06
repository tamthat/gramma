const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "Do you have ___ apples?",
        "correct_answer": "any",
        "suggest_answer": "any",
        "explanation": "Any (câu hỏi) - Lượng Từ Bất Định",
        "difficulty": "Easy",
        "topic_id": 42
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "Yes, I have ___ apples.",
        "correct_answer": "some",
        "suggest_answer": "some",
        "explanation": "Some (phủ định) - Lượng Từ",
        "difficulty": "Easy",
        "topic_id": 42
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "How ___ students are in the class?",
        "correct_answer": "many",
        "suggest_answer": "many",
        "explanation": "Many + countable (Lượng Từ - Đếm Được)",
        "difficulty": "Easy",
        "topic_id": 42
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "How ___ water do you drink daily?",
        "correct_answer": "much",
        "suggest_answer": "much",
        "explanation": "Much + uncountable (Lượng Từ - Không Đếm Được)",
        "difficulty": "Easy",
        "topic_id": 42
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "There are ___ people at the party.",
        "correct_answer": "a lot of",
        "suggest_answer": "a lot of",
        "explanation": "A lot of + plural countable",
        "difficulty": "Easy",
        "topic_id": 42
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "She has ___ time to study.",
        "correct_answer": "a little",
        "suggest_answer": "a little",
        "explanation": "A little + uncountable (Lượng Từ - Một Ít)",
        "difficulty": "Easy",
        "topic_id": 42
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "He made ___ mistakes in the exam.",
        "correct_answer": "a few",
        "suggest_answer": "a few",
        "explanation": "A few + countable (một vài)",
        "difficulty": "Easy",
        "topic_id": 42
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "___ students passed the test.",
        "correct_answer": "Most",
        "suggest_answer": "Most",
        "explanation": "Most + plural countable (Phần lớn)",
        "difficulty": "Easy",
        "topic_id": 42
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "She doesn't have ___ money.",
        "correct_answer": "any",
        "suggest_answer": "any",
        "explanation": "Any + uncountable (phủ định)",
        "difficulty": "Easy",
        "topic_id": 42
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "We need ___ more time to finish.",
        "correct_answer": "some",
        "suggest_answer": "some",
        "explanation": "Some (yêu cầu)",
        "difficulty": "Easy",
        "topic_id": 42
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "___ of the students were absent yesterday.",
        "correct_answer": "All",
        "suggest_answer": "All",
        "explanation": "All of + plural noun (Lượng Từ - Tất Cả phức tạp)",
        "difficulty": "Medium",
        "topic_id": 42
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "There is ___ traffic on the highway.",
        "correct_answer": "a lot of",
        "suggest_answer": "a lot of",
        "explanation": "A lot of + uncountable",
        "difficulty": "Medium",
        "topic_id": 42
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "I don't have ___ patience left.",
        "correct_answer": "much",
        "suggest_answer": "much",
        "explanation": "Much + uncountable (phủ định)",
        "difficulty": "Medium",
        "topic_id": 42
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "Is there ___ sugar in this coffee?",
        "correct_answer": "any",
        "suggest_answer": "any",
        "explanation": "Any + uncountable (câu hỏi)",
        "difficulty": "Medium",
        "topic_id": 42
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "Do you want ___ more tea?",
        "correct_answer": "some",
        "suggest_answer": "some",
        "explanation": "Some (đề nghị lịch sự)",
        "difficulty": "Medium",
        "topic_id": 42
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "There are only ___ days left before vacation.",
        "correct_answer": "a few",
        "suggest_answer": "a few",
        "explanation": "A few + countable (một vài ngày)",
        "difficulty": "Medium",
        "topic_id": 42
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "She has ___ experience with this job.",
        "correct_answer": "a little",
        "suggest_answer": "a little",
        "explanation": "A little + uncountable (một ít kinh nghiệm)",
        "difficulty": "Medium",
        "topic_id": 42
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "___ the students in this school are from the city.",
        "correct_answer": "Most of",
        "suggest_answer": "Most of",
        "explanation": "Most of + plural noun",
        "difficulty": "Medium",
        "topic_id": 42
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "Is there ___ information about the project?",
        "correct_answer": "any",
        "suggest_answer": "any",
        "explanation": "Any + uncountable (câu hỏi)",
        "difficulty": "Medium",
        "topic_id": 42
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "I have ___ books on this topic.",
        "correct_answer": "several",
        "suggest_answer": "several",
        "explanation": "Several + countable (vài cái)",
        "difficulty": "Medium",
        "topic_id": 42
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "___ of the work has been completed already.",
        "correct_answer": "Most",
        "suggest_answer": "Most",
        "explanation": "Most + uncountable (Lượng Từ nâng cao - Phần lớn công việc)",
        "difficulty": "Hard",
        "topic_id": 42
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "There is ___ milk left in the bottle.",
        "correct_answer": "a little",
        "suggest_answer": "a little",
        "explanation": "A little + uncountable (một ít)",
        "difficulty": "Hard",
        "topic_id": 42
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "Do you have ___ suggestions for improvement?",
        "correct_answer": "any",
        "suggest_answer": "any",
        "explanation": "Any + countable (câu hỏi)",
        "difficulty": "Hard",
        "topic_id": 42
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "We don't have ___ rooms available.",
        "correct_answer": "any",
        "suggest_answer": "any",
        "explanation": "Any + countable (phủ định)",
        "difficulty": "Hard",
        "topic_id": 42
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "___  the population lives in cities.",
        "correct_answer": "Most of",
        "suggest_answer": "Most of",
        "explanation": "Most of + uncountable noun",
        "difficulty": "Hard",
        "topic_id": 42
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "There are ___ problems to solve.",
        "correct_answer": "many",
        "suggest_answer": "many",
        "explanation": "Many + countable (nhiều vấn đề)",
        "difficulty": "Hard",
        "topic_id": 42
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "I've read ___ books on this subject.",
        "correct_answer": "several",
        "suggest_answer": "several",
        "explanation": "Several + countable (vài cuốn sách)",
        "difficulty": "Hard",
        "topic_id": 42
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "She has ___ doubts about the plan.",
        "correct_answer": "few",
        "suggest_answer": "few",
        "explanation": "Few (very little - hiếm khi) vs a few (một vài)",
        "difficulty": "Hard",
        "topic_id": 42
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "There is ___ hope for a solution.",
        "correct_answer": "little",
        "suggest_answer": "little",
        "explanation": "Little (very little - hầu như không) vs a little (một ít)",
        "difficulty": "Hard",
        "topic_id": 42
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "___ one of us wanted to leave early.",
        "correct_answer": "None",
        "suggest_answer": "None",
        "explanation": "None + of (cái nào cũng không)",
        "difficulty": "Hard",
        "topic_id": 42
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'some' and 'any'?",
        "correct_answer": "I have some books, but I don't have any pencils.",
        "difficulty": "Easy",
        "explanation": "Some + positive, any + negative (Lượng Từ Bất Định)",
        "options": [
            {
                "id": 311,
                "option_text": "I have some books, but I don't have any pencils.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "I have any books, but I don't have some pencils.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "I have some books, and I have any pencils.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "I have any books, and I have some pencils.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 42
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'much' and 'many'?",
        "correct_answer": "How many students are there? How much homework do you have?",
        "difficulty": "Easy",
        "explanation": "Many + countable, much + uncountable",
        "options": [
            {
                "id": 321,
                "option_text": "How many students are there? How much homework do you have?",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "How much students are there? How many homework do you have?",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "How many students are there? How many homework do you have?",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "How much students are there? How much homework do you have?",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 42
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'a few' and 'a little'?",
        "correct_answer": "I need a few minutes and a little help.",
        "difficulty": "Easy",
        "explanation": "A few + countable, a little + uncountable",
        "options": [
            {
                "id": 331,
                "option_text": "I need a few minutes and a little help.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "I need a little minutes and a few help.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "I need a few help and a little minutes.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "I need a little minutes and a few help.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 42
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'all' and 'most'?",
        "correct_answer": "All the students attended, but most passed the exam.",
        "difficulty": "Easy",
        "explanation": "All (tất cả), most (phần lớn)",
        "options": [
            {
                "id": 341,
                "option_text": "All the students attended, but most passed the exam.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "Most the students attended, but all passed the exam.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "All students attended, and all passed the exam.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "Most students attended, and most passed the exam.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 42
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "There is a lot of traffic on the highway.",
        "difficulty": "Easy",
        "explanation": "A lot of + uncountable",
        "options": [
            {
                "id": 351,
                "option_text": "There is a lot of traffic on the highway.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "There are a lot of traffic on the highway.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "There is many traffic on the highway.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "There is a few traffic on the highway.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 42
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Can you give me some advice about this?",
        "difficulty": "Easy",
        "explanation": "Some + request (lịch sự)",
        "options": [
            {
                "id": 361,
                "option_text": "Can you give me some advice about this?",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "Can you give me any advice about this?",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "Can you give me many advice about this?",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "Can you give me a few advice about this?",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 42
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "There are enough chairs for all the guests.",
        "difficulty": "Easy",
        "explanation": "Enough + noun",
        "options": [
            {
                "id": 371,
                "option_text": "There are enough chairs for all the guests.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "There are chairs enough for all the guests.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "There are enough for all the guests chairs.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "There are all enough chairs for the guests.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 42
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "She doesn't have enough time to finish the project.",
        "difficulty": "Easy",
        "explanation": "Enough + uncountable noun",
        "options": [
            {
                "id": 381,
                "option_text": "She doesn't have enough time to finish the project.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "She doesn't have time enough to finish the project.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "She has not enough time to finish the project.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "She doesn't have enough times to finish the project.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 42
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Several people attended the meeting yesterday.",
        "difficulty": "Easy",
        "explanation": "Several + countable (vài người)",
        "options": [
            {
                "id": 391,
                "option_text": "Several people attended the meeting yesterday.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "Several water attended the meeting yesterday.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "Several information attended the meeting yesterday.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "Several time attended the meeting yesterday.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 42
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Most of the students understood the lesson.",
        "difficulty": "Easy",
        "explanation": "Most of + plural noun",
        "options": [
            {
                "id": 401,
                "option_text": "Most of the students understood the lesson.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "Most the students understood the lesson.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "Most of students understood the lesson.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "Most students understood the lesson.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 42
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Would you like some coffee or any tea?",
        "difficulty": "Medium",
        "explanation": "Some (đề nghị), any (lựa chọn) (Lượng Từ phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "Would you like some coffee or any tea?",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "Would you like any coffee or some tea?",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Would you like some coffee or some tea?",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "Would you like any coffee or any tea?",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 42
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I don't have much experience, but I have a few skills.",
        "difficulty": "Medium",
        "explanation": "Much + uncountable (phủ định), a few + countable",
        "options": [
            {
                "id": 621,
                "option_text": "I don't have much experience, but I have a few skills.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "I don't have many experience, but I have a little skills.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "I don't have a few experience, but I have much skills.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "I don't have a little experience, but I have many skills.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 42
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "There are a lot of people and a lot of noise.",
        "difficulty": "Medium",
        "explanation": "A lot of + countable/uncountable",
        "options": [
            {
                "id": 631,
                "option_text": "There are a lot of people and a lot of noise.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "There are a lot of people and many noise.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "There is a lot of people and a lot of noise.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "There are many people and much noise.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 42
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Few people understand this concept, but some try.",
        "difficulty": "Medium",
        "explanation": "Few (hầu như không) vs a few (một vài)",
        "options": [
            {
                "id": 641,
                "option_text": "Few people understand this concept, but some try.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "A few people understand this concept, but any try.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "A little people understand this concept, but some try.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "Little people understand this concept, and many try.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 42
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "There is little hope for a quick solution.",
        "difficulty": "Medium",
        "explanation": "Little (hầu như không) + uncountable",
        "options": [
            {
                "id": 651,
                "option_text": "There is little hope for a quick solution.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "There is a little hope for a quick solution.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "There are few hope for a quick solution.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "There are a few hope for a quick solution.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 42
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "All of my friends like this restaurant.",
        "difficulty": "Medium",
        "explanation": "All of + possessive + plural noun",
        "options": [
            {
                "id": 661,
                "option_text": "All of my friends like this restaurant.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "All my friends like this restaurant.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "All of friends like this restaurant.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "All the of friends like this restaurant.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 42
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Is there any milk left, or do I need to buy some?",
        "difficulty": "Medium",
        "explanation": "Any (câu hỏi), some (đề nghị)",
        "options": [
            {
                "id": 671,
                "option_text": "Is there any milk left, or do I need to buy some?",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "Is there some milk left, or do I need to buy any?",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "Is there milk left, or do I need to buy milk?",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "Is there some milk left, and do I need to buy some?",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 42
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Most of the work is done, but some remains.",
        "difficulty": "Medium",
        "explanation": "Most of + uncountable, some + countable/uncountable",
        "options": [
            {
                "id": 681,
                "option_text": "Most of the work is done, but some remains.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "Most work is done, but many remains.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "All of the work is done, but a few remains.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "Most the work is done, and several remains.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 42
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "She has enough money and enough time for the project.",
        "difficulty": "Medium",
        "explanation": "Enough + noun (không thêm of)",
        "options": [
            {
                "id": 691,
                "option_text": "She has enough money and enough time for the project.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "She has enough of money and enough of time for the project.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "She has money enough and time enough for the project.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "She enough has money and enough has time for the project.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 42
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "None of the students failed the test.",
        "difficulty": "Medium",
        "explanation": "None of + plural noun + plural verb",
        "options": [
            {
                "id": 701,
                "option_text": "None of the students failed the test.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "None of students failed the test.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "No of the students failed the test.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "None students failed the test.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 42
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between 'few' and 'a few'?",
        "correct_answer": "Few = almost none; A few = some, but not many",
        "difficulty": "Hard",
        "explanation": "Few vs A few (Lượng Từ nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "Few = almost none; A few = some, but not many",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "Few = some; A few = almost none",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "Both mean the same thing",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "Few is only used with uncountable nouns",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 42
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between 'little' and 'a little'?",
        "correct_answer": "Little = almost none; A little = some",
        "difficulty": "Hard",
        "explanation": "Little vs A little",
        "options": [
            {
                "id": 821,
                "option_text": "Little = almost none; A little = some",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Little = some; A little = almost none",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Both mean exactly the same",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "Little is used with countable nouns",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 42
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'some' in requests?",
        "correct_answer": "Would you like some water with your meal?",
        "difficulty": "Hard",
        "explanation": "Some + polite request (không phải any)",
        "options": [
            {
                "id": 831,
                "option_text": "Would you like some water with your meal?",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "Would you like any water with your meal?",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "Do you have water with your meal?",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "Would you like much water with your meal?",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 42
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'enough'?",
        "correct_answer": "She is smart enough to solve the problem.",
        "difficulty": "Hard",
        "explanation": "Enough + adjective (sau tính từ)",
        "options": [
            {
                "id": 841,
                "option_text": "She is smart enough to solve the problem.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "She is enough smart to solve the problem.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "She enough is smart to solve the problem.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "She is smartly enough to solve the problem.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 42
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'all' vs 'the whole'?",
        "correct_answer": "All students attended, and the whole class participated.",
        "difficulty": "Hard",
        "explanation": "All (tất cả từng cái), the whole (toàn bộ)",
        "options": [
            {
                "id": 851,
                "option_text": "All students attended, and the whole class participated.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "All students attended, and whole class participated.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "The whole students attended, and all class participated.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "All the students attended, and whole the class participated.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 42
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'many' and 'a lot of'?",
        "correct_answer": "There are many problems and a lot of solutions.",
        "difficulty": "Hard",
        "explanation": "Many (formal), a lot of (informal - countable/uncountable)",
        "options": [
            {
                "id": 861,
                "option_text": "There are many problems and a lot of solutions.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "There are a lot of problems and many solutions.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "There are much problems and many solutions.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "There are several problems and several solutions.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 42
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which correctly distinguishes contexts for 'any'?",
        "correct_answer": "Is there any problem? I don't have any doubts.",
        "difficulty": "Hard",
        "explanation": "Any (câu hỏi/phủ định)",
        "options": [
            {
                "id": 871,
                "option_text": "Is there any problem? I don't have any doubts.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Is there some problem? I don't have some doubts.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "Is there a problem? I don't have a doubts.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 884,
                "option_text": "Are there any problem? I don't have any doubt.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 42
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'none' and 'no'?",
        "correct_answer": "None of the answers were correct, and there was no solution.",
        "difficulty": "Hard",
        "explanation": "None of + noun, no + noun (determiners)",
        "options": [
            {
                "id": 881,
                "option_text": "None of the answers were correct, and there was no solution.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "No of the answers were correct, and there was none solution.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "None answers were correct, and there was no of solution.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "None the answers were correct, and there no was solution.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 42
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'several' and 'some'?",
        "correct_answer": "Several people arrived, and some brought gifts.",
        "difficulty": "Hard",
        "explanation": "Several (chính xác hơn), some (mơ hồ hơn)",
        "options": [
            {
                "id": 891,
                "option_text": "Several people arrived, and some brought gifts.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "Some people arrived, and several brought gifts.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "Several people arrived, and several brought gifts.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "Some people arrived, and some brought gifts.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 42
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Lượng Từ",
        "correct_answer": "Quantifiers depend on whether nouns are countable and context (question/negative/positive)",
        "options": [
            {
                "id": 901,
                "option_text": "Quantifiers depend on whether nouns are countable and context (question/negative/positive)",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All quantifiers can be used with any noun type",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Context doesn't matter for quantifier choice",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Quantifiers are rarely used in modern English",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "options": [
            {
                "id": 901,
                "option_text": "Quantifiers depend on whether nouns are countable and context (question/negative/positive)",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All quantifiers can be used with any noun type",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Context doesn't matter for quantifier choice",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Quantifiers are rarely used in modern English",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 42
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which shows when to use 'some' vs 'any'?",
        "correct_answer": "Use some in positive statements and polite requests; any in questions and negatives",
        "difficulty": "Hard",
        "explanation": "Some vs Any - context",
        "options": [
            {
                "id": 911,
                "option_text": "Use some in positive statements and polite requests; any in questions and negatives",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "Some is for negatives; any is for positives",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "They are completely interchangeable",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Always use some, never any",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 42
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which shows the key difference between 'much' and 'many'?",
        "correct_answer": "Much is for uncountable nouns; many is for countable nouns",
        "difficulty": "Hard",
        "explanation": "Much vs Many - countability",
        "options": [
            {
                "id": 921,
                "option_text": "Much is for uncountable nouns; many is for countable nouns",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "Much is for countable nouns; many is for uncountable",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "They can be used interchangeably",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Always use many regardless of noun type",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 42
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which shows the rule for 'enough' with adjectives?",
        "correct_answer": "Enough follows the adjective: adjective + enough",
        "difficulty": "Hard",
        "explanation": "Enough position với adjective",
        "options": [
            {
                "id": 931,
                "option_text": "Enough follows the adjective: adjective + enough",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "Enough precedes the adjective: enough + adjective",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "Enough can go either before or after",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "Enough is rarely used with adjectives",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 42
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which shows when 'all' can be used without 'of'?",
        "correct_answer": "All + noun OR All the + noun (but not All of + noun without 'the')",
        "difficulty": "Hard",
        "explanation": "All usage patterns",
        "options": [
            {
                "id": 941,
                "option_text": "All + noun OR All the + noun (but not All of + noun without 'the')",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "Always use All of with of",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Never use of after all",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "All requires the before of",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 42
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between 'some' and 'several'?",
        "correct_answer": "Some = indefinite amount; several = specific but small number",
        "difficulty": "Hard",
        "explanation": "Some vs Several - definiteness",
        "options": [
            {
                "id": 951,
                "option_text": "Some = indefinite amount; several = specific but small number",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "Several = indefinite; some = specific",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "They mean exactly the same",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "Several is never used in formal writing",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 42
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which pair shows INCORRECT quantifier use?",
        "correct_answer": "I have many water in the bottle. = WRONG (should be 'much')",
        "difficulty": "Hard",
        "explanation": "Sai - many + uncountable",
        "options": [
            {
                "id": 961,
                "option_text": "I have many water in the bottle. = WRONG (should be 'much')",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "I have much water in the bottle. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "I have many bottles of water. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "All are equally correct",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 42
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'most' with different noun types?",
        "correct_answer": "Most students passed; most money was spent.",
        "difficulty": "Hard",
        "explanation": "Most + countable/uncountable (same form)",
        "options": [
            {
                "id": 971,
                "option_text": "Most students passed; most money was spent.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "Most of students passed; most of money was spent.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "Most passed students; most spent money.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "Most the students passed; most the money was spent.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 42
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'no' vs 'none'?",
        "correct_answer": "No students were late; none of them arrived after time.",
        "difficulty": "Hard",
        "explanation": "No + noun, none of + pronoun/noun",
        "options": [
            {
                "id": 981,
                "option_text": "No students were late; none of them arrived after time.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "None students were late; no of them arrived after time.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "No of students were late; none them arrived after time.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "None of students were late; no them arrived after time.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 42
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which shows incorrect quantifier placement?",
        "correct_answer": "She has enough books of enough quantity. = AWKWARD",
        "difficulty": "Hard",
        "explanation": "Sai - placement of enough",
        "options": [
            {
                "id": 991,
                "option_text": "She has enough books of enough quantity. = AWKWARD",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "She has enough books of the right quantity. = CORRECT",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "She has enough books in sufficient quantity. = CORRECT",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "All formations are equally correct",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 42
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Countable uses many/a few/several; uncountable uses much/a little/plenty; a lot of works for both",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Lượng Từ",
        "options": [
            {
                "id": 1001,
                "option_text": "Countable uses many/a few/several; uncountable uses much/a little/plenty; a lot of works for both",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "All quantifiers work the same way",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Countability doesn't matter for quantifiers",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Quantifier rules are arbitrary and unpredictable",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 42
    }
];

export default questions;