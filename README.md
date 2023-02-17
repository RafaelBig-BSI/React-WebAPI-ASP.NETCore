# <img height="40" src="https://user-images.githubusercontent.com/84249945/219471082-bba3510e-ee6d-4a6e-bf78-d7afc692043e.png"/> Como utilizar
## Confgurar string de conexão
* No arquivo <strong>appsettings.json</strong>, informe o nome da sua máquina onde está em <strong>negrito</strong>: <br/>
"ConnectionStrings": {
    "DefaultConnection": "Data Source=<strong>nome da sua máquina aqui</strong>;Initial Catalog=AlunosDemoDB;Integrated Security=True;"
  },
 * Para saber qual é o nome da sua máquina vá em <strong>Configurações -> Sistema -> Sobre</strong>
 * Seguindo esse passo você encontrará o nome da sua máquina em <strong>"Nome do dispositivo"</strong>

## Criar Migrations
* No Visual Studio, vá em Tools -> NuGet Package Manager -> NuGet Package Manager Console e adicione uma migration como exemplo:
<img src="https://user-images.githubusercontent.com/84249945/219690437-0934a9a0-25c4-4705-87a2-a1a814708682.png" />

* Feito isso, forneça o comando <strong>update-database</strong>
<img src="https://user-images.githubusercontent.com/84249945/219691257-b92f188f-dee0-4b97-9c98-b579edd011cd.png" />

* Forneça mais uma migration para popular a tabela no banco com dados internos da aplicação conforme a imagem:
<img src="https://user-images.githubusercontent.com/84249945/219692011-3504325f-6f28-4322-942a-51a29a6718e5.png" />

* Por fim, aplique <strong>update-database</strong>
<img src="https://user-images.githubusercontent.com/84249945/219692503-e7043600-6f92-41f8-ab9c-a441bb5f020e.png" />

* Abra o Microsoft SQL Server e fazer um <strong>refresh</strong> que irá aparecer a base de dados criada!

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219472955-662ddcff-d808-41c3-a3c0-7b467af638b9.png" /> Interface principal
* Swagger
<img src="https://user-images.githubusercontent.com/84249945/219474983-4d1242f1-caff-4951-a7d6-95048cf7a334.jpg" />
