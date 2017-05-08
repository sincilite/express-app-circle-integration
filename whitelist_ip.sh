#! /bin/bash
public_ip_address=$(wget -qO- http://checkip.amazonaws.com)
echo "this computers public ip address is $public_ip_address"
aws ec2 authorize-security-group-ingress --region eu-west-1 --group-id sg-974520ee --protocol tcp --port 22 --cidr $public_ip_address/32