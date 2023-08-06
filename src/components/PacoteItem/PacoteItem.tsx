import './PacoteItem.scss';

export interface PacoteContent {
  title: string;
  products: Product[];
  price: number;
}

type ProductSimpleOrBold = {
  style: 'simple' | 'bold';
  text: string;
};

type ProductDuo = {
  style: 'duo';
  duo: DuoText;
};

type Product = ProductSimpleOrBold | ProductDuo;

interface DuoText {
  bold: string;
  simple: string;
}

export default function PacoteItem({ title, products, price }: PacoteContent) {
  return (
    <article className="pacote">
      <header>
        <h3>{title}</h3>
      </header>
      <ul>
        {products.map((product, index) => {
          if(product.style === 'simple') return <li key={index} className="body-text">{product.text}</li>
          else if(product.style === 'bold') return <li key={index} className="body-text-bold">{product.text}</li>
          else if (product.style === 'duo') return (
            <li key={index}>
              <span className="body-text-bold">{product.duo.bold}</span>
              <span className="body-text">{product.duo.simple}</span>
            </li>
          )
        })}
        <li className="price">
          <h3>
            {price.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })}
          </h3>
        </li>
      </ul>
    </article>
  );
}