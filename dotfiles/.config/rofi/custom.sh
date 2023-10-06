#!/usr/bin/env bash

dir="$HOME/.config/rofi/styles"
theme='basic-text'

## Run
rofi \
    -show run \
    -theme ${dir}/${theme}.rasi
