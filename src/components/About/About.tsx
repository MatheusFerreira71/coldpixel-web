import { useState } from 'react';
import './About.scss';

export default function About() {
  const [about, setAbout] = useState<boolean>(true);

  return (
    <section className="external-container about">
      <div className="about-tab">
        <img src="Devs.png" alt="Foto sobre nós" />
        <div className="about-text">
          <div className="about-menus">
            <p onClick={() => setAbout(true)} className={about ? "mr-1 active" : 'mr-1'}>Sobre nós</p>
            <p onClick={() => setAbout(false)} className={!about ? "active" : ''}>Por que nos contratar?</p>
          </div>
          {
            about ? (
              <>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum omnis quo atque, maiores quidem deserunt nisi architecto,
                  minus possimus optio sit rem voluptatem dignissimos quos, sequi ut expedita dolores necessitatibus.
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum omnis quo atque, maiores quidem deserunt nisi architecto,
                  minus possimus optio sit rem voluptatem dignissimos quos, sequi ut expedita dolores necessitatibus.
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsum omnis quo atque, maiores quidem deserunt nisi architecto,
                  minus possimus optio sit rem voluptatem dignissimos quos, sequi ut expedita dolores necessitatibus.
                </p>
              </>
            ) : (
              <>
                <p>Qui nemo recusandae ad velit officia sed distinctio dicta ut internos ratione aut suscipit excepturi.
                  Aut officia delectus et exercitationem magni a harum veniam qui debitis officia nam quasi commodi
                  ut quae corrupti vel eligendi tenetur.
                </p>
                <p>Qui nemo recusandae ad velit officia sed distinctio dicta ut internos ratione aut suscipit excepturi.
                  Aut officia delectus et exercitationem magni a harum veniam qui debitis officia nam quasi commodi
                  ut quae corrupti vel eligendi tenetur.
                </p>
                <p>Qui nemo recusandae ad velit officia sed distinctio dicta ut internos ratione aut suscipit excepturi.
                  Aut officia delectus et exercitationem magni a harum veniam qui debitis officia nam quasi commodi
                  ut quae corrupti vel eligendi tenetur.
                </p>
              </>
            )
          }
        </div>
      </div>
      <div className="about-services">
        <div className="services-text">
          <h1>Quais serviços oferecemos</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ipsum omnis quo atque, maiores quidem deserunt nisi architecto,
            minus possimus optio sit rem voluptatem dignissimos quos, sequi ut expedita dolores necessitatibus.
          </p>
        </div>
        <div className="services-text">
          <h1>Quais serviços oferecemos</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ipsum omnis quo atque, maiores quidem deserunt nisi architecto,
            minus possimus optio sit rem voluptatem dignissimos quos, sequi ut expedita dolores necessitatibus.
          </p>
        </div>
      </div>
    </section>
  );
}