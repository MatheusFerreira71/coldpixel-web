import { useState } from 'react';
import './Services.scss';
import PacoteItem, { PacoteContent } from '../PacoteItem/PacoteItem';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const pacotes: PacoteContent[] = [
    {
      title: 'Pacote Start',
      products: [
        {
          style: 'simple',
          text: 'Criação de Loja'
        },
        {
          style: 'simple',
          text: 'Layout Padrão'
        },
        {
          style: 'simple',
          text: 'Estilização via painel'
        },
        {
          style: 'simple',
          text: 'Config. de Domínio'
        },
        {
          style: 'duo',
          duo: {
            bold: '10 dias',
            simple: ' de manutenção grátis'
          }
        }
      ],
      price: 800
    },
    {
      title: 'Pacote Standard',
      products: [
        {
          style: 'simple',
          text: 'Criação de Loja'
        },
        {
          style: 'simple',
          text: 'Layout Padrão'
        },
        {
          style: 'bold',
          text: 'Estilização via código'
        },
        {
          style: 'simple',
          text: 'Config. de Domínio'
        },
        {
          style: 'bold',
          text: 'Config. Meio de Pgto'
        },
        {
          style: 'bold',
          text: 'Config. de Envio'
        },
        {
          style: 'duo',
          duo: {
            bold: '20 dias',
            simple: ' de manutenção grátis'
          }
        }
      ],
      price: 1500
    },
    {
      title: 'Pacote Start',
      products: [
        {
          style: 'simple',
          text: 'Criação de Loja'
        },
        {
          style: 'bold',
          text: 'Layout Exclusivo'
        },
        {
          style: 'bold',
          text: 'Estilização via design e código de acordo com necessidade do cliente e da marca'
        },
        {
          style: 'simple',
          text: 'Config. de Domínio'
        },
        {
          style: 'simple',
          text: 'Config. Meio de Pgto'
        },
        {
          style: 'simple',
          text: 'Config. de Envio'
        },
        {
          style: 'duo',
          duo: {
            bold: '30 dias',
            simple: ' de manutenção grátis'
          }
        }
      ],
      price: 3000
    },

  ]

  return (
    <section className="external-container services">
      <h2>Pacotes e serviços</h2>
      <div className="pacotes-text">
        <div className="pacotes-text-menus">
          <h3 onClick={() => setActiveIndex(1)} className={activeIndex === 1 ? 'active first' : ''}>Pacotes para lojas virtuais</h3>
          <h3 onClick={() => setActiveIndex(2)} className={activeIndex === 2 ? 'active second' : ''}>Pacotes para funcionalidades</h3>
          <h3 onClick={() => setActiveIndex(3)} className={activeIndex === 3 ? 'active third' : ''}>Pacotes diversos</h3>
        </div>
        <div className="pacotes-text-content">
          {activeIndex === 1 ? <p className="body-text">
            Nossos pacotes foram especialmente desenvolvidos para atender às suas necessidades e objetivos, proporcionando uma experiência única e completa em cada projeto. Com tecnologia avançada e expertise em plataformas como Nuvemshop e Tray Commerce, garantimos um processo ágil e eficiente na construção da sua loja virtual. <br /><br />

            Escolha o pacote ideal para a sua empresa e dê um passo à frente no mundo do e-commerce. Estamos prontos para transformar suas ideias em realidade e impulsionar o seu sucesso online!
          </p> : ''}
          {activeIndex === 2 ? <p className="body-text">
            Descubra novas possibilidades para o sucesso do seu negócio virtual com nossos Pacotes de Funcionalidade de E-commerce! Oferecemos soluções feitas sob medida para atender às suas necessidades e impulsionar suas vendas online. <br /><br />

            Escolha o pacote ideal para a sua empresa e dê um passo à frente no mundo do e-commerce. Estamos prontos para transformar suas ideias em realidade e impulsionar o seu sucesso online!
          </p> : ''}
          {activeIndex === 3 ? <p className="body-text">
            Nossos pacotes diversos oferecem funcionalidades para você que está cansado do básico do e-commerce. Tente experimentar a nova era de possibilidades para o seu negócio online! <br /><br />

            Escolha o pacote ideal para a sua empresa e dê um passo à frente no mundo do e-commerce. Estamos prontos para transformar suas ideias em realidade e impulsionar o seu sucesso online!
          </p> : ''}
        </div>
      </div>
      <div className="pacotes-list">
        {pacotes.map((pacote, index) => <PacoteItem key={index} title={pacote.title} price={pacote.price} products={pacote.products} />)}
      </div>
    </section>
  );
}