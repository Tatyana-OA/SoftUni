9.	Central Cinema 
Use the given skeleton to solve this problem.
Note: You have NO permission to change directly the given HTML (index.html file).
 

Your Task
Write the missing JavaScript code to make the Central Cinema application work as expected.  
Each movie have Name, Hall and Ticket Price. 
When you click the [On Screen] button and only if inputs are all filled and the ticket price value is a number, then a new list item should be added to the Movies on Screen section. Clear the inputs.
 
The new item should have the following structure:
 
You should create a li element that contains span element with the name of the movie, a strong element with the name of the hall like “Hall: { hallName }“ and a div element. Inside the div element, there are a strong element with the ticket price, input element with placeholder containing “Tickets Sold” and a button [Archive].
When you click the [Archive] button and only if the input for tickets count is filled with a number like:
 
You should add that item to Archive section like a list item in the ul, calculating the total profit of the movie like this:
 
Use the following format:
 
Here we have list item containing span element with the name of the movie, strong element with total profit like “Total amount: {total price}” fixed to the second digit after the decimal point. Add a delete button [Delete].
When you click the [Delete] button, you should delete the current list item.
 

 
 Finally, when we click the [Clear] button delete all li elements from the archive section. No matter how many archived movies we have the archive section leaves like this:
 
