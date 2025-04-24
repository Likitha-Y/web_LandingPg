// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Animate dropdown menus when mobile menu opens
        if (mainNav.classList.contains('active')) {
          const navItems = document.querySelectorAll('.nav-item');
          navItems.forEach((item, index) => {
            item.style.animation = `fadeIn 0.3s ease forwards ${index * 0.1}s`;
            item.style.opacity = '0';
          });
        }
      });
    }
  
    // Dropdown Menus
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
      const dropdown = item.querySelector('.dropdown-menu');
      
      if (dropdown) {
        item.addEventListener('mouseenter', function() {
          dropdown.style.display = 'block';
          dropdown.style.animation = 'fadeIn 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
          dropdown.style.display = 'none';
        });
      }
    });
  
    // Cookie Banner
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');
    
    if (cookieBanner && !localStorage.getItem('cookies-accepted')) {
      setTimeout(() => {
        cookieBanner.style.display = 'block';
      }, 2000);
    }
    
    if (acceptCookies) {
      acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookies-accepted', 'true');
        cookieBanner.style.display = 'none';
      });
    }
  
    // Animated Counters
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number');
      const speed = 200;
      
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(animateCounters, 1);
        } else {
          counter.innerText = target + "+";
        }
      });
    };
  
    // Initialize counters when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    document.querySelectorAll('.stat-number').forEach(el => {
      observer.observe(el);
    });
  
    // Form Submission Handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted successfully!');
        this.reset();
      });
    });
  });