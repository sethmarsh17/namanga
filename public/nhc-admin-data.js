// Demo data for the Namanga Hope Center admin prototype. All fictional (ported from the Laravel demo seeds).
export const AVATAR = ['#17683C', '#2A7E7B', '#C4622D', '#7C3A57', '#5A6B8C', '#8A6D1F'];

export const PROGRAMS = [
  { id: 'feeding', name: 'Feeding', schedule: 'Daily', color: '#C4622D', desc: 'Daily nutritious meals for every child at the center — breakfast and lunch on school days, three meals during holidays.' },
  { id: 'education', name: 'Education Support', schedule: 'Termly', color: '#17683C', desc: 'School fees, uniforms, books and tutoring support for children from ECD through secondary school.' },
  { id: 'counseling', name: 'Counseling', schedule: 'Weekly', color: '#2A7E7B', desc: 'One-on-one and group counseling sessions for trauma support, grief processing, and life-skills mentorship.' },
  { id: 'events', name: 'Events', schedule: 'Monthly', color: '#7C3A57', desc: 'Holiday camps, sports days, and community celebration events for the children.' },
];

export const SPONSORS = [
  { id: 1, name: 'Karen Mitchell', location: 'Denver, USA', contact: 'karen.mitchell82@gmail.com', monthly: 4500, since: '2022-03' },
  { id: 2, name: 'Thomas & Linda Fischer', location: 'Munich, Germany', contact: 'fischer.family@web.de', monthly: 9000, since: '2021-11' },
  { id: 3, name: 'Grace Community Church', location: 'Austin, USA', contact: 'missions@gracecommunity.org', monthly: 5000, since: '2023-01' },
  { id: 4, name: 'Sarah Njoroge', location: 'Nairobi, Kenya', contact: 'sarah.njoroge@yahoo.com', monthly: 3500, since: '2023-06' },
  { id: 5, name: 'Peter van Dijk', location: 'Amsterdam, Netherlands', contact: 'p.vandijk@outlook.nl', monthly: 5500, since: '2020-09' },
  { id: 6, name: 'James & Susan Whitfield', location: 'Manchester, UK', contact: 'whitfield.uk@gmail.com', monthly: 9500, since: '2019-05' },
  { id: 7, name: 'Mary Wanjala', location: 'Nairobi, Kenya', contact: 'mary.wanjala.b@gmail.com', monthly: 3000, since: '2024-02' },
  { id: 8, name: 'Rotary Club of Nairobi West', location: 'Nairobi, Kenya', contact: 'secretary@rotarynairobiwest.org', monthly: 6000, since: '2022-07' },
  { id: 9, name: 'David Andersson', location: 'Stockholm, Sweden', contact: 'd.andersson@telia.se', monthly: 5000, since: '2021-04' },
  { id: 10, name: 'Faith Chapel International', location: 'Mombasa, Kenya', contact: 'outreach@faithchapel.or.ke', monthly: 4000, since: '2023-09' },
  { id: 11, name: 'Robert Johnson', location: 'Columbus, USA', contact: 'rjohnson.family@gmail.com', monthly: 4500, since: '2022-01' },
  { id: 12, name: 'Anne-Marie Dubois', location: 'Lyon, France', contact: 'am.dubois@orange.fr', monthly: 5000, since: '2024-05' },
];

const C = (i, name, g, dob, adm, level, school, grade, med, bg, programs, sponsor) =>
  ({ id: i, nhc: 'NHC-' + i, name, gender: g, dob, admitted: adm, level, school, grade, medical: med, background: bg, programs, sponsor, color: AVATAR[(i - 1) % AVATAR.length] });

