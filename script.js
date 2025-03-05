const users = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" }
]

let students = []
let topStudents = ["أحمد", "محمد", "فاطمة", "علي", "زينب"]
let currentTopStudentIndex = 0

const scrollTop = document.getElementById('scrollTop')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollTop.classList.add('show')
    } else {
        scrollTop.classList.remove('show')
    }
})

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
        }
    })
}, { threshold: 0.1 })

document.querySelectorAll('.program-card').forEach(card => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    observer.observe(card)
})

const darkModeToggle = document.getElementById('darkModeToggle')
const body = document.body

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    const isDarkMode = body.classList.contains('dark-mode')
    darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'
})

function toggleDetails(card) {
    card.classList.toggle('active')
}

function loginTeacher() {
    const email = document.getElementById('teacherEmail').value
    const password = document.getElementById('teacherPassword').value
    const errorMessage = document.getElementById('loginError')

    const user = users.find(u => u.email === email && u.password === password)

    if (user) {
        window.location.href = '/pages/add_students.html'
    } else {
        errorMessage.textContent = 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
    }
}

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

function showTopStudents() {
    const topStudentsElement = document.getElementById('topStudents')
    topStudentsElement.textContent = `الطالب المتفوق: ${topStudents[currentTopStudentIndex]}`
    currentTopStudentIndex = (currentTopStudentIndex + 1) % topStudents.length
}

setInterval(showTopStudents, 3000)
const mobileMenuIcon = document.getElementsByClassName('mobile-menu-icon')
for (const item of mobileMenuIcon) {
    item.addEventListener('click', () => {
        navLinks.classList.toggle('active')
    })
}
const navLinks = document.querySelector('.nav-links')


