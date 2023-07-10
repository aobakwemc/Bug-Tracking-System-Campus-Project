function NewTickets()
{
    var element = document.getElementById("Modal_Container");
    element.style.display = "flex"
}

function CloseTickets()
{
    var element = document.getElementById("Modal_Container");
    element.style.display = "none"
}

const Data={};
function SubmitTicket(Name, Surname, Programmer, Ticket, Description)
{
    
    //Create Object for new ticket submission by user
    Data.UserName= Name,
    Data.UserSurname= Surname,
    Data.Fixer= Programmer,
    Data.TicketNr= Ticket,
    Data.Problem= Description
    
    //Add submitted ticket (with data) to a newly created div
    let AddTicket = document.createElement("div"); //AddTicket is now an obj - storing 'const Data{}'
    let Conntainer = document.getElementById("AddTickets");
    AddTicket.id = "AddTicket" //creating new property for the obj
    Conntainer.appendChild(AddTicket);
    AddTicket.classList.add("New-Div"); //New-Div is a styled class from CSS

    //Get User Data
    localStorage.setItem("UserData", JSON.stringify(Data))
    
    //add data to div
    let Information = AddTicket; //refers to the obj AddTicket
    Information.innerText += "Name  : " + Data.UserName; 
    Information.innerText += "\n Surname : " + Data.UserSurname; 
    Information.innerText += "\n Programmer : " + Data.Fixer; 
    Information.innerText += "\n Ticket Number: " + Data.TicketNr; 
    Information.innerText += "\n Problem : " + Data.Problem; 
    Information.AddTicket = Conntainer;
    Conntainer.style.display = "grid"

    //Exit out of Pop up div
    var element = document.getElementById("Modal_Container");
    element.style.display = "none";
    
}