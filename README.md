# acmesquita-ui

Projeto inspirado no [vídeo](https://www.youtube.com/watch?v=j0MCdrqN8nU) com o intito de aplicar os conhecimentos para criar uma lib de componentes UI e documentar utilizando o [Storebook](https://storybook.js.org/).

### Instalando

```
  yarn add acmesquita-ui
  
  or
  
  GIT_SSH_COMMAND='ssh -i ~/.ssh/custom_ident' npm install "git+ssh://git@github.com:acmesquita/acmesquita-ui.git#dist"
```

### Utilizando

```js

import { Button } from 'acmesquita-ui';

<Button>Default</Button>
<Button outline>Outline</Button>
<Button disabled>Disabled</Button>
```