export const CHILDREN = [
  C(1, 'Naomi Sompoika', 'F', '2014-02-10', '2019-06-01', 'Primary', 'Namanga Primary School', 'Grade 7', 'No known allergies.', 'Both parents deceased; raised by an elderly grandmother in Namanga town before admission.', ['feeding', 'education', 'counseling'], 1),
  C(2, 'Daniel Kilonzo', 'M', '2011-11-05', '2018-01-20', 'Secondary', 'Namanga Mixed Day Secondary School', 'Form 1', 'Mild asthma, managed with an inhaler.', 'Father absent; mother unable to provide due to chronic illness.', ['feeding', 'education', 'events'], 2),
  C(3, 'Faith Wanjiku', 'F', '2012-07-22', '2018-01-20', 'Secondary', 'Rombo Girls Secondary School', 'Form 1', 'No known allergies.', "Sister of Daniel Kilonzo; both admitted together after their mother's passing.", ['feeding', 'education', 'counseling'], 2),
  C(4, 'Joseph Mollel', 'M', '2016-01-30', '2021-03-15', 'Primary', 'Namanga Primary School', 'Grade 5', 'Mild asthma, on regular review.', 'Abandoned as an infant; found and brought to the center by a community elder.', ['feeding', 'education'], 3),
  C(5, 'Grace Nasieku', 'F', '2009-09-14', '2015-08-10', 'Secondary', 'Bissil Girls Secondary School', 'Form 3', 'Wears corrective glasses.', 'Orphaned after both parents died in a road accident near Namanga border.', ['feeding', 'education', 'counseling', 'events'], 4),
  C(6, 'Peter Saitoti', 'M', '2015-04-18', '2020-02-01', 'Primary', 'Meshanani Primary School', 'Grade 6', 'No known allergies.', "Guardian grandfather unable to meet school and medical costs on a herder's income.", ['feeding', 'education', 'events'], 5),
  C(7, 'Mercy Nkatha', 'F', '2018-12-02', '2023-02-14', 'Primary', 'Namanga Primary School', 'Grade 2', 'Mild anemia, on an iron supplement.', 'Mother passed during childbirth complications; father works as a casual laborer in Arusha.', ['feeding', 'education', 'counseling'], 6),
  C(8, 'Samuel Lekishon', 'M', '2013-06-09', '2019-09-01', 'Primary', 'Oldonyo Orok Primary School', 'Grade 8', 'No known allergies.', 'Family displaced by drought; unable to support all six children.', ['feeding', 'education', 'events'], 6),
  C(9, 'Esther Nemayian', 'F', '2010-03-27', '2016-05-20', 'Secondary', 'Bissil Girls Secondary School', 'Form 3', 'No known allergies.', 'Orphaned; extended family unable to take her in.', ['feeding', 'education', 'counseling'], 7),
  C(10, 'John Mwangi', 'M', '2017-08-19', '2022-11-01', 'Primary', 'Namanga Primary School', 'Grade 3', 'No known allergies.', 'Single mother in Namanga town, unable to afford schooling on market-vendor income.', ['feeding', 'education', 'events'], 8),
  C(11, 'Ann Naserian', 'F', '2020-05-05', '2024-08-01', 'ECD', 'Namanga ECD Centre', 'PP2', 'No known allergies.', 'Both parents deceased; brought to the center by a local church outreach team.', ['feeding', 'education', 'counseling'], 9),
  C(12, 'David Kiprotich', 'M', '2008-10-11', '2014-06-01', 'Secondary', 'Namanga Mixed Day Secondary School', 'Form 4', 'Sickle cell trait, monitored, no active symptoms.', 'Longest-resident child at the center; orphaned as a toddler after both parents died of illness.', ['feeding', 'education', 'counseling', 'events'], 10),
  C(13, 'Rebecca Sinta', 'F', '2014-09-30', '2020-07-10', 'Primary', 'Kimana Primary School', 'Grade 6', 'No known allergies.', 'Guardian aunt unable to support her alongside her own five children.', ['feeding', 'education', 'events'], 11),
  C(14, 'Moses Parmuat', 'M', '2011-02-14', '2017-04-05', 'Secondary', 'Bissil Boys Secondary School', 'Form 2', 'Epilepsy, controlled with daily medication.', 'Father deceased; mother remarried and unable to bring him into the new household.', ['feeding', 'education', 'counseling'], 12),
  C(15, 'Lydia Wambui', 'F', '2019-01-08', '2023-05-15', 'Primary', 'Namanga Primary School', 'Grade 2', 'No known allergies.', 'Found abandoned near the Namanga market; no known family traced despite local inquiries.', ['feeding', 'education'], null),
  C(16, 'Isaac Ntemwua', 'M', '2009-12-25', '2015-10-01', 'Secondary', 'Namanga Mixed Day Secondary School', 'Form 3', 'No known allergies.', 'Orphaned after a cross-border accident; no surviving immediate family identified.', ['feeding', 'education', 'events'], null),
  C(17, 'Sarah Nashipai', 'F', '2016-06-17', '2021-09-20', 'Primary', 'Meshanani Primary School', 'Grade 5', 'No known allergies.', "Guardian grandmother's income from casual work insufficient for school fees.", ['feeding', 'education', 'counseling'], null),
  C(18, 'Emmanuel Kiptoo', 'M', '2013-03-03', '2019-02-11', 'Primary', 'Oldonyo Orok Primary School', 'Grade 8', 'No known allergies.', "Father imprisoned; mother's whereabouts unknown since 2018.", ['feeding', 'education', 'events'], null),
  C(19, 'Ruth Naipanoi', 'F', '2020-11-20', '2024-09-05', 'ECD', 'Namanga ECD Centre', 'PP1', 'No known allergies.', 'Mother died shortly after childbirth; father unable to care for an infant while working.', ['feeding', 'education'], null),
  C(20, 'Michael Osoro', 'M', '2010-08-08', '2016-11-12', 'Secondary', 'Bissil Boys Secondary School', 'Form 3', 'No known allergies.', 'Orphaned; extended family in Namanga unable to take on additional dependents.', ['feeding', 'education', 'counseling', 'events'], null),
];

