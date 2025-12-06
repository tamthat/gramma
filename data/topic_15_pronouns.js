const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "___ [I] am a teacher.",
        "correct_answer": "I",
        "suggest_answer": "me",
        "explanation": "I is a subject pronoun (personal pronoun). Use I as subject.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "The book is ___ [my].",
        "correct_answer": "mine",
        "suggest_answer": "my",
        "explanation": "Mine is a possessive pronoun. Use mine after 'is'.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "She hurt ___ [herself].",
        "correct_answer": "herself",
        "suggest_answer": "her",
        "explanation": "Herself is a reflexive pronoun. Use reflexive when subject and object are same.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "___ [This] is my favorite book.",
        "correct_answer": "This",
        "suggest_answer": "this",
        "explanation": "This is a demonstrative pronoun referring to something nearby.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "___ [Who] is calling me?",
        "correct_answer": "Who",
        "suggest_answer": "who",
        "explanation": "Who is an interrogative pronoun used to ask questions.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "The student ___ [who] studied hard passed the exam.",
        "correct_answer": "who",
        "suggest_answer": "that",
        "explanation": "Who is a relative pronoun connecting clauses.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "___ [Someone] left their bag here.",
        "correct_answer": "Someone",
        "suggest_answer": "someone",
        "explanation": "Someone is an indefinite pronoun.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "John and Mary saw ___ [each other].",
        "correct_answer": "each other",
        "suggest_answer": "themselves",
        "explanation": "Each other is a reciprocal pronoun used between two people.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "___ [Every] student must submit their assignment.",
        "correct_answer": "Every",
        "suggest_answer": "all",
        "explanation": "Every is a distributive pronoun meaning each individual.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "You are taller than ___ [me].",
        "correct_answer": "me",
        "suggest_answer": "I",
        "explanation": "Me is an object pronoun used after prepositions.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "The pen is ___ [hers], not ___ [his].",
        "correct_answer": "hers, his",
        "suggest_answer": "her, his",
        "explanation": "Hers and his are possessive pronouns used after 'is'.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "They enjoyed ___ [themselves] at the party.",
        "correct_answer": "themselves",
        "suggest_answer": "them",
        "explanation": "Themselves is a reflexive pronoun for third person plural.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "___ [That] is not what I meant.",
        "correct_answer": "That",
        "suggest_answer": "that",
        "explanation": "That is a demonstrative pronoun referring to something far.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "___ [Which] answer is correct?",
        "correct_answer": "Which",
        "suggest_answer": "which",
        "explanation": "Which is an interrogative pronoun used in questions.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "The house ___ [that] I bought is beautiful.",
        "correct_answer": "that",
        "suggest_answer": "which",
        "explanation": "That is a relative pronoun connecting clauses.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "___ [Nobody] knows the answer.",
        "correct_answer": "Nobody",
        "suggest_answer": "nobody",
        "explanation": "Nobody is an indefinite pronoun meaning not anyone.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "Peter and Sarah love ___ [one another].",
        "correct_answer": "one another",
        "suggest_answer": "each other",
        "explanation": "One another is a reciprocal pronoun (variant of each other).",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "___ [All] students are welcome.",
        "correct_answer": "All",
        "suggest_answer": "everyone",
        "explanation": "All is a distributive pronoun meaning every one.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "___ [He] gave ___ [her] a gift.",
        "correct_answer": "He, her",
        "suggest_answer": "him, her",
        "explanation": "He is subject pronoun; her is object pronoun.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "This book is ___ [ours].",
        "correct_answer": "ours",
        "suggest_answer": "our",
        "explanation": "Ours is a possessive pronoun used after 'is'.",
        "difficulty": "Easy",
        "topic_id": 15
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "I bought these clothes for ___ [myself].",
        "correct_answer": "myself",
        "suggest_answer": "me",
        "explanation": "Myself is a reflexive pronoun for first person singular.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "___ [These] problems are more difficult than ___ [those].",
        "correct_answer": "These, those",
        "suggest_answer": "this, that",
        "explanation": "These refers to plural nearby items; those refers to plural far items.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "___ [What] do you want?",
        "correct_answer": "What",
        "suggest_answer": "what",
        "explanation": "What is an interrogative pronoun asking for information.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "The book ___ [which] you mentioned is excellent.",
        "correct_answer": "which",
        "suggest_answer": "that",
        "explanation": "Which is a relative pronoun in this context.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "___ [Everyone] should respect ___ [each other].",
        "correct_answer": "Everyone, each other",
        "suggest_answer": "everyone, themselves",
        "explanation": "Everyone is indefinite; each other is reciprocal.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "___ [Anything] is possible if you believe.",
        "correct_answer": "Anything",
        "suggest_answer": "anything",
        "explanation": "Anything is an indefinite pronoun meaning any thing at all.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "The students talked with ___ [one another] after class.",
        "correct_answer": "one another",
        "suggest_answer": "each other",
        "explanation": "One another is a reciprocal pronoun for group interaction.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "___ [Either] solution will work.",
        "correct_answer": "Either",
        "suggest_answer": "either",
        "explanation": "Either is a distributive pronoun meaning one or the other.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The car ___ [whose] color is red belongs to Jim.",
        "correct_answer": "whose",
        "suggest_answer": "which",
        "explanation": "Whose is a relative pronoun showing possession.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "___ [We] are going to the cinema.",
        "correct_answer": "We",
        "suggest_answer": "us",
        "explanation": "We is a subject pronoun (first person plural).",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "The cake is ___ [theirs].",
        "correct_answer": "theirs",
        "suggest_answer": "their",
        "explanation": "Theirs is a possessive pronoun used after 'is'.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "You must help ___ [yourself].",
        "correct_answer": "yourself",
        "suggest_answer": "you",
        "explanation": "Yourself is a reflexive pronoun for second person singular.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "___ [These] ideas are innovative.",
        "correct_answer": "These",
        "suggest_answer": "this",
        "explanation": "These is a demonstrative pronoun (plural, nearby).",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "___ [Whom] did you see?",
        "correct_answer": "Whom",
        "suggest_answer": "who",
        "explanation": "Whom is interrogative object pronoun.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "___ [Someone] called while you were out.",
        "correct_answer": "Someone",
        "suggest_answer": "someone",
        "explanation": "Someone is an indefinite pronoun (singular).",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "Tom and Lisa helped ___ [one another].",
        "correct_answer": "one another",
        "suggest_answer": "themselves",
        "explanation": "One another is a reciprocal pronoun between two people.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "___ [Neither] option is satisfactory.",
        "correct_answer": "Neither",
        "suggest_answer": "neither",
        "explanation": "Neither is a distributive pronoun meaning not one or the other.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "The director ___ [whom] I met is famous.",
        "correct_answer": "whom",
        "suggest_answer": "who",
        "explanation": "Whom is a relative object pronoun.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "___ [They] gave ___ [us] the documents.",
        "correct_answer": "They, us",
        "suggest_answer": "them, we",
        "explanation": "They is subject pronoun; us is object pronoun.",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "That laptop is ___ [yours].",
        "correct_answer": "yours",
        "suggest_answer": "your",
        "explanation": "Yours is a possessive pronoun (second person).",
        "difficulty": "Medium",
        "topic_id": 15
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "She blamed ___ [herself] for the mistake.",
        "correct_answer": "herself",
        "suggest_answer": "her",
        "explanation": "Herself is a reflexive pronoun (third person singular feminine).",
        "difficulty": "Hard",
        "topic_id": 15
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "___ [Those] buildings are very old.",
        "correct_answer": "Those",
        "suggest_answer": "that",
        "explanation": "Those is a demonstrative pronoun (plural, far).",
        "difficulty": "Hard",
        "topic_id": 15
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "___ [Whose] car is parked outside?",
        "correct_answer": "Whose",
        "suggest_answer": "whose",
        "explanation": "Whose is an interrogative pronoun showing possession.",
        "difficulty": "Hard",
        "topic_id": 15
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "The person ___ [who] won the race was exhausted.",
        "correct_answer": "who",
        "suggest_answer": "which",
        "explanation": "Who is a relative subject pronoun referring to people.",
        "difficulty": "Hard",
        "topic_id": 15
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "___ [Everything] that glitters is not gold.",
        "correct_answer": "Everything",
        "suggest_answer": "everything",
        "explanation": "Everything is an indefinite pronoun meaning all things.",
        "difficulty": "Hard",
        "topic_id": 15
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "The team members support ___ [one another].",
        "correct_answer": "one another",
        "suggest_answer": "each other",
        "explanation": "One another is a reciprocal pronoun for group support.",
        "difficulty": "Hard",
        "topic_id": 15
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "___ [Both] solutions have merit.",
        "correct_answer": "Both",
        "suggest_answer": "both",
        "explanation": "Both is a distributive pronoun meaning two together.",
        "difficulty": "Hard",
        "topic_id": 15
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "The professor ___ [whose] research is groundbreaking.",
        "correct_answer": "whose",
        "suggest_answer": "who",
        "explanation": "Whose is a relative pronoun showing possession.",
        "difficulty": "Hard",
        "topic_id": 15
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "___ [It] is important to save money.",
        "correct_answer": "It",
        "suggest_answer": "it",
        "explanation": "It is a personal pronoun used as dummy subject.",
        "difficulty": "Hard",
        "topic_id": 15
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "The gift is ___ [mine].",
        "correct_answer": "mine",
        "suggest_answer": "my",
        "explanation": "Mine is a possessive pronoun (first person singular).",
        "difficulty": "Hard",
        "topic_id": 15
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "___ am a teacher.",
        "correct_answer": "I",
        "difficulty": "Easy",
        "explanation": "I is a subject pronoun (personal pronoun).",
        "options": [
            {
                "id": 511,
                "option_text": "I",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "Me",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "My",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "Mine",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 15
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "The book is ___.",
        "correct_answer": "mine",
        "difficulty": "Easy",
        "explanation": "Mine is a possessive pronoun used after 'is'.",
        "options": [
            {
                "id": 521,
                "option_text": "mine",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "my",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "I",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "me",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 15
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "She hurt ___.",
        "correct_answer": "herself",
        "difficulty": "Easy",
        "explanation": "Herself is a reflexive pronoun (third person singular).",
        "options": [
            {
                "id": 531,
                "option_text": "herself",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "her",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "she",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "hers",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 15
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "___ is my favorite book.",
        "correct_answer": "This",
        "difficulty": "Easy",
        "explanation": "This is a demonstrative pronoun.",
        "options": [
            {
                "id": 541,
                "option_text": "This",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "That",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "It",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "These",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 15
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "___ is calling me?",
        "correct_answer": "Who",
        "difficulty": "Easy",
        "explanation": "Who is an interrogative pronoun.",
        "options": [
            {
                "id": 551,
                "option_text": "Who",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "Whom",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "Whose",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "Which",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 15
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "The student ___ studied hard passed.",
        "correct_answer": "who",
        "difficulty": "Easy",
        "explanation": "Who is a relative pronoun.",
        "options": [
            {
                "id": 561,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 15
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "___ left their bag here.",
        "correct_answer": "Someone",
        "difficulty": "Easy",
        "explanation": "Someone is an indefinite pronoun.",
        "options": [
            {
                "id": 571,
                "option_text": "Someone",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "Anyone",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "Everyone",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "Nobody",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 15
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "John and Mary saw ___.",
        "correct_answer": "each other",
        "difficulty": "Easy",
        "explanation": "Each other is a reciprocal pronoun.",
        "options": [
            {
                "id": 581,
                "option_text": "each other",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "one another",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "themselves",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "each one",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 15
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "___ student must submit their assignment.",
        "correct_answer": "Every",
        "difficulty": "Easy",
        "explanation": "Every is a distributive pronoun.",
        "options": [
            {
                "id": 591,
                "option_text": "Every",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "Each",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "All",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "Both",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 15
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "You are taller than ___.",
        "correct_answer": "me",
        "difficulty": "Easy",
        "explanation": "Me is an object pronoun used after 'than'.",
        "options": [
            {
                "id": 601,
                "option_text": "me",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "I",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "my",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "mine",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 15
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "The pen is ___, not ___.",
        "correct_answer": "hers, his",
        "difficulty": "Easy",
        "explanation": "Hers and his are possessive pronouns.",
        "options": [
            {
                "id": 611,
                "option_text": "hers, his",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "her, his",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "she, he",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "hers, him",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 15
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "They enjoyed ___ at the party.",
        "correct_answer": "themselves",
        "difficulty": "Easy",
        "explanation": "Themselves is a reflexive pronoun (third person plural).",
        "options": [
            {
                "id": 621,
                "option_text": "themselves",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "them",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "they",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "theirs",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 15
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "___ is not what I meant.",
        "correct_answer": "That",
        "difficulty": "Easy",
        "explanation": "That is a demonstrative pronoun (far reference).",
        "options": [
            {
                "id": 631,
                "option_text": "That",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "This",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "It",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "Those",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 15
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "___ answer is correct?",
        "correct_answer": "Which",
        "difficulty": "Easy",
        "explanation": "Which is an interrogative pronoun.",
        "options": [
            {
                "id": 641,
                "option_text": "Which",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "What",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "Who",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "Whose",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 15
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "The house ___ I bought is beautiful.",
        "correct_answer": "that",
        "difficulty": "Easy",
        "explanation": "That is a relative pronoun.",
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
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 15
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "___ knows the answer.",
        "correct_answer": "Nobody",
        "difficulty": "Easy",
        "explanation": "Nobody is an indefinite pronoun.",
        "options": [
            {
                "id": 661,
                "option_text": "Nobody",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "Anybody",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "Somebody",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "Everyone",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 15
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Peter and Sarah love ___.",
        "correct_answer": "one another",
        "difficulty": "Easy",
        "explanation": "One another is a reciprocal pronoun.",
        "options": [
            {
                "id": 671,
                "option_text": "one another",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "each other",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "themselves",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "each one",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 15
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "___ students are welcome.",
        "correct_answer": "All",
        "difficulty": "Easy",
        "explanation": "All is a distributive pronoun.",
        "options": [
            {
                "id": 681,
                "option_text": "All",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "Every",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "Each",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "Both",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 15
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "___ gave ___ a gift.",
        "correct_answer": "He, her",
        "difficulty": "Easy",
        "explanation": "He is subject pronoun; her is object pronoun.",
        "options": [
            {
                "id": 691,
                "option_text": "He, her",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Him, she",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "He, she",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "Him, her",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 15
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "This book is ___.",
        "correct_answer": "ours",
        "difficulty": "Easy",
        "explanation": "Ours is a possessive pronoun.",
        "options": [
            {
                "id": 701,
                "option_text": "ours",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "our",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "us",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "we",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 15
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "I bought these clothes for ___.",
        "correct_answer": "myself",
        "difficulty": "Medium",
        "explanation": "Myself is a reflexive pronoun.",
        "options": [
            {
                "id": 711,
                "option_text": "myself",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "me",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "I",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "mine",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 15
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "___ problems are more difficult than ___.",
        "correct_answer": "These, those",
        "difficulty": "Medium",
        "explanation": "These refers to nearby plural; those refers to far plural.",
        "options": [
            {
                "id": 721,
                "option_text": "These, those",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "This, that",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "Those, these",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "That, this",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 15
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "___ do you want?",
        "correct_answer": "What",
        "difficulty": "Medium",
        "explanation": "What is an interrogative pronoun.",
        "options": [
            {
                "id": 731,
                "option_text": "What",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "Which",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "Who",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "Whose",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 15
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "The book ___ you mentioned is excellent.",
        "correct_answer": "which",
        "difficulty": "Medium",
        "explanation": "Which is a relative pronoun.",
        "options": [
            {
                "id": 741,
                "option_text": "which",
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
                "option_text": "who",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "whose",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 15
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "___ should respect ___.",
        "correct_answer": "Everyone, each other",
        "difficulty": "Medium",
        "explanation": "Everyone is indefinite; each other is reciprocal.",
        "options": [
            {
                "id": 751,
                "option_text": "Everyone, each other",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "Someone, one another",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "Everyone, themselves",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "Anybody, one another",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 15
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "___ is possible if you believe.",
        "correct_answer": "Anything",
        "difficulty": "Medium",
        "explanation": "Anything is an indefinite pronoun.",
        "options": [
            {
                "id": 761,
                "option_text": "Anything",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "Something",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "Everything",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "Nothing",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 15
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "The students talked with ___ after class.",
        "correct_answer": "one another",
        "difficulty": "Medium",
        "explanation": "One another is a reciprocal pronoun for groups.",
        "options": [
            {
                "id": 771,
                "option_text": "one another",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "each other",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "themselves",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "each one",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 15
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "___ solution will work.",
        "correct_answer": "Either",
        "difficulty": "Medium",
        "explanation": "Either is a distributive pronoun.",
        "options": [
            {
                "id": 781,
                "option_text": "Either",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "Neither",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "Both",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "All",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 15
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "The car ___ color is red belongs to Jim.",
        "correct_answer": "whose",
        "difficulty": "Medium",
        "explanation": "Whose is a relative pronoun showing possession.",
        "options": [
            {
                "id": 791,
                "option_text": "whose",
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
                "option_text": "that",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 15
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "___ are going to the cinema.",
        "correct_answer": "We",
        "difficulty": "Medium",
        "explanation": "We is a subject pronoun (first person plural).",
        "options": [
            {
                "id": 801,
                "option_text": "We",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "Us",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "Our",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "Ours",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 15
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "She blamed ___ for the mistake.",
        "correct_answer": "herself",
        "difficulty": "Hard",
        "explanation": "Herself is a reflexive pronoun.",
        "options": [
            {
                "id": 811,
                "option_text": "herself",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "her",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "she",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "hers",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 15
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "___ buildings are very old.",
        "correct_answer": "Those",
        "difficulty": "Hard",
        "explanation": "Those is a demonstrative pronoun (plural, far).",
        "options": [
            {
                "id": 821,
                "option_text": "Those",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "These",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "That",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "This",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 15
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "___ car is parked outside?",
        "correct_answer": "Whose",
        "difficulty": "Hard",
        "explanation": "Whose is an interrogative pronoun showing possession.",
        "options": [
            {
                "id": 831,
                "option_text": "Whose",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "Which",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "Who",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "What",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 15
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "The person ___ won the race was exhausted.",
        "correct_answer": "who",
        "difficulty": "Hard",
        "explanation": "Who is a relative subject pronoun.",
        "options": [
            {
                "id": 841,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "whom",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "which",
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
        "topic_id": 15
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "___ that glitters is not gold.",
        "correct_answer": "Everything",
        "difficulty": "Hard",
        "explanation": "Everything is an indefinite pronoun.",
        "options": [
            {
                "id": 851,
                "option_text": "Everything",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "Anything",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "Something",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "Nothing",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 15
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "The team members support ___.",
        "correct_answer": "one another",
        "difficulty": "Hard",
        "explanation": "One another is a reciprocal pronoun for group support.",
        "options": [
            {
                "id": 861,
                "option_text": "one another",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "each other",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "themselves",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "each one",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 15
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "___ solutions have merit.",
        "correct_answer": "Both",
        "difficulty": "Hard",
        "explanation": "Both is a distributive pronoun.",
        "options": [
            {
                "id": 871,
                "option_text": "Both",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Either",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "Neither",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "All",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 15
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "The professor ___ research is groundbreaking.",
        "correct_answer": "whose",
        "difficulty": "Hard",
        "explanation": "Whose is a relative pronoun showing possession.",
        "options": [
            {
                "id": 881,
                "option_text": "whose",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 15
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "___ is important to save money.",
        "correct_answer": "It",
        "difficulty": "Hard",
        "explanation": "It is a personal pronoun used as dummy subject.",
        "options": [
            {
                "id": 891,
                "option_text": "It",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "That",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "This",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "There",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 15
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "The gift is ___.",
        "correct_answer": "mine",
        "difficulty": "Hard",
        "explanation": "Mine is a possessive pronoun.",
        "options": [
            {
                "id": 901,
                "option_text": "mine",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "my",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "me",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "I",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 15
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "___ must help ___ to succeed.",
        "correct_answer": "You, yourselves",
        "difficulty": "Hard",
        "explanation": "You is subject pronoun; yourselves is reflexive.",
        "options": [
            {
                "id": 911,
                "option_text": "You, yourselves",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "You, yourself",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Your, yourself",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "You, you",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 15
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "The cake is ___.",
        "correct_answer": "theirs",
        "difficulty": "Hard",
        "explanation": "Theirs is a possessive pronoun.",
        "options": [
            {
                "id": 921,
                "option_text": "theirs",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "their",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "them",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "they",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 15
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "The pen belongs to ___ and ___.",
        "correct_answer": "him, her",
        "difficulty": "Hard",
        "explanation": "Him and her are object pronouns.",
        "options": [
            {
                "id": 931,
                "option_text": "him, her",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "he, she",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "his, hers",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "he, her",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 15
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "___ option is satisfactory.",
        "correct_answer": "Neither",
        "difficulty": "Hard",
        "explanation": "Neither is a distributive pronoun.",
        "options": [
            {
                "id": 941,
                "option_text": "Neither",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "Either",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Both",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "All",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 15
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "The director ___ I met is famous.",
        "correct_answer": "whom",
        "difficulty": "Hard",
        "explanation": "Whom is a relative object pronoun.",
        "options": [
            {
                "id": 951,
                "option_text": "whom",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "who",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "which",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "that",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 15
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "They need ___ alone to discuss.",
        "correct_answer": "themselves",
        "difficulty": "Hard",
        "explanation": "Themselves is a reflexive pronoun.",
        "options": [
            {
                "id": 961,
                "option_text": "themselves",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "them",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "they",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "theirs",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 15
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "___ did you give the letter?",
        "correct_answer": "To whom",
        "difficulty": "Hard",
        "explanation": "Whom is an interrogative object pronoun.",
        "options": [
            {
                "id": 971,
                "option_text": "To whom",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "To who",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "Who",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "Whom",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 15
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "The students ___ passed exam are talented.",
        "correct_answer": "who",
        "difficulty": "Hard",
        "explanation": "Who is a relative subject pronoun.",
        "options": [
            {
                "id": 981,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "whom",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "which",
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
        "topic_id": 15
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "___ is knocking at the door?",
        "correct_answer": "Who",
        "difficulty": "Hard",
        "explanation": "Who is an interrogative subject pronoun.",
        "options": [
            {
                "id": 991,
                "option_text": "Who",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Whom",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Whose",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "Which",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 15
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "The colleagues ___ recommended this are reliable.",
        "correct_answer": "who",
        "difficulty": "Hard",
        "explanation": "Who is a relative subject pronoun.",
        "options": [
            {
                "id": 1001,
                "option_text": "who",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "whom",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "which",
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
        "topic_id": 15
    }
];

export default questions;