var bio = {
    "name": "Kathryn O'Donnell",
    "role": "UX Designer",
    "contacts": {
        "mobile": "201-452-7281",
        "email": "klodonnell26@gmail.com",
        "github": "@kodon",
        "twitter": "N/A",
        "location": "Ann Arbor, MI"
    },
    "welcomeMessage": "Welcome to my UX Portfolio",
    "skills": [
        "User Research",
        "Information Architecture",
        "Interaction Design",
        "Usability Testing"
    ],
    "bioPic": "images/fry.jpg"
}

function displayBio() {

    /* Name & Role */
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    /* Contacts */
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    /* Bio Pic */
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedbioPic);

    /* Welcome Message */
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    /* Skills */
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    };

}

displayBio();

var education = {
    "schools": [
        {
            "name": "University of Michigan",
            "location": "Ann Arbor, MI",
            "degree": "Masters",
            "majors": ["Information", "Human-Computer Interaction"],
            "dates": 2014,
            "url": "umich.edu"
        },
        {
            "name": "New York University",
            "location": "New York, NY",
            "degree": "Bachelors",
            "majors": ["Individualized Study"],
            "dates": 2011,
            "url": "nyu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": 2015,
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
}

function displayEducation() {

    for (degree in education.schools) {
        
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[degree].name); 
        $(".education-entry:last").append(formattedName);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[degree].location); 
        $(".education-entry:last").append(formattedLocation);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[degree].dates); 
        $(".education-entry:last").append(formattedDates);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[degree].degree); 
        $(".education-entry:last").append(formattedDegree);

        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[degree].majors); 
        $(".education-entry:last").append(formattedMajors);
    }

    for (degree in education.onlineCourses) {
        
        $("#education").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[degree].title); 
        $(".education-entry:last").append(formattedTitle);

        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[degree].date); 
        $(".education-entry:last").append(formattedDate);

        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[degree].school); 
        $(".education-entry:last").append(formattedSchool);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[degree].url); 
        $(".education-entry:last").append(formattedURL);
    }

}

displayEducation();

var work = {
    "jobs": [
        {
            "employer": "GE Capital",
            "title": "UX Designer",
            "location": "Van Buren Charter Township, MI",
            "dates": "June 2014 - Present",
            "description": "Conducting user research, creating wireframes, and running usability tests for internal financial applications."

        },
        {
            "employer": "ForeSee",
            "title": "Junior Usability Auditor",
            "location": "Ann Arbor, MI",
            "dates": "Sept 2013 - Dec 2013",
            "description": "Conducted usability aduits of websites and wrote top ten issue reports."
        }
    ]
}

function displayWork() {

    for (job in work.jobs) {
        
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle; 
        $(".work-entry:last").append(formattedEmployerTitle);
        
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location); 
        $(".work-entry:last").append(formattedLocation);
        
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates); 
        $(".work-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription); 
    }

}

displayWork(); 

var projects = {
    "projects": [
        {
            "title": "U.S. Holocaust Memorial Museum",
            "dates": "March 2013",
            "description": "Assessed the Collections Search website through a heuristic evaluation and interviews with current users and staff members.",
            "imagesOne": "images/asb1.jpg",
            "imagesTwo": "images/asb2.png"
        },
        {
            "title": "Collage.com",
            "dates": "Spring 2013",
            "description": "Assessed user needs and usability through interviews, a survey, a comparative evaluation, a heuristic evaluation, and usability tests.",
            "imagesOne": "images/collage1.png",
            "imagesTwo": "images/collage2.jpg"
        }
    ]
}

function displayProjects() {

    for (project in projects.projects) {
        
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle); 

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates); 

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription); 

        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].imagesOne);
        $(".project-entry:last").append(formattedImage); 

        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].imagesTwo);
        $(".project-entry:last").append(formattedImage); 
    }

}

displayProjects(); 

$("#mapDiv").append(googleMap); 