const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "I remember ___ to school when I was five.",
        "correct_answer": "going",
        "suggest_answer": "going",
        "explanation": "Remember + gerund = nhớ lại hành động đã xảy ra (Thay Đổi Nghĩa)",
        "difficulty": "Easy",
        "topic_id": 35
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "Remember ___ the documents before leaving.",
        "correct_answer": "to bring",
        "suggest_answer": "to bring",
        "explanation": "Remember + to-infinitive = nhớ phải làm (future action)",
        "difficulty": "Easy",
        "topic_id": 35
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "I stopped ___ when the teacher entered.",
        "correct_answer": "talking",
        "suggest_answer": "talking",
        "explanation": "Stop + gerund = dừng hành động đang làm (Thay Đổi Nghĩa)",
        "difficulty": "Easy",
        "topic_id": 35
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "She stopped ___ to buy milk.",
        "correct_answer": "to buy",
        "suggest_answer": "to buy",
        "explanation": "Stop + to-infinitive = dừng lại để làm việc khác",
        "difficulty": "Easy",
        "topic_id": 35
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "I forgot ___ her birthday last week.",
        "correct_answer": "about",
        "suggest_answer": "about",
        "explanation": "Forget + gerund = quên hành động đã xảy ra (past)",
        "difficulty": "Easy",
        "topic_id": 35
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "Don't forget ___ your passport.",
        "correct_answer": "to bring",
        "suggest_answer": "to bring",
        "explanation": "Forget + to-infinitive = quên phải làm (duty/obligation)",
        "difficulty": "Easy",
        "topic_id": 35
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "She tried ___ but failed.",
        "correct_answer": "to open",
        "suggest_answer": "to open",
        "explanation": "Try + to-infinitive = cố gắng làm (attempt)",
        "difficulty": "Easy",
        "topic_id": 35
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "Try ___ the problem this way.",
        "correct_answer": "solving",
        "suggest_answer": "solving",
        "explanation": "Try + gerund = thử cách làm (experiment)",
        "difficulty": "Easy",
        "topic_id": 35
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "He regrets ___ such a poor decision.",
        "correct_answer": "making",
        "suggest_answer": "making",
        "explanation": "Regret + gerund = hối hận về hành động đã làm",
        "difficulty": "Easy",
        "topic_id": 35
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "I regret ___ that he won't be coming.",
        "correct_answer": "to inform",
        "suggest_answer": "to inform",
        "explanation": "Regret + to-infinitive = tiếc phải báo tin (formal announcement)",
        "difficulty": "Easy",
        "topic_id": 35
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "I'll never forget ___ to Paris for the first time.",
        "correct_answer": "going",
        "suggest_answer": "going",
        "explanation": "Forget + gerund = quên mãi hành động (V-ing vs To V - Thay Đổi Nghĩa phức tạp)",
        "difficulty": "Medium",
        "topic_id": 35
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "He can't forget ___ her on their first date.",
        "correct_answer": "to meet",
        "suggest_answer": "to meet",
        "explanation": "Forget + to-infinitive = quên khiêm tốn",
        "difficulty": "Medium",
        "topic_id": 35
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "I remember ___ him to the party, but he didn't come.",
        "correct_answer": "inviting",
        "suggest_answer": "inviting",
        "explanation": "Remember + gerund = nhớ về hành động đã làm (past action)",
        "difficulty": "Medium",
        "topic_id": 35
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "She regrets ___ you about the accident.",
        "correct_answer": "to inform",
        "suggest_answer": "to inform",
        "explanation": "Regret + to-infinitive = tiếc phải thông báo (formal)",
        "difficulty": "Medium",
        "topic_id": 35
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "He tried ___ the problem but eventually gave up.",
        "correct_answer": "to solve",
        "suggest_answer": "to solve",
        "explanation": "Try + to-infinitive = cố gắng (intention with effort)",
        "difficulty": "Medium",
        "topic_id": 35
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "Why don't you try ___ a different approach?",
        "correct_answer": "using",
        "suggest_answer": "using",
        "explanation": "Try + gerund = thử cách khác (experiment/test)",
        "difficulty": "Medium",
        "topic_id": 35
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "The company regrets ___ the decision to close the branch.",
        "correct_answer": "announcing",
        "suggest_answer": "announcing",
        "explanation": "Regret + gerund = hối hận về hành động làm",
        "difficulty": "Medium",
        "topic_id": 35
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "I regret ___ that the conference is postponed.",
        "correct_answer": "to announce",
        "suggest_answer": "to announce",
        "explanation": "Regret + to-infinitive = tiếc phải thông báo (formal announcement)",
        "difficulty": "Medium",
        "topic_id": 35
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "He stopped ___ to rest for a while.",
        "correct_answer": "to rest",
        "suggest_answer": "to rest",
        "explanation": "Stop + to-infinitive = dừng lại để làm việc khác",
        "difficulty": "Medium",
        "topic_id": 35
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "I forgot ___ the electricity bill yesterday.",
        "correct_answer": "paying",
        "suggest_answer": "paying",
        "explanation": "Forget + gerund = quên hành động (past action)",
        "difficulty": "Medium",
        "topic_id": 35
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "He will never forget ___ in that accident as a child.",
        "correct_answer": "being",
        "suggest_answer": "being",
        "explanation": "Forget + gerund (past experience - unforgettable) (Thay Đổi Nghĩa nâng cao)",
        "difficulty": "Hard",
        "topic_id": 35
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "I regret deeply ___ such hurtful words.",
        "correct_answer": "speaking",
        "suggest_answer": "speaking",
        "explanation": "Regret + gerund = hối hận về hành động đã làm (genuine remorse)",
        "difficulty": "Hard",
        "topic_id": 35
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "The president regrets ___ the difficult decision.",
        "correct_answer": "to announce",
        "suggest_answer": "to announce",
        "explanation": "Regret + to-infinitive = tiếc phải thông báo (formal/official context)",
        "difficulty": "Hard",
        "topic_id": 35
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "She tried ___ to reach him, but his phone was off.",
        "correct_answer": "to call",
        "suggest_answer": "to call",
        "explanation": "Try + to-infinitive = cố gắng làm (persistent effort)",
        "difficulty": "Hard",
        "topic_id": 35
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "Try ___ meditation; it might help with stress.",
        "correct_answer": "doing",
        "suggest_answer": "doing",
        "explanation": "Try + gerund = thử cách làm (suggestion/recommendation)",
        "difficulty": "Hard",
        "topic_id": 35
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "The wounded animal stopped ___ and collapsed.",
        "correct_answer": "moving",
        "suggest_answer": "moving",
        "explanation": "Stop + gerund = dừng hành động đang diễn ra",
        "difficulty": "Hard",
        "topic_id": 35
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "I can never forget ___ such kindness from strangers.",
        "correct_answer": "receiving",
        "suggest_answer": "receiving",
        "explanation": "Forget + gerund = quên mãi (indelible memory)",
        "difficulty": "Hard",
        "topic_id": 35
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "I regret ___ you of my departure at such short notice.",
        "correct_answer": "to inform",
        "suggest_answer": "to inform",
        "explanation": "Regret + to-infinitive = tiếc phải thông báo (formal apology)",
        "difficulty": "Hard",
        "topic_id": 35
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The runner stopped ___ water at the aid station.",
        "correct_answer": "to drink",
        "suggest_answer": "to drink",
        "explanation": "Stop + to-infinitive = dừng để làm gì khác",
        "difficulty": "Hard",
        "topic_id": 35
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "He'll always remember ___ from his homeland.",
        "correct_answer": "leaving",
        "suggest_answer": "leaving",
        "explanation": "Remember + gerund = nhớ mãi hành động (past experience)",
        "difficulty": "Hard",
        "topic_id": 35
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct difference in meaning?",
        "correct_answer": "I remember going there = I recall the experience; I remember to go = I don't forget the task",
        "difficulty": "Easy",
        "explanation": "Remember + gerund vs to-infinitive (Thay Đổi Nghĩa)",
        "options": [
            {
                "id": 311,
                "option_text": "I remember going there = I recall the experience; I remember to go = I don't forget the task",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "I remember going there = I don't forget; I remember to go = I recall",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "Both mean the same thing",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "I remember going = future; I remember to go = past",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 35
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct difference in meaning?",
        "correct_answer": "Stop talking = cease action; Stop to talk = cease and then do something else",
        "difficulty": "Easy",
        "explanation": "Stop + gerund vs to-infinitive (Thay Đổi Nghĩa)",
        "options": [
            {
                "id": 321,
                "option_text": "Stop talking = cease action; Stop to talk = cease and then do something else",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "Stop talking = plan to stop; Stop to talk = already stopped",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "Both mean the same thing",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "Stop talking = future; Stop to talk = past",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 35
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct difference in meaning?",
        "correct_answer": "Forget doing = don't recall; Forget to do = fail to remember duty",
        "difficulty": "Easy",
        "explanation": "Forget + gerund vs to-infinitive (Thay Đổi Nghĩa)",
        "options": [
            {
                "id": 331,
                "option_text": "Forget doing = don't recall; Forget to do = fail to remember duty",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "Forget doing = fail duty; Forget to do = don't recall",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "Both mean the same thing",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "Forget doing = future; Forget to do = past",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 35
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct difference in meaning?",
        "correct_answer": "Try solving = experiment with method; Try to solve = attempt seriously",
        "difficulty": "Easy",
        "explanation": "Try + gerund vs to-infinitive (Thay Đổi Nghĩa)",
        "options": [
            {
                "id": 341,
                "option_text": "Try solving = experiment with method; Try to solve = attempt seriously",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "Try solving = attempt seriously; Try to solve = experiment",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "Both mean the same thing",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "Try solving = past; Try to solve = future",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 35
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct difference in meaning?",
        "correct_answer": "Regret doing = feel sorry about past action; Regret to say = sorry to announce",
        "difficulty": "Easy",
        "explanation": "Regret + gerund vs to-infinitive (Thay Đổi Nghĩa)",
        "options": [
            {
                "id": 351,
                "option_text": "Regret doing = feel sorry about past action; Regret to say = sorry to announce",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "Regret doing = sorry to announce; Regret to say = feel sorry about",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "Both mean the same thing",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "Regret doing = future; Regret to say = past",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 35
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I remember locking the door; don't forget to call me.",
        "difficulty": "Easy",
        "explanation": "Remember doing (past action) vs Remember to do (task)",
        "options": [
            {
                "id": 361,
                "option_text": "I remember locking the door; don't forget to call me.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "I remember to lock the door; don't forget calling me.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "I remember to lock the door; don't forget to call me.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "I remember locking the door; don't forget calling me.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 35
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I tried calling but got no answer; try rebooting the computer.",
        "difficulty": "Easy",
        "explanation": "Try to do (attempt) vs Try doing (experiment)",
        "options": [
            {
                "id": 371,
                "option_text": "I tried calling but got no answer; try rebooting the computer.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "I tried to call but got no answer; try to reboot the computer.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "I tried calling but got no answer; try to rebooting the computer.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "I tried to calling but got no answer; try rebooting the computer.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 35
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Stop complaining and stop to listen.",
        "difficulty": "Easy",
        "explanation": "Stop doing (cease) vs Stop to do (cease and do something else)",
        "options": [
            {
                "id": 381,
                "option_text": "Stop complaining and stop to listen.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "Stop to complain and stop listening.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "Stop complaining and stop listening.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "Stop to complain and stop to listen.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 35
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I regret making that decision; I regret to inform you of the closure.",
        "difficulty": "Easy",
        "explanation": "Regret doing (past action) vs Regret to inform (formal announcement)",
        "options": [
            {
                "id": 391,
                "option_text": "I regret making that decision; I regret to inform you of the closure.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "I regret to make that decision; I regret informing you of the closure.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "I regret making that decision; I regret informing you of the closure.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "I regret to make that decision; I regret to inform you of the closure.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 35
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I'll never forget seeing that sunset; remember to bring your passport.",
        "difficulty": "Easy",
        "explanation": "Remember + gerund (memory) vs Remember + to-infinitive (task)",
        "options": [
            {
                "id": 401,
                "option_text": "I'll never forget seeing that sunset; remember to bring your passport.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "I'll never forget to see that sunset; remember bringing your passport.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "I'll never forget to see that sunset; remember to bring your passport.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "I'll never forget seeing that sunset; remember bringing your passport.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 35
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning difference:",
        "correct_answer": "He stopped smoking = quit the habit; He stopped to smoke = paused to have a cigarette",
        "difficulty": "Medium",
        "explanation": "Stop + gerund (complete cessation) vs Stop + to-infinitive (pause for action) (Thay Đổi Nghĩa phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "He stopped smoking = quit the habit; He stopped to smoke = paused to have a cigarette",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "He stopped smoking = paused; He stopped to smoke = quit",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Both mean the same thing",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "He stopped smoking = planned; He stopped to smoke = accidental",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 35
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select correct sentence with nuance:",
        "correct_answer": "She tried opening the door but it was locked.",
        "difficulty": "Medium",
        "explanation": "Try + gerund (experiment/test method)",
        "options": [
            {
                "id": 621,
                "option_text": "She tried opening the door but it was locked.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "She tried to open the door but it was locked.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "Both are equally correct",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "She tried for opening the door but it was locked.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 35
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select correct sentence with nuance:",
        "correct_answer": "He regrets sending that email without checking.",
        "difficulty": "Medium",
        "explanation": "Regret + gerund (genuine remorse about past action)",
        "options": [
            {
                "id": 631,
                "option_text": "He regrets sending that email without checking.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "He regrets to send that email without checking.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "Both are equally correct",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "He regrets for sending that email without checking.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 35
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select correct sentence with nuance:",
        "correct_answer": "I will never forget meeting her for the first time.",
        "difficulty": "Medium",
        "explanation": "Forget + gerund (unforgettable memory)",
        "options": [
            {
                "id": 641,
                "option_text": "I will never forget meeting her for the first time.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "I will never forget to meet her for the first time.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "Both are equally correct",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "I will never forget of meeting her for the first time.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 35
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select correct sentence with nuance:",
        "correct_answer": "Don't forget to water the plants tomorrow.",
        "difficulty": "Medium",
        "explanation": "Forget + to-infinitive (reminder about future task)",
        "options": [
            {
                "id": 651,
                "option_text": "Don't forget to water the plants tomorrow.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "Don't forget watering the plants tomorrow.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "Both are equally correct",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "Don't forget for watering the plants tomorrow.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 35
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select correct sentence with nuance:",
        "correct_answer": "I remember telling him the news yesterday.",
        "difficulty": "Medium",
        "explanation": "Remember + gerund (recall past action)",
        "options": [
            {
                "id": 661,
                "option_text": "I remember telling him the news yesterday.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "I remember to tell him the news yesterday.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "Both are equally correct",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "I remember for telling him the news yesterday.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 35
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select correct sentence with nuance:",
        "correct_answer": "Try adding more salt to the recipe.",
        "difficulty": "Medium",
        "explanation": "Try + gerund (experimental suggestion)",
        "options": [
            {
                "id": 671,
                "option_text": "Try adding more salt to the recipe.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "Try to add more salt to the recipe.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "Both are equally correct",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "Try for adding more salt to the recipe.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 35
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select correct sentence with nuance:",
        "correct_answer": "I regret to say that your application was rejected.",
        "difficulty": "Medium",
        "explanation": "Regret + to-infinitive (formal announcement with regret)",
        "options": [
            {
                "id": 681,
                "option_text": "I regret to say that your application was rejected.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "I regret saying that your application was rejected.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "Both are equally correct",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "I regret of saying that your application was rejected.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 35
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select correct sentence with nuance:",
        "correct_answer": "She stopped working at five o'clock.",
        "difficulty": "Medium",
        "explanation": "Stop + gerund (cease activity completely)",
        "options": [
            {
                "id": 691,
                "option_text": "She stopped working at five o'clock.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "She stopped to work at five o'clock.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "Both are equally correct",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "She stopped for working at five o'clock.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 35
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select correct sentence with nuance:",
        "correct_answer": "I tried to warn him, but he didn't listen.",
        "difficulty": "Medium",
        "explanation": "Try + to-infinitive (serious attempt/effort)",
        "options": [
            {
                "id": 701,
                "option_text": "I tried to warn him, but he didn't listen.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "I tried warning him, but he didn't listen.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "Both are equally correct",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "I tried for warning him, but he didn't listen.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 35
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning in context:",
        "correct_answer": "The memory was unforgettable: I'll never forget seeing it.",
        "difficulty": "Hard",
        "explanation": "Forget + gerund (vivid memory that stays) (Thay Đổi Nghĩa nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "The memory was unforgettable: I'll never forget seeing it.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "The memory was unforgettable: I'll never forget to see it.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "Both express the same meaning",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "The meaning is unclear in both cases",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 35
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning in context:",
        "correct_answer": "Duty incomplete: Remember to call your mother.",
        "difficulty": "Hard",
        "explanation": "Remember + to-infinitive (obligation/reminder)",
        "options": [
            {
                "id": 821,
                "option_text": "Duty incomplete: Remember to call your mother.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Duty incomplete: Remember calling your mother.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Both express the same meaning",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "The meaning is unclear in both cases",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 35
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning in context:",
        "correct_answer": "He quit the habit: He stopped smoking five years ago.",
        "difficulty": "Hard",
        "explanation": "Stop + gerund (permanent cessation)",
        "options": [
            {
                "id": 831,
                "option_text": "He quit the habit: He stopped smoking five years ago.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "He quit the habit: He stopped to smoke five years ago.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "Both express the same meaning",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "The meaning is unclear in both cases",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 35
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning in context:",
        "correct_answer": "She paused briefly: She stopped to check her phone.",
        "difficulty": "Hard",
        "explanation": "Stop + to-infinitive (pause for another action)",
        "options": [
            {
                "id": 841,
                "option_text": "She paused briefly: She stopped to check her phone.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "She paused briefly: She stopped checking her phone.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "Both express the same meaning",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "The meaning is unclear in both cases",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 35
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning in context:",
        "correct_answer": "Attempt failed: She tried to climb the mountain but gave up.",
        "difficulty": "Hard",
        "explanation": "Try + to-infinitive (failed attempt)",
        "options": [
            {
                "id": 851,
                "option_text": "Attempt failed: She tried to climb the mountain but gave up.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "Attempt failed: She tried climbing the mountain but gave up.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "Both express the same meaning",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "The meaning is unclear in both cases",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 35
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning in context:",
        "correct_answer": "Suggestion to experiment: Try different approaches to the problem.",
        "difficulty": "Hard",
        "explanation": "Try + gerund (suggestion to experiment/test)",
        "options": [
            {
                "id": 861,
                "option_text": "Suggestion to experiment: Try different approaches to the problem.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "Suggestion to experiment: Try to take different approaches to the problem.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "Both express the same meaning",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "The meaning is unclear in both cases",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 35
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning in context:",
        "correct_answer": "Deep remorse about past: He regrets hurting her feelings.",
        "difficulty": "Hard",
        "explanation": "Regret + gerund (genuine remorse)",
        "options": [
            {
                "id": 871,
                "option_text": "Deep remorse about past: He regrets hurting her feelings.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Deep remorse about past: He regrets to hurt her feelings.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "Both express the same meaning",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "The meaning is unclear in both cases",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 35
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning in context:",
        "correct_answer": "Official announcement with regret: We regret to announce the cancellation.",
        "difficulty": "Hard",
        "explanation": "Regret + to-infinitive (formal announcement)",
        "options": [
            {
                "id": 881,
                "option_text": "Official announcement with regret: We regret to announce the cancellation.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "Official announcement with regret: We regret announcing the cancellation.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "Both express the same meaning",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "The meaning is unclear in both cases",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 35
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning in context:",
        "correct_answer": "Unforgettable experience: I will never forget experiencing that tsunami.",
        "difficulty": "Hard",
        "explanation": "Forget + gerund (vivid memory of past experience)",
        "options": [
            {
                "id": 891,
                "option_text": "Unforgettable experience: I will never forget experiencing that tsunami.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "Unforgettable experience: I will never forget to experience that tsunami.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "Both express the same meaning",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "The meaning is unclear in both cases",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 35
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Select correct meaning in context:",
        "correct_answer": "Future task reminder: Don't forget to submit the report.",
        "difficulty": "Hard",
        "explanation": "Forget + to-infinitive (future obligation)",
        "options": [
            {
                "id": 901,
                "option_text": "Future task reminder: Don't forget to submit the report.",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Future task reminder: Don't forget submitting the report.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Both express the same meaning",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "The meaning is unclear in both cases",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 35
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Select the more natural choice:",
        "correct_answer": "I remember graduating from university = recalling a past event",
        "difficulty": "Hard",
        "explanation": "Context determines best choice (memory = gerund)",
        "options": [
            {
                "id": 911,
                "option_text": "I remember graduating from university = recalling a past event",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "I remember to graduate from university = remembering duty",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Both are equally natural",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Neither is natural",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 35
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Select the more natural choice:",
        "correct_answer": "She stopped to pick up her phone = paused to do something",
        "difficulty": "Hard",
        "explanation": "Stop + to-infinitive (new action) more natural here",
        "options": [
            {
                "id": 921,
                "option_text": "She stopped to pick up her phone = paused to do something",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "She stopped picking up her phone = ceased the activity",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "Both are equally natural",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Neither is natural",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 35
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Select the more natural choice:",
        "correct_answer": "Try leaving the lights on = experiment with leaving them on",
        "difficulty": "Hard",
        "explanation": "Try + gerund (suggestion/experiment) more natural",
        "options": [
            {
                "id": 931,
                "option_text": "Try leaving the lights on = experiment with leaving them on",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "Try to leave the lights on = attempt the action",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "Both are equally natural",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "Neither is natural",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 35
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Select the more natural choice:",
        "correct_answer": "I regret to say this film is disappointing = formal announcement",
        "difficulty": "Hard",
        "explanation": "Regret + to-infinitive (formal context) more natural",
        "options": [
            {
                "id": 941,
                "option_text": "I regret to say this film is disappointing = formal announcement",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "I regret saying this film is disappointing = personal remorse",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Both are equally natural",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Neither is natural",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 35
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Select the correct contextual meaning:",
        "correct_answer": "Forgot task = failed duty; Forgot memory = lost recall",
        "difficulty": "Hard",
        "explanation": "Forget + to-infinitive vs Forget + gerund (different temporal focus)",
        "options": [
            {
                "id": 951,
                "option_text": "Forgot task = failed duty; Forgot memory = lost recall",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "Forgot task = lost recall; Forgot memory = failed duty",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "Both mean exactly the same",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "The distinction is not meaningful",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 35
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Select the correct contextual meaning:",
        "correct_answer": "Stop habit = quit permanently; Stop action = pause briefly",
        "difficulty": "Hard",
        "explanation": "Stop + gerund (cessation) vs Stop + to-infinitive (pause)",
        "options": [
            {
                "id": 961,
                "option_text": "Stop habit = quit permanently; Stop action = pause briefly",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "Stop habit = pause briefly; Stop action = quit permanently",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "Both mean exactly the same",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "The distinction is not meaningful",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 35
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Select the correct contextual meaning:",
        "correct_answer": "Try effort = serious attempt; Try experiment = test method",
        "difficulty": "Hard",
        "explanation": "Try + to-infinitive (effort) vs Try + gerund (experiment)",
        "options": [
            {
                "id": 971,
                "option_text": "Try effort = serious attempt; Try experiment = test method",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "Try effort = test method; Try experiment = serious attempt",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "Both mean exactly the same",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "The distinction is not meaningful",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 35
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Select the correct contextual meaning:",
        "correct_answer": "Remember recall = past event; Remember duty = future obligation",
        "difficulty": "Hard",
        "explanation": "Remember + gerund (memory) vs Remember + to-infinitive (task)",
        "options": [
            {
                "id": 981,
                "option_text": "Remember recall = past event; Remember duty = future obligation",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "Remember recall = future obligation; Remember duty = past event",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "Both mean exactly the same",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "The distinction is not meaningful",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 35
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Select the correct contextual meaning:",
        "correct_answer": "Regret genuine = personal remorse; Regret formal = official announcement",
        "difficulty": "Hard",
        "explanation": "Regret + gerund (personal) vs Regret + to-infinitive (formal)",
        "options": [
            {
                "id": 991,
                "option_text": "Regret genuine = personal remorse; Regret formal = official announcement",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Regret genuine = official announcement; Regret formal = personal remorse",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Both mean exactly the same",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "The distinction is not meaningful",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 35
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Select the comprehensive correct answer:",
        "correct_answer": "All five verbs change meaning based on gerund vs to-infinitive form",
        "difficulty": "Hard",
        "explanation": "Remember, stop, forget, try, regret all have different meanings (Thay Đổi Nghĩa)",
        "options": [
            {
                "id": 1001,
                "option_text": "All five verbs change meaning based on gerund vs to-infinitive form",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "Only remember and stop change meaning",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Only try and regret change meaning",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "None of them change meaning",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 35
    }
];

export default questions;