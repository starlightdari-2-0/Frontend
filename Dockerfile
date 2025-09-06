FROM node:21-alpine AS builder

WORKDIR /app

COPY package*.json ./

# npm 설치
# RUN npm install
RUN npm install --legacy-peer-deps

COPY . .

# Next.js 빌드 실행
RUN npm run build

# 오픈할 포트
EXPOSE 3000

# 앱 실행
CMD [ "npm", "start" ]