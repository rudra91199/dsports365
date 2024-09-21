export const useCleanAndTruncateText = (htmlString, maxChars) => {

  const tempElement = document.createElement('div');
  tempElement.innerHTML = htmlString;

  const images = tempElement.getElementsByTagName('img');
  while (images.length > 0) {
    images[0].parentNode.removeChild(images[0]);
  }

  const paragraphs = tempElement.getElementsByTagName('p');
  let combinedText = '';
  for (let i = 0; i < paragraphs.length; i++) {
    combinedText += paragraphs[i].textContent.trim() + ' '; 
  }

  if (paragraphs.length === 0) {
    combinedText = tempElement.textContent || tempElement.innerText || '';
  }

  if (combinedText.length > maxChars) {
    return combinedText.slice(0, maxChars) + '...';
  }

  return combinedText; 
  };