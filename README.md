# Lista de Contatos

[Live Browser](https://tell-list-setubal.vercel.app/lista-telefonica)

## **Estrutura**


## **Implementações Futuras**
 
- [X] Adição de contato
- [X] Ordenação
- [X] Busca
- [X] Exclusão de contato
- [ ] Modal de confirmação de exclusão
- [ ] Edição de contato

### Commits


| Tipo de commit | Descrição                | Release                                                                                                                     |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `feat`         | Uma nova feature         |                                                                                                                     |
| `fix`          | Correção de bugs         |                                                                                                                     |
| `docs`         | Documentação             |                                   |
| `lint`        | Formatação de código     | Alterações que não afetam o significado do código (espaços em branco, identação, ponto-e-virgula, etc)                      |
| `style`       | Estilização de Página    | Alterações que afentam estilização da página não necessariamente uma funcionalidade nova (Aquivos styl,css, animações )                      |
| `refactor`     | Refatoração de código    | Alteração no código que não corrige um bug, e nem adiciona uma feature                                                      |
| `perf`         | Melhorias de performance | Alteração no código que melhora a performance                                                                               |
| `build`        | Builds                   | Alterações que afetam o sistema de build, ou dependências externas (escopos exemplares: gulp, broccoli, yarn, npm, webpack) |
| `ci`           | Integração continua (CI) | Alteração aos arquivos de configuração e scripts do CI (escopos exemplares: travis, circleci, browserstack, saucelabs)      |
| `chore`        | Chores                   | Outras mudanças que não modificam os arquivos da aplicação ou dos testes                                                    |
| `revert`       | Reversão de commit       | Reversão a um commit anterior          
### **Libs**

Libs padrão angular não serão adicionadas nessa listagem
* Angular `13.3.7`
* Angular Material `13.3.7`
* tailwindcss `^3.0.24`


## **Comandos**

### **Angular**
Comandos do angular
### **Run**
 Para rodar `ng s -o` para abrir o servidor na porta `http://localhost:4200/`.

### **Gerar artefatos angular**
 User o `ng g c nome-do-component` para gerar um um novo componente ou use 
 `ng g directive|pipe|service|class|guard|interface|enum|module` para gerar outros artefatos angular;

 ### **Build**

 Use `ng build` para gerar build de produção
 
 ### **Testes**
 Para testar use `ng test` para realizar testes unitarios  ou `ng e2e` para teste end-to-end
