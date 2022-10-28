# graphql-exemple-frontend

Change `$(pwd)` to `$PWD` from prod build on windows (in powershell).

To build the frontend:
```bash
docker build -t graphql-exemple-frontend 
```

To serve the frontend:
```bash
docker run -d -p "8080:80" -v "$(pwd)/public:/var/www/graphql-exemple-frontend" --name "graphql-exemple-frontend" graphql-exemple-frontend
```
