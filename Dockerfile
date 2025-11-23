FROM node:25-bookworm-slim AS construccion

WORKDIR /project

COPY --chown=node:node package.json ./ 

RUN npm install

COPY --chown=node:node . ./

RUN npm run lint && npm run build

FROM nginx:1.29.3-alpine AS empaquetado

COPY --from=construccion /project/dist /usr/share/nginx/html

EXPOSE 80