export const INVENTORY = [
  { name: 'Maize flour', cat: 'Food', unit: 'kg', stock: 18, min: 40 },
  { name: 'Dry beans', cat: 'Food', unit: 'kg', stock: 55, min: 30 },
  { name: 'Cooking oil', cat: 'Food', unit: 'litres', stock: 22, min: 15 },
  { name: 'Rice', cat: 'Food', unit: 'kg', stock: 34, min: 25 },
  { name: 'Sugar', cat: 'Food', unit: 'kg', stock: 12, min: 10 },
  { name: 'School sweaters', cat: 'Uniforms', unit: 'pieces', stock: 6, min: 8 },
  { name: 'School shoes', cat: 'Uniforms', unit: 'pairs', stock: 3, min: 10 },
  { name: 'Socks (assorted sizes)', cat: 'Uniforms', unit: 'pairs', stock: 40, min: 20 },
  { name: 'Exercise books', cat: 'Stationery', unit: 'reams', stock: 4, min: 6 },
  { name: 'Pens & pencils', cat: 'Stationery', unit: 'boxes', stock: 15, min: 8 },
  { name: 'Textbooks (set)', cat: 'Stationery', unit: 'sets', stock: 9, min: 5 },
];

export const STAFF = [
  { name: 'Richard Otieno', title: 'Director', type: 'staff', since: '2016-01', programs: [] },
  { name: 'Joseph Mutua', title: 'Finance Officer', type: 'staff', since: '2018-04', programs: [] },
  { name: 'Mary Sankale', title: 'Head Caregiver', type: 'staff', since: '2017-02', programs: ['feeding'] },
  { name: 'Paul Ntemwua', title: 'Cook', type: 'staff', since: '2019-06', programs: ['feeding'] },
  { name: 'Agnes Wambui', title: 'Tutor', type: 'staff', since: '2020-09', programs: ['education'] },
  { name: 'Samuel Kiplagat', title: 'Counselor', type: 'staff', since: '2021-03', programs: ['counseling'] },
  { name: 'Naomi Chepkoech', title: 'Events Coordinator', type: 'volunteer', since: '2022-08', programs: ['events'] },
  { name: 'David Lekoloi', title: 'Groundskeeper', type: 'staff', since: '2015-11', programs: [] },
  { name: 'Grace Adhiambo', title: 'Volunteer Teacher', type: 'volunteer', since: '2024-01', programs: ['education'] },
];

