public ip
44.220.163.30

-   Building a simple application to understand the common flow

---

Introduction: Why the simple app?

---

    - Wheather you are building a simple app or a complex app, there are a lot of commonalities that you repeat again and again. We will try to understand those commonalities by building a very basic full stack app that is used to add a new employee to the database and alow an employee to login back. We will use git to manage our code and deploy it to the server. Confugure our server to serve the pages. Restructure the code to follow the standard folder structure and use APIs. We will use the simple app we use and the standards we follow as a base for the main APP we will build.

    Steps we will follow:
      - Set up the git repository
      - Set up the dev database locally
      - Develop the Backend
      - Develop the Frontend
      - Set up our host server on Amazon AWS (EC2)
      - Deploy our code
      - Restructure our code to follow the standard folder structure
      - Update our code base and deploy it again
      * We will then use the same flow to build the Garage App

    NOTE: Let's assume we are only building two pages of the application.
      - The add employee page and the log in page
      - Design of the two pages are provided in the design folder

Set up the git repository

---

    - Set up the repo as a private repo on git hub
      /sampleapp
    - Clone the repo to your local machine and start working on
      - Before you clone the code, create access token on github
      - git clone  {project link} (Use the SSH link as this is a private repo)
      - If you haven't added your SSH key to your git hub account, you need to do that first
        (We will see how to do that when we later configure our server)

Set up the dev database locally

---

    - Install MySql on your local machine
      - https://dev.mysql.com/downloads/installer/
      (If you have MAMP already installed, you can use that as well)

    -

Set up the Backend

