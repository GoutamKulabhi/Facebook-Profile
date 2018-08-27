//declaring class consisting details of facebook profile page
var SocialProfile = /** @class */ (function () {
    function SocialProfile(work, professionalSkills, university, highSchool, currentCity, hometown, mobileNumber, email, socialLink, dateOfBirth, gender, languagesKnown, quotes, relationship, familyMembers) {
        var _this = this;
        this.work = work;
        this.professionalSkills = professionalSkills;
        this.university = university;
        this.highSchool = highSchool;
        this.currentCity = currentCity;
        this.hometown = hometown;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.socialLink = socialLink;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.languagesKnown = languagesKnown;
        this.quotes = quotes;
        this.relationship = relationship;
        this.familyMembers = familyMembers;
        this.getEmploymentDetails = function () {
            return _this.work;
        };
        this.getSkillsAcquired = function () {
            return _this.professionalSkills;
        };
        this.geteducationDetails = function () {
            return "I have completed my schooling from" + " " + _this.highSchool + "and i am graduated from" + " " + _this.university;
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.getHometown = function () {
            return _this.hometown;
        };
        this.getSocialMediaHandles = function () {
            return _this.socialLink;
        };
        this.getdateOfBirth = function () {
            return _this.dateOfBirth;
        };
        this.getPersonalInformation = function () {
            return "I am" + " " + _this.gender + " " + "and" + " " + "I can speak" + " " + _this.languagesKnown;
        };
        this.getfavouriteQuote = function () {
            return _this.quotes;
        };
        this.work = work;
        this.professionalSkills = professionalSkills;
        this.university = university;
        this.highSchool = highSchool;
        this.currentCity = currentCity;
        this.hometown = hometown;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.socialLink = socialLink;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.languagesKnown = languagesKnown;
        this.quotes = quotes;
        this.relationship = relationship;
        this.familyMembers = familyMembers;
    }
    return SocialProfile;
}());
var ABC = new SocialProfile("Infosys", "Web developer", "WBUT", "Army School", "Chandigarh", "WestBengal", 9781345668, "abc@gmail.com", "www.facebbok.com/abc", "08/04/1990", "Male", "English,Hindi,Bengali,Spanish", "Taking risk is the very first step for every big achievement");
console.log("I work at" + " " + ABC.getEmploymentDetails());
console.log("I work as a" + " " + ABC.professionalSkills + " " + "professionally");
console.log(ABC.geteducationDetails());
console.log("I currently live in" + " " + ABC.currentCity + " " + "and my hometown is" + " " + ABC.hometown);
console.log("I use" + " " + ABC.mobileNumber + " " + "and" + " " + ABC.email + " " + "as my contact details");
console.log(ABC.getSocialMediaHandles());
console.log(ABC.getPersonalInformation());
console.log("My favourite quote is" + " " + ABC.getfavouriteQuote());
