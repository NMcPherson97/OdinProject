// Loop practice from MDN
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here
for(const guest of people){
    if((guest === "Lola") || (guest === "Phil")){
        refused.textContent += `${guest}, `
    }else{
        admitted.textContent += `${guest}, `
    }
}

// refused.textContent += ...;
// admitted.textContent += ...;