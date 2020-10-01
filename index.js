const puppeteer = require('puppeteer');


(async () => {

  // DEFININDO TEXTOS DE INICIALIZAÇÃO
  console.log("--------------------------------------")
  console.log("HISOKA WEBSCRAPPINGPRINT [ON]")




  // DEFININDO VARIÁVEIS DE DATA E HORA
  var date = new Date();
  // DEFININDO SITE PARA CAPTURAR SCREENSHOT
  var site = "https://github.com/GustavoOliveiraRosa";
  // DEFININDO EXTENSÃO DA IMAGEM
  var extension = '.jpeg';
  // DEFININDO DIRETÓRIO DA IMAGEM
  var dir = './capturas/';
  // DEFININDO NOME DA IMAGEM
  var nameimage = date.getHours() + "_" + date.getMinutes() + "-exported"; 

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(site);
  await page.screenshot({path: dir+nameimage+extension});
  await browser.close();



  // DEFININDO TEXTOS DE FINALIZAÇÃO
  console.log("Imagem salva com sucesso : "+ dir+nameimage+extension)
  console.log("Obrigado por usar o meu script! :)")
  console.log("Repositório do projeto: https://github.com/GustavoOliveiraRosa/webscrappingNodeJS")
  console.log("--------------------------------------")

})();

