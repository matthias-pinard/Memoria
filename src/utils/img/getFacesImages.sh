#!/bin/bash
for i in {0..99}
do
	wget https://randomuser.me/api/portraits/men/${i}.jpg
	let N=($i+100)
	NAME=${N}.jpg
	wget https://randomuser.me/api/portraits/women/${i}.jpg -O $NAME
done
