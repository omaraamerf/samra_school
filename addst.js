document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault()
    addStudent()
})

let students = []

function addStudent() {
    const name = document.getElementById('studentName').value
    const grade = document.getElementById('studentGrade').value
    const id = document.getElementById('studentId').value
    const dob = document.getElementById('studentDob').value
    const address = document.getElementById('studentAddress').value
    const phone = document.getElementById('studentPhone').value

    const student = { name, grade, id, dob, address, phone }
    students.push(student)

    updateStudentsTable()
    clearForm()
}

function updateStudentsTable() {
    const tbody = document.querySelector('#studentsTable tbody')
    tbody.innerHTML = ''

    students.forEach(student => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.id}</td>
            <td>${student.dob}</td>
            <td>${student.address}</td>
            <td>${student.phone}</td>
        `
        tbody.appendChild(row)
    })
}

function clearForm() {
    document.getElementById('studentName').value = ''
    document.getElementById('studentGrade').value = ''
    document.getElementById('studentId').value = ''
    document.getElementById('studentDob').value = ''
    document.getElementById('studentAddress').value = ''
    document.getElementById('studentPhone').value = ''
}

// زر الوضع الليلي
const darkModeToggle = document.getElementById('darkModeToggle')
const body = document.body

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    const isDarkMode = body.classList.contains('dark-mode')
    darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'
})