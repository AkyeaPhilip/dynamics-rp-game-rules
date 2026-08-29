/* =====================================================
   DRP — PREMIUM GAMING LANDING PAGE
   ===================================================== */


/* =====================================================
   MOBILE NAVIGATION
   ===================================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("open");

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =====================================================
   HEADER SCROLL EFFECT
   ===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =====================================================
   HERO PARTICLES
   ===================================================== */

const particlesContainer =
    document.getElementById("particles");

const particleCount = 35;

for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        5 + Math.random() * 10 + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.opacity =
        Math.random();

    particlesContainer.appendChild(particle);

}


/* =====================================================
   GAME RULES
   ===================================================== */

const rules = {

    street: {

        title: "DYNAMICS ROLEPLAY",

        items: [

            {
                title: "ROLEPLAY TERMS",
                description:
                    "RolePlay (RP) Acting as a fictional character in a realistic environment." +
                    "In Character (IC) Information and actions related to your character. Out Of Character (OOC)." +
                    "Information and actions related to you as a player." +
                    "MetaGaming (MG) Using OOC information in IC situations. Punishment: 20 minutes." +
                    "NonRP / FailRP Performing unrealistic actions that break roleplay immersion. Punishment: Jail up to 30 minutes." +
                    "FearRP Failing to value your character's life in dangerous situations. Punishment: Jail up to 45 minutes." +
                    "PowerGaming (PG) Forcing actions or outcomes on another player without allowing realistic interaction. Punishment: Jail up to 45 minutes." +
                    "Combat Logging Leaving the game to avoid roleplay consequences. Punishment: Jail up to 60 minutes." +
                    "New Life Rule (NLR) Returning to or remembering events from a roleplay situation after death. Punishment: Jail up to 60 minutes." +
                    "Random Deathmatch (RDM) Killing another player without valid roleplay reason. Punishment: Jail up to 120 minutes." +
                    "Vehicle Deathmatch (VDM) Using a vehicle to intentionally kill or seriously injure players without valid RP Punishment: Jail up to 120 minutes." +
                    "Drive-By (DB) Shooting at players from a moving vehicle without valid RP justification. Punishment: Jail up to 90 minutes." +
                    "Spawn Killing (SK) Killing players at designated spawn or safe zones. Punishment: Jail up to 180 minutes." +
                    "Revenge Killing (RK) Returning to kill someone after your character has died in the previous situation. Punishment: Jail up to 120 minutes."
            },

            {
                title: "GAMEPLAY & RP RULES",
                description:
                    `1.1 Event/Action Abuse
                    Do not abuse action or event mechanics to force outcomes. Punishment: Mute up to 30 minutes.
                    1.2 WinRP
                    Roleplaying only in your own favor and refusing realistic failure. Punishment: Jail up to 20 minutes.
                    1.3 Cheats, Exploits & Third-Party Software
                    The use of cheats, scripts, macros, bots, exploits, modified clients, or software providing an unfair advantage is prohibited.
                    Punishments:
                    Bug Abuse → Warning / 3-Day Ban
                    Auto Clickers → 3–7 Day Ban
                    Macros/Scripts → 7–14 Day Ban
                    Cheat Software → 7–31 Day Ban
                    Severe Exploitation → Permanent Ban
                    1.4 Avoiding RP
                    Leaving, disconnecting, going AFK, or hiding to avoid RP. Punishment: Jail up to 60 minutes.
                    1.5 Home Protection
                    Killing or attacking players within protected residential areas. Punishment: Jail up to 120 minutes.
                    1.6 Provocation
                    Intentionally provoking players into conflict without RP purpose. Punishment: Jail up to 120 minutes.
                    1.7 Property Trespassing
                    Refusing to leave private property after being instructed to do so. Punishment: Jail up to 120 minutes.
                    1.8 Stream Sniping
                    Watching streams to gain RP advantages or disrupt content creators. Punishment: Jail up to 60 minutes. Severe Cases: Ban up to 3 days.
                    1.9 Cop Baiting
                    Provoking law enforcement without valid RP purpose. Punishment: Jail up to 60 minutes.`
            },

            {
                title: "ECONOMY & ACCOUNT RULES",
                description:
                    `2.1 Account Trading & Market Manipulation
                Selling accounts, currency manipulation, or fraudulent transactions. Punishment: 3–7 Day Ban. Severe Cases: Character Ban (31 Days - Permanent).
                2.2 Asset Extortion
                Using threats to force players to surrender assets. Punishment: 7–31 Day Ban.
                2.3 Business Ownership Limit
                Players may own only one business per server. Punishment: Verbal Warning. Severe Cases: Character Ban (31 Days).
                2.3.1 Business Holding Schemes
                Selling businesses to friends or associates to bypass limits. Punishment: Character Ban up to 31 Days.
                2.4 Real Money Trading (RMT)
                Buying or selling assets for real-world currency. Punishment: 31-Day Ban + Asset Wipe. Severe Cases: Permanent Ban.
                2.5 Transfer Limits
                Transfers exceeding the daily limit are prohibited. Punishment: Transaction Reversal. Severe Cases: 31-Day Ban.
                2.6 Self-Transfers
                Moving assets between your own characters. Punishment: Transaction Reversal. Severe Cases: 31-Day Character Ban + Asset Wipe.
                2.7 Cross-Server Trading
                Trading items, money, or assets across servers. Punishment: 31-Day Character Ban + Asset Wipe.
                2.8 Alternate Account Abuse
                Using alternate accounts to bypass punishments or restrictions. Punishment: Applied to Main Account. Severe Cases: 31-Day Ban to Permanent Ban.`
            },


            {
                title: "ADMINISTRATION RULES",
                description:
                    `3.1 Report Abuse
                Misusing the report system. Punishment: Report Mute up to 40 Minutes.
                3.2 Disrespecting Administration
                Lying to, insulting, or misleading administrators. Punishment: Mute 30–60 Minutes. Severe Cases: 3–31 Day Ban.
                3.3 Interfering With Staff Duties
                Distracting or obstructing administrative actions. Punishment: Verbal Warning. Severe Cases: Jail up to 60 Minutes.
                3.4 Public Arguments With Staff
                Trolling, arguing, or publicly attacking staff decisions. Punishment: Mute up to 60 Minutes. Severe Cases: 1–5 Day Ban.
                3.5 Administrative Information Leaks
                Sharing confidential staff information. Punishment: 7–31 Day Ban.
                3.6 Administrative Authority
                Staff decisions apply across all official Dynamics platforms.`
            },

            {
                title: "COMMUNICATION RULES",
                description:
                    `4.1 Insults & Harassment
                Direct or indirect insults toward players. Punishment: Mute 15–30 Minutes.
                4.1.1 Mentioning Family Members
                Using family members during insults or arguments. Punishment: Mute 90–180 Minutes.
                4.1.2 Insulting Family Members
                Targeting relatives with offensive language. Punishment: 3–10 Day Ban.
                4.2 Restricted Topics
                Promotion of drugs, pornography, terrorism, self-harm, or extremist content. Punishment: 3–14 Day Ban. Severe Cases: 31 Days to Permanent Ban.
                4.3 Advertising
                Advertising external servers, services, projects, or social media without permission. Punishment: Mute 60–120 Minutes. Severe Cases: Permanent Ban.
                4.4 Racism, Xenophobia & Hate Speech
                Racism, xenophobia, religious attacks, discrimination, extremist ideology, or hate speech.
                Punishment: Mute 60–180 Minutes. Severe Cases: 7–31 Day Ban. Extreme Cases: Permanent Ban.
                4.5 Voice Chat Abuse
                Music, microphone spam, screaming, or disruptive noise. Punishment: Voice Mute up to 60 Minutes.
                4.6 OOC Threats & Doxxing
                Threatening players, exposing personal information, or attempting intimidation. Punishment: 7-Day Ban to Permanent Ban.
                4.7 IC/OOC Mixing
                Bringing IC conflicts into OOC or vice versa. Punishment: Mute up to 30 Minutes.`
            },

            {
                title: "GENERAL PROJECT REGULATIONS",
                description:
                    `5.1 Acceptance of Rules
                By playing Dynamics Roleplay, you accept all server rules.
                5.2 Staff Impersonation
                Impersonating administrators, developers, or management. Punishment: 3–7 Day Ban. Severe Cases: 31-Day Ban to Permanent Ban.
                5.3 Rule Loopholes
                Abusing loopholes or technicalities to gain unfair advantages. Punishment: 3–31 Day Character Ban.
                5.4 Account Security
                Players are responsible for securing their accounts.
                5.5 Administrative Discretion
                Management reserves the right to adjust punishments when necessary.
                5.6 Inappropriate Nicknames
                Using offensive, misleading, or impersonating names. Punishment: Verbal Warning. Severe Cases: Ban up to 31 Days.
                5.7 Account Deletion
                Deleted accounts cannot be restored.
                5.8 Repeat Offenders
                Repeated violations may result in escalated punishments.
                Punishment Escalation:
                First Offense → Standard Punishment
                Second Offense → ×2 Punishment
                Third Offense → ×3 Punishment
                Continued Violations → Permanent Ban.`
            },

            {
                title: "FINAL AUTHORITY",
                description:
                    `13.1 Staff may issue warnings for minor violations.
                13.2 Staff may mute players for chat-related offenses.
                13.3 Staff may jail players for RP violations.
                13.4 Staff may issue temporary bans for serious violations.
                13.5 Staff may permanently ban players for extreme violations.
                13.6 Punishments may be increased based on prior history.
                13.7 Appeals must be submitted through official appeal channels only.
                Management reserves the right to make final decisions in situations not explicitly covered by the rules where server integrity, fairness, or community safety is at risk..`
            },

        ],

    },


    traffic: {

        title: "DYNAMICS ROLEPLAY",

        items: [

            {
                title: "GREEN ZONE RULES",
                description:
                `Definition:
                A Green Zone (GZ). 
                is a designated safe area where players can conduct business, socialize, access services,
                 and enjoy gameplay without fear of criminal activity or unnecessary disruption.`
            },

            {
                title: "1. General Green Zone Regulations",
                description:
                `1.1 No Violence.
                Any form of violence is prohibited within a Green Zone.
                Examples:
                Shooting
                Punching
                Stabbing
                Using weapons to threaten players
                Punishment: Jail up to 120 minutes.
                1.2 No RDM or VDM.
                Random Deathmatching (RDM) and Vehicle Deathmatching (VDM) are strictly prohibited.
                Punishment: Jail up to 180 minutes.
                1.3 No Drive-By Attacks.
                Attacking players from vehicles within or around a Green Zone is prohibited.
                Punishment: Jail up to 180 minutes.
                1.4 No Kidnapping.
                Kidnapping, hostage-taking, or unlawful detainment cannot begin, occur, or end inside a Green Zone.
                Punishment: Jail up to 180 minutes.
                1.5 No Robberies.
                Robberies, muggings, extortion, or forced demands for money/items are prohibited.
                Punishment: Jail up to 180 minutes.`
            },

            {
                title: "2. Safe Zone Abuse",
                description:
                `2.1 No Green Zone Camping
                Players may not remain in a Green Zone solely to avoid RP consequences.
                Punishment: Jail up to 60 minutes.
                2.2 No Green Zone Baiting
                Entering a Green Zone after committing a crime to avoid arrest or retaliation is prohibited.
                Punishment: Jail up to 120 minutes.
                2.3 No Green Zone Abuse During Chases
                Players involved in active pursuits may not enter a Green Zone solely for protection.
                Punishment: Jail up to 120 minutes.
                2.4 No Storing Illegal RP in Green Zones
                Using Green Zones to hide from ongoing RP situations or criminal investigations is prohibited.
                Punishment: Jail up to 60 minutes.`
            },

            {
                title: "3. Vehicle Regulations",
                description:
                `3.1 Reckless Driving
                Reckless driving that endangers players is prohibited.
                Punishment: Jail up to 60 minutes.
                3.2 Vehicle Ramming
                Using vehicles to intentionally strike players or vehicles is prohibited.
                Punishment: Jail up to 120 minutes.
                3.3 Blocking Access
                Blocking entrances, exits, roads, or service points is prohibited.
                Punishment: Vehicle removal + Jail up to 60 minutes.`
                            },

            {
                title: "4. Law Enforcement Regulations",
                description:
                `4.1 No Arrests Without Cause
                Law enforcement may not detain or arrest players without proper RP justification.
                Punishment: Department disciplinary action or Jail up to 60 minutes.
                4.2 Active Criminals
                Players already under arrest before entering a Green Zone may still be detained.
                Note: Green Zones do not erase crimes committed before entry.
                4.3 Active RP Situations
                If an RP situation starts outside a Green Zone, participants may not enter a Green Zone solely to cancel or avoid the RP.
                Punishment: Jail up to 120 minutes.`
            },

            {
                title: "5. Community Conduct",
                description:
                `5.1 Respect Other Players
                Green Zones are intended to be safe and welcoming areas.
                Punishment: Warning or Mute up to 30 minutes.
                5.2 No Trolling
                Disrupting players through trolling, baiting, or nuisance behavior is prohibited.
                Punishment: Jail up to 60 minutes.
                5.3 No Exploitation
                Abusing Green Zone mechanics or loopholes is prohibited.
                Punishment: Jail up to 120 minutes. Severe Cases: 1–7 Day Ban.`
            },

            {
                title: "OFFICIAL GREEN ZONES",
                description:
                `The following areas are considered Green Zones unless otherwise announced:
                ● Spawn Areas
                ●Hospitals & Medical Centers
                ●Government Buildings
                ●Vehicle Dealerships
                ●Job Centers
                ●New Player Areas
                ●Official Event Areas
                ●Other locations designated by administration`
                            },
                
                 {
                title: "IMPORTANT NOTICE",
                description:
                `Green Zones are intended to provide a safe environment, not immunity from roleplay consequences.
                Players who abuse Green Zone protections to gain unfair advantages may receive enhanced 
                punishments at staff discretion. Repeated violations may result in temporary or permanent bans.`
                            },
        ]

    },


    safety: {

        title: "DYNAMICS ROLEPLAY",

        items: [

            {
                title: "TRAFFIC VIOLATIONS & FINES",
                description:
                "Applies To: All vehicle operators."
            },

            {
                title: "1. TRAFFIC LIGHT VIOLATIONS",
                description:
                    `1.1 Running a Red Light
                Failing to stop at a red traffic signal.
                Penalty: Automatic Fine — $2,000
                1.2 Ignoring Traffic Signals
                Failing to obey traffic control devices or road signals.
                Penalty: Automatic Fine — $2,000`
            },

            {
                title: "2. ROAD SAFETY VIOLATIONS",
                description:
                `2.1 Wrong Lane Driving
                Driving on the wrong side of the road without valid reason.
                Penalty: DPD Warning ⚠️
                Repeated Violations: Traffic Citation
                2.2 Minor Traffic Collision
                Causing a vehicle collision through careless driving.
                Penalty: Additional Fine — $500 per collision.
                2.3 Reckless Driving
                Dangerous driving that endangers other road users.
                Examples:
                ●Excessive speeding
                ●Swerving through traffic
                ●Driving on sidewalks
                ●Dangerous overtaking
                Penalty: DPD Warning ⚠️ + Fine at Officer's Discretion`
                            },

                {
                title: " 3. FAILURE TO COMPLY",
                description:
                `3.1 Failure to Stop
                Refusing to stop when instructed by law enforcement.
                Penalty: Arrest + Additional Charges
                3.2 Evading Police
                Attempting to flee from law enforcement during a traffic stop.
                Penalty: Arrest + Vehicle Impound
                3.3 Obstructing Traffic
                Intentionally blocking roads, intersections, or emergency routes.
                Penalty: Fine + DPD Warning ⚠️`
                            },

                {
                title: "4. WARNING SYSTEM",
                description:
                `4.1 DPD Warning
                Minor traffic offenses may result in an official warning from the Dynamics Police Department.
                Examples:
                ●Wrong lane driving
                ●Careless driving
                ●Minor road violations
                4.2 Administrative Warning
                Repeated traffic violations, intentional disregard for traffic laws, or unrealistic driving behavior may result in an Administration Warning.
                Examples:
                ●Continuous reckless driving
                ●Ignoring multiple fines
                ●Repeated failure to follow traffic regulations
                ●Disruptive driving affecting RP quality
                Penalty: Official Administration Warning`
                            },

                             {
                title: "AUTOMATED TRAFFIC SYSTEM",
                description:
                `Automatic Fine Structure

                Violation
                Fine
                Red Light Violation
                $2,000
                Ignoring Traffic Signal
                $2,000
                Vehicle Collision Caused
                +$500 Per Collision
                Example:
                ●Runs a red light = $2,000
                ●Hits another vehicle = +$500
                Total Fine: $2,500

                "Traffic laws exist to create realistic roleplay and safe roads for everyone. Drive responsibly or pay the consequences." 🚔🚦`
                            },

        ]

    },


    general: {

        title: "DYNAMICS ROLEPLAY",

        items: [

            {
                title: " STATE FACTION LEADERSHIP RULES",
                description:
                    `Covered Factions:
                ● Dynamics State House
                ● Dynamics Government Authority
                ● Dynamics Police Department (DPD)
                ● Dynamics Armed Forces (DAF)
                ● Dynamics Medical Center (DMC)
                ● Dynamics News Network (DNN)
                ● Underground Secret Agency (USA)`
                            },

            {
                title: "1. LEADERSHIP RESPONSIBILITIES",
                description:
                    `1.1 Lead by Example
                Leaders must maintain the highest standards of professionalism, maturity, and roleplay quality.
                Punishment: Leadership Warning → Leadership Strike
                1.2 Accountability
                Leaders are responsible for the actions, performance, and conduct of their faction members.
                Punishment: Leadership Strike
                1.3 Availability
                Leaders are expected to remain active and available to manage their faction.
                Punishment: Activity Strike
                1.4 Community Representation
                Leaders represent both their faction and the Dynamics Roleplay community.
                Punishment: Leadership Warning`
                            },

            {
                title: "2. ABUSE OF LEADERSHIP",
                description:
                    `2.1 Leadership Abuse
                Abusing leadership authority, permissions, rank, or influence is strictly prohibited.
                Punishment: Leadership Removal
                2.2 Abuse of Administrative Access
                Leaders may not misuse faction management systems, rosters, records, budgets, or internal tools.
                Punishment: Leadership Removal
                2.3 Personal Gain
                Leaders may not use their position to benefit themselves, friends, family, or associates.
                Punishment: Leadership Removal
                2.4 Corruption
                Corruption, favoritism, bribery, or unfair treatment is prohibited.
                Punishment: Leadership Removal`
                            },

                {
                title: "3. MEMBER MANAGEMENT",
                description:
                    `3.1 Fair Recruitment
                All recruitment must follow approved faction requirements.
                Punishment: Leadership Warning → Strike
                3.2 Fair Promotions
                Promotions must be based on merit, activity, performance, and qualifications.
                Punishment: Promotion Reversal + Leadership Strike
                3.3 Fair Punishments
                Leaders must apply discipline fairly and consistently.
                Punishment: Leadership Strike
                3.4 Retaliation
                Punishing members for personal disagreements is prohibited.
                Punishment: Leadership Strike → Removal
                3.5 Favoritism
                Granting special treatment, exemptions, or privileges is prohibited.
                Punishment: Leadership Strike → Removal`
                                            },

                {
                title: "4. DOCUMENTATION & RECORDS",
                description:
                    `4.1 Accurate Records
                Leaders must maintain accurate faction records.
                Punishment: Leadership Warning
                4.2 Record Manipulation
                Falsifying activity logs, promotions, reports, applications, or disciplinary records is prohibited.
                Punishment: Leadership Strike → Removal
                4.3 Confidential Information
                Internal records and leadership discussions must remain confidential.
                Punishment: Leadership Removal
                4.4 Unauthorized Sharing
                Sharing internal faction information without authorization is prohibited.
                Punishment: Leadership Removal Severe Cases: Server Ban`
                                            },

                {
                title: "5. FACTION MANAGEMENT",
                description:
                    `5.1 Professional Environment
                    Leaders must maintain a professional and respectful faction environment.
                    Punishment: Leadership Strike
                    5.2 Rule Enforcement
                    Leaders must actively enforce faction, server, and roleplay rules.
                    Punishment: Leadership Warning → Strike
                    5.3 Training Standards
                    Leaders must ensure members receive proper training.
                    Punishment: Leadership Warning
                    5.4 Operational Oversight
                    Leaders must supervise faction operations and prevent misconduct.
                    Punishment: Leadership Strike
                    5.5 Chain of Command
                    Leaders must respect and maintain established chains of command.
                    Punishment: Leadership Warning`
                                                },
                
                {
                title: "6. INTER-FACTION RELATIONS",
                description:
                    `6.1 Professional Cooperation
                    Leaders must maintain professional relationships with other legal factions.
                    Punishment: Leadership Warning
                    6.2 Inter-Faction Conflicts
                    Leaders may not create unnecessary conflicts between state factions.
                    Punishment: Leadership Strike
                    6.3 Mutual Respect
                    Leaders must treat other faction leaders respectfully.
                    Punishment: Leadership Warning`
                                                },

                {
                title: "7. PUBLIC COMMUNICATION",
                description:
                    `.1 Official Statements
                Leaders must ensure official announcements are accurate and professional.
                Punishment: Leadership Strike
                7.2 False Information
                Knowingly providing false information is prohibited.
                Punishment: Leadership Strike → Removal
                7.3 Public Conduct
                Leaders must maintain professionalism on all official platforms.
                Punishment: Leadership Warning → Strike`
                                            },

                {
                title: "8. PROHIBITED ACTIONS",
                description:
                    `8.1 Selling Positions
                    Selling ranks, promotions, positions, or faction privileges is strictly prohibited.
                    Punishment: Leadership Removal
                    8.2 Unauthorized Promotions
                    Promoting members outside official procedures is prohibited.
                    Punishment: Promotion Reversal + Leadership Strike
                    8.3 Nepotism
                    Promoting or favoring relatives, friends, or associates unfairly is prohibited.
                    Punishment: Leadership Strike → Removal
                    8.4 Inactive Leadership
                    Failure to actively manage a faction is prohibited.
                    Punishment: Leadership Strike → Removal
                    8.5 Ignoring Violations
                    Knowingly allowing rule-breaking to continue is prohibited.
                    Punishment: Leadership Strike`
                                                },

                {
                title: "2. ABUSE OF LEADERSHIP",
                description:
                    `2.1 Leadership Abuse
                Abusing leadership authority, permissions, rank, or influence is strictly prohibited.
                Punishment: Leadership Removal
                2.2 Abuse of Administrative Access
                Leaders may not misuse faction management systems, rosters, records, budgets, or internal tools.
                Punishment: Leadership Removal
                2.3 Personal Gain
                Leaders may not use their position to benefit themselves, friends, family, or associates.
                Punishment: Leadership Removal
                2.4 Corruption
                Corruption, favoritism, bribery, or unfair treatment is prohibited.
                Punishment: Leadership Removal`
                            },

                {
                title: "9. LEADERSHIP DISCIPLINE SYSTEM",
                description:
                    `9.1 Leadership Warning
                Minor leadership violation.
                9.2 Leadership Strike
                Serious misconduct or repeated violations.
                9.3 Leadership Probation
                Temporary monitoring period for leaders with performance concerns.
                9.4 Leadership Suspension
                Temporary removal of leadership powers.
                9.5 Leadership Removal
                Permanent removal from current leadership position.
                9.6 Leadership Blacklist
                Permanent prohibition from holding leadership positions in any state faction.`
                                            },

                {
                title: "FINAL AUTHORITY",
                description:
                    `11.1
                Leadership positions are a privilege, not a right.
                11.2
                Administration may audit faction records, promotions, disciplinary actions, and leadership decisions at any time.
                11.3
                Administration reserves the right to remove leaders whose actions negatively affect faction quality, server stability, or community standards.
                11.4
                Repeated violations may result in permanent leadership blacklisting.
                11.5
                The final decision in all leadership matters rests with Senior Administration and Project Management.`
                            },

                            {
                title: "LEADERSHIP PRINCIPLES",
                description:
                    `Integrity • Professionalism • Fairness • Accountability • Activity • Respect

                "A leader's rank grants responsibility, not superiority. Leadership exists to serve the faction,
                develop its members, and maintain the highest standards of roleplay."`
                            },

                            {
                title: "NOTICE",
                description:
                    `TAKING OR WITHDRAWAL OF MONEY FROM THE FACTION TREASURE IS PROHIBITED 

                    PUNISHMENT: BLACKLIST ⚫️ OF LEADER FOREVER + 31 DAY BAN`
                            },

        ]

    },

    "general-1": {

        title: "DYNAMICS ROLEPLAY",

        items: [

            {
                title: " OFFICIAL FACTION RULES",
                description:
                    `Applies To:
                Dynamics State House
                Dynamics Government Authority
                Dynamics Police Department (DPD)
                Dynamics Armed Forces (DAF)
                Dynamics Medical Center (DMC)
                Dynamics News Network (DNN)
                Underground Secret Agency (USA)
                These rules apply to all faction members regardless of rank.`
                            },

                 {
                title: "1. LEADERSHIP RESPONSIBILITIES",
                description:
                    `1.1 Lead by Example
                Leaders must maintain the highest standards of professionalism, maturity, and roleplay quality.
                Punishment: Leadership Warning → Leadership Strike
                1.2 Accountability
                Leaders are responsible for the actions, performance, and conduct of their faction members.
                Punishment: Leadership Strike
                1.3 Availability
                Leaders are expected to remain active and available to manage their faction.
                Punishment: Activity Strike
                1.4 Community Representation
                Leaders represent both their faction and the Dynamics Roleplay community.
                Punishment: Leadership Warning`
                                            },

                 {
                title: "1. PROFESSIONAL CONDUCT",
                description:
                    `1.1 Professionalism
                Members must maintain professional behavior while representing their faction.
                Punishment: Warning → Strike
                1.2 Respect
                Members must treat all players, staff, and faction members respectfully.
                Punishment: Warning → Suspension
                1.3 Toxicity
                Harassment, discrimination, racism, xenophobia, hate speech, bullying, or threats are prohibited.
                Punishment: Strike → Suspension → Removal
                1.4 Faction Representation
                While on duty, members represent their faction and the server.
                Punishment: Warning → Strike`
                            },

                 {
                title: "2. ABUSE OF AUTHORITY",
                description:
                    `2.1 Rank Abuse
                Using rank, permissions, authority, or faction resources for personal benefit is prohibited.
                Punishment: Strike → Demotion → Removal
                2.2 Corruption
                Corruption is prohibited unless specifically authorized by administration for approved RP events.
                Punishment: Removal
                2.3 Favoritism
                Providing unfair advantages to friends, family members, or associates is prohibited.
                Punishment: Strike → Removal
                2.4 Unlawful Orders
                Members may not issue or carry out orders that violate server rules.
                Punishment: Strike → Removal`
                                                            },

                 {
                title: "3. FACTION OPERATIONS",
                description:
                    `3.1 Official Duties
                Members must perform faction duties realistically and professionally.
                Punishment: Warning
                3.2 Equipment Usage
                Faction equipment, vehicles, uniforms, and resources may only be used for official purposes.
                Punishment: Strike → Suspension
                3.3 Resource Abuse
                Misusing faction budgets, supplies, facilities, or assets is prohibited.
                Punishment: Suspension → Removal
                3.4 Faction Vehicles
                Faction vehicles may not be used for personal transportation unless authorized.
                Punishment: Warning → Strike
                3.5 Uniform Regulations
                Members must wear approved uniforms while on duty where applicable.
                Punishment: Warning`
                                            },

                {
                title: " 4. CONFIDENTIALITY",
                description:
                    `4.1 Internal Information
                Confidential faction information may not be shared without authorization.
                Punishment: Removal
                4.2 Document Security
                Leaking internal reports, investigations, operations, personnel information, or classified documents is prohibited.
                Punishment: Removal Severe Cases: 7–31 Day Ban
                4.3 Screenshots & Recordings
                Internal faction materials may not be publicly released without authorization.
                Punishment: Strike → Removal`
                                            },

                {

                title: "5. INTER-FACTION RELATIONS",
                description:
                    `5.1 Cooperation
                Members must cooperate professionally with other legal factions.
                Punishment: Warning
                5.2 Interference
                Members may not intentionally interfere with official operations of another faction.
                Punishment: Strike
                5.3 Mutual Respect
                Faction rivalries must remain professional and roleplay-based.
                Punishment: Strike`
                                            },

                {
                title: "6. COMMUNICATION",
                description:
                    `6.1 Official Statements
                Only authorized personnel may issue official faction announcements.
                Punishment: Strike
                6.2 False Information
                Spreading false information while representing a faction is prohibited.
                Punishment: Suspension
                6.3 Public Conduct
                Members must remain professional in public chats, voice channels, and official platforms.
                Punishment: Warning → Strike
                6.4 Media Interactions
                Members must interact professionally with DNN and other media representatives.
                Punishment: Warning`
                                            },

                {
                title: "7. ACTIVITY REQUIREMENTS",
                description:
                    `7.1 Activity
                Members are expected to remain reasonably active.
                Punishment: Activity Strike
                7.2 Leave of Absence
                Members absent for extended periods should notify leadership.
                Punishment: Activity Strike
                7.3 Inactivity
                Repeated inactivity may result in removal.
                Punishment: Removal`
                                            },

                {
                title: "8. PROHIBITED ACTIONS",
                description:
                    `8.1 Criminal Associations
                Knowingly assisting criminal organizations without approved RP authorization is prohibited.
                Punishment: Removal
                8.2 Exploitation
                Using faction status to exploit game mechanics or gain unfair advantages is prohibited.
                Punishment: Strike → Removal
                8.3 Rule Evasion
                Attempting to bypass faction rules through loopholes, alternate accounts, or technicalities is prohibited.
                Punishment: Removal
                8.4 Unauthorized Access
                Accessing faction systems, facilities, or information without authorization is prohibited.
                Punishment: Suspension → Removal
                8.5 Faction Asset Theft
                Stealing faction property, resources, vehicles, or funds is prohibited.
                Punishment: Removal`
                                            },

                {
                title: " 9. OPERATIONAL STANDARDS",
                description:
                    `9.1 Realistic Roleplay
                All faction members must maintain high-quality and realistic roleplay standards.
                Punishment: Warning → Strike
                9.2 Abuse of Emergency Status
                Members may not falsely claim emergencies, operations, or official duties.
                Punishment: Strike
                9.3 Event Conduct
                Faction members participating in official events must follow event regulations.
                Punishment: Event Suspension
                9.4 Green Zone Compliance
                Faction members are not exempt from Green Zone rules unless authorized by RP circumstances and server rules.
                Punishment: Standard Green Zone Punishments`
                                            },

                {
                title: "10. FACTION DISCIPLINE SYSTEM",
                description:
                    `10.1 Verbal Warning
                Minor first-time violation.
                10.2 Written Warning
                Repeated minor violations.
                10.3 Faction Strike
                Serious misconduct.
                10.4 Suspension
                Temporary removal from faction duties.
                10.5 Demotion
                Reduction in rank due to misconduct.
                10.6 Removal
                Permanent removal from the faction.
                10.7 Faction Blacklist
                Permanent prohibition from joining the faction again.`
                                            },

                {
                title: "FINAL AUTHORITY",
                description:
                    `11.1
                All faction members must follow:
                Server Rules
                Game Rules
                Green Zone Rules
                Faction Rules
                11.2
                Faction punishments may be issued in addition to server punishments.
                11.3
                Administration may intervene in any faction matter affecting fairness, realism, or server stability.
                11.4
                Repeated violations may result in permanent faction blacklisting.
                11.5
                The final decision in all faction disputes rests with Senior Administration and Project Management.`
                                            },

                {
                title: "⚠️NOTICE",
                description:
                    `"Membership in a faction is a privilege, not a right. Professionalism, 
                    integrity, activity, and realistic roleplay are expected from all members."`
                            },

        ],

    },

    "general-2": {

        title: "DYNAMICS ROLEPLAY",

        items: [

            {
                title: "ORGANIZED CRIME GROUP (OCG) LEADERSHIP RULES OFFICIAL FACTION RULES",
                description:
                    `Covered Organizations:
                Ghetto Boys
                Street Mafias
                Notorious Girls
                Black Market
                Any Future Approved Criminal Organization.`
                            },

                {
                title: "1. LEADERSHIP RESPONSIBILITIES",
                description:
                    `1.1 Lead by Example
                Leaders must set the standard for roleplay quality, professionalism, activity, and conduct.
                Punishment: Leadership Warning → Leadership Strike
                1.2 Accountability
                Leaders are responsible for the conduct and actions of their organization.
                Punishment: Leadership Strike
                1.3 Activity
                Leaders must remain active and involved in the management of their organization.
                Punishment: Activity Strike
                1.4 Organization Representation
                Leaders represent both their organization and Dynamics Roleplay.
                Punishment: Leadership Warning.`
                                            },

                {
                title: "2. ABUSE OF LEADERSHIP",
                description:
                    `2.1 Leadership Abuse
                Abusing leadership authority, permissions, ranks, or organizational systems is prohibited.
                Punishment: Leadership Removal
                2.2 Personal Gain
                Leaders may not use their position to unfairly benefit themselves, friends, family members, or associates.
                Punishment: Leadership Removal
                2.3 Favoritism
                Promotions, rewards, and opportunities must not be based on personal relationships.
                Punishment: Leadership Strike → Removal
                2.4 Corruption of Leadership Systems
                Manipulating recruitment, promotions, rosters, records, or disciplinary systems is prohibited.
                Punishment: Leadership Removal.`
                                            },

                {
                title: "3. MEMBER MANAGEMENT",
                description:
                    `3.1 Fair Recruitment
                All recruitment must follow server and organization standards.
                Punishment: Leadership Warning
                3.2 Fair Promotions
                Promotions must be earned through activity, loyalty, contribution, and roleplay quality.
                Punishment: Promotion Reversal + Leadership Strike
                3.3 Fair Discipline
                Leaders must enforce organization rules fairly and consistently.
                Punishment: Leadership Strike
                3.4 Retaliation
                Punishing members for personal disagreements is prohibited.
                Punishment: Leadership Strike → Removal
                3.5 Toxic Leadership
                Harassment, threats, bullying, racism, xenophobia, discrimination, or abuse of members is prohibited.
                Punishment: Leadership Removal.`
                                            },

                {
                title: "4. CRIMINAL OPERATIONS MANAGEMENT",
                description:
                    `4.1 Operation Oversight
                Leaders are responsible for ensuring all organization activities remain realistic and follow server rules.
                Punishment: Leadership Strike
                4.2 Mass Rule Violations
                Leaders may not encourage or organize:
                ●Mass RDM
                ●Mass VDM
                ●Spawn Killing
                ●Rule-breaking events
                ●Server disruption
                Punishment: Leadership Removal Severe Cases: Organization Suspension
                4.3 Territory Control
                Leaders must ensure territory conflicts remain realistic and follow server regulations.
                Punishment: Leadership Strike
                4.4 Criminal Activity Limits
                Leaders may not allow criminal activities that make gameplay impossible for others.
                Punishment: Leadership Strike → Removal
                4.5 Organization Wars
                Leaders must ensure all wars, conflicts, and retaliations have valid RP justification.
                Punishment: Leadership Strike.`
                            },

                {
                title: "5. ORGANIZATION RESOURCES",
                description:
                    `5.1 Resource Management
                Leaders are responsible for organization funds, properties, vehicles, and equipment.
                Punishment: Leadership Strike
                5.2 Theft of Organization Assets
                Leaders may not steal, hide, transfer, or misuse organization assets.
                Punishment: Leadership Removal
                5.3 Financial Transparency
                Major organization assets and transactions should be properly documented.
                Punishment: Leadership Warning
                5.4 Asset Distribution
                Resources must be distributed fairly according to organization policies.
                Punishment: Leadership Strike.`
                                            },

                {
                title: "6. RECORDS & INFORMATION",
                description:
                    `6.1 Organization Records
                Leaders must maintain accurate organizational records where required.
                Punishment: Leadership Warning
                6.2 Falsifying Records
                Manipulating recruitment logs, activity logs, promotions, or disciplinary records is prohibited.
                Punishment: Leadership Strike → Removal
                6.3 Confidential Information
                Internal organization information must remain confidential.
                Punishment: Leadership Strike
                6.4 Unauthorized Sharing
                Sharing confidential organization information without authorization is prohibited.
                Punishment: Leadership Removal`,
                                            },

                {
                title: "7. INTER-ORGANIZATION RELATIONS",
                description:
                    `7.1 Criminal Alliances
                All alliances must have legitimate RP reasons.
                Punishment: Leadership Warning
                7.2 Organization Conflicts
                Leaders may not start conflicts without RP justification.
                Punishment: Leadership Strike
                7.3 Respect for Other Organizations
                Leaders must avoid OOC hostility with other organizations.
                Punishment: Leadership Warning
                7.4 Respect for State Factions
                Leaders must ensure members provide realistic RP when interacting with legal factions.
                Punishment: Leadership Strike.`
                                            },

                {
                title: "8. COMMUNICATION",
                description:
                    `8.1 Official Statements
                Leaders are responsible for ensuring public statements remain professional.
                Punishment: Leadership Warning
                8.2 False Information
                Knowingly spreading false information about organizations, factions, or server matters is prohibited.
                Punishment: Leadership Strike
                8.3 Public Conduct
                Leaders must maintain professionalism on all official Dynamics platforms.
                Punishment: Leadership Warning`
                                            },

                {
                title: "9. PROHIBITED ACTIONS",
                description:
                    `9.1 Selling Leadership Positions
                Selling leadership positions, promotions, or organizational privileges is prohibited.
                Punishment: Leadership Removal
                9.2 Unauthorized Promotions
                Promoting members outside approved procedures is prohibited.
                Punishment: Promotion Reversal + Leadership Strike
                9.3 OCG Farming
                Creating organizations solely for rewards, benefits, assets, or income generation without meaningful RP is prohibited.
                Punishment: Leadership Strike → Removal
                9.4 Organization Inactivity
                Failing to actively manage the organization is prohibited.
                Punishment: Leadership Strike → Removal
                9.5 Ignoring Rule Violations
                Knowingly allowing members to repeatedly violate server rules is prohibited.
                Punishment: Leadership Strike
                9.6 Harboring Cheaters or Exploiters
                Protecting members known to be cheating, exploiting, or bypassing punishments is prohibited.
                Punishment: Leadership Removal`
                                            },

                {
                title: "10. LEADERSHIP DISCIPLINE SYSTEM",
                description:
                    `10.1 Leadership Warning
                Minor leadership violation.
                10.2 Leadership Strike
                Serious violation or repeated misconduct.
                10.3 Leadership Probation
                Temporary monitoring period for leaders with performance concerns.
                10.4 Leadership Suspension
                Temporary removal of leadership authority.
                10.5 Leadership Removal
                Permanent removal from current leadership position.
                10.6 Leadership Blacklist
                Permanent prohibition from holding leadership positions in any criminal organization.`
                                            },

                {
                title: "11. LEADERSHIP ACTIVITY POLICY",
                description:
                    `11.1 Activity Requirements
                Leaders must maintain activity levels established by administration.
                11.2 Leave of Absence (LOA)
                Extended inactivity must be approved.
                11.3 Failure to Notify
                Failure to notify administration of inactivity may result in disciplinary action.
                Punishment: Leadership Strike
                11.4 Extended Inactivity
                Prolonged inactivity without approval may result in leadership removal.
                Punishment: Leadership Removal
                `
                                            },

                {
                title: "FINAL AUTHORITY",
                description:
                    `12.1
                Leadership positions are a privilege, not a right.
                12.2
                Administration may audit organization rosters, promotions, disciplinary actions, finances, and leadership decisions at any time.
                12.3
                Administration reserves the right to remove leaders whose actions negatively affect roleplay quality, fairness, or server stability.
                12.4
                Repeated violations may result in permanent leadership blacklisting.
                12.5
                The final decision in all OCG leadership matters rests with Senior Administration and Project Management.`
                                            },

                {
                title: "OCG LEADERSHIP PRINCIPLES",
                description:
                    `Leadership • Loyalty • Accountability • Discipline • Activity • Realism
                "An organization rises or falls based on its leadership. Leaders are expected to create stories,
                 develop members, and maintain the highest standards of criminal roleplay."`
                            },

                {
                title: "⚠️NOTICE",
                description:
                    `TAKING OR WITHDRAWAL OF MONEY FROM THE FACTION TREASURE IS PROHIBITED 🚫

                    PUNISHMENT: BLACKLIST ⚫️ OF LEADER FOREVER + 31 DAY BAN`
                            }

        ],


    },

    "general-3": {

        title: "DYNAMICS ROLEPLAY",

        items: [

            {
                title: "ORGANIZED CRIME FACTION RULES",
                description:
                    `Applies To:
                Ghetto Boys
                Street Mafias
                Notorious Girls
                Black Market
                ●Any Future Approved Criminal Organizations

                These rules apply to all criminal faction members regardless of rank.`
                            },

                // {
                // title: "ORGANIZED CRIME FACTION RULES",
                // description:
                //     `Applies To:
                // Ghetto Boys
                // Street Mafias
                // Notorious Girls
                // Black Market
                // ●Any Future Approved Criminal Organizations

                // These rules apply to all criminal faction members regardless of rank.`
                //             },

                {
                title: "1. GENERAL CONDUCT",
                description:
                    `1.1 Professional Criminal RP
                Members must maintain realistic and high-quality criminal roleplay.
                Punishment: Warning → Strike
                1.2 Respect
                Members must respect fellow faction members, server staff, and all players.
                Punishment: Warning → Suspension
                1.3 Toxicity
                Harassment, racism, xenophobia, discrimination, hate speech, and OOC threats are prohibited.
                Punishment: Suspension → Removal
                1.4 Representation
                Members represent their organization at all times while participating in faction activities.
                Punishment: Warning → Strike.`
                                            },

                {
                title: "2. CRIMINAL ROLEPLAY STANDARDS",
                description:
                    `2.1 FearRP
                Members must value their lives in all situations.
                Punishment: Jail up to 45 minutes + Faction Strike
                2.2 Realistic Criminal Activity
                All criminal actions must have a realistic RP reason.
                Punishment: Warning → Jail
                2.3 PowerGaming
                Forcing actions or outcomes on other players is prohibited.
                Punishment: Jail up to 45 minutes.
                2.4 MetaGaming
                Using OOC information for criminal advantage is prohibited.
                Punishment: Mute up to 20 minutes + Faction Strike.
                2.5 Combat Logging
                Leaving the game to avoid arrest, death, robbery, or RP consequences is prohibited.
                Punishment: Jail up to 60 minutes + Faction Strike.`
                                            },

                {
                title: "3. PROHIBITED CRIMINAL ACTIVITIES",
                description:
                    `3.1 RDM (Random Deathmatch)
                Killing without valid RP reason is prohibited.
                Punishment: Jail up to 120 minutes.
                3.2 VDM (Vehicle Deathmatch)
                Using vehicles as weapons without RP justification is prohibited.
                Punishment: Jail up to 120 minutes.
                3.3 Drive-By Abuse
                Drive-bys must have valid RP justification and follow server regulations.
                Punishment: Jail up to 90 minutes.
                3.4 Spawn Killing (SK)
                Attacking players at spawn locations or protected areas is prohibited.
                Punishment: Jail up to 180 minutes.
                3.5 Revenge Killing (RK)
                Returning to kill someone after your character's death is prohibited.
                Punishment: Jail up to 120 minutes.
                3.6 Mass RDM
                Coordinated attacks without RP justification are prohibited.
                Punishment: 3–31 Day Ban.
                3.7 Green Zone Abuse
                Criminal activity inside Green Zones is prohibited.
                Punishment: Jail up to 180 minutes.`
                                            },

                {
                title: "4. CRIMINAL OPERATIONS",
                description:
                    `4.1 Robberies
                Robberies must involve realistic RP and reasonable demands.
                Punishment: Jail up to 120 minutes.
                4.2 Kidnappings
                Kidnappings must have a valid RP reason.
                Punishment: Jail up to 180 minutes.
                4.3 Hostage Situations
                Hostage situations must be realistic and proportionate.
                Punishment: Jail up to 180 minutes.
                4.4 Extortion
                Extortion is allowed only within realistic RP limits.
                Players may not make the game unplayable for others.
                Punishment: Faction Strike.
                4.5 Torture RP
                Torture roleplay must remain realistic and follow server guidelines.
                Excessive or graphic descriptions are prohibited.
                Punishment: Jail up to 120 minutes.
                4.6 Scamming
                Scams must remain within approved RP limits.
                OOC scams are strictly prohibited.
                Punishment: 3–31 Day Ban.`
                                            },

                {
                title: "5. WEAPONS & VIOLENCE",
                description:
                    `5.1 Weapon Usage
                Weapons may only be used when justified by roleplay.
                Punishment: Jail up to 120 minutes.
                5.2 Public Shootouts
                Unnecessary shootouts in crowded public areas are prohibited.
                Punishment: Jail up to 120 minutes.
                5.3 Reckless Violence
                Randomly attacking civilians or organizations is prohibited.
                Punishment: Jail up to 120 minutes.
                5.4 Faction Wars
                Faction conflicts must have a valid RP reason.
                Punishment: Faction Strike.
                5.5 Safe Zones
                Criminal activities may not occur in Green Zones or designated safe areas.
                Punishment: Jail up to 180 minutes.`
                                            },

                {
                title: "6. TERRITORIES & TURF",
                description:
                    `6.1 Territory Claims
                Organizations may only claim territories approved by administration.
                Punishment: Warning → Strike.
                6.2 Territory Abuse
                Using territories to harass players or avoid roleplay is prohibited.
                Punishment: Strike.
                6.3 Spawn Camping
                Camping organization spawns or repeatedly targeting the same players is prohibited.
                Punishment: Jail up to 180 minutes.
                6.4 Property Respect
                Members must respect player-owned properties unless involved in legitimate RP.
                Punishment: Jail up to 120 minutes.`
                                            },

                {
                title: "7. INTERACTION WITH OTHER ORGANIZATIONS",
                description:
                    `7.1 Criminal Alliances
                Alliances must have a valid RP basis.
                Punishment: Warning.
                7.2 Cooperation
                Members must cooperate with faction leadership during official operations.
                Punishment: Strike.
                7.3 Criminal vs State RP
                Members must provide realistic RP when interacting with:
                ●Police
                ●Government
                ●Military
                ●Medical Services
                ●News Organizations
                Punishment: Strike.
                7.4 FearRP Toward Law Enforcement
                Members must realistically respond to overwhelming police or military force.
                Punishment: Jail up to 60 minutes.`
                                            },

                {
                title: "8. ORGANIZATION RESOURCES",
                description:
                    `8.1 Organization Assets
                Faction vehicles, weapons, funds, and properties belong to the organization.
                Punishment: Strike → Removal.
                8.2 Theft of Organization Property
                Stealing from your own organization is prohibited.
                Punishment: Removal.
                8.3 Resource Abuse
                Abusing organization resources for personal gain is prohibited.
                Punishment: Suspension → Removal.`
                                            },

                {
                title: "9. ACTIVITY REQUIREMENTS",
                description:
                    `9.1 Activity
                Members must maintain reasonable activity levels.
                Punishment: Activity Strike.
                9.2 Leave of Absence
                Extended inactivity should be reported to leadership.
                Punishment: Activity Strike.
                9.3 Inactivity
                Repeated inactivity may result in removal.
                Punishment: Removal.`
                                            },

                {
                title: "10. ORGANIZATION DISCIPLINE SYSTEM",
                description:
                    `10.1 Verbal Warning
                Minor first-time violation.
                10.2 Written Warning
                Repeated minor violation.
                10.3 Organization Strike
                Serious misconduct.
                10.4 Suspension
                Temporary removal from faction activities.
                10.5 Demotion
                Reduction in rank due to misconduct.
                10.6 Removal
                Permanent removal from the organization.
                10.7 Organization Blacklist
                Permanent prohibition from joining any criminal organization.`
                                            },

                 {
                title: "FINAL AUTHORITY",
                description:
                    `11.1
                All criminal faction members must follow:
                Server Rules
                Game Rules
                Green Zone Rules
                Organization Rules
                11.2
                Organization punishments may be issued alongside normal server punishments.
                11.3
                Criminal organizations are not exempt from roleplay standards.
                11.4
                Administration reserves the right to intervene in any criminal organization matter affecting fairness, realism, or server stability.
                11.5
                Repeated violations may result in organization blacklisting and permanent bans.`
                                                            },

                 {
                title: "CRIMINAL ORGANIZATION PRINCIPLES",
                description:
                    `Loyalty • Respect • Realism • Discipline • Activity • Quality Roleplay

                "Being a criminal does not exempt you from realism. The best criminal roleplay creates stories, not chaos."`
                                            },
                    ]
                },

};


