
#Can change it depending on which ver you use
FROM node:24.2.0-alpine 

WORKDIR /usr/src/CSFD

RUN npm install -g pnpm

COPY pnpm-workspace.yaml .
COPY package.json .
COPY backend/package.json backend/
COPY pnpm-lock.yaml .

RUN pnpm install

COPY backend/ ./backend/

WORKDIR /usr/src/CSFD/backend

# RUN pnpm run build

#def port
EXPOSE 3000

CMD [ "pnpm", "run", "dev" ]
