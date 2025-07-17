FROM node:24.2.0-alpine 

WORKDIR /usr/src/CSFD

RUN npm install -g pnpm

COPY pnpm-workspace.yaml .
COPY package.json .
COPY frontend/package.json frontend/
COPY pnpm-lock.yaml .

RUN pnpm install

# COPY frontend/ .
COPY frontend/ ./frontend/

WORKDIR /usr/src/CSFD/frontend

# RUN pnpm run build

#def port
EXPOSE 5173

CMD ["pnpm", "run", "dev", "--host"]
