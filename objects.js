// //************* Task : Employee Details doing the CRUD operations */


// let employee = {
//     name:"pyr",
//     age:22,
//     city:"Hyderabad",
//     course:"MERN Stack",
//     company:"Google",
//     salary:"50LPA",
//     status:"Unmarried",
//     college:"LBBRCE",
//     place: "Mylavaram",
//     fees:50000

// };

// console.log(employee) 
// console.log(employee.name)
// console.log(employee.age)
// console.log(employee.city)
// console.log(employee.course)
// //console.log(employee) 
// console.log(employee.college)
// console.log(employee.salary)
// console.log(employee.place)
// console.log(employee.status)
// console.log(employee.company);


// //After Updating the values *************

// employee.age = 33;
// console.log(employee.age)
// console.log(employee.age)

// employee.name = "sai"
// console.log(employee.name);


// //adding new props

// employee.fees = 25000;
// employee.gender = "Male"


// //deleting props

// delete employee.fees;



/// ***** Nested objects accesing using dot notation ******

// let std = {
//     name : "ram",
//     age : 23,
//     address:{
//         village:"palnadu"

//     }
// }

// console.log(std.name);
// console.log(std.address.village);
// console.log(std);



// Task : CRUD operations in objects using [] notation

// CREATE - Employee Object
// let employee = {
//     name: "Ravi Kumar",
//     employeeId: 101,
//     age: 25,
//     salary: 35000,
//     designation: "Frontend Developer",
//     department: "IT",
//     experience: 2,
//     location: "Hyderabad",
//     email: "ravi@gmail.com",
//     isActive: true
// };

// // READ - Access Employee Details
// console.log("----- CREATE & READ -----");

// console.log("Name:", employee["name"]);
// console.log("Employee ID:", employee["employeeId"]);
// console.log("Age:", employee["age"]);
// console.log("Salary:", employee["salary"]);
// console.log("Designation:", employee["designation"]);
// console.log("Department:", employee["department"]);
// console.log("Experience:", employee["experience"]);
// console.log("Location:", employee["location"]);
// console.log("Email:", employee["email"]);
// console.log("Active:", employee["isActive"]);
// // UPDATE - Modify Existing Details
// console.log("----- UPDATE -----");
// employee["salary"] = 45000;
// employee["designation"] = "Full Stack Developer";
// console.log("Updated Salary:", employee["salary"]);
// console.log("Updated Designation:", employee["designation"]);
// // UPDATE - Add a New Property
// employee["phone"] = "9876543210";

// console.log("Added Phone:", employee["phone"]);

// // DELETE - Remove a Property
// console.log("----- DELETE -----");

// delete employee["location"];

// // Display Final Employee Object
// console.log("----- FINAL EMPLOYEE DETAILS -----");

// for (let key in employee) {
//     console.log(key + ": " + employee[key]);
// }

// console.log("Final Employee Object:", employee);

 


//Task : Nested Object task using dot notation 


// 1. CREATE - Nested Employee Object
let employee = {
    name: "Ravi Kumar",
    employeeId: 101,
    age: 25,
    salary: 35000,
    designation: "Frontend Developer",

    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500072
    },

    department: {
        name: "IT",
        manager: "Suresh",
        team: "Frontend"
    },

    contact: {
        email: "ravi@gmail.com",
        phone: "9876543210"
    },

    experience: 2,
    isActive: true
};
console.log("===== CREATE =====");
console.log(employee);
// 2. READ - Access Employee Details
console.log("===== READ =====");
console.log("Name:", employee.name);
console.log("Employee ID:", employee.employeeId);
console.log("Age:", employee.age);
console.log("Salary:", employee.salary);
console.log("Designation:", employee.designation);
console.log("City:", employee.address.city);
console.log("State:", employee.address.state);
console.log("Pincode:", employee.address.pincode);
console.log("Department:", employee.department.name);
console.log("Manager:", employee.department.manager);
console.log("Team:", employee.department.team);
console.log("Email:", employee.contact.email);
console.log("Phone:", employee.contact.phone);
console.log("Experience:", employee.experience);
console.log("Active:", employee.isActive);
// 3. UPDATE - Modify Existing Properties
console.log("===== UPDATE =====");
employee.name = "Rao Kumar";
employee.salary = 45000;
employee.designation = "Full Stack Developer";
employee.address.city = "Bengaluru";
employee.department.manager = "Prasad";
employee.contact.phone = "9123456780";
console.log("Updated Name:", employee.name);
console.log("Updated Salary:", employee.salary);
console.log("Updated Designation:", employee.designation);
console.log("Updated City:", employee.address.city);
console.log("Updated Manager:", employee.department.manager);
console.log("Updated Phone:", employee.contact.phone);
// 4. CREATE - Add New Properties
console.log("===== ADD NEW PROPERTIES =====");
employee.bloodGroup = "O+";
employee.address.country = "India";
employee.department.project = "Employee Management System";
employee.contact.linkedIn = "linkedin.com/in/ravi";
console.log("Blood Group:", employee.bloodGroup);
console.log("Country:", employee.address.country);
console.log("Project:", employee.department.project);
console.log("LinkedIn:", employee.contact.linkedIn);
// 5. DELETE - Remove Existing Properties
console.log("===== DELETE =====");
delete employee.age;
delete employee.address.pincode;
delete employee.department.team;
delete employee.contact.email;
console.log("Age:", employee.age);
console.log("Pincode:", employee.address.pincode);
console.log("Team:", employee.department.team);
console.log("Email:", employee.contact.email);
// 6. FINAL EMPLOYEE OBJECT
console.log("===== FINAL EMPLOYEE OBJECT =====");
console.log(employee);

