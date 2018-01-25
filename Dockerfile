# step 1. 从docker获取node镜像
FROM node:boron as webpackNode

# step 2. 安装yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.3.2
RUN $HOME/.yarn/bin/yarn install

# step 3. 新增目录
RUN mkdir -p /usr/src/app

# step 4. 默认工作目录为上面新增的目录
WORKDIR /usr/src/app

# step 5. 把项目全部复制到工作目录
COPY . /usr/src/app

# step 6. yarn install
RUN yarn install

# step 7. 打包项目
RUN yarn build

# step 8. 从docker获取镜像nginx:latest
FROM nginx:latest

# step 9. nginx.conf覆盖nginx的default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# step 10. 把上面项目打包的dist里面的静态文件复制到nginx里面的/usr/share/nginx/htm
COPY --from=webpackNode usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT nginx -g "daemon off;"