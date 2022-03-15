# 1. Install docker (OK)
Follow offical docs

TODO: Dung

# 2. Install docker-compose (OK)
Follow offical docs

TODO: Dung

# 3. Install nginx (OK)
Follow offical docs

TODO: Dung

# 4. Setup nginx
Make a reverse proxy to redirect request to NodeJS Server (Docker)

Edit file `/etc/nginx/sites-available/default`

```
# Virtual Host configuration for api.monsy.timistudio.io
server {
    root /var/www/html;

    index index.html index.htm index.nginx-debian.html;
    server_name demo-api.timistudio.dev; # managed by Certbot

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.monsy.timistudio.dev/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.monsy.timistudio.dev/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

  # Reverse proxy
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}

server {
    if ($host = demo-api.timistudio.dev) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

  listen 80 ;
  listen [::]:80 ;
    server_name api.monsy.timistudio.dev;
    return 404; # managed by Certbot
}
```

# 5. Run docker
TODO: Dung

```
docker-compose up -d
```

# 6. Point domain

Get global ip, in our vps, it is `178.128.119.80`

```
$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 7e:8b:c2:e5:07:e2 brd ff:ff:ff:ff:ff:ff
    inet 178.128.119.80/20 brd 178.128.127.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet 10.15.0.6/16 brd 10.15.255.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::7c8b:c2ff:fee5:7e2/64 scope link
       valid_lft forever preferred_lft forever
```

Create A record point to your global IP. Below is sample we point subdomain `demo-api` to `178.128.119.80`

![image](https://user-images.githubusercontent.com/47516405/158398396-c2b614bb-90f0-4aca-8ae6-8077b8cc8021.png)

# 7. Domain for setup ssl
