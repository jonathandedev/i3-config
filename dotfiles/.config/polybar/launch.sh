#!/usr/bin/env bash

# Terminate already running bar instances
# If all your bars have ipc enabled, you can use 
polybar-msg cmd quit
# Otherwise you can use the nuclear option:
# killall -q polybar

# Launch bar1 and bar2
echo "---" | tee -a /tmp/polybar-header.log
# echo "---" | tee -a /tmp/polybar-dummy.log
# polybar dummy 2>&1 | tee -a /tmp/polybar-dummy.log & disown
polybar header 2>&1 | tee -a /tmp/polybar-header.log & disown

echo "Bars launched..."
