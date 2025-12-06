// Cấu hình các chủ đề ngữ pháp theo nhóm
const topicsConfig = [
  {
    groupId: 1,
    groupName: "PHẦN I: Các Thì Trong Tiếng Anh",
    topics: [
      {
        id: 1,
        name: "Present Simple",
        nameVi: "Thì Hiện Tại Đơn",
        description: "Diễn tả thói quen, sự thật hiển nhiên, lịch trình cố định",
        file: "topic_01_present_simple.js"
      },
      {
        id: 2,
        name: "Present Continuous",
        nameVi: "Thì Hiện Tại Tiếp Diễn",
        description: "Diễn tả hành động đang xảy ra tại thời điểm nói, kế hoạch tương lai gần",
        file: "topic_02_present_continuous.js"
      },
      {
        id: 3,
        name: "Present Perfect",
        nameVi: "Thì Hiện Tại Hoàn Thành",
        description: "Diễn tả hành động đã hoàn thành nhưng còn liên quan đến hiện tại",
        file: "topic_03_present_perfect.js"
      },
      {
        id: 4,
        name: "Present Perfect Continuous",
        nameVi: "Thì Hiện Tại Hoàn Thành Tiếp Diễn",
        description: "Diễn tả hành động bắt đầu trong quá khứ, kéo dài đến hiện tại và có thể tiếp tục",
        file: "topic_04_present_perfect_continuous.js"
      },
      {
        id: 5,
        name: "Past Simple",
        nameVi: "Thì Quá Khứ Đơn",
        description: "Diễn tả hành động đã hoàn thành trong quá khứ, có thời gian xác định",
        file: "topic_05_past_simple.js"
      },
      {
        id: 6,
        name: "Past Continuous",
        nameVi: "Thì Quá Khứ Tiếp Diễn",
        description: "Diễn tả hành động đang xảy ra tại một thời điểm trong quá khứ",
        file: "topic_06_past_continuous.js"
      },
      {
        id: 7,
        name: "Past Perfect",
        nameVi: "Thì Quá Khứ Hoàn Thành",
        description: "Diễn tả hành động hoàn thành trước một hành động khác trong quá khứ",
        file: "topic_07_past_perfect.js"
      },
      {
        id: 8,
        name: "Past Perfect Continuous",
        nameVi: "Thì Quá Khứ Hoàn Thành Tiếp Diễn",
        description: "Diễn tả hành động kéo dài đến một thời điểm trong quá khứ",
        file: "topic_08_past_perfect_continuous.js"
      },
      {
        id: 9,
        name: "Future Simple",
        nameVi: "Thì Tương Lai Đơn",
        description: "Diễn tả dự đoán, quyết định tức thời, lời hứa về tương lai",
        file: "topic_09_future_simple.js"
      },
      {
        id: 10,
        name: "Future Continuous",
        nameVi: "Thì Tương Lai Tiếp Diễn",
        description: "Diễn tả hành động đang xảy ra tại một thời điểm trong tương lai",
        file: "topic_10_future_continuous.js"
      },
      {
        id: 11,
        name: "Future Perfect",
        nameVi: "Thì Tương Lai Hoàn Thành",
        description: "Diễn tả hành động sẽ hoàn thành trước một thời điểm trong tương lai",
        file: "topic_11_future_perfect.js"
      },
      {
        id: 12,
        name: "Future Perfect Continuous",
        nameVi: "Thì Tương Lai Hoàn Thành Tiếp Diễn",
        description: "Diễn tả hành động kéo dài đến một thời điểm trong tương lai",
        file: "topic_12_future_perfect_continuous.js"
      },
      {
        id: 13,
        name: "Other Future Expressions",
        nameVi: "Các Cách Diễn Đạt Tương Lai Khác",
        description: "Be going to, be about to, be to, present tenses cho tương lai",
        file: "topic_13_other_future_expressions.js"
      }
    ]
  },
  {
    groupId: 2,
    groupName: "PHẦN II: Các Loại Từ",
    topics: [
      {
        id: 14,
        name: "Nouns",
        nameVi: "Danh Từ",
        description: "Danh từ đếm được/không đếm được, danh từ riêng/chung, danh từ ghép",
        file: "topic_14_nouns.js"
      },
      {
        id: 15,
        name: "Pronouns",
        nameVi: "Đại Từ",
        description: "9 loại đại từ: nhân xưng, sở hữu, phản thân, chỉ định, nghi vấn, quan hệ, bất định, hỗ tương, phân phối",
        file: "topic_15_pronouns.js"
      },
      {
        id: 16,
        name: "Verbs",
        nameVi: "Động Từ",
        description: "Động từ thường, động từ tobe, trợ động từ, động từ khuyết thiếu",
        file: "topic_16_verbs.js"
      },
      {
        id: 17,
        name: "Adjectives",
        nameVi: "Tính Từ",
        description: "Tính từ mô tả, quy tắc sắp xếp OSASCOMP, so sánh tính từ",
        file: "topic_17_adjectives.js"
      },
      {
        id: 18,
        name: "Adverbs",
        nameVi: "Trạng Từ",
        description: "6 loại: cách thức, thời gian, nơi chốn, tần suất, mức độ, chắc chắn",
        file: "topic_18_adverbs.js"
      },
      {
        id: 19,
        name: "Prepositions",
        nameVi: "Giới Từ",
        description: "Giới từ chỉ thời gian, nơi chốn, hướng, phương tiện, nguyên nhân",
        file: "topic_19_prepositions.js"
      },
      {
        id: 20,
        name: "Conjunctions",
        nameVi: "Liên Từ",
        description: "4 loại: kết hợp, tương phản, nguyên nhân, điều kiện",
        file: "topic_20_conjunctions.js"
      },
      {
        id: 21,
        name: "Interjections",
        nameVi: "Thán Từ",
        description: "5 loại: vui mừng, ngạc nhiên, đau đớn, chào hỏi, sự chấp thuận",
        file: "topic_21_interjections.js"
      }
    ]
  },
  {
    groupId: 3,
    groupName: "PHẦN III: Cấu Trúc Câu",
    topics: [
      {
        id: 22,
        name: "Sentence Structures",
        nameVi: "Cấu Trúc Câu Cơ Bản",
        description: "5 cấu trúc: SV, SVO, SVC, SVOC, SVOO",
        file: "topic_22_sentence_structures.js"
      },
      {
        id: 23,
        name: "Active & Passive Voice",
        nameVi: "Câu Chủ Động & Bị Động",
        description: "Chuyển đổi giữa câu chủ động và bị động với 12 thì",
        file: "topic_23_active_passive.js"
      },
      {
        id: 24,
        name: "Conditional Sentences",
        nameVi: "Câu Điều Kiện",
        description: "5 loại câu điều kiện và dạng đảo ngữ",
        file: "topic_24_conditional_sentences.js"
      },
      {
        id: 25,
        name: "Comparative Sentences",
        nameVi: "Câu So Sánh",
        description: "So sánh bằng, hơn, nhất, so sánh kép, so sánh bội số",
        file: "topic_25_comparative_sentences.js"
      },
      {
        id: 26,
        name: "Wish Sentences",
        nameVi: "Câu Ước",
        description: "Wish cho hiện tại, quá khứ, tương lai và if only",
        file: "topic_26_wish_sentences.js"
      },
      {
        id: 27,
        name: "Relative Clauses",
        nameVi: "Mệnh Đề Quan Hệ",
        description: "Mệnh đề quan hệ xác định/không xác định, rút gọn mệnh đề",
        file: "topic_27_relative_clauses.js"
      },
      {
        id: 28,
        name: "Reported Speech",
        nameVi: "Câu Tường Thuật",
        description: "Tường thuật câu kể, câu hỏi, câu mệnh lệnh, lời khuyên",
        file: "topic_28_reported_speech.js"
      },
      {
        id: 29,
        name: "Question Forms",
        nameVi: "Các Dạng Câu Hỏi",
        description: "Yes/No questions, Wh-questions, Tag questions, Indirect questions",
        file: "topic_29_question_forms.js"
      },
      {
        id: 30,
        name: "Cleft Sentences",
        nameVi: "Câu Chẻ",
        description: "It is...that/who, What...is, All...is để nhấn mạnh",
        file: "topic_30_cleft_sentences.js"
      },
      {
        id: 31,
        name: "Inversion",
        nameVi: "Đảo Ngữ",
        description: "Đảo ngữ với trạng từ phủ định, điều kiện, so sánh",
        file: "topic_31_inversion.js"
      }
    ]
  },
  {
    groupId: 4,
    groupName: "PHẦN IV: Các Dạng Động Từ Đặc Biệt",
    topics: [
      {
        id: 32,
        name: "Gerunds",
        nameVi: "Danh Động Từ",
        description: "V-ing làm chủ ngữ, tân ngữ, sau giới từ, sau một số động từ",
        file: "topic_32_gerunds.js"
      },
      {
        id: 33,
        name: "To-Infinitive",
        nameVi: "Động Từ Nguyên Mẫu Có TO",
        description: "To V sau tính từ, để chỉ mục đích, sau một số động từ",
        file: "topic_33_to_infinitive.js"
      },
      {
        id: 34,
        name: "Bare Infinitive",
        nameVi: "Động Từ Nguyên Mẫu Không TO",
        description: "V nguyên thể sau modal verbs, let, make, help, động từ tri giác",
        file: "topic_34_bare_infinitive.js"
      },
      {
        id: 35,
        name: "Gerund vs To-Infinitive",
        nameVi: "V-ing vs To V (Thay Đổi Nghĩa)",
        description: "Các động từ có nghĩa khác nhau khi theo sau bởi V-ing hoặc to V",
        file: "topic_35_gerund_vs_infinitive.js"
      }
    ]
  },
  {
    groupId: 5,
    groupName: "PHẦN V: Cấu Trúc Đặc Biệt",
    topics: [
      {
        id: 36,
        name: "Enough/Too, So...that/Such...that",
        nameVi: "Cấu Trúc Đủ/Quá, Quá...Đến Nỗi",
        description: "Enough to, too to, so...that, such...that",
        file: "topic_36_enough_too.js"
      },
      {
        id: 37,
        name: "Used to/Would/Be used to",
        nameVi: "Quen Thuộc & Thói Quen Trong Quá Khứ",
        description: "Used to V, would V, be/get used to V-ing",
        file: "topic_37_used_to.js"
      },
      {
        id: 38,
        name: "Have/Have got & There is/are",
        nameVi: "Có & Tồn Tại",
        description: "Have/have got sở hữu, there is/are/be tồn tại",
        file: "topic_38_have_there.js"
      },
      {
        id: 39,
        name: "Correlative Conjunctions",
        nameVi: "Liên Từ Tương Quan",
        description: "Neither...nor, either...or, both...and, not only...but also",
        file: "topic_39_correlative_conjunctions.js"
      },
      {
        id: 40,
        name: "Negative Inversion",
        nameVi: "Đảo Ngữ Với Trạng Từ Phủ Định",
        description: "Never, seldom, rarely, hardly, no sooner, not only đầu câu",
        file: "topic_40_negative_inversion.js"
      }
    ]
  },
  {
    groupId: 6,
    groupName: "PHẦN VI: Mạo Từ & Lượng Từ",
    topics: [
      {
        id: 41,
        name: "Articles",
        nameVi: "Mạo Từ",
        description: "A/an (bất định), the (xác định), không dùng mạo từ (zero article)",
        file: "topic_41_articles.js"
      },
      {
        id: 42,
        name: "Quantifiers",
        nameVi: "Lượng Từ",
        description: "Some/any, much/many, a few/a little, a lot of, enough, all, most",
        file: "topic_42_quantifiers.js"
      }
    ]
  },
  {
    groupId: 7,
    groupName: "PHẦN VII: Động Từ Khuyết Thiếu",
    topics: [
      {
        id: 43,
        name: "Modal Verbs",
        nameVi: "Động Từ Khuyết Thiếu",
        description: "16 modal verbs: khả năng, sự cho phép, lời khuyên, nghĩa vụ, dự đoán, khả năng trong quá khứ",
        file: "topic_43_modal_verbs.js"
      }
    ]
  },
  {
    groupId: 8,
    groupName: "PHẦN VIII: Các Cấu Trúc Bổ Sung",
    topics: [
      {
        id: 44,
        name: "Noun Details",
        nameVi: "Danh Từ Chi Tiết",
        description: "Danh từ số nhiều bất quy tắc, danh từ tập hợp, danh từ ghép",
        file: "topic_44_noun_details.js"
      },
      {
        id: 45,
        name: "Common Prepositions",
        nameVi: "Giới Từ Thường Gặp",
        description: "Các cụm giới từ cố định, phrasal verbs phổ biến",
        file: "topic_45_common_prepositions.js"
      },
      {
        id: 46,
        name: "Conjunctive Adverbs",
        nameVi: "Liên Từ & Trạng Từ Chuyển Tiếp",
        description: "However, therefore, moreover, nevertheless, furthermore",
        file: "topic_46_conjunctive_adverbs.js"
      },
      {
        id: 47,
        name: "Participles",
        nameVi: "Phân Từ",
        description: "V-ing (hiện tại phân từ), V3/ed (quá khứ phân từ), rút gọn mệnh đề",
        file: "topic_47_participles.js"
      },
      {
        id: 48,
        name: "Causative, Emphatic & Imperative",
        nameVi: "Cấu Trúc Nhờ Vả, Nhấn Mạnh & Mệnh Lệnh",
        description: "Have/get something done, do/does/did nhấn mạnh, câu mệnh lệnh",
        file: "topic_48_causative_emphatic.js"
      },
      {
        id: 49,
        name: "Language Functions",
        nameVi: "Chức Năng Ngôn Ngữ Phổ Biến",
        description: "Gợi ý, lời mời, xin phép, từ chối, đồng ý, than phiền, xin lỗi",
        file: "topic_49_language_functions.js"
      }
    ]
  }
];