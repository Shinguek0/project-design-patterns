# project-design-patterns
Estruturas de padrão de projetos da matéria Design Patterns

# Refatoração do Código
Este projeto implementa um sistema de renderização de formas geométricas em 2D e 3D. A seguir, são discutidos os principais problemas de código encontrados, as refatorações a serem aplicadas e a estratégia de melhoria.

## Problemas e Code Smells

### 1. Excesso de Responsabilidades nas Classes
A classe `Forma` possui a responsabilidade de armazenar e gerenciar a referência ao `Renderizador`, mas também é responsável por delegar a renderização ao próprio renderizador. Isso viola o **Princípio da Responsabilidade Única (SRP)**, pois a classe deveria ter uma única razão para mudar. A renderização e a definição das formas geométricas deveriam ser responsabilidades separadas.

### 2. Métodos Genéricos e Não Específicos
O método `renderizarForma` na interface `Renderizador` e suas implementações (`Renderizador2D` e `Renderizador3D`) são genéricos, aceitando um parâmetro `nomeDaForma`. Este método poderia ser mais específico para o tipo de forma a ser renderizada, evitando ambiguidades e melhorando a clareza do código.

### 3. Inflexibilidade na Implementação
A associação de formas a renderizadores está hardcoded nas classes `Circulo` e `Quadrado`. Isso significa que, para adicionar novas formas, seria necessário modificar as classes existentes, o que viola o **Princípio de Aberto/Fechado (OCP)**. Idealmente, novas formas poderiam ser adicionadas sem modificar o código existente.

### 4. Acoplamento Excessivo
A classe `Forma` está fortemente acoplada ao `Renderizador`. Embora a interface ajude a reduzir esse acoplamento, o código ainda poderia ser mais flexível e desacoplado. A associação entre as formas e os renderizadores poderia ser feita de forma mais flexível, como através de injeção de dependência.

## Estratégia de Refatoração

### 1. Aplicar o Princípio de Responsabilidade Única (SRP)
A lógica de renderização foi separada da definição das formas geométricas. A classe `Forma` agora apenas define a forma geométrica, enquanto a responsabilidade pela renderização fica com os renderizadores.

### 2. Tornar a Interface de Renderização Mais Específica
O método `renderizarForma` foi substituído por métodos mais específicos, que recebem o corpo da forma como parâmetro, permitindo uma renderização mais clara e direta.

### 3. Melhorar a Flexibilidade com o Princípio de Aberto/Fechado (OCP)
Introduzimos o **padrão de design Factory** para permitir a criação de formas e renderizadores de maneira mais flexível e extensível. Isso permite adicionar novas formas sem a necessidade de modificar classes existentes.

### 4. Reduzir o Acoplamento entre as Classes
A injeção de dependência foi aplicada para reduzir o acoplamento entre as formas e os renderizadores. Agora, as formas e renderizadores são passados como parâmetros através de uma fábrica, permitindo maior flexibilidade e testabilidade.