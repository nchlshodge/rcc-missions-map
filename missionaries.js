/*
 * Rochester Christian Church - Missions Map data
 * Built from the 2026 Missions Department Spreadsheet (monthly support + new monthly support).
 *
 * Each missionary:
 *   id     region prefix + their row number in that section of the spreadsheet (n1, n2 = "new monthly support" rows)
 *   r      region key (see REGIONS below)
 *   n      name as shown to the congregation
 *   o      organization
 *   ag     true for Assemblies of God World Missions (AGWM) missionaries
 *   m      one line about the ministry (optional)
 *   at     place label shown on the card
 *   p      [latitude, longitude] for the pin, or null when they serve across a whole area
 *   s      true = serving somewhere sensitive. No name, no place, no pin is ever shown.
 *          Keep their real name OUT of this file - it is public.
 *
 *   Fill these in as stories come in (from the Missionary Form, newsletters, etc.):
 *   bio    a short paragraph about them and their work
 *   pray   a list of prayer requests, e.g. ['Health for the kids', 'New church plant in May']
 *   photo  image path or URL, e.g. 'photos/bryner.jpg'
 *   web    their website or giving page
 *
 * NEVER put support amounts, account numbers, emails or phone numbers in here.
 */

window.REGIONS = [
  { key: 'asia',   name: 'Asia & Pacific',            color: '#E8743B' },
  { key: 'africa', name: 'Africa',                    color: '#C99A12' },
  { key: 'latam',  name: 'Latin America & Caribbean', color: '#22A06B' },
  { key: 'europe', name: 'Europe',                    color: '#2589E5' },
  { key: 'mideast',name: 'Middle East',               color: '#8E5BD6' },
  { key: 'us',     name: 'USA & Canada',              color: '#D6455D' },
  { key: 'intl',   name: 'Worldwide',                 color: '#0E9AAB' }
];

// Sensitive entry: only a broad area and 'A couple' / 'A worker'. Never a name, place, photo or pin.
var S = function (id, r, area, who) { return { id: id, r: r, s: true, area: area, who: who }; };
var CAMBODIA = [12.57, 104.99], THAILAND = [15.87, 100.99], INDONESIA = [-2.5, 118.0], SKOREA = [36.5, 127.8], INDIA = [20.59, 78.96];
var KENYA = [-0.02, 37.91], UGANDA = [1.37, 32.29], ZAMBIA = [-13.13, 27.85], TOGO = [8.62, 0.82];
var NICARAGUA = [12.87, -85.21], URUGUAY = [-32.52, -55.77], ARGENTINA = [-38.42, -63.62], SURINAME = [3.92, -56.03], CUBA = [21.52, -77.78], GUATEMALA = [15.78, -90.23];
var SPAIN = [40.46, -3.75], MALAGA = [36.72, -4.42], FRANCE = [46.6, 2.21], GERMANY = [51.17, 10.45], ITALY = [42.6, 12.9], ROME = [41.9, 12.5], POLAND = [51.92, 19.15];
var ISRAEL = [31.25, 34.85];
var DEARBORN = [42.32, -83.18], ANNARBOR = [42.28, -83.74], DETROIT = [42.34, -83.05], PONTIAC = [42.64, -83.29], OU = [42.67, -83.22], OXFORD = [42.82, -83.26], LANSING = [42.73, -84.56], MICHIGAN = [43.8, -84.8];
var SPRINGFIELD = [37.21, -93.29];

