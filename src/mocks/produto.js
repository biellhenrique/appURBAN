import Logo from '../../assets/topo.png';
import fita_cetim from '../../assets/produtos/camisarosa.jpg'
import passa_fita from '../../assets/produtos/camisapreta.jpg'
import laise from '../../assets/produtos/camisabranca.jpg'

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Kit 999",
        logo: Logo,
        detalhes: "Um kit com 3 Camisas Oversized",
        preco: "R$ 500,00",
        botao: "Adicionar na Lista de Desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
          {
            nome: "Camisa Oversized Rosa",
            imagem: fita_cetim,
          },
          {
            nome: "Camisa Oversized Preta",
            imagem: passa_fita,
          },
          {
            nome: "Camisa Oversized Branca",
            imagem: laise,
          },
        ]
    }
}

export default produto;