---

    Note:
      Let's just create the very basic files necessary at firts. We will then come back and restructure our files following the industry standards. That way, you will also understand how restructuring actually makes your life easier.

    - Create the "backend" Folder:
      - To hold all your backend codes
      - package.json (file):
        Create the initial package.json file to track your dependencies
          - npm init

    - Create the app.js (file):
      - This is the main file that we use to run and manage the backend server
      - Let us now start writing our code
        - Let's start by creating our webserver
          - Install Express
            - npm install express
          // Import the express module
          // Set up the port to listen to
          // Set up the listener

        - Let's now create a simple get request handler to send a response back
          // Create a simple get request handler to send a response back
          - Test it on the browser
            - http://localhost:4000/

        - Let's now connect to the database
          - To do that we need the mysql (mysql2) bridge module to connect to the database
          - Install the mysql2 module
            - npm install mysql2
          // Import the mysql module
            - We use the commonJS module system to import the modules
            * mysql2 is faster and has more features than mysql. But they both do the same thing
          // Define the connection parameters for the database
          // Create the connection to the database
          // Connect to the database
          - Check if the connection is successful on the console

        - Let's now design and prepare the API documentation
          - Remember:
            - There is no code to write for this step. The goal of this step is to define what is to be send to the backend server and what is to be recieved from it.
            - We are restricted by the HTTP protocol. Meaning, we can only send and recieve data in the form of text.
            - The server should be programed to understand the text we send to it and send us back the data we need. Meaning, it is our (Backend developer's) responsibility to write the code that handles the request

          

Set up the Frontend

---

    - frontend (Folder)
      
            - Since we are structuring our App as a single page application, where app.js is the single page that gets called all the time, we need a mechanism to send different components for different requests. That is why we need to use Routing.
            - Create React App tool chain doesn't include page routing by default.
            - React Router is the most popular routing library for React. Start by installing and importing that
              - npm i react-router
              // Import the Router from react-router
            - For the routing to work based on the path provided on the browser's address bar, it needs help from another component called BrowserRouter.
              - Install the BrowserRouter
                - npm i react-router-dom
              - Import the BrowserRouter from react-router-dom (on index.js)
                // Import the BrowserRouter from react-router
              - Wrap the App component with the BrowserRouter component (on index.js)
                - This ensures that all the child components have access to the routing features provided by React Router
          - Import the page components on the App.js file
            (These are the different components we want to send for different requests)
            // Import the page components
          -
              - First, let's see what happens if we just submit data as it is now
              - Browsers are traditionally designed to send GET requests when we submit a form. The request is sent to a url provided under the "action" form property. If there is nothing provided there, the browser sends the request to the same url as the page.
              - The form values are sent as query parameters appended on the URL.
              - But this is not what we want to happen when we submit the form. We want to send a POST request to the backend server. Not to the frontend server.
              - First step is to prevent the default behavior of the browser when we submit the form.
                - For that, lets write a custom function to handle our submit event
                  // Write a function to handle the form submission
                  - Call the function on form submit event
                    <form onSubmit={handleSubmit}>
                  // Prevent the default behaviour of the form submission
              - Next step is to collect all user provided data and format it in a way that is defined on API documentation
                - We will use the useState hook to store the form data
                  // Import useState from react
                // Declare state variables for each of the form fields
                - We will use the onChange event to update the state
                  - Add the state variables to the component
                - We will use the value property to bind the state to the form field
                - We will use the name property to identify the form field
                - We will use the onSubmit event to send the request to the backend server

                

Set up our host server on Amazon AWS (EC2)

---

    - Create new AWS account
      https://portal.aws.amazon.com/billing/signup#/start/email

      - Once it is done, let's choose the basic support plan and sign in

      - Click on the EC2 Icon (You can search and find it if it is not on the home page)
        https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Home:

    - Create an instance
      - Steps:
        - Create a key pair (Or you can use one that exists)
        - Choose Amazon Machine Image (AMI)
          - Ubuntu Server 20.04 LTS (HVM), SSD Volume Type - ami-0dba2cb6798deb6d8 (64-bit x86) / ami-0e2ff28bfb72a4e87 (64-bit Arm)
        - t2.micro (Free tier eligible)
        - Configure Instance Details (Default)
        - Add Storage (Default)
        - Add Tags
          - Key: Name
          - Value: NodeHello
        - Configure Security Group (Leave for now)
        - Review and Launch
        - Select the key pair
        - Launch Instances
        * Wait until status check completes

    - Connect to an EC2 instance
      - Configure the security group to allow port accesses (If you didn't allow all)
        - Add custom TCP port 4000 to the secutity group
        - Add http port 80 to the security group
        - Add https port 443 to the security group
        - Add ssh port 22 to the security group

      - Using EC2 Connect (SSH)
        - This connects you to the server using the browser

      - Through the Terminal (SSH)
        - This connects you to the server using the terminal
        - Open your terminal and go to the directory where you saved the .pem file
        - Change the permissions of the .pem file
          - chmod 400 <name of the .pem file>
        - Connect to the instance
          - You can copy the command from the EC2 instance connect
          ssh -i "sa

        - Connect using Cyberduck
          - Download Cyberduck
            https://cyberduck.io/download/
          - Open Cyberduck
          - Click on Open Connection
          - Choose SFTP (SSH File Transfer Protocol)
          - Enter the following information
            - Server: <Public DNS (IPv4)>
            - Username: ubuntu
            - SSH Private Key: <Choose the .pem file that you downloaded>
          - Click on Connect
          - Update the instance
            - sudo apt-get update

        - Generate SSH Key for github and add it
          sudo apt-get update  (If not done already)
          ssh-keygen -t ed25519 -C ".com"
          - Generating public/private ed25519 key pair.
          - Enter file in which to save the key (/home/ubuntu/.ssh/id_ed25519):
          - Enter passphrase (empty for no passphrase):
          - Enter same passphrase again:
          - Your identification has been saved in /home/ubuntu/.ssh/id_ed25519.
          cat ~/.ssh/id_ed25519.pub
          - Copy and add it to the github account
            - Go to the GitHub account
            - Go to Settings
            - Go to SSH and GPG keys
            - Click on New SSH key
            - Paste the SSH key
          - This will allow you to communicate with the private git repo

    - Install Mysql on our server
      - Install MySql
        sudo apt-get install mysql-server
        (Restart allows)
      - Change the default password for the root user
        sudo mysql_secure_installation
          - For now - No to everything
      - Check mysql status
        sudo systemctl status mysql
      - You can also change the root password like this
        Log in to MySql
          - sudo mysql
          alter user 'root'@'localhost' identified with mysql_native_password by '14777';
          (You should see Query OK, 0 rows affected (0.01 sec))
          - u = root
          - p = 14777@
        exit
      - Log in to MySql
        mysql -u root -p

    - Install phpmyadmin to be able to manage our databases easily (What you already know)
      - Install Apache first
        sudo apt-get install apache2
      - Start the server
        sudo systemctl start apache2
        or]
        sudo service apache2 start
      - Check if the server is running
        sudo systemctl status apache2
        or
        sudo service apache2 status
      - Open in browser
        http://<Public DNS (IPv4)>
        (Make sure the security group allows http port 80, 443, 3000 & 4000)
          - Set from anywhere for now
        http://44.220.163.30/ (Make sure to remove the https://)
          - You should see the apache2 Ubuntu Default Page
      - Install php as it is required by phpmyadmin
        sudo apt-get install php
      - Install PHPMyAdmin
        sudo apt-get install phpmyadmin
          - Choose apache
          - When asked if you want to configure the database for phpmyadmin with dbconfig-common, select no
      - Configure PHPMyAdmin
        ** Vim cheat sheet
          https://devhints.io/vim
        sudo vim /etc/apache2/apache2.conf
        - Add the following line at the end of the file. (This allows Apache to include and use the configuration settings specific to phpMyAdmin, which are stored in the /etc/phpmyadmin/apache.conf file.)
          Include /etc/phpmyadmin/apache.conf
      - Access PHPMyAdmin
        http://44.211.126.111/phpmyadmin/
        - Username: root
        - Password: 14777@
      - Import our local database to the production server
        - Create the database with the same user name and passcode
        - Export the database from your local machine
        - Import the database to the production server
        * If in case you don't have access to phpmyadmin, you can use the terminal to import the database
          - Open the terminal
          - Go to the directory where you saved the database
          - mysqldump -u root -p <database name> > <database name>.sql
            - Enter the password

    - Install NodeJS
      - Ubuntu usually comes with node already installed on it. But, it is usually an older version. We need to remove it and install the latest version.
      - Remove the old version of node
        sudo apt purge nodejs npm
      - We can install node in multiple ways. One of the ways is to use the node version manager (nvm). So we will start by installing nvm first
        curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
      - Reload your terminal
        source ~/.bashrc
      - Check if nvm is installed
        nvm --version
      - Check the available versions of node
        nvm list-remote
      - Choose the one you want to install (Check the latest version on the node website)
        nvm install v20.12.2
      - Install npm
        sudo apt-get install npm

Commit and push the code to github

---

    - Update the API URL first
    - Before we move on and add the other pages, let's set up our git and remove files that we don't want to track on git.
    - set up .gitignore
    - Change the localhost url to the AWS url on the frontend code
    - Comment out the socketPath used to connect to the local MAMP
    - Commit and push the code to github

Deploy our code to the server

---

    - SSH into the server
    - Git clone with SSH
      - git clone

    Deploy the backend
    ------------------
      - cd to the backend folder
      - We normally do node app.js or nodmon app.js to start the server
        - For production, we will use a process manager instead
          - The reseaon is, if the server goes down for some reason, the process manager will restart it
        - We will use PM2 for that

        ** Just to test if it is working properly, let's just run it with node app.js and see if it works
          - If it works, then we can move on to PM2
      - Install PM2
        - sudo npm install pm2 -g
      - To start our backend app
        - pm2 start app.js (From the backend folder)
        ** Test again
        * You can also provide it a specific name
          - pm2 start app.js --name "sampleapp"
        - To stop a process
          - pm2 stop app.js (Or the id of the process)
        - To restart a process
          - pm2 restart app.js (Or the id of the process)
        - To check the status of the process
          - pm2 status
        - To check the logs of the process
          - pm2 logs (Or the id of the process)
        - To delete a process
          - pm2 delete app.js (Or the id of the process)
      - To configure PM2 to start the app automatically when the server is restarted
        - Type this command
          - pm2 startup
        - Copy the command that is generated
          - sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
        - Paste it in the terminal and hit enter
        - To save the current process list
          - pm2 save
            - To tell the server to save the list of processes that will be started automatically
      - Test the Backend
        - Open Postman
          - Add a new employee and test it
          - Log in and test it

# WAN IP Project README

# Refresh after 3 sec.

# <meta http-equiv = "refresh" content="3">

# redirect to other page

# url = "test2.html"

# clear button after form fill

# onfocus event

Welcome to the WAN IP Project README! This project aims to assist users of Ethio Telecom in setting up their Wi-Fi router modems by providing their WAN IP information. Follow this guide to learn about the project's purpose, installation process, usage, and more.

## Deployed Site

-   [WAN IP Project](https://wan-ip-project.vercel.app/)

## Final Project Blog Article

-   [Project Journey](https://docs.google.com/document/d/1bwgjIpss8U4ZwBdmKf0mh-zuXWaqERm2h7oKo_X6208/edit?usp=sharing)

## Authors

-   Yohanes Senbeto

## Author's LinkedIn

-   [Yohanes Senbeto](https://www.linkedin.com/in/yohanes-senbeto-61833218a/)

## Installation

To get started with the WAN IP Project, follow these steps:

1. Clone the repository: git clone https://github.com/YohanesSenbeto/WAN-IP-Project.git>
2. Navigate to the project directory: cd WAN-IP-Project
3. Install dependencies for the frontend and backend:
    - For frontend (React.js): cd frontend && npm install
    - For backend (Node.js): cd backend && npm install
4. Set up the database using XAMPP or another suitable database management system.
5. Configure the backend to connect to your database by updating the database configuration file.
6. Run the frontend and backend servers:
    - For frontend: cd frontend && npm start
    - For backend: cd backend && node app.js

## Usage

Once the project is set up and running, users can visit the deployed site to access the WAN IP information for their Wi-Fi router modems. They can enter their router model and view the corresponding WAN IP address.

## Contributing

We welcome contributions from the community to enhance the WAN IP Project. If you have any ideas for improvements, bug fixes, or new features, please feel free to open an issue or submit a pull request on GitHub.

## Related Projects

Check out these related projects for further exploration:

-   Eliana Tech Show[https://t.ly/lZEQx]: YouTube channel providing tutorials on technology and networking.

## Licensing

The WAN IP Project is licensed under the MIT License.

## Screenshots

![alt text](frontend/src/assets/images/banner.png)
![alt text](frontend/src/assets/images/guide.png)

-   [A couple of resources](#)
-   [What your code repository says about you](#)
-   [Awesome READMEs](#)

Thank you for exploring the WAN IP Project! Feel free to connect with us on LinkedIn and share your thoughts. Let's continue this journey together.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

-   npm start : Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000)to view it in your browser.

-   npm test : Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

-   npm run build : Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

-   npm run eject : **Note: this is a one-way operation. Once you eject , you can't go back!**

Learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and explore the [React documentation](https://reactjs.org/).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your  
project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).  
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#Introduction
Welcome to the WAN IP Project README! Our project aims to assist users of Ethio Telecom in setting up their Wi-Fi router modems by providing their WAN IP information. This README will guide you through the project's purpose, installation process, usage, and more.
#Deployed Site: WAN IP Project
#Final Project Blog Article: Project Journey
#Authors: Yohanes Senbeto,
#Author's LinkedIn: Yohanes Senbeto
Installation
#To get started with the WAN IP Project, follow these steps:
#Clone the repository: git clone https://github.com/YohanesSenbeto/WAN-IP-Project.git
#Navigate to the project directory: cd WAN-IP-Project
#Install dependencies for the frontend and backend:
#For frontend (React.js): cd frontend && npm install
#For backend (Node.js): cd backend && npm install
#Set up the database using XAMPP or another suitable database management system.
#Configure the backend to connect to your database by updating the database configuration file.
#Run the frontend and backend servers:
#For frontend: cd frontend && npm start
#For backend: cd backend && node app.js
#Usage
Once the project is set up and running, users can visit the deployed site to access the WAN IP information for their Wi-Fi router modems. They can enter their router model and view the corresponding WAN IP address.
#Contributing
We welcome contributions from the community to enhance the WAN IP Project. If you have any ideas for improvements, bug fixes, or new features, please feel free to open an issue or submit a pull request on GitHub.
Related Projects
Check out these related projects for further exploration:
Eliana Tech Show: YouTube channel providing tutorials on technology and networking.
#Licensing
The WAN IP Project is licensed under the MIT License.
#Screenshots
#A couple of resources:
What your code repository says about you
Awesome READMEs
Thank you for exploring the WAN IP Project! Feel free to connect with us on LinkedIn and share your thoughts. Let's continue this journey together.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your  
project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).  
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#Introduction
Welcome to the WAN IP Project README! Our project aims to assist users of Ethio Telecom in setting up their Wi-Fi router modems by providing their WAN IP information. This README will guide you through the project's purpose, installation process, usage, and more.
#Deployed Site: WAN IP Project
#Final Project Blog Article: Project Journey
#Authors: Yohanes Senbeto, Eyob Assefa
#Author's LinkedIn: Yohanes Senbeto
Installation
#To get started with the WAN IP Project, follow these steps:
#Clone the repository: git clone https://github.com/YohanesSenbeto/WAN-IP-Project.git
#Navigate to the project directory: cd WAN-IP-Project
#Install dependencies for the frontend and backend:
#For frontend (React.js): cd frontend && npm install
#For backend (Node.js): cd backend && npm install
#Set up the database using XAMPP or another suitable database management system.
#Configure the backend to connect to your database by updating the database configuration file.
#Run the frontend and backend servers:
#For frontend: cd frontend && npm start
#For backend: cd backend && node app.js
#Usage
Once the project is set up and running, users can visit the deployed site to access the WAN IP information for their Wi-Fi router modems. They can enter their router model and view the corresponding WAN IP address.
#Contributing
We welcome contributions from the community to enhance the WAN IP Project. If you have any ideas for improvements, bug fixes, or new features, please feel free to open an issue or submit a pull request on GitHub.
Related Projects
Check out these related projects for further exploration:
Eliana Tech Show: YouTube channel providing tutorials on technology and networking.
#Licensing
The WAN IP Project is licensed under the MIT License.
#Screenshots
#A couple of resources:
What your code repository says about you
Awesome READMEs
Thank you for exploring the WAN IP Project! Feel free to connect with us on LinkedIn and share your thoughts. Let's continue this journey together.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your  
project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).  
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
make amazing readme file
Answer :

Share icon
It looks like you have provided a detailed README file for the WAN IP Project, which includes information about the project's purpose, installation process, usage, contributing guidelines, related projects, licensing, and more. Here are some suggestions to enhance your README file:

1. **Table of Contents**: Consider adding a table of contents with links to different sections for easier navigation.

2. **Project Description**: Provide a brief overview of the project, its goals, and how it can benefit users.

3. **Installation Instructions**: You already have detailed installation steps, but you can also include any specific requirements or dependencies users need to have before setting up the project.

4. **Usage**: Expand on how users can interact with the deployed site and any specific functionalities they can utilize.

5. **Contributing Guidelines**: Include specific instructions on how users can contribute to the project, such as code formatting guidelines, branch naming conventions, and pull request procedures.

6. **Screenshots**: Add visual representations of the project, such as screenshots of the deployed site or key features.

7. **License Information**: Provide a clear explanation of the project's licensing terms and how users can use and distribute the code.

8. **Contact Information**: Consider adding a section where users can reach out to the authors for questions, feedback, or collaboration opportunities.

By incorporating these suggestions, you can create an even more informative and engaging README file for your project. Good luck with your WAN IP Project!
Question :

use this one
#Introduction
Welcome to the WAN IP Project README! Our project aims to assist users of Ethio Telecom in setting up their Wi-Fi router modems by providing their WAN IP information. This README will guide you through the project's purpose, installation process, usage, and more.
#Deployed Site: WAN IP Project
#Final Project Blog Article: Project Journey
#Authors: Yohanes Senbeto, Eyob Assefa
#Author's LinkedIn: Yohanes Senbeto
Installation
#To get started with the WAN IP Project, follow these steps:
#Clone the repository: git clone https://github.com/YohanesSenbeto/WAN-IP-Project.git
#Navigate to the project directory: cd WAN-IP-Project
#Install dependencies for the frontend and backend:
#For frontend (React.js): cd frontend && npm install
#For backend (Node.js): cd backend && npm install
#Set up the database using XAMPP or another suitable database management system.
#Configure the backend to connect to your database by updating the database configuration file.
#Run the frontend and backend servers:
#For frontend: cd frontend && npm start
#For backend: cd backend && node app.js
#Usage
Once the project is set up and running, users can visit the deployed site to access the WAN IP information for their Wi-Fi router modems. They can enter their router model and view the corresponding WAN IP address.
#Contributing
We welcome contributions from the community to enhance the WAN IP Project. If you have any ideas for improvements, bug fixes, or new features, please feel free to open an issue or submit a pull request on GitHub.
Related Projects
Check out these related projects for further exploration:
Eliana Tech Show: YouTube channel providing tutorials on technology and networking.
#Licensing
The WAN IP Project is licensed under the MIT License.
#Screenshots
#A couple of resources:
What your code repository says about you
Awesome READMEs
Thank you for exploring the WAN IP Project! Feel free to connect with us on LinkedIn and share your thoughts. Let's continue this journey together.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your  
project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).  
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
