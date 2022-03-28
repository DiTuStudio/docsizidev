---
sidebar_position: 4
---

# Setup Api Server (React Native)
## 1. Install docker

Before you install Docker Engine for the first time on a new host machine, you need to set up the Docker repository. Afterward, you can install and update Docker from the repository

### Set up the repository

```
1. sudo apt-get update
2. sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
3. echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
4. (lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Install Docker Engine

```
1. sudo apt-get update
2. sudo apt-get install docker-ce docker-ce-cli containerd.io
```

Then check docker version in your ubuntu:

```
1. docker version
```

Output:

```
Client: Docker Engine - Community
 Version:           20.10.12
 API version:       1.41
 Go version:        go1.16.12
 Git commit:        e91ed57
 Built:             Mon Dec 13 11:45:33 2021
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.12
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.16.12
  Git commit:       459d0df
  Built:            Mon Dec 13 11:43:42 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.13
  GitCommit:        9cc61520f4cd876b86e77edfeb88fbcd536d1f9d
 runc:
  Version:          1.0.3
  GitCommit:        v1.0.3-0-gf46b6ba
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

## 2. Install docker-compose

```
1. sudo apt update
2. sudo apt install docker-compose
```

### Check version docker compose:

```
1. docker-compose --version
```

Output:

```
docker-compose version 1.29.2, build 5becea4c
```

## 3. Install nginx

### Installing Nginx

```
1. sudo apt update
2. sudo apt install nginx
```

### Adjusting the Firewall

```
1. sudo ufw app list
2. sudo ufw allow 'Nginx HTTP'
3. sudo ufw allow 'OpenSSH'
4. sudo ufw enable
5. sudo ufw status
```

The output will indicated which HTTP traffic is allowed:

```
Output
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
Nginx HTTP                 ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
Nginx HTTP (v6)            ALLOW       Anywhere (v6)
```

### Checking your Web Server

```
1. systemctl status nginx
```

Output:

```
Output
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2020-04-20 16:08:19 UTC; 3 days ago
     Docs: man:nginx(8)
 Main PID: 2369 (nginx)
    Tasks: 2 (limit: 1153)
   Memory: 3.5M
   CGroup: /system.slice/nginx.service
           ├─2369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           └─2380 nginx: worker process
```

## 4. Setup nginx

Make a reverse proxy to redirect request to NodeJS Server (Docker)

Edit file `/etc/nginx/sites-available/default`

```
server {
    root /var/www/html;

    index index.html index.htm index.nginx-debian.html;
    server_name demo-api.timistudio.dev;

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
```

## 5. Run docker

### Add file zip source code in server

```
1. scp <file zip name> user@host:/path/to/destination (Example: scp monsy.zip root@178.128.119.80:/root)
2. sudo apt install unzip
3. unzip <file zip name> (Example: unzip monsy.zip)
4. cd <folder code> (Example: cd monsy)
```

### Run docker

```
1. docker-composer up -d

```

## 6. Point domain

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

## 7. Domain for setup ssl

```
$ sudo apt install certbot python3-certbot-nginx

$ sudo systemctl reload nginx

$ sudo certbot --nginx -d demo-api.timistudio.dev
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator nginx, Installer nginx
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel): minhdq@timistudio.dev

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(A)gree/(C)ancel: A

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about our work
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: A
(Y)es/(N)o: A
(Y)es/(N)o: Y
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for demo-api.timistudio.dev
Waiting for verification...
Cleaning up challenges
Deploying Certificate to VirtualHost /etc/nginx/sites-enabled/default

Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
Redirecting all traffic on port 80 to ssl in /etc/nginx/sites-enabled/default

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Congratulations! You have successfully enabled https://demo-api.timistudio.dev

You should test your configuration at:
https://www.ssllabs.com/ssltest/analyze.html?d=demo-api.timistudio.dev
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/demo-api.timistudio.dev/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/demo-api.timistudio.dev/privkey.pem
   Your cert will expire on 2022-06-13. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```
