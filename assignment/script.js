document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('doctor-container');
  
    // Placeholder for the doctor data
    const doctors = [
        { name: 'Dr. Najwa Joharji', specialization: 'Pediatric Dental Consultant', image: './assets/doc1.jpeg' },
        { name: 'Dr. Ibrahim Almajed', specialization: 'Orthodontist', image: './assets/doc2.jpeg' },
        { name: 'Dr. Mhanna Aljabab', specialization: 'Orthodontist', image: './assets/doc3.jpeg' },
        { name: 'Dr. Wael Alomari', specialization: 'Dental Care', image: './assets/doc4.jpeg' },
        { name: 'Dr. Sameer Alhadad', specialization: 'General Dentist', image: './assets/doc5.jpeg' },
        { name: 'Dr. Najwa Joharji', specialization: 'Pediatric Dental Consultant', image: './assets/doc1.jpeg' },
        { name: 'Dr. Ibrahim Almajed', specialization: 'Orthodontist', image: './assets/doc2.jpeg' },
        { name: 'Dr. Mhanna Aljabab', specialization: 'Orthodontist', image: './assets/doc3.jpeg' },
        { name: 'Dr. Wael Alomari', specialization: 'Dental Care', image: './assets/doc4.jpeg' },
        { name: 'Dr. Sameer Alhadad', specialization: 'General Dentist', image: './assets/doc5.jpeg' },
        { name: 'Dr. Najwa Joharji', specialization: 'Pediatric Dental Consultant', image: './assets/doc1.jpeg' },
        { name: 'Dr. Ibrahim Almajed', specialization: 'Orthodontist', image: './assets/doc2.jpeg' },
        { name: 'Dr. Mhanna Aljabab', specialization: 'Orthodontist', image: './assets/doc3.jpeg' },
        { name: 'Dr. Wael Alomari', specialization: 'Dental Care', image: './assets/doc4.jpeg' },
        { name: 'Dr. Sameer Alhadad', specialization: 'General Dentist', image: './assets/doc5.jpeg' },
        { name: 'Dr. Najwa Joharji', specialization: 'Pediatric Dental Consultant', image: './assets/doc1.jpeg' },
        { name: 'Dr. Ibrahim Almajed', specialization: 'Orthodontist', image: './assets/doc2.jpeg' },
        { name: 'Dr. Mhanna Aljabab', specialization: 'Orthodontist', image: './assets/doc3.jpeg' },
        { name: 'Dr. Wael Alomari', specialization: 'Dental Care', image: './assets/doc4.jpeg' },
        { name: 'Dr. Sameer Alhadad', specialization: 'General Dentist', image: './assets/doc5.jpeg' },
        { name: 'Dr. Najwa Joharji', specialization: 'Pediatric Dental Consultant', image: './assets/doc1.jpeg' },
        { name: 'Dr. Ibrahim Almajed', specialization: 'Orthodontist', image: './assets/doc2.jpeg' },
        { name: 'Dr. Mhanna Aljabab', specialization: 'Orthodontist', image: './assets/doc3.jpeg' },
        { name: 'Dr. Wael Alomari', specialization: 'Dental Care', image: './assets/doc4.jpeg' },
        { name: 'Dr. Sameer Alhadad', specialization: 'General Dentist', image: './assets/doc5.jpeg' },

      ];
      
  
    // Generate the doctor cards
    doctors.forEach(doctor => {
      const card = document.createElement('div');
      card.className = 'doctor-card';
      card.innerHTML = `
        <img class="lazy" src="placeholder-image.jpg" data-src="${doctor.image}" alt="${doctor.name}">
        <h3>${doctor.name}</h3>
        <p>${doctor.specialization}</p>
      `;
      container.appendChild(card);
    });
  
    // Lazy loading images
    function lazyLoad() {
      const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
      lazyImages.forEach(img => {
        if (img.offsetTop < window.innerHeight + window.scrollY) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          img.style.opacity = 1;
        }
      });
    }
  
    // Initial call
    lazyLoad();
  
    // Event listener for scrolling
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
  });
  