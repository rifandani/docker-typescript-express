FROM node:14-alpine

WORKDIR /usr/src/app

# ENV DATABASE_URL postgresql://rifandani@postgres:5432/webapp_dev?schema=public

COPY package*.json ./
# install deps + devDeps
RUN npm install
# copy prisma file + run prisma generate
COPY ./prisma/* ./prisma/
# RUN npx prisma migrate dev --preview-feature
RUN npx prisma generate
# RUN npm run db:seed
# copy all files
COPY . .
# build typescript
RUN npm run build

EXPOSE 8000
CMD [ "npm", "start" ]
