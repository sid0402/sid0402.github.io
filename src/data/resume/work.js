/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'MetLife Insurance',
    position: 'Software Engineering Intern',
    url: 'https://www.metlife.com/',
    startDate: '2024-06-01',
    endDate: '2024-12-03',
    highlights: [
      'Built a vector search API with flask for 60,000+ employees to query 200+ company documents via natural languag',
      'Leveraged MiniLM-L6 model for documents/query vector embeddings, stored and retrieved with Azure AI Search',
      'Implemented automatic punctuation of natural language queries using FullStop model to improve document retrieval.',
      'Achieved a 25% improvement in user satisfaction & 35% reduction in document retrieval time during initial testing',
    ],
  },
  {
    name: 'Data Science Wizards',
    position: 'Data Science Intern',
    url: 'https://www.datasciencewizards.ai/',
    startDate: '2023-05-01',
    endDate: '2023-08-01',
    highlights: [
      'Implemented sentimenent analysis for customer calls with 93% accuracy, saving 20+ manual analysis hours monthly.',
      'Built an ETL pipeline using pre-trained speaker diarization and emotion recognition models, containerized with Docker.',
      'Helped classify 20,000+ images for cattle identification with 81% accuracy to prevent livestock insurance fraud',
      'Collaborated on building a ResNet-50 CNN with transfer learning and utilized OpenCV for image preprocessing.',
    ],
  },
  {
    name: 'Graph Computation and Machine Learning Lab',
    position: 'Undergraduate Researcher',
    url: 'https://sites.google.com/view/panli-purdue/home?authuser=0',
    startDate: '2023-04-01',
    endDate: '2023-09-01',
    highlights: [
      'Researched under Dr. Pan Li to develop a Graph Neural Network (GNN) with PyTorch to tackle pile-up mitigation.',
      'Completed Stanford’s ”Machine Learning with Graphs” (CS224W) and collaborated with 7 graduate researchers.',
    ],
  },
];

export default work;
