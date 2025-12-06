const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "___ you like coffee?",
        "correct_answer": "Do",
        "suggest_answer": "Do",
        "explanation": "Yes/No Question: simple present with 'do' (Câu hỏi có hoặc không)",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "Where ___ you live?",
        "correct_answer": "do",
        "suggest_answer": "do",
        "explanation": "Wh-Question: 'where' + do + subject + verb (Câu hỏi Wh)",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "You like coffee, ___?",
        "correct_answer": "don't you",
        "suggest_answer": "don't you",
        "explanation": "Tag Question: positive statement + negative tag (Câu hỏi đuôi)",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "Do you know ___ she is coming?",
        "correct_answer": "if/whether",
        "suggest_answer": "if/whether",
        "explanation": "Indirect Question: embedded yes/no question (Câu hỏi gián tiếp)",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "___ they finished the project?",
        "correct_answer": "Have",
        "suggest_answer": "Have",
        "explanation": "Yes/No Question: present perfect with 'have'",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "What ___ you doing?",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Wh-Question: present continuous",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "She doesn't like spicy food, ___?",
        "correct_answer": "does she",
        "suggest_answer": "does she",
        "explanation": "Tag Question: negative statement + positive tag",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "Can you tell me ___ the nearest station is?",
        "correct_answer": "where",
        "suggest_answer": "where",
        "explanation": "Indirect Wh-Question: embedded question with 'where'",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "___ is your phone number?",
        "correct_answer": "What",
        "suggest_answer": "What",
        "explanation": "Wh-Question: 'what' for things/information",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "He has been working here, ___?",
        "correct_answer": "hasn't he",
        "suggest_answer": "hasn't he",
        "explanation": "Tag Question: present perfect continuous",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "___ did you go to the party last night?",
        "correct_answer": "Why",
        "suggest_answer": "Why",
        "explanation": "Wh-Question: 'why' for reason",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "I'm going to the cinema, ___?",
        "correct_answer": "aren't I",
        "suggest_answer": "aren't I",
        "explanation": "Tag Question: future 'going to' + negative tag",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "Do you know ___ time it is?",
        "correct_answer": "what",
        "suggest_answer": "what",
        "explanation": "Indirect Wh-Question",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "___ is your friend's name?",
        "correct_answer": "Who",
        "suggest_answer": "Who",
        "explanation": "Wh-Question: 'who' for person",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "They can swim, ___?",
        "correct_answer": "can't they",
        "suggest_answer": "can't they",
        "explanation": "Tag Question: modal verb 'can'",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "I wonder ___ he will come tomorrow.",
        "correct_answer": "if/whether",
        "suggest_answer": "if/whether",
        "explanation": "Indirect Yes/No Question",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "___ time do you usually wake up?",
        "correct_answer": "What",
        "suggest_answer": "What",
        "explanation": "Wh-Question: 'what time'",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "You won't be late, ___?",
        "correct_answer": "will you",
        "suggest_answer": "will you",
        "explanation": "Tag Question: negative statement + positive tag",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "Can you tell me ___ much this costs?",
        "correct_answer": "how",
        "suggest_answer": "how",
        "explanation": "Indirect Wh-Question: 'how much'",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "___ were you at the concert last week?",
        "correct_answer": "Were",
        "suggest_answer": "Were",
        "explanation": "Yes/No Question: past tense with 'were'",
        "difficulty": "Easy",
        "topic_id": 29
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "___ long have you lived here?",
        "correct_answer": "How",
        "suggest_answer": "How",
        "explanation": "Wh-Question: 'how long' for duration (Câu hỏi Wh phức tạp)",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "She has already eaten, ___?",
        "correct_answer": "hasn't she",
        "suggest_answer": "hasn't she",
        "explanation": "Tag Question: present perfect with 'already'",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "I'd like to know ___ he is planning to do.",
        "correct_answer": "what",
        "suggest_answer": "what",
        "explanation": "Indirect Wh-Question: embedded question",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "___ people do you know in this city?",
        "correct_answer": "How many",
        "suggest_answer": "How many",
        "explanation": "Wh-Question: 'how many' for countable nouns",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "They shouldn't do that, ___?",
        "correct_answer": "should they",
        "suggest_answer": "should they",
        "explanation": "Tag Question: 'shouldn't' + positive tag",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "Could you explain ___ you meant by that?",
        "correct_answer": "what",
        "suggest_answer": "what",
        "explanation": "Indirect Wh-Question: polite request for clarification",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "___ far is the airport from here?",
        "correct_answer": "How",
        "suggest_answer": "How",
        "explanation": "Wh-Question: 'how far' for distance",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "Nobody has complained, ___?",
        "correct_answer": "have they",
        "suggest_answer": "have they",
        "explanation": "Tag Question: 'nobody' (negative) + positive tag",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "Do you remember ___ we met before?",
        "correct_answer": "if/whether",
        "suggest_answer": "if/whether",
        "explanation": "Indirect Yes/No Question",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "___ is responsible for this project?",
        "correct_answer": "Who",
        "suggest_answer": "Who",
        "explanation": "Wh-Question: 'who' as subject",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "I'm sure you agree, ___?",
        "correct_answer": "don't you",
        "suggest_answer": "don't you",
        "explanation": "Tag Question with affirmative statement + negative tag",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "Would you mind telling me ___ the building is located?",
        "correct_answer": "where",
        "suggest_answer": "where",
        "explanation": "Indirect Wh-Question: polite inquiry",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "___ much did you spend on your holiday?",
        "correct_answer": "How",
        "suggest_answer": "How",
        "explanation": "Wh-Question: 'how much' for quantity",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "Everything will be fine, ___?",
        "correct_answer": "won't it",
        "suggest_answer": "won't it",
        "explanation": "Tag Question: 'everything' + negative tag with 'will'",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "I'd like to know ___ old your house is.",
        "correct_answer": "how",
        "suggest_answer": "how",
        "explanation": "Indirect Wh-Question with 'how'",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "Have you ever ___ to Australia?",
        "correct_answer": "been",
        "suggest_answer": "been",
        "explanation": "Yes/No Question: present perfect with 'have'",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "He never complains about anything, ___?",
        "correct_answer": "does he",
        "suggest_answer": "does he",
        "explanation": "Tag Question: 'never' + positive tag",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "Could you tell me ___ long the meeting will last?",
        "correct_answer": "how",
        "suggest_answer": "how",
        "explanation": "Indirect Wh-Question: 'how long' for duration",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "___ color is your car?",
        "correct_answer": "What",
        "suggest_answer": "What",
        "explanation": "Wh-Question: 'what' for description",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "You've never been there before, ___?",
        "correct_answer": "have you",
        "suggest_answer": "have you",
        "explanation": "Tag Question: present perfect with 'never'",
        "difficulty": "Medium",
        "topic_id": 29
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "___ did you get that scar on your face?",
        "correct_answer": "How",
        "suggest_answer": "How",
        "explanation": "Wh-Question: 'how' for manner (Câu hỏi Wh phức tạp)",
        "difficulty": "Hard",
        "topic_id": 29
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "Neither of them is interested, ___?",
        "correct_answer": "are they",
        "suggest_answer": "are they",
        "explanation": "Tag Question: 'neither' (negative) + positive tag",
        "difficulty": "Hard",
        "topic_id": 29
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "I need to understand ___ this situation came about.",
        "correct_answer": "how",
        "suggest_answer": "how",
        "explanation": "Indirect Wh-Question: embedded cause/manner",
        "difficulty": "Hard",
        "topic_id": 29
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "___ far would you be willing to travel?",
        "correct_answer": "How",
        "suggest_answer": "How",
        "explanation": "Wh-Question: 'how far' for distance with conditional",
        "difficulty": "Hard",
        "topic_id": 29
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "Hardly anyone showed up, ___?",
        "correct_answer": "did they",
        "suggest_answer": "did they",
        "explanation": "Tag Question: 'hardly' (negative) + positive tag",
        "difficulty": "Hard",
        "topic_id": 29
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "Can you explain to me ___ the system works and ___ it's beneficial?",
        "correct_answer": "how / why",
        "suggest_answer": "how / why",
        "explanation": "Indirect Wh-Questions: multiple embedded questions",
        "difficulty": "Hard",
        "topic_id": 29
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "___ often do you visit your family?",
        "correct_answer": "How",
        "suggest_answer": "How",
        "explanation": "Wh-Question: 'how often' for frequency",
        "difficulty": "Hard",
        "topic_id": 29
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "I scarcely believe what you said, ___?",
        "correct_answer": "do I",
        "suggest_answer": "do I",
        "explanation": "Tag Question: 'scarcely' (negative) + interrogative about oneself",
        "difficulty": "Hard",
        "topic_id": 29
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "Would you happen to know ___ I can find such information?",
        "correct_answer": "where",
        "suggest_answer": "where",
        "explanation": "Indirect Wh-Question: polite inquiry with 'where'",
        "difficulty": "Hard",
        "topic_id": 29
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "___ many years of experience do you have?",
        "correct_answer": "How",
        "suggest_answer": "How",
        "explanation": "Wh-Question: 'how many' for years/duration",
        "difficulty": "Hard",
        "topic_id": 29
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "Which is a correct yes/no question?",
        "correct_answer": "Do you like ice cream?",
        "difficulty": "Easy",
        "explanation": "Yes/No Question: do + subject + verb (Câu hỏi có hoặc không)",
        "options": [
            {
                "id": 511,
                "option_text": "Do you like ice cream?",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "You like ice cream?",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "Like you ice cream?",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "Do like you ice cream?",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 29
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "Which is a correct wh-question?",
        "correct_answer": "Where do you live?",
        "difficulty": "Easy",
        "explanation": "Wh-Question: wh-word + do + subject + verb (Câu hỏi Wh)",
        "options": [
            {
                "id": 521,
                "option_text": "Where do you live?",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "Where you do live?",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "Do where you live?",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "Where live you do?",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 29
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "Which is a correct tag question?",
        "correct_answer": "You like coffee, don't you?",
        "difficulty": "Easy",
        "explanation": "Tag Question: positive statement + negative tag (Câu hỏi đuôi)",
        "options": [
            {
                "id": 531,
                "option_text": "You like coffee, don't you?",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "You like coffee, do you?",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "You like coffee, aren't you?",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "You like coffee, didn't you?",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 29
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "Which is a correct indirect question?",
        "correct_answer": "Can you tell me where the station is?",
        "difficulty": "Easy",
        "explanation": "Indirect Question: main clause + embedded question (Câu hỏi gián tiếp)",
        "options": [
            {
                "id": 541,
                "option_text": "Can you tell me where the station is?",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "Can you tell me where is the station?",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "Can you tell me where the station are?",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "Can you tell me where does the station is?",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 29
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "What is the correct tag for 'She doesn't like pizza'?",
        "correct_answer": "does she?",
        "difficulty": "Easy",
        "explanation": "Tag Question: negative statement → positive tag",
        "options": [
            {
                "id": 551,
                "option_text": "does she?",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "doesn't she?",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "do you?",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "didn't she?",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 29
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "Which wh-word is for 'person'?",
        "correct_answer": "Who",
        "difficulty": "Easy",
        "explanation": "Wh-word: Who for person",
        "options": [
            {
                "id": 561,
                "option_text": "Who",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "What",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "Where",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "When",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 29
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "Which wh-word is for 'reason'?",
        "correct_answer": "Why",
        "difficulty": "Easy",
        "explanation": "Wh-word: Why for reason",
        "options": [
            {
                "id": 571,
                "option_text": "Why",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "What",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "Where",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "How",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 29
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "Which wh-word is for 'place'?",
        "correct_answer": "Where",
        "difficulty": "Easy",
        "explanation": "Wh-word: Where for place",
        "options": [
            {
                "id": 581,
                "option_text": "Where",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "What",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "When",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "Why",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 29
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'They are coming tomorrow'?",
        "correct_answer": "aren't they?",
        "difficulty": "Easy",
        "explanation": "Tag Question: positive 'are' + negative tag 'aren't'",
        "options": [
            {
                "id": 591,
                "option_text": "aren't they?",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "are they?",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "will they?",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "don't they?",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 29
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "Which indirect question is correct?",
        "correct_answer": "Do you know if he is coming?",
        "difficulty": "Easy",
        "explanation": "Indirect Yes/No Question: do/does not invert in indirect clause",
        "options": [
            {
                "id": 601,
                "option_text": "Do you know if he is coming?",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "Do you know if is he coming?",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "Do you know if he coming?",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "Do you know does he coming?",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 29
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct yes/no question:",
        "correct_answer": "Have you finished your work?",
        "difficulty": "Medium",
        "explanation": "Yes/No Question: present perfect (Câu hỏi có hoặc không phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "Have you finished your work?",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "You have finished your work?",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Do have you finished your work?",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "Have finished you your work?",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 29
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wh-question:",
        "correct_answer": "How long have you been living here?",
        "difficulty": "Medium",
        "explanation": "Wh-Question: present perfect continuous + 'how long'",
        "options": [
            {
                "id": 621,
                "option_text": "How long have you been living here?",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "How long you have been living here?",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "How long have you living here?",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "How long do you been living here?",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 29
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "What is the correct tag for 'He won't tell anyone'?",
        "correct_answer": "will he?",
        "difficulty": "Medium",
        "explanation": "Tag Question: negative 'won't' + positive tag 'will'",
        "options": [
            {
                "id": 631,
                "option_text": "will he?",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "won't he?",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "does he?",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "wouldn't he?",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 29
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect wh-question:",
        "correct_answer": "Can you tell me what time the store closes?",
        "difficulty": "Medium",
        "explanation": "Indirect Wh-Question: no inversion in embedded clause",
        "options": [
            {
                "id": 641,
                "option_text": "Can you tell me what time the store closes?",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "Can you tell me what time does the store close?",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "Can you tell me what time is the store closes?",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "Can you tell me what time the store do close?",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 29
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Which is correct with present continuous?",
        "correct_answer": "Are they playing football?",
        "difficulty": "Medium",
        "explanation": "Yes/No Question: present continuous with 'are'",
        "options": [
            {
                "id": 651,
                "option_text": "Are they playing football?",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "They are playing football?",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "Do they are playing football?",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "Are playing they football?",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 29
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'Nobody came to the party'?",
        "correct_answer": "did they?",
        "difficulty": "Medium",
        "explanation": "Tag Question: 'nobody' (negative) + positive tag",
        "options": [
            {
                "id": 661,
                "option_text": "did they?",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "didn't they?",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "does it?",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "didn't he?",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 29
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect yes/no question:",
        "correct_answer": "I wonder whether she will attend the meeting.",
        "difficulty": "Medium",
        "explanation": "Indirect Yes/No Question: use 'whether' or 'if'",
        "options": [
            {
                "id": 671,
                "option_text": "I wonder whether she will attend the meeting.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "I wonder whether will she attend the meeting.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "I wonder does she will attend the meeting.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "I wonder if she will attends the meeting.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 29
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Which is correct with modal verb 'can'?",
        "correct_answer": "Can you speak French?",
        "difficulty": "Medium",
        "explanation": "Yes/No Question with modal: can + subject + verb",
        "options": [
            {
                "id": 681,
                "option_text": "Can you speak French?",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "You can speak French?",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "Do can you speak French?",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "Can speak you French?",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 29
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'Everyone should try their best'?",
        "correct_answer": "shouldn't they?",
        "difficulty": "Medium",
        "explanation": "Tag Question: positive 'should' + negative tag 'shouldn't'",
        "options": [
            {
                "id": 691,
                "option_text": "shouldn't they?",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "should they?",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "don't they?",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "doesn't it?",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 29
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect wh-question:",
        "correct_answer": "Could you tell me who is responsible?",
        "difficulty": "Medium",
        "explanation": "Indirect Wh-Question with 'who': no inversion",
        "options": [
            {
                "id": 701,
                "option_text": "Could you tell me who is responsible?",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "Could you tell me who is responsible?",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "Could you tell me is who responsible?",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "Could you tell me who responsible is?",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 29
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wh-question with 'how':",
        "correct_answer": "How much money do you need?",
        "difficulty": "Hard",
        "explanation": "Wh-Question: 'how much' + countable/uncountable + inversion",
        "options": [
            {
                "id": 711,
                "option_text": "How much money do you need?",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "How much money you need?",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "How many money do you need?",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "How much do you need money?",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 29
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'I can help you'?",
        "correct_answer": "can't I?",
        "difficulty": "Hard",
        "explanation": "Tag Question: positive 'can' + negative tag 'can't' with 'I'",
        "options": [
            {
                "id": 721,
                "option_text": "can't I?",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "can I?",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "don't I?",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "aren't I?",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 29
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect question with 'how':",
        "correct_answer": "Do you know how far the station is?",
        "difficulty": "Hard",
        "explanation": "Indirect Wh-Question: 'how far' + statement word order",
        "options": [
            {
                "id": 731,
                "option_text": "Do you know how far the station is?",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "Do you know how far is the station?",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "Do you know how far the station be?",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "Do you know far how the station is?",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 29
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'Hardly anyone noticed'?",
        "correct_answer": "did they?",
        "difficulty": "Hard",
        "explanation": "Tag Question: 'hardly' (negative adverb) + positive tag",
        "options": [
            {
                "id": 741,
                "option_text": "did they?",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "didn't they?",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "doesn't it?",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "do they?",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 29
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect question with 'when':",
        "correct_answer": "I want to know when you will arrive.",
        "difficulty": "Hard",
        "explanation": "Indirect Wh-Question: 'when' + statement word order",
        "options": [
            {
                "id": 751,
                "option_text": "I want to know when you will arrive.",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "I want to know when will you arrive.",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "I want to know when you arrive will.",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "I want to know when do you arrive.",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 29
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "Which is correct with 'neither'?",
        "correct_answer": "Neither option is acceptable, is it?",
        "difficulty": "Hard",
        "explanation": "Tag Question: 'neither' (negative) + positive tag",
        "options": [
            {
                "id": 761,
                "option_text": "Neither option is acceptable, is it?",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "Neither option is acceptable, isn't it?",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "Neither option is acceptable, are they?",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "Neither option is acceptable, aren't they?",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 29
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wh-question with 'whose':",
        "correct_answer": "Whose car is this?",
        "difficulty": "Hard",
        "explanation": "Wh-Question: 'whose' for possession + inversion",
        "options": [
            {
                "id": 771,
                "option_text": "Whose car is this?",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "Whose is this car?",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "Whose this car is?",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "This car is whose?",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 29
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'It hardly ever rains here'?",
        "correct_answer": "does it?",
        "difficulty": "Hard",
        "explanation": "Tag Question: 'hardly' (negative) with 'it' → positive tag",
        "options": [
            {
                "id": 781,
                "option_text": "does it?",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "doesn't it?",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "is it?",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "isn't it?",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 29
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect question with 'why':",
        "correct_answer": "I'm curious to know why you decided to leave.",
        "difficulty": "Hard",
        "explanation": "Indirect Wh-Question: 'why' + statement word order",
        "options": [
            {
                "id": 791,
                "option_text": "I'm curious to know why you decided to leave.",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "I'm curious to know why did you decide to leave.",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "I'm curious to know why do you decide to leave.",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "I'm curious to know why you leave decided to.",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 29
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'I'm sure they're coming'?",
        "correct_answer": "aren't they?",
        "difficulty": "Hard",
        "explanation": "Tag Question: positive 'are' contracted + negative tag",
        "options": [
            {
                "id": 801,
                "option_text": "aren't they?",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "are they?",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "don't they?",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "won't they?",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 29
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which is correct with past perfect?",
        "correct_answer": "Had they finished before you arrived?",
        "difficulty": "Hard",
        "explanation": "Yes/No Question: past perfect + inversion",
        "options": [
            {
                "id": 811,
                "option_text": "Had they finished before you arrived?",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "They had finished before you arrived?",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "Did they had finished before you arrived?",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "Had finished they before you arrived?",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 29
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wh-question with 'how many':",
        "correct_answer": "How many people attended the event?",
        "difficulty": "Hard",
        "explanation": "Wh-Question: 'how many' + countable noun + inversion",
        "options": [
            {
                "id": 821,
                "option_text": "How many people attended the event?",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "How many people did attend the event?",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "How many attended people the event?",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "How many people the event attended?",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 29
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'Everyone should respect the rules'?",
        "correct_answer": "shouldn't they?",
        "difficulty": "Hard",
        "explanation": "Tag Question: positive 'should' + negative tag",
        "options": [
            {
                "id": 831,
                "option_text": "shouldn't they?",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "should they?",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "don't they?",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "doesn't it?",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 29
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect question with multiple wh-words:",
        "correct_answer": "Could you explain where and when it will happen?",
        "difficulty": "Hard",
        "explanation": "Indirect Wh-Question with multiple conditions",
        "options": [
            {
                "id": 841,
                "option_text": "Could you explain where and when it will happen?",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "Could you explain where and when will it happen?",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "Could you explain it will where and when happen?",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "Could you explain where will it and when happen?",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 29
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which is correct with 'scarcely'?",
        "correct_answer": "Scarcely anyone complained, did they?",
        "difficulty": "Hard",
        "explanation": "Tag Question: 'scarcely' (negative) + positive tag",
        "options": [
            {
                "id": 851,
                "option_text": "Scarcely anyone complained, did they?",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "Scarcely anyone complained, didn't they?",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "Scarcely anyone complained, do they?",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "Scarcely anyone complained, doesn't it?",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 29
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wh-question with 'which':",
        "correct_answer": "Which option would you prefer?",
        "difficulty": "Hard",
        "explanation": "Wh-Question: 'which' for choice + inversion",
        "options": [
            {
                "id": 861,
                "option_text": "Which option would you prefer?",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "Which you would prefer option?",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "Which would prefer you option?",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "Would you prefer which option?",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 29
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect question with 'whether':",
        "correct_answer": "I'm unsure whether we should accept or decline.",
        "difficulty": "Hard",
        "explanation": "Indirect Question: 'whether' gives choice of two options",
        "options": [
            {
                "id": 871,
                "option_text": "I'm unsure whether we should accept or decline.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "I'm unsure whether should we accept or decline.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "I'm unsure if we should accept or decline.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "I'm unsure whether accept we or decline.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 29
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'Nothing can stop us'?",
        "correct_answer": "can it?",
        "difficulty": "Hard",
        "explanation": "Tag Question: 'nothing' (negative) + positive tag with 'can'",
        "options": [
            {
                "id": 881,
                "option_text": "can it?",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "can't it?",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "can't they?",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "does it?",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 29
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wh-question with past continuous:",
        "correct_answer": "What were you doing when I called?",
        "difficulty": "Hard",
        "explanation": "Wh-Question: past continuous + inversion",
        "options": [
            {
                "id": 891,
                "option_text": "What were you doing when I called?",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "What you were doing when I called?",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "What were doing you when I called?",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "What do you were doing when I called?",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 29
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'You'd better hurry'?",
        "correct_answer": "hadn't you?",
        "difficulty": "Hard",
        "explanation": "Tag Question: 'had better' + negative tag",
        "options": [
            {
                "id": 901,
                "option_text": "hadn't you?",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "shouldn't you?",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "have you?",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "don't you?",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 29
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Select the correct yes/no question with future continuous:",
        "correct_answer": "Will you be working tomorrow evening?",
        "difficulty": "Hard",
        "explanation": "Yes/No Question: future continuous + inversion",
        "options": [
            {
                "id": 911,
                "option_text": "Will you be working tomorrow evening?",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "You will be working tomorrow evening?",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Will you working be tomorrow evening?",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Do will you be working tomorrow evening?",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 29
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect question with 'who' as subject:",
        "correct_answer": "Do you know who will win the game?",
        "difficulty": "Hard",
        "explanation": "Indirect Wh-Question: 'who' as subject = no inversion",
        "options": [
            {
                "id": 921,
                "option_text": "Do you know who will win the game?",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "Do you know who will the game win?",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "Do you know will who win the game?",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Do you know who the game will win?",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 29
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'There's nothing to worry about'?",
        "correct_answer": "is there?",
        "difficulty": "Hard",
        "explanation": "Tag Question: 'there is' with negative object → positive tag",
        "options": [
            {
                "id": 931,
                "option_text": "is there?",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "isn't there?",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "is it?",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "isn't it?",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 29
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wh-question for agent with 'by':",
        "correct_answer": "Who was the book written by?",
        "difficulty": "Hard",
        "explanation": "Wh-Question: 'who' + passive voice with agent",
        "options": [
            {
                "id": 941,
                "option_text": "Who was the book written by?",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "By who the book was written?",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "The book was written by who?",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Who the book was written by?",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 29
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect question with emphasis:",
        "correct_answer": "I'd very much like to know who they've chosen.",
        "difficulty": "Hard",
        "explanation": "Indirect Wh-Question with emphasis before infinitive",
        "options": [
            {
                "id": 951,
                "option_text": "I'd very much like to know who they've chosen.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "I'd very much like know who they've chosen.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "I'd very much like to know who have they chosen.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "I'd very much like who they've chosen to know.",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 29
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'Let's go somewhere nice'?",
        "correct_answer": "shall we?",
        "difficulty": "Hard",
        "explanation": "Tag Question: 'let's' + 'shall we' tag",
        "options": [
            {
                "id": 961,
                "option_text": "shall we?",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "won't we?",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "don't we?",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "shouldn't we?",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 29
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wh-question with conditional:",
        "correct_answer": "What would you do if you won the lottery?",
        "difficulty": "Hard",
        "explanation": "Wh-Question with conditional (Second Conditional)",
        "options": [
            {
                "id": 971,
                "option_text": "What would you do if you won the lottery?",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "What do you if you win the lottery?",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "What you would do if you won lottery?",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "What would do you if you won the lottery?",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 29
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Select the correct indirect question with reported speech:",
        "correct_answer": "She asked whether I had finished my work.",
        "difficulty": "Hard",
        "explanation": "Indirect Question in Reported Speech: 'whether' + past tense",
        "options": [
            {
                "id": 981,
                "option_text": "She asked whether I had finished my work.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "She asked whether have I finished my work.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "She asked if I have finished my work.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "She asked whether I finish my work.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 29
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "What is the tag for 'I suppose you know about this'?",
        "correct_answer": "don't you?",
        "difficulty": "Hard",
        "explanation": "Tag Question: 'I suppose' + ignore 'suppose' → tag for main verb",
        "options": [
            {
                "id": 991,
                "option_text": "don't you?",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "do you?",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "doesn't I?",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "don't I?",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 29
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Select the correct wh-question in passive with focus:",
        "correct_answer": "What language is most widely spoken?",
        "difficulty": "Hard",
        "explanation": "Wh-Question: passive voice with focus on subject",
        "options": [
            {
                "id": 1001,
                "option_text": "What language is most widely spoken?",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "What language is most spoken widely?",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "What is widely spoken language most?",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "What language spoken is most widely?",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 29
    }
];

export default questions;