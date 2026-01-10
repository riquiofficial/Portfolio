// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Load and render projects
const setProjects = async () => {
  const response = await fetch('./projects.json');
  const data = await response.json();
  const projectSection = document.getElementById('inject-projects');

  projectSection.innerHTML = data.projects
    .map((project) => {
      return `<div class="col-span-1 overflow-hidden rounded-lg bg-stone-800">
                <a
                  aria-label="${project.name}"
                  href="${project.website}"
                  target="_blank">
                  <img
                    src="${project.image}"
                    alt="${project.name} screenshot"
                    width="600"
                    height="288"
                    loading="lazy"
                    class="w-full h-72 object-cover transition-all duration-300 hover:object-right"
                  />
                </a>
                <div class="p-4">
                  <a href="${project.website}" target="_blank">
                    <h2 class="text-2xl font-bold uppercase sm:text-4xl">
                      ${project.name}
                    </h2>
                  </a>
                  <p class="font-light uppercase">
                    ${project.tech}
                  </p>
                  <p class="mt-2 font-light">
                    ${project.description}
                  </p>
                  <div class="flex flex-wrap gap-2 mt-6 font-bold">
                    <div class="transition-all duration-300 ease-in-out delay-150 rounded-lg hover:text-amber-50 bg-gradient-to-r from-light-gold via-dark-gold to-stone-500 bg-pos-0 hover:bg-pos-100 bg-size-200">
                      <a
                        target="_blank"
                        href="${project.website}"
                        class="flex p-4 m-0.5 uppercase border-2 border-transparent rounded-lg bg-stone-800"
                      >
                        See Live
                        <span class="flex items-center justify-center ml-2">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                    ${project.github ? `
                    <a
                      target="_blank"
                      href="${project.github}"
                      class="flex items-center justify-center p-4 text-black uppercase transition-all duration-300 ease-in-out delay-150 rounded-lg bg-gradient-to-r from-light-gold via-dark-gold to-stone-500 bg-pos-0 hover:bg-pos-100 bg-size-200 hover:text-amber-50"
                    >
                      See on Github
                      <span class="flex items-center justify-center ml-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 480 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
                        </svg>
                      </span>
                    </a>
                    ` : ''}
                  </div>
                </div>
              </div>`;
    })
    .join('');
};

setProjects();

// Form validation
const contactForm = document.querySelector('form[name="contact"]');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const showError = (input, message) => {
  const existingError = input.parentElement.querySelector('.error-message');
  if (existingError) existingError.remove();

  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message text-red-400 text-sm mt-1';
  errorDiv.textContent = message;
  input.parentElement.appendChild(errorDiv);
  input.classList.add('border-red-400');
};

const clearError = (input) => {
  const existingError = input.parentElement.querySelector('.error-message');
  if (existingError) existingError.remove();
  input.classList.remove('border-red-400');
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

contactForm.addEventListener('submit', (e) => {
  let isValid = true;

  clearError(emailInput);
  clearError(messageInput);

  if (!emailInput.value.trim()) {
    showError(emailInput, 'Email is required');
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email address');
    isValid = false;
  }

  if (!messageInput.value.trim()) {
    showError(messageInput, 'Message is required');
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
});

// Clear errors on input
emailInput.addEventListener('input', () => clearError(emailInput));
messageInput.addEventListener('input', () => clearError(messageInput));
