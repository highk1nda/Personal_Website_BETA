#!/bin/bash
echo
echo =-=-=-=-=-=
echo
echo
echo "Hi Anton!"
echo "Speed-running the Website huh?"
echo "Good luck!"
echo
echo =-=-=-=-=-=
echo

# Yep, easy auto watch SCSS script
sass --watch assets/scss/style_contacts_s.scss:assets/css/style_contacts_c.css &
sass --watch assets/scss/style_footer_s.scss:assets/css/style_footer_c.css &
sass --watch assets/scss/style_main_s.scss:assets/css/style_main_c.css &
sass --watch assets/scss/hamburger_s.scss:assets/css/hamburger_c.css &
sass --watch assets/scss/style_expirience_s.scss:assets/css/style_expirience_c.css &

wait
