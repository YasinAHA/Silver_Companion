document.addEventListener('DOMContentLoaded', function() {
  var sectionsToRemove = ['#', '#Servicio', '#Sobre-nosotros', '#Artículos', '#Contacto', '#top'];

  if (sectionsToRemove.includes(window.location.hash)) {
    history.replaceState(null, null, 'index.html');
  }
  window.scrollTo(0, 0);
});




/*  function toggleForm() {
    var form = document.getElementsByClassName("contenedor-formulario");
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  } 
 */
/*   document.addEventListener('DOMContentLoaded', function() {
    const mostrarFormulario = document.getElementById('mostrar-formulario');
    const formulario = document.getElementById('formulario');
  
    mostrarFormulario.addEventListener('click', function() {
      formulario.classList.toggle('oculto');
    });
  }); */

  document.addEventListener('DOMContentLoaded', function() {
    const mostrarFormulario = document.getElementById('mostrar-formulario');
    const formulario = document.getElementById('formulario');
    const formEsfera = document.querySelector('.form-esfera');
    const limpiar = document.getElementById('reset');
  
    mostrarFormulario.addEventListener('click', function() {
      formulario.classList.toggle('oculto');
    });
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      // Simulación de envío de correo
      alert('El mensaje ha sido enviado correctamente');
      // Animación de la esfera del contacto
      formEsfera.classList.add('enviado');
      setTimeout(function() {
        formEsfera.classList.remove('enviado');
        formulario.classList.add('oculto'); 
        // Agregar esto para cerrar el formulario
        limpiar.reset();
      }, 1500);
  
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      // Obtenemos la posición de la esfera de contacto y la del footer
      var contactSphere = document.getElementById('mostrar-formulario').getBoundingClientRect();
      var footer = document.getElementsByTagName('footer')[0].getBoundingClientRect();
        // Verificamos si se llegó al final de la página
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        document.getElementById('mostrar-formulario').classList.add('show');
      } else {
        document.getElementById('mostrar-formulario').classList.remove('show');
      }
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        document.getElementById('formulario').classList.add('show');
      } else {
        document.getElementById('formulario').classList.remove('show');
        
        
      }
            
      // Comparamos las posiciones y activamos la animación si la esfera está debajo del footer
      if (contactSphere.top >= footer.top) {
        setTimeout(function() {
          document.getElementById('mostrar-formulario').classList.add('animate');
        }, 500);
      } else {
        document.getElementById('mostrar-formulario').classList.remove('animate');
      }
    });
  });
 
document.addEventListener('DOMContentLoaded', function() {
  const scrollWrapper = document.querySelector('.scroll-wrapper');
  const scrollUp = document.querySelector('.scroll-up');
  const scrollDown = document.querySelector('.scroll-down');
  
  window.addEventListener('scroll', () => {
    // Verifica si la página se ha desplazado más allá del 20% del alto de la ventana
    if (window.scrollY > window.innerHeight * 0.2) {
      // Si es así, muestra la flecha de desplazamiento hacia arriba
      scrollUp.style.display = 'block';
    } else {
      // De lo contrario, oculta la flecha de desplazamiento hacia arriba
      scrollUp.style.display = 'none';
    }
  });
}); 
  
document.addEventListener('DOMContentLoaded', function() {
  var nav = document.querySelector('nav');
  var main = document.getElementsByClassName('wave');
  
  window.addEventListener('scroll', function() {
    var mainTop = main[0].getBoundingClientRect().top;
    var navTop = nav.getBoundingClientRect().top;
    
    if (navTop >= mainTop) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});