window.MISSIONARIES = [
  // ---------------- Asia & Pacific ----------------
  { id: 'as-1',  r: 'asia', n: 'Daniel & Khuyen Bryner', o: 'Assemblies of God World Missions', ag: true, at: 'Cambodia', p: CAMBODIA },
  { id: 'as-2',  r: 'asia', n: 'Caleb & Sandy Cumper', o: 'Assemblies of God World Missions', ag: true, m: 'Orphan ministry', at: 'Philippines', p: [12.88, 121.77] },
  { id: 'as-3',  r: 'asia', n: 'J. Pierce & Meghan Davis', o: 'Assemblies of God World Missions', ag: true, at: 'Thailand', p: THAILAND },
  { id: 'as-4',  r: 'asia', n: 'Jared & Boggie Dietrich', o: 'Assemblies of God World Missions', ag: true, at: 'Mongolia', p: [46.86, 103.85] },
  { id: 'as-5',  r: 'asia', n: 'Josh & Tonya Jacks', o: 'Assemblies of God World Missions', ag: true, at: 'Thailand', p: THAILAND },
  { id: 'as-6',  r: 'asia', n: 'Dareth Ly', o: 'Assemblies of God World Missions', ag: true, at: 'Cambodia', p: CAMBODIA },
  { id: 'as-7',  r: 'asia', n: 'Daniel & Kazune Matsunaga', o: 'Assemblies of God World Missions', ag: true, at: 'Japan', p: [36.2, 138.25] },
  S('as-8', 'asia', 'Central Eurasia', 'A couple'),
  S('as-9', 'asia', 'Northern Asia', 'A couple'),
  S('as-10', 'asia', 'South Asia', 'A worker'),
  { id: 'as-11', r: 'asia', n: 'Christine & Antonio Rios', o: 'Assemblies of God World Missions', ag: true, at: 'New Zealand', p: [-40.9, 174.89] },
  { id: 'as-12', r: 'asia', n: 'Jeremy & Tina Skinner', o: 'Assemblies of God World Missions', ag: true, at: 'Indonesia', p: INDONESIA },
  S('as-13', 'asia', 'East Asia', 'A couple'),
  { id: 'as-14', r: 'asia', n: 'Matt Stahl', o: 'Assemblies of God World Missions', ag: true, m: 'Asia Pacific', at: 'Ulaanbaatar, Mongolia', p: [47.89, 106.91] },
  { id: 'as-15', r: 'asia', n: 'Scott & Ruth Thompson', o: 'Assemblies of God World Missions', ag: true, at: 'Indonesia', p: INDONESIA },
  { id: 'as-16', r: 'asia', n: 'Koren Van Valin', o: 'Assemblies of God World Missions', ag: true, at: 'South Korea', p: SKOREA },
  { id: 'as-17', r: 'asia', n: 'Janina Zinicola', o: 'Assemblies of God World Missions', ag: true, at: 'South Korea', p: SKOREA },
  { id: 'as-18', r: 'asia', n: 'Sam Chacko', o: 'Ebenezer Gospel Ministry', at: 'India', p: INDIA },
  { id: 'as-19', r: 'asia', n: 'Albin Raju', o: 'Ebenezer Gospel Ministry', m: 'Pastoring under Ebenezer Gospel Ministry', at: 'India', p: INDIA },
  { id: 'as-20', r: 'asia', n: 'Todd & Julie Powers', o: 'Empower Education', at: 'Thailand, Myanmar & Pakistan', p: [18.79, 98.98] },
  { id: 'as-21', r: 'asia', n: 'Seth Van Tifflin', o: 'In Better Hands / Free Methodist', at: 'Thailand', p: THAILAND },
  { id: 'as-22', r: 'asia', n: 'Karla Tillapaugh & The Crew', o: 'Light Bridge International / Landmine Designs', at: 'Cambodia & Thailand', p: CAMBODIA },
  { id: 'as-23', r: 'asia', n: 'Alyx McGowan', o: 'YWAM', at: 'Yokohama, Japan', p: [35.44, 139.64] },
  { id: 'as-24', r: 'asia', n: 'Sam & Erin Oginsky', o: 'Mission 25', at: 'Cambodia', p: CAMBODIA },
  { id: 'as-n1', r: 'asia', n: 'Our Daughters International', o: 'Our Daughters International', m: 'Ending human trafficking of girls and women', at: 'Nepal', p: [28.39, 84.12] },

  // ---------------- Africa ----------------
  { id: 'af-1',  r: 'africa', n: 'Rick Caswell', o: 'Assemblies of God World Missions', ag: true, at: 'Senegal', p: [14.5, -14.45] },
  S('af-2', 'africa', 'North Africa', 'A couple'),
  S('af-3', 'africa', 'West Africa', 'A worker'),
  { id: 'af-4',  r: 'africa', n: 'Heather Daka', o: 'Assemblies of God World Missions', ag: true, at: 'Zambia', p: ZAMBIA },
  S('af-5', 'africa', 'North Africa', 'A couple'),
  S('af-6', 'africa', 'North Africa', 'A couple'),
  { id: 'af-7',  r: 'africa', n: 'Michael & Kyja Malone', o: 'Assemblies of God World Missions', ag: true, m: 'Live Dead', at: 'Mombasa, Kenya', p: [-4.04, 39.67] },
  { id: 'af-8',  r: 'africa', n: 'Logan & Shannon Nash', o: 'Assemblies of God World Missions', ag: true, at: 'Zimbabwe', p: [-19.02, 29.15] },
  S('af-9', 'africa', 'North Africa', 'A worker'),
  S('af-10', 'africa', 'North Africa', 'A couple'),
  S('af-11', 'africa', 'East Africa', 'A couple'),
  { id: 'af-12', r: 'africa', n: 'Caleb & Sonja Schut', o: 'A Beautiful Response', m: 'Raising Up Hope', at: 'Uganda', p: UGANDA },
  { id: 'af-13', r: 'africa', n: 'Nathan & Danielle Finney', o: 'Overland Missions', at: 'Zambia', p: ZAMBIA },
  { id: 'af-14', r: 'africa', n: 'Jonathon Schwandt', o: 'Rehema Home', at: 'Kenya', p: KENYA },
  { id: 'af-15', r: 'africa', n: 'Joshua & Colette Eby', o: 'ABWE', m: 'Medical missions - surgeon', at: 'Togo', p: TOGO },
  { id: 'af-16', r: 'africa', n: 'Emmanuel Ikwutah', o: "SIM USA / Samaritan's Purse", m: 'Surgeon', at: 'Angola', p: [-11.2, 17.87] },
  { id: 'af-17', r: 'africa', n: 'Mamadou Traore, Jonathan & Fatima', o: "SIM USA / Samaritan's Purse", m: 'Surgeon and teacher', at: 'Niger', p: [17.61, 8.08] },
  { id: 'af-18', r: 'africa', n: 'Clarisse Girncuti', o: "SIM USA / Samaritan's Purse", m: 'Surgeon with Hospital of Hope', at: 'Burundi', p: [-3.37, 29.92] },
  { id: 'af-19', r: 'africa', n: 'Koudjo & Chrischona Sodji', o: 'TeachBeyond', at: 'Togo', p: TOGO },
  { id: 'af-20', r: 'africa', n: 'Wally & Linda Hostetter', o: "Widow's Might Ministry International", at: 'Nigeria', p: [9.08, 8.68] },
  { id: 'af-21', r: 'africa', n: 'Todd Watson', o: 'World Missions & Evangelism', at: 'Mozambique', p: [-18.67, 35.53] },
  { id: 'af-22', r: 'africa', n: 'Patrick Kibirige', o: 'Kagavu Foundation / Good Shepherd', at: 'Uganda', p: UGANDA },
  { id: 'af-23', r: 'africa', n: 'George Gachumi & Carmen Muongi', o: 'Service of Love Ministry', at: 'Kenya', p: KENYA },
  { id: 'af-24', r: 'africa', n: 'Rev. Gaudencia', o: 'Spring of Hope Community Center', at: 'Kenya', p: KENYA },
  { id: 'af-n1', r: 'africa', n: 'Godwins & Nancy Oloo', o: 'A Jesus Mission', at: 'Kenya', p: KENYA },
  { id: 'af-n2', r: 'africa', n: 'Luke & Hannah Buescher', o: 'Rocky Mountain Calvary / A Jesus Mission', at: 'Gulu, Uganda', p: [2.78, 32.3] },

  // ---------------- Latin America & Caribbean ----------------
  { id: 'la-1',  r: 'latam', n: 'Ben & Natalia Allion', o: 'Assemblies of God World Missions', ag: true, at: 'Panama', p: [8.54, -80.78] },
  { id: 'la-2',  r: 'latam', n: 'Kim Babcock', o: 'Assemblies of God World Missions', ag: true, at: 'Argentina', p: ARGENTINA },
  { id: 'la-3',  r: 'latam', n: 'Flynn & Renee Clanton', o: 'Assemblies of God World Missions', ag: true, m: 'Latin America internet ministry', at: 'Across Latin America', p: null },
  { id: 'la-4',  r: 'latam', n: 'Ken & Kendra Doutt', o: 'Assemblies of God World Missions', ag: true, m: 'Including the Esperanzas widows ministry and Feed the Hungry', at: 'Nicaragua', p: NICARAGUA },
  { id: 'la-7',  r: 'latam', n: 'Bob & Jennifer Frith', o: 'Assemblies of God World Missions', ag: true, at: 'Uruguay', p: URUGUAY },
  { id: 'la-8',  r: 'latam', n: 'Mark & Mindy Gerdes', o: 'Assemblies of God World Missions', ag: true, at: 'Mexico', p: [23.63, -102.55] },
  { id: 'la-9',  r: 'latam', n: 'Corey & Tona Kautz', o: 'Assemblies of God World Missions', ag: true, at: 'Colombia', p: [4.57, -74.3] },
  { id: 'la-10', r: 'latam', n: 'Ricky & Gloria Lopez-Verduzco', o: 'Assemblies of God World Missions', ag: true, at: 'Nicaragua', p: NICARAGUA },
  { id: 'la-11', r: 'latam', n: 'Brooke Miller', o: 'Assemblies of God World Missions', ag: true, at: 'Belize', p: [17.19, -88.5] },
  { id: 'la-12', r: 'latam', n: 'Trent & Tina Morrow', o: 'Assemblies of God World Missions', ag: true, at: 'Uruguay', p: URUGUAY },
  { id: 'la-13', r: 'latam', n: 'Kellie Norris', o: 'Assemblies of God World Missions', ag: true, at: 'Costa Rica', p: [9.75, -83.75] },
  { id: 'la-14', r: 'latam', n: 'Elazer Pross', o: 'Power Company Kids Club', ag: true, at: 'Suriname', p: SURINAME },
  { id: 'la-15', r: 'latam', n: 'Steve & Kim PuffPaff', o: 'Assemblies of God World Missions', ag: true, at: 'Suriname', p: SURINAME },
  { id: 'la-16', r: 'latam', n: 'Billy & Havilah Roman', o: 'Assemblies of God World Missions', ag: true, at: 'Antigua & Barbuda', p: [17.06, -61.8] },
  { id: 'la-17', r: 'latam', n: 'Josh & Lisa Sears', o: 'Assemblies of God World Missions', ag: true, at: 'Brazil', p: [-14.24, -51.93] },
  { id: 'la-18', r: 'latam', n: 'David Speer', o: 'Assemblies of God World Missions', ag: true, at: 'Cuba', p: CUBA },
  { id: 'la-19', r: 'latam', n: 'Joel & Kristen Temple', o: 'Assemblies of God World Missions', ag: true, at: 'French Antilles', p: [15.5, -61.3] },
  { id: 'la-20', r: 'latam', n: 'Mike & Sonja Trei', o: 'Assemblies of God World Missions', ag: true, at: 'Andean region, Peru', p: [-9.19, -75.02] },
  { id: 'la-21', r: 'latam', n: 'Damien Zinicola', o: 'Assemblies of God World Missions', ag: true, at: 'Cuba', p: CUBA },
  { id: 'la-22', r: 'latam', n: 'Mark Richard', o: 'Beeline Wheelchairs', m: 'Wheelchairs for people with disabilities', at: 'Guatemala', p: GUATEMALA },
  { id: 'la-23', r: 'latam', n: 'Becky Babcock', o: 'Bethel Church', at: 'Argentina', p: ARGENTINA },
  { id: 'la-24', r: 'latam', n: 'Kurt & Debbie Holthus', o: 'Hope International Ministries', at: 'Dominican Republic', p: [18.74, -70.16] },
  { id: 'la-25', r: 'latam', n: 'David & Jessica Hubbard', o: 'Commission To Every Nation (CTEN)', at: 'Honduras', p: [15.2, -86.24] },
  { id: 'la-26', r: 'latam', n: 'David Lomasney', o: 'Integrity International Ministries', m: 'Also supporting Fundacion Tiempo with Cesar Garcia', at: 'Guatemala', p: GUATEMALA },

  // ---------------- Europe ----------------
  { id: 'eu-1',  r: 'europe', n: 'John & Daraleana Bean', o: 'Assemblies of God World Missions', ag: true, at: 'Slovakia', p: [48.67, 19.7] },
  { id: 'eu-2',  r: 'europe', n: 'Jacob & Joni Bock', o: 'Assemblies of God World Missions', ag: true, at: 'Spain', p: SPAIN },
  { id: 'eu-3',  r: 'europe', n: 'Edward Buck', o: 'Assemblies of God World Missions', ag: true, at: 'France', p: FRANCE },
  { id: 'eu-4',  r: 'europe', n: 'John & Brandi Carrano', o: 'Assemblies of God World Missions', ag: true, at: 'Spain', p: SPAIN },
  { id: 'eu-5',  r: 'europe', n: 'Paul Clark', o: 'Assemblies of God World Missions', ag: true, at: 'Germany', p: GERMANY },
  { id: 'eu-6',  r: 'europe', n: 'David & Autumn Covello', o: 'Assemblies of God World Missions', ag: true, at: 'Italy', p: ITALY },
  { id: 'eu-7',  r: 'europe', n: 'Kirstin Edinger', o: 'Assemblies of God World Missions', ag: true, m: 'Convoy of Hope headquarters', at: 'Malaga, Spain', p: MALAGA },
  { id: 'eu-8',  r: 'europe', n: 'Chris & Kim Gray', o: 'Assemblies of God World Missions', ag: true, at: 'Rome, Italy', p: ROME },
  { id: 'eu-9',  r: 'europe', n: 'Micah & Kelsey Harrison', o: 'Assemblies of God World Missions', ag: true, at: 'Italy', p: ITALY },
  { id: 'eu-10', r: 'europe', n: 'Jesse & Renee Johannesen', o: 'Assemblies of God World Missions', ag: true, at: 'France', p: FRANCE },
  { id: 'eu-11', r: 'europe', n: 'Keith & Christi Jones', o: 'Assemblies of God World Missions', ag: true, m: 'Europe respite house', at: 'Malaga, Spain', p: MALAGA },
  { id: 'eu-12', r: 'europe', n: 'Jason & Serena Kohler', o: 'Assemblies of God World Missions', ag: true, at: 'Bari, Italy', p: [41.12, 16.87] },
  { id: 'eu-13', r: 'europe', n: 'Rich & Lori McLane', o: 'Assemblies of God World Missions', ag: true, at: 'Poland', p: POLAND },
  S('eu-14', 'europe', 'Eurasia', 'A couple'),
  { id: 'eu-15', r: 'europe', n: 'Aaron & Kacey Martinez', o: 'Assemblies of God World Missions', ag: true, at: 'Vigo, Spain', p: [42.24, -8.72] },
  { id: 'eu-16', r: 'europe', n: 'Christopher & Lenee Oakley', o: 'Assemblies of God World Missions', ag: true, m: 'Ministry among the Roma people', at: 'Southeast Europe', p: null },
  { id: 'eu-17', r: 'europe', n: 'Jennifer Pasquale', o: 'Assemblies of God World Missions', ag: true, at: 'Rome, Italy', p: ROME },
  S('eu-18', 'europe', 'Eurasia', 'A couple'),
  { id: 'eu-19', r: 'europe', n: 'Matthew & Christina Powers', o: 'Assemblies of God World Missions', ag: true, at: 'Netherlands', p: [52.13, 5.29] },
  { id: 'eu-20', r: 'europe', n: 'Kirk & Amy Priest', o: 'Assemblies of God World Missions', ag: true, at: 'Germany', p: GERMANY },
  { id: 'eu-21', r: 'europe', n: 'Taylar & Micah Smiley', o: 'Assemblies of God World Missions', ag: true, at: 'Odesa, Ukraine', p: [46.48, 30.72] },
  S('eu-22', 'europe', 'Central Asia', 'A couple'),
  { id: 'eu-23', r: 'europe', n: 'Brad & Gayle Wickersheim', o: 'Assemblies of God World Missions', ag: true, at: 'Ukraine', p: [49.0, 31.4] },
  { id: 'eu-24', r: 'europe', n: 'Sam Carson', o: 'A Jesus Mission', at: 'Zaporizhzhia, Ukraine', p: [47.84, 35.14] },
  { id: 'eu-25', r: 'europe', n: 'Garrett & Alissa Larsen', o: 'A Jesus Mission', at: 'Cluj-Napoca, Romania', p: [46.77, 23.6] },
  { id: 'eu-26', r: 'europe', n: 'Justin & Rawan Schrum', o: 'The Justice Project', at: 'Germany', p: GERMANY },
  { id: 'eu-27', r: 'europe', n: 'Greg & Erin Skrobarczyk', o: 'World Outreach / YWAM', m: "King's Kids ministry to children", at: 'Poland', p: POLAND },
  { id: 'eu-n1', r: 'europe', n: 'Steve & Belkis Lehmann', o: 'Assemblies of God World Missions', ag: true, at: 'Czech Republic', p: [49.82, 15.47] },
  { id: 'eu-n2', r: 'europe', n: 'Troy & Ashleigh King', o: 'Assemblies of God World Missions', ag: true, m: "Kids' Romania - Roma villages", at: 'Romania', p: [45.94, 24.97] },

  // ---------------- Middle East ----------------
  S('me-1', 'mideast', 'the Arabian Peninsula', 'A worker'),
  S('me-2', 'mideast', 'the Middle East', 'A couple'),
  S('me-3', 'mideast', 'the Arabian Peninsula', 'A worker'),
  { id: 'me-4',  r: 'mideast', n: 'Zach & Shellie Maddox', o: 'Assemblies of God World Missions', ag: true, m: 'Area directors', at: 'Israel & Palestine', p: [31.77, 35.21] },
  S('me-5', 'mideast', 'the Middle East', 'A couple'),
  S('me-6', 'mideast', 'the Middle East', 'A couple'),
  S('me-7', 'mideast', 'the Arabian Peninsula', 'A couple'),
  { id: 'me-8',  r: 'mideast', n: 'Sean & Taylor Seymore', o: 'Assemblies of God World Missions', ag: true, at: 'Georgia & Armenia', p: [40.07, 45.04] },
  S('me-9', 'mideast', 'Central Asia', 'A couple'),
  S('me-10', 'mideast', 'the Arab world', 'A couple'),
  { id: 'me-11', r: 'mideast', n: 'Brian Slater', o: 'Blessing Israeli Believers', at: 'Israel', p: ISRAEL },
  { id: 'me-12', r: 'mideast', n: 'Joel & Teresa Jelski', o: 'Fields of Wheat', m: 'Ministering to youth and soldiers', at: 'Israel', p: [32.08, 34.78] },
  S('me-13', 'mideast', 'the Middle East', 'A couple'),
  { id: 'me-14', r: 'mideast', n: 'Richard & Carolyn Hyde', o: 'Heart of G-d Ministries', at: 'Israel', p: ISRAEL },
  { id: 'me-15', r: 'mideast', n: 'Milad Khoury', o: 'Light to the Nations', m: 'Arab and Israeli ministry', at: 'Israel', p: [32.7, 35.3] },
  { id: 'me-16', r: 'mideast', n: 'Pierre & Gigi Houssney', o: 'Horizons International', at: 'Lebanon', p: [33.85, 35.86] },
  { id: 'me-17', r: 'mideast', n: 'Leon & Nina Mazin', o: 'Heritage of Zion', m: 'Return to Zion', at: 'Haifa, Israel', p: [32.79, 34.99] },
  S('me-18', 'mideast', 'the Middle East', 'A couple'),
  { id: 'me-19', r: 'mideast', n: 'Ariel & Shayla Hydes', o: 'Tree of Life / Artists for Christian Testimony', at: 'Israel', p: ISRAEL },
  S('me-20', 'mideast', 'the Arab world', 'A couple'),
  { id: 'me-21', r: 'mideast', n: 'Joseph Haddad', o: 'River of God Lebanese Congregation', at: 'Nahariya, Israel', p: [33.0, 35.1] },
  S('me-n1', 'mideast', 'the Arabian Peninsula', 'A worker'),
  S('me-n2', 'mideast', 'Central Asia', 'A worker'),

  // ---------------- USA & Canada ----------------
  { id: 'us-1',  r: 'us', n: 'Marcus & Shakinah Amaro', o: 'Assemblies of God World Missions', ag: true, m: 'Serving alongside the Hancocks', at: 'Dearborn, MI', p: DEARBORN },
  { id: 'us-2',  r: 'us', n: 'Gus & Terry Craven', o: 'Assemblies of God World Missions', ag: true, m: 'Native American ministry', at: 'South Dakota', p: [44.37, -100.35] },
  { id: 'us-3',  r: 'us', n: 'Adrianna Dieckmann', o: 'Assemblies of God World Missions', ag: true, m: 'Ministry among Arab Muslim immigrants', at: 'Dearborn, MI', p: DEARBORN },
  { id: 'us-4',  r: 'us', n: 'Josiah & Brooke DeSmyther', o: 'Chi Alpha', ag: true, at: 'University of Michigan, Ann Arbor', p: ANNARBOR },
  { id: 'us-5',  r: 'us', n: 'Lori Enget', o: 'Assemblies of God World Missions', ag: true, at: 'North Atlantic, Canada', p: [44.65, -63.57] },
  { id: 'us-6',  r: 'us', n: 'Jason & Lindsay Forsman', o: 'Michigan Youth Alive', ag: true, at: 'Michigan', p: MICHIGAN },
  { id: 'us-7',  r: 'us', n: 'Greg Glutting', o: 'Chi Alpha National', ag: true, at: 'Michigan', p: MICHIGAN },
  { id: 'us-8',  r: 'us', n: 'Nino Guarisco', o: 'Chi Alpha', ag: true, at: 'University of Michigan, Ann Arbor', p: ANNARBOR },
  { id: 'us-9',  r: 'us', n: 'Trey & Becky Hancock', o: 'Assemblies of God World Missions', ag: true, at: 'Dearborn, MI', p: DEARBORN },
  { id: 'us-10', r: 'us', n: 'Sarah Jackson', o: 'Chi Alpha', ag: true, at: 'Eastern Michigan University, Ypsilanti', p: [42.25, -83.62] },
  { id: 'us-11', r: 'us', n: 'Christopher & Janelle Kelly', o: 'Chi Alpha', ag: true, at: 'Wayne State University, Detroit', p: [42.36, -83.07] },
  { id: 'us-12', r: 'us', n: 'Eleanore Kue', o: 'Assemblies of God World Missions', ag: true, m: 'Poverty to Career', at: 'Lansing, MI', p: LANSING },
  { id: 'us-13', r: 'us', n: 'Christopher & Kelly Leslie', o: 'Chi Alpha', ag: true, at: 'Longwood University & Hampden-Sydney, Virginia', p: [37.3, -78.4] },
  { id: 'us-14', r: 'us', n: 'Chris & Julie Payne', o: 'Chi Alpha', ag: true, at: 'University of Michigan, Ann Arbor', p: ANNARBOR },
  { id: 'us-15', r: 'us', n: 'John Gunn', o: 'Power Company Kids', ag: true, at: 'Detroit & Pontiac', p: PONTIAC },
  { id: 'us-16', r: 'us', n: 'Carey & Kim Waldie', o: 'Chi Alpha', ag: true, m: 'Director of Michigan Chi Alpha', at: 'Michigan', p: MICHIGAN },
  { id: 'us-17', r: 'us', n: 'Life Challenge Flint', o: 'Life / Teen Challenge', ag: true, at: 'Flint, MI', p: [43.01, -83.69] },
  { id: 'us-18', r: 'us', n: 'Life Challenge Detroit', o: 'Life / Teen Challenge', ag: true, at: 'Detroit, MI', p: DETROIT },
  { id: 'us-19', r: 'us', n: 'Kati Brush', o: 'Anchored Hope Outreach', m: 'Street outreach to women', at: 'Detroit, MI', p: DETROIT },
  { id: 'us-20', r: 'us', n: 'Barbara Kincaid', o: 'Central WV Center for Pregnancy Care', at: 'West Virginia', p: [38.6, -80.6] },
  { id: 'us-21', r: 'us', n: 'Alexa Lawlor', o: 'Abide Ministries / Connect the Nations', at: 'Oakland University, Rochester', p: OU },
  { id: 'us-22', r: 'us', n: 'Crossroads Care Center', o: 'Crossroads Care Center', m: 'Pregnancy and newborn care', at: 'Auburn Hills, MI', p: [42.69, -83.23] },
  { id: 'us-23', r: 'us', n: 'Patti Jacques', o: "Gifts for All God's Children", m: "Support for children", at: 'Pontiac & Detroit', p: PONTIAC },
  { id: 'us-24', r: 'us', n: 'Darren Weiss', o: 'Grace Centers of Hope', m: 'Help for homeless women, men and children', at: 'Pontiac, MI', p: PONTIAC },
  { id: 'us-25', r: 'us', n: 'Brooke Holtslag & Alyssa', o: 'House of Hope', m: 'Trailer park ministry', at: 'Oxford, MI', p: OXFORD },
  { id: 'us-26', r: 'us', n: 'Jay Dunn', o: 'House of Providence', m: 'Foster care', at: 'Oxford, MI', p: OXFORD },
  { id: 'us-27', r: 'us', n: 'Lara Kaiser', o: 'InterVarsity Christian Fellowship', at: 'Florida', p: [27.99, -81.76] },
  { id: 'us-28', r: 'us', n: 'Michael Williams', o: 'InterVarsity Christian Fellowship', at: 'Oakland University, Rochester', p: OU },
  { id: 'us-29', r: 'us', n: 'Matt Cripps', o: 'Good News Gang', m: 'Ministry to children', at: 'Detroit, MI', p: DETROIT },
  { id: 'us-30', r: 'us', n: 'Michigan Abolitionist Project', o: 'M.A.P.', m: 'Fighting human trafficking', at: 'Rochester Hills, MI', p: [42.66, -83.15] },
  { id: 'us-31', r: 'us', n: 'Rick Warzywak', o: 'Transformation Michigan', at: 'Lansing, MI', p: LANSING },
  { id: 'us-32', r: 'us', n: 'Elaine Upshur', o: 'Peacemakers International Fellowship', at: 'Detroit, MI', p: DETROIT },
  { id: 'us-33', r: 'us', n: 'Daryl Sutherland', o: 'Rebuilding Paradise', m: 'Rice & Beans ministry to the homeless and hungry', at: 'Charlotte, NC', p: [35.23, -80.84] },
  { id: 'us-34', r: 'us', n: 'Brad Smith', o: 'Right to Life of Michigan', at: 'Michigan', p: MICHIGAN },
  { id: 'us-35', r: 'us', n: 'Chad & Tracy Cromwell', o: 'Young Life', at: 'Lake Orion, MI', p: [42.78, -83.24] },
  { id: 'us-36', r: 'us', n: 'Noah Schon', o: 'Young Life', at: 'Rochester, MI', p: [42.68, -83.13] },
  { id: 'us-37', r: 'us', n: 'Michael & Sarah Young', o: 'YWAM Detroit', m: 'Modern Day', at: 'Detroit, MI', p: DETROIT },
  { id: 'us-38', r: 'us', n: 'Troy & Angela Dykes', o: 'Highway of Holiness Ministries', m: 'Texas border ministries', at: 'Texas', p: [26.2, -98.23] },
  { id: 'us-n1', r: 'us', n: 'Joel & Gabby Stirnemann', o: 'Cru', m: 'Wayne State and Lawrence Tech', at: 'Detroit, MI', p: [42.37, -83.09] },
  { id: 'us-n2', r: 'us', n: 'Cindy Warber', o: 'Young Life', m: 'High school students in Genesee County', at: 'Grand Blanc, MI', p: [42.93, -83.63] },

  // ---------------- Worldwide ----------------
  { id: 'in-1',  r: 'intl', n: 'BGMC', o: 'Boys & Girls Missionary Challenge', ag: true, m: 'Evangelism and discipleship materials', at: 'Springfield, MO', p: SPRINGFIELD },
  { id: 'in-2',  r: 'intl', n: 'Speed the Light', o: 'Assemblies of God', ag: true, m: 'Transportation and equipment for missionaries', at: 'Springfield, MO', p: SPRINGFIELD },
  { id: 'in-3',  r: 'intl', n: 'John & Bethany Baker', o: 'Global University', ag: true, at: 'Springfield, MO', p: SPRINGFIELD },
  { id: 'in-4',  r: 'intl', n: 'Sam & Stephanie Maddux', o: 'Life Publishers', ag: true, at: 'Springfield, MO', p: SPRINGFIELD },
  { id: 'in-5',  r: 'intl', n: 'Dr. Bassim Gorial', o: 'Aramaic Broadcasting Network', m: 'Broadcasting biblical truth around the world', at: 'Worldwide', p: null },
  { id: 'in-6',  r: 'intl', n: 'Gideons International', o: 'Gideons International', m: 'Bible distribution', at: 'Worldwide', p: null },
  { id: 'in-7',  r: 'intl', n: 'Tyler & Elizabeth Ryals', o: 'A Jesus Mission', m: 'Gospel initiative in Europe and beyond', at: 'Worldwide', p: null },
  { id: 'in-8',  r: 'intl', n: 'Pierce & Diana Westfall', o: 'A Jesus Mission', m: 'President; missionary care', at: 'Worldwide', p: null },
  { id: 'in-9',  r: 'intl', n: 'Ed & Joy Bissonnette', o: 'Cadence International', m: 'Europe directors serving the US military', at: 'Europe', p: null },
  { id: 'in-10', r: 'intl', n: 'Joe & Jill Vincent', o: 'Cadence International', m: 'Serving the US military', at: 'Germany', p: [50.1, 8.0] },
  { id: 'in-n1', r: 'intl', n: 'Sydney Scott', o: 'A Jesus Mission', m: 'Administration', at: 'Worldwide', p: null },
  { id: 'in-n2', r: 'intl', n: 'Lindsey Smith', o: 'A Jesus Mission', m: 'Indigenous missions', at: 'Worldwide', p: null }
];

