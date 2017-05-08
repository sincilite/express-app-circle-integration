public_ip_address=$(wget -qO- http://checkip.amazonaws.com)
echo "this computers public ip address is $public_ip_address"
aws ec2 help
#aws ec2 authorize-security-group-ingress --region <YOUR_REGION> --group-id <YOUR_SECURITY_GROUP_ID> --ip-permissions "[{\"IpProtocol\": \"tcp\", \"FromPort\": <YOUR_PORT_YOU_NEED_OPEN>, \"ToPort\": <YOUR_PORT_YOU_NEED_OPEN>, \"IpRanges\": [{\"CidrIp\": \"${public_ip_address}/32\"}]}]"