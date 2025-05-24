import { editorialData } from '../editorial_data.js';

const params = new URLSearchParams(window.location.search);
const profileId = params.get('profile');

const data = editorialData[profileId];

if (data) {
  const metaText = `${data.display_name}: ${data.caption}`;

  document.title = metaText;

  // Set <meta name="description">
  const descTag = document.querySelector('meta[name="description"]');
  if (descTag) {
    descTag.setAttribute('content', metaText);
  }

  // Set <meta property="og:title">
  const ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (ogTitleTag) {
    ogTitleTag.setAttribute('content', metaText);
  }
}