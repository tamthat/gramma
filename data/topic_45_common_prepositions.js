const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "The book is ___ the table.",
        "correct_answer": "on",
        "suggest_answer": "on",
        "explanation": "On + vị trí nằm trên (Giới Từ Thường Gặp - Giới Từ Vị Trí)",
        "difficulty": "Easy",
        "topic_id": 45
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "The cat is ___ the bed.",
        "correct_answer": "in",
        "suggest_answer": "in",
        "explanation": "In + bên trong (Giới Từ Thường Gặp - Giới Từ Vị Trí)",
        "difficulty": "Easy",
        "topic_id": 45
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "I will see you ___ tomorrow.",
        "correct_answer": "on",
        "suggest_answer": "on",
        "explanation": "On + ngày cụ thể (Giới Từ Thường Gặp - Giới Từ Thời Gian)",
        "difficulty": "Easy",
        "topic_id": 45
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "She is interested ___ learning languages.",
        "correct_answer": "in",
        "suggest_answer": "in",
        "explanation": "In + sự quan tâm (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Easy",
        "topic_id": 45
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "I am afraid ___ spiders.",
        "correct_answer": "of",
        "suggest_answer": "of",
        "explanation": "Of + sự sợ hãi (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Easy",
        "topic_id": 45
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "The pen is ___ my hand.",
        "correct_answer": "in",
        "suggest_answer": "in",
        "explanation": "In + nắm trong tay (Giới Từ Thường Gặp - Giới Từ Vị Trí)",
        "difficulty": "Easy",
        "topic_id": 45
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "She is good ___ mathematics.",
        "correct_answer": "at",
        "suggest_answer": "at",
        "explanation": "At + kỹ năng (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Easy",
        "topic_id": 45
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "I will arrive ___ 3 o'clock.",
        "correct_answer": "at",
        "suggest_answer": "at",
        "explanation": "At + thời gian cụ thể (Giới Từ Thường Gặp - Giới Từ Thời Gian)",
        "difficulty": "Easy",
        "topic_id": 45
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "I depend ___ you for help.",
        "correct_answer": "on",
        "suggest_answer": "on",
        "explanation": "On + phụ thuộc (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Easy",
        "topic_id": 45
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "I am responsible ___ this project.",
        "correct_answer": "for",
        "suggest_answer": "for",
        "explanation": "For + trách nhiệm (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Easy",
        "topic_id": 45
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "She is worried ___ the exam.",
        "correct_answer": "about",
        "suggest_answer": "about",
        "explanation": "About + lo lắng (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định phức tạp)",
        "difficulty": "Medium",
        "topic_id": 45
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "I will call you ___ the evening.",
        "correct_answer": "in",
        "suggest_answer": "in",
        "explanation": "In + giai đoạn thời gian (Giới Từ Thường Gặp - Giới Từ Thời Gian)",
        "difficulty": "Medium",
        "topic_id": 45
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "She is different ___ her sister.",
        "correct_answer": "from",
        "suggest_answer": "from",
        "explanation": "From + khác nhau (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Medium",
        "topic_id": 45
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "I am looking forward ___ the weekend.",
        "correct_answer": "to",
        "suggest_answer": "to",
        "explanation": "To + chờ đợi (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Medium",
        "topic_id": 45
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "She succeeded ___ passing the test.",
        "correct_answer": "in",
        "suggest_answer": "in",
        "explanation": "In + thành công (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Medium",
        "topic_id": 45
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "I am accustomed ___ waking up early.",
        "correct_answer": "to",
        "suggest_answer": "to",
        "explanation": "To + quen (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Medium",
        "topic_id": 45
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "She is proud ___ her achievements.",
        "correct_answer": "of",
        "suggest_answer": "of",
        "explanation": "Of + tự hào (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Medium",
        "topic_id": 45
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "He came ___ a famous family.",
        "correct_answer": "from",
        "suggest_answer": "from",
        "explanation": "From + nguồn gốc (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Medium",
        "topic_id": 45
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "I apologize ___ being late.",
        "correct_answer": "for",
        "suggest_answer": "for",
        "explanation": "For + xin lỗi (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Medium",
        "topic_id": 45
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "She is convinced ___ his innocence.",
        "correct_answer": "of",
        "suggest_answer": "of",
        "explanation": "Of + tin tưởng (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Medium",
        "topic_id": 45
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "I am tired ___ working all day.",
        "correct_answer": "of",
        "suggest_answer": "of",
        "explanation": "Of + mệt (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định nâng cao)",
        "difficulty": "Hard",
        "topic_id": 45
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "He is skilled ___ painting.",
        "correct_answer": "in",
        "suggest_answer": "in",
        "explanation": "In + kỹ năng (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Hard",
        "topic_id": 45
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "I am aware ___ the problem.",
        "correct_answer": "of",
        "suggest_answer": "of",
        "explanation": "Of + nhận thức (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Hard",
        "topic_id": 45
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "She is capable ___ doing this job.",
        "correct_answer": "of",
        "suggest_answer": "of",
        "explanation": "Of + khả năng (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Hard",
        "topic_id": 45
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "He is suitable ___ this position.",
        "correct_answer": "for",
        "suggest_answer": "for",
        "explanation": "For + phù hợp (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Hard",
        "topic_id": 45
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "I am keen ___ learning new skills.",
        "correct_answer": "on",
        "suggest_answer": "on",
        "explanation": "On + mong muốn (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Hard",
        "topic_id": 45
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "She is concerned ___ the environment.",
        "correct_answer": "about",
        "suggest_answer": "about",
        "explanation": "About + quan tâm (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Hard",
        "topic_id": 45
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "He is jealous ___ her success.",
        "correct_answer": "of",
        "suggest_answer": "of",
        "explanation": "Of + ghen tức (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Hard",
        "topic_id": 45
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "I am grateful ___ your help.",
        "correct_answer": "for",
        "suggest_answer": "for",
        "explanation": "For + biết ơn (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Hard",
        "topic_id": 45
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "She is similar ___ her mother.",
        "correct_answer": "to",
        "suggest_answer": "to",
        "explanation": "To + giống (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "difficulty": "Hard",
        "topic_id": 45
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct preposition use?",
        "correct_answer": "I am interested in music and good at playing piano.",
        "difficulty": "Easy",
        "explanation": "Interested in + good at (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định)",
        "options": [
            {
                "id": 311,
                "option_text": "I am interested in music and good at playing piano.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "I am interested on music and good in playing piano.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "I am interested of music and good on playing piano.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "I am interested for music and good to playing piano.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 45
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct time preposition?",
        "correct_answer": "We will meet on Monday at 3 o'clock in the afternoon.",
        "difficulty": "Easy",
        "explanation": "On + ngày / At + giờ / In + giai đoạn",
        "options": [
            {
                "id": 321,
                "option_text": "We will meet on Monday at 3 o'clock in the afternoon.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "We will meet in Monday at 3 o'clock on the afternoon.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "We will meet at Monday in 3 o'clock on the afternoon.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "We will meet on Monday in 3 o'clock at the afternoon.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 45
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct phrasal verb?",
        "correct_answer": "She gave up smoking last year.",
        "difficulty": "Easy",
        "explanation": "Gave up + bỏ (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 331,
                "option_text": "She gave up smoking last year.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "She gave in smoking last year.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "She gave away smoking last year.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "She gave out smoking last year.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 45
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I looked up the word in the dictionary.",
        "difficulty": "Easy",
        "explanation": "Looked up + tra cứu (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 341,
                "option_text": "I looked up the word in the dictionary.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "I looked for the word in the dictionary.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "I looked at the word in the dictionary.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "I looked into the word in the dictionary.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 45
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "He ran into an old friend at the store.",
        "difficulty": "Easy",
        "explanation": "Ran into + tình cờ gặp (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 351,
                "option_text": "He ran into an old friend at the store.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "He ran across an old friend at the store.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "He ran up an old friend at the store.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "He ran through an old friend at the store.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 45
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I will carry on with the work tomorrow.",
        "difficulty": "Easy",
        "explanation": "Carry on + tiếp tục (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 361,
                "option_text": "I will carry on with the work tomorrow.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "I will carry out with the work tomorrow.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "I will carry in with the work tomorrow.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "I will carry down with the work tomorrow.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 45
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "They put off the meeting until next week.",
        "difficulty": "Easy",
        "explanation": "Put off + hoãn lại (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 371,
                "option_text": "They put off the meeting until next week.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "They put away the meeting until next week.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "They put down the meeting until next week.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "They put up the meeting until next week.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 45
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I will take after my mother when I grow up.",
        "difficulty": "Easy",
        "explanation": "Take after + giống (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 381,
                "option_text": "I will take after my mother when I grow up.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "I will take in my mother when I grow up.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "I will take on my mother when I grow up.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "I will take off my mother when I grow up.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 45
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "She brought up her children alone.",
        "difficulty": "Easy",
        "explanation": "Brought up + nuôi dạy (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 391,
                "option_text": "She brought up her children alone.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "She brought in her children alone.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "She brought out her children alone.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "She brought on her children alone.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 45
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I ran out of milk this morning.",
        "difficulty": "Easy",
        "explanation": "Ran out of + hết (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 401,
                "option_text": "I ran out of milk this morning.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "I ran up of milk this morning.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "I ran into of milk this morning.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "I ran over of milk this morning.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 45
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I am accustomed to waking up early.",
        "difficulty": "Medium",
        "explanation": "Accustomed to (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "I am accustomed to waking up early.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "I am accustomed with waking up early.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "I am accustomed at waking up early.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "I am accustomed for waking up early.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 45
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "She walked out on him yesterday.",
        "difficulty": "Medium",
        "explanation": "Walked out on + bỏ (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 621,
                "option_text": "She walked out on him yesterday.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "She walked off him yesterday.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "She walked away him yesterday.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "She walked through him yesterday.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 45
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "He made up for his mistake by working hard.",
        "difficulty": "Medium",
        "explanation": "Made up for + bù đắp (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 631,
                "option_text": "He made up for his mistake by working hard.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "He made up with his mistake by working hard.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "He made up to his mistake by working hard.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "He made up on his mistake by working hard.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 45
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "We came across an interesting article yesterday.",
        "difficulty": "Medium",
        "explanation": "Came across + tình cờ tìm thấy (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 641,
                "option_text": "We came across an interesting article yesterday.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "We came on an interesting article yesterday.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "We came into an interesting article yesterday.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "We came through an interesting article yesterday.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 45
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I am dealing with a difficult situation at work.",
        "difficulty": "Medium",
        "explanation": "Dealing with + xử lý (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 651,
                "option_text": "I am dealing with a difficult situation at work.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "I am dealing in a difficult situation at work.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "I am dealing on a difficult situation at work.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "I am dealing at a difficult situation at work.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 45
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "They decided to give up the idea.",
        "difficulty": "Medium",
        "explanation": "Give up + từ bỏ (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 661,
                "option_text": "They decided to give up the idea.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "They decided to give in the idea.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "They decided to give out the idea.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "They decided to give off the idea.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 45
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "We should get over this problem quickly.",
        "difficulty": "Medium",
        "explanation": "Get over + vượt qua (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 671,
                "option_text": "We should get over this problem quickly.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "We should get off this problem quickly.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "We should get into this problem quickly.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "We should get on this problem quickly.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 45
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I will look after the children this weekend.",
        "difficulty": "Medium",
        "explanation": "Look after + chăm sóc (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 681,
                "option_text": "I will look after the children this weekend.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "I will look for the children this weekend.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "I will look into the children this weekend.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "I will look at the children this weekend.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 45
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Please break down the problem into smaller parts.",
        "difficulty": "Medium",
        "explanation": "Break down + phân tích (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 691,
                "option_text": "Please break down the problem into smaller parts.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Please break in the problem into smaller parts.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "Please break off the problem into smaller parts.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "Please break out the problem into smaller parts.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 45
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I have to catch up with the class.",
        "difficulty": "Medium",
        "explanation": "Catch up with + bắt kịp (Phrasal Verbs phổ biến)",
        "options": [
            {
                "id": 701,
                "option_text": "I have to catch up with the class.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "I have to catch in with the class.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "I have to catch off with the class.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "I have to catch out with the class.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 45
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses prepositions with adjectives?",
        "correct_answer": "interested in, good at, afraid of, proud of, tired of",
        "difficulty": "Hard",
        "explanation": "Prepositions + adjectives (Giới Từ Thường Gặp - Cụm Giới Từ Cố Định nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "interested in, good at, afraid of, proud of, tired of",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "interested on, good in, afraid for, proud on, tired on",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "interested for, good on, afraid in, proud for, tired at",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "All adjectives use the same preposition",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 45
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses time prepositions?",
        "correct_answer": "on + day, at + time, in + month/year/time period",
        "difficulty": "Hard",
        "explanation": "Giới từ thời gian",
        "options": [
            {
                "id": 821,
                "option_text": "on + day, at + time, in + month/year/time period",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "in + day, on + time, at + month/year",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "at + day, in + time, on + month/year",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "All time prepositions are interchangeable",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 45
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct phrasal verbs?",
        "correct_answer": "give up, run into, put off, look up, catch up with",
        "difficulty": "Hard",
        "explanation": "Phrasal Verbs phổ biến",
        "options": [
            {
                "id": 831,
                "option_text": "give up, run into, put off, look up, catch up with",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "give in, run across, put away, look for, catch out",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "give away, run out, put on, look at, catch on",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 844,
                "option_text": "All are equally common phrasal verbs",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 45
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which correctly distinguishes 'in' vs 'on' vs 'at'?",
        "correct_answer": "In = large place/vehicle; On = surface; At = specific location",
        "difficulty": "Hard",
        "explanation": "Prepositions vị trí",
        "options": [
            {
                "id": 841,
                "option_text": "In = large place/vehicle; On = surface; At = specific location",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "On = large place; In = surface; At = inside",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "At = large place; In = surface; On = inside",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "All three are completely interchangeable",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 45
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which shows fixed preposition expressions?",
        "correct_answer": "look forward to, accustomed to, fond of, aware of, capable of",
        "difficulty": "Hard",
        "explanation": "Cụm giới từ cố định",
        "options": [
            {
                "id": 851,
                "option_text": "look forward to, accustomed to, fond of, aware of, capable of",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "look forward for, accustomed on, fond for, aware on, capable for",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "look forward in, accustomed at, fond in, aware in, capable in",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 844,
                "option_text": "All expressions use the same preposition",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 45
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'phrasal verb' vs 'simple verb + preposition'?",
        "correct_answer": "Phrasal verb: get over (recover); Simple: get over the wall (cross)",
        "difficulty": "Hard",
        "explanation": "Phrasal verbs vs prepositions",
        "options": [
            {
                "id": 861,
                "option_text": "Phrasal verb: get over (recover); Simple: get over the wall (cross)",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "Phrasal verb: get the wall (cross); Simple: get over (recover)",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "Both are always phrasal verbs",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 884,
                "option_text": "There is no difference between them",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 45
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct 'look' phrasal verbs?",
        "correct_answer": "look after (care), look up (research), look into (investigate), look for (search)",
        "difficulty": "Hard",
        "explanation": "Look + phrasal verbs",
        "options": [
            {
                "id": 871,
                "option_text": "look after (care), look up (research), look into (investigate), look for (search)",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "look in (care), look down (research), look out (investigate), look on (search)",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "look through (care), look at (research), look over (investigate), look on (search)",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 884,
                "option_text": "All 'look' combinations mean the same thing",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 45
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct 'get' phrasal verbs?",
        "correct_answer": "get on (succeed), get over (recover), get up (wake), get away (escape)",
        "difficulty": "Hard",
        "explanation": "Get + phrasal verbs",
        "options": [
            {
                "id": 881,
                "option_text": "get on (succeed), get over (recover), get up (wake), get away (escape)",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "get in (succeed), get by (recover), get down (wake), get out (escape)",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "get off (succeed), get through (recover), get back (wake), get around (escape)",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "All 'get' combinations mean the same thing",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 45
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct 'put' phrasal verbs?",
        "correct_answer": "put off (postpone), put up with (tolerate), put away (store), put on (wear)",
        "difficulty": "Hard",
        "explanation": "Put + phrasal verbs",
        "options": [
            {
                "id": 891,
                "option_text": "put off (postpone), put up with (tolerate), put away (store), put on (wear)",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "put in (postpone), put down (tolerate), put out (store), put up (wear)",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "put down (postpone), put away (tolerate), put on (store), put off (wear)",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "All 'put' combinations mean the same thing",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 45
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Common Prepositions",
        "correct_answer": "Fixed preposition expressions and phrasal verbs require memorization and careful usage",
        "options": [
            {
                "id": 901,
                "option_text": "Fixed preposition expressions and phrasal verbs require memorization and careful usage",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All prepositions follow identical rules",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Prepositions are rarely used in modern English",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Phrasal verbs are the same as simple verbs + prepositions",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "options": [
            {
                "id": 901,
                "option_text": "Fixed preposition expressions and phrasal verbs require memorization and careful usage",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All prepositions follow identical rules",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Prepositions are rarely used in modern English",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Phrasal verbs are the same as simple verbs + prepositions",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 45
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which shows 'break' phrasal verbs?",
        "correct_answer": "break down (phân tích), break in (làm quen), break out (phá ra), break up (chia tay)",
        "difficulty": "Hard",
        "explanation": "Break + phrasal verbs",
        "options": [
            {
                "id": 911,
                "option_text": "break down (phân tích), break in (làm quen), break out (phá ra), break up (chia tay)",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "break off (phân tích), break away (làm quen), break on (phá ra), break through (chia tay)",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "break through (phân tích), break up (làm quen), break down (phá ra), break in (chia tay)",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 924,
                "option_text": "All 'break' combinations mean the same thing",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 45
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which shows 'come' phrasal verbs?",
        "correct_answer": "come across (gặp), come in (vào), come up (xuất hiện), come back (trở lại)",
        "difficulty": "Hard",
        "explanation": "Come + phrasal verbs",
        "options": [
            {
                "id": 921,
                "option_text": "come across (gặp), come in (vào), come up (xuất hiện), come back (trở lại)",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "come out (gặp), come on (vào), come down (xuất hiện), come through (trở lại)",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "come about (gặp), come along (vào), come around (xuất hiện), come over (trở lại)",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "All 'come' combinations mean the same thing",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 45
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses adjective + preposition combinations?",
        "correct_answer": "fond of, aware of, capable of, suitable for, responsible for",
        "difficulty": "Hard",
        "explanation": "Adjective + prepositions",
        "options": [
            {
                "id": 931,
                "option_text": "fond of, aware of, capable of, suitable for, responsible for",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "fond for, aware for, capable for, suitable of, responsible of",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "fond in, aware in, capable in, suitable in, responsible in",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 944,
                "option_text": "All use the same preposition",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 45
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'turn' phrasal verbs?",
        "correct_answer": "turn on (bật), turn off (tắt), turn down (từ chối), turn up (xuất hiện)",
        "difficulty": "Hard",
        "explanation": "Turn + phrasal verbs",
        "options": [
            {
                "id": 941,
                "option_text": "turn on (bật), turn off (tắt), turn down (từ chối), turn up (xuất hiện)",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "turn in (bật), turn out (tắt), turn over (từ chối), turn around (xuất hiện)",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "turn up (bật), turn down (tắt), turn on (từ chối), turn off (xuất hiện)",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "All 'turn' combinations mean the same thing",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 45
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which shows 'take' phrasal verbs?",
        "correct_answer": "take after (giống), take away (lấy đi), take off (cỡi), take over (tiếp quản)",
        "difficulty": "Hard",
        "explanation": "Take + phrasal verbs",
        "options": [
            {
                "id": 951,
                "option_text": "take after (giống), take away (lấy đi), take off (cỡi), take over (tiếp quản)",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "take on (giống), take in (lấy đi), take up (cỡi), take out (tiếp quản)",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "take out (giống), take over (lấy đi), take on (cỡi), take away (tiếp quản)",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "All 'take' combinations mean the same thing",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 45
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which pair is INCORRECT?",
        "correct_answer": "She is responsible on the project. = WRONG (should be 'for')",
        "difficulty": "Hard",
        "explanation": "Sai - responsible + preposition",
        "options": [
            {
                "id": 961,
                "option_text": "She is responsible on the project. = WRONG (should be 'for')",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "She is responsible for the project. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "I looked up the word. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "They gave up smoking. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 45
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'bring' phrasal verbs?",
        "correct_answer": "bring up (nuôi dạy), bring back (mang lại), bring out (phát hành), bring down (hạ)",
        "difficulty": "Hard",
        "explanation": "Bring + phrasal verbs",
        "options": [
            {
                "id": 971,
                "option_text": "bring up (nuôi dạy), bring back (mang lại), bring out (phát hành), bring down (hạ)",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "bring in (nuôi dạy), bring on (mang lại), bring down (phát hành), bring off (hạ)",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "bring off (nuôi dạy), bring about (mang lại), bring back (phát hành), bring up (hạ)",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "All 'bring' combinations mean the same thing",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 45
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'run' phrasal verbs?",
        "correct_answer": "run into (gặp), run out of (hết), run over (cán), run away (bỏ chạy)",
        "difficulty": "Hard",
        "explanation": "Run + phrasal verbs",
        "options": [
            {
                "id": 981,
                "option_text": "run into (gặp), run out of (hết), run over (cán), run away (bỏ chạy)",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "run across (gặp), run through (hết), run down (cán), run off (bỏ chạy)",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "run by (gặp), run up (hết), run back (cán), run out (bỏ chạy)",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "All 'run' combinations mean the same thing",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 45
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'give' phrasal verbs?",
        "correct_answer": "give up (bỏ), give away (tặng), give in (đầu hàng), give out (phát",
        "difficulty": "Hard",
        "explanation": "Give + phrasal verbs",
        "options": [
            {
                "id": 991,
                "option_text": "give up (bỏ), give away (tặng), give in (đầu hàng), give out (phát)",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "give in (bỏ), give out (tặng), give away (đầu hàng), give up (phát)",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "give out (bỏ), give in (tặng), give up (đầu hàng), give away (phát)",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "All 'give' combinations mean the same thing",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 45
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Prepositions follow fixed patterns with specific adjectives, nouns, and verbs",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Common Prepositions",
        "options": [
            {
                "id": 1001,
                "option_text": "Prepositions follow fixed patterns with specific adjectives, nouns, and verbs",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "All prepositions are interchangeable",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Prepositions are rarely used in modern English",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "There are no rules for preposition usage",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 45
    }
];

export default questions;