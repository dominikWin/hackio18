
var parsePrereqs = function(prereqString){
  console.log(prereqString);
	return prereqString.split(" or ");
}
var csv = `Course,Name,Desc,Prereqs
"CSE 5231","Software Engineering Techniques","","CSE 3901 or CSE 3902 or CSE 560"
"CSE 2193","Individual Studies in Computer Science and","Planning, conducting, and reporting a special study appropriate to the needs of the students.","Permission of Instructor"
"CSE 6999","MS Thesis Research in Computer Science and","MS research in Computer Science and Engineering, leading to a thesis.",""
"CSE 5433","Operating Systems Laboratory","Introduction to the internals of operating systems; designing and implementing components within commercial","CSE 2431 or CSE 5431 or (CSE 660 and (CSE 2451 or CSE 459.21))"
"CSE 4252","Programming in C++","Syntax and pragmatics of C++ programming; C++ types, arrays, classes, pointers; objects and classes; compiletime vs. run-time picture; inheritance; template classes.","CSE 2231"
"CSE 5531","Introduction to Cognitive Science","Interdisciplinary survey of the fields of artificial intelligence, linguistics, neuroscience, philosophy of mind,and psychology; various aspects of cognitive perception, representation, and computation.","At least 12 sem-cr-hrs equivalent from at least two of the following four"
"CSE 1113","Spreadsheet Programming for Business","Spreadsheet modeling/programming concepts and techniques to solve business related problems;efficient/effective data handling, computational analysis and decision support.","(Math 1130 or higher) or (Math 130 or higher under quarters)"
"CSE 6331","Algorithms","Algorithm design paradigms; mathematical analysis of algorithms.","CSE 2331 or CSE 5331 or CSE 680"
"CSE 5194","Group Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Graduate standing or permission of instructor"
"CSE 6321","Computability and Complexity","Turing machines, decidability, recursive enumerability; many-to-one and polynomial-time reductions; NPcompleteness, Cook-Levin Theorem; Recursion Theorem.","CSE 5321 or CSE 3321 or CSE 625"
"CSE 5349","Intermediate Studies in Programming","Intermediate-level topics in programming languages.",""
"CSE 1212","Computational Thinking in Context: Mobile","Introduction to computational thinking, focusing on problem solving and programming concepts and skillsneeded to develop applications for mobile platforms; creativity and imagination encouraged.",""
"CSE 5522","Survey of Artificial Intelligence II: Advanced","Survey of advanced concepts, techniques, and applications of artificial intelligence, including knowledgerepresentation, learning, natural language understanding, and vision.","CSE 3521 or CSE 5521 or CSE 630 or grad standing"
"CSE 5421","Introduction to Computer Architecture","Organization of hardware and software in modern computer systems, including instruction set design,processor control, ALU design, pipelining, multicores and accelerators, and memory subsystem design.","(CSE 2231 or CSE 321) and (CSE 2421 or CSE 360 or ECE 2560 or ECE265) and (ECE 2000 or ECE 261)"
"CSE 5434","Comparative Operating Systems","A careful examination of a number of representative computer operating systems.","CSE2431 (660) or CSE5431"
"CSE 2232","Software II.5-Transition: Software","Transition from quarters to semesters, Resolve/C++ to Java; introduction to Java; tools for coding, testing,version control, documentation; language-specific best practices stemming from principles of component-baseddesign.","CSE 321"
"CSE 4251","The UNIX Programming Environment","","CSE 2231 or CSE 321"
"CSE 5431","Systems II: Introduction to Operating Systems","","CSE 2421 or ((ECE 2560 or ECE 265 or CSE 360) and CSE 2451)"
"CSE 8999","PhD Dissertation Research in Computer","PhD research in Computer Science and Engineering, leading to a dissertation.",""
"CSE 4193H","Individual Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Honors status; Permission of Instructor"
"CSE 1110","Introduction to Computing Technology","A course of general interest giving experience with personal computer software, e.g., word processors andspreadsheets; provides fundamental computer literacy; neither teaches nor requires programming.",""
"CSE 4193","Individual Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Permission of Instructor"
"CSE 6339","Advanced Studies in Algorithms","Advanced-level topics in algorithms.",""
"CSE 3321","Automata and Formal Languages","Machine-based and grammatical models of computation; finite automata and regular languages; pushdownautomata and context-free languages; Turing machines; non-determinism; Churchs Thesis; halting problem.","(CSE 2231 or CSE 321) and (CSE 2331 or Math 566) and (CSE 2421 orCSE 360)"
"CSE 5194","Legal Topics for Computer Engineers","This course introduces students to areas of law that govern computer engineering and design. The goals of thecourse include mastery of a set of legal doctrines, as well as immersion in the legal method used by lawyers toanalyze problems and by judges to decide cases. Students can expect to learn how to evaluate computerengineering methods and projects through the lens of legal analysis.","CSE 2501 or Philos 1338, and CSE 39xy; or grad standing; or withpermission of instructor"
"CSE 5471","Information Security","Introduction to security of digital information; threats and attacks; regulations; risk management; attackdetection and response; cryptography; forensics; technical training and certifications.","(CSE 2231 and CSE 2321) or CSE 321"
"CSE 5914","Capstone Design: Knowledge-Based Systems","Capstone design project; conceptual and technical design; theory and practice of knowledge-based systems;teamwork, written and oral communication skills.","(CSE 2501 or CSE 5501 or CSE 601) and (CSE 3901 or CSE 3902 or CSE4901 or CSE 4902 or CSE 560) and (CSE 3521 or CSE 5521 or CSE 630)"
"CSE 5523","Machine Learning and Statistical Pattern","Introduction to basic concepts of machine learning and statistical pattern recognition; techniques forclassification, clustering and data representation and their theoretical analysis.","(CSE 3521 or CSE 5521 or CSE 5243) and (CSE 5522 or Stat 3460 or Stat3470)"
"CSE 2451","Advanced C Programming","Advanced C features for students with significant programming experience in another language.","CSE 2221 or CSE 222; co-req: CSE 2231"
"CSE 6469","Advanced Studies in Computer Networking","Advanced-level topics in computer networking.",""
"CSE 5913","Capstone Design: Computer Animation","","(CSE 2501 or CSE 5501 or CSE 601) and (CSE 3901 or CSE 3902 or CSE4901 or CSE 4902 or CSE 560) and (CSE 3541 or CSE 5541 or CSE 683)"
"CSE 1222","Introduction to Computer Programming in","Introduction to computer programming and to problem solving techniques using computer programs withapplications in engineering and the physical sciences; algorithm development; programming lab experience.","co-req: Math 1151 or Math 1161"
"CSE 3341","Principles of Programming Languages","Formal languages and grammars; recursive descent parsing; data types, expressions, control structures,parameter passing; compilers and interpreters; memory management; functional programming principles.","CSE 2231 and (CSE 2331 or CSE 680) and CSE 2421 and (CSE 3901 orCSE 3902 or CSE 560)"
"CSE 6341","Foundations of Programming Languages","","CSE 3341 or CSE 5341 or CSE 655"
"CSE 5915","Capstone Design: Information Systems","","(CSE 2501 or CSE 5501 or CSE 601) and (CSE 3901 or CSE 3902 or CSE4901 or CSE 4902 or CSE 560) and (CSE 3241 or CSE 5241 or CSE 670)"
"CSE 6194","Group Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Permission of Instructor"
"CSE 6429","Advanced Studies in Computer Architecture","Advanced-level topics in computer architecture.",""
"CSE 5236","Mobile Application Development","Mobile application development frameworks; Architecture, design and engineering issues, techniques,methodologies for mobile application development.","CSE 3901 or CSE 3902 or CSE 5901 or CSE 5902 or CSE 560"
"CSE 1211","Computational Thinking in Context: Images, Animation,","Introduction to computational thinking, focusing on problem solving and programming concepts and skillsneeded to manipulate digital images and to create interactive graphics, animations, and games; creativity andimagination encouraged.",""
"CSE 5524","Computer Vision for Human-Computer","Computer vision algorithms for use in human-computer interactive systems; image formation, image features,segmentation, shape analysis, object tracking, motion calculation, and applications.","CSE 2331 or senior or grad standing"
"CSE 6422","Advanced Computer Architecture","Fundamental design issues in parallel architectures, design of scalable shared memory and distributed memorysystems, interconnection networks (on-chip and off-chip), multi-core architectures, accelerators, embeddedsystems, and exascale systems.","(CSE 6421 or CSE 775) and (CSE 6441 or CSE 721)"
"CSE 5461","Computer Networking and Internet","Computer networks, communication protocols, Internet TCP/IP and applications, wireless communications andnetwork security.","CSE 2421 or ((ECE 2560 or 265) and CSE 2451); co-req: CSE 2431"
"CSE 2331","Foundations II: Data Structures and","Design/analysis of algorithms and data structures; divide-and-conquer; sorting and selection, search trees,hashing, graph algorithms, string matching; probabilistic analysis; randomized algorithms; NP-completeness.","(CSE 2231 or CSE 321) and (CSE 2321 or Math 366) and (Math 2566 orMath 566) and (Stat 3470 or Stat 427)."
"CSE 5541","Computer Game and Animation Techniques","Fundamental algorithms and mathematics in the production of computer animation and video games,emphasizing the control and rendering of animated characters.","CSE 3901 or CSE 3902"
"CSE 5911","Capstone Design: Software Applications","","(CSE 2501 or CSE 5501 or CSE 601) and (CSE 3901 or CSE 3902 or CSE4901 or CE 4902 or CSE 560) and (CSE 3231 or CSE 5231 or CSE 757)"
"CSE 6329","Advanced Studies in Computation Theory","Advanced-level topics in computation theory.",""
"CSE 5473","Network Security","Security threats and services, elements of cryptography, protocols for security services, network and internetsecurity, advanced security issues and technologies.","CSE 3461 or CSE 5461 or CSE 677"
"CSE 4255","Programming in Perl","Syntax and pragmatics of Perl programming; Perl mechanisms for text and file processing, scripting, clientserver programming, etc.; powerful ways to combine these mechanisms.","CSE 2231 and CSE 2331 and CSE 2421"
"CSE 5545","Advanced Computer Graphics","Advanced topics in computer graphics; image synthesis, lighting and rendering, sampling and materialproperties, volume rendering.","CSE 5541 or CSE 581"
"CSE 2501","Social, Ethical, and Professional Issues in Computing","Social, ethical, and professional issues facing computing professionals; ethical principles; discussion of casestudies.","(CSE 1222 or CSE 1223 or CSE 2231 or CSE 214 or CSE 230 or CSE 222)and (CSE 2321 or Math 366) and (CSE 2421 or CSE 360)"
"CSE 2194H","Group Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Permission of Instructor"
"CSE 3421","Introduction to Computer Architecture","Organization of hardware and software in modern computer systems, including instruction set design,processor control, ALU design, pipelining, multicores and accelerators, and memory subsystem design.","(CSE 2231 or CSE 321) and (CSE 2421 or CSE 360 or ECE 2560 or ECE265) and (ECE 2000 or ECE 261)"
"CSE 5891","Proseminar in Cognitive Science","In-depth examination of the interdisciplinary field of Cognitive Science; fundamental issues of each discipline;illustrations of representative research being conducted at OSU.","CSE 5531"
"CSE 2431","Systems II: Introduction to Operating Systems","","CSE 2421 or ((CSE 360 or ECE 2560 or ECE 265) and (CSE 2451 or CSE459.21 or CSE 459.22))"
"CSE 4901","Project: Design, Development, and","Intensive group project involving design, development, and documentation of a web application; client-sideand server-side scripting; communication skills emphasized; builds programming maturity.","Programming maturity and graduate standing"
"CSE 5912","Capstone Design: Game Design and Development","Capstone design project; conceptual and technical design and implementation of interactive game, integratingcustom code and toolkits; teamwork, written and oral communication skills.","(CSE 2501 or CSE 5501 or CSE 601) and (CSE 3901 or CSE 3902 or CSE4901 or CSE 4902 or CSE 560) and (CSE 3541 or CSE 5541 or CSE 581)"
"CSE 1112","Introduction to Computer-Assisted Problem","Using productivity software, especially spreadsheets and databases, to solve problems for constructionmanagement; relative/absolute cell referencing, logic, functions; relational databases, querying, projectintegration.",""
"CSE 5339","Intermediate Studies in Algorithms","Intermediate-level topics in algorithms.",""
"CSE 6249","Advanced Studies in Databases","Advanced-level topics in databases.",""
"CSE 4999","Computer Science and Engineering Research","Supervised research and project work arranged individually.","Permission of Instructor"
"CSE 5245","Introduction to Network Science","Introduction to Network Science; Global and Local Network Measures; PageRank; Community DiscoveryAlgorithms; Network Models; Understanding the role of network analysis in Web and Social networkapplications","CSE 2331"
"CSE 5321","Automata and Formal Languages","Machine-based and grammatical models of computation; finite automata and regular languages, pushdownautomata and context-free languages, Turing machines; non-determinism; Churchs Thesis; halting problem.","(CSE 2231 or CSE 321) and (CSE 2331 or Math 566) and (CSE 2421 orCSE 360)"
"CSE 1111","Introduction to Computer-Assisted Problem","Problem solving techniques using productivity software; spreadsheets, formulas, conditional logic; relationaldatabases, relational algebra; word processing; data presentation; graphics.",""
"CSE 1223","Introduction to Computer Programming in","Introduction to computer programming and to problem solving techniques using computer programs;programming lab experience.",""
"CSE 5343","Compiler Design and Implementation","Lexical and syntax analyses using compiler generation tools; type checking; intermediate code; control-flowanalysis; dataflow analysis; code optimizations; code generation; compiler project.","(CSE 3901 or CSE 3902 or CSE 560) and (CSE 3341 or CSE 655)"
"CSE 3521","Survey of Artificial Intelligence I: Basic","Survey of basic concepts and techniques in artificial intelligence, including problem solving, knowledgerepresentation, and machine learning.","CSE 2331 or (CSE 222 and Math 366) or senior standing"
"CSE 3541","Computer Game and Animation Techniques","Fundamental algorithms and mathematics in production of computer animation and video games, emphasizingcontrol and rendering of animated characters.","CSE 3901 or CSE 3902 or CSE 560"
"CSE 4194H","Group Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Honors status; Permission of Instructor"
"CSE 6441","Parallel Computing","Principles and practice of parallel computing; design, implementation, and performance evaluation of parallelprograms for shared-memory, distributed-memory and heterogeneous parallel systems.","CSE 5441 or CSE 621"
"CSE 5479","Intermediate Studies in Computer Security","Intermediate-level topics in computer security.",""
"CSE 4254","Programming in Lisp","Lisp programming for students well-versed in programming with another language.","CSE 2231"
"CSE 4471","Information Security","Introduction to security of digital information; threats and attacks; regulations; risk management; attackdetection and response; cryptography; forensics; technical training and certifications.","Prereq: 2231 and 2321, or 321."
"CSE 5235","Applied Enterprise Architectures and Services","Modeling/analysis of complex enterprise architectures; enterprise patterns (workflow, broker, warehousing);methods for service performance (lean, ontologies, data mining, etc.); emerging topics in semantic cyberinfrastructures, social computation.","CSE 5911 or CSE 5912 or CSE 5913 or CSE 5914 or CSE 5915 or CSE 682or CSE 731 or CSE 758 or CSE 762 or CSE 772 or CSE 778"
"CSE 6439","Advanced Studies in Operating Systems","Advanced-level topics in operating systems.",""
"CSE 5429","Intermediate Studies in Computer","Intermediate-level topics in computer architecture.",""
"CSE 2502S","Digital Bridge","Organization and information relationships in building community computing; technical inter-workings ofcomponents, wireless networking, and software; refurbishing computers and teaching customer service bestpractices.",""
"CSE 3903","Project: Design, Development, and Documentation of","Intensive group project involving design, development, and documentation of system software including anassembler and a linking loader; communication skills emphasized; builds programming maturity.","Pre-req: 2231; and 2321; and 2421 or 3430, or 2451 and ECE2560"
"CSE 8998","PhD Research in Computer Science and","PhD research in Computer Science and Engineering.",""
"CSE 6193","Individual Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Permission of Instructor"
"CSE 5449","Intermediate Studies in Parallel Computing","Intermediate-level topics in parallel computing.",""
"CSE 4231","Software II: Software Development and Design","Data representation using hashing, search trees, and linked data structures; algorithms for sorting; using treesfor language processing; component interface design; best practices in Java.","CSE 2221 or CSE 4221"
"CSE 5544","Introduction to Data Visualization","Principles and methods for visualizing data from measurements and calculations in physical and life sciences,and transactional and social disciplines; information visualization; scientific visualization.","Prereq: 5361, Stat 3301, 3541, or 5541."
"CSE 3902","Project: Design, Development, and Documentation of","Intensive group project involving design, development, and documentation of an interactive software system, a2D interactive game; communication skills emphasized; builds programming maturity.","Pre-req: 2231; and 2321; and 2421 or 3430, or 2451 and ECE2560."
"CSE 1114","Introduction to databases using MS Access","Database concepts and techniques for efficient/effective data handling, computational analysis and decisionsupport.",""
"CSE 6461","Computer Communication Networks","Foundational understanding of network analysis, error-control, routing, congestion-control, multi-access, andtheir examples in the context of the existing communication networks.","Undergraduate course in probability or Stat 3470 or Math 530 or Stat 428 orStat 520 or ECE 6001 or ECE 804"
"CSE 5232","Software Requirements Analysis","Information systems analysis; object-oriented analysis models and tools; use cases, system modeling usingUML; requirements specification development; term project.","CSE 3901 or CSE 3902 or CSE 560"
"CSE 4998","Undergraduate Research in Computer","Opportunity for undergraduate student to conduct research in Computer Science and Engineering.","Permission of Instructor"
"CSE 8193","Individual Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Permission of Instructor"
"CSE 2123","Data Structures Using Java","Subroutines and modular programming; searching; basic data structures; recursion; introduction to sequentialfiles.","CSE 1223 or CSE 201"
"CSE 2221","Software I: Software Components","Intellectual foundations of software engineering; design-by-contract principles; mathematical modeling ofsoftware functionality; component-based software from client perspective; layered data representation.","CSE 1211 or CSE 1212 or CSE 1221 or CSE 1222 or CSE 1223 or CSE 201"
"CSE 6998","MS Research in Computer Science and","MS research in Computer Science and Engineering.",""
"CSE 2233","Business Programming with File Processing","","CSE 1233 or CSE 214"
"CSE 5359","Intermediate Studies in Cryptography","Intermediate-level topics in cryptography.",""
"CSE 6479","Advanced Studies in Computer Security","Advanced-level topics in computer security.",""
"CSE 6421","Computer Architecture","Principles and tradeoffs behind the design of modern computer architectures, including instruction-levelparallelism, memory system design, advanced cache architectures, cache coherence, multiprocessors, energyefficient and embedded architectures.","(CSE 3421 or CSE 5421 or CSE 675 or ECE 5362 or ECE 662) and (CSE3431 or CSE 5431 or CSE 660)"
"CSE 2194","Group Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Permission of Instructor"
"CSE 6449","Advanced Studies in Parallel Computing","Advanced-level topics in parallel computing.",""
"CSE 6333","Distributed Algorithms","Fundamental concepts in distributed computing; algorithms for distributed control and data; impossibility andlimits; algorithms for fault-tolerance; specification, design and verification of distributed programs.","CSE 6431 or CSE 760"
"CSE 2193H","Individual Studies in Computer Science and","Planning, conducting, and reporting a special study appropriate to the needs of the students.","Permission of Instructor"
"CSE 5889","Advanced Topics in Law & CSE","This interdisciplinary seminar explores an advanced topic of study on laws that govern computer engineeringand design. The course offers additional exposure to legal methodologies, and trains students to apply legalanalysis to an engineering project of their choosing.",""
"CSE 5194","Data Intensive Query Interfaces","Designed to give the student an opportunity to pursue special studies not otherwise offered.","CSE 5242 or CSE 5244, or permission of instructor"
"CSE 1221","Introduction to Computer Programming in","Introduction to computer programming and problem solving techniques with applications in engineering andthe physical sciences; algorithm development; programming lab experience.","Engr 1181 or Engr 1281 or Engr 181 or Engr 191 or ((Math 1151 or Math1161 or Math 151 or Math 161) and (Phys 1250 or Phys 131))"
"CSE 2231","Software II-Transition: Software","Transition from quarters to semesters, Resolve/C++ to Java; data representation using hashing, search trees,and linked data structures; sorting; using trees for language processing; component interface design; bestpractices in Java.","CSE 2222 or CSE 222 or CSE 222H; co-req: CSE 2321"
"CSE 3232","Software Requirements Analysis","Information systems analysis; object-oriented analysis models and tools; use cases, system modeling usingUML; requirements specification development; term project.","CSE 3901 or CSE 3902 or CSE 560"
"CSE 5194","Group Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Permission of Instructor"
"CSE 5241","Introduction to Database Systems","Database systems use; logical design; entity-relationship model; normalization; query languages and SQL;relational algebra and calculus; object relational databases; XML; active databases; database design project.","(CSE 2231 or CSE 321) and (CSE 2321 or Math 366)"
"CSE 5032","Foundations I: Discrete Structures","Propositional and first-order logic; basic proof techniques; graphs, trees; analysis of algorithms; asymptoticanalysis; recurrence relations.","5022 or equivalent"
"CSE 5521","Survey of Artificial Intelligence I: Basic","Survey of the basic concepts and techniques in artificial Intelligence, including problem solving, knowledgerepresentation, and machine learning.","CSE 2331 or (CSE 222 and Math 366)"
"CSE 3901","Project: Design, Development, and Documentation of Web","Intensive group project involving design, development, and documentation of a web application; client-sideand server-side scripting; communication skills emphasized; builds programming maturity.","Prereq: 2231; and 2321; and 2421 or 3430, or 2451 and ECE2560"
"CSE 5432","Mobile Handset Systems and Networking","","CSE 2421 or ((ECE 2560 or ECE 265) and (CSE 2451 or CSE 459.21))"
"CSE 6359","Advanced Studies in Cryptography","Advanced-level topics in cryptography.",""
"CSE 5441","Introduction to Parallel Computing","Parallel programming models; sequential and parallel performance issues; high-performance computerarchitecture; design, analysis, implementation and performance evaluation of parallel algorithms.","Pre-req: (CSE 2231 and CSE 2321 and (CSE 2421 or ((ECE 2560 or ECE265) and CSE 2451)) and (Math 2568 or Math 568 or Math 571)) or graduate standing."
"CSE 3430","Overview of Computer Systems For Non-Majors","Introduction to computer architecture and organization at machine and assembly level; pointers and addressing","Prereq: 2122 or 2123, and 2321"
"CSE 3244","Data Management in the Cloud","Systematic organization of data on cloud computing architectures; basic indexing techniques, including B-treeand hash-based indexing; fundamentals of query optimization, including access path selection and cardinalityestimation; full and partial replication; data partitioning and distributed task scheduling.","Prereq: 3241 or 5241; 2421 or 3430."
"CSE 5341","Principles of Programming Languages","Formal languages and grammars; recursive descent parsing; data types, expressions, control structures,parameter passing; compilers and interpreters; memory management; functional programming principles.","CSE 2231 and (CSE 2331 or CSE 680) and CSE 2421 and (CSE 3901 orCSE 3902 or CSE 560)"
"CSE 4689","Professional Practice in Industry","Preparation and submission of a comprehensive report based on actual employment experience in a co-op jobin industry.","Permission of the CSE Advising Office"
"CSE 5472","Information Security Projects","","(CSE 3901 or CSE 3902 or CSE 560) and (CSE 3461 or CSE 5461 or CSE5471)"
"CSE 2112","Modeling and Problem Solving with Spreadsheets and","Spreadsheet and database modeling/programming concepts and techniques to solve business and engineeringrelated problems; efficient/effective data handling, computational analysis and decision support.","1211 (203) or 1212 or 1221 (205) or 1222 (202) or 1223 (201) or 204 or"
"CSE 6332","Advanced Algorithms","Advanced graph algorithms, string algorithms, linear programming, matrix operations, Fourier transforms,randomized algorithms, approximation algorithms, geometric algorithms.","CSE 6331 or CSE 780"
"CSE 5439","Intermediate Studies in Operating Systems","Intermediate-level topics in operating systems.",""
"CSE 6431","Advanced Operating Systems","Advanced topics in operating systems and concurrency; introduction to distributed systems.","CSE 2431 or CSE 5431 or CSE 660"
"CSE 5539","Intermediate Studies in Artificial Intelligence","Intermediate-level topics in artificial intelligence.",""
"CSE 4221","Introduction to Object-Oriented","Introduction to object-oriented programming for experienced procedural programmers; interfaces, classes,packages; implements and extends relationships; design patterns; best practices.","Previous programming experience in a procedural language"
"CSE 5543","Geometric Modeling","Common algorithmic and mathematical techniques for modeling geometric objects in computer graphics andCAD applications; sample based modeling, mesh generation, and hierarchical representations.","Math 2568 or Math 568 or Math 571"
"CSE 6239","Advanced Studies in Software Engineering","Advanced-level topics in software engineering.",""
"CSE 5194","Virtual Reality","Principles and methods for the design, development, and evaluation of three-dimensional interfaces in virtualenvironments and their applications in data science, medicine, and engineering.","Graduate standing or permission of instructor"
"CSE 2021","Introduction to Modeling and Simulation","","Math 1151 (152) or equivalent, Phys 1250 (131)"
"CSE 6539","Advanced Studies in Artificial Intelligence","Advanced-level topics in artificial intelligence.",""
"CSE 4253","Programming in C#","C# programming for students well-versed in programming with another object-oriented language.","CSE 2231"
"CSE 2122","Data Structures Using C++","Introduction to programming in C++ and object-oriented programming; encapsulation using classes,inheritance, etc.","CSE 1222 or CSE 202"
"CSE 5526","Introduction to Neural Networks","Survey of fundamental methods and techniques of neural networks; single- and multi-layer perceptrons; radialbasis function networks; support vector machines; recurrent networks; supervised and unsupervised learning.","CSE 3521"
"CSE 2421","Systems I: Introduction to Low-Level","Introduction to computer architecture at machine and assembly language level; pointers and addressing; Cprogramming at machine level; computer organization.","(CSE 1232 or CSE 1233 or CSE 2231 or CSE 321) and (CSE 2321 or Math2566 or Math 366)"
"CSE 5463","Introduction to Wireless Networking","Fundamental concepts in cellular design, Wireless-LANs, MANETs, and sensor networks will be explored.Specific topics will include propagation, fading, cellular-design, power-management, routing, scheduling, andcontrol.","CSE 3461 or 677 or ECE 3367 or 561 or graduate standing in engineering ormath & physical sciences."
"CSE 4902","Project: Design, Development, and","Intensive group project involving design, development, and documentation of an interactive software system, a2D interactive game; communication skills emphasized; builds programming maturity.","Programming maturity and graduate standing"
"CSE 4998H","Undergraduate Research in Computer","Opportunity for undergraduate student to conduct research in Computer Science and Engineering.","Honors status; Permission of Instructor"
"CSE 5329","Intermediate Studies in Computation Theory","Intermediate-level topics in computation theory.",""
"CSE 5889","Intermediate Studies in Multidisciplinary","Intermediate-level topics in multidisciplinary computing techniques","Prereq: permission of instructor or grad standing"
"CSE 2231","Software II: Software Development and","Data representation using hashing, search trees, and linked data structures; algorithms for sorting; using treesfor language processing; component interface design; best practices in Java.","CSE 2221; co-req: CSE 2321"
"CSE 2222","Software I.5-Transition: Development of","Templates for generalization and decoupling; container components; component-based software from","CSE 221"
"CSE 5469","Intermediate Studies in Computer Networking","Intermediate-level topics in computer networking.",""
"CSE 3461","Computer Networking and Internet Technologies","Computer networks, communication protocols, Internet TCP/IP and applications, wireless communications andnetwork security.","Prereq: 2421; or 2451 and ECE 2560 (265). Concur: 2431."
"CSE 2321","Foundations I: Discrete Structures","Propositional and first-order logic; basic proof techniques; graphs, trees; analysis of algorithms; asymptoticanalysis; recurrence relations.","Prereq: 2122 (230), 2123 (214), or 2221 (222); and Math 1151 (152), or"
"CSE 4521","Survey of Artificial Intelligence for NonMajors","Survey of the basic concepts and techniques in artificial intelligence, including problem solving, knowledgerepresentation, and machine learning.","CSE 1211 or CSE 1221 or CSE 1222 or CSE 1223 or CSE 2221 or graduatestanding"
"CSE 5242","Advanced Database Management Systems","Transaction management; query processing and optimization; organization of database systems, advancedindexing, multi-dimensional data, similarity-based analysis, performance evaluation, new database applications.","CSE 3241"
"CSE 5351","Introduction to Cryptography","Foundations of cryptography; mathematical formulations/proofs of security goals; theory and practicalconstructions of encryption schemes, MACs, digital signatures; zero-knowledge proof systems; cryptographicprotocols.","(Stat 3460 or Stat 3470 or Stat 427) and (CSE 2331 or CSE 5331 or CSE680 or Math 4573 or Math 573 or Math 4580 or Math 580)"
"CSE 5525","Foundations of Speech and Language","Fundamentals of natural language processing, automatic speech recognition and speech synthesis; lab projectsconcentrating on building systems to process written and/or spoken language.","(CSE 3521 or CSE 5521) and (CSE 5522 or Stat 3460 or Stat 3470)"
"CSE 5559","Intermediate Studies in Computer Graphics","Intermediate-level topics in computer graphics.",""
"CSE 5361","Numerical Methods","","CSE 2231 and (Math 2568 or 568 or 571) and (Math 1151 or Math 151)"
"CSE 5249","Intermediate Studies in Databases","Intermediate-level topics in databases.",""
"CSE 2111","Modeling and Problem Solving with","Spreadsheet and database modeling/programming concepts and techniques to solve business related problems;","(Math 1130 or higher) or (Math 130 or higher under quarters)"
"CSE 3231","Software Engineering Techniques","","Prereq: 3901 or 3902 or 3903."
"CSE 5234","Distributed Enterprise Computing","Current application and middleware frameworks for distributed enterprise computing; XML; Enterprise Java;SOAP and REST web services; AJAX and JSON; enterprise service bus; Hadoop; mobile computing.","CSE 3431 or CSE 5431 or CSE 660"
"CSE 4194","Group Studies in Computer Science and Engineering","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Permission of Instructor"
"CSE 2133","Business Programming with File Processing","","Prereq: 2123 (214)."
"CSE 3241","Introduction to Database Systems","Database systems use; logical design; entity-relationship model; normalization; query languages and SQL;relational algebra and calculus; object relational databases; XML; active databases; database design project.","(CSE 2231 or CSE 321) and (CSE 2321 or Math 366)"
"CSE 6559","Advanced Studies in Computer Graphics","Advanced-level topics in computer graphics.",""
"CSE 6231","Formal Foundations of Software Engineering","Formal approaches to program semantics and software properties; software specification and verification;model checking; static analysis; systematic testing.","(CSE 3321 or CSE 5321 or CSE 625) and (CSE 3341 or CSE 5341 or CSE655)"
"CSE 5501","Social, Ethical, and Professional Issues in","Social, ethical, and professional issues facing computing professionals; ethical principles; discussion of casestudies.","(CSE 1222 or CSE 1223 or CSE 2231 or CSE 214 or CSE 230 or CSE 222)and (CSE 2321 or Math 366) and (CSE 2421 or CSE 360)"
"CSE 4999H","Computer Science and Engineering","Supervised research and project work arranged individually for honors students","Honors status; Permission of Instructor"
"CSE 5244","Data Management in the Cloud","Systematic organization of data on cloud computing architectures; basic indexing techniques, including B-treeand hash-based indexing; fundamentals of query optimization, including access path selection and cardinalityestimation; full and partial replication; data partitioning and distributed task scheduling.","3241 or 5241, and 2421 or 3430; or grad standing"
"CSE 5462","Network Programming","IP-based socket programming in C/C++, TinyOS programming in NesC.","CSE 3461 or CSE 5461 or CSE 677"
"CSE 8194","Group Studies in Computer Science and","Designed to give the student an opportunity to pursue special studies not otherwise offered.","Permission of Instructor"
"CSE 5542","Real-Time Rendering","Comprehensive list of topics in real-time rendering using OpenGL and GLSL, including coordinate systems,transformations, viewing, illumination, texture mapping, and shader-based algorithms.","(CSE 3901 or CSE 3902 or CSE 4901 or CSE 4902 or CSE 560) and (Math2568 or Math 568 or Math 571)"
"CSE 5042","Systems I: Introduction to Low-Level","Introduction to computer architecture at machine and assembly language level; pointers and addressing; Cprogramming at machine level; computer organization.","2122 (230) or 2123 (314) or 2231 or 321, and 2321 or Math 2366 or Math366"
"CSE 5243","Introduction to Data Mining","Knowledge discovery, data mining, data preprocessing, data transformations; clustering, classification, frequentpattern mining, anomaly detection, graph and network analysis; applications.","CSE 2331 and CSE 3241"
"CSE 5239","Intermediate Studies in Software Engineering","Intermediate-level topics in software engineering.",""
"CSE 5331","Foundations II: Data Structures and","Design/analysis of algorithms and data structures; divide-and-conquer; sorting and selection, search trees,hashing, graph algorithms, string matching; probabilistic analysis; randomized algorithms; NP-completeness.","(CSE 2231 or CSE 321) and (CSE 2321 or Math 366) and (Math 2566 orMath 566) and (Stat 3470 or Stat 427)"
"CSE 5043","Overview of Computer Systems For NonMajors","Introduction to computer architecture and organization at machine and assembly level; pointers and addressing","Prereq: 5022 or equivalent, and 5032 or equivalent"
"CSE 6349","Advanced Studies in Programming Languages","Advanced-level topics in programming languages.",""
`;

