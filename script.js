
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

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");
});

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

    document.getElementById("currentDate").innerHTML =
        now.toLocaleDateString("en-IN");

    document.getElementById("currentTime").innerHTML =
        now.toLocaleTimeString("en-IN");
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
// Search Feature
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();

        // Search Dashboard Cards
        document.querySelectorAll(".card").forEach((card) => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(value) ? "flex" : "none";
        });

        // Search Recent Orders Table
        document.querySelectorAll("tbody tr").forEach((row) => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(value) ? "" : "none";
        });
    });
}
