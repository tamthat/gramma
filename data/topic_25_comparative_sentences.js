const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "She is ___ intelligent as her brother.",
        "correct_answer": "as",
        "suggest_answer": "as",
        "explanation": "Equality Comparison: as + adjective + as (So sánh bằng)",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "This book is ___ interesting than that one.",
        "correct_answer": "more",
        "suggest_answer": "more",
        "explanation": "Comparative: more + adjective + than (So sánh hơn - tính từ dài)",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "He is the ___ student in the class.",
        "correct_answer": "tallest",
        "suggest_answer": "tallest",
        "explanation": "Superlative: the + adjective + est (So sánh nhất)",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "The more you study, the ___ grades you get.",
        "correct_answer": "better",
        "suggest_answer": "better",
        "explanation": "Double Comparison: the + comparative, the + comparative (So sánh kép)",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "This table is twice ___ wide as that one.",
        "correct_answer": "as",
        "suggest_answer": "as",
        "explanation": "Multiple Comparison: twice/three times + as + adjective + as (So sánh bội số)",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "She runs ___ fast as a cheetah.",
        "correct_answer": "as",
        "suggest_answer": "as",
        "explanation": "Equality Comparison: as + adverb + as",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "Your car is newer ___ mine.",
        "correct_answer": "than",
        "suggest_answer": "than",
        "explanation": "Comparative: adjective + er + than (So sánh hơn - tính từ ngắn)",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "This is the ___ expensive item in the store.",
        "correct_answer": "most",
        "suggest_answer": "most",
        "explanation": "Superlative: the + most + adjective (So sánh nhất - tính từ dài)",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "The faster he runs, the ___ he becomes.",
        "correct_answer": "more exhausted",
        "suggest_answer": "more exhausted",
        "explanation": "Double Comparison: the + comparative, the + comparative",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "This room is three times ___ large as the other.",
        "correct_answer": "as",
        "suggest_answer": "as",
        "explanation": "Multiple Comparison: three times + as + adjective + as",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "She is ___ clever ___ her friend.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Equality Comparison with two blanks",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "This movie is ___ thrilling than the previous one.",
        "correct_answer": "more",
        "suggest_answer": "more",
        "explanation": "Comparative with multi-syllable adjective",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "She is the ___ graceful dancer I've ever seen.",
        "correct_answer": "most",
        "suggest_answer": "most",
        "explanation": "Superlative with multi-syllable adjective",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "The more you practice, the ___ you become.",
        "correct_answer": "better",
        "suggest_answer": "better",
        "explanation": "Double Comparison: cause and effect",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "This car costs five times ___ much ___ that car.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Multiple Comparison: five times + as + much/many + as",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "He works ___ hard ___ anyone else.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Equality Comparison: as + adverb + as",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "This problem is ___ difficult ___ that one.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Equality Comparison",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "John is taller ___ Mary.",
        "correct_answer": "than",
        "suggest_answer": "than",
        "explanation": "Comparative with short adjective",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "This is the ___ beautiful garden in the city.",
        "correct_answer": "most",
        "suggest_answer": "most",
        "explanation": "Superlative with multi-syllable adjective",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "The older you get, the ___ you become.",
        "correct_answer": "wiser",
        "suggest_answer": "wiser",
        "explanation": "Double Comparison with regular pattern",
        "difficulty": "Easy",
        "topic_id": 25
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "Her performance was ___ impressive ___ anyone expected.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Equality Comparison in complex sentence",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "This painting is ___ valuable ___ the Mona Lisa.",
        "correct_answer": "more",
        "suggest_answer": "more",
        "explanation": "Comparative with proper noun reference",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "She is the ___ industrious person in our department.",
        "correct_answer": "most",
        "suggest_answer": "most",
        "explanation": "Superlative in professional context",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "The higher the mountain, the ___ the temperature.",
        "correct_answer": "lower",
        "suggest_answer": "lower",
        "explanation": "Double Comparison with inverse relationship",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "This project requires twice ___ time ___ the previous one.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Multiple Comparison with twice",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "She speaks English ___ fluently ___ a native speaker.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Equality Comparison with adverbs",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "This investment is ___ profitable ___ real estate.",
        "correct_answer": "more",
        "suggest_answer": "more",
        "explanation": "Comparative in financial context",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "He is the ___ successful entrepreneur in the industry.",
        "correct_answer": "most",
        "suggest_answer": "most",
        "explanation": "Superlative in business context",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The more careful you are, the ___ mistakes you make.",
        "correct_answer": "fewer",
        "suggest_answer": "fewer",
        "explanation": "Double Comparison with countable noun (fewer)",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "This material costs four times ___ much ___ the standard one.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Multiple Comparison: four times as much as",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "Her response was ___ thoughtful ___ his.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Equality Comparison in comparative context",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "This technology is ___ advanced ___ anything we've seen.",
        "correct_answer": "more",
        "suggest_answer": "more",
        "explanation": "Comparative with superlative reference",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "She is the ___ dedicated member of the team.",
        "correct_answer": "most",
        "suggest_answer": "most",
        "explanation": "Superlative in team context",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "The warmer the weather, the ___ people visit the beach.",
        "correct_answer": "more",
        "suggest_answer": "more",
        "explanation": "Double Comparison: cause and effect",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "This job pays ten times ___ much ___ the previous one.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Multiple Comparison: ten times as much as",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "She runs ___ quickly ___ her competitor.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Equality Comparison with adverbs in sports context",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "This strategy is ___ effective ___ traditional methods.",
        "correct_answer": "more",
        "suggest_answer": "more",
        "explanation": "Comparative in strategic context",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "He is the ___ respected leader in the organization.",
        "correct_answer": "most",
        "suggest_answer": "most",
        "explanation": "Superlative in leadership context",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "The faster the internet, the ___ data you can download.",
        "correct_answer": "more",
        "suggest_answer": "more",
        "explanation": "Double Comparison in technology context",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "This building is twice ___ tall ___ that building.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Multiple Comparison with twice",
        "difficulty": "Medium",
        "topic_id": 25
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "Her explanation was ___ clear ___ the textbook.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Equality Comparison in educational context",
        "difficulty": "Hard",
        "topic_id": 25
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "This research is ___ comprehensive ___ any previous study.",
        "correct_answer": "more",
        "suggest_answer": "more",
        "explanation": "Comparative in academic context",
        "difficulty": "Hard",
        "topic_id": 25
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "She is the ___ accomplished musician in the conservatory.",
        "correct_answer": "most",
        "suggest_answer": "most",
        "explanation": "Superlative in artistic context",
        "difficulty": "Hard",
        "topic_id": 25
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "The more resources we allocate, the ___ the outcomes.",
        "correct_answer": "better",
        "suggest_answer": "better",
        "explanation": "Double Comparison in resource management",
        "difficulty": "Hard",
        "topic_id": 25
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "This contract is worth six times ___ much ___ the original.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Multiple Comparison in legal/business context",
        "difficulty": "Hard",
        "topic_id": 25
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "She manages her team ___ effectively ___ any manager.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Equality Comparison in management context",
        "difficulty": "Hard",
        "topic_id": 25
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "This algorithm is ___ sophisticated ___ any artificial intelligence system.",
        "correct_answer": "more",
        "suggest_answer": "more",
        "explanation": "Comparative in technology context",
        "difficulty": "Hard",
        "topic_id": 25
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "He is the ___ innovative designer in the company.",
        "correct_answer": "most",
        "suggest_answer": "most",
        "explanation": "Superlative in creative industry",
        "difficulty": "Hard",
        "topic_id": 25
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "The more we invest in education, the ___ society becomes.",
        "correct_answer": "more developed",
        "suggest_answer": "more developed",
        "explanation": "Double Comparison with complex adjective phrase",
        "difficulty": "Hard",
        "topic_id": 25
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "This facility has seven times ___ capacity ___ the existing one.",
        "correct_answer": "as, as",
        "suggest_answer": "as, as",
        "explanation": "Multiple Comparison: seven times as...as",
        "difficulty": "Hard",
        "topic_id": 25
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "Which demonstrates equality comparison?",
        "correct_answer": "She is as talented as her sister.",
        "difficulty": "Easy",
        "explanation": "Equality Comparison uses as...as structure",
        "options": [
            {
                "id": 511,
                "option_text": "She is as talented as her sister.",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "She is more talented than her sister.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "She is the most talented in the family.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "She is twice as talented as her sister.",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 25
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "Which demonstrates comparative form?",
        "correct_answer": "This book is more interesting than that one.",
        "difficulty": "Easy",
        "explanation": "Comparative uses more...than or adjective+er+than",
        "options": [
            {
                "id": 521,
                "option_text": "This book is more interesting than that one.",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "This book is as interesting as that one.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "This book is the most interesting one.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "This book is interesting.",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 25
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "Which demonstrates superlative form?",
        "correct_answer": "He is the tallest player on the team.",
        "difficulty": "Easy",
        "explanation": "Superlative uses the...est or the most...adjective",
        "options": [
            {
                "id": 531,
                "option_text": "He is the tallest player on the team.",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "He is taller than other players.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "He is as tall as other players.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "He is a tall player.",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 25
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "Which demonstrates double comparison?",
        "correct_answer": "The more you practice, the better you perform.",
        "difficulty": "Easy",
        "explanation": "Double Comparison: the + comparative, the + comparative",
        "options": [
            {
                "id": 541,
                "option_text": "The more you practice, the better you perform.",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "You practice more than others.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "You are the best practitioner.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "Your practice is as good as others.",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 25
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "Which demonstrates multiple comparison?",
        "correct_answer": "This house is three times as large as that one.",
        "difficulty": "Easy",
        "explanation": "Multiple Comparison: multiplier + as + adjective + as",
        "options": [
            {
                "id": 551,
                "option_text": "This house is three times as large as that one.",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "This house is larger than that one.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "This house is the largest one.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "This house is as large as that one.",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 25
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct equality comparison:",
        "correct_answer": "She is as competent as any other candidate.",
        "difficulty": "Easy",
        "explanation": "Equality: as + adjective + as",
        "options": [
            {
                "id": 561,
                "option_text": "She is as competent as any other candidate.",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "She is more competent than any other candidate.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "She is the most competent candidate.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "She is twice as competent as other candidates.",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 25
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct comparative form:",
        "correct_answer": "This solution is more practical than the previous one.",
        "difficulty": "Easy",
        "explanation": "Comparative: more + adjective + than",
        "options": [
            {
                "id": 571,
                "option_text": "This solution is more practical than the previous one.",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "This solution is as practical as the previous one.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "This solution is the most practical one.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "This solution is practical.",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 25
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct superlative form:",
        "correct_answer": "This is the most beautiful painting in the museum.",
        "difficulty": "Easy",
        "explanation": "Superlative: the + most + adjective",
        "options": [
            {
                "id": 581,
                "option_text": "This is the most beautiful painting in the museum.",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "This is more beautiful than other paintings.",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "This is as beautiful as other paintings.",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "This is a beautiful painting.",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 25
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "The _____ you work, the _____ results you get.",
        "correct_answer": "harder, better",
        "difficulty": "Easy",
        "explanation": "Double Comparison structure",
        "options": [
            {
                "id": 591,
                "option_text": "harder, better",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "hard, good",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "hardest, best",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "more hard, more good",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 25
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "This computer is _____ times faster _____ that one.",
        "correct_answer": "twice, as",
        "difficulty": "Easy",
        "explanation": "Multiple Comparison: twice as...as",
        "options": [
            {
                "id": 601,
                "option_text": "twice, as",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "twice, than",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "two times, than",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "twice the, as",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 25
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct equality comparison:",
        "correct_answer": "Her performance is as impressive as expected.",
        "difficulty": "Medium",
        "explanation": "Equality comparison in sophisticated context",
        "options": [
            {
                "id": 611,
                "option_text": "Her performance is as impressive as expected.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "Her performance is more impressive than expected.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Her performance is the most impressive.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "Her performance is twice as impressive as expected.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 25
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the correct comparative form:",
        "correct_answer": "This methodology is more rigorous than conventional approaches.",
        "difficulty": "Medium",
        "explanation": "Comparative in academic context",
        "options": [
            {
                "id": 621,
                "option_text": "This methodology is more rigorous than conventional approaches.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "This methodology is as rigorous as conventional approaches.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "This methodology is the most rigorous approach.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "This methodology is rigorous.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 25
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct superlative form:",
        "correct_answer": "This is the most sustainable solution available.",
        "difficulty": "Medium",
        "explanation": "Superlative in environmental context",
        "options": [
            {
                "id": 631,
                "option_text": "This is the most sustainable solution available.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "This is more sustainable than other solutions.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "This is as sustainable as other solutions.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "This is a sustainable solution.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 25
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "The _____ people exercise, the _____ their health improves.",
        "correct_answer": "more regularly, more",
        "difficulty": "Medium",
        "explanation": "Double Comparison with adverb and adjective",
        "options": [
            {
                "id": 641,
                "option_text": "more regularly, more",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "regularly, better",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "most regularly, most",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "more regular, more good",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 25
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "This facility has _____ capacity _____ the previous one.",
        "correct_answer": "five times as much, as",
        "difficulty": "Medium",
        "explanation": "Multiple Comparison: five times as much as",
        "options": [
            {
                "id": 651,
                "option_text": "five times as much, as",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "five times more, than",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "five fold more, than",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "five times the, as",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 25
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Her analysis is _____ detailed _____ any report I've read.",
        "correct_answer": "as, as",
        "difficulty": "Medium",
        "explanation": "Equality Comparison in professional context",
        "options": [
            {
                "id": 661,
                "option_text": "as, as",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "more, than",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "twice as, than",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 25
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "This strategy is _____ effective _____ traditional marketing.",
        "correct_answer": "more, than",
        "difficulty": "Medium",
        "explanation": "Comparative in marketing context",
        "options": [
            {
                "id": 671,
                "option_text": "more, than",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "as, as",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "more, as",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 25
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "She is _____ qualified professional in her field.",
        "correct_answer": "the most",
        "difficulty": "Medium",
        "explanation": "Superlative in professional context",
        "options": [
            {
                "id": 681,
                "option_text": "the most",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "more",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "as",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "twice",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 25
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "The _____ resources invested, the _____ probability of success.",
        "correct_answer": "more, higher",
        "difficulty": "Medium",
        "explanation": "Double Comparison with resource allocation",
        "options": [
            {
                "id": 691,
                "option_text": "more, higher",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "much, high",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "most, highest",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "more, more high",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 25
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "This investment yields _____ returns _____ conventional bonds.",
        "correct_answer": "three times as much, as",
        "difficulty": "Medium",
        "explanation": "Multiple Comparison in investment context",
        "options": [
            {
                "id": 701,
                "option_text": "three times as much, as",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "three times more, than",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "three fold more, than",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "three times, than",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 25
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "His approach is _____ innovative _____ anything previously attempted.",
        "correct_answer": "more, than",
        "difficulty": "Hard",
        "explanation": "Comparative in innovative context",
        "options": [
            {
                "id": 711,
                "option_text": "more, than",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "as, as",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "twice as, than",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 25
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "This protocol is _____ stringent _____ international standards.",
        "correct_answer": "as, as",
        "difficulty": "Hard",
        "explanation": "Equality Comparison in regulatory context",
        "options": [
            {
                "id": 721,
                "option_text": "as, as",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "more, than",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "twice as, than",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 25
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "She is _____ accomplished entrepreneur in the sector.",
        "correct_answer": "the most",
        "difficulty": "Hard",
        "explanation": "Superlative in business context",
        "options": [
            {
                "id": 731,
                "option_text": "the most",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "more",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "as",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "twice",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 25
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "The _____ precise the measurements, the _____ reliable the predictions.",
        "correct_answer": "more, more",
        "difficulty": "Hard",
        "explanation": "Double Comparison with measurement precision",
        "options": [
            {
                "id": 741,
                "option_text": "more, more",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "precise, reliable",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "most precise, most reliable",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "more precise, more reliable",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 25
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "This software platform processes _____ data _____ its competitors.",
        "correct_answer": "eight times as much, as",
        "difficulty": "Hard",
        "explanation": "Multiple Comparison in technology context",
        "options": [
            {
                "id": 751,
                "option_text": "eight times as much, as",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "eight times more, than",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "eight fold, than",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "eight times the, as",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 25
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "Their results are _____ significant _____ previously documented cases.",
        "correct_answer": "more, than",
        "difficulty": "Hard",
        "explanation": "Comparative in research context",
        "options": [
            {
                "id": 761,
                "option_text": "more, than",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "as, as",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "twice as, than",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 25
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "He is _____ knowledgeable expert in molecular biology.",
        "correct_answer": "the most",
        "difficulty": "Hard",
        "explanation": "Superlative in scientific context",
        "options": [
            {
                "id": 771,
                "option_text": "the most",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "more",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "as",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "twice",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 25
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "The _____ complex the algorithm, the _____ computational power required.",
        "correct_answer": "more, more",
        "difficulty": "Hard",
        "explanation": "Double Comparison in computational context",
        "options": [
            {
                "id": 781,
                "option_text": "more, more",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "complex, power",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "most, most",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "more complex, more powerful",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 25
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "This infrastructure project costs _____ budget _____ similar initiatives.",
        "correct_answer": "twelve times as much, as",
        "difficulty": "Hard",
        "explanation": "Multiple Comparison in infrastructure context",
        "options": [
            {
                "id": 791,
                "option_text": "twelve times as much, as",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "twelve times more, than",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "twelve fold, than",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "twelve times the, as",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 25
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "Their contribution is _____ substantial _____ initially anticipated.",
        "correct_answer": "more, than",
        "difficulty": "Hard",
        "explanation": "Comparative in project context",
        "options": [
            {
                "id": 801,
                "option_text": "more, than",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "as, as",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "twice as, than",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 25
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "She is _____ dedicated professional on the team.",
        "correct_answer": "the most",
        "difficulty": "Hard",
        "explanation": "Superlative in team context",
        "options": [
            {
                "id": 811,
                "option_text": "the most",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "more",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "as",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "twice",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 25
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "The _____ optimized the system, the _____ efficiency gains observed.",
        "correct_answer": "more, more",
        "difficulty": "Hard",
        "explanation": "Double Comparison in optimization context",
        "options": [
            {
                "id": 821,
                "option_text": "more, more",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "optimal, efficient",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "most, most",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "more optimized, more efficient",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 25
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "This facility can accommodate _____ visitors _____ the previous venue.",
        "correct_answer": "nine times as many, as",
        "difficulty": "Hard",
        "explanation": "Multiple Comparison with countable noun",
        "options": [
            {
                "id": 831,
                "option_text": "nine times as many, as",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "nine times more, than",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "nine fold, than",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "nine times the, as",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 25
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "The pandemic's impact was _____ severe _____ anyone predicted.",
        "correct_answer": "more, than",
        "difficulty": "Hard",
        "explanation": "Comparative in crisis context",
        "options": [
            {
                "id": 841,
                "option_text": "more, than",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "as, as",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "twice as, than",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 25
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "He is _____ visionary leader in the organization.",
        "correct_answer": "the most",
        "difficulty": "Hard",
        "explanation": "Superlative in leadership context",
        "options": [
            {
                "id": 851,
                "option_text": "the most",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "more",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "as",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "twice",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 25
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "The _____ specialized the training, the _____ performance improvement.",
        "correct_answer": "more, more",
        "difficulty": "Hard",
        "explanation": "Double Comparison in training context",
        "options": [
            {
                "id": 861,
                "option_text": "more, more",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "specialized, improved",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "most, most",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "more specialized, more improved",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 25
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "This server handles _____ requests _____ conventional systems.",
        "correct_answer": "ten times as many, as",
        "difficulty": "Hard",
        "explanation": "Multiple Comparison in technology context",
        "options": [
            {
                "id": 871,
                "option_text": "ten times as many, as",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "ten times more, than",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "ten fold, than",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "ten times the, as",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 25
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Their strategy proved _____ effective _____ any previous approach.",
        "correct_answer": "more, than",
        "difficulty": "Hard",
        "explanation": "Comparative in strategic context",
        "options": [
            {
                "id": 881,
                "option_text": "more, than",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "as, as",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "twice as, than",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 25
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "She is _____ influential voice in the industry.",
        "correct_answer": "the most",
        "difficulty": "Hard",
        "explanation": "Superlative in industry context",
        "options": [
            {
                "id": 891,
                "option_text": "the most",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "more",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "as",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "twice",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 25
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "The _____ data analyzed, the _____ conclusions drawn.",
        "correct_answer": "more, more",
        "difficulty": "Hard",
        "explanation": "Double Comparison in data analysis context",
        "options": [
            {
                "id": 901,
                "option_text": "more, more",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "data, conclusions",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "most, most",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "more data, more conclusive",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 25
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "This renewable energy source produces _____ electricity _____ fossil fuels.",
        "correct_answer": "as much, as",
        "difficulty": "Hard",
        "explanation": "Equality Comparison with as much as (uncountable)",
        "options": [
            {
                "id": 911,
                "option_text": "as much, as",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "more, than",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "twice, as",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 25
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "His proposal was _____ comprehensive _____ anything submitted before.",
        "correct_answer": "more, than",
        "difficulty": "Hard",
        "explanation": "Comparative in proposal context",
        "options": [
            {
                "id": 921,
                "option_text": "more, than",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "as, as",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "twice as, than",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 25
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "She is _____ skilled technician in the entire department.",
        "correct_answer": "the most",
        "difficulty": "Hard",
        "explanation": "Superlative in technical context",
        "options": [
            {
                "id": 931,
                "option_text": "the most",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "more",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "as",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "twice",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 25
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "The _____ refined the design, the _____ user satisfaction.",
        "correct_answer": "more, more",
        "difficulty": "Hard",
        "explanation": "Double Comparison in product design context",
        "options": [
            {
                "id": 941,
                "option_text": "more, more",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "refined, satisfied",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "most, most",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "more refined, more satisfied",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 25
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "This model demonstrates _____ flexibility _____ the previous version.",
        "correct_answer": "four times as much, as",
        "difficulty": "Hard",
        "explanation": "Multiple Comparison in product comparison",
        "options": [
            {
                "id": 951,
                "option_text": "four times as much, as",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "four times more, than",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "four fold, than",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "four times the, as",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 25
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "The outcomes were _____ impressive _____ management expected.",
        "correct_answer": "more, than",
        "difficulty": "Hard",
        "explanation": "Comparative in outcome evaluation",
        "options": [
            {
                "id": 961,
                "option_text": "more, than",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "as, as",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "twice as, than",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 25
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "He is _____ brilliant researcher in the laboratory.",
        "correct_answer": "the most",
        "difficulty": "Hard",
        "explanation": "Superlative in research context",
        "options": [
            {
                "id": 971,
                "option_text": "the most",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "more",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "as",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "twice",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 25
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "The _____ transparent the communication, the _____ trust build.",
        "correct_answer": "more, more",
        "difficulty": "Hard",
        "explanation": "Double Comparison in communication and trust",
        "options": [
            {
                "id": 981,
                "option_text": "more, more",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "transparent, trust",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "most, most",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "more transparent, more trusted",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 25
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "This system stores _____ data _____ the backup system.",
        "correct_answer": "eleven times as much, as",
        "difficulty": "Hard",
        "explanation": "Multiple Comparison in data storage",
        "options": [
            {
                "id": 991,
                "option_text": "eleven times as much, as",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "eleven times more, than",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "eleven fold, than",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "eleven times the, as",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 25
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "The implementation process proved _____ challenging _____ anticipated.",
        "correct_answer": "more, than",
        "difficulty": "Hard",
        "explanation": "Comparative in project management context",
        "options": [
            {
                "id": 1001,
                "option_text": "more, than",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "as, as",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "the most, of",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "twice as, than",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 25
    }
];

export default questions;