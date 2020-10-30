* GitBashHere ===> server 文件夹 
* start win64.exed 启动服务 --->启动这个服务时候,如果本地有nginx服务,需要关闭
* 进行本地视频推流 需要在推流视频的文件下
* ffmpeg -re -i test.mp4 -c copy -f flv rtmp://localhost:1935/live/movie 