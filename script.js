// handles total monthly Salary displayed in footer 
let totalMonthly = 0;

function handleSubmit(event){
    event.preventDefault();
// Get *value* from HTML and set it to empty after submission
    let firstName = document.getElementById(`firstName`).value;
    document.getElementById(`firstName`).value= "";

// Get *value* from HTML and set it to empty after submission
    let lastName = document.getElementById(`lastName`).value;
    document.getElementById(`lastName`).value = "";

// Get *value* from HTML and set it to empty after submission
    let id = document.getElementById(`id`).value;
    document.getElementById(`id`).value = "";

// Get *value* from HTML and set it to empty after submission
    let title = document.getElementById(`title`).value;
    document.getElementById(`title`).value = "";

// Get *value* from HTML and set it to empty after submission
    let annualSalary = Number(document.getElementById(`annualSalary`).value);

    // Update total Salary
    totalMonthly += (annualSalary/12); // Might fuck with the tests        Remember this!!
    
    // handles addition of overBudget class to footer once total monthly cost exceeds 20000
    if(totalMonthly > 20000){
        let footer = document.querySelector("footer");
        footer.classList.add("over-budget");
    }

    console.log(totalMonthly);
    document.getElementById(`annualSalary`).value = "";

    tableBody.innerHTML +=
    `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>$${annualSalary}</td>
        <td onclick="deleteRow(event)"><button>Ⓧ</button></td>      
        
    </tr>`;
    document.getElementById(`footy`).innerHTML = `Total Monthy: ${totalMonthly}`;
}
function deleteRow(event){
    event.target.parentElement.parentElement.remove();

}