//read in the courses
var courses = Papa.parse(csv);

//remove the column headers
courses.data.splice(0, 1);
console.log(courses);

//each prereq
var prereqEdges = [];

//add each course as a node
var courseNodes = [];
for(i = 0; i < courses.data.length; i++){
	//parse the prereqs into a list
	courses.data[i][3] = parsePrereqs(courses.data[i][3]);
	courseNodes.push({data: { id: courses.data[i][0]}});
	
}
for(i = 0; i < courses.data.length; i++){
	for(j = 0; j < courses.data[i][3].length; j++){
		if(courses.data[i][3][j].length > 0){
			prereqEdges.push({ data: { target: courses.data[i][3][j], source: courses.data[i][0] } })

		}
	}
}
console.log(courseNodes);
console.log(prereqEdges);

var cy = window.cy = cytoscape({
	container: document.getElementById('cy'),
  
	boxSelectionEnabled: false,
	autounselectify: true,
  
	layout: {
	  name: 'dagre'
	},
  
	style: [
	  {
		selector: 'node',
		style: {
		  'content': 'data(id)',
		  'text-opacity': 0.5,
		  'text-valign': 'center',
		  'text-halign': 'right',
		  'background-color': '#11479e'
		}
	  },
  
	  {
		selector: 'edge',
		style: {
		  'curve-style': 'bezier',
		  'width': 4,
		  'target-arrow-shape': 'triangle',
		  'line-color': '#9dbaea',
		  'target-arrow-color': '#9dbaea'
		}
	  }
	],
  
	elements: {
	  nodes: courseNodes,
	  edges: prereqEdges
	//   edges: [
	// 	{ data: { source: 'CSE 2221', target: 'CSE 1223' } },
	//   ]
	},
  });
