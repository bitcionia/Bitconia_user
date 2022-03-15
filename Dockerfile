FROM centos:7
RUN yum -y install httpd
WORKDIR /var/www/html
COPY dist/ .
EXPOSE 80
CMD  apachectl -D FOREGROUND
