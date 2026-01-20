import sanduicheImg from "./pratos/sanduiche-natural.jpg";
import paoalegrimImg from "./pratos/Pao-de-Alecrim.jpg";
import totexImg from "./pratos/tostex.jpg";
import wrapatumImg from "./pratos/wraps-atum.jpg";
import wrapPresuntoImg from "./pratos/Wrap.webp";
import saladapoteImg from "./pratos/salada-no-pote.jpg";


import brownieImg from "./sobremesas/brownie-creme-avela-nozes.jpg";
import boloImg from "./sobremesas/bolo_cenoura.webp";
import cheescakeImg from "./sobremesas/Blueberry-Cheesecake.jpg";
import acaiImg from "./sobremesas/Açai.jpg";
import saladadefrutaImg from "./sobremesas/Salada-de-frutas.jpg";
import cookieImg from "./sobremesas/cookie-maca-passas.webp";


import cafeImg from "./bebidas/café-expresso.png";
import capuchinoImg from "./bebidas/capuchino.png";
import chaImg from "./bebidas/cha-gelado-com-limao-1.jpg";
import sucoImg from "./bebidas/suco.jpg";
import smoothiesImg from "./bebidas/smoothies.jpg";
import aguaImg from "./bebidas/agua.jpg";

const sanduiche = {
  nome: "Sanduíche Natural Integral",
  preco: "R$ 18,90",
  imagem: sanduicheImg,
  descricao: "Frango desfiado com cenoura e maionese de iogurte",
};

const pao = {
  nome: "Pão de Alecrim",
  preco: "R$ 9,90",
  imagem: paoalegrimImg,
  descricao: "Pão de Fermentação Natural com Alecrim Fresco",
};

const totex = {
  nome: "Totex",
  preco: "R$ 23,90",
  imagem: totexImg,
  descricao:
    "Mussarela de búfala, pesto e tomate seco",
};

const wrapAtum = {
  nome: "Wrap de Atum",
  preco: "R$ 21,90",
  imagem: wrapatumImg,
  descricao:
    "Atum, cream cheese e alface crocante",
};

const wrapPresunto = {
  nome: "Wrap de Presunto",
  preco: "R$ 20,90",
  imagem: wrapPresuntoImg,
  descricao:
    "Presunto, queijo prato, molho de mostarda e mel e mionese com ervas",
};

const saladaPote = {
  nome: "Salda no Pote",
  preco: "R$ 22,90",
  imagem: saladapoteImg,
  descricao:
    "Mix de folhas, quinoa, legumes e molho da casa",
};



const brownie = {
  nome: "Brownie de Cacau com Nozes",
  preco: "R$ 13,90",
  imagem: brownieImg,
  descricao:
    "Brownie de Cacau com Nozes Sem farinha branca",
};

const boloCenoura = {
  nome: "Bolo de Cenoura",
  preco: "R$ 12,90",
  imagem: boloImg,
  descricao:
    "Bolo de Cenoura com Chocolate Artesanal",
};

const cheesecake = {
  nome: "Cheesecake de Blueberry",
  preco: "R$ 16,90",
  imagem: cheescakeImg,
  descricao:
    "Cheesecake com calda de Blueberry ",
};

const acai = {
  nome: "Açaí no Bowl",
  preco: "R$ 6,90",
  imagem: acaiImg,
  descricao: "Com banana, morango, granola e mel",
};

const saladadefruta = {
  nome: "Salada de Frutas",
  preco: "R$ 11,90",
  imagem: saladadefrutaImg,
  descricao: "Salada de frutas frescas da estação",
};

const cookie = {
  nome: "Cookie Integral",
  preco: "R$ 8,90",
  imagem: cookieImg,
  descricao: "Cookie Integral de Maçã e Passas",
};


const cafe = {
  nome: "Café Expresso",
  preco: "R$ 6,90",
  imagem: cafeImg,
  descricao: "Curto ou duplo, grãos especiais",
};

const capuchino = {
  nome: "Cappuccino",
  preco: "R$ 9,90",
  imagem: capuchinoImg,
  descricao: "Com leite vaporizado e toque de canela",
};

const cha = {
  nome: "Chá Gelado",
  preco: "R$ 12,90",
  imagem: chaImg,
  descricao: "Chá verde com limão e hortelã",
};

const suco = {
  nome: "Suco Natural",
  preco: "R$ 14,90",
  imagem: sucoImg,
  descricao: "Laranja com cenoura / Abacaxi com hortelã / Melancia com gengibre",
};

const smoothies = {
  nome: "Smoothies",
  preco: "R$ 17,90",
  imagem: smoothiesImg,
  descricao: "Banana + aveia + mel / Frutas vermelhas + iogurte natural",
};

const agua = {
  nome: "Água",
  preco: "R$ 4,90",
  imagem: aguaImg,
  descricao: "Água mineral sem gás ou com gás",
};

export const pratosPrincipais = [
  sanduiche,
  pao,
  totex,
  wrapAtum,
  wrapPresunto,
  saladaPote,
];

export const sobremesas = [brownie, boloCenoura, cheesecake, acai, saladadefruta, cookie];

export const bebidas = [cafe, capuchino, cha, suco, smoothies, agua ];
