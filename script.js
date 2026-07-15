
// ===============================
// Local Storage Functions
// ===============================

function saveUsers() {
    const users = [];

    document.querySelectorAll(".users-table tbody tr").forEach(row => {
        const cells = row.querySelectorAll("td");

        users.push({
            name: cells[0].innerText,
            email: cells[1].innerText,
            role: cells[2].innerText,
            status: cells[3].innerText
        });
    });

    localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const tbody = document.querySelector(".users-table tbody");

    if (!tbody) return;

    tbody.innerHTML = "";

    users.forEach(user => {
        tbody.insertAdjacentHTML("beforeend", `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><span class="status active">${user.status}</span></td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
            </tr>
        `);
    });
}
// Revenue Chart

const salesChart = document.getElementById("salesChart");

if (salesChart) {
new Chart(salesChart, {
type: "line",

data: {

labels: ["Jan","Feb","Mar","Apr","May","Jun"],

datasets: [{
label: "Revenue",

data: [12,19,15,24,32,40],

borderColor: "#6366f1",

backgroundColor: "rgba(99,102,241,.25)",

fill: true,

tension: .4

}]
},

options: {

responsive: true,

plugins: {

legend: {

display: false

}

}

}

});
}



// Users Chart

const userChart = document.getElementById("userChart");

if(userChart){

new Chart(userChart,{

type:"doughnut",

data:{

labels:["Active","Inactive"],

datasets:[{

data:[82,18],

backgroundColor:[
"#22c55e",
"#334155"
],

borderWidth:0

}]

},

options:{

responsive:true,

plugins:{
legend:{
position:"bottom",
labels:{
color:"#ffffff"
}
}

}

}

});

}



// Dark / Light Mode

const themeBtn=document.querySelector(".theme-btn");
if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");
});
}

// Notification Button Animation

const notifyBtn = document.querySelector(".notify");

if (notifyBtn) {

    notifyBtn.addEventListener("click", () => {

        notifyBtn.style.transform = "scale(1.2)";

        setTimeout(() => {

            notifyBtn.style.transform = "scale(1)";

        }, 200);

        alert("🔔 You have 3 new notifications!");

    });
}
// Card Hover Animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// Fade Animation

window.addEventListener("load", () => {

    document.querySelectorAll(".card,.chart-card,.table-card,.profile-card,.activity-card")
    .forEach((item, index) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";

        setTimeout(() => {

            item.style.transition = ".6s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }, index * 150);

    });

});
function updateDateTime() {
    const now = new Date();

    const currentDate = document.getElementById("currentDate");
    const currentTime = document.getElementById("currentTime");

    if (currentDate) {
        currentDate.innerHTML = now.toLocaleDateString("en-IN");
    }

    if (currentTime) {
        currentTime.innerHTML = now.toLocaleTimeString("en-IN");
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);
// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target.toLocaleString("en-IN");
        }
    };

    updateCounter();
});
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}

/* ===========================
   Analytics Charts
=========================== */

if (document.getElementById("usersChart")) {
    console.log("user chart loading");
    new Chart(document.getElementById("usersChart"), {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Users",
                data: [120, 180, 250, 320, 450, 640],
                backgroundColor: "#4CAF50",
                borderRadius: 8
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {

                    labels: {
                     color: "#fff"
                }
            },

            },
            scales: {
                x: {
                    ticks: { color: "#fff" },
                    grid: { color: "#333" }
                },
                y: {
                    ticks: { color: "#fff" },
                    grid: { color: "#333" }
                }
            }
        }
    });
}

if (document.getElementById("revenueChart")) {
    new Chart(document.getElementById("revenueChart"), {
        type: "doughnut",
        data: {
            labels: ["Products", "Services", "Subscriptions"],
            datasets: [{
                label:"Revenue",
                data: [55, 25, 20],
                backgroundColor: [
                    "#4CAF50",
                    "#42A5F5",
                    "#FF9800"
                ],
                borderWidth: 0
            }],
        },
        
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#fff"
                    }
                }
            }
        }
    });
}

/* ===========================
   ADD USER MODAL
=========================== */

const addUserBtn = document.querySelector(".add-user-btn");
const userModal = document.getElementById("userModal");
const closeModal = document.querySelector(".close");
const saveUserBtn = document.getElementById("saveUserBtn");
const usersTable = document.querySelector(".users-table tbody");

if (addUserBtn && userModal) {

    addUserBtn.onclick = () => {
        userModal.style.display = "flex";
    };

    closeModal.onclick = () => {
        userModal.style.display = "none";
        saveUsers();
        alert("user Added Successfully!");
    };

    window.onclick = (e) => {
        if (e.target === userModal) {
            userModal.style.display = "none";
        }
    };

    saveUserBtn.onclick = () => {

        const name = document.getElementById("userName").value.trim();
        const email = document.getElementById("userEmail").value.trim();
        const role = document.getElementById("userRole").value;

        if (name === "" || email === "") {
            alert("Please fill all fields.");
            return;
        }

        const row = `
            <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${role}</td>
                <td><span class="status active">Active</span></td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
            </tr>
        `;

        usersTable.insertAdjacentHTML("beforeend", row);

        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";
        document.getElementById("userRole").selectedIndex = 0;

        userModal.style.display = "none";

        alert("User Added Successfully!");
    };

}
document.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete-btn")) {

        if (confirm("Are you sure you want to delete this user?")) {

            e.target.closest("tr").remove();
            saveUsers();
        }

    }

});
document.addEventListener("click", function (e) {

    if (e.target.classList.contains("edit-btn")) {

        const row = e.target.closest("tr");

        const name = row.cells[0].innerText;
        const email = row.cells[1].innerText;
        const role = row.cells[2].innerText;

        document.getElementById("userName").value = name;
        document.getElementById("userEmail").value = email;
        document.getElementById("userRole").value = role;

        userModal.style.display = "flex";

        
    }

});

window.addEventListener("DOMContentLoaded", loadUsers);
const searchInput = document.getElementByI("searchInput");
console.log(searchInput);

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();
        const rows = document.querySelectorAll(".users-table tbody tr");

        rows.forEach(row => {
            const text = row.innerText.toLowerCase();

            if (text.includes(value)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });

    });
}