import { assetUrl } from "@/lib/asset-path";

export const lab = {
  name: "DDOmics Lab",
  institute: "National Centre for Cell Science",
  city: "Pune",
  email: "dhiraj.dhotre@nccs.res.in",
  academics: "academics@nccs.res.in",
  twitter: "https://twitter.com/DDOmicsLab",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/people", label: "People" },
  { to: "/dhiraj-dhotre", label: "Dr. Dhotre" },
] as const;

export const stats = [
  { value: 3400, suffix: "+", label: "Individuals sequenced in IHMI phase I" },
  { value: 17, suffix: "", label: "Endogamous populations sampled" },
  { value: 20000, suffix: "", label: "Target cohort for phase II" },
  { value: 5, suffix: "", label: "Active research tracks" },
];

export const marqueeWords = [
  "Metagenomics",
  "Culturomics",
  "Metabolomics",
  "16S rRNA",
  "Gut–Brain Axis",
  "INSACOG",
  "Anaerobic isolation",
  "Multi-omics",
  "Indian Microbiome",
];

export const methods = [
  {
    title: "We use classic microbiology",
    body: "Culture-based isolation and characterization ground our sequencing data in living, testable organisms — from gut anaerobes to potential probiotic strains.",
  },
  {
    title: "We use next-generation sequencing",
    body: "Targeted amplicon and metagenomic sequencing let us map community structure across thousands of individuals and dozens of endogamous populations.",
  },
  {
    title: "We integrate multi-omics data",
    body: "Genomic, metabolomic, and dietary datasets are combined to connect microbiome signatures to real health and disease outcomes.",
  },
];

export type ResearchTrack = {
  code: string;
  title: string;
  summary: string;
  detail: string;
  /** Optional visual (logo or illustration) associated with this track. */
  image?: string;
  imageAlt?: string;
};

