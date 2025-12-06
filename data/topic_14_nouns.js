const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "I have three ___ [cat] in my house.",
        "correct_answer": "cats",
        "suggest_answer": "cat",
        "explanation": "Cat is a countable noun. Use plural form 'cats' after numbers.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "She drinks a lot of ___ [water] every day.",
        "correct_answer": "water",
        "suggest_answer": "water",
        "explanation": "Water is an uncountable noun. It does not take plural form.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "There are five ___ [apple] on the table.",
        "correct_answer": "apples",
        "suggest_answer": "apple",
        "explanation": "Apple is a countable noun. Use plural 'apples'.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "John works in ___ [Paris] as a software engineer.",
        "correct_answer": "Paris",
        "suggest_answer": "paris",
        "explanation": "Paris is a proper noun (place name). Capitalize proper nouns.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "I need some ___ [advice] for this project.",
        "correct_answer": "advice",
        "suggest_answer": "advice",
        "explanation": "Advice is an uncountable noun. Do not use plural form.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "My mother-in-___ [law] is visiting us next week.",
        "correct_answer": "law",
        "suggest_answer": "law",
        "explanation": "Mother-in-law is a compound noun. The plural is mothers-in-law.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "We need two ___ [cup] of flour for this recipe.",
        "correct_answer": "cups",
        "suggest_answer": "cup",
        "explanation": "Cup is a countable noun. Use plural form 'cups'.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "The ___ [furniture] in this room is very expensive.",
        "correct_answer": "furniture",
        "suggest_answer": "furniture",
        "explanation": "Furniture is an uncountable noun.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "___ [Mary] is a talented pianist.",
        "correct_answer": "Mary",
        "suggest_answer": "mary",
        "explanation": "Mary is a proper noun (personal name). Always capitalize proper nouns.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "She has a lot of ___ [information] about the event.",
        "correct_answer": "information",
        "suggest_answer": "information",
        "explanation": "Information is an uncountable noun.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "I saw four ___ [bird] in the garden this morning.",
        "correct_answer": "birds",
        "suggest_answer": "bird",
        "explanation": "Bird is a countable noun. Use plural 'birds'.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "The ___ [news] was shocking to everyone.",
        "correct_answer": "news",
        "suggest_answer": "news",
        "explanation": "News is an uncountable noun. Use singular verb.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "There are many ___ [student] in the classroom.",
        "correct_answer": "students",
        "suggest_answer": "student",
        "explanation": "Student is a countable noun. Use plural 'students'.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "We have some ___ [luggage] to carry.",
        "correct_answer": "luggage",
        "suggest_answer": "luggage",
        "explanation": "Luggage is an uncountable noun.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "The ___ [basketball] court is near the school.",
        "correct_answer": "basketball",
        "suggest_answer": "basketball",
        "explanation": "Basketball is a compound noun (or noun adjective combination).",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "I need to buy some ___ [bread] from the bakery.",
        "correct_answer": "bread",
        "suggest_answer": "bread",
        "explanation": "Bread is an uncountable noun.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "There are ten ___ [book] on the shelf.",
        "correct_answer": "books",
        "suggest_answer": "book",
        "explanation": "Book is a countable noun. Use plural 'books'.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "The ___ [equipment] needs to be checked regularly.",
        "correct_answer": "equipment",
        "suggest_answer": "equipment",
        "explanation": "Equipment is an uncountable noun.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "I saw my ___ [sister-in-law] yesterday at the market.",
        "correct_answer": "sister-in-law",
        "suggest_answer": "sister",
        "explanation": "Sister-in-law is a compound noun.",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "The company needs more ___ [staff] to handle the workload.",
        "correct_answer": "staff",
        "suggest_answer": "staff",
        "explanation": "Staff is an uncountable noun (collective noun).",
        "difficulty": "Easy",
        "topic_id": 14
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "I found six ___ [box] of documents in the warehouse.",
        "correct_answer": "boxes",
        "suggest_answer": "box",
        "explanation": "Box is a countable noun. Plural is 'boxes'.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "The company produces high-quality ___ [machinery] for industrial use.",
        "correct_answer": "machinery",
        "suggest_answer": "machinery",
        "explanation": "Machinery is an uncountable noun.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "There are three ___ [knife] on the dining table.",
        "correct_answer": "knives",
        "suggest_answer": "knife",
        "explanation": "Knife is a countable noun. Plural is 'knives'.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "I need some ___ [research] to support my argument.",
        "correct_answer": "research",
        "suggest_answer": "research",
        "explanation": "Research is an uncountable noun.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "The ___ [toothbrush] in the bathroom needs replacing.",
        "correct_answer": "toothbrush",
        "suggest_answer": "toothbrush",
        "explanation": "Toothbrush is a compound noun.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "We collected different ___ [sample] from various locations.",
        "correct_answer": "samples",
        "suggest_answer": "sample",
        "explanation": "Sample is a countable noun. Use plural 'samples'.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "The government allocated ___ [budget] for environmental projects.",
        "correct_answer": "budget",
        "suggest_answer": "budget",
        "explanation": "Budget is a countable noun. Can be singular or plural depending on context.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "There is much ___ [traffic] during rush hour.",
        "correct_answer": "traffic",
        "suggest_answer": "traffic",
        "explanation": "Traffic is an uncountable noun.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The ___ [mother-in-law] and ___ [daughter-in-law] have a good relationship.",
        "correct_answer": "mother-in-law, daughter-in-law",
        "suggest_answer": "mother, daughter",
        "explanation": "Both are compound nouns referring to family relationships.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "The ___ [knowledge] required for this job is extensive.",
        "correct_answer": "knowledge",
        "suggest_answer": "knowledge",
        "explanation": "Knowledge is an uncountable noun.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "I need two ___ [glass] of orange juice.",
        "correct_answer": "glasses",
        "suggest_answer": "glass",
        "explanation": "Glass is a countable noun. Plural is 'glasses'.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "The organization has extensive ___ [experience] in managing large projects.",
        "correct_answer": "experience",
        "suggest_answer": "experience",
        "explanation": "Experience is an uncountable noun.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "The ___ [teacher] distributed ___ [worksheet] to all ___ [student].",
        "correct_answer": "teacher, worksheets, students",
        "suggest_answer": "teacher, worksheet, student",
        "explanation": "Teacher and student are countable; worksheet is countable; use appropriate plural forms.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "The ___ [homework] assigned today is challenging.",
        "correct_answer": "homework",
        "suggest_answer": "homework",
        "explanation": "Homework is an uncountable noun.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "I bought several ___ [pair] of shoes last week.",
        "correct_answer": "pairs",
        "suggest_answer": "pair",
        "explanation": "Pair is a countable noun. Plural is 'pairs'.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "The company has valuable ___ [asset] in multiple countries.",
        "correct_answer": "assets",
        "suggest_answer": "asset",
        "explanation": "Asset is a countable noun. Use plural 'assets'.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "The ___ [artwork] in the museum is priceless.",
        "correct_answer": "artwork",
        "suggest_answer": "artwork",
        "explanation": "Artwork is a noun. Can be singular or plural depending on context.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "I need some ___ [permission] to attend the meeting.",
        "correct_answer": "permission",
        "suggest_answer": "permission",
        "explanation": "Permission is an uncountable noun.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "The ___ [policeman] and ___ [policewoman] are patrolling the street.",
        "correct_answer": "policeman, policewoman",
        "suggest_answer": "police, police",
        "explanation": "Both are compound nouns for police officers.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "We need more ___ [money] to complete the project.",
        "correct_answer": "money",
        "suggest_answer": "money",
        "explanation": "Money is an uncountable noun.",
        "difficulty": "Medium",
        "topic_id": 14
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "The ___ [child] are playing in the park.",
        "correct_answer": "children",
        "suggest_answer": "child",
        "explanation": "Child is an irregular countable noun. Plural is 'children'.",
        "difficulty": "Hard",
        "topic_id": 14
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "The ___ [furniture] in the office are all modern.",
        "correct_answer": "furniture",
        "suggest_answer": "furniture",
        "explanation": "Furniture is uncountable. Use singular verb despite multiple items.",
        "difficulty": "Hard",
        "topic_id": 14
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "I have limited ___ [access] to confidential ___ [information].",
        "correct_answer": "access, information",
        "suggest_answer": "access, information",
        "explanation": "Both are uncountable nouns.",
        "difficulty": "Hard",
        "topic_id": 14
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "The ___ [phenomenon] observed in the study are fascinating.",
        "correct_answer": "phenomena",
        "suggest_answer": "phenomenon",
        "explanation": "Phenomenon is irregular. Plural is 'phenomena'.",
        "difficulty": "Hard",
        "topic_id": 14
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "The organization provides comprehensive ___ [training] for all ___ [employee].",
        "correct_answer": "training, employees",
        "suggest_answer": "training, employee",
        "explanation": "Training is uncountable; employee is countable.",
        "difficulty": "Hard",
        "topic_id": 14
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "The ___ [brother-in-law] attended the wedding ceremony.",
        "correct_answer": "brother-in-law",
        "suggest_answer": "brother",
        "explanation": "Brother-in-law is a compound noun.",
        "difficulty": "Hard",
        "topic_id": 14
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "The ___ [criterion] used in the selection process are strict.",
        "correct_answer": "criteria",
        "suggest_answer": "criterion",
        "explanation": "Criterion is irregular. Plural is 'criteria'.",
        "difficulty": "Hard",
        "topic_id": 14
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "The company values both ___ [quality] and ___ [quantity] of work.",
        "correct_answer": "quality, quantity",
        "suggest_answer": "quality, quantity",
        "explanation": "Both are uncountable nouns.",
        "difficulty": "Hard",
        "topic_id": 14
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "The ___ [analysis] of the data reveals important patterns.",
        "correct_answer": "analysis",
        "suggest_answer": "analysis",
        "explanation": "Analysis is countable or uncountable depending on context.",
        "difficulty": "Hard",
        "topic_id": 14
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "The ___ [passenger] on the flight had different ___ [luggage] sizes.",
        "correct_answer": "passengers, luggage",
        "suggest_answer": "passenger, luggage",
        "explanation": "Passenger is countable; luggage is uncountable.",
        "difficulty": "Hard",
        "topic_id": 14
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "I have three ___ in my house.",
        "correct_answer": "cats",
        "difficulty": "Easy",
        "explanation": "Cat is a countable noun. Use plural form after numbers.",
        "options": [
            {
                "id": 511,
                "option_text": "cats",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "cat",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "cates",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "catses",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 14
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "She drinks a lot of ___ every day.",
        "correct_answer": "water",
        "difficulty": "Easy",
        "explanation": "Water is an uncountable noun. Does not take plural form.",
        "options": [
            {
                "id": 521,
                "option_text": "water",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "waters",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "a water",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "many water",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 14
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "There are five ___ on the table.",
        "correct_answer": "apples",
        "difficulty": "Easy",
        "explanation": "Apple is a countable noun. Use plural form 'apples'.",
        "options": [
            {
                "id": 531,
                "option_text": "apples",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "apple",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "appless",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "applesss",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 14
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "John works in ___ as a software engineer.",
        "correct_answer": "Paris",
        "difficulty": "Easy",
        "explanation": "Paris is a proper noun (place name). Always capitalize.",
        "options": [
            {
                "id": 541,
                "option_text": "Paris",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "paris",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "PARIS",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "parisian",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 14
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "I need some ___ for this project.",
        "correct_answer": "advice",
        "difficulty": "Easy",
        "explanation": "Advice is an uncountable noun.",
        "options": [
            {
                "id": 551,
                "option_text": "advice",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "advices",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "advise",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "an advice",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 14
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "My ___ is visiting us next week.",
        "correct_answer": "mother-in-law",
        "difficulty": "Easy",
        "explanation": "Mother-in-law is a compound noun.",
        "options": [
            {
                "id": 561,
                "option_text": "mother-in-law",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "mother in law",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "motherinlaw",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "mother-laws",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 14
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "We need two ___ of flour for this recipe.",
        "correct_answer": "cups",
        "difficulty": "Easy",
        "explanation": "Cup is a countable noun. Use plural form 'cups'.",
        "options": [
            {
                "id": 571,
                "option_text": "cups",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "cup",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "cuppes",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "cupful",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 14
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "The ___ in this room is very expensive.",
        "correct_answer": "furniture",
        "difficulty": "Easy",
        "explanation": "Furniture is an uncountable noun.",
        "options": [
            {
                "id": 581,
                "option_text": "furniture",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "furnitures",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "furnituress",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "a furniture",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 14
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "___ is a talented pianist.",
        "correct_answer": "Mary",
        "difficulty": "Easy",
        "explanation": "Mary is a proper noun (personal name). Always capitalize.",
        "options": [
            {
                "id": 591,
                "option_text": "Mary",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "mary",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "MARY",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "maries",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 14
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "She has a lot of ___ about the event.",
        "correct_answer": "information",
        "difficulty": "Easy",
        "explanation": "Information is an uncountable noun.",
        "options": [
            {
                "id": 601,
                "option_text": "information",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "informations",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "an information",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "infos",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 14
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "I saw four ___ in the garden this morning.",
        "correct_answer": "birds",
        "difficulty": "Easy",
        "explanation": "Bird is a countable noun. Use plural 'birds'.",
        "options": [
            {
                "id": 611,
                "option_text": "birds",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "bird",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "birdes",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "birdsss",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 14
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "The ___ was shocking to everyone.",
        "correct_answer": "news",
        "difficulty": "Easy",
        "explanation": "News is an uncountable noun. Use singular verb.",
        "options": [
            {
                "id": 621,
                "option_text": "news",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "newses",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "a news",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "many news",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 14
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "There are many ___ in the classroom.",
        "correct_answer": "students",
        "difficulty": "Easy",
        "explanation": "Student is a countable noun. Use plural 'students'.",
        "options": [
            {
                "id": 631,
                "option_text": "students",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "student",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "studentses",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "studentss",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 14
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "We have some ___ to carry.",
        "correct_answer": "luggage",
        "difficulty": "Easy",
        "explanation": "Luggage is an uncountable noun.",
        "options": [
            {
                "id": 641,
                "option_text": "luggage",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "luggages",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "a luggage",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "luggage piece",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 14
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "The ___ court is near the school.",
        "correct_answer": "basketball",
        "difficulty": "Easy",
        "explanation": "Basketball is a compound noun.",
        "options": [
            {
                "id": 651,
                "option_text": "basketball",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "basket ball",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "basketballs",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "basket-ball",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 14
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "I need to buy some ___ from the bakery.",
        "correct_answer": "bread",
        "difficulty": "Easy",
        "explanation": "Bread is an uncountable noun.",
        "options": [
            {
                "id": 661,
                "option_text": "bread",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "breads",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "a bread",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "many bread",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 14
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "There are ten ___ on the shelf.",
        "correct_answer": "books",
        "difficulty": "Easy",
        "explanation": "Book is a countable noun. Use plural 'books'.",
        "options": [
            {
                "id": 671,
                "option_text": "books",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "book",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "bookses",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "booksss",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 14
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "The ___ needs to be checked regularly.",
        "correct_answer": "equipment",
        "difficulty": "Easy",
        "explanation": "Equipment is an uncountable noun.",
        "options": [
            {
                "id": 681,
                "option_text": "equipment",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "equipments",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "an equipment",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "equipmentsss",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 14
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "I saw my ___ yesterday at the market.",
        "correct_answer": "sister-in-law",
        "difficulty": "Easy",
        "explanation": "Sister-in-law is a compound noun.",
        "options": [
            {
                "id": 691,
                "option_text": "sister-in-law",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "sister in law",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "sisterinlaw",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "sister laws",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 14
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "The company needs more ___ to handle the workload.",
        "correct_answer": "staff",
        "difficulty": "Easy",
        "explanation": "Staff is an uncountable noun (collective noun).",
        "options": [
            {
                "id": 701,
                "option_text": "staff",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "staffs",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "a staff",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "staffses",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 14
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "I found six ___ of documents in the warehouse.",
        "correct_answer": "boxes",
        "difficulty": "Medium",
        "explanation": "Box is a countable noun. Plural is 'boxes'.",
        "options": [
            {
                "id": 711,
                "option_text": "boxes",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "box",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "boxeses",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "boxs",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 14
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "The company produces high-quality ___ for industrial use.",
        "correct_answer": "machinery",
        "difficulty": "Medium",
        "explanation": "Machinery is an uncountable noun.",
        "options": [
            {
                "id": 721,
                "option_text": "machinery",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "machineries",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "a machinery",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "machines",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 14
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "There are three ___ on the dining table.",
        "correct_answer": "knives",
        "difficulty": "Medium",
        "explanation": "Knife is a countable noun. Plural is 'knives'.",
        "options": [
            {
                "id": 731,
                "option_text": "knives",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "knife",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "knifes",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "knifesss",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 14
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "I need some ___ to support my argument.",
        "correct_answer": "research",
        "difficulty": "Medium",
        "explanation": "Research is an uncountable noun.",
        "options": [
            {
                "id": 741,
                "option_text": "research",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "researches",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "a research",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "researching",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 14
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "The ___ in the bathroom needs replacing.",
        "correct_answer": "toothbrush",
        "difficulty": "Medium",
        "explanation": "Toothbrush is a compound noun.",
        "options": [
            {
                "id": 751,
                "option_text": "toothbrush",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "tooth brush",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "toothbrushes",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "tooth-brush",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 14
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "We collected different ___ from various locations.",
        "correct_answer": "samples",
        "difficulty": "Medium",
        "explanation": "Sample is a countable noun. Use plural 'samples'.",
        "options": [
            {
                "id": 761,
                "option_text": "samples",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "sample",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "sampleses",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "samplees",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 14
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "The government allocated ___ for environmental projects.",
        "correct_answer": "budget",
        "difficulty": "Medium",
        "explanation": "Budget is a countable noun. Can be singular or plural.",
        "options": [
            {
                "id": 771,
                "option_text": "budget",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "budgets",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "budgeting",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "a budgets",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 14
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "There is much ___ during rush hour.",
        "correct_answer": "traffic",
        "difficulty": "Medium",
        "explanation": "Traffic is an uncountable noun.",
        "options": [
            {
                "id": 781,
                "option_text": "traffic",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "traffics",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "a traffic",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "many traffic",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 14
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "The ___ required for this job is extensive.",
        "correct_answer": "knowledge",
        "difficulty": "Medium",
        "explanation": "Knowledge is an uncountable noun.",
        "options": [
            {
                "id": 791,
                "option_text": "knowledge",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "knowledges",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "a knowledge",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "knowledging",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 14
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "I need two ___ of orange juice.",
        "correct_answer": "glasses",
        "difficulty": "Medium",
        "explanation": "Glass is a countable noun. Plural is 'glasses'.",
        "options": [
            {
                "id": 801,
                "option_text": "glasses",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "glass",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "glassses",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "glassis",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 14
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "The ___ are playing in the park.",
        "correct_answer": "children",
        "difficulty": "Hard",
        "explanation": "Child is irregular. Plural is 'children'.",
        "options": [
            {
                "id": 811,
                "option_text": "children",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "child",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "childs",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "childes",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 14
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "The ___ in the office are all modern.",
        "correct_answer": "furniture",
        "difficulty": "Hard",
        "explanation": "Furniture is uncountable. Use singular verb.",
        "options": [
            {
                "id": 821,
                "option_text": "furniture",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "furnitures",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "furniture pieces",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "furnituresetc",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 14
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "I have limited ___ to confidential ___.",
        "correct_answer": "access, information",
        "difficulty": "Hard",
        "explanation": "Both are uncountable nouns.",
        "options": [
            {
                "id": 831,
                "option_text": "access, information",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "accesses, informations",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "an access, an information",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "accesses, information",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 14
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "The ___ observed in the study are fascinating.",
        "correct_answer": "phenomena",
        "difficulty": "Hard",
        "explanation": "Phenomenon is irregular. Plural is 'phenomena'.",
        "options": [
            {
                "id": 841,
                "option_text": "phenomena",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "phenomenon",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "phenomenons",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "phenomenae",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 14
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "The organization provides comprehensive ___ for all ___.",
        "correct_answer": "training, employees",
        "difficulty": "Hard",
        "explanation": "Training is uncountable; employee is countable.",
        "options": [
            {
                "id": 851,
                "option_text": "training, employees",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "trainings, employee",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "training, employee",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "trainings, employees",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 14
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "The ___ attended the wedding ceremony.",
        "correct_answer": "brother-in-law",
        "difficulty": "Hard",
        "explanation": "Brother-in-law is a compound noun.",
        "options": [
            {
                "id": 861,
                "option_text": "brother-in-law",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "brother in law",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "brothers-in-law",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "bratherinlaw",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 14
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "The ___ used in the selection process are strict.",
        "correct_answer": "criteria",
        "difficulty": "Hard",
        "explanation": "Criterion is irregular. Plural is 'criteria'.",
        "options": [
            {
                "id": 871,
                "option_text": "criteria",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "criterion",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "criterions",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "criterias",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 14
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "The company values both ___ and ___ of work.",
        "correct_answer": "quality, quantity",
        "difficulty": "Hard",
        "explanation": "Both are uncountable nouns.",
        "options": [
            {
                "id": 881,
                "option_text": "quality, quantity",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "qualities, quantities",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "a quality, a quantity",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "qualitys, quantitys",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 14
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "The ___ of the data reveals important patterns.",
        "correct_answer": "analysis",
        "difficulty": "Hard",
        "explanation": "Analysis can be countable or uncountable.",
        "options": [
            {
                "id": 891,
                "option_text": "analysis",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "analyses",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "analyzis",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "analysises",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 14
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "The ___ on the flight had different ___ sizes.",
        "correct_answer": "passengers, luggage",
        "difficulty": "Hard",
        "explanation": "Passenger is countable; luggage is uncountable.",
        "options": [
            {
                "id": 901,
                "option_text": "passengers, luggage",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "passenger, luggages",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "passenger, luggage",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "passengers, luggages",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 14
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "The ___ has valuable ___ in multiple countries.",
        "correct_answer": "company, assets",
        "difficulty": "Hard",
        "explanation": "Company is countable singular; asset is countable plural.",
        "options": [
            {
                "id": 911,
                "option_text": "company, assets",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "companies, assets",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "company, asset",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "companies, asset",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 14
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "The ___ in the museum is priceless.",
        "correct_answer": "artwork",
        "difficulty": "Hard",
        "explanation": "Artwork can be singular or plural depending on context.",
        "options": [
            {
                "id": 921,
                "option_text": "artwork",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "artworks",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "art work",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "art-work",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 14
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "I need some ___ to attend the meeting.",
        "correct_answer": "permission",
        "difficulty": "Hard",
        "explanation": "Permission is an uncountable noun.",
        "options": [
            {
                "id": 931,
                "option_text": "permission",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "permissions",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "a permission",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "permissioning",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 14
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "The ___ and ___ are patrolling the street.",
        "correct_answer": "policeman, policewoman",
        "difficulty": "Hard",
        "explanation": "Both are compound nouns for police officers.",
        "options": [
            {
                "id": 941,
                "option_text": "policeman, policewoman",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "police man, police woman",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "policemans, policewomans",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "officers, officers",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 14
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "We need more ___ to complete the project.",
        "correct_answer": "money",
        "difficulty": "Hard",
        "explanation": "Money is an uncountable noun.",
        "options": [
            {
                "id": 951,
                "option_text": "money",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "moneys",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "a money",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "many money",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 14
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "The ___ have different needs and priorities.",
        "correct_answer": "men",
        "difficulty": "Hard",
        "explanation": "Man is irregular. Plural is 'men'.",
        "options": [
            {
                "id": 961,
                "option_text": "men",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "man",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "mans",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "manses",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 14
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "The ___ in the hallway need attention.",
        "correct_answer": "teeth",
        "difficulty": "Hard",
        "explanation": "Tooth is irregular. Plural is 'teeth'.",
        "options": [
            {
                "id": 971,
                "option_text": "teeth",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "tooth",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "teeths",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "toothes",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 14
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "The ___ is important for environmental conservation.",
        "correct_answer": "ecosystem",
        "difficulty": "Hard",
        "explanation": "Ecosystem is a compound noun.",
        "options": [
            {
                "id": 981,
                "option_text": "ecosystem",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "eco-system",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "eco system",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "ecosystems",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 14
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "The ___ provided valuable insights into customer behavior.",
        "correct_answer": "feedback",
        "difficulty": "Hard",
        "explanation": "Feedback is an uncountable noun.",
        "options": [
            {
                "id": 991,
                "option_text": "feedback",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "feedbacks",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "a feedback",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "feed back",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 14
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "The ___ between the two countries remains complex.",
        "correct_answer": "relationship",
        "difficulty": "Hard",
        "explanation": "Relationship is a countable noun.",
        "options": [
            {
                "id": 1001,
                "option_text": "relationship",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "relationships",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "relation-ship",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "relational",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 14
    }
];

export default questions;