import './index.scss';

const settings = {
  'viz__id__timeline': (el) => {
    let a = el.querySelector('.dataviz__title-container')
    let b = el.querySelector('.dataviz__chart-container')
    a && a.remove()
    b && b.remove()

    el.classList.remove('na-dataviz')

    let target = document.createElement("script")
    target.src = "https://new-america.shorthandstories.com/29c068ae-af36-47d5-9de8-8b6fa30b62d5/embed.js"
    el.appendChild(target)
  },
  'viz__id__epp1': (el) => {
    let a = el.querySelector('.dataviz__title-container')
    let b = el.querySelector('.dataviz__chart-container')
    a && a.remove()
    b && b.remove()

    el.classList.remove('na-dataviz')

    let target = document.createElement("script")
    target.src = "https://new-america.shorthandstories.com/477e4deb-9601-4b8a-8f94-22907091f8ca/embed.js"
    target.setAttribute('data-id', 'https://new-america.shorthandstories.com/477e4deb-9601-4b8a-8f94-22907091f8ca');
    el.appendChild(target)
  },
  'viz__id__epp2': (el) => {
    let a = el.querySelector('.dataviz__title-container')
    let b = el.querySelector('.dataviz__chart-container')
    a && a.remove()
    b && b.remove()

    el.classList.remove('na-dataviz')

    let target = document.createElement("script")
    target.src = "https://new-america.shorthandstories.com/78a07e57-00c2-488f-a432-1fd4c7e1c4ed/embed.js"
    el.appendChild(target)
  },
  'viz__id__epp3': (el) => {
    let a = el.querySelector('.dataviz__title-container')
    let b = el.querySelector('.dataviz__chart-container')
    a && a.remove()
    b && b.remove()

    el.classList.remove('na-dataviz')

    let target = document.createElement("script")
    target.src = "https://new-america.shorthandstories.com/087359b3-8772-4613-a92d-f95367e1f6cd/embed.js"
    el.appendChild(target)
  },
  'viz__id__epp4': (el) => {
    let a = el.querySelector('.dataviz__title-container')
    let b = el.querySelector('.dataviz__chart-container')
    a && a.remove()
    b && b.remove()

    el.classList.remove('na-dataviz')

    let target = document.createElement("script")
    target.src = "https://new-america.shorthandstories.com/f8470bc1-2864-4345-9272-452bbcd5f8bc/embed.js"
    el.appendChild(target)
  },
};


window.renderDataViz = function(el){
  let id = el.getAttribute('id');
  let chart = settings[id];
  if(!chart) return;
  chart(el);
}