es (58 sloc)  2.85 KB
   
let studentRecords = [ 
{name: 'John', id: 123, marks : 98 },
{name: 'Baba', id: 101, marks : 23 },
{name: 'yaga', id: 200, marks : 45 },
{name: 'Wick', id: 115, marks : 75 } ] 

// "Question 1 : We are interested in retrieving only the name of the students 
// and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']"
let result=studentRecords.map((value)=>value.name.toUpperCase())
console.log(result)
// "Question 2: Suppose we have the same dataset as above but this time 
// we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"
let result2=studentRecords.filter((value)=>value.marks>50)
console.log(result2)
// Question 3: Retrieve the details of students
// who scored more than 50 marks and have id greater than 120.
let res=studentRecords.filter((value)=>value.marks>50 && value.id>120)
console.log(res)
// Question 4: Consider the same scenario we have discussed above, but 
// this time we would like to know the sum total of the marks of the students.
let sum=studentRecords.reduce((acc,cur)=>acc+cur.marks ,1)
console.log(sum)
// Question 5: This time we want to get only  the names of the students who 
// scored more than 50 marks from the same dataset used above.
let namesofstudenent=studentRecords.filter((value)=>value.marks>50).map((value)=>value.name)
console.log(namesofstudenent)
//  Question 6: This time we are required to print the 
// sum of marks of the students with id > 120.
let idd=studentRecords.filter((items)=>items.id>120).reduce((acc,cur)=>acc+cur.marks,0)
console.log(idd)

// Question 7: This time we are required to print the total marks of the students with marks 
// greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let totalmarks=studentRecords.map((value)=>{
    if(value.marks<50){
        value.marks +=15;
    }
    return value;
 })
.filter((value)=>value.marks>50).reduce((acc,cur)=>acc+cur.marks ,0)
console.log(totalmarks)
// Create 6 objects , each object will have name, class, roll no as properties 
// Store these objects in an array of objects. 
obj1={name:'abhi',class:1,rank:1,subject:'math'}
obj1={name:'abhi',class:2,rank:2,subject:'math'}
obj1={name:'abhi',class:3,rank:1,subject:'math'}
obj1={name:'abhi',class:4,rank:4,subject:'math'}
obj1={name:'abhi',class:5,rank:3,subject:'math'}
obj1={name:'abhi',class:6,rank:6,subject:'math'}

let students=[

    {name:'abhi',class:1,rank:1,subject:'math'},
    {name:'abhi',class:2,rank:2,subject:'math'},
    {name:'abhi',class:3,rank:1,subject:'math'},
    {name:'abhi',class:4,rank:4,subject:'math'},
    {name:'abhi',class:5,rank:3,subject:'math'},
    {name:'abhi',class:6,rank:6,subject:'math'},
]
console.log(students)

