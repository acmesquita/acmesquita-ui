import React from 'react';

import { Container } from './styles';

export const Page: React.FC = () => {
  return (
    <Container>
      <nav>
        <h1>Logo</h1>
        <ul>
          <li>Link</li>
        </ul>
      </nav>
      <main>
        <aside>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
          <footer>
            Criado em 2020
          </footer>
        </aside>
        <div className="content">
          <p>Conteúdo</p>
        </div>
      </main>
    </Container>
  );
}
