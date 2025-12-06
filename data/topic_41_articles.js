const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "I saw ___ beautiful cat in the park.",
        "correct_answer": "a",
        "suggest_answer": "a",
        "explanation": "A + consonant sound (Mạo Từ Bất Định)",
        "difficulty": "Easy",
        "topic_id": 41
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "___ apple ___ day keeps ___ doctor away.",
        "correct_answer": "An / a / the",
        "suggest_answer": "An / a / the",
        "explanation": "An + vowel sound, a + consonant, the + xác định",
        "difficulty": "Easy",
        "topic_id": 41
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "She is ___ teacher.",
        "correct_answer": "a",
        "suggest_answer": "a",
        "explanation": "A + job/profession",
        "difficulty": "Easy",
        "topic_id": 41
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "___ dog is ___ loyal animal.",
        "correct_answer": "The / a",
        "suggest_answer": "The / a",
        "explanation": "The + xác định, a + bất định",
        "difficulty": "Easy",
        "topic_id": 41
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "I live in ___ apartment.",
        "correct_answer": "an",
        "suggest_answer": "an",
        "explanation": "An + vowel sound (a)",
        "difficulty": "Easy",
        "topic_id": 41
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "___ sun rises in ___ east.",
        "correct_answer": "The / the",
        "suggest_answer": "The / the",
        "explanation": "The + unique things (mạo từ xác định)",
        "difficulty": "Easy",
        "topic_id": 41
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "I like ___ cats and ___ dogs.",
        "correct_answer": "zero article / zero article",
        "suggest_answer": "zero / zero",
        "explanation": "Zero article - chỉ loại vật chung (Không dùng mạo từ)",
        "difficulty": "Easy",
        "topic_id": 41
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "She plays ___ piano and ___ guitar.",
        "correct_answer": "the / the",
        "suggest_answer": "the / the",
        "explanation": "The + nhạc cụ",
        "difficulty": "Easy",
        "topic_id": 41
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "___ Queen Elizabeth was ___ famous monarch.",
        "correct_answer": "The / a",
        "suggest_answer": "The / a",
        "explanation": "The + tên người xác định, a + chỉ định tính chất",
        "difficulty": "Easy",
        "topic_id": 41
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "I need ___ information about ___ course.",
        "correct_answer": "some / the",
        "suggest_answer": "some / the",
        "explanation": "Information (uncountable), the + xác định",
        "difficulty": "Easy",
        "topic_id": 41
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "___ United States is located in North America.",
        "correct_answer": "The",
        "suggest_answer": "The",
        "explanation": "The + tên nước (Mạo Từ Xác Định phức tạp)",
        "difficulty": "Medium",
        "topic_id": 41
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "I visited ___ Paris and ___ Berlin ___ year.",
        "correct_answer": "zero / zero / last",
        "suggest_answer": "zero / zero / last",
        "explanation": "Zero article - tên thành phố (không phải lúc nào cũng dùng the)",
        "difficulty": "Medium",
        "topic_id": 41
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "___ Eiffel Tower is in ___ France.",
        "correct_answer": "The / zero",
        "suggest_answer": "The / zero",
        "explanation": "The + tên công trình nổi tiếng, zero + tên quốc gia",
        "difficulty": "Medium",
        "topic_id": 41
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "He is ___ engineer working for ___ company.",
        "correct_answer": "an / a",
        "suggest_answer": "an / a",
        "explanation": "An + vowel, a + consonant",
        "difficulty": "Medium",
        "topic_id": 41
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "___ homework was difficult, so she asked for ___ help.",
        "correct_answer": "The / zero",
        "suggest_answer": "The / zero",
        "explanation": "The + homework (specific), zero + help (uncountable, chung)",
        "difficulty": "Medium",
        "topic_id": 41
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "I want ___ cup of ___ coffee.",
        "correct_answer": "a / zero",
        "suggest_answer": "a / zero",
        "explanation": "A + cup (countable), zero + coffee (uncountable)",
        "difficulty": "Medium",
        "topic_id": 41
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "___ nature provides ___ beauty for everyone.",
        "correct_answer": "zero / zero",
        "suggest_answer": "zero / zero",
        "explanation": "Zero article - abstract nouns (tính từ trừu tượng)",
        "difficulty": "Medium",
        "topic_id": 41
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "___ majority of people like ___ chocolate.",
        "correct_answer": "The / zero",
        "suggest_answer": "The / zero",
        "explanation": "The + majority, zero + chocolate (uncountable)",
        "difficulty": "Medium",
        "topic_id": 41
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "He suffered from ___ heart disease but ___ doctors helped him.",
        "correct_answer": "zero / the",
        "suggest_answer": "zero / the",
        "explanation": "Zero + disease (uncountable), the + specific doctors",
        "difficulty": "Medium",
        "topic_id": 41
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "___ children usually enjoy ___ school.",
        "correct_answer": "zero / zero",
        "suggest_answer": "zero / zero",
        "explanation": "Zero article - general statements (mệnh đề chung)",
        "difficulty": "Medium",
        "topic_id": 41
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "She is ___ only person who knows ___ secret.",
        "correct_answer": "the / the",
        "suggest_answer": "the / the",
        "explanation": "The + only/first/last, the + specific secret (Mạo Từ Xác Định nâng cao)",
        "difficulty": "Hard",
        "topic_id": 41
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "___ Great Wall of China is ___ longest wall in ___ world.",
        "correct_answer": "The / the / the",
        "suggest_answer": "The / the / the",
        "explanation": "The + proper noun, the + superlative",
        "difficulty": "Hard",
        "topic_id": 41
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "___ music is ___ universal language.",
        "correct_answer": "zero / a",
        "suggest_answer": "zero / a",
        "explanation": "Zero + abstract noun, a + predicate nominative",
        "difficulty": "Hard",
        "topic_id": 41
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "She went to ___ university to study ___ medicine.",
        "correct_answer": "the / zero",
        "suggest_answer": "the / zero",
        "explanation": "The + specific university, zero + subject",
        "difficulty": "Hard",
        "topic_id": 41
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "___ life is precious, and we should live it fully.",
        "correct_answer": "zero",
        "suggest_answer": "zero",
        "explanation": "Zero article - abstract noun (sự sống - khái niệm trừu tượng)",
        "difficulty": "Hard",
        "topic_id": 41
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "She has ___ degree in ___ English literature.",
        "correct_answer": "a / zero",
        "suggest_answer": "a / zero",
        "explanation": "A + degree (countable), zero + subject (English literature)",
        "difficulty": "Hard",
        "topic_id": 41
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "___ Internet has changed ___ way people communicate.",
        "correct_answer": "The / the",
        "suggest_answer": "The / the",
        "explanation": "The + unique thing (Internet), the + specific way",
        "difficulty": "Hard",
        "topic_id": 41
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "___ first prize winner received ___ award.",
        "correct_answer": "The / an",
        "suggest_answer": "The / an",
        "explanation": "The + first (ordinal), an + award",
        "difficulty": "Hard",
        "topic_id": 41
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "___ poverty is ___ serious issue in many countries.",
        "correct_answer": "zero / a",
        "suggest_answer": "zero / a",
        "explanation": "Zero + abstract noun, a + issue",
        "difficulty": "Hard",
        "topic_id": 41
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "I have ___ European and ___ Asian friend.",
        "correct_answer": "a / an",
        "suggest_answer": "a / an",
        "explanation": "A + consonant sound (E-), an + vowel sound (A-)",
        "difficulty": "Hard",
        "topic_id": 41
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'a' vs 'an'?",
        "correct_answer": "I saw a dog and an owl in the forest.",
        "difficulty": "Easy",
        "explanation": "A + consonant sound, an + vowel sound (Mạo Từ Bất Định)",
        "options": [
            {
                "id": 311,
                "option_text": "I saw a dog and an owl in the forest.",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "I saw an dog and a owl in the forest.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "I saw a dog and a owl in the forest.",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "I saw an dog and an owl in the forest.",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 41
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of 'the'?",
        "correct_answer": "The sun sets in the west every day.",
        "difficulty": "Easy",
        "explanation": "The + unique things (Mạo Từ Xác Định)",
        "options": [
            {
                "id": 321,
                "option_text": "The sun sets in the west every day.",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "A sun sets in a west every day.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "Sun sets in west every day.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "An sun sets in an west every day.",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 41
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of zero article?",
        "correct_answer": "Birds can fly and fish can swim.",
        "difficulty": "Easy",
        "explanation": "Zero article - chỉ loại vật chung (Không dùng mạo từ)",
        "options": [
            {
                "id": 331,
                "option_text": "Birds can fly and fish can swim.",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "A birds can fly and a fish can swim.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "The birds can fly and the fish can swim.",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "An birds can fly and an fish can swim.",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 41
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use of articles with instruments?",
        "correct_answer": "She plays the violin and I play the guitar.",
        "difficulty": "Easy",
        "explanation": "The + musical instruments",
        "options": [
            {
                "id": 341,
                "option_text": "She plays the violin and I play the guitar.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "She plays a violin and I play a guitar.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "She plays violin and I play guitar.",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "She plays an violin and I play an guitar.",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 41
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "She is a doctor, and he is an architect.",
        "difficulty": "Easy",
        "explanation": "A/an + profession",
        "options": [
            {
                "id": 351,
                "option_text": "She is a doctor, and he is an architect.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "She is the doctor, and he is the architect.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "She is doctor, and he is architect.",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "She is an doctor, and he is a architect.",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 41
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "I like coffee and tea, but I prefer the tea that you make.",
        "difficulty": "Easy",
        "explanation": "Zero + general, the + specific",
        "options": [
            {
                "id": 361,
                "option_text": "I like coffee and tea, but I prefer the tea that you make.",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "I like the coffee and the tea, but I prefer tea that you make.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "I like a coffee and a tea, but I prefer a tea that you make.",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "I like an coffee and an tea, but I prefer an tea that you make.",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 41
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The United States is a large country.",
        "difficulty": "Easy",
        "explanation": "The + plural nouns (tên nước)",
        "options": [
            {
                "id": 371,
                "option_text": "The United States is a large country.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "United States is an large country.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "A United States is the large country.",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "An United States is a large country.",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 41
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "She went to the hospital because she had an accident.",
        "difficulty": "Easy",
        "explanation": "The + specific place, an + vowel sound",
        "options": [
            {
                "id": 381,
                "option_text": "She went to the hospital because she had an accident.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "She went to hospital because she had a accident.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "She went to a hospital because she had the accident.",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "She went to an hospital because she had a accident.",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 41
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "Money cannot buy happiness, but it helps.",
        "difficulty": "Easy",
        "explanation": "Zero article - uncountable nouns",
        "options": [
            {
                "id": 391,
                "option_text": "Money cannot buy happiness, but it helps.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "A money cannot buy a happiness, but it helps.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "The money cannot buy the happiness, but it helps.",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "An money cannot buy an happiness, but it helps.",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 41
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct sentence:",
        "correct_answer": "The first time I saw the movie, I was impressed.",
        "difficulty": "Easy",
        "explanation": "The + ordinal numbers (first, second, etc.)",
        "options": [
            {
                "id": 401,
                "option_text": "The first time I saw the movie, I was impressed.",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "A first time I saw a movie, I was impressed.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "First time I saw movie, I was impressed.",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "An first time I saw an movie, I was impressed.",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 41
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "She is a unique person and the best friend I've ever had.",
        "difficulty": "Medium",
        "explanation": "A + unique (sounds like consonant), the + superlative (Mạo Từ phức tạp)",
        "options": [
            {
                "id": 611,
                "option_text": "She is a unique person and the best friend I've ever had.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "She is an unique person and a best friend I've ever had.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "She is the unique person and the best friend I've ever had.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "She is a unique person and best friend I've ever had.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 41
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "The Great Wall of China is the longest wall in the world.",
        "difficulty": "Medium",
        "explanation": "The + proper nouns, the + superlative",
        "options": [
            {
                "id": 621,
                "option_text": "The Great Wall of China is the longest wall in the world.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "Great Wall of China is longest wall in world.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "A Great Wall of China is a longest wall in a world.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "The Great Wall of the China is the longest wall in the the world.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 41
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Education is important, and the education system needs improvement.",
        "difficulty": "Medium",
        "explanation": "Zero + abstract, the + specific",
        "options": [
            {
                "id": 631,
                "option_text": "Education is important, and the education system needs improvement.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "The education is important, and education system needs improvement.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "A education is important, and a education system needs improvement.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "An education is important, and an education system needs improvement.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 41
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "I need a new computer to do the work efficiently.",
        "difficulty": "Medium",
        "explanation": "A + countable, the + specific",
        "options": [
            {
                "id": 641,
                "option_text": "I need a new computer to do the work efficiently.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "I need the new computer to do work efficiently.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "I need an new computer to do the work efficiently.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "I need a new computer to do a work efficiently.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 41
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Cats are animals, but the cat you saw was unusual.",
        "difficulty": "Medium",
        "explanation": "Zero + general, the + specific",
        "options": [
            {
                "id": 651,
                "option_text": "Cats are animals, but the cat you saw was unusual.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "The cats are the animals, but a cat you saw was unusual.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "A cats are a animals, but the cat you saw was unusual.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "An cats are an animals, but an cat you saw was unusual.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 41
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "He suffered from a rare disease but the doctor helped him recover.",
        "difficulty": "Medium",
        "explanation": "A + countable, the + specific",
        "options": [
            {
                "id": 661,
                "option_text": "He suffered from a rare disease but the doctor helped him recover.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "He suffered from the rare disease but a doctor helped him recover.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "He suffered from an rare disease but the doctor helped him recover.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "He suffered from disease but doctor helped him recover.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 41
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Love is beautiful, and the love between them was evident.",
        "difficulty": "Medium",
        "explanation": "Zero + abstract, the + specific",
        "options": [
            {
                "id": 671,
                "option_text": "Love is beautiful, and the love between them was evident.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "A love is beautiful, and a love between them was evident.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "The love is beautiful, and love between them was evident.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "An love is beautiful, and an love between them was evident.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 41
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "He is an honest man and the most trustworthy person I know.",
        "difficulty": "Medium",
        "explanation": "An + vowel sound (h is silent), the + superlative",
        "options": [
            {
                "id": 681,
                "option_text": "He is an honest man and the most trustworthy person I know.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "He is a honest man and a most trustworthy person I know.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "He is the honest man and the most trustworthy person I know.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "He is an honest man and most trustworthy person I know.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 41
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "There is a book on the table about the history of Europe.",
        "difficulty": "Medium",
        "explanation": "A + countable, the + specific place, the + history of",
        "options": [
            {
                "id": 691,
                "option_text": "There is a book on the table about the history of Europe.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "There is the book on table about history of Europe.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "There is an book on the table about a history of Europe.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "There is a book on a table about an history of Europe.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 41
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct form:",
        "correct_answer": "Patience is a virtue, and the patience she showed was remarkable.",
        "difficulty": "Medium",
        "explanation": "Zero + abstract concept, the + specific",
        "options": [
            {
                "id": 701,
                "option_text": "Patience is a virtue, and the patience she showed was remarkable.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "A patience is a virtue, and a patience she showed was remarkable.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "The patience is a virtue, and patience she showed was remarkable.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "An patience is an virtue, and the patience she showed was remarkable.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 41
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct article use with superlatives?",
        "correct_answer": "She is the smartest student in the class.",
        "difficulty": "Hard",
        "explanation": "The + superlative adjectives (Mạo Từ Xác Định nâng cao)",
        "options": [
            {
                "id": 811,
                "option_text": "She is the smartest student in the class.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "She is a smartest student in a class.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "She is smartest student in class.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "She is an smartest student in the class.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 41
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct article use with 'H'?",
        "correct_answer": "She is an honest person with an unusual talent.",
        "difficulty": "Hard",
        "explanation": "An + vowel sound (h is silent in 'honest', 'unusual')",
        "options": [
            {
                "id": 821,
                "option_text": "She is an honest person with an unusual talent.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "She is a honest person with a unusual talent.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "She is the honest person with the unusual talent.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 824,
                "option_text": "She is an honest person with a unusual talent.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 41
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct article use with uncountable nouns?",
        "correct_answer": "Information is valuable, but the information he provided was incomplete.",
        "difficulty": "Hard",
        "explanation": "Zero + uncountable (general), the + specific",
        "options": [
            {
                "id": 831,
                "option_text": "Information is valuable, but the information he provided was incomplete.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "An information is valuable, but an information he provided was incomplete.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "The information is valuable, but information he provided was incomplete.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "A information is valuable, but a information he provided was incomplete.",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 41
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use with proper nouns?",
        "correct_answer": "The Thames flows through London, and the Thames is famous.",
        "difficulty": "Hard",
        "explanation": "The + proper nouns (rivers, mountains, etc.)",
        "options": [
            {
                "id": 841,
                "option_text": "The Thames flows through London, and the Thames is famous.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "Thames flows through the London, and Thames is famous.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "A Thames flows through London, and a Thames is famous.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "An Thames flows through an London, and an Thames is famous.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 41
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use with 'another' vs 'the other'?",
        "correct_answer": "She bought a dress, and then bought another dress and the other colors.",
        "difficulty": "Hard",
        "explanation": "A/an + countable, another + countable, the other + specific",
        "options": [
            {
                "id": 851,
                "option_text": "She bought a dress, and then bought another dress and the other colors.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "She bought the dress, and then bought the dress and other colors.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "She bought a dress, and then bought the dress and a colors.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "She bought an dress, and then bought another dress and another colors.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 41
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use with abstract nouns?",
        "correct_answer": "Beauty fades, but the beauty in nature remains eternal.",
        "difficulty": "Hard",
        "explanation": "Zero + abstract (general), the + specific abstract",
        "options": [
            {
                "id": 861,
                "option_text": "Beauty fades, but the beauty in nature remains eternal.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "A beauty fades, but a beauty in nature remains eternal.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "The beauty fades, but beauty in nature remains eternal.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "An beauty fades, but an beauty in nature remains eternal.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 41
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use with meals?",
        "correct_answer": "I had breakfast, and then I cooked the dinner for my family.",
        "difficulty": "Hard",
        "explanation": "Zero + meal (general), the + specific meal",
        "options": [
            {
                "id": 871,
                "option_text": "I had breakfast, and then I cooked the dinner for my family.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "I had the breakfast, and then I cooked dinner for my family.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "I had a breakfast, and then I cooked a dinner for my family.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "I had an breakfast, and then I cooked an dinner for my family.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 41
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use with 'BBC' vs 'radio'?",
        "correct_answer": "I listened to the BBC on the radio yesterday.",
        "difficulty": "Hard",
        "explanation": "The + BBC (specific), the + radio (as medium)",
        "options": [
            {
                "id": 881,
                "option_text": "I listened to the BBC on the radio yesterday.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "I listened to BBC on radio yesterday.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "I listened to a BBC on a radio yesterday.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "I listened to the BBC on radio yesterday.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 41
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use with 'both' and 'each'?",
        "correct_answer": "Both students and each person received a certificate and the award.",
        "difficulty": "Hard",
        "explanation": "Zero + both/each (general), a + countable, the + specific",
        "options": [
            {
                "id": 891,
                "option_text": "Both students and each person received a certificate and the award.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "The both students and the each person received the certificate and award.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "A both students and a each person received a certificate and a award.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "Both the students and each the person received certificate and award.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 41
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "A/an for new/unknown; the for known/specific; zero for general/uncountable",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Mạo Từ",
        "options": [
            {
                "id": 901,
                "option_text": "A/an for new/unknown; the for known/specific; zero for general/uncountable",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All articles are used interchangeably",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Only 'the' is used in English",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Articles are optional in modern English",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 41
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which shows the rule for 'a' vs 'an'?",
        "correct_answer": "A before consonant sounds; an before vowel sounds",
        "difficulty": "Hard",
        "explanation": "A/an dựa trên âm thanh (sound), không phải chữ cái",
        "options": [
            {
                "id": 911,
                "option_text": "A before consonant sounds; an before vowel sounds",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "A before consonant letters; an before vowel letters",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Both are used without distinction",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "Only 'a' is used in modern English",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 41
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which shows when to use 'the'?",
        "correct_answer": "With unique things, superlatives, rivers, mountains, and specific nouns",
        "difficulty": "Hard",
        "explanation": "Các trường hợp dùng 'the'",
        "options": [
            {
                "id": 921,
                "option_text": "With unique things, superlatives, rivers, mountains, and specific nouns",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "Never with proper nouns",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "Only with uncountable nouns",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "'The' is rarely used in English",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 41
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which shows when to use zero article?",
        "correct_answer": "With plural countables, uncountables, and abstract nouns when general",
        "difficulty": "Hard",
        "explanation": "Các trường hợp không dùng mạo từ",
        "options": [
            {
                "id": 931,
                "option_text": "With plural countables, uncountables, and abstract nouns when general",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "With all singular countables",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "Zero article is never used",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "Only in questions and negatives",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 41
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct article use in sequence?",
        "correct_answer": "I saw a movie, and the movie was excellent, and I enjoyed the ending.",
        "difficulty": "Hard",
        "explanation": "Trình tự: first mention (a), then specific (the)",
        "options": [
            {
                "id": 941,
                "option_text": "I saw a movie, and the movie was excellent, and I enjoyed the ending.",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "I saw the movie, and a movie was excellent, and I enjoyed an ending.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "I saw a movie, and a movie was excellent, and I enjoyed an ending.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "I saw movie, and movie was excellent, and I enjoyed ending.",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 41
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which shows the most common error with articles?",
        "correct_answer": "Using 'a' with singular countables that have already been mentioned",
        "difficulty": "Hard",
        "explanation": "Lỗi phổ biến nhất",
        "options": [
            {
                "id": 951,
                "option_text": "Using 'a' with singular countables that have already been mentioned",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "Using 'the' with all proper nouns",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "Never using 'the' with rivers",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "Using zero article with all countables",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 41
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which pair shows INCORRECT article use?",
        "correct_answer": "I bought a book yesterday. A book I bought is very interesting. = WRONG (should be 'the')",
        "difficulty": "Hard",
        "explanation": "Sai - dùng 'a' lần hai",
        "options": [
            {
                "id": 961,
                "option_text": "I bought a book yesterday. A book I bought is very interesting. = WRONG (should be 'the')",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "I bought a book yesterday. The book I bought is very interesting. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "I like books and the books are interesting. = CORRECT",
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
        "topic_id": 41
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which shows 'the' with comparatives correctly?",
        "correct_answer": "The more you practice, the better you become.",
        "difficulty": "Hard",
        "explanation": "The + comparative...the + comparative (cấu trúc)",
        "options": [
            {
                "id": 971,
                "option_text": "The more you practice, the better you become.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "More you practice, better you become.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "A more you practice, an better you become.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "More the you practice, better the you become.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 41
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use with time expressions?",
        "correct_answer": "I go to the bank in the morning and the library in the afternoon.",
        "difficulty": "Hard",
        "explanation": "The + morning/afternoon (specific times)",
        "options": [
            {
                "id": 981,
                "option_text": "I go to the bank in the morning and the library in the afternoon.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "I go to bank in morning and library in afternoon.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "I go to a bank in a morning and a library in an afternoon.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "I go to the bank in morning and the library in afternoon.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 41
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which shows correct use with nationalities?",
        "correct_answer": "The British like tea, and the Americans prefer coffee.",
        "difficulty": "Hard",
        "explanation": "The + nationality (plural adjective used as noun)",
        "options": [
            {
                "id": 991,
                "option_text": "The British like tea, and the Americans prefer coffee.",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "British like tea, and Americans prefer coffee.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "A British like tea, and an Americans prefer coffee.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "The a British like tea, and the an Americans prefer coffee.",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 41
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Articles depend on whether nouns are countable/uncountable and known/unknown",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Mạo Từ",
        "options": [
            {
                "id": 1001,
                "option_text": "Articles depend on whether nouns are countable/uncountable and known/unknown",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "All nouns require articles",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Articles are no longer important in English",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Rules for articles are arbitrary and unpredictable",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 41
    }
];

export default questions;