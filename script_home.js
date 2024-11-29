// frontend/script.js
alert("JavaScript is linked correctly!");
console.log("JavaScript is linked correctly!");

async function loadPets() {
    const petList = document.getElementById("petList");
    petList.innerHTML = "<p>Loading your pets...</p>";
    
    // Fetch pets from backend
    try {
      const response = await fetch("http://localhost:5000/api/pets", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      
      if (response.ok) {
        const pets = await response.json();
        petList.innerHTML = "";  // Clear loading message
        pets.forEach(pet => {
          const petCard = document.createElement("div");
          petCard.className = "pet-card";
          petCard.innerHTML = `
            <h3>${pet.name}</h3>
            <p>Species: ${pet.species}</p>
            <p>Age: ${pet.age}</p>
            <p>Owner: ${pet.owner}</p>
            <button onclick="editPet('${pet._id}')">Edit</button>
            <button onclick="deletePet('${pet._id}')">Delete</button>
          `;
          petList.appendChild(petCard);
        });
      } else {
        petList.innerHTML = "<p>Could not load pets. Please try again.</p>";
      }
    } catch (error) {
      petList.innerHTML = "<p>Error loading pets. Check your connection.</p>";
    }
  }
  
  async function deletePet(id) {
    // Send delete request to backend
    const response = await fetch(`http://localhost:5000/api/pets/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });
    if (response.ok) {
      loadPets();  // Reload pets after deletion
    } else {
      alert("Failed to delete pet");
    }
  }
  // frontend/script.js

// Utility function to highlight active menu based on the page URL
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll(".menu a");
  
    menuLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });
  function toggleProfileMenu() {
    const profileMenu = document.getElementById("profileMenu");
    profileMenu.classList.toggle("show");
  }
  
  // Close the dropdown if clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('.profile-button')) {
      const dropdowns = document.getElementsByClassName("profile-menu");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  