FROM node:16

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos do backend
COPY package*.json ./
RUN npm install
COPY . .

# Expor a porta do servidor
EXPOSE 3000

# Comando para iniciar o servidor Node.js
CMD ["node", "index.js"]
