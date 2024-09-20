# Dr TS Dental Care Landing Page

This website was developed using React framework, and all the media files were being served from ImageKit CDN

# Installation

Here are the steps to run this project in local environment

Step 1 : Clone this repo using "git clone repo_url" in your terminal

Step 2 : Run following command to install all the dependencies 
```bash
npm install
```

Step 3 : Command to run the website in local environment

```bash
npm start
```

Guide to Deploy the website on to the server

[ assuming you have successfully installed dependencies, if not follow above steps ]

Step 1 : Command to generate build

```bash
npm run build
```

Step 2 : Login to your server, here our case it's a vps server [Nginx](https://nginx.org/en/) running on Linux 

Step 3 : Use to following command to change directory to website [drts dental] root directory

```bash
cd /var/www/drtsdentalcare.com
```

Step 4 : Verify the current directory path using following command, it should be '/var/www/drtsdentalcare.com'

```bash
pwd
```

Step 5 : Now clone the git repo where the source code is already available ( note : remove '/build' in '.gitignore' cause we need build files to be uploaded onto git )
Step 6 : Verify whether the files are cloned correclty and go to build directory, you should see '{git_repo_name}'

```bash
cd git_repo_name/build/
```

Step 7 : Move all the files in build directory to website's root directory

```bash
mv * /var/www/drtsdentalcare.com/
```

Step 8 : Now go to website's root directory & verify all the files were moved, if yes then remove the git_repo_name directory keeping all other build files

```bash
cd /var/www/drtsdentalcare.com
ls
rm -rf git_repo_name
```
End

Check the site is working properly or not by visiting [website](https://drtsdentalcare.com). Congrats you have successfully deployed the website onto the server.

Note :  *You can copy build files onto the server using SSH or git, since you are full aware of git We proceeded with git ( recommended process - SSH )


