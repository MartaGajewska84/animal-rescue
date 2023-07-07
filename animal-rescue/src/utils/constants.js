import face1 from '../assets/face1.png';
import face2 from '../assets/face2.png';
import face3 from '../assets/face3.png';
import face4 from '../assets/face4.png';
import face5 from '../assets/face5.png';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'animals',
    url: '/animals',
  },
];

export const questions = [
  {
    id: 1,
    question: 'Where did the animal come from?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur arcu pellentesque, elementum massa ac, volutpat eros. Integer sagittis mollis varius. Integer pharetra justo sit amet tellus suscipit ullamcorper. Duis imperdiet, lacus ut placerat tempor, metus arcu aliquet dui, vitae interdum ex risus id metus.',
  },
  {
    id: 2,
    question: 'How many homes has this animal already had?',
    answer:
      'Suspendisse hendrerit lacinia purus. Proin semper lectus sed iaculis faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent bibendum tincidunt nunc mattis iaculis.',
  },
  {
    id: 3,
    question: 'What is the animal’s health status?',
    answer:
      'In semper condimentum sodales. Quisque felis nibh, viverra vitae erat sed, posuere ullamcorper lorem. Suspendisse potenti. Vivamus efficitur, turpis eget eleifend gravida, sem urna mattis augue, vel vehicula neque mi non diam. Aliquam condimentum nibh quis nisl rhoncus, id tempor nisl ultrices.',
  },
  {
    id: 4,
    question: 'What is the animal’s personality?',
    answer:
      'Quisque nec justo sem. Etiam fermentum diam bibendum, gravida arcu eget, porta purus. Maecenas magna tortor, tristique quis enim sit amet, malesuada mollis libero. Vivamus porta id eros ac dapibus.Mauris vitae diam orci. Praesent imperdiet, enim in cursus sollicitudin, dolor ligula porta lacus, eu varius turpis velit sed arcu.',
  },
  {
    id: 5,
    question: 'Does this animal get along well with children?',
    answer:
      'Aenean rutrum leo a accumsan pharetra. Aenean lectus lorem, laoreet at odio sed, luctus pulvinar orci. Aenean blandit varius quam et tristique. Curabitur hendrerit convallis neque, quis scelerisque lacus pretium ac. Suspendisse viverra leo mi, in interdum turpis pellentesque vitae. Nam rhoncus elit sed purus vulputate, ornare sodales nulla interdum. Donec lobortis tellus convallis, tristique arcu eu, consequat arcu.',
  },
];

export const randomReviewers = [
  {
    id: 1,
    name: 'Sue Moore',
    photo: face1,
    review:
      'Donec lobortis tellus convallis, tristique arcu eu, consequat arcu. Aenean rutrum leo a accumsan pharetra. Aenean lectus lorem, laoreet at odio sed, luctus pulvinar orci. Aenean blandit varius.',
  },
  {
    id: 2,
    name: 'Sam Kean',
    photo: face2,
    review:
      'Aenean lectus lorem, laoreet at odio sed, luctus pulvinar orci. Aenean blandit varius quam et tristique.Aenean rutrum leo a accumsan pharetra. Aenean lectus lorem, laoreet at odio sed.',
  },
  {
    id: 3,
    name: 'Thomas Atkinson',
    photo: face3,
    review:
      'Praesent imperdiet, enim in cursus sollicitudin, dolor ligula porta lacus, eu varius turpis velit sed arcu.Aenean rutrum leo a accumsan pharetra. Aenean lectus lorem, laoreet at odio sed, luctus pulvinar.',
  },
  {
    id: 4,
    name: 'Ally Dean',
    photo: face4,
    review:
      'Integer sagittis mollis varius. Integer pharetra justo sit amet tellus suscipit ullamcorper.Aenean rutrum leo a accumsan pharetra. Aenean lectus lorem, laoreet at odio sed, luctus pulvinar orci.',
  },
  {
    id: 5,
    name: 'Michelle Joung',
    photo: face5,
    review:
      'Integer sagittis mollis varius. Integer pharetra justo sit amet tellus suscipit ullamcorper.Aenean rutrum leo a accumsan pharetra. Aenean lectus lorem, laoreet at odio sed, luctus pulvinar orci.',
  },
];

export const animals_url = '/.netlify/functions/animals'
export const single_animal_url = '/.netlify/functions/single-animal?id='
