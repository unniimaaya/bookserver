
users ={
    "anna@gmail.com":{email:"anna@gmail.com",uname:"anna",password:"anna1234",phone:"8199785667",products:[]},
    "anu@gmail.com":{email:"anu@gmail.com",uname:"anu",password:"anus1234",phone:"8199785559",products:[]},
    "aju@gmail.com":{email:"aju@gmail.com",uname:"arjun",password:"arju1234",phone:"8199785345",products:[]}
 }
 
 const register = (email,password,uname,phone)=>{
   
     let db = users
 
     if(email in db){
         return {
             statusCode:401,
             status:false,
             message:"Account is already exist .. please login !!"
         }
        
       }
       else{
         db[email]={
           email,
           password,
           uname,
           phone
         }
         return{
           statusCode:200,
          status:true,
          message:"account is successfully created ..."
         }
       }
 }
 
 const login =(email,password)=>{
     let db = users
     if(email in db){
         if(password==db[email]["password"]){
            return{
                statusCode:200,
                status:true,
                message:"successfully login"
            }
         }
         else{
             return{
                 statusCode:401,
                 status:false,
                 message:"incorrect password"
             }
         }
     }
     else{
         return{
             statusCode:401,
             status:false,
             message:"invalid user"
         }
     }
 
 }
 const products = (email,productname,productprice,productdescription)=>{
      let db= users
      if(email in db){
          db[email]["products"] ={
              productname,
              productprice,
              productdescription
              
          }
          return{
              statusCode:200,
              status:true,
              message:"product adding successfully"
          }
      }
      else{
          return{
              statusCode:401,
              status:false,
              message:"invalid user"
          }
      }
 }
 
 const getproducts = ()=>{
        
 }
 
 
 
 
 module.exports ={
     register,
     login,
     products,
     getproducts
 }