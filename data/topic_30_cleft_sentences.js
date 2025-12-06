const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "___ is my friend that helped me yesterday.",
        "correct_answer": "It",
        "suggest_answer": "It",
        "explanation": "It-cleft: It is/was + noun/pronoun + that (Câu chẻ với 'It')",
        "difficulty": "Easy",
        "topic_id": 30
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "What I like most ___ this book is the ending.",
        "correct_answer": "about",
        "suggest_answer": "about",
        "explanation": "What-cleft: What + subject + verb + is + object (Câu chẻ với 'What')",
        "difficulty": "Easy",
        "topic_id": 30
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "It is the ___ that makes this city special.",
        "correct_answer": "culture",
        "suggest_answer": "culture",
        "explanation": "It-cleft: emphasizes the subject (culture)",
        "difficulty": "Easy",
        "topic_id": 30
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "All that matters ___ your happiness.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "All-cleft: All (that) + subject + verb + is/are (Câu chẻ với 'All')",
        "difficulty": "Easy",
        "topic_id": 30
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "___ was last night that I saw the meteor.",
        "correct_answer": "It",
        "suggest_answer": "It",
        "explanation": "It-cleft for time emphasis",
        "difficulty": "Easy",
        "topic_id": 30
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "What she wants ___ a peaceful life.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "What-cleft: What + subject + verb + is + complement",
        "difficulty": "Easy",
        "topic_id": 30
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "___ was John who broke the vase.",
        "correct_answer": "It",
        "suggest_answer": "It",
        "explanation": "It-cleft for person emphasis",
        "difficulty": "Easy",
        "topic_id": 30
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "All I can ___ is my best.",
        "correct_answer": "do",
        "suggest_answer": "do",
        "explanation": "All-cleft structure",
        "difficulty": "Easy",
        "topic_id": 30
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "It is in Paris ___ we spent our honeymoon.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "It-cleft for place emphasis",
        "difficulty": "Easy",
        "topic_id": 30
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "What ___ most important is family.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "What-cleft: What + verb + most + complement",
        "difficulty": "Easy",
        "topic_id": 30
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "___ is your dedication that impressed me most.",
        "correct_answer": "It",
        "suggest_answer": "It",
        "explanation": "It-cleft: It is + noun phrase + that (Câu chẻ phức tạp)",
        "difficulty": "Medium",
        "topic_id": 30
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "What really matters ___ staying healthy.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "What-cleft with gerund",
        "difficulty": "Medium",
        "topic_id": 30
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "It was ___ December when the snow started.",
        "correct_answer": "in",
        "suggest_answer": "in",
        "explanation": "It-cleft for time (preposition needed)",
        "difficulty": "Medium",
        "topic_id": 30
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "All that she ___ was to make you happy.",
        "correct_answer": "wanted",
        "suggest_answer": "wanted",
        "explanation": "All-cleft in past tense",
        "difficulty": "Medium",
        "topic_id": 30
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "It is ___ that causes most accidents.",
        "correct_answer": "speed/negligence/carelessness",
        "suggest_answer": "speed/negligence/carelessness",
        "explanation": "It-cleft: emphasizing the cause",
        "difficulty": "Medium",
        "topic_id": 30
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "What he told ___ was the truth.",
        "correct_answer": "you/me/them",
        "suggest_answer": "you/me/them",
        "explanation": "What-cleft with object",
        "difficulty": "Medium",
        "topic_id": 30
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "___ were his words that changed everything.",
        "correct_answer": "It",
        "suggest_answer": "It",
        "explanation": "It-cleft with plural verb 'were'",
        "difficulty": "Medium",
        "topic_id": 30
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "All I ___ is that you're safe.",
        "correct_answer": "care",
        "suggest_answer": "care",
        "explanation": "All-cleft: All (that) + subject + verb + is + clause",
        "difficulty": "Medium",
        "topic_id": 30
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "It is with great pleasure ___ we announce the winner.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "It-cleft with prepositional phrase",
        "difficulty": "Medium",
        "topic_id": 30
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "What makes you ___ is your personality.",
        "correct_answer": "special/unique",
        "suggest_answer": "special/unique",
        "explanation": "What-cleft with adjective",
        "difficulty": "Medium",
        "topic_id": 30
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "___ is not the destination but the journey that counts.",
        "correct_answer": "It",
        "suggest_answer": "It",
        "explanation": "It-cleft with contrast (Câu chẻ phức tạp nâng cao)",
        "difficulty": "Hard",
        "topic_id": 30
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "What I find most fascinating ___ ancient civilizations is their wisdom.",
        "correct_answer": "about",
        "suggest_answer": "about",
        "explanation": "What-cleft with complex object",
        "difficulty": "Hard",
        "topic_id": 30
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "It ___ through hard work that success is achieved.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "It-cleft: It + be + preposition phrase + that",
        "difficulty": "Hard",
        "topic_id": 30
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "All that ___ is that we learn from our mistakes.",
        "correct_answer": "matters",
        "suggest_answer": "matters",
        "explanation": "All-cleft in relative clause context",
        "difficulty": "Hard",
        "topic_id": 30
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "It is only when we fail ___ we truly learn.",
        "correct_answer": "that",
        "suggest_answer": "that",
        "explanation": "It-cleft with temporal clause",
        "difficulty": "Hard",
        "topic_id": 30
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "What the research ___ is that climate change is accelerating.",
        "correct_answer": "shows",
        "suggest_answer": "shows",
        "explanation": "What-cleft with that-clause complement",
        "difficulty": "Hard",
        "topic_id": 30
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "___ was the technological revolution that transformed society.",
        "correct_answer": "It",
        "suggest_answer": "It",
        "explanation": "It-cleft emphasizing cause/catalyst",
        "difficulty": "Hard",
        "topic_id": 30
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "All that can be ___ in this situation is to remain calm.",
        "correct_answer": "done",
        "suggest_answer": "done",
        "explanation": "All-cleft with passive voice",
        "difficulty": "Hard",
        "topic_id": 30
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "It is not ___ you say but how you say it that matters.",
        "correct_answer": "what",
        "suggest_answer": "what",
        "explanation": "It-cleft with contrastive structure",
        "difficulty": "Hard",
        "topic_id": 30
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "What we need most in these challenging times ___ each other.",
        "correct_answer": "is/are",
        "suggest_answer": "is/are",
        "explanation": "What-cleft with plural context",
        "difficulty": "Hard",
        "topic_id": 30
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which is a correct it-cleft sentence?",
        "correct_answer": "It is his determination that makes him successful.",
        "difficulty": "Easy",
        "explanation": "It-cleft: It is/was + focus element + that (Câu chẻ với 'It')",
        "options": [
            {
                "id": 311,
                "option_text": "It is his determination that makes him successful.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "It is his determination what makes him successful.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "It his determination that makes him successful.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "It is his determination who makes him successful.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 30
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which is a correct what-cleft sentence?",
        "correct_answer": "What I enjoy most is spending time with my family.",
        "difficulty": "Easy",
        "explanation": "What-cleft: What + clause + is/are + focus element",
        "options": [
            {
                "id": 321,
                "option_text": "What I enjoy most is spending time with my family.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "What I enjoy most are spending time with my family.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "What I enjoy most time is spending with my family.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "What I enjoy is most spending time with my family.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 30
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which is a correct all-cleft sentence?",
        "correct_answer": "All that matters is your health.",
        "difficulty": "Easy",
        "explanation": "All-cleft: All (that) + subject + verb + is/are + focus",
        "options": [
            {
                "id": 331,
                "option_text": "All that matters is your health.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "All that matters are your health.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "All matters that is your health.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "All is that matters your health.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 30
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Rewrite 'I saw your brother yesterday' as an it-cleft sentence:",
        "correct_answer": "It was your brother that I saw yesterday.",
        "difficulty": "Easy",
        "explanation": "It-cleft emphasizes 'your brother'",
        "options": [
            {
                "id": 341,
                "option_text": "It was your brother that I saw yesterday.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "It was I saw your brother yesterday.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "It was yesterday that I your brother saw.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "It was that your brother I saw yesterday.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 30
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Rewrite 'She loves reading books' as a what-cleft sentence:",
        "correct_answer": "What she loves is reading books.",
        "difficulty": "Easy",
        "explanation": "What-cleft emphasizes the object/action",
        "options": [
            {
                "id": 351,
                "option_text": "What she loves is reading books.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "What she loves books is reading.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "What she is loves reading books.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "What loves she reading books is.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 30
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Which emphasizes time?",
        "correct_answer": "It was in 1969 that humans first walked on the moon.",
        "difficulty": "Easy",
        "explanation": "It-cleft emphasizes the time element",
        "options": [
            {
                "id": 361,
                "option_text": "It was in 1969 that humans first walked on the moon.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "It was humans that in 1969 walked on the moon.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "It was 1969 in that humans walked on the moon.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "It in 1969 was that humans walked on the moon.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 30
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Which emphasizes place?",
        "correct_answer": "It is in the library where I found the book.",
        "difficulty": "Easy",
        "explanation": "It-cleft emphasizes the place element",
        "options": [
            {
                "id": 371,
                "option_text": "It is in the library where I found the book.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "It is I found the book in the library.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "It found the book in the library where.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "In the library it is where I found the book.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 30
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Which emphasizes person/agent?",
        "correct_answer": "It was the teacher who suggested the idea.",
        "difficulty": "Easy",
        "explanation": "It-cleft with 'who' emphasizes the person",
        "options": [
            {
                "id": 381,
                "option_text": "It was the teacher who suggested the idea.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "It was the teacher that suggested the idea.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "It was the teacher what suggested the idea.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "It the teacher was who suggested the idea.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 30
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Which correctly uses 'all-cleft'?",
        "correct_answer": "All I need is your support.",
        "difficulty": "Easy",
        "explanation": "All-cleft emphasizes 'your support'",
        "options": [
            {
                "id": 391,
                "option_text": "All I need is your support.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "All I need are your support.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "All is I need your support.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "All your support I need is.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 30
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Convert to what-cleft: 'She most values her independence'",
        "correct_answer": "What she most values is her independence.",
        "difficulty": "Easy",
        "explanation": "What-cleft highlights the object",
        "options": [
            {
                "id": 401,
                "option_text": "What she most values is her independence.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "What she most values are her independence.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "What most she values is independence her.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "What she values most her independence is.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 30
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct it-cleft with reason clause:",
        "correct_answer": "It is because of your hard work that you succeeded.",
        "difficulty": "Medium",
        "explanation": "It-cleft emphasizing reason (Câu chẻ phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "It is because of your hard work that you succeeded.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "It is because of your hard work you succeeded.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "It because of your hard work that you succeeded.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "It is your hard work because that you succeeded.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 30
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct what-cleft with complex clause:",
        "correct_answer": "What makes this restaurant special is the quality of ingredients.",
        "difficulty": "Medium",
        "explanation": "What-cleft with descriptive clause",
        "options": [
            {
                "id": 621,
                "option_text": "What makes this restaurant special is the quality of ingredients.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "What makes this restaurant special are the quality of ingredients.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "What makes special this restaurant is the quality of ingredients.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "What this restaurant makes special is quality of ingredients.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 30
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct all-cleft with relative clause:",
        "correct_answer": "All that we can do is hope for the best.",
        "difficulty": "Medium",
        "explanation": "All-cleft with action emphasis",
        "options": [
            {
                "id": 631,
                "option_text": "All that we can do is hope for the best.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "All that we can do are hope for the best.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "All we can do that is hope for the best.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "All can we do that is hope for best.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 30
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Convert 'They discovered oil in the desert' to it-cleft:",
        "correct_answer": "It was in the desert that they discovered oil.",
        "difficulty": "Medium",
        "explanation": "It-cleft emphasizing location",
        "options": [
            {
                "id": 641,
                "option_text": "It was in the desert that they discovered oil.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "It was oil that in the desert they discovered.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "It was they discovered oil in the desert.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "It in the desert was they discovered oil.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 30
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Which it-cleft correctly uses past tense?",
        "correct_answer": "It was his speech that won the election.",
        "difficulty": "Medium",
        "explanation": "It-cleft in past tense",
        "options": [
            {
                "id": 651,
                "option_text": "It was his speech that won the election.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "It is his speech that won the election.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "It was his speech that wins the election.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "It were his speech that won the election.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 30
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Which what-cleft correctly emphasizes action?",
        "correct_answer": "What surprises me is his dedication to the work.",
        "difficulty": "Medium",
        "explanation": "What-cleft emphasizing emotional reaction",
        "options": [
            {
                "id": 661,
                "option_text": "What surprises me is his dedication to the work.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "What surprises me are his dedication to the work.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "What me surprises is his dedication to the work.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "What surprises is me his dedication to work.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 30
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Which all-cleft correctly emphasizes requirement?",
        "correct_answer": "All that is needed is patience.",
        "difficulty": "Medium",
        "explanation": "All-cleft with passive voice and necessity",
        "options": [
            {
                "id": 671,
                "option_text": "All that is needed is patience.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "All that is needed are patience.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "All is that needed patience.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "All needed that is patience.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 30
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Convert 'My sister wrote the report' to it-cleft (emphasize person):",
        "correct_answer": "It was my sister who wrote the report.",
        "difficulty": "Medium",
        "explanation": "It-cleft with 'who' for person emphasis",
        "options": [
            {
                "id": 681,
                "option_text": "It was my sister who wrote the report.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "It was my sister that wrote the report.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "It my sister was who wrote the report.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "It was the report that my sister wrote.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 30
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Which what-cleft correctly uses gerund?",
        "correct_answer": "What they enjoy most is traveling to exotic places.",
        "difficulty": "Medium",
        "explanation": "What-cleft with gerund as focus",
        "options": [
            {
                "id": 691,
                "option_text": "What they enjoy most is traveling to exotic places.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "What they enjoy most are traveling to exotic places.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "What they most enjoy traveling is exotic places.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "What enjoy they most is traveling to exotic places.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 30
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Which it-cleft correctly emphasizes manner?",
        "correct_answer": "It is through practice that you improve your skills.",
        "difficulty": "Medium",
        "explanation": "It-cleft emphasizing manner/means",
        "options": [
            {
                "id": 701,
                "option_text": "It is through practice that you improve your skills.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "It through practice that you improve your skills.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "It is through practice you improve your skills.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "It is you improve your skills through practice.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 30
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Select the correct it-cleft with contrastive meaning:",
        "correct_answer": "It is not money but friendship that matters.",
        "difficulty": "Hard",
        "explanation": "It-cleft emphasizing contrast (Câu chẻ phức tạp nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "It is not money but friendship that matters.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "It not money but friendship that matters.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "It is money not but friendship that matters.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "It is not money that but friendship matters.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 30
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Select the correct what-cleft with complex object:",
        "correct_answer": "What the government must address is the rising cost of healthcare.",
        "difficulty": "Hard",
        "explanation": "What-cleft with complex noun phrase focus",
        "options": [
            {
                "id": 821,
                "option_text": "What the government must address is the rising cost of healthcare.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "What the government must address are the rising cost of healthcare.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "What must address the government is the rising cost of healthcare.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "What the government address must is the rising cost of healthcare.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 30
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Select the correct all-cleft with temporal clause:",
        "correct_answer": "All that we can do at this moment is wait patiently.",
        "difficulty": "Hard",
        "explanation": "All-cleft with temporal specification",
        "options": [
            {
                "id": 831,
                "option_text": "All that we can do at this moment is wait patiently.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "All that we can do at this moment are wait patiently.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "All we can do at this moment that is wait patiently.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "All can do we at this moment is wait patiently.",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 30
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Convert 'Only genuine friendship can withstand adversity' to it-cleft:",
        "correct_answer": "It is only genuine friendship that can withstand adversity.",
        "difficulty": "Hard",
        "explanation": "It-cleft with restrictive 'only'",
        "options": [
            {
                "id": 841,
                "option_text": "It is only genuine friendship that can withstand adversity.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "It only is genuine friendship that can withstand adversity.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "It is genuine friendship only that can withstand adversity.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "Only it is genuine friendship that can withstand adversity.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 30
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which what-cleft correctly emphasizes consequence?",
        "correct_answer": "What this policy will achieve is greater equality.",
        "difficulty": "Hard",
        "explanation": "What-cleft emphasizing outcome/result",
        "options": [
            {
                "id": 851,
                "option_text": "What this policy will achieve is greater equality.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "What this policy will achieve are greater equality.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "What will achieve this policy is greater equality.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "What this policy achieve will is greater equality.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 30
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which all-cleft correctly uses present perfect?",
        "correct_answer": "All that has been said is true.",
        "difficulty": "Hard",
        "explanation": "All-cleft with present perfect passive",
        "options": [
            {
                "id": 861,
                "option_text": "All that has been said is true.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "All that has been said are true.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "All that been said has is true.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "All that is been said true.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 30
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Convert 'One must maintain discipline to succeed' to it-cleft:",
        "correct_answer": "It is discipline that one must maintain to succeed.",
        "difficulty": "Hard",
        "explanation": "It-cleft with modal necessity",
        "options": [
            {
                "id": 871,
                "option_text": "It is discipline that one must maintain to succeed.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "It is discipline to succeed that one must maintain.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "It discipline is that one must maintain to succeed.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "It is one that must maintain discipline to succeed.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 30
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which what-cleft correctly uses future continuous?",
        "correct_answer": "What we will be discussing is the new business strategy.",
        "difficulty": "Hard",
        "explanation": "What-cleft with future continuous emphasis",
        "options": [
            {
                "id": 881,
                "option_text": "What we will be discussing is the new business strategy.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "What we will be discussing are the new business strategy.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "What will be we discussing is the new business strategy.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "What we discussing will be is the new business strategy.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 30
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Select the correct it-cleft with reason emphasis:",
        "correct_answer": "It is lack of communication that caused the misunderstanding.",
        "difficulty": "Hard",
        "explanation": "It-cleft emphasizing cause/reason",
        "options": [
            {
                "id": 891,
                "option_text": "It is lack of communication that caused the misunderstanding.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "It lack of communication that caused misunderstanding.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "It caused the misunderstanding that lack of communication.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "It is the misunderstanding that lack of communication caused.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 30
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which all-cleft correctly emphasizes ability?",
        "correct_answer": "All we can hope for is that they arrive safely.",
        "difficulty": "Hard",
        "explanation": "All-cleft with modal 'can'",
        "options": [
            {
                "id": 901,
                "option_text": "All we can hope for is that they arrive safely.",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All we can hope for are that they arrive safely.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "All can we hope for that they arrive safely.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "All we hope for can is that they arrive safely.",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 30
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Select the correct what-cleft with superlative:",
        "correct_answer": "What I find most remarkable is her resilience.",
        "difficulty": "Hard",
        "explanation": "What-cleft emphasizing superlative quality",
        "options": [
            {
                "id": 911,
                "option_text": "What I find most remarkable is her resilience.",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "What I find most remarkable are her resilience.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "What I most find remarkable is her resilience.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "What find I most remarkable is her resilience.",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 30
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Convert 'I appreciate your kindness above all else' to it-cleft:",
        "correct_answer": "It is your kindness that I appreciate above all else.",
        "difficulty": "Hard",
        "explanation": "It-cleft with expression of gratitude",
        "options": [
            {
                "id": 921,
                "option_text": "It is your kindness that I appreciate above all else.",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "It your kindness that I appreciate above all else.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "It above all else is your kindness that I appreciate.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "It is I appreciate your kindness above all else.",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 30
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which it-cleft correctly uses conditional past?",
        "correct_answer": "It was if I had known earlier that I would have helped.",
        "difficulty": "Hard",
        "explanation": "It-cleft with mixed conditionals",
        "options": [
            {
                "id": 931,
                "option_text": "It was if I had known earlier that I would have helped.",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "It if I had known earlier that I would have helped.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "It was that if I had known I would have helped.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "It is if I had known that I would have helped.",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 30
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which what-cleft correctly uses conditional structure?",
        "correct_answer": "What would help is if you could stay longer.",
        "difficulty": "Hard",
        "explanation": "What-cleft with conditional if-clause",
        "options": [
            {
                "id": 941,
                "option_text": "What would help is if you could stay longer.",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "What would help are if you could stay longer.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "What would help if you could stay longer.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "What if you could stay longer would help is.",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 30
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Select the correct all-cleft with infinitive emphasis:",
        "correct_answer": "All they want to do is enjoy their retirement.",
        "difficulty": "Hard",
        "explanation": "All-cleft with infinitive phrase",
        "options": [
            {
                "id": 951,
                "option_text": "All they want to do is enjoy their retirement.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "All they want to do are enjoy their retirement.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "All want to do they is enjoy their retirement.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "All they want enjoy is to do their retirement.",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 30
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Convert 'Only education can break the cycle of poverty' to it-cleft:",
        "correct_answer": "It is only education that can break the cycle of poverty.",
        "difficulty": "Hard",
        "explanation": "It-cleft with restrictive focus and possibility",
        "options": [
            {
                "id": 961,
                "option_text": "It is only education that can break the cycle of poverty.",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "It only is education that can break the cycle of poverty.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "It is education only that can break the cycle of poverty.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "Only it is education that can break the cycle of poverty.",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 30
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which what-cleft correctly uses present perfect passive?",
        "correct_answer": "What has been achieved is remarkable.",
        "difficulty": "Hard",
        "explanation": "What-cleft with present perfect passive",
        "options": [
            {
                "id": 971,
                "option_text": "What has been achieved is remarkable.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "What has been achieved are remarkable.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "What been has achieved is remarkable.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "What has achieved been is remarkable.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 30
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Select the correct it-cleft with negative emphasis:",
        "correct_answer": "It is not the outcome but the effort that counts.",
        "difficulty": "Hard",
        "explanation": "It-cleft with negation and contrast",
        "options": [
            {
                "id": 981,
                "option_text": "It is not the outcome but the effort that counts.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "It not is the outcome but the effort that counts.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "It is the outcome not but the effort that counts.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "It is not outcome but the effort that counts.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 30
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which all-cleft correctly emphasizes mutual action?",
        "correct_answer": "All we need is each other's support.",
        "difficulty": "Hard",
        "explanation": "All-cleft with reciprocal emphasis",
        "options": [
            {
                "id": 991,
                "option_text": "All we need is each other's support.",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "All we need are each other's support.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "All need we is each other's support.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "All we is each other's support that need.",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 30
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Convert 'The timely intervention prevented a catastrophe' to it-cleft:",
        "correct_answer": "It was the timely intervention that prevented a catastrophe.",
        "difficulty": "Hard",
        "explanation": "It-cleft emphasizing crucial action",
        "options": [
            {
                "id": 1001,
                "option_text": "It was the timely intervention that prevented a catastrophe.",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "It the timely intervention prevented a catastrophe.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "It prevented a catastrophe that the timely intervention.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "It was prevented that the timely intervention catastrophe.",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 30
    }
];

export default questions;