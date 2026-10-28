export const person = {
 name:'Nandhushree M', role:'AI & Generative AI', location:'Bengaluru, India',
 resume:'https://drive.google.com/file/d/16gJtABKVFiDvbU4jdngIZPcD3R6bRded/view?usp=sharing',
 github:'https://github.com/nandhushreem',
 college:'Nagarjuna College of Engineering & Technology',
};
export type Project = {id:string;title:string;category:'Research'|'Experiments';label:string;summary:string;detail:string;tags:string[];href?:string;linkLabel?:string;visual:'terrain'|'neural'|'flow'};
export const projects:Project[]=[
 {id:'01',title:'Mapping beyond the surface.',category:'Research',label:'3D ULPIN · RESEARCH BLUEPRINT',summary:'A team research blueprint exploring three-dimensional land administration and volumetric property mapping.',detail:'Listed as an undergraduate team contributor to the 3D ULPIN Mapping System research blueprint at NCET. The proposal explores extending India’s existing ULPIN framework to represent volumetric property. This is a research concept; no production deployment or individual implementation claim is implied.',tags:['3D mapping','Research','Collaboration'],href:'https://paladuguganeshnaidu.tech/sihresearch.html',linkLabel:'Read research blueprint',visual:'terrain'},
 {id:'02',title:'A playground for possibility.',category:'Experiments',label:'GENAI · LEARNING LAB',summary:'Exploring prompts, comparing responses, and discovering where generative tools can be genuinely useful.',detail:'An ongoing learning direction from my original portfolio: prompt experiments, model comparisons, and practical generative AI workflows. These are explorations rather than a released product. The next step is to document reproducible examples and share the learning process.',tags:['Generative AI','Prompting','Exploration'],visual:'neural'},
 {id:'03',title:'From an idea to a workflow.',category:'Experiments',label:'AI COLLABORATION · EXPLORATION',summary:'Investigating AI-assisted research, prototyping, and the small tasks worth automating.',detail:'A continuing exploration of AI as a collaborator in research, writing, analysis, and iteration. This portfolio documents that direction without claiming unverified model benchmarks or deployed applications.',tags:['AI tools','Automation','Prototyping'],visual:'flow'}
];
export const skillGroups=[
 {name:'Intelligence',title:'Understanding the possibilities.',description:'My current focus is practical AI: learning how models respond, asking better questions, and shaping useful outcomes.',items:['Generative AI exploration','Prompt engineering','AI-assisted research','Model response comparison']},
 {name:'Building',title:'Learning through iteration.',description:'Turning an open question into a small experiment, then improving it through feedback and collaboration.',items:['AI-assisted prototyping','Workflow exploration','Creative problem solving','Iterative experimentation']},
 {name:'Perspective',title:'Technology with context.',description:'Research collaboration and cyber-awareness activities inform how I think about useful, responsible technology.',items:['Research collaboration','Technical communication','Cyber-awareness','Continuous learning']},
];
export const milestones=[
 {label:'EDUCATION',title:'Computer Science undergraduate',body:'Studying at Nagarjuna College of Engineering & Technology, Bengaluru. Building a foundation for a future in AI engineering.',source:'https://paladuguganeshnaidu.tech/sihresearch.html',sourceLabel:'NCET research team listing'},
 {label:'RESEARCH',title:'3D ULPIN team contributor',body:'Part of the undergraduate team listed on a research blueprint for volumetric land administration.',source:'https://paladuguganeshnaidu.tech/sihresearch.html',sourceLabel:'Research blueprint'},
 {label:'COMMUNITY',title:'Cyber Surakshith Abhiyan',body:'Named as a teammate in a college demonstration on social-engineering awareness, including phishing, QR-code scams, and scareware.',source:'https://www.linkedin.com/posts/paladuguganeshnaidu_cybersecurity-socialengineering-livedemo-activity-7437865623851876354-0A5B',sourceLabel:'Event account'},
];
