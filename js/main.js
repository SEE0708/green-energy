const solutions= {
    1: {
        title: "Wind Power",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor mauris. Aenean metus nulla, mattis vel condimentum eget, porttitor in sapien. Integer condimentum magna justo, ut vestibulum lectus ullamcorper id. Suspendisse potenti. Curabitur accumsan elementum odio, ut imperdiet lectus ullamcorper a. Quisque cursus tellus at massa congue convallis. Suspendisse posuere interdum tincidunt.",
        image: "./img/sundown-g79540910d_1920.jpg"
    },
    2: {
        title: "Solar Energy",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor mauris. Aenean metus nulla, mattis vel condimentum eget, porttitor in sapien. Integer condimentum magna justo, ut vestibulum lectus ullamcorper id. Suspendisse potenti. Curabitur accumsan elementum odio, ut imperdiet lectus ullamcorper a. Quisque cursus tellus at massa congue convallis. Suspendisse posuere interdum tincidunt.",
        image: "./img/solar-panels-g7b847c57d_1920.jpg"
    },
    3: {
        title: "Green Vehicle",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor mauris. Aenean metus nulla, mattis vel condimentum eget, porttitor in sapien. Integer condimentum magna justo, ut vestibulum lectus ullamcorper id. Suspendisse potenti. Curabitur accumsan elementum odio, ut imperdiet lectus ullamcorper a. Quisque cursus tellus at massa congue convallis. Suspendisse posuere interdum tincidunt.",
        image: "./img/car-33866.png"
    }
};

const btn = document.querySelectorAll(".buttons button");
const content = document.querySelector(".contents");
    
btn.forEach(function(button) {
    button.addEventListener("click", function() {
    
        btn.forEach(function(btn) {
        btn.classList.remove("active-button");
        });
    
        button.classList.add("active-button");
        const id = button.getAttribute("id").slice(-1);

        const solution = solutions[id];

        content.innerHTML = `<h2>${solution.title}</h2><p>${solution.content}</p><img src="${solution.image}" alt="${solution.title} Image">`;
    });
});
      
buttons[0].classList.add("active-button");


