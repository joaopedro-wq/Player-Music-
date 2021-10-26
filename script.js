//variaveis
const linksSocialMedia = {
  github: 'joaopedro-wq',
  linkedin: 'in/joao-pedro-bandeira-01b83a205',

  facebook: 'joaopedro.oliveirabandeira',
  twitter: 'Chorab0y',
  instagram: 'jotapebandeira'
}

let playList = [
  {
    titulo: 'Arrasta pra china',
    artista: 'Kyan',
    src: 'music/Arrasta pra China_ 🇨🇳.mp3',
    img: 'images/arrastaChina.jpg'
  },
  {
    titulo: 'Mustang Preto',
    artista: 'Teto',
    src: 'music/Mustang Preto.mp3',
    img: 'images/mustage.png'
  },
  {
    titulo: 'Iluminado',
    artista: 'Kawe',
    src: 'music/Iluminado ( Prod. Jay OQ ) Original Quality.mp3',
    img: 'images/iluminado.jpg'
  },
  {
    titulo: 'Quer voar',
    artista: 'Matue',
    src: 'music/QUER VOAR 🩸.mp3',
    img: 'images/voar.jpg'
  },
  {
    titulo: 'A cara do crime',
    artista: 'Poze do Rodo ft. Bielzin, PL Quest e MC Cabelinho',
    src: 'music/A Cara do Crime _NÓS INCOMODA(prod. Neobeats).mp3',
    img: 'images/crime.jpg'
  }
]
let indexMusics = 0
let musics = document.querySelector('audio')
let duracaoMusics = document.querySelector('.ends')
let img = document.querySelector('img')
let nameMusic = document.querySelector('.desc h2')
let nameArtist = document.querySelector('.desc i')

//Chamada de funcoes
renderSongs(indexMusics)
changeSocialMediaLinks()

//Eventos

document.querySelector('.buttonPlay').addEventListener('click', playMusics)
document.querySelector('.buttonPause').addEventListener('click', pauseMusics)
musics.addEventListener('timeupdate', uptadeBar)
document.querySelector('.left').addEventListener('click', () => {
  indexMusics--
  if (indexMusics < 0) {
    indexMusics = 0
  }
  renderSongs(indexMusics)
})
document.querySelector('.right').addEventListener('click', () => {
  indexMusics++
  if (indexMusics > 4) {
    indexMusics = 4
  }
  renderSongs(indexMusics)
})

//Funcoes
function renderSongs(index) {
  musics.setAttribute('src', playList[index].src)
  musics.addEventListener('loadeddata', () => {
    nameMusic.textContent = playList[index].titulo
    nameArtist.textContent = playList[index].artista
    img.src = playList[index].img
    duracaoMusics.textContent = secondMinute(Math.floor(musics.duration))
  })
}

function playMusics() {
  musics.play()
  document.querySelector('.buttonPause').style.display = 'block'
  document.querySelector('.buttonPlay').style.display = 'none'
}

function pauseMusics() {
  musics.pause()

  document.querySelector('.buttonPause').style.display = 'none'
  document.querySelector('.buttonPlay').style.display = 'block'
}

function uptadeBar() {
  let bar = document.querySelector('progress')

  bar.style.width =
    Math.floor((musics.currentTime / musics.duration) * 100) + '%'

  let runningTime = document.querySelector('.inition')
  runningTime.textContent = secondMinute(Math.floor(musics.currentTime))
  let duracaoMusics = document.querySelector('.ends')
}

function secondMinute(second) {
  let campMinutes = Math.floor(second / 60)
  let campSeconds = second % 60
  if (campSeconds < 10) {
    campSeconds = '0' + campSeconds
  }

  return campMinutes + ':' + campSeconds
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
