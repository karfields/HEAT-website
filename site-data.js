// H.E.A.T. 2027 Website Data
// Edit this file to update names, bios, emails, links, speakers, events, or gallery images.

const SITE = {
  conferenceName: 'H.E.A.T. 2027 Annual Conference',
  fullName: 'Humanities, Ethics, and Anesthesia Technical Skills',
  date: 'February 27, 2027',
  dateISO: '2027-02-27T09:00:00-06:00',
  location: 'Location TBD',
  instagram: '@heatanesthesia',
  instagramUrl: 'https://www.instagram.com/heatanesthesia/',
  registrationUrl: '#',
  abstractUrl: '#',
  primaryEmail: ''
};

const NAV = [
  ['Home', '#home'],
  ['Program Events', '#program-events'],
  ['Research', '#research'],
  ['Speakers', '#speakers'],
  ['Executive Board', '#executive-board'],
  ['Gallery', '#gallery'],
  ['Attend!', '#attend']
];

const EXPERIENCES = [
  {
    title: 'Humanities & Ethics Panel',
    audience: 'All attendees',
    text: 'A panel-style conversation with attendings, residents, and a humanities moderator focused on professional identity formation in real clinical practice. Themes include moral agency in the OR, speaking up in hierarchical spaces, professional detachment versus humanism, accountability after mistakes, and how trainees grow through ethically challenging moments.'
  },
  {
    title: 'Technical Skills Workshops',
    audience: 'Pre-medical and medical students',
    text: 'Hands-on anesthesia-related stations led by physicians and upper-level medical students. Prior workshop content included airway anatomy, intubation techniques, CPR and BLS, Stop the Bleed, tourniquet use, and basic procedural skills that introduce learners to the technical side of anesthesiology.'
  },
  {
    title: 'Pre-Medical Student Pathways',
    audience: 'Pre-medical students',
    text: 'Dedicated opportunities for students exploring medicine and anesthesiology, including shadowing pathways, mentorship connections, networking with medical students and physicians, and guidance on finding anesthesia-related research and clinical exposure.'
  },
  {
    title: 'Medical Student Career Development',
    audience: 'Medical students',
    text: 'Programming designed for students considering anesthesiology, including anesthesia-specific procedural skills, mentorship, networking, and the chance to connect with residents, interns, faculty, and residency program leadership.'
  },
  {
    title: 'Networking Lunch',
    audience: 'Pre-medical and medical students',
    text: 'A structured lunch designed to help attendees meet peers, mentors, trainees, and faculty while discussing professional identity, rotations, research, residency preparation, and career paths in anesthesiology.'
  },
  {
    title: 'Resident, Intern & Program Leadership Panel',
    audience: 'Medical students',
    text: 'A candid discussion with residents and interns, with a residency program director or assistant program director invited to share perspective on training, applications, clinical growth, and the transition into anesthesiology residency.'
  }
];

const AGENDA = [
  { time: 'TBD', title: 'Breakfast & Registration', description: 'Check in, meet fellow attendees, and begin the day with informal networking.' },
  { time: 'TBD', title: 'Welcome & Opening Remarks', description: 'Conference mission, goals, and overview of the day.' },
  { time: 'TBD', title: 'Humanities & Ethics Panel', description: 'Ethical reflection, professional identity, humanism, advocacy, accountability, and trainee growth.' },
  { time: 'TBD', title: 'Technical Skills Workshops', description: 'Hands-on airway, CPR/BLS, Stop the Bleed, tourniquet, and anesthesia-adjacent procedural stations.' },
  { time: 'TBD', title: 'Networking Lunch', description: 'Mentorship and networking for pre-medical and medical students.' },
  { time: 'TBD', title: 'Resident, Intern & Program Leadership Panel', description: 'Advice and discussion with trainees and residency program leadership.' },
  { time: 'TBD', title: 'Research Programming', description: 'Abstract competition, lightning talks, prizes, and research matchmaking.' },
  { time: 'TBD', title: 'Closing Remarks & Awards', description: 'Final reflections, research recognition, prizes, and next steps.' }
];

const RESEARCH = [
  { title: 'Abstract Competition', text: 'Submit scholarly work for review and the opportunity to present at H.E.A.T. 2027. Submission details are coming soon.' },
  { title: 'Lightning Talks', text: 'Short, high-yield presentations designed to help students communicate research clearly and concisely.' },
  { title: 'Research Matchmaking', text: 'Connect students interested in anesthesiology research with mentors, projects, and local opportunities.' },
  { title: 'Research Awards', text: 'Prizes and recognition for selected student research presentations.' }
];

const SPEAKERS = [
  { name: 'Speakers to be announced', title: 'Faculty, residents, interns, and program leadership', affiliation: 'Check back soon for updates.', topic: 'Humanities, ethics, professional identity, anesthesiology pathways, and clinical skills' }
];

const BOARD = [
  { name: 'Shweta Mohapatra', role: 'Chairperson', school: 'McGovern Medical School', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/shweta-mohapatra.jpg' },
  { name: 'Barbara Gano', role: 'Director of Conference Operations', school: 'McGovern Medical School', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/barbara-gano.jpg' },
  { name: 'Karsten Fields', role: 'Director of Marketing & Communications', school: 'McGovern Medical School', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/karsten-fields.jpeg' },
  { name: 'Autumn Smith', role: 'Director of Finance & Sponsorships', school: 'Baylor College of Medicine', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/autumn-smith.jpg' },
  { name: 'Ahsan Omer', role: 'Director of Organizational Strategy & Administration', school: 'University of Houston College of Medicine', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/ahsan-omer.jpg' },
  { name: 'Dana Alcin', role: 'Director of Outreach & Engagement', school: 'University of Houston College of Medicine', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/dana-alcin.jpg' },
  { name: 'Renee Megwa', role: 'Director of Outreach & Engagement', school: 'Sam Houston State University', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/renee-megwa.jpg' },
  { name: 'Jasie Roberts', role: 'Director of Humanities & Ethics Programming', school: 'McGovern Medical School', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/jasie-roberts.jpg' },
  { name: 'Aditi Velgekar', role: 'Director of Humanities & Ethics Programming', school: 'McGovern Medical School', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/aditi-velgekar.jpg' },
  { name: 'Ethan Gilmore', role: 'Director of Research & Academic Programming', school: 'University of Texas Medical Branch', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/ethan-gilmore.jpg' },
  { name: 'Vanshika Jhonsa', role: 'Director of Research & Academic Programming', school: 'McGovern Medical School', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/vanshika-jhonsa.jpeg' },
  { name: 'Aarohi Thakar', role: 'Pre-Med Student Liaison', school: 'University of Texas', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/aarohi-thakar.jpeg' },
  { name: 'Lauren Simmons', role: 'Resident Advisor', school: 'UTHealth Houston', email: 'Email TBD', biography: 'Biography coming soon.', image: 'assets/img/board/lauren-simmons.jpeg' }
];

const GALLERY = [
  { image: 'assets/img/gallery/2026-conference-registration.JPG', caption: 'Last year\'s conference: registration and check-in' },
  { image: 'assets/img/gallery/2026-conference-speakers.JPG', caption: 'Last year\'s conference: faculty and attendees' },
  { image: 'assets/img/gallery/2026-conference-airway-1.JPG', caption: 'Last year\'s conference: airway workshop' },
  { image: 'assets/img/gallery/2026-conference-airway-2.JPG', caption: 'Last year\'s conference: technical skills practice' },
  { image: 'assets/img/gallery/2026-conference-networking.JPG', caption: 'Last year\'s conference: networking and mentorship' }
];