export const researchTracks: ResearchTrack[] = [
  {
    code: "IHMI",
    title: "Indian Human Microbiome Initiative",
    summary:
      "A flagship project of NCCS Pune and DBT, Government of India, mapping the gut and oral cavity microbiome of 3,400 individuals from 17 endogamous populations.",
    detail:
      "Phase I profiles the gut and oral cavity microbiome of 3,400 individuals from 17 endogamous populations across the country using targeted amplicon and metagenomic sequencing, followed by 20,000 individuals in the next phase. The aim is a comprehensive dietary and baseline microbiome map of India for comparative analysis, usable across microbiome-based studies in human health, disease and therapy. The project runs in parallel with a genotyping study on the same individuals, allowing the two datasets to be correlated.",
    image: assetUrl("/images/research/ihmi-logo.jpg"),
    imageAlt: "Indian Human Microbiome Initiative logo",
  },
  {
    code: "M / I",
    title: "Impact of maternal microbiome on infant health",
    summary:
      "Longitudinal study of maternal gut, milk and skin microbiomes and their role in establishing a healthy infant microbiome.",
    detail:
      "Mothers play a crucial role in the acquisition and establishment of the infant microbiome in the first few weeks after birth. We study the longitudinal impact of maternal gut, milk and skin microbiomes on the development of the infant microbiome, focusing on how the maternal microbiome supports a healthy infant community and on tracking the physiological translocation of bacteria via the entero-mammary pathway.",
    image: assetUrl("/images/research/mother-infant-microbiome.webp"),
    imageAlt: "Illustration of maternal microbiome transmission to infant",
  },
  {
    code: "INSACOG",
    title: "Indian SARS-CoV-2 Consortium on Genomics",
    summary:
      "We are part of INSACOG, the forum set up under the Ministry of Health and Family Welfare, monitoring circulating SARS-CoV-2 variants in India.",
    detail:
      "Our aim is to study and monitor genome sequencing and virus variation of circulating strains of COVID-19 in India. We carry out whole-genome sequencing of the SARS-CoV-2 virus, aiding the understanding of how the virus spreads and evolves, and providing information that supports the public health response.",
  },
  {
    code: "GRD",
    title: "Microbiome associated with gluten spectrum disorders",
    summary:
      "Multi-omics study of intestinal and stool microbiomes in celiac disease, non-celiac gluten sensitivity and irritable bowel syndrome.",
    detail:
      "We study intestinal and stool microbiomes associated with gluten-related disorders such as celiac disease, non-celiac gluten sensitivity and functional gastrointestinal disorders including irritable bowel syndrome, using a multi-omics approach. The aim is to establish site-specific microbial biomarkers and their role in the development of GRDs, and to look for novel approaches towards potential diagnostics and therapeutics.",
  },
  {
    code: "GBA",
    title: "Gut–brain axis",
    summary:
      "Investigating gut–brain axis dysregulation in individuals with autism spectrum disorder.",
    detail:
      "Our main goal is to understand how the microbiome present in the gastrointestinal tract affects neurodevelopmental disorders such as autism spectrum disorder. Microbes in the body produce secondary metabolites such as short-chain fatty acids that directly regulate brain gene expression, and we quantify these alongside community profiles to trace plausible mechanistic links.",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  selected?: boolean;
};

export const publications: Publication[] = [
  {
    title:
      "Heart failure severity closely correlates with intestinal dysbiosis and subsequent metabolomic alterations",
    authors: "Spehlmann, M. E., Rangrez, A. Y., Dhotre, D. P., Schmiedel, N., Chavan, N., Bang, C., … Frey, N.",
    venue: "Biomedicines 10(4), 809",
    year: 2022,
    doi: "10.3390/biomedicines10040809",
    selected: true,
  },
  {
    title:
      "MicFunPred: A conserved approach to predict functional profiles from 16S rRNA gene sequence data",
    authors: "Mongad, D. S., Chavan, N. S., Narwade, N. P., Dixit, K., Shouche, Y. S., Dhotre, D. P.",
    venue: "Genomics 113(6), 3635–3643",
    year: 2021,
    doi: "10.1016/j.ygeno.2021.08.016",
    selected: true,
  },
  {
    title:
      "Gut, oral and skin microbiome of Indian patrilineal families reveal perceptible association with age",
    authors: "Chaudhari, D. S., Dhotre, D. P., Agarwal, D. M., Gaike, A. H., Bhalerao, D., Jadhav, P., … Shouche, Y. S.",
    venue: "Scientific Reports 10(1), 5685",
    year: 2020,
    doi: "10.1038/s41598-020-62195-5",
    selected: true,
  },
  {
    title:
      "The gut microbial diversity of newly diagnosed diabetics but not of prediabetics is significantly different from that of healthy nondiabetics",
    authors: "Gaike, A. H., Paul, D., Bhute, S., Dhotre, D. P., Pande, P., Upadhyaya, S., … Shouche, Y. S.",
    venue: "mSystems 5(2), e00578-19",
    year: 2020,
    doi: "10.1128/msystems.00578-19",
    selected: true,
  },
  {
    title: "Comparative genomics of whole-cell pertussis vaccine strains from India",
    authors: "Alai, S., Ghattargi, V. C., Gautam, M., Patel, K., Pawar, S. P., Dhotre, D. P., … Gairola, S.",
    venue: "BMC Genomics 21, 1–15",
    year: 2020,
    doi: "10.1186/s12864-020-6724-8",
    selected: true,
  },
  {
    title: "Sieving out non-celiac gluten sensitivity amongst patients with irritable bowel syndrome",
    authors: "Ahmed, A., Dixit, K., Singh, A., Agarwal, A., Mehtab, W., Prasad, S., Rajput, M. S., et al.",
    venue: "Digestive and Liver Disease",
    year: 2023,
  },
  {
    title:
      "Site-specific microbial signatures in non-celiac gluten sensitivity and irritable bowel syndrome",
    authors: "Dixit, K., Ahmed, A., Singh, A., Mehtab, W., Chauhan, A., Ahuja, V., Shouche, Y., Dhotre, D., Makharia, G. K.",
    venue: "Gastroenterology 164(6), S-923",
    year: 2023,
  },
  {
    title:
      "Indian sewage microbiome has unique community characteristics and potential for population-level disease predictions",
    authors: "Singh, K. S., Paul, D., Gupta, A., Dhotre, D., Klawonn, F., Shouche, Y.",
    venue: "Science of The Total Environment 858, 160178",
    year: 2023,
  },
  {
    title:
      "High antibiotic resistance in Indian sewage shows distinct trends and might be disjoint from in-situ antibiotic levels",
    authors: "Singh, K. S., Keer, A., Zed, A., Jasmeen, R., Mishra, K., Mourya, N., Paul, D., Dhotre, D., Shouche, Y.",
    venue: "Water, Air, & Soil Pollution 234(7), 467",
    year: 2023,
  },
  {
    title:
      "Prokaryotic communities adapted to microhabitats on the Indian lotus (Nelumbo nucifera) growing in the high-altitude urban Dal Lake",
    authors: "Chaudhari, D., Kiran, S., Choudhary, A., Silveira, K., Narwade, N., Dhotre, D., Khazir, J., Mir, B. A., Shouche, Y. S., Rahi, P.",
    venue: "International Microbiology 26(2), 257–267",
    year: 2023,
  },
  {
    title:
      "Bacterial communities and diversity of Western Ghats soil: A study of a biodiversity hotspot",
    authors: "Ghare, U., Narvekar, S., Lodha, T., Mallebhari, R., Dastager, S., Barvkar, V. T., Dhotre, D., Karmalkar, N. R., Pable, A. A.",
    venue: "Current Microbiology 80(4), 108",
    year: 2023,
  },
  {
    title:
      "Recent advances in production and applications of ectoine, a compatible solute of industrial relevance",
    authors: "Kadam, P., Khisti, M., Ravishankar, V., Barvkar, V., Dhotre, D., Sharma, A., Shouche, Y., Zinjarde, S.",
    venue: "Bioresource Technology, 130016",
    year: 2023,
  },
  {
    title:
      "Diversity of resistant determinants, virulence factors, and mobile genetic elements in Acinetobacter baumannii from India: A comprehensive in silico genome analysis",
    authors: "Kumkar, S. N., Kamble, E. E., Chavan, N. S., Dhotre, D. P., Pardesi, K. R.",
    venue: "Frontiers in Cellular and Infection Microbiology 12, 997897",
    year: 2022,
  },
  {
    title: "Characterization of Bordetella pertussis strains isolated from India",
    authors: "Alai, S., Gautam, M., Palkar, S., Oswal, J., Gairola, S., Dhotre, D. P.",
    venue: "Pathogens 11(7), 794",
    year: 2022,
  },
  {
    title: "Dataset of ileum bacterial diversity in mice after heart failure due to pressure overload",
    authors: "Spehlmann, M. E., Dhotre, D. P., Schmiedel, N., Chavan, N., Bang, C., Rangrez, A. Y.",
    venue: "Data in Brief 44, 108498",
    year: 2022,
  },
  {
    title: "Paenibacillus oleatilyticus sp. nov., isolated from soil",
    authors: "Chauhan, N. S., Joseph, N., Shaligram, S., Chavan, N., Joshi, A., Dhotre, D., Lodha, T., Shouche, Y.",
    venue: "Archives of Microbiology 204(8), 516",
    year: 2022,
  },
  {
    title:
      "Whole-genome sequencing of the tropical marine bacterium Nocardiopsis dassonvillei NCIM 5124, containing the ectoine biosynthesis gene cluster ectABC",
    authors: "Kadam, P., Kajale, S., Sharma, A., Dhotre, D., Barvkar, V., Shouche, Y., Zinjarde, S.",
    venue: "Microbiology Resource Announcements 11(10), e00435-22",
    year: 2022,
  },
  {
    title: "A microcosm model for the study of microbial community shift and carbon emission from landfills",
    authors: "Sagar, I., Nimonkar, Y., Dhotre, D., Shouche, Y., Ranade, D., Dewala, S., Prakash, O.",
    venue: "Indian Journal of Microbiology",
    year: 2022,
  },
  {
    title: "Mo1869 SITE-SPECIFIC MICROBIAL SIGNATURES IN NON-CELIAC GLUTEN SENSITIVITY AND IRRITABLE BOWEL SYNDROME",
    authors: "Dixit, Kunal, Anam Ahmed, Alka Singh, Wajiha Mehtab, Ashish Chauhan, Vineet Ahuja, Yogesh Shouche, Dhiraj Dhotre , Govind K. Makharia",
    venue: "Gastroenterology 164, no. 6",
    year: 2023,
  },
  {
    title: "Corrigendum: Diversity of resistant determinants, virulence factors, and mobile genetic elements in Acinetobacter baumannii from India: A comprehensive in silico genome analysis",
    authors: "Kumkar, Shital N., Ekta E. Kamble, Nikeeta S. Chavan, Dhiraj P. Dhotre , Karishma R. Pardesi",
    venue: "Frontiers in Cellular and Infection Microbiology 12",
    year: 2023,
  },
  {
    title: "False-positive detection of Group B Streptococcus (GBS) in chromogenic media (Strep B Carrot Broth) due to presence of Enterococcus faecalis in High Vaginal swabs",
    authors: "Singh, Abhishek, Atahar Husein, Salomi Singh, Vikas Ghattargi, Dhiraj Dhotre , Yogesh S. Shouche, Stacy Colaco et al.",
    venue: "Journal of Medical Microbiology 71, no. 8",
    year: 2022,
  },
  {
    title: "Probiotics: A Mainstream Therapy for the Disease Suppression",
    authors: "Ghattargi, Vikas C., Yogesh S. Shouche, Prashant K. Dhakephalkar, Praveen Rao, Venkata Ramana, Dhiraj P. Dhotre , Vikram B. Lanjekar",
    venue: "Publication details on request",
    year: 2022,
  },
  {
    title: "Rectal administration of buttermilk processed with medicinal plants alters gut microbiome in obese individuals",
    authors: "Mane, Sarika, Kunal K. Dixit, Nidhi Lathwal, Dhiraj Dhotre , Priyadarshani Kadus, Yogesh S. Shouche, Supriya Bhalerao",
    venue: "Journal of Diabetes & Metabolic Disorders 20, no. 2",
    year: 2021,
  },
  {
    title: "Restoration of dysbiotic human gut microbiome for homeostasis",
    authors: "Dixit, Kunal, Diptaraj Chaudhari, Dhiraj Dhotre , Yogesh Shouche, Sunil Saroj",
    venue: "Life Sciences 278",
    year: 2021,
  },
  {
    title: "Integrated Genomic and Functional Characterization of the Anti-diabetic Potential of Arthrobacter sp. SW1",
    authors: "Shaligram, Shraddha, Nitin P. Narwade, Shreyas V. Kumbhare, Manobjyoti Bordoloi, Kashyap J. Tamuli, Shyamalendu Nath, T. Parimelazhagan et al.",
    venue: "Current Microbiology 78, no. 7",
    year: 2021,
  },
  {
    title: "Disruptions in oral and nasal microbiota in biomass and tobacco smoke associated chronic obstructive pulmonary disease",
    authors: "Agarwal, Dhiraj M., Dhiraj P. Dhotre , Shreyas V. Kumbhare, Akshay H. Gaike, Bill B. Brashier, Yogesh S. Shouche, Sanjay K. Juvekar, Sundeep S. Salvi",
    venue: "Archives of Microbiology 203",
    year: 2021,
  },
  {
    title: "Contrasting composition, diversity and predictive metabolic potential of the rhizobacterial microbiomes associated with native and invasive Prosopis congeners",
    authors: "Kaushik, Rishabh, Maharaj K. Pandit, Laura A. Meyerson, Diptaraj S. Chaudhari, Meesha Sharma, Dhiraj Dhotre , Yogesh S. Shouche",
    venue: "Current Microbiology 78",
    year: 2021,
  },
  {
    title: "Benchmarking of 16S rRNA gene databases using known strain sequences",
    authors: "Dixit, Kunal, Dimple Davray, Diptaraj Chaudhari, Pratik Kadam, Rudresh Kshirsagar, Yogesh Shouche, Dhiraj Dhotre , Sunil D. Saroj",
    venue: "Bioinformation 17, no. 3",
    year: 2021,
  },
  {
    title: "Bacterial communities associated with the biofilms formed in high-altitude brackish water Pangong Tso located in the Himalayan Plateau",
    authors: "Chaudhari, Diptaraj S., Dhiraj P. Dhotre , Kunal Jani, Avinash Sharma, Yadvinder Singh, Yogesh S. Shouche, Praveen Rahi",
    venue: "Current Microbiology 77",
    year: 2020,
  },
  {
    title: "Draft genome sequences of two phytoplasma strains associated with sugarcane grassy shoot (SCGS) and bermuda grass white leaf (BGWL) diseases",
    authors: "Kirdat, Kiran, Bhavesh Tiwarekar, Vipool Thorat, Nitin Narawade, Dhiraj Dhotre , Shivaji Sathe, Yogesh Shouche, Amit Yadav",
    venue: "Molecular plant-microbe interactions 33, no. 5",
    year: 2020,
  },
  {
    title: "Treatment of industrial effluents and assessment of their impact on the structure and function of microbial diversity in a unique Anoxic-Aerobic sequential batch reactor (AnASBR)",
    authors: "Jena, Jyotsnarani, Nitin Narwade, Trupti Das, Dhiraj Dhotre , Ujjaini Sarkar, Yogesh Souche",
    venue: "Journal of environmental management 261",
    year: 2020,
  },
  {
    title: "Nitrincola tapanii sp. nov., a novel alkaliphilic bacterium from An Indian Soda Lake",
    authors: "Joshi, Amaraja, Sonia Thite, Dhiraj Dhotre , Manju Moorthy, Neetha Joseph, V. Venkata Ramana, Yogesh Shouche",
    venue: "International journal of systematic and evolutionary microbiology 70, no. 2",
    year: 2020,
  },
  {
    title: "Role of ectomycorrhizal biotechnology in pesticide remediation",
    authors: "Assad, Rezwana, Zafar Ahmad Reshi, Irfan Rashid, Yogesh Shouche, Dhiraj Dhotre",
    venue: "Bioremediation and Biotechnology, Vol 3: Persistent and Recalcitrant Toxic Substances",
    year: 2020,
  },
  {
    title: "Repeated mild traumatic brain injury affects microbial diversity in rat jejunum",
    authors: "Matharu, Dollwin, Dhiraj Dhotre , Nagalakshmi Balasubramanian, Namrata Pawar, Sneha Sagarkar, Amul Sakharkar",
    venue: "Journal of biosciences 44",
    year: 2019,
  },
  {
    title: "Understanding the association between the human gut, oral and skin microbiome and the Ayurvedic concept of prakriti",
    authors: "Chaudhari, Diptaraj, Dhiraj Dhotre , Dhiraj Agarwal, Arun Gondhali, Anand Nagarkar, Vikas Lad, Ulhas Patil, Sanjay Juvekar, Vilas Sinkar, Yogesh Sh...",
    venue: "Journal of Biosciences 44",
    year: 2019,
  },
  {
    title: "Microbiome and imputed metagenome study of crude and refined petroleum-oil-contaminated soils: Potential for hydrocarbon degradation and plant-growth promotion",
    authors: "Auti, Asim M., Nitin P. Narwade, Neelima M. Deshpande, Dhiraj P. Dhotre",
    venue: "Journal of Biosciences 44",
    year: 2019,
  },
  {
    title: "Genome sequence of Bordetella pertussis vaccine strain BP 165",
    authors: "Alai, Shweta, Vikas C. Ghattargi, Manish Gautam, Dhiraj P. Dhotre , Krunal Patel, Shrikant P. Pawar, Rakesh Kumar, Umesh Shaligram, Deepti Deobagka...",
    venue: "Microbiology Resource Announcements 8, no. 16",
    year: 2019,
  },
  {
    title: "Mining the core gut microbiome from a sample Indian population",
    authors: "Kulkarni, Abhijit S., Shreyas V. Kumbhare, Dhiraj P. Dhotre , Yogesh S. Shouche",
    venue: "Indian journal of microbiology 59",
    year: 2019,
  },
  {
    title: "Comparison of small gut and whole gut microbiota of first-degree relatives with adult celiac disease patients and controls",
    authors: "Bodkhe, Rahul, Sudarshan A. Shetty, Dhiraj P. Dhotre , Anil K. Verma, Khushbo Bhatia, Asha Mishra, Gurvinder Kaur et al.",
    venue: "Frontiers in microbiology",
    year: 2019,
  },
  {
    title: "Comparative genome analysis reveals key genetic factors associated with probiotic property in Enterococcus faecium strains",
    authors: "Ghattargi, Vikas C., Meghana A. Gaikwad, Bharati S. Meti, Yogesh S. Nimonkar, Kunal Dixit, Om Prakash, Yogesh S. Shouche, Shrikant P. Pawar, Dhiraj...",
    venue: "BMC genomics 19, no. 1",
    year: 2018,
  },
  {
    title: "World’s largest mass bathing event influences the bacterial communities of Godavari, a holy river of India",
    authors: "Jani, Kunal, Dhiraj Dhotre , Jayashree Bandal, Yogesh Shouche, Mangesh Suryavanshi, Vinay Rale, Avinash Sharma",
    venue: "Microbial ecology 76",
    year: 2018,
  },
  {
    title: "Effective biotransformation and detoxification of anthraquinone dye reactive blue 4 by using aerobic bacterial granules",
    authors: "Chaudhari, Ashvini U., Dhiraj Paul, Dhiraj Dhotre , Kisan M. Kodam",
    venue: "Water Research 122",
    year: 2017,
  },
  {
    title: "A cross-sectional comparative study of gut bacterial community of Indian and Finnish children",
    authors: "Kumbhare, Shreyas V., Himanshu Kumar, Somak P. Chowdhury, Dhiraj P. Dhotre , Akihito Endo, Jaana Mättö, Arthur C. Ouwehand et al.",
    venue: "Scientific reports 7, no. 1",
    year: 2017,
  },
  {
    title: "Induced sputum microbiome in smoker and non-smoker COPD subjects and its association with lung function in Indian subjects",
    authors: "Ghosh, Baishakhi, Akshay Gaike, Shreyas Kumbhare, Kanchan Pyasi, Jyoti Londhe, Vandana Vincent, Bill Brashier et al.",
    venue: "Publication details on request",
    year: 2017,
  },
  {
    title: "Potential of health and demographic surveillance system in asthma and chronic obstructive pulmonary disease microbiome research",
    authors: "Agarwal, Dhiraj, Dhiraj Dhotre , Rutuja Patil, Yogesh Shouche, Sanjay Juvekar, Sundeep Salvi",
    venue: "Frontiers in public health 5",
    year: 2017,
  },
  {
    title: "Reclassification of Phycicola gilvus (Lee et al. 2008) and Leifsonia pindariensis (Reddy et al. 2008) as Microterricola gilva comb. nov. and Microterricola pindariensis comb. nov. and emended description of the genus Microterricola",
    authors: "Dhotre, Dhiraj Prakash , Vaheesan Rajabal, Avinash Sharma, Girish J. Kulkarni, Om Prakash, Venkata Ramana Vemuluri, Neetha Joseph, Praveen Rahi, Yo...",
    venue: "International Journal of Systematic and Evolutionary Microbiology 67, no. 8",
    year: 2017,
  },
  {
    title: "Deep sequencing analysis of bacterial community structure of Soldhar hot spring, India",
    authors: "Sharma, A., D. Paul, D. Dhotre , K. Jani, A. Pandey, Y. S. Shouche",
    venue: "Microbiology 86",
    year: 2017,
  },
  {
    title: "Genomic and functional features of the biosurfactant producing Bacillus sp. AM13",
    authors: "Shaligram, Shraddha, Shreyas V. Kumbhare, Dhiraj P. Dhotre , Manohar G. Muddeshwar, Atya Kapley, Neetha Joseph, Hemant P. Purohit, Yogesh S. Shouch...",
    venue: "Functional & integrative genomics 16",
    year: 2016,
  },
  {
    title: "Molecular characterization and meta-analysis of gut microbial communities illustrate enrichment of Prevotella and Megasphaera in Indian subjects",
    authors: "Bhute, Shrikant, Pranav Pande, Sudarshan A. Shetty, Rahul Shelar, Sachin Mane, Shreyas V. Kumbhare, Ashwini Gawali et al.",
    venue: "Frontiers in microbiology 7",
    year: 2016,
  },
  {
    title: "Nitrincola alkalisediminis s p. nov., an alkaliphilic bacterium isolated from an alkaline lake",
    authors: "Joshi, Amaraja, Sonia Thite, Girish Kulkarni, Dhiraj Dhotre , Neetha Joseph, V. Venkata Ramana, Ashish Polkade, Yogesh Shouche",
    venue: "International Journal of Systematic and Evolutionary Microbiology 66, no. 3",
    year: 2016,
  },
  {
    title: "Insights into diversity and imputed metabolic potential of bacterial communities in the continental shelf of Agatti Island",
    authors: "Kumbhare, Shreyas V., Dhiraj P. Dhotre , Sunil Kumar Dhar, Kunal Jani, Deepak A. Apte, Yogesh S. Shouche, Avinash Sharma",
    venue: "PLoS One 10, no. 6",
    year: 2015,
  },
  {
    title: "Selenomonas",
    authors: "Shouche, Yogesh S., Abhijit S. Dighe, Dhiraj P. Dhotre , Milind S. Patole, Dilip R. Ranade",
    venue: "Bergey’s Manual of Systematics of Archaea and Bacteria",
    year: 2015,
  },
  {
    title: "Distribution and molecular characterization of Wolbachia endosymbionts in Odonata (Insecta) from Central India by multigene approach",
    authors: "Salunkhe, Rahul C., Dhiraj P. Dhotre , Bipinchandra K. Salunke, Vikas S. Patil, Vaibhav Mahale, Raymond J. Andrew, Milind S. Patole, Ketan P. Narkh...",
    venue: "Current Science",
    year: 2015,
  },
  {
    title: "Draft genome sequences of Yersinia pestis strains from the 1994 plague epidemic of Surat and 2002 Shimla outbreak in India",
    authors: "Mahale, Kiran N., Pradyumna S. Paranjape, Nachiket P. Marathe, Dhiraj P. Dhotre , Somak Chowdhury, Sudarshan A. Shetty, Avinash Sharma et al.",
    venue: "Indian journal of microbiology 54",
    year: 2014,
  },
  {
    title: "Characterization of bacterial community shift in human Ulcerative Colitis patients revealed by Illumina based 16S rRNA gene amplicon sequencing",
    authors: "Walujkar, Sandeep A., Dhiraj P. Dhotre , Nachiket P. Marathe, Parimal S. Lawate, Renu S. Bharadwaj, Yogesh S. Shouche",
    venue: "Gut pathogens 6, no. 1",
    year: 2014,
  },
  {
    title: "Comparative genome analysis of Mosquito vector",
    authors: "Dhotre, Dhiraj Prakash",
    venue: "Publication details on request",
    year: 2013,
  },
  {
    title: "Draft genome sequence of Methylophaga lonarensis MPLT, a haloalkaliphilic (non-methane-utilizing) methylotroph",
    authors: "Shetty, Sudarshan A., Nachiket P. Marathe, Hitendra Munot, Chakkiath Paul Antony, Dhiraj P. Dhotre , J. Colin Murrell, Yogesh S. Shouche",
    venue: "Genome announcements 1, no. 3",
    year: 2013,
  },
  {
    title: "Transcriptome analysis of Anopheles stephensi embryo using expressed sequence tags",
    authors: "Gokhale, Kaustubh, Deepak P. Patil, Dhiraj P. Dhotre , Rajnikant Dixit, Murlidhar J. Mendki, Milind S. Patole, Yogesh S. Shouche",
    venue: "Journal of biosciences 38",
    year: 2013,
  },
  {
    title: "Draft genome of Ochrobactrum intermedium strain M86 isolated from non-ulcer dyspeptic individual from India",
    authors: "Kulkarni, Girish, Dhiraj Dhotre , Mahesh Dharne, Sudarshan Shetty, Somak Chowdhury, Vatsala Misra, Sriprakash Misra, Milind Patole, Yogesh Shouche",
    venue: "Gut Pathogens 5, no. 1",
    year: 2013,
  },
  {
    title: "Genome sequence of Janibacter hoylei MTCC8307, isolated from the stratospheric air",
    authors: "Pawar, S. P., D. P. Dhotre , S. A. Shetty, S. P. Chowdhury, B. L. Chaudhari, Y. S. Shouche",
    venue: "Publication details on request",
    year: 2012,
  },
  {
    title: "Molecular analysis of gut microbiota in obesity among Indian individuals",
    authors: "Patil, Deepak P., Dhiraj P. Dhotre , Sachin G. Chavan, Armiya Sultan, Dhawal S. Jain, Vikram B. Lanjekar, Jayshree Gangawani et al.",
    venue: "Journal of biosciences 37",
    year: 2012,
  },
  {
    title: "Determination of Wolbachia diversity in butterflies from Western Ghats, India, by a multigene approach",
    authors: "Salunke, Bipinchandra K., Rahul C. Salunkhe, Dhiraj P. Dhotre , Sandeep A. Walujkar, Avinash B. Khandagale, Rahul Chaudhari, Rakesh K. Chandode et al.",
    venue: "Applied and Environmental Microbiology 78, no. 12",
    year: 2012,
  },
  {
    title: "Diversity of Wolbachia in Odontotermes spp.(Termitidae) and Coptotermes heimi (Rhinotermitidae) using the multigene approach",
    authors: "Salunke, Bipinchandra K., Rahul C. Salunkhe, Dhiraj P. Dhotre , Avinash B. Khandagale, Sandeep A. Walujkar, Gulab S. Kirwale, Hemant V. Ghate, Mili...",
    venue: "FEMS microbiology letters 307, no. 1",
    year: 2010,
  },
  {
    title: "Generation, annotation, and analysis of ESTs from midgut tissue of adult female Anopheles stephensi mosquitoes",
    authors: "Patil, Deepak P., Santosh Atanur, Dhiraj P. Dhotre , D. Anantharam, Vineet S. Mahajan, Sandeep A. Walujkar, Rakesh K. Chandode et al.",
    venue: "BMC genomics 10, no. 1",
    year: 2009,
  },
  {
    title: "The genus Selenomonas",
    authors: "Shouche, Y., A. Dighe, D. Dhotre , M. Patole, D. Ranade",
    venue: "Bergey’s Manual of Systematic Bacteriology 1106",
    year: 2009,
  },
  {
    title: "Molecular evidence and phylogenetic affiliations of Wolbachia in cockroaches",
    authors: "Vaishampayan, Parag A., Dhiraj P. Dhotre , Rakeshkumar P. Gupta, Pritesh Lalwani, Hemant Ghate, Milind S. Patole, Yogesh S. Shouche",
    venue: "Molecular phylogenetics and evolution 44, no. 3",
    year: 2007,
  },
  {
    title: "Evaluation of mitochondrial 12S rRNA gene in the identification of Panthera pardus fusca (Meyer, 1794) from field-collected scat samples in the Western Ghats, Maharashtra, India",
    authors: "Pandey, Prashant K., Dhiraj P. Dhotre , Mahesh S. Dharne, Ashok N. Khadse, Umesh I. Hiremath, Ravindra D. Chaudhari, Milind S. Patole, Yogesh S. Sh...",
    venue: "Current Science",
    year: 2007,
  },
];

export type SocialLinks = {
  twitter?: string;
  linkedin?: string;
  scholar?: string;
  orcid?: string;
  github?: string;
  website?: string;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  group: "pi" | "scientist" | "student" | "staff";
  link?: string;
  photo?: string;
  bio?: string;
  socials?: SocialLinks;
};

export const people: Person[] = [
  {
    slug: "dhiraj-dhotre",
    name: "Dr. Dhiraj Dhotre",
    role: "Principal Investigator, Scientist 'E'",
    group: "pi",
    link: "/dhiraj-dhotre",
    photo: assetUrl("/images/people/dhiraj-dhotre.jpg"),
  },
  {
    slug: "niraj-rane",
    name: "Dr. Niraj Rane",
    role: "Project Scientist",
    group: "scientist",
    photo: assetUrl("/images/people/niraj-rane.jpg"),
  },
  { slug: "mitali-inamdar", name: "Mitali Inamdar", role: "Ph.D. Student", group: "student" },
  {
    slug: "suyash-jadhav",
    name: "Suyash Jadhav",
    role: "Ph.D. Student",
    group: "student",
    photo: assetUrl("/images/people/suyash-jadhav.jpg"),
  },
  { slug: "puja-ghosh", name: "Puja Ghosh", role: "Ph.D. Student", group: "student" },
  {
    slug: "harshada-pardeshi",
    name: "Harshada Pardeshi",
    role: "Ph.D. Student",
    group: "student",
    photo: assetUrl("/images/people/harshada-pardeshi.jpg"),
  },
  { slug: "bhagyashree-karmarkar", name: "Bhagyashree Karmarkar", role: "Ph.D. Student", group: "student" },
  { slug: "hemangini-mahadeo", name: "Hemangini Mahadeo", role: "Technical Officer", group: "staff" },
  {
    slug: "tanaya-ghanvatkar",
    name: "Tanaya Ghanvatkar",
    role: "Project Staff",
    group: "staff",
    photo: assetUrl("/images/people/tanaya-ghanvatkar.jpg"),
  },
];

export const alumni = [
  {
    name: "Dr. Dattatray S. Mongad",
    role: "Ph.D. Student",
    photo: assetUrl("/images/people/dattatray-mongad.jpg"),
  },
  {
    name: "Dr. Kunal Dixit",
    role: "Ph.D. Student",
    photo: assetUrl("/images/people/kunal-dixit.jpg"),
  },
];

/** Candid lab-life photos for the scrolling gallery on the People page.
 *
 * Auto-discovered from src/assets/gallery — drop a new image file into that
 * folder (any name, jpg/jpeg/png/webp) and it will automatically appear in
 * the gallery on the next build. No code changes needed.
 */
const galleryModules = import.meta.glob<{ default: string }>(
  "../assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
export const galleryPhotos = Object.keys(galleryModules)
  .sort()
  .map((key) => galleryModules[key]!.default);

/* ---------- Principal Investigator ---------- */

export const pi = {
  name: "Dr. Dhiraj Dhotre",
  title: "Principal Investigator, Scientist 'E'",
  institute: "National Centre for Cell Science, Pune",
  about:
    "Dr. Dhiraj Dhotre is a bioinformatician with a research interest in the human microbiome. His lab investigates the role of the human microbiome in health and disease using genomics, metabolomics and culturomics approaches. He believes it is crucial to study the taxonomic, functional and metabolic structure of the microbiome to understand the true potential and consequences of alterations within it. His group generates high-throughput sequencing data and combines computational analyses of multi-dimensional omics data with molecular and in-vivo experimentation to understand the potential of the human microbiome in diagnostics and therapeutics.",
  experience: [
    {
      role: "Scientist \u2018E\u2019",
      period: "present",
      place: "National Centre for Cell Science, Pune",
    },
    {
      role: "Scientist \u2018D\u2019",
      period: "July 2021 – present",
      place: "National Centre for Cell Science, Pune",
    },
    {
      role: "Senior Research Scientist",
      period: "Dec 2019 – July 2021",
      place: "Reliance Life Sciences Pvt. Ltd., Navi Mumbai",
    },
    {
      role: "Scientist \u2018C\u2019",
      period: "Mar 2017 – Dec 2019",
      place: "National Centre for Microbial Resource, NCCS, Pune",
    },
    {
      role: "Scientist \u2018B\u2019",
      period: "May 2009 – Mar 2017",
      place: "Microbial Culture Collection, NCCS, Pune",
    },
  ],
  education: [
    { degree: "Ph.D. Biotechnology", period: "2006 – 2014", place: "Savitribai Phule Pune University (SPPU), Pune" },
    { degree: "M.Sc. Bioinformatics", period: "2003 – 2005", place: "Bioinformatics Centre, SPPU, Pune" },
    { degree: "B.Sc. Zoology", period: "1999 – 2003", place: "Mumbai University, Thane" },
  ],
  awards: [
    "Travel award for Management and Application of Microbial Data Resource, supported by WFCC, UNESCO, WDCM and IMCAS (2014)",
    "Indo-Finnish Mobility Award 2019, Academy of Finland",
  ],
  grants: [
    {
      title: "Human Microbiome Initiative of Select Endogamous Populations in India",
      code: "BT/PR23968/BRB/10/1602/2017-18",
      amount: "₹24,17,93,311",
    },
    {
      title: "DBT Consortium on Celiac Disease",
      code: "BT/PR45830/MED/12/963/2022",
      amount: "₹88,07,360",
    },
    {
      title: "Genomic Surveillance for SARS-CoV-2 in India — INSACOG Phase II",
      code: "INSACOG-II",
      amount: "₹89,21,000",
    },
    {
      title: "Centre of Excellence: National Centre for Microbial Resource",
      code: "BT/COORD.II/01/03/2016-179",
      amount: "₹118,42,85,291",
    },
  ],
};

export const news = [
  {
    date: "June 2026",
    title: "IHMI cohort crosses 3,000 sequenced gut and oral samples",
  },
  {
    date: "March 2026",
    title: "Lab presents mother–infant transmission findings at the Indian Microbiome Meeting",
  },
  {
    date: "November 2025",
    title: "New DBT grant awarded for gut–brain axis metabolomics",
  },
];
