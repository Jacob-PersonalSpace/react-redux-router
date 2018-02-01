# step 1. 从docker获取node镜像
FROM node:alpine as webpackNode

# step 3. 新增目录
RUN mkdir -p /usr/src/app

# step 4. 默认工作目录为上面新增的目录
WORKDIR /usr/src/app

# step 5. install git in container because project build will connect git to get commithash
RUN apk update && apk upgrade && apk add --no-cache bash git openssh

# step 6. 把项目全部复制到工作目录
COPY . /usr/src/app

# step 7. yarn install
RUN yarn install

# step 8. 打包项目
RUN yarn build

# step 9. 从docker获取镜像nginx:latest
FROM nginx:stable

# step 10. nginx.conf覆盖nginx的default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# step 11. 把上面项目打包的dist里面的静态文件复制到nginx里面的/usr/share/nginx/htm
COPY --from=webpackNode usr/src/app/dist /usr/share/nginx/html

# step 12
EXPOSE 80

# step 13: 当容器启动时，关闭后台守护 
ENTRYPOINT nginx -g "daemon off;"
