// Import stylesheets
import './style.css';
import { PictureDto } from './pictureDto';
// Write TypeScript code!
//const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

async function getImage() {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const campoId = document.getElementById('campoId') as HTMLInputElement;
  const divDados = document.getElementById('divDados') as HTMLDivElement;
  const imgPic = document.getElementById('imgFoto') as HTMLImageElement;

  try {
    const id = campoId.value;
    const response = await fetch(`${baseUrl}/photos/${id}`);
    if (response.ok) {
      const data = (await response.json()) as PictureDto;
      divDados.innerHTML = `<h2>${data.title}</h2>`;
      imgPic.src = data.thumbnailUrl;
    } else {
      divDados.innerHTML = `<p>Deu ruim amigo: ${response.status} </p>`;
    }
  } catch (error) {
    divDados.innerHTML = `<p>Deu ruim MESMO: ${(error as Error).message} </p>`;
  }
}

const imgButton = document.getElementById('botaoBuscar');
imgButton.onclick = getImage;
