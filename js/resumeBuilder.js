/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
    "jobs": [{
            "employer": "Lee Industries",
            "title": "Engineer's Assistant",
            "location": "Conover, NC",
            "dates": "September 2008-June 2015, temporary as needed",
            "description": "Scanned tickets for payroll, did some maintenance work."
        },
        {
            "employer": "Olive Garden",
            "title": "Host",
            "location": "Hickory, NC",
            "dates": "July 2012-June 2016, temporary as needed",
            "description": "Hosted in the front, kept restaurant areas clean, kept guests happy."
        },
        {
            "employer": "Infosys",
            "title": "Associate",
            "location": "West Lafayette, IN",
            "dates": "July 2017, ongoing",
            "description": "Currently training in front-end development."
        }
    ]
};

var projects = {
    "projects": [{
            "title": "North Island",
            "dates": "2006-Ongoing",
            "description": "Video game that I am designing art, music, sound, and story for mostly on my own!",
            "images": ["images/nisland1-400_medium_1x.png", "images/factoryteaser-400_medium_1x.png"]
        },
        {
            "title": "Mechathon",
            "dates": "2017",
            "description": "Small video game I completed for my senior project! More custom music, art, and sound effects!",
            "images": ["images/mm1-400_medium_1x.png"]
        }
    ]
};

var bio = {
    "name": "Colin Beard",
    "role": "Designer",
    "welcomeMessage": "Hello, welcome to my resume!",
    "bioPic": "images/negablitz-400_medium_1x.jpg",
    "contacts": {
        "mobile": "(828)-994-1782",
        "email": "silvercpb@gmail.com",
        "github": "negablitz",
        "location": "West Lafayette, IN"
    },
    "skills": ["Artist", "Musician", "Video Game Designer", "Programmer"]
};

var education = {
    "schools": [{
        "name": "University of North Carolina at Charlotte",
        "location": "Charlotte, NC",
        "degree": "Bachelor's of Science of Computer Science",
        "dates": "May 2017",
        "url": "http://www.uncc.edu/",
        "majors": ["Computer Science"]
    }],
    "onlineCourses": [{
        "title": "Front-End Web Development",
        "school": "Udacity",
        "dates": "July 10 2017-September 1 2017",
        "url": "https://www.udacity.com/"
    }]
};

//HEADER AND SKILLS
bio.display = function() {
    //HEADER
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);

    //SKILLS
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};

//Call header function for top part of page
bio.display();

//CONTACTS
var formattedContact;

function contacts(pageLocation) {
    formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile);
    formattedContact = formattedContact.replace("%contact%", "Mobile");
    $(pageLocation).append(formattedContact);

    formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts.email);
    formattedContact = formattedContact.replace("%contact%", "Email");
    $(pageLocation).append(formattedContact);

    formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts.github);
    formattedContact = formattedContact.replace("%contact%", "GitHub");
    $(pageLocation).append(formattedContact);

    formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts.location);
    formattedContact = formattedContact.replace("%contact%", "Location");
    $(pageLocation).append(formattedContact);

}

//Call contacts functions
contacts("#topContacts");
contacts("#footerContacts");

//WORK
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedJob = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployer + formattedJob + formattedLocation + formattedDates + formattedDescription);
    });
};

//Call work function
work.display();

//PROJECTS
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        var formattedImages = [];

        project.images.forEach(function(image) {
            formattedImages.push(HTMLprojectImage.replace("%data%", image));
        });

        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImages);
    });
};

//Call projects function
projects.display();

//EDUCATION
education.display = function() {
    $("#education").append(HTMLschoolStart);
    //Colleges
    education.schools.forEach(function(school) {

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

        var formattedMajors = [];

        school.majors.forEach(function(major) {
            formattedMajors.push(HTMLschoolMajor.replace("%data%", major));
        });

        $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajors);
    });
    //Online courses
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {

        var formattedName = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedURL = HTMLonlineURL.replace("%data%", course.url);

        $(".education-entry:last").append(formattedName + formattedSchool + formattedDates + formattedURL);
    });
};

//Call education function
education.display();

$("#mapDiv").append(googleMap);