const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "She writes a letter. (Convert to passive)",
        "correct_answer": "A letter is written by her.",
        "suggest_answer": "A letter is written by her.",
        "explanation": "Simple Present Active to Passive: Subject + writes + Object → Object + is written + by Subject",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "A letter is written by her. (Convert to active)",
        "correct_answer": "She writes a letter.",
        "suggest_answer": "She writes a letter.",
        "explanation": "Simple Present Passive to Active: Object + is written + by Subject → Subject + writes + Object",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "He ate an apple. (Convert to passive)",
        "correct_answer": "An apple was eaten by him.",
        "suggest_answer": "An apple was eaten by him.",
        "explanation": "Simple Past Active to Passive: Subject + ate + Object → Object + was eaten + by Subject",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "An apple was eaten by him. (Convert to active)",
        "correct_answer": "He ate an apple.",
        "suggest_answer": "He ate an apple.",
        "explanation": "Simple Past Passive to Active: Object + was eaten + by Subject → Subject + ate + Object",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "They will build a house. (Convert to passive)",
        "correct_answer": "A house will be built by them.",
        "suggest_answer": "A house will be built by them.",
        "explanation": "Simple Future Active to Passive: Subject + will build + Object → Object + will be built + by Subject",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "A house will be built by them. (Convert to active)",
        "correct_answer": "They will build a house.",
        "suggest_answer": "They will build a house.",
        "explanation": "Simple Future Passive to Active: Object + will be built + by Subject → Subject + will build + Object",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "She is reading a book. (Convert to passive)",
        "correct_answer": "A book is being read by her.",
        "suggest_answer": "A book is being read by her.",
        "explanation": "Present Continuous Active to Passive: Subject + is reading + Object → Object + is being read + by Subject",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "A book is being read by her. (Convert to active)",
        "correct_answer": "She is reading a book.",
        "suggest_answer": "She is reading a book.",
        "explanation": "Present Continuous Passive to Active: Object + is being read + by Subject → Subject + is reading + Object",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "They were playing football. (Convert to passive)",
        "correct_answer": "Football was being played by them.",
        "suggest_answer": "Football was being played by them.",
        "explanation": "Past Continuous Active to Passive: Subject + was playing + Object → Object + was being played + by Subject",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "Football was being played by them. (Convert to active)",
        "correct_answer": "They were playing football.",
        "suggest_answer": "They were playing football.",
        "explanation": "Past Continuous Passive to Active: Object + was being played + by Subject → Subject + was playing + Object",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "She has finished her work. (Convert to passive)",
        "correct_answer": "Her work has been finished by her.",
        "suggest_answer": "Her work has been finished by her.",
        "explanation": "Present Perfect Active to Passive: Subject + has finished + Object → Object + has been finished + by Subject",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "Her work has been finished by her. (Convert to active)",
        "correct_answer": "She has finished her work.",
        "suggest_answer": "She has finished her work.",
        "explanation": "Present Perfect Passive to Active: Object + has been finished + by Subject → Subject + has finished + Object",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "He had completed the project. (Convert to passive)",
        "correct_answer": "The project had been completed by him.",
        "suggest_answer": "The project had been completed by him.",
        "explanation": "Past Perfect Active to Passive: Subject + had completed + Object → Object + had been completed + by Subject",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "The project had been completed by him. (Convert to active)",
        "correct_answer": "He had completed the project.",
        "suggest_answer": "He had completed the project.",
        "explanation": "Past Perfect Passive to Active: Object + had been completed + by Subject → Subject + had completed + Object",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "They will have finished the work. (Convert to passive)",
        "correct_answer": "The work will have been finished by them.",
        "suggest_answer": "The work will have been finished by them.",
        "explanation": "Future Perfect Active to Passive: Subject + will have finished + Object → Object + will have been finished + by Subject",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "The work will have been finished by them. (Convert to active)",
        "correct_answer": "They will have finished the work.",
        "suggest_answer": "They will have finished the work.",
        "explanation": "Future Perfect Passive to Active: Object + will have been finished + by Subject → Subject + will have finished + Object",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "She is writing a poem. (Convert to passive)",
        "correct_answer": "A poem is being written by her.",
        "suggest_answer": "A poem is being written by her.",
        "explanation": "Present Continuous Active to Passive.",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "They solve the problem. (Convert to passive)",
        "correct_answer": "The problem is solved by them.",
        "suggest_answer": "The problem is solved by them.",
        "explanation": "Simple Present Active to Passive.",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "He cleaned the house. (Convert to passive)",
        "correct_answer": "The house was cleaned by him.",
        "suggest_answer": "The house was cleaned by him.",
        "explanation": "Simple Past Active to Passive.",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "We will organize the event. (Convert to passive)",
        "correct_answer": "The event will be organized by us.",
        "suggest_answer": "The event will be organized by us.",
        "explanation": "Simple Future Active to Passive.",
        "difficulty": "Easy",
        "topic_id": 23
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "The teacher explains the lesson. (Convert to passive)",
        "correct_answer": "The lesson is explained by the teacher.",
        "suggest_answer": "The lesson is explained by the teacher.",
        "explanation": "Simple Present Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "She has prepared the presentation. (Convert to passive)",
        "correct_answer": "The presentation has been prepared by her.",
        "suggest_answer": "The presentation has been prepared by her.",
        "explanation": "Present Perfect Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "They were building the bridge. (Convert to passive)",
        "correct_answer": "The bridge was being built by them.",
        "suggest_answer": "The bridge was being built by them.",
        "explanation": "Past Continuous Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "He had written the report. (Convert to passive)",
        "correct_answer": "The report had been written by him.",
        "suggest_answer": "The report had been written by him.",
        "explanation": "Past Perfect Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "We will have completed the task. (Convert to passive)",
        "correct_answer": "The task will have been completed by us.",
        "suggest_answer": "The task will have been completed by us.",
        "explanation": "Future Perfect Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "She is designing a website. (Convert to passive)",
        "correct_answer": "A website is being designed by her.",
        "suggest_answer": "A website is being designed by her.",
        "explanation": "Present Continuous Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "They managed the project. (Convert to passive)",
        "correct_answer": "The project was managed by them.",
        "suggest_answer": "The project was managed by them.",
        "explanation": "Simple Past Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "He will announce the decision. (Convert to passive)",
        "correct_answer": "The decision will be announced by him.",
        "suggest_answer": "The decision will be announced by him.",
        "explanation": "Simple Future Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "She studies the subject. (Convert to passive)",
        "correct_answer": "The subject is studied by her.",
        "suggest_answer": "The subject is studied by her.",
        "explanation": "Simple Present Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "They have signed the contract. (Convert to passive)",
        "correct_answer": "The contract has been signed by them.",
        "suggest_answer": "The contract has been signed by them.",
        "explanation": "Present Perfect Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "The artist painted the masterpiece. (Convert to passive)",
        "correct_answer": "The masterpiece was painted by the artist.",
        "suggest_answer": "The masterpiece was painted by the artist.",
        "explanation": "Simple Past Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "We are developing new strategies. (Convert to passive)",
        "correct_answer": "New strategies are being developed by us.",
        "suggest_answer": "New strategies are being developed by us.",
        "explanation": "Present Continuous Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "She had prepared the documents. (Convert to passive)",
        "correct_answer": "The documents had been prepared by her.",
        "suggest_answer": "The documents had been prepared by her.",
        "explanation": "Past Perfect Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "They will submit the proposal. (Convert to passive)",
        "correct_answer": "The proposal will be submitted by them.",
        "suggest_answer": "The proposal will be submitted by them.",
        "explanation": "Simple Future Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "He is fixing the car. (Convert to passive)",
        "correct_answer": "The car is being fixed by him.",
        "suggest_answer": "The car is being fixed by him.",
        "explanation": "Present Continuous Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "The company produces quality goods. (Convert to passive)",
        "correct_answer": "Quality goods are produced by the company.",
        "suggest_answer": "Quality goods are produced by the company.",
        "explanation": "Simple Present Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "They were investigating the case. (Convert to passive)",
        "correct_answer": "The case was being investigated by them.",
        "suggest_answer": "The case was being investigated by them.",
        "explanation": "Past Continuous Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "She has achieved great success. (Convert to passive)",
        "correct_answer": "Great success has been achieved by her.",
        "suggest_answer": "Great success has been achieved by her.",
        "explanation": "Present Perfect Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "He will deliver the package. (Convert to passive)",
        "correct_answer": "The package will be delivered by him.",
        "suggest_answer": "The package will be delivered by him.",
        "explanation": "Simple Future Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "We are implementing the plan. (Convert to passive)",
        "correct_answer": "The plan is being implemented by us.",
        "suggest_answer": "The plan is being implemented by us.",
        "explanation": "Present Continuous Active to Passive.",
        "difficulty": "Medium",
        "topic_id": 23
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "The scientist discovered the formula. (Convert to passive)",
        "correct_answer": "The formula was discovered by the scientist.",
        "suggest_answer": "The formula was discovered by the scientist.",
        "explanation": "Simple Past Active to Passive.",
        "difficulty": "Hard",
        "topic_id": 23
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "They have established the organization. (Convert to passive)",
        "correct_answer": "The organization has been established by them.",
        "suggest_answer": "The organization has been established by them.",
        "explanation": "Present Perfect Active to Passive.",
        "difficulty": "Hard",
        "topic_id": 23
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "She was composing a symphony. (Convert to passive)",
        "correct_answer": "A symphony was being composed by her.",
        "suggest_answer": "A symphony was being composed by her.",
        "explanation": "Past Continuous Active to Passive.",
        "difficulty": "Hard",
        "topic_id": 23
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "He had implemented the strategy. (Convert to passive)",
        "correct_answer": "The strategy had been implemented by him.",
        "suggest_answer": "The strategy had been implemented by him.",
        "explanation": "Past Perfect Active to Passive.",
        "difficulty": "Hard",
        "topic_id": 23
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "We will have established the foundation. (Convert to passive)",
        "correct_answer": "The foundation will have been established by us.",
        "suggest_answer": "The foundation will have been established by us.",
        "explanation": "Future Perfect Active to Passive.",
        "difficulty": "Hard",
        "topic_id": 23
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "She is restructuring the organization. (Convert to passive)",
        "correct_answer": "The organization is being restructured by her.",
        "suggest_answer": "The organization is being restructured by her.",
        "explanation": "Present Continuous Active to Passive.",
        "difficulty": "Hard",
        "topic_id": 23
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "They formulated the guidelines. (Convert to passive)",
        "correct_answer": "The guidelines were formulated by them.",
        "suggest_answer": "The guidelines were formulated by them.",
        "explanation": "Simple Past Active to Passive.",
        "difficulty": "Hard",
        "topic_id": 23
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "He will coordinate the efforts. (Convert to passive)",
        "correct_answer": "The efforts will be coordinated by him.",
        "suggest_answer": "The efforts will be coordinated by him.",
        "explanation": "Simple Future Active to Passive.",
        "difficulty": "Hard",
        "topic_id": 23
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "We generate innovative ideas. (Convert to passive)",
        "correct_answer": "Innovative ideas are generated by us.",
        "suggest_answer": "Innovative ideas are generated by us.",
        "explanation": "Simple Present Active to Passive.",
        "difficulty": "Hard",
        "topic_id": 23
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "They have revolutionized the industry. (Convert to passive)",
        "correct_answer": "The industry has been revolutionized by them.",
        "suggest_answer": "The industry has been revolutionized by them.",
        "explanation": "Present Perfect Active to Passive.",
        "difficulty": "Hard",
        "topic_id": 23
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'She writes a letter'?",
        "correct_answer": "A letter is written by her.",
        "difficulty": "Easy",
        "explanation": "Simple Present Active to Passive: Object + is + Past Participle + by Subject",
        "options": [
            {
                "id": 511,
                "option_text": "A letter is written by her.",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "A letter was written by her.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "A letter will be written by her.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "A letter is being written by her.",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 23
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct active form of 'An apple was eaten by him'?",
        "correct_answer": "He ate an apple.",
        "difficulty": "Easy",
        "explanation": "Simple Past Passive to Active: Subject + Past Verb + Object",
        "options": [
            {
                "id": 521,
                "option_text": "He ate an apple.",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "He eats an apple.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "He will eat an apple.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "He is eating an apple.",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 23
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'They will build a house'?",
        "correct_answer": "A house will be built by them.",
        "difficulty": "Easy",
        "explanation": "Simple Future Active to Passive: Object + will be + Past Participle + by Subject",
        "options": [
            {
                "id": 531,
                "option_text": "A house will be built by them.",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "A house is built by them.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "A house was built by them.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "A house will have been built by them.",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 23
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'She is reading a book'?",
        "correct_answer": "A book is being read by her.",
        "difficulty": "Easy",
        "explanation": "Present Continuous Active to Passive: Object + is being + Past Participle + by Subject",
        "options": [
            {
                "id": 541,
                "option_text": "A book is being read by her.",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "A book is read by her.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "A book was being read by her.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "A book has been read by her.",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 23
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct active form of 'A book is being read by her'?",
        "correct_answer": "She is reading a book.",
        "difficulty": "Easy",
        "explanation": "Present Continuous Passive to Active: Subject + is reading + Object",
        "options": [
            {
                "id": 551,
                "option_text": "She is reading a book.",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "She reads a book.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "She was reading a book.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "She has read a book.",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 23
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'They were playing football'?",
        "correct_answer": "Football was being played by them.",
        "difficulty": "Easy",
        "explanation": "Past Continuous Active to Passive: Object + was being + Past Participle + by Subject",
        "options": [
            {
                "id": 561,
                "option_text": "Football was being played by them.",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "Football is being played by them.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "Football was played by them.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "Football has been played by them.",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 23
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'She has finished her work'?",
        "correct_answer": "Her work has been finished by her.",
        "difficulty": "Easy",
        "explanation": "Present Perfect Active to Passive: Object + has been + Past Participle + by Subject",
        "options": [
            {
                "id": 571,
                "option_text": "Her work has been finished by her.",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "Her work is finished by her.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "Her work had been finished by her.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "Her work will be finished by her.",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 23
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'He had completed the project'?",
        "correct_answer": "The project had been completed by him.",
        "difficulty": "Easy",
        "explanation": "Past Perfect Active to Passive: Object + had been + Past Participle + by Subject",
        "options": [
            {
                "id": 581,
                "option_text": "The project had been completed by him.",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "The project has been completed by him.",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "The project was completed by him.",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "The project will be completed by him.",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 23
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'They will have finished the work'?",
        "correct_answer": "The work will have been finished by them.",
        "difficulty": "Easy",
        "explanation": "Future Perfect Active to Passive: Object + will have been + Past Participle + by Subject",
        "options": [
            {
                "id": 591,
                "option_text": "The work will have been finished by them.",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "The work has been finished by them.",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "The work will be finished by them.",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "The work had been finished by them.",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 23
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct active form of 'The project had been completed by him'?",
        "correct_answer": "He had completed the project.",
        "difficulty": "Easy",
        "explanation": "Past Perfect Passive to Active: Subject + had completed + Object",
        "options": [
            {
                "id": 601,
                "option_text": "He had completed the project.",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "He completed the project.",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "He has completed the project.",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "He will complete the project.",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 23
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'The teacher explains the lesson'?",
        "correct_answer": "The lesson is explained by the teacher.",
        "difficulty": "Medium",
        "explanation": "Simple Present Active to Passive.",
        "options": [
            {
                "id": 611,
                "option_text": "The lesson is explained by the teacher.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "The lesson was explained by the teacher.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "The lesson will be explained by the teacher.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "The lesson is being explained by the teacher.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 23
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'She has prepared the presentation'?",
        "correct_answer": "The presentation has been prepared by her.",
        "difficulty": "Medium",
        "explanation": "Present Perfect Active to Passive.",
        "options": [
            {
                "id": 621,
                "option_text": "The presentation has been prepared by her.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "The presentation is prepared by her.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "The presentation was prepared by her.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "The presentation will be prepared by her.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 23
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'They were building the bridge'?",
        "correct_answer": "The bridge was being built by them.",
        "difficulty": "Medium",
        "explanation": "Past Continuous Active to Passive.",
        "options": [
            {
                "id": 631,
                "option_text": "The bridge was being built by them.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "The bridge is being built by them.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "The bridge was built by them.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "The bridge will be built by them.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 23
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'He had written the report'?",
        "correct_answer": "The report had been written by him.",
        "difficulty": "Medium",
        "explanation": "Past Perfect Active to Passive.",
        "options": [
            {
                "id": 641,
                "option_text": "The report had been written by him.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "The report has been written by him.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "The report was written by him.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "The report will be written by him.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 23
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'We will have completed the task'?",
        "correct_answer": "The task will have been completed by us.",
        "difficulty": "Medium",
        "explanation": "Future Perfect Active to Passive.",
        "options": [
            {
                "id": 651,
                "option_text": "The task will have been completed by us.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "The task has been completed by us.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "The task will be completed by us.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "The task had been completed by us.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 23
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'She is designing a website'?",
        "correct_answer": "A website is being designed by her.",
        "difficulty": "Medium",
        "explanation": "Present Continuous Active to Passive.",
        "options": [
            {
                "id": 661,
                "option_text": "A website is being designed by her.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "A website is designed by her.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "A website was being designed by her.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "A website has been designed by her.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 23
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct active form of 'The project was managed by them'?",
        "correct_answer": "They managed the project.",
        "difficulty": "Medium",
        "explanation": "Simple Past Passive to Active.",
        "options": [
            {
                "id": 671,
                "option_text": "They managed the project.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "They manage the project.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "They will manage the project.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "They are managing the project.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 23
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'He will announce the decision'?",
        "correct_answer": "The decision will be announced by him.",
        "difficulty": "Medium",
        "explanation": "Simple Future Active to Passive.",
        "options": [
            {
                "id": 681,
                "option_text": "The decision will be announced by him.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "The decision is announced by him.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "The decision was announced by him.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "The decision has been announced by him.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 23
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'She studies the subject'?",
        "correct_answer": "The subject is studied by her.",
        "difficulty": "Medium",
        "explanation": "Simple Present Active to Passive.",
        "options": [
            {
                "id": 691,
                "option_text": "The subject is studied by her.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "The subject was studied by her.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "The subject will be studied by her.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "The subject is being studied by her.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 23
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'They have signed the contract'?",
        "correct_answer": "The contract has been signed by them.",
        "difficulty": "Medium",
        "explanation": "Present Perfect Active to Passive.",
        "options": [
            {
                "id": 701,
                "option_text": "The contract has been signed by them.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "The contract is signed by them.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "The contract was signed by them.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "The contract will be signed by them.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 23
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'The scientist discovered the formula'?",
        "correct_answer": "The formula was discovered by the scientist.",
        "difficulty": "Hard",
        "explanation": "Simple Past Active to Passive.",
        "options": [
            {
                "id": 711,
                "option_text": "The formula was discovered by the scientist.",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "The formula is discovered by the scientist.",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "The formula will be discovered by the scientist.",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "The formula has been discovered by the scientist.",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 23
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'They have established the organization'?",
        "correct_answer": "The organization has been established by them.",
        "difficulty": "Hard",
        "explanation": "Present Perfect Active to Passive.",
        "options": [
            {
                "id": 721,
                "option_text": "The organization has been established by them.",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "The organization is established by them.",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "The organization was established by them.",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "The organization will be established by them.",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 23
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'She was composing a symphony'?",
        "correct_answer": "A symphony was being composed by her.",
        "difficulty": "Hard",
        "explanation": "Past Continuous Active to Passive.",
        "options": [
            {
                "id": 731,
                "option_text": "A symphony was being composed by her.",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "A symphony is being composed by her.",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "A symphony was composed by her.",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "A symphony has been composed by her.",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 23
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'He had implemented the strategy'?",
        "correct_answer": "The strategy had been implemented by him.",
        "difficulty": "Hard",
        "explanation": "Past Perfect Active to Passive.",
        "options": [
            {
                "id": 741,
                "option_text": "The strategy had been implemented by him.",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "The strategy has been implemented by him.",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "The strategy was implemented by him.",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "The strategy will be implemented by him.",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 23
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'We will have established the foundation'?",
        "correct_answer": "The foundation will have been established by us.",
        "difficulty": "Hard",
        "explanation": "Future Perfect Active to Passive.",
        "options": [
            {
                "id": 751,
                "option_text": "The foundation will have been established by us.",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "The foundation has been established by us.",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "The foundation will be established by us.",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "The foundation had been established by us.",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 23
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'She is restructuring the organization'?",
        "correct_answer": "The organization is being restructured by her.",
        "difficulty": "Hard",
        "explanation": "Present Continuous Active to Passive.",
        "options": [
            {
                "id": 761,
                "option_text": "The organization is being restructured by her.",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "The organization is restructured by her.",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "The organization was being restructured by her.",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "The organization has been restructured by her.",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 23
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'They formulated the guidelines'?",
        "correct_answer": "The guidelines were formulated by them.",
        "difficulty": "Hard",
        "explanation": "Simple Past Active to Passive.",
        "options": [
            {
                "id": 771,
                "option_text": "The guidelines were formulated by them.",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "The guidelines are formulated by them.",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "The guidelines will be formulated by them.",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "The guidelines have been formulated by them.",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 23
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'He will coordinate the efforts'?",
        "correct_answer": "The efforts will be coordinated by him.",
        "difficulty": "Hard",
        "explanation": "Simple Future Active to Passive.",
        "options": [
            {
                "id": 781,
                "option_text": "The efforts will be coordinated by him.",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "The efforts are coordinated by him.",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "The efforts were coordinated by him.",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "The efforts have been coordinated by him.",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 23
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'We generate innovative ideas'?",
        "correct_answer": "Innovative ideas are generated by us.",
        "difficulty": "Hard",
        "explanation": "Simple Present Active to Passive.",
        "options": [
            {
                "id": 791,
                "option_text": "Innovative ideas are generated by us.",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "Innovative ideas were generated by us.",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "Innovative ideas will be generated by us.",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "Innovative ideas are being generated by us.",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 23
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct passive form of 'They have revolutionized the industry'?",
        "correct_answer": "The industry has been revolutionized by them.",
        "difficulty": "Hard",
        "explanation": "Present Perfect Active to Passive.",
        "options": [
            {
                "id": 801,
                "option_text": "The industry has been revolutionized by them.",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "The industry is revolutionized by them.",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "The industry was revolutionized by them.",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "The industry will be revolutionized by them.",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 23
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'They manage the project'?",
        "correct_answer": "The project is managed by them.",
        "difficulty": "Hard",
        "explanation": "Simple Present Active to Passive with all 12 tenses covered.",
        "options": [
            {
                "id": 811,
                "option_text": "The project is managed by them.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "The project was managed by them.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "The project will be managed by them.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "The project is being managed by them.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 23
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'She had prepared the documents'?",
        "correct_answer": "The documents had been prepared by her.",
        "difficulty": "Hard",
        "explanation": "Past Perfect Active to Passive.",
        "options": [
            {
                "id": 821,
                "option_text": "The documents had been prepared by her.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "The documents have been prepared by her.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "The documents were prepared by her.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "The documents will be prepared by her.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 23
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'They are developing new strategies'?",
        "correct_answer": "New strategies are being developed by them.",
        "difficulty": "Hard",
        "explanation": "Present Continuous Active to Passive.",
        "options": [
            {
                "id": 831,
                "option_text": "New strategies are being developed by them.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "New strategies are developed by them.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "New strategies were being developed by them.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "New strategies have been developed by them.",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 23
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'They will submit the proposal'?",
        "correct_answer": "The proposal will be submitted by them.",
        "difficulty": "Hard",
        "explanation": "Simple Future Active to Passive.",
        "options": [
            {
                "id": 841,
                "option_text": "The proposal will be submitted by them.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "The proposal is submitted by them.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "The proposal was submitted by them.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "The proposal has been submitted by them.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 23
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'He is fixing the car'?",
        "correct_answer": "The car is being fixed by him.",
        "difficulty": "Hard",
        "explanation": "Present Continuous Active to Passive.",
        "options": [
            {
                "id": 851,
                "option_text": "The car is being fixed by him.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "The car is fixed by him.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "The car was being fixed by him.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "The car has been fixed by him.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 23
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'The company produces quality goods'?",
        "correct_answer": "Quality goods are produced by the company.",
        "difficulty": "Hard",
        "explanation": "Simple Present Active to Passive.",
        "options": [
            {
                "id": 861,
                "option_text": "Quality goods are produced by the company.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "Quality goods were produced by the company.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "Quality goods will be produced by the company.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "Quality goods are being produced by the company.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 23
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'They were investigating the case'?",
        "correct_answer": "The case was being investigated by them.",
        "difficulty": "Hard",
        "explanation": "Past Continuous Active to Passive.",
        "options": [
            {
                "id": 871,
                "option_text": "The case was being investigated by them.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "The case is being investigated by them.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "The case was investigated by them.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "The case has been investigated by them.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 23
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'She has achieved great success'?",
        "correct_answer": "Great success has been achieved by her.",
        "difficulty": "Hard",
        "explanation": "Present Perfect Active to Passive.",
        "options": [
            {
                "id": 881,
                "option_text": "Great success has been achieved by her.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "Great success is achieved by her.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "Great success was achieved by her.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "Great success will be achieved by her.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 23
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'He will deliver the package'?",
        "correct_answer": "The package will be delivered by him.",
        "difficulty": "Hard",
        "explanation": "Simple Future Active to Passive.",
        "options": [
            {
                "id": 891,
                "option_text": "The package will be delivered by him.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "The package is delivered by him.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "The package was delivered by him.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "The package has been delivered by him.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 23
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'We are implementing the plan'?",
        "correct_answer": "The plan is being implemented by us.",
        "difficulty": "Hard",
        "explanation": "Present Continuous Active to Passive.",
        "options": [
            {
                "id": 901,
                "option_text": "The plan is being implemented by us.",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "The plan is implemented by us.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "The plan was being implemented by us.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "The plan has been implemented by us.",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 23
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "What is the correct active conversion of 'The work will have been finished by them'?",
        "correct_answer": "They will have finished the work.",
        "difficulty": "Hard",
        "explanation": "Future Perfect Passive to Active.",
        "options": [
            {
                "id": 911,
                "option_text": "They will have finished the work.",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "They have finished the work.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "They will finish the work.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "They finished the work.",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 23
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "What is the correct active conversion of 'Football was being played by them'?",
        "correct_answer": "They were playing football.",
        "difficulty": "Hard",
        "explanation": "Past Continuous Passive to Active.",
        "options": [
            {
                "id": 921,
                "option_text": "They were playing football.",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "They are playing football.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "They play football.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "They played football.",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 23
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "What is the correct active conversion of 'Her work has been finished by her'?",
        "correct_answer": "She has finished her work.",
        "difficulty": "Hard",
        "explanation": "Present Perfect Passive to Active.",
        "options": [
            {
                "id": 931,
                "option_text": "She has finished her work.",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "She finishes her work.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "She finished her work.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "She will finish her work.",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 23
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "What is the correct active conversion of 'A letter is written by her'?",
        "correct_answer": "She writes a letter.",
        "difficulty": "Hard",
        "explanation": "Simple Present Passive to Active.",
        "options": [
            {
                "id": 941,
                "option_text": "She writes a letter.",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "She wrote a letter.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "She will write a letter.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "She is writing a letter.",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 23
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "What is the correct active conversion of 'A house will be built by them'?",
        "correct_answer": "They will build a house.",
        "difficulty": "Hard",
        "explanation": "Simple Future Passive to Active.",
        "options": [
            {
                "id": 951,
                "option_text": "They will build a house.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "They build a house.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "They built a house.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "They are building a house.",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 23
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "What is the correct active conversion of 'An apple was eaten by him'?",
        "correct_answer": "He ate an apple.",
        "difficulty": "Hard",
        "explanation": "Simple Past Passive to Active.",
        "options": [
            {
                "id": 961,
                "option_text": "He ate an apple.",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "He eats an apple.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "He will eat an apple.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "He has eaten an apple.",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 23
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'We complete the project'?",
        "correct_answer": "The project is completed by us.",
        "difficulty": "Hard",
        "explanation": "Simple Present Active to Passive with all tenses practiced.",
        "options": [
            {
                "id": 971,
                "option_text": "The project is completed by us.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "The project was completed by us.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "The project will be completed by us.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "The project is being completed by us.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 23
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'They verify the documents'?",
        "correct_answer": "The documents are verified by them.",
        "difficulty": "Hard",
        "explanation": "Simple Present Active to Passive.",
        "options": [
            {
                "id": 981,
                "option_text": "The documents are verified by them.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "The documents were verified by them.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "The documents will be verified by them.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "The documents are being verified by them.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 23
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'He examines the report'?",
        "correct_answer": "The report is examined by him.",
        "difficulty": "Hard",
        "explanation": "Simple Present Active to Passive.",
        "options": [
            {
                "id": 991,
                "option_text": "The report is examined by him.",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "The report was examined by him.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "The report will be examined by him.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "The report is being examined by him.",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 23
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "What is the correct passive conversion of 'We recommend these products'?",
        "correct_answer": "These products are recommended by us.",
        "difficulty": "Hard",
        "explanation": "Simple Present Active to Passive.",
        "options": [
            {
                "id": 1001,
                "option_text": "These products are recommended by us.",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "These products were recommended by us.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "These products will be recommended by us.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "These products are being recommended by us.",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 23
    }
];

export default questions;