#!/bin/bash
set +e  # Continue on errors

export NODE_ENV=development
if [ -f "yarn.lock" ] && ! [ -d "node_modules" ]; then
   echo "Installing Yarn Dependencies"
   yarn
else
   if [ -f "package.json" ] && ! [ -d "node_modules" ]; then
      echo "node_modules not found, installing NPM Dependencies"
      pnpm install
   else
     echo "node_modules found, not reinstalling NPM Dependencies"
   fi
fi

COLOR_BLUE="\033[0;94m"
COLOR_GREEN="\033[0;92m"
COLOR_ORANGE="\033[0;33m"
COLOR_RESET="\033[0m"

BOLD_TEXT="\033[1m"
RESET_TEXT="\033[0m"


echo -e "${COLOR_BLUE}"
echo '
%#%  ____  _     _     ____  _____ ____    ____  _____ _     ____  ____  ____  ____  _____
%#% /  __\/ \ /\/ \   / ___\/  __// ___\  /  _ \/  __// \ |\/ ___\/  __\/  _ \/   _\/  __/
%#% |  \/|| | ||| |   |    \|  \  \ \ //  | | \||  \  | | //|    \|  \/|| / \||  /  |  \
%#% |  __/| \_/|| |_/\\___ ||  /_ / /_\\  | |_/||  /_ | \// \___ ||  __/| |-|||  \_ |  /_
%#% \_/   \____/\____/\____/\____\\____/  \____/\____\\__/  \____/\_/   \_/ \|\____/\____\
'
echo -e "${COLOR_RESET}
Welcome to your development container!

This is how you can work with it:
- Files will be synchronized between your local machine and this container
- Some ports will be forwarded, so you can access this container via localhost
- Run \`${COLOR_GREEN}pnpm start${COLOR_RESET}\` to start the application
- If you decide to debug your application inside your IDE here are the steps to attach a debugger to the running application:

${COLOR_ORANGE}Jetbrains products (Webstorm, IntelliJ):${COLOR_RESET}
    - Add a run configuration of type ${BOLD_TEXT}JavaScript Debug${RESET_TEXT}
    - enter http://localhost:4200 as URL, select a browser of your choosing and name the Configuration
    - Save and start the debugger by clicking the bug symbol to the right of the run configration

${COLOR_ORANGE}VScode:${COLOR_RESET}
    - In VScode you should find a run profile \"Attach to DevSpace\" under your launch and debug tab
    - run \"Attach to DevSpace\"
"

# Set terminal prompt
export PS1="\[${COLOR_BLUE}\]devspace\[${COLOR_RESET}\] ./\W \[${COLOR_BLUE}\]\\$\[${COLOR_RESET}\] "
if [ -z "$BASH" ]; then export PS1="$ "; fi

# Open shell
bash --norc
