const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "I ___ speak three languages.",
        "correct_answer": "can",
        "suggest_answer": "can",
        "explanation": "Can + khả năng (Động Từ Khuyết Thiếu - Khả Năng)",
        "difficulty": "Easy",
        "topic_id": 43
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "You ___ leave now if you want.",
        "correct_answer": "may",
        "suggest_answer": "may",
        "explanation": "May + cho phép (Động Từ Khuyết Thiếu - Cho Phép)",
        "difficulty": "Easy",
        "topic_id": 43
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "He ___ study harder to pass the exam.",
        "correct_answer": "should",
        "suggest_answer": "should",
        "explanation": "Should + lời khuyên (Động Từ Khuyết Thiếu - Lời Khuyên)",
        "difficulty": "Easy",
        "topic_id": 43
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "We ___ finish this project by tomorrow.",
        "correct_answer": "must",
        "suggest_answer": "must",
        "explanation": "Must + nghĩa vụ (Động Từ Khuyết Thiếu - Nghĩa Vụ)",
        "difficulty": "Easy",
        "topic_id": 43
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "She ___ be a doctor; she's very smart.",
        "correct_answer": "will",
        "suggest_answer": "will",
        "explanation": "Will + dự đoán (Động Từ Khuyết Thiếu - Dự Đoán)",
        "difficulty": "Easy",
        "topic_id": 43
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "I ___ swim when I was young.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Could + khả năng trong quá khứ",
        "difficulty": "Easy",
        "topic_id": 43
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "You ___ smoke here. It's prohibited.",
        "correct_answer": "must not",
        "suggest_answer": "must not",
        "explanation": "Must not + cấm (Động Từ Khuyết Thiếu - Cấm)",
        "difficulty": "Easy",
        "topic_id": 43
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "It ___ rain tomorrow.",
        "correct_answer": "might",
        "suggest_answer": "might",
        "explanation": "Might + khả năng thấp (Động Từ Khuyết Thiếu - Dự Đoán)",
        "difficulty": "Easy",
        "topic_id": 43
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "___ I help you with this?",
        "correct_answer": "Can",
        "suggest_answer": "Can",
        "explanation": "Can + đề nghị (Động Từ Khuyết Thiếu - Khả Năng)",
        "difficulty": "Easy",
        "topic_id": 43
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "He ___ be tired after working all day.",
        "correct_answer": "must",
        "suggest_answer": "must",
        "explanation": "Must + sự chắc chắn (Động Từ Khuyết Thiếu - Dự Đoán)",
        "difficulty": "Easy",
        "topic_id": 43
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "She ___ have arrived by now.",
        "correct_answer": "should",
        "suggest_answer": "should",
        "explanation": "Should + kỳ vọng trong quá khứ (Động Từ Khuyết Thiếu phức tạp)",
        "difficulty": "Medium",
        "topic_id": 43
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "You ___ have told me about this earlier.",
        "correct_answer": "ought to",
        "suggest_answer": "ought to",
        "explanation": "Ought to + lời khuyên (quá khứ)",
        "difficulty": "Medium",
        "topic_id": 43
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "I ___ do this work; I have no choice.",
        "correct_answer": "have to",
        "suggest_answer": "have to",
        "explanation": "Have to + nghĩa vụ (sự ép buộc)",
        "difficulty": "Medium",
        "topic_id": 43
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "He ___ be sick; he looks very pale.",
        "correct_answer": "might",
        "suggest_answer": "might",
        "explanation": "Might + khả năng (dự đoán)",
        "difficulty": "Medium",
        "topic_id": 43
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "They ___ have been playing football when I arrived.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Could + khả năng trong quá khứ (progressive)",
        "difficulty": "Medium",
        "topic_id": 43
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "You ___ not enter without permission.",
        "correct_answer": "shall",
        "suggest_answer": "shall",
        "explanation": "Shall + cấm (formal)",
        "difficulty": "Medium",
        "topic_id": 43
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "I ___ go to the meeting if necessary.",
        "correct_answer": "will",
        "suggest_answer": "will",
        "explanation": "Will + sẵn sàng (Động Từ Khuyết Thiếu - Sẵn Sàng)",
        "difficulty": "Medium",
        "topic_id": 43
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "___ you come to my party tomorrow?",
        "correct_answer": "Will",
        "suggest_answer": "Will",
        "explanation": "Will + câu hỏi lịch sự",
        "difficulty": "Medium",
        "topic_id": 43
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "She ___ be able to finish this project.",
        "correct_answer": "will",
        "suggest_answer": "will",
        "explanation": "Will + can (khả năng tương lai)",
        "difficulty": "Medium",
        "topic_id": 43
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "He ___ attend the conference last year.",
        "correct_answer": "couldn't",
        "suggest_answer": "couldn't",
        "explanation": "Couldn't + không khả năng trong quá khứ",
        "difficulty": "Medium",
        "topic_id": 43
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "I ___ have done that without your help.",
        "correct_answer": "couldn't",
        "suggest_answer": "couldn't",
        "explanation": "Couldn't have + không thể làm được (quá khứ) (Động Từ Khuyết Thiếu nâng cao)",
        "difficulty": "Hard",
        "topic_id": 43
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "She ___ have been working here for five years.",
        "correct_answer": "must",
        "suggest_answer": "must",
        "explanation": "Must have + sự chắc chắn (quá khứ)",
        "difficulty": "Hard",
        "topic_id": 43
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "He ___ have known about this; nobody told him.",
        "correct_answer": "couldn't",
        "suggest_answer": "couldn't",
        "explanation": "Couldn't have + không thể biết được (quá khứ)",
        "difficulty": "Hard",
        "topic_id": 43
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "They ___ have arrived by now.",
        "correct_answer": "might",
        "suggest_answer": "might",
        "explanation": "Might have + khả năng (quá khứ)",
        "difficulty": "Hard",
        "topic_id": 43
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "You ___ have seen that movie; it's fantastic.",
        "correct_answer": "should",
        "suggest_answer": "should",
        "explanation": "Should have + lẽ ra nên làm (quá khứ)",
        "difficulty": "Hard",
        "topic_id": 43
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "It ___ be difficult to understand.",
        "correct_answer": "shouldn't",
        "suggest_answer": "shouldn't",
        "explanation": "Shouldn't + không nên",
        "difficulty": "Hard",
        "topic_id": 43
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "You ___ have permission to enter.",
        "correct_answer": "may",
        "suggest_answer": "may",
        "explanation": "May + cho phép (formal)",
        "difficulty": "Hard",
        "topic_id": 43
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "I ___ have made a mistake.",
        "correct_answer": "may",
        "suggest_answer": "may",
        "explanation": "May have + khả năng (quá khứ)",
        "difficulty": "Hard",
        "topic_id": 43
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "He ___ work here if he doesn't have a visa.",
        "correct_answer": "can't",
        "suggest_answer": "can't",
        "explanation": "Can't + không thể (do luật/quy tắc)",
        "difficulty": "Hard",
        "topic_id": 43
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "We ___ need to hurry; there's plenty of time.",
        "correct_answer": "don't have to",
        "suggest_answer": "don't have to",
        "explanation": "Don't have to + không cần thiết",
        "difficulty": "Hard",
        "topic_id": 43
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'can'?",
        "correct_answer": "I can speak English and play the piano.",
        "difficulty": "Easy",
        "explanation": "Can + khả năng (Động Từ Khuyết Thiếu - Khả Năng)",
        "options": [
            {
                "id": 311,
                "option_text": "I can speak English and play the piano.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "I can to speak English and play the piano.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "I can speaks English and plays the piano.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "I cans speak English and play the piano.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 43
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'may'?",
        "correct_answer": "You may leave the room when you finish.",
        "difficulty": "Easy",
        "explanation": "May + cho phép (Động Từ Khuyết Thiếu - Cho Phép)",
        "options": [
            {
                "id": 321,
                "option_text": "You may leave the room when you finish.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "You may to leave the room when you finish.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "You may leaves the room when you finish.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "You mays leave the room when you finish.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 43
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'should'?",
        "correct_answer": "You should eat more vegetables for your health.",
        "difficulty": "Easy",
        "explanation": "Should + lời khuyên (Động Từ Khuyết Thiếu - Lời Khuyên)",
        "options": [
            {
                "id": 331,
                "option_text": "You should eat more vegetables for your health.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "You should to eat more vegetables for your health.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "You should eats more vegetables for your health.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "You shoulds eat more vegetables for your health.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 43
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'must'?",
        "correct_answer": "You must submit your homework by Friday.",
        "difficulty": "Easy",
        "explanation": "Must + nghĩa vụ (Động Từ Khuyết Thiếu - Nghĩa Vụ)",
        "options": [
            {
                "id": 341,
                "option_text": "You must submit your homework by Friday.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "You must to submit your homework by Friday.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "You must submits your homework by Friday.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "You musts submit your homework by Friday.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 43
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I will help you with this project.",
        "difficulty": "Easy",
        "explanation": "Will + sẵn sàng hoặc dự đoán",
        "options": [
            {
                "id": 351,
                "option_text": "I will help you with this project.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "I will to help you with this project.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "I will helps you with this project.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "I wills help you with this project.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 43
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I could swim when I was young.",
        "difficulty": "Easy",
        "explanation": "Could + khả năng trong quá khứ",
        "options": [
            {
                "id": 361,
                "option_text": "I could swim when I was young.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "I could to swim when I was young.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "I could swam when I was young.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "I coulds swim when I was young.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 43
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "He might be late for the meeting.",
        "difficulty": "Easy",
        "explanation": "Might + khả năng thấp",
        "options": [
            {
                "id": 371,
                "option_text": "He might be late for the meeting.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "He might to be late for the meeting.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "He might is late for the meeting.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "He mights be late for the meeting.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 43
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "You must not smoke in the hospital.",
        "difficulty": "Easy",
        "explanation": "Must not + cấm",
        "options": [
            {
                "id": 381,
                "option_text": "You must not smoke in the hospital.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "You must not to smoke in the hospital.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "You must not smokes in the hospital.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "You must nots smoke in the hospital.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 43
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "She shouldn't have missed the meeting.",
        "difficulty": "Easy",
        "explanation": "Shouldn't have + lẽ ra không nên làm",
        "options": [
            {
                "id": 391,
                "option_text": "She shouldn't have missed the meeting.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "She shouldn't to have missed the meeting.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "She shouldn't have miss the meeting.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "She shouldnots have missed the meeting.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 43
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "You don't have to finish this today.",
        "difficulty": "Easy",
        "explanation": "Don't have to + không cần thiết",
        "options": [
            {
                "id": 401,
                "option_text": "You don't have to finish this today.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "You not have to finish this today.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "You have not finish this today.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "You don't have finish this today.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 43
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "She must have been working hard; she looks exhausted.",
        "difficulty": "Medium",
        "explanation": "Must have + sự chắc chắn (quá khứ) (Động Từ Khuyết Thiếu phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "She must have been working hard; she looks exhausted.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "She must have work hard; she looks exhausted.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "She must work hard; she looks exhausted.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "She must be working hard; she looks exhausted.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 43
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "He might have forgotten about the appointment.",
        "difficulty": "Medium",
        "explanation": "Might have + khả năng (quá khứ)",
        "options": [
            {
                "id": 621,
                "option_text": "He might have forgotten about the appointment.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "He might forget about the appointment.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "He might forgot about the appointment.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "He might be forgotten about the appointment.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 43
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "You should have told me about this earlier.",
        "difficulty": "Medium",
        "explanation": "Should have + lẽ ra nên làm (quá khứ)",
        "options": [
            {
                "id": 631,
                "option_text": "You should have told me about this earlier.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "You should told me about this earlier.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "You should tell me about this earlier.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "You should be telling me about this earlier.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 43
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I couldn't have done it without your help.",
        "difficulty": "Medium",
        "explanation": "Couldn't have + không thể làm được (quá khứ)",
        "options": [
            {
                "id": 641,
                "option_text": "I couldn't have done it without your help.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "I couldn't do it without your help.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "I could not have do it without your help.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "I couldn't have doing it without your help.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 43
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "They may have arrived at the airport by now.",
        "difficulty": "Medium",
        "explanation": "May have + khả năng (quá khứ)",
        "options": [
            {
                "id": 651,
                "option_text": "They may have arrived at the airport by now.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "They may arrive at the airport by now.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "They may arrived at the airport by now.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "They may be arrived at the airport by now.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 43
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "She can speak five languages fluently.",
        "difficulty": "Medium",
        "explanation": "Can + khả năng hiện tại",
        "options": [
            {
                "id": 661,
                "option_text": "She can speak five languages fluently.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "She can to speak five languages fluently.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "She can speaks five languages fluently.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "She cans speak five languages fluently.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 43
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "You will be able to pass the test with more practice.",
        "difficulty": "Medium",
        "explanation": "Will be able to + khả năng tương lai",
        "options": [
            {
                "id": 671,
                "option_text": "You will be able to pass the test with more practice.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "You will can pass the test with more practice.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "You can be able to pass the test with more practice.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "You will be passing the test with more practice.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 43
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "He must work harder to achieve his goals.",
        "difficulty": "Medium",
        "explanation": "Must + nghĩa vụ",
        "options": [
            {
                "id": 681,
                "option_text": "He must work harder to achieve his goals.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "He must to work harder to achieve his goals.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "He must works harder to achieve his goals.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "He must be worked harder to achieve his goals.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 43
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Would you mind helping me with this task?",
        "difficulty": "Medium",
        "explanation": "Would + yêu cầu lịch sự",
        "options": [
            {
                "id": 691,
                "option_text": "Would you mind helping me with this task?",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Would you mind to help me with this task?",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "Would you mind help me with this task?",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "Would you minds helping me with this task?",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 43
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I ought to have called you yesterday.",
        "difficulty": "Medium",
        "explanation": "Ought to have + lẽ ra nên làm (quá khứ)",
        "options": [
            {
                "id": 701,
                "option_text": "I ought to have called you yesterday.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "I ought called you yesterday.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "I should to have called you yesterday.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "I ought have called you yesterday.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 43
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between 'can' and 'could'?",
        "correct_answer": "Can = present ability; Could = past ability or polite request",
        "difficulty": "Hard",
        "explanation": "Can vs Could (Động Từ Khuyết Thiếu nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "Can = present ability; Could = past ability or polite request",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "Can = past ability; Could = present ability",
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
                "option_text": "Could is never used in modern English",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 43
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between 'must' and 'have to'?",
        "correct_answer": "Must = internal obligation; Have to = external obligation",
        "difficulty": "Hard",
        "explanation": "Must vs Have to",
        "options": [
            {
                "id": 821,
                "option_text": "Must = internal obligation; Have to = external obligation",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Must = external obligation; Have to = internal obligation",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "They mean exactly the same thing",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "Have to is never used in English",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 43
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between 'may' and 'might'?",
        "correct_answer": "May = more likely; Might = less likely or less certain",
        "difficulty": "Hard",
        "explanation": "May vs Might - khả năng",
        "options": [
            {
                "id": 831,
                "option_text": "May = more likely; Might = less likely or less certain",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "Might = more likely; May = less likely",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "They are completely interchangeable",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 844,
                "option_text": "Might is never used in modern English",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 43
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'must' for deduction?",
        "correct_answer": "He must be at home; his car is in the driveway.",
        "difficulty": "Hard",
        "explanation": "Must + sự suy đoán chắc chắn",
        "options": [
            {
                "id": 841,
                "option_text": "He must be at home; his car is in the driveway.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "He might be at home; his car is in the driveway.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "He can be at home; his car is in the driveway.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "He should be at home; his car is in the driveway.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 43
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'could have'?",
        "correct_answer": "You could have finished this if you had tried harder.",
        "difficulty": "Hard",
        "explanation": "Could have + khả năng nhưng không làm được (quá khứ)",
        "options": [
            {
                "id": 851,
                "option_text": "You could have finished this if you had tried harder.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "You could finish this if you had tried harder.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "You could have finish this if you had tried harder.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "You could had finished this if you had tried harder.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 43
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct deduction with negation?",
        "correct_answer": "He couldn't have done it; he was at the office.",
        "difficulty": "Hard",
        "explanation": "Couldn't have + sự suy đoán phủ định (quá khứ)",
        "options": [
            {
                "id": 861,
                "option_text": "He couldn't have done it; he was at the office.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "He could have done it; he was at the office.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "He might not have done it; he was at the office.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 884,
                "option_text": "He must not have done it; he was at the office.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 43
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which uses modals correctly for permission?",
        "correct_answer": "May I use your phone? / Can I use your phone?",
        "difficulty": "Hard",
        "explanation": "May/Can + xin phép",
        "options": [
            {
                "id": 871,
                "option_text": "May I use your phone? / Can I use your phone?",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Must I use your phone? / Should I use your phone?",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "Might I use your phone? / Will I use your phone?",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 884,
                "option_text": "Shall I use your phone? / Have I use your phone?",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 43
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which uses modals correctly for prohibition?",
        "correct_answer": "You must not enter without permission.",
        "difficulty": "Hard",
        "explanation": "Must not + cấm",
        "options": [
            {
                "id": 881,
                "option_text": "You must not enter without permission.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "You can not enter without permission.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "You should not enter without permission.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "You may not enter without permission.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 43
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which shows the correct negative deduction?",
        "correct_answer": "She can't have known about this; nobody told her.",
        "difficulty": "Hard",
        "explanation": "Can't have + sự suy đoán phủ định (quá khứ)",
        "options": [
            {
                "id": 891,
                "option_text": "She can't have known about this; nobody told her.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "She must not have known about this; nobody told her.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "She shouldn't have known about this; nobody told her.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "She might not have known about this; nobody told her.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 43
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Modal Verbs",
        "correct_answer": "Modals show ability, permission, obligation, advice, deduction, and possibility",
        "options": [
            {
                "id": 901,
                "option_text": "Modals show ability, permission, obligation, advice, deduction, and possibility",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Modals are only for asking permission",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Modals are rarely used in modern English",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "All modals mean exactly the same thing",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "options": [
            {
                "id": 901,
                "option_text": "Modals show ability, permission, obligation, advice, deduction, and possibility",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Modals are only for asking permission",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Modals are rarely used in modern English",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "All modals mean exactly the same thing",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 43
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which modal is best for strong deduction in the present?",
        "correct_answer": "Must = must be (sự chắc chắn cao nhất)",
        "difficulty": "Hard",
        "explanation": "Modal + deduction",
        "options": [
            {
                "id": 911,
                "option_text": "Must = must be (sự chắc chắn cao nhất)",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "May = may be (sự chắc chắn cao nhất)",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Could = could be (sự chắc chắn cao nhất)",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Might = might be (sự chắc chắn cao nhất)",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 43
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which shows the scale of possibility from most to least likely?",
        "correct_answer": "Must > may > might > could (có thể được)",
        "difficulty": "Hard",
        "explanation": "Khả năng từ cao đến thấp",
        "options": [
            {
                "id": 921,
                "option_text": "Must > may > might > could (có thể được)",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "Could > might > may > must",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "Might > could > may > must",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "All have the same likelihood",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 43
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which modal is used for polite requests or offers?",
        "correct_answer": "Would you like some coffee? / Shall I help you?",
        "difficulty": "Hard",
        "explanation": "Would/Shall + yêu cầu lịch sự",
        "options": [
            {
                "id": 931,
                "option_text": "Would you like some coffee? / Shall I help you?",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "Must you like some coffee? / Must I help you?",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "Can you like some coffee? / Can I help you?",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 944,
                "option_text": "Should you like some coffee? / Should I help you?",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 43
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which correctly shows 'should have' vs 'could have'?",
        "correct_answer": "Should have = lẽ ra nên; Could have = khả năng nhưng không",
        "difficulty": "Hard",
        "explanation": "Should have vs Could have",
        "options": [
            {
                "id": 941,
                "option_text": "Should have = lẽ ra nên; Could have = khả năng nhưng không",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "Should have = khả năng; Could have = lẽ ra nên",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "They mean exactly the same thing",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Neither is commonly used in English",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 43
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which shows 'don't have to' vs 'must not'?",
        "correct_answer": "Don't have to = không cần; Must not = cấm",
        "difficulty": "Hard",
        "explanation": "Don't have to vs Must not - khác nhau",
        "options": [
            {
                "id": 951,
                "option_text": "Don't have to = không cần; Must not = cấm",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "Must not = không cần; Don't have to = cấm",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "They mean exactly the same thing",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "Must not is never used in English",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 43
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which pair is INCORRECT?",
        "correct_answer": "He must swim every day. = Should be 'has to' for routine (bắt buộc cứng nhắc)",
        "difficulty": "Hard",
        "explanation": "Sai - must vs has to",
        "options": [
            {
                "id": 961,
                "option_text": "He must swim every day. = Should be 'has to' for routine (bắt buộc cứng nhắc)",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "He has to work hard. = CORRECT (bắt buộc bên ngoài)",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "She can speak French. = CORRECT (khả năng)",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "They might arrive late. = CORRECT (khả năng)",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 43
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses modal + have + past participle?",
        "correct_answer": "She might have forgotten about the meeting.",
        "difficulty": "Hard",
        "explanation": "Modal + have + past participle",
        "options": [
            {
                "id": 971,
                "option_text": "She might have forgotten about the meeting.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "She might forgot about the meeting.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "She might forget about the meeting.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "She might be forgotten about the meeting.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 43
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'had better'?",
        "correct_answer": "You had better leave now, or you'll be late.",
        "difficulty": "Hard",
        "explanation": "Had better + lời khuyên mạnh",
        "options": [
            {
                "id": 981,
                "option_text": "You had better leave now, or you'll be late.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "You have better leave now, or you'll be late.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "You had better to leave now, or you'll be late.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "You had best leave now, or you'll be late.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 43
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'will' for willingness?",
        "correct_answer": "I will help you with this project.",
        "difficulty": "Hard",
        "explanation": "Will + sẵn sàng/tự nguyện",
        "options": [
            {
                "id": 991,
                "option_text": "I will help you with this project.",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "I would help you with this project.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "I should help you with this project.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "I must help you with this project.",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 43
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Modal verbs don't conjugate and always follow bare infinitive (base form)",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Modal Verbs",
        "options": [
            {
                "id": 1001,
                "option_text": "Modal verbs don't conjugate and always follow bare infinitive (base form)",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "Modal verbs conjugate like regular verbs",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Modal verbs always need 'to' before the main verb",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Modal verbs are rarely used in English",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 43
    }
];

export default questions;