/*
 * Photos and stories, by missionary id. Add or change entries here as stories come in.
 * Photos and bios below came from the Missions Speaker Form responses (2024-2026), so some may be out of date.
 * The bios for eu-12 and la-21 were left out on purpose: they mention sensitive details. Review with the missions team first.
 */
window.STORIES = {
  "af-13": {"photo": "photos/af-13.jpg", "bio": "We are the directors of the Sustain department in Overland Missions. Our primary focus is developing resources and equipping believers for the work of ministry in unreached people groups and using practical tools to create access to closed countries so we can share the gospel. We are based in Zambia where we have a model farm and a training center for local missionaries but we also work in a variety of other countries."},
  "af-15": {"photo": "photos/af-15.jpg", "bio": "Joshua and Colette Eby serve with ABWE at Hospital of Hope in northern Togo, where they minister among unreached Muslim people groups through medical missions. Josh is a general surgeon and faculty member with the Pan-African Academy of Christian Surgeons (PAACS), training and discipling African surgical residents while providing surgical care and sharing the hope of Christ with patients. Their desire is to glorify God by making disciples through compassionate medical care, surgical education, and the proclamation of the Gospel."},
  "af-19": {"photo": "photos/af-19.jpg", "bio": "Chrischona and Koudjo Sodji serve with TeachBeyond Togo as part of God’s mission to reach the nation of Togo through transformational education. Their vision is to see individuals and communities flourish as they become all that God intends them to be. They equip educators through teacher training, lead sports-based ministry for children and youth, and operate a micro-school that serves as the foundation for a future international Christian school. As leaders of TeachBeyond Togo, they are also developing a growing team committed to providing transformational education to communities across the nation."},
  "af-21": {"photo": "photos/af-21.jpg", "bio": "Todd, Noémia, Daniel, Clara, and Julie are missionaries serving with All Nations and in partnership with World Missions & Evangelism. They currently lead a ministry in Mozambique that is focused on making disciples of Jesus.\n\nOne of their key initiatives provides food and biblical teaching to undernourished children — reaching up to 350 kids each week. By offering water, food and other essential resources, the ministry demonstrates the love of Jesus in practical ways, addressing both physical and spiritual needs in the community.\n\nIn a region where many live without a clear understanding of who Jesus is—some following false gods, others confused or misled—their calling is to bring clarity, hope, and truth. They long to see movements of Jesus-followers rise up to transform families, friendships, and communities from the inside out.\n\nTheir vision is to disciple people to hear from Jesus and obey His commands—equipping them to disciple others who will do the same. This is the heart of multiplication: disciples making disciples, sparking movements of faith that endure.\n\nTheir ministry is built on core values of obedience to Jesus, faithful gospel proclamation, respect for local cultures, and empowering local leadership.", "n": "Todd & Noémia Watson"},
  "af-22": {"photo": "photos/af-22.jpg", "bio": "Patrick is the Director and Founder of Good Shepherd Foundation Uganda. They support and educate orphans and needy children, widows, the youth and the elderly, Help support local pastors and church leaders through conferences and seminars."},
  "af-8": {"photo": "photos/af-8.jpg", "bio": "Prior to becoming AGWM missionaries we served as staff and lead pastors in Michigan and Missouri. We were appointed as Missionary Associates in 2015 and appointed Career Missionaries in 2019 having completed both terms in Botswana. The majority of our ministry focuses on training those God calls to full time ministry through teaching courses at our Bible Colleges. We also do travel to local churches where we greet and preach to congregations and then spend time with the pastors hearing their hearts, needs and concerns seeking ways we can partner with them and encourage ministry longevity. We believe trained Pastors build healthy churches that partner in the global harvest. Last year Shannon was invited to join the Africa Care team and focuses on engaging MK's in Southern Africa as they navigate the changes MK's experience as they arrive, live and leave the field."},
  "as-7": {"bio": "We are partnering with our District in Japan to help revitalize the churches in the district. We will partner with these churches and bring encouragement and support in areas they are lacking. The goal is to help the churches realize their potential and reach into their local community."},
  "eu-12": {"photo": "photos/eu-12.jpg"},
  "eu-16": {"photo": "photos/eu-16.jpg", "bio": "We have been on the field in Europe for 20 years. We have been construction coordinators for Central Europe, helped plant a church and started a youth ministry in Budapest, and coached baseball. We are currently leading Europe's Heart, a ministry to the Roma (Gypsies) of SE Europe."},
  "eu-8": {"photo": "photos/eu-8.jpg", "bio": "Chris, Kim and their children, Cooper and Bria, have been missionaries in Rome, Italy for the past 3 years. Chris grew up as a Missionary Kid and served alongside his parents in Italy for most of his childhood. Chris and Kim began their first term working in the International church his parents helped start. They helped the church restart their ministries after COVID. After prayer and thought they moved to the national Italian church where they have spent the last 2 years serving alongside the national church. They believe that reaching the next generation for Christ can change the country and communities. During these past 2 years they have helped start many new programs and ministries and helped serve alongside the church in various ways to reach the community."},
  "in-10": {"photo": "photos/in-10.jpg", "bio": "Jill and Joe Vincent are serving the Lord with Cadence International, sharing the gospel and their lives with the military community at Spangdahlem Air Base in Germany. The Vincents have a hospitality house ministry. This is a home away from home and more for the military. This means they offer their home to service members as a place to belong and a family to have while stationed overseas. Throughout each week, they provide the context for meaningful relationships to grow through home-cooked meals, relaxing atmosphere, lots of laughter, Bible Studies, small groups, service opportunities, and so much more. Their goal is to follow Jesus and help others grow in their faith journey and serve Jesus Christ as Lord."},
  "in-3": {"photo": "photos/in-3.jpg", "bio": "I am an AGWM missionary serving with Global University as the International Advancement Director. We partner with U.S. churches to train pastors and ministry leaders, while also providing Spirit-empowered biblical education in over 130 languages in every nation of the world — because we believe the greatest mission strategy is to equip local leaders to reach their own people."},
  "in-7": {"photo": "photos/in-7.jpg", "bio": "For 2 years and 9 months, our family served in Eastern Ukraine. We responded in the early days of the war and provided help to people directly affected by the conflict. I led a team that delivered food and water, provided first responders with medical training, and evacuated civilians. I also served as a military chaplain."},
  "in-8": {"photo": "photos/in-8.jpg", "bio": "Pierce and Diana Westfall are the remaining co-founders of A Jesus Mission. Pierce serves as President, and Diana serves as VP of Missionary Care.\n\nFrom 2013 to 2018, Pierce and Diana traveled with their children throughout North America, the Caribbean, Europe, and Central America, serving alongside local churches and connecting with missionaries. Along the way, they saw that no one escapes the human experience—including those who serve on the front lines. That conviction helped shape their desire to build a care-focused organization that is deeply attentive to people, relationships, and long-term health. \n\nA Jesus Mission now serves 130 missionaries across 25 countries."},
  "la-17": {"photo": "photos/la-17.jpg", "bio": "We serve as the only AG World Missionaries working in the Brazilian Amazon. Our focus is working among the indigenous tribes and jungle communities along the Amazon River and its tributaries, utilizing children's evangelism and discipleship, clean water projects, and Gospel storytelling to raise up indigenous missionaries to reach their own people."},
  "la-20": {"photo": "photos/la-20.jpg", "bio": "Mike and Sonja Trei (pronounced “tri”) are serving in Peru, using biblical storytelling to disciple tribal nations living in the Amazon Jungle. The goal: to see every nation come to know Jesus in a very personal way. Jesus’ command was simple — go and make disciples. They are committed to establishing the church where it does not exist.\n\nTheir primary focus is on training and equipping national leaders through discipleship ministry, orality training, and Bible school education."},
  "la-21": {"photo": "photos/la-21.jpg"},
  "la-3": {"photo": "photos/la-3.jpg", "bio": "Our missions work is to reach Spanish speaking people worldwide using the internet as a tool of evangelism. Through our Network211 websites, we address the 13 most searched for felt needs online (such as fear, depression, loneliness, sickness, hopelessness, anxiety, death...) These websites, www.journeyonline.org , www.juntosenelcamino.com , and www.descubreajesus.com simply and clearly present Jesus as the answer to the needs individuals have googled and give each person the opportunity to ask Jesus into his or her life. Our teams of ministry volunteers follow up individually with every person who responds to our online Gospel presentation, answering their questions, praying for them, providing online discipleship resources, and inviting them to connect to a local Assemblies of God church. \nOn average, 29 new people a day write to us in Spanish, having just responded to the Gospel on one of our websites! Our desire is that each of these individuals is given the opportunity to grow in their new-found walk with Jesus, to be discipled and to connect to a local church. We want to help people go from “searches to churches”!"},
  "la-9": {"photo": "photos/la-9.jpg", "bio": "We’ve been serving in Colombia since 2006, working to bring a message of hope to youth and children throughout the country through equipping churches, leaders, teachers and parents to impact the next generation with the Gospel."},
  "me-4": {"photo": "photos/me-4.jpg", "bio": "Zach and Shellie began their professional careers as teachers. Zach as a high school math teacher and coach and Shellie teaching kindergarten. Within a few years, Zach & Shellie were invited to serve with AGWM as administrators of Nile Valley Academy in Khartoum, Sudan. After their first term overseas, they transitioned to East Jerusalem, Israel where they served as administrators of the Jerusalem School, pastors of the international church, New Life Community, and participated in one of the largest disciple making movements in the Middle East.\n\nUpon return to the U.S. for itineration, they were invited to serve as lead pastors of Connection Point Church in West Lafayette, Indiana, home to Purdue University. While serving with Connection Point, God led Zach and Shellie back to their overseas experience, working with disciple making movements. Zach, Shellie and the leadership team of Connection Point Church worked together to create a pathway to enable every follower of Jesus to live an extraordinary life as an everyday disciple maker.\n\nAfter six years of serving Connection Point, Zach and Shellie were invited to return to Israel and Palestine as area directors and Live Dead Origins strategy leaders. As area directors, Zach and Shellie:\n\n-Lead strategy and vision for ministry across Israel and Palestine.\n-Strengthen global workers by coordinating member care.\n-Develop leaders and pastors throughout the Holy Land.\n-Live intentionally as everyday disciple makers in their neighborhood, city, and country."},
  "us-16": {"photo": "photos/us-16.jpg", "bio": "Trained as a commercial flight instructor, Carey Waldie began working with young people helping them navigate the course of life. He found that the most important decisions of life distill down to SEVEN KEY areas: Faith, Attitude, Authority, Pleasure, Relationships and Sex, Production and Adversity. As a master-teacher, he has spent a lifetime helping people live purposeful and meaningful lives. He writes and speaks broadly on these topics. Carey is married to a wonderful woman and is the father of four children. He is an airline transport rated pilot, serves as a college campus leader, and lives in the forests of Northern Michigan. One of his four goals is to see the great commission fulfilled in his lifetime."},
  "us-29": {"photo": "photos/us-29.jpg", "bio": "Since 1989, Good News Gang has been committed to equipping the children of Detroit to become leaders of the next generation.\n\nGood News Gang is committed to providing hope and building futures for children living in adverse conditions. Whether faced with the physical effects of poverty or the dangers of gangs, violence, abuse and hopelessness, we want to see children’s lives placed on a new path through the life-changing love of Christ. By meeting children where they are, personally investing in their lives and presenting the Gospel in a fun, accessible way, we believe we can build foundations that lead to hope, a future and better lives for precious children."},
  "us-34": {"photo": "photos/us-34.jpg", "bio": "Right to Life of Michigan is a nonpartisan, nonsectarian, nonprofit organization of diverse and caring people united to protect the precious gift of human life at all stages, from fertilization to natural death."},
  "us-36": {"photo": "photos/us-36.jpg", "bio": "Noah works here in Rochester, MI for Young Life. Noah helped to launch ministry for Young Life here in the fall of 2023 and has since been leading the ministry. Young Life is an organization with the mission of introducing adolescents to Jesus Christ and helping them to grow in their faith. Noah leads a team of volunteer leaders who are on mission to develop relationships with high school and middle school students. Noah and the other leaders desire to be caring adults in the lives of students, and to earn the opportunity to share the Gospel with them."}
};

(function () {
  var by = {}; window.MISSIONARIES.forEach(function (m) { by[m.id] = m; });
  Object.keys(window.STORIES).forEach(function (id) {
    var m = by[id], s = window.STORIES[id];
    if (!m) return;
    // sensitive entries only ever take prayer requests - never a name, photo, bio or website
    Object.keys(s).forEach(function (k) { if (!m.s || k === 'pray') m[k] = s[k]; });
  });
})();
