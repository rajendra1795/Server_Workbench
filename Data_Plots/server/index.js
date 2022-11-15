const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");


const db = mysql.createPool({
    host :"localhost", 
    user :"root",
    password : "root123",
    database :"employee_data"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// Listen to API

app.listen(5001, () => {
    console.log(`Heloo World!...  Server is Running on Port: 5001`);
}); 

// GET API (SELECT)


app.get("/api/get", (req,res) => {
    const sqlGet = "SELECT * FROM employee;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});


// Sample Data Insertion 

/*app.get("/", (req,res) => {
    const sqlSampleInsert =
         "INSERT INTO employee (emp_name, department, city, salary) VALUES ('Rajesh','Supervisior','Hyderabad', 16000)";
    db.query(sqlSampleInsert,(error, result) => {
        console.log("error", error);
        console.log("result", result);
       })
       console.log("Data Inserted Successfully Go to /api/get");
    })*/

// POST API (INSERT)

app.post("/api/post", (req,res) => {
    const { emp_name, department, city, salary } = req.body;
    const sqlInsert =
         "INSERT INTO employee (emp_name, department, city, salary) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [emp_name, department, city, salary], (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});




// DELETE API (BASED ON ID)

app.delete("/api/delete/:id", (req,res) => {
    const { id } = req.params;
    const sqlDelete =
         "DELETE FROM employee WHERE id = ?";
    db.query(sqlDelete, id, (error, result) => {
       if (error) {
        console.log(error);
       } 
    });
});

 
// GET API ON SELECTED ID
 
app.get("/api/view/:id", (req,res) => {
    const {id} = req.params;
    const sqlGet = "SELECT * FROM employee WHERE id = ?";
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

// GET API ON ID

app.get("/api/get/:id", (req,res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM employee WHERE id = ?";
    db.query(sqlGet, id, (error, result) => {
       if (error) {
        console.log(error);
       } 
       res.send(result);
    });
});

// PUT API (UPDATE)

app.put("/api/update/:id", (req,res) => {
    const { id } = req.params;
    const { emp_name, department, city, salary } = req.body;
    const sqlUpdate = "UPDATE employee SET emp_name = ?, department = ?, city = ?, salary = ? WHERE id = ?";
    db.query(sqlUpdate, [emp_name, department, city, salary, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});


//INSERT VALUES DIFFERENT API'S

/*app.get("/", (req,res)=> {
    const sqlInsert = "INSERT INTO AccountType (AccountTypeId, AccountName) VALUES (5, 'Savings')";
    db.query(sqlInsert, (error,result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("Data Inserted")
    });
});*/

/*app.get("/", (req,res)=> {
    const sqlInsert = "INSERT INTO Dummy (DummyId, Name, Plots, Status) VALUES (17, 'Korukonda', 175, 1)";
    db.query(sqlInsert, (error,result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("Data Inserted")
    });
});*/