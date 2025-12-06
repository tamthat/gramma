const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "I ___ [eat] breakfast every morning.",
        "correct_answer": "eat",
        "suggest_answer": "eat",
        "explanation": "Eat is a regular main verb. Use present tense for habitual actions.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "She ___ [is] a teacher.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "Is is a form of 'to be'. Use with third person singular.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "He ___ [do] not like vegetables.",
        "correct_answer": "does",
        "suggest_answer": "do",
        "explanation": "Does is an auxiliary verb. Use with third person singular negative.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "They ___ [can] speak English.",
        "correct_answer": "can",
        "suggest_answer": "can",
        "explanation": "Can is a modal (defective) verb expressing ability.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "We ___ [are] students.",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Are is a form of 'to be'. Use with first person plural.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "I ___ [have] a cat.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have is an auxiliary verb. Use in present perfect tense.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "You ___ [should] study hard.",
        "correct_answer": "should",
        "suggest_answer": "should",
        "explanation": "Should is a modal verb expressing obligation.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "It ___ [is] raining outside.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "Is is used with 'it' for weather conditions.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "She ___ [will] come tomorrow.",
        "correct_answer": "will",
        "suggest_answer": "will",
        "explanation": "Will is an auxiliary verb for future tense.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "I ___ [must] finish this work.",
        "correct_answer": "must",
        "suggest_answer": "must",
        "explanation": "Must is a modal verb expressing necessity.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "He ___ [play] soccer every weekend.",
        "correct_answer": "plays",
        "suggest_answer": "play",
        "explanation": "Plays is regular main verb. Add -s for third person singular.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "They ___ [were] at home yesterday.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Were is past tense of 'to be'. Use with they.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "I ___ [have] finished my homework.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have is auxiliary in present perfect tense.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "You ___ [may] leave early today.",
        "correct_answer": "may",
        "suggest_answer": "may",
        "explanation": "May is a modal verb expressing permission.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "She ___ [be] a doctor.",
        "correct_answer": "is",
        "suggest_answer": "be",
        "explanation": "Is is the correct form of 'to be' for she.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "We ___ [go] to school daily.",
        "correct_answer": "go",
        "suggest_answer": "go",
        "explanation": "Go is a regular main verb. Present tense for habitual actions.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "He ___ [might] come later.",
        "correct_answer": "might",
        "suggest_answer": "might",
        "explanation": "Might is a modal verb expressing possibility.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "I ___ [was] born in 1990.",
        "correct_answer": "was",
        "suggest_answer": "was",
        "explanation": "Was is past tense of 'to be'. Use with I.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "You ___ [would] like coffee?",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Would is a modal auxiliary expressing preference.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "They ___ [are] playing in the garden.",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Are is auxiliary in continuous tense.",
        "difficulty": "Easy",
        "topic_id": 16
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "She ___ [work] in an office.",
        "correct_answer": "works",
        "suggest_answer": "work",
        "explanation": "Works is regular main verb with -s for third person singular.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "I ___ [have] been studying for two hours.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have is auxiliary in present perfect continuous.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "He ___ [might] have forgotten the appointment.",
        "correct_answer": "might have",
        "suggest_answer": "might",
        "explanation": "Might have is modal + auxiliary for past possibility.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "They ___ [be] tired after the race.",
        "correct_answer": "are",
        "suggest_answer": "be",
        "explanation": "Are is the correct form of 'to be' for they.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "The weather ___ [be] cold tomorrow.",
        "correct_answer": "will be",
        "suggest_answer": "be",
        "explanation": "Will be combines future auxiliary with 'to be'.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "You ___ [can] not go there alone.",
        "correct_answer": "cannot",
        "suggest_answer": "can",
        "explanation": "Cannot is negative form of can (modal verb).",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "I ___ [do] understand your point.",
        "correct_answer": "do",
        "suggest_answer": "do",
        "explanation": "Do is auxiliary for emphasis in affirmative sentences.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "She ___ [have] not arrived yet.",
        "correct_answer": "has",
        "suggest_answer": "have",
        "explanation": "Has is auxiliary for third person singular in present perfect.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "They ___ [must] have left early.",
        "correct_answer": "must have",
        "suggest_answer": "must",
        "explanation": "Must have combines modal with auxiliary for past deduction.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "He ___ [ought] to apologize.",
        "correct_answer": "ought",
        "suggest_answer": "ought",
        "explanation": "Ought is a modal verb expressing duty.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "The children ___ [be] playing outside.",
        "correct_answer": "are",
        "suggest_answer": "be",
        "explanation": "Are is auxiliary in continuous tense with plural subject.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "I ___ [will] have finished by tomorrow.",
        "correct_answer": "will have",
        "suggest_answer": "will",
        "explanation": "Will have combines future with perfect auxiliary.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "You ___ [could] have warned me.",
        "correct_answer": "could have",
        "suggest_answer": "could",
        "explanation": "Could have is modal + auxiliary for past ability/possibility.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "She ___ [not be] happy with the result.",
        "correct_answer": "is not",
        "suggest_answer": "be",
        "explanation": "Is not is negative form of 'to be' for third person singular.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "They ___ [have] been waiting for hours.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have is auxiliary in perfect continuous tense.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "He ___ [shall] never forget this.",
        "correct_answer": "shall",
        "suggest_answer": "shall",
        "explanation": "Shall is a modal verb for future or formal obligation.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "I ___ [was] not there yesterday.",
        "correct_answer": "was",
        "suggest_answer": "was",
        "explanation": "Was is past form of 'to be' for first person singular.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "You ___ [need] to study harder.",
        "correct_answer": "need",
        "suggest_answer": "need",
        "explanation": "Need is a semi-modal verb expressing necessity.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "They ___ [are] being watched.",
        "correct_answer": "are",
        "suggest_answer": "are",
        "explanation": "Are is auxiliary in passive continuous voice.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "She ___ [dare] not speak.",
        "correct_answer": "dare",
        "suggest_answer": "dare",
        "explanation": "Dare is a semi-modal expressing courage or boldness.",
        "difficulty": "Medium",
        "topic_id": 16
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "I ___ [have] been to Paris twice.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have is auxiliary in present perfect (first person singular).",
        "difficulty": "Hard",
        "topic_id": 16
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "He ___ [be] supposed to arrive tomorrow.",
        "correct_answer": "is",
        "suggest_answer": "be",
        "explanation": "Is is 'to be' form with 'supposed to' structure.",
        "difficulty": "Hard",
        "topic_id": 16
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "They ___ [might] have been sleeping.",
        "correct_answer": "might have been",
        "suggest_answer": "might",
        "explanation": "Might have been combines modal with perfect continuous auxiliaries.",
        "difficulty": "Hard",
        "topic_id": 16
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "She ___ [will] have been working there for 10 years.",
        "correct_answer": "will have been",
        "suggest_answer": "will",
        "explanation": "Will have been is future perfect continuous auxiliary combination.",
        "difficulty": "Hard",
        "topic_id": 16
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "You ___ [had] better leave now.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Had in 'had better' is a semi-modal structure.",
        "difficulty": "Hard",
        "topic_id": 16
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "I ___ [should] have known better.",
        "correct_answer": "should have",
        "suggest_answer": "should",
        "explanation": "Should have combines modal with perfect auxiliary.",
        "difficulty": "Hard",
        "topic_id": 16
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "It ___ [be] that he is wrong.",
        "correct_answer": "may be",
        "suggest_answer": "be",
        "explanation": "May be is modal + 'to be' expressing possibility.",
        "difficulty": "Hard",
        "topic_id": 16
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "We ___ [have] been informed about changes.",
        "correct_answer": "have",
        "suggest_answer": "have",
        "explanation": "Have is auxiliary in passive present perfect.",
        "difficulty": "Hard",
        "topic_id": 16
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "They ___ [must] be joking.",
        "correct_answer": "must be",
        "suggest_answer": "must",
        "explanation": "Must be combines modal with 'to be' for deduction.",
        "difficulty": "Hard",
        "topic_id": 16
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "I ___ [was] being followed.",
        "correct_answer": "was",
        "suggest_answer": "was",
        "explanation": "Was is auxiliary in passive continuous tense.",
        "difficulty": "Hard",
        "topic_id": 16
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "I ___ breakfast every morning.",
        "correct_answer": "eat",
        "difficulty": "Easy",
        "explanation": "Eat is a regular main verb for habitual action.",
        "options": [
            {
                "id": 511,
                "option_text": "eat",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "eats",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "am eating",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "eating",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 16
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "She ___ a teacher.",
        "correct_answer": "is",
        "difficulty": "Easy",
        "explanation": "Is is the correct form of 'to be' for third person singular.",
        "options": [
            {
                "id": 521,
                "option_text": "is",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "be",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 16
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "He ___ not like vegetables.",
        "correct_answer": "does",
        "difficulty": "Easy",
        "explanation": "Does is auxiliary for negation with third person singular.",
        "options": [
            {
                "id": 531,
                "option_text": "does",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "do",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "did",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "doesn't",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 16
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "They ___ speak English.",
        "correct_answer": "can",
        "difficulty": "Easy",
        "explanation": "Can is a modal verb expressing ability.",
        "options": [
            {
                "id": 541,
                "option_text": "can",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "may",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 16
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "We ___ students.",
        "correct_answer": "are",
        "difficulty": "Easy",
        "explanation": "Are is 'to be' for first person plural.",
        "options": [
            {
                "id": 551,
                "option_text": "are",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "is",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "be",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 16
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "I ___ a cat.",
        "correct_answer": "have",
        "difficulty": "Easy",
        "explanation": "Have is auxiliary in present perfect tense.",
        "options": [
            {
                "id": 561,
                "option_text": "have",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "has",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "having",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 16
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "You ___ study hard.",
        "correct_answer": "should",
        "difficulty": "Easy",
        "explanation": "Should is a modal verb expressing obligation.",
        "options": [
            {
                "id": 571,
                "option_text": "should",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "must",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "can",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 16
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "It ___ raining outside.",
        "correct_answer": "is",
        "difficulty": "Easy",
        "explanation": "Is is used for weather conditions with 'it'.",
        "options": [
            {
                "id": 581,
                "option_text": "is",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "was",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "be",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 16
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "She ___ come tomorrow.",
        "correct_answer": "will",
        "difficulty": "Easy",
        "explanation": "Will is auxiliary for future tense.",
        "options": [
            {
                "id": 591,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "shall",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "going",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 16
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "I ___ finish this work.",
        "correct_answer": "must",
        "difficulty": "Easy",
        "explanation": "Must is a modal verb expressing necessity.",
        "options": [
            {
                "id": 601,
                "option_text": "must",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "may",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "can",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 16
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "He ___ soccer every weekend.",
        "correct_answer": "plays",
        "difficulty": "Easy",
        "explanation": "Plays is regular main verb with -s for third person singular.",
        "options": [
            {
                "id": 611,
                "option_text": "plays",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "play",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "played",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "playing",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 16
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "They ___ at home yesterday.",
        "correct_answer": "were",
        "difficulty": "Easy",
        "explanation": "Were is past form of 'to be' for they.",
        "options": [
            {
                "id": 621,
                "option_text": "were",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "was",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "been",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 16
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "I ___ finished my homework.",
        "correct_answer": "have",
        "difficulty": "Easy",
        "explanation": "Have is auxiliary in present perfect tense.",
        "options": [
            {
                "id": 631,
                "option_text": "have",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "has",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 16
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "You ___ leave early today.",
        "correct_answer": "may",
        "difficulty": "Easy",
        "explanation": "May is a modal verb expressing permission.",
        "options": [
            {
                "id": 641,
                "option_text": "may",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "must",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "can",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 16
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "She ___ a doctor.",
        "correct_answer": "is",
        "difficulty": "Easy",
        "explanation": "Is is 'to be' for third person singular.",
        "options": [
            {
                "id": 651,
                "option_text": "is",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "been",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 16
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "We ___ to school daily.",
        "correct_answer": "go",
        "difficulty": "Easy",
        "explanation": "Go is a regular main verb for habitual action.",
        "options": [
            {
                "id": 661,
                "option_text": "go",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "goes",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "went",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "going",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 16
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "He ___ come later.",
        "correct_answer": "might",
        "difficulty": "Easy",
        "explanation": "Might is a modal verb expressing possibility.",
        "options": [
            {
                "id": 671,
                "option_text": "might",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "may",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "must",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 16
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "I ___ born in 1990.",
        "correct_answer": "was",
        "difficulty": "Easy",
        "explanation": "Was is past form of 'to be' for I.",
        "options": [
            {
                "id": 681,
                "option_text": "was",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "been",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "being",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 16
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "You ___ like coffee?",
        "correct_answer": "would",
        "difficulty": "Easy",
        "explanation": "Would is a modal expressing preference.",
        "options": [
            {
                "id": 691,
                "option_text": "would",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "can",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 16
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "They ___ playing in the garden.",
        "correct_answer": "are",
        "difficulty": "Easy",
        "explanation": "Are is auxiliary in continuous tense.",
        "options": [
            {
                "id": 701,
                "option_text": "are",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "is",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "be",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 16
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "She ___ in an office.",
        "correct_answer": "works",
        "difficulty": "Medium",
        "explanation": "Works is regular main verb with -s for third person singular.",
        "options": [
            {
                "id": 711,
                "option_text": "works",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "work",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "working",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "has worked",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 16
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "I ___ been studying for two hours.",
        "correct_answer": "have",
        "difficulty": "Medium",
        "explanation": "Have is auxiliary in present perfect continuous.",
        "options": [
            {
                "id": 721,
                "option_text": "have",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "has",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 16
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "He ___ have forgotten the appointment.",
        "correct_answer": "might",
        "difficulty": "Medium",
        "explanation": "Might have is modal + auxiliary for past possibility.",
        "options": [
            {
                "id": 731,
                "option_text": "might",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "may",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "must",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 16
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "They ___ tired after the race.",
        "correct_answer": "are",
        "difficulty": "Medium",
        "explanation": "Are is 'to be' for plural subject.",
        "options": [
            {
                "id": 741,
                "option_text": "are",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "is",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "be",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 16
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "The weather ___ cold tomorrow.",
        "correct_answer": "will be",
        "difficulty": "Medium",
        "explanation": "Will be combines future auxiliary with 'to be'.",
        "options": [
            {
                "id": 751,
                "option_text": "will be",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "is",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "would be",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "being",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 16
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "You ___ not go there alone.",
        "correct_answer": "cannot",
        "difficulty": "Medium",
        "explanation": "Cannot is negative form of can.",
        "options": [
            {
                "id": 761,
                "option_text": "cannot",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "can",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "might not",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "don't can",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 16
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "I ___ understand your point.",
        "correct_answer": "do",
        "difficulty": "Medium",
        "explanation": "Do is auxiliary for emphasis in affirmative.",
        "options": [
            {
                "id": 771,
                "option_text": "do",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "does",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 16
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "She ___ not arrived yet.",
        "correct_answer": "has",
        "difficulty": "Medium",
        "explanation": "Has is auxiliary for third person singular in present perfect.",
        "options": [
            {
                "id": 781,
                "option_text": "has",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "have",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "is",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 16
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "They ___ have left early.",
        "correct_answer": "must",
        "difficulty": "Medium",
        "explanation": "Must have is modal + auxiliary for deduction.",
        "options": [
            {
                "id": 791,
                "option_text": "must",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 16
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "He ___ to apologize.",
        "correct_answer": "ought",
        "difficulty": "Medium",
        "explanation": "Ought is a modal verb expressing duty.",
        "options": [
            {
                "id": 801,
                "option_text": "ought",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "must",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 16
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "I ___ been to Paris twice.",
        "correct_answer": "have",
        "difficulty": "Hard",
        "explanation": "Have is auxiliary in present perfect.",
        "options": [
            {
                "id": 811,
                "option_text": "have",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "has",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 16
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "He ___ supposed to arrive tomorrow.",
        "correct_answer": "is",
        "difficulty": "Hard",
        "explanation": "Is is 'to be' with 'supposed to' structure.",
        "options": [
            {
                "id": 821,
                "option_text": "is",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "was",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 16
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "They ___ have been sleeping.",
        "correct_answer": "might",
        "difficulty": "Hard",
        "explanation": "Might have been is modal + perfect continuous auxiliaries.",
        "options": [
            {
                "id": 831,
                "option_text": "might",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "must",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 16
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "She ___ have been working there 10 years.",
        "correct_answer": "will",
        "difficulty": "Hard",
        "explanation": "Will have been is future perfect continuous.",
        "options": [
            {
                "id": 841,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "has",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "was",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 16
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "You ___ better leave now.",
        "correct_answer": "had",
        "difficulty": "Hard",
        "explanation": "Had in 'had better' is a semi-modal structure.",
        "options": [
            {
                "id": 851,
                "option_text": "had",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "have",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 16
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "I ___ have known better.",
        "correct_answer": "should",
        "difficulty": "Hard",
        "explanation": "Should have combines modal with perfect auxiliary.",
        "options": [
            {
                "id": 861,
                "option_text": "should",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "could",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 16
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "It ___ that he is wrong.",
        "correct_answer": "may be",
        "difficulty": "Hard",
        "explanation": "May be is modal + 'to be' for possibility.",
        "options": [
            {
                "id": 871,
                "option_text": "may be",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "might be",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "will be",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "is",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 16
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "We ___ been informed about changes.",
        "correct_answer": "have",
        "difficulty": "Hard",
        "explanation": "Have is auxiliary in passive present perfect.",
        "options": [
            {
                "id": 881,
                "option_text": "have",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "has",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "is",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 16
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "They ___ be joking.",
        "correct_answer": "must",
        "difficulty": "Hard",
        "explanation": "Must be combines modal with 'to be' for deduction.",
        "options": [
            {
                "id": 891,
                "option_text": "must",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "would",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "may",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 16
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "I ___ being followed.",
        "correct_answer": "was",
        "difficulty": "Hard",
        "explanation": "Was is auxiliary in passive continuous tense.",
        "options": [
            {
                "id": 901,
                "option_text": "was",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "have been",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "being",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 16
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "They ___ helped with the project.",
        "correct_answer": "should be",
        "difficulty": "Hard",
        "explanation": "Should be is modal + 'to be' for obligation.",
        "options": [
            {
                "id": 911,
                "option_text": "should be",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "would be",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "must be",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 16
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "You ___ to study.",
        "correct_answer": "need",
        "difficulty": "Hard",
        "explanation": "Need is a semi-modal expressing necessity.",
        "options": [
            {
                "id": 921,
                "option_text": "need",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "must",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "dare",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 16
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "He ___ not speak.",
        "correct_answer": "dares",
        "difficulty": "Hard",
        "explanation": "Dare is a semi-modal expressing courage.",
        "options": [
            {
                "id": 931,
                "option_text": "dares",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "dare",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "dared",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "daring",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 16
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "I ___ been working here since 2020.",
        "correct_answer": "have",
        "difficulty": "Hard",
        "explanation": "Have is auxiliary in present perfect continuous.",
        "options": [
            {
                "id": 941,
                "option_text": "have",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "has",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "had",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "am",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 16
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "She ___ have finished the work.",
        "correct_answer": "will",
        "difficulty": "Hard",
        "explanation": "Will have is future perfect auxiliary.",
        "options": [
            {
                "id": 951,
                "option_text": "will",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "has",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 16
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "The work ___ be done carefully.",
        "correct_answer": "must",
        "difficulty": "Hard",
        "explanation": "Must is a modal expressing necessity.",
        "options": [
            {
                "id": 961,
                "option_text": "must",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "might",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "should",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "may",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 16
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "They ___ allowed to enter without permission.",
        "correct_answer": "are not",
        "difficulty": "Hard",
        "explanation": "Are not is negative form of 'to be'.",
        "options": [
            {
                "id": 971,
                "option_text": "are not",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "is not",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "were not",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "am not",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 16
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "He ___ work here anymore.",
        "correct_answer": "does not",
        "difficulty": "Hard",
        "explanation": "Does not is negative auxiliary for third person singular.",
        "options": [
            {
                "id": 981,
                "option_text": "does not",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "do not",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "will not",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "did not",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 16
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "I ___ understand this concept.",
        "correct_answer": "do not",
        "difficulty": "Hard",
        "explanation": "Do not is negative auxiliary.",
        "options": [
            {
                "id": 991,
                "option_text": "do not",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "does not",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "will not",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "am not",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 16
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "We ___ finished the project.",
        "correct_answer": "have",
        "difficulty": "Hard",
        "explanation": "Have is auxiliary in present perfect.",
        "options": [
            {
                "id": 1001,
                "option_text": "have",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "has",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "will",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 16
    }
];

export default questions;