/* =====================================================
   RULE VARIABLES
   ===================================================== */

let currentCategory = "street";
let currentRule = 0;


const ruleCategory =
    document.getElementById("ruleCategory");

const ruleCounter =
    document.getElementById("ruleCounter");

const ruleTitle =
    document.getElementById("ruleTitle");

const ruleDescription =
    document.getElementById("ruleDescription");

const progressBar =
    document.getElementById("progressBar");

const categoryButtons =
    document.querySelectorAll(".rule-category");


/* =====================================================
   UPDATE RULE
   ===================================================== */

function updateRule(direction = "next") {

    const category =
        rules[currentCategory];

    const item =
        category.items[currentRule];


    /*
       Small transition effect
    */

    ruleTitle.style.opacity = "0";
    ruleDescription.style.opacity = "0";

    ruleTitle.style.transform =
        direction === "next"
            ? "translateX(20px)"
            : "translateX(-20px)";

    ruleDescription.style.transform =
        direction === "next"
            ? "translateX(20px)"
            : "translateX(-20px)";


    setTimeout(() => {

        ruleCategory.textContent =
            category.title;

        ruleCounter.textContent =
            `${String(currentRule + 1).padStart(2, "0")} / ${String(category.items.length).padStart(2, "0")}`;

        ruleTitle.textContent =
            item.title;

        ruleDescription.textContent =
            item.description;


        const progress =
            ((currentRule + 1) /
            category.items.length) * 100;

        progressBar.style.width =
            progress + "%";


        ruleTitle.style.opacity = "1";
        ruleDescription.style.opacity = "1";

        ruleTitle.style.transform =
            "translateX(0)";

        ruleDescription.style.transform =
            "translateX(0)";

    }, 180);

}


/* =====================================================
   CATEGORY BUTTONS
   ===================================================== */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        currentCategory =
            button.dataset.category;

        currentRule = 0;

        updateRule();

    });

});


/* =====================================================
   NEXT RULE
   ===================================================== */

document
    .getElementById("nextRule")
    .addEventListener("click", () => {

        const total =
            rules[currentCategory].items.length;

        currentRule++;

        if (currentRule >= total) {

            currentRule = 0;

        }

        updateRule("next");

    });


/* =====================================================
   PREVIOUS RULE
   ===================================================== */

document
    .getElementById("prevRule")
    .addEventListener("click", () => {

        const total =
            rules[currentCategory].items.length;

        currentRule--;

        if (currentRule < 0) {

            currentRule = total - 1;

        }

        updateRule("previous");

    });


/* =====================================================
   INITIAL RULE
   ===================================================== */

updateRule();


/* =====================================================
   ACTIVE NAVIGATION ON SCROLL
   ===================================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

