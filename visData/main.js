/** @TODO - Access the pokemon data from data.js */
/**         and print to the console to check */
let Index=0;
console.log(people)



function Change(){
    const firstname=document.getElementById("First_name");
    firstname.innerHTML=`${people[Index].name.first}`;
    const lastname=document.getElementById("Last_name");
    lastname.innerHTML=`${people[Index].name.last}`;
    const gender=document.getElementById("Gender");
    gender.innerHTML=`${people[Index].gender}`;
    const Number=document.getElementById("Number");
    Number.innerHTML=`${people[Index].phone}`;
    const Email=document.getElementById("Email");
    Email.innerHTML=`${people[Index].email}`;
    const state=document.getElementById("State");
    state.innerHTML=`${people[Index].location.state}`;
    const age=document.getElementById("Age");
    age.innerHTML=`${people[Index].dob.age}`
}

    


const randomBtn = document.getElementById("random_btn");
randomBtn.addEventListener("click",()=>{
    let randumNumber=Math.random()*people.length;
    let randInt=Math.floor(randumNumber);
    Index=randInt;
    Change();
})
  