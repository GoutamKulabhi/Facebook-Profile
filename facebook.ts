//declaring class consisting details of facebook profile page

class SocialProfile{

    constructor(public work:string, public professionalSkills:string, public university:string, public highSchool:string,
    public currentCity:string, public hometown:string, public mobileNumber:number, public email:string, public socialLink:string,
    public dateOfBirth:string, public gender:string, public languagesKnown:string, public quotes:string, public relationship?:string,
    public familyMembers?: string){

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
        this.quotes =quotes;
        this.relationship = relationship;
        this.familyMembers = familyMembers;
        
    }

    getEmploymentDetails = ()=>{
        return this.work;
    }
    getSkillsAcquired = ()=>{
        return this.professionalSkills;
    }
    geteducationDetails = ()=>{
        return "I have completed my schooling from" + " " + this.highSchool + "and i am graduated from" + " " + this.university;
    }
    getCurrentCity = ()=>{
        return this.currentCity;
    }
    getHometown = ()=>{
        return this.hometown;
    }
    getSocialMediaHandles = ()=>{
        return this.socialLink;
    }
    getdateOfBirth = ()=>{
        return this.dateOfBirth;
    }
    getPersonalInformation = ()=>{
        return "I am" + " " + this.gender + " " + "and" + " " + "I can speak" + " " + this.languagesKnown;
    }
    getfavouriteQuote = ()=>{
        return this.quotes;
    }
    
}

let ABC = new SocialProfile("Infosys", "Web developer", "WBUT", "Army School", "Chandigarh", "WestBengal",
9781345668, "abc@gmail.com", "www.facebbok.com/abc", "08/04/1990", "Male", "English,Hindi,Bengali,Spanish", "Taking risk is the very first step for every big achievement")

console.log("I work at" + " " + ABC.getEmploymentDetails());
console.log("I work as a" + " " + ABC.professionalSkills + " " + "professionally");
console.log(ABC.geteducationDetails());
console.log("I currently live in" + " " + ABC.currentCity + " " + "and my hometown is" + " " + ABC.hometown);
console.log("I use" + " " + ABC.mobileNumber + " " + "and" + " " + ABC.email + " " + "as my contact details");
console.log(ABC.getSocialMediaHandles());
console.log(ABC.getPersonalInformation());
console.log("My favourite quote is" + " " + ABC.getfavouriteQuote());

