/* Template Name: Evea - Responsive App Landing Tailwind CSS Template
   Author: Zoyothemes
   Email: zoyothemes@gmail.com
   Website: https://zoyothemes.com
   Version: 1.0.0
   Created: April 2024
   File Description: Main JS file of the template
*/

/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Sticky Navbar         *
 *     02.  Navbar active         *
 *     03.  Back to top           *
 *     04.  Accordions            *
 *     05.  Lucide Icons          *
 ================================*/

/*********************/
/*   Sticky Navbar   */
/*********************/
function windowScroll() {
  const navbar = document.getElementById("navbar");

  if (navbar) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  }
}
window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});


/*********************/
/*   Navbar Active   */
/*********************/
try {
  var spy = new Gumshoe("#navbar-navlist a", {
    // Active classes
    // navClass: 'active', // applied to the nav list item
    // contentClass: 'active', // applied to the content
    offset: 80,
  });
} catch (error) {}

// Smooth scroll
try {
  var scroll = new SmoothScroll("#navbar-navlist a", {
    speed: 800,
    offset: 80,
  });
} catch (error) {}


/*********************/
/*   Menu Collapse   */
/*********************/
const toggleCollapse = (elementId, show = true) => {
  const collapseEl = document.getElementById(elementId);
  if (show) {
    collapseEl.classList.remove("hidden");
  } else {
    collapseEl.classList.add("hidden");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Toggle target elements using [data-collapse]
  document
    .querySelectorAll("[data-collapse]")
    .forEach(function (collapseToggleEl) {
      var collapseId = collapseToggleEl.getAttribute("data-collapse");

      collapseToggleEl.addEventListener("click", function () {
        toggleCollapse(
          collapseId,
          document.getElementById(collapseId).classList.contains("hidden")
        );
      });
    });
});

window.toggleCollapse = toggleCollapse;

/*********************/
/*   Back To Top     */
/*********************/
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if(mybutton!=null){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      mybutton.style.display = "inline-flex";
    } else {
      mybutton.style.display = "none";
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*********************/
/*   Accordions      */
/*********************/
try {
  const Default = {
    alwaysOpen: false,
    activeClasses: 'bg-white text-black rounded-xl',
    inactiveClasses: 'text-dark',
    onOpen: () => { },
    onClose: () => { },
    onToggle: () => { }
  }
  
  class Accordion {
    constructor(items = [], options = {}) {
      this._items = items
      this._options = { ...Default, ...options }
      this._init()
    }

    _init() {
      if (this._items.length) {
        // show accordion item based on click
        this._items.map(item => {

          if (item.active) {
            this.open(item.id)
          }

          item.triggerEl.addEventListener('click', () => {
            this.toggle(item.id)
          })
        })
      }
    }

    getItem(id) {
      return this._items.filter(item => item.id === id)[0]
    }

    open(id) {
      const item = this.getItem(id)

      // don't hide other accordions if always open
      if (!this._options.alwaysOpen) {
        this._items.map(i => {
          if (i !== item) {
            i.triggerEl.classList.remove(...this._options.activeClasses.split(" "))
            i.triggerEl.classList.add(...this._options.inactiveClasses.split(" "))
            i.targetEl.classList.add('hidden')
            i.triggerEl.setAttribute('aria-expanded', false)
            i.active = false

            // rotate icon if set
            if (i.iconEl) {
              i.iconEl.classList.remove('rotate-180')
            }
          }
        })
      }

      // show active item
      item.triggerEl.classList.add(...this._options.activeClasses.split(" "))
      item.triggerEl.classList.remove(...this._options.inactiveClasses.split(" "))
      item.triggerEl.setAttribute('aria-expanded', true)
      item.targetEl.classList.remove('hidden')
      item.active = true

      // rotate icon if set
      if (item.iconEl) {
        item.iconEl.classList.add('rotate-180')
      }

      // callback function
      this._options.onOpen(this, item)
    }

    toggle(id) {
      const item = this.getItem(id)

      if (item.active) {
        this.close(id)
      } else {
        this.open(id)
      }

      // callback function
      this._options.onToggle(this, item)
    }

    close(id) {
      const item = this.getItem(id)

      item.triggerEl.classList.remove(...this._options.activeClasses.split(" "))
      item.triggerEl.classList.add(...this._options.inactiveClasses.split(" "))
      item.targetEl.classList.add('hidden')
      item.triggerEl.setAttribute('aria-expanded', false)
      item.active = false

      // rotate icon if set
      if (item.iconEl) {
        item.iconEl.classList.remove('rotate-180')
      }

      // callback function
      this._options.onClose(this, item)
    }
  }
  
  window.Accordion = Accordion;
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-accordion]').forEach(accordionEl => {
      const alwaysOpen = accordionEl.getAttribute('data-accordion')
      const activeClasses = accordionEl.getAttribute('data-active-classes')
      const inactiveClasses = accordionEl.getAttribute('data-inactive-classes')

      const items = []
      accordionEl.querySelectorAll('[data-accordion-target]').forEach(el => {
        const item = {
          id: el.getAttribute('data-accordion-target'),
          triggerEl: el,
          targetEl: document.querySelector(el.getAttribute('data-accordion-target')),
          iconEl: el.querySelector('[data-accordion-icon]'),
          active: el.getAttribute('aria-expanded') === 'true' ? true : false
        }
        items.push(item)
      })

      new Accordion(items, {
        alwaysOpen: alwaysOpen === 'open' ? true : false,
        activeClasses: activeClasses ? activeClasses : Default.activeClasses,
        inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses
      })
    })
  })
} catch (error) { }


/*********************/
/*   Lucide Icons   */
/*********************/
lucide.createIcons();