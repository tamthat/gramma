const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "___ John ___ Mary likes coffee.",
        "correct_answer": "Neither / nor",
        "suggest_answer": "Neither / nor",
        "explanation": "Neither...nor (Liên Từ Tương Quan - cả hai không)",
        "difficulty": "Easy",
        "topic_id": 39
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "___ tea ___ coffee is available.",
        "correct_answer": "Either / or",
        "suggest_answer": "Either / or",
        "explanation": "Either...or (hoặc...hoặc)",
        "difficulty": "Easy",
        "topic_id": 39
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "___ Jane ___ her sister attended the party.",
        "correct_answer": "Both / and",
        "suggest_answer": "Both / and",
        "explanation": "Both...and (cả hai)",
        "difficulty": "Easy",
        "topic_id": 39
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "This book is ___ interesting ___ informative.",
        "correct_answer": "not only / but also",
        "suggest_answer": "not only / but also",
        "explanation": "Not only...but also (không những...mà còn)",
        "difficulty": "Easy",
        "topic_id": 39
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "___ swimming ___ hiking are good exercises.",
        "correct_answer": "Both / and",
        "suggest_answer": "Both / and",
        "explanation": "Both...and (cả hai hoạt động)",
        "difficulty": "Easy",
        "topic_id": 39
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "She ___ speaks French ___ Spanish.",
        "correct_answer": "neither / nor",
        "suggest_answer": "neither / nor",
        "explanation": "Neither...nor (không...cũng không)",
        "difficulty": "Easy",
        "topic_id": 39
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "You can choose ___ apple ___ orange.",
        "correct_answer": "either / or",
        "suggest_answer": "either / or",
        "explanation": "Either...or (lựa chọn giữa hai cái)",
        "difficulty": "Easy",
        "topic_id": 39
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "He is ___ intelligent ___ hardworking.",
        "correct_answer": "both / and",
        "suggest_answer": "both / and",
        "explanation": "Both...and (hai đặc điểm)",
        "difficulty": "Easy",
        "topic_id": 39
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "___ cats ___ dogs are welcome here.",
        "correct_answer": "Neither / nor",
        "suggest_answer": "Neither / nor",
        "explanation": "Neither...nor (không thú nào)",
        "difficulty": "Easy",
        "topic_id": 39
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "The movie is ___ funny ___ sad.",
        "correct_answer": "either / or",
        "suggest_answer": "either / or",
        "explanation": "Either...or (hoặc vui hoặc buồn)",
        "difficulty": "Easy",
        "topic_id": 39
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "___ her parents ___ she agreed to the plan.",
        "correct_answer": "Neither / nor",
        "suggest_answer": "Neither / nor",
        "explanation": "Neither...nor (Liên Từ Tương Quan phức tạp - cả ba không)",
        "difficulty": "Medium",
        "topic_id": 39
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "___ red wine ___ white wine pairs well with fish.",
        "correct_answer": "Either / or",
        "suggest_answer": "Either / or",
        "explanation": "Either...or (một trong hai)",
        "difficulty": "Medium",
        "topic_id": 39
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "___ education ___ experience are crucial for success.",
        "correct_answer": "Both / and",
        "suggest_answer": "Both / and",
        "explanation": "Both...and (hai yếu tố quan trọng)",
        "difficulty": "Medium",
        "topic_id": 39
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "This article is ___ well-researched ___ beautifully written.",
        "correct_answer": "not only / but also",
        "suggest_answer": "not only / but also",
        "explanation": "Not only...but also (không chỉ...mà còn)",
        "difficulty": "Medium",
        "topic_id": 39
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "___ James ___ his brother likes basketball.",
        "correct_answer": "Both / and",
        "suggest_answer": "Both / and",
        "explanation": "Both...and (cả hai người)",
        "difficulty": "Medium",
        "topic_id": 39
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "He ___ sings ___ dances well.",
        "correct_answer": "neither / nor",
        "suggest_answer": "neither / nor",
        "explanation": "Neither...nor (anh ấy không làm cả hai)",
        "difficulty": "Medium",
        "topic_id": 39
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "You should take ___ the morning bus ___ the evening bus.",
        "correct_answer": "either / or",
        "suggest_answer": "either / or",
        "explanation": "Either...or (lựa chọn một)",
        "difficulty": "Medium",
        "topic_id": 39
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "___ the book ___ the movie is excellent.",
        "correct_answer": "Both / and",
        "suggest_answer": "Both / and",
        "explanation": "Both...and (hai cái đều tốt)",
        "difficulty": "Medium",
        "topic_id": 39
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "___ Tom ___ Jerry was responsible for the accident.",
        "correct_answer": "Neither / nor",
        "suggest_answer": "Neither / nor",
        "explanation": "Neither...nor (cả hai không chịu trách nhiệm)",
        "difficulty": "Medium",
        "topic_id": 39
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "The city offers ___ culture ___ entertainment.",
        "correct_answer": "both / and",
        "suggest_answer": "both / and",
        "explanation": "Both...and (cả văn hóa và giải trí)",
        "difficulty": "Medium",
        "topic_id": 39
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "___ you ___ I ___ they will participate.",
        "correct_answer": "Neither / nor / nor",
        "suggest_answer": "Neither / nor / nor",
        "explanation": "Neither...nor (ba người không tham gia - Liên Từ Tương Quan nâng cao)",
        "difficulty": "Hard",
        "topic_id": 39
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "The project is ___ ambitious ___ necessary.",
        "correct_answer": "not only / but also",
        "suggest_answer": "not only / but also",
        "explanation": "Not only...but also (không chỉ tham vọng mà còn cần thiết)",
        "difficulty": "Hard",
        "topic_id": 39
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "___ he ___ she understands the situation.",
        "correct_answer": "Neither / nor",
        "suggest_answer": "Neither / nor",
        "explanation": "Neither...nor (cả hai không hiểu)",
        "difficulty": "Hard",
        "topic_id": 39
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "___ biology ___ chemistry ___ physics interests me.",
        "correct_answer": "Either / or / or",
        "suggest_answer": "Either / or / or",
        "explanation": "Either...or...or (một trong ba)",
        "difficulty": "Hard",
        "topic_id": 39
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "____ success ____ failure depends on your effort.",
        "correct_answer": "Both / and",
        "suggest_answer": "Both / and",
        "explanation": "Both...and (cả thành công và thất bại)",
        "difficulty": "Hard",
        "topic_id": 39
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "She is ___ beautiful ___ intelligent ___ kind.",
        "correct_answer": "not only / but also / and",
        "suggest_answer": "not only / but also / and",
        "explanation": "Not only...but also (không chỉ...mà còn...và)",
        "difficulty": "Hard",
        "topic_id": 39
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "___ my father ___ my mother was at home.",
        "correct_answer": "Neither / nor",
        "suggest_answer": "Neither / nor",
        "explanation": "Neither...nor (cả ba không ở nhà)",
        "difficulty": "Hard",
        "topic_id": 39
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "You can ___ accept the offer ___ reject it.",
        "correct_answer": "either / or",
        "suggest_answer": "either / or",
        "explanation": "Either...or (lựa chọn giữa hai)",
        "difficulty": "Hard",
        "topic_id": 39
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "____ quality ____ quantity matters in this case.",
        "correct_answer": "Both / and",
        "suggest_answer": "Both / and",
        "explanation": "Both...and (cả chất lượng và số lượng)",
        "difficulty": "Hard",
        "topic_id": 39
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "He is ___ gifted as a musician ___ talented as a teacher.",
        "correct_answer": "not only / but also",
        "suggest_answer": "not only / but also",
        "explanation": "Not only...but also (không chỉ...mà còn)",
        "difficulty": "Hard",
        "topic_id": 39
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'neither...nor'?",
        "correct_answer": "Neither Jane nor Tom likes vegetables.",
        "difficulty": "Easy",
        "explanation": "Neither...nor (Liên Từ Tương Quan)",
        "options": [
            {
                "id": 311,
                "option_text": "Neither Jane nor Tom likes vegetables.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "Neither Jane or Tom likes vegetables.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "Jane neither nor Tom likes vegetables.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "Neither nor Jane Tom likes vegetables.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 39
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'either...or'?",
        "correct_answer": "Either coffee or tea will be served.",
        "difficulty": "Easy",
        "explanation": "Either...or (hoặc...hoặc)",
        "options": [
            {
                "id": 321,
                "option_text": "Either coffee or tea will be served.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "Either coffee and tea will be served.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "Either coffee nor tea will be served.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "Coffee either or tea will be served.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 39
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'both...and'?",
        "correct_answer": "Both swimming and running are good exercises.",
        "difficulty": "Easy",
        "explanation": "Both...and (cả hai)",
        "options": [
            {
                "id": 331,
                "option_text": "Both swimming and running are good exercises.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "Both swimming or running are good exercises.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "Swimming both and running are good exercises.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "Both and swimming running are good exercises.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 39
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'not only...but also'?",
        "correct_answer": "She is not only intelligent but also creative.",
        "difficulty": "Easy",
        "explanation": "Not only...but also (không chỉ...mà còn)",
        "options": [
            {
                "id": 341,
                "option_text": "She is not only intelligent but also creative.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "She is not only intelligent and also creative.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "She is intelligent not only but also creative.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "She not only is intelligent but also creative.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 39
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Neither the manager nor the employees complained.",
        "difficulty": "Easy",
        "explanation": "Neither...nor (cấu trúc đúng)",
        "options": [
            {
                "id": 351,
                "option_text": "Neither the manager nor the employees complained.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "Neither the manager or the employees complained.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "Either the manager nor the employees complained.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "Both the manager nor the employees complained.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 39
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Either you can drive or I will.",
        "difficulty": "Easy",
        "explanation": "Either...or (lựa chọn)",
        "options": [
            {
                "id": 361,
                "option_text": "Either you can drive or I will.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "Either you can drive and I will.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "You can either drive or I will.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "Either you can or drive I will.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 39
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Both soccer and basketball are popular sports.",
        "difficulty": "Easy",
        "explanation": "Both...and (cấu trúc đúng)",
        "options": [
            {
                "id": 371,
                "option_text": "Both soccer and basketball are popular sports.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "Both soccer or basketball are popular sports.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "Soccer both and basketball are popular sports.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "Both and soccer basketball are popular sports.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 39
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Not only is the music beautiful but also the lyrics are profound.",
        "difficulty": "Easy",
        "explanation": "Not only...but also (cấu trúc đúng)",
        "options": [
            {
                "id": 381,
                "option_text": "Not only is the music beautiful but also the lyrics are profound.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "Not only the music is beautiful but also the lyrics are profound.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "The music not only is beautiful but also the lyrics are profound.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "Not only is beautiful the music but also the lyrics are profound.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 39
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct statement:",
        "correct_answer": "Neither your proposal nor my suggestion was accepted.",
        "difficulty": "Easy",
        "explanation": "Neither...nor (verb agreement)",
        "options": [
            {
                "id": 391,
                "option_text": "Neither your proposal nor my suggestion was accepted.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "Neither your proposal nor my suggestion were accepted.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "Either your proposal nor my suggestion was accepted.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "Neither your proposal or my suggestion was accepted.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 39
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct statement:",
        "correct_answer": "Both reading and writing improve your language skills.",
        "difficulty": "Easy",
        "explanation": "Both...and (plural verb)",
        "options": [
            {
                "id": 401,
                "option_text": "Both reading and writing improve your language skills.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "Both reading and writing improves your language skills.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "Reading both and writing improve your language skills.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "Both reading and writing improve your language skills are.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 39
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Neither he nor she has finished the work.",
        "difficulty": "Medium",
        "explanation": "Neither...nor (Liên Từ Tương Quan phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "Neither he nor she has finished the work.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "Neither he nor she have finished the work.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Neither he or she has finished the work.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "Either he nor she has finished the work.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 39
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Either the red car or the blue car is yours.",
        "difficulty": "Medium",
        "explanation": "Either...or (singular verb)",
        "options": [
            {
                "id": 621,
                "option_text": "Either the red car or the blue car is yours.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "Either the red car or the blue car are yours.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "The red car either or the blue car is yours.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "Either red the car or blue the car is yours.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 39
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Both Tom and Jerry have been invited to the wedding.",
        "difficulty": "Medium",
        "explanation": "Both...and (plural verb)",
        "options": [
            {
                "id": 631,
                "option_text": "Both Tom and Jerry have been invited to the wedding.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "Both Tom and Jerry has been invited to the wedding.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "Tom both and Jerry have been invited to the wedding.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "Both and Tom Jerry have been invited to the wedding.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 39
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Not only does she work hard but also she is creative.",
        "difficulty": "Medium",
        "explanation": "Not only...but also (inversion needed)",
        "options": [
            {
                "id": 641,
                "option_text": "Not only does she work hard but also she is creative.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "Not only she does work hard but also she is creative.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "Not only she works hard but also she is creative.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "She not only works hard but also is creative.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 39
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Neither the manager nor his assistant knows the answer.",
        "difficulty": "Medium",
        "explanation": "Neither...nor (singular verb - singular subject)",
        "options": [
            {
                "id": 651,
                "option_text": "Neither the manager nor his assistant knows the answer.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "Neither the manager nor his assistant know the answer.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "Neither the manager and his assistant knows the answer.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "Neither or the manager his assistant knows the answer.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 39
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Either your friend or your family members will help you.",
        "difficulty": "Medium",
        "explanation": "Either...or (plural verb - plural closer to verb)",
        "options": [
            {
                "id": 661,
                "option_text": "Either your friend or your family members will help you.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "Either your friend or your family members will helps you.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "Your friend either or your family members will help you.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "Either your friend and your family members will help you.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 39
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Both the book and the movie have received excellent reviews.",
        "difficulty": "Medium",
        "explanation": "Both...and (plural verb)",
        "options": [
            {
                "id": 671,
                "option_text": "Both the book and the movie have received excellent reviews.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "Both the book and the movie has received excellent reviews.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "The book both and the movie have received excellent reviews.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "Both and the book the movie have received excellent reviews.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 39
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Not only did he understand the problem but also he offered a solution.",
        "difficulty": "Medium",
        "explanation": "Not only...but also (inversion với auxiliary)",
        "options": [
            {
                "id": 681,
                "option_text": "Not only did he understand the problem but also he offered a solution.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "Not only he understood the problem but also he offered a solution.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "He not only did understand the problem but also he offered a solution.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "Not only he did understand the problem but also he offered a solution.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 39
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Neither coffee nor tea is available.",
        "difficulty": "Medium",
        "explanation": "Neither...nor (singular verb - singular subjects)",
        "options": [
            {
                "id": 691,
                "option_text": "Neither coffee nor tea is available.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Neither coffee nor tea are available.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "Coffee neither nor tea is available.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "Neither coffee and tea is available.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 39
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Either the package will arrive tomorrow or the next day.",
        "difficulty": "Medium",
        "explanation": "Either...or (cấu trúc lựa chọn)",
        "options": [
            {
                "id": 701,
                "option_text": "Either the package will arrive tomorrow or the next day.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "Either the package will arrive tomorrow and the next day.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "The package either will arrive tomorrow or the next day.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "Either or the package will arrive tomorrow the next day.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 39
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'neither...nor' with verbs?",
        "correct_answer": "Neither John nor his brothers have arrived.",
        "difficulty": "Hard",
        "explanation": "Neither...nor (verb agreement - plural closer to verb) (Liên Từ Tương Quan nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "Neither John nor his brothers have arrived.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "Neither John nor his brothers has arrived.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "Neither John or his brothers have arrived.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "John neither nor his brothers have arrived.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 39
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'either...or' with verbs?",
        "correct_answer": "Either the cat or the dogs are responsible.",
        "difficulty": "Hard",
        "explanation": "Either...or (verb agrees with closer subject)",
        "options": [
            {
                "id": 821,
                "option_text": "Either the cat or the dogs are responsible.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Either the cat or the dogs is responsible.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Either the cat and the dogs are responsible.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "Either the cat or dogs the are responsible.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 39
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which shows parallel structure correctly?",
        "correct_answer": "Both teaching and learning require patience.",
        "difficulty": "Hard",
        "explanation": "Parallel structure (cấu trúc song song)",
        "options": [
            {
                "id": 831,
                "option_text": "Both teaching and learning require patience.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "Both teaching and to learn require patience.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "Both teaches and learning require patience.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "Teaching both and learning require patience.",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 39
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which shows parallel structure correctly?",
        "correct_answer": "Not only did she speak well but also wrote well.",
        "difficulty": "Hard",
        "explanation": "Parallel structure với Not only...but also",
        "options": [
            {
                "id": 841,
                "option_text": "Not only did she speak well but also wrote well.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "Not only she spoke well but also wrote well.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "Not only did she speak well but also writing well.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "Not only did speak well but also did write well.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 39
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which is grammatically correct?",
        "correct_answer": "Neither the students nor the teacher was aware of the mistake.",
        "difficulty": "Hard",
        "explanation": "Neither...nor (verb agreement - singular teacher)",
        "options": [
            {
                "id": 851,
                "option_text": "Neither the students nor the teacher was aware of the mistake.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "Neither the students nor the teacher were aware of the mistake.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "Neither the students and the teacher was aware of the mistake.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "Neither students nor teacher was aware of the mistake.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 39
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which is grammatically correct?",
        "correct_answer": "Either his mother or his sisters are coming to the event.",
        "difficulty": "Hard",
        "explanation": "Either...or (verb agrees with sisters - plural, closer to verb)",
        "options": [
            {
                "id": 861,
                "option_text": "Either his mother or his sisters are coming to the event.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "Either his mother or his sisters is coming to the event.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "Either his mother and his sisters are coming to the event.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "Either his mother, or his sisters are coming to the event.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 39
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct placement of correlative conjunction?",
        "correct_answer": "Both the president and the vice president attended the meeting.",
        "difficulty": "Hard",
        "explanation": "Placement của correlative conjunction",
        "options": [
            {
                "id": 871,
                "option_text": "Both the president and the vice president attended the meeting.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Both the president attended the meeting and the vice president.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "The president both and the vice president attended the meeting.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "Both attended the president and the vice president the meeting.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 39
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses multiple correlative conjunctions?",
        "correct_answer": "Neither the budget nor the time nor the resources were sufficient.",
        "difficulty": "Hard",
        "explanation": "Multiple neither...nor",
        "options": [
            {
                "id": 881,
                "option_text": "Neither the budget nor the time nor the resources were sufficient.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "Neither the budget nor the time or the resources were sufficient.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "Neither the budget and the time nor the resources were sufficient.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "Neither budget nor time nor resources were sufficient.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 39
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'not only...but also' with inversion?",
        "correct_answer": "Not only can she speak three languages but she also dances professionally.",
        "difficulty": "Hard",
        "explanation": "Not only...but also với inversion",
        "options": [
            {
                "id": 891,
                "option_text": "Not only can she speak three languages but she also dances professionally.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "Not only she can speak three languages but she also dances professionally.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "She not only can speak three languages but also dances professionally.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "Not only can she speak three languages but also she dances professionally.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 39
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "All correlative conjunctions require parallel structure and proper verb agreement",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Liên Từ Tương Quan",
        "options": [
            {
                "id": 901,
                "option_text": "All correlative conjunctions require parallel structure and proper verb agreement",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Correlative conjunctions don't require any specific grammatical structure",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Only neither...nor requires attention to structure",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Correlative conjunctions are rarely used in modern English",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 39
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which shows the primary difference between 'either...or' and 'neither...nor'?",
        "correct_answer": "Either...or presents alternatives; Neither...nor excludes both",
        "difficulty": "Hard",
        "explanation": "Sự khác biệt giữa either...or và neither...nor",
        "options": [
            {
                "id": 911,
                "option_text": "Either...or presents alternatives; Neither...nor excludes both",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "Either...or excludes both; Neither...nor presents alternatives",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Both mean exactly the same thing",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Neither distinction is meaningful",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 39
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which shows the primary function of 'both...and'?",
        "correct_answer": "To link two equal elements and emphasize inclusion",
        "difficulty": "Hard",
        "explanation": "Chức năng của both...and",
        "options": [
            {
                "id": 921,
                "option_text": "To link two equal elements and emphasize inclusion",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "To present alternatives between two items",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "To exclude both items completely",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "To add emphasis without grammatical function",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 39
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which shows the primary function of 'not only...but also'?",
        "correct_answer": "To add emphasis by presenting something as unexpected or additional",
        "difficulty": "Hard",
        "explanation": "Chức năng của not only...but also",
        "options": [
            {
                "id": 931,
                "option_text": "To add emphasis by presenting something as unexpected or additional",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "To present simple alternatives",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "To exclude both items",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "To express negative information only",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 39
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows verb agreement rule?",
        "correct_answer": "Verb agrees with the subject closest to it (in either...or and neither...nor)",
        "difficulty": "Hard",
        "explanation": "Verb agreement rule",
        "options": [
            {
                "id": 941,
                "option_text": "Verb agrees with the subject closest to it (in either...or and neither...nor)",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "Verb always agrees with the first subject",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Verb is always plural with correlatives",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Verb agreement doesn't matter with correlatives",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 39
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows parallel structure requirement?",
        "correct_answer": "Elements linked by correlatives must have the same grammatical form",
        "difficulty": "Hard",
        "explanation": "Parallel structure requirement",
        "options": [
            {
                "id": 951,
                "option_text": "Elements linked by correlatives must have the same grammatical form",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "Elements can have different grammatical forms",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "Parallel structure is optional",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "Correlatives don't require any special structure",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 39
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which pair shows NON-parallel structure (incorrect)?",
        "correct_answer": "Both reading books and to watch movies = NOT parallel",
        "difficulty": "Hard",
        "explanation": "Sai của parallel structure",
        "options": [
            {
                "id": 961,
                "option_text": "Both reading books and to watch movies = NOT parallel",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "Both reading books and watching movies = parallel",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "Both books and movies are entertaining = parallel",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "Both are correct structures",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 39
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'neither...nor' with multiple items?",
        "correct_answer": "Neither blue nor red nor green was available.",
        "difficulty": "Hard",
        "explanation": "Multiple neither...nor items",
        "options": [
            {
                "id": 971,
                "option_text": "Neither blue nor red nor green was available.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "Neither blue nor red or green was available.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "Neither blue and red nor green was available.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "Neither blue or red or green was available.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 39
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'either...or' with multiple items?",
        "correct_answer": "Either coffee or tea or juice is fine for me.",
        "difficulty": "Hard",
        "explanation": "Multiple either...or items",
        "options": [
            {
                "id": 981,
                "option_text": "Either coffee or tea or juice is fine for me.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "Either coffee and tea or juice is fine for me.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "Either coffee or tea and juice is fine for me.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "Either coffee, tea, or juice is fine for me.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 39
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which shows INCORRECT parallel structure?",
        "correct_answer": "Not only did he sing but also danced. = INCORRECT (inconsistent use of auxiliary)",
        "difficulty": "Hard",
        "explanation": "Sai - inconsistent structure",
        "options": [
            {
                "id": 991,
                "option_text": "Not only did he sing but also danced. = INCORRECT (inconsistent use of auxiliary)",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Not only did he sing but also did dance. = CORRECT",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Not only he sang but also danced. = CORRECT",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "Not only he danced but also sang. = CORRECT",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 39
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Neither/nor excludes both; Either/or chooses one; Both/and includes both; Not only/but also emphasizes addition",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Liên Từ Tương Quan",
        "options": [
            {
                "id": 1001,
                "option_text": "Neither/nor excludes both; Either/or chooses one; Both/and includes both; Not only/but also emphasizes addition",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "All correlatives serve identical functions",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Only one type of correlative is important in English",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Correlative conjunctions are rarely used in modern writing",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 39
    }
];

export default questions;