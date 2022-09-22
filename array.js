

console.log(document.querySelector("h1").textContent);
console.log(document.querySelector("p").textContent);

// window.confirm("Are you sure");

var marks = [90,80,99,45,30]

console.log(marks[2]);

for (let i = 0; i < marks.length; i++){

    console.log(i);
}

// for in
for (var i in marks) {
    console.log(i,marks[i]);
}
// for of
for (var mark of marks) {
    console.log(mark);
}

// for each

marks.forEach(function(marks) {

    console.log(mark)
});