const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "He studied hard; _____, he failed the exam.",
        "correct_answer": "however",
        "suggest_answer": "however",
        "explanation": "However + nhưng, tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Easy",
        "topic_id": 46
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "She was tired; _____, she continued working.",
        "correct_answer": "nevertheless",
        "suggest_answer": "nevertheless",
        "explanation": "Nevertheless + tuy vậy, mặc dù vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Easy",
        "topic_id": 46
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "He is intelligent and hardworking; _____, he deserves success.",
        "correct_answer": "therefore",
        "suggest_answer": "therefore",
        "explanation": "Therefore + vì vậy, do đó (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "difficulty": "Easy",
        "topic_id": 46
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "She speaks English; _____, she speaks French and Spanish.",
        "correct_answer": "moreover",
        "suggest_answer": "moreover",
        "explanation": "Moreover + hơn nữa, thêm vào đó (Liên Từ & Trạng Từ Chuyển Tiếp - Bổ Sung)",
        "difficulty": "Easy",
        "topic_id": 46
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "He was sick; _____, he did not go to work.",
        "correct_answer": "therefore",
        "suggest_answer": "therefore",
        "explanation": "Therefore + do đó (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "difficulty": "Easy",
        "topic_id": 46
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "The restaurant was expensive; _____, the food was excellent.",
        "correct_answer": "however",
        "suggest_answer": "however",
        "explanation": "However + nhưng (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Easy",
        "topic_id": 46
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "The plan is risky; _____, we have no other choice.",
        "correct_answer": "nevertheless",
        "suggest_answer": "nevertheless",
        "explanation": "Nevertheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Easy",
        "topic_id": 46
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "She is qualified and experienced; _____, she got the job.",
        "correct_answer": "therefore",
        "suggest_answer": "therefore",
        "explanation": "Therefore + vì vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "difficulty": "Easy",
        "topic_id": 46
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "He is fluent in English; _____, he is good at mathematics.",
        "correct_answer": "furthermore",
        "suggest_answer": "furthermore",
        "explanation": "Furthermore + hơn nữa, thêm vào đó (Liên Từ & Trạng Từ Chuyển Tiếp - Bổ Sung)",
        "difficulty": "Easy",
        "topic_id": 46
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "The weather was bad; _____, we decided to go out.",
        "correct_answer": "nevertheless",
        "suggest_answer": "nevertheless",
        "explanation": "Nevertheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Easy",
        "topic_id": 46
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "She failed the first time; _____, she passed the second time.",
        "correct_answer": "however",
        "suggest_answer": "however",
        "explanation": "However + nhưng, tuy nhiên (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập phức tạp)",
        "difficulty": "Medium",
        "topic_id": 46
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "The project requires time and money; _____, it is necessary for our company.",
        "correct_answer": "nevertheless",
        "suggest_answer": "nevertheless",
        "explanation": "Nevertheless + mặc dù vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Medium",
        "topic_id": 46
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "He works efficiently; _____, he produces quality results.",
        "correct_answer": "therefore",
        "suggest_answer": "therefore",
        "explanation": "Therefore + vì vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "difficulty": "Medium",
        "topic_id": 46
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "She has a degree in engineering; _____, she has ten years of experience.",
        "correct_answer": "moreover",
        "suggest_answer": "moreover",
        "explanation": "Moreover + hơn nữa (Liên Từ & Trạng Từ Chuyển Tiếp - Bổ Sung)",
        "difficulty": "Medium",
        "topic_id": 46
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "The company lost profit; _____, many employees were laid off.",
        "correct_answer": "consequently",
        "suggest_answer": "consequently",
        "explanation": "Consequently + do đó (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "difficulty": "Medium",
        "topic_id": 46
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "The manager is strict; _____, the team respects him.",
        "correct_answer": "nevertheless",
        "suggest_answer": "nevertheless",
        "explanation": "Nevertheless + vì vậy/do đó (Liên Từ & Trạng Từ Chuyển Tiếp)",
        "difficulty": "Medium",
        "topic_id": 46
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "The prices increased; _____, sales decreased significantly.",
        "correct_answer": "consequently",
        "suggest_answer": "consequently",
        "explanation": "Consequently + do đó, theo đó (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "difficulty": "Medium",
        "topic_id": 46
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "He is not wealthy; _____, he is content with his life.",
        "correct_answer": "however",
        "suggest_answer": "however",
        "explanation": "However + nhưng (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Medium",
        "topic_id": 46
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "The study shows positive results; _____, more research is needed.",
        "correct_answer": "furthermore",
        "suggest_answer": "furthermore",
        "explanation": "Furthermore + hơn nữa (Liên Từ & Trạng Từ Chuyển Tiếp - Bổ Sung)",
        "difficulty": "Medium",
        "topic_id": 46
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "She made a mistake; _____, she learned from it.",
        "correct_answer": "however",
        "suggest_answer": "however",
        "explanation": "However + tuy nhiên (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Medium",
        "topic_id": 46
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "The economy is weak; _____, unemployment is rising.",
        "correct_answer": "consequently",
        "suggest_answer": "consequently",
        "explanation": "Consequently + do đó, theo đó (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả nâng cao)",
        "difficulty": "Hard",
        "topic_id": 46
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "The proposal is innovative; _____, it is expensive to implement.",
        "correct_answer": "nonetheless",
        "suggest_answer": "nonetheless",
        "explanation": "Nonetheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Hard",
        "topic_id": 46
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "The project is delayed; _____, the quality remains high.",
        "correct_answer": "nonetheless",
        "suggest_answer": "nonetheless",
        "explanation": "Nonetheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Hard",
        "topic_id": 46
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "He has limited resources; _____, he achieved remarkable results.",
        "correct_answer": "nonetheless",
        "suggest_answer": "nonetheless",
        "explanation": "Nonetheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Hard",
        "topic_id": 46
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "The evidence is strong; _____, the case is still open.",
        "correct_answer": "however",
        "suggest_answer": "however",
        "explanation": "However + nhưng (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Hard",
        "topic_id": 46
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "The team is new; _____, they are performing well.",
        "correct_answer": "nevertheless",
        "suggest_answer": "nevertheless",
        "explanation": "Nevertheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Hard",
        "topic_id": 46
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "The conditions are difficult; _____, we must proceed.",
        "correct_answer": "nonetheless",
        "suggest_answer": "nonetheless",
        "explanation": "Nonetheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Hard",
        "topic_id": 46
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "The solution is simple; _____, the implementation is complex.",
        "correct_answer": "however",
        "suggest_answer": "however",
        "explanation": "However + nhưng (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Hard",
        "topic_id": 46
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The market is saturated; _____, there are opportunities for innovation.",
        "correct_answer": "nevertheless",
        "suggest_answer": "nevertheless",
        "explanation": "Nevertheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Hard",
        "topic_id": 46
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "The diagnosis is serious; _____, treatment is available.",
        "correct_answer": "however",
        "suggest_answer": "however",
        "explanation": "However + nhưng (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "difficulty": "Hard",
        "topic_id": 46
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'however'?",
        "correct_answer": "She is intelligent; however, she lacks experience.",
        "difficulty": "Easy",
        "explanation": "However + nhưng, tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "options": [
            {
                "id": 311,
                "option_text": "She is intelligent; however, she lacks experience.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "She is intelligent however she lacks experience.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "She is intelligent, however she lacks experience",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "She is intelligent, and however she lacks experience.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 46
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'therefore'?",
        "correct_answer": "He worked hard; therefore, he succeeded.",
        "difficulty": "Easy",
        "explanation": "Therefore + do đó, vì vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "options": [
            {
                "id": 321,
                "option_text": "He worked hard; therefore, he succeeded.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "He worked hard therefore he succeeded.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "He worked hard, therefore he succeeded",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "He worked hard, and therefore he succeeded.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 46
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'moreover'?",
        "correct_answer": "She speaks English fluently; moreover, she writes well.",
        "difficulty": "Easy",
        "explanation": "Moreover + hơn nữa (Liên Từ & Trạng Từ Chuyển Tiếp - Bổ Sung)",
        "options": [
            {
                "id": 331,
                "option_text": "She speaks English fluently; moreover, she writes well.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "She speaks English fluently moreover she writes well.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "She speaks English fluently, moreover she writes well",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "She speaks English fluently, and moreover she writes well.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 46
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The economy is weak; nevertheless, people remain optimistic.",
        "difficulty": "Easy",
        "explanation": "Nevertheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "options": [
            {
                "id": 341,
                "option_text": "The economy is weak; nevertheless, people remain optimistic.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "The economy is weak nevertheless people remain optimistic.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "The economy is weak, nevertheless people remain optimistic",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "The economy is weak, and nevertheless people remain optimistic.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 46
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Production increased significantly; consequently, profits rose.",
        "difficulty": "Easy",
        "explanation": "Consequently + do đó (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "options": [
            {
                "id": 351,
                "option_text": "Production increased significantly; consequently, profits rose.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "Production increased significantly consequently profits rose.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "Production increased significantly, consequently profits rose",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "Production increased significantly, and consequently profits rose.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 46
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The team lost the game; furthermore, they lost their star player.",
        "difficulty": "Easy",
        "explanation": "Furthermore + hơn nữa (Liên Từ & Trạng Từ Chuyển Tiếp - Bổ Sung)",
        "options": [
            {
                "id": 361,
                "option_text": "The team lost the game; furthermore, they lost their star player.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "The team lost the game furthermore they lost their star player.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "The team lost the game, furthermore they lost their star player",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "The team lost the game, and furthermore they lost their star player.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 46
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The job is demanding; however, it offers excellent benefits.",
        "difficulty": "Easy",
        "explanation": "However + nhưng (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "options": [
            {
                "id": 371,
                "option_text": "The job is demanding; however, it offers excellent benefits.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "The job is demanding however it offers excellent benefits.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "The job is demanding, however it offers excellent benefits",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "The job is demanding, and however it offers excellent benefits.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 46
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The book is lengthy; nonetheless, it is engaging.",
        "difficulty": "Easy",
        "explanation": "Nonetheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "options": [
            {
                "id": 381,
                "option_text": "The book is lengthy; nonetheless, it is engaging.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "The book is lengthy nonetheless it is engaging.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "The book is lengthy, nonetheless it is engaging",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "The book is lengthy, and nonetheless it is engaging.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 46
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The weather was terrible; nevertheless, we enjoyed the picnic.",
        "difficulty": "Easy",
        "explanation": "Nevertheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "options": [
            {
                "id": 391,
                "option_text": "The weather was terrible; nevertheless, we enjoyed the picnic.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "The weather was terrible nevertheless we enjoyed the picnic.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "The weather was terrible, nevertheless we enjoyed the picnic",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "The weather was terrible, and nevertheless we enjoyed the picnic.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 46
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "She has a degree; furthermore, she has relevant experience.",
        "difficulty": "Easy",
        "explanation": "Furthermore + hơn nữa (Liên Từ & Trạng Từ Chuyển Tiếp - Bổ Sung)",
        "options": [
            {
                "id": 401,
                "option_text": "She has a degree; furthermore, she has relevant experience.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "She has a degree furthermore she has relevant experience.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "She has a degree, furthermore she has relevant experience",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "She has a degree, and furthermore she has relevant experience.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 46
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The project is behind schedule; however, the quality is excellent.",
        "difficulty": "Medium",
        "explanation": "However + nhưng, tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "The project is behind schedule; however, the quality is excellent.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "The project is behind schedule; therefore, the quality is excellent.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "The project is behind schedule; consequently, the quality is excellent.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "The project is behind schedule; moreover, the quality is excellent.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 46
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "He was trained in the field; consequently, he got the job.",
        "difficulty": "Medium",
        "explanation": "Consequently + do đó (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "options": [
            {
                "id": 621,
                "option_text": "He was trained in the field; consequently, he got the job.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "He was trained in the field; however, he got the job.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "He was trained in the field; nevertheless, he got the job.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "He was trained in the field; furthermore, he got the job.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 46
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The company invested heavily; furthermore, they expanded internationally.",
        "difficulty": "Medium",
        "explanation": "Furthermore + hơn nữa (Liên Từ & Trạng Từ Chuyển Tiếp - Bổ Sung)",
        "options": [
            {
                "id": 631,
                "option_text": "The company invested heavily; furthermore, they expanded internationally.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "The company invested heavily; however, they expanded internationally.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "The company invested heavily; therefore, they expanded internationally.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "The company invested heavily; nevertheless, they expanded internationally.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 46
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The weather is cold; nevertheless, many people are outdoors.",
        "difficulty": "Medium",
        "explanation": "Nevertheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "options": [
            {
                "id": 641,
                "option_text": "The weather is cold; nevertheless, many people are outdoors.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "The weather is cold; therefore, many people are outdoors.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "The weather is cold; consequently, many people are outdoors.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "The weather is cold; moreover, many people are outdoors.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 46
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The analysis was incomplete; however, the conclusions were valid.",
        "difficulty": "Medium",
        "explanation": "However + nhưng (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "options": [
            {
                "id": 651,
                "option_text": "The analysis was incomplete; however, the conclusions were valid.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "The analysis was incomplete; therefore, the conclusions were valid.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "The analysis was incomplete; consequently, the conclusions were valid.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "The analysis was incomplete; furthermore, the conclusions were valid.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 46
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Sales declined significantly; therefore, profits decreased.",
        "difficulty": "Medium",
        "explanation": "Therefore + do đó (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "options": [
            {
                "id": 661,
                "option_text": "Sales declined significantly; therefore, profits decreased.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "Sales declined significantly; however, profits decreased.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "Sales declined significantly; nevertheless, profits decreased.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "Sales declined significantly; furthermore, profits decreased.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 46
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "He has strong technical skills; moreover, he has excellent communication abilities.",
        "difficulty": "Medium",
        "explanation": "Moreover + hơn nữa (Liên Từ & Trạng Từ Chuyển Tiếp - Bổ Sung)",
        "options": [
            {
                "id": 671,
                "option_text": "He has strong technical skills; moreover, he has excellent communication abilities.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "He has strong technical skills; however, he has excellent communication abilities.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "He has strong technical skills; therefore, he has excellent communication abilities.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "He has strong technical skills; nevertheless, he has excellent communication abilities.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 46
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The initial investment was high; nonetheless, returns are projected to be strong.",
        "difficulty": "Medium",
        "explanation": "Nonetheless + tuy vậy (Liên Từ & Trạng Từ Chuyển Tiếp - Đối Lập)",
        "options": [
            {
                "id": 681,
                "option_text": "The initial investment was high; nonetheless, returns are projected to be strong.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "The initial investment was high; therefore, returns are projected to be strong.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "The initial investment was high; consequently, returns are projected to be strong.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "The initial investment was high; moreover, returns are projected to be strong.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 46
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Employment was low; consequently, the government took action.",
        "difficulty": "Medium",
        "explanation": "Consequently + do đó (Liên Từ & Trạng Từ Chuyển Tiếp - Kết Quả)",
        "options": [
            {
                "id": 691,
                "option_text": "Employment was low; consequently, the government took action.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Employment was low; however, the government took action.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "Employment was low; nevertheless, the government took action.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "Employment was low; moreover, the government took action.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 46
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The report was thorough; furthermore, it provided actionable recommendations.",
        "difficulty": "Medium",
        "explanation": "Furthermore + hơn nữa (Liên Từ & Trạng Từ Chuyển Tiếp - Bổ Sung)",
        "options": [
            {
                "id": 701,
                "option_text": "The report was thorough; furthermore, it provided actionable recommendations.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "The report was thorough; however, it provided actionable recommendations.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "The report was thorough; therefore, it provided actionable recommendations.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "The report was thorough; nevertheless, it provided actionable recommendations.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 46
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between 'however' and 'nevertheless'?",
        "correct_answer": "Both indicate contrast; 'nevertheless' is slightly more formal",
        "difficulty": "Hard",
        "explanation": "However vs Nevertheless (Liên Từ & Trạng Từ Chuyển Tiếp nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "Both indicate contrast; 'nevertheless' is slightly more formal",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "'However' means agreement; 'nevertheless' means disagreement",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "'Nevertheless' is more common in daily speech",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "They are never interchangeable",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 46
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which shows the difference between 'therefore' and 'consequently'?",
        "correct_answer": "Both indicate result; 'consequently' is more formal",
        "difficulty": "Hard",
        "explanation": "Therefore vs Consequently",
        "options": [
            {
                "id": 821,
                "option_text": "Both indicate result; 'consequently' is more formal",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "'Therefore' means because; 'consequently' means although",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "'Consequently' is more common in casual speech",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "They can never be used interchangeably",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 46
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which shows conjunctive adverbs indicating addition?",
        "correct_answer": "moreover, furthermore, additionally, also",
        "difficulty": "Hard",
        "explanation": "Liên Từ chỉ bổ sung",
        "options": [
            {
                "id": 831,
                "option_text": "moreover, furthermore, additionally, also",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "however, nevertheless, nonetheless, still",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "therefore, consequently, as a result, thus",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 844,
                "option_text": "All are used to show addition",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 46
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which shows conjunctive adverbs indicating contrast?",
        "correct_answer": "however, nevertheless, nonetheless, still, yet",
        "difficulty": "Hard",
        "explanation": "Liên Từ chỉ đối lập",
        "options": [
            {
                "id": 841,
                "option_text": "however, nevertheless, nonetheless, still, yet",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "moreover, furthermore, additionally, besides",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "therefore, consequently, as a result, thus",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "All are used to show contrast",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 46
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which shows conjunctive adverbs indicating result?",
        "correct_answer": "therefore, consequently, thus, as a result, so",
        "difficulty": "Hard",
        "explanation": "Liên Từ chỉ kết quả",
        "options": [
            {
                "id": 851,
                "option_text": "therefore, consequently, thus, as a result, so",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "however, nevertheless, nonetheless, still",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "moreover, furthermore, additionally, besides",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "All are used to show result",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 46
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses punctuation with conjunctive adverbs?",
        "correct_answer": "Independent clause; conjunctive adverb, independent clause.",
        "difficulty": "Hard",
        "explanation": "Cách dùng dấu câu",
        "options": [
            {
                "id": 861,
                "option_text": "Independent clause; conjunctive adverb, independent clause.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "Independent clause conjunctive adverb independent clause",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "Independent clause, conjunctive adverb independent clause.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 884,
                "option_text": "Punctuation doesn't matter with conjunctive adverbs",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 46
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which shows the most formal conjunctive adverbs?",
        "correct_answer": "moreover, furthermore, consequently, nevertheless",
        "difficulty": "Hard",
        "explanation": "Liên Từ formal",
        "options": [
            {
                "id": 871,
                "option_text": "moreover, furthermore, consequently, nevertheless",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "but, so, still, yet",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "and, or, because, although",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 884,
                "option_text": "All have the same level of formality",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 46
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which shows how to transition between related ideas?",
        "correct_answer": "Additionally, in addition, furthermore, moreover",
        "difficulty": "Hard",
        "explanation": "Liên Từ chuyển tiếp ý tưởng liên quan",
        "options": [
            {
                "id": 881,
                "option_text": "Additionally, in addition, furthermore, moreover",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "However, nevertheless, nonetheless, still",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "Therefore, consequently, thus, as a result",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "All are used for transitioning between ideas",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 46
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which shows how to transition between contrasting ideas?",
        "correct_answer": "However, yet, still, nevertheless, nonetheless",
        "difficulty": "Hard",
        "explanation": "Liên Từ chuyển tiếp ý tưởng đối lập",
        "options": [
            {
                "id": 891,
                "option_text": "However, yet, still, nevertheless, nonetheless",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "Moreover, furthermore, additionally, besides",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "Therefore, consequently, thus, as a result",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "All are used for transitioning between ideas",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 46
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Conjunctive Adverbs",
        "correct_answer": "Conjunctive adverbs connect independent clauses and require specific punctuation",
        "options": [
            {
                "id": 901,
                "option_text": "Conjunctive adverbs connect independent clauses and require specific punctuation",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Conjunctive adverbs are the same as coordinating conjunctions",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Conjunctive adverbs are rarely used in formal writing",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "All conjunctive adverbs have identical meanings",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "options": [
            {
                "id": 901,
                "option_text": "Conjunctive adverbs connect independent clauses and require specific punctuation",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Conjunctive adverbs are the same as coordinating conjunctions",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Conjunctive adverbs are rarely used in formal writing",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "All conjunctive adverbs have identical meanings",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 46
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which shows additional conjunctive adverbs for emphasis?",
        "correct_answer": "certainly, indeed, in fact, actually, obviously",
        "difficulty": "Hard",
        "explanation": "Liên Từ nhấn mạnh",
        "options": [
            {
                "id": 911,
                "option_text": "certainly, indeed, in fact, actually, obviously",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "however, nevertheless, nonetheless, still",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "moreover, furthermore, additionally, besides",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 924,
                "option_text": "All are used for emphasis",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 46
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which shows how 'thus' is typically used?",
        "correct_answer": "He studied hard; thus, he passed the exam.",
        "difficulty": "Hard",
        "explanation": "Thus + do đó (chính thức hơn 'therefore')",
        "options": [
            {
                "id": 921,
                "option_text": "He studied hard; thus, he passed the exam.",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "He studied hard thus he passed the exam.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "He studied hard; thus he passed the exam",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Thus is never used in academic writing",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 46
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which sentence uses a conjunctive adverb correctly?",
        "correct_answer": "The experiment failed; however, the results were valuable.",
        "difficulty": "Hard",
        "explanation": "Cách dùng chính xác",
        "options": [
            {
                "id": 931,
                "option_text": "The experiment failed; however, the results were valuable.",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "The experiment failed, but however, the results were valuable.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "The experiment failed however the results were valuable.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 944,
                "option_text": "The experiment failed; and however, the results were valuable.",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 46
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which shows the most common conjunctive adverbs?",
        "correct_answer": "however, therefore, moreover, nevertheless, consequently",
        "difficulty": "Hard",
        "explanation": "Liên Từ phổ biến nhất",
        "options": [
            {
                "id": 941,
                "option_text": "however, therefore, moreover, nevertheless, consequently",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "notwithstanding, albeit, heretofore, thereby",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "alternatively, meanwhile, otherwise, also",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "All are equally common",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 46
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which shows when to use 'in addition' instead of 'moreover'?",
        "correct_answer": "Both are acceptable; 'in addition' is slightly less formal",
        "difficulty": "Hard",
        "explanation": "In addition vs Moreover",
        "options": [
            {
                "id": 951,
                "option_text": "Both are acceptable; 'in addition' is slightly less formal",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "'In addition' means subtraction; 'moreover' means addition",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "'Moreover' is never used in modern English",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "They can never be interchanged",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 46
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which pair uses conjunctive adverbs INCORRECTLY?",
        "correct_answer": "The plan is complex, however it is effective. = WRONG (needs semicolon)",
        "difficulty": "Hard",
        "explanation": "Sai - dùng dấu phẩy thay vì dấu chấm phẩy",
        "options": [
            {
                "id": 961,
                "option_text": "The plan is complex, however it is effective. = WRONG (needs semicolon)",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "The plan is complex; however, it is effective. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "He studied hard; therefore, he succeeded. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "She is talented; moreover, she is hardworking. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 46
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which correctly distinguishes conjunctive adverbs from coordinating conjunctions?",
        "correct_answer": "Conjunctive adverbs connect independent clauses; conjunctions connect equal elements",
        "difficulty": "Hard",
        "explanation": "Khác nhau giữa conjunctive adverbs và coordinating conjunctions",
        "options": [
            {
                "id": 971,
                "option_text": "Conjunctive adverbs connect independent clauses; conjunctions connect equal elements",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "They are completely the same",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "Conjunctions connect independent clauses; adverbs connect equal elements",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 984,
                "option_text": "Conjunctive adverbs are never used",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 46
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which shows 'still' used as a conjunctive adverb?",
        "correct_answer": "He failed the test; still, he was promoted.",
        "difficulty": "Hard",
        "explanation": "Still + conjunctive adverb",
        "options": [
            {
                "id": 981,
                "option_text": "He failed the test; still, he was promoted.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "He still failed the test.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "Still he failed the test.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "Still, he failed the test",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 46
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which shows advanced use of conjunctive adverbs?",
        "correct_answer": "The data suggests success; moreover, future projections are positive.",
        "difficulty": "Hard",
        "explanation": "Cách dùng nâng cao",
        "options": [
            {
                "id": 991,
                "option_text": "The data suggests success; moreover, future projections are positive.",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "The data suggests success, and moreover, future projections are positive.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "The data suggests success moreover future projections are positive.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "The data suggests success; furthermore that future projections are positive.",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 46
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Conjunctive adverbs are transition words that connect ideas between sentences or clauses",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Conjunctive Adverbs",
        "options": [
            {
                "id": 1001,
                "option_text": "Conjunctive adverbs are transition words that connect ideas between sentences or clauses",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "Conjunctive adverbs are prepositions",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Conjunctive adverbs are rarely used in writing",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Conjunctive adverbs don't require specific punctuation",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 46
    }
];

export default questions;