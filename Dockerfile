# Lấy image từ 1 hệ điều hành
FROM alpine:latest 

# Chọn folder làm việc
WORKDIR /app

# Cài đặt nodejs và npm
RUN apk add --update nodejs npm

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy mã nguồn
COPY . .

# Setup Port
EXPOSE 3000

# Chạy app
CMD ["npm", "run", "start:dev"]