const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "The student ___ studied hard passed the exam.",
        "correct_answer": "who",
        "suggest_answer": "who",
        "explanation": "Defining Relative Clause: who refers to person (Mệnh đề quan hệ xác định)",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "The book ___ you gave me was excellent.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause: that refers to object",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "The city ___ we visited last summer was beautiful.",
        "correct_answer": "which/that",
        "suggest_answer": "which/that",
        "explanation": "Defining Relative Clause: which/that for non-person thing",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "She has a cat, ___ is very friendly.",
        "correct_answer": "which",
        "suggest_answer": "which",
        "explanation": "Non-defining Relative Clause: which (not that) with comma (Mệnh đề quan hệ không xác định)",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "My friend Tom, ___ lives in Paris, is an artist.",
        "correct_answer": "who",
        "suggest_answer": "who",
        "explanation": "Non-defining Relative Clause: who with comma",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "The day ___ I was born was sunny.",
        "correct_answer": "when",
        "suggest_answer": "when",
        "explanation": "Defining Relative Clause: when for time",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "The reason ___ she left was personal.",
        "correct_answer": "why",
        "suggest_answer": "why",
        "explanation": "Defining Relative Clause: why for reason",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "The place ___ we met was a coffee shop.",
        "correct_answer": "where",
        "suggest_answer": "where",
        "explanation": "Defining Relative Clause: where for place",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "My sister, ___ works as a doctor, is very busy.",
        "correct_answer": "who",
        "suggest_answer": "who",
        "explanation": "Non-defining Relative Clause with comma",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "The film ___ we watched yesterday was amazing.",
        "correct_answer": "that/which",
        "suggest_answer": "that/which",
        "explanation": "Defining Relative Clause for object",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "The man ___ fixed my car is very skilled.",
        "correct_answer": "who/that",
        "suggest_answer": "who/that",
        "explanation": "Defining Relative Clause for person",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "The software ___ I use is outdated.",
        "correct_answer": "that/which",
        "suggest_answer": "that/which",
        "explanation": "Defining Relative Clause",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "The year ___ I graduated was 2020.",
        "correct_answer": "when",
        "suggest_answer": "when",
        "explanation": "Defining Relative Clause with when",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "The company ___ hired me is international.",
        "correct_answer": "that/which",
        "suggest_answer": "that/which",
        "explanation": "Defining Relative Clause",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "My parents, ___ retired last year, are enjoying life.",
        "correct_answer": "who",
        "suggest_answer": "who",
        "explanation": "Non-defining Relative Clause with comma",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "The university ___ you study at is prestigious.",
        "correct_answer": "where",
        "suggest_answer": "where",
        "explanation": "Defining Relative Clause with where",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "The students ___ passed the test celebrated.",
        "correct_answer": "who",
        "suggest_answer": "who",
        "explanation": "Defining Relative Clause",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "The building ___ stands on the corner is old.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause (reduced form possible)",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "Our neighbors, ___ are very friendly, invited us to dinner.",
        "correct_answer": "who",
        "suggest_answer": "who",
        "explanation": "Non-defining Relative Clause",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "The museum ___ has interesting paintings is closed today.",
        "correct_answer": "that/which",
        "suggest_answer": "that/which",
        "explanation": "Defining Relative Clause",
        "difficulty": "Easy",
        "topic_id": 27
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "The person ___ you should trust is your mentor.",
        "correct_answer": "whom/that",
        "suggest_answer": "whom/that",
        "explanation": "Defining Relative Clause with object pronoun (Mệnh đề quan hệ xác định)",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "The conference, ___ was held in London, was successful.",
        "correct_answer": "which",
        "suggest_answer": "which",
        "explanation": "Non-defining Relative Clause: which (không dùng that)",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "The politician ___ I admire most resigned yesterday.",
        "correct_answer": "whom/that",
        "suggest_answer": "whom/that",
        "explanation": "Defining Relative Clause with object",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "The project ___ requires attention is nearly finished.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause (reduced: project needing attention)",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "My colleague, ___ I work with daily, is very efficient.",
        "correct_answer": "whom",
        "suggest_answer": "whom",
        "explanation": "Non-defining Relative Clause with object pronoun whom",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "The theory ___ explains this phenomenon is complex.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "The documentary, ___ was filmed in Africa, won an award.",
        "correct_answer": "which",
        "suggest_answer": "which",
        "explanation": "Non-defining Relative Clause",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "The researcher ___ discovered this was awarded a prize.",
        "correct_answer": "who/that",
        "suggest_answer": "who/that",
        "explanation": "Defining Relative Clause with person",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The house ___ painted blue is on Main Street.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause (reduced form with past participle)",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "The athletes, ___ trained for months, performed well.",
        "correct_answer": "who",
        "suggest_answer": "who",
        "explanation": "Non-defining Relative Clause",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "The regulations ___ govern this industry are strict.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "The invention, ___ revolutionized communication, was developed in the 20th century.",
        "correct_answer": "which",
        "suggest_answer": "which",
        "explanation": "Non-defining Relative Clause",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "The speaker ___ addressed the audience was knowledgeable.",
        "correct_answer": "who/that",
        "suggest_answer": "who/that",
        "explanation": "Defining Relative Clause",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "The bridge ___ connecting the two cities was completed last year.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause (reduced form with present participle)",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "The team, ___ worked together for five years, disbanded.",
        "correct_answer": "which/who",
        "suggest_answer": "which/who",
        "explanation": "Non-defining Relative Clause",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "The resources ___ allocated for the project are limited.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "The committee, ___ approved the proposal, consisted of experts.",
        "correct_answer": "which",
        "suggest_answer": "which",
        "explanation": "Non-defining Relative Clause",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "The student ___ sitting in the front row is my brother.",
        "correct_answer": "who",
        "suggest_answer": "who",
        "explanation": "Defining Relative Clause with present participle",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "The policy, ___ implemented this month, will improve efficiency.",
        "correct_answer": "which",
        "suggest_answer": "which",
        "explanation": "Non-defining Relative Clause with past participle",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "The conditions ___ specified in the contract must be met.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause",
        "difficulty": "Medium",
        "topic_id": 27
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "The entrepreneur ___ founded the company is no longer involved.",
        "correct_answer": "who/that",
        "suggest_answer": "who/that",
        "explanation": "Defining Relative Clause with person in complex context",
        "difficulty": "Hard",
        "topic_id": 27
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "The methodology, ___ has been proven effective, is now widely adopted.",
        "correct_answer": "which",
        "suggest_answer": "which",
        "explanation": "Non-defining Relative Clause with present perfect",
        "difficulty": "Hard",
        "topic_id": 27
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "The evidence ___ presented by the prosecution was insufficient.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause with reduced form (past participle)",
        "difficulty": "Hard",
        "topic_id": 27
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "The researchers, ___ conducted the study for three years, published their findings.",
        "correct_answer": "who",
        "suggest_answer": "who",
        "explanation": "Non-defining Relative Clause with duration",
        "difficulty": "Hard",
        "topic_id": 27
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "The principle ___ underlying this theory is fundamental.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause with reduced form (present participle)",
        "difficulty": "Hard",
        "topic_id": 27
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "The incident, ___ occurred last week, raised serious concerns.",
        "correct_answer": "which",
        "suggest_answer": "which",
        "explanation": "Non-defining Relative Clause",
        "difficulty": "Hard",
        "topic_id": 27
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "The algorithm ___ developed by the team surpasses the previous version.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause with reduced form (past participle)",
        "difficulty": "Hard",
        "topic_id": 27
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "The professionals, ___ are highly qualified, were selected for the project.",
        "correct_answer": "who",
        "suggest_answer": "who",
        "explanation": "Non-defining Relative Clause with descriptive information",
        "difficulty": "Hard",
        "topic_id": 27
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "The phenomenon ___ observed by scientists remains unexplained.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "Defining Relative Clause with reduced form",
        "difficulty": "Hard",
        "topic_id": 27
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "The organization, ___ has operated for decades, maintains high standards.",
        "correct_answer": "which",
        "suggest_answer": "which",
        "explanation": "Non-defining Relative Clause with duration",
        "difficulty": "Hard",
        "topic_id": 27
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "Which is a defining relative clause?",
        "correct_answer": "The book that was published yesterday is popular.",
        "difficulty": "Easy",
        "explanation": "Defining Relative Clause: essential information, no comma",
        "options": [
            {
                "id": 511,
                "option_text": "The book that was published yesterday is popular.",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "The book, which was published yesterday, is popular.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "The book, that was published yesterday, is popular.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "The book, published yesterday, is popular.",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 27
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "Which is a non-defining relative clause?",
        "correct_answer": "My sister, who works as a doctor, is busy.",
        "difficulty": "Easy",
        "explanation": "Non-defining Relative Clause: additional information, with comma",
        "options": [
            {
                "id": 521,
                "option_text": "My sister, who works as a doctor, is busy.",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "My sister who works as a doctor is busy.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "My sister that works as a doctor is busy.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "My sister, that works as a doctor, is busy.",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 27
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "Which shows a reduced relative clause?",
        "correct_answer": "The student sitting in the front row is intelligent.",
        "difficulty": "Easy",
        "explanation": "Reduced Relative Clause: omit relative pronoun and be verb (Rút gọn mệnh đề quan hệ)",
        "options": [
            {
                "id": 531,
                "option_text": "The student sitting in the front row is intelligent.",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "The student who sits in the front row is intelligent.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "The student that sits in the front row is intelligent.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "The student, who is sitting in the front row, is intelligent.",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 27
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct relative pronoun for person in defining clause:",
        "correct_answer": "The person who helped me is kind.",
        "difficulty": "Easy",
        "explanation": "Person in defining clause: who or that",
        "options": [
            {
                "id": 541,
                "option_text": "The person who helped me is kind.",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "The person which helped me is kind.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "The person where helped me is kind.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "The person when helped me is kind.",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 27
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct relative pronoun for thing in non-defining clause:",
        "correct_answer": "The novel, which won an award, is excellent.",
        "difficulty": "Easy",
        "explanation": "Thing in non-defining clause: which (not that)",
        "options": [
            {
                "id": 551,
                "option_text": "The novel, which won an award, is excellent.",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "The novel, that won an award, is excellent.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "The novel, what won an award, is excellent.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "The novel, where won an award, is excellent.",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 27
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "Which sentence uses 'when' correctly?",
        "correct_answer": "The day when I arrived was rainy.",
        "difficulty": "Easy",
        "explanation": "when refers to time/day",
        "options": [
            {
                "id": 561,
                "option_text": "The day when I arrived was rainy.",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "The day which I arrived was rainy.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "The day what I arrived was rainy.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "The day where I arrived was rainy.",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 27
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "Which sentence uses 'where' correctly?",
        "correct_answer": "The city where I grew up is beautiful.",
        "difficulty": "Easy",
        "explanation": "where refers to place/location",
        "options": [
            {
                "id": 571,
                "option_text": "The city where I grew up is beautiful.",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "The city which I grew up is beautiful.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "The city when I grew up is beautiful.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "The city what I grew up is beautiful.",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 27
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct reduced form?",
        "correct_answer": "The book written by her is excellent.",
        "difficulty": "Easy",
        "explanation": "Reduced: who was → past participle only",
        "options": [
            {
                "id": 581,
                "option_text": "The book written by her is excellent.",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "The book was written by her is excellent.",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "The book, written by her, is excellent.",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "The book who written by her is excellent.",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 27
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "The students ___ attending the seminar are from different countries.",
        "correct_answer": "who",
        "difficulty": "Easy",
        "explanation": "Reduced relative clause with present participle",
        "options": [
            {
                "id": 591,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 27
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct relative pronoun: My teacher, ___ is very experienced, teaches well.",
        "correct_answer": "who",
        "difficulty": "Easy",
        "explanation": "Non-defining clause with person: who",
        "options": [
            {
                "id": 601,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "where",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 27
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the defining relative clause:",
        "correct_answer": "The information that you provided was helpful.",
        "difficulty": "Medium",
        "explanation": "Defining clause: essential information, no comma",
        "options": [
            {
                "id": 611,
                "option_text": "The information that you provided was helpful.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "The information, that you provided, was helpful.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "The information, which you provided, was helpful.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "The information, you provided, was helpful.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 27
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the non-defining relative clause:",
        "correct_answer": "The CEO, who founded the company, retired.",
        "difficulty": "Medium",
        "explanation": "Non-defining clause: additional information, with comma",
        "options": [
            {
                "id": 621,
                "option_text": "The CEO, who founded the company, retired.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "The CEO who founded the company retired.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "The CEO that founded the company retired.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "The CEO founded the company retired.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 27
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "The policies ___ implemented this year have been effective.",
        "correct_answer": "that",
        "difficulty": "Medium",
        "explanation": "Reduced defining clause with past participle",
        "options": [
            {
                "id": 631,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "where",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 27
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "The conference, ___ was attended by hundreds, covered important topics.",
        "correct_answer": "which",
        "difficulty": "Medium",
        "explanation": "Non-defining clause: which (not that)",
        "options": [
            {
                "id": 641,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "what",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 27
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "The technology ___ replacing traditional methods is innovative.",
        "correct_answer": "that",
        "difficulty": "Medium",
        "explanation": "Reduced defining clause with present participle",
        "options": [
            {
                "id": 651,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 27
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "My brother, ___ lives abroad, visits once a year.",
        "correct_answer": "who",
        "difficulty": "Medium",
        "explanation": "Non-defining clause with person",
        "options": [
            {
                "id": 661,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "where",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 27
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "The proposal ___ discussed in the meeting was approved.",
        "correct_answer": "that",
        "difficulty": "Medium",
        "explanation": "Reduced defining clause with past participle",
        "options": [
            {
                "id": 671,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 27
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "The scientist, ___ conducted the research, published the findings.",
        "correct_answer": "who",
        "difficulty": "Medium",
        "explanation": "Non-defining clause with person and action",
        "options": [
            {
                "id": 681,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 27
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "The solutions ___ offered by the company were ineffective.",
        "correct_answer": "that",
        "difficulty": "Medium",
        "explanation": "Reduced defining clause with past participle in passive",
        "options": [
            {
                "id": 691,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "where",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 27
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "The institution, ___ has been operating for centuries, maintains traditions.",
        "correct_answer": "which",
        "difficulty": "Medium",
        "explanation": "Non-defining clause with duration",
        "options": [
            {
                "id": 701,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "what",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 27
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "Select the appropriately reduced relative clause:",
        "correct_answer": "The candidate selected for the role was qualified.",
        "difficulty": "Hard",
        "explanation": "Reduced: who was → past participle only",
        "options": [
            {
                "id": 711,
                "option_text": "The candidate selected for the role was qualified.",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "The candidate was selected for the role was qualified.",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "The candidate who selected for the role was qualified.",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "The candidate that was selected for the role was qualified.",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 27
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "The methodology, ___ designed for this purpose, proved effective.",
        "correct_answer": "which",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle)",
        "options": [
            {
                "id": 721,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "where",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 27
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "The documents ___ filed in the archive contain valuable information.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with past participle",
        "options": [
            {
                "id": 731,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 27
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "The experts, ___ consulted during the investigation, submitted their reports.",
        "correct_answer": "who",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle)",
        "options": [
            {
                "id": 741,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "where",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 27
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "The framework ___ supporting the structure required reinforcement.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with present participle",
        "options": [
            {
                "id": 751,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 27
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "The initiative, ___ launched by the government, addressed key issues.",
        "correct_answer": "which",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle in passive)",
        "options": [
            {
                "id": 761,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 27
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "The strategies ___ employed by competitors were analyzed.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with past participle in passive",
        "options": [
            {
                "id": 771,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "where",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 27
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "The scholars, ___ studying this phenomenon for years, reached conclusions.",
        "correct_answer": "who",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with duration and present participle",
        "options": [
            {
                "id": 781,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 27
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "The principles ___ governing the system are fundamental.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with present participle",
        "options": [
            {
                "id": 791,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 27
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "The processes, ___ followed by the team, ensured quality.",
        "correct_answer": "which",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle)",
        "options": [
            {
                "id": 801,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "what",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 27
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "The developments ___ emerging in the field require attention.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with present participle",
        "options": [
            {
                "id": 811,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "where",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 27
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "The officials, ___ appointed last quarter, initiated reforms.",
        "correct_answer": "who",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle)",
        "options": [
            {
                "id": 821,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 27
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "The standards ___ established for quality are rigorous.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with past participle in passive",
        "options": [
            {
                "id": 831,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 27
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "The achievements, ___ recognized internationally, brought pride.",
        "correct_answer": "which",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle)",
        "options": [
            {
                "id": 841,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 27
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "The innovations ___ transforming the industry are revolutionary.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with present participle",
        "options": [
            {
                "id": 851,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 27
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "The directors, ___ overseeing the project, are experienced.",
        "correct_answer": "who",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with present participle",
        "options": [
            {
                "id": 861,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 27
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "The requirements ___ specified in the contract must be fulfilled.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with past participle in passive",
        "options": [
            {
                "id": 871,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 27
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "The assets, ___ acquired recently, are valuable.",
        "correct_answer": "which",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle)",
        "options": [
            {
                "id": 881,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 27
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "The factors ___ influencing the outcome are numerous.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with present participle",
        "options": [
            {
                "id": 891,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 27
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "The participants, ___ selected through rigorous screening, were qualified.",
        "correct_answer": "who",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle)",
        "options": [
            {
                "id": 901,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 27
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "The mechanisms ___ underlying this system are complex.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with present participle",
        "options": [
            {
                "id": 911,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 27
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "The reports, ___ compiled by the team, were comprehensive.",
        "correct_answer": "which",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle in passive)",
        "options": [
            {
                "id": 921,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 27
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "The challenges ___ facing the organization are significant.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with present participle",
        "options": [
            {
                "id": 931,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 27
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "The initiatives, ___ launched by leadership, showed promise.",
        "correct_answer": "which",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle in passive)",
        "options": [
            {
                "id": 941,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 27
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "The methods ___ employed in research are validated.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with past participle in passive",
        "options": [
            {
                "id": 951,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 27
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "The stakeholders, ___ representing different sectors, were consulted.",
        "correct_answer": "who",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with present participle",
        "options": [
            {
                "id": 961,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 27
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "The constraints ___ imposed on the project affected timelines.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with past participle in passive",
        "options": [
            {
                "id": 971,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 27
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "The competencies, ___ demonstrated by candidates, were impressive.",
        "correct_answer": "which",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle in passive)",
        "options": [
            {
                "id": 981,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 27
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "The trends ___ emerging globally require monitoring.",
        "correct_answer": "that",
        "difficulty": "Hard",
        "explanation": "Reduced defining clause with present participle",
        "options": [
            {
                "id": 991,
                "option_text": "that",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "when",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 27
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "The frameworks, ___ designed for sustainability, align with objectives.",
        "correct_answer": "which",
        "difficulty": "Hard",
        "explanation": "Non-defining clause with reduced form (past participle)",
        "options": [
            {
                "id": 1001,
                "option_text": "which",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 27
    }
];

export default questions;