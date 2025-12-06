const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "She has a ___ [beautiful] dress.",
        "correct_answer": "beautiful",
        "suggest_answer": "beautiful",
        "explanation": "Beautiful is a descriptive adjective describing the quality of the dress.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "I saw a ___ [big] red ___ [car].",
        "correct_answer": "big, car",
        "suggest_answer": "big, car",
        "explanation": "Big (size) comes before red (color) following OSASCOMP order.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "This is a ___ [tall] building.",
        "correct_answer": "tall",
        "suggest_answer": "tall",
        "explanation": "Tall is a descriptive adjective describing size.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "John is ___ [taller] than Mary.",
        "correct_answer": "taller",
        "suggest_answer": "tall",
        "explanation": "Taller is the comparative form for one-syllable adjectives (tall + er).",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "This is the ___ [tallest] building in the city.",
        "correct_answer": "tallest",
        "suggest_answer": "tall",
        "explanation": "Tallest is the superlative form for one-syllable adjectives (tall + est).",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "The weather is ___ [cold] today.",
        "correct_answer": "cold",
        "suggest_answer": "cold",
        "explanation": "Cold is a descriptive adjective describing temperature.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "She is ___ [more beautiful] than her sister.",
        "correct_answer": "more beautiful",
        "suggest_answer": "beautiful",
        "explanation": "More beautiful is comparative for multi-syllable adjectives.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "He is the ___ [most intelligent] student in class.",
        "correct_answer": "most intelligent",
        "suggest_answer": "intelligent",
        "explanation": "Most intelligent is superlative for multi-syllable adjectives.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "I have a ___ [small] white ___ [dog].",
        "correct_answer": "small, dog",
        "suggest_answer": "small, dog",
        "explanation": "Small (size) comes before white (color) in OSASCOMP order.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "The food is ___ [delicious].",
        "correct_answer": "delicious",
        "suggest_answer": "delicious",
        "explanation": "Delicious is a descriptive adjective describing taste.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "She is ___ [happier] than before.",
        "correct_answer": "happier",
        "suggest_answer": "happy",
        "explanation": "Happier is comparative (happy → happier, change y to i before er).",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "It was the ___ [worst] day of my life.",
        "correct_answer": "worst",
        "suggest_answer": "bad",
        "explanation": "Worst is irregular superlative of 'bad'.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "He is ___ [good] at mathematics.",
        "correct_answer": "good",
        "suggest_answer": "good",
        "explanation": "Good is a descriptive adjective describing ability.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "The movie is ___ [interesting].",
        "correct_answer": "interesting",
        "suggest_answer": "interesting",
        "explanation": "Interesting is a descriptive adjective describing quality.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "I have three ___ [round] green ___ [apples].",
        "correct_answer": "round, apples",
        "suggest_answer": "round, apples",
        "explanation": "Round (shape) comes before green (color) in OSASCOMP.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "She is ___ [better] than last year.",
        "correct_answer": "better",
        "suggest_answer": "good",
        "explanation": "Better is irregular comparative of 'good'.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "That is the ___ [best] solution.",
        "correct_answer": "best",
        "suggest_answer": "good",
        "explanation": "Best is irregular superlative of 'good'.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "The room is very ___ [spacious].",
        "correct_answer": "spacious",
        "suggest_answer": "spacious",
        "explanation": "Spacious is a descriptive adjective describing size/space.",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "I need a ___ [comfortable] blue ___ [sofa].",
        "correct_answer": "comfortable, sofa",
        "suggest_answer": "comfortable, sofa",
        "explanation": "Comfortable (opinion/quality) comes before blue (color).",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "He is ___ [faster] than his brother.",
        "correct_answer": "faster",
        "suggest_answer": "fast",
        "explanation": "Faster is comparative (fast + er, double t before adding er).",
        "difficulty": "Easy",
        "topic_id": 17
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "She wore a ___ [lovely] old ___ [French] silk ___ [dress].",
        "correct_answer": "lovely, old, French, silk, dress",
        "suggest_answer": "lovely, old, French, silk, dress",
        "explanation": "Order: opinion (lovely), age (old), origin (French), material (silk).",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "The table is ___ [expensive] than the chair.",
        "correct_answer": "more expensive",
        "suggest_answer": "expensive",
        "explanation": "More expensive is comparative for multi-syllable adjectives.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "He bought three ___ [red] wooden ___ [boxes].",
        "correct_answer": "red, wooden, boxes",
        "suggest_answer": "red, wooden, boxes",
        "explanation": "Color (red) comes before material (wooden) in OSASCOMP.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "This is the ___ [most beautiful] city I've seen.",
        "correct_answer": "most beautiful",
        "suggest_answer": "beautiful",
        "explanation": "Most beautiful is superlative for multi-syllable adjectives.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "She is ___ [shorter] than Tom.",
        "correct_answer": "shorter",
        "suggest_answer": "short",
        "explanation": "Shorter is comparative (short + er, double t before adding er).",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "I have a ___ [large] square ___ [Italian] marble ___ [table].",
        "correct_answer": "large, square, Italian, marble, table",
        "suggest_answer": "large, square, Italian, marble, table",
        "explanation": "Size (large), shape (square), origin (Italian), material (marble).",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "This book is ___ [more interesting] than that one.",
        "correct_answer": "more interesting",
        "suggest_answer": "interesting",
        "explanation": "More interesting is comparative for multi-syllable adjectives.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "The weather today is ___ [worse] than yesterday.",
        "correct_answer": "worse",
        "suggest_answer": "bad",
        "explanation": "Worse is irregular comparative of 'bad'.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "He owns a ___ [beautiful] old ___ [Spanish] guitar.",
        "correct_answer": "beautiful, old, Spanish, guitar",
        "suggest_answer": "beautiful, old, Spanish, guitar",
        "explanation": "Opinion (beautiful), age (old), origin (Spanish) in correct order.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "This is the ___ [shortest] path to the city.",
        "correct_answer": "shortest",
        "suggest_answer": "short",
        "explanation": "Shortest is superlative (short + est, double t before adding est).",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "She bought a ___ [small] round ___ [green] ceramic ___ [plate].",
        "correct_answer": "small, round, green, ceramic, plate",
        "suggest_answer": "small, round, green, ceramic, plate",
        "explanation": "Size (small), shape (round), color (green), material (ceramic).",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "He is the ___ [most intelligent] person here.",
        "correct_answer": "most intelligent",
        "suggest_answer": "intelligent",
        "explanation": "Most intelligent is superlative for multi-syllable adjectives.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "The movie was ____ [less exciting] than expected.",
        "correct_answer": "less exciting",
        "suggest_answer": "exciting",
        "explanation": "Less exciting is comparative form showing decreased quality.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "I have three ___ [big] yellow ___ [flowers].",
        "correct_answer": "big, yellow, flowers",
        "suggest_answer": "big, yellow, flowers",
        "explanation": "Size (big) comes before color (yellow) in OSASCOMP order.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "This is a ___ [wonderful] example of ___ [modern] art.",
        "correct_answer": "wonderful, modern",
        "suggest_answer": "wonderful, modern",
        "explanation": "Opinion (wonderful) before age/origin (modern) adjectives.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "He is ____ [less tall] than his father.",
        "correct_answer": "less tall",
        "suggest_answer": "short",
        "explanation": "Less tall is comparative form for one-syllable adjectives.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "She owned a ___ [magnificent] purple ___ [Persian] rug.",
        "correct_answer": "magnificent, purple, Persian, rug",
        "suggest_answer": "magnificent, purple, Persian, rug",
        "explanation": "Opinion (magnificent), color (purple), origin (Persian) order.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "The ___ [bright] yellow ___ [sun] was ___ [beautiful].",
        "correct_answer": "bright, yellow, beautiful",
        "suggest_answer": "bright, yellow, beautiful",
        "explanation": "Quality (bright), color (yellow), descriptive adjective (beautiful).",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "My house is ___ [large] and ___ [comfortable].",
        "correct_answer": "large, comfortable",
        "suggest_answer": "large, comfortable",
        "explanation": "Large and comfortable are both descriptive adjectives.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "This problem is the ___ [least difficult] one.",
        "correct_answer": "least difficult",
        "suggest_answer": "difficult",
        "explanation": "Least difficult is superlative showing minimum quality.",
        "difficulty": "Medium",
        "topic_id": 17
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "She is ____ [as tall] as her mother.",
        "correct_answer": "as tall",
        "suggest_answer": "tall",
        "explanation": "As...as is used for equality comparison.",
        "difficulty": "Hard",
        "topic_id": 17
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "I bought a ___ [lovely] small ___ [round] ___ [black] ___ [wooden] ___ [table].",
        "correct_answer": "lovely, small, round, black, wooden, table",
        "suggest_answer": "lovely, small, round, black, wooden, table",
        "explanation": "OSASCOMP: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.",
        "difficulty": "Hard",
        "topic_id": 17
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "This is not ____ [as good] as the other option.",
        "correct_answer": "as good",
        "suggest_answer": "good",
        "explanation": "As...as in negative comparison shows inequality.",
        "difficulty": "Hard",
        "topic_id": 17
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "He received a ___ [beautiful] old ___ [Japanese] ceramic ___ [vase].",
        "correct_answer": "beautiful, old, Japanese, ceramic, vase",
        "suggest_answer": "beautiful, old, Japanese, ceramic, vase",
        "explanation": "Opinion (beautiful), age (old), origin (Japanese), material (ceramic).",
        "difficulty": "Hard",
        "topic_id": 17
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "This is the ____ [most difficult] problem yet.",
        "correct_answer": "most difficult",
        "suggest_answer": "difficult",
        "explanation": "Most difficult is superlative for multi-syllable adjectives.",
        "difficulty": "Hard",
        "topic_id": 17
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "The car is ____ [more expensive] than expected.",
        "correct_answer": "more expensive",
        "suggest_answer": "expensive",
        "explanation": "More expensive is comparative for multi-syllable adjectives.",
        "difficulty": "Hard",
        "topic_id": 17
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "She has ___ [exquisite] ___ [red] ___ [silk] dress.",
        "correct_answer": "exquisite, red, silk, dress",
        "suggest_answer": "exquisite, red, silk, dress",
        "explanation": "Opinion (exquisite), color (red), material (silk) in order.",
        "difficulty": "Hard",
        "topic_id": 17
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "This metal is ____ [as strong] as steel.",
        "correct_answer": "as strong",
        "suggest_answer": "strong",
        "explanation": "As...as shows equality in comparison.",
        "difficulty": "Hard",
        "topic_id": 17
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "The ____ [least beautiful] painting won the prize.",
        "correct_answer": "least beautiful",
        "suggest_answer": "beautiful",
        "explanation": "Least beautiful is superlative showing minimum beauty.",
        "difficulty": "Hard",
        "topic_id": 17
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "He found a ___ [tremendous] ___ [thick] ___ [old] ___ [brown] ___ [leather] ___ [book].",
        "correct_answer": "tremendous, thick, old, brown, leather, book",
        "suggest_answer": "tremendous, thick, old, brown, leather, book",
        "explanation": "Opinion (tremendous), size (thick), age (old), color (brown), material (leather).",
        "difficulty": "Hard",
        "topic_id": 17
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "She has a ___ dress.",
        "correct_answer": "beautiful",
        "difficulty": "Easy",
        "explanation": "Beautiful is a descriptive adjective.",
        "options": [
            {
                "id": 511,
                "option_text": "beautiful",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "beauty",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "beautifully",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "beautify",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 17
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "I saw a ___ red car.",
        "correct_answer": "big",
        "difficulty": "Easy",
        "explanation": "Size (big) comes before color (red) in OSASCOMP.",
        "options": [
            {
                "id": 521,
                "option_text": "big",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "red big",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "new",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "fast",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 17
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "This is a ___ building.",
        "correct_answer": "tall",
        "difficulty": "Easy",
        "explanation": "Tall is a descriptive adjective describing height.",
        "options": [
            {
                "id": 531,
                "option_text": "tall",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "height",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "tallness",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "tallly",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 17
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "John is ___ than Mary.",
        "correct_answer": "taller",
        "difficulty": "Easy",
        "explanation": "Taller is the comparative form.",
        "options": [
            {
                "id": 541,
                "option_text": "taller",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "tallest",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "more tall",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "tall",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 17
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "This is the ___ building in the city.",
        "correct_answer": "tallest",
        "difficulty": "Easy",
        "explanation": "Tallest is the superlative form.",
        "options": [
            {
                "id": 551,
                "option_text": "tallest",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "taller",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "most tall",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "tall",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 17
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "The weather is ___ today.",
        "correct_answer": "cold",
        "difficulty": "Easy",
        "explanation": "Cold is a descriptive adjective.",
        "options": [
            {
                "id": 561,
                "option_text": "cold",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "coldly",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "coldness",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "colder",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 17
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "She is ___ than her sister.",
        "correct_answer": "more beautiful",
        "difficulty": "Easy",
        "explanation": "More beautiful is comparative for multi-syllable adjectives.",
        "options": [
            {
                "id": 571,
                "option_text": "more beautiful",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "beautiful",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "most beautiful",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "beautifuler",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 17
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "He is the ___ student in class.",
        "correct_answer": "most intelligent",
        "difficulty": "Easy",
        "explanation": "Most intelligent is superlative for multi-syllable adjectives.",
        "options": [
            {
                "id": 581,
                "option_text": "most intelligent",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "intelligent",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "more intelligent",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "intelligentest",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 17
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "I have a ___ white dog.",
        "correct_answer": "small",
        "difficulty": "Easy",
        "explanation": "Size comes before color in adjective order.",
        "options": [
            {
                "id": 591,
                "option_text": "small",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "white small",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "young",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "cute",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 17
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "The food is ___.",
        "correct_answer": "delicious",
        "difficulty": "Easy",
        "explanation": "Delicious is a descriptive adjective.",
        "options": [
            {
                "id": 601,
                "option_text": "delicious",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "deliciously",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "deliciousness",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "delicious good",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 17
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "She is ___ than before.",
        "correct_answer": "happier",
        "difficulty": "Easy",
        "explanation": "Happier is comparative (happy → happier).",
        "options": [
            {
                "id": 611,
                "option_text": "happier",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "happy",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "happiest",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "more happy",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 17
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "It was the ___ day of my life.",
        "correct_answer": "worst",
        "difficulty": "Easy",
        "explanation": "Worst is irregular superlative of 'bad'.",
        "options": [
            {
                "id": 621,
                "option_text": "worst",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "bad",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "worse",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "baddest",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 17
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "He is ___ at mathematics.",
        "correct_answer": "good",
        "difficulty": "Easy",
        "explanation": "Good is a descriptive adjective.",
        "options": [
            {
                "id": 631,
                "option_text": "good",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "goodly",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "goods",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "goodness",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 17
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "The movie is ___.",
        "correct_answer": "interesting",
        "difficulty": "Easy",
        "explanation": "Interesting is a descriptive adjective.",
        "options": [
            {
                "id": 641,
                "option_text": "interesting",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "interestingly",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "interest",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "interested",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 17
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "She is ___ than last year.",
        "correct_answer": "better",
        "difficulty": "Easy",
        "explanation": "Better is irregular comparative of 'good'.",
        "options": [
            {
                "id": 651,
                "option_text": "better",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "good",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "best",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "goodier",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 17
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "That is the ___ solution.",
        "correct_answer": "best",
        "difficulty": "Easy",
        "explanation": "Best is irregular superlative of 'good'.",
        "options": [
            {
                "id": 661,
                "option_text": "best",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "good",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "better",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "goodest",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 17
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "The room is very ___.",
        "correct_answer": "spacious",
        "difficulty": "Easy",
        "explanation": "Spacious is a descriptive adjective.",
        "options": [
            {
                "id": 671,
                "option_text": "spacious",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "spaciously",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "space",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "spaciousness",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 17
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "I need a ___ blue sofa.",
        "correct_answer": "comfortable",
        "difficulty": "Easy",
        "explanation": "Opinion comes before color in OSASCOMP.",
        "options": [
            {
                "id": 681,
                "option_text": "comfortable",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "blue comfortable",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "blue",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "comfortably",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 17
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "He is ___ than his brother.",
        "correct_answer": "faster",
        "difficulty": "Easy",
        "explanation": "Faster is comparative.",
        "options": [
            {
                "id": 691,
                "option_text": "faster",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "fast",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "fastest",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "more fast",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 17
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "She wore a ___ old French silk dress.",
        "correct_answer": "lovely",
        "difficulty": "Easy",
        "explanation": "Opinion (lovely) comes before age (old) in OSASCOMP.",
        "options": [
            {
                "id": 701,
                "option_text": "lovely",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "old",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "French",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "silk",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 17
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "The table is ___ than the chair.",
        "correct_answer": "more expensive",
        "difficulty": "Medium",
        "explanation": "More expensive is comparative for multi-syllable adjectives.",
        "options": [
            {
                "id": 711,
                "option_text": "more expensive",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "expensive",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "most expensive",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "expensiver",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 17
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "He bought three red ___ boxes.",
        "correct_answer": "wooden",
        "difficulty": "Medium",
        "explanation": "Color (red) comes before material (wooden).",
        "options": [
            {
                "id": 721,
                "option_text": "wooden",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "wood",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "red",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "lovely",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 17
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "This is the ___ city I've seen.",
        "correct_answer": "most beautiful",
        "difficulty": "Medium",
        "explanation": "Most beautiful is superlative for multi-syllable adjectives.",
        "options": [
            {
                "id": 731,
                "option_text": "most beautiful",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "beautiful",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "more beautiful",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "beautifulest",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 17
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "She is ___ than Tom.",
        "correct_answer": "shorter",
        "difficulty": "Medium",
        "explanation": "Shorter is comparative.",
        "options": [
            {
                "id": 741,
                "option_text": "shorter",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "short",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "shortest",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "more short",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 17
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "I have a ___ square Italian marble table.",
        "correct_answer": "large",
        "difficulty": "Medium",
        "explanation": "Size (large) comes before shape (square) in OSASCOMP.",
        "options": [
            {
                "id": 751,
                "option_text": "large",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "square",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "Italian",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "marble",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 17
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "This book is ___ than that one.",
        "correct_answer": "more interesting",
        "difficulty": "Medium",
        "explanation": "More interesting is comparative for multi-syllable adjectives.",
        "options": [
            {
                "id": 761,
                "option_text": "more interesting",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "interesting",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "most interesting",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "interestinger",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 17
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "The weather today is ___ than yesterday.",
        "correct_answer": "worse",
        "difficulty": "Medium",
        "explanation": "Worse is irregular comparative of 'bad'.",
        "options": [
            {
                "id": 771,
                "option_text": "worse",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "bad",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "worst",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "more bad",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 17
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "He owns a ___ old Spanish guitar.",
        "correct_answer": "beautiful",
        "difficulty": "Medium",
        "explanation": "Opinion (beautiful) comes before age (old).",
        "options": [
            {
                "id": 781,
                "option_text": "beautiful",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "old",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "Spanish",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "lovely old",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 17
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "This is the ___ path to the city.",
        "correct_answer": "shortest",
        "difficulty": "Medium",
        "explanation": "Shortest is superlative.",
        "options": [
            {
                "id": 791,
                "option_text": "shortest",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "short",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "shorter",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "more short",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 17
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "This problem is the ___ one.",
        "correct_answer": "least difficult",
        "difficulty": "Medium",
        "explanation": "Least difficult shows minimum difficulty.",
        "options": [
            {
                "id": 801,
                "option_text": "least difficult",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "difficult",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "more difficult",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "most difficult",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 17
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "She is ___ as her mother.",
        "correct_answer": "as tall",
        "difficulty": "Hard",
        "explanation": "As...as is used for equality comparison.",
        "options": [
            {
                "id": 811,
                "option_text": "as tall",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "taller",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "tallest",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "more tall",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 17
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "I bought a ___ small round black wooden table.",
        "correct_answer": "lovely",
        "difficulty": "Hard",
        "explanation": "OSASCOMP: Opinion comes first.",
        "options": [
            {
                "id": 821,
                "option_text": "lovely",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "small",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "round",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "black",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 17
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "This is not ___ as the other option.",
        "correct_answer": "as good",
        "difficulty": "Hard",
        "explanation": "As...as in negative shows inequality.",
        "options": [
            {
                "id": 831,
                "option_text": "as good",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "good",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "better",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "best",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 17
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "He received a ___ old Japanese ceramic vase.",
        "correct_answer": "beautiful",
        "difficulty": "Hard",
        "explanation": "Opinion (beautiful) comes before age (old).",
        "options": [
            {
                "id": 841,
                "option_text": "beautiful",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "old",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "Japanese",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "ceramic",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 17
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "This is the ___ problem yet.",
        "correct_answer": "most difficult",
        "difficulty": "Hard",
        "explanation": "Most difficult is superlative.",
        "options": [
            {
                "id": 851,
                "option_text": "most difficult",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "difficult",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "more difficult",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "difficulttest",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 17
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "The car is ___ than expected.",
        "correct_answer": "more expensive",
        "difficulty": "Hard",
        "explanation": "More expensive is comparative for multi-syllable.",
        "options": [
            {
                "id": 861,
                "option_text": "more expensive",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "expensive",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "expensiver",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "most expensive",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 17
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "She has ___ red silk dress.",
        "correct_answer": "exquisite",
        "difficulty": "Hard",
        "explanation": "Opinion (exquisite) comes before color (red).",
        "options": [
            {
                "id": 871,
                "option_text": "exquisite",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "red",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "silk",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "lovely red",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 17
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "This metal is ___ as steel.",
        "correct_answer": "as strong",
        "difficulty": "Hard",
        "explanation": "As...as shows equality.",
        "options": [
            {
                "id": 881,
                "option_text": "as strong",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "stronger",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "strongest",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "more strong",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 17
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "The ___ painting won the prize.",
        "correct_answer": "least beautiful",
        "difficulty": "Hard",
        "explanation": "Least beautiful shows minimum beauty.",
        "options": [
            {
                "id": 891,
                "option_text": "least beautiful",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "beautiful",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "more beautiful",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "most beautiful",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 17
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "He found a ___ thick old brown leather book.",
        "correct_answer": "tremendous",
        "difficulty": "Hard",
        "explanation": "Opinion (tremendous) comes first in OSASCOMP.",
        "options": [
            {
                "id": 901,
                "option_text": "tremendous",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "thick",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "old",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "brown",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 17
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "This solution is not ___ as that one.",
        "correct_answer": "as practical",
        "difficulty": "Hard",
        "explanation": "As...as shows comparison equality.",
        "options": [
            {
                "id": 911,
                "option_text": "as practical",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "practical",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "more practical",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "most practical",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 17
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "The view is ___ from this balcony.",
        "correct_answer": "spectacular",
        "difficulty": "Hard",
        "explanation": "Spectacular is a descriptive adjective.",
        "options": [
            {
                "id": 921,
                "option_text": "spectacular",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "spectacularly",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "spectacle",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "spectating",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 17
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Your answer is ___ than mine.",
        "correct_answer": "better",
        "difficulty": "Hard",
        "explanation": "Better is irregular comparative of 'good'.",
        "options": [
            {
                "id": 931,
                "option_text": "better",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "good",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "best",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "goodier",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 17
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "She wears a ___ elegant black evening gown.",
        "correct_answer": "stunningly",
        "difficulty": "Hard",
        "explanation": "This tests adverbial modification of adjectives.",
        "options": [
            {
                "id": 941,
                "option_text": "stunningly",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "stunning",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "elegantly",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "very elegant",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 17
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "This coffee is ___ than yesterday's.",
        "correct_answer": "hotter",
        "difficulty": "Hard",
        "explanation": "Hotter is comparative.",
        "options": [
            {
                "id": 951,
                "option_text": "hotter",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "hot",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "hottest",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "more hot",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 17
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "That painting is ___ than this one.",
        "correct_answer": "more vibrant",
        "difficulty": "Hard",
        "explanation": "More vibrant is comparative for multi-syllable.",
        "options": [
            {
                "id": 961,
                "option_text": "more vibrant",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "vibrant",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "most vibrant",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "vibranter",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 17
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Your performance is ___ than expected.",
        "correct_answer": "worse",
        "difficulty": "Hard",
        "explanation": "Worse is irregular comparative of 'bad'.",
        "options": [
            {
                "id": 971,
                "option_text": "worse",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "bad",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "worst",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "more bad",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 17
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "My laptop is ___ as yours.",
        "correct_answer": "as fast",
        "difficulty": "Hard",
        "explanation": "As...as shows equality in comparison.",
        "options": [
            {
                "id": 981,
                "option_text": "as fast",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "faster",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "fastest",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "more fast",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 17
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "That is the ___ argument I've heard.",
        "correct_answer": "most compelling",
        "difficulty": "Hard",
        "explanation": "Most compelling is superlative for multi-syllable.",
        "options": [
            {
                "id": 991,
                "option_text": "most compelling",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "compelling",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "more compelling",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "compellingest",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 17
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "This is a ___ example of modern architecture.",
        "correct_answer": "stunning",
        "difficulty": "Hard",
        "explanation": "Stunning is a descriptive adjective.",
        "options": [
            {
                "id": 1001,
                "option_text": "stunning",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "stunningly",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "stunned",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "stun",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 17
    }
];

export default questions;