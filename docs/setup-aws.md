## Set up AWS on your local

### Install AWS CLI

- You need to have AWS CLI installed on your computer : https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html

### Setup IAM user on AWS

- Go to [AWS Single Sign-On](https://kooalys.awsapps.com/start#/) and loggin to your account (if you don't have one, ask for it to be created).
- Go to your personal environment in [DEVELOPMENT] then go to **Management Console**
- Open AWS by searching "IAM" in the search bar or go to [Identity and Access Managment service (IAM)](https://console.aws.amazon.com/iam/home?region=eu-west-1) and add a user.
- **_Step 1 - Set User Details_**: Select **Programmatic access** and **AWS Management Console access**
- **_Step 2 -Set Permissions_**: choose option **Attach existing policies directly** then select **AdministratorAccess** 
- Click on **Next:Tags** then **Next:Review** and finally **Create User**.
- At the end of the process, write down the **\$USER_ACCESS_KEY** and **\$USER_SECRET_ACCESS_KEY**.
- In case where you didn't write down the key access, you can go to Users then click on the user you just created and select **Security Credentials** to write them down.



### Configure the user on your machine

- Configure this user as a new `dojo-serverless` profile on your machine by running the following command `aws configure --profile dojo-serverless` :
  - AWS Access Key ID : _\$USER_ACCESS_KEY_
  - AWS Secret Access Key : _\$USER_SECRET_ACCESS_KEY_
  - Default region name : `eu-west-1`
  - Default output format : `json`
