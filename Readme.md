PORT = 5000

MONGO_URI = mongodb://localhost:27017/TrainingDB


In Thunder client fetch perticular user email 
link : http://localhost:5000/fetch-register/arav@example.com

All user fetch 
Link : http://localhost:5000/fetch-register

Account create 

link : http://localhost:5000/register

in thunder client body 

{
  "name"  :"Aravidan",
  "email": "aravji@example.com",
  "contact": "9876543210",
  "city": "Chennai",
  "course": "Full Stack Development",
  "dob": "2015-02-25",
  "message": "Your message here"
}