export const TRANSACTIONS = [
  { date: '2026-09-18', type: 'income', cat: 'Sponsorship Payments', desc: 'September sponsor payments (12)', amount: 64500 },
  { date: '2026-09-15', type: 'expense', cat: 'Food', desc: 'Monthly food purchase — Namanga market', amount: 28400 },
  { date: '2026-09-12', type: 'income', cat: 'Donations', desc: 'Hope for Kajiado transfer — building fund', amount: 380000 },
  { date: '2026-09-10', type: 'expense', cat: 'School Fees', desc: 'Term 3 fees — Bissil Girls Secondary (2)', amount: 42000 },
  { date: '2026-09-08', type: 'expense', cat: 'Medical', desc: 'Inhaler refills — Daniel K., Joseph M.', amount: 3600 },
  { date: '2026-09-05', type: 'expense', cat: 'Salaries', desc: 'August staff salaries', amount: 96000 },
  { date: '2026-09-02', type: 'income', cat: 'Donations', desc: 'Grace Community Church — one-time gift', amount: 25000 },
  { date: '2026-08-30', type: 'expense', cat: 'Program Costs', desc: 'Holiday camp supplies', amount: 11200 },
];

export const BUDGET = [
  { cat: 'Food', budget: 35000, spent: 28400 },
  { cat: 'School Fees', budget: 60000, spent: 42000 },
  { cat: 'Salaries', budget: 96000, spent: 96000 },
  { cat: 'Medical', budget: 10000, spent: 3600 },
  { cat: 'Program Costs', budget: 15000, spent: 11200 },
];

export const TREND = [
  { m: 'Apr', inc: 92, exp: 74 }, { m: 'May', inc: 88, exp: 81 }, { m: 'Jun', inc: 110, exp: 79 },
  { m: 'Jul', inc: 96, exp: 85 }, { m: 'Aug', inc: 121, exp: 90 }, { m: 'Sep', inc: 470, exp: 181 },
];

export const ACTIVITY = [
  { when: '2 hours ago', who: 'Richard Otieno', what: 'Published website update "Land title verification underway"', kind: 'post' },
  { when: 'Today, 09:14', who: 'Joseph Mutua', what: 'Logged September sponsor payments — KES 64,500', kind: 'finance' },
  { when: 'Yesterday', who: 'Mary Sankale', what: 'Issued 12 kg maize flour from inventory', kind: 'inventory' },
  { when: 'Yesterday', who: 'Richard Otieno', what: 'Enrolled Ruth Naipanoi in Counseling', kind: 'child' },
  { when: 'Sep 16', who: 'Agnes Wambui', what: 'Recorded attendance for 9 staff', kind: 'staff' },
  { when: 'Sep 15', who: 'Joseph Mutua', what: 'Added expense: Monthly food purchase — KES 28,400', kind: 'finance' },
  { when: 'Sep 12', who: 'Richard Otieno', what: 'Allocated sponsor Anne-Marie Dubois → Moses Parmuat', kind: 'child' },
];

export const POSTS = [
  { id: 1, date: '2026-09-18', cat: 'land', title: 'Land title verification is underway', body: 'Our team has begun the official title search and boundary confirmation with the county. This is the key step before we finalize the purchase agreement.', status: 'published', img: 'uploads/PHOTO-2025-11-19-09-42-53.jpg' },
  { id: 2, date: '2026-09-10', cat: 'news', title: 'Volunteer team visit — May 2026', body: 'Our friends from Hope for Kajiado joined us for a week of cooking, teaching, and delivering school supplies to families in Namanga.', status: 'published', img: 'uploads/PHOTO-2026-05-26-11-39-13%203.jpg' },
  { id: 3, date: '2026-09-04', cat: 'finance', title: 'Q3 transparency report', body: 'A full breakdown of gifts received and how every shilling has been directed this quarter.', status: 'draft', img: '' },
];

export const POST_CATS = [
  { id: 'land', label: 'Land purchase', color: '#17683C' },
  { id: 'construction', label: 'Construction', color: '#E4A11B' },
  { id: 'news', label: 'News & stories', color: '#2A7E7B' },
  { id: 'finance', label: 'Financial reports', color: '#52606A' },
  { id: 'volunteer', label: 'Volunteer', color: '#C4622D' },
  { id: 'events', label: 'US fundraising', color: '#7C3A57' },
];

export const ROLES = ['Director', 'Finance Officer', 'Caregiver', 'Read-only'];
