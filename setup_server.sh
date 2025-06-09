#!/bin/bash

# Update package list
apt update

# Install Nginx
apt install -y nginx

# Install certbot for SSL
apt install -y certbot python3-certbot-nginx

# Create website directory
mkdir -p /var/www/oguzhanllc.com

# Create Nginx configuration
cat > /etc/nginx/sites-available/oguzhanllc.com << 'EOL'
server {
    listen 80;
    listen [::]:80;
    server_name oguzhanllc.com www.oguzhanllc.com;

    root /var/www/oguzhanllc.com;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
EOL

# Enable the site
ln -sf /etc/nginx/sites-available/oguzhanllc.com /etc/nginx/sites-enabled/

# Test Nginx configuration
nginx -t

# Restart Nginx
systemctl restart nginx

echo "Server setup complete! Next steps:"
echo "1. Deploy your website files to /var/www/oguzhanllc.com"
echo "2. Run: certbot --nginx -d oguzhanllc.com -d www.oguzhanllc.com" 