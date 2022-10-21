//  Due: Fri (Oct 21)


/**
 * Q1. Print the object data as mentioned above.
 */

 console.log('\n\n for-in loop with object\n\n');
 let student1 = {
    name : 'Tayyiba Kaisar',
    state : 'MD',
    age : 22,
    gender : 'F',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Js basics', 'html', 'CS basics']
}
for (const attr in student1) {
    console.log(attr);
    console.log(student1[attr]);
}


console.log('\n\n for-in loop with object\n\n');
 let student2 = {
    name : 'John Doe',
    state : 'NJ',
    age : '20',
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    astJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 3,
            title : 'NOP'
        }
    ],
    knownSkills : 5 ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']

}
for (const attr in student2) {
    console.log(attr);
    console.log(student2[attr]);
}

let student3 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}

for (const attr in student3) {
    console.log(attr);
    console.log(student3[attr]);
}

console.log('\n\n for-in loop with object\n\n');
 let student4 = {
name : 'Eli hen',
state : 'NY',
age : '22',
gender : 'F',
paymentMethod : 'Paid',
anyExperience : false,
pastJobs : 'No',
knownSkills : ['Java', 'Manual testing', 'CS basics']

}

for (const attr in student4) {
    console.log(attr);
    console.log(student4[attr]);
}


/** 
 *  * Q2: Print the index for SECOND occurrence of 'baseBalL' (Ignoring cases)
 * 
 * if BaseBall is NOT present in Array: print, Baseball is not present in the given array
 * 
 * if BaseBall is present Only once in Array: print, Baseball is present only once in the given array
 * 
 * if BaseBall is present two or more times in Array: print, Baseball has second occurrence at index-X
 *  
 */
 let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

 let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];
 
 let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

 let favSports = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

 let couldBe = 0;
 for (const sName of favSports_2) {
     if (sName.toLowerCase().localeCompare('baseball') === 0) {
         break;          //  
     }
     couldBe++;
 }
 
 console.log('\n\nUsing for-of loop');
 console.log(`\ncouldBe -> ${couldBe}\n\n`);



 /**
 * Q3. Print the total number of past experience for a student
 * 
 * Assumption:
 * In studentObject, anyExperience-attribute will be true, if has any past-experience, 
 * otherwise anyExperience-attribute will be false
 * 
 * If student has any past experience, print :
 *      studentName has total X-years of experience
 * 
  * If student has NO past experience, print :
 *      studentName has no past experience
 */
let student3_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

for (const attr in student3_1) {
    console.log(attr);
    console.log(student3_1[attr]);
}





let student3_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : 'NO past experience',
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}

for (const attr in student3_2) {
    console.log(attr);
    console.log(student3_2[attr]);
}





