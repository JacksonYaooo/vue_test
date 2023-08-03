
#!bin/bash

message="$1"
echo '--·--·--·- 开始上传 -·--·--·--·'

git add .
git commit -m  "$message"

git push

echo '--·--·--·- 上传成功 -·--·--·--·'