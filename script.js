
// Modal
const profiles = [
  {
    name: "Ritika",
    age: 34,
    tagline: "Warm, thoughtful and loves poetry",
    location: "Vishakhapatnam, Andhra Pradesh",
    avatar: "https://i.pravatar.cc/150?img=47",
    description: "A grounded and creative soul, Ritika enjoys calm evenings, soulful music and meaningful conversations.",
    hobbies: [
      { title: "Poetry", description: "Writes and recites Hindi and Urdu verses during open mic nights" },
      { title: "Badminton", description: "Plays recreationally with friends every weekend" },
      { title: "Spirituality", description: "Practices meditation and reads spiritual literature regularly" },
    ]
  },
  {
    name: "Sneha",
    age: 31,
    tagline: "Spiritual, grounded and ready for her next chapter",
    location: "Mumbai, Maharashtra",
    avatar: "https://i.pravatar.cc/150?img=48",
    description: "Sneha is rooted in values, loves connecting with people and believes in lifelong learning.",
    hobbies: [
      { title: "Volunteering", description: "Active in local community kitchens and NGO events" },
      { title: "Classical Music", description: "Learns Hindustani vocals from a private tutor" },
      { title: "Reading", description: "Avid reader of spiritual biographies and memoirs" },
    ]
  },
  {
    name: "Pavithra",
    age: 35,
    tagline: "Loves long walks, strategy games and filter coffee",
    location: "Bangalore, Karnataka",
    avatar: "https://i.pravatar.cc/150?img=49",
    description: "An introverted extrovert who enjoys deep conversations, nature and slow living.",
    hobbies: [
      { title: "Road Trips", description: "Often escapes on spontaneous weekend drives to the hills" },
      { title: "Filter Coffee", description: "A self-proclaimed connoisseur who brews her own every morning" },
      { title: "Board Games", description: "Hosts monthly strategy game nights with close friends" },
    ]
  }
];

function showModal(i) {
  const profile = profiles[i];
  const modal = document.getElementById("profileModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <img src="${profile.avatar}" class="w-24 h-24 rounded-full mx-auto mb-4" />
    <h3 class="text-xl font-bold mb-1">${profile.name}, ${profile.age}</h3>
    <p class="text-sm text-gray-500 mb-2">${profile.location}</p>
    <p class="mb-4">${profile.description}</p>
    <ul class="text-left">
      ${profile.hobbies.map(h => `<li><strong>${h.title}</strong>: ${h.description}</li>`).join("")}
    </ul>
  `;
  modal.classList.remove("hidden");
}

function hideModal() {
  document.getElementById("profileModal").classList.add("hidden");
}
const slides = document.querySelectorAll('.carousel-slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.add('hidden');
    if (i === index) slide.classList.remove('hidden');
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);
showSlide(current);
document.querySelectorAll('.profile-card').forEach((card, i) => {
  card.addEventListener('click', () => showModal(i));
});

