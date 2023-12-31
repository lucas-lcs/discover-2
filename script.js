function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  // forma mais simples que podemos usar e teremos o mesmo resultado
  html.classList.toggle("light")

  // pegar a imagem]
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver ligth mode, adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de oculos escuro, sorrindo")
  } else {
    // se tiver sem ligth model, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Lucas Alves sorrindo, usando terno e gravata, com fundo verde."
    )
  }
}
