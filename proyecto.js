document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projects-grid');
  const errorMessage = document.getElementById('error-message');
  const reposCount = document.getElementById('repos-count');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  }

  function getMainLanguage(language) {
    if (!language) return 'Otros';
    const mainLanguages = ['Rust', 'Python', 'JavaScript', 'HTML', 'CSS'];
    for (const lang of mainLanguages) {
      if (language.toLowerCase().includes(lang.toLowerCase())) {
        return lang;
      }
    }
    return 'Otros';
  }

  function createProjectCard(repo) {
    const language = getMainLanguage(repo.language);
    const updatedAt = formatDate(repo.updated_at);
    return `
      <div class="project-card" data-language="${language}">
        <h3>${repo.name}</h3>
        <p>${repo.description || 'Sin descripción disponible.'}</p>
        <div class="project-meta">
          <span class="language ${language.toLowerCase()}">${repo.language || 'Varios'}</span>
          <span class="updated">Actualizado: ${updatedAt}</span>
        </div>
        <p><a href="${repo.html_url}" target="_blank" rel="noopener">Ver repositorio</a></p>
      </div>
    `;s
  }

  function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    let visibleCount = 0;
    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-language') === filter) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    reposCount.textContent = visibleCount;
  }

  // Configurar filtros
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      filterProjects(button.getAttribute('data-filter'));
    });
  });

  // 🔧 MÚLTIPLES OPCIONES DE PROXY CORS
  const proxies = [
    'https://corsproxy.io/?',
    'https://api.codetabs.com/v1/proxy?quest=',
    'https://cors-anywhere.herokuapp.com/',
    'https://thingproxy.freeboard.io/fetch/'
  ];

  async function fetchWithProxy(retryCount = 0) {
    const targetURL = 'https://api.github.com/users/enzocipher/repos?sort=updated&per_page=100';
    
    if (retryCount >= proxies.length) {
      throw new Error('Todos los proxies fallaron');
    }

    try {
      let proxyURL;
      const currentProxy = proxies[retryCount];
      
      // Construir la URL según el formato del proxy
      if (currentProxy.includes('?')) {
        proxyURL = currentProxy + encodeURIComponent(targetURL);
      } else {
        proxyURL = currentProxy + targetURL;
      }
      
      console.log(`Intentando con proxy ${retryCount + 1}: ${currentProxy}`);
      
      const response = await fetch(proxyURL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const repos = await response.json();
      console.log(`✓ Proxy ${retryCount + 1} exitoso, ${repos.length} repositorios cargados`);
      return repos;
    } catch (error) {
      console.warn(`✗ Proxy ${retryCount + 1} falló:`, error.message);
      return fetchWithProxy(retryCount + 1);
    }
  }

  // Mostrar estado de carga
  projectsGrid.innerHTML = '<div class="loading">Cargando repositorios...</div>';

  // Ejecutar la carga con sistema de reintentos
  fetchWithProxy()
    .then(repos => {
      projectsGrid.innerHTML = '';
      
      if (repos && repos.length > 0) {
        repos.forEach(repo => {
          // Filtrar solo repositorios que no son forks o incluir todos según tu preferencia
          if (!repo.fork) { // Opcional: quitar esta línea si quieres incluir forks
            projectsGrid.innerHTML += createProjectCard(repo);
          }
        });
        
        const actualRepos = document.querySelectorAll('.project-card').length;
        reposCount.textContent = actualRepos;
        
        // Activar el filtro "all" por defecto
        if (filterButtons.length > 0) {
          filterButtons[0].classList.add('active');
        }
      } else {
        throw new Error('No se encontraron repositorios');
      }
    })
    .catch(error => {
      console.error('Error final:', error);
      projectsGrid.style.display = 'none';
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'No se pudieron cargar los repositorios de GitHub. Por ahora solo se pueden ver mis proyectos en Github debido al CORS de Neocities. Próximamente se implementará una solución.';
      errorMessage.innerHTML += '<br><button onclick="window.open(\'https://github.com/enzocipher\', \'_blank\')" style="margin-top: 10px; padding: 5px 10px;">Ver en Github</button>';
    });
});