gitPush() {
    git add .
    git commit -m "learning"
    git push
}
alias gp=gitpush

gitPull() {
    git commit -m "pulling"
    git pull
}
alias gpl=gitpull

npmInstall(){
   sudo npm install
}
alias i=npminstall

deleteNpm(){
    sudo rm -rf node_modules
}





