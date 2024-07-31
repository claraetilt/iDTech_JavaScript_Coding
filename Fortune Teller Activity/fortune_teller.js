let fortune = 10; 
console.log("Fortune selected : "+ fortune); 

if(fortune >=0 && fortune <3) { 
    console.log("Oh no! Low fortune"); 
} 
else if(fortune > 3 && fortune <=7) { 
    console.log("Medium fortune")
} 
else if(fortune>7 && fortune<=10) { 
    console.log("You have a good fortune")
} 
else { 
    console.log("Cant be read"); 
}