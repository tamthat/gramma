const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "Never ___ I ___ such a beautiful sunset.",
        "correct_answer": "have / seen",
        "suggest_answer": "have / seen",
        "explanation": "Never + Inversion (Đảo Ngữ - Never + auxiliary + subject)",
        "difficulty": "Easy",
        "topic_id": 40
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "Seldom ___ he ___ early.",
        "correct_answer": "does / arrive",
        "suggest_answer": "does / arrive",
        "explanation": "Seldom + Inversion (Đảo Ngữ - Seldom + auxiliary + subject)",
        "difficulty": "Easy",
        "topic_id": 40
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "Rarely ___ she ___ any complaints.",
        "correct_answer": "makes",
        "suggest_answer": "makes",
        "explanation": "Rarely + Inversion (đảo với auxiliary)",
        "difficulty": "Easy",
        "topic_id": 40
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "Hardly ___ the movie ___ when it started raining.",
        "correct_answer": "had / begun",
        "suggest_answer": "had / begun",
        "explanation": "Hardly + Inversion (past perfect)",
        "difficulty": "Easy",
        "topic_id": 40
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "No sooner ___ he ___ than the phone rang.",
        "correct_answer": "had / left",
        "suggest_answer": "had / left",
        "explanation": "No sooner + Inversion (past perfect - cấu trúc fixed)",
        "difficulty": "Easy",
        "topic_id": 40
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "Not only ___ she ___ but also a good teacher.",
        "correct_answer": "is / a singer",
        "suggest_answer": "is / a singer",
        "explanation": "Not only + Inversion (Đảo Ngữ)",
        "difficulty": "Easy",
        "topic_id": 40
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "In no way ___ he ___ responsible.",
        "correct_answer": "is / responsible",
        "suggest_answer": "is",
        "explanation": "In no way + Inversion (phủ định cực mạnh)",
        "difficulty": "Easy",
        "topic_id": 40
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "Under no circumstances ___ you ___ the rules.",
        "correct_answer": "must / break",
        "suggest_answer": "must / break",
        "explanation": "Under no circumstances + Inversion (phủ định cực mạnh)",
        "difficulty": "Easy",
        "topic_id": 40
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "Not a single word ___ he ___ about the incident.",
        "correct_answer": "said / about",
        "suggest_answer": "said",
        "explanation": "Not a single + Inversion",
        "difficulty": "Easy",
        "topic_id": 40
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "At no time ___ they ___ their promise.",
        "correct_answer": "did / break",
        "suggest_answer": "did / break",
        "explanation": "At no time + Inversion",
        "difficulty": "Easy",
        "topic_id": 40
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "Never before ___ such a disaster ___ in our town.",
        "correct_answer": "has / occurred",
        "suggest_answer": "has / occurred",
        "explanation": "Never before + Inversion (Đảo Ngữ Với Trạng Từ Phủ Định phức tạp)",
        "difficulty": "Medium",
        "topic_id": 40
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "Seldom if ever ___ he ___ his family.",
        "correct_answer": "visits",
        "suggest_answer": "visits",
        "explanation": "Seldom if ever + Inversion",
        "difficulty": "Medium",
        "topic_id": 40
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "Rarely ___ you ___ such dedication in young people.",
        "correct_answer": "find",
        "suggest_answer": "find",
        "explanation": "Rarely + Inversion (present tense)",
        "difficulty": "Medium",
        "topic_id": 40
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "Hardly had we arrived when ___ ___.",
        "correct_answer": "it / started raining",
        "suggest_answer": "it / started raining",
        "explanation": "Hardly + past perfect + when clause",
        "difficulty": "Medium",
        "topic_id": 40
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "Not until midnight ___ they ___ home.",
        "correct_answer": "did / arrive",
        "suggest_answer": "did / arrive",
        "explanation": "Not until + Inversion (time clause)",
        "difficulty": "Medium",
        "topic_id": 40
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "No sooner had the game started than ___ ___.",
        "correct_answer": "it / ended",
        "suggest_answer": "it / ended",
        "explanation": "No sooner + past perfect + than clause",
        "difficulty": "Medium",
        "topic_id": 40
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "Only after she explained ___ he ___ the problem.",
        "correct_answer": "did / understand",
        "suggest_answer": "did / understand",
        "explanation": "Only + time expression + Inversion",
        "difficulty": "Medium",
        "topic_id": 40
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "Little did he know ___ his future would be.",
        "correct_answer": "what",
        "suggest_answer": "what",
        "explanation": "Little + Inversion (phủ định nhẹ)",
        "difficulty": "Medium",
        "topic_id": 40
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "Scarcely ___ the ceremony ___ when the rain came.",
        "correct_answer": "had / begun",
        "suggest_answer": "had / begun",
        "explanation": "Scarcely + Inversion (past perfect)",
        "difficulty": "Medium",
        "topic_id": 40
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "Not a moment ___ she ___ worrying about him.",
        "correct_answer": "did / stop",
        "suggest_answer": "did / stop",
        "explanation": "Not a moment + Inversion",
        "difficulty": "Medium",
        "topic_id": 40
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "Never in my life ___ I ___ such rudeness.",
        "correct_answer": "have / witnessed",
        "suggest_answer": "have / witnessed",
        "explanation": "Never in my life + Inversion (Đảo Ngữ Với Trạng Từ Phủ Định nâng cao)",
        "difficulty": "Hard",
        "topic_id": 40
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "Not only ___ the project failed but ___ also lost money.",
        "correct_answer": "did / they",
        "suggest_answer": "did / they",
        "explanation": "Not only + Inversion + but also (correlative)",
        "difficulty": "Hard",
        "topic_id": 40
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "Rarely if ever ___ one ___ such talent.",
        "correct_answer": "sees",
        "suggest_answer": "sees",
        "explanation": "Rarely if ever + Inversion",
        "difficulty": "Hard",
        "topic_id": 40
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "Only when we arrived ___ we ___ the truth.",
        "correct_answer": "did / learn",
        "suggest_answer": "did / learn",
        "explanation": "Only + when + Inversion",
        "difficulty": "Hard",
        "topic_id": 40
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "No longer ___ he ___ to work for that company.",
        "correct_answer": "does / want",
        "suggest_answer": "does / want",
        "explanation": "No longer + Inversion",
        "difficulty": "Hard",
        "topic_id": 40
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "In no way ___ this behavior ___ acceptable.",
        "correct_answer": "is / acceptable",
        "suggest_answer": "is",
        "explanation": "In no way + Inversion (be verb)",
        "difficulty": "Hard",
        "topic_id": 40
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "Under no circumstances ___ you ___ confidential information.",
        "correct_answer": "should / disclose",
        "suggest_answer": "should / disclose",
        "explanation": "Under no circumstances + Inversion (modal)",
        "difficulty": "Hard",
        "topic_id": 40
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "Scarcely had we ___ when the doorbell ___.",
        "correct_answer": "sat down / rang",
        "suggest_answer": "sat down / rang",
        "explanation": "Scarcely + past perfect + when clause",
        "difficulty": "Hard",
        "topic_id": 40
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "Not until years later ___ she ___ the consequences.",
        "correct_answer": "did / understand",
        "suggest_answer": "did / understand",
        "explanation": "Not until + Inversion (years later - time)",
        "difficulty": "Hard",
        "topic_id": 40
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "Never before ___ such an opportunity ___ been available.",
        "correct_answer": "has / opportunity",
        "suggest_answer": "has",
        "explanation": "Never before + present perfect + Inversion",
        "difficulty": "Hard",
        "topic_id": 40
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'never'?",
        "correct_answer": "Never have I seen such beauty.",
        "difficulty": "Easy",
        "explanation": "Never + Inversion (Đảo Ngữ Với Trạng Từ Phủ Định)",
        "options": [
            {
                "id": 311,
                "option_text": "Never have I seen such beauty.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "Never I have seen such beauty.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "I never have seen such beauty.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "Never seen I have such beauty.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 40
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'seldom'?",
        "correct_answer": "Seldom does he arrive on time.",
        "difficulty": "Easy",
        "explanation": "Seldom + Inversion",
        "options": [
            {
                "id": 321,
                "option_text": "Seldom does he arrive on time.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "Seldom he does arrive on time.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "He seldom does arrive on time.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "Seldom arrive he on time does.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 40
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'rarely'?",
        "correct_answer": "Rarely do you find such talent.",
        "difficulty": "Easy",
        "explanation": "Rarely + Inversion (present tense)",
        "options": [
            {
                "id": 331,
                "option_text": "Rarely do you find such talent.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "Rarely you do find such talent.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "You rarely find such talent.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "Rarely find you such talent do.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 40
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'hardly'?",
        "correct_answer": "Hardly had he arrived when it started raining.",
        "difficulty": "Easy",
        "explanation": "Hardly + past perfect + when",
        "options": [
            {
                "id": 341,
                "option_text": "Hardly had he arrived when it started raining.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "Hardly he had arrived when it started raining.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "He hardly had arrived when it started raining.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "Hardly arrived he had when it started raining.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 40
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'no sooner'?",
        "correct_answer": "No sooner had I left than the phone rang.",
        "difficulty": "Easy",
        "explanation": "No sooner + past perfect + than (cấu trúc fixed)",
        "options": [
            {
                "id": 351,
                "option_text": "No sooner had I left than the phone rang.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "No sooner I had left than the phone rang.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "I no sooner had left than the phone rang.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "No sooner than I had left the phone rang.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 40
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with 'not only'?",
        "correct_answer": "Not only does she work hard but also creates beautiful art.",
        "difficulty": "Easy",
        "explanation": "Not only + Inversion (đầu câu)",
        "options": [
            {
                "id": 361,
                "option_text": "Not only does she work hard but also creates beautiful art.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "Not only she does work hard but also creates beautiful art.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "She not only works hard but also creates beautiful art.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "Not only works she hard but also creates beautiful art.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 40
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'in no way'?",
        "correct_answer": "In no way is his behavior acceptable.",
        "difficulty": "Easy",
        "explanation": "In no way + Inversion (be verb)",
        "options": [
            {
                "id": 371,
                "option_text": "In no way is his behavior acceptable.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "In no way his behavior is acceptable.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "His behavior in no way is acceptable.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "In no way acceptable his behavior is.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 40
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'under no circumstances'?",
        "correct_answer": "Under no circumstances should you break the rules.",
        "difficulty": "Easy",
        "explanation": "Under no circumstances + Inversion (modal verb)",
        "options": [
            {
                "id": 381,
                "option_text": "Under no circumstances should you break the rules.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "Under no circumstances you should break the rules.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "You under no circumstances should break the rules.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "Under no circumstances break the rules you should.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 40
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Not a word did he say about the accident.",
        "difficulty": "Easy",
        "explanation": "Not a + noun + Inversion",
        "options": [
            {
                "id": 391,
                "option_text": "Not a word did he say about the accident.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "Not a word he did say about the accident.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "He not a word did say about the accident.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "Not a word said he about the accident.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 40
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "At no time did they consider giving up.",
        "difficulty": "Easy",
        "explanation": "At no time + Inversion",
        "options": [
            {
                "id": 401,
                "option_text": "At no time did they consider giving up.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "At no time they did consider giving up.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "They at no time did consider giving up.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "At no time consider they giving up did.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 40
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Never before have such changes been witnessed.",
        "difficulty": "Medium",
        "explanation": "Never before + present perfect + Inversion (Đảo Ngữ Với Trạng Từ Phủ Định phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "Never before have such changes been witnessed.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "Never before such changes have been witnessed.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Such changes never before have been witnessed.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "Never before been have such changes witnessed.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 40
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Seldom if ever does one encounter such dedication.",
        "difficulty": "Medium",
        "explanation": "Seldom if ever + Inversion",
        "options": [
            {
                "id": 621,
                "option_text": "Seldom if ever does one encounter such dedication.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "Seldom if ever one does encounter such dedication.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "One seldom if ever encounters such dedication.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "Seldom if ever encounter one does such dedication.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 40
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Rarely will you find such opportunities.",
        "difficulty": "Medium",
        "explanation": "Rarely + will + Inversion (future)",
        "options": [
            {
                "id": 631,
                "option_text": "Rarely will you find such opportunities.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "Rarely you will find such opportunities.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "You rarely will find such opportunities.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "Rarely find will you such opportunities.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 40
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Hardly had the bell rung when everyone stopped.",
        "difficulty": "Medium",
        "explanation": "Hardly + past perfect + when",
        "options": [
            {
                "id": 641,
                "option_text": "Hardly had the bell rung when everyone stopped.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "Hardly the bell had rung when everyone stopped.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "The bell hardly had rung when everyone stopped.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "Hardly rung had the bell when everyone stopped.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 40
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "No sooner had I finished than another problem arose.",
        "difficulty": "Medium",
        "explanation": "No sooner + past perfect + than",
        "options": [
            {
                "id": 651,
                "option_text": "No sooner had I finished than another problem arose.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "No sooner I had finished than another problem arose.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "I no sooner had finished than another problem arose.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "No sooner finished had I than another problem arose.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 40
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Not until tomorrow will we know the results.",
        "difficulty": "Medium",
        "explanation": "Not until + Inversion (future)",
        "options": [
            {
                "id": 661,
                "option_text": "Not until tomorrow will we know the results.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "Not until tomorrow we will know the results.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "We not until tomorrow will know the results.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "Not until tomorrow know we will the results.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 40
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Only after years of practice did he master the skill.",
        "difficulty": "Medium",
        "explanation": "Only + time + Inversion",
        "options": [
            {
                "id": 671,
                "option_text": "Only after years of practice did he master the skill.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "Only after years of practice he did master the skill.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "He only after years of practice did master the skill.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "Only after years of practice master did he the skill.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 40
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Not only did she win the race but also set a record.",
        "difficulty": "Medium",
        "explanation": "Not only + Inversion + but also",
        "options": [
            {
                "id": 681,
                "option_text": "Not only did she win the race but also set a record.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "Not only she did win the race but also set a record.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "She not only did win the race but also set a record.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "Not only won she the race but also set a record.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 40
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Little did we know what would happen next.",
        "difficulty": "Medium",
        "explanation": "Little + Inversion (phủ định nhẹ)",
        "options": [
            {
                "id": 691,
                "option_text": "Little did we know what would happen next.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Little we did know what would happen next.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "We little did know what would happen next.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "Little know we did what would happen next.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 40
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Scarcely could she believe her eyes.",
        "difficulty": "Medium",
        "explanation": "Scarcely + could + Inversion (past)",
        "options": [
            {
                "id": 701,
                "option_text": "Scarcely could she believe her eyes.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "Scarcely she could believe her eyes.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "She scarcely could believe her eyes.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "Scarcely believe could she her eyes.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 40
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion with negative adverbials?",
        "correct_answer": "Never in my life have I experienced such joy.",
        "difficulty": "Hard",
        "explanation": "Never in my life + Inversion (Đảo Ngữ Với Trạng Từ Phủ Định nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "Never in my life have I experienced such joy.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "Never in my life I have experienced such joy.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "In my life never have I experienced such joy.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "Never in my life experienced I have such joy.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 40
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which shows 'not only...but also' with correct inversion?",
        "correct_answer": "Not only did he apologize but also made amends.",
        "difficulty": "Hard",
        "explanation": "Not only + Inversion + but also (khác verb form cho parallel)",
        "options": [
            {
                "id": 821,
                "option_text": "Not only did he apologize but also made amends.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Not only he apologized but also made amends.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "He not only apologized but also made amends.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "Not only apologized he but also made amends.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 40
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'hardly...when'?",
        "correct_answer": "Hardly had I started working when the power went out.",
        "difficulty": "Hard",
        "explanation": "Hardly + past perfect + when (fixed structure)",
        "options": [
            {
                "id": 831,
                "option_text": "Hardly had I started working when the power went out.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "Hardly I had started working when the power went out.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "I hardly had started working when the power went out.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "Hardly started had I working when the power went out.",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 40
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'no sooner...than'?",
        "correct_answer": "No sooner had she arrived than problems began.",
        "difficulty": "Hard",
        "explanation": "No sooner + past perfect + than (fixed structure)",
        "options": [
            {
                "id": 841,
                "option_text": "No sooner had she arrived than problems began.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "No sooner she had arrived than problems began.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "She no sooner had arrived than problems began.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "No sooner arrived had she than problems began.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 40
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'not until' with inversion?",
        "correct_answer": "Not until we received the letter did we understand.",
        "difficulty": "Hard",
        "explanation": "Not until + clause + Inversion",
        "options": [
            {
                "id": 851,
                "option_text": "Not until we received the letter did we understand.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "Not until we received the letter we did understand.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "We not until received the letter did understand.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "Not until the letter we received did understand.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 40
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'only' with inversion?",
        "correct_answer": "Only after careful thought did she make a decision.",
        "difficulty": "Hard",
        "explanation": "Only + expression + Inversion",
        "options": [
            {
                "id": 861,
                "option_text": "Only after careful thought did she make a decision.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "Only after careful thought she did make a decision.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "She only after careful thought did make a decision.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "Only after careful thought make she did a decision.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 40
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct placement of inversion?",
        "correct_answer": "Under no circumstances will such behavior be tolerated.",
        "difficulty": "Hard",
        "explanation": "Under no circumstances + will + Inversion",
        "options": [
            {
                "id": 871,
                "option_text": "Under no circumstances will such behavior be tolerated.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Under no circumstances such behavior will be tolerated.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "Such behavior under no circumstances will be tolerated.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "Under no circumstances tolerated will such behavior be.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 40
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct inversion of negative quantifiers?",
        "correct_answer": "Not a single mistake did they make.",
        "difficulty": "Hard",
        "explanation": "Not a single + noun + Inversion",
        "options": [
            {
                "id": 881,
                "option_text": "Not a single mistake did they make.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "Not a single mistake they did make.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "They not a single mistake did make.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "Not a single did they mistake make.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 40
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'scarcely'?",
        "correct_answer": "Scarcely had the meeting begun when unexpected news arrived.",
        "difficulty": "Hard",
        "explanation": "Scarcely + past perfect + when",
        "options": [
            {
                "id": 891,
                "option_text": "Scarcely had the meeting begun when unexpected news arrived.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "Scarcely the meeting had begun when unexpected news arrived.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "The meeting scarcely had begun when unexpected news arrived.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "Scarcely begun had the meeting when unexpected news arrived.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 40
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Đảo Ngữ Với Trạng Từ Phủ Định",
        "correct_answer": "Negative adverbials at sentence start require inversion of auxiliary and subject for emphasis",
        "options": [
            {
                "id": 901,
                "option_text": "Negative adverbials at sentence start require inversion of auxiliary and subject for emphasis",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Inversion is optional with negative adverbials",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Only 'never' requires inversion",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Negative adverbials don't affect word order in modern English",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "options": [
            {
                "id": 901,
                "option_text": "Negative adverbials at sentence start require inversion of auxiliary and subject for emphasis",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Inversion is optional with negative adverbials",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Only 'never' requires inversion",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Negative adverbials don't affect word order in modern English",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 40
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which adverbials require inversion when placed at sentence start?",
        "correct_answer": "Never, rarely, hardly, no sooner, not only, and negative expressions",
        "difficulty": "Hard",
        "explanation": "Các trạng từ phủ định yêu cầu inversion",
        "options": [
            {
                "id": 911,
                "option_text": "Never, rarely, hardly, no sooner, not only, and negative expressions",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "Only 'never' and 'rarely'",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "All adverbials require inversion",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "No adverbials trigger inversion",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 40
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which shows what inverts in negative inversion?",
        "correct_answer": "The auxiliary verb and subject (Auxiliary + Subject invert)",
        "difficulty": "Hard",
        "explanation": "Thứ tự inversion",
        "options": [
            {
                "id": 921,
                "option_text": "The auxiliary verb and subject (Auxiliary + Subject invert)",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "Only the main verb inverts",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "The subject and object invert",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Everything in the clause inverts",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 40
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "When can 'hardly' be used with 'when'?",
        "correct_answer": "Hardly is followed by 'when' to show immediate succession",
        "difficulty": "Hard",
        "explanation": "Cấu trúc Hardly...when",
        "options": [
            {
                "id": 931,
                "option_text": "Hardly is followed by 'when' to show immediate succession",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "'When' is never used with 'hardly'",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "'When' is used instead of 'hardly'",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "Both are interchangeable in all contexts",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 40
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which adverbial pair requires identical structure?",
        "correct_answer": "No sooner...than (requires past perfect + than)",
        "difficulty": "Hard",
        "explanation": "Fixed structure pairs",
        "options": [
            {
                "id": 941,
                "option_text": "No sooner...than (requires past perfect + than)",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "Either...or (requires present tense)",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Never...always (requires future)",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "All require the same tense",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 40
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which shows the function of inversion with negative adverbials?",
        "correct_answer": "Creates emphasis and formality by changing normal word order",
        "difficulty": "Hard",
        "explanation": "Chức năng của inversion",
        "options": [
            {
                "id": 951,
                "option_text": "Creates emphasis and formality by changing normal word order",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "Changes the grammatical meaning of the sentence",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "Is required for all negative statements",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "Makes sentences shorter",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 40
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which shows NON-inverted sentence with negative adverbial?",
        "correct_answer": "She never has seen such a beautiful place. = Informal/incorrect",
        "difficulty": "Hard",
        "explanation": "Sai - không invert",
        "options": [
            {
                "id": 961,
                "option_text": "She never has seen such a beautiful place. = Informal/incorrect",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "Never has she seen such a beautiful place. = Correct",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "Never before has she seen this. = Correct",
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
        "topic_id": 40
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct formation with 'little'?",
        "correct_answer": "Little did they anticipate the consequences.",
        "difficulty": "Hard",
        "explanation": "Little + Inversion (weak negative)",
        "options": [
            {
                "id": 971,
                "option_text": "Little did they anticipate the consequences.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "Little they did anticipate the consequences.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "They little did anticipate the consequences.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "Little anticipate they did the consequences.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 40
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which shows difference between 'hardly' and 'scarcely'?",
        "correct_answer": "Both mean the same and use same inversion structure",
        "difficulty": "Hard",
        "explanation": "Sự tương đồng của hardly và scarcely",
        "options": [
            {
                "id": 981,
                "option_text": "Both mean the same and use same inversion structure",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "Only 'hardly' requires inversion",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "'Scarcely' is never used in modern English",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "They have completely different meanings",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 40
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which shows INCORRECT inversion formation?",
        "correct_answer": "He never has been there before. = Should be: Never has he been there",
        "difficulty": "Hard",
        "explanation": "Sai - không invert",
        "options": [
            {
                "id": 991,
                "option_text": "He never has been there before. = Should be: Never has he been there",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Never has he been there before. = Correct",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Never before has he been there. = Correct",
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
        "topic_id": 40
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Negative adverbials create strong emphasis through inversion, changing auxiliary and subject order",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Đảo Ngữ Với Trạng Từ Phủ Định",
        "options": [
            {
                "id": 1001,
                "option_text": "Negative adverbials create strong emphasis through inversion, changing auxiliary and subject order",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "Negative adverbials don't affect word order",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Inversion is only for questions",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Modern English doesn't use these structures anymore",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 40
    }
];

export default questions;