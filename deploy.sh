# 用于熊猫工具网的基础迭代部署

docker stop cc-doc  # 停止正在运行的服务
docker rm cc-doc  # 删除正在运行的服务
docker rmi cc-doc:latest # 删除已存在的景象


docker build -t  cc-doc .   # 构建镜像
docker run -d -p 3300:3000 --name cc-doc cc-doc