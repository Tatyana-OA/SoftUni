
function solution() {
document.querySelector('form').addEventListener('submit',createStudent)
console.log('works')
}

solution()
async function createStudent(e) {
    e.preventDefault();
    let student = {}
    if (e.target.tagName = 'BUTTON') {
        const studentData = new FormData(e.target);
      student = {
          firstName:studentData.get('firstName'),
          lastName:studentData.get('lastName'),
          facultyNumber:studentData.get('facultyNumber'),
          grade:studentData.get('grade')
      }
      e.target.reset()
      if (studentData.get('firstName')=='' ||studentData.get('lastName')==''||studentData.get('facultyNumber')==''|| studentData.get('grade')=='') {
          return alert ('Please fill in all fields')
      }
    }  
const response = await fetch('http://localhost:3030/jsonstore/collections/students',{
    method: 'post',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(student)
})
//console.log(await response.json())

extractStudents()
}
async function extractStudents() {
    document.querySelector('tbody').innerHTML = ''
    const extract = await fetch('http://localhost:3030/jsonstore/collections/students')
    const extractedData = await extract.json()
    Object.values(extractedData).forEach(student=> {

            let studentInfo = `<tr>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade}</td></tr>`
            if (student.firstName==''&& student.lastName=='' && student.facultyNumber=='' && student.grade=='') {
                return;
            }
        document.querySelector('tbody').innerHTML += studentInfo.trim()



       
      
    });


}

function createElement(type,textContent,className) {
    let element = document.createElement(type)
    if (textContent) {
        element.textContent = textContent
    }
            
    if (className) {
        element.className = className
    }
    
    return element;
    }


