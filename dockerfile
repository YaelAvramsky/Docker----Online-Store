FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



# FROM node:20-slim AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 5173
# CMD ["nginx", "-g", "daemon off;"]




# FROM node:20-slim

# WORKDIR /app

# COPY package*.json .
# RUN npm install

# COPY . .

# EXPOSE 5173

# CMD ["npm","run","dev"]