//inialize array of male and female Akan names
const maleAkanNames = [
"kwasi"
"kwadwo"
"kwabena"
"kwaku"
"yaw"
"kofi"
"kwame"

];
const femaleAkanName = [
    "Akosua"
    "Adowoa"
    "Abenaa"
    "Akua"
    "Yaa"
    "Afua"
    "Ama"
];
// Initialize instances to collect form data
function collectUserInfo() {
    let form = document,form[0];
    let day, month,year,gender;

    gender=form,gender,value;

    day= parsIent(form,day,value);
    month = parseInt( form,month,value);
    year= parseInt(form,year,value);
     
    return [gender,day,month,year];
}
//initialize instance to calculate the day of the week
function calculateDayOfweek(birthdate){
    let[dayOfMonth,monthOfYear,yearOfBirth] = birthDate;
    let centuryDigits, yearDigit;

    if ( monthOfYear)