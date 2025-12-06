const questions = [
  {
    "id": 1,
    "question_type": "fill_blank",
    "question_text": "I ___ my homework before dinner. [finish]",
    "correct_answer": "had finished",
    "suggest_answer": "finish",
    "explanation": "Past Perfect for action completed before another past action. Subject 'I' takes 'had'.",
    "difficulty": "Easy",
    "topic_id": 7
  },
  {
    "id": 2,
    "question_type": "fill_blank",
    "question_text": "She ___ the book before she started the movie. [read]",
    "correct_answer": "had read",
    "suggest_answer": "read",
    "explanation": "Past Perfect shows the earlier of two past events.",
    "difficulty": "Easy",
    "topic_id": 7
  },
  {
    "id": 3,
    "question_type": "fill_blank",
    "question_text": "They ___ dinner when we arrived. [have]",
    "correct_answer": "had had",
    "suggest_answer": "have",
    "explanation": "Past Perfect for completed action before past event. Plural subject.",
    "difficulty": "Easy",
    "topic_id": 7
  },
  {
    "id": 4,
    "question_type": "fill_blank",
    "question_text": "He ___ to the store before coming home. [go]",
    "correct_answer": "had gone",
    "suggest_answer": "go",
    "explanation": "Past Perfect for action in sequence. Subject 'He' takes 'had'.",
    "difficulty": "Easy",
    "topic_id": 7
  },
  {
    "id": 5,
    "question_type": "fill_blank",
    "question_text": "The children ___ playing when their mother called. [finish]",
    "correct_answer": "had finished",
    "suggest_answer": "finish",
    "explanation": "Past Perfect describes action completed before another past action.",
    "difficulty": "Easy",
    "topic_id": 7
  },
  {
    "id": 6,
    "question_type": "fill_blank",
    "question_text": "She ___ the letter before leaving. [write]",
    "correct_answer": "had written",
    "suggest_answer": "write",
    "explanation": "Past Perfect for action done in the past before another past action.",
    "difficulty": "Easy",
    "topic_id": 7
  },
  {
    "id": 7,
    "question_type": "fill_blank",
    "question_text": "I ___ never ___ that restaurant before. [eat]",
    "correct_answer": "had;eaten",
    "suggest_answer": "eat",
    "explanation": "Past Perfect negative with 'never'. Multi-word answer.",
    "difficulty": "Easy",
    "topic_id": 7
  },
  {
    "id": 8,
    "question_type": "fill_blank",
    "question_text": "We ___ all our work before the deadline. [complete]",
    "correct_answer": "had completed",
    "suggest_answer": "complete",
    "explanation": "Past Perfect for action finished before specified time in past.",
    "difficulty": "Easy",
    "topic_id": 7
  },
  {
    "id": 9,
    "question_type": "fill_blank",
    "question_text": "They ___ the bridge before the storm hit. [cross]",
    "correct_answer": "had crossed",
    "suggest_answer": "cross",
    "explanation": "Past Perfect shows completion before another past event.",
    "difficulty": "Easy",
    "topic_id": 7
  },
  {
    "id": 10,
    "question_type": "fill_blank",
    "question_text": "He ___ the key before locking the door. [find]",
    "correct_answer": "had found",
    "suggest_answer": "find",
    "explanation": "Past Perfect for sequence of past events.",
    "difficulty": "Easy",
    "topic_id": 7
  },
  {
    "id": 11,
    "question_type": "fill_blank",
    "question_text": "By the time she arrived, I ___ waiting for two hours. [be]",
    "correct_answer": "had been",
    "suggest_answer": "be",
    "explanation": "Past Perfect Continuous 'had been' + verb-ing for duration until past point.",
    "difficulty": "Medium",
    "topic_id": 7
  },
  {
    "id": 12,
    "question_type": "fill_blank",
    "question_text": "After he ___ the door, he realized he forgot his keys. [lock]",
    "correct_answer": "had locked",
    "suggest_answer": "lock",
    "explanation": "Past Perfect in temporal clause with 'after'.",
    "difficulty": "Medium",
    "topic_id": 7
  },
  {
    "id": 13,
    "question_type": "fill_blank",
    "question_text": "She ___ the project three times before it was approved. [revise]",
    "correct_answer": "had revised",
    "suggest_answer": "revise",
    "explanation": "Past Perfect for repeated action before past event.",
    "difficulty": "Medium",
    "topic_id": 7
  },
  {
    "id": 14,
    "question_type": "fill_blank",
    "question_text": "They ___ never ___ to that country before. [travel]",
    "correct_answer": "had;travelled",
    "suggest_answer": "travel",
    "explanation": "Past Perfect negative with 'never' for first-time experience in past.",
    "difficulty": "Medium",
    "topic_id": 7
  },
  {
    "id": 15,
    "question_type": "fill_blank",
    "question_text": "I ___ him that I ___ the movie already. [tell;see]",
    "correct_answer": "told;had seen",
    "suggest_answer": "tell;see",
    "explanation": "Past Simple with Past Perfect showing sequence - 'tell' then 'had seen' first.",
    "difficulty": "Medium",
    "topic_id": 7
  },
  {
    "id": 16,
    "question_type": "fill_blank",
    "question_text": "By noon, he ___ worked for eight hours. [have]",
    "correct_answer": "had",
    "suggest_answer": "have",
    "explanation": "Past Perfect auxiliary for expressing duration in past.",
    "difficulty": "Medium",
    "topic_id": 7
  },
  {
    "id": 17,
    "question_type": "fill_blank",
    "question_text": "The students ___ the exam before the teacher collected it. [finish]",
    "correct_answer": "had finished",
    "suggest_answer": "finish",
    "explanation": "Past Perfect for completion before another past action.",
    "difficulty": "Medium",
    "topic_id": 7
  },
  {
    "id": 18,
    "question_type": "fill_blank",
    "question_text": "She ___ not ___ the news until I told her. [know]",
    "correct_answer": "had;known",
    "suggest_answer": "not;know",
    "explanation": "Negative Past Perfect. Multi-word answer.",
    "difficulty": "Medium",
    "topic_id": 7
  },
  {
    "id": 19,
    "question_type": "fill_blank",
    "question_text": "What ___ you ___ before you moved? [do]",
    "correct_answer": "had;done",
    "suggest_answer": "do",
    "explanation": "Question form of Past Perfect.",
    "difficulty": "Medium",
    "topic_id": 7
  },
  {
    "id": 20,
    "question_type": "fill_blank",
    "question_text": "Once they ___ the contract, they ___ to work. [sign;start]",
    "correct_answer": "had signed;started",
    "suggest_answer": "sign;start",
    "explanation": "Past Perfect with following Past Simple showing sequence.",
    "difficulty": "Medium",
    "topic_id": 7
  },
  {
    "id": 21,
    "question_type": "fill_blank",
    "question_text": "By the time the authorities ___ the scene, evidence ___ tampered with. [arrive;be]",
    "correct_answer": "arrived;had been",
    "suggest_answer": "arrive;be",
    "explanation": "Past Simple with Past Perfect Passive showing sequence.",
    "difficulty": "Hard",
    "topic_id": 7
  },
  {
    "id": 22,
    "question_type": "fill_blank",
    "question_text": "The witness testified that he ___ the suspect before. [never;see]",
    "correct_answer": "had never seen",
    "suggest_answer": "never;see",
    "explanation": "Past Perfect in reported speech about prior experience.",
    "difficulty": "Hard",
    "topic_id": 7
  },
  {
    "id": 23,
    "question_type": "fill_blank",
    "question_text": "Had she ___ of the danger, she ___ come. [know;not]",
    "correct_answer": "known;would not have",
    "suggest_answer": "know;not",
    "explanation": "Past Perfect conditional structure.",
    "difficulty": "Hard",
    "topic_id": 7
  },
  {
    "id": 24,
    "question_type": "fill_blank",
    "question_text": "The report showed that the company ___ not ___ regulations. [comply]",
    "correct_answer": "had;complied",
    "suggest_answer": "not;comply",
    "explanation": "Negative Past Perfect in formal documentation context.",
    "difficulty": "Hard",
    "topic_id": 7
  },
  {
    "id": 25,
    "question_type": "fill_blank",
    "question_text": "Before the merger ___ finalized, the two entities ___ negotiations for months. [be;conduct]",
    "correct_answer": "was;had conducted",
    "suggest_answer": "be;conduct",
    "explanation": "Past Perfect Continuous implied context in business.",
    "difficulty": "Hard",
    "topic_id": 7
  },
  {
    "id": 26,
    "question_type": "fill_blank",
    "question_text": "The historian claimed that similar patterns ___ before in three centuries. [occur]",
    "correct_answer": "had occurred",
    "suggest_answer": "occur",
    "explanation": "Past Perfect in historical analysis and claims.",
    "difficulty": "Hard",
    "topic_id": 7
  },
  {
    "id": 27,
    "question_type": "fill_blank",
    "question_text": "Once the foundation ___ thoroughly inspected, construction ___ proceed. [be;could]",
    "correct_answer": "had been;could",
    "suggest_answer": "be;could",
    "explanation": "Past Perfect Passive with conditional modal verb.",
    "difficulty": "Hard",
    "topic_id": 7
  },
  {
    "id": 28,
    "question_type": "fill_blank",
    "question_text": "The defendant maintained that he ___ not ___ to the location. [ever;go]",
    "correct_answer": "had;gone",
    "suggest_answer": "not;go",
    "explanation": "Negative Past Perfect in legal testimony.",
    "difficulty": "Hard",
    "topic_id": 7
  },
  {
    "id": 29,
    "question_type": "fill_blank",
    "question_text": "By the time the decision ___ announced, stakeholders ___ already preparing alternatives. [be;be]",
    "correct_answer": "was;had been",
    "suggest_answer": "be;be",
    "explanation": "Past Perfect Continuous with Past Simple in organizational context.",
    "difficulty": "Hard",
    "topic_id": 7
  },
  {
    "id": 30,
    "question_type": "fill_blank",
    "question_text": "The investigation revealed that falsified records ___ submitted prior to the audit. [be]",
    "correct_answer": "had been",
    "suggest_answer": "be",
    "explanation": "Past Perfect Passive in formal investigative report.",
    "difficulty": "Hard",
    "topic_id": 7
  },
  {
    "id": 31,
    "question_type": "multiple_choice",
    "question_text": "I ___ my breakfast before leaving for work.",
    "correct_answer": "had eaten",
    "difficulty": "Easy",
    "explanation": "Past Perfect for action completed before another past action.",
    "options": [
      {"id": 311, "option_text": "ate", "is_correct": 0, "question_id": 31},
      {"id": 312, "option_text": "had eaten", "is_correct": 1, "question_id": 31},
      {"id": 313, "option_text": "have eaten", "is_correct": 0, "question_id": 31},
      {"id": 314, "option_text": "was eating", "is_correct": 0, "question_id": 31}
    ],
    "topic_id": 7
  },
  {
    "id": 32,
    "question_type": "multiple_choice",
    "question_text": "She ___ the letter before I arrived.",
    "correct_answer": "had written",
    "difficulty": "Easy",
    "explanation": "Past Perfect shows earlier past action.",
    "options": [
      {"id": 321, "option_text": "wrote", "is_correct": 0, "question_id": 32},
      {"id": 322, "option_text": "had written", "is_correct": 1, "question_id": 32},
      {"id": 323, "option_text": "has written", "is_correct": 0, "question_id": 32},
      {"id": 324, "option_text": "is writing", "is_correct": 0, "question_id": 32}
    ],
    "topic_id": 7
  },
  {
    "id": 33,
    "question_type": "multiple_choice",
    "question_text": "They ___ the project before the deadline.",
    "correct_answer": "had completed",
    "difficulty": "Easy",
    "explanation": "Past Perfect for finished action before past point in time.",
    "options": [
      {"id": 331, "option_text": "completed", "is_correct": 0, "question_id": 33},
      {"id": 332, "option_text": "had completed", "is_correct": 1, "question_id": 33},
      {"id": 333, "option_text": "have completed", "is_correct": 0, "question_id": 33},
      {"id": 334, "option_text": "were completing", "is_correct": 0, "question_id": 34}
    ],
    "topic_id": 7
  },
  {
    "id": 34,
    "question_type": "multiple_choice",
    "question_text": "He ___ to the store before it closed.",
    "correct_answer": "had gone",
    "difficulty": "Easy",
    "explanation": "Past Perfect for action in sequence of past events.",
    "options": [
      {"id": 341, "option_text": "went", "is_correct": 0, "question_id": 34},
      {"id": 342, "option_text": "had gone", "is_correct": 1, "question_id": 34},
      {"id": 343, "option_text": "has gone", "is_correct": 0, "question_id": 34},
      {"id": 344, "option_text": "is going", "is_correct": 0, "question_id": 34}
    ],
    "topic_id": 7
  },
  {
    "id": 35,
    "question_type": "multiple_choice",
    "question_text": "The guests ___ already left when we arrived.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Past Perfect auxiliary form.",
    "options": [
      {"id": 351, "option_text": "have", "is_correct": 0, "question_id": 35},
      {"id": 352, "option_text": "had", "is_correct": 1, "question_id": 35},
      {"id": 353, "option_text": "are", "is_correct": 0, "question_id": 35},
      {"id": 354, "option_text": "were", "is_correct": 0, "question_id": 35}
    ],
    "topic_id": 7
  },
  {
    "id": 36,
    "question_type": "multiple_choice",
    "question_text": "She ___ the book twice before writing the review.",
    "correct_answer": "had read",
    "difficulty": "Easy",
    "explanation": "Past Perfect for repeated action before another past action.",
    "options": [
      {"id": 361, "option_text": "read", "is_correct": 0, "question_id": 36},
      {"id": 362, "option_text": "had read", "is_correct": 1, "question_id": 36},
      {"id": 363, "option_text": "have read", "is_correct": 0, "question_id": 36},
      {"id": 364, "option_text": "was reading", "is_correct": 0, "question_id": 36}
    ],
    "topic_id": 7
  },
  {
    "id": 37,
    "question_type": "multiple_choice",
    "question_text": "I ___ never been to Japan before last year.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Past Perfect with 'never' for first-time experience in past.",
    "options": [
      {"id": 371, "option_text": "have", "is_correct": 0, "question_id": 37},
      {"id": 372, "option_text": "had", "is_correct": 1, "question_id": 37},
      {"id": 373, "option_text": "was", "is_correct": 0, "question_id": 37},
      {"id": 374, "option_text": "are", "is_correct": 0, "question_id": 37}
    ],
    "topic_id": 7
  },
  {
    "id": 38,
    "question_type": "multiple_choice",
    "question_text": "We ___ our homework before playing outside.",
    "correct_answer": "had finished",
    "difficulty": "Easy",
    "explanation": "Past Perfect for completed action before subsequent action.",
    "options": [
      {"id": 381, "option_text": "finished", "is_correct": 0, "question_id": 38},
      {"id": 382, "option_text": "had finished", "is_correct": 1, "question_id": 38},
      {"id": 383, "option_text": "have finished", "is_correct": 0, "question_id": 38},
      {"id": 384, "option_text": "were finishing", "is_correct": 0, "question_id": 38}
    ],
    "topic_id": 7
  },
  {
    "id": 39,
    "question_type": "multiple_choice",
    "question_text": "The children ___ all their toys before bedtime.",
    "correct_answer": "had packed",
    "difficulty": "Easy",
    "explanation": "Past Perfect for action completed before another past action.",
    "options": [
      {"id": 391, "option_text": "packed", "is_correct": 0, "question_id": 39},
      {"id": 392, "option_text": "had packed", "is_correct": 1, "question_id": 39},
      {"id": 393, "option_text": "have packed", "is_correct": 0, "question_id": 39},
      {"id": 394, "option_text": "are packing", "is_correct": 0, "question_id": 39}
    ],
    "topic_id": 7
  },
  {
    "id": 40,
    "question_type": "multiple_choice",
    "question_text": "By noon, she ___ worked for six hours.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Past Perfect auxiliary for duration.",
    "options": [
      {"id": 401, "option_text": "has", "is_correct": 0, "question_id": 40},
      {"id": 402, "option_text": "had", "is_correct": 1, "question_id": 40},
      {"id": 403, "option_text": "was", "is_correct": 0, "question_id": 40},
      {"id": 404, "option_text": "are", "is_correct": 0, "question_id": 40}
    ],
    "topic_id": 7
  },
  {
    "id": 41,
    "question_type": "multiple_choice",
    "question_text": "He ___ already left when she called.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Past Perfect with 'already' for completed past action.",
    "options": [
      {"id": 411, "option_text": "has", "is_correct": 0, "question_id": 41},
      {"id": 412, "option_text": "had", "is_correct": 1, "question_id": 41},
      {"id": 413, "option_text": "was", "is_correct": 0, "question_id": 41},
      {"id": 414, "option_text": "is", "is_correct": 0, "question_id": 41}
    ],
    "topic_id": 7
  },
  {
    "id": 42,
    "question_type": "multiple_choice",
    "question_text": "After he ___ the exam, he felt relieved.",
    "correct_answer": "had finished",
    "difficulty": "Easy",
    "explanation": "Past Perfect in 'after' temporal clause.",
    "options": [
      {"id": 421, "option_text": "finished", "is_correct": 0, "question_id": 42},
      {"id": 422, "option_text": "had finished", "is_correct": 1, "question_id": 42},
      {"id": 423, "option_text": "has finished", "is_correct": 0, "question_id": 42},
      {"id": 424, "option_text": "is finishing", "is_correct": 0, "question_id": 42}
    ],
    "topic_id": 7
  },
  {
    "id": 43,
    "question_type": "multiple_choice",
    "question_text": "The movie ___ before we arrived at the theater.",
    "correct_answer": "had started",
    "difficulty": "Easy",
    "explanation": "Past Perfect for event that occurred before another past event.",
    "options": [
      {"id": 431, "option_text": "started", "is_correct": 0, "question_id": 43},
      {"id": 432, "option_text": "had started", "is_correct": 1, "question_id": 43},
      {"id": 433, "option_text": "has started", "is_correct": 0, "question_id": 43},
      {"id": 434, "option_text": "is starting", "is_correct": 0, "question_id": 43}
    ],
    "topic_id": 7
  },
  {
    "id": 44,
    "question_type": "multiple_choice",
    "question_text": "She ___ not seen him for years before their reunion.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Negative Past Perfect with 'not'.",
    "options": [
      {"id": 441, "option_text": "has", "is_correct": 0, "question_id": 44},
      {"id": 442, "option_text": "had", "is_correct": 1, "question_id": 44},
      {"id": 443, "option_text": "was", "is_correct": 0, "question_id": 44},
      {"id": 444, "option_text": "is", "is_correct": 0, "question_id": 44}
    ],
    "topic_id": 7
  },
  {
    "id": 45,
    "question_type": "multiple_choice",
    "question_text": "They ___ the bridge long before the war began.",
    "correct_answer": "had built",
    "difficulty": "Easy",
    "explanation": "Past Perfect for action completed long before another past event.",
    "options": [
      {"id": 451, "option_text": "built", "is_correct": 0, "question_id": 45},
      {"id": 452, "option_text": "had built", "is_correct": 1, "question_id": 45},
      {"id": 453, "option_text": "have built", "is_correct": 0, "question_id": 45},
      {"id": 454, "option_text": "are building", "is_correct": 0, "question_id": 45}
    ],
    "topic_id": 7
  },
  {
    "id": 46,
    "question_type": "multiple_choice",
    "question_text": "The package ___ already arrived when he returned home.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Past Perfect auxiliary with 'already'.",
    "options": [
      {"id": 461, "option_text": "has", "is_correct": 0, "question_id": 46},
      {"id": 462, "option_text": "had", "is_correct": 1, "question_id": 46},
      {"id": 463, "option_text": "was", "is_correct": 0, "question_id": 46},
      {"id": 464, "option_text": "is", "is_correct": 0, "question_id": 46}
    ],
    "topic_id": 7
  },
  {
    "id": 47,
    "question_type": "multiple_choice",
    "question_text": "She ___ studied the material before the test.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Past Perfect auxiliary for action before past test.",
    "options": [
      {"id": 471, "option_text": "has", "is_correct": 0, "question_id": 47},
      {"id": 472, "option_text": "had", "is_correct": 1, "question_id": 47},
      {"id": 473, "option_text": "was", "is_correct": 0, "question_id": 47},
      {"id": 474, "option_text": "is", "is_correct": 0, "question_id": 47}
    ],
    "topic_id": 7
  },
  {
    "id": 48,
    "question_type": "multiple_choice",
    "question_text": "Before the meeting started, everyone ___ arrived.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Past Perfect in 'before' temporal clause.",
    "options": [
      {"id": 481, "option_text": "has", "is_correct": 0, "question_id": 48},
      {"id": 482, "option_text": "had", "is_correct": 1, "question_id": 48},
      {"id": 483, "option_text": "was", "is_correct": 0, "question_id": 48},
      {"id": 484, "option_text": "is", "is_correct": 0, "question_id": 48}
    ],
    "topic_id": 7
  },
  {
    "id": 49,
    "question_type": "multiple_choice",
    "question_text": "Once they ___ signed the contract, negotiations began.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Past Perfect with 'once' for sequence of past events.",
    "options": [
      {"id": 491, "option_text": "have", "is_correct": 0, "question_id": 49},
      {"id": 492, "option_text": "had", "is_correct": 1, "question_id": 49},
      {"id": 493, "option_text": "was", "is_correct": 0, "question_id": 49},
      {"id": 494, "option_text": "are", "is_correct": 0, "question_id": 49}
    ],
    "topic_id": 7
  },
  {
    "id": 50,
    "question_type": "multiple_choice",
    "question_text": "The team ___ never won a championship before that year.",
    "correct_answer": "had",
    "difficulty": "Easy",
    "explanation": "Past Perfect with 'never' for first success in past.",
    "options": [
      {"id": 501, "option_text": "has", "is_correct": 0, "question_id": 50},
      {"id": 502, "option_text": "had", "is_correct": 1, "question_id": 50},
      {"id": 503, "option_text": "was", "is_correct": 0, "question_id": 50},
      {"id": 504, "option_text": "is", "is_correct": 0, "question_id": 50}
    ],
    "topic_id": 7
  },
  {
    "id": 51,
    "question_type": "multiple_choice",
    "question_text": "By the time the police arrived, the suspect ___ fled the scene.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect with 'by the time' clause showing prior completion.",
    "options": [
      {"id": 511, "option_text": "has", "is_correct": 0, "question_id": 51},
      {"id": 512, "option_text": "had", "is_correct": 1, "question_id": 51},
      {"id": 513, "option_text": "was", "is_correct": 0, "question_id": 51},
      {"id": 514, "option_text": "is", "is_correct": 0, "question_id": 51}
    ],
    "topic_id": 7
  },
  {
    "id": 52,
    "question_type": "multiple_choice",
    "question_text": "The witness stated that she ___ seen the accident.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect in reported speech.",
    "options": [
      {"id": 521, "option_text": "has", "is_correct": 0, "question_id": 52},
      {"id": 522, "option_text": "had", "is_correct": 1, "question_id": 52},
      {"id": 523, "option_text": "is", "is_correct": 0, "question_id": 52},
      {"id": 524, "option_text": "was", "is_correct": 0, "question_id": 52}
    ],
    "topic_id": 7
  },
  {
    "id": 53,
    "question_type": "multiple_choice",
    "question_text": "She realized she ___ left her phone at home.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect showing realization of earlier action.",
    "options": [
      {"id": 531, "option_text": "has", "is_correct": 0, "question_id": 53},
      {"id": 532, "option_text": "had", "is_correct": 1, "question_id": 53},
      {"id": 533, "option_text": "is", "is_correct": 0, "question_id": 53},
      {"id": 534, "option_text": "was", "is_correct": 0, "question_id": 534}
    ],
    "topic_id": 7
  },
  {
    "id": 54,
    "question_type": "multiple_choice",
    "question_text": "They discovered that the documents ___ been forged.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect Passive in discovery context.",
    "options": [
      {"id": 541, "option_text": "have", "is_correct": 0, "question_id": 54},
      {"id": 542, "option_text": "had", "is_correct": 1, "question_id": 54},
      {"id": 543, "option_text": "was", "is_correct": 0, "question_id": 54},
      {"id": 544, "option_text": "are", "is_correct": 0, "question_id": 54}
    ],
    "topic_id": 7
  },
  {
    "id": 55,
    "question_type": "multiple_choice",
    "question_text": "The report indicated that the firm ___ spent millions on R&D.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect in formal report documentation.",
    "options": [
      {"id": 551, "option_text": "has", "is_correct": 0, "question_id": 55},
      {"id": 552, "option_text": "had", "is_correct": 1, "question_id": 55},
      {"id": 553, "option_text": "is", "is_correct": 0, "question_id": 55},
      {"id": 554, "option_text": "was", "is_correct": 0, "question_id": 55}
    ],
    "topic_id": 7
  },
  {
    "id": 56,
    "question_type": "multiple_choice",
    "question_text": "It turned out that no one ___ thought of that solution.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect with introductory expression.",
    "options": [
      {"id": 561, "option_text": "has", "is_correct": 0, "question_id": 56},
      {"id": 562, "option_text": "had", "is_correct": 1, "question_id": 56},
      {"id": 563, "option_text": "is", "is_correct": 0, "question_id": 56},
      {"id": 564, "option_text": "was", "is_correct": 0, "question_id": 56}
    ],
    "topic_id": 7
  },
  {
    "id": 57,
    "question_type": "multiple_choice",
    "question_text": "The defendant claimed he ___ not been at the location.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Negative Past Perfect in legal testimony.",
    "options": [
      {"id": 571, "option_text": "has", "is_correct": 0, "question_id": 57},
      {"id": 572, "option_text": "had", "is_correct": 1, "question_id": 57},
      {"id": 573, "option_text": "is", "is_correct": 0, "question_id": 57},
      {"id": 574, "option_text": "was", "is_correct": 0, "question_id": 57}
    ],
    "topic_id": 7
  },
  {
    "id": 58,
    "question_type": "multiple_choice",
    "question_text": "The analysis showed that trends ___ already shifted before the announcement.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect showing earlier change than public awareness.",
    "options": [
      {"id": 581, "option_text": "have", "is_correct": 0, "question_id": 58},
      {"id": 582, "option_text": "had", "is_correct": 1, "question_id": 58},
      {"id": 583, "option_text": "is", "is_correct": 0, "question_id": 58},
      {"id": 584, "option_text": "was", "is_correct": 0, "question_id": 58}
    ],
    "topic_id": 7
  },
  {
    "id": 59,
    "question_type": "multiple_choice",
    "question_text": "We later learned that she ___ already warned them months earlier.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect for earlier warning in past narrative.",
    "options": [
      {"id": 591, "option_text": "has", "is_correct": 0, "question_id": 59},
      {"id": 592, "option_text": "had", "is_correct": 1, "question_id": 59},
      {"id": 593, "option_text": "is", "is_correct": 0, "question_id": 59},
      {"id": 594, "option_text": "was", "is_correct": 0, "question_id": 59}
    ],
    "topic_id": 7
  },
  {
    "id": 60,
    "question_type": "multiple_choice",
    "question_text": "The evidence proved that the transaction ___ already been authorized.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect Passive in legal proof context.",
    "options": [
      {"id": 601, "option_text": "has", "is_correct": 0, "question_id": 60},
      {"id": 602, "option_text": "had", "is_correct": 1, "question_id": 60},
      {"id": 603, "option_text": "is", "is_correct": 0, "question_id": 60},
      {"id": 604, "option_text": "was", "is_correct": 0, "question_id": 60}
    ],
    "topic_id": 7
  },
  {
    "id": 61,
    "question_type": "multiple_choice",
    "question_text": "Once the initial investment ___ made, profits soon followed.",
    "correct_answer": "had been",
    "difficulty": "Medium",
    "explanation": "Past Perfect Passive in financial narrative.",
    "options": [
      {"id": 611, "option_text": "has been", "is_correct": 0, "question_id": 61},
      {"id": 612, "option_text": "had been", "is_correct": 1, "question_id": 61},
      {"id": 613, "option_text": "is", "is_correct": 0, "question_id": 61},
      {"id": 614, "option_text": "was", "is_correct": 0, "question_id": 61}
    ],
    "topic_id": 7
  },
  {
    "id": 62,
    "question_type": "multiple_choice",
    "question_text": "The investigation established that the suspect ___ manufactured the documents.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect in criminal investigation report.",
    "options": [
      {"id": 621, "option_text": "has", "is_correct": 0, "question_id": 62},
      {"id": 622, "option_text": "had", "is_correct": 1, "question_id": 62},
      {"id": 623, "option_text": "is", "is_correct": 0, "question_id": 62},
      {"id": 624, "option_text": "was", "is_correct": 0, "question_id": 62}
    ],
    "topic_id": 7
  },
  {
    "id": 63,
    "question_type": "multiple_choice",
    "question_text": "The firm acknowledged that it ___ not met its obligations.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Negative Past Perfect in corporate admission.",
    "options": [
      {"id": 631, "option_text": "has", "is_correct": 0, "question_id": 63},
      {"id": 632, "option_text": "had", "is_correct": 1, "question_id": 63},
      {"id": 633, "option_text": "is", "is_correct": 0, "question_id": 63},
      {"id": 634, "option_text": "was", "is_correct": 0, "question_id": 63}
    ],
    "topic_id": 7
  },
  {
    "id": 64,
    "question_type": "multiple_choice",
    "question_text": "It was evident that the data ___ been manipulated previously.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect Passive in analytical assessment.",
    "options": [
      {"id": 641, "option_text": "has", "is_correct": 0, "question_id": 64},
      {"id": 642, "option_text": "had", "is_correct": 1, "question_id": 64},
      {"id": 643, "option_text": "is", "is_correct": 0, "question_id": 64},
      {"id": 644, "option_text": "was", "is_correct": 0, "question_id": 64}
    ],
    "topic_id": 7
  },
  {
    "id": 65,
    "question_type": "multiple_choice",
    "question_text": "The record showed that procedures ___ been established years prior.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect Passive in historical record.",
    "options": [
      {"id": 651, "option_text": "have", "is_correct": 0, "question_id": 65},
      {"id": 652, "option_text": "had", "is_correct": 1, "question_id": 65},
      {"id": 653, "option_text": "is", "is_correct": 0, "question_id": 65},
      {"id": 654, "option_text": "was", "is_correct": 0, "question_id": 654}
    ],
    "topic_id": 7
  },
  {
    "id": 66,
    "question_type": "multiple_choice",
    "question_text": "The committee noted that several attempts ___ already been made.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect Passive in formal committee notation.",
    "options": [
      {"id": 661, "option_text": "have", "is_correct": 0, "question_id": 66},
      {"id": 662, "option_text": "had", "is_correct": 1, "question_id": 66},
      {"id": 663, "option_text": "is", "is_correct": 0, "question_id": 66},
      {"id": 664, "option_text": "was", "is_correct": 0, "question_id": 664}
    ],
    "topic_id": 7
  },
  {
    "id": 67,
    "question_type": "multiple_choice",
    "question_text": "The audit revealed that assets ___ mysteriously disappeared.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect in financial audit finding.",
    "options": [
      {"id": 671, "option_text": "have", "is_correct": 0, "question_id": 67},
      {"id": 672, "option_text": "had", "is_correct": 1, "question_id": 67},
      {"id": 673, "option_text": "is", "is_correct": 0, "question_id": 67},
      {"id": 674, "option_text": "was", "is_correct": 0, "question_id": 67}
    ],
    "topic_id": 7
  },
  {
    "id": 68,
    "question_type": "multiple_choice",
    "question_text": "Experts confirmed that the artifact ___ been authenticated previously.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect Passive in expert verification.",
    "options": [
      {"id": 681, "option_text": "has", "is_correct": 0, "question_id": 68},
      {"id": 682, "option_text": "had", "is_correct": 1, "question_id": 68},
      {"id": 683, "option_text": "is", "is_correct": 0, "question_id": 68},
      {"id": 684, "option_text": "was", "is_correct": 0, "question_id": 68}
    ],
    "topic_id": 7
  },
  {
    "id": 69,
    "question_type": "multiple_choice",
    "question_text": "The historian documented that similar events ___ occurred centuries before.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect in historical documentation.",
    "options": [
      {"id": 691, "option_text": "have", "is_correct": 0, "question_id": 69},
      {"id": 692, "option_text": "had", "is_correct": 1, "question_id": 69},
      {"id": 693, "option_text": "is", "is_correct": 0, "question_id": 69},
      {"id": 694, "option_text": "was", "is_correct": 0, "question_id": 69}
    ],
    "topic_id": 7
  },
  {
    "id": 70,
    "question_type": "multiple_choice",
    "question_text": "The testimony revealed that warnings ___ been ignored repeatedly.",
    "correct_answer": "had",
    "difficulty": "Medium",
    "explanation": "Past Perfect Passive in courtroom testimony.",
    "options": [
      {"id": 701, "option_text": "have", "is_correct": 0, "question_id": 70},
      {"id": 702, "option_text": "had", "is_correct": 1, "question_id": 70},
      {"id": 703, "option_text": "is", "is_correct": 0, "question_id": 70},
      {"id": 704, "option_text": "was", "is_correct": 0, "question_id": 70}
    ],
    "topic_id": 7
  },
  {
    "id": 71,
    "question_type": "multiple_choice",
    "question_text": "If he ___ known the consequences, he would never ___ agreed.",
    "correct_answer": "had;have",
    "difficulty": "Hard",
    "explanation": "Past Perfect conditional: 'had known' + would have agreed.",
    "options": [
      {"id": 711, "option_text": "had;have", "is_correct": 1, "question_id": 71},
      {"id": 712, "option_text": "has;have", "is_correct": 0, "question_id": 71},
      {"id": 713, "option_text": "would;have", "is_correct": 0, "question_id": 71},
      {"id": 714, "option_text": "has;would", "is_correct": 0, "question_id": 714}
    ],
    "topic_id": 7
  },
  {
    "id": 72,
    "question_type": "multiple_choice",
    "question_text": "Investigations disclosed that the corporation ___ systematically defrauded investors.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect in formal fraud disclosure.",
    "options": [
      {"id": 721, "option_text": "has", "is_correct": 0, "question_id": 72},
      {"id": 722, "option_text": "had", "is_correct": 1, "question_id": 72},
      {"id": 723, "option_text": "is", "is_correct": 0, "question_id": 72},
      {"id": 724, "option_text": "was", "is_correct": 0, "question_id": 724}
    ],
    "topic_id": 7
  },
  {
    "id": 73,
    "question_type": "multiple_choice",
    "question_text": "The inquiry established that protocols ___ been fundamentally violated.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in institutional inquiry.",
    "options": [
      {"id": 731, "option_text": "have", "is_correct": 0, "question_id": 73},
      {"id": 732, "option_text": "had", "is_correct": 1, "question_id": 73},
      {"id": 733, "option_text": "is", "is_correct": 0, "question_id": 73},
      {"id": 734, "option_text": "was", "is_correct": 0, "question_id": 734}
    ],
    "topic_id": 7
  },
  {
    "id": 74,
    "question_type": "multiple_choice",
    "question_text": "The document confirmed that arrangements ___ been negotiated clandestinely.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in covert arrangement disclosure.",
    "options": [
      {"id": 741, "option_text": "have", "is_correct": 0, "question_id": 74},
      {"id": 742, "option_text": "had", "is_correct": 1, "question_id": 74},
      {"id": 743, "option_text": "is", "is_correct": 0, "question_id": 74},
      {"id": 744, "option_text": "was", "is_correct": 0, "question_id": 744}
    ],
    "topic_id": 7
  },
  {
    "id": 75,
    "question_type": "multiple_choice",
    "question_text": "The analyst demonstrated that projections ___ been deliberately miscalculated.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in analytical demonstration.",
    "options": [
      {"id": 751, "option_text": "have", "is_correct": 0, "question_id": 75},
      {"id": 752, "option_text": "had", "is_correct": 1, "question_id": 75},
      {"id": 753, "option_text": "is", "is_correct": 0, "question_id": 75},
      {"id": 754, "option_text": "was", "is_correct": 0, "question_id": 754}
    ],
    "topic_id": 7
  },
  {
    "id": 76,
    "question_type": "multiple_choice",
    "question_text": "The forensic examination proved that evidence ___ been compromised previously.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in forensic analysis.",
    "options": [
      {"id": 761, "option_text": "have", "is_correct": 0, "question_id": 76},
      {"id": 762, "option_text": "had", "is_correct": 1, "question_id": 76},
      {"id": 763, "option_text": "is", "is_correct": 0, "question_id": 76},
      {"id": 764, "option_text": "was", "is_correct": 0, "question_id": 764}
    ],
    "topic_id": 7
  },
  {
    "id": 77,
    "question_type": "multiple_choice",
    "question_text": "The deposition revealed that directives ___ been explicitly communicated.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in legal deposition.",
    "options": [
      {"id": 771, "option_text": "have", "is_correct": 0, "question_id": 77},
      {"id": 772, "option_text": "had", "is_correct": 1, "question_id": 77},
      {"id": 773, "option_text": "is", "is_correct": 0, "question_id": 77},
      {"id": 774, "option_text": "was", "is_correct": 0, "question_id": 774}
    ],
    "topic_id": 7
  },
  {
    "id": 78,
    "question_type": "multiple_choice",
    "question_text": "The audit trail demonstrated that transactions ___ been systematically concealed.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in audit documentation.",
    "options": [
      {"id": 781, "option_text": "have", "is_correct": 0, "question_id": 78},
      {"id": 782, "option_text": "had", "is_correct": 1, "question_id": 78},
      {"id": 783, "option_text": "is", "is_correct": 0, "question_id": 78},
      {"id": 784, "option_text": "was", "is_correct": 0, "question_id": 784}
    ],
    "topic_id": 7
  },
  {
    "id": 79,
    "question_type": "multiple_choice",
    "question_text": "The investigation concluded that standards ___ been systematically contravened.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in investigative conclusion.",
    "options": [
      {"id": 791, "option_text": "have", "is_correct": 0, "question_id": 79},
      {"id": 792, "option_text": "had", "is_correct": 1, "question_id": 79},
      {"id": 793, "option_text": "is", "is_correct": 0, "question_id": 79},
      {"id": 794, "option_text": "was", "is_correct": 0, "question_id": 794}
    ],
    "topic_id": 7
  },
  {
    "id": 80,
    "question_type": "multiple_choice",
    "question_text": "The tribunal determined that falsifications ___ been perpetrated intentionally.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in legal tribunal determination.",
    "options": [
      {"id": 801, "option_text": "have", "is_correct": 0, "question_id": 80},
      {"id": 802, "option_text": "had", "is_correct": 1, "question_id": 80},
      {"id": 803, "option_text": "is", "is_correct": 0, "question_id": 80},
      {"id": 804, "option_text": "was", "is_correct": 0, "question_id": 804}
    ],
    "topic_id": 7
  },
  {
    "id": 81,
    "question_type": "multiple_choice",
    "question_text": "Documentation verified that sanctions ___ been circumvented systematically.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in documentary verification.",
    "options": [
      {"id": 811, "option_text": "have", "is_correct": 0, "question_id": 81},
      {"id": 812, "option_text": "had", "is_correct": 1, "question_id": 81},
      {"id": 813, "option_text": "is", "is_correct": 0, "question_id": 81},
      {"id": 814, "option_text": "was", "is_correct": 0, "question_id": 814}
    ],
    "topic_id": 7
  },
  {
    "id": 82,
    "question_type": "multiple_choice",
    "question_text": "The affidavit confirmed that provisions ___ been deliberately circumvented.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in legal affidavit.",
    "options": [
      {"id": 821, "option_text": "have", "is_correct": 0, "question_id": 82},
      {"id": 822, "option_text": "had", "is_correct": 1, "question_id": 82},
      {"id": 823, "option_text": "is", "is_correct": 0, "question_id": 82},
      {"id": 824, "option_text": "was", "is_correct": 0, "question_id": 824}
    ],
    "topic_id": 7
  },
  {
    "id": 83,
    "question_type": "multiple_choice",
    "question_text": "The certificate documented that requirements ___ been formally satisfied.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in certification document.",
    "options": [
      {"id": 831, "option_text": "have", "is_correct": 0, "question_id": 83},
      {"id": 832, "option_text": "had", "is_correct": 1, "question_id": 83},
      {"id": 833, "option_text": "is", "is_correct": 0, "question_id": 83},
      {"id": 834, "option_text": "was", "is_correct": 0, "question_id": 834}
    ],
    "topic_id": 7
  },
  {
    "id": 84,
    "question_type": "multiple_choice",
    "question_text": "The memorandum stipulated that precautions ___ been previously implemented.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in official memorandum.",
    "options": [
      {"id": 841, "option_text": "have", "is_correct": 0, "question_id": 84},
      {"id": 842, "option_text": "had", "is_correct": 1, "question_id": 84},
      {"id": 843, "option_text": "is", "is_correct": 0, "question_id": 84},
      {"id": 844, "option_text": "was", "is_correct": 0, "question_id": 844}
    ],
    "topic_id": 7
  },
  {
    "id": 85,
    "question_type": "multiple_choice",
    "question_text": "The verdict indicated that culpability ___ been substantiated conclusively.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in judicial verdict.",
    "options": [
      {"id": 851, "option_text": "have", "is_correct": 0, "question_id": 85},
      {"id": 852, "option_text": "had", "is_correct": 1, "question_id": 85},
      {"id": 853, "option_text": "is", "is_correct": 0, "question_id": 85},
      {"id": 854, "option_text": "was", "is_correct": 0, "question_id": 854}
    ],
    "topic_id": 7
  },
  {
    "id": 86,
    "question_type": "multiple_choice",
    "question_text": "The findings confirmed that infractions ___ been perpetrated knowingly.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in research findings.",
    "options": [
      {"id": 861, "option_text": "have", "is_correct": 0, "question_id": 86},
      {"id": 862, "option_text": "had", "is_correct": 1, "question_id": 86},
      {"id": 863, "option_text": "is", "is_correct": 0, "question_id": 86},
      {"id": 864, "option_text": "was", "is_correct": 0, "question_id": 864}
    ],
    "topic_id": 7
  },
  {
    "id": 87,
    "question_type": "multiple_choice",
    "question_text": "The record established that omissions ___ been deliberately enacted.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in institutional record.",
    "options": [
      {"id": 871, "option_text": "have", "is_correct": 0, "question_id": 87},
      {"id": 872, "option_text": "had", "is_correct": 1, "question_id": 87},
      {"id": 873, "option_text": "is", "is_correct": 0, "question_id": 87},
      {"id": 874, "option_text": "was", "is_correct": 0, "question_id": 874}
    ],
    "topic_id": 7
  },
  {
    "id": 88,
    "question_type": "multiple_choice",
    "question_text": "The documentation revealed that authorization ___ never been obtained.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Negative Past Perfect Passive in document disclosure.",
    "options": [
      {"id": 881, "option_text": "have", "is_correct": 0, "question_id": 88},
      {"id": 882, "option_text": "had", "is_correct": 1, "question_id": 88},
      {"id": 883, "option_text": "is", "is_correct": 0, "question_id": 88},
      {"id": 884, "option_text": "was", "is_correct": 0, "question_id": 884}
    ],
    "topic_id": 7
  },
  {
    "id": 89,
    "question_type": "multiple_choice",
    "question_text": "The investigation concluded that safeguards ___ been consistently disregarded.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in investigative conclusion.",
    "options": [
      {"id": 891, "option_text": "have", "is_correct": 0, "question_id": 89},
      {"id": 892, "option_text": "had", "is_correct": 1, "question_id": 89},
      {"id": 893, "option_text": "is", "is_correct": 0, "question_id": 89},
      {"id": 894, "option_text": "was", "is_correct": 0, "question_id": 894}
    ],
    "topic_id": 7
  },
  {
    "id": 90,
    "question_type": "multiple_choice",
    "question_text": "The testimony established that regulations ___ been systematically breached.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in courtroom testimony.",
    "options": [
      {"id": 901, "option_text": "have", "is_correct": 0, "question_id": 90},
      {"id": 902, "option_text": "had", "is_correct": 1, "question_id": 90},
      {"id": 903, "option_text": "is", "is_correct": 0, "question_id": 90},
      {"id": 904, "option_text": "was", "is_correct": 0, "question_id": 904}
    ],
    "topic_id": 7
  },
  {
    "id": 91,
    "question_type": "multiple_choice",
    "question_text": "The analysis demonstrated that anomalies ___ been deliberately introduced.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in technical analysis.",
    "options": [
      {"id": 911, "option_text": "have", "is_correct": 0, "question_id": 91},
      {"id": 912, "option_text": "had", "is_correct": 1, "question_id": 91},
      {"id": 913, "option_text": "is", "is_correct": 0, "question_id": 91},
      {"id": 914, "option_text": "was", "is_correct": 0, "question_id": 914}
    ],
    "topic_id": 7
  },
  {
    "id": 92,
    "question_type": "multiple_choice",
    "question_text": "The examination verified that modifications ___ been clandestinely executed.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in forensic examination.",
    "options": [
      {"id": 921, "option_text": "have", "is_correct": 0, "question_id": 92},
      {"id": 922, "option_text": "had", "is_correct": 1, "question_id": 92},
      {"id": 923, "option_text": "is", "is_correct": 0, "question_id": 92},
      {"id": 924, "option_text": "was", "is_correct": 0, "question_id": 924}
    ],
    "topic_id": 7
  },
  {
    "id": 93,
    "question_type": "multiple_choice",
    "question_text": "The report substantiated that irregularities ___ been methodically obscured.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in formal report.",
    "options": [
      {"id": 931, "option_text": "have", "is_correct": 0, "question_id": 93},
      {"id": 932, "option_text": "had", "is_correct": 1, "question_id": 93},
      {"id": 933, "option_text": "is", "is_correct": 0, "question_id": 93},
      {"id": 934, "option_text": "was", "is_correct": 0, "question_id": 934}
    ],
    "topic_id": 7
  },
  {
    "id": 94,
    "question_type": "multiple_choice",
    "question_text": "The evidence demonstrated that discrepancies ___ been deliberately obscured.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in evidence presentation.",
    "options": [
      {"id": 941, "option_text": "have", "is_correct": 0, "question_id": 94},
      {"id": 942, "option_text": "had", "is_correct": 1, "question_id": 94},
      {"id": 943, "option_text": "is", "is_correct": 0, "question_id": 94},
      {"id": 944, "option_text": "was", "is_correct": 0, "question_id": 944}
    ],
    "topic_id": 7
  },
  {
    "id": 95,
    "question_type": "multiple_choice",
    "question_text": "The declaration confirmed that transactions ___ been systematically fabricated.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in formal declaration.",
    "options": [
      {"id": 951, "option_text": "have", "is_correct": 0, "question_id": 95},
      {"id": 952, "option_text": "had", "is_correct": 1, "question_id": 95},
      {"id": 953, "option_text": "is", "is_correct": 0, "question_id": 95},
      {"id": 954, "option_text": "was", "is_correct": 0, "question_id": 954}
    ],
    "topic_id": 7
  },
  {
    "id": 96,
    "question_type": "multiple_choice",
    "question_text": "The assessment showed that departures ___ been deliberately orchestrated.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in professional assessment.",
    "options": [
      {"id": 961, "option_text": "have", "is_correct": 0, "question_id": 96},
      {"id": 962, "option_text": "had", "is_correct": 1, "question_id": 96},
      {"id": 963, "option_text": "is", "is_correct": 0, "question_id": 96},
      {"id": 964, "option_text": "was", "is_correct": 0, "question_id": 964}
    ],
    "topic_id": 7
  },
  {
    "id": 97,
    "question_type": "multiple_choice",
    "question_text": "The conclusion established that violations ___ been intentionally perpetrated.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in formal conclusion.",
    "options": [
      {"id": 971, "option_text": "have", "is_correct": 0, "question_id": 97},
      {"id": 972, "option_text": "had", "is_correct": 1, "question_id": 97},
      {"id": 973, "option_text": "is", "is_correct": 0, "question_id": 97},
      {"id": 974, "option_text": "was", "is_correct": 0, "question_id": 974}
    ],
    "topic_id": 7
  },
  {
    "id": 98,
    "question_type": "multiple_choice",
    "question_text": "The verification confirmed that falsifications ___ been institutionally sanctioned.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in institutional verification.",
    "options": [
      {"id": 981, "option_text": "have", "is_correct": 0, "question_id": 98},
      {"id": 982, "option_text": "had", "is_correct": 1, "question_id": 98},
      {"id": 983, "option_text": "is", "is_correct": 0, "question_id": 98},
      {"id": 984, "option_text": "was", "is_correct": 0, "question_id": 984}
    ],
    "topic_id": 7
  },
  {
    "id": 99,
    "question_type": "multiple_choice",
    "question_text": "The audit established that misappropriations ___ been systematically concealed.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in audit establishment.",
    "options": [
      {"id": 991, "option_text": "have", "is_correct": 0, "question_id": 99},
      {"id": 992, "option_text": "had", "is_correct": 1, "question_id": 99},
      {"id": 993, "option_text": "is", "is_correct": 0, "question_id": 99},
      {"id": 994, "option_text": "was", "is_correct": 0, "question_id": 994}
    ],
    "topic_id": 7
  },
  {
    "id": 100,
    "question_type": "multiple_choice",
    "question_text": "The documentation established that noncompliance ___ been deliberately sustained.",
    "correct_answer": "had",
    "difficulty": "Hard",
    "explanation": "Past Perfect Passive in documentation establishment.",
    "options": [
      {"id": 1001, "option_text": "have", "is_correct": 0, "question_id": 100},
      {"id": 1002, "option_text": "had", "is_correct": 1, "question_id": 100},
      {"id": 1003, "option_text": "is", "is_correct": 0, "question_id": 100},
      {"id": 1004, "option_text": "was", "is_correct": 0, "question_id": 1004}
    ],
    "topic_id": 7
  }
];

export default questions;