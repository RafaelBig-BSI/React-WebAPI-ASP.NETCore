
# <img height="40" src="https://user-images.githubusercontent.com/84249945/219458363-0df46081-95bd-4878-a828-541457541cbd.png"/> Sobre
Projeto <strong>Web API ASP.NET (.NET 5.0) + React</strong> que realiza o gerenciamento de alunos onde é possível incluir, alterar e excluir alunos (CRUD) sendo que cada ação é requisitada ao endpoint específico no back-end. As informações dos alunos são salvas no banco de dados <strong>Microsoft SQL Server</strong> utilizando <strong>Entity Framework Core</strong> para mapeamento das entidades.

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219459633-fbe0a910-0287-4f46-9ec3-0eaf1da53b87.png"/> Organização
Utilizei como organização a criação de dois projetos onde um é destinado para o front-end e outro para o back-end. Para o front-end a tecnologia <strong>React.js</strong> foi escolhida para esta aplicação e dediquei a <strong>branch "master"</strong> para incluir as pastas/arquivos do projeto. Em relação ao back-end, foi criado um projeto <strong>Web API ASP.NET Core</strong>, possuindo os endpoints configurados para realizar as rotas da API e o <strong>Entity Framework Core</strong> configurado para mapeamento das entidades no banco de dados <strong>Microsoft SQL Server</strong>. Então, criei uma nova branch chamada de <strong>"backend"</strong> onde está incluso as pastas/arquivos do projeto Web API ASP.NET Core.

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219471082-bba3510e-ee6d-4a6e-bf78-d7afc692043e.png"/> Como utilizar
Certifique de possuir o <strong>node</strong> instalado previamente. Para obter a versão do node instalado em seu computador, abra o terminal e digite:
```bash
node -v
```
## Instalações
* Instalar a pasta <strong>node_modules</strong>
```bash
npm install
```

* Instalar as dependências <strong>bootstrap, reactstrap e axios</strong>:
```bash
npm install bootstrap
```

```bash
npm install reactstrap
```

```bash
npm install axios
```
## Iniciar a aplicação
* Após as instalações, forneça o comando para iniciar a aplicação React
```bash
npm start
```

## Configurar baseUrl 
* No seu aplicativo React, vá em <strong>App.js</strong> localizado dentro da pasta <strong>/src</strong> e localize a variável <strong>baseUrl</strong>
* É preciso informar qual a sua <strong>porta</strong> localhost e para descobri-la abra o arquivo <strong></strong>
# :hammer: Funcionalidades


https://user-images.githubusercontent.com/84249945/219433800-5ac08abb-2be8-4ae6-8e28-f49b3943c955.mp4

## <img height="40" src="https://user-images.githubusercontent.com/84249945/219471565-77dd520e-41ee-41f8-8fb9-0e259535a867.png"/> Tecnologias utilizadas
<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=dotnet,cs,js,react,nodejs,bootstrap" />
  </a>
</p>

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219472556-367952b0-d430-495e-87b9-3f4611bdab21.png" />Imagens
* <strong>Interface Principal</strong>
<img src="https://user-images.githubusercontent.com/84249945/219422540-4e809422-09c5-42c6-a749-86e0fa0d377d.jpg" />
<hr>

* <strong>Create</strong>
<img src="https://user-images.githubusercontent.com/84249945/219423583-85664fee-d9c3-4f7e-9b72-472e747afbfe.jpg" />
<hr>

* <strong>Update</strong>
<img src="https://user-images.githubusercontent.com/84249945/219424248-be4efb86-cbbd-4c3d-ac67-352b3b1e1aef.jpg" />
<hr>

* <strong>Delete</strong>
<img src="https://user-images.githubusercontent.com/84249945/219424413-6bc2f15e-5612-4c9a-8a8d-351cb5c0cde6.jpg" />
