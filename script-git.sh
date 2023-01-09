git add .

echo 'saisissez le commit '
read message

git commit -m "$message"

git push origin main 

read 