function validate() {
   const email = document.getElementById('email').value;
   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

   const password = document.getElementById('password').value
   const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
   } else {

   if (!passwordPattern.test(password)) {
      alert("Password must be at least 8 characters long and include at least one letter and one number.");
   } else {
   
      alert("Valid Username✅");
} 
   }  
}